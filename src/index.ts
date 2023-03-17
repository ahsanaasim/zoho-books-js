import { zoho } from './config/config';
export { OAuth } from './oauth/oauth';
export { ChartOfAccounts } from './chartofaccounts/chartofaccounts';

export const Zoho = (clientId: string, clientSecret: string) => {
  zoho.clientId = clientId;
  zoho.clientSecret = clientSecret;
};
