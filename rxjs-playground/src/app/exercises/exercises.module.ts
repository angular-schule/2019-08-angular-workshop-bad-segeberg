import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { ExercisesRoutingModule } from './exercises-routing.module';
import { OverviewComponent } from './overview/overview.component';
import { MulticastComponent } from './2_multicast/multicast.component';
import { HistoryComponent } from './history/history.component';
import { HigherorderComponent } from './6_higherorder/higherorder.component';
import { GameScoreComponent } from './1_game-score/game-score.component';
import { ErrorHandlingComponent } from './3_error-handling/error-handling.component';
import { ChatComponent } from './5_chat/chat.component';
import { ChatWindowComponent } from './5_chat/chat-window/chat-window.component';
import { UnsubscribeComponent } from './4_unsubscribe/unsubscribe.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    ExercisesRoutingModule
  ],
  declarations: [
    OverviewComponent,
    MulticastComponent,
    HistoryComponent,
    HigherorderComponent,
    GameScoreComponent,
    ErrorHandlingComponent,
    ChatComponent,
    ChatWindowComponent,
    UnsubscribeComponent
  ]
})
export class ExercisesModule { }
