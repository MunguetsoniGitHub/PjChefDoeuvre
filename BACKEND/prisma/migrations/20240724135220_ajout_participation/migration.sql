-- CreateTable
CREATE TABLE "Participation" (
    "id" SERIAL NOT NULL,
    "utilisateurId" INTEGER NOT NULL,
    "enchereId" INTEGER NOT NULL,

    CONSTRAINT "Participation_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Participation" ADD CONSTRAINT "Participation_utilisateurId_fkey" FOREIGN KEY ("utilisateurId") REFERENCES "Utilisateur"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Participation" ADD CONSTRAINT "Participation_enchereId_fkey" FOREIGN KEY ("enchereId") REFERENCES "Enchere"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
