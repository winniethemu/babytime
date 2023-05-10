import dayjs from 'dayjs';

export function formatDatetime(timestamp) {
  return dayjs(parseInt(timestamp, 10)).format('MMM D, YYYY h:mm A');
}
