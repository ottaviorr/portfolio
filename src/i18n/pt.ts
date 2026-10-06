// Textos em português (idioma padrão). Para traduzir, edite o mesmo campo em en.ts.
// Campos com HTML (about.text) aceitam <mark> (azul) e <mark class="pink">.
export const pt = {
  meta: {
    title: 'Otávio Herdy — Web designer & dev',
    description:
      'Desenho e programo sites para pequenos negócios: clínicas, construtoras e prestadores de serviço. Design, código e SEO, de Minas Gerais.',
    ogImage: '/og-pt.png',
  },
  skip: 'Pular para o conteúdo',
  nav: { work: 'Projetos', about: 'Sobre', contact: 'Contato', langLabel: 'Idioma', theme: 'Tema claro', home: '— Otávio Herdy, início' },
  cursorView: 'Ver',

  hero: {
    role: 'Web designer & dev',
    tagline: 'Faço sites que dão a pequenos negócios um design à altura do trabalho que eles fazem.',
    available: 'Disponível para projetos freelance',
    location: 'Minas Gerais, Brasil',
  },

  path: {
    label: 'Trajetória',
    steps: [
      { when: 'Primeiro,', what: 'Ciência da Computação.', note: '8º período, ainda na estrada.' },
      { when: 'Depois,', what: 'suporte e onboarding de clientes.', note: 'Aprendi onde as pessoas travam na frente de uma tela.' },
      { when: 'Hoje,', what: 'design + código.', note: 'Juntei as duas coisas: sites que funcionam pra quem usa.' },
    ],
  },

  work: {
    title: 'Projetos.',
    viewLabel: 'Visualização',
    list: 'Lista',
    grid: 'Grade',
    cols: { project: 'Projeto', role: 'Papel', year: 'Ano' },
  },

  project: {
    back: 'Todos os projetos',
    client: 'Cliente',
    role: 'Papel',
    year: 'Ano',
    visit: 'Ver o site no ar',
    challenge: 'O desafio',
    work: 'O que eu fiz',
    services: 'Serviços',
    stack: 'Stack',
    results: 'Resultados',
    next: 'Próximo projeto',
    coverAlt: 'Capa do projeto em pixels azuis e rosa',
  },

  services: {
    title: 'O que eu faço.',
    items: [
      { name: 'Sites e landing pages', text: 'Um site que explica o que você faz em cinco segundos e abre antes do cliente desistir.' },
      { name: 'UX/UI', text: 'Interface pensada pra quem vai usar, não pra ganhar prêmio. (Se ganhar, melhor.)' },
      { name: 'SEO e performance', text: 'Seu cliente procura no Google. Eu faço você aparecer, e o site abrir rápido quando ele clicar.' },
      { name: 'Automações com GoHighLevel', text: 'Formulário, agenda, WhatsApp e follow-up conversando sozinhos. Nada de copiar e colar lead.' },
    ],
  },

  about: {
    title: 'Sobre.',
    text: 'Sou o Otávio, de Minas Gerais, e estou no 8º período de Ciência da Computação. <mark>Faço sites para negócios que merecem um design melhor</mark>: clínicas, construtoras, empresas de limpeza, gente que instala piso e papel de parede. A ideia é simples: <mark class="pink">um site bonito, rápido e fácil de achar</mark>, que o dono manda pros clientes com orgulho.',
    photoAlt: 'Otávio de boné e camisa rosa, fazendo o sinal do rock com a mão',
    offTitle: 'Fora do expediente',
    off: [
      { name: 'Rock e Taylor Swift', text: 'Fone no ouvido do café ao deploy. A pulseirinha da amizade tá no pulso.' },
      { name: 'Videogame', text: 'Jogo com história boa e sem pressa. Life is Strange ainda mexe comigo.' },
      { name: 'Minas Gerais', text: 'Pão de queijo é a resposta. Qual era a pergunta?' },
    ],
  },

  toolkit: { title: 'Ferramentas.', design: 'Design', code: 'Código' },

  contact: {
    marquee: 'Bora conversar',
    title: 'Bora fazer o seu.',
    text: 'Me conta o que você precisa: o negócio, o prazo, o que te incomoda no site atual. Eu leio tudo e respondo.',
    email: 'Mande um e-mail',
  },

  footer: { line: 'Feito em Minas, com rock no fone.' },
};

export type Dict = typeof pt;
