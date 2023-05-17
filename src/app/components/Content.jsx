'use client';

import React from 'react';
import { Button } from '@mui/material';

import MyTimeline from './MyTimeline';
import styles from '../page.module.css';
import { EVENT_TYPE } from '../const';
import { useOnScreen } from '../util';

export default function Content() {
  const [events, setEvents] = React.useState([]);
  const [day, setDay] = React.useState(1);
  const bottomRef = React.createRef();
  const isOnScreen = useOnScreen(bottomRef);

  React.useEffect(() => {
    if (isOnScreen) {
      fetch(`/events?d=${day}`).then(res => res.json()).then(json => {
        setEvents(json.data);
        // if pagination returns some results
        if (json.data.length > 0) setDay(day+1);
      });
    }
  }, [day, isOnScreen]);

  async function handleSubmit(type) {
    const newItem = { type, time: Date.now() };
    const items = events.slice();
    items.unshift(newItem);
    setEvents(items);

    await fetch('/events', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newItem),
    });
  }

  async function handleDelete(id) {
    fetch(`/events/${id}`, { method: 'DELETE' }).then(() => {
      const items = events.filter((event) => event.id !== id);
      setEvents(items);
    });
  }

  return (
    <div className={styles.content}>
      <main className={styles.main}>
        {events.length > 0 && <MyTimeline data={events} handleDelete={handleDelete} />}
        {events.length < 1 && <p>~ nothing here yet ~</p>}
        <div ref={bottomRef}></div>
      </main>
      <aside className={styles.aside}>
        <div className={styles.row}>
          <Button
            className={styles.cta}
            variant="outlined"
            onClick={() => handleSubmit(EVENT_TYPE.feedLeftBreast)}
          >fL</Button>
          <Button
            className={styles.cta}
            variant="outlined"
            onClick={() => handleSubmit(EVENT_TYPE.feedRightBreast)}
          >fR</Button>
          <Button
            className={styles.cta}
            variant="outlined"
            onClick={() => handleSubmit(EVENT_TYPE.feedBottle)}
          >fB</Button>
          <Button
            className={styles.cta}
            variant="outlined"
            onClick={() => handleSubmit(EVENT_TYPE.feedStop)}
          >fX</Button>
        </div>
        <div className={styles.row}>
          <Button
            className={styles.cta}
            variant="outlined"
            onClick={() => handleSubmit(EVENT_TYPE.nappy1)}
          >N1</Button>
          <Button
            className={styles.cta}
            variant="outlined"
            onClick={() => handleSubmit(EVENT_TYPE.nappy2)}
          >N2</Button>
          <Button
            className={styles.cta}
            variant="outlined"
            onClick={() => handleSubmit(EVENT_TYPE.tummy)}
          >TT</Button>
          <Button
            className={styles.cta}
            variant="outlined"
            onClick={() => handleSubmit(EVENT_TYPE.medicine)}
          >Med</Button>
        </div>
      </aside>
    </div>
  );
}