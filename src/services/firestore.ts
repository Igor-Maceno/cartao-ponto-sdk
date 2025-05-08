import { doc, setDoc } from 'firebase/firestore';
import { db } from '../config/firebaseConfig';

export const saveUserProfile = async (uid: string, data: Record<string, any>) => {
    const userRef = doc(db, 'users', uid);
    try {
        await setDoc(userRef, data);
        console.log('Usuário cadastrado com sucesso!');
    } catch (error) {
        console.error('Erro ao salvar usuário: ', error);
    }
};