import { IEstimateResponse, IEstimatesResponse } from '../interfaces/IEstimate';
import { AxiosContentTypes, AxiosMethods, AxiosRequest, IRequestData } from '../config/axios';
import { baseUrl } from '../config/config';
import { IGeneralResponse } from '../interfaces/IGeneralResponse';

export class Estimates {
  estimatesUrl: string = baseUrl + 'estimates';

  public async getOne(token: string, id: string, params: any): Promise<any> {
    const requestData: IRequestData = {
      token,
      url: this.estimatesUrl + '/' + id,
      method: AxiosMethods.get,
      contentType: '',
      params,
      body: undefined,
    };
    return new Promise((resolve, reject) => {
      AxiosRequest(requestData, resolve, reject);
    });
  }

  public async get(token: string, organizationId: string): Promise<IEstimatesResponse> {
    const requestData: IRequestData = {
      token,
      url: this.estimatesUrl,
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

  public async post(token: string, params: any, data: any): Promise<IEstimateResponse> {
    const requestData: IRequestData = {
      token,
      url: this.estimatesUrl,
      method: AxiosMethods.post,
      contentType: AxiosContentTypes.json,
      params,
      body: data,
    };
    return new Promise((resolve, reject) => {
      AxiosRequest(requestData, resolve, reject);
    });
  }

  public async update(token: string, id: string, params: any, data: any): Promise<IEstimateResponse> {
    const requestData: IRequestData = {
      token,
      url: this.estimatesUrl + '/' + id,
      method: AxiosMethods.put,
      contentType: AxiosContentTypes.json,
      params,
      body: data,
    };
    return new Promise((resolve, reject) => {
      AxiosRequest(requestData, resolve, reject);
    });
  }

  public async delete(token: string, id: string, params: any): Promise<IGeneralResponse> {
    const requestData: IRequestData = {
      token,
      url: this.estimatesUrl + '/' + id,
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
