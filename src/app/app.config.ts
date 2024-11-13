import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideState, provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { OperationEffects } from '../../projects/core-lib/src/lib/stores/states/operations/operation.effect';
import { operationReducer } from '../../projects/core-lib/src/lib/stores/states/operations/operation.reducer';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes), provideAnimationsAsync()
    , provideStore({operations : operationReducer}) ,provideEffects([OperationEffects]),provideStoreDevtools({
      maxAge: 25,
      logOnly: true,
    })]
};
