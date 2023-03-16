import axios from 'axios';
import { baseAuthUrl, zoho } from '../config/config';

export class OAuth {
  authenticationUrl: string = baseAuthUrl + 'token';

  public async refresh(refreshToken: string): Promise<any> {
    const data = {
      client_id: zoho.clientId,
      grant_type: 'refresh_token',
      client_secret: zoho.clientSecret,
      refresh_token: refreshToken,
    };
    const config = {
      method: 'post',
      maxBodyLength: Infinity,
      url: this.authenticationUrl,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      data: data,
    };
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
