/*
  Warnings:

  - A unique constraint covering the columns `[utilisateurId,enchereId]` on the table `Participation` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "Annonce" ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;

-- AlterTable
ALTER TABLE "Enchere" ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;

-- AlterTable
ALTER TABLE "Offre" ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;

-- AlterTable
ALTER TABLE "Participation" ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;

-- AlterTable
ALTER TABLE "Utilisateur" ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;

-- CreateIndex
CREATE UNIQUE INDEX "Participation_utilisateurId_enchereId_key" ON "Participation"("utilisateurId", "enchereId");
