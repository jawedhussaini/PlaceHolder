'use client';

import { Button, Container, Text, Title } from '@mantine/core';
import { useEffect } from 'react';

export default function Error({
  error,
 
}: {
  error: Error & { digest?: string };
 
}) {
  useEffect(() => {
    // Optionally log the error to an error reporting service
    console.error(error);
  }, [error]);

  const handleRetry = () => {
    window.location.reload(); // Reload the page
  };

  return (
    <Container size="xl" mt="xl">
      <Title mt="lg" c="red">
        Something went wrong!
      </Title>
      <Text mt="lg">
        Please check your internet connection or it may be due to a server error.
      </Text>
      <Button mt="lg" variant="outline" onClick={handleRetry}>
        Try again
      </Button>
    </Container>
  );
}
