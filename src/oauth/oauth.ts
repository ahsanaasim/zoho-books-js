import { AxiosMethods, AxiosRequest, IRequestData } from '../config/axios';
import { baseAuthUrl, zoho } from '../config/config';
import { IError } from '../interfaces/IError';
import { IRefreshToken } from '../interfaces/IRefreshToken';

export class OAuth {
  authenticationUrl: string = baseAuthUrl + 'token';

  public async refresh(refreshToken: string): Promise<IRefreshToken | IError> {
    const requestData: IRequestData = {
      token: '',
      url: this.authenticationUrl,
      method: AxiosMethods.post,
      contentType: '',
      params: undefined,
      body: {
        client_id: zoho.clientId,
        grant_type: 'refresh_token',
        client_secret: zoho.clientSecret,
        refresh_token: refreshToken,
      },
    };

    return new Promise((resolve, reject) => {
      return AxiosRequest(requestData)
        .then((response) => {
          resolve(response.data);
        })
        .catch((error) => {
          reject(error);
        });
    });
  }
}
