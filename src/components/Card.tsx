import React from 'react';
import { StyleSheet, View, StyleProp, ViewStyle } from 'react-native';
import { H3, Icon } from 'native-base';
import theme from '../assets/styles/native-base-theme/variables/nswColor';

const styles = StyleSheet.create({
  cardHeader: {
    flexDirection: 'row',
    paddingHorizontal: 16,
    marginBottom: 8,
    paddingTop: 16,
    alignItems: 'center',
    color: theme.nswPrimaryBlueColor,
  },
  icon: {
    fontSize: 30,
    marginRight: 14,
    paddingBottom: 4,
  },
  nswCard: {
    borderTopColor: theme.nswPrimaryHighlightColor,
    borderTopWidth: 4,
    marginLeft: 8,
    marginRight: 8,
    marginTop: 16,
    marginBottom: 8,
    shadowColor: 'black',
    shadowOpacity: 0.2,
    shadowOffset: { width: 2, height: 2 },
    shadowRadius: 6.5,
    elevation: 3,
    backgroundColor: 'white',
    borderRadius: 4,
  },
});
type Props = {
  style?: StyleProp<ViewStyle> | StyleProp<ViewStyle>[];
  title?: string;
  titleIconName?: string;
  titleIconType?:
    | 'AntDesign'
    | 'Entypo'
    | 'EvilIcons'
    | 'Feather'
    | 'FontAwesome'
    | 'FontAwesome5'
    | 'Foundation'
    | 'Ionicons'
    | 'MaterialCommunityIcons'
    | 'MaterialIcons'
    | 'Octicons'
    | 'SimpleLineIcons'
    | 'Zocial';
  titleColor?: string;
};

const Card: React.FC<Props> = ({
  children,
  style,
  title,
  titleIconName,
  titleIconType = 'Ionicons',
  titleColor = theme.nswPrimaryBlueColor,
}) => {
  const passedStyles = Array.isArray(style)
    ? Object.assign({}, ...style)
    : style;

  return (
    <View style={[styles.nswCard, { ...passedStyles }]}>
      <View style={[styles.cardHeader]}>
        {titleIconName && (
          <Icon
            name={titleIconName}
            style={[styles.icon, { color: titleColor }]}
            type={titleIconType}
          />
        )}
        {title && <H3 style={{ color: titleColor }}>{title}</H3>}
      </View>
      {children}
    </View>
  );
};

export default Card;
