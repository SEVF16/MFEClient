import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ShowInfoModule } from './show-info/show-info.module';

const routes: Routes = [
  { path: '', component:AppComponent},
  { path: 'mf', loadChildren: () => import('./show-info/show-info.module').then((m) => ShowInfoModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
