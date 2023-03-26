import { expect } from 'chai';
import { ZohoConfig } from '../config/zoho-config';
import { Zoho } from '..';
import { zoho } from '../config/config';
import { IRefreshToken } from '../interfaces/IRefreshToken';
import { OAuth } from '../oauth/oauth';
import { ContactPerson } from './contactperson';
import { Contacts } from '../contact/contacts';
import { IContactPersonResponse } from '../interfaces/IContactPerson';

describe('Contact Person', () => {
  const rightClientId = ZohoConfig.rightClientId;
  const rightClientSecret = ZohoConfig.rightClientSecret;
  const rightRefreshToken = ZohoConfig.rightRefreshToken;
  const organizationId = ZohoConfig.organizationId;
  let contactId = 0;
  let contactPersonId = 0;

  before(async () => {
    Zoho.init(rightClientId, rightClientSecret);
    const oauth = (await new OAuth().refresh(rightRefreshToken)) as IRefreshToken;
    zoho.accessToken = oauth.access_token;
  });

  // it('Get All Contact Persons success', async () => {
  //   const data = await new ContactPerson().get(zoho.accessToken, organizationId);
  //   expect(data.message).to.equal('success');
  // });

  // it('Response for wrong organization is correct', async () => {
  //   const data = await new ContactPerson().get(zoho.accessToken, '123');
  //   expect(data.code).to.equal(6041);
  // });

  // it('Response for wrong accessToken is correct', async () => {
  //   const data = await new ContactPerson().get('123', organizationId);
  //   expect(data.code).to.equal(57);
  // });

  it('Create Failure due to invalid customer id', async () => {
    const data = await new ContactPerson().post(
      zoho.accessToken,
      { organization_id: organizationId },
      {
        first_name: 'Will',
        last_name: 'Smith',
      },
    );
    expect(data.message).to.equal('Invalid value passed for Customer ID');
  });

  it('Create Contact Person', async () => {
    const contact = await new Contacts().post(
      zoho.accessToken,
      { organization_id: organizationId },
      {
        contact_name: (Math.random() + 1).toString(36).substring(7) + ' Contact',
        contact_type: 'customer',
        customer_sub_type: 'business',
      },
    );
    contactId = contact.contact.contact_id;
    expect(contact.message).to.equal('The contact has been added.');

    const data = await new ContactPerson().post(
      zoho.accessToken,
      { organization_id: organizationId },
      {
        contact_id: contactId,
        first_name: 'Will',
        last_name: 'Smith',
      },
    );

    const contactPerson = data as IContactPersonResponse;
    contactPersonId = contactPerson.contact_person.contact_person_id;
    expect(data.message).to.equal("Contact person's information has been saved.");
  });

  it('Update Success', async () => {
    const updateName = (Math.random() + 1).toString(36).substring(7) + ' Contact';
    const data = await new ContactPerson().update(
      zoho.accessToken,
      contactPersonId,
      { organization_id: organizationId },
      {
        first_name: updateName,
      },
    );
    expect(data.message).to.equal("Contact person's information has been saved.");
    expect(data.contact_person.first_name).to.equal(updateName);
  });

  it('Get One Success', async () => {
    const data = await new ContactPerson().getOne(zoho.accessToken, contactPersonId, {
      organization_id: organizationId,
    });
    expect(data.message).to.equal('success');
  });

  it('Mark as primary contact person Success', async () => {
    const data = await new ContactPerson().markAsPrimaryContactPerson(zoho.accessToken, contactPersonId, {
      organization_id: organizationId,
    });
    expect(data.message).to.equal('This contact person has been marked as your primary contact person.');
  });

  it('Delete Success', async () => {
    const data = await new ContactPerson().delete(zoho.accessToken, contactPersonId, {
      organization_id: organizationId,
    });
    expect(data.message).to.equal('The contact person has been deleted.');

    const data2 = await new Contacts().delete(zoho.accessToken, contactId, {
      organization_id: organizationId,
    });
    expect(data2.message).to.equal('The contact has been deleted.');
  });
});
