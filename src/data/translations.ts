import { Translation } from '../types';

export const translations: Record<'fr' | 'en', Translation> = {
  fr: {
    hero: {
      title: 'Accédez à l\'expertise d\'un senior en 1h',
      subtitle: 'Pour les founders africains qui construisent de vrais produits. Obtenez des conseils concrets sur votre MVP, architecture, sécurité et déploiement.',
      cta: 'Réserver une session',
      stats: {
        sessions: '500+ sessions',
        satisfaction: '98% satisfaits',
        experts: '50+ experts',
      },
    },
    forWho: {
      title: 'Pour qui ?',
      subtitle: 'Alinafa est fait pour vous si vous êtes...',
      profiles: [
        {
          title: 'Vibe Coder',
          description: 'Vous codez avec passion mais vous avez besoin de guidance pour structurer votre projet, éviter les pièges techniques et prendre les bonnes décisions d\'architecture.',
        },
        {
          title: 'Solopreneur Tech',
          description: 'Vous lancez votre produit seul et vous avez besoin d\'un regard expert pour valider vos choix techniques, optimiser votre stack et sécuriser votre MVP.',
        },
        {
          title: 'Petite Équipe Produit',
          description: 'Vous construisez un produit avec 2-5 personnes et vous voulez éviter les erreurs coûteuses, accélérer votre développement et adopter les meilleures pratiques.',
        },
        {
          title: 'Founder Non-Tech',
          description: 'Vous avez une vision produit claire mais vous avez besoin d\'aide pour comprendre les implications techniques, briefer vos devs ou prendre des décisions éclairées.',
        },
      ],
    },
    howItWorks: {
      title: 'Comment ça marche ?',
      steps: [
        {
          title: 'Réservez votre créneau',
          description: 'Choisissez un expert senior et un créneau qui vous convient. Sessions minimum 1h.',
        },
        {
          title: 'Préparez votre problématique',
          description: 'Partagez votre contexte, code ou questions en amont pour maximiser l\'efficacité.',
        },
        {
          title: 'Session de consulting',
          description: 'Échange en visio avec screen sharing. Conseils concrets, revue de code, décisions d\'architecture.',
        },
        {
          title: 'Plan d\'action',
          description: 'Repartez avec un plan clair, des recommandations documentées et un suivi si besoin.',
        },
      ],
    },
    pricing: {
      title: 'Tarification simple',
      subtitle: 'Payez uniquement pour le temps dont vous avez besoin',
      currency: 'FCFA',
      perHour: '/heure',
      features: [
        'Session 1h minimum',
        'Revue de code en direct',
        'Conseils architecture & sécurité',
        'Recommandations documentées',
        'Support post-session (48h)',
      ],
      cta: 'Commencer maintenant',
    },
    finalCta: {
      title: 'Prêt à accélérer votre projet ?',
      subtitle: 'Ne perdez plus de temps à chercher des réponses sur Stack Overflow. Obtenez des conseils d\'experts adaptés à votre contexte en 1h.',
      cta: 'Réserver une session',
    },
    modal: {
      title: 'Réserver une session',
      subtitle: 'Choisissez votre mode de contact préféré',
      whatsapp: 'Contacter via WhatsApp',
      email: 'Envoyer un email',
      close: 'Fermer',
    },
  },
  en: {
    hero: {
      title: 'Access senior expertise in 1 hour',
      subtitle: 'For African founders building real products. Get concrete advice on your MVP, architecture, security, and deployment.',
      cta: 'Book a session',
      stats: {
        sessions: '500+ sessions',
        satisfaction: '98% satisfied',
        experts: '50+ experts',
      },
    },
    forWho: {
      title: 'Who is this for?',
      subtitle: 'Alinafa is made for you if you are...',
      profiles: [
        {
          title: 'Vibe Coder',
          description: 'You code with passion but need guidance to structure your project, avoid technical pitfalls, and make the right architectural decisions.',
        },
        {
          title: 'Tech Solopreneur',
          description: 'You\'re launching your product solo and need an expert eye to validate your technical choices, optimize your stack, and secure your MVP.',
        },
        {
          title: 'Small Product Team',
          description: 'You\'re building a product with 2-5 people and want to avoid costly mistakes, accelerate development, and adopt best practices.',
        },
        {
          title: 'Non-Tech Founder',
          description: 'You have a clear product vision but need help understanding technical implications, briefing your devs, or making informed decisions.',
        },
      ],
    },
    howItWorks: {
      title: 'How it works?',
      steps: [
        {
          title: 'Book your slot',
          description: 'Choose a senior expert and a time that suits you. Minimum 1-hour sessions.',
        },
        {
          title: 'Prepare your topic',
          description: 'Share your context, code, or questions in advance to maximize efficiency.',
        },
        {
          title: 'Consulting session',
          description: 'Video call with screen sharing. Concrete advice, code review, architecture decisions.',
        },
        {
          title: 'Action plan',
          description: 'Leave with a clear plan, documented recommendations, and follow-up if needed.',
        },
      ],
    },
    pricing: {
      title: 'Simple pricing',
      subtitle: 'Pay only for the time you need',
      currency: 'USD',
      perHour: '/hour',
      features: [
        '1-hour minimum session',
        'Live code review',
        'Architecture & security advice',
        'Documented recommendations',
        'Post-session support (48h)',
      ],
      cta: 'Get started now',
    },
    finalCta: {
      title: 'Ready to accelerate your project?',
      subtitle: 'Stop wasting time searching for answers on Stack Overflow. Get expert advice tailored to your context in 1 hour.',
      cta: 'Book a session',
    },
    modal: {
      title: 'Book a session',
      subtitle: 'Choose your preferred contact method',
      whatsapp: 'Contact via WhatsApp',
      email: 'Send an email',
      close: 'Close',
    },
  },
};
