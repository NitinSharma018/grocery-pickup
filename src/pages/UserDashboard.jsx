import ProductList from '../data/ProductList';

export default function UserDashboard() {
  return (
    <div style={{ minHeight: '100vh', background: 'linear-gradient(to bottom right, #fef9c3, #fce7f3, #d9f99d)', padding: '2rem' }}>
      <ProductList />
    </div>
  );
}
