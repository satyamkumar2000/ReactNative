import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    paddingTop: 60,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#111111',
  },
  input: {
    borderWidth: 1,
    borderColor: '#333333',
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
    backgroundColor: '#eeeeee',
    color: '#111111',
  },
  addButton: {
    backgroundColor: '#000000',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginBottom: 20,
  },
  addButtonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  list: {
    marginTop: 20,
  },
  listItemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#222222',
    padding: 10,
    borderRadius: 5,
    marginVertical: 5,
    borderBottomWidth: 1,
    borderBottomColor: '#444444',
  },
  listItem: {
    fontSize: 18,
    flex: 1,
    color: '#ffffff',
  },
  removeButton: {
    backgroundColor: '#000000',
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 4,
  },
  removeButtonText: {
    color: '#ffffff',
    fontWeight: 'bold',
  },
});

export default styles;
