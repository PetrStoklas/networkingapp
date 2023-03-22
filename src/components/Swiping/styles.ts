import { Dimensions, StyleSheet } from 'react-native';
import theme from '../../theme';

const ScreenWidth = Dimensions.get('window').width;
const ScreenHeight = Dimensions.get('window').height;

const radius = 25;

const styles = StyleSheet.create({
  mainWrap: { position: 'relative', height: '100%' },
  card: {
    position: 'absolute',
    borderRadius: radius,
    shadowColor: theme.colors.shadow,
    shadowOffset: {
      width: 0,
      height: 9,
    },
    shadowOpacity: 0.48,
    shadowRadius: 11.95,
  },
  image: {
    width: ScreenWidth,
    height: ScreenHeight * 0.7,
    borderTopLeftRadius: radius,
    borderTopRightRadius: radius,
    margin: 'auto',
    display: 'flex',
  },
  name: {
    color: 'white',
    // bottom: 100,
    fontSize: 30,
    fontWeight: 'bold',
  },
  infoPanel: {
    maxHeight: 120,
    width: ScreenWidth,
    backgroundColor: theme.colors.primaryContainer,
    // borderRadius: radius,
    borderBottomLeftRadius: radius,
    borderTopRightRadius: radius,
    marginTop: -radius,
    paddingVertical: 15,
    paddingHorizontal: 25,
    display: 'flex',
    flexDirection: 'row',
    overflow: 'scroll',
    textOverflow: 'ellipsis',
  },
  leftColumnInfoPanel: {
    backgroundColor: 'transparent',
    // display: 'flex',
    // // flexDirection: 'column',
    // alignItems: 'baseline',
  },
  nameAndAge: {
    backgroundColor: 'transparent',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'baseline',
  },
  hobbiesContainer: {
    backgroundColor: 'transparent',
  },
  age: {
    color: 'white',
    fontSize: 25,
    marginLeft: 10,
  },
  bio: {
    color: 'white',
    fontSize: 15,
    height: '100%',
    width: ScreenWidth - 50,
    marginTop: 8,
  },
});

export default styles;
