'use client';

import MyTimeline from './components/MyTimeline';
import styles from './page.module.css';

//TODO: remove before launch
import { createEvents } from '../../__mocks__/eventMock';

export default function Home() {
  const data = createEvents();

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
        </aside>
      </div>
    </>
  );
}
