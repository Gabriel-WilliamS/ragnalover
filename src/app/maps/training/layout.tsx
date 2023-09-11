'use client';

import { MonstersSoundsContextProvider } from './context/useMonstersSounds';

export default function TrainingLayout({ children }: { children: React.ReactNode }) {
  return <MonstersSoundsContextProvider>{children}</MonstersSoundsContextProvider>;
}
