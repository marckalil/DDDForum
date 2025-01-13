import { StyleSheet, View } from 'react-native';
import { useRouter } from 'expo-router';

import { Layout } from '@/src/components';
import { SignUpForm } from '@/src/components/SignUpForm';
import { isWeb } from '@/src/helpers';

export function SignUpPage() {
  const router = useRouter();
  const onSubmitForm = ({
    email,
    username,
    firstName,
    lastName
  }: {
    email: string;
    username: string;
    firstName: string;
    lastName: string;
  }) => {
    console.log(
      JSON.stringify({ email, username, firstName, lastName }, null, 2)
    );
    if (router.canGoBack()) router.back();
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
