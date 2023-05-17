import React from 'react';
import dayjs from 'dayjs';

export function formatDatetime(timestamp) {
  return dayjs(parseInt(timestamp, 10)).format('HH:mm A, MMM DD');
}

export function useOnScreen(ref) {
  const [onScreen, setOnScreen] = React.useState(false);

  React.useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const [entry] = entries;
      setOnScreen(entry.isIntersecting);
    });
    observer.observe(ref.current);
    return () => observer.disconnect();
  });

  return onScreen;
}
