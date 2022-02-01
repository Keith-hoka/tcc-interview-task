import React from 'react';
import { Text, StyleSheet, TextStyle } from 'react-native';

import theme from '../assets/styles/native-base-theme/variables/nswColor';

type SmallTextProps = { style?: TextStyle | TextStyle[] };

const styles = StyleSheet.create({
  small: {
    fontSize: theme.fontSizeSmall,
    fontFamily: theme.fontFamily,
    lineHeight: theme.lineHeightSmall,
    color: theme.textColor,
  },
});

const SmallText: React.FC<SmallTextProps> = ({ children, style }) => {
  const passedStyles = Array.isArray(style)
    ? Object.assign({}, ...style)
    : style;

  return <Text style={[styles.small, { ...passedStyles }]}>{children}</Text>;
};

export default SmallText;
