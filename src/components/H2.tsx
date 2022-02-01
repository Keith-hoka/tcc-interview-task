import React from 'react';
import { Text, TextStyle } from 'react-native';
import theme from '../assets/styles/native-base-theme/variables/nswColor';

type Props = { style?: TextStyle | TextStyle[] };

const H2: React.FC<Props> = ({ children, style }) => {
  const passedStyles = Array.isArray(style)
    ? Object.assign({}, ...style)
    : style;

  return <Text style={[defaultStyles, { ...passedStyles }]}>{children}</Text>;
};

const defaultStyles = {
  fontSize: theme.fontSizeH2,
  fontFamily: theme.fontFamilyH2,
  color: theme.textColor,
};

export default H2;
