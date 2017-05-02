import { PREVIOUS_DATE, NEXT_DATE } from './actionTypes';

export function goToNextDate() {
  return { type: NEXT_DATE };
}

export function goToPreviousDate() {
  return { type: PREVIOUS_DATE };
}
