import React from 'react';
import { Text, TextStyle } from 'react-native';
import theme from '../assets/styles/native-base-theme/variables/nswColor';

type Props = { style?: TextStyle | TextStyle[] };

const H6: React.FC<Props> = ({ children, style }) => {
  const passedStyles = Array.isArray(style)
    ? Object.assign({}, ...style)
    : style;

  return <Text style={[defaultStyles, { ...passedStyles }]}>{children}</Text>;
};

const defaultStyles = {
  fontSize: theme.fontSizeH6,
  fontFamily: theme.fontFamilyH6,
  lineHeight: theme.lineHeightH6,
  color: theme.textColor,
};

export default H6;
