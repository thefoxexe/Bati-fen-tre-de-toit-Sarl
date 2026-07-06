# Bati Fenêtre de Toit Sàrl — site vitrine

Site vitrine (Next.js / React / Tailwind CSS) construit à partir du cahier des charges
disponible dans [`docs/cahier-des-charges.md`](docs/cahier-des-charges.md).

## Démarrer en local

```bash
npm install
npm run dev
```

Le site est disponible sur [http://localhost:3000](http://localhost:3000).

```bash
npm run build   # build de production
npm run start   # sert le build de production
npm run lint    # vérifie le code
```

## Pages

Accueil, À propos, Services, Réalisations, FAQ, Contact — conformément à l'arborescence du
cahier des charges. Les textes et constantes du site (téléphone, e-mail, services, FAQ) sont
centralisés dans `lib/site.ts`.

## À faire avant la mise en ligne

Ce site a été construit à partir du brief client, sans accès direct au contenu du site actuel
(`batifenetredetoit.ch`, non accessible depuis cet environnement). Avant publication :

1. **Photos de chantier** — la page `/portfolio` et les illustrations décoratives (icône fenêtre
   de toit) doivent être remplacées par de vraies photos avant/après fournies par le client.
2. **Logo** — le logo professionnel du client n'a pas encore été fourni ; le header utilise un
   logotype texte en attendant.
3. **Envoi des e-mails de contact** — le formulaire de contact (`/contact`) est fonctionnel côté
   interface, mais l'envoi réel d'e-mail nécessite de configurer une variable d'environnement
   `RESEND_API_KEY` (compte [Resend](https://resend.com)) et optionnellement `CONTACT_TO_EMAIL`
   (sinon les demandes partent vers `info@batifenetredetoit.ch`). Sans cette clé, le formulaire
   affiche une erreur claire au visiteur plutôt que de perdre la demande silencieusement.
4. **Textes définitifs** — certains contenus (zone d'intervention précise, certifications,
   nombre d'années d'expérience) restent volontairement génériques : à préciser avec le client
   (voir section « Points à clarifier » du cahier des charges).

## Déploiement

Le projet est un site Next.js standard (App Router), déployable tel quel sur Vercel ou Netlify
(détection automatique du framework, aucune configuration d'adaptateur nécessaire). Pensez à
renseigner les variables d'environnement `RESEND_API_KEY` et `CONTACT_TO_EMAIL` sur la
plateforme choisie.
