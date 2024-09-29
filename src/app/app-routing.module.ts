import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TeamDetailsComponent } from './home/auction/team-details/team-details.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: 'team-details', component: TeamDetailsComponent},
  { path: '', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
