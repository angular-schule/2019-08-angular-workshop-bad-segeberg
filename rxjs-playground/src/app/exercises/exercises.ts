import { Exercises } from '../shared/types';
import { GameScoreComponent } from './1_game-score/game-score.component';
import { MulticastComponent } from './2_multicast/multicast.component';
import { ErrorHandlingComponent } from './3_error-handling/error-handling.component';
import { UnsubscribeComponent } from './4_unsubscribe/unsubscribe.component';
import { ChatComponent } from './5_chat/chat.component';
import { HigherorderComponent } from './6_higherorder/higherorder.component';

export const exercisesList: Exercises = [
    { name: 'Game Score: scan and reduce', folder: '1_game-score', component: GameScoreComponent },
    { name: 'Multicasting with Subjects', folder: '2_multicast', component: MulticastComponent },
    { name: 'Error handling', folder: '3_error-handling', component: ErrorHandlingComponent },
    { name: 'How to unsubscribe and avoid memory leaks', folder: '4_unsubscribe', component: UnsubscribeComponent },
    { name: 'Chat: Merging Observables', folder: '5_chat', component: ChatComponent },
    { name: 'Higher Order Observables with concatMap, mergeMap, switchMap, exhaustMap',
      folder: '6_higherorder', component: HigherorderComponent },
];
