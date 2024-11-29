import { StyleSheet, TextStyle, StyleProp } from 'react-native';
import { Link as ExpoRouterLink } from 'expo-router';
import type { Href } from 'expo-router';

type LinkProps = {
  children: React.ReactNode;
  href: Href;
  linkType?: 'button' | 'link';
  style?: StyleProp<TextStyle>;
};

export function Link({ href, children, linkType = 'link', style }: LinkProps) {
  return (
    <ExpoRouterLink href={href} style={[styles[linkType], style]}>
      {children}
    </ExpoRouterLink>
  );
}

const styles = StyleSheet.create({
  button: {
    padding: 8,
    backgroundColor: '#0070f3',
    color: '#fff',
    borderRadius: 4,
    fontSize: 14
  },
  link: {
    fontSize: 14,
    textDecorationLine: 'underline'
  }
});
