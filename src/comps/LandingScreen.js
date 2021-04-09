import * as React from 'react';
import { TextField, InputLabel, Select, MenuItem, Button, Card, CardContent, CardActions, Typography } from '@material-ui/core'
import DateFnsUtils from "@date-io/date-fns"; // choose your lib
import { DateTimePicker, LocalizationProvider } from "@material-ui/pickers";

// https://dev.to/pnkfluffy/passing-data-from-child-to-parent-with-react-hooks-1ji3

const LandingScreen = (props) => {

    const [selectedDate, handleDateChange] = React.useState(new Date());
    const [duration, setDuration] = React.useState(0);

    return (
        <div className = "landingCardWrapper" style={{
          alignItems: "center",
          margin: "auto"
        }}>
          <Card variant="outlined" raised="true">
            <form onSubmit={(e) => {
              e.preventDefault();
              props.setFormSubmitted(true);
              props.setFormData({date: selectedDate, duration: duration})
            }}>
              <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                Sample Title
              </Typography>
                <LocalizationProvider dateAdapter={DateFnsUtils} >
                    <DateTimePicker
                        renderInput={(props) => <TextField {...props} style={{width: "100%"}} />}
                        value={selectedDate}
                        onChange={(date) => handleDateChange(date)}
                    />
                </LocalizationProvider>
              <Select
                  id="demo-simple-select-outlined"
                  value={duration}
                  onChange={(event) => {setDuration(event.target.value)}}
                  displayEmpty
                  style = {{
                    padding: "5px",
                    width: "100%",
                  }}
                >
                  <MenuItem value={0.5}>30 minutes</MenuItem>
                  <MenuItem value={1} default>1 hour</MenuItem>
                  <MenuItem value={2}>2 hours</MenuItem>
                  <MenuItem value={4}>4 hours</MenuItem>
                </Select>
                <InputLabel shrink>
                  Class Duration
                </InputLabel>
              <br />
              </CardContent>
              <CardActions>
              <Button 
                color="primary" type='submit' className="locSubmitButton"
                >
                Submit
              </Button>
              </CardActions>
            </form>
            </Card>
        </div>
    );
}

export default LandingScreen;