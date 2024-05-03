const baseUrl = "https://adapted-wolf-sensible.ngrok-free.app" as const;

export const environment = {
  production: false,
  baseUrl,
  apiUrl: baseUrl + "/api/v1",
};
