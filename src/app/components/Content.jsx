'use client';

import React from 'react';

import MyTimeline from './MyTimeline';
import MyForm from './MyForm';

import styles from '../page.module.css';

export default function Content({ initialEvents }) {
  const [events, setEvents] = React.useState(initialEvents);

  async function submit(activity, startTime, endTime) {
    const newItem = {
      type: activity,
      start_time: startTime,
      end_time: endTime,
    };
    const items = events.slice();
    items.push(newItem);
    setEvents(items);

    await fetch('/events', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newItem),
    });
  }

  return (
    <div className={styles.content}>
      <main className={styles.main}>
        <MyTimeline data={events} />
      </main>
      <aside className={styles.aside}>
        <MyForm submit={submit} />
      </aside>
    </div>
  );
}