import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { PessoasComponent } from './pessoas/pessoas.component';
import { PessoasResolver } from './shared/resolver/pessoas.resolver';
import { PessoaFormComponent } from './pessoa-form/pessoa-form.component';
import { PessoaResolver } from './shared/resolver/pessoa.resolver';


const routes: Routes = [
    {   
        path: '',
        component: PessoasComponent,
        resolve: { pessoas: PessoasResolver },
        data: {
            title: 'MV - Listagem de Pessoas'
        }
    },
    {
        path: 'novo',
        component: PessoaFormComponent,
        data: {
            title: 'MV - Cadastro de Pessoas'
        }
    },
    {
        path: ':id/detail',
        component: PessoaFormComponent,
        resolve: { pessoa: PessoaResolver },
        data: {
            title: 'MV - Atualização de Pessoas'
        }
    }
];

@NgModule({
    imports: [ RouterModule.forChild(routes) ],
    exports: [ RouterModule ]
})

export class PessoaRoutingModule{ }
