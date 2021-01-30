import React, { useState } from 'react'

import { DatePicker } from "@material-ui/pickers";

export const PickerSample = () => {
  const [date, setDate] = useState(new Date());
  return (
    <DatePicker
        label="label"
        value={date}
        onChange={setDate}
        format="YYYY/M/D"
        animateYearScrolling
    />
  );
}