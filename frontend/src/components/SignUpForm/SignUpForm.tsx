import { useState } from 'react';

import { StyleSheet, Text, View } from 'react-native';

import { TextInput } from '../TextInput';
import { Link } from '../Link';
import { Button } from '../Button';

import { User } from '@/src/types';

type SignUpFormProps = {
  onSubmit: (user: User) => void;
};

export function SignUpForm({ onSubmit }: SignUpFormProps) {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  const onSubmitForm = () => {
    onSubmit({ email, username, firstName, lastName });
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
      <Button label="Submit" onPress={onSubmitForm} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 10
  }
});
