import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import {Button, StyleProvider, Text, View} from 'native-base';
import getTheme from '../src/assets/styles/native-base-theme/components';
import theme from '../src/assets/styles/native-base-theme/variables/nswColor';
import {StyleSheet} from 'react-native';

import {Provider} from 'react-redux';
import Store from './redux';
const {store} = Store;

import {Card} from './components';

// import RootNavigator from './navigation/Root';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default function App() {
  return (
    <Provider store={store}>
      <StyleProvider style={getTheme(theme)}>
        <NavigationContainer>
          {/* <RootNavigator /> */}
          <View style={styles.container}>
            <Card
              title="Pokemon"
              titleIconName="medkit"
              titleIconType="FontAwesome5">
              <Text>Pokemon Image</Text>
              <Text>Name</Text>
              <Text>Type</Text>
              <Text>Abilities</Text>
              <Button>
                <Text>Push me</Text>
              </Button>
            </Card>
          </View>
        </NavigationContainer>
      </StyleProvider>
    </Provider>
  );
}
