import Product from './components/ProductCard.jsx'

function App() {
  const products = [
    {
      id: 1,
      name: 'Klara Midi Dress',
      price: '3950₱',
      description: 'A feminine, flowy linen midi dress with pleated panels, a flattering waist seam, V-neckline, and adjustable straps. It has a smocked garter back for a fitted silhouette and is fully lined. Ideal for those who want both comfort and elegance.',
      img: '/dress1.jpg'
    },
    {
      id: 2,
      name: 'MiniDurley Short Sleeveless dress(plains & Prints)',
      price: '598₱',
      description: 'An earthy yet glamorous option featuring a bodycon bodice and midi-length draped skirt. Made of spandex jersey, it offers sleek comfort and a goddess-like silhouette — great as a standalone statement piece or for accessorizing. detailed craft kit with tiny furniture and decorations perfect for collectors and hobby builders.',
      img: '/dress2.jpg'
    },
    {
      id: 3,
      name: 'Paint By Freedom Short Sleeve Dress',
      price: '2896₱',
      description: 'A feminine chiffon A-line dress with gathered skirt detailing. Features include bubble sleeves, a shirred ruffle hem, removable gartered belt strap, and relaxed fit. Lightweight and flowing — perfect for movement and grace. complete painting kit with canvas, paints, and brushes—relaxing activity that helps unleash creativity.',
      img: '/dress3.jpg'
    },
    {
      id: 4,
      name: 'PuzzleKultura Filipino Midi Sleeveless Dress (Ricrac)',
      price: '799₱',
      description: 'A breezy linen-style midi available in rust or beige, featuring smocked back detailing. Comfort meets Filipino craftsmanshipA set of classic brain teasers that sharpen memory, focus, and problem-solving skills—fun for kids and adults.',
      img: '/dress4.jpg'
    },
    {
      id: 5,
      name: 'Drone wDress Up Philippines Linen‑Blend Everyday Dress',
      price: '999₱',
      description: 'Practical and stylish designs like "Cape Town" or "Manresa": linen-blend, casual fit, pockets included, flattering minimalist cuts.A lightweight drone with HD camera, easy controls, and stable flight great for beginners and aerial photography.',
      img: '/dress5.jpg'
    },
      {
      id: 6,
      name: 'Kultura Filipino Filipiniana Dress with Detachable Sleeves',
      price: '989₱',
      description: 'A more formal, elegant option in a neutral beige hue. Features detachable sleeves for styling versatility high-speed off-road RC car with durable tires, shock absorbers, and remote steering—perfect for outdoor fun.',
      img: '/dress6.jpg'
    },
  ]

  return (
    <div className="app">
      <header className="app-header">
          <div className="app-title">
            <img src="/logo.png" alt="doydy cat toys" className="app-logo" />
            <h1>Shop @ Jammy Dress Shop</h1>
          </div>
      </header>
      <main className="product-list">
        {products.map(product => (
          <Product key={product.id} products={product} />
        ))}
      </main>
      <footer className="app-footer">
        <p>&copy; 2025 Jammy Dress Shop. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default App
