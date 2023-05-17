import { EVENT_TYPE } from '../src/app/const';

export function createEvents() {
  const FEED_START = new Date('2022-05-06T09:00:00Z');
  const FEED_END = new Date('2022-05-06T09:30:00Z');
  const NAPPY_ONE = new Date('2022-05-06T09:40:00Z');
  const MEDICINE = new Date('2022-05-06T09:45:00Z');
  const TUMMY = new Date('2022-05-06T10:00:00Z');
  const NAPPY_TWO = new Date('2022-05-06T11:00:00Z');

  return [
    {
      type: EVENT_TYPE.feedLeftBreast,
      time: Date.parse(FEED_START),
    },
    {
      type: EVENT_TYPE.nappy1,
      time: Date.parse(NAPPY_ONE),
    },
    {
      type: EVENT_TYPE.medicine,
      time: Date.parse(MEDICINE),
    },
    {
      type: EVENT_TYPE.tummy,
      time: Date.parse(TUMMY),
    },
    {
      type: EVENT_TYPE.nappy2,
      time: Date.parse(NAPPY_TWO),
    },
  ];
}
