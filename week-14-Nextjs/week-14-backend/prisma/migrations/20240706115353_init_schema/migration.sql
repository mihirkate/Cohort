/*
  Warnings:

  - You are about to drop the `UserWeek14` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "UserWeek14";

-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "username" TEXT NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key" ON "User"("username");
