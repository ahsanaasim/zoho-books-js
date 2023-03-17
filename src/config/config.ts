export const baseUrl: string = 'https://books.zoho.com/api/v3/';
export const baseAuthUrl: string = 'https://accounts.zoho.com/oauth/v2/';
export let zoho = {
  clientId: '',
  clientSecret: '',
  accessToken: '',
};

export const getAxiosConfig = (method: string, url: string, params: any, data: any, headers: any) => {
  return {
    method,
    maxBodyLength: Infinity,
    url,
    headers,
    params,
    data,
  };
};
