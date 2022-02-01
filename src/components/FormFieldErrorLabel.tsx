import React from 'react';
import { Text, StyleSheet, View } from 'react-native';
import theme from '../assets/styles/native-base-theme/variables/nswColor';
import { Icon } from 'native-base';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f7e7eb',
    marginTop: 8,
    padding: 2,
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 14,
    color: theme.dark80Color,
  },
  icon: { fontSize: 20, margin: 4, color: theme.nswErrorRedColor },
});

type Props = { text: string };

const FormFieldErrorLabel: React.FC<Props> = ({ text }) => {
  return (
    <View style={styles.container}>
      <Icon name="md-information-circle" style={styles.icon} />
      <Text style={styles.text}>{text}</Text>
    </View>
  );
};

export default FormFieldErrorLabel;
