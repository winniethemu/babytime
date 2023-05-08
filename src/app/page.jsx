'use client';

import React from 'react';
import { Box, Button, FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import { DateTimePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

import { EVENT_TYPE } from './const';
import MyTimeline from './components/MyTimeline';
import styles from './page.module.css';

//TODO: remove before launch
import { createEvents } from '../../__mocks__/eventMock';

export default function Home() {
  const [activity, setActivity] = React.useState('');
  const [startTime, setStartTime] = React.useState(null);
  const [endTime, setEndTime] = React.useState(null);

  const data = createEvents();

  function handleSubmit(event) {
    event.preventDefault();
    console.log('Form submitting...');
  }

  return (
    <>
      <div className={styles.navbar}>
        <div className={styles.content}>
          <h1>Babytime</h1>
        </div>
      </div>
      <div className={styles.content}>
        <main className={styles.main}>
          <MyTimeline data={data} />
        </main>
        <aside className={styles.aside}>
          <form onSubmit={handleSubmit}>
            <FormControl fullWidth className={styles.formControl}>
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
            <FormControl fullWidth className={styles.formControl}>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DateTimePicker
                  label="Start Time"
                  value={startTime}
                  onChange={(dt) => setStartTime(dt.valueOf())}
                />
              </LocalizationProvider>
            </FormControl>
            <FormControl fullWidth className={styles.formControl}>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DateTimePicker
                  label="End Time"
                  value={endTime}
                  onChange={(dt) => setEndTime(dt.valueOf())}
                />
              </LocalizationProvider>
            </FormControl>
            <Box className={styles.formSubmit}>
              <Button variant="contained">Submit</Button>
              <Button variant="outlined">Reset</Button>
            </Box>
          </form>
        </aside>
      </div>
    </>
  );
}
