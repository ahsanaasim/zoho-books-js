import axios, { AxiosResponse } from 'axios';

const axiosManager = {};

export interface IAxiosHeader {
  'Content-Type': string;
  Authorization?: string;
}

export interface IRequestData {
  token: string;
  url: string;
  method: string;
  contentType: string;
  params: any; // This is used for query params
  body: any; // This is used to post params in the body
}

export const AxiosMethods = {
  get: 'get',
  post: 'post',
  delete: 'delete',
  put: 'put',
};

export const AxiosContentTypes = {
  json: 'application/json',
  urlencoded: 'application/x-www-form-urlencoded',
};

export const getHeaders = (token: string, contentType: string) => {
  var header: IAxiosHeader = {
    'Content-Type': 'application/x-www-form-urlencoded',
  };
  if (token) {
    header['Authorization'] = 'Bearer ' + token;
  }

  if (contentType) {
    header['Content-Type'] = contentType;
  }
  return header;
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

export const AxiosRequest = (data: IRequestData): Promise<AxiosResponse<any, any>> => {
  const config = getAxiosConfig(
    data.method,
    data.url,
    data.params,
    data.body,
    getHeaders(data.token, data.contentType),
  );

  return axios(config);
};
