import { Contacts } from './contacts';
import { expect } from 'chai';
import { zoho } from '../config/config';

export const deleteContact = async (contactId: number, organizationId: string) => {
  const data = await new Contacts().delete(zoho.accessToken, contactId, {
    organization_id: organizationId,
  });
  expect(data.message).to.equal('The contact has been deleted.');
};
