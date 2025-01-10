
import express from "express";
import { z } from "zod";
import { PrismaClient } from "@prisma/client";

export const app = express();
app.use(express.json());

const prismaClient = new PrismaClient();
const sumInput = z.object({
    a: z.number(),
    b: z.number()
})

app.post("/sum", async (req, res) => {
    const parsedResponse = sumInput.safeParse(req.body)

    if (!parsedResponse.success) {
        return res.status(411).json({
            message: "Incorrect inputs"
        })
    }

    const answer = parsedResponse.data.a + parsedResponse.data.b;
    prismaClient.sum.create({
        data: {
            a: 1, b: 2,
            result: 3
        }
    })
    res.json({
        answer
    })
});

app.get("/sum", (req, res) => {
    const parsedResponse = sumInput.safeParse({
        a: Number(req.headers["a"]),
        b: Number(req.headers["b"])
    })

    if (!parsedResponse.success) {
        return res.status(411).json({
            message: "Incorrect inputs"
        })
    }

    const answer = parsedResponse.data.a + parsedResponse.data.b;

    res.json({
        answer
    })
});