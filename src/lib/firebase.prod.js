import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// 1) when seeding the database you'll have to uncomment this!
import { seedDatabase } from '../seed';

const config = {
  apiKey: 'AIzaSyA6-U3ftC1DkQBoRlUh9LHCe2Gl1OizyPI',
  authDomain: 'netflix-clone-2e330.firebaseapp.com',
  databaseURL: 'https://netflix-clone-2e330.firebaseio.com',
  projectId: 'netflix-clone-2e330',
  storageBucket: 'netflix-clone-2e330.appspot.com',
  messagingSenderId: '251448428310',
  appId: '1:251448428310:web:bd62afbc7698e63402f237',
  measurementId: 'G-5L61G1QPF4',
};

const firebase = Firebase.initializeApp(config);
// 2) when seeding the database you'll have to uncomment this!
//seedDatabase(firebase);
// 3) once you have populated the database (only run once!), re-comment this so you don't get duplicate data

export { firebase };
