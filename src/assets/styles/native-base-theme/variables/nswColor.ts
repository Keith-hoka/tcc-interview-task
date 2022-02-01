// @flow

import { Platform, Dimensions, PixelRatio } from 'react-native';

export const PLATFORM = {
  ANDROID: 'android',
  IOS: 'ios',
  MATERIAL: 'material',
  WEB: 'web',
};

const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;
const platform = Platform.OS;
const platformStyle = undefined;
const isIphoneX =
  platform === PLATFORM.IOS &&
  (deviceHeight === 812 ||
    deviceWidth === 812 ||
    deviceHeight === 896 ||
    deviceWidth === 896);

export default {
  platformStyle,
  platform,

  // Accordion
  headerStyle: '#edebed',
  iconStyle: '#000',
  contentStyle: '#f5f4f5',
  expandedIconStyle: '#000',
  accordionBorderColor: '#d3d3d3',

  // ActionSheet
  elevation: 4,
  containerTouchableBackgroundColor: 'rgba(0,0,0,0.4)',
  innerTouchableBackgroundColor: '#fff',
  listItemHeight: 50,
  listItemBorderColor: 'transparent',
  marginHorizontal: -15,
  marginLeft: 14,
  marginTop: 15,
  minHeight: 56,
  padding: 15,
  touchableTextColor: '#757575',

  // Android
  androidRipple: true,
  androidRippleColor: 'rgba(256, 256, 256, 0.3)',
  androidRippleColorDark: 'rgba(0, 0, 0, 0.15)',
  buttonUppercaseAndroidText: true,

  // Badge
  badgeBg: '#ED1727',
  badgeColor: '#fff',
  badgePadding: platform === PLATFORM.IOS ? 3 : 0,

  // Button
  // buttonFontFamily: platform === PLATFORM.IOS ? 'System' : 'Roboto_medium',

  get buttonFontFamily() {
    return this.fontFamilyBold;
  },

  buttonDisabledBg: '#b5b5b5',
  buttonPadding: 6,

  get buttonPrimaryBg() {
    return this.brandPrimary;
  },
  get buttonPrimaryColor() {
    return this.inverseTextColor;
  },
  get buttonInfoBg() {
    return this.brandInfo;
  },
  get buttonInfoColor() {
    return this.inverseTextColor;
  },
  get buttonSuccessBg() {
    return this.brandSuccess;
  },
  get buttonSuccessColor() {
    return this.inverseTextColor;
  },
  get buttonDangerBg() {
    return this.nswPrimaryHighlightColor;
    // return this.brandDanger;
  },
  get buttonDangerColor() {
    return this.inverseTextColor;
  },
  get buttonWarningBg() {
    return this.brandWarning;
  },
  get buttonWarningColor() {
    return this.inverseTextColor;
  },
  // get buttonTextSize() {
  //   return platform === PLATFORM.IOS
  //     ? this.fontSizeBase * 1.1
  //     : this.fontSizeBase - 1;
  // },
  get buttonTextSize() {
    return this.fontSizeBase;
  },

  get buttonTextSizeLarge() {
    return this.fontSizeBase * 1.5;
  },
  get buttonTextSizeSmall() {
    return this.fontSizeBase * 0.8;
  },
  get borderRadiusLarge() {
    return this.fontSizeBase * 3.8;
  },
  get iconSizeLarge() {
    return this.iconFontSize * 1.5;
  },
  get iconSizeSmall() {
    return this.iconFontSize * 0.6;
  },

  // Card
  // cardDefaultBg: '#fff',
  get cardDefaultBg() {
    // return this.light10Color;
    return this.whiteColor;
  },
  // cardBorderColor: '#ccc',
  get cardBorderColor() {
    return this.light20Color;
  },
  cardBorderRadius: 0,
  cardItemPadding: platform === PLATFORM.IOS ? 10 : 12,

  // CheckBox
  // CheckboxRadius: platform === PLATFORM.IOS ? 13 : 0,
  // CheckboxBorderWidth: platform === PLATFORM.IOS ? 1 : 2,
  // CheckboxPaddingLeft: platform === PLATFORM.IOS ? 4 : 2,
  // CheckboxPaddingBottom: platform === PLATFORM.IOS ? 0 : 5,
  // CheckboxIconSize: platform === PLATFORM.IOS ? 21 : 16,
  // CheckboxIconMarginTop: platform === PLATFORM.IOS ? undefined : 1,
  // CheckboxFontSize: platform === PLATFORM.IOS ? 23 / 0.9 : 17,
  // checkboxBgColor: '#039BE5',
  // checkboxSize: 20,
  // checkboxTickColor: '#fff',

  // CheckBox
  // CheckboxRadius: 0,
  // CheckboxBorderWidth: 2,
  // CheckboxPaddingLeft: 2,
  // CheckboxPaddingBottom: 5,
  // CheckboxIconSize: 16,
  // CheckboxIconMarginTop: 1,
  // CheckboxFontSize: 17,
  // checkboxBgColor: '#039BE5',
  // checkboxSize: 20,
  // checkboxTickColor: '#fff',

  // CheckBox
  // CheckboxRadius: platform === PLATFORM.IOS ? 13 : 0,
  CheckboxRadius: 4,
  // CheckboxBorderWidth: platform === PLATFORM.IOS ? 1 : 2,
  CheckboxBorderWidth: 1,
  CheckboxPaddingLeft: platform === PLATFORM.IOS ? 0 : 2,
  CheckboxPaddingBottom: platform === PLATFORM.IOS ? 0 : 5,
  CheckboxIconSize: platform === PLATFORM.IOS ? 19 : 16,
  CheckboxIconMarginTop: platform === PLATFORM.IOS ? undefined : 1,
  CheckboxFontSize: platform === PLATFORM.IOS ? 18 / 0.9 : 17,

  get checkboxBgColor() {
    return this.nswPrimaryBlueColor;
  },
  checkboxSize: 20,
  checkboxTickColor: '#fff',
  checkboxDefaultColor: 'transparent',
  checkboxTextShadowRadius: 0,
  // Color

  nswPrimaryBlueColor: '#002664',
  nswSecondaryBlueColor: '#2E5299',
  nswTertiaryBlueColor: '#0085B3',
  nswPrimaryHighlightColor: '#D7153A',

  nswInfoBlueColor: '#2E5299',
  nswSuccessGreenColor: '#00A908',
  nswWarningOrangeColor: '#DC5800',
  nswErrorRedColor: '#B81237',

  whiteColor: '#FFFFFF',
  light10Color: '#F4F4F7',
  light20Color: '#E4E4E6',
  light40Color: '#A0A5AE',
  dark60Color: '#6D7079',
  dark70Color: '#4C4F55',
  dark80Color: '#333333',
  blackColor: '#000000',

  brandPrimary: '#002664',
  brandInfo: '#62B1F6',
  brandSuccess: '#5cb85c',
  brandDanger: '#d9534f',
  brandWarning: '#f0ad4e',
  brandDark: '#000',
  brandLight: '#a9a9a9',

  // Container
  containerBgColor: '#fff',

  // Date Picker
  datePickerTextColor: '#000',
  datePickerBg: 'transparent',

  // FAB
  fabWidth: 56,

  // Font
  DefaultFontSize: 16,
  //   fontFamily: platform === PLATFORM.IOS ? 'System' : 'Roboto',
  fontFamily: 'Montserrat-Regular',
  fontFamilyBold: 'Montserrat-SemiBold',

  fontSizeBase: 15,

  get fontFamilyH1() {
    return this.fontFamilyBold;
  },
  fontSizeH1: 36,
  lineHeightH1: 45,

  get fontFamilyH2() {
    return this.fontFamilyBold;
  },
  fontSizeH2: 28,
  lineHeightH2: 35,

  get fontFamilyH3() {
    return this.fontFamilyBold;
  },
  fontSizeH3: 22,
  lineHeightH3: 27.5,

  get fontFamilyH4() {
    return this.fontFamilyBold;
  },
  fontSizeH4: 18,
  lineHeightH4: 22.5,

  get fontFamilyH5() {
    return this.fontFamilyBold;
  },
  fontSizeH5: 16,
  lineHeightH5: 20,

  get fontFamilyH6() {
    return this.fontFamilyBold;
  },
  fontSizeH6: 16,
  lineHeightH6: 20,

  get fontFamilySmall() {
    return this.fontFamily;
  },
  fontSizeSmall: 14,
  lineHeightSmall: 17.5,

  // Line Height
  buttonLineHeight: 19,

  lineHeight: platform === PLATFORM.IOS ? 20 : 24,

  // Footer
  footerHeight: 55,
  footerDefaultBg: platform === PLATFORM.IOS ? '#F8F8F8' : '#3F51B5',
  footerPaddingBottom: 0,

  // FooterTab
  tabBarTextColor: platform === PLATFORM.IOS ? '#737373' : '#bfc6ea',
  tabBarTextSize: platform === PLATFORM.IOS ? 14 : 11,
  activeTab: platform === PLATFORM.IOS ? '#007aff' : '#fff',
  sTabBarActiveTextColor: '#007aff',
  tabBarActiveTextColor: platform === PLATFORM.IOS ? '#2874F0' : '#fff',
  tabActiveBgColor: platform === PLATFORM.IOS ? '#cde1f9' : '#3F51B5',

  // Header
  toolbarBtnColor: platform === PLATFORM.IOS ? '#007aff' : '#fff',
  // toolbarDefaultBg: platform === PLATFORM.IOS ? '#F8F8F8' : '#3F51B5',

  get toolbarDefaultBg() {
    // return '#ff0000';
    return platform === PLATFORM.IOS ? '#F8F8F8' : this.nswPrimaryBlueColor;
  },
  toolbarHeight: platform === PLATFORM.IOS ? 64 : 56,
  toolbarSearchIconSize: platform === PLATFORM.IOS ? 20 : 23,
  toolbarInputColor: platform === PLATFORM.IOS ? '#CECDD2' : '#fff',
  searchBarHeight: platform === PLATFORM.IOS ? 30 : 40,
  searchBarInputHeight: platform === PLATFORM.IOS ? 30 : 50,
  toolbarBtnTextColor: platform === PLATFORM.IOS ? '#007aff' : '#fff',
  iosStatusbar: platform === PLATFORM.IOS ? 'dark-content' : 'light-content',
  toolbarDefaultBorder: platform === PLATFORM.IOS ? '#a7a6ab' : '#3F51B5',
  get statusBarColor() {
    // return color(this.toolbarDefaultBg).darken(0.2).hex();
    return this.nswSecondaryBlueColor;
  },

  // get statusBarColor() {
  //   return '#0000ff';
  // },

  // get darkenHeader() {
  //   return color(this.tabBgColor).darken(0.03).hex();
  // },

  get darkenHeader() {
    return '#00FF00';
  },

  // Icon
  iconFamily: 'Ionicons',
  iconFontSize: platform === PLATFORM.IOS ? 30 : 28,
  iconHeaderSize: platform === PLATFORM.IOS ? 33 : 24,

  // InputGroup
  inputFontSize: 16,

  get inputBorderColor() {
    return this.dark80Color;
  },

  inputSuccessBorderColor: '#2b8339',
  get inputErrorBorderColor() {
    return this.nswErrorRedColor;
  },

  inputHeightBase: 44,

  get inputColor() {
    return this.textColor;
  },
  get inputColorPlaceholder() {
    return this.light40Color;
  },

  // List
  listBg: 'transparent',
  listBorderColor: '#c9c9c9',
  listDividerBg: '#f4f4f4',
  listBtnUnderlayColor: '#DDD',
  listItemPadding: platform === PLATFORM.IOS ? 10 : 12,
  listNoteColor: '#808080',
  listNoteSize: 13,
  listItemSelected: platform === PLATFORM.IOS ? '#007aff' : '#3F51B5',

  // Progress Bar
  defaultProgressColor: '#E4202D',
  inverseProgressColor: '#1A191B',

  // Radio Button
  radioBtnSize: platform === PLATFORM.IOS ? 25 : 23,

  get radioSelectedColorAndroid() {
    return this.nswPrimaryBlueColor;
  },

  radioBtnLineHeight: platform === PLATFORM.IOS ? 29 : 24,
  get radioColor() {
    return this.nswPrimaryBlueColor;
  },

  // Segment
  segmentBackgroundColor: platform === PLATFORM.IOS ? '#F8F8F8' : '#3F51B5',
  segmentActiveBackgroundColor: platform === PLATFORM.IOS ? '#007aff' : '#fff',
  segmentTextColor: platform === PLATFORM.IOS ? '#007aff' : '#fff',
  segmentActiveTextColor: platform === PLATFORM.IOS ? '#fff' : '#3F51B5',
  segmentBorderColor: platform === PLATFORM.IOS ? '#007aff' : '#fff',
  segmentBorderColorMain: platform === PLATFORM.IOS ? '#a7a6ab' : '#3F51B5',

  // Spinner
  defaultSpinnerColor: '#45D56E',
  inverseSpinnerColor: '#1A191B',

  // Tab
  tabDefaultBg: platform === PLATFORM.IOS ? '#F8F8F8' : '#3F51B5',
  topTabBarTextColor: platform === PLATFORM.IOS ? '#6b6b6b' : '#b3c7f9',
  topTabBarActiveTextColor: platform === PLATFORM.IOS ? '#007aff' : '#fff',
  topTabBarBorderColor: platform === PLATFORM.IOS ? '#a7a6ab' : '#fff',
  topTabBarActiveBorderColor: platform === PLATFORM.IOS ? '#007aff' : '#fff',

  // Tabs
  tabBgColor: '#F8F8F8',
  tabFontSize: 15,

  get textColor() {
    return this.dark80Color;
  },

  inverseTextColor: '#fff',
  noteFontSize: 14,
  get defaultTextColor() {
    return this.textColor;
  },

  // Title
  // titleFontfamily: platform === PLATFORM.IOS ? 'System' : 'Roboto_medium',
  get titleFontFamily() {
    return this.fontFamilyBold;
  },
  titleFontSize: platform === PLATFORM.IOS ? 17 : 19,
  subTitleFontSize: platform === PLATFORM.IOS ? 11 : 14,
  subtitleColor: platform === PLATFORM.IOS ? '#000' : '#fff',
  titleFontColor: platform === PLATFORM.IOS ? '#000' : '#fff',

  // Other
  // borderRadiusBase: platform === PLATFORM.IOS ? 5 : 2,
  borderRadiusBase: 4,
  borderWidth: 1 / PixelRatio.getPixelSizeForLayoutSize(1),
  contentPadding: 10,
  dropdownLinkColor: '#414142',
  inputLineHeight: 24,
  deviceWidth,
  deviceHeight,
  isIphoneX,
  inputGroupRoundedBorderRadius: 30,

  // iPhoneX SafeArea
  Inset: {
    portrait: {
      topInset: 24,
      leftInset: 0,
      rightInset: 0,
      bottomInset: 34,
    },
    landscape: {
      topInset: 0,
      leftInset: 44,
      rightInset: 44,
      bottomInset: 21,
    },
  },
};
