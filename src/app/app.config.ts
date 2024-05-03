import { ApplicationConfig, LOCALE_ID } from "@angular/core";
import { provideRouter } from "@angular/router";

import { routes } from "./app.routes";
import { registerLocaleData } from "@angular/common";
import localeId from "@angular/common/locales/id";

registerLocaleData(localeId);

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    { provide: LOCALE_ID, useValue: "id-ID" },
  ],
};
