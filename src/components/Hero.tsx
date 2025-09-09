import { Button } from "@/components/ui/button";
import heroBurger from "@/assets/hero-burger.jpg";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBurger})` }}
      />
      <div className="absolute inset-0 bg-black/50" />
      
      <div className="relative z-10 text-center px-4 max-w-4xl">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
          Casa's Burger: 
          <span className="text-secondary block">Onde Cada mordida</span>
          é um lar
        </h1>
        <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto">
          Ingredientes frescos, sabor incrível e entrega rápida. 
          Experimente nossos hambúrgueres artesanais!
        </p>
        <div className="space-x-4">
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
            Ver Cardápio
          </Button>
          <Button variant="outline" size="lg" className="bg-white/10 border-white text-white hover:bg-white hover:text-primary">
            Fazer Pedido
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;