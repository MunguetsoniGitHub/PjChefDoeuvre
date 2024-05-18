/*
  Warnings:

  - You are about to drop the column `typeCompte` on the `Utilisateur` table. All the data in the column will be lost.
  - Added the required column `dateNaissance` to the `Utilisateur` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "Role" AS ENUM ('UTILISATEUR_STANDARD', 'ADMINISTRATEUR');

-- AlterTable
ALTER TABLE "Utilisateur" DROP COLUMN "typeCompte",
ADD COLUMN     "dateNaissance" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "role" "Role" NOT NULL DEFAULT 'UTILISATEUR_STANDARD';
