import { JWTPayload, SignJWT, jwtVerify } from 'jose';
import { JWT_ALGO } from './constants';

export const jwtSecret = new TextEncoder().encode(process.env.JWT_SECRET);

export const getJwtToken = async (payload: JWTPayload) => {
    const token = await new SignJWT(payload)
        .setProtectedHeader({ alg: JWT_ALGO })
        .setIssuedAt()
        .setExpirationTime('1d')
        .sign(jwtSecret);
    return token;
};

export const verifyJWT = async (jwt: string): Promise<boolean> => {
    try {
        const { payload, protectedHeader } = await jwtVerify(jwt, jwtSecret);
        console.log('saasasasaasasasas', payload, protectedHeader);
        return payload ? true : false;
    } catch (err) {
        return false;
    }
};
