# Cahier des charges — Refonte du site web
## Bati Fenêtre de Toit Sarl

**Version :** 1.0
**Date :** 6 juillet 2026
**Rédigé pour :** Hasan Bati — Bati Fenêtre de Toit Sarl
**Contact :** info@batifenetredetoit.ch — 076 348 90 06

---

## 1. Contexte du projet

Bati Fenêtre de Toit Sarl est une entreprise spécialisée dans l'installation de fenêtres de toit (type Velux et équivalents). L'entreprise dispose déjà d'un site (batifenetredetoit.ch) et d'un nom de domaine actif, mais celui-ci doit être entièrement repensé : design daté, structure peu claire, et absence d'un vrai parcours de génération de contacts.

Le présent document cadre la refonte complète du site sur la base du brief transmis par le client et des références visuelles fournies.

| Élément | Détail |
|---|---|
| Entreprise | Bati Fenêtre de Toit Sarl |
| Secteur | Installateur de fenêtres de toit |
| Site existant | batifenetredetoit.ch (à refondre, conservé) |
| Nom de domaine | Déjà en possession du client |
| Logo | Existant, professionnel — à réutiliser |
| Formule | Starter — CHF 690 |
| Délai souhaité | 2 semaines (délai standard) |
| Contenu | Partiellement prêt (textes/photos à compléter avec le client) |

---

## 2. Objectifs du projet

### 2.1 Objectif principal
**Générer des contacts et des demandes de devis.** Le site n'est pas une simple vitrine : chaque page doit pousser le visiteur vers une action (appeler, écrire, demander un devis).

### 2.2 Objectifs secondaires
- Donner une image moderne, sérieuse et professionnelle, à la hauteur des grandes marques du secteur (Velux, Griesser).
- Rassurer le visiteur sur le savoir-faire et la fiabilité de l'entreprise (avant/après, réalisations, témoignages).
- Faciliter la prise de contact au maximum : clic-to-call, formulaire simple, localisation claire.
- Poser une base solide et évolutive (facile à enrichir ensuite : nouvelles réalisations, avis clients, blog éventuel).

### 2.3 Cible
- Propriétaires de maisons individuelles ou villas souhaitant installer ou remplacer une fenêtre de toit.
- Recherche locale ("installateur fenêtre de toit + région"), principalement via mobile.
- Décision motivée par la confiance (photos de chantiers réels, réactivité, proximité).

*Point à valider avec le client : zone géographique d'intervention précise (canton/région), pour la partie SEO local et la page Contact.*

---

## 3. Références et inspiration design

Le client a cité trois sites de référence. Chacun apporte un élément différent à intégrer :

### Griesser.com
Fabricant suisse de protections solaires. À en retenir :
- Image de marque suisse haut de gamme : sobriété, rigueur, confiance.
- Grille de navigation claire par univers de produits/services.
- Beaucoup de photographie produit en situation réelle (maison, lumière naturelle).
- Ton corporate mais chaleureux, jamais criard.

**→ À reprendre :** la sobriété générale, le sérieux "suisse" qui rassure, la mise en avant de photos réelles plutôt que d'illustrations génériques.

### Velux.ch
Référence mondiale du produit vendu par le client (fenêtres de toit). À en retenir :
- Immense qualité photographique : lumière naturelle, intérieurs chaleureux, avant/après.
- Grands aplats blancs, respiration entre les blocs, peu de texte à l'écran.
- Boutons d'action très visibles et répétés (devis, contact, trouver un installateur).
- Hiérarchie visuelle claire : un message fort par section, pas de surcharge.

**→ À reprendre :** l'usage du blanc et de la lumière comme identité, les visuels "avant/après" pour la page Réalisations, la répétition des CTA de contact.

### Webalp.ch
Agence web suisse, référence plus "moderne & dynamique" au sens du brief. À en retenir :
- Typographie contemporaine avec des titres impactants.
- Animations légères au scroll, transitions fluides.
- Sections courtes, très lisibles, orientées conversion.

**→ À reprendre :** le dynamisme visuel (micro-animations, transitions douces), sans tomber dans l'effet gadget — le site reste avant tout un outil de génération de demandes pour une PME du bâtiment.

### Synthèse du style visuel retenu
Un site **moderne et dynamique**, en **blanc et rouge** (couleurs demandées par le client), qui combine :
- la clarté et la confiance "corporate suisse" de Griesser,
- la lumière et la mise en valeur du produit façon Velux,
- le dynamisme et la modernité de Webalp.

---

## 4. Charte graphique

### 4.1 Palette de couleurs

| Usage | Couleur | Code indicatif |
|---|---|---|
| Fond principal | Blanc | `#FFFFFF` |
| Fond secondaire (sections alternées) | Gris très clair | `#F5F5F5` |
| Couleur d'accent / CTA | Rouge | `#D8232A` (à ajuster sur le rouge exact du logo) |
| Rouge foncé (hover, accents) | Rouge foncé | `#A81A20` |
| Texte principal | Anthracite | `#1A1A1A` |
| Texte secondaire | Gris | `#5A5A5A` |

*Le rouge exact doit être calé sur celui du logo existant pour garantir une cohérence de marque parfaite.*

### 4.2 Typographie
- Titres : police sans-serif moderne à forte présence (ex. Inter, Poppins ou similaire), graisses 600–700.
- Texte courant : même famille ou complémentaire, graisse 400, haute lisibilité mobile.
- Hiérarchie typographique nette (H1 impactant façon Webalp, corps de texte aéré façon Velux).

### 4.3 Imagerie
- Photos réelles des chantiers du client en priorité (avant/après indispensables).
- À défaut de stock suffisant, complément ponctuel par photos libres de droits de haute qualité (lumière naturelle, toitures, intérieurs), en attendant que le client fournisse ses propres visuels.
- Pas d'illustrations génériques "clipart" : cohérence avec le positionnement premium recherché.

### 4.4 Boutons et CTA
- Boutons pleins rouges sur fond blanc, forme arrondie moderne.
- CTA répétés à chaque section clé : "Demander un devis", "Appeler maintenant", "Voir nos réalisations".
- Bouton d'appel flottant/sticky sur mobile (clic-to-call direct).

---

## 5. Arborescence du site

6 pages, conformément au brief :

```
Accueil
├── À propos
├── Services
├── Portfolio (réalisations)
├── Contact
└── FAQ
```

Navigation simple, header sticky avec logo + menu + bouton "Devis gratuit" toujours visible, footer récapitulatif (coordonnées, liens, réseaux sociaux si existants).

---

## 6. Contenu détaillé par page

### 6.1 Accueil
| Section | Contenu |
|---|---|
| Hero | Photo forte (chantier/réalisation), titre d'accroche orienté bénéfice client (ex. "Plus de lumière, plus de confort chez vous"), CTA principal "Demander un devis gratuit" |
| Bandeau de réassurance | 3-4 points clés : expérience, réactivité, garantie, zone d'intervention |
| Présentation courte | 2-3 phrases sur l'entreprise + lien vers "À propos" |
| Aperçu des services | Cartes résumant les prestations, lien vers "Services" |
| Aperçu réalisations | 3-4 photos avant/après, lien vers "Portfolio" |
| Témoignages (si disponibles) | Avis clients / notes Google |
| Bloc contact final | Rappel du CTA + numéro de téléphone cliquable |

### 6.2 À propos
- Histoire et présentation de Hasan Bati / de l'entreprise.
- Valeurs : sérieux, qualité d'installation, proximité, garantie du travail.
- Zone d'intervention géographique.
- Éventuellement : certifications, partenariats (ex. agréé Velux, si applicable — **à confirmer avec le client**).

### 6.3 Services
Détail des prestations proposées. **À valider avec le client**, structure proposée par défaut :
- Installation de fenêtres de toit (neuf)
- Remplacement / rénovation de fenêtres de toit existantes
- Volets roulants et stores pour fenêtres de toit
- Étanchéité et finitions
- Dépannage / SAV

Chaque service : description courte, photo, bouton "Demander un devis pour ce service".

### 6.4 Portfolio (réalisations)
- Galerie de chantiers réalisés, idéalement en format avant/après (inspiration Velux).
- Filtrage simple si volume suffisant (par type de projet).
- Chaque réalisation : 2-4 photos + courte légende (lieu/type de travaux, sans données personnelles client sans accord).

*Point à clarifier : combien de chantiers photographiés le client peut-il fournir ? C'est la pièce la plus importante du site pour la conversion — à prioriser dans la collecte de contenu.*

### 6.5 Contact
- Formulaire simple : nom, téléphone, email, message, (option : type de demande).
- Coordonnées complètes : téléphone cliquable, email, adresse.
- Carte de localisation (Google Maps).
- Horaires de disponibilité.
- CTA de secours : lien WhatsApp / appel direct (le client semble déjà utiliser WhatsApp).

### 6.6 FAQ
Questions fréquentes des clients type, par exemple :
- Combien coûte l'installation d'une fenêtre de toit ?
- Quel est le délai moyen d'intervention ?
- Faut-il une autorisation pour installer une fenêtre de toit ?
- Quelles marques/modèles installez-vous ?
- Intervenez-vous pour du dépannage/SAV ?

*À enrichir avec le client lors de l'appel prévu (cf. section 9).*

---

## 7. Fonctionnalités techniques

| Fonctionnalité | Description |
|---|---|
| Responsive design | Mobile-first impératif : la cible cherche majoritairement depuis un smartphone |
| Formulaire de contact | Envoi vers l'email pro (info@batifenetredetoit.ch), avec accusé de réception au visiteur |
| Clic-to-call | Numéro de téléphone cliquable partout (header, footer, sections CTA) |
| Carte Google Maps | Intégrée en page Contact |
| SEO de base | Titres/méta-descriptions par page, structure Hn propre, temps de chargement optimisé, sitemap.xml |
| SEO local | Optimisation pour recherches "fenêtre de toit + [région]" |
| Performance | Images optimisées/compressées, chargement rapide (< 3s) |
| Micro-animations | Transitions légères au scroll façon Webalp, sans nuire à la performance |
| Compatibilité | Derniers navigateurs (Chrome, Safari, Edge, Firefox), iOS/Android |
| Analytics | Suivi des demandes/contacts (ex. Google Analytics + suivi des clics CTA) |
| Hébergement/domaine | Le client possède déjà le nom de domaine — à connecter au nouvel hébergement |

---

## 8. Contraintes et périmètre (formule Starter — CHF 690)

Pour rester cohérent avec la formule Starter :
- Site vitrine de 6 pages en une langue (français), sans espace membre ni back-office complexe.
- Design basé sur un système de composants réutilisables (pas de sur-mesure illimité page par page).
- 1 formulaire de contact standard (pas de configurateur produit ou de prise de rendez-vous en ligne à ce stade).
- Le client fournit progressivement le contenu manquant (textes définitifs, photos de chantiers) — un espace de collecte sera partagé.

*Hors périmètre à ce stade (évolutions possibles ultérieures) : multilingue (DE/IT), blog, prise de RDV en ligne, espace avis clients automatisé.*

---

## 9. Points à clarifier avec le client

À aborder lors de l'appel téléphonique proposé par le client :

1. Zone géographique précise d'intervention (canton/villes).
2. Liste définitive des services à mettre en avant.
3. Photos de chantiers disponibles (quantité, qualité, droit d'usage).
4. Textes définitifs pour "À propos" (historique, années d'expérience, éventuelles certifications/partenariats de marque).
5. Avis clients existants (Google, autres) à intégrer.
6. Confirmation du rouge exact de la charte (référence logo).
7. Accès actuels : hébergement/registrar du nom de domaine, accès email pro.

---

## 10. Planning indicatif

| Étape | Durée estimée |
|---|---|
| Validation du cahier des charges + appel de cadrage | J+1 à J+2 |
| Collecte des contenus (textes/photos) avec le client | J+2 à J+5 |
| Design des pages clés (Accueil + 1 page type) | J+5 à J+8 |
| Développement de l'ensemble des pages | J+8 à J+11 |
| Relecture, ajustements, tests mobile | J+11 à J+13 |
| Mise en ligne sur le domaine existant | J+13 à J+14 |

Conforme au délai standard de 2 semaines demandé, sous réserve de réception rapide des contenus manquants par le client.

---

## 11. Prochaines étapes

1. Validation de ce cahier des charges par le client.
2. Appel téléphonique de cadrage (points de la section 9).
3. Collecte des éléments manquants (photos, textes, accès domaine).
4. Lancement de la phase de design.
