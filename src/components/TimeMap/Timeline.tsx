import { Slider } from '@/components/ui/slider';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import { useState, useEffect } from 'react';

interface TimelineProps {
  minYear: number;
  maxYear: number;
  currentYear: number;
  onYearChange: (year: number) => void;
}

const Timeline = ({ minYear, maxYear, currentYear, onYearChange }: TimelineProps) => {
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    if (!isPlaying) return;

    const interval = setInterval(() => {
      onYearChange((prev) => {
        if (prev >= maxYear) {
          setIsPlaying(false);
          return minYear;
        }
        return prev + 10;
      });
    }, 500);

    return () => clearInterval(interval);
  }, [isPlaying, maxYear, minYear, onYearChange]);

  const formatYear = (year: number) => {
    return year < 0 ? `${Math.abs(year)} до н.э.` : `${year} н.э.`;
  };

  return (
    <div className="bg-white/95 backdrop-blur-sm border-t shadow-lg p-6">
      <div className="max-w-6xl mx-auto space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold">Временная шкала</h3>
          <div className="text-2xl font-bold text-primary">
            {formatYear(currentYear)}
          </div>
        </div>

        <div className="flex items-center gap-4">
          <Button
            variant="outline"
            size="icon"
            onClick={() => setIsPlaying(!isPlaying)}
          >
            <Icon name={isPlaying ? 'Pause' : 'Play'} size={20} />
          </Button>

          <div className="flex-1">
            <Slider
              value={[currentYear]}
              onValueChange={([value]) => onYearChange(value)}
              min={minYear}
              max={maxYear}
              step={10}
              className="w-full"
            />
          </div>

          <Button
            variant="outline"
            size="icon"
            onClick={() => onYearChange(minYear)}
          >
            <Icon name="RotateCcw" size={20} />
          </Button>
        </div>

        <div className="flex justify-between text-xs text-muted-foreground">
          <span>{formatYear(minYear)}</span>
          <span>{formatYear(maxYear)}</span>
        </div>
      </div>
    </div>
  );
};

export default Timeline;
