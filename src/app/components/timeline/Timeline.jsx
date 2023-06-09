import { createContext } from 'react';

export const TimelineContext = createContext({
  position: 'right',
  fancy: false,
});

export default function Timeline({
  children,
  position = 'right',
  fancy = false,
  ...props
}) {
  return (
    <ol {...props}>
      <TimelineContext.Provider value={{ position, fancy }}>
        {children}
      </TimelineContext.Provider>
    </ol>
  );
}