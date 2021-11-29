export interface ApiOptions {
  baseUrl: string;
  retryCalls?: string;
  retryDelay?: string;
  endpoints?: ApiEndpoints;
}

export interface ApiEndpoints {
  generate: string;
}
