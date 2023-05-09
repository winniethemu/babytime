'use client';

import React from 'react';
import { Box, Button, FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import { DateTimePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

import { EVENT_TYPE } from '../const';
import styles from '../page.module.css';

export default function MyForm({ submit }) {
  const [activity, setActivity] = React.useState('');
  const [startTime, setStartTime] = React.useState(null);
  const [endTime, setEndTime] = React.useState(null);

  function handleSubmit(event) {
    event.preventDefault();
    submit(activity, startTime, endTime);
    handleReset();
  }

  function handleReset() {
    setActivity('');
    setStartTime(null);
    setEndTime(null);
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className={styles.formControl}>
        <FormControl fullWidth>
          <InputLabel id="activity-label">Activity</InputLabel>
          <Select
            labelId='activity-label'
            value={activity}
            label="Activity"
            onChange={(e) => setActivity(e.target.value)}
          >
            <MenuItem value={EVENT_TYPE.feed}>Feed</MenuItem>
            <MenuItem value={EVENT_TYPE.nappy1}>Nappy One</MenuItem>
            <MenuItem value={EVENT_TYPE.nappy2}>Nappy Two</MenuItem>
            <MenuItem value={EVENT_TYPE.spit}>Spit</MenuItem>
            <MenuItem value={EVENT_TYPE.tummy}>Tummy</MenuItem>
          </Select>
        </FormControl>
      </div>
      <div className={styles.formControl}>
        <FormControl fullWidth>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DateTimePicker
              label="Start Time"
              value={startTime}
              onChange={(dt) => setStartTime(dt.valueOf())}
            />
          </LocalizationProvider>
        </FormControl>
      </div>
      <div className={styles.formControl}>
        <FormControl fullWidth>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DateTimePicker
              label="End Time"
              value={endTime}
              onChange={(dt) => setEndTime(dt.valueOf())}
              disabled={activity !== EVENT_TYPE.feed}
            />
          </LocalizationProvider>
        </FormControl>
      </div>
      <Box className={styles.formSubmit}>
        <Button
          variant="contained"
          onClick={handleSubmit}
        >Submit</Button>
        <Button
          variant="outlined"
          onClick={handleReset}
        >Reset</Button>
      </Box>
    </form>
  );
}