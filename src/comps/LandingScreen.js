import * as React from 'react';
import { TextField, InputLabel, Select, MenuItem, Button } from '@material-ui/core'
import DateFnsUtils from "@date-io/date-fns"; // choose your lib
import { DateTimePicker, LocalizationProvider } from "@material-ui/pickers";

const LandingScreen = (props) => {

    const [selectedDate, handleDateChange] = React.useState(new Date());
    const [duration, setDuration] = React.useState(0)

    return (
        <div>
            <form onSubmit={props.setDataGotten()}>
                <LocalizationProvider dateAdapter={DateFnsUtils}>
                    <DateTimePicker
                        renderInput={(props) => <TextField {...props} />}
                        value={selectedDate}
                        onChange={(date) => handleDateChange(date)}
                    />
                </LocalizationProvider>
              <InputLabel shrink id="demo-simple-select-placeholder-label-label">
                Data format
              </InputLabel>
              <Select
                  id="demo-simple-select-outlined"
                  label="Class Duration"
                  value={duration}
                  onChange={(event) => {setDuration(event.target.value)}}
                  displayEmpty
                >
                  <MenuItem value={0.5} default >30 minutes</MenuItem>
                  <MenuItem value={1}>1 hour</MenuItem>
                  <MenuItem value={2}>2 hours</MenuItem>
                  <MenuItem value={4}>4 hours</MenuItem>
                </Select>
              <br />
              <Button variant="contained" color="primary" type='submit' className="locSubmitButton">
                Submit
              </Button>
            {/* </View> */}
          </form>
        </div>
    );
}

export default LandingScreen;