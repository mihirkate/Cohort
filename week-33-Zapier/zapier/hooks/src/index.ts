import express from 'express';
import { PrismaClient } from '@prisma/client';
const client = new PrismaClient();

const app = express();

app.post('/hooks/catch/:userId/:zapId', async (req, res) => {
    const userId = req.params.userId;
    const zapId = req.params.zapId;
    const body = req.body;
    console.log('Received body:', body);

    //store in db a new trigger 
    await client.$transaction(async () => {
        const run = await client.zapRun.create({
            data: {
                zapId: zapId,
                metadata: body
            }
        })

        await client.zapRunOutbox.create({
            data: {
                zapRunId: run.id,

            }
        })


    });

});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});