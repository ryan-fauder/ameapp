import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  Text,
  StatusBar,
} from 'react-native';

declare const global: { HermesInternal: null | {} };

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView>
          <Text>Olá a aad</Text>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default App;
