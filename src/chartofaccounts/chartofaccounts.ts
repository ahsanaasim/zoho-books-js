import { AxiosError } from 'axios';
import { AxiosContentTypes, AxiosMethods, AxiosRequest, IRequestData } from '../config/axios';
import { baseUrl } from '../config/config';

export class ChartOfAccounts {
  chartOfAccountsUrl: string = baseUrl + 'chartofaccounts';

  public async getOne(token: string, id: string, params: any): Promise<any> {
    const requestData: IRequestData = {
      token: token,
      url: this.chartOfAccountsUrl + '/' + id,
      method: AxiosMethods.get,
      contentType: '',
      params: params,
      body: undefined,
    };
    return new Promise((resolve, reject) => {
      AxiosRequest(requestData)
        .then(
          (response) => {
            resolve(response.data);
          },
          (error) => {
            resolve(error.response.data);
          },
        )
        .catch((error: AxiosError) => {
          reject(error.response);
        });
    });
  }

  public async get(token: string, organizationId: string): Promise<any> {
    const requestData: IRequestData = {
      token: token,
      url: this.chartOfAccountsUrl,
      method: AxiosMethods.get,
      contentType: AxiosContentTypes.urlencoded,
      params: {
        organization_id: organizationId,
      },
      body: undefined,
    };

    return new Promise((resolve, reject) => {
      AxiosRequest(requestData)
        .then(
          (response) => {
            resolve(response.data);
          },
          (error) => {
            resolve(error.response.data);
          },
        )
        .catch((error: AxiosError) => {
          reject(error.response);
        });
    });
  }

  public async post(token: string, data: any): Promise<any> {
    const requestData: IRequestData = {
      token: token,
      url: this.chartOfAccountsUrl,
      method: AxiosMethods.post,
      contentType: AxiosContentTypes.json,
      params: undefined,
      body: data,
    };
    return new Promise((resolve, reject) => {
      AxiosRequest(requestData)
        .then(
          (response) => {
            resolve(response.data);
          },
          (error) => {
            resolve(error.response.data);
          },
        )
        .catch((error: AxiosError) => {
          reject(error.response);
        });
    });
  }

  public async update(token: string, id: string, params: any, data: any): Promise<any> {
    const requestData: IRequestData = {
      token: token,
      url: this.chartOfAccountsUrl + '/' + id,
      method: AxiosMethods.put,
      contentType: AxiosContentTypes.json,
      params: params,
      body: data,
    };
    return new Promise((resolve, reject) => {
      AxiosRequest(requestData)
        .then(
          (response) => {
            resolve(response.data);
          },
          (error) => {
            resolve(error.response.data);
          },
        )
        .catch((error: AxiosError) => {
          reject(error.response);
        });
    });
  }

  public async delete(token: string, id: string, params: any): Promise<any> {
    const requestData: IRequestData = {
      token: token,
      url: this.chartOfAccountsUrl + '/' + id,
      method: AxiosMethods.delete,
      contentType: AxiosContentTypes.urlencoded,
      params: params,
      body: undefined,
    };
    return new Promise((resolve, reject) => {
      AxiosRequest(requestData)
        .then(
          (response) => {
            resolve(response.data);
          },
          (error) => {
            resolve(error.response.data);
          },
        )
        .catch((error: AxiosError) => {
          reject(error.response);
        });
    });
  }
}
