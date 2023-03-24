export interface IGeneratedCode {
  status_code: number;
  granttoken: IGranttoken;
  has_more: boolean;
  resource_name: string;
}

export interface IGranttoken {
  created_time: number;
  parent: IParent;
  Grant_token: string;
  is_restricted: number;
  client_type: number;
  created_by: string;
  client_id: string;
  zid: string;
  zid_type: number;
  client_zid: string;
  client_secret: string;
  client_name: string;
  status: number;
}

export interface IParent {
  oauth_app_group_id: string;
}
