type SuccessResponse<T> = {
  data: Record<string, T>;
  error: false;
  message?: never;
};

type ErrorResponse<T> = {
  data: null;
  error: true;
  message: string;
};

export type APIResponse<T> = SuccessResponse<T> | ErrorResponse<T>;

export interface User {
  id: string;
  username: string;
  name: string;
  phone: string;
}
