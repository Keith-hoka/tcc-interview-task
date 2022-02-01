import React from 'react';
import { Text, TextStyle } from 'react-native';
import theme from '../assets/styles/native-base-theme/variables/nswColor';

type Props = { style?: TextStyle | TextStyle[] };

const H1: React.FC<Props> = ({ children, style }) => {
  const passedStyles = Array.isArray(style)
    ? Object.assign({}, ...style)
    : style;

  return <Text style={[defaultStyles, { ...passedStyles }]}>{children}</Text>;
};

const defaultStyles = {
  fontSize: theme.fontSizeH1,
  fontFamily: theme.fontFamilyH1,
  color: theme.textColor,
};

export default H1;
