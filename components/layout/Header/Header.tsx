'use client';

import React from 'react';
import Link from 'next/link';
import { Container, Group, Button, Burger, Drawer, Stack, Text, ActionIcon } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { IconSun, IconMoon } from '@tabler/icons-react';
import { useMantineColorScheme } from '@mantine/core';
import styles from './Header.module.scss';

export const Header: React.FC = () => {
  const [opened, { toggle, close }] = useDisclosure(false);
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/blog', label: 'Blog' },
    { href: '/portfolio', label: 'Portfolio' },
    { href: '/resume', label: 'Resume' },
  ];

  return (
    <header className={styles.main}>
      <Container className={styles.container}>
        <Container className={styles.content}>
          <Text size="lg" fw={700}>
            My Website
          </Text>
          <ActionIcon
            variant="subtle"
            size="lg"
            onClick={() => toggleColorScheme()}
            title="Toggle color scheme"
          >
            {colorScheme === 'dark' ? <IconSun size={18} /> : <IconMoon size={18} />}
          </ActionIcon>
        </Container>
      </Container>
    </header>
  );
};
