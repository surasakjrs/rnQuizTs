import React from 'react';
import { Pressable, Text, StyleSheet } from 'react-native';

type Props = {
  text: string;
  onPress: () => void;
  disabled?: boolean;
};

export default function AnswerButton({ text, onPress, disabled }: Props) {
  return (
    <Pressable
      onPress={onPress}
      disabled={disabled}
      style={({ pressed }) => [
        styles.btn,
        pressed && { opacity: 0.8 },
        disabled && { opacity: 0.5 },
      ]}
    >
      <Text style={styles.txt}>{text}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  btn: {
    backgroundColor: '#1e293b',
    borderColor: '#334155',
    borderWidth: 1,
    paddingVertical: 14,
    paddingHorizontal: 16,
    borderRadius: 12,
    marginVertical: 6,
  },
  txt: { color: 'white', fontSize: 16 },
});
