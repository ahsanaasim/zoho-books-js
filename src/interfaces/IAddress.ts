export interface IBillingAddress {
  attention: string;
  address: string;
  street2: string;
  state_code: string;
  city: string;
  state: string;
  zip: number;
  country: string;
  fax: string;
  phone: string;
}

export interface IShippingAddress {
  attention: string;
  address: string;
  street2: string;
  state_code: string;
  city: string;
  state: string;
  zip: number;
  country: string;
  fax: string;
  phone: string;
}

export interface IAddress {
  address_id: string;
  address_type: string;
  attention: string;
  address: string;
  street2: string;
  city: string;
  state_code: string;
  state: string;
  zip: string;
  country: string;
  country_code: string;
  phone: string;
  fax: string;
  latitude: string;
  longitude: string;
  update_existing_transactions_address: string;
}

export interface IAddressResponse {
  code: number;
  message: string;
  address_info: IAddress;
}

export interface IAddressesResponse {
  code: number;
  message: string;
  addresses: IAddress[];
}
