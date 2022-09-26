-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "name" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "photo" TEXT,
    "fatherName" TEXT,
    "mobile" TEXT NOT NULL,
    "motherName" TEXT,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);
