/*
  Warnings:

  - You are about to drop the column `dateEnchere` on the `Enchere` table. All the data in the column will be lost.
  - You are about to drop the column `montantEnchere` on the `Enchere` table. All the data in the column will be lost.
  - Added the required column `dateHeureDebut` to the `Enchere` table without a default value. This is not possible if the table is not empty.
  - Added the required column `dateHeureFin` to the `Enchere` table without a default value. This is not possible if the table is not empty.
  - Added the required column `meilleurMontant` to the `Enchere` table without a default value. This is not possible if the table is not empty.
  - Added the required column `montantDuDepart` to the `Enchere` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Enchere" DROP COLUMN "dateEnchere",
DROP COLUMN "montantEnchere",
ADD COLUMN     "dateHeureDebut" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "dateHeureFin" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "meilleurMontant" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "montantDuDepart" DOUBLE PRECISION NOT NULL;
