import { expect } from 'chai';
import { ZohoConfig } from 'src/config/zoho-config';
import { Zoho } from '..';
import { IError } from '../interfaces/IError';
import { IRefreshToken } from '../interfaces/IRefreshToken';
import { OAuth } from './oauth';

describe('Refreshing Token', () => {
  const rightClientId = ZohoConfig.rightClientId;
  const rightClientSecret = ZohoConfig.rightClientSecret;
  const rightRefreshToken = ZohoConfig.rightRefreshToken;
  const wrongClientId = '123';
  const wrongClientSecret = '123';
  const wrongRefreshToken = '123';

  it('Token is refreshed', async () => {
    Zoho.init(rightClientId, rightClientSecret);
    const data = (await new OAuth().refresh(rightRefreshToken)) as IRefreshToken;
    expect(data.access_token).to.not.equal(undefined);
    expect(data.token_type).to.equal('Bearer');
  });

  it('Client Id is not right', async () => {
    Zoho.init(wrongClientId, rightClientSecret);
    const data = (await new OAuth().refresh(rightRefreshToken)) as IError;
    expect(data.error).to.equal('invalid_client');
  });

  it('Client Secret is not right', async () => {
    Zoho.init(rightClientId, wrongClientSecret);
    const data = (await new OAuth().refresh(rightRefreshToken)) as IError;
    expect(data.error).to.equal('invalid_client_secret');
  });

  it('Refresh token is not right', async () => {
    Zoho.init(rightClientId, rightClientSecret);
    const data = (await new OAuth().refresh(wrongRefreshToken)) as IError;
    expect(data.error).to.equal('invalid_code');
  });
});
