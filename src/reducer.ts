import { combineReducers, AnyAction } from 'redux';
import { StateType } from 'typesafe-actions';

import { pokemonReducer } from './pokemonReducer';

const applicationReducer = combineReducers({
  pokemon: pokemonReducer,
});

export type ApplicationState = StateType<typeof applicationReducer>;

export const rootReducer = (
  state: ApplicationState | undefined,
  action: AnyAction,
) => {
  return applicationReducer(state, action);
};
