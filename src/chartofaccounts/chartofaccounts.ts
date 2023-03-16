import axios, { AxiosError } from 'axios';
import { baseUrl, getAxiosConfig } from '../config/config';

export class ChartOfAccounts {
  chartOfAccountsUrl: string = baseUrl + 'chartofaccounts';

  public async getOne(token: string, id: string, params: any): Promise<any> {
    const headers = {
      Authorization: 'Bearer ' + token,
      'Content-Type': 'application/x-www-form-urlencoded',
    };
    const config = getAxiosConfig('get', this.chartOfAccountsUrl + '/' + id, params, {}, headers);
    return new Promise((resolve, reject) => {
      axios(config)
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
    const headers = {
      Authorization: 'Bearer ' + token,
      'Content-Type': 'application/x-www-form-urlencoded',
    };
    const params = {
      organization_id: organizationId,
    };
    const config = getAxiosConfig('get', this.chartOfAccountsUrl, params, {}, headers);
    return new Promise((resolve, reject) => {
      axios(config)
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
    const headers = {
      Authorization: 'Bearer ' + token,
      'Content-Type': 'application/json',
    };
    const config = getAxiosConfig('post', this.chartOfAccountsUrl, {}, data, headers);
    return new Promise((resolve, reject) => {
      axios(config)
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
    const headers = {
      Authorization: 'Bearer ' + token,
      'Content-Type': 'application/json',
    };
    const config = getAxiosConfig('put', this.chartOfAccountsUrl + '/' + id, params, data, headers);
    return new Promise((resolve, reject) => {
      axios(config)
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
    const headers = {
      Authorization: 'Bearer ' + token,
      'Content-Type': 'application/x-www-form-urlencoded',
    };
    const config = getAxiosConfig('delete', this.chartOfAccountsUrl + '/' + id, params, {}, headers);
    return new Promise((resolve, reject) => {
      axios(config)
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
