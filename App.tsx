/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { NewAppScreen } from '@react-native/new-app-screen';
import { StatusBar, StyleSheet, useColorScheme, View } from 'react-native';
import Root from './src/navigation/Root';

function App() {
  const isDarkMode = useColorScheme() === 'dark';

  return <Root />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
