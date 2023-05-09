import React from 'react';
import { sql } from '@vercel/postgres';

import Content from './components/Content';
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
      <Content initialEvents={rows} />
    </>
  );
}
