import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../config/firebaseConfig';
import { saveUserProfile } from './firestore';
import { RegisterData } from '../types/registerData';

export const registerUser = async (data: RegisterData) => {
    const { email, password, ...profileData } = data;
    
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const uid = userCredential.user.uid;

    await saveUserProfile(uid, {
        ...profileData, 
        email,
        createdAt: new Date().toISOString()
    });

    return userCredential.user;
}
