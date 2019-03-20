import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { Box } from '../src';

const App = () => (
  <div>
    <Box pa="1">This box is a div with some pa1 applied</Box>
    <Box pv="4">We also gots flex boxes</Box>
    <Box display="flex">
      <Box bg="light-pink" pa="2" mr="1" width="third">
        1/3
      </Box>
      <Box bg="light-pink" pa="2" mr="1" width="third">
        1/3
      </Box>
      <Box bg="light-pink" pa="2" width="third">
        1/3
      </Box>
    </Box>
    <Box as="button">This box is a button</Box>
  </div>
);
ReactDOM.render(<App />, document.getElementById('root'));
