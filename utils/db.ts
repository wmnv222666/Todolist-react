// 'use server'

import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
// async function main() {
//     const newTask = await prisma.todo.create({
//                 data: {
//                     text:"Javascript",
//                     date:"2024-02-25",
//                     time:"3:45",
//                     completed: false,
//                 },
//             });
//     // console.log(newTask,"newTask")

//     const tasks = await prisma.todo.findMany();
//     console.log(tasks)
//     return tasks;

// }

// main()
//     .then(async () => {
//         await prisma.$disconnect();
//     })
//     .catch(async (e) => {
//         console.log(e)
//         await prisma.$disconnect();
//         process.exit(1);
//     });




// 添加任务
export async function addTask(text: string, date: Date, time: Date) {
    try {
        const newTask = await prisma.todo.create({
            data: {
                text,
                date,
                time,
                completed: false,
            },
        });
        return newTask;
    } catch (error) {
        throw new Error(`Error adding task: ${error}`);
    }
}

// 删除任务
export async function deleteTask(id: number) {
    try {
        await prisma.todo.delete({
            where: { id },
        });
    } catch (error) {
        throw new Error(`Error deleting task: ${error}`);
    }
}

// // 编辑任务
export async function editTask(id: number, newText: string, newDate: Date, newTime: Date) {
    try {
        const updatedTask = await prisma.todo.update({
            where: { id },
            data: {
                text: newText,
                date: newDate,
                time: newTime,
            },
        });
        return updatedTask;
    } catch (error) {
        throw new Error(`Error editing task: ${error}`);
    }
}

// // 更新任务完成状态
export async function toggleTaskCompletion(id: number) {
    try {
        const task = await prisma.todo.findUnique({
            where: { id },
        });
        if (!task) {
            throw new Error(`Task with ID ${id} not found`);
        }
        const updatedTask = await prisma.todo.update({
            where: { id },
            data: {
                completed: !task.completed,
            },
        });
        return updatedTask;
    } catch (error) {
        throw new Error(`Error toggling task completion: ${error}`);
    }
}

// // 获取所有任务
export async function getTasks() {
    try {
        const tasks = await prisma.todo.findMany();
        return tasks;
    } catch (error) {
        throw new Error(`Error getting tasks: ${error}`);
    }
}

// 断开数据库连接
export async function disconnect() {
    await prisma.$disconnect();
}


