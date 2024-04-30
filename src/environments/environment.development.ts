const baseUrl = "https://4e37-110-137-192-136.ngrok-free.app" as const;

export const environment = {
  production: false,
  baseUrl,
  apiUrl: baseUrl + "/api/v1",
};
