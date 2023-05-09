import React from 'react';
import { sql } from '@vercel/postgres';

import MyTimeline from './components/MyTimeline';
import MyForm from './components/MyForm';
import styles from './page.module.css';

export default async function Home() {
  const { rows } = await sql`SELECT * from events`;

  return (
    <>
      <div className={styles.navbar}>
        <div className={styles.content}>
          <h1 className={styles.title}>Babytime</h1>
        </div>
      </div>
      <div className={styles.content}>
        <main className={styles.main}>
          <MyTimeline data={rows} />
        </main>
        <aside className={styles.aside}>
          <MyForm />
        </aside>
      </div>
    </>
  );
}
