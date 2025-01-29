import { useState } from 'react';

import { StyleSheet, Text, View } from 'react-native';
import { Toast } from 'toastify-react-native';

import { TextInput } from '../TextInput';
import { Link } from '../Link';
import { Button } from '../Button';

export type SignUpFormInput = {
  email: string;
  firstName: string;
  lastName: string;
  username: string;
};

type SignUpFormProps = {
  loading: boolean;
  onSubmit: (user: SignUpFormInput) => void;
};

type SignupFormValidation = {
  errorMessage: string;
  success: boolean;
};
function validateForm(formInput: SignUpFormInput): SignupFormValidation {
  const { email, firstName, lastName, username } = formInput;
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  if (!emailRegex.test(email))
    return { errorMessage: 'Invalid email', success: false };
  if (!username) return { errorMessage: 'Invalid username', success: false };
  if (!firstName) return { errorMessage: 'Invalid first name', success: false };
  if (!lastName) return { errorMessage: 'Invalid last name', success: false };
  return { errorMessage: '', success: true };
}

export function SignUpForm({ loading, onSubmit }: SignUpFormProps) {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  const onSubmitForm = () => {
    const formInput: SignUpFormInput = { email, firstName, lastName, username };
    const { success, errorMessage } = validateForm(formInput);
    if (success) onSubmit({ email, username, firstName, lastName });
    else Toast.error(errorMessage);
  };

  return (
    <View style={styles.container}>
      <Text>Create Account</Text>
      <TextInput
        onChangeText={setEmail}
        placeholder="Email"
        value={email}
        keyboardType="email-address"
      />
      <TextInput
        onChangeText={setUsername}
        placeholder="Username"
        value={username}
      />
      <TextInput
        onChangeText={setFirstName}
        placeholder="First name"
        value={firstName}
      />
      <TextInput
        onChangeText={setLastName}
        placeholder="Last name"
        value={lastName}
      />
      <View>
        <Text>Already have an account?</Text>
        <Link href="/">Login</Link>
      </View>
      <Button label="Submit" loading={loading} onPress={onSubmitForm} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 10
  }
});
