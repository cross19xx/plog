import React from 'react';
import { Image, Linking, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import ExternalIcon from '_/components/svg/external-icon';
import GithubIcon from '_/components/svg/github-icon';
import InstagramIcon from '_/components/svg/instagram-icon';
import LinkedinIcon from '_/components/svg/linkedin-icon';
import TwitterIcon from '_/components/svg/twitter-icon';

import useTheme from '_/hooks/useTheme';
import { MiscColors } from '_/utils/colors';

const LINKS = [
  {
    id: 'website',
    text: 'https://www.kwakye-gyamfi.com',
    url: 'https://www.kwakye-gyamfi.com',
    icon: ExternalIcon,
  },
  {
    id: 'github',
    text: 'Github = @cross19xx',
    url: 'https://github.com/cross19xx',
    icon: GithubIcon,
  },
  {
    // TODO: Fix Linkedin
    id: 'linkedin',
    text: 'Linkedin = @Kenneth Kwakye-Gyamfi',
    url: 'linkedin://profile/kenneth-kwakye-gyamfi',
    icon: LinkedinIcon,
  },
  {
    id: 'twitter',
    text: 'Twitter = @cross19xx',
    url: 'https://twitter.com/cross19xx',
    icon: TwitterIcon,
  },
  {
    id: 'instagram',
    text: 'Instagram = @kenneth_kwakyegyamfi',
    url: 'https://www.instagram.com/kenneth_kwakyegyamfi/',
    icon: InstagramIcon,
  },
];

const Info: React.FC = () => {
  const { colors } = useTheme();

  const handlePress = (url: string) => {
    Linking.openURL(url);
  };

  return (
    <SafeAreaView style={{ backgroundColor: colors.backgroundPrimary }}>
      <ScrollView contentContainerStyle={styles.container}>
        <Image source={require('_/assets/teddy-bear.png')} style={styles.logo} />
        <Text style={[styles.logoText, { color: colors.textPrimary }]}>
          <Text style={styles.logoTextInner}>Pl</Text>ush L
          <Text style={styles.logoTextInner}>og</Text>ger
        </Text>

        <Text style={[styles.description, { color: colors.textPrimary }]}>
          Hey there 😊. You&apos;ve stumbled across one of my free-time projects. Welcome to PLOG, a
          simple app for keeping track of your plush animal toys.{'\n\n'}It helps you organize them
          by your toy&apos;s name, animal species and even the purchase date.
          {'\n\n'}If you like what I did, check out my stuff below 😊👇🏾
        </Text>

        <View
          style={[
            styles.linkContainer,
            { backgroundColor: colors.backgroundSecondary, borderColor: colors.border },
          ]}>
          {LINKS.map((link, index) => {
            const isLast = index + 1 === LINKS.length;
            const Icon = link.icon;

            return (
              <TouchableOpacity onPress={() => handlePress(link.url)} key={link.id}>
                <View
                  style={[
                    styles.linkRow,
                    { borderBottomColor: isLast ? MiscColors.transparent : colors.border },
                  ]}>
                  <Icon size={20} color={colors.textPrimary} />
                  <Text style={[styles.linkText, { color: colors.textPrimary }]}>{link.text}</Text>
                </View>
              </TouchableOpacity>
            );
          })}
        </View>

        <Text style={[styles.footer, { color: colors.textSecondary }]}>
          Made by <Text style={{ color: colors.textPrimary }}>Kenneth Kwakye-Gyamfi</Text> with
          React Native, Typescript, Expo, and a sprinkle of ❤️. &copy; 2022
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingVertical: 24,
    alignItems: 'center',
  },

  logo: {
    width: 72,
    height: 72,
    marginBottom: 24,
  },
  logoText: {
    width: '100%',
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    textTransform: 'uppercase',
    marginBottom: 8,
  },
  logoTextInner: {
    color: MiscColors.primary,
  },
  description: {
    lineHeight: 20,
    marginBottom: 24,
  },

  linkContainer: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    width: '100%',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 32,
  },

  linkRow: {
    borderBottomWidth: 1,
    paddingVertical: 12,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  linkText: {
    flex: 1,
    paddingHorizontal: 8,
  },

  footer: {
    width: '100%',
    lineHeight: 18,
    fontSize: 12,
    textAlign: 'center',
  },
});

export default Info;
