import React from 'react';
import { IconHeartFilled } from '@tabler/icons-react';
import { useNavigate } from 'react-router-dom';
import { Container, Title } from '@mantine/core';
import { container, icon } from './Home.css';

export function Home() {
  const navigate = useNavigate();

  function handleNavigate(path: string) {
    navigate(path);
  }

  return (
    <Container size="sm" className={container}>
      <Title ta="center" mb="10">
        Welcome to Skyrim Companion App!
      </Title>
      <h3>There will be more content from my app.</h3>
      <p className={icon}>
        Made with <IconHeartFilled /> by Konewka
      </p>
    </Container>
  );
}
