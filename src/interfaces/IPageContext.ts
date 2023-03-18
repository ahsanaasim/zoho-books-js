export interface IPageContext {
    page: number
    per_page: number
    has_more_page: boolean
    applied_filter: string
    sort_column: string
    sort_order: string
  }