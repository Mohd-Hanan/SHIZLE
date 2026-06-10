import React, { useEffect, useState } from "react";
import { Link } from "wouter";
import { MapPin, Phone, Clock, ArrowRight, Instagram, Facebook, Map } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Home() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-background flex flex-col font-sans">
      {/* Navigation */}
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          scrolled ? "bg-background/90 backdrop-blur-md shadow-sm py-4" : "bg-transparent py-6"
        }`}
      >
        <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
          <Link href="/" className="text-2xl md:text-3xl font-serif font-bold text-primary tracking-wide">
            SHIZLE
          </Link>
          <div className="hidden md:flex items-center space-x-8 text-sm font-medium text-foreground">
            <a href="#categories" className="hover:text-primary transition-colors">Collections</a>
            <a href="#new-arrivals" className="hover:text-primary transition-colors">New Arrivals</a>
            <a href="#about" className="hover:text-primary transition-colors">Our Story</a>
            <a href="#visit" className="hover:text-primary transition-colors">Visit Us</a>
          </div>
          <Button asChild className="rounded-full bg-primary hover:bg-primary/90 text-primary-foreground px-6">
            <a href="#visit">Find Store</a>
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden flex items-center justify-center min-h-[90vh]">
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/hero.png" 
            alt="SHIZLE Boutique Interior" 
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/40"></div>
        </div>
        
        <div className="container relative z-10 mx-auto px-4 md:px-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              <MapPin size={14} />
              <span>Chaliyam, Kerala</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-serif font-bold text-foreground leading-tight mb-6 text-balance">
              Where Kerala's vibrant spirit meets <span className="text-primary italic">modern style</span>.
            </h1>
            <p className="text-lg md:text-xl text-foreground/80 mb-8 max-w-lg leading-relaxed">
              The go-to fashion destination for women. Discover affordable, trendy, and beautiful collections curated just for you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="rounded-full bg-primary hover:bg-primary/90 text-lg px-8 h-14">
                <a href="#visit">
                  Visit Us to Buy <ArrowRight className="ml-2 w-5 h-5" />
                </a>
              </Button>
              <Button asChild variant="outline" size="lg" className="rounded-full border-primary/20 text-foreground hover:bg-primary/5 text-lg px-8 h-14">
                <a href="#categories">Browse Collection</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section id="categories" className="py-24 bg-card">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-foreground mb-4">Curated for Every Occasion</h2>
            <p className="text-foreground/70 max-w-2xl mx-auto">From everyday elegance to your most glamorous nights out, explore our diverse collections tailored for the modern woman.</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
            {[
              { name: "Western Wear", bg: "bg-rose-50" },
              { name: "Party Wear", bg: "bg-amber-50" },
              { name: "Gowns", bg: "bg-fuchsia-50" },
              { name: "Kurtis", bg: "bg-rose-50" },
              { name: "Ethnic Fusion", bg: "bg-amber-50" },
              { name: "Accessories", bg: "bg-fuchsia-50" }
            ].map((cat, i) => (
              <div key={i} className={`${cat.bg} dark:bg-card rounded-2xl p-6 text-center aspect-square flex flex-col justify-center items-center group cursor-pointer hover:shadow-lg transition-all duration-300 border border-transparent hover:border-primary/20`}>
                <h3 className="font-serif font-semibold text-lg md:text-xl text-foreground group-hover:text-primary transition-colors">{cat.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Collection */}
      <section id="new-arrivals" className="py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <h2 className="text-3xl md:text-5xl font-serif font-bold text-foreground mb-4">New Arrivals</h2>
              <p className="text-foreground/70 max-w-xl">Our latest handpicked pieces. Spot something you love? Visit our store in Chaliyam to try it on and make it yours.</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { name: "Regal Plum Kurti Set", image: "/images/kurti.png", category: "Ethnic Fusion" },
              { name: "Ivory Draped Top", image: "/images/western.png", category: "Western Wear" },
              { name: "Golden Amber Evening Gown", image: "/images/gown.png", category: "Party Wear" },
              { name: "Festive Rose Fusion Dress", image: "/images/ethnic.png", category: "Ethnic Fusion" }
            ].map((product, i) => (
              <div key={i} className="group flex flex-col">
                <div className="relative aspect-[3/4] rounded-2xl overflow-hidden mb-4 bg-muted">
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute top-4 right-4 bg-background/90 backdrop-blur-sm text-foreground text-xs font-semibold px-3 py-1.5 rounded-full shadow-sm">
                    Available in store
                  </div>
                </div>
                <div className="text-xs text-primary font-medium tracking-wider uppercase mb-1">{product.category}</div>
                <h3 className="font-serif font-semibold text-xl text-foreground mb-2">{product.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-card">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-3xl md:text-5xl font-serif font-bold text-foreground mb-6">A Ladies-Only Fashion Haven</h2>
              <div className="space-y-6 text-foreground/80 text-lg leading-relaxed">
                <p>
                  Located in the heart of Chaliyam, SHIZLE was born from a simple idea: to give local women a beautiful, comfortable space to discover their unique style.
                </p>
                <p>
                  We are proud to be a ladies-only boutique. This means you can browse, try on outfits, and get styling advice in complete privacy and comfort. Our store is designed to feel like stepping into a friend's glamorous closet — warm, inviting, and full of possibilities.
                </p>
                <p>
                  Whether you're looking for an everyday kurti, a stunning gown for a reception, or the perfect western top for a day out, our curated racks hold pieces that celebrate your individuality.
                </p>
              </div>
              <div className="mt-10">
                <Button asChild variant="outline" className="rounded-full border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8">
                  <a href="#visit">Come Say Hello</a>
                </Button>
              </div>
            </div>
            <div className="order-1 lg:order-2 relative">
              <div className="aspect-square md:aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl relative z-10">
                <img src="/images/about.png" alt="Boutique Fabric Detail" className="object-cover w-full h-full" />
              </div>
              <div className="absolute -bottom-6 -left-6 w-48 h-48 bg-secondary rounded-full -z-10 blur-3xl opacity-30"></div>
              <div className="absolute -top-6 -right-6 w-48 h-48 bg-primary rounded-full -z-10 blur-3xl opacity-20"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Visit Us */}
      <section className="py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-foreground mb-4">Why Women Love SHIZLE</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Curated Selection",
                desc: "We handpick every piece, ensuring a unique collection you won't find anywhere else in town.",
                icon: "✨"
              },
              {
                title: "Personal Styling",
                desc: "Not sure what suits you? Our friendly staff is always ready to help you put together the perfect look.",
                icon: "👗"
              },
              {
                title: "Latest Trends",
                desc: "We constantly update our inventory so you always have access to the freshest styles.",
                icon: "🌟"
              },
              {
                title: "Affordable Prices",
                desc: "Look like a million bucks without spending it. We believe great fashion should be accessible.",
                icon: "💎"
              }
            ].map((feature, i) => (
              <div key={i} className="bg-card rounded-2xl p-8 border border-border/50 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-2xl mb-6">
                  {/* Replaced Emojis with simple decorative shapes to obey the "no emojis" rule */}
                  <div className="w-4 h-4 rounded-sm bg-primary transform rotate-45"></div>
                </div>
                <h3 className="font-serif font-bold text-xl text-foreground mb-3">{feature.title}</h3>
                <p className="text-foreground/70 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Visit Us / Find Us */}
      <section id="visit" className="py-24 bg-primary text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-white/10 via-transparent to-transparent"></div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
            <div>
              <h2 className="text-4xl md:text-6xl font-serif font-bold mb-6">Ready to upgrade your wardrobe?</h2>
              <p className="text-primary-foreground/80 text-xl mb-12 max-w-lg">
                Drop by our store in Chaliyam. We can't wait to help you find your next favorite outfit.
              </p>
              
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Store Address</h4>
                    <p className="text-primary-foreground/80 leading-relaxed">
                      Main Road, Near Town Square<br />
                      Chaliyam, Kozhikode<br />
                      Kerala 673301
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                    <Clock className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Opening Hours</h4>
                    <p className="text-primary-foreground/80 leading-relaxed">
                      Monday - Saturday: 10:00 AM - 8:00 PM<br />
                      Sunday: 11:00 AM - 7:00 PM
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-12 flex flex-col sm:flex-row gap-4">
                <Button className="rounded-full bg-white text-primary hover:bg-white/90 h-14 px-8 text-lg font-semibold shadow-xl">
                  <Phone className="mr-2 w-5 h-5" /> Contact via WhatsApp
                </Button>
                <Button variant="outline" className="rounded-full border-white/30 text-white hover:bg-white/10 h-14 px-8 text-lg">
                  <Map className="mr-2 w-5 h-5" /> Get Directions
                </Button>
              </div>
            </div>
            
            <div className="rounded-3xl overflow-hidden shadow-2xl h-[400px] lg:h-[600px] bg-white/5 border border-white/10 flex items-center justify-center relative">
              {/* Fallback map graphic representation since iframe mapping can be tricky */}
              <div className="absolute inset-0 bg-[url('https://api.maptiler.com/maps/basic-v2/static/75.8239,11.1610,14/800x600.png?key=get_your_own_OpIi9ZULNHzrESv6T2vL')] bg-cover bg-center opacity-80 mix-blend-luminosity"></div>
              <div className="bg-primary p-6 rounded-2xl shadow-2xl max-w-xs text-center relative z-10 border border-white/20">
                <div className="w-12 h-12 rounded-full bg-white text-primary flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-6 h-6" />
                </div>
                <h3 className="font-serif font-bold text-xl mb-2">SHIZLE Boutique</h3>
                <p className="text-sm text-primary-foreground/80">Chaliyam, Kerala</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-background py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            <div className="col-span-1 md:col-span-2">
              <Link href="/" className="text-3xl font-serif font-bold tracking-wide text-white mb-4 block">
                SHIZLE
              </Link>
              <p className="text-white/60 max-w-sm mb-6">
                Chaliyam's premier ladies-only fashion boutique. Curated western wear, party wear, and ethnic fusion.
              </p>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors text-white">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors text-white">
                  <Facebook className="w-5 h-5" />
                </a>
              </div>
            </div>
            
            <div>
              <h4 className="font-bold text-lg mb-6 text-white">Quick Links</h4>
              <ul className="space-y-4 text-white/60">
                <li><a href="#categories" className="hover:text-white transition-colors">Our Collection</a></li>
                <li><a href="#new-arrivals" className="hover:text-white transition-colors">New Arrivals</a></li>
                <li><a href="#about" className="hover:text-white transition-colors">Our Story</a></li>
                <li><a href="#visit" className="hover:text-white transition-colors">Store Location</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold text-lg mb-6 text-white">Categories</h4>
              <ul className="space-y-4 text-white/60">
                <li><span className="hover:text-white transition-colors cursor-pointer">Western Wear</span></li>
                <li><span className="hover:text-white transition-colors cursor-pointer">Party Gowns</span></li>
                <li><span className="hover:text-white transition-colors cursor-pointer">Ethnic Fusion</span></li>
                <li><span className="hover:text-white transition-colors cursor-pointer">Designer Kurtis</span></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between text-white/40 text-sm">
            <p>&copy; {new Date().getFullYear()} SHIZLE Boutique. All rights reserved.</p>
            <p className="mt-4 md:mt-0">Designed for the women of Chaliyam.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
