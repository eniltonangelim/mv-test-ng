import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { PessoaModel } from '../model/pessoa.model';
import { environment } from 'src/environments/environment';

import { catchError } from "rxjs/operators";
import { throwError } from 'rxjs';

const API_PESSOAS = environment.pessoa_api_url;

@Injectable({ providedIn: 'root' })
export class PessoasService {

    constructor(private http: HttpClient) { }

    list() {
        return this.http
            .get<PessoaModel[]>(API_PESSOAS).pipe(
                catchError(this.handlerError)
            );
    }

    get(id: number) {
        return this.http
            .get<PessoaModel>(`${API_PESSOAS}/${id}`).pipe(
                catchError(this.handlerError)
            )
    }

    update(pessoa: PessoaModel) {
        return this.http
            .put<PessoaModel>(`${API_PESSOAS}/${pessoa.id}`, pessoa, this.httpOptions()).pipe(
                catchError(this.handlerError)
            )
    }

    create(pessoa: PessoaModel) {
        return this.http
            .post<PessoaModel>(API_PESSOAS, pessoa, this.httpOptions()).pipe(
                catchError(this.handlerError)
            )
    }

    delete(id: number) {
        return this.http
            .delete<PessoaModel>(`${API_PESSOAS}/${id}`).pipe(
                catchError(this.handlerError)
            )
    }

    private handlerError(httpErrorResponse: HttpErrorResponse) {

        // todo: checar o evento 

        return throwError(
            'Tente novamente mais tarde ;)'
        )

    }

    private httpOptions(token?: string): any {
        return {
          headers: new HttpHeaders({
            'Content-Type': 'application/json'
          })
        };
      }
    
}