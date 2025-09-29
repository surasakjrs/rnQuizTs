/* eslint-disable react-native/no-inline-styles */
import React, { useState } from 'react';
import {
  Modal,
  View,
  Text,
  TextInput,
  Pressable,
  StyleSheet,
} from 'react-native';

type Props = {
  visible: boolean;
  onClose: () => void;
  onSubmit: (name: string) => void;
  score: number;
};

export default function NameModal({
  visible,
  onClose,
  onSubmit,
  score,
}: Props) {
  const [name, setName] = useState('');

  function handleSave() {
    onSubmit(name.trim() || 'Player');
    setName('');
  }

  return (
    <Modal
      visible={visible}
      transparent
      animationType="fade"
      onRequestClose={onClose}
    >
      <View style={styles.backdrop}>
        <View style={styles.card}>
          <Text style={styles.title}>Your score: {score}/20</Text>
          <Text style={styles.label}>Enter your name</Text>
          <TextInput
            value={name}
            onChangeText={setName}
            placeholder="Player name"
            placeholderTextColor="#94a3b8"
            style={styles.input}
          />
          <View style={{ flexDirection: 'row', gap: 8 }}>
            <Pressable
              style={[styles.btn, { backgroundColor: '#64748b' }]}
              onPress={onClose}
            >
              <Text style={styles.btnTxt}>Cancel</Text>
            </Pressable>
            <Pressable
              style={[styles.btn, { backgroundColor: '#22c55e' }]}
              onPress={handleSave}
            >
              <Text style={styles.btnTxt}>Save</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  backdrop: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.6)',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
  },
  card: {
    width: '100%',
    backgroundColor: '#0b1220',
    borderRadius: 16,
    padding: 16,
    borderWidth: 1,
    borderColor: '#1e293b',
  },
  title: { color: 'white', fontSize: 18, fontWeight: '600', marginBottom: 8 },
  label: { color: '#cbd5e1', marginBottom: 8 },
  input: {
    backgroundColor: '#0f172a',
    borderColor: '#334155',
    borderWidth: 1,
    borderRadius: 12,
    color: 'white',
    paddingHorizontal: 12,
    paddingVertical: 10,
    marginBottom: 12,
  },
  btn: {
    flex: 1,
    borderRadius: 12,
    paddingVertical: 12,
    alignItems: 'center',
  },
  btnTxt: { color: 'white', fontWeight: '600' },
});
