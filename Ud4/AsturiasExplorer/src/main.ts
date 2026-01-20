import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { addIcons } from 'ionicons';
import { star, personCircleOutline, map, restaurant } from 'ionicons/icons';

import { AppModule } from './app/app.module';

addIcons({ star, personCircleOutline, map, restaurant });

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.log(err));