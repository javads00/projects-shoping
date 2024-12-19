import { ErrorResponseInterface } from "../interfaces";

export * from "./useDispatch";
export * from "./useSelector";
export * from "./useFetch";
export * from "./useAuth";
//useForm
export type ValidationHandlersType = {
  name: string;
  event: (value: string) => boolean | string;
};

export type MappedValidation<T> = {
  [Prop in keyof T as `RoleFor${Capitalize<Prop & string>}`]+?: (
    param: T[Prop]
  ) => boolean | string;
};

export interface UseFormInterface<T> {
  validations?: MappedValidation<T>;
}
//useFetch

export interface RequestInterface<TPayload, TQuery> {
  header?: object;
  body?: TPayload;
  query?: TQuery;
  method: "Post" | "Get" | "Delete" | "Put";
  url: string;
  reuqestType?: "form-data";
}
export interface ResponseInterface<T> {
  data?: T;
  status: "error" | "success" | "pending";
  error: Error | null;
  reFetch?: () => void;
}
export interface UseFetchRequest<TData, TPayload, TQuery> {
  request: RequestInterface<TPayload, TQuery>;
  errorHandler?: (error: ErrorResponseInterface | null) => void;
  onSuccess?: (data: TData) => void;
  fetchInitial?: boolean;
}
export interface UseFetchResponse<TData, TPayload, TQuery> {
  data?: ResponseInterface<TData>;
  reFetch: (payload?: TPayload, query?: TQuery) => void;
  refetchByInvalidKeys: () => void;
  requestDetail: RequestInterface<TPayload, TQuery>;
  isLoading: boolean;
}
