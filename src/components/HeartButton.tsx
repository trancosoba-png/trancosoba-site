import { memo } from 'react';
import { Heart } from 'lucide-react';
import { useFavorites } from '../data/favorites';

function HeartButton({ id, className = '' }: { id: string; className?: string }) {
  const { has, toggle } = useFavorites();
  const active = has(id);
  return (
    <button
      type="button"
      aria-label={active ? 'Remover das favoritas' : 'Adicionar às favoritas'}
      aria-pressed={active}
      onClick={(e) => { e.preventDefault(); e.stopPropagation(); toggle(id); }}
      className={`absolute top-3 right-3 z-10 p-2 rounded-full transition-colors ${
        active ? 'bg-gold text-ivory' : 'bg-green-deep/55 text-ivory hover:bg-green-deep/80'
      } ${className}`}
    >
      <Heart size={16} fill={active ? 'currentColor' : 'none'} />
    </button>
  );
}

export default memo(HeartButton);
