export type EventCategory = 'battle' | 'treaty' | 'discovery' | 'founding' | 'cultural' | 'trade';

export interface HistoricalEvent {
  id: string;
  title: string;
  description: string;
  date: string;
  year: number;
  category: EventCategory;
  coordinates: [number, number];
  relatedEvents?: string[];
  imageUrl?: string;
  sources?: string[];
}

export interface TimelineFilter {
  startYear: number;
  endYear: number;
  categories: EventCategory[];
}
