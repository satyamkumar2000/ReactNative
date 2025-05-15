import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 12,
  },
  galleryTitle: {
    fontSize: 24,
    fontWeight: '600',
    textAlign: 'center',
    marginBottom: 20,
    color: '#000',
  },
  galleryCard: {
    marginBottom: 25,
    alignItems: 'center',
  },
  thumbnail: {
    width: '92%',
    height: 220,
    borderRadius: 10,
    marginBottom: 8,
  },
  caption: {
    fontSize: 16,
    color: '#000',
    textAlign: 'center',
  },
  fullImage: {
  width: '100%',
  height: 400,          
  resizeMode: 'cover',   
  marginBottom: 20,
},
  fullCaption: {
    fontSize: 18,
    fontWeight: '600',
    color: '#000',
    marginBottom: 10,
  },
  readOnlyBox: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 50,
    marginBottom: 30,
  },
  readOnlyText: {
    fontSize: 20,
    fontWeight: '600',
    color: '#000',
    marginVertical: 4,
  },
  editBox: {
    width: '100%',
  },
  input: {
    marginVertical: 8,
    backgroundColor: '#ffffff',
    color: '#000000',
  },
  toggleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  toggleText: {
    fontSize: 16,
    color: '#000000',
    marginRight: 10,
  },
  radioRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5,
  },
});
