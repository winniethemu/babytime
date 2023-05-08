import { EVENT_TYPE } from '../src/app/const';

export function createEvents() {
  const FEED_START = new Date('2022-05-06T09:00:00Z');
  const FEED_END = new Date('2022-05-06T09:30:00Z');
  const NAPPY_ONE = new Date('2022-05-06T09:40:00Z');
  const SPIT = new Date('2022-05-06T09:45:00Z');
  const TUMMY = new Date('2022-05-06T10:00:00Z');
  const NAPPY_TWO = new Date('2022-05-06T11:00:00Z');

  return [
    {
      type: EVENT_TYPE.feed,
      start: Date.parse(FEED_START),
      end: Date.parse(FEED_END),
    },
    {
      type: EVENT_TYPE.nappy1,
      start: Date.parse(NAPPY_ONE),
      end: null,
    },
    {
      type: EVENT_TYPE.spit,
      start: Date.parse(SPIT),
      end: null,
    },
    {
      type: EVENT_TYPE.tummy,
      start: Date.parse(TUMMY),
      end: null,
    },
    {
      type: EVENT_TYPE.nappy2,
      start: Date.parse(NAPPY_TWO),
      end: null,
    },
  ];
}
