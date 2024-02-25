-- CreateTable
CREATE TABLE "Todo" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "date" DATETIME NOT NULL,
    "time" DATETIME NOT NULL,
    "text" TEXT NOT NULL,
    "completed" BOOLEAN NOT NULL
);
