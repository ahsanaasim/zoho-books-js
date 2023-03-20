import { IPageContext } from './IPageContext';

export interface IContactPerson {
  contact_id: number;
  contact_person_id: number;
  salutation: string;
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  mobile: string;
  is_primary_contact: boolean;
  skype: string;
  designation: string;
  department: string;
  is_added_in_portal: boolean;
}

export interface IContactPersonResponse {
  code: number;
  message: string;
  contact_person: IContactPerson;
}

export interface IContactPersonsResponse {
  code: number;
  message: string;
  contact_person: IContactPerson[];
  page_context: IPageContext;
}
