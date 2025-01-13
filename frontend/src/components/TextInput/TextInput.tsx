import {
  TextInput as RNTextInput,
  TextInputProps,
  StyleSheet
} from 'react-native';

export const TextInput = (props: TextInputProps) => {
  return (
    <RNTextInput {...props} style={styles.input} placeholderTextColor="grey" />
  );
};

const HEIGHT = 40;
const styles = StyleSheet.create({
  input: {
    height: HEIGHT,
    borderRadius: HEIGHT / 2,
    paddingHorizontal: HEIGHT / 2,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: 'black'
  }
});
