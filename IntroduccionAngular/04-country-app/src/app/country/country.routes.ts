import { Routes } from '@angular/router';
import { ByCapitalPageComponent } from './pages/by-capital-page/by-capital-page.component';

export const contryroutes: Routes = [
  {
    path: '',
    component: ByCapitalPageComponent,
  },
  /* {
    path: 'country',

  }, */
  /* {
    path: '**',
    redirectTo: '',
  } */


];

export default contryroutes;
