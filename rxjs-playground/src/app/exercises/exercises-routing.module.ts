import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OverviewComponent } from './overview/overview.component';
import { GameScoreComponent } from './1_game-score/game-score.component';
import { MulticastComponent } from './2_multicast/multicast.component';
import { ErrorHandlingComponent } from './3_error-handling/error-handling.component';
import { UnsubscribeComponent } from './4_unsubscribe/unsubscribe.component';
import { ChatComponent } from './5_chat/chat.component';
import { HigherorderComponent } from './6_higherorder/higherorder.component';

const routes: Routes = [
  { path: 'exercises', component: OverviewComponent },
  { path: 'exercises/1', component: GameScoreComponent },
  { path: 'exercises/2', component: MulticastComponent },
  { path: 'exercises/3', component: ErrorHandlingComponent },
  { path: 'exercises/4', component: UnsubscribeComponent },
  { path: 'exercises/5', component: ChatComponent },
  { path: 'exercises/6', component: HigherorderComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExercisesRoutingModule { }
