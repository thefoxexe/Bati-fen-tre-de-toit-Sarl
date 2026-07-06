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

export const nav = [
  { href: "/", label: "Accueil" },
  { href: "/a-propos", label: "À propos" },
  { href: "/services", label: "Services" },
  { href: "/portfolio", label: "Réalisations" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
] as const;

export type Service = {
  slug: string;
  title: string;
  summary: string;
  description: string;
};

export const services: Service[] = [
  {
    slug: "installation-neuve",
    title: "Installation de fenêtres de toit",
    summary: "Création d'une ouverture dans des combles pour faire entrer la lumière naturelle.",
    description:
      "Étude de faisabilité, découpe de la toiture, pose de la fenêtre et finitions intérieures/extérieures. Une solution idéale pour aménager des combles ou éclairer une pièce sombre sous toiture.",
  },
  {
    slug: "remplacement-renovation",
    title: "Remplacement et rénovation",
    summary: "Remplacement d'une fenêtre de toit vieillissante ou peu performante.",
    description:
      "Dépose de l'ancienne fenêtre, mise aux normes d'étanchéité et d'isolation, pose du nouveau modèle. Une rénovation qui améliore le confort thermique et l'aspect de votre toiture.",
  },
  {
    slug: "volets-stores",
    title: "Volets roulants et stores",
    summary: "Occultation, protection solaire et confort d'été pour vos fenêtres de toit.",
    description:
      "Pose de volets roulants, stores occultants ou stores pare-soleil, motorisés ou manuels, adaptés à votre modèle de fenêtre de toit existant.",
  },
  {
    slug: "etancheite-finitions",
    title: "Étanchéité et finitions",
    summary: "Reprise d'étanchéité autour d'une fenêtre de toit et finitions intérieures soignées.",
    description:
      "Contrôle et reprise des raccords d'étanchéité, habillages intérieurs et extérieurs, pour une pose durable qui protège votre intérieur des infiltrations.",
  },
  {
    slug: "depannage-sav",
    title: "Dépannage et SAV",
    summary: "Intervention rapide en cas de fuite, de blocage ou de casse.",
    description:
      "Diagnostic sur place et réparation ou remplacement des pièces défectueuses (vitrage, mécanisme d'ouverture, joints d'étanchéité).",
  },
];

export type FaqItem = { question: string; answer: string };

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
    question: "Intervenez-vous dans ma région ?",
    answer:
      "Contactez-nous avec votre localité : nous vous confirmons rapidement si votre projet se trouve dans notre zone d'intervention.",
  },
];
