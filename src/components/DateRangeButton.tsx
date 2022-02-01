import React from 'react';

import {
  TouchableOpacity,
  StyleSheet,
  GestureResponderEvent,
} from 'react-native';
import { Text, Icon } from 'native-base';

import theme from '../assets/styles/native-base-theme/variables/nswColor';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  text: {
    fontSize: 20,
    padding: 2,
    color: theme.nswSecondaryBlueColor,
  },
  icon: {
    alignSelf: 'center',
    fontSize: 20,
    paddingRight: 5,
    color: theme.nswSecondaryBlueColor,
  },
});

interface Props {
  text: string;
  onPress: (event: GestureResponderEvent) => void;
}

const DateRangeButton: React.FC<Props> = ({ text, onPress }) => {
  return (
    <>
      <TouchableOpacity onPress={onPress} style={styles.container}>
        <Icon type="FontAwesome" name="calendar" style={styles.icon} />
        <Text adjustsFontSizeToFit numberOfLines={1} style={styles.text}>
          {text}
        </Text>
      </TouchableOpacity>
    </>
  );
};

export default DateRangeButton;
