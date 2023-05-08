'use client';

import React from 'react';
import { Box, FormControl, InputLabel, MenuItem, Select, Tab } from '@mui/material';

import MyTimeline from './components/MyTimeline';
import styles from './page.module.css';

//TODO: remove before launch
import { createEvents } from '../../__mocks__/eventMock';
import { EVENT_TYPE } from './const';
import { TabContext, TabList, TabPanel } from '@mui/lab';

export default function Home() {
  const [activity, setActivity] = React.useState('');
  const [tab, setTab] = React.useState('start-time');

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
            <FormControl size="small" fullWidth>
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
            <TabContext value={tab}>
              <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <TabList onChange={(e, newValue) => setTab(newValue)}>
                  <Tab label="Start Time" value="start-time" />
                  <Tab label="End Time" value="end-time" />
                </TabList>
              </Box>
              <TabPanel value="start-time">

              </TabPanel>
              <TabPanel value="end-time">
              </TabPanel>
            </TabContext>
          </form>
        </aside>
      </div>
    </>
  );
}
