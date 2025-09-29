/* eslint-disable react-native/no-inline-styles */
import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet, Pressable } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import type { RootStackParamList } from '../App';
import {
  loadLeaderboard,
  resetLeaderboard,
} from '../storage/leaderboard.store';
import type { ScoreEntry } from '../types';

type Props = NativeStackScreenProps<RootStackParamList, 'Leaderboard'>;

export default function LeaderboardScreen({ navigation }: Props) {
  const [list, setList] = useState<ScoreEntry[]>([]);

  async function refresh() {
    const data = await loadLeaderboard();
    setList(data);
  }

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', refresh);
    return unsubscribe;
  }, [navigation]);

  useEffect(() => {
    refresh();
  }, []);

  const renderItem = ({ item, index }: { item: ScoreEntry; index: number }) => (
    <View style={styles.row}>
      <Text style={styles.rank}>{index + 1}</Text>
      <Text style={styles.name}>{item.name}</Text>
      <Text style={styles.score}>{item.score}</Text>
      <Text style={styles.date}>
        {new Date(item.dateISO).toLocaleDateString()}
      </Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Leaderboard</Text>
        <Pressable onPress={() => navigation.navigate('Quiz')}>
          <Text style={styles.link}>Back to Quiz</Text>
        </Pressable>
      </View>
      <View style={styles.subHeader}>
        <Text style={[styles.hCell, { width: 40 }]}>#</Text>
        <Text style={[styles.hCell, { flex: 1 }]}>Name</Text>
        <Text style={[styles.hCell, { width: 60 }]}>Score</Text>
        <Text style={[styles.hCell, { width: 120 }]}>Date</Text>
      </View>
      <FlatList
        data={list}
        keyExtractor={item => item.id}
        renderItem={renderItem}
        contentContainerStyle={{ paddingHorizontal: 12, paddingBottom: 24 }}
        ListEmptyComponent={<Text style={styles.empty}>No scores yet</Text>}
      />
      {list.length > 0 && (
        <Pressable
          style={styles.clearBtn}
          onPress={async () => {
            await resetLeaderboard();
            refresh();
          }}
        >
          <Text style={styles.clearTxt}>Clear Leaderboard</Text>
        </Pressable>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#0f172a' },
  header: {
    paddingTop: 16,
    paddingHorizontal: 16,
    paddingBottom: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: { color: 'white', fontSize: 18, fontWeight: '700' },
  link: { color: '#38bdf8', fontWeight: '600' },
  subHeader: {
    flexDirection: 'row',
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderBottomColor: '#1f2937',
    borderBottomWidth: 1,
  },
  hCell: { color: '#cbd5e1', fontWeight: '600' },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    borderBottomColor: '#1f2937',
    borderBottomWidth: 1,
  },
  rank: { width: 40, color: '#e5e7eb' },
  name: { flex: 1, color: 'white', fontWeight: '600' },
  score: { width: 60, color: '#22c55e', textAlign: 'right', paddingRight: 12 },
  date: { width: 120, color: '#94a3b8' },
  empty: { color: '#94a3b8', padding: 16 },
  clearBtn: {
    backgroundColor: '#ef4444',
    margin: 16,
    paddingVertical: 12,
    borderRadius: 12,
    alignItems: 'center',
  },
  clearTxt: { color: 'white', fontWeight: '700' },
});
