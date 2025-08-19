type API = {
  url: string;
  method: "GET" | "POST" | "PUT" | "DELETE" | "PATCH";
  body?: object;
  headers?: HeadersInit;
};

export const api = async ({ url, method, body, headers }: API) => {
  const response = await fetch(`${import.meta.env.SPRINGBOOT_URL_ADDRESS}/${url}`, {
    method,
    body: JSON.stringify(body),
    headers,
  });

  const data = await response.json();

  return data;
};
