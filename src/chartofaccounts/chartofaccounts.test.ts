import { expect } from 'chai';
import { ZohoConfig } from '../config/zoho-config';
import { Zoho } from '..';
import { zoho } from '../config/config';
import { IRefreshToken } from '../interfaces/IRefreshToken';
import { OAuth } from '../oauth/oauth';
import { ChartOfAccounts } from './chartofaccounts';

describe('Get All Chart of Accounts', function () {
  const rightClientId = ZohoConfig.rightClientId;
  const rightClientSecret = ZohoConfig.rightClientSecret;
  const rightRefreshToken = ZohoConfig.rightRefreshToken;
  const organizationId = ZohoConfig.organizationId;

  this.beforeAll(async () => {
    Zoho.init(rightClientId, rightClientSecret);
    const oauth = (await new OAuth().refresh(rightRefreshToken)) as IRefreshToken;
    zoho.accessToken = oauth.access_token;
  });

  it('Get All chart of accounts success', async () => {
    const data = await new ChartOfAccounts().get(zoho.accessToken, organizationId);
    expect(data.message).to.equal('success');
  });

  it('Response for wrong orgnazationd id is correct', async () => {
    const data = await new ChartOfAccounts().get(zoho.accessToken, '123');
    expect(data.code).to.equal(6041);
  });

  it('Response for wrong accessToken is correct', async () => {
    const data = await new ChartOfAccounts().get('123', organizationId);
    expect(data.code).to.equal(57);
  });
});

describe('Chart of Accounts', () => {
  const rightClientId = ZohoConfig.rightClientId;
  const rightClientSecret = ZohoConfig.rightClientSecret;
  const rightRefreshToken = ZohoConfig.rightRefreshToken;
  const organizationId = ZohoConfig.organizationId;
  let accountId = '';

  before(async () => {
    Zoho.init(rightClientId, rightClientSecret);
    const oauth = (await new OAuth().refresh(rightRefreshToken)) as IRefreshToken;
    zoho.accessToken = oauth.access_token;
  });

  it('Create Success', async () => {
    const data = await new ChartOfAccounts().post(
      zoho.accessToken,
      { organization_id: organizationId },
      {
        account_name: (Math.random() + 1).toString(36).substring(7) + ' Acc',
        account_type: ChartOfAccounts.accountTypes.income,
      },
    );
    accountId = data.chart_of_account.account_id;
    expect(data.message).to.equal('The account has been created.');
  });

  it('Update Success', async () => {
    const updateName = (Math.random() + 1).toString(36).substring(7) + ' UAcc';
    const data = await new ChartOfAccounts().update(
      zoho.accessToken,
      accountId,
      { organization_id: organizationId },
      {
        account_name: updateName,
        account_type: 'income',
      },
    );
    expect(data.message).to.equal('The details of the account have been updated.');
    expect(data.chart_of_account.account_name).to.equal(updateName);
  });

  it('Get One Success', async () => {
    const data = await new ChartOfAccounts().getOne(zoho.accessToken, accountId, {
      organization_id: organizationId,
    });

    expect(data.message).to.equal('success');
  });

  it('Delete Success', async () => {
    const data = await new ChartOfAccounts().delete(zoho.accessToken, accountId, {
      organization_id: organizationId,
    });
    expect(data.message).to.equal('The account has been deleted.');
  });
});
