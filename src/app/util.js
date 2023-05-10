import dayjs from 'dayjs';

export function formatDatetime(timestamp) {
  return dayjs(parseInt(timestamp, 10)).format('HH:mm A, MMM DD');
}
