import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next);

const savedLenguage = localStorage.getItem('lenguage') ? localStorage.getItem('lenguage') : 'pt';

i18n.use(initReactI18next).init({
  lng: savedLenguage,
  fallbackLng: "pt",
  interpolation: {
    escapeValue: false,
  },
  resources: {
    en: {
        translation: {
          solucoes: 'Solution',
          precos: 'Price',
          academy: 'Academy',
          blog: 'Blog',
          contato: 'Contact',
          entrar: 'Login',
          comecar: 'Start now',
          plataforma: 'Plataform all in one',
          principal: 'Your powerful and profitable online school',
          subTexto: 'Have your own 100% white label online school with a social network, gamification, subscription club, ecommerce and complete distance learning system.',
          video: 'Watch video',
          textoRoxo1: 'We think in every detail',
          textolateral: 'Discover some of our resources ⚡️',
          secundarioPrincipal: 'We want the student to feel comfortable while learning',
          textoFooter: 'See all other resources available to help you',
          verMais: 'See more',
        }
    },
    es: {
        translation: {
          solucoes: 'solución',
          precos: 'precios',
          academy: 'Academy',
          blog: 'Blog',
          contato: 'Contacto',
          entrar: 'entrar',
          comecar: 'empezar ahora',
          plataforma: 'Plataforma all in one',
          principal: 'Tu escuela online potente y rentable',
          subTexto: 'Ten tu propia escuela online 100% marca blanca con red social, gamificación, club de suscripción, ecommerce y completo sistema de enseñanza a distancia.',
          video: 'Ver video',
          textoRoxo1: 'pensamos en cada detalle',
          textolateral: 'Descubre algunos de nuestros recursos ⚡️',
          secundarioPrincipal: 'Queremos que el alumno se sienta cómodo mientras aprende',
          textoFooter: 'Vea todos los otros recursos disponibles para ayudarlo',
          verMais: 'Ver mais',
        }
    },
    pt: {
        translation: {
            solucoes: 'Soluções',
            precos: 'Preços',
            academy: 'Academy',
            blog: 'Blog',
            contato: 'Contato',
            entrar: 'Entrar',
            comecar: 'Começar agora',
            plataforma: 'plataforma all in one',
            principal: 'Sua escola online poderosa e lucrativa',
            subTexto: 'Tenha sua própria escola online 100% white label com rede social, gamificação, clube de assinaturas, ecommerce e sistema EAD completo.',
            video: 'Ver vídeo',
            textoRoxo1: 'pensamos em cada detalhe',
            textolateral: 'Conheça alguns dos nossos recursos  ⚡️',
            secundarioPrincipal: 'Queremos que o aluno se sinta confortável enquanto aprende',
            textoFooter: 'Veja todos os outros recursos disponíveis para te ajudar ',
            verMais: 'Ver mais',
        }
    },
  },
});

export default i18n;