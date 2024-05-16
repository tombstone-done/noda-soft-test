import { RequestOptions } from "../types/api";

const BASE_URL = "https://jsonplaceholder.typicode.com";

export const request = async (
  path: string,
  options?: RequestOptions
): Promise<Response> => {
  const params = options?.params;
  const baseUrl = new URL(path, BASE_URL);

  if (params) {
    Object.keys(params).forEach((key) =>
      baseUrl.searchParams.append(key, String(params[key]))
    );
  }

  return await fetch(baseUrl.toString(), options);
};
