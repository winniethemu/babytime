import { EVENT_TYPE } from '../src/app/const';

export function createEvents() {
  const FEED_START = new Date('2022-05-06T09:00:00Z');
  const FEED_END = new Date('2022-05-06T09:30:00Z');
  const BURP = new Date('2022-05-06T09:40:00Z');
  const SPIT = new Date('2022-05-06T09:45:00Z');
  const TUMMY_START = new Date('2022-05-06T10:00:00Z');
  const TUMMY_END = new Date('2022-05-06T10:30:00Z');
  const NAPPY = new Date('2022-05-06T11:00:00Z');

  return [
    {
      type: EVENT_TYPE.feed,
      start: Date.parse(FEED_START),
      end: Date.parse(FEED_END),
    },
    {
      type: EVENT_TYPE.burp,
      start: Date.parse(BURP),
      end: null,
    },
    {
      type: EVENT_TYPE.spit,
      start: Date.parse(SPIT),
      end: null,
    },
    {
      type: EVENT_TYPE.tummy,
      start: Date.parse(TUMMY_START),
      end: Date.parse(TUMMY_END),
    },
    {
      type: EVENT_TYPE.nappy,
      start: Date.parse(NAPPY),
      end: null,
    },
  ];
}
