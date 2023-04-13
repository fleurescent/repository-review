import { Pressable, StyleSheet } from 'react-native';
import Text from './Text';

const styles = StyleSheet.create({
  tab: {
    flexGrow: 0,
    paddingLeft: 15
  }
});

const AppBarTab = ({ text }) => {
  return (
    <Pressable>
      <Text fontWeight='bold' color='white' fontSize='subheading' style={styles.tab}>
        {text}
      </Text>
    </Pressable>
  )
};

export default AppBarTab;