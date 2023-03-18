import { IPageContext } from "./IPageContext";

export interface IContactComment {
  comment_id: number;
  contact_id: number;
  contact_name: string;
  description: string;
  commented_by_id: number;
  commented_by: string;
  date: string;
  date_description: string;
  time: string;
  transaction_id: number;
  transaction_type: string;
  is_entity_deleted: boolean;
  operation_type: string;
}

export interface IContactCommentResponse {
  code: number;
  message: string;
  contact_comments: IContactComment[];
  page_context: IPageContext;
}
