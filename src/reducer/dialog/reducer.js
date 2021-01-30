import {
  DIALOG_SCHEDULE_OPEN,
  DIALOG_SCHEDULE_CLOSE,
} from "./actions";

const init = {
  isScheduleDialogOpen: false
};

const dialogReducer = (state = init, action) => {
  console.log("func dialogReducer")
  const { type } = action;
  switch (type) {
    case DIALOG_SCHEDULE_OPEN:
      console.log("func dialogReducer " + DIALOG_SCHEDULE_OPEN)
      return { ...state, isScheduleDialogOpen: true };
    case DIALOG_SCHEDULE_CLOSE:
      console.log("func dialogReducer " + DIALOG_SCHEDULE_CLOSE)
      return { ...state, isScheduleDialogOpen: false };
    default:
      return state;
  }
};

export default dialogReducer;