import { IRefreshToken } from '@interfaces/IRefreshToken';
import axios from 'axios';
import { baseAuthUrl, getAxiosConfig, zoho } from '@config/config';
import { IError } from '@interfaces/IError';

export class OAuth {
  authenticationUrl: string = baseAuthUrl + 'token';

  public async refresh(refreshToken: string): Promise<IRefreshToken | IError> {
    const data = {
      client_id: zoho.clientId,
      grant_type: 'refresh_token',
      client_secret: zoho.clientSecret,
      refresh_token: refreshToken,
    };
    const config = getAxiosConfig('post', this.authenticationUrl, data);
    return new Promise(function (resolve, reject) {
      axios(config)
        .then(function (response) {
          resolve(response.data);
        })
        .catch(function (error) {
          reject(error);
        });
    });
  }
}
