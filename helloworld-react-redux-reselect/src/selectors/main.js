import { createSelector } from "reselect";
import * as moment from 'moment';

const getState = state => state;

export const getBirthday = createSelector([getState], state =>
  state.get("birthday")
);

export const computeBirthdayDiff = createSelector([getBirthday], birthday =>
  moment
  .duration(moment(birthday)
  .diff(moment()))
  .days()
);

export const getName = createSelector([getState], (state) => state.get("name"));

export const computeHelloWorldMessage = createSelector(
    [getName, computeBirthdayDiff], 
    (name, birthdayDiff) => `${name} - You have ${birthdayDiff} days until your birthday!`
);

export const getClicks = createSelector([getState], (state) => state.get('counter'));
