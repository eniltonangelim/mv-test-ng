import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { PessoaModel } from '../shared/model/pessoa.model';
import { PessoasService } from '../shared/services/pessoas.service';
import { filter, map, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-pessoas',
  templateUrl: './pessoas.component.html',
  styleUrls: ['./pessoas.component.css']
})
export class PessoasComponent {

  pessoas: PessoaModel[];

  title: string;
  labelFilterNome = "Nome:";
  labelFilterCPF  = "CPF:";
  filterNome: string  = '';
  filterCpf: string   = '';

  constructor(private activateRoute: ActivatedRoute,
    private router: Router,
    private pesssoasService: PessoasService) { 
    this.pessoas = this.activateRoute.snapshot.data.pessoas;
    this.getPageTitle();
  }

  delete(id: number) {
    this.pesssoasService.delete(id).subscribe(
      (data) => {
        console.log(` Delete response ${data}`);
        this.pessoas = this.pessoas.filter(e => e.id != id);
      }
    );
  }

  search(){
    this.pessoas = this.pessoas.filter(
      (pessoa: PessoaModel) => {
        const patternNome = RegExp(`^${this.filterNome}`, 'gi')
        const patternCpf = RegExp(`^${this.filterCpf}`, 'gi')
        
        return pessoa.nome.match(patternNome) && pessoa.cpf.match(patternCpf);
      }
    )
  }

  setFilterNome(event) {
    // Todo: pipe filter-by
    this.filterNome = event;
  };

  setFilterCpf(event) {
    // Todo: pipe filter-by

    this.filterCpf = event.replace(/[\.-]/g, ''); // mask: dynamic mask failed
  };

  gotoCreatePessoa(): void {
    this.router.navigate(['pessoa','novo']);
  }

  private getPageTitle(){
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .pipe(map(() => this.activateRoute))
      .pipe(map(route => {
        while (route.firstChild) route = route.firstChild;
        return route;
      }))
      .pipe(switchMap(route => route.data))
      .subscribe(
        event=> {
          this.title = event.title;
        }
      );
  }

}
