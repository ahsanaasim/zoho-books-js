import { IBillingAddress, IShippingAddress } from './IAddress';
import { IContactPerson } from './IContactPerson';
import { ICustomField } from './ICustomField';
import { IDefaultTemplates } from './IDefaultTemplates';

export interface IContact {
  contact_id: number;
  contact_name: string;
  company_name: string;
  has_transaction: boolean;
  contact_type: string;
  customer_sub_type: string;
  credit_limit: number;
  is_portal_enabled: boolean;
  language_code: string;
  is_taxable: boolean;
  tax_id: number;
  tds_tax_id: string;
  tax_name: string;
  tax_percentage: number;
  tax_authority_id: number;
  tax_exemption_id: number;
  tax_authority_name: string;
  tax_exemption_code: string;
  place_of_contact: string;
  gst_no: string;
  vat_treatment: string;
  tax_treatment: string;
  tax_regime: string;
  is_tds_registered: boolean;
  gst_treatment: string;
  is_linked_with_zohocrm: boolean;
  website: string;
  owner_id: number;
  primary_contact_id: number;
  payment_terms: number;
  payment_terms_label: string;
  currency_id: number;
  currency_code: string;
  currency_symbol: string;
  opening_balance_amount: number;
  exchange_rate: number;
  outstanding_receivable_amount: number;
  outstanding_receivable_amount_bcy: number;
  unused_credits_receivable_amount: number;
  unused_credits_receivable_amount_bcy: number;
  status: string;
  payment_reminder_enabled: boolean;
  custom_fields: ICustomField[];
  billing_address: IBillingAddress;
  shipping_address: IShippingAddress;
  facebook: string;
  twitter: string;
  contact_persons: IContactPerson[];
  default_templates: IDefaultTemplates;
  notes: string;
  created_time: string;
  last_modified_time: string;
}

export interface IContactResponse {
  code: number;
  message: string;
  contact: IContact;
}
