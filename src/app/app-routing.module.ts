import {
  NgModule
} from '@angular/core';
import {
  RouterModule,
  Routes
} from '@angular/router';
import {
  ActivePostPageComponent
} from './active-post-page/active-post-page.component';
import {
  InactivePostPageComponent
} from './inactive-post-page/inactive-post-page.component';

const routes: Routes = [{
  path: "active",
  component: ActivePostPageComponent
}, {
  path: "inactive",
  component: InactivePostPageComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
