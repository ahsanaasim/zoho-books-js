import { expect } from 'chai';
import { ZohoConfig } from '../config/zoho-config';
import { Zoho } from '..';
import { zoho } from '../config/config';
import { IRefreshToken } from '../interfaces/IRefreshToken';
import { OAuth } from '../oauth/oauth';
import { Estimates } from './estimates';
import { Contacts } from '../contact/contacts';

describe('Get All Estimates', function () {
  const rightClientId = ZohoConfig.rightClientId;
  const rightClientSecret = ZohoConfig.rightClientSecret;
  const rightRefreshToken = ZohoConfig.rightRefreshToken;
  const organizationId = ZohoConfig.organizationId;

  this.beforeAll(async () => {
    Zoho.init(rightClientId, rightClientSecret);
    const oauth = (await new OAuth().refresh(rightRefreshToken)) as IRefreshToken;
    zoho.accessToken = oauth.access_token;
  });

  it('Get Estimates success', async () => {
    const data = await new Estimates().get(zoho.accessToken, organizationId);
    expect(data.message).to.equal('success');
  });

  it('Response for wrong orgnazationd id is correct', async () => {
    const data = await new Estimates().get(zoho.accessToken, '123');
    expect(data.code).to.equal(6041);
  });

  it('Response for wrong accessToken is correct', async () => {
    const data = await new Estimates().get('123', organizationId);
    expect(data.code).to.equal(57);
  });
});

describe('Estimates', () => {
  const rightClientId = ZohoConfig.rightClientId;
  const rightClientSecret = ZohoConfig.rightClientSecret;
  const rightRefreshToken = ZohoConfig.rightRefreshToken;
  const organizationId = ZohoConfig.organizationId;
  let contactId = 0;
  let estimateId = '';

  before(async () => {
    Zoho.init(rightClientId, rightClientSecret);
    const oauth = (await new OAuth().refresh(rightRefreshToken)) as IRefreshToken;
    expect(oauth.access_token).to.not.equal(undefined);
    expect(oauth.token_type).to.equal('Bearer');
    zoho.accessToken = oauth.access_token;

    const data = await new Contacts().post(
      zoho.accessToken,
      { organization_id: organizationId },
      {
        contact_name: (Math.random() + 1).toString(36).substring(7) + ' Contact',
        contact_type: 'customer',
        customer_sub_type: 'business',
        contact_persons: [
          {
            first_name: (Math.random() + 1).toString(36).substring(7) + ' Contact',
          },
        ],
      },
    );
    expect(data.message).to.equal('The contact has been added.');
    contactId = data.contact.contact_id;
  });

  it('Create Success', async () => {
    const data = await new Estimates().post(
      zoho.accessToken,
      { organization_id: organizationId },
      {
        customer_id: contactId,
        line_items: [
          {
            // item_id: ' ',
            // line_item_id: 982000000567021,
            name: 'Hard Drive',
            description: '500GB, USB 2.0 interface 1400 rpm, protective hard case.',
            item_order: 1,
            rate: 120,
            quantity: 1,
          },
        ],
      },
    );
    estimateId = data.estimate.estimate_id;
    expect(data.message).to.equal('The estimate has been created.');
  });

  it('Update Success', async () => {
    const updateName = (Math.random() + 1).toString(36).substring(7) + ' UAcc';
    const data = await new Estimates().update(
      zoho.accessToken,
      estimateId,
      { organization_id: organizationId },
      {
        salesperson_name: updateName,
      },
    );
    expect(data.estimate.salesperson_name).to.equal(updateName);
    expect(data.message).to.equal('Estimate information has been updated.');
  });

  it('Get One Success', async () => {
    const data = await new Estimates().getOne(zoho.accessToken, estimateId, {
      organization_id: organizationId,
    });

    expect(data.message).to.equal('success');
  });

  it('Delete Success', async () => {
    it('Delete Success', async () => {
      const data = await new Estimates().delete(zoho.accessToken, estimateId, {
        organization_id: organizationId,
      });
      expect(data.message).to.equal('The estimate has been deleted.');

      const data2 = await new Contacts().delete(zoho.accessToken, contactId, {
        organization_id: organizationId,
      });
      expect(data2.message).to.equal('The contact has been deleted.');
    });
  });
});
