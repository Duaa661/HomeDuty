
import { useEffect, useRef, useState } from 'react';
import { Reveal } from './Reval';

export function MenuCard({ dish, onAdd, index }) {
  const [added, setAdded] = useState(false);

  const handleAdd = () => {
    onAdd(dish);
    setAdded(true);
    setTimeout(() => setAdded(false), 1200);
  };

  return (
    <Reveal as="article" delay={(index % 3) * 100} className="card dish">
      <div className="dish-photo">
        {dish.image ? (
          <img src={dish.image} alt={dish.name} loading="lazy" />
        ) : (
          <span>[Dish photo]</span>
        )}
      </div>
      <div className="dish-body">
        <span className="pill pill-small">{dish.tag}</span>
        <h3>{dish.name}</h3>
        <p className="muted grow">{dish.desc}</p>
        <div className="dish-footer">
          <strong className="price">₹{dish.price}</strong>
          <button
            type="button"
            className={`btn btn-outline ${added ? 'is-added' : ''}`}
            onClick={handleAdd}
          >
            {added ? 'Added ✓' : 'Add to order'}
          </button>
        </div>
      </div>
    </Reveal>
  );
}
