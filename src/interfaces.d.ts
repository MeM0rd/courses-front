export interface ListPage<T> {
    items: T[];
    meta: PaginationMeta;
}
export interface PaginationMeta {
    from: number;
    to: number;
    currentPage: number;
    perPage: number;
    total: number;
    lastPage: number;
}
