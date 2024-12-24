import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors'; 
import { PrismaClient } from '@prisma/client';

const app = express();
const prisma = new PrismaClient();


app.use(cors());


app.use(bodyParser.json());


app.get('/tasks', async (req, res) => {
    try {
        const tasks = await prisma.task.findMany();
        res.status(200).json(tasks);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch tasks' });
    }
});

app.post('/tasks', async (req, res) => {
    const { title, color } = req.body;
    if (!title || !color) {
        res.status(400).json({ error: 'Title and color are required' });
        return;
    }

    try {
        const task = await prisma.task.create({
            data: { title, color },
        });
        res.json(task);
    } catch (error) {
        res.status(400).json({ error: 'Invalid data' });
    }
});

app.put('/tasks/:id', async (req, res) => {
    const { id } = req.params;
    const { title, color, completed } = req.body;
    try {
        const task = await prisma.task.update({
            where: { id: parseInt(id, 10) },
            data: { title, color, completed },
        });
        res.status(200).json(task);
    } catch (error) {
        res.status(404).json({ error: 'Task not found' });
    }
});


app.delete('/tasks/:id', async (req, res) => {
    const { id } = req.params;
    try {
        await prisma.task.delete({
            where: { id: parseInt(id, 10) },
        });
        res.status(200).json({ message: 'Task deleted successfully' });
    } catch (error) {
        res.status(404).json({ error: 'Task not found' });
    }
});


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
