/* eslint-disable import/prefer-default-export */
import { ModeEnum } from '../../components/ModeBar/types';
import { SET_MODE, SetModeAction } from './types';

export const setMode = (mode: ModeEnum): SetModeAction => ({
  type: SET_MODE,
  payload: mode,
});
