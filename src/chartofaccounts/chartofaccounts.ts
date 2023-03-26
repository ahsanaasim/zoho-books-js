import { AxiosContentTypes, AxiosMethods, AxiosRequest, IRequestData } from '../config/axios';
import { baseUrl } from '../config/config';

export class ChartOfAccounts {
  chartOfAccountsUrl: string = baseUrl + 'chartofaccounts';
  static accountTypes = {
    other_asset: 'other_asset',
    other_current_asset: 'other_current_asset',
    cash: 'cash',
    bank: 'bank',
    fixed_asset: 'fixed_asset',
    other_current_liability: 'other_current_liability',
    credit_card: 'credit_card',
    long_term_liability: 'long_term_liability',
    other_liability: 'other_liability',
    equity: 'equity',
    income: 'income',
    other_income: 'other_income',
    expense: 'expense',
    cost_of_goods_sold: 'cost_of_goods_sold',
    other_expense: 'other_expense',
    accounts_receivable: 'accounts_receivable',
    accounts_payable: 'accounts_payable',
  };

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

  public async post(token: string, params: any, data: any): Promise<any> {
    const requestData: IRequestData = {
      token,
      url: this.chartOfAccountsUrl,
      method: AxiosMethods.post,
      contentType: AxiosContentTypes.json,
      params,
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
