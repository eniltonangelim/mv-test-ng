import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PessoasComponent } from './pessoas/pessoas.component';
import { PessoaListComponent } from './pessoa-list/pessoa-list.component';
import { SharedModule } from './shared/shared.module';
import { PessoaRoutingModule } from './pessoa-routing.module';
import { PessoaFormComponent } from './pessoa-form/pessoa-form.component';
import { NgxMaskModule } from 'ngx-mask';

@NgModule({
  declarations: [PessoasComponent, 
    PessoaListComponent, 
    PessoaFormComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    PessoaRoutingModule,
    NgxMaskModule.forRoot()    
  ]
})
export class PessoaModule { }
