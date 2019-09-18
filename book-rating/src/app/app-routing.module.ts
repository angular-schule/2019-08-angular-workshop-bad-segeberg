import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  // "pathMatch: full", damit Pfad nicht als Präfix der anderen Ruten interpretiert wird
  // nötig hier bei leerem Pfad mit Resdirect
  { path: '', redirectTo: 'books', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
