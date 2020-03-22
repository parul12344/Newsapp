import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SectionComponent } from './section/section.component';


const routes: Routes = [
  {
    path:"news/:name",
    component:SectionComponent
  },
  {
    path:"category/:name",
    component:SectionComponent
  } ,
  { path: '',
  redirectTo: '/news/in',
  pathMatch: 'full'
},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
