export const baseUrl: string = 'https://books.zoho.com/api/v2/';
export const baseAuthUrl: string = 'https://accounts.zoho.com/oauth/v2/';
export var zoho = {
  clientId: '',
  clientSecret: '',
};

export const getAxiosConfig = (method: string, url: string, data: any) => {
  return {
    method: method,
    maxBodyLength: Infinity,
    url: url,
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    data: data,
  };
};
