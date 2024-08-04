/*
  Warnings:

  - Made the column `profileImageUrl` on table `Utilisateur` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Utilisateur" ALTER COLUMN "profileImageUrl" SET NOT NULL;
