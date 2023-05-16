'use client';

import {
  AirlineSeatFlat,
  BabyChangingStation,
  EventAvailable,
  JoinLeft,
  JoinRight,
  LocalDrink,
  Medication,
} from '@mui/icons-material';

import { Timeline, TimelineAxis, TimelineEvent, TimelineContent } from './timeline';
import { EVENT_TYPE } from '../const';
import { formatDatetime } from '../util';

export default function MyTimeline({ data, handleDelete }) {
  function createItem({ index, desc, icon, id, time }) {
    return (
      <TimelineEvent
        key={index}
        onClick={() => {
          if (confirm('Delete this event?')) {
            handleDelete(id);
          }
        }}
      >
        <TimelineContent>{formatDatetime(time)}</TimelineContent>
        <TimelineAxis icon={icon} />
        <TimelineContent primary>{desc}</TimelineContent>
      </TimelineEvent>
    );
  }

  const config = {
    [EVENT_TYPE.feedLeftBreast]: {
      desc: 'fL',
      icon: <JoinLeft />,
    },
    [EVENT_TYPE.feedRightBreast]: {
      desc: 'fR',
      icon: <JoinRight />,
    },
    [EVENT_TYPE.feedBottle]: {
      desc: 'fB',
      icon: <LocalDrink />,
    },
    [EVENT_TYPE.feedStop]: {
      desc: 'fX',
      icon: <EventAvailable />,
    },
    [EVENT_TYPE.nappy1]: {
      icon: <BabyChangingStation />,
      desc: 'N1',
    },
    [EVENT_TYPE.nappy2]: {
      icon: <BabyChangingStation />,
      desc: 'N2',
    },
    [EVENT_TYPE.tummy]: {
      icon: <AirlineSeatFlat />,
      desc: 'TT',
    },
    [EVENT_TYPE.medicine]: {
      icon: <Medication />,
      desc: 'Med',
    },
  };

  return (
    <Timeline position="left">
      {data.map((item, index) => {
        return createItem({ index, ...item, ...config[item.type] });
      })}
    </Timeline>
  );
}