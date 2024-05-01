const baseUrl = "https://a190-36-78-10-144.ngrok-free.app" as const;

export const environment = {
  production: false,
  baseUrl,
  apiUrl: baseUrl + "/api/v1",
};
