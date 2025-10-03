import { HistoricalEvent } from '@/types/events';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

interface EventDetailsProps {
  event: HistoricalEvent | null;
  open: boolean;
  onClose: () => void;
}

const categoryLabels: Record<string, string> = {
  battle: 'Сражение',
  treaty: 'Договор',
  discovery: 'Открытие',
  founding: 'Основание',
  cultural: 'Культура',
  trade: 'Торговля'
};

const categoryIcons: Record<string, string> = {
  battle: 'Swords',
  treaty: 'FileText',
  discovery: 'Compass',
  founding: 'Building',
  cultural: 'Palette',
  trade: 'TrendingUp'
};

const EventDetails = ({ event, open, onClose }: EventDetailsProps) => {
  if (!event) return null;

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
              <Icon name={categoryIcons[event.category] as any} size={24} className="text-primary" />
            </div>
            <div className="flex-1">
              <DialogTitle className="text-2xl mb-2">{event.title}</DialogTitle>
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <div className="flex items-center gap-1">
                  <Icon name="Calendar" size={16} />
                  <span>{event.date}</span>
                </div>
                <Badge variant="secondary">
                  {categoryLabels[event.category]}
                </Badge>
              </div>
            </div>
          </div>
        </DialogHeader>

        <div className="space-y-6 mt-4">
          <div>
            <h4 className="font-semibold mb-2 flex items-center gap-2">
              <Icon name="FileText" size={18} />
              Описание
            </h4>
            <p className="text-muted-foreground leading-relaxed">
              {event.description}
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-2 flex items-center gap-2">
              <Icon name="MapPin" size={18} />
              Местоположение
            </h4>
            <p className="text-muted-foreground">
              Координаты: {event.coordinates[0].toFixed(4)}°, {event.coordinates[1].toFixed(4)}°
            </p>
          </div>

          {event.sources && event.sources.length > 0 && (
            <div>
              <h4 className="font-semibold mb-2 flex items-center gap-2">
                <Icon name="BookOpen" size={18} />
                Источники
              </h4>
              <ul className="list-disc list-inside space-y-1">
                {event.sources.map((source, index) => (
                  <li key={index} className="text-muted-foreground text-sm">
                    {source}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {event.relatedEvents && event.relatedEvents.length > 0 && (
            <div>
              <h4 className="font-semibold mb-2 flex items-center gap-2">
                <Icon name="Link" size={18} />
                Связанные события
              </h4>
              <p className="text-sm text-muted-foreground">
                {event.relatedEvents.length} связанных событий
              </p>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default EventDetails;
