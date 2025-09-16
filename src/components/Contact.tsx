import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
const Contact = () => {
  return <section id="contact" className="py-20 bg-primary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
            Contato & Localização
          </h2>
          <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto">
            Venha nos visitar ou faça seu pedido para entrega
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <Card className="bg-primary-foreground">
            <CardContent className="p-6 text-center">
              <div className="text-3xl mb-4">📍</div>
              <h3 className="text-xl font-bold mb-2">Endereço</h3>
              <p className="text-muted-foreground">
                Av. Aguanambi, 251 - José Bonifacio<br />
                Fortaleza - CE<br />
                60055-400
              </p>
            </CardContent>
          </Card>
          
          <Card className="bg-primary-foreground">
            <CardContent className="p-6 text-center">
              <div className="text-3xl mb-4">📱</div>
              <h3 className="text-xl font-bold mb-2">Telefone</h3>
              <p className="text-muted-foreground mb-2">(85) 98886-5813</p>
              <p className="text-muted-foreground">
                WhatsApp disponível!
              </p>
            </CardContent>
          </Card>
          
          <Card className="bg-primary-foreground">
            <CardContent className="p-6 text-center">
              <div className="text-3xl mb-4">🕒</div>
              <h3 className="text-xl font-bold mb-2">Horário</h3>
              <p className="text-muted-foreground">
                Segunda a Domingo<br />
                18h às 23h30<br />
                Sem fechar!
              </p>
            </CardContent>
          </Card>
        </div>
        
        <div className="text-center mt-12">
          <Button variant="secondary" size="lg" className="mr-4">
            Fazer Pedido WhatsApp
          </Button>
          <Button variant="outline" size="lg" className="bg-primary-foreground/10 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
            Ver no Mapa
          </Button>
        </div>
      </div>
    </section>;
};
export default Contact;