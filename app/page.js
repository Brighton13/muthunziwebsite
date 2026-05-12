import Image from 'next/image';

const featuredProducts = [
  {
    name: 'Money Lending Support',
    category: 'Finance',
    description:
      'Fast and flexible lending guidance for individuals and small businesses in Chipata.',
    badge: 'In-demand service',
    image: '/images/money-lending.png'
  },
  {
    name: 'Smartphones & Accessories',
    category: 'Phones',
    description:
      'Affordable smartphones, chargers, earphones, and day-to-day mobile essentials.',
    badge: 'Popular pick',
    image: '/images/phones.png'
  },
  {
    name: 'Laptops for Work & School',
    category: 'Computing',
    description:
      'Reliable laptops suitable for office work, studies, and everyday digital tasks.',
    badge: 'Featured',
    image: '/images/laptops.png'
  },
  {
    name: 'Clothing & Slippers',
    category: 'Fashion',
    description:
      'Practical everyday wear and comfortable slippers selected for value and style.',
    badge: 'Seasonal range',
    image: '/images/clothing.png'
  }
];

const grainProducts = [
  {
    name: 'Beans',
    image: '/images/beans.png'
  },
  {
    name: 'Groundnuts',
    image: '/images/groundnuts.png'
  },
  {
    name: 'Sunflower',
    image: '/images/sunflower.png'
  },
  {
    name: 'Soya Beans',
    image: '/images/soya-beans.png'
  }
];

const categories = [
  {
    title: 'Money Lending',
    summary:
      'Support for customers who need straightforward financing conversations and local access.',
    details: ['Fast response', 'Flexible discussion', 'Local service in Chipata']
  },
  {
    title: 'Phones & Laptops',
    summary:
      'A device showcase built for customers looking for useful technology and dependable options.',
    details: ['Smartphones', 'Laptop listings', 'Accessories and essentials']
  },
  {
    title: 'Clothing & Slippers',
    summary:
      'Visible product advertising for shoppers who want casual apparel and household comfort items.',
    details: ['Daily wear', 'Family selections', 'Value-focused offers']
  },
  {
    title: 'Agricultural Produce',
    summary:
      'Promotional listings for grains sourced and traded within the region.',
    details: grainProducts.map((item) => item.name)
  }
];

const contactItems = [
  'Chipata, Eastern Province',
  'Advertising catalogue website',
  'Call or visit to place an order offline'
];

const highlights = [
  {
    title: 'Phones & Laptops',
    text: 'Advertised tech products for work, study, and everyday communication.'
  },
  {
    title: 'Money Lending',
    text: 'Visible finance support for customers who prefer local offline engagement.'
  },
  {
    title: 'Fashion & Footwear',
    text: 'Clothing and slippers displayed in a simple catalogue format.'
  }
];

export default function HomePage() {
  return (
    <main className="page-shell">
      <section className="top-bar">
        <div className="brand-block">
          <span className="brand-mark">MGD</span>
          <div>
            <strong>Muthunzi General Dealers</strong>
            <p>Chipata, Eastern Province</p>
          </div>
        </div>

        <nav className="top-nav" aria-label="Main navigation">
          <a href="#catalogue">Catalogue</a>
          <a href="#produce">Produce</a>
          <a href="#contact">Contact</a>
        </nav>
      </section>

      <section className="hero-section">
        <div className="hero-copy">
          <span className="eyebrow">Advertising Catalogue</span>
          <h1>Everything you need in one place.</h1>
          <p>
            Muthunzi General Dealers is a company based in Chipata, Eastern Province.
            This website presents its products in an ecommerce-inspired layout for
            advertising only. Customers browse the catalogue here and complete enquiries
            or purchases offline.
          </p>
          <div className="hero-actions">
            <a href="#catalogue" className="primary-link">
              Explore catalogue
            </a>
            <a href="#contact" className="secondary-link">
              Contact business
            </a>
          </div>
          <ul className="hero-points" aria-label="Highlights">
            <li>Money lending support</li>
            <li>Phones and laptops</li>
            <li>Clothing and slippers</li>
            <li>Beans, groundnuts, sunflower, and soya beans</li>
          </ul>
        </div>

        <div className="hero-panel">
          <div className="hero-panel-banner">
            <span>Business focus</span>
            <strong>Offline sales with a modern online showcase</strong>
          </div>

          <div className="hero-panel-grid">
            {highlights.map((item) => (
              <article key={item.title} className="highlight-card">
                <h2>{item.title}</h2>
                <p>{item.text}</p>
              </article>
            ))}
          </div>

          <div className="assistant-card">
            <div>
              <span className="assistant-label">Quick note</span>
              <p>Products are advertised online, but ordering and payment are offline.</p>
            </div>
            <a href="#contact">Ask about stock and prices</a>
          </div>
        </div>
      </section>

      <section className="trust-strip" aria-label="Business summary">
        <div>
          <strong>4 core departments</strong>
          <span>Finance, devices, fashion, and grain trading</span>
        </div>
        <div>
          <strong>Chipata based</strong>
          <span>Serving customers from Eastern Province</span>
        </div>
        <div>
          <strong>Advertising website</strong>
          <span>No online checkout, orders handled offline</span>
        </div>
      </section>

      <section id="catalogue" className="catalogue-section">
        <div className="section-heading">
          <span className="eyebrow section-eyebrow">Platform features</span>
          <h2>Explore the products and services Muthunzi General Dealers promotes.</h2>
        </div>

        <div className="feature-row">
          {featuredProducts.map((item) => (
            <article key={item.name} className="preview-card">
              <div className="product-image-wrap">
                <Image
                  src={item.image}
                  alt={item.name}
                  width={420}
                  height={280}
                  className="product-image"
                />
              </div>
              <span className="product-badge">{item.badge}</span>
              <h3>{item.name}</h3>
              <p>{item.description}</p>
              <div className="card-footer">
                <span>{item.category}</span>
                <span>Ask for price</span>
              </div>
            </article>
          ))}
        </div>

        <div className="category-grid">
          {categories.map((category) => (
            <article key={category.title} className="category-card">
              <h3>{category.title}</h3>
              <p>{category.summary}</p>
              <ul>
                {category.details.map((detail) => (
                  <li key={detail}>{detail}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section id="produce" className="grain-showcase">
        <div className="section-heading">
          <span className="eyebrow section-eyebrow">Agricultural produce</span>
          <h2>Grains featured for advertising and trade enquiries.</h2>
        </div>

        <div className="grain-grid">
          {grainProducts.map((grain) => (
            <article key={grain.name} className="grain-card">
              <div className="grain-image-wrap">
                <Image
                  src={grain.image}
                  alt={grain.name}
                  width={360}
                  height={240}
                  className="product-image"
                />
              </div>
              <span className="grain-label">Available stock</span>
              <h3>{grain.name}</h3>
              <p>Marketed for visibility so customers can enquire and purchase offline.</p>
            </article>
          ))}
        </div>
      </section>

      <section className="notice-banner">
        <p>
          This website works like a catalogue. Products are displayed in an
          ecommerce-inspired format for advertising, but payments and delivery are not
          processed online.
        </p>
      </section>

      <section id="contact" className="contact-section">
        <div className="section-heading">
          <span className="eyebrow section-eyebrow">Contact</span>
          <h2>Ready to ask about pricing, stock, or availability?</h2>
        </div>

        <div className="contact-card">
          <div>
            <h3>Muthunzi General Dealers</h3>
            <p>
              Built to help local customers quickly see what the business offers before
              following up through direct communication.
            </p>
          </div>
          <ul>
            {contactItems.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
}