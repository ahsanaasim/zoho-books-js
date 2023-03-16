import axios from 'axios';
import { baseAuthUrl, zoho, getAxiosConfig } from '../config/config';
import { IError } from '../interfaces/IError';
import { IRefreshToken } from '../interfaces/IRefreshToken';

export class OAuth {
  authenticationUrl: string = baseAuthUrl + 'token';

  public async refresh(refreshToken: string): Promise<IRefreshToken | IError> {
    const data = {
      client_id: zoho.clientId,
      grant_type: 'refresh_token',
      client_secret: zoho.clientSecret,
      refresh_token: refreshToken,
    };
    const config = getAxiosConfig('post', this.authenticationUrl, {}, data, {
      'Content-Type': 'application/x-www-form-urlencoded',
    });
    return new Promise((resolve, reject) => {
      axios(config)
        .then((response) => {
          resolve(response.data);
        })
        .catch((error) => {
          reject(error);
        });
    });
  }
}
