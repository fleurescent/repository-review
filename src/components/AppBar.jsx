import { View, StyleSheet, ScrollView } from 'react-native';
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
      <ScrollView horizontal>
        <AppBarTab text='Repositories' url='/' />
        <AppBarTab text='Sign in' url='/signin' />
      </ScrollView>
    </View>
  )
};

export default AppBar;