import React, { useReducer, createContext } from 'react';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Button from '@material-ui/core/Button';
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import DayjsUtils from "@date-io/dayjs";

import dayjs from 'dayjs'
import "dayjs/locale/ja";

import AddScheduleDialog from './component/AddScheduleDialog/presentation'

import dialogReducer from './reducer/dialog/reducer'
import {
    dialogScheduleOpen,
    dialogScheduleClose
} from './reducer/dialog/actions'

import {PickerSample} from './sample'

dayjs.locale("ja");

// DialogのOpen/Close Context
export const DialogContext = createContext()

const Calender = () => {
    // reducer定義
    const [dialogState, dialogDispatch] = useReducer(dialogReducer, {
        isScheduleDialogOpen: false,
        selectedDate: "2021/11/11"
    })

    return (
        <>
            <MuiPickersUtilsProvider utils={DayjsUtils}>
                <DialogContext.Provider value={dialogState}>
                    <ButtonGroup >
                        <Button onClick={()=>{dialogDispatch(dialogScheduleOpen())}} >hoge</Button>
                    </ButtonGroup>
                    <AddScheduleDialog closeFunction={() => {dialogDispatch(dialogScheduleClose())}} />
                </DialogContext.Provider>
                <PickerSample />
            </MuiPickersUtilsProvider>
        </>
    );

}

export default Calender;