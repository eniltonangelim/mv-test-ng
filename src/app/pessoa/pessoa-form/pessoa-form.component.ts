import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormArray, FormBuilder, Validators } from '@angular/forms';
import { PessoaModel } from '../shared/model/pessoa.model';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { TelefoneModel } from '../shared/model/telefone.model';
import * as moment from 'moment';
import { PessoasService } from '../shared/services/pessoas.service';
import { filter, map, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-pessoa-form',
  templateUrl: './pessoa-form.component.html',
  styleUrls: ['./pessoa-form.component.css']
})
export class PessoaFormComponent implements OnInit {

  pessoa: PessoaModel;
  pessoaFormGroup: FormGroup;
  pessoaTelefones: FormArray;
  listDDD: number[] = Array.from(Array(99).keys()).map(i => 1 + i);
  title: String;

  constructor(
    private formBuilder: FormBuilder,
    private activateRoute: ActivatedRoute,
    private router: Router,
    private pessoasService: PessoasService) {
      this.pessoa =  activateRoute.snapshot.data.pessoa || {telefones: [{} as TelefoneModel]};
      this.getPageTitle();
  }

  ngOnInit(){
    this.setFormGroup();
  }

  setFormGroup(): void {
    this.pessoaFormGroup = this.formBuilder.group({
      id  : this.pessoa ? this.pessoa.id : null,
      nome  : [this.pessoa ? this.pessoa.nome  : null,  Validators.required],
      cpf : [this.pessoa ? this.pessoa.cpf : null, Validators.required],
      dataNascimento  : [this.pessoa ? this.getLocalDate(this.pessoa.dataNascimento)  : null, Validators.required],
      email : [this.pessoa ? this.pessoa.email : null, Validators.compose([Validators.email, Validators.required])],
      telefones: this.builderTelefones(this.pessoa.telefones)
    });
  }
  
  private builderTelefones(telefones?: TelefoneModel[]): FormArray {
    const telefonesGroup = telefones.map(
      telefone  => {
        return this.formBuilder.group({
          id  : telefone  ? telefone.id : null,
          ddd : [telefone  ? telefone.ddd  : '85', Validators.required],
          numero  : [telefone  ? telefone.numero : null, Validators.required]
        });
      }
    )
    return this.formBuilder.array(telefonesGroup);
  }

  get telefoneForms(): FormArray {
    return this.pessoaFormGroup.get('telefones') as FormArray;
  }
  
  deleteTelefone(index: number): void {
    this.telefoneForms.removeAt(index);
  }

  addTelefone(required?: boolean): void {
    const phone = this.formBuilder.group({
      id: new FormControl(null),
      ddd: new FormControl(null),
      numero: new FormControl(null)
    });
    this.telefoneForms.push(phone);
  }

  onCreatePessoa(pessoa: PessoaModel){
    pessoa.dataNascimento = moment(pessoa.dataNascimento, 'DD/MM/YYYY').toDate();
    this.pessoasService.create(pessoa).subscribe(
      data => {
        this.router.navigate(['pessoa']);
      }
    );
  }
  
  getLocalDate(date: Date) {
    const localDate = moment(date, 'YYYY-MM-DD');
    return localDate.format('DDMMYYYY');
  }

  onUpdatePessoa(pessoa: PessoaModel){
    pessoa.dataNascimento = moment(pessoa.dataNascimento, 'DD/MM/YYYY').toDate();
    console.log(pessoa.dataNascimento);
    console.log(pessoa.dataNascimento.toLocaleDateString());
    
    this.pessoasService.update(pessoa).subscribe(
      data => {
        this.router.navigate(['pessoa']);
      }
    );
  }

  getErrorMessage(field: string) {
    return this.pessoaFormGroup.get(field).hasError('required') ? `O campo ${field} é obrigatório` : ''; 
  }
 
  gotoHome(): void {
    this.router.navigate(['pessoa']);
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
