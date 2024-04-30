import { ApplicationConfig, LOCALE_ID } from "@angular/core";
import { provideHttpClient, withFetch } from "@angular/common/http";
import { provideRouter } from "@angular/router";

import { routes } from "./app.routes";
import { registerLocaleData } from "@angular/common";
import localeId from "@angular/common/locales/id";

registerLocaleData(localeId);

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient(withFetch()),
    { provide: LOCALE_ID, useValue: "id-ID" },
  ],
};
