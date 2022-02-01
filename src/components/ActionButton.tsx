import React from 'react';
import { Icon, Fab } from 'native-base';
import theme from '../assets/styles/native-base-theme/variables/nswColor';
import { StyleSheet } from 'react-native';

type ButtonProps = {
  navigationFunc: () => void;
};

const styles = StyleSheet.create({
  addIcon: { fontSize: 28 },
  editIcon: { fontSize: 23 },
});

export const AddButton: React.FC<ButtonProps> = (props: ButtonProps) => (
  <Fab
    onPress={props.navigationFunc}
    style={{
      backgroundColor: theme.nswSecondaryBlueColor,
    }}>
    <Icon name="plus" type="FontAwesome5" style={styles.addIcon} />
  </Fab>
);

export const EditButton: React.FC<ButtonProps> = (props: ButtonProps) => (
  <Fab
    onPress={props.navigationFunc}
    style={{
      backgroundColor: theme.nswSecondaryBlueColor,
    }}>
    <Icon name="pen" type="FontAwesome5" style={styles.editIcon} />
  </Fab>
);
