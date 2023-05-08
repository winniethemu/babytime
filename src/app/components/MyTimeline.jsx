import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';
import AirlineSeatFlatIcon from '@mui/icons-material/AirlineSeatFlat';
import BabyChangingStationIcon from '@mui/icons-material/BabyChangingStation';
import LocalDrinkIcon from '@mui/icons-material/LocalDrink';
import RecordVoiceOverIcon from '@mui/icons-material/RecordVoiceOver';

import { EVENT_TYPE } from '../const';
import { formatDate } from '../util';

function createItem(metadata) {
  const { start, end, icon, desc } = metadata;
  if (!end) {
    return (
      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: 'auto 0' }}
          align="right"
          variant="body2"
          color="text.secondary"
        >
          {formatDate(start)}
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot>{icon}</TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
          {desc}
        </TimelineContent>
      </TimelineItem>
    )
  }

  return (
    <>
      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: 'auto 0' }}
          align="right"
          variant="body2"
          color="text.secondary"
        >
          {formatDate(start)}
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot variant="outlined" sx={{ borderColor: '#FF5A5F', color: '#FF5A5F' }}>
            {icon}
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
          {desc} Start
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: 'auto 0' }}
          align="right"
          variant="body2"
          color="text.secondary"
        >
          {formatDate(end)}
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot sx={{ bgcolor: '#FF5A5F' }}>
            {icon}
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
          {desc} End
        </TimelineContent>
      </TimelineItem>
    </>
  );
}

export default function MyTimeline({ data }) {
  return (
    <Timeline position="alternate">
      {data.map((item, index) => {
        let icon, desc;
        switch (item.type) {
          case EVENT_TYPE.feed:
            icon = <LocalDrinkIcon />;
            return createItem({ ...item, desc: 'Feed', icon });
          case EVENT_TYPE.spit:
            icon = <RecordVoiceOverIcon />;
            return createItem({ ...item, desc: 'Spit', icon });
          case EVENT_TYPE.tummy:
            icon = <AirlineSeatFlatIcon />;
            return createItem({ ...item, desc: 'Tummy', icon });
          case EVENT_TYPE.nappy1:
            icon = <BabyChangingStationIcon />;
            return createItem({ ...item, desc: 'Nappy One', icon });
          case EVENT_TYPE.nappy2:
            icon = <BabyChangingStationIcon />;
            return createItem({ ...item, desc: 'Nappy Two', icon });
        }
      })}
    </Timeline>
  );
}