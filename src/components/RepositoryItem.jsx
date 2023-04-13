import { View, Image, StyleSheet } from 'react-native';
import Text from './Text';
import theme from '../theme';

const formatNumber = (num) => {
  if (num >= 1000) {
    return (`${Math.round(num / 1000 * 10) / 10}k`);
  } else {
    return num;
  }
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    height: 100
  },
  containerStats: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    height: 50
  },
  tab: {
    flexGrow: 0,
    color: "white",
    justifyContent: "space-around",
    paddingTop: 5,
    paddingLeft: 15
  },
  tabStats: {
    flexGrow: 1,
    color: "white",
    justifyContent: "space-around",
    paddingTop: 5,
    paddingLeft: 15 
  },
  tinyLogo: {
    width: 50,
    height: 50,
  },
  languageLogo: {
    height: 30,
    backgroundColor: theme.colors.primary,
    flexShrink: 1,
    padding: 5,
    borderRadius: 10
  }
});

const StatsTab = ({ text, number }) => (
  <View style={styles.tabStats}>
    <Text fontWeight="bold">{formatNumber(number)}</Text> 
    <Text>{text}</Text>
  </View>
);

const RepositoryItem = ({ item: { fullName,
                                  description,
                                  language,
                                  stargazersCount,
                                  forksCount,
                                  reviewCount,
                                  ratingAverage,
                                  ownerAvatarUrl }}) => {
  return (
    <View style = {{ backgroundColor: "white" }}>
      <View style={styles.container}>
        <View style={styles.tab}>
          <Image
            style={styles.tinyLogo}
            source={{ uri: ownerAvatarUrl }}
          />
        </View>
        <View style={styles.tab}>
          <Text fontWeight="bold">{fullName}</Text>
          <View style={{display: "flex", flexDirection: "row"}}>
          <Text>{description}</Text>
          </View>
          <View style={{display: "flex", flexDirection: "row"}}>
            <Text color="white" fontWeight="bold" style={styles.languageLogo}>{language}</Text>
          </View>   
        </View>
      </View>
      <View style={styles.containerStats}>
        <StatsTab text="Stars" number={stargazersCount}/>
        <StatsTab text="Forks" number={forksCount}/>
        <StatsTab text="Reviews" number={reviewCount}/>
        <StatsTab text="Rating" number={ratingAverage}/>
      </View>
    </View>
  )
}

export default RepositoryItem;