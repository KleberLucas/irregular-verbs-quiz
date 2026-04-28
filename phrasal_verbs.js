const phrasalVerbs = [
    {
        phrasalVerb: "ask someone out",
        significado: "convidar alguém para sair",
        exemplo: "Brian asked Judy out to dinner and a movie."
    },
    {
        phrasalVerb: "ask around",
        significado: "perguntar a várias pessoas",
        exemplo: "I asked around but nobody has seen my wallet."
    },
    {
        phrasalVerb: "add up to something",
        significado: "somar, totalizar, ser igual a",
        exemplo: "Your purchases add up to $205.32."
    },
    {
        phrasalVerb: "back something up",
        significado: "dar ré, mover para trás",
        exemplo: "You'll have to back up your car so that I can get out."
    },
    {
        phrasalVerb: "back someone up",
        significado: "apoiar alguém",
        exemplo: "My wife backed me up over my decision to quit my job."
    },
    {
        phrasalVerb: "blow up",
        significado: "explodir",
        exemplo: "The racing car blew up after it crashed into the fence."
    },
    {
        phrasalVerb: "blow something up",
        significado: "encher algo soprando",
        exemplo: "We have to blow 50 balloons up for the party."
    },
    {
        phrasalVerb: "break down",
        significado: "parar de funcionar",
        exemplo: "Our car broke down at the side of the highway in the snowstorm."
    },
    {
        phrasalVerb: "break down",
        significado: "desabar emocionalmente",
        exemplo: "The woman broke down when the police told her that her son had died."
    },
    {
        phrasalVerb: "break something down",
        significado: "dividir algo em partes menores",
        exemplo: "Our teacher broke the final project down into three separate parts."
    },
    {
        phrasalVerb: "break in",
        significado: "invadir, entrar à força",
        exemplo: "Somebody broke in last night and stole our stereo."
    },
    {
        phrasalVerb: "break into something",
        significado: "entrar em algo à força",
        exemplo: "The firemen had to break into the room to rescue the children."
    },
    {
        phrasalVerb: "break something in",
        significado: "amaciar roupa ou calçado novo pelo uso",
        exemplo: "I need to break these shoes in before we run next week."
    },
    {
        phrasalVerb: "break in",
        significado: "interromper",
        exemplo: "The TV station broke in to report the news of the president's death."
    },
    {
        phrasalVerb: "break up",
        significado: "terminar um relacionamento",
        exemplo: "My boyfriend and I broke up before I moved to America."
    },
    {
        phrasalVerb: "break up",
        significado: "começar a rir muito",
        exemplo: "The kids just broke up as soon as the clown started talking."
    },
    {
        phrasalVerb: "break out",
        significado: "escapar",
        exemplo: "The prisoners broke out of jail when the guards weren't looking."
    },
    {
        phrasalVerb: "break out in something",
        significado: "desenvolver erupção ou doença de pele",
        exemplo: "I broke out in a rash after our camping trip."
    },
    {
        phrasalVerb: "bring someone down",
        significado: "deixar alguém triste",
        exemplo: "This sad music is bringing me down."
    },
    {
        phrasalVerb: "bring someone up",
        significado: "criar, educar uma criança",
        exemplo: "My grandparents brought me up after my parents died."
    },
    {
        phrasalVerb: "bring something up",
        significado: "mencionar, levantar um assunto",
        exemplo: "My mother walks out of the room when my father brings up sports."
    },
    {
        phrasalVerb: "bring something up",
        significado: "vomitar",
        exemplo: "He drank so much that he brought his dinner up in the toilet."
    },
    {
        phrasalVerb: "call around",
        significado: "ligar para várias pessoas ou lugares",
        exemplo: "We called around but we weren't able to find the car part we needed."
    },
    {
        phrasalVerb: "call someone back",
        significado: "retornar uma ligação",
        exemplo: "I called the company back but the offices were closed for the weekend."
    },
    {
        phrasalVerb: "call something off",
        significado: "cancelar",
        exemplo: "Jason called the wedding off because he wasn't in love with his fiancé."
    },
    {
        phrasalVerb: "call on someone",
        significado: "pedir resposta ou opinião",
        exemplo: "The professor called on me for question 1."
    },
    {
        phrasalVerb: "call on someone",
        significado: "visitar alguém",
        exemplo: "We called on you last night but you weren't home."
    },
    {
        phrasalVerb: "call someone up",
        significado: "telefonar para alguém",
        exemplo: "Give me your phone number and I will call you up when we are in town."
    },
    {
        phrasalVerb: "calm down",
        significado: "acalmar-se",
        exemplo: "You need to calm down before you drive the car."
    },
    {
        phrasalVerb: "not care for someone/something",
        significado: "não gostar de",
        exemplo: "I don't care for his behaviour."
    },
    {
        phrasalVerb: "catch up",
        significado: "alcançar o mesmo nível ou ponto",
        exemplo: "You'll have to run faster than that if you want to catch up with Marty."
    },
    {
        phrasalVerb: "check in",
        significado: "fazer check-in",
        exemplo: "We will get the hotel keys when we check in."
    },
    {
        phrasalVerb: "check out",
        significado: "fazer check-out",
        exemplo: "You have to check out of the hotel before 11:00 AM."
    },
    {
        phrasalVerb: "check someone/something out",
        significado: "investigar, examinar",
        exemplo: "The company checks out all new employees."
    },
    {
        phrasalVerb: "check out someone/something",
        significado: "olhar para algo ou alguém",
        exemplo: "Check out the crazy hair on that guy!"
    },
    {
        phrasalVerb: "cheer up",
        significado: "ficar mais feliz",
        exemplo: "She cheered up when she heard the good news."
    },
    {
        phrasalVerb: "cheer someone up",
        significado: "animar alguém",
        exemplo: "I brought you some flowers to cheer you up."
    },
    {
        phrasalVerb: "chip in",
        significado: "ajudar, contribuir",
        exemplo: "If everyone chips in we can get the kitchen painted by noon."
    },
    {
        phrasalVerb: "clean something up",
        significado: "limpar, arrumar",
        exemplo: "Please clean up your bedroom before you go outside."
    },
    {
        phrasalVerb: "come across something",
        significado: "encontrar algo inesperadamente",
        exemplo: "I came across these old photos when I was tidying the closet."
    },
    {
        phrasalVerb: "come apart",
        significado: "se separar, desmontar",
        exemplo: "The top and bottom come apart if you pull hard enough."
    },
    {
        phrasalVerb: "come down with something",
        significado: "ficar doente",
        exemplo: "My nephew came down with chicken pox this weekend."
    },
    {
        phrasalVerb: "come forward",
        significado: "apresentar-se voluntariamente",
        exemplo: "The woman came forward with her husband's finger prints."
    },
    {
        phrasalVerb: "come from somewhere",
        significado: "ser originário de algum lugar",
        exemplo: "The art of origami comes from Asia."
    },
    {
        phrasalVerb: "count on someone/something",
        significado: "contar com, confiar em",
        exemplo: "I am counting on you to make dinner while I am out."
    },
    {
        phrasalVerb: "cross something out",
        significado: "riscar, cortar com uma linha",
        exemplo: "Please cross out your old address and write your new one."
    },
    {
        phrasalVerb: "cut back on something",
        significado: "reduzir o consumo de algo",
        exemplo: "My doctor wants me to cut back on sweets and fatty foods."
    },
    {
        phrasalVerb: "cut something down",
        significado: "derrubar cortando",
        exemplo: "We had to cut the old tree in our yard down after the storm."
    },
    {
        phrasalVerb: "cut in",
        significado: "interromper",
        exemplo: "Your father cut in while I was dancing with your uncle."
    },
    {
        phrasalVerb: "cut in",
        significado: "entrar na frente no trânsito",
        exemplo: "The bus driver got angry when that car cut in."
    },
    {
        phrasalVerb: "cut in",
        significado: "começar a funcionar",
        exemplo: "The air conditioner cuts in when the temperature gets to 22°C."
    },
    {
        phrasalVerb: "cut something off",
        significado: "remover cortando",
        exemplo: "The doctors cut off his leg because it was severely injured."
    },
    {
        phrasalVerb: "cut something off",
        significado: "interromper fornecimento",
        exemplo: "The phone company cut off our phone because we didn't pay the bill."
    },
    {
        phrasalVerb: "cut someone off",
        significado: "remover alguém do testamento",
        exemplo: "My grandparents cut my father off when he remarried."
    },
    {
        phrasalVerb: "cut something out",
        significado: "recortar, remover parte de algo",
        exemplo: "I cut this ad out of the newspaper."
    },
    {
        phrasalVerb: "do someone/something over",
        significado: "bater, saquear",
        exemplo: "His shop was done over by a street gang."
    },
    {
        phrasalVerb: "do something over",
        significado: "fazer novamente",
        exemplo: "My teacher wants me to do my essay over because she doesn't like my topic."
    },
    {
        phrasalVerb: "do away with something",
        significado: "descartar, eliminar",
        exemplo: "It's time to do away with all of these old tax records."
    },
    {
        phrasalVerb: "do something up",
        significado: "fechar, prender",
        exemplo: "Do your coat up before you go outside."
    },
    {
        phrasalVerb: "dress up",
        significado: "vestir-se bem",
        exemplo: "It's a fancy restaurant so we have to dress up."
    },
    {
        phrasalVerb: "drop back",
        significado: "voltar para uma posição anterior",
        exemplo: "Andrea dropped back to third place when she fell off her bike."
    },
    {
        phrasalVerb: "drop in/by/over",
        significado: "aparecer sem marcar hora",
        exemplo: "I might drop in for tea sometime this week."
    },
    {
        phrasalVerb: "drop someone/something off",
        significado: "deixar alguém ou algo em algum lugar",
        exemplo: "I have to drop my sister off at work before I come over."
    },
    {
        phrasalVerb: "drop out",
        significado: "sair, abandonar curso ou atividade",
        exemplo: "I dropped out of Science because it was too difficult."
    },
    {
        phrasalVerb: "eat out",
        significado: "comer fora",
        exemplo: "I don't feel like cooking tonight. Let's eat out."
    },
    {
        phrasalVerb: "end up",
        significado: "acabar fazendo algo",
        exemplo: "We ended up renting a movie instead of going to the theatre."
    },
    {
        phrasalVerb: "fall apart",
        significado: "quebrar em pedaços",
        exemplo: "My new dress fell apart in the washing machine."
    },
    {
        phrasalVerb: "fall down",
        significado: "cair no chão",
        exemplo: "The picture that you hung up last night fell down this morning."
    },
    {
        phrasalVerb: "fall out",
        significado: "cair para fora",
        exemplo: "The money must have fallen out of my pocket."
    },
    {
        phrasalVerb: "fall out",
        significado: "começar a cair",
        exemplo: "His hair started to fall out when he was only 35."
    },
    {
        phrasalVerb: "figure something out",
        significado: "entender, descobrir a resposta",
        exemplo: "I need to figure out how to fit the piano and the bookshelf in this room."
    },
    {
        phrasalVerb: "fill something in",
        significado: "preencher formulário",
        exemplo: "Please fill in the form with your name, address, and phone number."
    },
    {
        phrasalVerb: "fill something out",
        significado: "preencher formulário",
        exemplo: "The form must be filled out in capital letters."
    },
    {
        phrasalVerb: "fill something up",
        significado: "encher completamente",
        exemplo: "I always fill the water jug up when it is empty."
    },
    {
        phrasalVerb: "find out",
        significado: "descobrir",
        exemplo: "We don't know where he lives. How can we find out?"
    },
    {
        phrasalVerb: "find something out",
        significado: "descobrir algo",
        exemplo: "Samantha found it out."
    },
    {
        phrasalVerb: "get something across/over",
        significado: "comunicar, fazer-se entender",
        exemplo: "I tried to get my point across to the judge but she wouldn't listen."
    },
    {
        phrasalVerb: "get along/on",
        significado: "dar-se bem com alguém",
        exemplo: "I was surprised how well my new girlfriend and my sister got along/on."
    },
    {
        phrasalVerb: "get around",
        significado: "ter mobilidade, locomover-se",
        exemplo: "My grandfather can get around fine in his new wheelchair."
    },
    {
        phrasalVerb: "get away",
        significado: "sair de férias, escapar da rotina",
        exemplo: "We worked so hard this year that we had to get away for a week."
    },
    {
        phrasalVerb: "get away with something",
        significado: "fazer algo errado sem ser punido",
        exemplo: "Jason always gets away with cheating in his maths tests."
    },
    {
        phrasalVerb: "get back",
        significado: "retornar, voltar",
        exemplo: "We got back from our vacation last week."
    },
    {
        phrasalVerb: "get something back",
        significado: "receber algo de volta",
        exemplo: "Liz finally got her Science notes back from my roommate."
    },
    {
        phrasalVerb: "get back at someone",
        significado: "vingar-se de alguém",
        exemplo: "My sister got back at me for stealing her shoes."
    },
    {
        phrasalVerb: "get back into something",
        significado: "voltar a se interessar por algo",
        exemplo: "I finally got back into my novel and finished it."
    },
    {
        phrasalVerb: "get on something",
        significado: "entrar em um veículo",
        exemplo: "We're going to freeze out here if you don't let us get on the bus."
    },
    {
        phrasalVerb: "get over something",
        significado: "recuperar-se de uma doença, perda ou dificuldade",
        exemplo: "I just got over the flu and now my sister has it."
    },
    {
        phrasalVerb: "get round to something",
        significado: "finalmente encontrar tempo para fazer algo",
        exemplo: "I don't know when I am going to get round to writing the thank you cards."
    },
    {
        phrasalVerb: "get together",
        significado: "encontrar-se, reunir-se socialmente",
        exemplo: "Let's get together for a BBQ this weekend."
    },
    {
        phrasalVerb: "get up",
        significado: "sair da cama, levantar-se",
        exemplo: "I got up early today to study for my exam."
    },

    {
        phrasalVerb: "give someone away",
        significado: "revelar informações confidenciais sobre alguém",
        exemplo: "His wife gave him away to the police."
    },
    {
        phrasalVerb: "give someone away",
        significado: "levar a noiva ao altar",
        exemplo: "My father gave me away at my wedding."
    },
    {
        phrasalVerb: "give something away",
        significado: "revelar um segredo",
        exemplo: "My little sister gave the surprise party away by accident."
    },
    {
        phrasalVerb: "give something away",
        significado: "dar algo gratuitamente",
        exemplo: "The library was giving away old books on Friday."
    },
    {
        phrasalVerb: "give something back",
        significado: "devolver algo emprestado",
        exemplo: "I have to give these skates back to Franz before his hockey game."
    },
    {
        phrasalVerb: "give in",
        significado: "ceder, parar de argumentar",
        exemplo: "My boyfriend didn't want to go to the ballet, but he finally gave in."
    },
    {
        phrasalVerb: "give something out",
        significado: "distribuir algo",
        exemplo: "They were giving out free perfume samples at the department store."
    },
    {
        phrasalVerb: "give something up",
        significado: "abandonar um hábito",
        exemplo: "I am giving up smoking as of January 1st."
    },
    {
        phrasalVerb: "give up",
        significado: "desistir",
        exemplo: "My maths homework was too difficult so I gave up."
    },

    {
        phrasalVerb: "go after someone",
        significado: "seguir alguém",
        exemplo: "My brother tried to go after the thief in his car."
    },
    {
        phrasalVerb: "go after something",
        significado: "buscar, correr atrás de algo",
        exemplo: "I went after my dream and now I am a published writer."
    },
    {
        phrasalVerb: "go against someone",
        significado: "competir contra ou se opor a alguém",
        exemplo: "We are going against the best soccer team in the city tonight."
    },
    {
        phrasalVerb: "go ahead",
        significado: "começar, ir em frente",
        exemplo: "Please go ahead and eat before the food gets cold."
    },
    {
        phrasalVerb: "go back",
        significado: "voltar para algum lugar",
        exemplo: "I have to go back home and get my lunch."
    },
    {
        phrasalVerb: "go out",
        significado: "sair para um evento social",
        exemplo: "We're going out for dinner tonight."
    },
    {
        phrasalVerb: "go out with someone",
        significado: "namorar, sair com alguém",
        exemplo: "Jesse has been going out with Luke since they met last winter."
    },
    {
        phrasalVerb: "go over something",
        significado: "revisar",
        exemplo: "Please go over your answers before you submit your test."
    },
    {
        phrasalVerb: "go over",
        significado: "visitar alguém próximo",
        exemplo: "I haven't seen Tina for a long time. I think I'll go over for an hour or two."
    },
    {
        phrasalVerb: "go without something",
        significado: "ficar sem algo necessário",
        exemplo: "When I was young, we went without winter boots."
    },

    {
        phrasalVerb: "grow apart",
        significado: "afastar-se com o tempo",
        exemplo: "My best friend and I grew apart after she changed schools."
    },
    {
        phrasalVerb: "grow back",
        significado: "crescer novamente, regenerar",
        exemplo: "My roses grew back this summer."
    },
    {
        phrasalVerb: "grow up",
        significado: "crescer, tornar-se adulto",
        exemplo: "When Jack grows up he wants to be a fireman."
    },
    {
        phrasalVerb: "grow out of something",
        significado: "ficar grande demais para algo",
        exemplo: "Elizabeth needs a new pair of shoes because she has grown out of her old ones."
    },
    {
        phrasalVerb: "grow into something",
        significado: "crescer até caber em algo",
        exemplo: "This bike is too big for him now, but he should grow into it by next year."
    },

    {
        phrasalVerb: "hand something down",
        significado: "passar algo usado para outra pessoa",
        exemplo: "I handed my old comic books down to my little cousin."
    },
    {
        phrasalVerb: "hand something in",
        significado: "entregar, submeter",
        exemplo: "I have to hand in my essay by Friday."
    },
    {
        phrasalVerb: "hand something out",
        significado: "distribuir",
        exemplo: "We will hand out the invitations at the door."
    },
    {
        phrasalVerb: "hand something over",
        significado: "entregar algo, geralmente contra a vontade",
        exemplo: "The police asked the man to hand over his wallet and his weapons."
    },

    {
        phrasalVerb: "hang in",
        significado: "manter-se firme, não desistir",
        exemplo: "Hang in there. I'm sure you'll find a job very soon."
    },
    {
        phrasalVerb: "hang on",
        significado: "esperar um pouco",
        exemplo: "Hang on while I grab my coat and shoes!"
    },
    {
        phrasalVerb: "hang out",
        significado: "passar tempo relaxando",
        exemplo: "Instead of going to the party we are just going to hang out at my place."
    },
    {
        phrasalVerb: "hang up",
        significado: "desligar o telefone",
        exemplo: "He didn't say goodbye before he hung up."
    },

    {
        phrasalVerb: "hold someone/something back",
        significado: "impedir alguém ou algo de avançar",
        exemplo: "I had to hold my dog back because there was a cat in the park."
    },
    {
        phrasalVerb: "hold something back",
        significado: "segurar, esconder uma emoção",
        exemplo: "Jamie held back his tears at his grandfather's funeral."
    },
    {
        phrasalVerb: "hold on",
        significado: "esperar um pouco",
        exemplo: "Please hold on while I transfer you to the Sales Department."
    },
    {
        phrasalVerb: "hold onto someone/something",
        significado: "segurar firmemente",
        exemplo: "Hold onto your hat because it's very windy outside."
    },
    {
        phrasalVerb: "hold someone/something up",
        significado: "assaltar, roubar",
        exemplo: "A man in a black mask held the bank up this morning."
    },

    {
        phrasalVerb: "keep on doing something",
        significado: "continuar fazendo algo",
        exemplo: "Keep on stirring until the liquid comes to a boil."
    },
    {
        phrasalVerb: "keep something from someone",
        significado: "esconder algo de alguém",
        exemplo: "We kept our relationship from our parents for two years."
    },
    {
        phrasalVerb: "keep someone/something out",
        significado: "manter fora, impedir a entrada",
        exemplo: "Try to keep the wet dog out of the living room."
    },
    {
        phrasalVerb: "keep something up",
        significado: "manter o desempenho",
        exemplo: "If you keep those results up you will get into a great college."
    },

    {
        phrasalVerb: "let someone down",
        significado: "decepcionar alguém",
        exemplo: "I need you to be on time. Don't let me down this time."
    },
    {
        phrasalVerb: "let someone in",
        significado: "permitir a entrada de alguém",
        exemplo: "Can you let the cat in before you go to school?"
    },

    {
        phrasalVerb: "look after someone/something",
        significado: "cuidar de alguém ou algo",
        exemplo: "I have to look after my sick grandmother."
    },
    {
        phrasalVerb: "look down on someone",
        significado: "menosprezar alguém",
        exemplo: "Ever since we stole that chocolate bar your dad has looked down on me."
    },
    {
        phrasalVerb: "look for someone/something",
        significado: "procurar alguém ou algo",
        exemplo: "I'm looking for a red dress for the wedding."
    },
    {
        phrasalVerb: "look forward to something",
        significado: "aguardar algo com expectativa",
        exemplo: "I'm looking forward to the Christmas break."
    },
    {
        phrasalVerb: "look into something",
        significado: "investigar",
        exemplo: "We are going to look into the price of snowboards today."
    },
    {
        phrasalVerb: "look out",
        significado: "tomar cuidado",
        exemplo: "Look out! That car's going to hit you!"
    },
    {
        phrasalVerb: "look out for someone/something",
        significado: "ficar atento a algo ou alguém",
        exemplo: "Don't forget to look out for snakes on the hiking trail."
    },
    {
        phrasalVerb: "look something over",
        significado: "examinar, revisar",
        exemplo: "Can you look over my essay for spelling mistakes?"
    },
    {
        phrasalVerb: "look something up",
        significado: "procurar informação",
        exemplo: "We can look her phone number up on the Internet."
    },
    {
        phrasalVerb: "look up to someone",
        significado: "admirar, respeitar muito alguém",
        exemplo: "My little sister has always looked up to me."
    },

    {
        phrasalVerb: "make something up",
        significado: "inventar, mentir",
        exemplo: "Josie made up a story about why we were late."
    },
    {
        phrasalVerb: "make up",
        significado: "fazer as pazes",
        exemplo: "We were angry last night, but we made up at breakfast."
    },
    {
        phrasalVerb: "make someone up",
        significado: "maquiar alguém",
        exemplo: "My sisters made me up for my graduation party."
    },
    {
        phrasalVerb: "mix something up",
        significado: "confundir coisas",
        exemplo: "I mixed up the twins' names again!"
    },

    {
        phrasalVerb: "pass away",
        significado: "falecer",
        exemplo: "His uncle passed away last night after a long illness."
    },
    {
        phrasalVerb: "pass out",
        significado: "desmaiar",
        exemplo: "It was so hot in the church that an elderly lady passed out."
    },
    {
        phrasalVerb: "pass something out",
        significado: "distribuir algo",
        exemplo: "The professor passed the textbooks out before class."
    },
    {
        phrasalVerb: "pass something up",
        significado: "recusar uma oportunidade",
        exemplo: "I passed up the job because I am afraid of change."
    },

    {
        phrasalVerb: "pay someone back",
        significado: "devolver dinheiro, pagar de volta",
        exemplo: "Thanks for buying my ticket. I'll pay you back on Friday."
    },
    {
        phrasalVerb: "pay for something",
        significado: "ser punido por algo ruim",
        exemplo: "That bully will pay for being mean to my little brother."
    },

    {
        phrasalVerb: "pick something out",
        significado: "escolher",
        exemplo: "I picked out three sweaters for you to try on."
    },
    {
        phrasalVerb: "point someone/something out",
        significado: "apontar, indicar",
        exemplo: "I'll point my boyfriend out when he runs by."
    },

    {
        phrasalVerb: "put something down",
        significado: "colocar algo sobre uma superfície",
        exemplo: "You can put the groceries down on the kitchen counter."
    },
    {
        phrasalVerb: "put someone down",
        significado: "insultar, humilhar alguém",
        exemplo: "The students put the substitute teacher down because his pants were too short."
    },
    {
        phrasalVerb: "put something off",
        significado: "adiar",
        exemplo: "We are putting off our trip until January because of the hurricane."
    },
    {
        phrasalVerb: "put something out",
        significado: "apagar, extinguir",
        exemplo: "The neighbours put the fire out before the firemen arrived."
    },
    {
        phrasalVerb: "put something together",
        significado: "montar, juntar",
        exemplo: "I have to put the crib together before the baby arrives."
    },
    {
        phrasalVerb: "put up with someone/something",
        significado: "tolerar, aguentar",
        exemplo: "I don't think I can put up with three small children in the car."
    },
    {
        phrasalVerb: "put something on",
        significado: "vestir, colocar roupa ou acessório",
        exemplo: "Don't forget to put on your new earrings for the party."
    },

    {
        phrasalVerb: "run into someone/something",
        significado: "encontrar inesperadamente",
        exemplo: "I ran into an old school-friend at the mall."
    },
    {
        phrasalVerb: "run over someone/something",
        significado: "atropelar, passar por cima com veículo",
        exemplo: "I accidentally ran over your bicycle in the driveway."
    },
    {
        phrasalVerb: "run over/through something",
        significado: "ensaiar, revisar",
        exemplo: "Let's run over these lines one more time before the show."
    },
    {
        phrasalVerb: "run away",
        significado: "fugir, escapar",
        exemplo: "The child ran away from home and has been missing for three days."
    },
    {
        phrasalVerb: "run out",
        significado: "acabar, não restar mais",
        exemplo: "We ran out of shampoo so I had to wash my hair with soap."
    },

    {
        phrasalVerb: "send something back",
        significado: "enviar de volta, retornar",
        exemplo: "My letter got sent back to me because I used the wrong stamp."
    },
    {
        phrasalVerb: "set something up",
        significado: "organizar, preparar",
        exemplo: "Our boss set a meeting up with the president of the company."
    },
    {
        phrasalVerb: "set someone up",
        significado: "armar uma cilada para alguém",
        exemplo: "The police set up the car thief by using a hidden camera."
    },
    {
        phrasalVerb: "shop around",
        significado: "comparar preços",
        exemplo: "I want to shop around a little before I decide on these boots."
    },
    {
        phrasalVerb: "show off",
        significado: "exibir-se",
        exemplo: "He always shows off on his skateboard."
    },
    {
        phrasalVerb: "sleep over",
        significado: "dormir na casa de alguém",
        exemplo: "You should sleep over tonight if the weather is too bad to drive home."
    },
    {
        phrasalVerb: "sort something out",
        significado: "organizar, resolver um problema",
        exemplo: "We need to sort the bills out before the first of the month."
    },
    {
        phrasalVerb: "stick to something",
        significado: "continuar fazendo algo, manter-se fiel a algo",
        exemplo: "You will lose weight if you stick to the diet."
    },

    {
        phrasalVerb: "switch something off",
        significado: "desligar",
        exemplo: "The light's too bright. Could you switch it off?"
    },
    {
        phrasalVerb: "switch something on",
        significado: "ligar",
        exemplo: "We heard the news as soon as we switched on the car radio."
    },

    {
        phrasalVerb: "take after someone",
        significado: "parecer-se com alguém da família",
        exemplo: "I take after my mother. We are both impatient."
    },
    {
        phrasalVerb: "take something apart",
        significado: "desmontar",
        exemplo: "He took the car brakes apart and found the problem."
    },
    {
        phrasalVerb: "take something back",
        significado: "devolver algo",
        exemplo: "I have to take our new TV back because it doesn't work."
    },
    {
        phrasalVerb: "take off",
        significado: "decolar",
        exemplo: "My plane takes off in five minutes."
    },
    {
        phrasalVerb: "take something off",
        significado: "tirar roupa ou acessório",
        exemplo: "Take off your socks and shoes and come in the lake!"
    },
    {
        phrasalVerb: "take something out",
        significado: "remover, levar para fora",
        exemplo: "Can you take the garbage out to the street for me?"
    },
    {
        phrasalVerb: "take someone out",
        significado: "levar alguém para sair",
        exemplo: "My grandparents took us out for dinner and a movie."
    },

    {
        phrasalVerb: "tear something up",
        significado: "rasgar em pedaços",
        exemplo: "I tore up my ex-boyfriend's letters and gave them back to him."
    },
    {
        phrasalVerb: "think back",
        significado: "relembrar",
        exemplo: "When I think back on my youth, I wish I had studied harder."
    },
    {
        phrasalVerb: "think something over",
        significado: "considerar, pensar com cuidado",
        exemplo: "I'll have to think this job offer over before I make my final decision."
    },
    {
        phrasalVerb: "throw something away",
        significado: "jogar fora, descartar",
        exemplo: "We threw our old furniture away when we won the lottery."
    },

    {
        phrasalVerb: "turn something down",
        significado: "diminuir volume, força, calor ou luz",
        exemplo: "Please turn the TV down while the guests are here."
    },
    {
        phrasalVerb: "turn something down",
        significado: "recusar",
        exemplo: "I turned the job down because I don't want to move."
    },
    {
        phrasalVerb: "turn something off",
        significado: "desligar",
        exemplo: "Your mother wants you to turn the TV off and come for dinner."
    },
    {
        phrasalVerb: "turn something on",
        significado: "ligar",
        exemplo: "It's too dark in here. Let's turn some lights on."
    },
    {
        phrasalVerb: "turn something up",
        significado: "aumentar volume, força, calor ou luz",
        exemplo: "Can you turn the music up? This is my favourite song."
    },
    {
        phrasalVerb: "turn up",
        significado: "aparecer de repente",
        exemplo: "Our cat turned up after we put posters up all over the neighbourhood."
    },

    {
        phrasalVerb: "try something on",
        significado: "experimentar roupa",
        exemplo: "I'm going to try these jeans on, but I don't think they will fit."
    },
    {
        phrasalVerb: "try something out",
        significado: "testar",
        exemplo: "I am going to try this new brand of detergent out."
    },
    {
        phrasalVerb: "use something up",
        significado: "usar tudo, esgotar",
        exemplo: "The kids used all of the toothpaste up so we need to buy some more."
    },
    {
        phrasalVerb: "wake up",
        significado: "acordar",
        exemplo: "We have to wake up early for work on Monday."
    },
    {
        phrasalVerb: "warm someone/something up",
        significado: "aquecer alguém ou algo",
        exemplo: "You can warm your feet up in front of the fireplace."
    },
    {
        phrasalVerb: "warm up",
        significado: "aquecer o corpo antes de exercício",
        exemplo: "I always warm up by doing sit-ups before I go for a run."
    },
    {
        phrasalVerb: "wear off",
        significado: "desaparecer gradualmente, passar o efeito",
        exemplo: "Most of my make-up wore off before I got to the party."
    },
    {
        phrasalVerb: "work out",
        significado: "exercitar-se",
        exemplo: "I work out at the gym three times a week."
    },
    {
        phrasalVerb: "work out",
        significado: "dar certo, funcionar conforme o planejado",
        exemplo: "Our plan worked out fine."
    },
    {
        phrasalVerb: "work something out",
        significado: "calcular, resolver",
        exemplo: "We have to work out the total cost before we buy the house."
    }
];

/**
 * Imagens do quiz “Modo 4: Por imagem” — caminhos relativos à pasta do site (use a pasta imgs/).
 * A chave é o índice do item no array phrasalVerbs acima: o primeiro objeto é 0, o segundo é 1, etc.
 *
 * Exemplo (depois de criar o ficheiro imgs/calm-down.png):
 * const phrasalVerbImagePaths = {
 *     142: 'imgs/calm-down.png'
 * };
 */
const phrasalVerbImagePaths = {
    
    74: 'imgs/find_out.png',
    89: 'imgs/get_up.png',
    98: 'imgs/give_up.png',
    104: 'imgs/go_out.png',
    133: 'imgs/look_after.png',
    135: 'imgs/look_for.png',
    166: 'imgs/run_out.png',
    190: 'imgs/turn_off.png',
    191: 'imgs/turn_on.png',

};