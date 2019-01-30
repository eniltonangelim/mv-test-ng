import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { FilterByNomePipe } from './pipes/filter-by-nome.pipe';
import { PessoaFilterComponent } from './filters/pessoa-filter/pessoa-filter.component';
import { HttpClientModule } from '@angular/common/http';
import { MatTableModule } from "@angular/material/table";
import { MatCardModule } from "@angular/material/card";
import { MatInputModule } from "@angular/material/input";
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from "@angular/material/button";
import { MatDividerModule } from "@angular/material/divider";
import { MatSelectModule } from "@angular/material/select";
import { MatToolbarModule } from "@angular/material/toolbar";
import { ToolbarComponent } from './nav/toolbar/toolbar.component';
import { IdadePipe } from './pipes/idade.pipe';


@NgModule({
  declarations: [IdadePipe, FilterByNomePipe, PessoaFilterComponent, ToolbarComponent],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    MatTableModule,
    MatCardModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatDividerModule,
    MatSelectModule,
    MatToolbarModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatTableModule,
    MatCardModule,
    MatInputModule,
    MatIconModule,
    MatSelectModule,
    MatDividerModule,
    MatButtonModule,
    MatToolbarModule,
    FilterByNomePipe,
    IdadePipe,
    PessoaFilterComponent,
    FlexLayoutModule,
    ToolbarComponent
  ]
})
export class SharedModule { }