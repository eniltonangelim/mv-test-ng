import { TelefoneModel } from './telefone.model';

export interface PessoaModel {
    id?: number;
    nome: string;
    cpf: string;
    dataNascimento: Date;
    email: string;
    telefones: TelefoneModel[];
}