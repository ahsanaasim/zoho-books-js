export const baseUrl: string = 'https://books.zoho.com/api/v3/';
export const baseAuthUrl: string = 'https://accounts.zoho.com/oauth/v2/';
export var zoho = {
  clientId: '',
  clientSecret: '',
  accessToken: '',
};

export const getAxiosConfig = (method: string, url: string, params: any, data: any, headers: any) => {
  return {
    method: method,
    maxBodyLength: Infinity,
    url: url,
    headers: headers,
    params: params,
    data: data
  };
  if (method == 'get' || method == 'delete') {
    return {
      method: method,
      maxBodyLength: Infinity,
      url: url,
      headers: headers,
      params: params,
    };
  } else {
    return {
      method: method,
      maxBodyLength: Infinity,
      url: url,
      headers: headers,
      data: data,
    };
  }
};
