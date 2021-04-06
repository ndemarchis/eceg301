import * as React from 'react';
import { TextField, InputLabel, Select, MenuItem, Button } from '@material-ui/core'
import DateFnsUtils from "@date-io/date-fns"; // choose your lib
import { DateTimePicker, LocalizationProvider } from "@material-ui/pickers";

// https://dev.to/pnkfluffy/passing-data-from-child-to-parent-with-react-hooks-1ji3

const LandingScreen = (props) => {

    const [selectedDate, handleDateChange] = React.useState(new Date());
    const [duration, setDuration] = React.useState(0);

    return (
        <div style={{
          // position: "relative"
        }}>
          <div 
            style={{
              width: "20vw",
              height: "40vh",
              // position: "absolute", 
              // top: "50%", 
              // left: "50%", 
              // transform: "translate(-50%, -50%)"
            }}
          >
            <form onSubmit={(e) => {
              e.preventDefault();
              props.setFormSubmitted(true);
            }}>
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
                  style = {{
                    padding: "5px"
                  }}
                >
                  <MenuItem value={0.5}>30 minutes</MenuItem>
                  <MenuItem value={1} default>1 hour</MenuItem>
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
        </div>
    );
}

export default LandingScreen;