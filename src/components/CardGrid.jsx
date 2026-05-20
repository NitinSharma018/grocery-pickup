import { Link } from 'react-router-dom';
import './CardGrid.css'; // This is the CSS you'll create next

const categories = [
{
id: 1,
title: 'Fresh Produce',
image: 'https://cdn-icons-png.flaticon.com/128/7667/7667623.png',
text: 'Seasonal fruits and vegetables picked daily.',
badge: 'Best Seller',
link: '/products#vegetables'
},
{
id: 2,
title: 'Dairy Products',
image: 'https://cdn-icons-png.flaticon.com/128/3534/3534033.png',
text: 'Milk, cheese, yogurt, and more from local farms.',
badge: 'New',
link: '/products#dairy'
},
{
id: 3,
title: 'Bakery Items',
image: 'https://cdn-icons-png.flaticon.com/128/1046/1046784.png',
text: 'Freshly baked bread, rolls & pastries daily.',
badge: '',
link: '/products#bakery'
}
];

export default function CardGrid() {
return (
<div className="home-wrapper">
<h2 className="home-heading">🛒 Shop by Category</h2>

php-template
Copy
Edit
  <div className="card-grid">
    {categories.map((cat) => (
      <Link to={cat.link} key={cat.id} className="info-card">
        {cat.badge && <span className="badge">{cat.badge}</span>}
        <img src={cat.image} alt={cat.title} />
        <h3>{cat.title}</h3>
        <p>{cat.text}</p>
      </Link>
    ))}
  </div>
</div>
);
}