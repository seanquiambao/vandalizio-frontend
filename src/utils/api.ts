type API = {
  url: string;
  method: "GET" | "POST" | "PUT" | "DELETE" | "PATCH";
  body?: object;
  headers?: HeadersInit;
};

export const api = async ({ url, method, body, headers }: API) => {
  const response = await fetch(url, {
    method,
    body: JSON.stringify(body),
    headers,
  });

  const data = await response.json();

  return data;
};
