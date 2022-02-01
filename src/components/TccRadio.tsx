import { Radio } from 'native-base';
import React from 'react';
import { GestureResponderEvent } from 'react-native';

import theme from '../assets/styles/native-base-theme/variables/nswColor';

type Props = {
  selected?: boolean;
  onPress?: (event: GestureResponderEvent) => void;
};
const TccRadio: React.FC<Props> = ({ selected, onPress }) => {
  return (
    <Radio
      color={theme.nswPrimaryBlueColor}
      selected={selected}
      standardStyle={true}
      onPress={onPress}
    />
  );
};

export default TccRadio;
