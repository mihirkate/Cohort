import { PrismaClient } from "@prisma/client/extension";
import { NextRequest, } from "next/server";
const client = PrismaClient();
PrismaClient
export async function POST(req: NextRequest) {
    const body = await req.json();
    // should add zod validation here
    const user = await client.user.create({
        data: {
            username: body.username,
            password: body.password
        }
    });

    console.log(user.id);

    return Response.json({ message: "Signed up" });
}