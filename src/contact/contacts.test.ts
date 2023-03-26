import { expect } from 'chai';
import { ZohoConfig } from '../config/zoho-config';
import { Zoho } from '..';
import { zoho } from '../config/config';
import { IRefreshToken } from '../interfaces/IRefreshToken';
import { OAuth } from '../oauth/oauth';
import { Contacts } from './contacts';
import { deleteContact } from './contact-delete.test';

describe('Contacts', () => {
  const rightClientId = ZohoConfig.rightClientId;
  const rightClientSecret = ZohoConfig.rightClientSecret;
  const rightRefreshToken = ZohoConfig.rightRefreshToken;
  const organizationId = ZohoConfig.organizationId;
  let contactId = 0;
  let addressId = '';
  let contactPersonId = 0;
  const skipEmails = true;

  before(async () => {
    Zoho.init(rightClientId, rightClientSecret);
    const oauth = (await new OAuth().refresh(rightRefreshToken)) as IRefreshToken;
    zoho.accessToken = oauth.access_token;
  });

  it('Get All chart of accounts success', async () => {
    const data = await new Contacts().get(zoho.accessToken, organizationId);
    expect(data.message).to.equal('success');
  });

  it('Response for wrong organization is correct', async () => {
    const data = await new Contacts().get(zoho.accessToken, '123');
    expect(data.code).to.equal(6041);
  });

  it('Response for wrong accessToken is correct', async () => {
    const data = await new Contacts().get('123', organizationId);
    expect(data.code).to.equal(57);
  });

  it('Create Success', async () => {
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
            email: skipEmails ? '' : 'test@test.com',
          },
        ],
      },
    );
    contactId = data.contact.contact_id;
    contactPersonId = data.contact.contact_persons[0].contact_person_id;
    expect(data.message).to.equal('The contact has been added.');
  });

  it('Update Success', async () => {
    const updateName = (Math.random() + 1).toString(36).substring(7) + ' Contact';
    const data = await new Contacts().update(
      zoho.accessToken,
      contactId,
      { organization_id: organizationId },
      {
        contact_name: updateName,
      },
    );
    expect(data.message).to.equal('Contact information has been saved.');
    expect(data.contact.contact_name).to.equal(updateName);
  });

  it('Get One Success', async () => {
    const data = await new Contacts().getOne(zoho.accessToken, contactId, {
      organization_id: organizationId,
    });
    expect(data.message).to.equal('success');
  });

  it('Mark as Active Success', async () => {
    const data = await new Contacts().markAsActive(zoho.accessToken, contactId, {
      organization_id: organizationId,
    });
    expect(data.message).to.equal('The contact has been marked as active.');
  });

  it('Enable Portal Access Success', async () => {
    // const data = await new Contacts().enablePortalAccess(
    //   zoho.accessToken,
    //   contactId,
    //   {
    //     organization_id: organizationId,
    //   },
    //   {
    //     contact_persons: [
    //       {
    //         contact_person_id: contactPersonId,
    //       },
    //     ],
    //   },
    // );
    // console.log(data);
    // expect(data.message).to.equal('Client Portal preferences have been updated');
  });

  it('Mark as Inactive Success', async () => {
    const data = await new Contacts().markAsInactive(zoho.accessToken, contactId, {
      organization_id: organizationId,
    });
    expect(data.message).to.equal('The contact has been marked as inactive.');
  });

  it('Enable Payment Reminders Success', async () => {
    const data = await new Contacts().enablePaymentReminders(zoho.accessToken, contactId, {
      organization_id: organizationId,
    });
    expect(data.message).to.equal('All reminders associated with this contact have been enabled.');
  });

  it('Disable Payment Reminders Success', async () => {
    const data = await new Contacts().disablePaymentReminders(zoho.accessToken, contactId, {
      organization_id: organizationId,
    });
    expect(data.message).to.equal('All reminders associated with this contact have been stopped.');
  });

  it('Email Statement Success', async () => {
    if (skipEmails) {
      const data = await new Contacts().emailStatement(
        zoho.accessToken,
        contactId,
        {
          organization_id: organizationId,
        },
        {
          send_from_org_email_id: false,
          to_mail_ids: ['test@test.com'],
          cc_mail_ids: ['test@test.com'],
          subject: 'Statement of transactions with Zillium Inc',
          body: 'Dear Customer,     <br/>We have attached with this email a list of all your transactions with us for the period 01 Sep 2013 to 30 Sep 2013. You can write to us or call us if you need any assistance or clarifications.     <br/>Thanks for your business.<br/>Regards<br/>Zillium Inc',
        },
      );
      expect(data.message).to.satisfy(
        (message: string) =>
          message === 'Statement has been sent to the customer.' ||
          message === "The mail count in this plan has reached today's limit of 50 mails.",
      );
    }
  });

  it('Get Statement Mail Content Success', async () => {
    const data = await new Contacts().getStatementMailContent(zoho.accessToken, contactId, {
      organization_id: organizationId,
    });
    expect(data.message).to.equal('success');
  });

  it('Email Contact Success', async () => {
    if (skipEmails) {
      const data = await new Contacts().emailContact(
        zoho.accessToken,
        contactId,
        {
          organization_id: organizationId,
        },
        {
          to_mail_ids: ['test@test.com'],
          subject: 'Welcome to Zillium Inc .',
          body: 'Dear Customer,     <br/>We have attached with this email a list of all your transactions with us for the period 01 Sep 2013 to 30 Sep 2013. You can write to us or call us if you need any assistance or clarifications.     <br/>Thanks for your business.<br/>Regards<br/>Zillium Inc',
          attachments: 'string',
        },
      );
      expect(data.message).to.satisfy(
        (message: string) =>
          message === 'Email has been sent.' ||
          message === "The mail count in this plan has reached today's limit of 50 mails.",
      );
    }
  });

  it('List Comments Success', async () => {
    const data = await new Contacts().listComments(zoho.accessToken, contactId, {
      organization_id: organizationId,
    });
    expect(data.message).to.equal('success');
  });

  it('Add Additional Address Success', async () => {
    const data = await new Contacts().addAdditionalAddress(
      zoho.accessToken,
      contactId,
      {
        organization_id: organizationId,
      },
      {
        attention: 'Mr.John',
        address: '4900 Hopyard Rd',
        street2: 'Suite 310',
        city: 'Pleasanton',
        state: 'CA',
        zip: 94588,
        country: 'U.S.A',
        fax: '+1-925-924-9600',
        phone: '+1-925-921-9201',
      },
    );
    addressId = data.address_info.address_id;
    expect(data.message).to.equal('The address has been created.');
  });

  it('Get Contact Addresses Success', async () => {
    const data = await new Contacts().getContactAddresses(zoho.accessToken, contactId, {
      organization_id: organizationId,
    });
    expect(data.message).to.equal('success');
  });

  it('Edit Additional Address Success', async () => {
    const data = await new Contacts().editAdditionalAddress(
      zoho.accessToken,
      contactId,
      addressId,
      {
        organization_id: organizationId,
      },
      {
        attention: 'Mr.Bohn',
      },
    );
    expect(data.address_info.attention).to.equal('Mr.Bohn');
    expect(data.message).to.equal('The address has been updated.');
  });

  it('Delete Additional Address Success', async () => {
    const data = await new Contacts().deleteAdditionalAddress(zoho.accessToken, contactId, addressId, {
      organization_id: organizationId,
    });
    expect(data.message).to.equal('The address has been deleted.');
  });

  it('List Refunds Success', async () => {
    const data = await new Contacts().listRefunds(zoho.accessToken, contactId, {
      organization_id: organizationId,
    });
    expect(data.message).to.equal('success');
  });

  it('Track 1099 Success', async () => {
    const data = await new Contacts().track1099(zoho.accessToken, contactId, {
      organization_id: organizationId,
    });
    expect(data.message).to.equal('1099 tracking is enabled.');
  });

  it('Untrack 1099 Success', async () => {
    const data = await new Contacts().untrack1099(zoho.accessToken, contactId, {
      organization_id: organizationId,
    });
    expect(data.message).to.equal('1099 tracking is disabled.');
  });

  it('Delete Success', async () => {
    deleteContact(contactId, organizationId);
  });
});
