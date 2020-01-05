import React from 'react';

import Logo from 'src/images/logo.jpg';
import { Image } from 'src/components/Image';
import { Text } from 'src/components/Text';
import { Box } from 'src/components/Box';
import { Card } from 'src/components/Card';

const Home = () => (
  <div
    style={{
      width: '100vw',
      height: '100vh',
      display: 'flex',
      alignItems: 'center',
      flexDirection: 'column'
    }}
  >
    <Box backgroundColor="dark" padding="3xl" justifyContent="flex-end">
      <Text color="light" fontWeight="bold" marginRight="3xl">
        CMS
      </Text>
      <Text color="light" fontWeight="bold">
        Contact
      </Text>
    </Box>
    <Box backgroundColor="accent" height="400px" marginBottom="3xl" />
    <Image src={Logo} size="large" marginBottom="lg" />
    <Text fontSize="lg">Coming soon...</Text>
    <Box>
      <Box column={2} />
      <Box column={8} guttering="md">
        <Card fullWidth>zsd</Card>
        <Card fullWidth>zsd</Card>
      </Box>
      <Box column={2} />
    </Box>
  </div>
);

export default Home;
