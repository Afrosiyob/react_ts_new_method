import { AxiosResponse, Method } from "axios";
import { _IRequestProps } from "core/interfaces";

import { http } from "./setup";

// Generic verbs

export async function httpRequest<T>(
  method: Method,
  url: string,
  params: unknown
): Promise<AxiosResponse<T>> {
  return await http.request<T>({
    method,
    url,
    params,
  });
}

// Initial verbs

export async function get(
  URL: string,
  payload: _IRequestProps
): Promise<object> {
  const { id } = payload;
  const response = await http.get(`/${URL}/${id ?? 0}`);

  return response;
}

export async function getAll(URL: string): Promise<object> {
  const response = await http.get(`/${URL}`);

  return response;
}

export async function create(
  URL: string,
  payload: _IRequestProps
): Promise<object> {
  const { body } = payload;
  const response = await http.post(`/${URL}`, body);

  return response;
}

export async function update(
  URL: string,
  payload: _IRequestProps
): Promise<object> {
  const { id, body } = payload;
  const response = await http.put(`/${URL}/${id ?? 0}`, body);

  return response;
}

export async function remove(
  URL: string,
  payload: _IRequestProps
): Promise<object> {
  const { id } = payload;
  const response = await http.delete(`/${URL}/${id ?? 0}`);

  return response;
}

export async function removeAll(URL: string): Promise<object> {
  const response = await http.delete(`/${URL}`);

  return response;
}
