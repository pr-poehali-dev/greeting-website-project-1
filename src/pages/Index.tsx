import { useState, useMemo } from 'react';
import MapView from '@/components/TimeMap/MapView';
import Timeline from '@/components/TimeMap/Timeline';
import EventDetails from '@/components/TimeMap/EventDetails';
import LayerControls from '@/components/TimeMap/LayerControls';
import { historicalEvents } from '@/data/historicalEvents';
import { HistoricalEvent, EventCategory } from '@/types/events';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [currentYear, setCurrentYear] = useState(-500);
  const [selectedEvent, setSelectedEvent] = useState<HistoricalEvent | null>(null);
  const [selectedCategories, setSelectedCategories] = useState<EventCategory[]>([
    'battle',
    'treaty',
    'discovery',
    'founding',
    'cultural',
    'trade'
  ]);

  const minYear = Math.min(...historicalEvents.map(e => e.year));
  const maxYear = Math.max(...historicalEvents.map(e => e.year));

  const filteredEvents = useMemo(() => {
    return historicalEvents.filter(event => 
      event.year <= currentYear && selectedCategories.includes(event.category)
    );
  }, [currentYear, selectedCategories]);

  const eventCounts = useMemo(() => {
    const counts: Record<EventCategory, number> = {
      battle: 0,
      treaty: 0,
      discovery: 0,
      founding: 0,
      cultural: 0,
      trade: 0
    };
    
    historicalEvents.forEach(event => {
      if (event.year <= currentYear) {
        counts[event.category]++;
      }
    });
    
    return counts;
  }, [currentYear]);

  const handleCategoryToggle = (category: EventCategory) => {
    setSelectedCategories(prev => 
      prev.includes(category)
        ? prev.filter(c => c !== category)
        : [...prev, category]
    );
  };

  return (
    <div className="h-screen flex flex-col">
      <header className="bg-gradient-to-r from-primary to-primary/80 text-white p-4 shadow-lg z-10">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Icon name="Globe" size={32} />
            <div>
              <h1 className="text-2xl font-bold">TimeMap</h1>
              <p className="text-sm text-white/80">Интерактивная карта исторических событий</p>
            </div>
          </div>
          <div className="hidden md:flex items-center gap-6 text-sm">
            <div className="flex items-center gap-2">
              <Icon name="MapPin" size={18} />
              <span>{filteredEvents.length} событий</span>
            </div>
            <div className="flex items-center gap-2">
              <Icon name="Layers" size={18} />
              <span>{selectedCategories.length} слоёв</span>
            </div>
          </div>
        </div>
      </header>

      <div className="flex-1 relative">
        <MapView events={filteredEvents} onEventClick={setSelectedEvent} />
        <LayerControls
          selectedCategories={selectedCategories}
          onCategoryToggle={handleCategoryToggle}
          eventCounts={eventCounts}
        />
      </div>

      <Timeline
        minYear={minYear}
        maxYear={maxYear}
        currentYear={currentYear}
        onYearChange={setCurrentYear}
      />

      <EventDetails
        event={selectedEvent}
        open={!!selectedEvent}
        onClose={() => setSelectedEvent(null)}
      />
    </div>
  );
};

export default Index;
