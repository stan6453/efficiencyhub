import { currentUser } from '@clerk/nextjs';

export async function authenticateUser() {
    return await currentUser();
}

export async function getAuthUser(){
    const user = await currentUser();
    return user
}

export async function getAuthUserData(){
    const user = await currentUser();
}