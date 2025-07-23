import { ShoppingCart } from "lucide-react";

export default function EligaHome() {
  return (
    <div className="bg-[#f9f7f6] text-[#2c2c2c] font-sans">
      <header className="bg-white shadow-md p-6 flex justify-between items-center">
        <h1 className="text-3xl font-bold tracking-wide">Eliga</h1>
        <nav className="space-x-6 text-lg">
          <a href="#home" className="hover:text-pink-600">Home</a>
          <a href="#shop" className="hover:text-pink-600">Shop</a>
          <a href="#about" className="hover:text-pink-600">About</a>
          <a href="#contact" className="hover:text-pink-600">Contact</a>
        </nav>
      </header>

      <section
        id="home"
        className="relative h-[90vh] w-full bg-cover bg-center flex items-center justify-center text-white"
        style={{
          backgroundImage:
            'url(https://images.unsplash.com/photo-1618221064147-20f43f2f5e47?auto=format&fit=crop&w=1600&q=80)'
        }}
      >
        <div className="bg-black/50 p-10 rounded-2xl text-center max-w-xl">
          <h2 className="text-5xl font-bold mb-4">Elegance lives here.</h2>
          <p className="text-lg mb-6">
            Discover luxury curated boxes, elegant gifts and timeless pieces just
            for you.
          </p>
          <button className="bg-pink-600 hover:bg-pink-700 text-white px-6 py-2 rounded-xl text-lg">
            Shop Now
          </button>
        </div>
      </section>

      <section id="shop" className="py-20 px-6 bg-white">
        <h3 className="text-4xl font-semibold text-center mb-12">Our Collection</h3>
        <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="rounded-2xl overflow-hidden shadow-lg bg-white border border-gray-200"
            >
              <img
                src={`https://source.unsplash.com/random/400x400?luxury,box,${i}`}
                alt={`product-${i}`}
                className="object-cover w-full h-[300px]"
              />
              <div className="p-4 text-center">
                <h4 className="text-xl font-semibold mb-2">Elegant Box #{i}</h4>
                <p className="text-gray-600 mb-4">
                  Handpicked luxury pieces in every box.
                </p>
                <button className="bg-pink-600 text-white rounded-lg px-4 py-2 flex gap-2 items-center mx-auto">
                  <ShoppingCart size={18} /> Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="about" className="py-20 px-6 bg-[#fdf6f9] text-center">
        <h3 className="text-4xl font-semibold mb-6">About Eliga</h3>
        <p className="max-w-3xl mx-auto text-lg text-gray-700">
          Eliga is a luxury lifestyle brand born in Algeria, curating premium
          gift boxes, fashion accessories, and custom creations with elegance and
          personal touch. Our goal is to make every client feel special with
          hand-selected items that express love, taste, and sophistication.
        </p>
      </section>

      <section id="contact" className="py-20 px-6 bg-white text-center">
        <h3 className="text-4xl font-semibold mb-6">Contact Us</h3>
        <p className="text-gray-600 mb-4">
          Have questions or want to collaborate?
        </p>
        <p className="text-lg">
          Email us at{' '}
          <a href="mailto:contact@eliga.dz" className="text-pink-600 underline">
            contact@eliga.dz
          </a>
        </p>
      </section>

      <footer className="bg-[#2c2c2c] text-white text-center py-6">
        <p>&copy; 2025 Eliga. All rights reserved.</p>
      </footer>
    </div>
  );
}