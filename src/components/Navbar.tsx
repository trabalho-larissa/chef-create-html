import { Button } from "@/components/ui/button";

const Navbar = () => {
  return (
    <nav className="bg-primary shadow-lg fixed w-full top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <div className="text-2xl font-bold text-primary-foreground">
            Casa's Burger
          </div>
          <div className="hidden md:flex space-x-8">
            <a href="#home" className="text-primary-foreground hover:text-secondary transition-colors">
              Início
            </a>
            <a href="#menu" className="text-primary-foreground hover:text-secondary transition-colors">
              Cardápio
            </a>
            <a href="#about" className="text-primary-foreground hover:text-secondary transition-colors">
              Sobre
            </a>
            <a href="#contact" className="text-primary-foreground hover:text-secondary transition-colors">
              Contato
            </a>
          </div>
          <Button variant="secondary" className="hidden md:block">
            Fazer Pedido
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;