import React from 'react';
import { Container, Text, Group, Anchor } from '@mantine/core';

export const Footer: React.FC = () => {
  return (
    <footer style={{ borderTop: '1px solid var(--mantine-color-gray-3)', marginTop: 'auto' }}>
      <Container size="xl" py="xl">
        <Group justify="space-between" align="center">
          <Text size="sm" c="dimmed">
            © {new Date().getFullYear()} Personal Website. All rights reserved.
          </Text>
          <Group gap="md">
            <Anchor href="https://github.com" size="sm" c="dimmed">
              GitHub
            </Anchor>
            <Anchor href="https://linkedin.com" size="sm" c="dimmed">
              LinkedIn
            </Anchor>
            <Anchor href="mailto:contact@example.com" size="sm" c="dimmed">
              Contact
            </Anchor>
          </Group>
        </Group>
      </Container>
    </footer>
  );
};
