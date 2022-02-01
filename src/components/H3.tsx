import React from 'react';
import { Text, TextStyle } from 'react-native';
import theme from '../assets/styles/native-base-theme/variables/nswColor';

type Props = { style?: TextStyle | TextStyle[] };

const H3: React.FC<Props> = ({ children, style }) => {
  const passedStyles = Array.isArray(style)
    ? Object.assign({}, ...style)
    : style;

  return <Text style={[defaultStyles, { ...passedStyles }]}>{children}</Text>;
};

const defaultStyles = {
  fontSize: theme.fontSizeH3,
  fontFamily: theme.fontFamilyH3,
  color: theme.textColor,
};

export default H3;
