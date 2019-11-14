/* eslint-disable import/prefer-default-export */
import { ModeEnum } from '../../components/ModeBar/types';

export type ModeState = ModeEnum;

export const SET_MODE = 'SET_MODE';

export interface SetModeAction {
  type: typeof SET_MODE;
  payload: ModeEnum;
}

export type ModeActions = SetModeAction;
