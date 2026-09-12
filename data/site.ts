export type Procedure = { name: string; description: string; image: string };
export type Testimonial = { quote: string; name: string };
export const site = {
  name: 'Stefani Melo', monogram: 'SM',
  headline: 'Beleza que respeita quem você é.',
  cro: '', bio: 'Conheça a Dra. Stefani Melo e seu olhar para a beleza: detalhes, expressão e individualidade. Um convite para descobrir possibilidades de cuidado que façam sentido para você.',
  education: [] as string[], specialties: [] as string[],
  phone: '+55 (11) 93217-4158', whatsapp: '5511932174158', whatsappUrl: '', address: '', professionalPhilosophy: '',
  instagram: 'https://www.instagram.com/dra.stefanimelo/', instagramHandle: '@dra.stefanimelo',
  philosophy: ['NATURALIDADE', 'ANTES DE', 'EXCESSOS.'],
  colors: { paper: '#f7f5f0', ink: '#322d27', taupe: '#78644f', champagne: '#cab9a3', dark: '#302a24' },
  images: { hero: '/images/stefani-portrait.webp', about: '/images/stefani-consultorio.webp', beauty: '/images/stefani-portrait.webp' },
  procedures: [] as Procedure[], office: [] as {src:string;alt:string}[], testimonials: [] as Testimonial[],
  results: { enabled: true, items: [
    {image:'/images/resultado-perfil.webp',label:'A beleza dos seus traços',alt:'Registro comparativo facial enviado para o site da Dra. Stefani Melo',orientation:'horizontal',beforeShare:618/1254,comparisonRatio:618/1600},
    {image:'/images/resultado-labios.webp',label:'Delicadeza em cada detalhe',alt:'Registro de lábios enviado para o site da Dra. Stefani Melo',orientation:'single',beforeShare:0.5,comparisonRatio:1284/1591},
    {image:'/images/resultado-harmonia.webp',label:'Harmonia e individualidade',alt:'Registro comparativo de perfil enviado para o site da Dra. Stefani Melo',orientation:'horizontal',beforeShare:610/1223,comparisonRatio:610/1600},
    {image:'/images/resultado-expressao.webp',label:'Uma expressão mais leve',alt:'Registro comparativo frontal enviado para o site da Dra. Stefani Melo',orientation:'horizontal',beforeShare:646/1276,comparisonRatio:646/1600},
    {image:'/images/resultado-olhar.webp',label:'Cuidado que se vê no olhar',alt:'Registro comparativo do olhar enviado para o site da Dra. Stefani Melo',orientation:'vertical',beforeShare:845/1577,comparisonRatio:1284/845},
  ]},
  seo: {title:'Dra. Stefani Melo | Beleza com naturalidade',description:'Um olhar para a beleza que respeita seus traços. Conheça a Dra. Stefani Melo, explore os resultados e entre em contato para sua avaliação.',url:''},
};
export const appointmentUrl = site.whatsappUrl || (site.whatsapp ? `https://wa.me/${site.whatsapp.replace(/\D/g,'')}?text=${encodeURIComponent('Olá, gostaria de agendar uma avaliação com a Dra. Stefani Melo.')}` : site.instagram);
