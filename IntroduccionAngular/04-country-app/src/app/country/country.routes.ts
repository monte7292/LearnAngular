import { Routes } from '@angular/router';
import { ByCapitalPageComponent } from './pages/by-capital-page/by-capital-page.component';
import { CountryLayoutComponent } from './layouts/CountryLayout/CountryLayout.component';

export const contryroutes: Routes = [
  {
    path: '',
    component: CountryLayoutComponent,
    //Rutas hijas
    children: [
      {
        path: 'by-capital',
        component: ByCapitalPageComponent,
      },
      {
        path: '**',
        redirectTo: 'by-capital',
      },
    ]
  },
  /* {
    path: 'country',

  }, */



];

export default contryroutes;
