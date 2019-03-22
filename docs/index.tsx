import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { Box } from '../src';

const App = () => (
  <div>
    <Box pa="1">This box is a div with some pa1 applied</Box>
    <Box pv="4">We also gots flex boxes</Box>
    <Box display="flex" flexDirection={['column', 'row', 'row-reverse']}>
      <Box bg="light-pink" pa={['2', '4', '6']} ma="1" width="third">
        1
      </Box>
      <Box bg="light-pink" pa={['2', '4', '6']} ma="1" width="third">
        2
      </Box>
      <Box bg="light-pink" pa={['2', '4', '6']} ma="1" width="third">
        3
      </Box>
    </Box>
    <Box
      as="button"
      bg="blue"
      bgHover="dark-blue"
      color="white"
      pa="1"
      br="2"
      hoverEffect="pointer"
      b="transparent"
    >
      This box is a button
    </Box>
  </div>
);
ReactDOM.render(<App />, document.getElementById('root'));
