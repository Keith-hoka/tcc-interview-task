import { StateType, getType, ActionType } from 'typesafe-actions';
import { produce } from 'immer';
import * as pokemonActions from './pokemonActions';

type PokemonReducer = {
  count: number;
};

const initState: PokemonReducer = {
  count: 0,
};

export type PokemonAction = ActionType<typeof pokemonActions>;

export const pokemonReducer = (state = initState, action: PokemonAction) => {
  switch (action.type) {
    case getType(pokemonActions.pokemonTest):
      return state;
    default:
      return state;
  }
};

export type PokemonState = StateType<typeof pokemonReducer>;

export default { appReducer: pokemonReducer };
