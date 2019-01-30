import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { PessoaModel } from '../model/pessoa.model';
import { PessoasService } from '../services/pessoas.service';

@Injectable({ providedIn: 'root' })

export class PessoaResolver implements Resolve<Observable<PessoaModel>> {
    constructor (private pessoaService: PessoasService) { }

    resolve(route: ActivatedRouteSnapshot, 
        state: RouterStateSnapshot): Observable<PessoaModel> {            
        return this.pessoaService.get(route.params.id);
    }
}
