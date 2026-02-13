export interface HeroData {
  title: string;
  subtitle: string;
  ctaText: string;
}

export interface ManifestoData {
  title: string;
  description: string;
  quote: string;
}

export interface ApproachPoint {
  title: string;
  description: string;
}

export interface ApproachData {
  sectionTitle: string;
  points: ApproachPoint[];
}
