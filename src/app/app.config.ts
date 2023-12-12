import { type ApplicationConfig } from '@angular/core'
import { importProvidersFrom } from '@angular/core'
import { provideRouter } from '@angular/router'
import { provideHttpClient } from '@angular/common/http'

import { routes } from './app.routes'
import { provideStore, StoreModule } from '@ngrx/store'
import { usersReducer } from './state/users/reducer'

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideHttpClient(), provideStore(), importProvidersFrom(StoreModule.forRoot({ users: usersReducer }))]
}
