import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { PessoasComponent } from '../pessoas/pessoas.component';
import { PessoaModule } from '../pessoa.module';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pessoa-list',
  templateUrl: './pessoa-list.component.html',
  styleUrls: ['./pessoa-list.component.css']
})
export class PessoaListComponent implements OnInit {

  @Input() pessoas: PessoaModule[];
  @Output() requestDelete: EventEmitter<number>;

  displayedColumns: string[] = [
    'id',
    'nome',
    'email',
    'cpf',
    'idade',
    'quantidadeTelefones',
    'acoes'
  ];

  constructor(private router: Router) {
    this.requestDelete = new EventEmitter<number>()
  }

  ngOnInit() {
  }

  toEdit(id: number){
    this.router.navigate(['pessoa/',id,'detail'])
  }

  sendRequestDelete(id: number) {
    this.requestDelete.emit(id);
  }

}
