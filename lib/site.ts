export const site = {
  name: "Bati Fenêtre de Toit Sàrl",
  shortName: "Bati Fenêtre de Toit",
  tagline: "Installateur de fenêtres de toit",
  // Landline shown on the client's current live site — kept as the primary
  // displayed number since customers already know it. The brief separately
  // gave a mobile number (076 348 90 06); worth confirming with the client
  // which one should lead.
  phoneDisplay: "021 888 90 06",
  phoneHref: "tel:+41218889006",
  phoneMobileDisplay: "076 348 90 06",
  phoneMobileHref: "tel:+41763489006",
  email: "info@batifenetredetoit.ch",
  url: "https://www.batifenetredetoit.ch",
  veluxExpert: true,
  legalForm: "Sàrl",
  manager: "Hasan Bati",
  address: {
    street: "Route de Sorge 2",
    postalCode: "1030",
    city: "Bussigny",
    country: "Suisse",
  },
};

/** Cities used for local SEO relevance (content mentions + structured data), not dedicated pages. */
export const serviceAreas = [
  "Nyon",
  "Gland",
  "Rolle",
  "Morges",
  "Lausanne",
  "Vevey",
  "Montreux",
  "Yverdon-les-Bains",
];

export const nav = [
  { href: "/", label: "Accueil" },
  { href: "/a-propos", label: "À propos" },
  { href: "/services", label: "Services" },
  { href: "/portfolio", label: "Réalisations" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
] as const;

export type FaqItem = { question: string; answer: string };

export type Service = {
  slug: string;
  title: string;
  summary: string;
  description: string;
  avantages: string[];
  etapes: string[];
  faq: FaqItem[];
};

export const services: Service[] = [
  {
    slug: "remplacement-fenetre-de-toit",
    title: "Remplacement de fenêtres de toit",
    summary: "Remplacez votre ancienne fenêtre de toit par un modèle Velux neuf : plus d'isolation, moins de bruit, une étanchéité durable.",
    description:
      "Partenaire certifié Velux Expert installé à Bussigny/Crissier, nous intervenons rapidement dans tout l'arc lémanique (Lausanne, Morges, Riviera, La Côte) pour remplacer votre ancienne fenêtre de toit par un modèle Velux de nouvelle génération. Une fenêtre de toit a une durée de vie de 20 à 25 ans : condensation entre les vitres, bois qui s'abîme ou difficulté à la fermeture sont les signes qu'il est temps de la changer, avant les pertes d'énergie ou les infiltrations.",
    avantages: [
      "Économie d'énergie : isolation thermique renforcée, la chaleur reste en hiver et la fraîcheur extérieure est stoppée",
      "Confort d'été : vitrages à contrôle solaire, la chaleur sous les combles est drastiquement réduite",
      "Isolation phonique : moins de bruit de pluie et de nuisances sonores extérieures",
      "Sécurité accrue : systèmes de fermeture modernes et vitrages feuilletés résistants",
    ],
    etapes: [
      "Dépose soignée de votre ancienne installation",
      "Adaptation de la structure si nécessaire et pose de la nouvelle fenêtre de toit",
      "Pose du nouveau raccord d'étanchéité et isolation périphérique si nécessaire",
      "Intégration de vos équipements préférés (stores occultants, volets roulants solaires)",
    ],
    faq: [
      {
        question: "Quand faut-il remplacer un Velux ?",
        answer: "En général, une fenêtre de toit a une durée de vie de 20 à 25 ans. Si vous constatez des traces de condensation entre les vitres, du bois qui s'abîme ou des difficultés à la fermeture, il est temps de la remplacer pour éviter des pertes d'énergie ou des infiltrations.",
      },
      {
        question: "Combien de temps prend la pose d'un nouveau Velux ?",
        answer: "Pour un remplacement standard (ancienne fenêtre contre une neuve de même taille), l'intervention est très rapide et prend généralement entre 4 et 5 heures seulement, sans gros travaux dans votre pièce.",
      },
      {
        question: "Est-il possible d'ajouter un volet roulant après coup ?",
        answer: "Oui, tout à fait. Nous pouvons installer des volets roulants ou des stores intérieurs sur des fenêtres de toit existantes. Les modèles Velux à énergie solaire sont idéaux car ils ne nécessitent aucun passage de câble électrique à travers vos murs.",
      },
      {
        question: "Faut-il une autorisation de construire pour changer un Velux en Suisse ?",
        answer: "Pour un remplacement standard (à l'identique, sans modification de taille ou de forme), une simple annonce de travaux ou une dispense d'autorisation suffit généralement dans la plupart des communes du canton de Vaud. En revanche, si vous créez une nouvelle ouverture ou agrandissez la fenêtre existante, une demande d'autorisation (procédure simplifiée) est nécessaire.",
      },
      {
        question: "Quelle est la différence entre un Velux en bois et un Velux en polyuréthane (blanc) ?",
        answer: "Le modèle en bois verni est idéal pour les pièces sèches comme les chambres ou les salons. Pour les pièces humides (salles de bains, cuisines), nous recommandons vivement la finition en polyuréthane blanc : elle possède un cœur en bois enrobé d'une coque étanche, ce qui la rend ultra-résistante à l'humidité et ne nécessite aucun entretien de peinture.",
      },
    ],
  },
  {
    slug: "installation-stores-velux",
    title: "Installation de stores Velux",
    summary: "Occultation, protection solaire et confort d'été avec les stores et volets roulants Velux.",
    description:
      "Pose de stores occultants, stores pare-soleil ou volets roulants Velux, motorisés ou manuels, adaptés à votre modèle de fenêtre de toit existant. Une solution simple pour gérer la lumière et la chaleur selon la saison.",
    avantages: [
      "Confort d'été : jusqu'à 94% de chaleur solaire réfléchie",
      "Occultation totale pour les chambres",
      "Compatibles avec la plupart des fenêtres de toit existantes",
      "Version motorisée disponible (télécommande, capteur solaire)",
    ],
    etapes: [
      "Identification du modèle de fenêtre existant",
      "Choix du store adapté (occultant, pare-soleil, moustiquaire)",
      "Devis et commande",
      "Pose sans percement, en général sous une heure",
    ],
    faq: [
      {
        question: "Les stores Velux s'adaptent-ils à toutes les fenêtres de toit ?",
        answer: "Ils sont conçus pour les modèles Velux, et compatibles avec certains autres modèles selon les dimensions. Nous vérifions la compatibilité avant devis.",
      },
      {
        question: "Peut-on motoriser un store existant ?",
        answer: "Selon le modèle, un remplacement par une version solaire ou électrique est souvent possible sans intervention lourde.",
      },
    ],
  },
  {
    slug: "entretien-maintenance",
    title: "Entretien et maintenance",
    summary: "Contrôle et entretien régulier pour prolonger la durée de vie de vos fenêtres de toit.",
    description:
      "Contrôle des joints d'étanchéité, du mécanisme d'ouverture, du vitrage et des raccords de toiture. Un entretien régulier évite les infiltrations et les pannes prématurées.",
    avantages: [
      "Prévient les infiltrations avant qu'elles n'apparaissent",
      "Prolonge la durée de vie de vos équipements",
      "Contrôle complet : vitrage, joints, mécanisme, raccords",
      "Rapport détaillé après intervention",
    ],
    etapes: [
      "Diagnostic complet de la fenêtre et de ses raccords",
      "Nettoyage et contrôle du mécanisme d'ouverture",
      "Reprise des joints d'étanchéité si nécessaire",
      "Rapport et recommandations",
    ],
    faq: [
      {
        question: "À quelle fréquence faut-il entretenir une fenêtre de toit ?",
        answer: "Un contrôle tous les 2 à 3 ans est recommandé, ou après un épisode météo marquant (grêle, tempête).",
      },
    ],
  },
  {
    slug: "reparation-depannage",
    title: "Réparation / dépannage",
    summary: "Intervention rapide en cas de fuite, de blocage ou de vitrage cassé.",
    description:
      "Diagnostic sur place et réparation ou remplacement des pièces défectueuses : vitrage, mécanisme d'ouverture, joints d'étanchéité. Intervention rapide pour éviter l'aggravation des dégâts.",
    avantages: [
      "Intervention rapide, y compris en urgence",
      "Diagnostic précis avant toute réparation",
      "Pièces compatibles Velux",
      "Devis clair avant intervention",
    ],
    etapes: [
      "Prise de contact et description du problème",
      "Diagnostic sur place",
      "Devis de réparation",
      "Intervention et contrôle final",
    ],
    faq: [
      {
        question: "Ma fenêtre de toit fuit, que faire en urgence ?",
        answer: "Contactez-nous au plus vite par téléphone : nous priorisons les urgences pour limiter les dégâts en attendant l'intervention.",
      },
    ],
  },
  {
    slug: "fenetres-toit-plat",
    title: "Fenêtres pour toit plat",
    summary: "Coupoles et fenêtres pour toits plats : lumière naturelle et ventilation pour vos combles ou extensions.",
    description:
      "Fourniture et pose de fenêtres et coupoles pour toits plats, avec une étanchéité adaptée à ce type de toiture. Une solution pour apporter de la lumière naturelle et de la ventilation à des combles, une extension ou un local sans possibilité de fenêtre verticale.",
    avantages: [
      "Lumière naturelle abondante, même sur une toiture plate",
      "Étanchéité renforcée, spécifique aux toitures plates",
      "Ouverture pour ventilation disponible sur certains modèles",
      "Résistance aux UV et aux intempéries",
    ],
    etapes: [
      "Visite technique et étude de la toiture plate",
      "Devis avec choix du modèle (fixe ou ouvrant)",
      "Pose et reprise d'étanchéité de la toiture",
      "Contrôle final et finitions intérieures",
    ],
    faq: [
      {
        question: "Une fenêtre pour toit plat est-elle aussi isolante qu'une fenêtre de toit classique ?",
        answer: "Oui, les modèles pour toits plats reprennent les mêmes standards d'isolation thermique et acoustique, avec une étanchéité pensée spécifiquement pour une toiture peu ou pas inclinée.",
      },
      {
        question: "Peut-on ouvrir une fenêtre de toit plat pour ventiler la pièce ?",
        answer: "Certains modèles sont ouvrants (manuellement ou de façon motorisée) et permettent une ventilation naturelle, en plus de l'apport de lumière.",
      },
    ],
  },
  {
    slug: "verrieres-modulaires-skylight",
    title: "Verrières modulaires Skylight",
    summary: "Verrières modulaires sur mesure pour combles, vérandas ou extensions, en configuration fixe ou ouvrante.",
    description:
      "Les verrières modulaires Skylight s'assemblent en ligne pour couvrir de grandes surfaces vitrées — idéal pour une extension, une véranda ou un couloir de toiture. Chaque module peut être fixe ou ouvrant, avec une étanchéité continue sur l'ensemble de la verrière.",
    avantages: [
      "Grandes surfaces vitrées grâce à l'assemblage modulaire",
      "Modules fixes ou ouvrants selon les besoins",
      "Étanchéité continue sur toute la longueur de la verrière",
      "Solution sur mesure adaptée à votre projet",
    ],
    etapes: [
      "Étude du projet et prise de mesures sur site",
      "Devis détaillé avec plan d'implantation des modules",
      "Pose de la structure et des modules vitrés",
      "Étanchéité, finitions et contrôle qualité",
    ],
    faq: [
      {
        question: "Une verrière modulaire Skylight convient-elle pour une véranda ?",
        answer: "Oui, c'est l'un des usages les plus courants : elle permet de couvrir une grande longueur de toiture vitrée avec un rendu continu et soigné.",
      },
      {
        question: "Faut-il une autorisation pour installer une verrière modulaire ?",
        answer: "Selon la taille du projet et la commune, une autorisation de construire est généralement nécessaire. Nous vous accompagnons dans cette démarche.",
      },
    ],
  },
  {
    slug: "smart-home-velux-active",
    title: "Smart home Velux Active",
    summary: "Pilotez vos fenêtres, stores et volets Velux depuis votre smartphone avec la solution connectée Velux Active.",
    description:
      "Installation, configuration et programmation de la solution domotique Velux Active : vos fenêtres de toit, stores et volets roulants deviennent pilotables depuis une application, avec des capteurs qui ajustent automatiquement l'ouverture selon la température et la qualité de l'air intérieur.",
    avantages: [
      "Pilotage à distance des fenêtres, stores et volets depuis un smartphone",
      "Capteurs de température et de qualité de l'air pour une gestion automatique",
      "Programmation selon vos horaires ou la météo",
      "Compatible avec la plupart des fenêtres et stores Velux motorisés",
    ],
    etapes: [
      "Vérification de la compatibilité de vos équipements Velux",
      "Installation de la passerelle et des capteurs Velux Active",
      "Configuration de l'application et des automatisations",
      "Programmation et prise en main avec vous",
    ],
    faq: [
      {
        question: "Faut-il remplacer mes fenêtres Velux pour installer Velux Active ?",
        answer: "Non, si vos fenêtres et stores Velux sont déjà motorisés (version solaire ou électrique), la solution Velux Active s'y connecte directement sans remplacement.",
      },
      {
        question: "Velux Active fonctionne-t-il sans connexion internet ?",
        answer: "La passerelle nécessite une connexion Wi-Fi pour le pilotage à distance et les automatisations ; un fonctionnement manuel reste possible en cas de coupure.",
      },
    ],
  },
  {
    slug: "puits-de-lumiere-sun-tunnel",
    title: "Puits de lumière Sun-Tunnel",
    summary: "Amenez la lumière naturelle dans les pièces sans accès direct au toit grâce au tunnel de lumière Velux.",
    description:
      "Le puits de lumière Sun-Tunnel capte la lumière naturelle en toiture et la redirige, via un conduit réfléchissant, vers une pièce qui n'a pas d'accès direct au toit : couloir, salle de bains, dressing. Une solution rapide à poser et sans gros travaux.",
    avantages: [
      "Apporte de la lumière naturelle aux pièces sans fenêtre possible",
      "Installation rapide, sans gros travaux ni perte de surface habitable",
      "Peu de déperdition de chaleur comparé à une fenêtre classique",
      "Idéal pour couloirs, salles de bains, dressings ou buanderies",
    ],
    etapes: [
      "Visite technique et repérage du meilleur tracé entre toiture et pièce",
      "Devis avec choix du diamètre et de la longueur du tunnel",
      "Pose de la coupole en toiture et du conduit réfléchissant",
      "Finitions intérieures et contrôle de l'étanchéité",
    ],
    faq: [
      {
        question: "Un Sun-Tunnel éclaire-t-il autant qu'une vraie fenêtre ?",
        answer: "Il apporte un éclairage naturel confortable adapté à des pièces de passage ou secondaires ; il ne remplace pas une fenêtre de toit dans une pièce de vie principale.",
      },
      {
        question: "Peut-on installer un Sun-Tunnel sur tous les types de toiture ?",
        answer: "Il s'adapte à la plupart des toitures inclinées et plates ; la longueur et le tracé du conduit sont étudiés selon la configuration de votre comble.",
      },
    ],
  },
];

export const faqs: FaqItem[] = [
  {
    question: "Combien coûte l'installation d'une fenêtre de toit ?",
    answer:
      "Le prix dépend du modèle, de la taille de l'ouverture, de la nature de la toiture et de la complexité de la pose. Nous établissons un devis gratuit et personnalisé après avoir étudié votre projet.",
  },
  {
    question: "Quel est le délai moyen d'intervention ?",
    answer:
      "Nous répondons aux demandes de devis sous 48h. Le délai de réalisation des travaux dépend de la disponibilité du matériel et de la nature du chantier ; il vous est communiqué avec le devis.",
  },
  {
    question: "Faut-il une autorisation pour installer une fenêtre de toit ?",
    answer:
      "Selon la commune et le type de bâtiment, une autorisation peut être nécessaire. Nous vous conseillons sur les démarches à effectuer avant le début des travaux.",
  },
  {
    question: "Quels modèles de fenêtres de toit installez-vous ?",
    answer:
      "Nous sommes partenaire agréé Velux Expert et installons principalement des fenêtres Velux, tout en vous orientant vers le modèle le plus adapté à votre toiture, votre budget et vos besoins en luminosité ou en ventilation.",
  },
  {
    question: "Intervenez-vous aussi pour du dépannage ?",
    answer:
      "Oui. Fuite, blocage, vitrage cassé ou joint d'étanchéité défectueux : contactez-nous pour une intervention de dépannage.",
  },
  {
    question: "Dans quelles villes intervenez-vous ?",
    answer: `Nous intervenons dans tout le canton de Vaud, notamment à ${serviceAreas.slice(0, -1).join(", ")} et ${serviceAreas[serviceAreas.length - 1]}. Contactez-nous avec votre localité pour confirmer rapidement votre éligibilité.`,
  },
];
