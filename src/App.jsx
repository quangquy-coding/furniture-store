import Header from "./components/header";
import Footer from "./components/footer";
import ProductCard from "./components/product-card";
import TestimonialCard from "./components/testimonial-card";
import { ShoppingCart, Check } from "lucide-react";

// Image public (ensure these files exist in src/public/)
import imgDiningTable from "./public/modern-wooden-dining-table.png";
import imgAccentChair from "./public/modern-green-accent-chair.jpg";
import imgOfficeDesk from "./public/minimalist-office-desk-with-lamp.jpg";

import imgYellowFabricSofa from "./public/yellow-fabric-sofa-modern.jpg";
import imgLivingPlants from "./public/modern-living-room-interior-with-plants.jpg";
import imgShelfWithDecor from "./public/minimalist-shelf-with-decor.jpg";
import imgWallMountedTv from "./public/modern-wall-mounted-tv-unit.jpg";
import imgGreenVelvetSofa from "./public/green-velvet-sofa-with-cushions.jpg";
import imgWoodenSideTable from "./public/wooden-side-table-modern.jpg";
import imgYellowAccentChair from "./public/yellow-accent-chair-modern.jpg";
import imgGraySofaPillows from "./public/gray-modern-sofa-with-pillows.jpg";

import imgBlueSofa from "./public/blue-modern-sofa.jpg";
import imgGreenNightstand from "./public/green-modern-nightstand.jpg";
import imgBedroomSet from "./public/modern-bedroom-set.png";

import imgHeroYellowSofa from "./public/modern-living-room-with-yellow-sofa-and-wall-art.jpg";
import imgQualityLeatherSofa from "./public/modern-living-room-interior-with-brown-leather-sof.jpg";
import imgReviewBackground from "./public/gray-modern-sofa-with-pillows.jpg";

import avatarWomanSmiling from "./public/professional-woman-smiling.png";
import avatarManSmiling from "./public/professional-man-smiling.png";
import avatarWomanGlasses from "./public/professional-woman-glasses.png";

const App = () => {
  const categories = [
    "Luxury",
    "Daybed",
    "Home Depot",
    "IKEA",
    "Mobillia",
    "3M",
  ];

  const featuredProducts = [
    {
      image: imgDiningTable,
      name: "Dining Table",
      price: "299",
      category: "New Arrival",
    },
    {
      image: imgAccentChair,
      name: "Accent Chair",
      price: "199",
      category: "Chair",
    },
    {
      image: imgOfficeDesk,
      name: "Office Desk",
      price: "399",
      category: "New Arrival",
    },
  ];

  const craftedProducts = [
    { image: imgYellowFabricSofa, name: "Fabric Sofa", price: "599" },
    { image: imgLivingPlants, name: "Fabric Chair", price: "249" },
    { image: imgShelfWithDecor, name: "Fabric Chair", price: "179" },
    { image: imgWallMountedTv, name: "Latest Sofa", price: "699" },
    { image: imgGreenVelvetSofa, name: "Fabric Sofa", price: "549" },
    { image: imgWoodenSideTable, name: "Fabric Chair", price: "129" },
    { image: imgYellowAccentChair, name: "Fabric Chair", price: "199" },
    { image: imgGraySofaPillows, name: "Fabric Sofa", price: "649" },
  ];

  const showcaseProducts = [
    { image: imgBlueSofa, name: "Sofa", price: "499" },
    { image: imgGreenNightstand, name: "Nightstand", price: "149" },
    { image: imgBedroomSet, name: "Bedroom", price: "899" },
  ];

  const galleryImages = [
    imgLivingPlants,
    imgGraySofaPillows,
    imgQualityLeatherSofa,
    imgLivingPlants,
    imgAccentChair,
    imgYellowFabricSofa,
  ];

  const testimonials = [
    {
      name: "Sophia Martin",
      role: "Interior Designer",
      image: avatarWomanSmiling,
      rating: 5,
      review:
        "I absolutely love the furniture I purchased! The quality is outstanding and it fits perfectly in my living room. The delivery was quick and the customer service was excellent.",
    },
    {
      name: "James Wilson",
      role: "Architect",
      image: avatarManSmiling,
      rating: 5,
      review:
        "Amazing collection of modern furniture! I've been recommending this store to all my clients. The attention to detail and craftsmanship is truly impressive.",
    },
    {
      name: "Emily Chen",
      role: "Homeowner",
      image: avatarWomanGlasses,
      rating: 5,
      review:
        "The experience of buying furniture here was so easy and enjoyable. The staff helped me choose the perfect pieces for my home. Highly recommend!",
    },
  ];

  const qualityFeatures = [
    "Premium quality materials",
    "Comfortable seating experience",
    "Unique and modern designs",
    "Durable and long-lasting",
  ];

  const comfortFeatures = [
    "Ergonomic design",
    "Premium quality",
    "Affordable prices",
    "100 guarantee and comfort",
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-12 md:py-20">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Perfect Harmony: Comfort & Style
            </h1>
            <p className="text-muted-foreground mb-8 text-lg leading-relaxed">
              Explore our curated collection of premium furniture designed to
              transform your living space into a haven of comfort and elegance.
            </p>
            <div className="flex flex-wrap gap-4 mb-8">
              <div className="flex items-center gap-2">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <ShoppingCart className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="font-semibold">7 Days</p>
                  <p className="text-sm text-muted-foreground">Return Policy</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Check className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="font-semibold">2 Years</p>
                  <p className="text-sm text-muted-foreground">Warranty</p>
                </div>
              </div>
            </div>
            <button className="bg-primary text-primary-foreground px-8 py-3 rounded-full font-semibold hover:bg-primary/90 transition-colors">
              Explore
            </button>
          </div>
          <div className="relative">
            <img
              src={imgHeroYellowSofa}
              alt="Modern living room with yellow sofa"
              className="w-full h-auto rounded-3xl shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="container mx-auto px-4 py-8">
        <div className="flex flex-wrap gap-4 justify-center">
          {categories.map((category, index) => (
            <button
              key={index}
              className="px-6 py-2 rounded-full border border-border hover:bg-accent hover:text-accent-foreground transition-colors"
            >
              {category}
            </button>
          ))}
        </div>
      </section>

      {/* Featured Products */}
      <section className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featuredProducts.map((product, index) => (
            <ProductCard key={index} {...product} />
          ))}
        </div>
      </section>

      {/* Crafted Section */}
      <section className="container mx-auto px-4 py-12">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold">
            Crafted with excellent material
          </h2>
          <button className="px-6 py-2 rounded-full border border-border hover:bg-accent transition-colors">
            Explore
          </button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {craftedProducts.map((product, index) => (
            <ProductCard key={index} {...product} />
          ))}
        </div>
      </section>

      {/* Quality Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-6">
              Elevate Your Space with Uncompromising Quality
            </h2>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              We are committed to providing you with furniture that not only
              looks beautiful but also stands the test of time. Our pieces are
              crafted with premium materials and attention to detail.
            </p>
            <div className="space-y-4 mb-8">
              {qualityFeatures.map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                    <Check className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <p className="text-lg">{feature}</p>
                </div>
              ))}
            </div>
            <button className="bg-foreground text-background px-8 py-3 rounded-full font-semibold hover:bg-foreground/90 transition-colors">
              Explore
            </button>
          </div>
          <div className="relative">
            <img
              src={imgQualityLeatherSofa}
              alt="Modern living room interior"
              className="w-full h-auto rounded-3xl shadow-xl"
            />
          </div>
        </div>
      </section>

      {/* Showcase Products */}
      <section className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {showcaseProducts.map((product, index) => (
            <div key={index} className="text-center">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-64 object-cover rounded-2xl mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
              <p className="text-2xl font-bold text-primary">
                ${product.price}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Comfort Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <img
              src={imgGreenVelvetSofa}
              alt="Green velvet sofa"
              className="w-full h-auto rounded-3xl shadow-xl"
            />
          </div>
          <div>
            <h2 className="text-4xl font-bold mb-6">
              Elevate Your Mood with Comfortable Furniture
            </h2>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Our furniture is designed with your comfort in mind. Experience
              the perfect blend of style and relaxation with our carefully
              curated collection.
            </p>
            <div className="space-y-4 mb-8">
              {comfortFeatures.map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                    <Check className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <p className="text-lg">{feature}</p>
                </div>
              ))}
            </div>
            <button className="bg-foreground text-background px-8 py-3 rounded-full font-semibold hover:bg-foreground/90 transition-colors">
              Explore
            </button>
          </div>
        </div>
      </section>

      {/* Dedication Section */}
      <section className="bg-foreground text-background py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-4xl font-bold mb-6">
                Our Dedication to Your Satisfaction
              </h2>
              <p className="mb-8 leading-relaxed opacity-90">
                We are committed to providing exceptional quality and customer
                service. Your satisfaction is our top priority, and we stand
                behind every piece we sell.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <div className="flex gap-1 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-primary text-xl">
                        ★
                      </span>
                    ))}
                  </div>
                  <p className="text-3xl font-bold">4.8 / 5.0</p>
                  <p className="opacity-75">Overall rating</p>
                </div>
                <div>
                  <div className="flex gap-1 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-primary text-xl">
                        ★
                      </span>
                    ))}
                  </div>
                  <p className="text-3xl font-bold">5.0 / 5.0</p>
                  <p className="opacity-75">Quality rating</p>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                  <Check className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">
                    Quality Craftsmanship
                  </h3>
                  <p className="opacity-90">
                    Each piece is carefully crafted with attention to detail and
                    premium materials.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                  <Check className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">
                    Extensive Selection
                  </h3>
                  <p className="opacity-90">
                    Browse through our wide range of styles to find the perfect
                    match for your home.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                  <Check className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">
                    Dedicated Customer Support
                  </h3>
                  <p className="opacity-90">
                    Our team is here to help you every step of the way, from
                    selection to delivery.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Our Furniture Gallery</h2>
          <p className="text-muted-foreground text-lg">
            Explore our beautiful collection of furniture in real homes
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-2xl aspect-square"
            >
              <img
                src={image}
                alt={`Gallery ${index + 1}`}
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
              />
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">What Our Customer Say</h2>
          <p className="text-muted-foreground text-lg">
            Read what our satisfied customers have to say about us
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </div>
      </section>

      {/* Review Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={imgReviewBackground}
            alt="Modern sofa"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-foreground/70"></div>
        </div>
        <div className="relative container mx-auto px-4 text-center text-background">
          <h2 className="text-5xl font-bold mb-4">Our Furniture Review</h2>
          <p className="text-xl opacity-90">
            Discover why customers love our furniture
          </p>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="bg-foreground text-background py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">
              Subscribe to get attractive offers on our products
            </h2>
            <div className="flex gap-4 mt-8">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-3 rounded-full bg-background text-foreground"
              />
              <button className="bg-primary text-primary-foreground px-8 py-3 rounded-full font-semibold hover:bg-primary/90 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default App;
