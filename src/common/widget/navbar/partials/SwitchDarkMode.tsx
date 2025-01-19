'use client';
import { Switch } from '@nextui-org/react';
import { useTheme } from 'next-themes';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';

const SwitchDarkMode = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;
  return (
    <div>
      <Switch
        size='lg'
        color='default'
        isSelected={theme === 'dark'}
        onChange={(e) => setTheme(e.target.checked ? 'dark' : 'light')}
        thumbIcon={({ isSelected }) => (
          <div>
            <Image
              src={`/assets/img/icons/${isSelected ? 'night' : 'sun'}.svg`}
              width={20}
              height={20}
              alt='logo'
            />
          </div>
        )}
      ></Switch>
    </div>
  );
};

export default SwitchDarkMode;
