import { StyleSheet, View } from 'react-native';
import { useRouter } from 'expo-router';

import { Layout } from '@/src/components';
import { SignUpForm } from '@/src/components/SignUpForm';
import { isWeb } from '@/src/helpers';
import { useUserContext } from '@/src/contexts';
import { User } from '@/src/types';

export function SignUpPage() {
  const router = useRouter();
  const { setUser } = useUserContext();

  const onSubmitForm = ({ email, username, firstName, lastName }: User) => {
    try {
      // Make API call
      // Save the user details to the cache
      setUser({ email, username, firstName, lastName });
      // Stop the loading spinner
      // Show the toast
      // In 3 seconds, redirect to the main page
      if (router.canGoBack()) {
        const signupTimeOut = setTimeout(() => router.back(), 3000);
        return () => clearTimeout(signupTimeOut);
      }
    } catch (err) {
      console.error(err);
      // If the call failed
      // Stop the spinner
      // Show the toast (for unknown error)
    }
  };

  return (
    <Layout>
      <View style={[isWeb && styles.container]}>
        <SignUpForm onSubmit={onSubmitForm} />
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
