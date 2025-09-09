const About = () => {
  return <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Sobre a Casa's Burger</h2>
            <p className="text-lg text-muted-foreground mb-6">
              Servimos os melhores hambúrgueres da cidade. Nosso objetivo é criar 
              experiências únicas com ingredientes frescos e de qualidade.
            </p>
            <p className="text-lg text-muted-foreground mb-6">
              Cada hambúrguer é preparado na hora, com carnes selecionadas, 
              pães artesanais e molhos especiais da casa. Venha conhecer 
              nosso ambiente aconchegante!
            </p>
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">10+</div>
                <div className="text-muted-foreground">Anos de experiência</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">50k+</div>
                <div className="text-muted-foreground">Clientes satisfeitos</div>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="bg-primary/10 p-6 rounded-lg">
                <h3 className="font-bold text-lg mb-2">Ingredientes Frescos</h3>
                <p className="text-muted-foreground text-sm">
                  Selecionamos apenas os melhores ingredientes
                </p>
              </div>
              <div className="bg-secondary/10 p-6 rounded-lg">
                <h3 className="font-bold text-lg mb-2">Entrega Rápida</h3>
                <p className="text-muted-foreground text-sm">
                  Seu pedido pronto em até 30 minutos
                </p>
              </div>
            </div>
            <div className="space-y-4 mt-8">
              <div className="bg-accent/10 p-6 rounded-lg">
                <h3 className="font-bold text-lg mb-2">Qualidade Premium</h3>
                <p className="text-muted-foreground text-sm">
                  Hambúrgueres artesanais feitos com carinho
                </p>
              </div>
              <div className="bg-muted p-6 rounded-lg">
                <h3 className="font-bold text-lg mb-2">Preço Justo</h3>
                <p className="text-muted-foreground text-sm">
                  Qualidade excepcional por um preço acessível
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default About;