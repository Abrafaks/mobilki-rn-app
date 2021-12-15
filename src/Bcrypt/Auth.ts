import * as crypto from 'expo-crypto';
import {CryptoEncoding} from 'expo-crypto';

class Auth {
    async hashPassword(password: string): Promise<string> {
        return crypto.digestStringAsync(crypto.CryptoDigestAlgorithm.SHA512, password, {encoding: CryptoEncoding.BASE64});
    }

    async arePasswordsMatching(inputPassword: string, userPassword: string) {
        const hashedPassword = await this.hashPassword(inputPassword);

        console.log('AUTH USER PASSWORD',userPassword)
            console.log('AUTH HASHED PASSWORD', hashedPassword)
        return hashedPassword === userPassword
    }
}

export default new Auth()