'use client';

import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';
import {
  AirlineSeatFlat,
  BabyChangingStation,
  EventAvailable,
  JoinLeft,
  JoinRight,
  LocalDrink,
  Medication,
} from '@mui/icons-material';

import { EVENT_TYPE } from '../const';
import { formatDatetime } from '../util';

export default function MyTimeline({ data, handleDelete }) {
  function createItem({ index, desc, icon, iconStyle, id, time }) {
    return (
      <TimelineItem
        key={index}
        onClick={() => {
          if (confirm('Delete this event?')) {
            handleDelete(id);
          }
        }}
      >
        <TimelineOppositeContent
          align="right"
          sx={{ m: 'auto 0' }}
        >
          {desc}
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot {...iconStyle}>
            {icon}
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent
          color="text.secondary"
          style={{ margin: 'auto 0' }}
          sx={{ py: '12px', px: 2 }}
          variant="body2"
        >
          {formatDatetime(time)}
        </TimelineContent>
      </TimelineItem>
    );
  }

  const config = {
    [EVENT_TYPE.feedLeftBreast]: {
      desc: 'fL',
      icon: <JoinLeft />,
      iconStyle: {
        variant: 'outlined',
        sx: { borderColor: '#FF5A5F', color: '#FF5A5F' },
      },
    },
    [EVENT_TYPE.feedRightBreast]: {
      desc: 'fR',
      icon: <JoinRight />,
      iconStyle: {
        variant: 'outlined',
        sx: { borderColor: '#FF5A5F', color: '#FF5A5F' },
      },
    },
    [EVENT_TYPE.feedBottle]: {
      desc: 'fB',
      icon: <LocalDrink />,
      iconStyle: {
        variant: 'outlined',
        sx: { borderColor: '#FF5A5F', color: '#FF5A5F' },
      },
    },
    [EVENT_TYPE.feedStop]: {
      desc: 'fX',
      icon: <EventAvailable />,
      iconStyle: {
        variant: 'outlined',
        sx: { borderColor: '#FF5A5F', color: '#FF5A5F' },
      },
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
    <Timeline>
      {data.map((item, index) => {
        return createItem({ index, ...item, ...config[item.type] });
      })}
    </Timeline>
  );
}