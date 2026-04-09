export interface StageDefinition {
  id: number;
  slug: string;
  title: string;
  subtitle: string;
  story: string;
  category: 'challenge' | 'platform' | 'operations';
  description: string;
  bullets: string[];
  image: string; // filename in public/
}
