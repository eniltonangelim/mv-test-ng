import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/pessoa',
    pathMatch: 'full'
  },  
  {
    path: 'pessoa',
    loadChildren: './pessoa/pessoa.module#PessoaModule'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
