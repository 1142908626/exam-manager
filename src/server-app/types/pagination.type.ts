export type PaginationType<T> = {
  size: number
  page: number
  count: number
  data: T[]
}