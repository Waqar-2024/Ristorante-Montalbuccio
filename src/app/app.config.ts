import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { consumerDestroy } from '@angular/core/primitives/signals';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
     provideRouter(routes),
      provideAnimationsAsync(),
      provideHttpClient(),
    ]
};

// if want to use translate through ngx like specifi some content then use this consumerDestroy


// import { ApplicationConfig, importProvidersFrom, provideZoneChangeDetection } from '@angular/core';
// import { provideRouter } from '@angular/router';
// import { HttpClient, HttpClientModule, provideHttpClient } from '@angular/common/http';
// import { routes } from './app.routes';
// import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
// import { TranslateLoader,TranslateModule } from '@ngx-translate/core';
// import {TranslateHttpLoader} from '@ngx-translate/http-loader'

// export function HttpLoaderFactory(http:HttpClient){
//   return new TranslateHttpLoader(http, '/assets/i18n/', '.json')
// }

// export const appConfig: ApplicationConfig = {
//   providers: [
//     provideZoneChangeDetection({ eventCoalescing: true }),
//      provideRouter(routes),
//      importProvidersFrom(
//       HttpClientModule,
//       TranslateModule.forRoot({
//         loader: {
//           provide : TranslateLoader,
//           useFactory : HttpLoaderFactory,
//           deps : [HttpClient]
//         }
//       })
//      ),
//       provideAnimationsAsync(),
//       provideHttpClient(),
//     ]
// };