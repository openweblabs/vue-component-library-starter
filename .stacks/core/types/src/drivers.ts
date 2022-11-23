import type { DocumentOptions, DocumentsResults, EnqueuedTask, Hits, Index, IndexesResults, MeiliSearch, SearchParams, SearchResponse } from 'meilisearch'
import type { IndexOptions, Record, Records, SearchEngineSettings } from '.'

/**
 * the TableStore interface is primarily used to unify the persisting of data to localStorage
 */
export interface SearchEngineStorage {
  /**
   * The search engine index name.
   * i.e. the type of table, like `users`, `posts`, `products`, etc.
   */
  index?: string
  /**
   * The search engine results object.
   */
  results?: SearchResponse
  /**
   * The search engine hits object.
   */
  hits?: Hits
  /**
   * The number of hits to be returned per page.
   *
   * @default number 20
   */
  perPage: number
  /**
   * The current page number.
   *
   * @default number 1
   */
  currentPage: number
}

export type MaybePromise<T> = T | Promise<T>

type Search = any

export interface SearchEngineDriver {
  client: MeiliSearch

  // Indexes
  createIndex: (name: string, options?: IndexOptions) => MaybePromise<EnqueuedTask>
  getIndex: (name: string) => MaybePromise<Index>
  updateIndex?: (name: string, options: IndexOptions) => MaybePromise<EnqueuedTask>
  deleteIndex?: (name: string) => MaybePromise<EnqueuedTask>
  updateIndexSettings: (name: string, settings: SearchEngineSettings) => MaybePromise<EnqueuedTask>
  listAllIndexes: () => MaybePromise<IndexesResults<Index[]>>
  listAllIndices: () => MaybePromise<IndexesResults<Index[]>> // alternatives plural spelling

  // Records (MeiliSearch uses the term "documents")
  getRecord?: (key: string) => MaybePromise<Record>
  getRecords?: (key: string) => MaybePromise<DocumentsResults>
  createRecord?: (record: Record, indexName: string, options: DocumentOptions) => MaybePromise<EnqueuedTask>
  createRecords?: (records: Records, indexName: string, options: DocumentOptions) => MaybePromise<EnqueuedTask>
  createOrReplaceRecord?: (record: Record, indexName: string, options: DocumentOptions) => MaybePromise<EnqueuedTask>
  createOrUpdateRecord?: (record: Record, indexName: string, options: DocumentOptions) => MaybePromise<EnqueuedTask>
  deleteRecord?: (recordId: string | number, indexName: string) => MaybePromise<EnqueuedTask>
  deleteAllRecords?: (indexName: string) => MaybePromise<EnqueuedTask>
  batchDeleteRecords?: (recordIds: string[] | number[], indexName: string) => MaybePromise<EnqueuedTask>

  // Search
  search?: (query: string, indexName: string, options: SearchParams) => MaybePromise<Search>

  calculatePagination: any
  currentPage: any
  filterName: any
  filters: any
  goToNextPage: any
  goToPage: any
  goToPrevPage: any
  hits: any
  index: any
  lastPageNumber: any
  perPage: any
  query: any
  results: any
  searchFilters: any
  searchParams: any
  setTotalHits: any
  sort: any
  sorts: any
  totalPages: any
}

export type { DocumentOptions, Document as Record, Documents as Records, SearchParams, Settings as SearchEngineSettings, IndexOptions } from 'meilisearch'

export function isPrimitive(arg: any) {
  const type = typeof arg
  return arg === null || (type !== 'object' && type !== 'function')
}
