import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShowInfoComponent } from './show-info.component';
import { AppComponent } from '../app.component';

const routes: Routes = [{path: 'mf', component:ShowInfoComponent}, {path: '', component:AppComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShowInfoRoutingModule { }
