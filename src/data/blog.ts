import type { BlogPost } from '../types'

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: '5 powodów, dla których warto pić zielone smoothie każdego poranka',
    slug: '5-powodow-na-zielone-smoothie',
    excerpt: 'Chlorofil, enzymy trawienne i dawka czystej energii bez zjazdu kofeinowego. Zobacz, jak zielone koktajle odmienią Twoje samopoczucie.',
    content: `Zielone smoothie to jeden z najprostszych sposobów na dostarczenie organizmowi potężnej dawki mikroskładników odżywczych już od pierwszych minut dnia.
    
1. **Lepsze trawienie:** Błonnik rozpuszczalny i nierozpuszczalny reguluje pracę jelit i wspiera mikrobiom.
2. **Naturalna energia:** Zamiast nagłego wyrzutu kortyzolu po kawie, witaminy z grupy B i żelazo uwalniają energię stopniowo.
3. **Zdrowa cera:** Wysokie stężenie witaminy C i antyoksydantów stymuluje produkcję kolagenu.
4. **Alkalizacja organizmu:** Liściaste warzywa pomagają utrzymać optymalną równowagę kwasowo-zasadową.
5. **Nawodnienie na poziomie komórkowym:** Woda strukturalna z warzyw i owoców wchłania się znacznie efektywniej.`,
    category: 'Zdrowie & Dieta',
    readTime: '4 min czytania',
    date: '4 Wrz 2026',
    author: {
      name: 'Marta Kowalczyk',
      role: 'Dietetyk Kliniczny & Fitoterapeuta',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80'
    },
    image: 'https://images.unsplash.com/photo-1610970881699-44a5587cabec?auto=format&fit=crop&w=800&q=80',
    tags: ['Detox', 'Zdrowe Nawyki', 'Superfoods', 'Energia']
  },
  {
    id: '2',
    title: 'Białko roślinne vs serwatkowe w koktajlach potreningowych — co wybrać?',
    slug: 'bialko-roslinne-vs-serwatkowe',
    excerpt: 'Analiza przyswajalności, profilu aminokwasowego i wpływu na regenerację mięśni u osób aktywnych fizycznie.',
    content: `Odpowiednia regeneracja powysiłkowa wymaga dostarczenia pełnowartościowego białka w ciągu 45 minut po treningu.
    
Czy białka roślinne (groch, ryż, konopie) mogą dorównać tradycyjnej serwatce WPC?
Współczesne izolaty wieloskładnikowe posiadają kompletny aminogram z wysoką zawartością leucyny i BCAA, a przy tym są znacznie łagodniejsze dla żołądka i nie wywołują stanów zapalnych skóry. W naszych proteinowych propozycjach łączymy siłę białka roślinnego z nasionami chia i masłem orzechowym dla maksymalnego anabolizmu.`,
    category: 'Sport & Fitness',
    readTime: '6 min czytania',
    date: '28 Sie 2026',
    author: {
      name: 'Tomasz Nowak',
      role: 'Trener Przygotowania Motorycznego',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80'
    },
    image: 'https://images.unsplash.com/photo-1577805947697-89e18249d767?auto=format&fit=crop&w=800&q=80',
    tags: ['Białko', 'Regeneracja', 'Trening', 'Siła']
  },
  {
    id: '3',
    title: 'Superfoods z polskich lasów i łąk: dzika jagoda, rokitnik i aronia',
    slug: 'polskie-superfoods-w-smoothie',
    excerpt: 'Nie musisz szukać egzotycznych nasion z drugiego końca świata. Odkryj moc lokalnych bomb witaminowych.',
    content: `Dzika jagoda leśna oraz aronia zawierają jedne z najwyższych współczynników ORAC (zdolność pochłaniania wolnych rodników tlenowych) na świecie.
    
W Smoothie Delight stawiamy na ekologiczne uprawy i certyfikowane zbiory od zaufanych polskich dostawców. Zobacz, jak jedna szklanka jagodowego koktajlu chroni wzrok przed zmęczeniem pracą przy monitorze i wzmacnia naczynia krwionośne.`,
    category: 'Superfoods',
    readTime: '5 min czytania',
    date: '15 Sie 2026',
    author: {
      name: 'Anna Wiśniewska',
      role: 'Pasjonatka Zdrowego Żywienia & Blogerka',
      avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80'
    },
    image: 'https://images.unsplash.com/photo-1553530666-ba11a7da3888?auto=format&fit=crop&w=800&q=80',
    tags: ['Antyoksydanty', 'Lokalne Bio', 'Zdrowie']
  }
]
