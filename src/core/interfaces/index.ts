import { ReactElement } from "react";

export interface _IReactElement {
  children: ReactElement;
}

export interface _ICounter {
  counter: number;
}

export interface _IPagination {
  page: number;
  size: number;
}

export interface _IRequestProps {
  id?: number | undefined;
  params?: object;
  pagination?: _IPagination;
  filters?: object;
  path?: string;
  body?: object;
}
