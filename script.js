// Dados dos verbos (incluídos diretamente para evitar problemas com CORS)
const verbs = [
    {
      "infinitivo": "to arise",
      "past": "arose",
      "past_participle": "arisen",
      "traducao": "levantar-se"
    },
    {
      "infinitivo": "to awake",
      "past": "awoke",
      "past_participle": "awoke",
      "traducao": "acordar"
    },
    {
      "infinitivo": "to bear",
      "past": "bore",
      "past_participle": "born/borne",
      "traducao": "suportar / dar à luz, nascer"
    },
    {
      "infinitivo": "to beat",
      "past": "beat",
      "past_participle": "beaten",
      "traducao": "bater"
    },
    {
      "infinitivo": "to become",
      "past": "became",
      "past_participle": "become",
      "traducao": "tornar-se"
    },
    {
      "infinitivo": "to begin",
      "past": "began",
      "past_participle": "begun",
      "traducao": "começar"
    },
    {
      "infinitivo": "to bend",
      "past": "bent",
      "past_participle": "bent",
      "traducao": "dobrar"
    },
    {
      "infinitivo": "to bet",
      "past": "bet",
      "past_participle": "bet",
      "traducao": "apostar"
    },
    {
      "infinitivo": "to bind",
      "past": "bound",
      "past_participle": "bound",
      "traducao": "amarrar"
    },
    {
      "infinitivo": "to bite",
      "past": "bit",
      "past_participle": "bitten",
      "traducao": "morder, picar"
    },
    {
      "infinitivo": "to bleed",
      "past": "bled",
      "past_participle": "bled",
      "traducao": "sangrar"
    },
    {
      "infinitivo": "to blow",
      "past": "blew",
      "past_participle": "blown",
      "traducao": "soprar"
    },
    {
      "infinitivo": "to bring",
      "past": "brought",
      "past_participle": "brought",
      "traducao": "trazer"
    },
    {
      "infinitivo": "to build",
      "past": "built",
      "past_participle": "built",
      "traducao": "construir"
    },
    {
      "infinitivo": "to burst",
      "past": "burst",
      "past_participle": "burst",
      "traducao": "estourar, explodir"
    },
    {
      "infinitivo": "to buy",
      "past": "bought",
      "past_participle": "bought",
      "traducao": "comprar"
    },
    {
      "infinitivo": "to cast",
      "past": "cast",
      "past_participle": "cast",
      "traducao": "lançar"
    },
    {
      "infinitivo": "to catch",
      "past": "caught",
      "past_participle": "caught",
      "traducao": "pegar, apanhar"
    },
    {
      "infinitivo": "to choose",
      "past": "chose",
      "past_participle": "chosen",
      "traducao": "escolher"
    },
    {
      "infinitivo": "to cling",
      "past": "clung",
      "past_participle": "clung",
      "traducao": "agarrar, apegar-se"
    },
    {
      "infinitivo": "to come",
      "past": "came",
      "past_participle": "come",
      "traducao": "vir"
    },
    {
      "infinitivo": "to cost",
      "past": "cost",
      "past_participle": "cost",
      "traducao": "custar"
    },
    {
      "infinitivo": "to creep",
      "past": "crept",
      "past_participle": "crept",
      "traducao": "arrastar-se, rastejar"
    },
    {
      "infinitivo": "to cut",
      "past": "cut",
      "past_participle": "cut",
      "traducao": "cortar"
    },
    {
      "infinitivo": "to deal",
      "past": "dealt",
      "past_participle": "dealt",
      "traducao": "lidar, tratar"
    },
    {
      "infinitivo": "to dig",
      "past": "dug",
      "past_participle": "dug",
      "traducao": "cavar"
    },
    {
      "infinitivo": "to do",
      "past": "did",
      "past_participle": "done",
      "traducao": "fazer"
    },
    {
      "infinitivo": "to draw",
      "past": "drew",
      "past_participle": "drawn",
      "traducao": "desenhar, sacar"
    },
    {
      "infinitivo": "to drink",
      "past": "drank",
      "past_participle": "drunk",
      "traducao": "beber"
    },
    {
      "infinitivo": "to drive",
      "past": "drove",
      "past_participle": "driven",
      "traducao": "dirigir"
    },
    {
      "infinitivo": "to eat",
      "past": "ate",
      "past_participle": "eaten",
      "traducao": "comer"
    },
    {
      "infinitivo": "to fall",
      "past": "fell",
      "past_participle": "fallen",
      "traducao": "cair"
    },
    {
      "infinitivo": "to feed",
      "past": "fed",
      "past_participle": "fed",
      "traducao": "alimentar"
    },
    {
      "infinitivo": "to feel",
      "past": "felt",
      "past_participle": "felt",
      "traducao": "sentir"
    },
    {
      "infinitivo": "to fight",
      "past": "fought",
      "past_participle": "fought",
      "traducao": "brigar, lutar"
    },
    {
      "infinitivo": "to find",
      "past": "found",
      "past_participle": "found",
      "traducao": "encontrar"
    },
    {
      "infinitivo": "to fling",
      "past": "flung",
      "past_participle": "flung",
      "traducao": "arremessar, lançar"
    },
    {
      "infinitivo": "to fly",
      "past": "flew",
      "past_participle": "flown",
      "traducao": "voar"
    },
    {
      "infinitivo": "to forget",
      "past": "forgot",
      "past_participle": "forgot/forgotten",
      "traducao": "esquecer"
    },
    {
      "infinitivo": "to forgive",
      "past": "forgave",
      "past_participle": "forgiven",
      "traducao": "perdoar"
    },
    {
      "infinitivo": "to freeze",
      "past": "froze",
      "past_participle": "frozen",
      "traducao": "congelar"
    },
    {
      "infinitivo": "to get",
      "past": "got",
      "past_participle": "got/gotten",
      "traducao": "conseguir"
    },
    {
      "infinitivo": "to give",
      "past": "gave",
      "past_participle": "given",
      "traducao": "dar"
    },
    {
      "infinitivo": "to grind",
      "past": "ground",
      "past_participle": "ground",
      "traducao": "moer"
    },
    {
      "infinitivo": "to grow",
      "past": "grew",
      "past_participle": "grown",
      "traducao": "crescer"
    },
    {
      "infinitivo": "to hang",
      "past": "hung",
      "past_participle": "hung",
      "traducao": "pendurar"
    },
    {
      "infinitivo": "to have",
      "past": "had",
      "past_participle": "had",
      "traducao": "ter"
    },
    {
      "infinitivo": "to hear",
      "past": "heard",
      "past_participle": "heard",
      "traducao": "ouvir"
    },
    {
      "infinitivo": "to hide",
      "past": "hid",
      "past_participle": "hidden",
      "traducao": "esconder"
    },
    {
      "infinitivo": "to hit",
      "past": "hit",
      "past_participle": "hit",
      "traducao": "bater"
    },
    {
      "infinitivo": "to hold",
      "past": "held",
      "past_participle": "held",
      "traducao": "segurar, manter"
    },
    {
      "infinitivo": "to hurt",
      "past": "hurt",
      "past_participle": "hurt",
      "traducao": "ferir, machucar"
    },
    {
      "infinitivo": "to keep",
      "past": "kept",
      "past_participle": "kept",
      "traducao": "manter, guardar"
    },
    {
      "infinitivo": "to know",
      "past": "knew",
      "past_participle": "known",
      "traducao": "saber, conhecer"
    },
    {
      "infinitivo": "to lay",
      "past": "laid",
      "past_participle": "laid",
      "traducao": "pôr, colocar"
    },
    {
      "infinitivo": "to lead",
      "past": "led",
      "past_participle": "led",
      "traducao": "conduzir"
    },
    {
      "infinitivo": "to leave",
      "past": "left",
      "past_participle": "left",
      "traducao": "partir, deixar"
    },
    {
      "infinitivo": "to lend",
      "past": "lent",
      "past_participle": "lent",
      "traducao": "emprestar"
    },
    {
      "infinitivo": "to let",
      "past": "let",
      "past_participle": "let",
      "traducao": "deixar"
    },
    {
      "infinitivo": "to lie",
      "past": "lay",
      "past_participle": "lain",
      "traducao": "deitar-se, situar-se"
    },
    {
      "infinitivo": "to light",
      "past": "lit",
      "past_participle": "lit",
      "traducao": "acender"
    },
    {
      "infinitivo": "to lose",
      "past": "lost",
      "past_participle": "lost",
      "traducao": "perder"
    },
    {
      "infinitivo": "to make",
      "past": "made",
      "past_participle": "made",
      "traducao": "fazer"
    },
    {
      "infinitivo": "to mean",
      "past": "meant",
      "past_participle": "meant",
      "traducao": "significar"
    },
    {
      "infinitivo": "to meet",
      "past": "met",
      "past_participle": "met",
      "traducao": "encontrar"
    },
    {
      "infinitivo": "to pay",
      "past": "paid",
      "past_participle": "paid",
      "traducao": "pagar"
    },
    {
      "infinitivo": "to quit",
      "past": "quit",
      "past_participle": "quit",
      "traducao": "desistir, abandonar"
    },
    {
      "infinitivo": "to read",
      "past": "read",
      "past_participle": "read",
      "traducao": "ler"
    },
    {
      "infinitivo": "to ride",
      "past": "rode",
      "past_participle": "ridden",
      "traducao": "cavalgar, andar de"
    },
    {
      "infinitivo": "to ring",
      "past": "rang",
      "past_participle": "rung",
      "traducao": "tocar, soar"
    },
    {
      "infinitivo": "to rise",
      "past": "rose",
      "past_participle": "risen",
      "traducao": "levantar-se"
    },
    {
      "infinitivo": "to run",
      "past": "ran",
      "past_participle": "run",
      "traducao": "correr"
    },
    {
      "infinitivo": "to say",
      "past": "said",
      "past_participle": "said",
      "traducao": "dizer"
    },
    {
      "infinitivo": "to see",
      "past": "saw",
      "past_participle": "seen",
      "traducao": "ver"
    },
    {
      "infinitivo": "to seek",
      "past": "sought",
      "past_participle": "sought",
      "traducao": "procurar"
    },
    {
      "infinitivo": "to sell",
      "past": "sold",
      "past_participle": "sold",
      "traducao": "vender"
    },
    {
      "infinitivo": "to send",
      "past": "sent",
      "past_participle": "sent",
      "traducao": "enviar"
    },
    {
      "infinitivo": "to set",
      "past": "set",
      "past_participle": "set",
      "traducao": "ajustar, fixar"
    },
    {
      "infinitivo": "to shake",
      "past": "shook",
      "past_participle": "shaken",
      "traducao": "agitar"
    },
    {
      "infinitivo": "to shine",
      "past": "shone",
      "past_participle": "shone",
      "traducao": "brilhar"
    },
    {
      "infinitivo": "to show",
      "past": "showed",
      "past_participle": "shown",
      "traducao": "mostrar"
    },
    {
      "infinitivo": "to shrink",
      "past": "shrank",
      "past_participle": "shrunk",
      "traducao": "encolher"
    },
    {
      "infinitivo": "to shut",
      "past": "shut",
      "past_participle": "shut",
      "traducao": "fechar"
    },
    {
      "infinitivo": "to sing",
      "past": "sang",
      "past_participle": "sung",
      "traducao": "cantar"
    },
    {
      "infinitivo": "to sink",
      "past": "sank",
      "past_participle": "sunk",
      "traducao": "afundar"
    },
    {
      "infinitivo": "to sit",
      "past": "sat",
      "past_participle": "sat",
      "traducao": "sentar-se"
    },
    {
      "infinitivo": "to sleep",
      "past": "slept",
      "past_participle": "slept",
      "traducao": "dormir"
    },
    {
      "infinitivo": "to slide",
      "past": "slid",
      "past_participle": "slid",
      "traducao": "escorregar"
    },
    {
      "infinitivo": "to slit",
      "past": "slit",
      "past_participle": "slit",
      "traducao": "fender, cortar"
    },
    {
      "infinitivo": "to speak",
      "past": "spoke",
      "past_participle": "spoken",
      "traducao": "falar"
    },
    {
      "infinitivo": "to speed",
      "past": "sped",
      "past_participle": "sped",
      "traducao": "correr"
    },
    {
      "infinitivo": "to spend",
      "past": "spent",
      "past_participle": "spent",
      "traducao": "gastar"
    },
    {
      "infinitivo": "to spin",
      "past": "spun",
      "past_participle": "spun",
      "traducao": "girar"
    },
    {
      "infinitivo": "to split",
      "past": "split",
      "past_participle": "split",
      "traducao": "dividir, partir"
    },
    {
      "infinitivo": "to spread",
      "past": "spread",
      "past_participle": "spread",
      "traducao": "espalhar"
    },
    {
      "infinitivo": "to spring",
      "past": "sprang",
      "past_participle": "sprung",
      "traducao": "saltar, pular"
    },
    {
      "infinitivo": "to stand",
      "past": "stood",
      "past_participle": "stood",
      "traducao": "ficar, permanecer"
    },
    {
      "infinitivo": "to steal",
      "past": "stole",
      "past_participle": "stolen",
      "traducao": "roubar"
    },
    {
      "infinitivo": "to stick",
      "past": "stuck",
      "past_participle": "stuck",
      "traducao": "grudar"
    },
    {
      "infinitivo": "to sting",
      "past": "stung",
      "past_participle": "stung",
      "traducao": "picar, ferroar"
    },
    {
      "infinitivo": "to strike",
      "past": "struck",
      "past_participle": "struck",
      "traducao": "bater, golpear"
    },
    {
      "infinitivo": "to string",
      "past": "strung",
      "past_participle": "strung",
      "traducao": "amarrar"
    },
    {
      "infinitivo": "to swear",
      "past": "swore",
      "past_participle": "sworn",
      "traducao": "jurar"
    },
    {
      "infinitivo": "to sweep",
      "past": "swept",
      "past_participle": "swept",
      "traducao": "varrer"
    },
    {
      "infinitivo": "to swim",
      "past": "swam",
      "past_participle": "swum",
      "traducao": "nadar"
    },
    {
      "infinitivo": "to swing",
      "past": "swang",
      "past_participle": "swung",
      "traducao": "balançar"
    },
    {
      "infinitivo": "to take",
      "past": "took",
      "past_participle": "taken",
      "traducao": "tomar, levar"
    },
    {
      "infinitivo": "to teach",
      "past": "taught",
      "past_participle": "taught",
      "traducao": "ensinar"
    },
    {
      "infinitivo": "to tear",
      "past": "tore",
      "past_participle": "torn",
      "traducao": "rasgar"
    },
    {
      "infinitivo": "to tell",
      "past": "told",
      "past_participle": "told",
      "traducao": "contar"
    },
    {
      "infinitivo": "to think",
      "past": "thought",
      "past_participle": "thought",
      "traducao": "pensar"
    },
    {
      "infinitivo": "to throw",
      "past": "threw",
      "past_participle": "thrown",
      "traducao": "arremessar, atirar"
    },
    {
      "infinitivo": "to understand",
      "past": "understood",
      "past_participle": "understood",
      "traducao": "entender"
    },
    {
      "infinitivo": "to wake",
      "past": "woke",
      "past_participle": "woken",
      "traducao": "acordar"
    },
    {
      "infinitivo": "to wear",
      "past": "wore",
      "past_participle": "worn",
      "traducao": "usar"
    },
    {
      "infinitivo": "to weave",
      "past": "wove",
      "past_participle": "woven",
      "traducao": "tecer"
    },
    {
      "infinitivo": "to wed",
      "past": "wed",
      "past_participle": "wed",
      "traducao": "casar"
    },
    {
      "infinitivo": "to weep",
      "past": "wept",
      "past_participle": "wept",
      "traducao": "chorar"
    },
    {
      "infinitivo": "to wet",
      "past": "wet",
      "past_participle": "wet",
      "traducao": "molhar"
    },
    {
      "infinitivo": "to win",
      "past": "won",
      "past_participle": "won",
      "traducao": "vencer"
    },
    {
      "infinitivo": "to wind",
      "past": "wound",
      "past_participle": "wound",
      "traducao": "dar corda, serpentear"
    },
    {
      "infinitivo": "to wring",
      "past": "wrung",
      "past_participle": "wrung",
      "traducao": "retorcer-se, espremer"
    },
    {
      "infinitivo": "to write",
      "past": "wrote",
      "past_participle": "written",
      "traducao": "escrever"
    }
];

// Dados dos Prepositional Verbs (incluídos diretamente para evitar problemas com CORS)
const prepositionalVerbsRaw = [
    { "verb": "account", "preposition": "for" },
    { "verb": "allude", "preposition": "to" },
    { "verb": "approve", "preposition": "of" },
    { "verb": "aspire", "preposition": "to" },
    { "verb": "atone", "preposition": "for" },
    { "verb": "apologize", "preposition": "for/to" },
    { "verb": "apply", "preposition": "for/to" },
    { "verb": "argue", "preposition": "about/for/against/with/over" },
    { "verb": "arrange", "preposition": "for" },
    { "verb": "ascend", "preposition": "toward" },
    { "verb": "assign", "preposition": "to", "separable": true },
    { "verb": "assist", "preposition": "with" },
    { "verb": "attach", "preposition": "to", "separable": true },
    { "verb": "attempt", "preposition": "to" },
    { "verb": "attest", "preposition": "to" },
    { "verb": "attract", "preposition": "to/by", "separable": true },
    { "verb": "augment", "preposition": "with", "separable": true },
    { "verb": "awaken", "preposition": "from" },
    { "verb": "balk", "preposition": "at" },
    { "verb": "ban", "preposition": "from", "separable": true },
    { "verb": "banish", "preposition": "from", "separable": true },
    { "verb": "banter", "preposition": "with/about" },
    { "verb": "bar", "preposition": "from", "separable": true },
    { "verb": "bark", "preposition": "at" },
    { "verb": "bask", "preposition": "in" },
    { "verb": "beg", "preposition": "for", "separable": true },
    { "verb": "bicker", "preposition": "with" },
    { "verb": "bid", "preposition": "for" },
    { "verb": "bilk", "preposition": "out of" },
    { "verb": "bite", "preposition": "into" },
    { "verb": "blame", "preposition": "for/on/upon", "separable": true },
    { "verb": "block", "preposition": "from", "separable": true },
    { "verb": "blossom", "preposition": "into" },
    { "verb": "blot", "preposition": "out", "separable": true },
    { "verb": "bore", "preposition": "into" },
    { "verb": "brace", "preposition": "for", "separable": true },
    { "verb": "brood", "preposition": "about" },
    { "verb": "burden", "preposition": "with", "separable": true },
    { "verb": "burrow", "preposition": "into/under" },
    { "verb": "cavort", "preposition": "with" },
    { "verb": "coerce", "preposition": "into", "separable": true },
    { "verb": "coincide", "preposition": "with" },
    { "verb": "collaborate", "preposition": "with" },
    { "verb": "collide", "preposition": "with" },
    { "verb": "comment", "preposition": "about" },
    { "verb": "compare", "preposition": "with/to", "separable": true },
    { "verb": "compete", "preposition": "with/against" },
    { "verb": "complain", "preposition": "about/of" },
    { "verb": "complement", "preposition": "with", "separable": true },
    { "verb": "comply", "preposition": "with" },
    { "verb": "conceal", "preposition": "from", "separable": true },
    { "verb": "concentrate", "preposition": "on" },
    { "verb": "concur", "preposition": "with" },
    { "verb": "confide", "preposition": "in" },
    { "verb": "confront", "preposition": "with", "separable": true },
    { "verb": "confuse", "preposition": "with", "separable": true },
    { "verb": "congratulate", "preposition": "on", "separable": true },
    { "verb": "connive", "preposition": "at" },
    { "verb": "consign", "preposition": "to", "separable": true },
    { "verb": "consist", "preposition": "of/in" },
    { "verb": "conspire", "preposition": "against/with" },
    { "verb": "contrast", "preposition": "with", "separable": true },
    { "verb": "contribute", "preposition": "to" },
    { "verb": "converge", "preposition": "on" },
    { "verb": "converse", "preposition": "with" },
    { "verb": "convict", "preposition": "of", "separable": true },
    { "verb": "coordinate", "preposition": "with", "separable": true },
    { "verb": "cope", "preposition": "with" },
    { "verb": "correspond", "preposition": "with/to" },
    { "verb": "cower", "preposition": "from" },
    { "verb": "crave", "preposition": "for" },
    { "verb": "cull", "preposition": "from", "separable": true },
    { "verb": "dabble", "preposition": "in" },
    { "verb": "deal", "preposition": "with" },
    { "verb": "decide", "preposition": "on/about" },
    { "verb": "dedicate", "preposition": "to", "separable": true },
    { "verb": "defer", "preposition": "to" },
    { "verb": "deliberate", "preposition": "on/about" },
    { "verb": "depend", "preposition": "on/upon" },
    { "verb": "depict", "preposition": "as", "separable": true },
    { "verb": "deprive", "preposition": "of", "separable": true },
    { "verb": "derive", "preposition": "from" },
    { "verb": "desist", "preposition": "from" },
    { "verb": "detach", "preposition": "from", "separable": true },
    { "verb": "deter", "preposition": "from", "separable": true },
    { "verb": "detract", "preposition": "from" },
    { "verb": "deviate", "preposition": "from" },
    { "verb": "differ", "preposition": "with/from" },
    { "verb": "disagree", "preposition": "with/about" },
    { "verb": "disapprove", "preposition": "of" },
    { "verb": "discriminate", "preposition": "against" },
    { "verb": "distinguish", "preposition": "between" },
    { "verb": "diverge", "preposition": "from" },
    { "verb": "divest", "preposition": "of", "separable": true },
    { "verb": "dream", "preposition": "about/of" },
    { "verb": "drink", "preposition": "to" },
    { "verb": "emerge", "preposition": "from" },
    { "verb": "emphasize", "preposition": "with" },
    { "verb": "enamor", "preposition": "with", "separable": true },
    { "verb": "encounter", "preposition": "with" },
    { "verb": "engage", "preposition": "in" },
    { "verb": "enlist", "preposition": "in", "separable": true },
    { "verb": "entrust", "preposition": "with", "separable": true },
    { "verb": "escape", "preposition": "from" },
    { "verb": "exchange", "preposition": "for", "separable": true },
    { "verb": "exclude", "preposition": "from", "separable": true },
    { "verb": "excuse", "preposition": "for", "separable": true },
    { "verb": "exempt", "preposition": "from", "separable": true },
    { "verb": "expel", "preposition": "from", "separable": true },
    { "verb": "experiment", "preposition": "on/with" },
    { "verb": "explain", "preposition": "to", "separable": true },
    { "verb": "extricate", "preposition": "from", "separable": true },
    { "verb": "falter", "preposition": "in" },
    { "verb": "familiarize", "preposition": "with", "separable": true },
    { "verb": "feel", "preposition": "about/like" },
    { "verb": "flee", "preposition": "from" },
    { "verb": "focus", "preposition": "on" },
    { "verb": "forget", "preposition": "about" },
    { "verb": "forgive", "preposition": "for", "separable": true },
    { "verb": "free", "preposition": "from", "separable": true },
    { "verb": "frown", "preposition": "on" },
    { "verb": "glance", "preposition": "at" },
    { "verb": "gloat", "preposition": "over" },
    { "verb": "gossip", "preposition": "about" },
    { "verb": "graduate", "preposition": "from" },
    { "verb": "grapple", "preposition": "with" },
    { "verb": "grieve", "preposition": "for" },
    { "verb": "grumble", "preposition": "about" },
    { "verb": "happen", "preposition": "to" },
    { "verb": "hear", "preposition": "about/from/of" },
    { "verb": "hesitate", "preposition": "about" },
    { "verb": "hinder", "preposition": "from", "separable": true },
    { "verb": "hinge", "preposition": "on" },
    { "verb": "hope", "preposition": "for" },
    { "verb": "identify", "preposition": "with", "separable": true },
    { "verb": "import", "preposition": "from", "separable": true },
    { "verb": "impose", "preposition": "on", "separable": true },
    { "verb": "incite", "preposition": "to", "separable": true },
    { "verb": "include", "preposition": "in", "separable": true },
    { "verb": "infer", "preposition": "from", "separable": true },
    { "verb": "inform", "preposition": "about/of", "separable": true },
    { "verb": "infuse", "preposition": "with", "separable": true },
    { "verb": "inquire", "preposition": "about/into" },
    { "verb": "insist", "preposition": "on" },
    { "verb": "insulate", "preposition": "from", "separable": true },
    { "verb": "interfere", "preposition": "with/in" },
    { "verb": "intervene", "preposition": "in" },
    { "verb": "introduce", "preposition": "to", "separable": true },
    { "verb": "invest", "preposition": "in" },
    { "verb": "invite", "preposition": "to", "separable": true },
    { "verb": "involve", "preposition": "in", "separable": true },
    { "verb": "isolate", "preposition": "from", "separable": true },
    { "verb": "jeer", "preposition": "at" },
    { "verb": "joke", "preposition": "about/with" },
    { "verb": "know", "preposition": "about" },
    { "verb": "laugh", "preposition": "at/about" },
    { "verb": "lecture", "preposition": "on" },
    { "verb": "listen", "preposition": "to" },
    { "verb": "long", "preposition": "for" },
    { "verb": "look", "preposition": "at/for" },
    { "verb": "marvel", "preposition": "at" },
    { "verb": "mix", "preposition": "with", "separable": true },
    { "verb": "mourn", "preposition": "for" },
    { "verb": "object", "preposition": "to" },
    { "verb": "obsess", "preposition": "about/over" },
    { "verb": "operate", "preposition": "on" },
    { "verb": "participate", "preposition": "in" },
    { "verb": "persist", "preposition": "in" },
    { "verb": "plan", "preposition": "on" },
    { "verb": "ponder", "preposition": "on/over" },
    { "verb": "pray", "preposition": "for" },
    { "verb": "prefer", "preposition": "to", "separable": true },
    { "verb": "prepare", "preposition": "for", "separable": true },
    { "verb": "prevent", "preposition": "from", "separable": true },
    { "verb": "prohibit", "preposition": "from", "separable": true },
    { "verb": "protect", "preposition": "from", "separable": true },
    { "verb": "provide", "preposition": "with", "separable": true },
    { "verb": "punish", "preposition": "for", "separable": true },
    { "verb": "quarrel", "preposition": "with/about" },
    { "verb": "react", "preposition": "to" },
    { "verb": "recover", "preposition": "from" },
    { "verb": "refer", "preposition": "to" },
    { "verb": "relate", "preposition": "to", "separable": true },
    { "verb": "rely", "preposition": "on/upon" },
    { "verb": "reminisce", "preposition": "about" },
    { "verb": "rescue", "preposition": "from", "separable": true },
    { "verb": "respond", "preposition": "to" },
    { "verb": "retire", "preposition": "from" },
    { "verb": "save", "preposition": "from", "separable": true },
    { "verb": "scoff", "preposition": "at" },
    { "verb": "search", "preposition": "for" },
    { "verb": "separate", "preposition": "from", "separable": true },
    { "verb": "shout", "preposition": "at" },
    { "verb": "smile", "preposition": "at" },
    { "verb": "speak", "preposition": "with/to/about" },
    { "verb": "specialize", "preposition": "in" },
    { "verb": "stare", "preposition": "at" },
    { "verb": "stem", "preposition": "from" },
    { "verb": "stop", "preposition": "from", "separable": true },
    { "verb": "subscribe", "preposition": "to" },
    { "verb": "substitute", "preposition": "for", "separable": true },
    { "verb": "subtract", "preposition": "from", "separable": true },
    { "verb": "succeed", "preposition": "in" },
    { "verb": "suffer", "preposition": "from" },
    { "verb": "talk", "preposition": "with/to/about" },
    { "verb": "tell", "preposition": "about", "separable": true },
    { "verb": "thank", "preposition": "for", "separable": true },
    { "verb": "think", "preposition": "about/of" },
    { "verb": "translate", "preposition": "into", "separable": true },
    { "verb": "trust", "preposition": "with", "separable": true },
    { "verb": "vouch", "preposition": "for" },
    { "verb": "wait", "preposition": "for" },
    { "verb": "warn", "preposition": "about/of/against", "separable": true },
    { "verb": "wonder", "preposition": "about" },
    { "verb": "work", "preposition": "with/for" },
    { "verb": "worry", "preposition": "about" }
];

// Dicionário de traduções comuns para gerar exemplos melhores
const prepositionalTranslations = {
    "account for": "explicar, dar conta de",
    "allude to": "aludir a, fazer referência a",
    "approve of": "aprovar",
    "aspire to": "aspirar a",
    "atone for": "expiar, reparar",
    "apologize for/to": "pedir desculpas por/para",
    "apply for/to": "candidatar-se a/aplicar a",
    "argue about/for/against/with/over": "discutir sobre/por/contra/com/sobre",
    "arrange for": "arranjar, organizar",
    "ascend toward": "subir em direção a",
    "assign to": "atribuir a, designar para",
    "assist with": "ajudar com",
    "attach to": "anexar a, prender a",
    "attempt to": "tentar",
    "attest to": "atestar, comprovar",
    "attract to/by": "atrair para/por",
    "augment with": "aumentar com",
    "awaken from": "despertar de",
    "balk at": "recusar-se a, hesitar em",
    "ban from": "banir de, proibir de",
    "banish from": "banir de, exilar de",
    "banter with/about": "brincar com/sobre",
    "bar from": "proibir de, excluir de",
    "bark at": "latir para",
    "bask in": "deleitar-se em, desfrutar de",
    "beg for": "implorar por, pedir por",
    "bicker with": "brigar com, discutir com",
    "bid for": "licitar por, fazer oferta por",
    "bilk out of": "enganar, defraudar",
    "bite into": "morder em",
    "blame for/on/upon": "culpar por",
    "block from": "bloquear de, impedir de",
    "blossom into": "florescer em, desenvolver-se em",
    "blot out": "apagar, obliterar",
    "bore into": "perfurar em",
    "brace for": "preparar-se para",
    "brood about": "remoer sobre, pensar obsessivamente sobre",
    "burden with": "sobrecarregar com",
    "burrow into/under": "escavar em/sob",
    "cavort with": "brincar com, divertir-se com",
    "coerce into": "coagir a, forçar a",
    "coincide with": "coincidir com",
    "collaborate with": "colaborar com",
    "collide with": "colidir com",
    "comment about": "comentar sobre",
    "compare with/to": "comparar com/a",
    "compete with/against": "competir com/contra",
    "complain about/of": "reclamar de",
    "complement with": "complementar com",
    "comply with": "cumprir com, obedecer a",
    "conceal from": "esconder de, ocultar de",
    "concentrate on": "concentrar-se em",
    "concur with": "concordar com",
    "confide in": "confiar em",
    "confront with": "confrontar com",
    "confuse with": "confundir com",
    "congratulate on": "parabenizar por",
    "connive at": "conspirar, conluiar",
    "consign to": "consignar a, entregar a",
    "consist of/in": "consistir de/em",
    "conspire against/with": "conspirar contra/com",
    "contrast with": "contrastar com",
    "contribute to": "contribuir para",
    "converge on": "convergir para",
    "converse with": "conversar com",
    "convict of": "condenar por",
    "coordinate with": "coordenar com",
    "cope with": "lidar com",
    "correspond with/to": "corresponder com/a",
    "cower from": "encolher-se de, recuar de",
    "crave for": "ansear por, desejar muito",
    "cull from": "selecionar de, escolher de",
    "dabble in": "experimentar em, brincar com",
    "deal with": "lidar com",
    "decide on/about": "decidir sobre",
    "dedicate to": "dedicar a",
    "defer to": "deferir a, submeter-se a",
    "deliberate on/about": "deliberar sobre",
    "depend on/upon": "depender de",
    "depict as": "retratar como",
    "deprive of": "privar de",
    "derive from": "derivar de",
    "desist from": "desistir de",
    "detach from": "desprender de, separar de",
    "deter from": "dissuadir de",
    "detract from": "diminuir, prejudicar",
    "deviate from": "desviar de",
    "differ with/from": "diferir de, discordar de",
    "disagree with/about": "discordar de/sobre",
    "disapprove of": "desaprovar",
    "discriminate against": "discriminar contra",
    "distinguish between": "distinguir entre",
    "diverge from": "divergir de",
    "divest of": "despojar de",
    "dream about/of": "sonhar com",
    "drink to": "beber para, brindar a",
    "emerge from": "emergir de",
    "emphasize with": "enfatizar com",
    "enamor with": "apaixonar-se por",
    "encounter with": "encontrar com",
    "engage in": "envolver-se em",
    "enlist in": "alistar-se em",
    "entrust with": "confiar a",
    "escape from": "escapar de",
    "exchange for": "trocar por",
    "exclude from": "excluir de",
    "excuse for": "desculpar por",
    "exempt from": "isentar de",
    "expel from": "expulsar de",
    "experiment on/with": "experimentar em/com",
    "explain to": "explicar para",
    "extricate from": "extrair de, livrar-se de",
    "falter in": "vacilar em",
    "familiarize with": "familiarizar-se com",
    "feel about/like": "sentir sobre/como",
    "flee from": "fugir de",
    "focus on": "focar em",
    "forget about": "esquecer de",
    "forgive for": "perdoar por",
    "free from": "libertar de",
    "frown on": "desaprovar, reprovar",
    "glance at": "olhar rapidamente para",
    "gloat over": "regozijar-se com",
    "gossip about": "fofocar sobre",
    "graduate from": "formar-se em",
    "grapple with": "lutar com, lidar com",
    "grieve for": "lamentar por, sofrer por",
    "grumble about": "resmungar sobre",
    "happen to": "acontecer com",
    "hear about/from/of": "ouvir sobre/de",
    "hesitate about": "hesitar sobre",
    "hinder from": "impedir de",
    "hinge on": "depender de",
    "hope for": "esperar por",
    "identify with": "identificar-se com",
    "import from": "importar de",
    "impose on": "impor a",
    "incite to": "incitar a",
    "include in": "incluir em",
    "infer from": "inferir de",
    "inform about/of": "informar sobre/de",
    "infuse with": "infundir com",
    "inquire about/into": "perguntar sobre/investigar",
    "insist on": "insistir em",
    "insulate from": "isolar de",
    "interfere with/in": "interferir com/em",
    "intervene in": "intervir em",
    "introduce to": "apresentar a",
    "invest in": "investir em",
    "invite to": "convidar para",
    "involve in": "envolver em",
    "isolate from": "isolar de",
    "jeer at": "zombar de",
    "joke about/with": "brincar sobre/com",
    "know about": "saber sobre",
    "laugh at/about": "rir de/sobre",
    "lecture on": "dar palestra sobre",
    "listen to": "ouvir",
    "long for": "ansiar por",
    "look at/for": "olhar para/procurar",
    "marvel at": "maravilhar-se com",
    "mix with": "misturar com",
    "mourn for": "lamentar por",
    "object to": "opor-se a",
    "obsess about/over": "obcecar-se com",
    "operate on": "operar em",
    "participate in": "participar de",
    "persist in": "persistir em",
    "plan on": "planejar",
    "ponder on/over": "ponderar sobre",
    "pray for": "rezar por",
    "prefer to": "preferir a",
    "prepare for": "preparar-se para",
    "prevent from": "prevenir de, impedir de",
    "prohibit from": "proibir de",
    "protect from": "proteger de",
    "provide with": "fornecer com",
    "punish for": "punir por",
    "quarrel with/about": "brigar com/sobre",
    "react to": "reagir a",
    "recover from": "recuperar-se de",
    "refer to": "referir-se a",
    "relate to": "relacionar-se com",
    "rely on/upon": "confiar em",
    "reminisce about": "recordar, rememorar",
    "rescue from": "resgatar de",
    "respond to": "responder a",
    "retire from": "aposentar-se de",
    "save from": "salvar de",
    "scoff at": "zombar de",
    "search for": "procurar por",
    "separate from": "separar de",
    "shout at": "gritar para",
    "smile at": "sorrir para",
    "speak with/to/about": "falar com/para/sobre",
    "specialize in": "especializar-se em",
    "stare at": "olhar fixamente para",
    "stem from": "originar-se de",
    "stop from": "impedir de",
    "subscribe to": "assinar, subscrever",
    "substitute for": "substituir por",
    "subtract from": "subtrair de",
    "succeed in": "ter sucesso em",
    "suffer from": "sofrer de",
    "talk with/to/about": "conversar com/para/sobre",
    "tell about": "contar sobre",
    "thank for": "agradecer por",
    "think about/of": "pensar sobre/de",
    "translate into": "traduzir para",
    "trust with": "confiar a",
    "vouch for": "garantir por",
    "wait for": "esperar por",
    "warn about/of/against": "avisar sobre/de/contra",
    "wonder about": "perguntar-se sobre",
    "work with/for": "trabalhar com/para",
    "worry about": "preocupar-se com"
};

// Processar Prepositional Verbs e adicionar traduções e exemplos
let prepositionalVerbs = prepositionalVerbsRaw.map(item => {
    const firstPreposition = item.preposition.split('/')[0].trim();
    const verbPhrase = `${item.verb} ${firstPreposition}`;
    const traducao = prepositionalTranslations[verbPhrase] || prepositionalTranslations[`${item.verb} ${item.preposition}`] || `Usar "${item.verb}" com "${firstPreposition}"`;
    
    // Gerar exemplos
    const exemplo_pt = `Exemplo: "Eles precisam ${item.verb} ${firstPreposition} algo"`;
    const exemplo_en = `Example: "They need to ${item.verb} ${firstPreposition} something"`;
    
    return {
        verb: item.verb,
        preposition: item.preposition,
        separable: item.separable || false,
        traducao: traducao,
        exemplo_pt: exemplo_pt,
        exemplo_en: exemplo_en
    };
});

let currentMode = null;
let currentIndex = 0;
let shuffledVerbs = [];
let results = {
    correct: 0,
    wrong: 0,
    errors: []
};

// Variáveis para Prepositional Verbs
let currentPrepositionalMode = null;
let currentPrepositionalIndex = 0;
let shuffledPrepositionalVerbs = [];
let prepositionalResults = {
    correct: 0,
    wrong: 0,
    errors: []
};

// Gerenciamento de verbos ativos/inativos
let activeVerbs = new Set(); // Armazena os índices dos verbos ativos

// Carregar verbos ativos do localStorage
function loadActiveVerbs() {
    const saved = localStorage.getItem('activeVerbs');
    if (saved) {
        try {
            const indices = JSON.parse(saved);
            activeVerbs = new Set(indices);
        } catch (e) {
            // Se houver erro, inicializar com todos os verbos ativos
            activeVerbs = new Set(verbs.map((_, index) => index));
        }
    } else {
        // Inicializar com todos os verbos ativos
        activeVerbs = new Set(verbs.map((_, index) => index));
    }
}

// Salvar verbos ativos no localStorage
function saveActiveVerbs() {
    localStorage.setItem('activeVerbs', JSON.stringify(Array.from(activeVerbs)));
}

// Obter apenas os verbos ativos
function getActiveVerbs() {
    return verbs.filter((_, index) => activeVerbs.has(index));
}

// Abrir tela de configuração
function openVerbConfig() {
    document.getElementById('menu').classList.remove('active');
    document.getElementById('quiz-mode1').classList.remove('active');
    document.getElementById('quiz-mode2').classList.remove('active');
    document.getElementById('results').classList.remove('active');
    document.getElementById('verb-config').classList.add('active');
    
    renderVerbsTable();
    updateVerbCount();
}

// Fechar tela de configuração
function closeVerbConfig() {
    document.getElementById('verb-config').classList.remove('active');
    document.getElementById('menu').classList.add('active');
}

// Renderizar tabela de verbos
function renderVerbsTable() {
    const tbody = document.getElementById('verbs-table-body');
    tbody.innerHTML = '';
    
    verbs.forEach((verb, index) => {
        const row = document.createElement('tr');
        const isActive = activeVerbs.has(index);
        
        row.innerHTML = `
            <td class="checkbox-col">
                <input type="checkbox" 
                       data-verb-index="${index}" 
                       ${isActive ? 'checked' : ''}
                       onchange="toggleVerb(${index}, this.checked)">
            </td>
            <td>${verb.infinitivo}</td>
            <td>${verb.past}</td>
            <td>${verb.past_participle}</td>
        `;
        
        tbody.appendChild(row);
    });
    
    // Atualizar checkbox "marcar todos"
    const allChecked = verbs.every((_, index) => activeVerbs.has(index));
    document.getElementById('select-all-checkbox').checked = allChecked;
}

// Alternar verbo individual
function toggleVerb(index, isActive) {
    if (isActive) {
        activeVerbs.add(index);
    } else {
        activeVerbs.delete(index);
    }
    updateVerbCount();
    
    // Atualizar checkbox "marcar todos"
    const allChecked = verbs.every((_, index) => activeVerbs.has(index));
    document.getElementById('select-all-checkbox').checked = allChecked;
}

// Alternar todos os verbos
function toggleAllVerbs(checked) {
    if (checked) {
        verbs.forEach((_, index) => activeVerbs.add(index));
    } else {
        activeVerbs.clear();
    }
    renderVerbsTable();
    updateVerbCount();
}

// Marcar todos os verbos
function selectAllVerbs() {
    verbs.forEach((_, index) => activeVerbs.add(index));
    renderVerbsTable();
    updateVerbCount();
}

// Desmarcar todos os verbos
function deselectAllVerbs() {
    activeVerbs.clear();
    renderVerbsTable();
    updateVerbCount();
}

// Atualizar contador de verbos ativos
function updateVerbCount() {
    const count = activeVerbs.size;
    document.getElementById('verb-count').textContent = `${count} verbo${count !== 1 ? 's' : ''} ativo${count !== 1 ? 's' : ''}`;
}

// Salvar configuração e voltar
function saveVerbConfig() {
    saveActiveVerbs();
    closeVerbConfig();
    
    // Mostrar mensagem de sucesso
    alert(`Configuração salva! ${activeVerbs.size} verbo${activeVerbs.size !== 1 ? 's' : ''} ativo${activeVerbs.size !== 1 ? 's' : ''}.`);
}

// ========== PREPOSITIONAL VERBS ==========

// Gerenciamento de Prepositional Verbs ativos/inativos
let activePrepositionalVerbs = new Set();

// Carregar Prepositional Verbs ativos do localStorage
function loadActivePrepositionalVerbs() {
    const saved = localStorage.getItem('activePrepositionalVerbs');
    if (saved) {
        try {
            const indices = JSON.parse(saved);
            activePrepositionalVerbs = new Set(indices);
        } catch (e) {
            activePrepositionalVerbs = new Set(prepositionalVerbs.map((_, index) => index));
        }
    } else {
        activePrepositionalVerbs = new Set(prepositionalVerbs.map((_, index) => index));
    }
}

// Salvar Prepositional Verbs ativos no localStorage
function saveActivePrepositionalVerbs() {
    localStorage.setItem('activePrepositionalVerbs', JSON.stringify(Array.from(activePrepositionalVerbs)));
}

// Obter apenas os Prepositional Verbs ativos
function getActivePrepositionalVerbs() {
    return prepositionalVerbs.filter((_, index) => activePrepositionalVerbs.has(index));
}

// Abrir tela de configuração de Prepositional Verbs
function openPrepositionalVerbConfig() {
    document.getElementById('menu').classList.remove('active');
    document.getElementById('prepositional-quiz-mode1').classList.remove('active');
    document.getElementById('prepositional-quiz-mode2').classList.remove('active');
    document.getElementById('prepositional-quiz-mode3').classList.remove('active');
    document.getElementById('results').classList.remove('active');
    document.getElementById('prepositional-verb-config').classList.add('active');
    
    renderPrepositionalVerbsTable();
    updatePrepositionalVerbCount();
}

// Fechar tela de configuração de Prepositional Verbs
function closePrepositionalVerbConfig() {
    document.getElementById('prepositional-verb-config').classList.remove('active');
    document.getElementById('menu').classList.add('active');
}

// Renderizar tabela de Prepositional Verbs
function renderPrepositionalVerbsTable() {
    const tbody = document.getElementById('prepositional-verbs-table-body');
    tbody.innerHTML = '';
    
    prepositionalVerbs.forEach((verb, index) => {
        const row = document.createElement('tr');
        const isActive = activePrepositionalVerbs.has(index);
        
        row.innerHTML = `
            <td class="checkbox-col">
                <input type="checkbox" 
                       data-verb-index="${index}" 
                       ${isActive ? 'checked' : ''}
                       onchange="togglePrepositionalVerb(${index}, this.checked)">
            </td>
            <td>${verb.verb}</td>
            <td>${verb.preposition}</td>
        `;
        
        tbody.appendChild(row);
    });
    
    // Atualizar checkbox "marcar todos"
    const allChecked = prepositionalVerbs.every((_, index) => activePrepositionalVerbs.has(index));
    document.getElementById('select-all-prepositional-checkbox').checked = allChecked;
}

// Alternar Prepositional Verb individual
function togglePrepositionalVerb(index, isActive) {
    if (isActive) {
        activePrepositionalVerbs.add(index);
    } else {
        activePrepositionalVerbs.delete(index);
    }
    updatePrepositionalVerbCount();
    
    const allChecked = prepositionalVerbs.every((_, index) => activePrepositionalVerbs.has(index));
    document.getElementById('select-all-prepositional-checkbox').checked = allChecked;
}

// Alternar todos os Prepositional Verbs
function toggleAllPrepositionalVerbs(checked) {
    if (checked) {
        prepositionalVerbs.forEach((_, index) => activePrepositionalVerbs.add(index));
    } else {
        activePrepositionalVerbs.clear();
    }
    renderPrepositionalVerbsTable();
    updatePrepositionalVerbCount();
}

// Marcar todos os Prepositional Verbs
function selectAllPrepositionalVerbs() {
    prepositionalVerbs.forEach((_, index) => activePrepositionalVerbs.add(index));
    renderPrepositionalVerbsTable();
    updatePrepositionalVerbCount();
}

// Desmarcar todos os Prepositional Verbs
function deselectAllPrepositionalVerbs() {
    activePrepositionalVerbs.clear();
    renderPrepositionalVerbsTable();
    updatePrepositionalVerbCount();
}

// Atualizar contador de Prepositional Verbs ativos
function updatePrepositionalVerbCount() {
    const count = activePrepositionalVerbs.size;
    document.getElementById('prepositional-verb-count').textContent = `${count} verbo${count !== 1 ? 's' : ''} ativo${count !== 1 ? 's' : ''}`;
}

// Salvar configuração de Prepositional Verbs e voltar
function savePrepositionalVerbConfig() {
    saveActivePrepositionalVerbs();
    closePrepositionalVerbConfig();
    
    alert(`Configuração salva! ${activePrepositionalVerbs.size} verbo${activePrepositionalVerbs.size !== 1 ? 's' : ''} ativo${activePrepositionalVerbs.size !== 1 ? 's' : ''}.`);
}

// Iniciar quiz de Prepositional Verbs
function startPrepositionalQuiz(mode) {
    currentPrepositionalMode = mode;
    currentPrepositionalIndex = 0;
    prepositionalResults = {
        correct: 0,
        wrong: 0,
        errors: []
    };
    
    // Esconder menu e mostrar quiz apropriado
    document.getElementById('menu').classList.remove('active');
    document.getElementById('prepositional-quiz-mode1').classList.remove('active');
    document.getElementById('prepositional-quiz-mode2').classList.remove('active');
    document.getElementById('prepositional-quiz-mode3').classList.remove('active');
    document.getElementById('results').classList.remove('active');
    
    if (mode === 1) {
        const activeList = getActivePrepositionalVerbs();
        if (activeList.length === 0) {
            alert('Por favor, ative pelo menos um verbo na configuração antes de iniciar o quiz.');
            openPrepositionalVerbConfig();
            return;
        }
        shuffledPrepositionalVerbs = shuffleArray([...activeList]);
        document.getElementById('prepositional-quiz-mode1').classList.add('active');
        loadPrepositionalQuestionMode1();
    } else if (mode === 2) {
        const activeList = getActivePrepositionalVerbs();
        if (activeList.length === 0) {
            alert('Por favor, ative pelo menos um verbo na configuração antes de iniciar o quiz.');
            openPrepositionalVerbConfig();
            return;
        }
        shuffledPrepositionalVerbs = shuffleArray([...activeList]);
        document.getElementById('prepositional-quiz-mode2').classList.add('active');
        loadPrepositionalQuestionMode2();
    } else if (mode === 3) {
        // Modo 3: Flashcards - usa TODOS os verbos
        document.getElementById('prepositional-quiz-mode3').classList.add('active');
        initializePrepositionalFlashcards();
    }
}

// Função para normalizar respostas (remover espaços, converter para minúsculas, lidar com alternativas)
function normalizeAnswer(answer) {
    if (!answer) return '';
    return answer.toLowerCase().trim();
}

// Função para verificar se a resposta está correta (suporta múltiplas alternativas)
function checkAnswer(userAnswer, correctAnswer) {
    const normalizedUser = normalizeAnswer(userAnswer);
    const normalizedCorrect = normalizeAnswer(correctAnswer);
    
    // Se a resposta correta tem múltiplas alternativas (ex: "born/borne")
    if (normalizedCorrect.includes('/')) {
        const alternatives = normalizedCorrect.split('/').map(a => a.trim());
        return alternatives.some(alt => normalizeAnswer(alt) === normalizedUser);
    }
    
    return normalizedUser === normalizedCorrect;
}

// Embaralhar array
function shuffleArray(array) {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}

// Gerar alternativas enganosas baseadas no verbo correto
function generateMisleadingOptions(correctAnswer, verbInfinitivo) {
    const options = new Set();
    const correct = correctAnswer.split('/')[0].trim().toLowerCase();
    const base = verbInfinitivo.replace(/^to\s+/i, '').toLowerCase();
    
    // Gerar variações comuns de erros baseadas na resposta correta
    const variations = [];
    
    // 1. Adicionar sufixos regulares à resposta correta (erro comum)
    if (!correct.endsWith('ed')) {
        variations.push(correct + 'ed');
    }
    if (!correct.endsWith('en') && !correct.endsWith('ten')) {
        variations.push(correct + 'en');
        variations.push(correct + 'ten');
    }
    if (!correct.endsWith('d')) {
        variations.push(correct + 'd');
    }
    
    // 2. Adicionar sufixos ao infinitivo (tratar como verbo regular)
    if (!base.endsWith('e')) {
        variations.push(base + 'ed');
    } else {
        variations.push(base + 'd'); // Ex: lose -> losed
    }
    variations.push(base + 'en');
    variations.push(base + 'ten');
    
    // 2b. Variação: remover última letra do infinitivo e adicionar sufixos
    if (base.length > 3) {
        const baseShort = base.slice(0, -1);
        variations.push(baseShort + 'ed');
        variations.push(baseShort + 'd');
        variations.push(baseShort + 'en');
    }
    
    // 3. Variações específicas baseadas no final da resposta correta
    if (correct.endsWith('t')) {
        variations.push(correct + 'ed');
        variations.push(correct + 'en');
        variations.push(correct + 'ten');
        // Remover o 't' e adicionar sufixos
        const withoutT = correct.slice(0, -1);
        variations.push(withoutT + 'ed');
        variations.push(withoutT + 'en');
    }
    
    if (correct.endsWith('n')) {
        variations.push(correct + 'ed');
        variations.push(correct + 'd');
        // Remover o 'n' e adicionar outros sufixos
        const withoutN = correct.slice(0, -1);
        variations.push(withoutN + 'ed');
        variations.push(withoutN + 'ten');
    }
    
    if (correct.endsWith('d')) {
        variations.push(correct + 'ed');
        variations.push(correct + 'en');
        // Remover o 'd' e adicionar outros sufixos
        const withoutD = correct.slice(0, -1);
        variations.push(withoutD + 'ed');
        variations.push(withoutD + 'ten');
    }
    
    // 4. Duplicar última letra e adicionar sufixos (ex: los -> lossed)
    if (correct.length > 2) {
        const lastChar = correct[correct.length - 1];
        variations.push(correct + lastChar + 'ed');
        variations.push(correct + lastChar + 'en');
    }
    
    // 5. Variações com mudança de vogal no infinitivo + sufixos
    const vowelChanges = {
        'a': ['e', 'o', 'i'],
        'e': ['a', 'i', 'o'],
        'i': ['a', 'e', 'o'],
        'o': ['a', 'e', 'i'],
        'u': ['a', 'e', 'o']
    };
    
    for (let i = 0; i < base.length && variations.length < 15; i++) {
        const char = base[i];
        if (vowelChanges[char]) {
            vowelChanges[char].slice(0, 1).forEach(vowel => {
                const modified = base.slice(0, i) + vowel + base.slice(i + 1);
                variations.push(modified + 'ed');
                variations.push(modified + 'd');
                variations.push(modified + 'en');
            });
        }
    }
    
    // 6. Remover última letra e adicionar sufixos
    if (correct.length > 3) {
        const shortened = correct.slice(0, -1);
        variations.push(shortened + 'ed');
        variations.push(shortened + 'en');
        variations.push(shortened + 'ten');
    }
    
    // Filtrar variações válidas e diferentes da resposta correta
    variations.forEach(variation => {
        const normalized = variation.toLowerCase().trim();
        if (normalized !== correct && 
            normalized.length >= 3 && 
            normalized.length <= 12 &&
            !options.has(normalized)) {
            options.add(normalized);
        }
    });
    
    // Se ainda não temos 3 opções, adicionar mais variações
    if (options.size < 3) {
        const suffixes = ['ed', 'en', 'd', 'ted', 'ten', 'ded', 'den'];
        suffixes.forEach(suffix => {
            if (options.size >= 3) return;
            const variation = correct + suffix;
            const normalized = variation.toLowerCase().trim();
            if (normalized !== correct && normalized.length <= 12 && !options.has(normalized)) {
                options.add(normalized);
            }
        });
    }
    
    // Retornar até 3 opções aleatórias
    const optionsArray = Array.from(options);
    return shuffleArray(optionsArray).slice(0, 3);
}

// Iniciar quiz
function startQuiz(mode) {
    currentMode = mode;
    currentIndex = 0;
    results = {
        correct: 0,
        wrong: 0,
        errors: []
    };
    
    // Esconder menu e mostrar quiz apropriado
    document.getElementById('menu').classList.remove('active');
    document.getElementById('quiz-mode1').classList.remove('active');
    document.getElementById('quiz-mode2').classList.remove('active');
    document.getElementById('quiz-mode3').classList.remove('active');
    document.getElementById('results').classList.remove('active');
    
    if (mode === 1) {
        // Verificar se há verbos ativos
        const activeVerbsList = getActiveVerbs();
        if (activeVerbsList.length === 0) {
            alert('Por favor, ative pelo menos um verbo na configuração antes de iniciar o quiz.');
            openVerbConfig();
            return;
        }
        // Embaralhar apenas verbos ativos
        shuffledVerbs = shuffleArray([...activeVerbsList]);
        document.getElementById('quiz-mode1').classList.add('active');
        loadQuestionMode1();
    } else if (mode === 2) {
        // Verificar se há verbos ativos
        const activeVerbsList = getActiveVerbs();
        if (activeVerbsList.length === 0) {
            alert('Por favor, ative pelo menos um verbo na configuração antes de iniciar o quiz.');
            openVerbConfig();
            return;
        }
        // Embaralhar apenas verbos ativos
        shuffledVerbs = shuffleArray([...activeVerbsList]);
        document.getElementById('quiz-mode2').classList.add('active');
        // Para o modo 2, criar perguntas duplicadas (uma para past, outra para past participle)
        const questions = [];
        shuffledVerbs.forEach(verb => {
            questions.push({ verb, type: 'past' });
            questions.push({ verb, type: 'participle' });
        });
        shuffledVerbs = shuffleArray(questions);
        loadQuestionMode2();
    } else if (mode === 3) {
        // Modo 3: Flashcards - usa TODOS os verbos, não filtra
        document.getElementById('quiz-mode3').classList.add('active');
        initializeFlashcards();
    }
}

// Carregar pergunta Modo 1
function loadQuestionMode1() {
    if (currentIndex >= shuffledVerbs.length) {
        showResults();
        return;
    }
    
    const verb = shuffledVerbs[currentIndex];
    document.getElementById('verb1').textContent = verb.infinitivo;
    document.getElementById('translation1').textContent = verb.traducao;
    
    // Limpar inputs
    document.getElementById('past-input').value = '';
    document.getElementById('participle-input').value = '';
    document.getElementById('past-input').classList.remove('correct', 'incorrect');
    document.getElementById('participle-input').classList.remove('correct', 'incorrect');
    
    // Atualizar contador e progresso
    document.getElementById('counter1').textContent = `${currentIndex + 1} / ${shuffledVerbs.length}`;
    const progress = ((currentIndex + 1) / shuffledVerbs.length) * 100;
    document.getElementById('progress1').style.width = progress + '%';
    
    // Focar no primeiro input
    document.getElementById('past-input').focus();
}

// Carregar pergunta Modo 2
function loadQuestionMode2() {
    if (currentIndex >= shuffledVerbs.length) {
        showResults();
        return;
    }
    
    const question = shuffledVerbs[currentIndex];
    const verb = question.verb;
    const type = question.type;
    
    document.getElementById('verb2').textContent = verb.infinitivo;
    document.getElementById('translation2').textContent = verb.traducao;
    
    if (type === 'past') {
        document.getElementById('question-type2').textContent = 'Qual é o Past Simple deste verbo?';
    } else {
        document.getElementById('question-type2').textContent = 'Qual é o Past Participle deste verbo?';
    }
    
    // Criar opções com alternativas enganosas
    const correctAnswer = type === 'past' ? verb.past : verb.past_participle;
    // Pegar a primeira alternativa se houver múltiplas (ex: "born/borne" -> "born")
    const correctAnswerNormalized = correctAnswer.split('/')[0].trim();
    
    // Gerar 3 alternativas enganosas baseadas no verbo
    const misleadingOptions = generateMisleadingOptions(correctAnswer, verb.infinitivo);
    
    // Combinar resposta correta com alternativas enganosas
    const allOptions = [correctAnswerNormalized, ...misleadingOptions];
    
    // Embaralhar opções
    const shuffledOptions = shuffleArray(allOptions);
    
    // Renderizar opções
    const container = document.getElementById('options-container');
    container.innerHTML = '';
    shuffledOptions.forEach(option => {
        const btn = document.createElement('button');
        btn.className = 'option-btn';
        btn.textContent = option;
        btn.onclick = () => selectOption(btn, option, verb, type);
        container.appendChild(btn);
    });
    
    // Atualizar contador e progresso
    document.getElementById('counter2').textContent = `${currentIndex + 1} / ${shuffledVerbs.length}`;
    const progress = ((currentIndex + 1) / shuffledVerbs.length) * 100;
    document.getElementById('progress2').style.width = progress + '%';
}

// Selecionar opção no Modo 2
function selectOption(button, selectedAnswer, verb, type) {
    const correctAnswer = type === 'past' ? verb.past : verb.past_participle;
    // Desabilitar todos os botões
    const buttons = document.querySelectorAll('.option-btn');
    buttons.forEach(btn => {
        btn.disabled = true;
        btn.onclick = null;
    });
    
    // Verificar resposta
    const isCorrect = checkAnswer(selectedAnswer, correctAnswer);
    
    if (isCorrect) {
        button.classList.add('correct');
        results.correct++;
    } else {
        button.classList.add('incorrect');
        results.wrong++;
        
        // Marcar a resposta correta
        buttons.forEach(btn => {
            if (checkAnswer(btn.textContent, correctAnswer)) {
                btn.classList.add('correct');
            }
        });
        
        // Adicionar ao erro
        results.errors.push({
            verb: verb.infinitivo,
            translation: verb.traducao,
            question: type === 'past' ? 'Past Simple' : 'Past Participle',
            userAnswer: selectedAnswer,
            correctAnswer: correctAnswer
        });
    }
    
    // Próxima pergunta após 1.5 segundos
    setTimeout(() => {
        currentIndex++;
        loadQuestionMode2();
    }, 1500);
}

// Processar resposta Modo 1
document.getElementById('form-mode1').addEventListener('submit', (e) => {
    e.preventDefault();
    
    const verb = shuffledVerbs[currentIndex];
    const userPast = document.getElementById('past-input').value;
    const userParticiple = document.getElementById('participle-input').value;
    
    const pastCorrect = checkAnswer(userPast, verb.past);
    const participleCorrect = checkAnswer(userParticiple, verb.past_participle);
    
    // Marcar inputs
    if (pastCorrect) {
        document.getElementById('past-input').classList.add('correct');
        document.getElementById('past-input').classList.remove('incorrect');
    } else {
        document.getElementById('past-input').classList.add('incorrect');
        document.getElementById('past-input').classList.remove('correct');
    }
    
    if (participleCorrect) {
        document.getElementById('participle-input').classList.add('correct');
        document.getElementById('participle-input').classList.remove('incorrect');
    } else {
        document.getElementById('participle-input').classList.add('incorrect');
        document.getElementById('participle-input').classList.remove('correct');
    }
    
    // Verificar se ambas estão corretas
    if (pastCorrect && participleCorrect) {
        results.correct++;
    } else {
        results.wrong++;
        
        // Adicionar erros
        if (!pastCorrect) {
            results.errors.push({
                verb: verb.infinitivo,
                translation: verb.traducao,
                question: 'Past Simple',
                userAnswer: userPast,
                correctAnswer: verb.past
            });
        }
        
        if (!participleCorrect) {
            results.errors.push({
                verb: verb.infinitivo,
                translation: verb.traducao,
                question: 'Past Participle',
                userAnswer: userParticiple,
                correctAnswer: verb.past_participle
            });
        }
    }
    
    // Próxima pergunta após 1.5 segundos
    setTimeout(() => {
        currentIndex++;
        loadQuestionMode1();
    }, 1500);
});

// Mostrar resultados
function showResults() {
    document.getElementById('quiz-mode1').classList.remove('active');
    document.getElementById('quiz-mode2').classList.remove('active');
    document.getElementById('results').classList.add('active');
    
    const total = results.correct + results.wrong;
    const percentage = total > 0 ? Math.round((results.correct / total) * 100) : 0;
    
    document.getElementById('correct-answers').textContent = results.correct;
    document.getElementById('wrong-answers').textContent = results.wrong;
    document.getElementById('percentage').textContent = percentage + '%';
    document.getElementById('total-questions').textContent = total;
    
    // Mostrar erros
    const errorsList = document.getElementById('errors-list');
    const errorsSection = document.getElementById('errors-section');
    
    if (results.errors.length === 0) {
        errorsSection.style.display = 'none';
    } else {
        errorsSection.style.display = 'block';
        errorsList.innerHTML = '';
        
        results.errors.forEach(error => {
            const errorItem = document.createElement('div');
            errorItem.className = 'error-item';
            errorItem.innerHTML = `
                <h3>${error.verb} (${error.translation})</h3>
                <div class="error-details">
                    <div class="error-detail">
                        <strong>Pergunta:</strong> ${error.question}
                    </div>
                    <div class="error-detail">
                        <strong>Sua resposta:</strong> ${error.userAnswer}
                    </div>
                    <div class="error-detail">
                        <strong>Resposta correta:</strong> ${error.correctAnswer}
                    </div>
                </div>
            `;
            errorsList.appendChild(errorItem);
        });
    }
}

// Voltar ao menu
function goToMenu() {
    document.getElementById('results').classList.remove('active');
    document.getElementById('quiz-mode1').classList.remove('active');
    document.getElementById('quiz-mode2').classList.remove('active');
    document.getElementById('quiz-mode3').classList.remove('active');
    document.getElementById('verb-config').classList.remove('active');
    document.getElementById('prepositional-quiz-mode1').classList.remove('active');
    document.getElementById('prepositional-quiz-mode2').classList.remove('active');
    document.getElementById('prepositional-quiz-mode3').classList.remove('active');
    document.getElementById('prepositional-verb-config').classList.remove('active');
    document.getElementById('menu').classList.add('active');
}

// Reiniciar quiz
function restartQuiz() {
    startQuiz(currentMode);
}

// Sistema de Flashcards (Modo 3)
let flashcardData = {}; // Armazena dados de cada verbo: { nextReview, interval, easeFactor, reviewCount }
let flashcardQueue = []; // Fila de cartões para revisar
let currentFlashcard = null;
let flashcardIsFlipped = false;
let failedCards = []; // Cartões que foram marcados como "Errei"

// Carregar dados dos flashcards do localStorage
function loadFlashcardData() {
    const saved = localStorage.getItem('flashcardData');
    if (saved) {
        try {
            flashcardData = JSON.parse(saved);
            // Converter strings de data de volta para objetos Date
            Object.keys(flashcardData).forEach(index => {
                if (flashcardData[index].nextReview) {
                    flashcardData[index].nextReview = new Date(flashcardData[index].nextReview);
                }
            });
        } catch (e) {
            flashcardData = {};
        }
    }
}

// Salvar dados dos flashcards no localStorage
function saveFlashcardData() {
    // Converter objetos Date para strings antes de salvar
    const dataToSave = {};
    Object.keys(flashcardData).forEach(index => {
        dataToSave[index] = { ...flashcardData[index] };
        if (dataToSave[index].nextReview instanceof Date) {
            dataToSave[index].nextReview = dataToSave[index].nextReview.toISOString();
        }
    });
    localStorage.setItem('flashcardData', JSON.stringify(dataToSave));
}

// Inicializar flashcards
function initializeFlashcards() {
    loadFlashcardData();
    flashcardIsFlipped = false;
    failedCards = [];
    
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    
    // Separar cartões em novos e para revisão
    const newCards = [];
    const reviewCards = [];
    
    verbs.forEach((verb, index) => {
        const data = flashcardData[index] || {};
        const nextReview = data.nextReview ? new Date(data.nextReview) : null;
        
        if (!nextReview || nextReview <= today) {
            if (!nextReview) {
                // Cartão novo
                newCards.push({ verb, index });
            } else {
                // Cartão para revisão
                reviewCards.push({ verb, index });
            }
        }
    });
    
    // Embaralhar e combinar: novos primeiro, depois revisões
    flashcardQueue = [
        ...shuffleArray(newCards),
        ...shuffleArray(reviewCards)
    ];
    
    // Atualizar estatísticas
    updateFlashcardStats();
    
    if (flashcardQueue.length === 0) {
        alert('Parabéns! Não há cartões para revisar hoje. Todos os verbos estão agendados para o futuro.');
        goToMenu();
        return;
    }
    
    loadNextFlashcard();
}

// Carregar próximo flashcard
function loadNextFlashcard() {
    if (flashcardQueue.length === 0 && failedCards.length === 0) {
        // Sessão completa
        showFlashcardResults();
        return;
    }
    
    // Se não há mais na fila mas há cartões que falharam, adicionar de volta
    if (flashcardQueue.length === 0 && failedCards.length > 0) {
        flashcardQueue = [...failedCards];
        failedCards = [];
    }
    
    const card = document.getElementById('flashcard');
    const wasFlipped = card.classList.contains('flipped');
    
    // Se o cartão estava virado, primeiro virar de volta e aguardar animação
    if (wasFlipped) {
        // Remover classe flipped para iniciar animação de virar de volta
        card.classList.remove('flipped');
        flashcardIsFlipped = false;
        
        // Aguardar animação terminar (0.6s conforme CSS) antes de atualizar conteúdo
        setTimeout(() => {
            updateFlashcardContent();
        }, 600);
    } else {
        // Se não estava virado, atualizar imediatamente
        updateFlashcardContent();
    }
}

// Atualizar conteúdo do flashcard
function updateFlashcardContent() {
    currentFlashcard = flashcardQueue.shift();
    flashcardIsFlipped = false;
    
    // Atualizar conteúdo
    document.getElementById('flashcard-word-front').textContent = currentFlashcard.verb.infinitivo;
    document.getElementById('flashcard-past').textContent = currentFlashcard.verb.past;
    document.getElementById('flashcard-participle').textContent = currentFlashcard.verb.past_participle;
    document.getElementById('flashcard-translation').textContent = currentFlashcard.verb.traducao;
    
    // Habilitar botões
    document.querySelectorAll('.action-btn').forEach(btn => btn.disabled = false);
    
    // Atualizar contador
    const remaining = flashcardQueue.length + failedCards.length;
    const total = verbs.length;
    document.getElementById('flashcard-counter').textContent = `${total - remaining} / ${total}`;
}

// Virar cartão
function flipCard() {
    if (flashcardIsFlipped) return;
    
    const card = document.getElementById('flashcard');
    card.classList.add('flipped');
    flashcardIsFlipped = true;
}

// Avaliar cartão (fácil, bom, difícil, errei)
function rateCard(rating) {
    if (!currentFlashcard) return;
    
    if (!flashcardIsFlipped) {
        flipCard();
        // Aguardar um pouco antes de permitir avaliar
        setTimeout(() => rateCard(rating), 600);
        return;
    }
    
    const index = currentFlashcard.index;
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    
    let data = flashcardData[index] || {
        interval: 0,
        easeFactor: 2.5,
        reviewCount: 0
    };
    
    if (rating === 'again') {
        // Errei - adicionar de volta à fila para revisar hoje
        failedCards.push(currentFlashcard);
        data.interval = 0;
        data.easeFactor = Math.max(1.3, data.easeFactor - 0.2);
    } else {
        // Calcular novo intervalo baseado na avaliação
        if (rating === 'easy') {
            data.interval = Math.max(data.interval * 2.5, 4);
            data.easeFactor = Math.min(2.5, data.easeFactor + 0.15);
        } else if (rating === 'good') {
            if (data.interval === 0) {
                data.interval = 1;
            } else {
                data.interval = Math.floor(data.interval * data.easeFactor);
            }
            // easeFactor permanece o mesmo
        } else if (rating === 'hard') {
            if (data.interval === 0) {
                data.interval = 0.5; // Revisar amanhã
            } else {
                data.interval = Math.max(1, Math.floor(data.interval * 1.2));
            }
            data.easeFactor = Math.max(1.3, data.easeFactor - 0.15);
        }
        
        data.reviewCount = (data.reviewCount || 0) + 1;
        
        // Calcular próxima data de revisão
        const nextReview = new Date(today);
        nextReview.setDate(nextReview.getDate() + Math.ceil(data.interval));
        data.nextReview = nextReview;
    }
    
    flashcardData[index] = data;
    saveFlashcardData();
    
    // Desabilitar botões temporariamente
    document.querySelectorAll('.action-btn').forEach(btn => btn.disabled = true);
    
    // Próximo cartão após pequeno delay
    setTimeout(() => {
        loadNextFlashcard();
    }, 500);
}

// Atualizar estatísticas dos flashcards
function updateFlashcardStats() {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    
    let newCount = 0;
    let reviewCount = 0;
    
    verbs.forEach((_, index) => {
        const data = flashcardData[index] || {};
        const nextReview = data.nextReview ? new Date(data.nextReview) : null;
        
        if (!nextReview) {
            newCount++;
        } else if (nextReview <= today) {
            reviewCount++;
        }
    });
    
    document.getElementById('flashcard-stats').textContent = 
        `Novos: ${newCount} | Revisão: ${reviewCount}`;
}

// Mostrar resultados dos flashcards
function showFlashcardResults() {
    document.getElementById('quiz-mode3').classList.remove('active');
    document.getElementById('results').classList.add('active');
    
    // Calcular estatísticas
    const totalReviewed = Object.keys(flashcardData).filter(index => {
        const data = flashcardData[index];
        return data && data.reviewCount > 0;
    }).length;
    
    document.getElementById('correct-answers').textContent = totalReviewed;
    document.getElementById('wrong-answers').textContent = 0;
    document.getElementById('percentage').textContent = '100%';
    document.getElementById('total-questions').textContent = totalReviewed;
    
    // Esconder seção de erros
    document.getElementById('errors-section').style.display = 'none';
}

// ========== PREPOSITIONAL VERBS - MODOS DE QUIZ ==========

// Carregar pergunta Modo 1 (Digitação) - Prepositional Verbs
function loadPrepositionalQuestionMode1() {
    if (currentPrepositionalIndex >= shuffledPrepositionalVerbs.length) {
        showPrepositionalResults();
        return;
    }
    
    const verb = shuffledPrepositionalVerbs[currentPrepositionalIndex];
    document.getElementById('prepositional-translation1').textContent = verb.traducao;
    document.getElementById('prepositional-example1').textContent = verb.exemplo_pt;
    
    // Limpar input
    document.getElementById('prepositional-input').value = '';
    document.getElementById('prepositional-input').classList.remove('correct', 'incorrect');
    
    // Atualizar contador e progresso
    document.getElementById('prepositional-counter1').textContent = `${currentPrepositionalIndex + 1} / ${shuffledPrepositionalVerbs.length}`;
    const progress = ((currentPrepositionalIndex + 1) / shuffledPrepositionalVerbs.length) * 100;
    document.getElementById('prepositional-progress1').style.width = progress + '%';
    
    document.getElementById('prepositional-input').focus();
}

// Processar resposta Modo 1 - Prepositional Verbs
document.getElementById('form-prepositional-mode1').addEventListener('submit', (e) => {
    e.preventDefault();
    
    const verb = shuffledPrepositionalVerbs[currentPrepositionalIndex];
    const userAnswer = document.getElementById('prepositional-input').value;
    const correctAnswer = `${verb.verb} ${verb.preposition.split('/')[0].trim()}`;
    
    const isCorrect = checkAnswer(userAnswer, correctAnswer) || 
                     checkAnswer(userAnswer, `${verb.verb} ${verb.preposition}`);
    
    if (isCorrect) {
        document.getElementById('prepositional-input').classList.add('correct');
        document.getElementById('prepositional-input').classList.remove('incorrect');
        prepositionalResults.correct++;
    } else {
        document.getElementById('prepositional-input').classList.add('incorrect');
        document.getElementById('prepositional-input').classList.remove('correct');
        prepositionalResults.wrong++;
        prepositionalResults.errors.push({
            verb: verb.verb,
            preposition: verb.preposition,
            userAnswer: userAnswer,
            correctAnswer: correctAnswer
        });
    }
    
    setTimeout(() => {
        currentPrepositionalIndex++;
        loadPrepositionalQuestionMode1();
    }, 1500);
});

// Carregar pergunta Modo 2 (Múltipla Escolha) - Prepositional Verbs
function loadPrepositionalQuestionMode2() {
    if (currentPrepositionalIndex >= shuffledPrepositionalVerbs.length) {
        showPrepositionalResults();
        return;
    }
    
    const verb = shuffledPrepositionalVerbs[currentPrepositionalIndex];
    document.getElementById('prepositional-translation2').textContent = verb.traducao;
    document.getElementById('prepositional-example2').textContent = verb.exemplo_pt;
    document.getElementById('prepositional-verb2').textContent = verb.verb;
    
    // Criar opções com preposições enganosas
    const correctPreposition = verb.preposition.split('/')[0].trim();
    const allPrepositions = ['about', 'at', 'by', 'for', 'from', 'in', 'into', 'of', 'on', 'to', 'with', 'against', 'over', 'upon', 'out of', 'up', 'down', 'away', 'back'];
    const options = new Set([correctPreposition]);
    
    // Adicionar preposições aleatórias
    while (options.size < 4) {
        const randomPreposition = allPrepositions[Math.floor(Math.random() * allPrepositions.length)];
        if (normalizeAnswer(randomPreposition) !== normalizeAnswer(correctPreposition)) {
            options.add(randomPreposition);
        }
    }
    
    const shuffledOptions = shuffleArray(Array.from(options));
    
    // Renderizar opções
    const container = document.getElementById('prepositional-options-container');
    container.innerHTML = '';
    shuffledOptions.forEach(option => {
        const btn = document.createElement('button');
        btn.className = 'option-btn';
        btn.textContent = option;
        btn.onclick = () => selectPrepositionalOption(btn, option, verb);
        container.appendChild(btn);
    });
    
    // Atualizar contador e progresso
    document.getElementById('prepositional-counter2').textContent = `${currentPrepositionalIndex + 1} / ${shuffledPrepositionalVerbs.length}`;
    const progress = ((currentPrepositionalIndex + 1) / shuffledPrepositionalVerbs.length) * 100;
    document.getElementById('prepositional-progress2').style.width = progress + '%';
}

// Selecionar opção no Modo 2 - Prepositional Verbs
function selectPrepositionalOption(button, selectedPreposition, verb) {
    const buttons = document.querySelectorAll('#prepositional-options-container .option-btn');
    buttons.forEach(btn => {
        btn.disabled = true;
        btn.onclick = null;
    });
    
    const correctPreposition = verb.preposition.split('/')[0].trim();
    const isCorrect = checkAnswer(selectedPreposition, correctPreposition) || 
                     checkAnswer(selectedPreposition, verb.preposition);
    
    if (isCorrect) {
        button.classList.add('correct');
        prepositionalResults.correct++;
    } else {
        button.classList.add('incorrect');
        prepositionalResults.wrong++;
        
        buttons.forEach(btn => {
            if (checkAnswer(btn.textContent, correctPreposition) || 
                checkAnswer(btn.textContent, verb.preposition)) {
                btn.classList.add('correct');
            }
        });
        
        prepositionalResults.errors.push({
            verb: verb.verb,
            preposition: verb.preposition,
            userAnswer: selectedPreposition,
            correctAnswer: correctPreposition
        });
    }
    
    setTimeout(() => {
        currentPrepositionalIndex++;
        loadPrepositionalQuestionMode2();
    }, 1500);
}

// Sistema de Flashcards para Prepositional Verbs
let prepositionalFlashcardData = {};
let prepositionalFlashcardQueue = [];
let currentPrepositionalFlashcard = null;
let prepositionalFlashcardIsFlipped = false;
let prepositionalFailedCards = [];

// Carregar dados dos flashcards de Prepositional Verbs
function loadPrepositionalFlashcardData() {
    const saved = localStorage.getItem('prepositionalFlashcardData');
    if (saved) {
        try {
            prepositionalFlashcardData = JSON.parse(saved);
            Object.keys(prepositionalFlashcardData).forEach(index => {
                if (prepositionalFlashcardData[index].nextReview) {
                    prepositionalFlashcardData[index].nextReview = new Date(prepositionalFlashcardData[index].nextReview);
                }
            });
        } catch (e) {
            prepositionalFlashcardData = {};
        }
    }
}

// Salvar dados dos flashcards de Prepositional Verbs
function savePrepositionalFlashcardData() {
    const dataToSave = {};
    Object.keys(prepositionalFlashcardData).forEach(index => {
        dataToSave[index] = { ...prepositionalFlashcardData[index] };
        if (dataToSave[index].nextReview instanceof Date) {
            dataToSave[index].nextReview = dataToSave[index].nextReview.toISOString();
        }
    });
    localStorage.setItem('prepositionalFlashcardData', JSON.stringify(dataToSave));
}

// Inicializar flashcards de Prepositional Verbs
function initializePrepositionalFlashcards() {
    loadPrepositionalFlashcardData();
    prepositionalFlashcardIsFlipped = false;
    prepositionalFailedCards = [];
    
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    
    const newCards = [];
    const reviewCards = [];
    
    prepositionalVerbs.forEach((verb, index) => {
        const data = prepositionalFlashcardData[index] || {};
        const nextReview = data.nextReview ? new Date(data.nextReview) : null;
        
        if (!nextReview || nextReview <= today) {
            if (!nextReview) {
                newCards.push({ verb, index });
            } else {
                reviewCards.push({ verb, index });
            }
        }
    });
    
    prepositionalFlashcardQueue = [
        ...shuffleArray(newCards),
        ...shuffleArray(reviewCards)
    ];
    
    updatePrepositionalFlashcardStats();
    
    if (prepositionalFlashcardQueue.length === 0) {
        alert('Parabéns! Não há cartões para revisar hoje.');
        goToMenu();
        return;
    }
    
    loadNextPrepositionalFlashcard();
}

// Carregar próximo flashcard de Prepositional Verbs
function loadNextPrepositionalFlashcard() {
    if (prepositionalFlashcardQueue.length === 0 && prepositionalFailedCards.length === 0) {
        showPrepositionalFlashcardResults();
        return;
    }
    
    if (prepositionalFlashcardQueue.length === 0 && prepositionalFailedCards.length > 0) {
        prepositionalFlashcardQueue = [...prepositionalFailedCards];
        prepositionalFailedCards = [];
    }
    
    const card = document.getElementById('prepositional-flashcard');
    const wasFlipped = card.classList.contains('flipped');
    
    if (wasFlipped) {
        card.classList.remove('flipped');
        prepositionalFlashcardIsFlipped = false;
        setTimeout(() => {
            updatePrepositionalFlashcardContent();
        }, 600);
    } else {
        updatePrepositionalFlashcardContent();
    }
}

// Atualizar conteúdo do flashcard de Prepositional Verbs
function updatePrepositionalFlashcardContent() {
    currentPrepositionalFlashcard = prepositionalFlashcardQueue.shift();
    prepositionalFlashcardIsFlipped = false;
    
    const verb = currentPrepositionalFlashcard.verb;
    const answer = `${verb.verb} ${verb.preposition.split('/')[0].trim()}`;
    
    document.getElementById('prepositional-flashcard-translation').textContent = verb.traducao;
    document.getElementById('prepositional-flashcard-example-pt').textContent = verb.exemplo_pt;
    document.getElementById('prepositional-flashcard-answer').textContent = answer;
    document.getElementById('prepositional-flashcard-example-en').textContent = verb.exemplo_en;
    
    document.querySelectorAll('#prepositional-flashcard-actions .action-btn').forEach(btn => btn.disabled = false);
    
    const remaining = prepositionalFlashcardQueue.length + prepositionalFailedCards.length;
    const total = prepositionalVerbs.length;
    document.getElementById('prepositional-flashcard-counter').textContent = `${total - remaining} / ${total}`;
}

// Virar cartão de Prepositional Verbs
function flipPrepositionalCard() {
    if (prepositionalFlashcardIsFlipped) return;
    const card = document.getElementById('prepositional-flashcard');
    card.classList.add('flipped');
    prepositionalFlashcardIsFlipped = true;
}

// Avaliar cartão de Prepositional Verbs
function ratePrepositionalCard(rating) {
    if (!currentPrepositionalFlashcard) return;
    
    if (!prepositionalFlashcardIsFlipped) {
        flipPrepositionalCard();
        setTimeout(() => ratePrepositionalCard(rating), 600);
        return;
    }
    
    const index = currentPrepositionalFlashcard.index;
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    
    let data = prepositionalFlashcardData[index] || {
        interval: 0,
        easeFactor: 2.5,
        reviewCount: 0
    };
    
    if (rating === 'again') {
        prepositionalFailedCards.push(currentPrepositionalFlashcard);
        data.interval = 0;
        data.easeFactor = Math.max(1.3, data.easeFactor - 0.2);
    } else {
        if (rating === 'easy') {
            data.interval = Math.max(data.interval * 2.5, 4);
            data.easeFactor = Math.min(2.5, data.easeFactor + 0.15);
        } else if (rating === 'good') {
            if (data.interval === 0) {
                data.interval = 1;
            } else {
                data.interval = Math.floor(data.interval * data.easeFactor);
            }
        } else if (rating === 'hard') {
            if (data.interval === 0) {
                data.interval = 0.5;
            } else {
                data.interval = Math.max(1, Math.floor(data.interval * 1.2));
            }
            data.easeFactor = Math.max(1.3, data.easeFactor - 0.15);
        }
        
        data.reviewCount = (data.reviewCount || 0) + 1;
        const nextReview = new Date(today);
        nextReview.setDate(nextReview.getDate() + Math.ceil(data.interval));
        data.nextReview = nextReview;
    }
    
    prepositionalFlashcardData[index] = data;
    savePrepositionalFlashcardData();
    
    document.querySelectorAll('#prepositional-flashcard-actions .action-btn').forEach(btn => btn.disabled = true);
    
    setTimeout(() => {
        loadNextPrepositionalFlashcard();
    }, 500);
}

// Atualizar estatísticas dos flashcards de Prepositional Verbs
function updatePrepositionalFlashcardStats() {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    
    let newCount = 0;
    let reviewCount = 0;
    
    prepositionalVerbs.forEach((_, index) => {
        const data = prepositionalFlashcardData[index] || {};
        const nextReview = data.nextReview ? new Date(data.nextReview) : null;
        
        if (!nextReview) {
            newCount++;
        } else if (nextReview <= today) {
            reviewCount++;
        }
    });
    
    document.getElementById('prepositional-flashcard-stats').textContent = 
        `Novos: ${newCount} | Revisão: ${reviewCount}`;
}

// Mostrar resultados dos flashcards de Prepositional Verbs
function showPrepositionalFlashcardResults() {
    document.getElementById('prepositional-quiz-mode3').classList.remove('active');
    document.getElementById('results').classList.add('active');
    
    const totalReviewed = Object.keys(prepositionalFlashcardData).filter(index => {
        const data = prepositionalFlashcardData[index];
        return data && data.reviewCount > 0;
    }).length;
    
    document.getElementById('correct-answers').textContent = totalReviewed;
    document.getElementById('wrong-answers').textContent = 0;
    document.getElementById('percentage').textContent = '100%';
    document.getElementById('total-questions').textContent = totalReviewed;
    document.getElementById('errors-section').style.display = 'none';
}

// Mostrar resultados dos quizzes de Prepositional Verbs
function showPrepositionalResults() {
    document.getElementById('prepositional-quiz-mode1').classList.remove('active');
    document.getElementById('prepositional-quiz-mode2').classList.remove('active');
    document.getElementById('results').classList.add('active');
    
    const total = prepositionalResults.correct + prepositionalResults.wrong;
    const percentage = total > 0 ? Math.round((prepositionalResults.correct / total) * 100) : 0;
    
    document.getElementById('correct-answers').textContent = prepositionalResults.correct;
    document.getElementById('wrong-answers').textContent = prepositionalResults.wrong;
    document.getElementById('percentage').textContent = percentage + '%';
    document.getElementById('total-questions').textContent = total;
    
    const errorsList = document.getElementById('errors-list');
    const errorsSection = document.getElementById('errors-section');
    
    if (prepositionalResults.errors.length === 0) {
        errorsSection.style.display = 'none';
    } else {
        errorsSection.style.display = 'block';
        errorsList.innerHTML = '';
        
        prepositionalResults.errors.forEach(error => {
            const errorItem = document.createElement('div');
            errorItem.className = 'error-item';
            errorItem.innerHTML = `
                <h3>${error.verb} + ${error.preposition}</h3>
                <div class="error-details">
                    <div class="error-detail">
                        <strong>Sua resposta:</strong> ${error.userAnswer}
                    </div>
                    <div class="error-detail">
                        <strong>Resposta correta:</strong> ${error.correctAnswer}
                    </div>
                </div>
            `;
            errorsList.appendChild(errorItem);
        });
    }
}

// Inicializar sistema
loadActiveVerbs();
loadFlashcardData();
// Prepositional Verbs já estão carregados na constante acima
loadActivePrepositionalVerbs();
loadPrepositionalFlashcardData();