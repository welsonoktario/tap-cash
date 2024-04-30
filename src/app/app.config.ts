import {
  ApplicationConfig,
  LOCALE_ID,
  importProvidersFrom,
} from "@angular/core";
import { provideHttpClient, withFetch } from "@angular/common/http";
import { provideRouter } from "@angular/router";

import { routes } from "./app.routes";
import { registerLocaleData } from "@angular/common";
import localeId from "@angular/common/locales/id";
import { EyeIcon, EyeOffIcon, LucideAngularModule } from "lucide-angular";

registerLocaleData(localeId);

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient(withFetch()),
    { provide: LOCALE_ID, useValue: "id-ID" },
    importProvidersFrom(LucideAngularModule.pick({ EyeOffIcon, EyeIcon })),
  ],
};
