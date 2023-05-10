import React from 'react';

import Content from './components/Content';
import styles from './page.module.css';

export default async function Home() {
  return (
    <>
      <div className={styles.navbar}>
        <div className={styles.content}>
          <h1 className={styles.title}>Shush!</h1>
        </div>
      </div>
      <Content />
    </>
  );
}
