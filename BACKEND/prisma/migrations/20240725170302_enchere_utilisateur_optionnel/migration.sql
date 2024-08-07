-- DropForeignKey
ALTER TABLE "Enchere" DROP CONSTRAINT "Enchere_utilisateurId_fkey";

-- AlterTable
ALTER TABLE "Enchere" ALTER COLUMN "utilisateurId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "Enchere" ADD CONSTRAINT "Enchere_utilisateurId_fkey" FOREIGN KEY ("utilisateurId") REFERENCES "Utilisateur"("id") ON DELETE SET NULL ON UPDATE CASCADE;
