/* eslint-disable react-native/no-inline-styles */
import React, { useEffect, useMemo, useRef, useState } from 'react';
import {
  View,
  Text,
  FlatList,
  Alert,
  StyleSheet,
  Pressable,
} from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import type { RootStackParamList } from '../App';
import { QUESTIONS } from '../data/questions';
import { shuffleInPlace } from '../utils/shuffle';
import AnswerButton from '../components/AnswerButton';
import NameModal from '../components/NameModal';
import { saveEntry } from '../storage/leaderboard.store';

type Props = NativeStackScreenProps<RootStackParamList, 'Quiz'>;

export default function QuizScreen({ navigation }: Props) {
  const [modalOpen, setModalOpen] = useState(false);
  const [score, setScore] = useState(0);
  const [done, setDone] = useState(false);

  const randomized = useMemo(() => {
    const qs = QUESTIONS.map(q => ({
      ...q,
      answers: shuffleInPlace([...q.answers]),
    }));
    shuffleInPlace(qs);
    return qs.slice(0, 20);
  }, []);

  // const answered = useRef<Record<string, boolean>>({});
  const [answered, setAnswered] = useState<
    Record<string, { correct: boolean }>
  >({});

  // function onAnswer(qid: string, correct: boolean) {
  //   if (answered.current[qid]) return;
  //   answered.current[qid] = true;
  //   if (correct) setScore(s => s + 1);
  // }
  function onAnswer(qid: string, correct: boolean) {
    if (answered[qid]) return;
    setAnswered(prev => ({ ...prev, [qid]: { correct } }));
    if (correct) setScore(s => s + 1);
  }

  // useEffect(() => {
  //   const allAnswered = randomized.every(q => answered.current[q.id]);
  //   if (allAnswered && !done) {
  //     setDone(true);
  //     setModalOpen(true);
  //   }
  // }, [score, randomized, done]);

  useEffect(() => {
    const allAnswered = randomized.every(q => !!answered[q.id]);
    if (allAnswered && !done) {
      setDone(true);
      setModalOpen(true);
    }
  }, [answered, randomized, done]);

  async function submitName(name: string) {
    await saveEntry({
      id: String(Date.now()),
      name,
      score,
      dateISO: new Date().toISOString(),
    });
    setModalOpen(false);
    Alert.alert('Saved', 'Score saved to leaderboard', [
      { text: 'OK', onPress: () => navigation.navigate('Leaderboard') },
    ]);
  }

  const renderItem = ({ item }: { item: (typeof randomized)[number] }) => {
    // const selected = answered.current[item.id] ?? false;
    // return (
    //   <View style={styles.card}>
    //     <Text style={styles.qText}>{item.text}</Text>
    //     {item.answers.map(a => (
    //       <AnswerButton
    //         key={a.id}
    //         text={a.text}
    //         disabled={selected}
    //         onPress={() => onAnswer(item.id, a.correct)}
    //       />
    //     ))}
    //   </View>
    // );
    const isAnswered = !!answered[item.id];
    return (
      <View style={styles.card}>
        <Text style={styles.qText}>{item.text}</Text>
        {item.answers.map(a => {
          const showState = isAnswered;
          const styleWhenDone = showState
            ? a.correct
              ? { backgroundColor: '#14532d', borderColor: '#16a34a' } // เขียว: ถูก
              : { backgroundColor: '#3f1d1d', borderColor: '#7f1d1d' } // แดง: ผิด
            : {};
          return (
            <Pressable
              key={a.id}
              onPress={() => onAnswer(item.id, a.correct)}
              disabled={isAnswered}
              style={({ pressed }) => [
                {
                  backgroundColor: '#1e293b',
                  borderColor: '#334155',
                  borderWidth: 1,
                  paddingVertical: 14,
                  paddingHorizontal: 16,
                  borderRadius: 12,
                  marginVertical: 6,
                },
                pressed && !isAnswered ? { opacity: 0.8 } : null,
                styleWhenDone,
              ]}
            >
              <Text style={{ color: 'white', fontSize: 16 }}>{a.text}</Text>
            </Pressable>
          );
        })}
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Score: {score}/20</Text>
        <Pressable onPress={() => navigation.navigate('Leaderboard')}>
          <Text style={styles.link}>Leaderboard</Text>
        </Pressable>
      </View>
      <FlatList
        data={randomized}
        keyExtractor={item => item.id}
        renderItem={renderItem}
        extraData={answered}
        contentContainerStyle={{ padding: 16, paddingBottom: 48 }}
      />
      <NameModal
        visible={modalOpen}
        onClose={() => setModalOpen(false)}
        onSubmit={submitName}
        score={score}
      />
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
  card: {
    backgroundColor: '#111827',
    borderColor: '#1f2937',
    borderWidth: 1,
    borderRadius: 12,
    padding: 12,
    marginBottom: 12,
  },
  qText: { color: 'white', fontSize: 16, marginBottom: 8, fontWeight: '600' },
});
