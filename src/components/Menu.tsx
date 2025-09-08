import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import classicBurger from "@/assets/classic-burger.jpg";
import fries from "@/assets/fries.jpg";
import nuggets from "@/assets/nuggets.jpg";
import milkshake from "@/assets/milkshake.jpg";

const Menu = () => {
  const menuItems = [
    {
      id: 1,
      name: "Burger Clássico",
      description: "Hambúrguer de carne bovina, queijo cheddar, alface, tomate e molho especial",
      price: "R$ 18,90",
      image: classicBurger
    },
    {
      id: 2,
      name: "Batata Frita",
      description: "Batatas douradas e crocantes, temperadas com sal especial",
      price: "R$ 12,90",
      image: fries
    },
    {
      id: 3,
      name: "Chicken Nuggets",
      description: "Nuggets de frango empanados com molho barbecue",
      price: "R$ 15,90",
      image: nuggets
    },
    {
      id: 4,
      name: "Burger Duplo",
      description: "Dois hambúrgueres, queijo duplo, bacon crocante e molho especial",
      price: "R$ 25,90",
      image: classicBurger
    },
    {
      id: 5,
      name: "Combo Família",
      description: "2 hambúrgueres + 2 batatas + 2 refrigerantes",
      price: "R$ 49,90",
      image: fries
    },
    {
      id: 6,
      name: "Milkshake",
      description: "Milkshake cremoso de chocolate, baunilha ou morango",
      price: "R$ 14,90",
      image: milkshake
    }
  ];

  return (
    <section id="menu" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Nosso Cardápio
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Produtos frescos e saborosos preparados com muito carinho para você
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {menuItems.map((item) => (
            <Card key={item.id} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="aspect-square overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.name}
                  className="w-full h-full object-cover hover:scale-105 transition-transform"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">{item.name}</h3>
                <p className="text-muted-foreground mb-4">{item.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-primary">{item.price}</span>
                  <Button variant="outline" className="hover:bg-primary hover:text-primary-foreground">
                    Adicionar
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Menu;