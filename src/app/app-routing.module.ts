import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./views/home/home.module').then( m => m.HomePageModule)},
  {
    path: 'subject/:id',
    loadChildren: () => import('./views/subject/subject.module').then( m => m.SubjectPageModule)
  },
  {
    path: 'student/:id',
    loadChildren: () => import('./views/student/student.module').then( m => m.StudentPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
