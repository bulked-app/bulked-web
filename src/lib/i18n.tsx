import { createContext, useContext, useState, ReactNode, useCallback } from "react";

export type Lang = "en" | "pt";

const translations = {
  en: {
    // Navbar
    nav_features: "Features",
    nav_how: "How it works",
    nav_app: "App",
    nav_testimonials: "Testimonials",
    nav_join: "Join Waitlist",
    nav_owners: "For Gym Owners",
    nav_product: "Product",
    nav_connected: "Connected",
    nav_access: "Access",
    nav_owners_short: "Gym owners",

    // Current landing hero
    landing_hero_badge: "Workout intelligence for serious lifters",
    landing_hero_title_top: "Train with context, not just reps.",
    landing_hero_tag_gym: "Gym",
    landing_hero_tag_machine: "Machine",
    landing_hero_tag_progress: "Progress",
    landing_hero_desc: "Bulked turns every workout into a complete training record. Track the exact gym, equipment, and progression behind every set so your data finally matches how you actually train.",
    landing_hero_secondary: "Explore the product",
    landing_hero_proof_1: "Gym-aware workout logging",
    landing_hero_proof_2: "Equipment-linked history",
    landing_hero_proof_3: "Discover gyms before you go",
    landing_hero_panel_eyebrow: "What makes it different",
    landing_hero_panel_title: "Every set stays tied to the place and machine behind it.",
    landing_hero_panel_item_1_title: "Location memory",
    landing_hero_panel_item_1_desc: "Know exactly where your best sessions happened.",
    landing_hero_panel_item_2_title: "Machine precision",
    landing_hero_panel_item_2_desc: "Compare progress without guessing which setup you used.",
    landing_hero_panel_item_3_title: "Travel confidence",
    landing_hero_panel_item_3_desc: "Find gyms that actually match your training needs.",
    landing_hero_stat_label: "Built for lifters who care about precision, not noise.",

    // Product sections
    product_badge: "Product story",
    product_title: "Built around how serious training actually happens",
    product_desc: "Most workout logs stop at reps and weight. Bulked adds the missing context so your history is more useful after the session than it was during it.",
    product_card_1_title: "Log by equipment",
    product_card_1_desc: "Save the exact machine, setup, or station behind each exercise instead of relying on memory later.",
    product_card_2_title: "Anchor every session to a real gym",
    product_card_2_desc: "Your history keeps the location attached, making travel, comparison, and consistency much easier.",
    product_card_3_title: "See progress with better signal",
    product_card_3_desc: "Track PRs and volume with the extra context needed to tell whether performance really improved.",
    product_card_4_title: "Discover gyms before you walk in",
    product_card_4_desc: "Check which places match your training style and whether the equipment lineup is worth the trip.",
    product_card_5_title: "Keep momentum across different routines",
    product_card_5_desc: "Move between home gym, commercial gym, and travel weeks without losing the thread of your training.",
    product_card_6_title: "Give owners a better profile too",
    product_card_6_desc: "Gyms can present what they actually offer instead of relying on vague amenity lists.",

    connected_badge: "Connected system",
    connected_title: "Everything stays connected to the workout",
    connected_desc: "The value here is not a bigger feature list. It is that Bulked links the pieces most training apps treat as separate.",
    connected_card_1_title: "Gym profiles",
    connected_card_1_desc: "A gym is more than a pin on a map. Bulked keeps it tied to the equipment and sessions inside it.",
    connected_card_2_title: "Equipment context",
    connected_card_2_desc: "Machine choice matters. The app remembers the exact setup behind your progress.",
    connected_card_3_title: "Workout history",
    connected_card_3_desc: "Sessions stay organized by place, equipment, and progression so the log keeps helping later.",
    connected_card_4_title: "Discovery before arrival",
    connected_card_4_desc: "Travel or gym-hopping gets easier when you can inspect what a facility actually offers first.",
    connected_card_5_title: "Owner visibility",
    connected_card_5_desc: "Gym operators get a clearer way to present their floor, strengths, and serious equipment lineup.",
    connected_card_6_title: "Training continuity",
    connected_card_6_desc: "Your data follows your training life instead of breaking apart every time the environment changes.",

    access_badge: "Coming soon",
    access_title: "Bulked will be available soon",
    access_desc: "We are finishing the first release now. Join the waitlist to be the first to know when the app opens and when new updates start rolling out.",
    access_card_label: "Launch waitlist",
    access_card_title: "Get notified when Bulked goes live",
    access_card_desc: "Join the list for launch updates, first access, and a heads-up as soon as the app is ready.",
    access_bullet_1: "Be first to hear when the app launches",
    access_bullet_2: "Get product updates as Bulked evolves",
    access_bullet_3: "Reserve your spot before public release",

    landing_cta_title: "Ready to train with better context?",
    landing_cta_desc: "Bulked makes the workout log more useful by keeping the gym, equipment, and progress attached to each session.",
    landing_cta_primary: "Review access options",
    landing_cta_secondary: "For gym owners",

    footer_summary: "Workout tracking for real gyms, real equipment, and clearer progress.",
    footer_delete_account: "Delete account",

    // Hero
    hero_badge: "Workout tracking, reimagined",
    hero_title_1: "Train smarter.",
    hero_rotating_1: "Track better.",
    hero_rotating_2: "Log everything.",
    hero_rotating_3: "Know your gym.",
    hero_rotating_4: "Beat your PRs.",
    hero_desc: "Your workouts, connected to real gyms and real equipment. Log sets, track progressive overload, and discover gyms with the gear you need.",
    hero_cta: "Join the Waitlist",
    hero_learn: "Learn More",
    hero_status_development: "In development",
    hero_status_live: "Live",
    hero_signups: "Beta signups",
    hero_gyms: "Gyms listed",
    hero_workouts: "Workouts logged",

    // Features
    feat_badge: "Features",
    feat_title: "Everything you need to level up",
    feat_desc: "Built for lifters who care about data, precision, and knowing their gym inside out.",
    feat_1_title: "Smart Workout Tracking",
    feat_1_desc: "Log sets, reps, weight, rest time, and notes — all in a few taps.",
    feat_2_title: "Gym-Based History",
    feat_2_desc: "Every workout is tied to a real location. Know exactly where you trained.",
    feat_3_title: "Equipment-Aware Logging",
    feat_3_desc: "Select the exact machine you used. No more guessing between cable brands.",
    feat_4_title: "Progress Analytics",
    feat_4_desc: "Visualize strength gains, volume trends, and personal records over time.",
    feat_5_title: "Discover Gyms",
    feat_5_desc: "Find gyms with the specific equipment you need, wherever you are.",

    // How it works
    how_badge: "How it works",
    how_title: "From gym door to gains",
    how_1_title: "Choose your gym",
    how_1_desc: "Search or select the gym you're training at today.",
    how_2_title: "Log exercises",
    how_2_desc: "Pick exercises, select equipment, and record your sets.",
    how_3_title: "Track progress",
    how_3_desc: "Watch your strength and volume grow over time.",
    how_4_title: "Improve performance",
    how_4_desc: "Use insights to optimize your training splits.",

    // Screenshots
    screens_badge: "The App",
    screens_title: "Designed for the weight room",
    screen_1: "Workout Logging",
    screen_1_desc: "Log every set with precision",
    screen_2: "Progress Analytics",
    screen_2_desc: "Visualize your gains over time",
    screen_3: "Gym Discovery",
    screen_3_desc: "Find gyms with the right gear",

    // Testimonials
    test_badge: "Testimonials",
    test_title: "Lifters love Bulked",
    test_1_quote: "Bulked helped me stay consistent across three different gyms. Knowing exactly which machines I used each time is a game-changer.",
    test_1_name: "Marcus T.",
    test_1_detail: "Powerlifter, 4 years",
    test_2_quote: "I switched from Hevy because I wanted to log equipment, not just exercises. Bulked nails that.",
    test_2_name: "Sara K.",
    test_2_detail: "Strength training, 2 years",

    // CTA
    cta_title_1: "Ready to ",
    cta_title_2: "get Bulked?",
    cta_desc: "Join thousands of lifters tracking smarter. Sign up for early access and be the first to know when we launch.",
    cta_btn: "Join the Waitlist",

    // Footer
    footer_privacy: "Privacy",
    footer_terms: "Terms",
    footer_contact: "Contact",
    footer_rights: "© 2026 Bulked. All rights reserved.",

    // Owners page
    owners_hero_badge: "For Gym Owners",
    owners_hero_title_1: "Fill your gym.",
    owners_hero_title_2: "Get discovered.",
    owners_hero_desc: "Bulked connects lifters to gyms based on the equipment they need. List your gear, attract serious athletes, and grow your membership — for free.",
    owners_hero_cta: "Register Your Gym",
    owners_hero_learn: "See How It Works",
    owners_stat_1: "180+",
    owners_stat_1_label: "Gyms listed",
    owners_stat_2: "47%",
    owners_stat_2_label: "Avg. visibility boost",
    owners_stat_3: "1.2k",
    owners_stat_3_label: "Members found gyms via Bulked",

    owners_feat_badge: "Owner Benefits",
    owners_feat_title: "Why gyms choose Bulked",
    owners_feat_1_title: "Equipment Catalog",
    owners_feat_1_desc: "Add every machine, rack, and plate in your gym. Users will find you when they search for specific gear.",
    owners_feat_2_title: "Free Exposure",
    owners_feat_2_desc: "Appear in search results when lifters look for gyms with your equipment. No ad spend required.",
    owners_feat_3_title: "Member Insights",
    owners_feat_3_desc: "Understand which equipment is most popular and when your gym is busiest.",
    owners_feat_4_title: "Gym Profile",
    owners_feat_4_desc: "Showcase photos, hours, amenities, and reviews. Your digital front door.",

    owners_how_badge: "Getting Started",
    owners_how_title: "Live in under 10 minutes",
    owners_how_1_title: "Create your account",
    owners_how_1_desc: "Sign up as a gym owner — it's completely free.",
    owners_how_2_title: "Add your equipment",
    owners_how_2_desc: "Select from our database or add custom machines.",
    owners_how_3_title: "Get discovered",
    owners_how_3_desc: "Lifters searching for your gear will find you automatically.",

    owners_test_badge: "From Gym Owners",
    owners_test_title: "Real results, real gyms",
    owners_test_1_quote: "Having our equipment listed so users can discover us has brought in new members every month.",
    owners_test_1_name: "Daniel R.",
    owners_test_1_detail: "Owner, Iron Republic Gym",
    owners_test_2_quote: "We added our full equipment catalog in 15 minutes. Since then, we've had a steady stream of new faces coming through the door.",
    owners_test_2_name: "Camila F.",
    owners_test_2_detail: "Manager, Forge Fitness Studio",

    owners_cta_title_1: "Ready to grow ",
    owners_cta_title_2: "your gym?",
    owners_cta_desc: "Join the network of gyms being discovered by serious lifters. Registration is free and takes less than 10 minutes.",
    owners_cta_btn: "Register Your Gym",
  },
  pt: {
    // Navbar
    nav_features: "Funcionalidades",
    nav_how: "Como funciona",
    nav_app: "App",
    nav_testimonials: "Depoimentos",
    nav_join: "Entrar na Lista",
    nav_owners: "Para Donos de Academia",
    nav_product: "Produto",
    nav_connected: "Conectado",
    nav_access: "Acesso",
    nav_owners_short: "Donos de academia",

    // Current landing hero
    landing_hero_badge: "Inteligencia de treino para atletas exigentes",
    landing_hero_title_top: "Treine com contexto, não só com reps.",
    landing_hero_tag_gym: "Academia",
    landing_hero_tag_machine: "Máquina",
    landing_hero_tag_progress: "Progresso",
    landing_hero_desc: "O Bulked transforma cada treino em um registro completo. Acompanhe a academia, o equipamento e a progressão por trás de cada série para que seus dados finalmente reflitam como você treina de verdade.",
    landing_hero_secondary: "Explorar o produto",
    landing_hero_proof_1: "Registro de treino com contexto de academia",
    landing_hero_proof_2: "Histórico ligado ao equipamento",
    landing_hero_proof_3: "Descubra academias antes de sair",
    landing_hero_panel_eyebrow: "O que muda aqui",
    landing_hero_panel_title: "Cada série continua ligada ao lugar e à máquina por trás dela.",
    landing_hero_panel_item_1_title: "Memória de local",
    landing_hero_panel_item_1_desc: "Saiba exatamente onde aconteceram seus melhores treinos.",
    landing_hero_panel_item_2_title: "Precisão por máquina",
    landing_hero_panel_item_2_desc: "Compare progresso sem adivinhar qual setup você usou.",
    landing_hero_panel_item_3_title: "Confiança em viagem",
    landing_hero_panel_item_3_desc: "Encontre academias que realmente batem com seu treino.",
    landing_hero_stat_label: "Feito para quem se importa com precisão, não com barulho.",

    // Product sections
    product_badge: "História do produto",
    product_title: "Feito em volta de como treino sério realmente acontece",
    product_desc: "A maioria dos apps para treino para em reps e carga. O Bulked adiciona o contexto que faltava para que seu histórico seja mais útil depois do treino do que durante ele.",
    product_card_1_title: "Registre por equipamento",
    product_card_1_desc: "Salve a máquina, o setup ou a estação exata de cada exercício em vez de depender da memória depois.",
    product_card_2_title: "Prenda cada sessão a uma academia real",
    product_card_2_desc: "Seu histórico mantém o local ligado ao treino, facilitando viagem, comparação e consistência.",
    product_card_3_title: "Veja progresso com mais sinal",
    product_card_3_desc: "Acompanhe PRs e volume com o contexto extra necessário para saber se a performance realmente melhorou.",
    product_card_4_title: "Descubra academias antes de entrar",
    product_card_4_desc: "Confira quais lugares combinam com seu estilo de treino e se o lineup de equipamentos vale a ida.",
    product_card_5_title: "Mantenha ritmo entre rotinas diferentes",
    product_card_5_desc: "Alterne entre academia de bairro, rede comercial e semanas de viagem sem perder a linha do treino.",
    product_card_6_title: "Dê aos donos um perfil melhor também",
    product_card_6_desc: "As academias mostram o que realmente oferecem em vez de depender de listas genéricas de amenidades.",

    connected_badge: "Sistema conectado",
    connected_title: "Tudo continua conectado ao treino",
    connected_desc: "O valor aqui não é uma lista maior de features. É o fato de o Bulked ligar peças que outros apps tratam como separadas.",
    connected_card_1_title: "Perfis de academia",
    connected_card_1_desc: "Uma academia é mais do que um pin no mapa. O Bulked a mantém ligada aos equipamentos e sessões dentro dela.",
    connected_card_2_title: "Contexto de equipamento",
    connected_card_2_desc: "A escolha da máquina importa. O app lembra o setup exato por trás do seu progresso.",
    connected_card_3_title: "Histórico de treino",
    connected_card_3_desc: "As sessões ficam organizadas por local, equipamento e progressão para que o log continue útil depois.",
    connected_card_4_title: "Descoberta antes de chegar",
    connected_card_4_desc: "Viajar ou variar academia fica mais fácil quando você pode inspecionar o que o lugar realmente oferece.",
    connected_card_5_title: "Visibilidade para donos",
    connected_card_5_desc: "Donos de academia têm um jeito mais claro de mostrar o piso, os diferenciais e o lineup sério de equipamentos.",
    connected_card_6_title: "Continuidade de treino",
    connected_card_6_desc: "Seus dados acompanham sua vida de treino em vez de quebrar toda vez que o ambiente muda.",

    access_badge: "Em breve",
    access_title: "O Bulked estará disponível em breve",
    access_desc: "Estamos finalizando a primeira versão agora. Entre na lista de espera para saber primeiro quando o app abrir e quando as próximas novidades começarem a chegar.",
    access_card_label: "Lista de espera",
    access_card_title: "Receba o aviso quando o Bulked entrar no ar",
    access_card_desc: "Entre na lista para receber updates de lançamento, acesso primeiro e um aviso assim que o app estiver pronto.",
    access_bullet_1: "Saiba primeiro quando o app lançar",
    access_bullet_2: "Receba novidades enquanto o Bulked evolui",
    access_bullet_3: "Garanta seu lugar antes da liberação pública",

    landing_cta_title: "Pronto para treinar com mais contexto?",
    landing_cta_desc: "O Bulked deixa o log de treino mais útil ao manter academia, equipamento e progresso ligados a cada sessão.",
    landing_cta_primary: "Revisar opções de acesso",
    landing_cta_secondary: "Para donos de academia",

    footer_summary: "Registro de treino para academias reais, equipamentos reais e progresso mais claro.",
    footer_delete_account: "Excluir conta",

    // Hero
    hero_badge: "Treino inteligente, reinventado",
    hero_title_1: "Treine mais forte.",
    hero_rotating_1: "Registre tudo.",
    hero_rotating_2: "Quebre seus PRs.",
    hero_rotating_3: "Conheça sua academia.",
    hero_rotating_4: "Evolua sempre.",
    hero_desc: "Seus treinos, conectados a academias e equipamentos reais. Registre séries, acompanhe a sobrecarga progressiva e descubra academias com o que você precisa.",
    hero_cta: "Entrar na Lista de Espera",
    hero_learn: "Saiba Mais",
    hero_status_development: "Em desenvolvimento",
    hero_status_live: "Ao vivo",
    hero_signups: "Cadastros beta",
    hero_gyms: "Academias listadas",
    hero_workouts: "Treinos registrados",

    // Features
    feat_badge: "Funcionalidades",
    feat_title: "Tudo que você precisa pra evoluir",
    feat_desc: "Feito pra quem se importa com dados, precisão e conhecer a academia por dentro.",
    feat_1_title: "Registro de Treino Inteligente",
    feat_1_desc: "Registre séries, repetições, peso, descanso e notas — tudo em poucos toques.",
    feat_2_title: "Histórico por Academia",
    feat_2_desc: "Cada treino fica ligado a um local real. Saiba exatamente onde você treinou.",
    feat_3_title: "Registro com Equipamento",
    feat_3_desc: "Selecione a máquina exata que você usou. Sem adivinhar entre marcas.",
    feat_4_title: "Análise de Progresso",
    feat_4_desc: "Visualize ganhos de força, tendências de volume e recordes pessoais.",
    feat_5_title: "Descubra Academias",
    feat_5_desc: "Encontre academias com o equipamento que você precisa, onde quer que esteja.",

    // How it works
    how_badge: "Como funciona",
    how_title: "Da porta da academia aos ganhos",
    how_1_title: "Escolha sua academia",
    how_1_desc: "Pesquise ou selecione a academia onde vai treinar.",
    how_2_title: "Registre exercícios",
    how_2_desc: "Escolha exercícios, selecione equipamento e registre suas séries.",
    how_3_title: "Acompanhe o progresso",
    how_3_desc: "Veja sua força e volume crescerem ao longo do tempo.",
    how_4_title: "Melhore a performance",
    how_4_desc: "Use insights para otimizar seus treinos.",

    // Screenshots
    screens_badge: "O App",
    screens_title: "Feito pra sala de musculação",
    screen_1: "Registro de Treino",
    screen_1_desc: "Registre cada série com precisão",
    screen_2: "Análise de Progresso",
    screen_2_desc: "Visualize seus ganhos",
    screen_3: "Descubra Academias",
    screen_3_desc: "Encontre academias com o equipamento certo",

    // Testimonials
    test_badge: "Depoimentos",
    test_title: "Quem treina, ama o Bulked",
    test_1_quote: "O Bulked me ajudou a manter a consistência em três academias diferentes. Saber exatamente que máquinas usei é sensacional.",
    test_1_name: "Anderson R. Alves",
    test_1_detail: "Bodybuilder, 7 anos",
    test_2_quote: "Saí do Hevy porque queria registrar equipamento, não só exercícios. O Bulked faz isso perfeitamente.",
    test_2_name: "Sara K.",
    test_2_detail: "Treino de força, 2 anos",

    // CTA
    cta_title_1: "Pronto pra ",
    cta_title_2: "ficar Bulked?",
    cta_desc: "Junte-se a milhares de atletas treinando de forma mais inteligente. Cadastre-se para acesso antecipado.",
    cta_btn: "Entrar na Lista de Espera",

    // Footer
    footer_privacy: "Privacidade",
    footer_terms: "Termos",
    footer_contact: "Contato",
    footer_rights: "© 2026 Bulked. Todos os direitos reservados.",

    // Owners page
    owners_hero_badge: "Para Donos de Academia",
    owners_hero_title_1: "Lote sua academia.",
    owners_hero_title_2: "Seja descoberto.",
    owners_hero_desc: "O Bulked conecta atletas a academias com base no equipamento que procuram. Liste seus aparelhos, atraia atletas dedicados e aumente suas matrículas — de graça.",
    owners_hero_cta: "Cadastrar Academia",
    owners_hero_learn: "Veja Como Funciona",
    owners_stat_1: "180+",
    owners_stat_1_label: "Academias listadas",
    owners_stat_2: "47%",
    owners_stat_2_label: "Aumento médio de visibilidade",
    owners_stat_3: "1.2k",
    owners_stat_3_label: "Membros encontraram academias via Bulked",

    owners_feat_badge: "Vantagens",
    owners_feat_title: "Por que academias escolhem o Bulked",
    owners_feat_1_title: "Catálogo de Equipamentos",
    owners_feat_1_desc: "Adicione cada máquina, rack e anilha da sua academia. Os usuários encontram você ao pesquisar equipamentos específicos.",
    owners_feat_2_title: "Exposição Gratuita",
    owners_feat_2_desc: "Apareça nos resultados quando atletas procuram academias com seus equipamentos. Sem gastar com publicidade.",
    owners_feat_3_title: "Insights de Membros",
    owners_feat_3_desc: "Entenda qual equipamento é mais popular e quando sua academia está mais cheia.",
    owners_feat_4_title: "Perfil da Academia",
    owners_feat_4_desc: "Mostre fotos, horários, comodidades e avaliações. Sua porta digital.",

    owners_how_badge: "Começando",
    owners_how_title: "No ar em menos de 10 minutos",
    owners_how_1_title: "Crie sua conta",
    owners_how_1_desc: "Cadastre-se como dono de academia — é completamente gratuito.",
    owners_how_2_title: "Adicione seus equipamentos",
    owners_how_2_desc: "Selecione do nosso banco de dados ou adicione máquinas personalizadas.",
    owners_how_3_title: "Seja descoberto",
    owners_how_3_desc: "Atletas que procuram seus equipamentos encontram você automaticamente.",

    owners_test_badge: "De Donos de Academia",
    owners_test_title: "Resultados reais, academias reais",
    owners_test_1_quote: "Ter nosso equipamento listado pra que os usuários nos descubram trouxe novos alunos todo mês.",
    owners_test_1_name: "Daniel R.",
    owners_test_1_detail: "Proprietário, Iron Republic Gym",
    owners_test_2_quote: "Adicionamos o catálogo completo em 15 minutos. Desde então, temos visto caras novas constantemente.",
    owners_test_2_name: "Camila F.",
    owners_test_2_detail: "Gerente, Forge Fitness Studio",

    owners_cta_title_1: "Pronto pra crescer ",
    owners_cta_title_2: "sua academia?",
    owners_cta_desc: "Junte-se à rede de academias descobertas por atletas dedicados. O cadastro é gratuito e leva menos de 10 minutos.",
    owners_cta_btn: "Cadastrar Academia",
  },
} as const;

export type TranslationKey = keyof typeof translations.en;

interface I18nContextType {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: (key: TranslationKey) => string;
}

const I18nContext = createContext<I18nContextType>({
  lang: "pt",
  setLang: () => {},
  t: (key) => key,
});

export const I18nProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLang] = useState<Lang>(() => {
    const saved = localStorage.getItem("bulked-lang");
    if (saved === "en" || saved === "pt") return saved;
    return "pt";
  });

  const changeLang = useCallback((newLang: Lang) => {
    setLang(newLang);
    localStorage.setItem("bulked-lang", newLang);
  }, []);

  const t = useCallback(
    (key: TranslationKey) => translations[lang][key] ?? key,
    [lang]
  );

  return (
    <I18nContext.Provider value={{ lang, setLang: changeLang, t }}>
      {children}
    </I18nContext.Provider>
  );
};

export const useI18n = () => useContext(I18nContext);
