import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { Box } from '../src';

const Container: React.FC = ({ children }) => (
  <Box ml="auto" mr="auto" measure={['measure', 'narrow', 'wide']}>
    {children}
  </Box>
);

const App = () => (
  <div>
    <Container>
      <Box pa="1">This box is a div with some pa1 applied</Box>
      <Box pv="4">We also gots flex boxes</Box>
      <Box display="flex" flexDirection={['column', 'row', 'row-reverse']}>
        <Box bg="light-pink" pa={['2', '3', '3']} ma="1" width="third">
          1
        </Box>
        <Box bg="light-pink" pa={['2', '3', '3']} ma="1" width="third">
          2
        </Box>
        <Box bg="light-pink" pa={['2', '3', '3']} ma="1" width="third">
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
        borderColor="transparent"
      >
        This box is a button
      </Box>
    </Container>
  </div>
);
ReactDOM.render(<App />, document.getElementById('root'));
