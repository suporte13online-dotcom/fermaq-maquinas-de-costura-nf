import { Phone, MapPin, Wrench, ShoppingBag, Settings, Star, Instagram, MessageCircle, ChevronRight } from "lucide-react";
import mascotImg from "@/assets/mascot.jpeg";
import storeImg from "@/assets/store-front.jpg";
import machineImg from "@/assets/machine-jack.jpeg";

const WHATSAPP_LINK = "https://wa.me/5522998582793";
const INSTAGRAM_LINK = "https://www.instagram.com/fermaqcostura";
const MAPS_LINK = "https://www.google.com/maps/search/R.+Thurler,+22+-+Conselheiro+Paulino,+Nova+Friburgo+-+RJ,+28633-360";

const services = [
  {
    icon: ShoppingBag,
    title: "Compra e Venda de Máquinas",
    description: "Máquinas de costura industriais e domésticas das melhores marcas do mercado.",
  },
  {
    icon: Settings,
    title: "Peças e Acessórios",
    description: "Amplo estoque de peças originais e acessórios para todas as marcas.",
  },
  {
    icon: Wrench,
    title: "Manutenção e Reparo",
    description: "Serviço técnico especializado para manter sua máquina funcionando perfeitamente.",
  },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background font-body">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-border/50 bg-background/90 backdrop-blur-md">
        <div className="container mx-auto flex items-center justify-between px-4 py-3">
          <div className="flex items-center gap-2">
            <span className="font-heading text-2xl font-black tracking-tight">
              <span className="text-foreground">FER</span>
              <span className="text-gradient">MAQ</span>
            </span>
          </div>
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-full bg-green-600 px-4 py-2 text-sm font-semibold text-foreground transition-transform hover:scale-105"
          >
            <MessageCircle className="h-4 w-4" />
            <span className="hidden sm:inline">WhatsApp</span>
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="hero-gradient relative overflow-hidden">
        <div className="container mx-auto grid items-center gap-8 px-4 py-16 md:grid-cols-2 md:py-24">
          <div className="space-y-6">
            <h1 className="font-heading text-4xl font-black leading-tight md:text-5xl lg:text-6xl">
            Máquinas de Costura
              <span className="text-gradient block">Peças e Manutenção</span>
            </h1>
            <p className="max-w-lg text-lg text-muted-foreground">
              Venda, compra e manutenção de máquinas de costura industriais e domésticas. Qualidade, confiança e atendimento personalizado.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-green-600 px-6 py-3 font-heading font-bold text-foreground transition-all hover:scale-105 hover:shadow-lg"
              >
                <MessageCircle className="h-5 w-5" />
                Fale Conosco
              </a>
              <a
                href="#servicos"
                className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 font-heading font-semibold text-foreground transition-colors hover:bg-muted"
              >
                Nossos Serviços
                <ChevronRight className="h-4 w-4" />
              </a>
            </div>
          </div>
          <div className="flex flex-col items-center gap-4">
            <span className="font-heading text-6xl font-black text-primary md:text-7xl lg:text-8xl">FERMAQ</span>
            <img
              src={mascotImg}
              alt="Mascote FERMAQ"
              className="w-72 drop-shadow-2xl md:w-96"
            />
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="servicos" className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-center font-heading text-3xl font-bold md:text-4xl">
            Nossos <span className="text-gradient">Serviços</span>
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <div
                key={service.title}
                className="card-hover rounded-xl border border-border bg-card p-6"
              >
                <div className="mb-4 inline-flex rounded-lg bg-primary/10 p-3">
                  <service.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mb-2 font-heading text-xl font-bold">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About / Store */}
      <section className="hero-gradient py-16 md:py-24">
        <div className="container mx-auto grid items-center gap-8 px-4 md:grid-cols-2">
          <div className="overflow-hidden rounded-xl">
            <img src={storeImg} alt="Loja FERMAQ" className="w-full object-cover" />
          </div>
          <div className="space-y-4">
            <h2 className="font-heading text-3xl font-bold md:text-4xl">
              Conheça Nossa <span className="text-gradient">Loja</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Nossa equipe de profissionais experientes está pronta para ajudar você a escolher a máquina ideal para suas necessidades, além de fornecer peças e acessórios de alta qualidade.
            </p>
            <div className="flex items-center gap-1 text-primary">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-5 w-5 fill-primary" />
              ))}
              <span className="ml-2 text-sm text-muted-foreground">Atendimento 5 estrelas</span>
            </div>
          </div>
        </div>
      </section>

      {/* Products highlight */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto max-w-2xl px-4 text-center">
          <h2 className="font-heading text-3xl font-bold md:text-4xl">
            Máquinas das <span className="text-gradient">Melhores Marcas</span>
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Trabalhamos com as principais marcas do mercado, como Jack, Singer, Brother e muito mais. Máquinas industriais e domésticas com garantia e suporte técnico.
          </p>
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 font-heading font-bold text-primary-foreground transition-all hover:scale-105"
          >
            <MessageCircle className="h-5 w-5" />
            Solicite um Orçamento
          </a>
        </div>
      </section>

      {/* Contact / Footer */}
      <footer className="hero-gradient border-t border-border py-12">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 md:grid-cols-3">
            <div>
              <h3 className="mb-4 font-heading text-2xl font-black">
                <span className="text-foreground">FER</span>
                <span className="text-gradient">MAQ</span>
              </h3>
              <p className="text-sm text-muted-foreground">
                Máquinas de Costura - Peças e Manutenção
              </p>
            </div>
            <div className="space-y-3">
              <h4 className="font-heading font-bold">Contato</h4>
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-muted-foreground transition-colors hover:text-primary"
              >
                <Phone className="h-4 w-4" />
                (22) 99858-2793
              </a>
              <a
                href={INSTAGRAM_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-muted-foreground transition-colors hover:text-primary"
              >
                <Instagram className="h-4 w-4" />
                @fermaqcostura
              </a>
            </div>
            <div className="space-y-3">
              <h4 className="font-heading font-bold">Endereço</h4>
              <a
                href={MAPS_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-2 text-muted-foreground transition-colors hover:text-primary"
              >
                <MapPin className="mt-0.5 h-4 w-4 shrink-0" />
                R. Thurler, 22 - Conselheiro Paulino, Nova Friburgo - RJ, 28633-360
              </a>
            </div>
          </div>
          <div className="mt-8 border-t border-border pt-6 text-center text-sm text-muted-foreground">
            © {new Date().getFullYear()} FERMAQ - Todos os direitos reservados.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
