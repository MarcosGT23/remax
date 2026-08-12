'use strict';

module.exports = {
  register(/*{ strapi }*/) {},

  async bootstrap({ strapi }) {
    try {
      // 1. Seed default Agentes in Strapi CMS if empty
      const agenteService = strapi.documents ? strapi.documents('api::agente.agente') : null;
      if (agenteService) {
        const existingAgentes = await agenteService.findMany({});
        if (!existingAgentes || existingAgentes.length === 0) {
          const defaultAgentes = [
            {
              name: "Carlos Mendoza",
              slug: "carlos-mendoza",
              specialty: "Casas & Condominios de Lujo",
              role: "Agente Senior RE/MAX - Especialista en Casas & Condominios",
              phone: "+591 712 34567",
              email: "carlos.mendoza@remax.bo",
              propertiesCount: 18,
              city: "Santa Cruz",
              zone: "Equipetrol Norte / Urubó",
              experience: "8+ años de experiencia",
              bio: "Con más de 8 años en el mercado inmobiliario de Santa Cruz, Carlos se ha posicionado como líder en la comercialización de viviendas residenciales de alto valor, condominios cerrados y penthouses exclusivos en Equipetrol y Urubó.",
              isFeatured: true,
              initials: "CM",
              instagram: "https://instagram.com/remax.bolivia",
              facebook: "https://facebook.com/remaxbolivia",
              publishedAt: new Date()
            },
            {
              name: "María Fernanda Claros",
              slug: "maria-fernanda-claros",
              specialty: "Departamentos & Alquileres Ejecutivos",
              role: "Especialista en Departamentos y Alquileres",
              phone: "+591 765 43210",
              email: "maria.claros@remax.bo",
              propertiesCount: 24,
              city: "La Paz",
              zone: "Calacoto / Sopocachi",
              experience: "6+ años de experiencia",
              bio: "María Fernanda destaca por su atención personalizada para inversionistas y diplomáticos en la Zona Sur de La Paz, facilitando alquileres de alta gama y departamentos residenciales de primera categoría.",
              isFeatured: false,
              initials: "MF",
              instagram: "https://instagram.com/remax.bolivia",
              facebook: "https://facebook.com/remaxbolivia",
              publishedAt: new Date()
            },
            {
              name: "Roberto Gutierrez",
              slug: "roberto-gutierrez",
              specialty: "Anticréticos & Terrenos de Inversión",
              role: "Asesor Comercial de Anticréticos y Terrenos",
              phone: "+591 789 01234",
              email: "roberto.gutierrez@remax.bo",
              propertiesCount: 15,
              city: "Cochabamba",
              zone: "Sarco / Zona Norte",
              experience: "10+ años de experiencia",
              bio: "Roberto cuenta con amplia trayectoria en asesoría legal inmobiliaria, negociaciones de anticréticos y comercialización de terrenos con alta plusvalía en Cochabamba.",
              isFeatured: false,
              initials: "RG",
              instagram: "https://instagram.com/remax.bolivia",
              facebook: "https://facebook.com/remaxbolivia",
              publishedAt: new Date()
            },
            {
              name: "Andrea Siles",
              slug: "andrea-siles",
              specialty: "Inmuebles Comerciales & Locales",
              role: "Consultora Inmobiliaria de Inmuebles Comerciales",
              phone: "+591 700 98765",
              email: "andrea.siles@remax.bo",
              propertiesCount: 12,
              city: "Santa Cruz",
              zone: "Centro / Sirari",
              experience: "5+ años de experiencia",
              bio: "Especialista en la intermediación de espacios corporativos, oficinas comerciales y terrenos industriales estratégicos en Santa Cruz.",
              isFeatured: false,
              initials: "AS",
              instagram: "https://instagram.com/remax.bolivia",
              facebook: "https://facebook.com/remaxbolivia",
              publishedAt: new Date()
            },
            {
              name: "Gabriel Morales",
              slug: "gabriel-morales",
              specialty: "Asesoría Financiera & Proyectos VIP",
              role: "Asesor Financiero e Inmobiliario VIP",
              phone: "+591 733 11223",
              email: "gabriel.morales@remax.bo",
              propertiesCount: 21,
              city: "La Paz",
              zone: "Achumani / San Miguel",
              experience: "7+ años de experiencia",
              bio: "Gabriel integra análisis financiero de inversión con gestión inmobiliaria para asegurar retornos óptimos en compraventas de departamentos y proyectos verticales en La Paz.",
              isFeatured: true,
              initials: "GM",
              instagram: "https://instagram.com/remax.bolivia",
              facebook: "https://facebook.com/remaxbolivia",
              publishedAt: new Date()
            },
            {
              name: "Valeria Roca",
              slug: "valeria-roca",
              specialty: "Ventas Residencia & Desarrollo de Proyectos",
              role: "Agente Certificada en Ventas y Proyectos",
              phone: "+591 722 44556",
              email: "valeria.roca@remax.bo",
              propertiesCount: 19,
              city: "Cochabamba",
              zone: "Queru Queru / América",
              experience: "4+ años de experiencia",
              bio: "Valeria lidera la comercialización de emprendimientos inmobiliarios modernos y viviendas familiares en Cochabamba con asesoramiento transparente en cada etapa.",
              isFeatured: false,
              initials: "VR",
              instagram: "https://instagram.com/remax.bolivia",
              facebook: "https://facebook.com/remaxbolivia",
              publishedAt: new Date()
            }
          ];

          for (const item of defaultAgentes) {
            await agenteService.create({
              data: item,
              status: 'published'
            });
          }
          console.log('✅ Agentes sembrados automáticamente en Strapi CMS (WhatsApp generado dinámicamente vía teléfono).');
        }
      }

      // 2. Seed default Noticias in Strapi CMS if empty
      const noticiaService = strapi.documents ? strapi.documents('api::noticia.noticia') : null;
      if (noticiaService) {
        const existingNoticias = await noticiaService.findMany({});
        if (!existingNoticias || existingNoticias.length === 0) {
          const defaultNoticias = [
            {
              title: "5 Consejos Clave para Vender tu Propiedad al Mejor Precio en Bolivia",
              slug: "5-consejos-clave-para-vender-tu-propiedad-al-mejor-precio-en-bolivia",
              category: "Consejos de Venta",
              date: "2026-08-08",
              readTime: "5 min de lectura",
              author: "Carlos Mendoza",
              introduction: "Descubre cómo la preparación visual, la fijación estratégica de precio y la difusión profesional aceleran la venta de tu casa o departamento.",
              content: "<h4>1. Preparación Visual (Home Staging)</h4><p>La primera impresión es decisiva. Limpia, despersonaliza y repara los pequeños detalles visibles de tu casa o departamento.</p>",
              publishedAt: new Date()
            },
            {
              title: "¿Qué es un Anticrético y Cómo Proteger tu Inversión Legalmente?",
              slug: "que-es-un-anticretico-y-como-proteger-tu-inversion-legalmente",
              category: "Guía Legal",
              date: "2026-08-01",
              readTime: "7 min de lectura",
              author: "María Fernanda Claros",
              introduction: "Guía completa sobre la modalidad de anticrético en Bolivia: inscripción en Derechos Reales, minuta de contrato y precauciones clave.",
              content: "<h4>¿Cómo funciona legalmente el Anticrético?</h4><p>En el anticrético, el propietario entrega el uso de un inmueble y el anticresista entrega un capital.</p>",
              publishedAt: new Date()
            },
            {
              title: "Tendencias del Mercado Inmobiliario en Santa Cruz, La Paz y Cochabamba",
              slug: "tendencias-del-mercado-inmobiliario-en-santa-cruz-la-paz-y-cochabamba",
              category: "Mercado Inmobiliario",
              date: "2026-07-25",
              readTime: "6 min de lectura",
              author: "Roberto Gutierrez",
              introduction: "Análisis de demanda en zonas residenciales y comerciales. Conoce cuáles son los distritos con mayor plusvalía proyectada.",
              content: "<h4>Santa Cruz de la Sierra: Expansión y Plusvalía</h4><p>Santa Cruz sigue liderando el desarrollo inmobiliario con proyectos verticales de gran envergadura.</p>",
              publishedAt: new Date()
            },
            {
              title: "Comprar vs. Alquilar: ¿Cuál es la Mejor Decisión Inmobiliaria para Ti?",
              slug: "comprar-vs-alquilar-cual-es-la-mejor-decision-inmobiliaria-para-ti",
              category: "Finanzas Inmobiliarias",
              date: "2026-07-18",
              readTime: "4 min de lectura",
              author: "Andrea Siles",
              introduction: "Comparamos los aspectos financieros, flexibilidad y proyección patrimonial para ayudarte a tomar la mejor decisión según tu etapa de vida.",
              content: "<h4>Ventajas de Comprar tu Propio Inmueble</h4><p>Comprar te permite construir un patrimonio real a largo plazo.</p>",
              publishedAt: new Date()
            }
          ];

          for (const item of defaultNoticias) {
            await noticiaService.create({
              data: item,
              status: 'published'
            });
          }
          console.log('✅ Noticias sembradas automáticamente en Strapi CMS con sus categorías.');
        }
      }

      // 3. Seed default Propiedades in Strapi CMS if empty
      const propiedadService = strapi.documents ? strapi.documents('api::propiedad.propiedad') : null;
      if (propiedadService) {
        const existingPropiedades = await propiedadService.findMany({});
        if (!existingPropiedades || existingPropiedades.length === 0) {
          const defaultPropiedades = [
            {
              title: "Alquiler de Local Comercial en Villa 1ro de Mayo",
              slug: "alquiler-local-comercial-santa-cruz-villa-1ro-de-mayo-1200986298-28",
              shortId: "1200986298-28",
              type: "Local Comercial / Oficina",
              category: "Comercial",
              price: "1,200",
              rawPrice: 1200,
              currency: "USD",
              priceBs: "8,352",
              period: "/ mes",
              address: "Av. Principal Villa 1ro de Mayo entre 2do y 3er Anillo, Santa Cruz de la Sierra",
              city: "Santa Cruz",
              zone: "Villa 1ro de Mayo",
              bedrooms: 0,
              bathrooms: 2,
              garages: 2,
              totalArea: "324 m²",
              builtArea: "180 m²",
              features: ["324 m²", "180 m²", "0", "2"],
              badgeTitle: "Alquiler",
              badgeClass: "badge-rent",
              status: "Disponible",
              yearBuilt: 2021,
              latitude: -17.804,
              longitude: -63.150,
              amenities: [
                "Frente a Avenida Principal",
                "Alto Tráfico Peatonal y Vehicular",
                "2 Baños Privados",
                "Conexión a Gas Industrial",
                "Aire Acondicionado Central",
                "Sistema de Alarma y Cámaras",
                "Estacionamiento de Clientes",
                "Persianas Metálicas de Seguridad",
                "Piso de Cerámica de Alta Resistencia",
                "Transformador Trifásico"
              ],
              description: `Excelente oportunidad comercial en una de las zonas de mayor desarrollo y movimiento económico de Santa Cruz de la Sierra: Villa 1ro de Mayo.

Este local comercial cuenta con una superficie total de 324 m² y 180 m² construidos con acabados de primera calidad, ideales para agencias bancarias, farmacias, showrooms, supermercados o franquicias corporativas.`,
              publishedAt: new Date()
            },
            {
              title: "Casa Familiar con Amplio Terreno en Plan 3000",
              slug: "prop-1",
              shortId: "1200986298-01",
              type: "Casa Residencial",
              category: "Residencial",
              price: "70,000",
              rawPrice: 70000,
              currency: "USD",
              priceBs: "487,200",
              period: "",
              address: "Barrio 30 de Agosto Calle 3, Plan 3000, Santa Cruz de la Sierra",
              city: "Santa Cruz",
              zone: "Plan 3000",
              bedrooms: 2,
              bathrooms: 1,
              garages: 2,
              totalArea: "324 m²",
              builtArea: "80 m²",
              features: ["80 m²", "324 m²", "2", "1"],
              badgeTitle: "Venta",
              badgeClass: "badge-sale",
              status: "Disponible",
              yearBuilt: 2019,
              latitude: -17.822,
              longitude: -63.136,
              amenities: [
                "Amplio Jardín Posterior",
                "Garaje para 2 Vehículos",
                "Gas Domiciliario Instalado",
                "Alcantarillado Sanitario",
                "Barda Perimetral Completa"
              ],
              description: "Hermosa casa residencial en el Plan 3000, construida sobre un terreno de 324 m² con un gran potencial de ampliación.",
              publishedAt: new Date()
            },
            {
              title: "Residencia Minimalista de Lujo en Equipetrol",
              slug: "prop-3",
              shortId: "1200986298-03",
              type: "Casa Minimalista con Piscina",
              category: "Residencial",
              price: "285,000",
              rawPrice: 285000,
              currency: "USD",
              priceBs: "1,983,600",
              period: "",
              address: "Calle Los Espinos, Equipetrol Norte, Santa Cruz de la Sierra",
              city: "Santa Cruz",
              zone: "Equipetrol",
              bedrooms: 4,
              bathrooms: 4,
              garages: 3,
              totalArea: "450 m²",
              builtArea: "340 m²",
              features: ["340 m²", "450 m²", "4", "4"],
              badgeTitle: "Venta",
              badgeClass: "badge-sale",
              status: "Disponible",
              yearBuilt: 2023,
              latitude: -17.768,
              longitude: -63.195,
              amenities: [
                "Piscina Temperada Privada",
                "Churrasquera de Acero Inoxidable",
                "Suite Principal con Jacuzzi y Vestidor",
                "Domótica y Luces Automatizadas",
                "Garaje Subterráneo para 3 Vehículos"
              ],
              description: "Impresionante residencia minimalista ubicada en el exclusivo barrio de Equipetrol Norte con acabados importados de alta gama.",
              publishedAt: new Date()
            }
          ];

          for (const item of defaultPropiedades) {
            await propiedadService.create({
              data: item,
              status: 'published'
            });
          }
          console.log('✅ Propiedades sembradas automáticamente en Strapi CMS con todas sus amenidades e IDs de detalle.');
        }
      }
    } catch (err) {
      console.warn('Bootstrap seed info:', err.message);
    }
  },
};
