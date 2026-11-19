// ==============================================================================
// CONFIGURAÇÃO CENTRAL DA CLIENTE — STUDIO ROSE SOUSA (JOÃO PESSOA)
// Toda a personalização do site fica neste arquivo.
// Fontes: bio do Instagram @studiorosesousa_jp e ficha do Google
// (endereço no Edifício Advance Center, WhatsApp, fecha às 18h, abre 09h).
// ATENÇÃO: os valores abaixo são uma ESTIMATIVA para a demo. Cílios,
// sobrancelhas e cabelos ficam "sob consulta". Trocar pelos valores reais
// da Rose antes da entrega. Dias de atendimento também a confirmar.
// ==============================================================================

export const studioConfig = {
  name: "Rose Sousa",
  ownerName: "Rose",
  nameSuffix: "Studio",
  fullName: "Studio Rose Sousa",
  tagline: "Unhas, cílios e cabelos em Manaíra",
  subtitle:
    "Alongamento, unhas em gel e francesinha feita com calma por uma nail designer e instrutora internacional. Escolha o serviço, veja o valor e reserve seu horário em poucos toques.",
  city: "João Pessoa, PB",
  neighborhood: "Manaíra",
  addressShort: "Av. João Câncio da Silva, 1676",
  address: "Av. João Câncio da Silva, 1676 - Manaíra, João Pessoa - PB, 58038-431",
  addressNote: "Edifício Advance Center",
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=Studio+Rose+Sousa,+Av.+João+Câncio+da+Silva,+1676,+Manaíra,+João+Pessoa+-+PB",
  whatsappNumber: "5583988790042", // Apenas dígitos com DDI e DDD
  whatsappDisplay: "(83) 98879-0042",
  instagramHandle: "@studiorosesousa_jp",
  instagramUrl: "https://www.instagram.com/studiorosesousa_jp",
  // Link do Calendly. Na demo usamos a agenda de teste; na entrega vai o da Rose.
  calendlyUrl: "https://calendly.com/carbosalarissa/30min",
  workingHours: [
    { days: "Segunda a Sábado", hours: "09h às 18h" },
    { days: "Domingo", hours: "Fechado" },
  ],
  workingHoursShort: "Segunda a sábado, 09h às 18h",
  // Dias sem atendimento (0 = domingo ... 6 = sábado). Vazio = abre todos os dias.
  closedWeekdays: [0],
  periods: [
    { id: "Manhã (09h às 12h)", label: "Manhã", sub: "09h às 12h" },
    { id: "Tarde (13h às 18h)", label: "Tarde", sub: "13h às 18h" },
  ],
  paymentNote: "Os valores podem variar conforme o comprimento e a decoração. A Rose confirma tudo pelo WhatsApp.",
  // Avisos que a cliente confirma antes de agendar
  bookingNotes: [
    "Chegue 5 minutinhos antes do seu horário.",
    "Se precisar desmarcar, avise com antecedência para liberar a vaga.",
    "Decorações e pedrarias têm valor sob consulta.",
  ],
  decoratedNote: "Fio dourado, flores, pedrarias e nail art têm valor sob consulta. É só escrever nas observações.",

  // Sobre a profissional
  about: {
    photo: "/images/rose-sousa.webp",
    title: "Nail designer e instrutora internacional",
    text: "A Rose é especialista em unhas, dá cursos para outras profissionais e fala sobre o mercado da beleza como palestrante. No studio, em Manaíra, ela cuida de cada detalhe: a cutilagem limpa, o formato certo para a sua mão e o acabamento que dura.",
    highlights: ["Especialista em unhas", "Instrutora internacional", "Palestrante"],
    coursesText: "Quer aprender com a Rose? Ela abre turmas de cursos de unhas ao longo do ano.",
  },

  // Categorias de serviço (cada uma com suas opções e valores)
  categories: [
    {
      id: "alongamento",
      title: "Alongamento",
      short: "Alongamento",
      description: "Unha fina, resistente e no formato que combina com a sua mão. Amendoada, bailarina, quadrada ou redonda.",
      image: "/images/francesinha-flor-dourada.webp",
      duration: "2h a 2h30",
      maintenance: "Manutenção indicada a cada 20 a 25 dias",
      notes: ["Inclui cutilagem", "Francesinha sem custo extra"],
      items: [
        { id: "along-gel", title: "Alongamento em gel", price: 160, popular: true },
        { id: "along-fibra", title: "Alongamento na fibra de vidro", price: 180 },
        { id: "manut", title: "Manutenção do alongamento", price: 110 },
      ],
    },
    {
      id: "gel",
      title: "Unhas em Gel",
      short: "Unhas em Gel",
      description: "Banho de gel para a unha natural crescer forte, ou esmaltação em gel com brilho que dura semanas.",
      image: "/images/vinho-classico.webp",
      duration: "1h a 1h30",
      maintenance: "Dura de 15 a 20 dias",
      notes: ["Inclui cutilagem"],
      items: [
        { id: "banho-gel", title: "Banho de gel", price: 100, popular: true },
        { id: "gel-mao", title: "Esmaltação em gel nas mãos", price: 70 },
        { id: "gel-pe", title: "Esmaltação em gel nos pés", price: 70 },
      ],
    },
    {
      id: "tradicionais",
      title: "Pé e Mão",
      short: "Pé e Mão",
      description: "O cuidado do dia a dia, com cutilagem caprichada e esmaltação comum.",
      image: "/images/francesinha-margarida.webp",
      duration: "1h",
      maintenance: "",
      notes: ["Esmaltação comum inclusa"],
      items: [
        { id: "mao", title: "Manicure", price: 35 },
        { id: "pe", title: "Pedicure", price: 40 },
        { id: "pe-mao", title: "Pé e mão", price: 70, popular: true },
      ],
    },
    {
      id: "cilios-sobrancelhas",
      title: "Cílios e Sobrancelhas",
      short: "Cílios",
      description: "Extensão de cílios e design de sobrancelhas para o olhar ficar pronto todos os dias.",
      image: null,
      duration: "1h a 2h",
      maintenance: "",
      notes: ["Valores confirmados pelo WhatsApp"],
      items: [
        { id: "cilios", title: "Extensão de cílios", price: null },
        { id: "manut-cilios", title: "Manutenção de cílios", price: null },
        { id: "sobrancelha", title: "Design de sobrancelhas", price: null },
      ],
    },
    {
      id: "cabelos",
      title: "Cabelos",
      short: "Cabelos",
      description: "Cuidados com o cabelo no mesmo lugar onde você faz as unhas.",
      image: null,
      duration: "",
      maintenance: "",
      notes: ["Valor depende do comprimento e do serviço"],
      items: [
        { id: "cabelo", title: "Atendimento de cabelo", detail: "Conte nas observações o que você quer fazer", price: null },
      ],
    },
  ],

  // Adicionais que podem ser somados no agendamento
  addons: [
    { id: "nail-art", name: "Decoração simples (por unha)", price: 5 },
    { id: "pedraria", name: "Pedrarias ou fio dourado (por unha)", price: 8 },
    { id: "remocao", name: "Remoção do alongamento ou gel", price: 40 },
  ],

  // Informações importantes
  policies: [
    {
      title: "Pontualidade",
      description: "Chegue 5 minutinhos antes. Assim o seu horário rende e ninguém fica esperando.",
    },
    {
      title: "Desmarcar",
      description: "Imprevisto acontece. Avise com antecedência para a vaga ir para outra cliente.",
    },
    {
      title: "Decorações",
      description: "Fio dourado, flores, pedrarias e nail art têm valor sob consulta. Mande a foto da inspiração.",
    },
    {
      title: "Cursos",
      description: "Para saber das próximas turmas, chame a Rose no WhatsApp.",
    },
  ],

  // Galeria de fotos de resultados (fotos reais do Instagram da Rose)
  gallery: [
    { url: "/images/francesinha-fio-dourado.webp", tag: "Francesinha com fio dourado" },
    { url: "/images/vinho-classico.webp", tag: "Vinho em gel" },
    { url: "/images/francesinha-flor-dourada.webp", tag: "Francesinha com flor e dourado" },
    { url: "/images/francesinha-margarida.webp", tag: "Margarida e pedrarias" },
  ],
};

// Lista "achatada" de todos os serviços, usada no agendamento
export const allServices = studioConfig.categories.flatMap((cat) =>
  cat.items.map((item) => ({
    ...item,
    category: cat.title,
    categoryId: cat.id,
    duration: item.duration || cat.duration,
  }))
);

export const formatPrice = (value) =>
  value === null || value === undefined
    ? "Sob consulta"
    : `R$ ${Number(value).toFixed(2).replace(".", ",")}`;
