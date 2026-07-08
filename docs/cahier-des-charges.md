# Cahier des charges — Refonte du site web
## Bati Fenêtre de Toit Sàrl

**Version :** 2.0 (réécriture complète)
**Date :** 8 juillet 2026
**Destiné à :** l'équipe de développement
**Client :** Hasan Bati — Bati Fenêtre de Toit Sàrl — Partenaire agréé Velux Expert

---

## 1. Contexte

Bati Fenêtre de Toit Sàrl est un installateur agréé **Velux Expert**, basé dans le canton de Vaud (indicatif téléphonique 021 — Lausanne et région). L'entreprise dispose d'un site actuel (batifenetredetoit.ch) à remplacer intégralement.

### 1.1 Constat sur le site actuel
- Design daté, structure peu lisible, aucun véritable parcours de conversion.
- **Alerte sécurité** : au moment de la rédaction, une recherche Google sur le nom de domaine remonte du contenu de spam injecté (titre et description remplacés par des produits sans rapport — technique de piratage par cloaking SEO). Ceci est indépendant de la refonte mais doit être traité en parallèle par le client auprès de son hébergeur actuel (scan malware, changement des mots de passe hébergement/CMS/registrar, demande de réindexation Google une fois nettoyé). Ne pas réutiliser les accès/l'hébergement actuels sans les avoir sécurisés au préalable.
- Le logo existant (roofline stylisé + "BATI FENÊTRE DE TOIT Sàrl" + badge "VELUX Expert") est conservé et sert de base à la charte graphique (voir §3).

### 1.2 Références citées par le client
| Référence | Ce qu'on en retient |
|---|---|
| **Griesser.com** | Rigueur "suisse premium", bandeau accent sous le header, boutons pilule, icônes flottantes persistantes, titres en deux temps (phrase forte + complément), sections alternées, photographie réelle plutôt qu'illustrations. |
| **Webalp.ch** | Modernité, dynamisme, typographie contemporaine, micro-interactions. |
| **Velux.ch** | Grands aplats blancs, lumière naturelle comme identité visuelle, CTA très visibles et répétés, hiérarchie limpide. |

---

## 2. Objectifs de la refonte

1. **Générer des demandes de devis** — objectif n°1, avant toute considération esthétique. Chaque page doit pousser vers un CTA.
2. Donner une image **moderne, minimaliste et premium**, cohérente avec le statut de partenaire agréé Velux Expert.
3. **Référencement local** : devenir visible sur Google pour les recherches d'installation/remplacement de fenêtres de toit dans les principales villes du canton de Vaud.
4. Poser une base technique saine (performance, SEO technique, structure évolutive) plutôt qu'un site vitrine figé.
5. Préparer le terrain pour l'ajout progressif de vrais contenus (photos de chantiers, avis clients, logo HD) sans refonte ultérieure.

---

## 3. Charte graphique

| Élément | Spécification |
|---|---|
| Fond | Blanc |
| Couleur principale | Rouge proche du rouge officiel Velux — `#CC322E` (mesuré par extraction pixel sur le logo existant ; le logo du client utilise déjà quasiment ce rouge, ce qui est cohérent avec son statut Velux Expert) |
| Rouge foncé (hover/accents) | `#9E2723` |
| Texte | Noir / gris très foncé — `#3D3D3B` (anthracite du logo existant) |
| Texte secondaire | Gris moyen — `#767370` |
| Style | Moderne, minimaliste, premium — inspiré Griesser / Webalp |
| Icônes | Simples, sobres, un seul système graphique cohérent (pas de mélange de styles d'icônes) |
| Espace blanc | Généreux — préférer la respiration à la densité d'information |
| Typographie | Montserrat (police du logo existant), plusieurs graisses plutôt qu'un mélange de polices |

---

## 4. Architecture du site

```
Accueil
├── Services (page mère)
│   ├── Remplacement de fenêtres de toit  ← service principal
│   ├── Installation de stores Velux
│   ├── Entretien et maintenance
│   └── Réparation / dépannage
├── Réalisations
│   └── [Fiche réalisation individuelle] (répétable)
├── À propos
├── FAQ
├── Contact
└── Zones d'intervention (SEO local)
    ├── Nyon
    ├── Gland
    ├── Rolle
    ├── Morges
    ├── Lausanne
    ├── Vevey
    ├── Montreux
    └── Yverdon-les-Bains
```

**Services à ne pas reprendre du site actuel** (sur demande du client) : Création/agrandissement d'ouverture, Tunnel de lumière, Modular Skylight, Velux EFC. Si ces prestations sont toujours proposées en réalité, le client doit confirmer — sinon elles ne doivent apparaître nulle part sur le nouveau site (ni menu, ni contenu, ni SEO).

> **Point d'attention budget/périmètre** : cette architecture (page services + 4 pages service dédiées + galerie de réalisations avec fiches individuelles + 8 pages villes optimisées SEO + contact/FAQ/à propos) représente **une quinzaine de pages minimum**, contre les 6 pages du forfait Starter initial (CHF 690). Le périmètre décrit ici dépasse largement ce forfait — à clarifier avec le client avant développement pour aligner budget et attentes.

---

## 5. Contenu détaillé par page

### 5.1 Accueil
| Section | Contenu |
|---|---|
| Hero | Grande image (placeholder en attendant les vraies photos), titre fort, bouton "Demander un devis gratuit" |
| Confiance | Mise en avant du statut **Partenaire Velux Expert** |
| Présentation | Texte très court sur l'entreprise |
| Services | Les 4 services principaux, avec lien vers chaque page dédiée |
| Réalisations | Aperçu de la galerie, lien vers la page complète |
| Pourquoi nous choisir ? | *(ajout recommandé)* Expert Velux, rapidité d'intervention, devis gratuit, qualité des installations, garantie |
| Avis clients | Section dédiée (emplacement prêt, contenu à fournir par le client) |
| FAQ | Aperçu des questions les plus fréquentes, lien vers la FAQ complète |
| Contact | Bloc final avec CTA |

### 5.2 Services — page mère
Présente les 4 services principaux avec description courte + lien vers chaque page dédiée. Sert de hub de maillage interne vers les pages service.

### 5.3 Pages service (une par service, pour le référencement)
Chaque page suit la même structure :
1. Description du service
2. Avantages
3. Déroulement de l'intervention (étapes)
4. Photos (emplacements prêts)
5. CTA (devis)
6. FAQ spécifique au service
7. Formulaire de devis intégré en bas de page

Services concernés : Remplacement de fenêtres de toit (service principal), Installation de stores Velux, Entretien et maintenance, Réparation / dépannage.

### 5.4 Réalisations
- Galerie **filtrable** (par type de service a minima).
- Chaque réalisation dispose de sa propre fiche avec : photos avant/après, description, localisation, produits utilisés (modèle Velux, etc.).

### 5.5 À propos
Présentation de l'entreprise, expérience, zone d'intervention, statut Expert Velux, valeurs.

### 5.6 FAQ
Questions classées par thème (et non en liste plate) — ex. Devis & tarifs, Délais, Autorisations, Produits, Zone d'intervention, SAV.

### 5.7 Contact
Formulaire de devis, téléphone cliquable, e-mail, carte Google Maps, horaires.

### 5.8 Pages "Zones d'intervention" (SEO local)
Une page par ville ciblée (liste au §4), avec un contenu réellement différencié (pas de simple duplication avec juste le nom de la ville changé) : mention de la localité, quartiers/types d'habitat si pertinent, CTA de devis, maillage vers la page du service principal.

---

## 6. Navigation

### Mobile
Barre de navigation **fixe en bas de l'écran**, façon Instagram :
`Accueil · Services · Devis · Contact`
Le bouton **Devis** est visuellement mis en avant (couleur/forme distincte des trois autres).
En complément : **bouton "Appeler maintenant" flottant**, particulièrement efficace pour ce type d'activité (décision d'achat souvent prise par téléphone).

### Desktop
Navigation horizontale classique en en-tête (logo, liens, CTA devis).

---

## 7. Fonctionnalités attendues

- Formulaire de devis (accueil, chaque page service, page contact) avec validation et protection anti-spam.
- Filtrage de la galerie de réalisations.
- Clic-to-call sur tous les numéros de téléphone.
- Carte Google Maps intégrée en page Contact.
- Emplacement pour avis clients (Google ou saisie manuelle en attendant une intégration automatisée).
- Formulaire "Être rappelé" (rappel téléphonique) en plus du devis classique.
- Sitemap.xml et robots.txt générés automatiquement.

---

## 8. SEO

Le référencement est **prioritaire**, pas une option.

### 8.1 Ciblage géographique
Pages dédiées pour : Nyon, Gland, Rolle, Morges, Lausanne, Vevey, Montreux, Yverdon-les-Bains.

### 8.2 Exigences techniques, par page
- Hiérarchie de titres propre (H1 unique, H2/H3 structurés).
- Méta-titre et méta-description uniques par page (y compris les pages villes).
- URLs propres et lisibles (ex. `/services/remplacement-fenetre-de-toit`, `/zones/nyon`).
- Maillage interne cohérent (services ↔ villes ↔ réalisations).
- Données structurées (Schema.org) : `LocalBusiness`, `Service`, `FAQPage`, `BreadcrumbList` selon les pages.
- Fiche **Google Business Profile** à optimiser en parallèle du site (cohérence NAP : nom, adresse, téléphone).
- Core Web Vitals : bonnes performances visées (voir §10).

---

## 9. Call-to-Action

CTA à répéter tout au long du site, jamais à plus d'un écran de distance :
- **Demander un devis gratuit** (CTA principal)
- **Être rappelé**
- **Nous contacter**
- **Appeler maintenant** (notamment en bouton flottant mobile)

---

## 10. Animations et performance

### Animations
- Micro-interactions discrètes (hover boutons/cartes, transitions douces).
- Apparition progressive des sections au scroll (fade/translation légère).
- Aucune animation ne doit nuire à la lisibilité ni au temps de chargement perçu.
- Respect de `prefers-reduced-motion` pour l'accessibilité.

### Performance attendue
- Core Web Vitals dans le vert (LCP, INP, CLS) sur mobile comme sur desktop.
- Images optimisées et servies au bon format/poids.
- Chargement initial rapide, priorité au contenu visible (above the fold).

---

## 11. Éléments en attente (emplacements à prévoir, contenu à venir)

Le développeur doit prévoir des emplacements clairement identifiés pour :
- Logo HD (le logo actuel existe mais en basse résolution).
- Photos des réalisations (avant/après).
- Photos de l'équipe.
- Icônes partenaires (Velux notamment).
- Avis clients.
- Vidéos éventuelles.

Tant que ces éléments ne sont pas fournis, les emplacements doivent rester visuellement propres (pas de "lorem ipsum" ni d'images cassées) — utiliser des gabarits sobres clairement identifiables comme temporaires.

---

## 12. Points à trancher avec le client avant développement

1. **Périmètre vs budget** : l'architecture décrite (~15 pages) dépasse le forfait Starter initial — confirmer le budget/forfait adapté.
2. Confirmer si les services retirés (Tunnel de lumière, Modular Skylight, Velux EFC, Création/agrandissement) sont définitivement abandonnés ou seulement absents du site pour l'instant.
3. Zone d'intervention exacte au-delà des 8 villes listées.
4. Accès Google Business Profile (existant ou à créer).
5. Modalités de collecte des avis clients (import Google, saisie manuelle, widget tiers).
6. Sécurisation du site/hébergement actuel (voir §1.1) — à traiter indépendamment mais avant toute réutilisation d'accès existants.

---

## 13. Planning indicatif

| Étape | Contenu |
|---|---|
| Cadrage | Validation du présent document, arbitrage périmètre/budget (§12.1) |
| Contenu | Collecte progressive des éléments du §11 |
| Design | Gabarits Accueil, page Service type, page Ville type |
| Développement | L'ensemble des pages, y compris les 8 pages villes et les fiches réalisations |
| SEO technique | Données structurées, maillage, Google Business Profile |
| Recette | Tests mobile/desktop, Core Web Vitals, formulaires |
| Mise en ligne | Sur le domaine existant, une fois celui-ci sécurisé |
