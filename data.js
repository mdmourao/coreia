// Conteúdo do guia. Cada dia tem uma lista de locais (cartões).
// tipo: palacio | templo | monumento | museu | bairro | mercado | comida | cafe | vista | natureza | compras | noite | transporte | comboio | dica
// kr: nome em coreano (para mostrar ao taxista e pesquisar no Naver Map)
// morada: morada como aparece no Naver Map
// naver: link do Naver Map (se faltar, pesquisa pelo nome em coreano)
// maps: texto a pesquisar no Google Maps (se faltar, usa o nome)
// lendas: histórias tradicionais ligadas ao local ({ titulo, texto, factos })
// extras: cartões opcionais mostrados em baixo do dia (extrasTitulo / extrasTexto mudam o cabeçalho)

// Restaurantes e cafés: aparecem no dia em que ficam perto e no separador "Comer".
const R = {
  wooLaeOak: {
    nome: "Woo Lae Oak",
    kr: "우래옥",
    tipo: "comida",
    linha: "Churrasco tradicional e naengmyeon · Guia Michelin",
    morada: "Seoul Jung-gu Jugyo-dong 118-1",
    naver: "https://naver.me/FXnKioCh",
    maps: "Woo Lae Oak Seoul",
    historia: "Aberto em 1946 por uma família vinda do Norte, é um dos restaurantes mais antigos de Seul. Ficou famoso pelo bulgogi e pelo naengmyeon de Pyongyang, os noodles frios em caldo de vaca.",
    factos: [
      "Está no Guia Michelin de Seul.",
      "O naengmyeon de Pyongyang tem um sabor muito suave, quase sem sal. Os coreanos dizem que só se gosta à terceira vez.",
      "Fica em Euljiro 4-ga, perto do Sewoon Plaza e do Mercado de Gwangjang."
    ],
    dica: "Há sempre fila à hora de almoço. Cheguem antes das 11:30 ou depois das 14h."
  },
  pyongyangMyeonok: {
    nome: "Pyungyang Myeonok",
    kr: "평양면옥",
    tipo: "comida",
    linha: "Noodles frios · Guia Michelin Seul 2026",
    morada: "Seoul Jung-gu 1(il)-ga 13",
    naver: "https://naver.me/xLNJm99m",
    maps: "Pyongyang Myeonok Jangchung-dong Seoul",
    historia: "Casa de Jangchung-dong especializada em naengmyeon de Pyongyang e mandu (pastéis cozidos). O naengmyeon veio para o Sul com os refugiados do Norte durante a Guerra da Coreia.",
    factos: [
      "Noodles de trigo-sarraceno num caldo frio e límpido de carne, com pera, pepino e um ovo cozido.",
      "Os noodles são compridos: é normal o empregado perguntar se querem que os corte com uma tesoura.",
      "Jangchung-dong é também a rua do jokbal (pé de porco cozido), ali ao lado.",
      "Fica perto da estação Dongguk University (linha 3), na encosta de Namsan."
    ]
  },
  chosunOck: {
    nome: "Chosun Ock",
    kr: "조선옥",
    tipo: "comida",
    linha: "Um dos churrascos mais antigos de Seul",
    morada: "Seoul Jung-gu 3(sam)-ga 229-1",
    naver: "https://naver.me/GdTiPmRs",
    maps: "Chosun Ock Euljiro Seoul",
    historia: "Aberto em 1937, em Euljiro, é famoso pelo galbi de vaca (costela marinada) grelhado na mesa. O ambiente é antigo e simples, como era o de Seul há décadas.",
    factos: [
      "Galbi: costela marinada em molho de soja, açúcar, alho e pera.",
      "Fica a dois passos do Beco da Nogari (Manseon Hof). Dá para jantar aqui e beber uma cerveja lá a seguir."
    ]
  },
  gimbuksun: {
    nome: "Gimbuksun Keunnambijip",
    kr: "김북순큰남비집",
    tipo: "comida",
    linha: "Conhecidos pelo kimchi · Sinsa (casa principal)",
    morada: "Seoul Gangnam-gu Sinsa-dong 522",
    naver: "https://naver.me/xXnEaO8R",
    maps: "Gimbuksun Keunnambijip Sinsa",
    factos: [
      "«Keun nambi jip» quer dizer «a casa da panela grande».",
      "Fica em Sinsa, perto de Garosu-gil. Bom para o almoço de quarta-feira."
    ]
  },
  hanbangChicken: {
    nome: "Hanbang Chicken",
    tipo: "comida",
    linha: "Frango com arroz · Hannam-dong",
    morada: "Seoul Yongsan-gu Hannam-dong 632-4",
    naver: "https://naver.me/x6JApyaw",
    maps: "Hannam-dong chicken Seoul",
    factos: [
      "«Hanbang» é a medicina tradicional coreana, com ervas e raízes como o ginseng.",
      "Fica em Hannam-dong, a zona de cafés do fim do dia de sexta-feira (5 de junho)."
    ]
  },
  inlifhanwoo: {
    nome: "Inlifhanwoo",
    tipo: "comida",
    linha: "Carne de vaca hanu cozinhada em água · Majang-dong",
    morada: "Seoul Seongdong-gu Majang-dong 522-2",
    naver: "https://naver.me/xSBNbkpM",
    maps: "Majang-dong hanwoo Seoul",
    factos: [
      "Fica dentro do Mercado de Carne de Majang, o maior da Coreia.",
      "Hanu (ou hanwoo) é a raça de vaca coreana, muito marmoreada e cara. É o «wagyu» da Coreia.",
      "Fica a 10 minutos de táxi de Seongsu e do Mercado de Gyeongdong (segunda, 8 de junho)."
    ]
  },
  manseonHof: {
    nome: "Manseon Hof, Beco da Nogari",
    kr: "만선호프",
    tipo: "noite",
    linha: "Cerveja e peixe seco em mesas de plástico na rua",
    morada: "Seoul Jung-gu Euljiro 3-ga · 을지로노가리골목",
    naver: "https://naver.me/FpXMXKvn",
    maps: "Manseon Hof Euljiro Seoul",
    historia: "No Beco da Nogari, em Euljiro, dezenas de mesas de plástico ocupam a rua ao fim do dia. Pede-se cerveja de pressão e nogari: escamudo jovem seco e grelhado, que se molha em maionese com malagueta e molho de soja.",
    factos: [
      "A Manseon Hof é a casa mais conhecida do beco, aberta desde os anos 80.",
      "«Hof» é como os coreanos chamam a uma cervejaria, por influência alemã.",
      "O beco é Património do Futuro de Seul: a cidade protege-o como parte da memória do bairro.",
      "Euljiro é um bairro de oficinas, gráficas e lojas de ferragens. Os jovens chamam-lhe «Hipjiro», por causa dos bares escondidos nos andares de cima."
    ],
    dica: "Melhor depois das 19h, quando a rua enche. Não há reservas: sentem-se onde houver lugar."
  },
  doraeKnot: {
    nome: "Dorae Knot",
    tipo: "cafe",
    linha: "Café da nossa lista",
    maps: "Dorae Knot cafe Seoul",
    dica: "Não temos a morada guardada: confirmem no Naver Map antes de ir."
  },
  umInUmJan: {
    nome: "Café 1in1jan",
    kr: "1인1잔",
    tipo: "cafe",
    linha: "Terraço com vista para os telhados hanok e o Bukhansan",
    morada: "Seoul Eunpyeong-gu Jingwan-dong 219",
    naver: "https://naver.me/xM55dNVY",
    maps: "1in1jan Eunpyeong Hanok Village",
    factos: [
      "O nome quer dizer «uma pessoa, um copo»: cada pessoa tem de pedir uma bebida.",
      "O terraço do último andar tem a vista mais fotografada da aldeia: telhados de telha preta com as rochas do Bukhansan por trás.",
      "Ao fim da tarde a luz bate de frente na montanha."
    ],
    dica: "Ao fim de semana há fila. Numa quinta-feira deve ser tranquilo."
  },
  nerveBuksang: {
    nome: "Nerve Buksang, Jagalchi (casa principal)",
    tipo: "comida",
    linha: "Peixe cru às fatias dentro do Mercado de Jagalchi",
    morada: "Busan Jung-gu 4(sa)-ga 37-1",
    naver: "https://naver.me/FlB2f1Aa",
    maps: "Jagalchi Market Busan",
    factos: [
      "Hoe: peixe cru cortado às fatias, que se embrulha numa folha de alface com alho, malagueta e pasta de soja.",
      "Muito peixe cru: é a casa que vimos no vídeo.",
      "Fica no edifício principal do mercado."
    ]
  },
  baekhwa: {
    nome: "Baekhwa Yanggopchang",
    kr: "백화양곱창",
    tipo: "comida",
    linha: "Tripa de vaca grelhada · parece um mercado, mas é um restaurante",
    morada: "Busan Jung-gu 6(yuk)-ga 32",
    naver: "https://naver.me/xxoRuVP0",
    maps: "Baekhwa Yanggopchang Busan",
    historia: "Fica no beco do gopchang de Jagalchi: várias bancas lado a lado, cada uma com o seu grelhador, onde se grelha tripa e intestino de vaca. É comida de trabalhadores do porto desde o pós-guerra.",
    factos: [
      "Gopchang é intestino delgado; yang é a tripa (estômago). Fica estaladiço por fora e macio por dentro.",
      "No fim, pede-se arroz frito no mesmo grelhador (bokkeumbap)."
    ],
    dica: "Bom para jantar antes do comboio de volta, no domingo."
  },
  bupyeongIlbeonji: {
    nome: "Bupyeong-dong Ilbeonji",
    tipo: "comida",
    linha: "Comida típica de Busan",
    morada: "Busan Jung-gu 2(i)-ga 58-1",
    naver: "https://naver.me/Gzdgr6js",
    maps: "Bupyeong-dong Busan",
    factos: [
      "Fica junto ao Mercado de Kkangtong, em Bupyeong-dong, a poucos minutos do Mercado Gukje."
    ]
  },
  hwanghae: {
    nome: "Hwanghae Noodles, Mercado Gukje (casa principal)",
    tipo: "comida",
    linha: "Noodles frios à moda de Busan",
    morada: "Busan Jung-gu 4(sa)-ga 20-7",
    naver: "https://naver.me/IGsKMbRh",
    maps: "Gukje Market noodles Busan",
    historia: "Os noodles frios de Busan (milmyeon) nasceram na guerra. Os refugiados do Norte queriam fazer naengmyeon, mas não havia trigo-sarraceno. Usaram a farinha de trigo da ajuda americana e criaram um prato novo.",
    factos: [
      "Hwanghae é uma província da Coreia do Norte. Muitos restaurantes de Busan têm nomes de terras do Norte, de onde vieram os fundadores.",
      "Mul milmyeon vem em caldo frio; bibim milmyeon vem com molho picante."
    ]
  }
};

const DIAS = [
  {
    id: "29mai",
    data: "2026-05-29",
    curto: "Sex 29",
    titulo: "Sexta, 29 de maio",
    resumo: "Voo de ida às 22:15. Malas feitas e documentos à mão.",
    locais: [
      {
        nome: "Voo de ida",
        tipo: "transporte",
        hora: "22:15",
        linha: "Rumo a Seul (aeroporto de Incheon)",
        semMapa: true,
        factos: [
          "A Coreia está 8 horas à frente de Portugal no verão. Quando forem 22h em Lisboa, já são 6h da manhã em Seul.",
          "Tentem dormir no avião segundo a hora de Seul: chegam ao fim da tarde e o ideal é jantar e deitar cedo.",
          "Confirmem o terminal de chegada (Incheon tem o 1 e o 2) para saberem onde apanhar o comboio."
        ],
        dica: "Façam o check-in online e tirem fotografia aos passaportes."
      },
      {
        nome: "Antes de ir",
        tipo: "dica",
        linha: "Documentos, dinheiro, telemóvel",
        semMapa: true,
        factos: [
          "K-ETA (autorização de viagem): Portugal esteve isento até ao fim de 2025. Confirmem as regras para 2026 no site oficial antes de voar.",
          "Cartão de chegada: agora pode ser preenchido online (e-Arrival Card) antes de aterrarem.",
          "Tomadas iguais às de Portugal (220 V, tipo C/F). Não precisam de adaptador!",
          "Dinheiro: o won (₩). Conta rápida: 10 000 ₩ ≈ 6 €. Cartão funciona em quase todo o lado; levem algum dinheiro para mercados e bancas de rua.",
          "Não se dá gorjeta na Coreia.",
          "Tempo no fim de maio e início de junho: entre 18 e 28 °C. A época das chuvas (jangma) só começa no fim de junho."
        ]
      },
      {
        nome: "Apps a instalar",
        tipo: "dica",
        linha: "Sem estas, a vida fica difícil",
        semMapa: true,
        factos: [
          "Naver Map ou KakaoMap: o Google Maps não dá direções a pé nem de carro na Coreia (por lei, os mapas não podem sair do país). Têm versão em inglês.",
          "Kakao T: para chamar táxis. Muitos taxistas não falam inglês, por isso a app ajuda.",
          "Papago: o tradutor da Naver, melhor que o Google para coreano. Traduz menus com a câmara.",
          "Um eSIM com dados ou um router Wi-Fi alugado no aeroporto.",
          "Para comboios KTX: app Korail Talk (ou o site da Korail em inglês)."
        ],
        dica: "Descarreguem os mapas e guardem os sítios da viagem como favoritos no Naver Map antes de ir."
      }
    ]
  },
  {
    id: "30mai",
    data: "2026-05-30",
    curto: "Sáb 30",
    titulo: "Sábado, 30 de maio",
    resumo: "Chegada a Seul às 19:15. Hotel, jantar leve e cama.",
    locais: [
      {
        nome: "Chegada ao aeroporto de Incheon",
        tipo: "transporte",
        hora: "19:15",
        linha: "Aeroporto → hotel Mayplace",
        kr: "인천국제공항",
        maps: "Incheon International Airport",
        historia: "Incheon abriu em 2001, numa ilha ganha ao mar entre Yeongjong e Yongyu, a cerca de 50 km de Seul. Aparece todos os anos nas listas dos melhores aeroportos do mundo.",
        factos: [
          "Comboio AREX: o expresso vai direto à estação de Seul em cerca de 45 min; o normal para em todas as estações e demora cerca de 1 hora.",
          "Da estação de Seul, metro até à zona do hotel. Há também autocarros «limousine» do aeroporto para Dongdaemun.",
          "Comprem já o cartão T-money (ou um WOWPASS) numa loja de conveniência do aeroporto e carreguem-no com dinheiro. Serve para metro, autocarros, táxis e lojas.",
          "No metro, passa-se o cartão à entrada e à saída.",
          "Táxi do aeroporto até ao centro: cerca de 1 hora, com portagem."
        ],
        lendas: [
          {
            titulo: "Dangun e o urso que virou mulher",
            texto: "Hwanung, filho do senhor do céu, desceu à terra para governar os homens. Um tigre e um urso pediram-lhe para se tornarem humanos. Ele deu-lhes artemísia e 20 dentes de alho e disse-lhes para ficarem 100 dias numa gruta sem ver a luz do sol. O tigre desistiu. O urso aguentou e, ao fim de 21 dias, tornou-se mulher. Casou com Hwanung e teve um filho, Dangun.",
            factos: [
              "Dangun fundou o primeiro reino coreano, Gojoseon, em 2333 a.C., segundo a tradição.",
              "O dia da fundação, 3 de outubro, é feriado nacional.",
              "Por isso o urso e o tigre aparecem tanto na arte coreana. O tigre é quase um símbolo nacional: foi a mascote dos Jogos Olímpicos de Seul de 1988."
            ]
          }
        ]
      },
      {
        nome: "Hotel Mayplace",
        tipo: "dica",
        linha: "A casa durante os dias de Seul",
        maps: "Mayplace Hotel Seoul",
        factos: [
          "O Mercado de Gwangjang fica a cerca de 16 minutos.",
          "Na receção peçam um cartão do hotel com a morada em coreano para mostrar aos taxistas."
        ],
        dica: "Se chegarem com fome, a loja de conveniência mais próxima resolve: ver o cartão em baixo."
      },
      {
        nome: "Palavras úteis",
        tipo: "dica",
        linha: "Meia dúzia de palavras que abrem portas",
        semMapa: true,
        factos: [
          "Annyeonghaseyo (olá) · Kamsahamnida (obrigado)",
          "Ne (sim!) · Aniyo (não)",
          "Jeogiyo (desculpe! — para chamar o empregado) · Joesonghamnida (peço desculpa)",
          "Igeo juseyo (isto, por favor) · Eolmayeyo? (quanto custa?)",
          "Hwajangsil eodiyeyo? (onde é a casa de banho?)",
          "Masisseoyo! (está delicioso!) · Geonbae! (saúde!)",
          "Gyesan-hae juseyo (a conta, por favor)"
        ],
        lendas: [
          {
            titulo: "O alfabeto que se aprende numa manhã",
            texto: "Em 1443 o rei Sejong criou o hangul, o alfabeto coreano, para que o povo pudesse ler e escrever sem ter de aprender milhares de caracteres chineses. No texto que o apresentou, um dos sábios da corte escreveu: «um homem inteligente aprende-o antes de acabar a manhã; um tolo, em dez dias».",
            factos: [
              "Tem 24 letras: 14 consoantes e 10 vogais, juntas em blocos que formam sílabas.",
              "As consoantes imitam a forma da boca e da língua ao dizer cada som.",
              "O dia do hangul, 9 de outubro, é feriado nacional.",
              "Vale a pena aprender as letras no avião: ajuda a ler as placas e os menus."
            ]
          }
        ],
        dica: "Tal como em Atenas, «Ne» quer dizer SIM! Para chamar o empregado diz-se «jeogiyo!» em voz alta, ou carrega-se no botão da mesa."
      }
    ],
    extras: [
      {
        nome: "Primeiro jantar: loja de conveniência",
        tipo: "comida",
        linha: "GS25, CU, 7-Eleven: estão em todas as esquinas",
        semMapa: true,
        historia: "As lojas de conveniência coreanas são uma instituição. Abertas 24 horas, têm mesas e micro-ondas, água quente para fazer ramyeon e comida pronta surpreendentemente boa.",
        factos: [
          "Samgak gimbap: o triângulo de arroz embrulhado em alga. Puxa-se a fita 1, depois a 2 e a 3, para a alga não se partir.",
          "Leite de banana Binggrae, no frasco redondo, à venda desde 1974. É um clássico.",
          "Ramyeon instantâneo: há máquinas de água quente e até máquinas que o cozinham.",
          "Promoções «1+1» e «2+1»: levam mais um de graça."
        ]
      }
    ]
  },
  {
    id: "31mai",
    data: "2026-05-31",
    curto: "Dom 31",
    titulo: "Domingo, 31 de maio",
    resumo: "O dia dos palácios: Gyeongbokgung, Jongmyo, Changdeokgung e Changgyeonggung.",
    aviso: "Comprem o bilhete integrado dos palácios (궁궐 통합관람권): dá para 4 palácios e o Jongmyo e vale vários meses. Quem for de hanbok entra de graça.",
    locais: [
      {
        nome: "Praça Gwanghwamun",
        tipo: "monumento",
        hora: "9h",
        linha: "O rei Sejong e o almirante Yi Sun-sin",
        kr: "광화문광장",
        naver: "https://naver.me/xivmy0Vx",
        maps: "Gwanghwamun Square Seoul",
        historia: "A grande avenida em frente ao palácio era, no tempo de Joseon, a rua dos ministérios. Hoje é a praça mais simbólica do país, com as estátuas dos dois maiores heróis coreanos. Foi aqui que se juntaram milhões de pessoas nas manifestações de 2016-17 que levaram à destituição da presidente Park Geun-hye.",
        factos: [
          "O rei Sejong (estátua dourada, 2009) inventou o hangul e está na nota de 10 000 ₩.",
          "Por baixo da estátua há uma exposição gratuita sobre a vida dele.",
          "O almirante Yi Sun-sin (estátua de 1968) venceu a armada japonesa nas invasões de 1592-98, com os «navios-tartaruga» blindados.",
          "Na Batalha de Myeongnyang (1597) venceu com 13 navios contra mais de 130. Antes disse ao rei: «Ainda tenho 12 navios.»",
          "Morreu na última batalha, em 1598, atingido por uma bala. As últimas palavras: «Não anunciem a minha morte.»",
          "A praça foi renovada em 2022, com fontes e mais árvores."
        ],
        dica: "Comecem aqui às 9h: o palácio fica mesmo ao fundo e a troca da guarda é à porta, às 10h."
      },
      {
        nome: "Palácio Gyeongbokgung",
        tipo: "palacio",
        hora: "10h",
        linha: "O palácio principal · troca da guarda às 10h e 14h",
        kr: "경복궁",
        morada: "Seoul Jongno-gu Sejongno 1-1",
        naver: "https://naver.me/FsowVnZq",
        maps: "Gyeongbokgung Palace",
        historia: "Construído em 1395 por Taejo, fundador da dinastia Joseon, quando mudou a capital para Seul. O nome quer dizer «palácio muito abençoado pelo céu». Ardeu em 1592, durante a invasão japonesa, e ficou em ruínas quase 300 anos. Foi reconstruído em 1867 pelo regente Heungseon Daewongun, com mais de 300 edifícios. No período colonial japonês (1910-45) a maior parte foi demolida e os japoneses construíram o edifício do governo-geral mesmo em frente ao trono, para o esconder. Esse edifício só foi deitado abaixo em 1995-96, e a reconstrução ainda continua.",
        factos: [
          "Troca da guarda (Sumunjang) na porta Gwanghwamun às 10h e às 14h, cerca de 20 minutos. Não há às terças.",
          "Geunjeongjeon: a sala do trono, onde os reis recebiam a corte. Os funcionários alinhavam-se por categoria junto às pedras com números no pátio.",
          "Gyeonghoeru: o pavilhão dos banquetes, sobre 48 colunas de pedra num lago.",
          "Hyangwonjeong: o pavilhão de dois andares numa ilha, ao fundo do palácio. Muito fotogénico.",
          "Em 1895 a rainha Myeongseong foi assassinada aqui dentro por agentes japoneses, no pavilhão Geoncheonggung.",
          "Lá dentro fica o Museu Nacional do Folclore, gratuito.",
          "Fecha às terças. Horário: 9h às 18h (18:30 em junho), última entrada 1 hora antes."
        ],
        lendas: [
          {
            titulo: "O haechi, guardião contra o fogo",
            texto: "Os geomantes diziam que o monte Gwanaksan, a sul de Seul, tinha energia de fogo e apontava ao palácio. Para o proteger, puseram à porta estátuas de haechi, um animal mítico parecido com um leão, que sabe distinguir o bem do mal e devora o fogo.",
            factos: [
              "Os haechi estão à porta Gwanghwamun. Vejam se descobrem os outros espalhados pelo palácio.",
              "Desde 2008 o haechi é a mascote oficial de Seul.",
              "O lago do Gyeonghoeru também tinha a função de «apagar» o fogo do Gwanaksan."
            ]
          }
        ],
        dica: "Comprem o bilhete às 9h e vejam a troca da guarda às 10h. Precisam de 2 horas para ver o essencial."
      },
      {
        nome: "Almoço perto do palácio",
        tipo: "comida",
        hora: "12h",
        linha: "Seochon, o bairro a oeste do Gyeongbokgung",
        kr: "서촌",
        maps: "Seochon Seoul",
        factos: [
          "Tosokchon: o samgyetang mais famoso de Seul (frango inteiro recheado com arroz e ginseng, num caldo). Costuma ter fila, mas anda depressa.",
          "Seochon tem ruelas com restaurantes pequenos e menos turistas que Bukchon.",
          "Na estação Gyeongbokgung há o mercado Tongin, onde se compra comida com moedas antigas de latão (dosirak café)."
        ]
      },
      {
        nome: "Santuário Jongmyo",
        tipo: "templo",
        hora: "13h",
        linha: "Onde vivem os espíritos dos reis Joseon",
        kr: "종묘",
        morada: "Seoul Jongno-gu Hunjeong-dong 1-2",
        naver: "https://naver.me/5eDZf12z",
        maps: "Jongmyo Shrine",
        historia: "Construído em 1394-95, ao mesmo tempo que o palácio. Aqui guardam-se as tábuas com os nomes dos reis e rainhas de Joseon, onde se acreditava que vivia o espírito de cada um. Foi o primeiro sítio coreano a ser Património Mundial da UNESCO, em 1995.",
        factos: [
          "O salão principal, Jeongjeon, tem mais de 100 metros: é um dos edifícios de madeira mais compridos da Ásia. Esteve em obras de restauro e reabriu em 2025.",
          "Tem 19 câmaras com 49 tábuas de reis e rainhas.",
          "A cerimónia Jongmyo Jerye, com música e dança da corte, faz-se todos os anos no primeiro domingo de maio. É Património Imaterial da UNESCO.",
          "O caminho de pedra elevado ao meio é para os espíritos: não se pisa. Os reis andavam do lado direito, os príncipes do esquerdo.",
          "Fecha às terças."
        ],
        dica: "Em muitos dias só se entra com visita guiada a horas certas (há em inglês). Vejam os horários e escolham o tour à chegada ou no site."
      },
      {
        nome: "Palácio Changdeokgung",
        tipo: "palacio",
        hora: "14h",
        linha: "O palácio preferido dos reis · Património Mundial",
        kr: "창덕궁",
        morada: "Seoul Jongno-gu Waryong-dong 2-71",
        naver: "https://naver.me/F6QnYkit",
        maps: "Changdeokgung Palace",
        historia: "Construído em 1405 como palácio secundário. Depois de todos os palácios terem ardido em 1592, foi o primeiro a ser reconstruído e serviu de palácio principal durante quase 270 anos. Ao contrário do Gyeongbokgung, que é simétrico, os edifícios seguem a forma do terreno e da montanha. Por isso a UNESCO classificou-o em 1997.",
        factos: [
          "A porta Donhwamun (reconstruída em 1609) é a porta de palácio mais antiga de Seul.",
          "Injeongjeon: a sala do trono. Lá dentro há luzes elétricas e cortinas dos primeiros anos do séc. XX.",
          "Os últimos membros da família real viveram em Nakseonjae até 1989.",
          "Fecha às segundas."
        ]
      },
      {
        nome: "Jardim Secreto de Changdeokgung (Huwon)",
        tipo: "natureza",
        hora: "15:30",
        linha: "Visita guiada ao jardim dos reis",
        kr: "창덕궁 후원",
        maps: "Huwon Secret Garden Changdeokgung",
        historia: "Atrás do palácio, numa encosta com 300 anos de árvores, os reis tinham um jardim só para eles: lagos, pavilhões, uma biblioteca e um pequeno arrozal, onde o rei plantava arroz para saber como vivia o povo.",
        factos: [
          "Buyongji: o lago quadrado com uma ilha redonda. Representa a ideia antiga de que a terra é quadrada e o céu é redondo.",
          "Juhamnu: o pavilhão de dois andares sobre o lago era a biblioteca real, criada pelo rei Jeongjo.",
          "Ongnyucheon: um riacho onde os reis faziam flutuar taças de vinho e tinham de compor um poema antes de a taça chegar.",
          "A visita dura cerca de 90 minutos, sempre com guia, e tem lugares limitados."
        ],
        dica: "Confirmem que o vosso bilhete inclui o Huwon e reservem o horário das 15:30 com antecedência."
      },
      {
        nome: "Palácio Changgyeonggung",
        tipo: "palacio",
        hora: "17h",
        linha: "O palácio das rainhas · aberto até às 21h",
        kr: "창경궁",
        morada: "Seoul Jongno-gu Waryong-dong 2-1",
        naver: "https://naver.me/F6QnV17B",
        maps: "Changgyeonggung Palace",
        historia: "Mandado construir em 1483 pelo rei Seongjong para três rainhas viúvas. Em 1909 os japoneses transformaram-no num jardim zoológico e botânico e mudaram-lhe o nome para «Changgyeongwon», rebaixando-o de palácio a parque. O zoo só saiu em 1983 e o palácio foi restaurado.",
        factos: [
          "Myeongjeongjeon, a sala do trono, é a mais antiga de todos os palácios de Seul (1616).",
          "A estufa Daeonsil (1909), de ferro e vidro, foi a primeira estufa ocidental da Coreia.",
          "Desde 2022 há outra vez ligação a pé entre o Jongmyo e este palácio, como no tempo de Joseon.",
          "Com Changdeokgung, formava o «palácio do Leste» (Donggwol).",
          "Fecha às segundas."
        ],
        lendas: [
          {
            titulo: "O príncipe na arca de arroz",
            texto: "Em 1762, num pátio deste palácio, o rei Yeongjo mandou fechar o próprio filho, o príncipe herdeiro Sado, numa arca de madeira para arroz. Sado tinha ataques de violência e o rei temia por Joseon. O príncipe morreu ao fim de oito dias, sem comida nem água.",
            factos: [
              "O filho de Sado, que viu tudo com 10 anos, tornou-se o rei Jeongjo.",
              "Jeongjo construiu a fortaleza de Suwon para honrar o pai: vão vê-la a 10 de junho.",
              "A história é contada no filme «The Throne» (2015)."
            ]
          }
        ],
        dica: "É o palácio mais calmo ao fim do dia. O lago Chundangji fica bonito ao pôr do sol."
      }
    ],
    extras: [
      {
        nome: "Alugar um hanbok",
        tipo: "dica",
        linha: "E entrar de graça nos palácios",
        maps: "hanbok rental Gyeongbokgung",
        kr: "한복대여",
        factos: [
          "Há dezenas de lojas de aluguer à volta do Gyeongbokgung, por horas ou pelo dia todo.",
          "Quem vai de hanbok não paga entrada nos palácios nem no Jongmyo.",
          "O hanbok tradicional é uma saia comprida e larga (chima) com um casaco curto (jeogori) para as mulheres, e calças largas (baji) com casaco para os homens."
        ]
      }
    ]
  },
  {
    id: "1jun",
    data: "2026-06-01",
    curto: "Seg 1",
    titulo: "Segunda, 1 de junho",
    resumo: "Seul antiga e Seul industrial: hanok, templo, mercados e ruas de ferragens.",
    aviso: "Bukchon só pode ser visitado entre as 10h e as 17h (há multas fora desse horário). É um bairro onde vivem pessoas: falem baixo.",
    locais: [
      {
        nome: "Aldeia Hanok de Bukchon",
        tipo: "bairro",
        hora: "10h",
        linha: "Casas tradicionais entre dois palácios · sem bilhete",
        kr: "북촌한옥마을",
        morada: "Seoul Jongno-gu Gye-dong 105",
        naver: "https://naver.me/5ul9HheU",
        maps: "Bukchon Hanok Village",
        historia: "Bukchon quer dizer «aldeia do norte». Entre os palácios Gyeongbokgung e Changdeokgung viviam os altos funcionários e nobres de Joseon. A maior parte das casas que se vêem hoje foram construídas nos anos 20 e 30 por um empresário, Jeong Se-kwon, que fazia hanok mais pequenos e em série para os coreanos não serem expulsos pelos bairros japoneses.",
        factos: [
          "Hanok: casa tradicional de madeira, com telhado curvo de telha preta e chão aquecido por baixo (ondol).",
          "Há oito pontos de vista oficiais («Bukchon 8 vistas»), marcados no chão. A rua Bukchon-ro 11-gil, a descer, é a mais famosa.",
          "Desde 2024 a zona mais turística tem horário de visita (10h-17h) por causa das queixas dos moradores.",
          "Muitas casas são residências privadas: não se entra nem se espreita pelas portas."
        ],
        dica: "Vão logo às 10h, antes dos grupos. Comecem pela parte alta e venham a descer."
      },
      {
        nome: "Templo Jogyesa",
        tipo: "templo",
        linha: "O templo budista mais importante de Seul",
        kr: "조계사",
        morada: "Seoul Jongno-gu Gyeonji-dong 46-1",
        naver: "https://naver.me/GIIGac2W",
        maps: "Jogyesa Temple Seoul",
        historia: "É a sede da Ordem Jogye, a maior do budismo coreano. Durante a dinastia Joseon o budismo foi perseguido e os templos expulsos para as montanhas; só no séc. XX voltou a haver um grande templo no centro da cidade. O nome atual é de 1954.",
        factos: [
          "No pátio há um pinheiro-branco com cerca de 500 anos (monumento natural) e uma acácia-do-japão ainda mais velha.",
          "Lá dentro estão três grandes Budas dourados. Pode-se entrar descalço e em silêncio, mesmo durante as orações.",
          "O aniversário de Buda foi a 24 de maio de 2026: talvez ainda vejam as milhares de lanternas de papel penduradas no pátio.",
          "O festival das lanternas (Yeondeunghoe) é Património Imaterial da UNESCO desde 2020."
        ],
        dica: "Entrada gratuita e aberto todo o dia. Não se aponta os pés para o Buda nem se fala alto."
      },
      {
        nome: "Ruas de ferragens de Jongno",
        tipo: "bairro",
        linha: "Becos de oficinas e lojas de ferramentas",
        morada: "Seoul Jongno-gu Donhwamun-ro 4-gil 26",
        naver: "https://naver.me/Fdqo53oO",
        maps: "Jongno hardware alley Seoul",
        factos: [
          "Lojas minúsculas de parafusos, válvulas, motores, luzes e peças de tudo, ainda a funcionar como há 50 anos.",
          "É o outro lado de Seul: trabalho, motas de entregas e carrinhos de mão, sem nada de turístico."
        ]
      },
      {
        nome: "Sewoon Plaza",
        tipo: "compras",
        linha: "O primeiro grande edifício moderno de Seul",
        kr: "세운상가",
        morada: "Seoul Jongno-gu Jangsa-dong 116-4",
        naver: "https://naver.me/FnsVOTFd",
        maps: "Sewoon Plaza Seoul",
        historia: "Inaugurado em 1968 e desenhado pelo arquiteto Kim Swoo-geun, foi o primeiro complexo de lojas e habitação da Coreia: um bloco de quase 1 km ligado por passadiços. Nos anos 70 e 80 era o centro da eletrónica do país; hoje tem lojas de rádios antigos, amplificadores e oficinas de reparação.",
        factos: [
          "No terraço há um miradouro gratuito com vista para o Jongmyo e o Namsan.",
          "Os passadiços que ligam os blocos foram recuperados em 2017.",
          "Ao lado ficam as ruas de iluminação de Euljiro."
        ],
        lendas: [
          {
            titulo: "O submarino do Sewoon",
            texto: "Diz-se em Seul que, se derem três voltas ao Sewoon, conseguem juntar peças para construir um tanque, um míssil ou até um submarino. É exagero, mas nos anos 70 os técnicos daqui eram capazes de copiar e reparar qualquer aparelho que viesse do estrangeiro.",
            factos: [
              "Muitos dos primeiros engenheiros da indústria eletrónica coreana começaram em oficinas como estas."
            ]
          }
        ]
      },
      {
        nome: "Dongdaemun Design Plaza (DDP)",
        tipo: "monumento",
        linha: "A nave espacial de Zaha Hadid",
        kr: "동대문디자인플라자",
        morada: "Seoul Jung-gu 7(chil)-ga 143",
        naver: "https://naver.me/5vJ3yAwc",
        maps: "Dongdaemun Design Plaza",
        historia: "Desenhado pela arquiteta Zaha Hadid e inaugurado em 2014, não tem uma única linha reta na fachada. Fica no lugar do antigo Estádio de Dongdaemun (1925-2007). Durante as obras apareceram restos da muralha de Seul e de uma comporta antiga, o Igansumun, que foram mantidos à vista no parque.",
        factos: [
          "A fachada tem cerca de 45 000 painéis de alumínio, quase todos com formas diferentes.",
          "É aqui que se faz a Semana da Moda de Seul.",
          "À volta ficam os centros comerciais de moda de Dongdaemun, alguns abertos até de madrugada.",
          "A porta Dongdaemun (Heunginjimun), a grande porta do Leste da muralha, fica a 5 minutos."
        ],
        lendas: [
          {
            titulo: "A porta com uma letra a mais",
            texto: "As quatro grandes portas de Seul têm nomes de três caracteres, cada um com uma virtude de Confúcio. A do Leste é a única com quatro: Heung-in-ji-mun. Os geomantes achavam que o terreno a leste era baixo e fraco, e acrescentaram o carácter «ji» (之), que tem a forma de uma montanha a serpentear, para o reforçar.",
            factos: [
              "Também é a única porta com uma muralha exterior em meia-lua, para a defender melhor.",
              "As virtudes: benevolência (Leste), justiça (Oeste), cortesia (Sul, Sungnyemun) e sabedoria (Norte)."
            ]
          }
        ]
      },
      {
        nome: "Mercado de Gwangjang",
        tipo: "mercado",
        hora: "Almoço",
        linha: "O mercado de comida mais famoso de Seul",
        kr: "광장시장",
        morada: "Seoul Jongno-gu Yeji-dong 2-1 · 광장시장 일호상회",
        naver: "https://naver.me/xaTfthHh",
        maps: "Gwangjang Market Seoul",
        historia: "Aberto em 1905, foi o primeiro mercado permanente da Coreia. No andar de cima ainda se vendem tecidos de seda para hanbok; cá em baixo, os corredores estão cheios de bancas de comida onde se come sentado num banco, ao lado das cozinheiras.",
        factos: [
          "Bindaetteok: panqueca de feijão-mungo, frita na hora em grandes chapas. O prato do mercado.",
          "Mayak gimbap: rolinhos pequenos de arroz e alga com molho de mostarda. «Mayak» quer dizer droga, porque vicia.",
          "Yukhoe: carne de vaca crua temperada, com pera e gema de ovo. Há um beco só disso.",
          "A banca de kalguksu (sopa de massa cortada à faca) da senhora Cho apareceu na série «Street Food: Asia» da Netflix.",
          "Fecha ao domingo; segunda está aberto."
        ],
        dica: "Os preços estão afixados. Escolham a banca, sentem-se e apontem."
      },
      {
        nome: "Mercado Pyeonghwa",
        tipo: "compras",
        hora: "Tarde",
        linha: "O «mercado da paz», ao longo do Cheonggyecheon",
        kr: "평화시장",
        morada: "Seoul Jung-gu 6(yuk)-ga 17-48",
        naver: "https://naver.me/FZo8LOz2",
        maps: "Pyeonghwa Market Seoul",
        historia: "Construído em 1962 por refugiados do Norte, ao longo do riacho Cheonggyecheon. Nos anos 60 e 70 os andares de cima eram fábricas de roupa onde trabalhavam raparigas de 13 e 14 anos, 15 horas por dia.",
        factos: [
          "Em 1970 o costureiro Jeon Tae-il, de 22 anos, imolou-se pelo fogo em frente ao mercado, a gritar «Somos seres humanos, não máquinas!». A morte dele deu início ao movimento operário coreano.",
          "A ponte em frente chama-se hoje Ponte Jeon Tae-il e tem uma estátua dele.",
          "Hoje vende roupa, malas, meias e acessórios por grosso e a retalho."
        ]
      },
      {
        nome: "Rua Hanok de Ikseon-dong",
        tipo: "bairro",
        linha: "Hanok dos anos 20 transformados em cafés",
        kr: "익선동 한옥거리",
        morada: "Seoul Jongno-gu Ikseon-dong",
        naver: "https://naver.me/IMZ46QvA",
        maps: "Ikseon-dong Hanok Street",
        historia: "Um dos bairros de hanok mais antigos de Seul, construído nos anos 20 pelo mesmo Jeong Se-kwon de Bukchon. Esteve para ser demolido; nos últimos dez anos encheu-se de cafés, pastelarias e lojas dentro das casas antigas.",
        factos: [
          "As ruelas são estreitíssimas: às vezes só cabe uma pessoa.",
          "Fica a 5 minutos a pé de Insadong e das estações Jongno 3-ga e Anguk."
        ]
      },
      {
        nome: "Insadong e Ssamzigil",
        tipo: "compras",
        linha: "Antiguidades, galerias, chá e artesanato",
        kr: "인사동 쌈지길",
        morada: "Seoul Jongno-gu Insa-dong",
        naver: "https://naver.me/x6JxL0Zs",
        maps: "Ssamzigil Insadong",
        historia: "No tempo de Joseon era a zona dos pintores da corte. No séc. XX encheu-se de lojas de antiguidades e galerias. Hoje é a rua do artesanato coreano: papel hanji, pincéis, cerâmica e casas de chá tradicionais.",
        factos: [
          "Ssamzigil (2004) é um edifício com uma rampa em espiral de 500 m, sem escadas, cheio de lojas de designers. A rampa leva até ao terraço.",
          "O Starbucks de Insadong é o único do mundo com o nome escrito só em hangul.",
          "Kkultarae: doce de mel e amido esticado em 16 000 fios finíssimos, feito à frente de quem compra.",
          "As casas de chá servem chás de ervas, como o ssanghwa-cha, e doces de arroz."
        ],
        dica: "Bom sítio para lembranças: papel hanji, leques, colheres e pauzinhos de metal."
      },
      {
        nome: "Rua de Samcheong-dong",
        tipo: "bairro",
        hora: "Fim da tarde",
        linha: "Ao longo do muro do palácio, entre galerias e cafés",
        kr: "삼청동길",
        morada: "Seoul Jongno-gu Samcheong-dong",
        naver: "https://naver.me/xCjtTxNR",
        maps: "Samcheong-dong Seoul",
        factos: [
          "«Samcheong» quer dizer «três limpezas»: montanhas limpas, água limpa e gente de bom coração.",
          "A rua começa junto ao muro leste do Gyeongbokgung e sobe até à montanha.",
          "Tem galerias de arte, lojas pequenas e casas de sujebi (sopa de massa rasgada à mão)."
        ],
        dica: "Ao fim do dia é calmo e a luz no muro de pedra é bonita. Liga a Bukchon a pé."
      },
      R.manseonHof
    ],
    extras: [R.chosunOck, R.wooLaeOak]
  },
  {
    id: "2jun",
    data: "2026-06-02",
    curto: "Ter 2",
    titulo: "Terça, 2 de junho",
    resumo: "O centro histórico e moderno: palácios do Oeste, a porta Sul, Namsan e Myeongdong.",
    locais: [
      {
        nome: "Palácio Gyeonghuigung",
        tipo: "palacio",
        hora: "9h",
        linha: "O palácio do Oeste · gratuito",
        kr: "경희궁",
        morada: "Seoul Jongno-gu 2(i)-ga 1-126",
        naver: "https://naver.me/xXnwFUjE",
        maps: "Gyeonghuigung Palace",
        historia: "Construído entre 1617 e 1623, chegou a ser o segundo palácio de Joseon e viveram aqui dez reis. Os japoneses desmontaram-no quase todo para construir uma escola, e venderam portas e salas. O que se vê hoje é uma reconstrução parcial dos anos 90.",
        factos: [
          "Entrada gratuita e quase sem turistas.",
          "Ao lado fica o Museu de História de Seul, também gratuito, com uma maqueta gigante da cidade.",
          "Fecha às segundas."
        ],
        dica: "Bom para começar o dia com calma. Daqui até ao Deoksugung são 15 minutos a pé pela rua Jeongdong."
      },
      {
        nome: "Palácio Deoksugung",
        tipo: "palacio",
        linha: "O palácio do imperador, entre edifícios ocidentais",
        kr: "덕수궁",
        morada: "Seoul Jung-gu Jeong-dong 5-1",
        naver: "https://naver.me/FHOVaitQ",
        maps: "Deoksugung Palace",
        historia: "Era a casa de um príncipe e passou a palácio em 1593, porque todos os outros tinham ardido na guerra. Em 1897 o rei Gojong mudou-se para aqui e declarou o Império Coreano, para mostrar que a Coreia era independente da China e do Japão. Em 1907 os japoneses obrigaram-no a abdicar, e o palácio ganhou o nome atual, «palácio da longevidade virtuosa».",
        factos: [
          "É o único palácio com edifícios ocidentais: o Seokjojeon (1910), de pedra e colunas neoclássicas, hoje um museu.",
          "Jeonggwanheon (1900): o pavilhão onde Gojong bebia café, mistura de estilo coreano e russo.",
          "Troca da guarda na porta Daehanmun, normalmente às 11h, 14h e 15:30.",
          "Aberto até às 21h. Fecha às segundas."
        ],
        lendas: [
          {
            titulo: "O café envenenado do rei",
            texto: "Gojong foi um dos primeiros coreanos a apaixonar-se pelo café. Em 1898 um intérprete caído em desgraça mandou pôr ópio no café do rei. Gojong estranhou o sabor e cuspiu; o príncipe herdeiro bebeu, ficou gravemente doente e perdeu vários dentes.",
            factos: [
              "O intérprete, Kim Hong-ryuk, foi executado.",
              "O café chegou à corte através do consulado russo, onde Gojong esteve refugiado em 1896."
            ]
          },
          {
            titulo: "O caminho que separa os namorados",
            texto: "Diz-se em Seul que os casais que passeiam pelo Doldam-gil, o caminho junto ao muro de pedra do Deoksugung, acabam por se separar. A explicação: até 1995 o tribunal de família de Seul ficava ao fundo desta rua, e os casais que se iam divorciar passavam todos por aqui.",
            factos: [
              "Mesmo assim, é um dos passeios mais bonitos da cidade, com árvores e edifícios do séc. XIX."
            ]
          }
        ]
      },
      {
        nome: "Praça de Seul e Câmara Municipal",
        tipo: "monumento",
        linha: "O relvado em frente à câmara · estação City Hall (linhas 1 e 2)",
        kr: "서울광장",
        morada: "Seoul Jung-gu 1(il)-ga 50-1",
        naver: "https://naver.me/GJZ52duc",
        maps: "Seoul Plaza",
        historia: "A antiga câmara (1926) é um edifício do período japonês e hoje é a Biblioteca de Seul, gratuita. Atrás, a nova câmara (2012) tem uma fachada de vidro em forma de onda, que lembra o beiral de um hanok.",
        factos: [
          "No Mundial de 2002 juntaram-se aqui centenas de milhares de pessoas de vermelho a ver a Coreia chegar às meias-finais.",
          "No inverno o relvado vira pista de gelo.",
          "Dentro da nova câmara há um jardim vertical enorme e pode-se entrar."
        ],
        dica: "A Biblioteca de Seul tem casas de banho e um terraço com vista para a praça."
      },
      {
        nome: "Porta Sungnyemun (Namdaemun)",
        tipo: "monumento",
        linha: "A grande porta Sul da muralha · desde 1398",
        kr: "숭례문",
        morada: "Seoul Jung-gu 4(sa)-ga 29",
        naver: "https://naver.me/xB7MZ8bO",
        maps: "Sungnyemun Gate",
        historia: "Terminada em 1398, era a porta principal da muralha de Seul. Sobreviveu às invasões e à guerra e era o Tesouro Nacional n.º 1. Em 2008 um homem, zangado com a indemnização que recebera por um terreno, pegou-lhe fogo: a parte de madeira ardeu toda numa noite, em direto na televisão. Foi reconstruída com técnicas e ferramentas tradicionais e reabriu em 2013.",
        factos: [
          "O nome quer dizer «porta da reverência à cortesia».",
          "Nos anos 1900 os japoneses deitaram abaixo a muralha à volta para fazer passar o elétrico; a porta ficou isolada no meio do trânsito.",
          "Ao lado há um troço da muralha reconstruído."
        ],
        lendas: [
          {
            titulo: "A placa ao alto",
            texto: "As placas com os nomes das portas e palácios escrevem-se sempre na horizontal. A do Sungnyemun é vertical. Diz-se que foi para «bloquear» o fogo do monte Gwanaksan, que fica exatamente a sul: o carácter «sung» (崇) parece uma chama e, posto na vertical, combateria o fogo com fogo.",
            factos: [
              "A caligrafia é atribuída ao príncipe Yangnyeong, irmão mais velho do rei Sejong.",
              "Ironia: foi precisamente o fogo que a destruiu em 2008."
            ]
          }
        ]
      },
      {
        nome: "Seoullo 7017",
        tipo: "vista",
        linha: "Um viaduto de autoestrada transformado em jardim",
        kr: "서울로7017",
        morada: "Seoul Jung-gu 2(i)-ga 122-14",
        naver: "https://naver.me/xpjBZ2jV",
        maps: "Seoullo 7017",
        historia: "Era um viaduto para carros, construído em 1970 por cima da estação de Seul. Em 2017 foi fechado ao trânsito e transformado num passeio suspenso com mais de 20 000 plantas em vasos redondos, ao estilo do High Line de Nova Iorque.",
        factos: [
          "«7017» junta 1970 e 2017, e também as 17 rampas e escadas que o ligam às ruas.",
          "Tem cerca de 1 km e foi desenhado pelo atelier holandês MVRDV.",
          "Daqui vê-se a antiga estação de Seul (1925), de tijolo e cúpula."
        ]
      },
      {
        nome: "Mercado de Namdaemun",
        tipo: "mercado",
        hora: "Almoço",
        linha: "O maior mercado tradicional da Coreia",
        kr: "남대문시장",
        morada: "Seoul Jung-gu Namchang-dong 49-1",
        naver: "https://naver.me/5dhArskW",
        maps: "Namdaemun Market",
        historia: "Nasceu junto à porta Sul, no início da dinastia Joseon, como mercado de comerciantes que vinham de fora da muralha. Hoje são mais de 10 000 lojas: roupa, óculos, ginseng, cozinha, câmaras fotográficas e tudo o resto.",
        factos: [
          "Beco do galchi jorim: peixe-espada estufado em molho picante, servido no tacho.",
          "Beco do kalguksu: sopa de massa cortada à faca, que costuma vir com uma tigela pequena de naengmyeon de oferta.",
          "Hotteok: panqueca recheada de açúcar mascavado e frutos secos. Aqui há a versão salgada, com noodles de batata-doce (japchae).",
          "Muitas lojas fecham ao domingo; à terça está tudo aberto."
        ]
      },
      {
        nome: "N Seoul Tower e Parque Namsan",
        tipo: "vista",
        hora: "Tarde",
        linha: "A montanha no meio da cidade",
        kr: "N서울타워",
        morada: "Seoul Yongsan-gu 2(i)-ga 산1-3",
        naver: "https://naver.me/5yhWTGF5",
        maps: "N Seoul Tower",
        historia: "Namsan, a «montanha do sul», era um dos quatro montes que protegiam Seul. A torre foi construída nos anos 70 como antena de televisão e abriu ao público em 1980. Lá em cima vê-se a cidade toda, de montanha a montanha.",
        factos: [
          "A torre tem 236 m; com a montanha, o topo fica a quase 480 m acima do mar.",
          "Os cadeados do amor na vedação do terraço: há dezenas de milhares.",
          "O teleférico do Namsan funciona desde 1962. Também se pode subir a pé (30-40 min) ou de autocarro.",
          "Pela montanha passa a muralha de Seul, com 600 anos.",
          "O miradouro paga-se à parte; o terraço com os cadeados é gratuito."
        ],
        lendas: [
          {
            titulo: "As fogueiras do Namsan",
            texto: "No alto do Namsan havia cinco torres de sinais de fogo (bongsu), as últimas de uma cadeia que vinha de todas as fronteiras do país. Uma fogueira acesa: tudo calmo. Duas: inimigo à vista. Três: inimigo perto da fronteira. Quatro: fronteira atravessada. Cinco: combate. A notícia chegava de Busan a Seul em menos de 12 horas.",
            factos: [
              "As torres foram reconstruídas e às vezes fazem-se demonstrações com fumo."
            ]
          }
        ],
        dica: "Subam ao fim da tarde e fiquem para ver as luzes da cidade a acender."
      },
      {
        nome: "Catedral de Myeongdong",
        tipo: "monumento",
        linha: "A primeira igreja gótica da Coreia",
        kr: "명동성당",
        morada: "Seoul Jung-gu 2(i)-ga 1-1",
        naver: "https://naver.me/xgX7I3dY",
        maps: "Myeongdong Cathedral",
        historia: "Terminada em 1898, desenhada por um padre francês com tijolos feitos à mão por artesãos coreanos. Foi construída no lugar da casa onde se reuniu a primeira comunidade católica coreana, em 1784. Nos anos 70 e 80 deu abrigo a estudantes e operários contra a ditadura: em 1987 esteve no centro dos protestos que trouxeram a democracia.",
        factos: [
          "Na cripta guardam-se relíquias de mártires católicos das perseguições do séc. XIX.",
          "O catolicismo chegou à Coreia sem missionários: foram estudiosos coreanos que o descobriram em livros trazidos da China."
        ]
      },
      {
        nome: "Myeongdong: Olive Young e Adidas",
        tipo: "compras",
        hora: "Fim da tarde",
        linha: "A rua das compras, dos cosméticos e da comida de rua",
        kr: "명동",
        morada: "Seoul Jung-gu Myeong-dong",
        naver: "https://naver.me/FYrqS5Fy",
        maps: "Myeongdong Shopping Street",
        factos: [
          "Olive Young: a cadeia de cosmética coreana (K-beauty). Máscaras de folha, protetores solares, cremes. Há várias lojas na rua.",
          "Com o passaporte, as compras acima de 15 000 ₩ têm o imposto devolvido na hora em muitas lojas («Tax Free»).",
          "A partir das 17h a rua enche-se de bancas: tteokbokki, ovos cozidos dentro de pão (gyeran-ppang), espetadas, morangos com açúcar.",
          "Tem lojas de roupa desportiva de todas as marcas, incluindo uma Adidas grande."
        ],
        dica: "Jantem nas bancas: vão provando um bocadinho de cada uma."
      },
      {
        nome: "Riacho Cheonggyecheon",
        tipo: "natureza",
        hora: "Noite",
        linha: "Um rio que esteve tapado por uma autoestrada",
        kr: "청계천",
        morada: "Seoul Jongno-gu Changsin-dong",
        naver: "https://naver.me/GGGCvcmL",
        maps: "Cheonggyecheon Stream",
        historia: "O riacho atravessava a Seul antiga. Nos anos 50 e 60, cheio de barracas e esgotos, foi tapado com uma estrada e, por cima, uma autoestrada elevada. Em 2003-05 a autoestrada foi demolida e o riacho reaberto: quase 11 km de passeio junto à água, a uns metros abaixo da rua.",
        factos: [
          "A obra foi do presidente da câmara Lee Myung-bak, que depois foi eleito presidente do país.",
          "No início há uma escultura gigante em espiral, «Spring», do artista Claes Oldenburg.",
          "À noite as pontes e as fontes ficam iluminadas.",
          "No verão, os moradores vêm pôr os pés na água."
        ],
        lendas: [
          {
            titulo: "A ponte feita com o túmulo da madrasta",
            texto: "O rei Taejong odiava a madrasta, a rainha Sindeok, que tinha tentado pôr o próprio filho no trono. Depois de ela morrer, mandou tirar o túmulo de dentro da muralha e usar as pedras esculpidas na ponte Gwangtonggyo, para que toda a gente as pisasse.",
            factos: [
              "As pedras ainda lá estão, de lado e de pernas para o ar: procurem as nuvens e figuras esculpidas na base da ponte Gwangtonggyo."
            ]
          }
        ]
      }
    ],
    extras: [
      {
        nome: "Altar Sajikdan",
        tipo: "monumento",
        linha: "O altar dos deuses da terra e dos cereais · gratuito",
        kr: "사직단",
        maps: "Sajikdan Altar Seoul",
        historia: "Construído em 1395, ao mesmo tempo que o Jongmyo. Aqui o rei rezava ao deus da terra (sa) e ao deus dos cereais (jik) pelas boas colheitas. Os dois edifícios, Jongmyo e Sajik, eram os pilares do reino: «jongmyo-sajik» queria dizer «o país».",
        factos: [
          "Fica a 10 minutos do Gyeonghuigung, no parque Sajik."
        ]
      },
      {
        nome: "Muralha de Seul",
        tipo: "natureza",
        linha: "18 km de muralha a ligar as quatro montanhas",
        kr: "한양도성",
        maps: "Seoul City Wall Namsan",
        historia: "Construída em 1396 por cerca de 200 000 homens em menos de 100 dias. Seguia o cume das quatro montanhas à volta da cidade. Ainda existem cerca de 13 km e dá para fazer o caminho todo a pé.",
        factos: [
          "Nalgumas pedras ainda se vêem os nomes das terras de onde vieram os trabalhadores, para saber quem reparava o quê se caísse.",
          "No Namsan a muralha acompanha o caminho a pé até à torre."
        ]
      },
      R.pyongyangMyeonok
    ]
  },
  {
    id: "3jun",
    data: "2026-06-03",
    curto: "Qua 3",
    titulo: "Quarta, 3 de junho",
    resumo: "Gangnam e o rio Han: COEX, a biblioteca gigante, um templo antigo e a fonte da ponte.",
    aviso: "Hoje há eleições locais na Coreia e é feriado nacional. Lojas e centros comerciais abertos, mas mais gente na rua.",
    locais: [
      {
        nome: "Rua da estação de Gangnam",
        tipo: "bairro",
        hora: "Manhã",
        linha: "O coração da Seul moderna",
        kr: "강남역",
        morada: "Seoul Gangnam-gu Yeoksam-dong",
        naver: "https://naver.me/Gy33qkRw",
        maps: "Gangnam Station Seoul",
        historia: "Gangnam quer dizer «a sul do rio». Até aos anos 70 eram campos de arroz e pomares. O governo decidiu fazer aqui uma nova cidade, para aliviar o centro antigo e afastar a população do alcance da artilharia norte-coreana. Em 40 anos tornou-se a zona mais rica do país.",
        factos: [
          "A canção «Gangnam Style» de PSY (2012) gozava com o estilo de vida das pessoas daqui. Foi o primeiro vídeo do YouTube a chegar a mil milhões de visualizações.",
          "As sedes de muitas empresas, as academias de explicações e as clínicas de cirurgia plástica estão nesta zona.",
          "A estação de Gangnam é uma das mais movimentadas do metro."
        ]
      },
      {
        nome: "COEX",
        tipo: "compras",
        linha: "Centro comercial subterrâneo e o ecrã da onda",
        kr: "코엑스",
        morada: "Seoul Gangnam-gu Samseong-dong 159",
        naver: "https://naver.me/GFssc94L",
        maps: "COEX Mall Seoul",
        factos: [
          "É um dos maiores centros comerciais subterrâneos da Ásia, com aquário, cinema e centro de congressos.",
          "À porta, na esquina com a avenida, fica o ecrã gigante K-POP Square, onde em 2020 apareceu uma onda em 3D que parecia sair do ecrã e deu a volta ao mundo.",
          "Junto à entrada há uma estátua de duas mãos a fazer a dança do «Gangnam Style»."
        ]
      },
      {
        nome: "Biblioteca Starfield",
        tipo: "monumento",
        linha: "Estantes de 13 metros dentro do COEX",
        kr: "별마당도서관",
        morada: "Seoul Gangnam-gu Samseong-dong 159",
        naver: "https://naver.me/FTddKbTi",
        maps: "Starfield Library COEX",
        factos: [
          "Abriu a 31 de maio de 2017 (faz 9 anos no domingo em que vocês chegam).",
          "Tem cerca de 50 000 livros e revistas, em estantes de dois andares que chegam aos 13 m.",
          "Entrada livre: qualquer pessoa se pode sentar a ler.",
          "Os livros lá em cima são, em parte, de decoração."
        ],
        dica: "A melhor fotografia é do andar de cima, a olhar para baixo."
      },
      {
        nome: "Templo Bongeunsa",
        tipo: "templo",
        linha: "Um templo do ano 794 no meio dos arranha-céus",
        kr: "봉은사",
        morada: "Seoul Gangnam-gu Samseong-dong 73",
        naver: "https://naver.me/G5kkcTg0",
        maps: "Bongeunsa Temple",
        historia: "Fundado em 794, no reino de Silla. No séc. XVI, quando o budismo era perseguido, a rainha Munjeong protegeu-o e fê-lo sede do budismo zen (Seon). Aqui fizeram exame grandes monges, como Seosan e Samyeong, que depois lideraram exércitos de monges contra a invasão japonesa de 1592.",
        factos: [
          "A estátua do Buda Mireuk (o Buda do futuro), de pé, tem 23 m de altura.",
          "Na sala Panjeon guardam-se mais de 3 000 placas de madeira para imprimir sutras.",
          "A placa da sala Panjeon foi escrita pelo calígrafo Kim Jeong-hui três dias antes de morrer, em 1856.",
          "Tem programa de templestay para passar uma noite com os monges."
        ],
        dica: "Entrada gratuita. Fica do outro lado da rua do COEX."
      },
      {
        nome: "Sinsa-dong Garosu-gil",
        tipo: "bairro",
        hora: "Almoço",
        linha: "A rua das árvores, com lojas e cafés",
        kr: "가로수길",
        morada: "Seoul Gangnam-gu Sinsa-dong",
        naver: "https://naver.me/GdTTQBGv",
        maps: "Garosu-gil Sinsa",
        factos: [
          "«Garosu-gil» quer dizer «rua das árvores»: é ladeada de ginkgos.",
          "A primeira Apple Store da Coreia abriu aqui em 2018.",
          "As ruas paralelas (Seroosu-gil) têm restaurantes mais baratos e cafés mais calmos."
        ],
        dica: "Almoço sugerido: Gimbuksun Keunnambijip, está nos extras."
      },
      {
        nome: "Fonte Arco-Íris da Ponte Banpo",
        tipo: "vista",
        hora: "Tarde/noite",
        linha: "Uma ponte que é uma fonte com luzes",
        kr: "반포대교 달빛무지개분수",
        morada: "Seoul Seocho-gu Banpo-dong 649-1",
        naver: "https://naver.me/5nhh0Hlh",
        maps: "Banpo Bridge Moonlight Rainbow Fountain",
        historia: "Desde 2009 a ponte Banpo deita jatos de água para o rio a partir dos dois lados, com luzes coloridas e música. Está no Guinness como a fonte de ponte mais comprida do mundo: 1 140 m.",
        factos: [
          "Por baixo da Banpo há outra ponte, a Jamsu, quase ao nível da água. Nas chuvas fortes fica submersa (é feita para isso).",
          "Ao lado ficam as Some Sevit, três ilhas flutuantes com restaurantes e luzes.",
          "Há espetáculos ao meio-dia e ao anoitecer (por volta das 19:30-21:00), de abril a outubro. Não há com chuva ou vento forte."
        ],
        dica: "Confirmem os horários do dia. Vejam do parque Banpo Hangang, na margem sul."
      },
      {
        nome: "Parque Yeouido Hangang",
        tipo: "natureza",
        linha: "Frango frito e cerveja à beira do rio Han",
        kr: "여의도한강공원",
        morada: "Seoul Yeongdeungpo-gu Yeouido-dong 8",
        naver: "https://naver.me/G3vvBxj5",
        maps: "Yeouido Hangang Park",
        historia: "Yeouido é uma ilha no rio Han. Foi aqui o primeiro aeródromo da Coreia, de 1916 a 1971. Hoje tem o Parlamento, a bolsa, os bancos e o 63 Building, que foi o prédio mais alto da Ásia quando abriu, em 1985.",
        factos: [
          "Chimaek: frango frito (chikin) com cerveja (maekju). É o programa de verão no rio. Pode-se pedir entrega ao parque.",
          "Ramyeon do rio Han: nas lojas de conveniência do parque há máquinas que cozinham o ramyeon na hora.",
          "Há bicicletas públicas (Ttareungyi) e barcos de passeio no rio.",
          "Em abril é o sítio das cerejeiras em Seul."
        ],
        lendas: [
          {
            titulo: "«Fica tu com ela»",
            texto: "Yeouido escreve-se com caracteres chineses que querem dizer «tu» e «ilha». Conta-se que era uma ilha de areia, sempre inundada e sem préstimo, onde só se criavam ovelhas. Quando alguém perguntava de quem era, a resposta era: «Essa? Fica tu com ela!»",
            factos: [
              "Hoje o metro quadrado em Yeouido é dos mais caros do país."
            ]
          }
        ],
        dica: "Se quiserem ver a fonte, invertam: Yeouido à tarde e Banpo ao anoitecer."
      }
    ],
    extras: [
      R.gimbuksun,
      {
        nome: "Samsung d'light",
        tipo: "museu",
        linha: "O espaço de exposição da Samsung em Gangnam",
        kr: "삼성 딜라이트",
        maps: "Samsung d'light Seoul",
        factos: [
          "A Samsung começou em 1938 a vender peixe seco e massas em Daegu.",
          "Hoje o grupo vale cerca de um quinto das exportações da Coreia.",
          "«Samsung» quer dizer «três estrelas»."
        ],
        dica: "Confirmem antes se está aberto: o espaço tem mudado de formato."
      },
      {
        nome: "Lotte World Tower",
        tipo: "vista",
        linha: "O prédio mais alto da Coreia (555 m)",
        kr: "롯데월드타워",
        maps: "Lotte World Tower",
        factos: [
          "Abriu em 2017, com 123 andares. É um dos mais altos do mundo.",
          "O miradouro Seoul Sky tem um chão de vidro no 118.º andar.",
          "Fica em Jamsil, a 15 min de metro do COEX, junto ao lago Seokchon e ao parque de diversões Lotte World."
        ]
      }
    ]
  },
  {
    id: "4jun",
    data: "2026-06-04",
    curto: "Qui 4",
    titulo: "Quinta, 4 de junho",
    resumo: "As universidades: Hongdae, o parque da linha de comboio, Sinchon e Ewha.",
    locais: [
      {
        nome: "Universidade Hongik",
        tipo: "monumento",
        hora: "Manhã",
        linha: "A escola de artes que deu nome ao bairro",
        kr: "홍익대학교",
        morada: "Seoul Mapo-gu Sangsu-dong 72-1",
        naver: "https://naver.me/GxrryFmQ",
        maps: "Hongik University Seoul",
        historia: "Fundada em 1946, é a universidade de belas-artes e design mais famosa da Coreia. «Hongik» vem do lema do mito de Dangun: «beneficiar amplamente a humanidade». Por causa dos estudantes de arte, nos anos 90 a zona encheu-se de ateliers, bares e salas de música indie.",
        factos: [
          "«Hongdae» é a abreviatura de Hongik Daehakgyo (universidade).",
          "O muro à volta da universidade tem grafitis e murais.",
          "Os cafés à volta estão cheios de estudantes a trabalhar no portátil."
        ]
      },
      {
        nome: "Rua de Hongdae",
        tipo: "bairro",
        linha: "Música na rua, lojas e photo booths · estação Hongik University (홍대입구역)",
        kr: "홍대거리",
        maps: "Hongdae Walking Street",
        factos: [
          "Na rua principal (Eoullimmadang-ro) há bandas e grupos de dança K-pop a atuar ao ar livre, sobretudo ao fim da tarde.",
          "Photo booths («life4cuts»): cabines de fotografias com adereços, em todas as esquinas. É um ritual dos jovens coreanos.",
          "Lojas de roupa barata, de K-pop e de bonecos (as máquinas de garras são uma febre).",
          "À noite é a zona de clubes e bares mais animada de Seul."
        ],
        dica: "Voltem ao fim da tarde para ver os buskers."
      },
      {
        nome: "Parque Gyeongui Line Forest",
        tipo: "natureza",
        linha: "Um parque comprido onde passava o comboio",
        kr: "경의선숲길",
        morada: "Seoul Mapo-gu Yeonnam-dong",
        naver: "https://naver.me/xcggOp70",
        maps: "Gyeongui Line Forest Park Yeonnam",
        historia: "A linha Gyeongui ligava Seul a Sinuiju, na fronteira com a China, desde 1906. Com a divisão do país passou a acabar no Sul. Quando a linha foi posta debaixo de terra, a superfície virou um parque de 6 km com relva, árvores e alguns carris antigos.",
        factos: [
          "A parte de Yeonnam-dong tem a alcunha de «Yeontral Park», a brincar com o Central Park.",
          "As ruas à volta, em Yeonnam-dong, estão cheias de cafés e restaurantes pequenos.",
          "A mesma linha Gyeongui é a que chega à estação de Dorasan, na DMZ (9 de junho)."
        ]
      },
      {
        nome: "Sinchon",
        tipo: "bairro",
        linha: "O bairro estudantil da Universidade Yonsei · estação Sinchon (linha 2)",
        kr: "신촌역",
        morada: "89 Sinchon-ro Seodaemun-gu Seoul",
        naver: "https://naver.me/FJib9jjC",
        maps: "Sinchon Station Seoul",
        factos: [
          "«Sinchon» quer dizer «aldeia nova».",
          "É a zona de três grandes universidades: Yonsei, Ewha e Sogang.",
          "Ruas cheias de restaurantes baratos de samgyeopsal (barriga de porco grelhada), bares de soju e karaokes (noraebang)."
        ]
      },
      {
        nome: "Universidade Feminina Ewha",
        tipo: "monumento",
        linha: "A maior universidade de mulheres do mundo",
        kr: "이화여자대학교",
        morada: "Seoul Seodaemun-gu Daehyeon-dong",
        naver: "https://naver.me/xeFFLbjZ",
        maps: "Ewha Womans University ECC",
        historia: "Fundada em 1886 pela missionária americana Mary Scranton, começou com uma única aluna. Foi a primeira escola para raparigas da Coreia. O rei Gojong deu-lhe o nome: Ewha quer dizer «flor de pereira».",
        factos: [
          "O ECC (2008), do arquiteto Dominique Perrault, é um «vale» de vidro enterrado no chão, com escadas largas ao meio. Parece que o campus se abriu ao meio.",
          "Os edifícios antigos são de pedra, em estilo gótico.",
          "Com mais de 20 000 alunas, é a maior universidade feminina do mundo.",
          "A rua comercial à frente («Edae») tem lojas de roupa e acessórios baratos."
        ],
        dica: "Os visitantes podem entrar no campus, mas não nos edifícios das aulas. Falem baixo."
      }
    ],
    extras: [
      {
        nome: "Universidade Yonsei",
        tipo: "monumento",
        linha: "Campus histórico, a 10 min de Sinchon",
        kr: "연세대학교",
        maps: "Yonsei University Underwood Hall",
        historia: "Nasceu de um hospital fundado em 1885 por um médico missionário americano e de uma escola criada pelo missionário Underwood. O Underwood Hall, de pedra e hera, parece Oxford.",
        factos: [
          "Yonsei e Korea University têm uma rivalidade enorme, com um festival desportivo anual (Yon-Ko jeon)."
        ]
      },
      {
        nome: "Mercado de Mangwon",
        tipo: "mercado",
        linha: "Mercado de bairro com comida barata",
        kr: "망원시장",
        maps: "Mangwon Market Seoul",
        factos: [
          "Croquetes, frango frito, tteokbokki e kalguksu a preços de bairro.",
          "Fica a 15 min a pé de Hongdae e perto do parque Mangwon Hangang, à beira-rio."
        ]
      }
    ]
  },
  {
    id: "5jun",
    data: "2026-06-05",
    curto: "Sex 5",
    titulo: "Sexta, 5 de junho",
    resumo: "Yongsan: o grande museu, a guerra, o mercado de peixe e Itaewon.",
    locais: [
      {
        nome: "Museu Nacional da Coreia",
        tipo: "museu",
        hora: "Manhã",
        linha: "5 000 anos de história · gratuito",
        kr: "국립중앙박물관",
        morada: "Seoul Yongsan-gu 6(yuk)-ga 168-6",
        naver: "https://naver.me/55113lTf",
        maps: "National Museum of Korea",
        historia: "Abriu neste edifício em 2005 e é um dos maiores museus do mundo. Começa na pré-história e vai até à dinastia Joseon, com ouro de Silla, cerâmica celadon de Goryeo e pintura. A coleção permanente é gratuita.",
        factos: [
          "«Sala da Contemplação» (사유의 방): dois Bodhisattvas pensativos de bronze dourado, dos séc. VI e VII, numa sala escura e minimalista. É a peça mais famosa do museu.",
          "Dentro do átrio ergue-se um pagode de mármore com 13,5 m, do templo Gyeongcheonsa (1348). Foi levado para o Japão em 1907 e devolvido em 1918.",
          "As coroas de ouro de Silla têm formas de árvores e chifres de veado, de influência siberiana.",
          "Em 2025 o museu bateu recordes de visitantes, em parte por causa do filme «KPop Demon Hunters»: a loja esgotou produtos inspirados no tigre e na pega das pinturas tradicionais.",
          "Aberto todos os dias; à quarta e ao sábado até às 21h."
        ],
        lendas: [
          {
            titulo: "O tigre e a pega",
            texto: "Nas pinturas populares (jakhodo), um tigre de olhos esbugalhados está sentado debaixo de um pinheiro, e uma pega pousada no ramo fala com ele. O tigre representava os nobres arrogantes e a pega o povo, que troçava deles. Ao mesmo tempo, o tigre afastava os maus espíritos e a pega trazia boas notícias: punham-se em casa no Ano Novo.",
            factos: [
              "O tigre da pintura tem sempre um ar mais pateta do que assustador. É o modelo do tigre do «KPop Demon Hunters».",
              "Os contos coreanos começam muitas vezes com: «Há muito, muito tempo, quando os tigres fumavam...»"
            ]
          }
        ],
        dica: "Precisam de 2 a 3 horas. Se o tempo for curto: Sala da Contemplação, pagode, sala de Silla e cerâmica celadon. Do lago à entrada vê-se a N Seoul Tower emoldurada pelo edifício."
      },
      {
        nome: "Memorial da Guerra da Coreia",
        tipo: "museu",
        linha: "A guerra que nunca acabou · gratuito",
        kr: "전쟁기념관",
        morada: "Seoul Yongsan-gu 1(il)-ga 8",
        naver: "https://naver.me/5MvvaEdP",
        maps: "War Memorial of Korea",
        historia: "Abriu em 1994 no lugar do antigo quartel-general do exército. Conta as guerras da Coreia, sobretudo a de 1950-53: a Coreia do Norte invadiu o Sul a 25 de junho de 1950, chegou quase a Busan e foi travada por tropas da ONU. Em 1953 assinou-se um armistício, mas nunca um tratado de paz: oficialmente, as duas Coreias ainda estão em guerra.",
        factos: [
          "Lá fora há dezenas de tanques, aviões e navios, incluindo um bombardeiro B-52.",
          "Morreram cerca de 3 milhões de pessoas na guerra, a maioria civis.",
          "16 países mandaram tropas de combate, e outros mandaram ajuda médica.",
          "Nas galerias estão os nomes de todos os soldados mortos, coreanos e estrangeiros.",
          "Fecha às segundas."
        ],
        lendas: [
          {
            titulo: "A estátua dos irmãos",
            texto: "À entrada, uma escultura enorme mostra dois soldados a abraçarem-se: um oficial do Sul e um soldado do Norte. É baseada numa história verdadeira: dois irmãos, separados pela guerra, encontraram-se frente a frente num campo de batalha em 1950.",
            factos: [
              "A base rachada da estátua representa a divisão da península."
            ]
          }
        ]
      },
      {
        nome: "Mercado de Eletrónica de Yongsan",
        tipo: "compras",
        linha: "O antigo paraíso dos computadores",
        kr: "용산전자상가",
        morada: "Seoul Yongsan-gu 2(i)-ga 14-1",
        naver: "https://naver.me/GEddpSTQ",
        maps: "Yongsan Electronics Market",
        factos: [
          "Nos anos 80 e 90 era aqui que se comprava qualquer computador, peça ou jogo de vídeo.",
          "Hoje muitas lojas estão fechadas por causa das compras online, mas ainda há lojas de peças, consolas e câmaras.",
          "Os vendedores tinham tão má fama que se criou a palavra «Yongpali» para quem engana os clientes.",
          "Ao lado fica o I'Park Mall, com o cinema CGV (ver extras)."
        ],
        dica: "O edifício de informações no início do mercado tem um mapa."
      },
      {
        nome: "Mercado de Peixe de Noryangjin",
        tipo: "mercado",
        hora: "Almoço",
        linha: "Escolher o peixe vivo e comê-lo lá em cima",
        kr: "노량진수산시장",
        morada: "Seoul Dongjak-gu Noryangjin-dong 334 · Cheongyang Susan Hoetjip",
        naver: "https://naver.me/5NeelmKe",
        maps: "Noryangjin Fisheries Wholesale Market",
        historia: "O mercado nasceu em 1927 junto à estação de Seul e mudou-se para Noryangjin em 1971. Em 2016 passou para um edifício novo. Cá em baixo, centenas de bancas com aquários de peixe, polvo, caranguejo e marisco vivos.",
        factos: [
          "Como funciona: escolhe-se o peixe numa banca, pesa-se e paga-se. A banca corta-o e leva-o a um restaurante lá em cima, que cobra uma taxa por pessoa (sangcharim) e cozinha o resto em sopa (maeuntang).",
          "Hoe: peixe cru às fatias. Come-se embrulhado em alface com alho, malagueta e molho.",
          "Sannakji: polvo pequeno cortado vivo, que ainda se mexe no prato. Mastiguem bem: as ventosas agarram-se.",
          "Os leilões são de madrugada, por volta das 2h-3h."
        ],
        dica: "Perguntem o preço por quilo e vejam a balança. Fica a 10 min de metro do museu (estação Noryangjin, linhas 1 e 9)."
      },
      {
        nome: "Itaewon",
        tipo: "bairro",
        hora: "Tarde",
        linha: "O bairro internacional de Seul",
        kr: "이태원",
        morada: "Seoul Yongsan-gu Itaewon-dong",
        naver: "https://naver.me/FYrrK5KO",
        maps: "Itaewon Seoul",
        historia: "No tempo de Joseon havia aqui uma estalagem para viajantes, à saída da cidade. A partir de 1945 o exército americano instalou-se na base de Yongsan, ao lado, e Itaewon tornou-se a zona dos estrangeiros: bares, alfaiates, restaurantes de todo o mundo. A base saiu em 2018.",
        factos: [
          "A Mesquita Central de Seul (1976) fica no alto do bairro, com uma rua de restaurantes halal.",
          "O bairro ficou famoso pela série «Itaewon Class» (2020).",
          "Na ruela ao lado do Hotel Hamilton há um memorial às 159 vítimas da tragédia do Halloween de 2022, quando a multidão ficou esmagada no beco."
        ]
      },
      {
        nome: "Rua dos Móveis Antigos de Itaewon",
        tipo: "compras",
        linha: "Arcas e cómodas coreanas e ocidentais",
        kr: "이태원 앤틱가구거리",
        morada: "Seoul Yongsan-gu Itaewon-dong 96-34",
        naver: "https://naver.me/5reevai8",
        maps: "Itaewon Antique Furniture Street",
        factos: [
          "Começou nos anos 60, quando os militares americanos e diplomatas vendiam os móveis ao ir embora.",
          "Hoje há lojas de antiguidades europeias e de móveis coreanos, como as arcas com ferragens de latão (bandaji)."
        ]
      },
      {
        nome: "Rua dos Cafés de Hannam-dong",
        tipo: "cafe",
        hora: "Fim da tarde",
        linha: "O bairro mais elegante de Seul",
        kr: "한남동 카페거리",
        morada: "Seoul Yongsan-gu Hannam-dong 683-30",
        naver: "https://naver.me/xbKKlaDw",
        maps: "Hannam-dong Seoul cafe",
        factos: [
          "Lojas de designers coreanos, galerias e cafés de arquitetura cuidada.",
          "Muitas das famílias mais ricas do país vivem aqui, incluindo a do dono da Samsung.",
          "O Museu Leeum fica a 10 minutos (ver extras)."
        ]
      }
    ],
    extras: [
      {
        nome: "Cinema CGV no I'Park Mall de Yongsan",
        tipo: "noite",
        linha: "Um dos maiores ecrãs IMAX do mundo",
        kr: "CGV 용산아이파크몰",
        maps: "CGV Yongsan I'Park Mall",
        factos: [
          "A sala IMAX tem um dos maiores ecrãs do mundo.",
          "Também tem salas 4DX (cadeiras que mexem, vento, água) e ScreenX (imagem nas paredes laterais).",
          "Os filmes estrangeiros passam na língua original com legendas em coreano.",
          "Fica por cima da estação de Yongsan, ao lado do mercado de eletrónica."
        ],
        dica: "Comprem os bilhetes com antecedência na app ou no site da CGV e escolham os lugares do meio."
      },
      {
        nome: "Museu Leeum",
        tipo: "museu",
        linha: "O museu de arte da família Samsung",
        kr: "리움미술관",
        maps: "Leeum Museum of Art",
        factos: [
          "Três edifícios de três arquitetos: Mario Botta, Jean Nouvel e Rem Koolhaas (2004).",
          "Mistura arte coreana antiga (celadon, pintura) com arte contemporânea (Rothko, Koons, Kapoor).",
          "A coleção permanente costuma ser gratuita, mas é preciso marcar."
        ]
      },
      R.hanbangChicken
    ]
  },
  {
    id: "6jun",
    data: "2026-06-06",
    curto: "Sáb 6",
    titulo: "Sábado, 6 de junho · Busan",
    resumo: "Comboio para Busan, praia de Haeundae à tarde e espetáculo de drones em Gwangalli à noite.",
    aviso: "6 de junho é o Dia da Memória (feriado). Às 10h tocam as sirenes no país inteiro e as pessoas param um minuto em silêncio pelos mortos das guerras.",
    locais: [
      {
        nome: "Comboio para Busan",
        tipo: "comboio",
        hora: "13:14",
        linha: "Chegada a Busan",
        kr: "부산역",
        maps: "Busan Station",
        factos: [
          "O KTX, o comboio de alta velocidade, faz Seul-Busan em cerca de 2h30, a até 300 km/h.",
          "Há cacifos na estação de Busan para as malas, se o hotel ainda não deixar fazer check-in.",
          "Busan é a segunda cidade da Coreia (3,3 milhões) e o maior porto do país.",
          "Na Guerra da Coreia foi a capital provisória: o Norte nunca a conquistou e chegaram aqui centenas de milhares de refugiados. Muito do que vão ver amanhã nasceu dessa época.",
          "Os de Busan falam com um sotaque forte e têm fama de diretos e calorosos."
        ],
        dica: "Comprem um gimbap ou uma caixa de comida (dosirak) na estação para o caminho. O filme «Train to Busan» (2016) passa-se precisamente neste comboio... com zombies."
      },
      {
        nome: "Praia de Haeundae",
        tipo: "natureza",
        hora: "Tarde",
        linha: "A praia mais famosa da Coreia",
        kr: "해운대해수욕장",
        maps: "Haeundae Beach",
        historia: "Um areal de 1,5 km cercado de arranha-céus, com a ilha de Dongbaekseom numa ponta e o porto de Mipo na outra. No verão chega a ter um milhão de pessoas num só dia, com milhares de guarda-sóis alinhados.",
        factos: [
          "A época balnear abre no início de junho, com nadadores-salvadores.",
          "O LCT (411 m), ao lado da praia, é o segundo prédio mais alto da Coreia. O miradouro chama-se Busan X the Sky.",
          "Na ponta de Mipo começa a Blueline Park: um comboio de praia e cápsulas coloridas suspensas que andam por cima do mar (ver extras).",
          "O mercado de Haeundae, a uma rua da praia, tem bancas de peixe frito, eomuk e tteokbokki."
        ],
        lendas: [
          {
            titulo: "O sábio das nuvens do mar",
            texto: "No séc. IX, o sábio Choe Chi-won foi estudar para a China com 12 anos e tornou-se famoso lá. Ao voltar, desiludido com a corrupção do reino de Silla, retirou-se para viajar pelo país. Encantado com esta praia, gravou numa rocha o seu nome de poeta: Haeun, «nuvem do mar». A praia ficou Haeundae, «o terraço de Haeun».",
            factos: [
              "A rocha com a inscrição ainda existe, na ilha de Dongbaekseom."
            ]
          }
        ]
      },
      {
        nome: "Praia de Gwangalli e espetáculo de drones",
        tipo: "noite",
        hora: "20h / 22h",
        linha: "Centenas de drones por cima da ponte iluminada",
        kr: "광안리해수욕장",
        maps: "Gwangalli Beach",
        historia: "A praia fica de frente para a ponte Gwangan (2002), de 7,4 km, que à noite se ilumina com milhares de luzes LED. Todos os sábados à noite, centenas de drones desenham figuras e mensagens no céu por cima da água.",
        factos: [
          "Os drones voam normalmente às 20h e às 22h, cerca de 10-15 minutos cada sessão. Não há com chuva ou vento forte.",
          "A ponte chama-se também Diamond Bridge, por causa das luzes.",
          "A marginal está cheia de bares, cafés com esplanada e restaurantes de peixe.",
          "O centro de peixe cru de Millak, na ponta norte da praia, é ótimo para jantar com vista."
        ],
        dica: "Fiquem no meio da praia, de frente para a ponte. Cheguem uns 20 minutos antes para arranjar lugar na areia."
      }
    ],
    extras: [
      {
        nome: "Ilha de Dongbaekseom e Nurimaru",
        tipo: "natureza",
        linha: "Passeio entre pinheiros e rochas, na ponta de Haeundae",
        kr: "동백섬",
        maps: "Dongbaekseom Island Busan",
        factos: [
          "Já não é ilha: está ligada a terra por areia. O caminho à volta leva cerca de 30 min.",
          "«Dongbaek» quer dizer camélia: florescem no inverno.",
          "Nurimaru APEC House: o edifício em forma de pavilhão tradicional onde se reuniu a cimeira da APEC em 2005.",
          "Do caminho vê-se a ponte Gwangan e o mar aberto."
        ],
        lendas: [
          {
            titulo: "A princesa sereia Hwang-ok",
            texto: "Hwang-ok era uma princesa do reino submarino de Naranda que casou com o rei de uma terra do outro lado do mar. Com saudades de casa, nas noites de lua cheia sentava-se numa rocha e olhava para uma conta de jade mágica, onde conseguia ver a sua terra.",
            factos: [
              "A estátua dela, com a conta de jade na mão, está numa rocha do caminho à volta da ilha."
            ]
          }
        ]
      },
      {
        nome: "Haeundae Blueline Park",
        tipo: "vista",
        linha: "Cápsulas suspensas e comboio à beira-mar",
        kr: "해운대 블루라인파크",
        maps: "Haeundae Blueline Park Mipo",
        factos: [
          "Usa uma antiga linha de comboio que ia junto à costa, de Mipo a Songjeong (4,8 km).",
          "Sky Capsule: cabines para 2-4 pessoas, a uns metros do chão, sobre a linha. Vão devagar e com vista para o mar.",
          "Beach Train: o comboio de praia faz o percurso todo, com janelas viradas para o mar."
        ],
        dica: "As cápsulas esgotam: reservem online com antecedência."
      },
      {
        nome: "O que comer em Busan",
        tipo: "comida",
        linha: "Pratos que nasceram aqui",
        semMapa: true,
        factos: [
          "Dwaeji gukbap: sopa de porco com arroz, leitosa e reconfortante. O prato de Busan.",
          "Milmyeon: noodles frios de trigo, inventados por refugiados do Norte (ver Hwanghae Noodles no domingo).",
          "Eomuk: pasta de peixe em espetadas ou fritos. Busan é a capital do eomuk; a casa Samjin existe desde 1953.",
          "Ssiat hotteok: panqueca frita aberta e recheada de sementes de girassol e abóbora. A de BIFF Square é a mais famosa.",
          "Hoe: peixe cru, aqui mais barato e mais fresco do que em Seul."
        ]
      }
    ]
  },
  {
    id: "7jun",
    data: "2026-06-07",
    curto: "Dom 7",
    titulo: "Domingo, 7 de junho · Busan",
    resumo: "Templo à beira-mar, a aldeia colorida, os mercados do porto e comboio de volta às 20:11.",
    aviso: "Sugestão de ordem: o templo Haedong Yonggungsa fica a nordeste (perto de Haeundae); Gamcheon, Jagalchi e Gukje ficam a oeste, perto da estação de Busan. Façam o templo cedo e acabem perto da estação.",
    locais: [
      {
        nome: "Templo Haedong Yonggungsa",
        tipo: "templo",
        hora: "Manhã",
        linha: "Um templo budista em cima das rochas do mar",
        kr: "해동용궁사",
        maps: "Haedong Yonggungsa Temple",
        historia: "Quase todos os templos coreanos estão nas montanhas; este está à beira-mar. Foi fundado em 1376 pelo monge Naong, mestre do rei de Goryeo. Destruído na invasão japonesa de 1592, foi reconstruído nos anos 30 do séc. XX.",
        factos: [
          "Para chegar ao templo descem-se 108 degraus, o número dos desejos e sofrimentos humanos no budismo.",
          "À entrada estão as 12 estátuas dos animais do zodíaco chinês: procurem o vosso.",
          "No alto, a grande estátua branca de Gwaneum (a deusa da compaixão) olha para o mar.",
          "Ao nascer do sol, a luz bate de frente no templo. Muitos coreanos vêm aqui no 1.º dia do ano."
        ],
        lendas: [
          {
            titulo: "O sonho do monge Naong",
            texto: "Houve uma seca terrível no reino e o povo passava fome. O monge Naong sonhou com o deus do mar, que lhe disse para construir um templo na ponta da costa, onde as pessoas pudessem rezar, e assim o país voltaria a ter paz e boas colheitas. O nome Yonggungsa quer dizer «templo do palácio do Rei Dragão».",
            factos: [
              "O Rei Dragão do Mar (Yongwang) é uma figura antiga das crenças coreanas, anterior ao budismo, que protegia os pescadores."
            ]
          }
        ],
        dica: "Vão cedo: ao fim da manhã enche-se. De metro, estação Osiria (linha Donghae) e depois 20 min a pé; ou táxi a partir de Haeundae."
      },
      {
        nome: "Aldeia Cultural de Gamcheon",
        tipo: "bairro",
        linha: "As casas coloridas na encosta",
        kr: "감천문화마을",
        maps: "Gamcheon Culture Village",
        historia: "Nos anos 50, durante a guerra, os refugiados e os seguidores de uma pequena religião coreana (Taegeukdo) construíram barracas nesta encosta. As casas foram crescendo umas por cima das outras, todas viradas para o mar. Em 2009 um projeto de arte chamou artistas para pintar murais e fazer esculturas, e as casas foram pintadas de cores vivas.",
        factos: [
          "Chamam-lhe o «Machu Picchu de Busan» ou a «Santorini da Coreia».",
          "A estátua do Principezinho e da Raposa, sentados num muro a olhar para a aldeia, é a fotografia mais famosa.",
          "Há um mapa com carimbos à venda no posto de turismo: vão carimbando os pontos do percurso.",
          "Ainda vivem aqui cerca de 7 000 pessoas."
        ],
        dica: "As casas são de moradores: falem baixo e não entrem nos becos privados. As ruas sobem muito: táxi até ao topo e desçam a pé."
      },
      {
        nome: "Mercado de Peixe de Jagalchi",
        tipo: "mercado",
        hora: "Almoço",
        linha: "O maior mercado de peixe da Coreia",
        kr: "자갈치시장",
        morada: "Busan Jung-gu 4(sa)-ga 37-1",
        naver: "https://naver.me/xsZ8pVoG",
        maps: "Jagalchi Fish Market",
        historia: "«Jagal» quer dizer seixos: o mercado nasceu numa praia de pedras junto ao porto, onde as mulheres dos pescadores vendiam o peixe. Ainda hoje são sobretudo mulheres que vendem, as famosas «ajimae de Jagalchi», com botas de borracha e avental.",
        factos: [
          "O edifício principal (2006) tem a forma de uma gaivota de asas abertas.",
          "Funciona como Noryangjin: escolhe-se o peixe no rés-do-chão e come-se no 2.º andar.",
          "O lema do mercado, em dialeto de Busan: «Oiso, boiso, saiso!» (venham, vejam, comprem!).",
          "Nas bancas de fora há peixe a secar ao sol, polvos, caranguejos gigantes e enguias."
        ],
        dica: "A Nerve Buksang, a do vídeo, fica aqui dentro: ver extras."
      },
      {
        nome: "Mercado Gukje e BIFF Square",
        tipo: "mercado",
        hora: "Tarde",
        linha: "O mercado dos refugiados e a praça do cinema",
        kr: "국제시장",
        morada: "Busan Jung-gu 4(sa)-ga",
        naver: "https://naver.me/G5kJjbJh",
        maps: "Gukje Market Busan",
        historia: "Em 1945, quando os japoneses foram embora, os coreanos começaram a vender aqui o que eles deixaram. Na guerra encheu-se de refugiados, que sobreviviam a vender de tudo, incluindo produtos que saíam das bases americanas. «Gukje» quer dizer «internacional».",
        factos: [
          "O filme «Ode to My Father» (국제시장, 2014) conta a vida de um refugiado que passa 60 anos com uma loja aqui. Foi um dos filmes mais vistos de sempre na Coreia. A loja do filme, «Kkotbuni-ne», existe.",
          "Ao lado, a BIFF Square: a praça onde começou o Festival Internacional de Cinema de Busan, em 1996. No chão estão as marcas das mãos de realizadores e atores.",
          "Na BIFF Square vende-se o ssiat hotteok, a panqueca de sementes.",
          "O Mercado de Kkangtong (latas), ao lado, foi o primeiro mercado noturno da Coreia. O nome vem das latas de comida americanas que se vendiam aqui depois da guerra."
        ],
        dica: "Muitas lojas do Gukje fecham no 1.º e 3.º domingo do mês, e 7 de junho é o primeiro domingo. As bancas de rua e a BIFF Square costumam estar abertas. Confirmem."
      },
      {
        nome: "Comboio de volta para Seul",
        tipo: "comboio",
        hora: "20:11",
        linha: "Estação de Busan → Seul",
        kr: "부산역",
        maps: "Busan Station",
        factos: [
          "A estação de Busan fica a 10 minutos de táxi de Nampo-dong (Jagalchi e Gukje).",
          "Chegam a Seul por volta das 22:30-23h."
        ],
        dica: "Jantem antes: o Baekhwa (tripa grelhada) e o Hwanghae Noodles ficam perto. Comprem eomuk na estação para o caminho."
      }
    ],
    extras: [
      R.nerveBuksang,
      R.baekhwa,
      R.hwanghae,
      R.bupyeongIlbeonji,
      {
        nome: "Parque Yongdusan e Busan Tower",
        tipo: "vista",
        linha: "Vista do porto, a 5 min do Gukje",
        kr: "용두산공원",
        maps: "Yongdusan Park Busan Tower",
        factos: [
          "«Yongdusan» quer dizer «montanha da cabeça do dragão».",
          "Sobe-se por escadas rolantes a partir da rua Gwangbok-ro.",
          "Lá em cima há uma estátua do almirante Yi Sun-sin, a olhar para o mar por onde vinham os japoneses."
        ]
      }
    ]
  },
  {
    id: "8jun",
    data: "2026-06-08",
    curto: "Seg 8",
    titulo: "Segunda, 8 de junho",
    resumo: "Seoul Forest e Seongsu, o bairro das fábricas transformadas em cafés, e o mercado de Gyeongdong.",
    locais: [
      {
        nome: "Seoul Forest",
        tipo: "natureza",
        hora: "Manhã",
        linha: "O grande parque junto ao rio, com veados",
        kr: "서울숲",
        morada: "Seoul Seongdong-gu 1(il)-ga 685-20",
        naver: "https://naver.me/xrzzYTLm",
        maps: "Seoul Forest",
        historia: "Em Joseon, Ttukseom era o campo de caça do rei e o terreno onde passava revista às tropas. Depois foi a primeira estação de tratamento de água da Coreia (1908), um hipódromo e um campo de golfe. Em 2005 transformaram tudo num parque com lagos, bosques e caminhos.",
        factos: [
          "Tem um cercado com veados (sika) que se podem ver de uma ponte de madeira.",
          "Uma ponte pedonal liga o parque à margem do rio Han.",
          "No verão há fontes onde as crianças brincam.",
          "Os edifícios de luxo ao lado são dos mais caros de Seul."
        ]
      },
      {
        nome: "Igreja Católica de Seongsu-dong",
        tipo: "monumento",
        linha: "No caminho do parque para as ruas de cafés",
        kr: "성수동성당",
        morada: "Seoul Seongdong-gu 1(il)-ga 110",
        naver: "https://naver.me/FtooQj6T",
        maps: "Seongsu-dong Catholic Church",
        factos: [
          "Cerca de 11% dos coreanos são católicos e quase 20% protestantes. À noite vêem-se cruzes vermelhas de néon por toda a cidade."
        ]
      },
      {
        nome: "Seongsu-dong",
        tipo: "bairro",
        linha: "O «Brooklyn de Seul»",
        kr: "성수동",
        maps: "Seongsu-dong Seoul",
        historia: "Desde os anos 60 era um bairro de fábricas, armazéns e oficinas de sapatos feitos à mão: cerca de 70% dos sapatos de Seul eram feitos aqui. Nos últimos 10 anos as fábricas viraram cafés, galerias e lojas pop-up de marcas, mas muitas oficinas continuam a trabalhar ao lado.",
        factos: [
          "É a capital das lojas pop-up: marcas de todo o mundo abrem aqui lojas temporárias, com filas à porta.",
          "Ainda há uma rua de sapatarias artesanais junto à estação Seongsu.",
          "Daelim Changgo: um antigo armazém de arroz transformado em galeria e café.",
          "A Dior abriu aqui uma loja-conceito com um edifício que parece um castelo de cartão."
        ]
      },
      {
        nome: "Café Onion Seongsu (e procurar o Bot Bot Bot)",
        tipo: "cafe",
        linha: "Um café dentro de um edifício abandonado",
        kr: "어니언 성수",
        morada: "Seoul Seongdong-gu 2(i)-ga 277-135",
        naver: "https://naver.me/FnssquNc",
        maps: "Onion Seongsu",
        historia: "Abriu em 2016 num edifício dos anos 70 que já foi supermercado, restaurante, casa e fábrica. Deixaram as paredes descascadas e os tijolos à vista. Foi dos primeiros cafés a transformar o bairro.",
        factos: [
          "O pandoro, um bolo coberto de uma montanha de açúcar em pó, é a especialidade.",
          "Tem mesas no pátio interior.",
          "Perto há outros cafés que valem a pena: tentem encontrar o Bot Bot Bot."
        ],
        dica: "O pequeno-almoço aqui é uma boa ideia: abre cedo."
      },
      {
        nome: "Mercado de Gyeongdong",
        tipo: "mercado",
        hora: "Almoço",
        linha: "O mercado do ginseng e das ervas medicinais",
        kr: "경동시장",
        morada: "Seoul Dongdaemun-gu Jegi-dong 1019",
        naver: "https://naver.me/GnttZSqX",
        maps: "Gyeongdong Market Seoul",
        historia: "Aberto em 1960, é o maior mercado de ervas medicinais da Coreia (Seoul Yangnyeongsi): ginseng, raízes, cogumelos, cascas, chifre de veado. Tem também fruta, legumes, peixe e carne, e é onde os seulenses mais velhos vêm fazer compras.",
        factos: [
          "O Starbucks Gyeongdong 1960 fica dentro do antigo cinema do mercado, com o balcão no lugar do ecrã e as filas de cadeiras viradas para baixo.",
          "O cheiro das ervas secas enche as ruas.",
          "Ginseng fresco (susam) e seco (hongsam, o vermelho): é aqui que se compra mais barato.",
          "Almoço: bancas de sopas, kalguksu, panquecas e carne grelhada a preços de mercado."
        ],
        dica: "Estação Jegi-dong (linha 1). Algumas lojas fecham ao domingo, à segunda está tudo aberto."
      }
    ],
    extras: [
      R.inlifhanwoo,
      {
        nome: "Mercado de Carne de Majang",
        tipo: "mercado",
        linha: "O maior mercado de carne da Coreia",
        kr: "마장축산물시장",
        maps: "Majang Livestock Market",
        factos: [
          "Cerca de metade da carne de Seul passa por aqui.",
          "Compra-se a carne nos talhos e leva-se a um restaurante ao lado que a grelha, como no mercado de peixe.",
          "É onde fica o Inlifhanwoo."
        ],
        lendas: [
          {
            titulo: "Vai mais dez li",
            texto: "Quando a nova dinastia Joseon procurava uma capital, o monge Muhak andou por estas terras e achou que tinha encontrado o lugar ideal. Apareceu então um velho a guiar um boi, que lhe disse: «Ainda não é aqui. Vai mais dez li para noroeste.» Muhak seguiu e chegou ao sítio onde se construiu o Gyeongbokgung.",
            factos: [
              "O bairro ao lado de Majang chama-se Wangsimni: «vai dez li».",
              "Um li são cerca de 400 metros."
            ]
          }
        ]
      }
    ]
  },
  {
    id: "9jun",
    data: "2026-06-09",
    curto: "Ter 9",
    titulo: "Terça, 9 de junho · DMZ",
    resumo: "Excursão à zona desmilitarizada: a fronteira mais armada do mundo.",
    aviso: "Levem o passaporte: sem ele não passam os postos militares. Confirmem com a agência a hora e o local de partida, e o que está incluído.",
    locais: [
      {
        nome: "Como funciona a excursão",
        tipo: "dica",
        hora: "Manhã",
        linha: "Só se entra com tour organizado",
        semMapa: true,
        historia: "A DMZ é uma faixa de 4 km de largura (2 km para cada lado da linha de fronteira) e cerca de 250 km de comprimento, que atravessa a península de mar a mar. Foi criada pelo armistício de 27 de julho de 1953. Como as duas Coreias nunca assinaram a paz, ainda é vigiada por centenas de milhares de soldados dos dois lados.",
        factos: [
          "Ao sul da DMZ há ainda uma «zona de controlo civil», onde só se entra com autorização. Os tours tratam disso.",
          "As visitas à JSA (Panmunjom, as casas azuis onde os soldados se olham de frente) estiveram suspensas desde 2023. Perguntem à agência se reabriram.",
          "Em certos pontos é proibido tirar fotografias. Respeitem os guias e os soldados.",
          "Sem gente há 70 anos, a DMZ tornou-se uma reserva natural: grous-de-coroa-vermelha, ursos-negros e cabras-almiscaradas."
        ]
      },
      {
        nome: "Imjingak e a Ponte da Liberdade",
        tipo: "monumento",
        linha: "O parque à beira do rio Imjin",
        kr: "임진각",
        maps: "Imjingak",
        historia: "Construído em 1972 para as famílias separadas pela guerra. É o mais perto da Coreia do Norte que se pode chegar sem autorização. Na Ponte da Liberdade passaram, em 1953, cerca de 13 000 prisioneiros de guerra a voltar para o Sul.",
        factos: [
          "Na vedação há milhares de fitas coloridas com mensagens para familiares no Norte.",
          "Mangbaedan: um altar onde as famílias separadas fazem vénias na direção do Norte no Ano Novo lunar e no Chuseok.",
          "Uma locomotiva a vapor crivada de balas, que ficou abandonada na DMZ desde 1950.",
          "A Peace Gondola atravessa o rio Imjin até à zona de controlo civil."
        ]
      },
      {
        nome: "3.º Túnel de Infiltração",
        tipo: "monumento",
        linha: "Um túnel escavado pelo Norte para invadir Seul",
        kr: "제3땅굴",
        maps: "The 3rd Infiltration Tunnel",
        historia: "Descoberto em 1978 graças a um desertor norte-coreano. Tem 1,6 km e fica a 73 m de profundidade, a apenas 44 km de Seul. Calcula-se que podia fazer passar 30 000 soldados por hora. Foram encontrados quatro túneis destes; suspeita-se que haja mais.",
        factos: [
          "Desce-se a pé por uma rampa muito inclinada (ou num pequeno comboio). A subida cansa.",
          "Dá-se um capacete à entrada: o teto é baixo e bate-se com a cabeça.",
          "Dentro do túnel não se pode tirar fotografias e os telemóveis ficam nos cacifos."
        ],
        lendas: [
          {
            titulo: "A mina de carvão",
            texto: "Quando o túnel foi descoberto, a Coreia do Norte disse que era uma mina de carvão. Os soldados tinham pintado as paredes de preto antes de fugir, para disfarçar. Só que a rocha é granito, onde não há carvão, e os buracos dos explosivos apontavam todos para sul.",
            factos: [
              "Ainda se vê a tinta preta nalgumas paredes."
            ]
          }
        ]
      },
      {
        nome: "Observatório Dora",
        tipo: "vista",
        linha: "Olhar para a Coreia do Norte",
        kr: "도라전망대",
        maps: "Dora Observatory",
        factos: [
          "Em dias limpos vê-se a cidade norte-coreana de Kaesong e as montanhas do Norte, quase sem árvores.",
          "Vê-se a «aldeia da propaganda» de Kijong-dong, com casas que parecem vazias e um mastro de bandeira com 160 m.",
          "Os dois lados fizeram uma «guerra dos mastros»: o Sul ergueu um de 98 m na aldeia de Daeseong-dong e o Norte respondeu com um ainda mais alto.",
          "Há binóculos a moedas."
        ]
      },
      {
        nome: "Estação de Dorasan",
        tipo: "comboio",
        linha: "«Não a última estação do Sul, mas a primeira para o Norte»",
        kr: "도라산역",
        maps: "Dorasan Station",
        historia: "Construída em 2002, quando se esperava reabrir a ligação ferroviária entre as duas Coreias e daí até à Europa pela Sibéria. Entre 2007 e 2008 chegou a haver comboios de carga para a zona industrial de Kaesong. Hoje a estação está pronta, mas vazia.",
        factos: [
          "Há uma placa com a direção «Para Pyongyang» e um mapa da ligação até Lisboa... de comboio.",
          "Em 2024 a Coreia do Norte rebentou os troços de estrada e linha férrea que a ligavam ao Sul.",
          "É a mesma linha Gyeongui do parque de Hongdae (4 de junho)."
        ]
      }
    ]
  },
  {
    id: "10jun",
    data: "2026-06-10",
    curto: "Qua 10",
    titulo: "Quarta, 10 de junho · Suwon",
    resumo: "A fortaleza que um rei construiu pelo pai, o palácio temporário e a aldeia dos murais.",
    locais: [
      {
        nome: "Como ir para Suwon",
        tipo: "comboio",
        hora: "Manhã",
        linha: "A 30 km de Seul",
        semMapa: true,
        factos: [
          "Metro linha 1 até à estação de Suwon (cerca de 1 hora) e depois autocarro ou táxi até à porta Paldalmun ou ao palácio (10-15 min).",
          "Mais rápido: comboio ITX ou Mugunghwa da estação de Seul até Suwon (30-40 min).",
          "O cartão T-money funciona em Suwon como em Seul."
        ]
      },
      {
        nome: "Fortaleza de Hwaseong",
        tipo: "monumento",
        linha: "Muralha de 5,7 km · Património Mundial",
        kr: "수원화성",
        morada: "Gyeonggi-do Suwon-si Jangan-gu Yeonghwa-dong 320-2",
        naver: "https://naver.me/54KK2NnX",
        maps: "Suwon Hwaseong Fortress",
        historia: "O rei Jeongjo mandou construí-la entre 1794 e 1796 à volta da nova cidade de Suwon, onde tinha posto o túmulo do pai, o príncipe Sado (o da arca de arroz, 31 de maio). Juntava a tradição coreana com técnicas modernas da época: o sábio Jeong Yak-yong desenhou uma grua com roldanas que poupou anos de trabalho. Estava prevista para 10 anos e ficou pronta em 34 meses.",
        factos: [
          "Foi muito danificada na Guerra da Coreia. Pôde ser reconstruída fielmente porque em 1801 se publicou um livro com todos os planos, medidas, materiais e até os nomes e salários dos trabalhadores.",
          "Janganmun, a porta norte, é a maior porta de muralha da Coreia, maior do que o Sungnyemun.",
          "Hwahongmun: a comporta de sete arcos por onde passa o rio, e ao lado Banghwasuryujeong, o pavilhão mais bonito da muralha, sobre um lago.",
          "Seojangdae: o posto de comando no alto do monte Paldal, com vista sobre toda a cidade.",
          "Dar a volta completa a pé leva 2 a 3 horas. Há um comboio-dragão (Hwaseong Eocha) que faz parte do percurso."
        ],
        lendas: [
          {
            titulo: "A colina do «devagar, devagar»",
            texto: "Jeongjo ia muitas vezes visitar o túmulo do pai. No regresso a Seul, ao chegar a uma colina de onde ainda se via Suwon, mandava parar e ficava a olhar para trás. Queixava-se aos criados de que o cortejo andava «tão devagar, tão devagar» (jiji), para ficar mais tempo. A colina chama-se até hoje Jijidae.",
            factos: [
              "A devoção de Jeongjo ao pai é o exemplo clássico de piedade filial na Coreia.",
              "A vida dele foi contada na série «Lee San» (2007-08)."
            ]
          }
        ],
        dica: "Comecem na porta Paldalmun, subam ao Seojangdae e sigam a muralha para norte até ao Banghwasuryujeong. É a parte mais bonita."
      },
      {
        nome: "Palácio Hwaseong Haenggung",
        tipo: "palacio",
        linha: "O maior palácio temporário da Coreia",
        kr: "화성행궁",
        morada: "Gyeonggi-do Suwon-si Paldal-gu Namchang-dong 6-2",
        naver: "https://naver.me/5DZZcxAQ",
        maps: "Hwaseong Haenggung Palace",
        historia: "Os reis tinham palácios temporários (haenggung) para ficarem quando viajavam. Este era o de Jeongjo nas visitas ao túmulo do pai. Em 1795 fez aqui uma grande festa pelos 60 anos da mãe, a senhora Hyegyeong, viúva de Sado.",
        factos: [
          "A senhora Hyegyeong escreveu umas memórias (Hanjungnok) onde conta a morte do marido. É um dos grandes livros da literatura coreana.",
          "Quase todo foi destruído no período japonês e reconstruído a partir de 1989.",
          "Às vezes há demonstrações de artes marciais da época de Jeongjo ou da troca da guarda: vejam o programa à entrada."
        ]
      },
      {
        nome: "Aldeia dos Murais de Haenggung-dong",
        tipo: "bairro",
        linha: "Ruelas pintadas ao lado do palácio",
        kr: "행궁동 벽화마을",
        morada: "Gyeonggi-do Suwon-si Paldal-gu Buksu-dong 229",
        naver: "https://naver.me/5XcciZ7r",
        maps: "Haenggung-dong Mural Village",
        factos: [
          "As casas dentro da muralha não podem ter mais de alguns andares, por isso o bairro manteve o ar de vila.",
          "Os murais começaram com um projeto de arte comunitária para recuperar o bairro.",
          "As ruas à volta (Haengnidan-gil) encheram-se de cafés e pequenas lojas."
        ]
      }
    ],
    extras: [
      {
        nome: "Rua do Frango Frito de Suwon",
        tipo: "comida",
        linha: "Tongdak geori, junto à porta Paldalmun",
        kr: "수원 통닭거리",
        maps: "Suwon Chicken Street",
        factos: [
          "Uma rua inteira de restaurantes de frango frito, alguns desde os anos 70.",
          "O frango vem frito inteiro (tongdak) numa panela grande de óleo, com moelas fritas de bónus.",
          "Juntem cerveja: chimaek à moda de Suwon."
        ]
      },
      {
        nome: "Galbi de Suwon",
        tipo: "comida",
        linha: "A costela de vaca mais famosa do país",
        kr: "수원갈비",
        maps: "Suwon galbi restaurant",
        factos: [
          "Suwon tinha o maior mercado de gado do país no tempo de Joseon, por isso ficou com fama de boa carne.",
          "O galbi de Suwon é enorme (wang galbi, «galbi do rei»), temperado só com sal ou com marinada de soja."
        ]
      },
      {
        nome: "Tiro ao arco em Yeonmudae",
        tipo: "dica",
        linha: "Experimentar o arco tradicional coreano",
        kr: "연무대",
        maps: "Yeonmudae Suwon",
        factos: [
          "Yeonmudae era o campo de treino dos soldados da fortaleza.",
          "Por alguns milhares de wons dão-vos 10 flechas para atirar com o arco coreano (gukgung).",
          "O tiro ao arco é o desporto em que a Coreia ganha mais medalhas olímpicas."
        ]
      }
    ]
  },
  {
    id: "11jun",
    data: "2026-06-11",
    curto: "Qui 11",
    titulo: "Quinta, 11 de junho",
    resumo: "A aldeia hanok nova, um templo de mil anos e a montanha de Bukhansan.",
    locais: [
      {
        nome: "Aldeia Hanok de Eunpyeong",
        tipo: "bairro",
        linha: "Hanok novos aos pés da montanha",
        kr: "은평한옥마을",
        morada: "Seoul Eunpyeong-gu Jingwan-dong 193-14",
        naver: "https://naver.me/Gmpp0Lis",
        maps: "Eunpyeong Hanok Village",
        historia: "Ao contrário de Bukchon, aqui as casas são novas: a aldeia foi construída a partir de 2014, para mostrar que os hanok podem ser casas modernas. Com os picos de granito do Bukhansan por trás, é das paisagens mais bonitas de Seul, e quase sem turistas.",
        factos: [
          "O Museu Hanok de Eunpyeong explica como se constrói uma casa tradicional, peça a peça, sem pregos.",
          "Muitas casas são habitações privadas; há algumas casas de hóspedes e cafés.",
          "Fica a 20 min de autocarro da estação Gupabal (linha 3)."
        ]
      },
      R.umInUmJan,
      {
        nome: "Templo Jingwansa",
        tipo: "templo",
        linha: "Um templo de 1011, famoso pela comida",
        kr: "진관사",
        morada: "Seoul Eunpyeong-gu Jingwan-dong 354",
        naver: "https://naver.me/IMZZhBtl",
        maps: "Jingwansa Temple",
        historia: "Fundado em 1011 pelo rei Hyeonjong de Goryeo, como agradecimento ao monge Jingwan, que lhe salvou a vida quando era jovem. Era um dos quatro grandes templos à volta de Seul no tempo de Joseon. Ainda hoje faz a cerimónia Suryukjae, para consolar as almas dos mortos.",
        factos: [
          "Em 2009, durante obras num dos pavilhões, apareceram escondidos uma bandeira coreana e documentos do movimento de independência de 1919, guardados por um monge ativista.",
          "O templo é famoso pela comida de templo budista: sem carne, sem peixe e sem alho, cebola nem cebolinho (acreditava-se que agitavam a mente).",
          "Fica ao lado de um riacho de montanha, num vale muito calmo.",
          "É um templo de monjas."
        ],
        lendas: [
          {
            titulo: "O príncipe escondido debaixo do altar",
            texto: "Antes de ser rei, o jovem príncipe Daeryang foi mandado para este templo. A rainha-mãe Cheonchu queria pôr o próprio filho no trono e mandou assassinos atrás dele várias vezes. O monge Jingwan escavou um esconderijo debaixo do altar do Buda e escondeu lá o príncipe. Quando subiu ao trono, o príncipe mandou construir aqui um grande templo com o nome do monge.",
            factos: [
              "Por isso o templo se chama Jingwan-sa: «templo de Jingwan»."
            ]
          }
        ]
      },
      {
        nome: "Parque Nacional de Bukhansan",
        tipo: "natureza",
        linha: "Montanhas de granito dentro de Seul",
        kr: "북한산국립공원",
        morada: "Gyeonggi-do Goyang-si Deogyang-gu Hyoja-dong 산1-4",
        naver: "https://naver.me/xD88Nlo1",
        maps: "Bukhansan National Park Bukhansanseong",
        historia: "Parque nacional desde 1983, rodeia Seul a norte. O pico mais alto, Baegundae, tem 836 m e é uma cúpula de granito nu. Na montanha corre a fortaleza de Bukhansanseong, construída em 1711 para o rei se refugiar em caso de invasão.",
        factos: [
          "É um dos parques nacionais mais visitados do mundo por km², com milhões de caminhantes por ano.",
          "Subida ao Baegundae a partir de Bukhansanseong: cerca de 4 km e 2h30 a subir. A parte final tem cabos de aço para segurar.",
          "Os coreanos fazem caminhadas com equipamento completo: bastões, viseira, luvas e casacos de cores vivas. É quase um desporto nacional.",
          "No fim da caminhada, a tradição é comer pajeon (panqueca de cebolinho) com makgeolli (vinho de arroz)."
        ],
        dica: "Se quiserem subir ao Baegundae, comecem cedo pela montanha e deixem a aldeia hanok e o café para o fim da tarde. Levem água e sapatos com boa sola: a rocha é lisa."
      }
    ],
    extras: [
      {
        nome: "Pajeon e makgeolli depois da caminhada",
        tipo: "comida",
        linha: "O ritual das montanhas coreanas",
        semMapa: true,
        factos: [
          "Nas entradas dos trilhos há restaurantes que vivem disto: panquecas de cebolinho ou de marisco e taças de makgeolli.",
          "O makgeolli é branco e leitoso, ligeiramente gaseificado, com cerca de 6% de álcool. Agita-se a garrafa devagar antes de abrir.",
          "Diz-se que, em dias de chuva, os coreanos têm vontade de pajeon: o som da massa a fritar lembra o da chuva."
        ]
      }
    ]
  },
  {
    id: "12jun",
    data: "2026-06-12",
    curto: "Sex 12",
    titulo: "Sexta, 12 de junho",
    resumo: "Voo de volta às 12:45. Saiam cedo para Incheon.",
    locais: [
      {
        nome: "Ida para o aeroporto",
        tipo: "transporte",
        hora: "12:45",
        linha: "Hotel → Incheon",
        kr: "인천국제공항",
        maps: "Incheon International Airport",
        factos: [
          "Estejam no aeroporto por volta das 10h. Contem 1h30 desde o hotel: saiam às 8h30.",
          "AREX expresso da estação de Seul (cerca de 45 min), ou o autocarro limousine de Dongdaemun.",
          "Confirmem o terminal (1 ou 2): ficam a 15 minutos de comboio um do outro.",
          "Devolução de impostos (Tax Refund): os quiosques ficam antes e depois do controlo. Tenham à mão os talões e os produtos.",
          "O saldo do T-money pode ser devolvido numa loja de conveniência (o valor do cartão não)."
        ],
        dica: "Façam o check-in online e deixem as malas prontas na quinta à noite."
      }
    ],
    extras: [
      {
        nome: "Lembranças para levar",
        tipo: "dica",
        linha: "O que vale a pena trazer da Coreia",
        semMapa: true,
        factos: [
          "Cosmética da Olive Young: máscaras de folha, protetor solar, cremes.",
          "Alga gim temperada, em pacotinhos. Ramyeon (Shin Ramyun, Buldak) e batatas Honey Butter.",
          "Ginseng vermelho (hongsam) do mercado de Gyeongdong.",
          "Meias com bonecos, dos mercados, a preço de saldo.",
          "Colheres e pauzinhos de metal, papel hanji e leques de Insadong.",
          "Soju e makgeolli."
        ],
        dica: "Líquidos (soju, cremes grandes) têm de ir na mala de porão. Kimchi só bem selado e em vácuo."
      }
    ]
  },
  {
    id: "comer",
    curto: "🍜 Comer",
    titulo: "Onde e o que comer",
    resumo: "Os restaurantes e cafés da nossa lista, e o que é bom saber à mesa.",
    locais: [
      {
        nome: "Pratos a provar",
        tipo: "comida",
        linha: "Para além do kimchi",
        semMapa: true,
        factos: [
          "Samgyeopsal: barriga de porco grelhada na mesa, embrulhada em alface com alho e ssamjang (pasta de soja picante).",
          "Bulgogi e galbi: vaca marinada, grelhada.",
          "Bibimbap: arroz com legumes, carne, ovo e gochujang. Mistura-se tudo antes de comer.",
          "Naengmyeon: noodles frios, perfeitos para junho.",
          "Tteokbokki: bolinhos de arroz em molho vermelho picante e doce.",
          "Kimchi jjigae e sundubu jjigae: guisados de kimchi e de tofu macio, a ferver.",
          "Chikin: frango frito à coreana, crocante, simples ou com molho (yangnyeom).",
          "Samgyetang: frango pequeno inteiro com ginseng, em sopa. Os coreanos comem-no nos dias mais quentes."
        ]
      },
      {
        nome: "Etiqueta à mesa",
        tipo: "dica",
        linha: "Pequenas regras que fazem diferença",
        semMapa: true,
        factos: [
          "Os pratinhos pequenos (banchan) são de graça e repõem-se à vontade. Às vezes há um self-service.",
          "A água é de graça e, muitas vezes, serve-se cada um a si próprio.",
          "Arroz e sopa comem-se com colher; os pauzinhos são para os acompanhamentos.",
          "Nunca deixem os pauzinhos espetados no arroz: lembra as oferendas aos mortos.",
          "Não se serve a própria bebida: serve-se os outros, e os outros servem-nos a nós.",
          "Paga-se ao balcão, à saída. Não há gorjeta.",
          "Em muitos restaurantes de churrasco, os empregados grelham e cortam a carne com uma tesoura."
        ]
      },
      R.wooLaeOak,
      R.pyongyangMyeonok,
      R.chosunOck,
      R.gimbuksun,
      R.hanbangChicken,
      R.inlifhanwoo,
      R.manseonHof,
      R.doraeKnot,
      R.umInUmJan
    ],
    extrasTitulo: "🌊 Em Busan",
    extrasTexto: "Restaurantes e mercados para o fim de semana de 6 e 7 de junho.",
    extras: [
      R.nerveBuksang,
      R.baekhwa,
      R.bupyeongIlbeonji,
      R.hwanghae
    ]
  }
];
