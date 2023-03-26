import { AxiosContentTypes, AxiosDelete, AxiosMethods, AxiosRequest, IRequestData } from '../config/axios';
import { baseUrl } from '../config/config';
import { IGeneralResponse } from '../interfaces/IGeneralResponse';
import { IContactPersonResponse, IContactPersonsResponse } from '../interfaces/IContactPerson';

export class ContactPerson {
  contactPersonUrl: string = baseUrl + 'contacts/contactpersons';

  public async getOne(token: string, id: number, params: any): Promise<IContactPersonResponse> {
    return new Promise((resolve, reject) => {
      AxiosRequest(
        {
          token,
          url: this.contactPersonUrl + '/' + id,
          method: AxiosMethods.get,
          contentType: '',
          params,
          body: undefined,
        },
        resolve,
        reject,
      );
    });
  }

  public async get(token: string, organizationId: string): Promise<IContactPersonsResponse> {
    return new Promise((resolve, reject) => {
      AxiosRequest(
        {
          token,
          url: this.contactPersonUrl,
          method: AxiosMethods.get,
          contentType: AxiosContentTypes.urlencoded,
          params: {
            organization_id: organizationId,
          },
          body: undefined,
        },
        resolve,
        reject,
      );
    });
  }

  public async post(token: string, params: any, data: any): Promise<IContactPersonResponse | IGeneralResponse> {
    return new Promise((resolve, reject) => {
      AxiosRequest(
        {
          token,
          url: this.contactPersonUrl,
          method: AxiosMethods.post,
          contentType: AxiosContentTypes.json,
          params: params,
          body: data,
        },
        resolve,
        reject,
      );
    });
  }

  public async update(token: string, id: number, params: any, data: any): Promise<IContactPersonResponse> {
    return new Promise((resolve, reject) => {
      AxiosRequest(
        {
          token,
          url: this.contactPersonUrl + '/' + id,
          method: AxiosMethods.put,
          contentType: AxiosContentTypes.json,
          params,
          body: data,
        },
        resolve,
        reject,
      );
    });
  }

  public async delete(token: string, id: number, params: any): Promise<IGeneralResponse> {
    return new Promise((resolve, reject) => {
      AxiosDelete(this.contactPersonUrl + '/' + id, token, params, resolve, reject);
    });
  }

  public async markAsPrimaryContactPerson(token: string, id: number, params: any): Promise<IGeneralResponse> {
    return new Promise((resolve, reject) => {
      AxiosRequest(
        {
          token,
          url: this.contactPersonUrl + '/' + id + '/primary',
          method: AxiosMethods.post,
          contentType: AxiosContentTypes.json,
          params,
          body: undefined,
        },
        resolve,
        reject,
      );
    });
  }
}
