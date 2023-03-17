import { expect } from 'chai';
import { Zoho } from '.';
import { zoho } from './config/config';
import { ZohoConfig } from './config/zoho-config';

describe('zoho init', () => {
  it('Initialization Is Successful', () => {
    const clientId = ZohoConfig.rightClientId;
    const clientSecret = ZohoConfig.rightClientSecret;
    Zoho.init(clientId, clientSecret);
    expect(zoho.clientId).equal(clientId);
    expect(zoho.clientSecret).equal(clientSecret);
  });
});
