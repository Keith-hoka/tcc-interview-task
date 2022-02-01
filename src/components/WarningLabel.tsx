import React from 'react';
import { Text, StyleSheet, View } from 'react-native';
import theme from '../assets/styles/native-base-theme/variables/nswColor';
import { Icon } from 'native-base';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f7f7e7',
    marginVertical: 8,
    padding: 2,
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 14,
    color: theme.dark80Color,
    paddingVertical: 2,
    marginLeft: 8,
    marginRight: 28,
  },
  icon: { fontSize: 20, margin: 4, color: theme.nswWarningOrangeColor },
});

const WarningLabel: React.FC = ({ children }) => {
  return (
    <View style={styles.container}>
      <Icon name="md-information-circle" style={styles.icon} />
      <Text style={styles.text}>{children}</Text>
    </View>
  );
};

export default WarningLabel;
