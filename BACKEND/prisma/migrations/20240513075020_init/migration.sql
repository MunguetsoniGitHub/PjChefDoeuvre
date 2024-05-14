-- CreateTable
CREATE TABLE "Utilisateur" (
    "id" SERIAL NOT NULL,
    "nom" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "motDePasse" TEXT NOT NULL,
    "adresse" TEXT NOT NULL,
    "numeroTel" TEXT NOT NULL,
    "typeCompte" TEXT NOT NULL,

    CONSTRAINT "Utilisateur_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Annonce" (
    "id" SERIAL NOT NULL,
    "titre" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "typeBien" TEXT NOT NULL,
    "surface" DOUBLE PRECISION NOT NULL,
    "localisation" TEXT NOT NULL,
    "prixInitial" DOUBLE PRECISION NOT NULL,
    "proprietaireId" INTEGER NOT NULL,

    CONSTRAINT "Annonce_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Enchere" (
    "id" SERIAL NOT NULL,
    "montantEnchere" DOUBLE PRECISION NOT NULL,
    "dateEnchere" TIMESTAMP(3) NOT NULL,
    "utilisateurId" INTEGER NOT NULL,
    "annonceId" INTEGER NOT NULL,

    CONSTRAINT "Enchere_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Offre" (
    "id" SERIAL NOT NULL,
    "montantOffre" DOUBLE PRECISION NOT NULL,
    "dateOffre" TIMESTAMP(3) NOT NULL,
    "utilisateurId" INTEGER NOT NULL,
    "enchereId" INTEGER NOT NULL,

    CONSTRAINT "Offre_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Image" (
    "id" SERIAL NOT NULL,
    "lienImage" TEXT NOT NULL,
    "annonceId" INTEGER NOT NULL,

    CONSTRAINT "Image_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Notification" (
    "id" SERIAL NOT NULL,
    "contenuNotification" TEXT NOT NULL,
    "dateNotification" TIMESTAMP(3) NOT NULL,
    "utilisateurId" INTEGER NOT NULL,

    CONSTRAINT "Notification_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "DemandeValidation" (
    "id" SERIAL NOT NULL,
    "statutDemande" TEXT NOT NULL,
    "dateDemande" TIMESTAMP(3) NOT NULL,
    "utilisateurId" INTEGER NOT NULL,
    "annonceId" INTEGER NOT NULL,

    CONSTRAINT "DemandeValidation_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PaiementsAcompte" (
    "id" SERIAL NOT NULL,
    "montantAcompte" DOUBLE PRECISION NOT NULL,
    "datePaiement" TIMESTAMP(3) NOT NULL,
    "offreId" INTEGER NOT NULL,

    CONSTRAINT "PaiementsAcompte_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Utilisateur_email_key" ON "Utilisateur"("email");

-- AddForeignKey
ALTER TABLE "Annonce" ADD CONSTRAINT "Annonce_proprietaireId_fkey" FOREIGN KEY ("proprietaireId") REFERENCES "Utilisateur"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Enchere" ADD CONSTRAINT "Enchere_utilisateurId_fkey" FOREIGN KEY ("utilisateurId") REFERENCES "Utilisateur"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Enchere" ADD CONSTRAINT "Enchere_annonceId_fkey" FOREIGN KEY ("annonceId") REFERENCES "Annonce"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Offre" ADD CONSTRAINT "Offre_utilisateurId_fkey" FOREIGN KEY ("utilisateurId") REFERENCES "Utilisateur"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Offre" ADD CONSTRAINT "Offre_enchereId_fkey" FOREIGN KEY ("enchereId") REFERENCES "Enchere"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Image" ADD CONSTRAINT "Image_annonceId_fkey" FOREIGN KEY ("annonceId") REFERENCES "Annonce"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Notification" ADD CONSTRAINT "Notification_utilisateurId_fkey" FOREIGN KEY ("utilisateurId") REFERENCES "Utilisateur"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DemandeValidation" ADD CONSTRAINT "DemandeValidation_utilisateurId_fkey" FOREIGN KEY ("utilisateurId") REFERENCES "Utilisateur"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DemandeValidation" ADD CONSTRAINT "DemandeValidation_annonceId_fkey" FOREIGN KEY ("annonceId") REFERENCES "Annonce"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PaiementsAcompte" ADD CONSTRAINT "PaiementsAcompte_offreId_fkey" FOREIGN KEY ("offreId") REFERENCES "Offre"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
