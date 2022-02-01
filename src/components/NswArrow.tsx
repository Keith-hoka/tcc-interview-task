import React from 'react';
import { Icon } from 'native-base';
import theme from '../assets/styles/native-base-theme/variables/nswColor';

const NswArrow: React.FC = () => (
  <Icon
    name="arrowright"
    type="AntDesign"
    style={{ color: theme.nswPrimaryBlueColor }}
  />
);

export default NswArrow;
