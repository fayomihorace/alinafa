export type Language = 'fr' | 'en';

export interface Translation {
  hero: {
    title: string;
    subtitle: string;
    cta: string;
    stats: {
      sessions: string;
      satisfaction: string;
      experts: string;
    };
  };
  forWho: {
    title: string;
    subtitle: string;
    profiles: Array<{
      title: string;
      description: string;
    }>;
  };
  howItWorks: {
    title: string;
    steps: Array<{
      title: string;
      description: string;
    }>;
  };
  pricing: {
    title: string;
    subtitle: string;
    currency: string;
    perHour: string;
    priceStartFrom: string;
    features: string[];
    cta: string;
  };
  finalCta: {
    title: string;
    subtitle: string;
    cta: string;
  };
  modal: {
    title: string;
    subtitle: string;
    whatsapp: string;
    email: string;
    close: string;
  };
}
