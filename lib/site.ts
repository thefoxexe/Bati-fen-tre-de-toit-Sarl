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
  foundedYear: 2018,
  // From the client's own copy: Hasan Bati's hands-on experience predates the company's founding.
  experienceSinceYear: 2010,
  // Verified against the client's existing site (real handle, not invented).
  instagramUrl: "https://www.instagram.com/bati_fenetre_de_toit.ch/",
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

export type ProductGroup = {
  title: string;
  subtitle: string;
  items: { name: string; text: string }[];
};

export type Service = {
  slug: string;
  title: string;
  summary: string;
  description: string;
  avantages: string[];
  etapes: string[];
  /** Optional: only "installation-stores-velux" has enough distinct real
   * product variants (from the client's existing site) to warrant this. */
  productGroups?: ProductGroup[];
  faq: FaqItem[];
  /** Bespoke closing pitch, specific to this service rather than a
   * generic "Un projet de {service} ?" template. */
  cta: { headline: string; text: string; illustration: "single" | "twin" | "dormer" };
  /** Optional: real hero photo, where the client has supplied one. Falls
   * back to a PlaceholderMedia box otherwise. */
  heroImage?: { src: string; alt: string; width: number; height: number };
};

export const services: Service[] = [
  {
    slug: "remplacement-fenetre-de-toit",
    title: "Remplacement de fenêtres de toit",
    summary: "Remplacez votre ancienne fenêtre de toit par un modèle Velux neuf : plus d'isolation, moins de bruit, une étanchéité durable.",
    description:
      "Partenaire certifié Velux Expert basé à Bussigny, aux portes de Crissier, nous intervenons rapidement dans tout l'arc lémanique (Lausanne, Morges, Riviera, La Côte) pour remplacer votre ancienne fenêtre de toit par un modèle Velux de nouvelle génération. Une fenêtre de toit a une durée de vie de 20 à 25 ans : condensation entre les vitres, bois qui s'abîme ou difficulté à la fermeture sont les signes qu'il est temps de la changer, avant les pertes d'énergie ou les infiltrations.",
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
    cta: {
      headline: "Il est temps de changer d'air, et de lumière.",
      text: "Un remplacement propre et rapide, sans mauvaise surprise sur le chantier.",
      illustration: "single",
    },
    heroImage: {
      src: "/photos/remplacement-fenetre-de-toit-velux-salon.jpg",
      alt: "Fenêtres de toit Velux ouvertes dans un salon lumineux",
      width: 2126,
      height: 1595,
    },
  },
  {
    slug: "entretien-reparation",
    title: "Entretien et réparation",
    summary: "Contrôle, entretien et dépannage rapide de vos fenêtres de toit, stores et volets roulants Velux, vitrages cassés compris.",
    description:
      "Une fenêtre de toit bien entretenue dure plus longtemps et évite les mauvaises surprises. Nous assurons le contrôle et la maintenance de vos fenêtres de toit, stores et volets roulants Velux, et intervenons rapidement en cas de panne : vitrage cassé, fuite, blocage mécanique ou produit motorisé qui ne répond plus.",
    avantages: [
      "Contrôle complet : vitrage, joints d'étanchéité, mécanisme, raccords de toiture",
      "Intervention rapide en cas de panne, y compris en urgence",
      "Remplacement des vitrages cassés et des pièces défectueuses",
      "Diagnostic sur place avant toute réparation, devis clair",
    ],
    etapes: [
      "Prise de contact et description du problème ou de la demande d'entretien",
      "Diagnostic complet sur place : vitrage, joints, mécanisme, raccords",
      "Devis clair avant toute intervention",
      "Réparation ou remplacement des pièces nécessaires, puis contrôle final",
    ],
    faq: [
      {
        question: "À quelle fréquence faut-il entretenir une fenêtre de toit ?",
        answer: "Un contrôle tous les 2 à 3 ans est recommandé, ou après un épisode météo marquant (grêle, tempête).",
      },
      {
        question: "Ma fenêtre de toit fuit, que faire en urgence ?",
        answer: "Contactez-nous au plus vite par téléphone : nous priorisons les urgences pour limiter les dégâts en attendant l'intervention.",
      },
      {
        question: "Mon store ou ma fenêtre motorisée ne répond plus, que faire ?",
        answer: "Un problème sur un produit électrique Velux (moteur, télécommande, capteur solaire) se diagnostique généralement sur place : batterie, capteur ou moteur défectueux. Contactez-nous pour un dépannage.",
      },
    ],
    cta: {
      headline: "Un doute sur l'état de votre Velux ?",
      text: "Un diagnostic clair avant toute intervention, et un devis qui ne cache rien.",
      illustration: "twin",
    },
    heroImage: {
      src: "/photos/entretien-reparation-fenetre-de-toit-velux.jpg",
      alt: "Technicien intervenant sur une fenêtre de toit Velux en cours d'installation",
      width: 2126,
      height: 1418,
    },
  },
  {
    slug: "installation-stores-velux",
    title: "Stores et volets roulants Velux",
    summary: "Occultation, protection solaire et confort d'été avec les stores et volets roulants Velux.",
    description:
      "Pose de stores occultants, stores pare-soleil ou volets roulants Velux, motorisés ou manuels, adaptés à votre modèle de fenêtre de toit existant. Selon vos besoins : occulter pour la nuit, se protéger de la chaleur, isoler du froid, tamiser et décorer, ou simplement préserver votre intimité.",
    avantages: [
      "Jusqu'à 92% de réduction de chaleur avec le volet roulant extérieur",
      "Occultation totale pour les chambres, avec les stores obscurcissants",
      "Compatibles avec la plupart des fenêtres de toit existantes",
      "Version motorisée disponible (télécommande, capteur solaire)",
    ],
    etapes: [
      "Identification du modèle de fenêtre existant",
      "Choix du store adapté (occultant, pare-soleil, moustiquaire)",
      "Devis et commande",
      "Pose sans percement, en général sous une heure",
    ],
    productGroups: [
      {
        title: "Occulter la lumière",
        subtitle: "Pour une bonne nuit de sommeil ou une sieste réparatrice en journée.",
        items: [
          {
            name: "Store occultant",
            text: "Obscurcit la pièce à toute heure du jour : idéal pour les chambres d'enfant et à coucher.",
          },
          {
            name: "Volet roulant",
            text: "Jusqu'à 92% de réduction de chaleur, obscurcissement complet, réduction du bruit de pluie et de grêle, meilleure isolation thermique.",
          },
          {
            name: "Store énergie",
            text: "Un revêtement spécial qui garde la chaleur en hiver tout en obscurcissant la pièce.",
          },
        ],
      },
      {
        title: "Tamiser la lumière",
        subtitle: "Une lumière douce et agréable à tout moment de la journée.",
        items: [
          {
            name: "Store vénitien",
            text: "Facile d'entretien et résistant à l'humidité, il permet de régler l'ombre et la lumière comme vous le souhaitez.",
          },
          {
            name: "Store plissé",
            text: "Une lumière douce et élégante, réglable, avec vue vers l'extérieur conservée et des accents décoratifs.",
          },
          {
            name: "Store confort",
            text: "Protège des regards indiscrets, atténue la lumière vive du soleil et évite la décoloration de vos meubles.",
          },
        ],
      },
      {
        title: "Protéger du chaud et des insectes",
        subtitle: "Une température confortable toute l'année, aérer sans les moustiques.",
        items: [
          {
            name: "Volet roulant",
            text: "Jusqu'à 92% de réduction de chaleur et une meilleure isolation thermique, en plus de l'obscurcissement.",
          },
          {
            name: "Marquisette",
            text: "Montée à l'extérieur, elle arrête les rayons du soleil avant qu'ils ne frappent la vitre : jusqu'à 74% de réduction de chaleur.",
          },
          {
            name: "Moustiquaire",
            text: "Montée sur le plafond, à commande manuelle : protection à 100% contre les insectes.",
          },
        ],
      },
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
    cta: {
      headline: "La bonne lumière, au bon moment.",
      text: "Occultant, tamisant ou pare-soleil : le store qui correspond vraiment à la pièce.",
      illustration: "dormer",
    },
    heroImage: {
      src: "/photos/store-velux-fenetre-de-toit-chambre.jpg",
      alt: "Stores occultants Velux installés sur deux fenêtres de toit dans une chambre",
      width: 2126,
      height: 1594,
    },
  },
  {
    slug: "fenetres-toit-plat",
    title: "Fenêtres pour toit plat",
    summary: "Profitez pleinement de vos espaces sous toiture plate grâce aux fenêtres Velux dédiées : lumière naturelle et confort optimal.",
    description:
      "Velux propose des fenêtres spécifiquement conçues pour les toits plats, avec des performances d'isolation et d'étanchéité qui n'ont rien à envier aux modèles pour toiture inclinée. Une solution pour apporter de la lumière naturelle et profiter pleinement de vos combles, d'une extension ou d'un local sans possibilité de fenêtre verticale.",
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
    cta: {
      headline: "Un toit plat n'empêche pas la lumière d'entrer.",
      text: "Des fenêtres pensées pour l'étanchéité et le confort, même sans pente.",
      illustration: "twin",
    },
    heroImage: {
      src: "/photos/fenetre-toit-plat-velux-toiture-terrasse.jpg",
      alt: "Fenêtre de toit plat Velux ouverte sur une toiture terrasse",
      width: 2126,
      height: 1418,
    },
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
      "Nous répondons rapidement aux demandes de devis. Le délai de réalisation des travaux dépend de la disponibilité du matériel et de la nature du chantier ; il vous est communiqué avec le devis.",
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
