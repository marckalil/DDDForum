import { useState } from 'react';

import { StyleSheet, View } from 'react-native';
import { useRouter } from 'expo-router';
import { Toast } from 'toastify-react-native';

import { Layout } from '@/src/components';
import { SignUpForm, SignUpFormInput } from '@/src/components/SignUpForm';
import { isWeb } from '@/src/helpers';
import { useUserContext } from '@/src/contexts';
import { User } from '@/src/types';
import { api } from '@/src/services';

function showSuccessToast() {
  Toast.success('Signup successful!', 'top');
}

function showErrorToast() {
  Toast.error('Signup failed!');
}

export function SignUpPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const { setUser } = useUserContext();

  const onSubmitForm = async (signUpFormInput: SignUpFormInput) => {
    setLoading(true);
    try {
      const user: User = await api.signup(signUpFormInput);
      setUser(user);
      showSuccessToast();
      if (router.canGoBack()) {
        const signupTimeOut = setTimeout(() => {
          router.back();
          setLoading(false);
        }, 3000);
        return () => clearTimeout(signupTimeOut);
      }
    } catch (error) {
      console.error(error);
      setLoading(false);
      showErrorToast();
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
