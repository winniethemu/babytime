import { DateTime } from 'luxon';

export function formatDate(timestamp) {
  return DateTime.fromMillis(timestamp).toLocaleString(DateTime.DATETIME_MED);
}
