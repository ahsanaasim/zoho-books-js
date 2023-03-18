import { AxiosContentTypes, AxiosMethods, AxiosRequest, IRequestData } from '../config/axios';
import { baseUrl } from '../config/config';

export class ChartOfAccounts {
  chartOfAccountsUrl: string = baseUrl + 'chartofaccounts';

  public async getOne(token: string, id: string, params: any): Promise<any> {
    const requestData: IRequestData = {
      token,
      url: this.chartOfAccountsUrl + '/' + id,
      method: AxiosMethods.get,
      contentType: '',
      params,
      body: undefined,
    };
    return new Promise((resolve, reject) => {
      AxiosRequest(requestData, resolve, reject);
    });
  }

  public async get(token: string, organizationId: string): Promise<any> {
    const requestData: IRequestData = {
      token,
      url: this.chartOfAccountsUrl,
      method: AxiosMethods.get,
      contentType: AxiosContentTypes.urlencoded,
      params: {
        organization_id: organizationId,
      },
      body: undefined,
    };

    return new Promise((resolve, reject) => {
      AxiosRequest(requestData, resolve, reject);
    });
  }

  public async post(token: string, data: any): Promise<any> {
    const requestData: IRequestData = {
      token,
      url: this.chartOfAccountsUrl,
      method: AxiosMethods.post,
      contentType: AxiosContentTypes.json,
      params: undefined,
      body: data,
    };
    return new Promise((resolve, reject) => {
      AxiosRequest(requestData, resolve, reject);
    });
  }

  public async update(token: string, id: string, params: any, data: any): Promise<any> {
    const requestData: IRequestData = {
      token,
      url: this.chartOfAccountsUrl + '/' + id,
      method: AxiosMethods.put,
      contentType: AxiosContentTypes.json,
      params,
      body: data,
    };
    return new Promise((resolve, reject) => {
      AxiosRequest(requestData, resolve, reject);
    });
  }

  public async delete(token: string, id: string, params: any): Promise<any> {
    const requestData: IRequestData = {
      token,
      url: this.chartOfAccountsUrl + '/' + id,
      method: AxiosMethods.delete,
      contentType: AxiosContentTypes.urlencoded,
      params,
      body: undefined,
    };
    return new Promise((resolve, reject) => {
      AxiosRequest(requestData, resolve, reject);
    });
  }
}
