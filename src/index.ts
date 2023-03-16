import { zoho } from './config/config';

export const Zoho = (clientId: string, clientSecret: string) => {
  zoho.clientId = clientId;
  zoho.clientSecret = clientSecret;
};
