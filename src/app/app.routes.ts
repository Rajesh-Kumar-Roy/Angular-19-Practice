import { Routes } from '@angular/router';
import { DetailsComponent } from './details/details.component';
import { HomeComponent } from './home/home.component';
import { SignalLearningComponent } from './Learning/signal-learning/signal-learning.component';
import { SignalDetailComponent } from './Learning/signal-detail/signal-detail.component';

const routeConfig: Routes = [
    {
      path: '',
      component: HomeComponent,
      title: 'Home page',
    },
    {
      path: 'signal',
      component: SignalLearningComponent,
      title: 'Signal',
    },
    {
      path: 'signalDetail/:id',
      component: SignalDetailComponent,
      title: 'Signal Detail',
    },
    {
      path: 'details/:id',
      component: DetailsComponent,
      title: 'Home details',
    },
  ];

  export default routeConfig;
