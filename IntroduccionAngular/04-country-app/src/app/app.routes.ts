import { Routes } from '@angular/router';
import { HomePageComponent } from './shared/pages/home-page/home-page.component';

export const routes: Routes = [
  {
    path: '',
    component: HomePageComponent,
  },
   {
    //Esto es un lazy loading que baja la carga de los componentes de country.routes.ts
    //En vez de cargarlos todos al inicio, se cargan cuando se necesitan
    path: 'country',
    loadChildren: () => import('./country/country.routes')
  },
  {
    path: '**',
    redirectTo: '',
  }


];
