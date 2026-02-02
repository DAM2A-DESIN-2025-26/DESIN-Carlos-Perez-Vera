import { bootstrapApplication } from '@angular/platform-browser';
import { RouteReuseStrategy, provideRouter, withPreloading, PreloadAllModules, withComponentInputBinding } from '@angular/router'; // Añadido withComponentInputBinding
import { IonicRouteStrategy, provideIonicAngular } from '@ionic/angular/standalone';
import { provideHttpClient } from '@angular/common/http'; // <--- 1. AÑADE ESTO

import { routes } from './app/app.routes';
import { AppComponent } from './app/app.component';

bootstrapApplication(AppComponent, {
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    provideIonicAngular(),
    // 2. He añadido withComponentInputBinding() dentro de provideRouter
    provideRouter(routes, withPreloading(PreloadAllModules), withComponentInputBinding()), 
    provideHttpClient(), 
  ],
});