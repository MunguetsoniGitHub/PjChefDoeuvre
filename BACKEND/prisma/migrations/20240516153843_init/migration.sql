/*
  Warnings:

  - Added the required column `postnom` to the `Utilisateur` table without a default value. This is not possible if the table is not empty.
  - Added the required column `prenom` to the `Utilisateur` table without a default value. This is not possible if the table is not empty.
  - Changed the type of `numeroTel` on the `Utilisateur` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "Utilisateur" ADD COLUMN     "postnom" TEXT NOT NULL,
ADD COLUMN     "prenom" TEXT NOT NULL,
DROP COLUMN "numeroTel",
ADD COLUMN     "numeroTel" INTEGER NOT NULL;
