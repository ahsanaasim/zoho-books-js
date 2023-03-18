export interface IEmailStatement {
  body: string;
  subject: string;
  to_contacts: IToContact[];
  file_name: string;
  from_emails: IFromEmail[];
  contact_id: number;
}

export interface IToContact {
  first_name: string;
  selected: boolean;
  phone: string;
  email: string;
  contact_person_id: number;
  last_name: string;
  salutation: string;
  mobile: string;
}

export interface IFromEmail {
  user_name: string;
  selected: boolean;
  email: string;
}

export interface IEmailStatementResponse {
  code: number;
  message: string;
  data: IEmailStatement;
}
