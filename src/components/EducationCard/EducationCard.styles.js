import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    borderRadius: 20,
    width: 98,
    height: 98,
  },
  inner_container: {
    padding: 10,
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    fontWeight: 'bold',
    color: 'black',
    fontSize: 15,
  },
  info_container: {
    flex: 1,
  },
  dil: {
    fontSize: 13,
    color: '#2C3A47',
  },
  fiyat: {
    fontWeight: 'bold',
    color: '#ff3838',
    textAlign: 'right',
  },
});
