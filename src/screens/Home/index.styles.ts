import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    width: `90%`,
    borderRadius: 10,
    backgroundColor: 'skyblue',
    padding: 8,
    alignSelf: 'center',
  },
  loading: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loadingContainer: {
    padding: 16,
    backgroundColor: '#FFF',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#e1e1e1',
    gap: 8,
  },
});
