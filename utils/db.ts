import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
    try {
        // 添加新任务
        const newTask = await prisma.task.create({
            data: {
                text: 'Write a script',
                date: new Date(),
                time: new Date(),
                completed: false,
            },
        });
        console.log('New task added:', newTask);
    } catch (error) {
        console.error('Error adding new task:', error);
    } finally {
        await prisma.$disconnect();
    }
}

main();
