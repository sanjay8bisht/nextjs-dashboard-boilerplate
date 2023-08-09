import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';
import { getJwtToken } from '@/utils/common';

const prisma = new PrismaClient();

export async function POST(request: Request, response: Response) {
    try {
        const { username, password } = await request.json();
        const user = await prisma.user.findUnique({
            where: { username, password },
            select: { id: true, username: true },
        });
        if (!user) {
            return NextResponse.json({ message: 'No user found' }, { status: 500 });
        }
        const jwtPayload = {
            id: user.id,
            username,
        };
        const token = await getJwtToken(jwtPayload);
        return NextResponse.json(
            { message: 'Logged in successfully', data: { userId: user.id, token } },
            { status: 200 }
        );
    } catch (err) {
        return NextResponse.json({ message: 'Unable to signup, try again' }, { status: 500 });
    }
}
