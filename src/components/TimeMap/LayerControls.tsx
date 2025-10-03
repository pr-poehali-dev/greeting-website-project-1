import { EventCategory } from '@/types/events';
import { Checkbox } from '@/components/ui/checkbox';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

interface LayerControlsProps {
  selectedCategories: EventCategory[];
  onCategoryToggle: (category: EventCategory) => void;
  eventCounts: Record<EventCategory, number>;
}

const categoryConfig: Record<EventCategory, { label: string; icon: string; color: string }> = {
  battle: { label: 'Сражения', icon: 'Swords', color: 'bg-red-500' },
  treaty: { label: 'Договоры', icon: 'FileText', color: 'bg-blue-500' },
  discovery: { label: 'Открытия', icon: 'Compass', color: 'bg-amber-500' },
  founding: { label: 'Основания', icon: 'Building', color: 'bg-purple-500' },
  cultural: { label: 'Культура', icon: 'Palette', color: 'bg-pink-500' },
  trade: { label: 'Торговля', icon: 'TrendingUp', color: 'bg-green-500' }
};

const LayerControls = ({ selectedCategories, onCategoryToggle, eventCounts }: LayerControlsProps) => {
  return (
    <Card className="absolute top-4 right-4 z-[1000] w-64 shadow-lg">
      <CardHeader className="pb-3">
        <CardTitle className="text-lg flex items-center gap-2">
          <Icon name="Layers" size={20} />
          Слои событий
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        {(Object.keys(categoryConfig) as EventCategory[]).map((category) => {
          const config = categoryConfig[category];
          const count = eventCounts[category] || 0;
          const isChecked = selectedCategories.includes(category);

          return (
            <div key={category} className="flex items-center gap-3 py-1">
              <Checkbox
                id={category}
                checked={isChecked}
                onCheckedChange={() => onCategoryToggle(category)}
              />
              <label
                htmlFor={category}
                className="flex items-center gap-2 flex-1 cursor-pointer text-sm"
              >
                <div className={`w-3 h-3 rounded-full ${config.color}`} />
                <Icon name={config.icon as any} size={16} />
                <span className="flex-1">{config.label}</span>
                <span className="text-xs text-muted-foreground">({count})</span>
              </label>
            </div>
          );
        })}
      </CardContent>
    </Card>
  );
};

export default LayerControls;
