import { Dimensions, StyleSheet } from 'react-native';
import theme from '../../theme';

const ScreenWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  mainWrap: {
    height: '100%',
    padding: 20,
  },
  photoUploadScreenWrap: {
    height: '100%',
  },
  checkboxContainer: {
    borderColor: 'gray',
    borderStyle: 'solid',
    borderWidth: 1,
    borderRadius: 5,
    width: 40,
    height: 40,
    marginEnd: 20,
  },
  optionRow: {
    marginBottom: 20,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  subtitle: {
    // marginBottom: 40,
  },
  title: {
    textAlign: 'right',
    marginVertical: 20,
  },
  submitButton: {
    borderRadius: 5,
    marginTop: 30,
  },
  photoUploadContainer: {
    width: '100%',
    height: '53%',
    justifyContent: 'center',
    marginTop: 20,
  },
  photoCard: {
    width: (ScreenWidth - 70) / 3 - 10,
    height: 170,
    marginVertical: 10,
    marginHorizontal: 10,
    borderRadius: 5,
    position: 'relative',
  },
  removePhotoBtn: {
    position: 'absolute',
    bottom: -15,
    right: -15,
    backgroundColor: theme.colors.onBackground,
    height: 25,
    width: 25,
  },
  addPhotoBtn: {
    position: 'absolute',
    bottom: '40%',
    right: '30%',
    backgroundColor: theme.colors.onBackground,
    height: 25,
    width: 25,
  },
  photoImage: {
    width: '100%',
    height: '100%',
  },
  textInput: {
    marginTop: 40,
  },
  morePhotosBtn: {
    borderRadius: 5,
  },
  submitPhotosBtn: {
    borderRadius: 5,
    marginTop: 10,
  },
  horizontalStack: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    height: '100%',
    position: 'relative',
  },
  titleWrap: {
    paddingHorizontal: '10%',
  },
  uploadingSmileWrap: {
    width: '100%',
    alignItems: 'center',
    position: 'absolute',
    top: '15%',
  },
});

export default styles;
