import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { SoundBackgroundContextProvider } from '@/hooks/useSoundBackground';
import { CharactersContextProvider } from '@/hooks/useCharacters';
import { MapSoundsContextProvider } from '@/hooks/useMapSounds';
import { CharactersHitsSoundsContextProvider } from '@/hooks/useCharactersHitsSounds';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <SoundBackgroundContextProvider>
        <CharactersContextProvider>
          <MapSoundsContextProvider>
            <CharactersHitsSoundsContextProvider>
              <body className={(inter.className, 'overflow-hidden')}>{children}</body>
            </CharactersHitsSoundsContextProvider>
          </MapSoundsContextProvider>
        </CharactersContextProvider>
      </SoundBackgroundContextProvider>
    </html>
  );
}
