import dayjs from "dayjs";
import {
  ADD_SCHEDULE_SET_VALUE,
  ADD_SCHEDULE_CLOSE_DIALOG,
  ADD_SCHEDULE_OPEN_DIALOG,
  ADD_SCHEDULE_START_EDIT
} from "./actions";

export const addScheduleInit = {
  form: {
    title: "",
    description: "",
    date: dayjs(),
    location: ""
  },
  isStartEdit: false
};

const addScheduleReducer = (state = addScheduleInit, action) => {
  console.debug("func reducer add " + action)
  const { type, payload } = action;

  switch (type) {
    case ADD_SCHEDULE_SET_VALUE:
      console.debug("func reducer add " + ADD_SCHEDULE_SET_VALUE)
      return { ...state, form: { ...state.form, ...payload } };

    case ADD_SCHEDULE_OPEN_DIALOG:
      return state;

    case ADD_SCHEDULE_CLOSE_DIALOG:
      return addScheduleInit;

    case ADD_SCHEDULE_START_EDIT:
      console.debug("func reducer add " + ADD_SCHEDULE_START_EDIT)
      return { ...state, isStartEdit: true };

    default:
      return state;
  }
};

export default addScheduleReducer;