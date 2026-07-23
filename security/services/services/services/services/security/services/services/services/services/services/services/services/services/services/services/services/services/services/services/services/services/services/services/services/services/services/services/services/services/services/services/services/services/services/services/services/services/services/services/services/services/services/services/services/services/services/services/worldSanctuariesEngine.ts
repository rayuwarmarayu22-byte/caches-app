// Caches Global Elite Sanctuaries & Cultural Residency Matrix

export type SanctuaryCategory = 'URBAN_CREATIVE_HUB' | 'ZEN_ALPINE_RETREAT' | 'COASTAL_VILLA_OASIS' | 'HISTORIC_PALAZZO';

export interface WorldSanctuaryDestination {
  sanctuaryId: string;
  propertyName: string;
  hostCityOrRegion: string;
  country: string;
  category: SanctuaryCategory;
  vibeScore: number;
  immersiveTour4kUrl: string;
  startingRatePerNightUSD: number;
}

// Curates the world's most powerful, inspiring places to stay, live, and create
export function fetchEliteSanctuaries(categoryFilter?: SanctuaryCategory): WorldSanctuaryDestination[] {
  const sanctuaries: WorldSanctuaryDestination[] = [
    {
      sanctuaryId: 'sanc_tokyo_01',
      propertyName: 'Aman Tokyo Zen Sky Sanctuary',
      hostCityOrRegion: 'Tokyo',
      country: 'Japan',
      category: 'ZEN_ALPINE_RETREAT',
      vibeScore: 99.6,
      immersiveTour4kUrl: 'https://caches.app/tours/tokyo-zen-sky',
      startingRatePerNightUSD: 1400,
    },
    {
      sanctuaryId: 'sanc_london_02',
      propertyName: 'Claridge’s Art Deco Royal Suite',
      hostCityOrRegion: 'London',
      country: 'United Kingdom',
      category: 'URBAN_CREATIVE_HUB',
      vibeScore: 99.1,
      immersiveTour4kUrl: 'https://caches.app/tours/london-claridges',
      startingRatePerNightUSD: 1600,
    },
    {
      sanctuaryId: 'sanc_bali_03',
      propertyName: 'Nihi Sumba Wild Coast Sanctuary',
      hostCityOrRegion: 'Sumba',
      country: 'Indonesia',
      category: 'COASTAL_VILLA_OASIS',
      vibeScore: 98.9,
      immersiveTour4kUrl: 'https://caches.app/tours/bali-sumba-wild',
      startingRatePerNightUSD: 1200,
    },
  ];

  if (!categoryFilter) return sanctuaries;
  return sanctuaries.filter(s => s.category === categoryFilter);
}

export function calculateResidencyBookingImpact(nightlyRate: number, nights: number): { totalStayCost: number; elitePerksIncluded: string[] } {
  return {
    totalStayCost: nightlyRate * nights,
    elitePerksIncluded: [
      'Private 4K Holographic Studio Access',
      'Zero-Fee Global Payout Integration',
      'Dedicated Concierge & Autonomous Copyright Flock Protection'
    ],
  };
}
