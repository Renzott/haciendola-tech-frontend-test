import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideMarkdown } from 'ngx-markdown'

import { routes } from './app.routes';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MessageService } from 'primeng/api';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes),
  provideMarkdown(),
  importProvidersFrom(BrowserAnimationsModule),
  MessageService,
  ]
};
