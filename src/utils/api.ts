type API = {
  url: string;
  method: "GET" | "POST" | "PUT" | "DELETE" | "PATCH";
  body?: object;
  headers?: HeadersInit;
};

export const api = async ({
  url,
  method,
  body,
  headers = { "Content-Type": "application/json" },
}: API) => {
  const response = await fetch(
    `http://${import.meta.env.VITE_SPRINGBOOT_URL_ADDRESS}/${url}`,
    {
      method,
      body: JSON.stringify(body),
      headers,
    },
  );

  const data = await response.json();

  return data;
};
