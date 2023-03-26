import { zoho } from './config/config';
import { OAuth } from './oauth/oauth';
import { ChartOfAccounts } from './chartofaccounts/chartofaccounts';
import { Contacts } from './contact/contacts';
import { ContactPerson } from './contactperson/contactperson';
import { Estimates } from './estimates/estimates';

export const Zoho = {
  init: (clientId: string, clientSecret: string) => {
    zoho.clientId = clientId;
    zoho.clientSecret = clientSecret;
  },
  OAuth,
  ChartOfAccounts,
  Contacts,
  ContactPerson,
  Estimates,
};
