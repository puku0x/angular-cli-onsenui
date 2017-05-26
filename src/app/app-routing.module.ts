import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'page1', pathMatch: 'full'},
  { path: 'page1', loadChildren: 'app/page1/page1.module#Page1Module' },
  { path: 'page2', loadChildren: 'app/page2/page2.module#Page2Module' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
