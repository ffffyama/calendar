import React, {useReducer} from "react";
import {
  Dialog,
  DialogContent,
  TextField,
  DialogActions,
  Button,
  Input,
  Grid,
  IconButton,
  Typography,
  Tooltip
} from "@material-ui/core";
import {
  LocationOnOutlined,
  NotesOutlined,
  AccessTime,
  Close
} from "@material-ui/icons";
import * as styles from "./style.css";
import { DatePicker } from "@material-ui/pickers";
import { withStyles } from "@material-ui/styles";

import addScheduleReducer, { addScheduleInit } from "../../reducer/addSchedule/reducer";
import { DialogContext } from '../../Calender'
import { 
  addScheduleSetValue,
  addScheduleStartEdit,
  addScheduleCloseDialog
} from "../../reducer/addSchedule/actions"

const spacer = { margin: "4px 0" };

const Title = withStyles({
  root: {
    fontSize: 22
  }
})(Input);

const AddScheduleDialog = ({closeFunction}) => {
  
  const [state, dispatch] = useReducer(addScheduleReducer, addScheduleInit)
  const isTitleInvalid = !state.form.title && state.isStartEdit;

  return (
    <DialogContext.Consumer>
      {
        dialogState => {
          return (
            <Dialog 
              open={dialogState.isScheduleDialogOpen} 
              onClose={()=>{closeFunction(); dispatch(addScheduleCloseDialog());}}
              maxWidth="xs" fullWidth>

              <DialogActions>
                <div className={styles.closeButton}>
                  <Tooltip title="閉じる" placement="bottom">
                    <IconButton 
                      size="small"
                      onClick={() => {closeFunction(); dispatch(addScheduleCloseDialog());}}>
                      <Close />
                    </IconButton>
                  </Tooltip>
                </div>
              </DialogActions>
      
              <DialogContent>
                <Title 
                  autoFocus
                  fullWidth
                  placeholder="タイトルと日時を追加"
                  value={state.form.title}
                  onChange={e => dispatch(addScheduleSetValue({ title: e.target.value }))}
                  onBlur={() => {dispatch(addScheduleStartEdit())}}
                  error={isTitleInvalid}
                />
                <div className={styles.validation}>
                  {isTitleInvalid && (
                    <Typography variant="caption" component="div" color="error">
                      タイトルは必須です。
                    </Typography>
                  )}
                </div>
                <Grid container spacing={1} alignItems="center" justify="space-between">
                  <Grid item>
                    <AccessTime />
                  </Grid>
                  <Grid item xs={10}>
                    <DatePicker
                      value={state.form.date}                      
                      onChange={d => dispatch(addScheduleSetValue({ date: d }))}
                      variant="inline"
                      format="YYYY年M月D日"
                      animateYearScrolling
                      disableToolbar
                      fullWidth
                      style={spacer}
                    />
                </Grid>
                </Grid>
                <Grid container spacing={1} alignItems="center" justify="space-between">
                  <Grid item>
                    <LocationOnOutlined />
                  </Grid>
                  <Grid item xs={10}>
                    <TextField 
                      style={spacer}
                      fullWidth
                      placeholder="場所を追加"
                      value={state.form.location}
                      onChange={e => dispatch(addScheduleSetValue({ location: e.target.value }))}
                    />
                  </Grid>
                </Grid>
                <Grid container spacing={1} alignItems="center" justify="space-between">
                  <Grid item>
                    <NotesOutlined />
                  </Grid>
                  <Grid item xs={10}>
                    <TextField 
                      style={spacer}
                      fullWidth
                      placeholder="説明を追加"
                      value={state.form.description}
                      onChange={e => dispatch(addScheduleSetValue({ description: e.target.value }))}
                    />
                  </Grid>
                </Grid>
              </DialogContent>
              <DialogActions>
                <Button
                  color="primary"
                  variant="outlined"
                  // onClick={saveSchedule}
                  disabled={!state.form.title}
                >
                  保存
                </Button>
              </DialogActions>
            </Dialog>            
          )
        }
      }
    </DialogContext.Consumer>
  );
};

export default AddScheduleDialog;