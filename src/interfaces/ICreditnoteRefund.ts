import { IPageContext } from './IPageContext';

export interface ICreditnoteRefundsResponse {
  code: number;
  message: string;
  creditnote_refunds: ICreditnoteRefund[];
  page_context: IPageContext;
}

export interface ICreditnoteRefund {
  creditnote_refund_id: number;
  creditnote_id: number;
  date: string;
  refund_mode: string;
  reference_number: number;
  creditnote_number: string;
  customer_name: string;
  description: string;
  amount_bcy: number;
  amount_fcy: number;
}
