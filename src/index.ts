import { zoho } from './config/config';
import { OAuth } from './oauth/oauth';
import { ChartOfAccounts } from './chartofaccounts/chartofaccounts';

export const Zoho = {
  init: (clientId: string, clientSecret: string) => {
    zoho.clientId = clientId;
    zoho.clientSecret = clientSecret;
  },
  OAuth,
  ChartOfAccounts,
};
