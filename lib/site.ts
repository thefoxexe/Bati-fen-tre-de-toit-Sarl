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

/** The four primary destinations surfaced in the mobile bottom bar. */
export const primaryNav = [
  { href: "/", label: "Accueil" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Devis" },
  { href: "/contact", label: "Contact" },
] as const;

export type FaqItem = { question: string; answer: string };

export type Service = {
  slug: string;
  variant: "single" | "twin" | "dormer";
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
    variant: "single",
    title: "Remplacement de fenêtres de toit",
    summary: "Notre service principal : remplacer une fenêtre de toit vieillissante par un modèle Velux performant.",
    description:
      "Dépose de l'ancienne fenêtre, mise aux normes d'étanchéité et d'isolation, pose du nouveau modèle Velux. Une rénovation qui améliore le confort thermique, l'étanchéité et l'aspect de votre toiture — sans travaux lourds de gros œuvre.",
    avantages: [
      "Meilleure isolation thermique et acoustique",
      "Étanchéité durable, fini les infiltrations",
      "Pose par un partenaire agréé Velux Expert",
      "Devis gratuit et intervention rapide",
    ],
    etapes: [
      "Visite technique et prise de mesures",
      "Devis détaillé avec choix du modèle Velux adapté",
      "Dépose de l'ancienne fenêtre",
      "Pose du nouveau modèle et reprise d'étanchéité",
      "Finitions intérieures et extérieures, contrôle qualité",
    ],
    faq: [
      {
        question: "Faut-il agrandir l'ouverture pour remplacer ma fenêtre de toit ?",
        answer: "Dans la grande majorité des cas non : nous posons un nouveau modèle aux dimensions de l'ouverture existante, sans travaux de maçonnerie.",
      },
      {
        question: "Combien de temps dure un remplacement ?",
        answer: "Une intervention standard se fait généralement en une journée, selon l'accessibilité de la toiture et la météo.",
      },
    ],
  },
  {
    slug: "installation-stores-velux",
    variant: "dormer",
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
    variant: "twin",
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
    variant: "single",
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
