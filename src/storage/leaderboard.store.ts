import AsyncStorage from '@react-native-async-storage/async-storage';
import { ScoreEntry } from '@/types';

const KEY = 'leaderboard.v1';

export async function loadLeaderboard(): Promise<ScoreEntry[]> {
  const raw = await AsyncStorage.getItem(KEY);
  if (!raw) return [];
  try {
    const arr = JSON.parse(raw) as ScoreEntry[];
    return Array.isArray(arr) ? arr : [];
  } catch {
    return [];
  }
}

export async function saveEntry(entry: ScoreEntry): Promise<void> {
  const list = await loadLeaderboard();
  const updated = [...list, entry]
    .sort(
      (a, b) =>
        b.score - a.score ||
        new Date(b.dateISO).getTime() - new Date(a.dateISO).getTime(),
    )
    .slice(0, 50);
  await AsyncStorage.setItem(KEY, JSON.stringify(updated));
}

export async function resetLeaderboard(): Promise<void> {
  await AsyncStorage.removeItem(KEY);
}
