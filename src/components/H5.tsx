import React from 'react';
import { Text, TextStyle } from 'react-native';
import theme from '../assets/styles/native-base-theme/variables/nswColor';

type Props = { style?: TextStyle | TextStyle[] };

const H5: React.FC<Props> = ({ children, style }) => {
  const passedStyles = Array.isArray(style)
    ? Object.assign({}, ...style)
    : style;

  return <Text style={[defaultStyles, { ...passedStyles }]}>{children}</Text>;
};

const defaultStyles = {
  fontSize: theme.fontSizeH5,
  fontFamily: theme.fontFamilyH5,
  color: theme.textColor,
};

export default H5;
