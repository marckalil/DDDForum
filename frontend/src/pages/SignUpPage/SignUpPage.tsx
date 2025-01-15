import { useState } from 'react';

import { StyleSheet, View } from 'react-native';
import { useRouter } from 'expo-router';

import { Layout } from '@/src/components';
import { SignUpForm, SignUpFormInput } from '@/src/components/SignUpForm';
import { isWeb } from '@/src/helpers';
import { useUserContext } from '@/src/contexts';
import { User } from '@/src/types';
import { api } from '@/src/services';

export function SignUpPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const { setUser } = useUserContext();

  const onSubmitForm = async (signUpFormInput: SignUpFormInput) => {
    setLoading(true);
    try {
      // Make API call
      const user: User = await api.signup(signUpFormInput);
      // Save the user details to the cache
      setUser(user);
      // Show the toast

      // In 3 seconds, redirect to the main page
      if (router.canGoBack()) {
        const signupTimeOut = setTimeout(() => {
          router.back();
          setLoading(false);
        }, 3000);
        return () => clearTimeout(signupTimeOut);
      }
    } catch (err) {
      console.error(err);
      // If the call failed
      // Stop the spinner
      setLoading(false);
      // Show the toast (for unknown error)
    }
  };

  return (
    <Layout>
      <View style={[isWeb && styles.container]}>
        <SignUpForm onSubmit={onSubmitForm} loading={loading} />
      </View>
    </Layout>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '70%',
    alignSelf: 'center'
  }
});
