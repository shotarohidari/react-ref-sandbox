import { Box, FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { createRandomColorCode, range } from './util';

const createListElement = () => {
  const numbers = [...range(30)];
  const yPositions = new Array<number>();
  const element = (
    <Box height="1000px" width={'100%'}>
      {numbers.map((idx) => {
        return (
          <div
            key={idx}
            style={{
              height: '300px',
              width: '400px',
              backgroundColor: createRandomColorCode(),
              fontSize: '40px',
            }}
            ref={(elm) => {
              if (elm) {
                yPositions.push(elm.offsetTop);
              }
            }}
          >
            {idx}
          </div>
        );
      })}
    </Box>
  );
  return {
    element,
    yPositions,
  };
};

function App() {
  const { element, yPositions } = createListElement();
  const [yNewPoss, setYNewPoss] = useState(new Array<number>());
  const [idx, setIdx] = useState(0);
  useEffect(() => {
    setYNewPoss(yPositions);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [yPositions.length]);
  useEffect(() => {
    document.documentElement.scrollTop = yPositions[idx] || 0;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [idx]);
  return (
    <Box>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">番号</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={idx}
          label="idx"
          onChange={(e) => {
            setIdx(Number(e.target.value));
          }}
        >
          {yNewPoss.map((yPos, yNewPosIdx) => {
            return (
              <MenuItem value={yNewPosIdx} key={yPos}>
                {yNewPosIdx}
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>

      {element}
    </Box>
  );
}

export default App;
