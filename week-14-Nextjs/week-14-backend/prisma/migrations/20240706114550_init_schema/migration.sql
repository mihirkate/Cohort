-- CreateTable
CREATE TABLE "UserWeek14" (
    "id" SERIAL NOT NULL,
    "username" TEXT NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "UserWeek14_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "UserWeek14_username_key" ON "UserWeek14"("username");
