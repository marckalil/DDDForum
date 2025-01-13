import { Pressable, PressableProps, StyleSheet, Text } from 'react-native';

type ButtonProps = PressableProps & {
  label: string;
};

export function Button({ label, ...pressableProps }: ButtonProps) {
  return (
    <Pressable style={styles.container} {...pressableProps}>
      <Text style={styles.label}>{label}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 32,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 8,
    backgroundColor: '#0070f3',
    borderRadius: 4
  },
  label: {
    color: '#fff',
    fontSize: 14
  }
});
