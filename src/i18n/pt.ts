// Textos em português (idioma padrão). Para traduzir, edite o mesmo campo em en.ts.
// Campos com HTML (about.text) aceitam <mark> (azul) e <mark class="pink">.
export const pt = {
  meta: {
    title: 'Otávio Herdy — Web designer & dev',
    description:
      'Desenho e programo sites que valorizam pequenos negócios: design, código e SEO, feitos com pesquisa e cuidado em cada detalhe.',
    ogImage: '/og-pt.png',
  },
  skip: 'Pular para o conteúdo',
  newTab: 'abre em nova aba',
  nav: { work: 'Projetos', about: 'Sobre', contact: 'Contato', langLabel: 'Idioma', theme: 'Tema claro', home: '— Otávio Herdy, início' },
  cursorView: 'Ver',

  hero: {
    role: 'Web designer & dev',
    tagline: 'Faço sites que dão a pequenos negócios um design à altura do trabalho que eles fazem.',
    location: 'Minas Gerais, Brasil',
    cta: 'Bora conversar',
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
    intro: 'Do primeiro rascunho ao site no ar, com o mesmo cuidado em cada etapa.',
    includes: 'Inclui',
    items: [
      { name: 'Sites e landing pages', text: 'Um site que explica o que você faz em cinco segundos e abre antes do cliente desistir.', tags: ['Design responsivo', 'Copy', 'Publicação'] },
      { name: 'UX/UI', text: 'Interface pensada pra quem vai usar, não pra ganhar prêmio. (Se ganhar, melhor.)', tags: ['Pesquisa', 'Wireframes', 'Protótipo no Figma'] },
      { name: 'SEO e performance', text: 'Seu cliente procura no Google. Eu faço você aparecer, e o site abrir rápido quando ele clicar.', tags: ['SEO técnico', 'Core Web Vitals', 'Analytics'] },
      { name: 'Automações e integrações', text: 'Formulário, agenda, WhatsApp e follow-up conversando sozinhos. Nada de copiar e colar lead.', tags: ['Formulários', 'Agenda', 'Follow-up'] },
    ],
  },

  about: {
    title: 'Sobre.',
    statement: 'Todo negócio merece um site à altura do que entrega.',
    text: 'Sou o Otávio, de Minas Gerais. <mark>Uno design visual à alta performance</mark> para criar sites rápidos e envolventes. Fora do código, minha energia vai para a cultura geek, imerso nas histórias de jogos, ou <mark class="pink">viajando para cantar na grade dos shows</mark>.',
    photoAlt: 'Otávio de boné e camisa rosa fazendo sinal de paz na frente do palco do Rock in Rio',
    badge: 'Ciência da Computação · 8º período · ',
    caption: 'ottaviorr, no Rock in Rio',
    offTitle: 'Um pouco de mim',
    doom: {
      play: 'Jogar DOOM',
      title: 'DOOM (shareware, 1993)',
      close: 'Fechar',
      loading: 'Carregando o inferno…',
      keys: [['WASD', 'andar'], ['Clique', 'atirar'], ['Botão dir.', 'abrir portas'], ['Shift', 'correr'], ['1–7', 'armas'], ['M', 'menu'], ['Esc', 'sair']],
      mouseFree: 'Clique na tela pra mirar com o mouse',
      mouseLocked: 'Mouse na tela · Esc sai',
      booting: 'Carregando',
      running: 'Rodando',
      badge: 'ESC · PRA SAIR · ',
      start: 'Start',
      fire: 'Atirar',
      use: 'Usar',
    },
    off: [
      { name: 'Código & Design', text: 'Unindo a lógica da programação com a estética visual para criar experiências digitais que são tão funcionais quanto envolventes.' },
      { name: 'Imersão Geek & Gaming', text: 'Apaixonado por narrativas interativas e explorar novos universos — com um lugar de honra sempre reservado no coração (e no setup) para as histórias de Life is Strange.' },
      { name: 'Energia de Grandes Shows', text: 'Colecionador de memórias ao vivo pelo Brasil, seja vivendo a intensidade do Rock in Rio ou cantando todas as músicas na grade de um show da Taylor Swift.' },
    ],
  },

  toolkit: { title: 'Ferramentas.', intro: 'O que eu uso pra tirar as ideias do papel.', design: 'Design', ai: 'IA', code: 'Código' },

  contact: {
    marquee: 'Bora conversar',
    title: 'Bora fazer o seu.',
    text: 'Me conta o que você precisa: o negócio, o prazo, o que te incomoda no site atual. Eu leio tudo e respondo.',
    email: 'Mande um e-mail',
  },

  footer: { line: 'Feito em Minas, com rock no fone.' },
};

export type Dict = typeof pt;
