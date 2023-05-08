import dayjs from 'dayjs';

export function formatDate(timestamp) {
  return dayjs(timestamp).format('MMM D, YYYY h:mm A');
}
