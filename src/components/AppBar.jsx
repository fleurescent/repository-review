import { View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import theme from '../theme';
import AppBarTab from './AppBarTab';

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: "row",
    height: 80,
    backgroundColor: theme.colors.background,
    alignItems: "center",
    paddingTop: Constants.statusBarHeight,
  }
});

const AppBar = () => {
  return (
    <View style={styles.container}>
      <AppBarTab text='Repositories' />
    </View>
  )
};

export default AppBar;