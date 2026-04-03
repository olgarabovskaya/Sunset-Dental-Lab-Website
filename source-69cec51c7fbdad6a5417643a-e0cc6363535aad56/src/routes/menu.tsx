import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/menu')({
  component: Menu,
})

const categories = [
  {
    title: 'Breads',
    emoji: '🍞',
    items: [
      { name: 'Country Sourdough', description: 'Our signature 36-hour cold-fermented loaf. Tangy, chewy, with a crackly crust.', price: '$9' },
      { name: 'Rustic Baguette', description: 'Classic French-style baguette, crisp outside, airy inside. Baked 3 times daily.', price: '$4' },
      { name: 'Seeded Rye', description: 'Dense, nutty rye with sunflower, flax, and caraway seeds.', price: '$10' },
      { name: 'Honey Whole Wheat', description: 'Soft sandwich loaf made with local honey and stone-ground whole wheat.', price: '$8' },
    ],
  },
  {
    title: 'Pastries',
    emoji: '🥐',
    items: [
      { name: 'Butter Croissant', description: 'Made with 84% European butter. Laminated over two days for perfect layers.', price: '$4.50' },
      { name: 'Pain au Chocolat', description: 'Crisp croissant dough folded around two batons of Valrhona dark chocolate.', price: '$5' },
      { name: 'Almond Croissant', description: 'Day-old croissant soaked in rum syrup, filled and topped with almond cream.', price: '$5.50' },
      { name: 'Morning Bun', description: 'Spiral pastry coated in orange zest sugar. A weekend favourite.', price: '$5' },
      { name: 'Seasonal Danish', description: 'Ask at the counter — changes with what\'s local and in season.', price: '$5.50' },
    ],
  },
  {
    title: 'Cakes & Sweets',
    emoji: '🎂',
    items: [
      { name: 'Lemon Olive Oil Cake', description: 'Tender crumb, bright lemon glaze. Available by the slice or whole.', price: '$5 / slice' },
      { name: 'Chocolate Tart', description: 'Dark chocolate ganache in a crisp all-butter shell. Rich and not too sweet.', price: '$6' },
      { name: 'Cannoli', description: 'Crispy shells filled to order with sweetened ricotta and chocolate chips.', price: '$4 each' },
      { name: 'Custom Celebration Cake', description: 'Designed just for you. Minimum 5 days notice required. Pricing on request.', price: 'Call us' },
    ],
  },
  {
    title: 'Drinks',
    emoji: '☕',
    items: [
      { name: 'Espresso', description: 'Single origin beans, pulled fresh on our La Marzocco.', price: '$3' },
      { name: 'Cappuccino / Latte', description: 'Espresso with steamed whole milk from a local dairy.', price: '$5' },
      { name: 'Drip Coffee', description: 'Rotating single-origin, brewed every 30 minutes.', price: '$3.50' },
      { name: 'Fresh Orange Juice', description: 'Squeezed in-house each morning until we run out.', price: '$4' },
    ],
  },
]

function Menu() {
  return (
    <div>
      <section className="bg-amber-900 text-amber-50 py-16 px-6 text-center">
        <h1 className="text-4xl font-bold mb-3">Our Menu</h1>
        <p className="text-amber-200 max-w-lg mx-auto">
          Everything is made fresh each morning. Items sell out — arrive early for the best selection.
        </p>
      </section>

      <section className="py-16 px-6 bg-amber-50">
        <div className="max-w-4xl mx-auto space-y-16">
          {categories.map((cat) => (
            <div key={cat.title}>
              <h2 className="text-2xl font-bold text-amber-900 mb-6 flex items-center gap-3">
                <span>{cat.emoji}</span>
                {cat.title}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {cat.items.map((item) => (
                  <div
                    key={item.name}
                    className="bg-white rounded-xl p-5 border border-amber-100 shadow-sm flex justify-between gap-4"
                  >
                    <div>
                      <div className="font-semibold text-stone-800 mb-1">{item.name}</div>
                      <div className="text-sm text-stone-500 leading-relaxed">{item.description}</div>
                    </div>
                    <div className="text-amber-700 font-semibold text-sm whitespace-nowrap pt-0.5">{item.price}</div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-stone-500 text-sm mt-16 max-w-md mx-auto">
          Menu and prices subject to change. Please ask at the counter for today's specials and allergy information.
        </p>
      </section>
    </div>
  )
}
