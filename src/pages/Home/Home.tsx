import React from 'react';

import Logo from 'src/images/logo.jpg';
import { Image } from 'src/components/Image';
import { Text } from 'src/components/Text';

const Home = () => (
  <div
    style={{
      width: '100vw',
      height: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'column'
    }}
  >
    <Image src={Logo} size="large" marginBottom="lg" />
    <Text fontSize="lg">Coming soon...</Text>
  </div>
);

export default Home;
