import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MovimentacaoNewComponent } from './componets/movimentacao-new/movimentacao-new.component';
import { MovimentacaoListComponent } from './components/movimentacao-list/movimentacao-list.component';

const routes: Routes = [
  {path: 'movimentacoes-new', component: MovimentacaoListComponent},
  {path: 'movimentacoes', component: MovimentacaoListComponent},
  {path: '', redirectTo: 'movimentacoes', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
