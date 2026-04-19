export type Language = 'pt' | 'en' | 'es';

export const translations = {
  pt: {
    nav: {
      about: "Sobre",
      products: "Produtos",
      logistics: "Logística",
      contact: "Contato",
    },
    hero: {
      tag: "Cerealista Itararé Ltda",
      title: "Conectando Grãos Brasileiros ao Mundo.",
      titleAccent: "",
      desc: "A Cerealista Itararé é sua parceira estratégica na exportação de commodities de alta qualidade. Confiabilidade, eficiência e alcance global.",
      ctaProducts: "Nossos Produtos",
      ctaContact: "Fale Conosco",
    },
    stats: {
      exp: "Anos de Experiência",
      countries: "Países Atendidos",
      tons: "Toneladas Exportadas",
      farms: "Fazendas Parceiras",
    },
    about: {
      tag: "Sobre Nós",
      title: "Cerealista Itararé: ",
      titleAccent: "Excelência no Comércio de Grãos",
      desc1: "Sediada em Curitiba, Paraná, estamos no coração da região agrícola mais produtiva do Brasil. A Cerealista Itararé Ltda foi fundada com a missão de aproximar os produtores locais do mercado internacional.",
      desc2: "Com foco na transparência e eficiência logística, cuidamos de cada etapa do processo de exportação, garantindo que as commodities brasileiras cheguem ao seu destino com a qualidade preservada.",
      reliability: "Confiabilidade",
      growth: "Crescimento de Mercado",
      growthDesc: "Expandindo presença global.",
      certified: "Qualidade Certificada",
      certifiedDesc: "Seguimos rigorosos padrões internacionais para garantir o melhor produto.",
    },
    products: {
      tag: "Nosso Portfólio",
      title: "Commodities Premium",
      desc: "Buscamos apenas os melhores grãos de produtores selecionados no Sul do Brasil, garantindo qualidade consistente para todos os nossos parceiros internacionais.",
      items: [
        {
          name: "Café",
          description: "Grãos de café selecionados das melhores regiões produtoras do Brasil, com diversos perfis de torra e aroma.",
          image: "/images/cafe.png",
        },
        {
          name: "Açúcar",
          description: "Açúcar ICUMSA 45 e VHP, diretamente das usinas brasileiras para os principais portos do mundo.",
          image: "/images/acucar.png",
        },
        {
          name: "Milho",
          description: "Milho de alta qualidade para ração animal e consumo humano, proveniente das melhores safras do Paraná.",
          image: "/images/milho.png",
        },
        {
          name: "Farelo de Soja",
          description: "Farelo de soja com alto teor proteico, ideal para nutrição animal de alta performance.",
          image: "/images/soja.png",
        },
        {
          name: "Madeira (Pellets)",
          description: "Pellets de madeira sustentáveis para aquecimento e uso industrial, com alto poder calorífico.",
          image: "/images/madeira.png",
        }
      ]
    },
    logistics: {
      tag: "Cadeia de Suprimentos",
      title: "Logística Global e Soluções de Exportação",
      items: [
        { title: "Transporte Terrestre", desc: "Transporte eficiente da fazenda ao porto." },
        { title: "Transporte Marítimo", desc: "Parcerias com as principais linhas de navegação." },
        { title: "Desembaraço Aduaneiro", desc: "Gestão especializada de toda a documentação de exportação." }
      ],
      destinations: "Destinos de Exportação",
      quote: "Solicitar Cotação de Exportação",
    },
    contact: {
      tag: "Contato",
      title: "Vamos Crescer Juntos",
      desc: "Tem dúvidas sobre nossos produtos ou capacidades de exportação? Nossa equipe está pronta para atendê-lo em Português, Inglês ou Espanhol.",
      email: "E-mail",
      phone: "Telefone / WhatsApp",
      address: "Nossa Sede",
      form: {
        title: "Enviar Mensagem",
        name: "Nome Completo",
        company: "Empresa",
        email: "Endereço de E-mail",
        message: "Mensagem",
        placeholder: "Conte-nos sobre suas necessidades...",
        btn: "Enviar Solicitação",
      }
    },
    footer: {
      desc: "Parceiro estratégico para exportação de commodities agrícolas brasileiras. Conectando produção de qualidade às demandas globais.",
      links: "Links Rápidos",
      legal: "Jurídico",
      rights: "Todos os direitos reservados.",
    }
  },
  en: {
    nav: {
      about: "About",
      products: "Products",
      logistics: "Logistics",
      contact: "Contact",
    },
    hero: {
      tag: "Global Commodity Trading",
      title: "Connecting Brazilian Grains to the World.",
      titleAccent: "",
      desc: "Cerealista Itararé is your strategic partner in exporting high-quality commodities. Reliability, efficiency, and global reach.",
      ctaProducts: "Our Products",
      ctaContact: "Contact Us",
    },
    stats: {
      exp: "Years of Experience",
      countries: "Countries Served",
      tons: "Tons Exported",
      farms: "Partner Farms",
    },
    about: {
      tag: "About Us",
      title: "Cerealista Itararé: ",
      titleAccent: "Excellence in Grain Trading",
      desc1: "Based in Curitiba, Paraná, we are in the heart of Brazil's most productive agricultural region. Cerealista Itararé Ltda was founded with the mission to bring local producers closer to the international market.",
      desc2: "With a focus on transparency and logistical efficiency, we take care of every step of the export process, ensuring that Brazilian commodities reach their destination with preserved quality.",
      reliability: "Reliability",
      growth: "Market Growth",
      growthDesc: "Expanding global presence.",
      certified: "Certified Quality",
      certifiedDesc: "We follow strict international standards to ensure the best product.",
    },
    products: {
      tag: "Our Portfolio",
      title: "Premium Commodities",
      desc: "We source only the best grains from selected producers in Southern Brazil, ensuring consistent quality for all our international partners.",
      items: [
        {
          name: "Coffee",
          description: "Selected coffee beans from Brazil's best producing regions, with various roast and aroma profiles.",
          image: "/images/cafe.png",
        },
        {
          name: "Sugar",
          description: "ICUMSA 45 and VHP sugar, directly from Brazilian mills to the world's main ports.",
          image: "/images/acucar.png",
        },
        {
          name: "Corn",
          description: "High-quality corn for animal feed and human consumption, from Paraná's best harvests.",
          image: "/images/milho.png",
        },
        {
          name: "Soybean Meal",
          description: "High-protein soybean meal, ideal for high-performance animal nutrition.",
          image: "/images/soja.png",
        },
        {
          name: "Wood (Pellets)",
          description: "Sustainable wood pellets for heating and industrial use, with high calorific value.",
          image: "/images/madeira.png",
        }
      ]
    },
    logistics: {
      tag: "Supply Chain",
      title: "Global Logistics and Export Solutions",
      items: [
        { title: "Inland Transport", desc: "Efficient transport from farm to port." },
        { title: "Ocean Freight", desc: "Partnerships with major shipping lines." },
        { title: "Customs Clearance", desc: "Expert management of all export documentation." }
      ],
      destinations: "Export Destinations",
      quote: "Request Export Quote",
    },
    contact: {
      tag: "Contact",
      title: "Let's Grow Together",
      desc: "Have questions about our products or export capabilities? Our team is ready to assist you in Portuguese, English, or Spanish.",
      email: "Email",
      phone: "Phone / WhatsApp",
      address: "Our Headquarters",
      form: {
        title: "Send Message",
        name: "Full Name",
        company: "Company",
        email: "Email Address",
        message: "Message",
        placeholder: "Tell us about your needs...",
        btn: "Send Request",
      }
    },
    footer: {
      desc: "Strategic partner for exporting Brazilian agricultural commodities. Connecting quality production to global demands.",
      links: "Quick Links",
      legal: "Legal",
      rights: "All rights reserved.",
    }
  },
  es: {
    nav: {
      about: "Sobre",
      products: "Productos",
      logistics: "Logística",
      contact: "Contacto",
    },
    hero: {
      tag: "Comercio Global de Commodities",
      title: "Conectando Granos Brasileños al Mundo.",
      titleAccent: "",
      desc: "Cerealista Itararé es su socio estratégico en la exportación de commodities de alta calidad. Confiabilidad, eficiencia y alcance global.",
      ctaProducts: "Nuestros Productos",
      ctaContact: "Contáctenos",
    },
    stats: {
      exp: "Años de Experiencia",
      countries: "Países Atendidos",
      tons: "Toneladas Exportadas",
      farms: "Granjas Asociadas",
    },
    about: {
      tag: "Sobre Nosotros",
      title: "Cerealista Itararé: ",
      titleAccent: "Excelencia en el Comercio de Granos",
      desc1: "Con sede en Curitiba, Paraná, estamos en el corazón de la región agrícola más productiva de Brasil. Cerealista Itararé Ltda fue fundada con la misión de acercar a los productores locales al mercado internacional.",
      desc2: "Con un enfoque en la transparencia y la eficiencia logística, nos encargamos de cada etapa del proceso de exportación, garantizando que los productos brasileños lleguen a su destino con la calidad preservada.",
      reliability: "Confiabilidad",
      growth: "Crecimiento del Mercado",
      growthDesc: "Expandiendo la presencia global.",
      certified: "Calidad Certificada",
      certifiedDesc: "Seguimos estrictos estándares internacionales para garantizar el mejor producto.",
    },
    products: {
      tag: "Nuestro Portafolio",
      title: "Commodities Premium",
      desc: "Buscamos solo los mejores granos de productores seleccionados en el sur de Brasil, garantizando una calidad constante para todos nos socios internacionales.",
      items: [
        {
          name: "Café",
          description: "Granos de café seleccionados de las mejores regiones productoras de Brasil, con diversos perfiles de tueste y aroma.",
          image: "/images/cafe.png",
        },
        {
          name: "Azúcar",
          description: "Azúcar ICUMSA 45 e VHP, directamente de los ingenios brasileños a los principais puertos del mundo.",
          image: "/images/acucar.png",
        },
        {
          name: "Maíz",
          description: "Maíz de alta qualidade para alimentación animal e consumo humano, proveniente de las mejores cosechas de Paraná.",
          image: "/images/milho.png",
        },
        {
          name: "Harina de Soja",
          description: "Harina de soja con alto contenido proteico, ideal para la nutrición animal de alto rendimiento.",
          image: "/images/soja.png",
        },
        {
          name: "Madera (Pellets)",
          description: "Pellets de madera sostenibles para calefacción y uso industrial, con alto poder calorífico.",
          image: "/images/madeira.png",
        }
      ]
    },
    logistics: {
      tag: "Cadena de Suministro",
      title: "Logística Global y Soluciones de Exportación",
      items: [
        { title: "Transporte Terrestre", desc: "Transporte eficiente desde la granja al puerto." },
        { title: "Transporte Marítimo", desc: "Alianzas con las principales líneas navieras." },
        { title: "Despacho de Aduanas", desc: "Gestión experta de toda la documentación de exportación." }
      ],
      destinations: "Destinos de Exportación",
      quote: "Solicitar Cotización de Exportación",
    },
    contact: {
      tag: "Contacto",
      title: "Crezcamos Juntos",
      desc: "¿Tiene preguntas sobre nuestros productos o capacidades de exportación? Nuestro equipo está listo para atenderlo en portugués, inglés o español.",
      email: "Correo electrónico",
      phone: "Teléfono / WhatsApp",
      address: "Nuestra Sede",
      form: {
        title: "Enviar Mensaje",
        name: "Nombre Completo",
        company: "Empresa",
        email: "Correo Electrónico",
        message: "Mensaje",
        placeholder: "Cuéntenos sobre sus necesidades...",
        btn: "Enviar Solicitação",
      }
    },
    footer: {
      desc: "Socio estratégico para la exportación de commodities agrícolas brasileños. Conectando la producción de calidad con las demandas globales.",
      links: "Enlaces Rápidos",
      legal: "Legal",
      rights: "Todos os direitos reservados.",
    }
  }
};
