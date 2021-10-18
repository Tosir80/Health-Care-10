import { initializeApp } from 'firebase/app';
import firebaseConfig from './fiirebase.config';

const firebaseIntailize =()=>{
    initializeApp(firebaseConfig);
}

export default firebaseIntailize