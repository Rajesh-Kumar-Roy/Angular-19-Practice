
import { provideRouter } from '@angular/router';


import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import routeConfig from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routeConfig
  )]
};
