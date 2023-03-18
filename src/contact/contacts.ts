import { IContactResponse } from '../interfaces/IContact';
import { AxiosContentTypes, AxiosMethods, AxiosRequest, IRequestData } from '../config/axios';
import { baseUrl } from '../config/config';
import { IGeneralResponse } from '../interfaces/IGeneralResponse';
import { IEmailStatementResponse } from '../interfaces/IEmailStatement';
import { IContactCommentResponse } from '../interfaces/IContactComment';
import { IAddressesResponse, IAddressResponse } from '../interfaces/IAddress';
import { ICreditnoteRefundsResponse } from '../interfaces/ICreditnoteRefund';

export class Contacts {
  contactsUrl: string = baseUrl + 'contacts';

  public async getOne(token: string, id: number, params: any): Promise<IContactResponse> {
    const requestData: IRequestData = {
      token,
      url: this.contactsUrl + '/' + id,
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
      url: this.contactsUrl,
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

  public async post(token: string, data: any): Promise<IContactResponse> {
    const requestData: IRequestData = {
      token,
      url: this.contactsUrl,
      method: AxiosMethods.post,
      contentType: AxiosContentTypes.json,
      params: undefined,
      body: data,
    };
    return new Promise((resolve, reject) => {
      AxiosRequest(requestData, resolve, reject);
    });
  }

  public async update(token: string, id: number, params: any, data: any): Promise<IContactResponse> {
    const requestData: IRequestData = {
      token,
      url: this.contactsUrl + '/' + id,
      method: AxiosMethods.put,
      contentType: AxiosContentTypes.json,
      params,
      body: data,
    };
    return new Promise((resolve, reject) => {
      AxiosRequest(requestData, resolve, reject);
    });
  }

  public async delete(token: string, id: number, params: any): Promise<any> {
    const requestData: IRequestData = {
      token,
      url: this.contactsUrl + '/' + id,
      method: AxiosMethods.delete,
      contentType: AxiosContentTypes.urlencoded,
      params,
      body: undefined,
    };
    return new Promise((resolve, reject) => {
      AxiosRequest(requestData, resolve, reject);
    });
  }

  public async markAsActive(token: string, id: number, params: any): Promise<IGeneralResponse> {
    const requestData: IRequestData = {
      token,
      url: this.contactsUrl + '/' + id + '/active',
      method: AxiosMethods.post,
      contentType: AxiosContentTypes.json,
      params: params,
      body: undefined,
    };
    return new Promise((resolve, reject) => {
      AxiosRequest(requestData, resolve, reject);
    });
  }

  public async markAsInactive(token: string, id: number, params: any): Promise<IGeneralResponse> {
    const requestData: IRequestData = {
      token,
      url: this.contactsUrl + '/' + id + '/inactive',
      method: AxiosMethods.post,
      contentType: AxiosContentTypes.json,
      params: params,
      body: undefined,
    };
    return new Promise((resolve, reject) => {
      AxiosRequest(requestData, resolve, reject);
    });
  }

  // contact cannot be inactive and contact person must have email address 
  public async enablePortalAccess(token: string, id: number, params: any, body: any): Promise<IGeneralResponse> {
    const requestData: IRequestData = {
      token,
      url: this.contactsUrl + '/' + id + '/portal/enable',
      method: AxiosMethods.post,
      contentType: AxiosContentTypes.json,
      params: params,
      body: body,
    };
    return new Promise((resolve, reject) => {
      AxiosRequest(requestData, resolve, reject);
    });
  }

  public async enablePaymentReminders(token: string, id: number, params: any): Promise<IGeneralResponse> {
    const requestData: IRequestData = {
      token,
      url: this.contactsUrl + '/' + id + '/paymentreminder/enable',
      method: AxiosMethods.post,
      contentType: AxiosContentTypes.json,
      params: params,
      body: undefined,
    };
    return new Promise((resolve, reject) => {
      AxiosRequest(requestData, resolve, reject);
    });
  }

  public async disablePaymentReminders(token: string, id: number, params: any): Promise<IGeneralResponse> {
    const requestData: IRequestData = {
      token,
      url: this.contactsUrl + '/' + id + '/paymentreminder/disable',
      method: AxiosMethods.post,
      contentType: AxiosContentTypes.json,
      params: params,
      body: undefined,
    };
    return new Promise((resolve, reject) => {
      AxiosRequest(requestData, resolve, reject);
    });
  }

  public async emailStatement(token: string, id: number, params: any, body: any): Promise<IGeneralResponse> {
    const requestData: IRequestData = {
      token,
      url: this.contactsUrl + '/' + id + '/statements/email',
      method: AxiosMethods.post,
      contentType: AxiosContentTypes.json,
      params: params,
      body: body,
    };
    return new Promise((resolve, reject) => {
      AxiosRequest(requestData, resolve, reject);
    });
  }

  public async getStatementMailContent(token: string, id: number, params: any): Promise<IEmailStatementResponse> {
    const requestData: IRequestData = {
      token,
      url: this.contactsUrl + '/' + id + '/statements/email',
      method: AxiosMethods.get,
      contentType: AxiosContentTypes.json,
      params: params,
      body: undefined,
    };
    return new Promise((resolve, reject) => {
      AxiosRequest(requestData, resolve, reject);
    });
  }

  public async emailContact(token: string, id: number, params: any, body: any): Promise<IGeneralResponse> {
    const requestData: IRequestData = {
      token,
      url: this.contactsUrl + '/' + id + '/email',
      method: AxiosMethods.post,
      contentType: AxiosContentTypes.json,
      params: params,
      body: body,
    };
    return new Promise((resolve, reject) => {
      AxiosRequest(requestData, resolve, reject);
    });
  }

  public async listComments(token: string, id: number, params: any): Promise<IContactCommentResponse> {
    const requestData: IRequestData = {
      token,
      url: this.contactsUrl + '/' + id + '/comments',
      method: AxiosMethods.get,
      contentType: AxiosContentTypes.json,
      params: params,
      body: undefined,
    };
    return new Promise((resolve, reject) => {
      AxiosRequest(requestData, resolve, reject);
    });
  }

  public async addAdditionalAddress(token: string, id: number, params: any, body: any): Promise<IAddressResponse> {
    const requestData: IRequestData = {
      token,
      url: this.contactsUrl + '/' + id + '/address',
      method: AxiosMethods.post,
      contentType: AxiosContentTypes.json,
      params: params,
      body: body,
    };
    return new Promise((resolve, reject) => {
      AxiosRequest(requestData, resolve, reject);
    });
  }

  public async getContactAddresses(token: string, id: number, params: any): Promise<IAddressesResponse> {
    const requestData: IRequestData = {
      token,
      url: this.contactsUrl + '/' + id + '/address',
      method: AxiosMethods.get,
      contentType: AxiosContentTypes.json,
      params: params,
      body: undefined,
    };
    return new Promise((resolve, reject) => {
      AxiosRequest(requestData, resolve, reject);
    });
  }

  public async editAdditionalAddress(
    token: string,
    id: number,
    addressId: string,
    params: any,
    body: any,
  ): Promise<IAddressResponse> {
    const requestData: IRequestData = {
      token,
      url: this.contactsUrl + '/' + id + '/address/' + addressId,
      method: AxiosMethods.put,
      contentType: AxiosContentTypes.json,
      params: params,
      body: body,
    };
    return new Promise((resolve, reject) => {
      AxiosRequest(requestData, resolve, reject);
    });
  }

  public async deleteAdditionalAddress(token: string, id: number, addressId: string, params: any): Promise<any> {
    const requestData: IRequestData = {
      token,
      url: this.contactsUrl + '/' + id + '/address/' + addressId,
      method: AxiosMethods.delete,
      contentType: AxiosContentTypes.urlencoded,
      params,
      body: undefined,
    };
    return new Promise((resolve, reject) => {
      AxiosRequest(requestData, resolve, reject);
    });
  }

  public async listRefunds(token: string, id: number, params: any): Promise<ICreditnoteRefundsResponse> {
    const requestData: IRequestData = {
      token,
      url: this.contactsUrl + '/' + id + '/refunds',
      method: AxiosMethods.get,
      contentType: AxiosContentTypes.json,
      params: params,
      body: undefined,
    };
    return new Promise((resolve, reject) => {
      AxiosRequest(requestData, resolve, reject);
    });
  }

  public async track1099(token: string, id: number, params: any): Promise<IGeneralResponse> {
    const requestData: IRequestData = {
      token,
      url: this.contactsUrl + '/' + id + '/track1099',
      method: AxiosMethods.post,
      contentType: AxiosContentTypes.json,
      params: params,
      body: undefined,
    };
    return new Promise((resolve, reject) => {
      AxiosRequest(requestData, resolve, reject);
    });
  }

  public async untrack1099(token: string, id: number, params: any): Promise<IGeneralResponse> {
    const requestData: IRequestData = {
      token,
      url: this.contactsUrl + '/' + id + '/untrack1099',
      method: AxiosMethods.post,
      contentType: AxiosContentTypes.json,
      params: params,
      body: undefined,
    };
    return new Promise((resolve, reject) => {
      AxiosRequest(requestData, resolve, reject);
    });
  }
}
