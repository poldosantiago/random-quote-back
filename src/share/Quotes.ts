const quotes = [
   {
     quote: "A educação é a arma mais poderosa que você pode usar para mudar o mundo",
     author: "Nelson Mandela (1918-2013), ex-presidente da África do Sul",
     category: "política"
   },
   {
     quote: "A publicidade é uma das formas mais interessantes e difíceis da literatura moderna",
     author: "Aldous Huxley (1864-1963), escritor inglês",
     category: "literatura"
   },
   {
     quote: "A arte é a mentira que nos permite conhecer a verdade",
     author: "Pablo Picasso (1881-1973), artista espanhol",
     category: "artes"
   },
   {
     quote: "A marca da cultura de consumo é a redução do 'ser' para 'ter' ",
     author: "John Piper (1946), pastor estadunidense",
     category: "religião"
   },
   {
     quote: "É preciso erguer o povo à altura da cultura e não rebaixar a cultura ao nível do povo",
     author: "Autora: Simone de Beauvoir (1908-1986), intelectual francesa",
     category: "geral"
   },
   {
     quote: "A inclusão acontece quando se aprende com as diferenças e não com as igualdades",
     author: "Paulo Freire (1921-1997), educador brasileiro",
     category: "educação"
   },
   {
     quote: "Ler um bom livro é como conversar com as melhores mentes do passado",
     author: "René Descartes (1596-1650), filósofo francês",
     category: "filosofia"
   },
   {
     quote: "Escolhe um trabalho de que gostes e não terás que trabalhar nem um dia na tua vida",
     author: "Confúcio (551 a.C.-479 a.C.), filósofo chinês",
     category: "filosofia"
   },
   {
     quote: "Nenhuma qualidade humana é mais intolerável do que a intolerância",
     author: "Giacomo Leopard (1798-1837), escritor italiano",
     category: "literatura"
   },
   {
     quote: "O mundo jamais será tranquilo enquanto não se extinguir o patriotismo da raça humana",
     author: "George Bernard Shaw (1856-1950), jornalista irlandês",
     category: "geral"
   },
   {
     quote: "O que é muito difícil é você vencer a injustiça secular, que dilacera o Brasil em dois países distintos: o país dos privilegiados e o país dos despossuídos",
     author: "Ariano Suassuna (1927-2014), escritor brasileiro",
     category: "literatura"
   },
   {
     quote: "O maior erro que um homem pode cometer é sacrificar a sua saúde a qualquer outra vantagem",
     author: "Arthur Schopenhauer (1788-1860), filósofo alemão",
     category: "filosofia"
   },
   {
     quote: "Existem apenas duas classes sociais, a dos que não comem e a dos que não dormem com medo da revolução dos que não comem",
     author: "Milton Santos (1926-2001), geógrafo brasileiro",
     category: "geral"
   },
   {
     quote: "Não são as crises que mudam o mundo, e sim nossa reação a elas",
     author: "Zygmunt Bauman (1925-2017), sociólogo polonês",
     category: "geral"
   },
   {
     quote: "O ato mais corajoso é pensar por você mesma Em voz alta!",
     author: "Autora: Coco Chanel (1883-1971), estilista francesa",
     category: "geral"
   },
   {
     quote: "A água é o veículo da natureza",
     author: "Leonardo da Vinci (1452-1519), polímata italiano",
     category: "geral"
   },
   {
     quote: "Todos somos iguais e temos direito a perseguir nossa própria versão da felicidade",
     author: "Barack Obama (1961), ex-presidente dos Estados Unidos",
     category: "política"
   },
   {
     quote: "Tornou-se chocantemente óbvio que a nossa tecnologia excedeu a nossa humanidade",
     author: "Albert Einstein (1879-1955), físico alemão",
     category: "ciência"
   },
   {
     quote: "Eu não quero que vocês estejam esperançosos Quero que vocês estejam em pânico Quero que ajam como se a casa estivesse pegando fogo, porque ela está",
     author: "Autora: Greta Thunberg (2003), ativista ambiental",
     category: "geral"
   },
   {
     quote: "Agora é hora de sair do vale escuro e desolado da segregação para o caminho iluminado da justiça racial",
     author: "Martin Luther King Jr. (1929-1968), pastor da Igreja Batista e ativista pelos direitos civis dos negros nos Estados Unidos",
     category: "política"
   },
   {
     quote: "Humanidade vive divórcio da vida na Terra",
     author: "Ailton Krenak (1953), liderança indígena, ambientalista e escritor",
     category: "geral"
   },
   {
     quote: "Minha luta diária é para ser reconhecida como sujeito, impor minha existência numa sociedade que insiste em negá-la",
     author: "Autora: Djamila Ribeiro(1980), filósofa e feminista brasileira",
     category: "filosofia"
   },
   {
     quote: "Não se curem além da conta Gente curada demais é gente chata Todo mundo tem um pouco de loucura",
     author: "Nise da Silveira (1905- 1999), médica psiquiatra brasileira",
     category: "geral"
   },
   {
     quote: "Se você não for cuidadoso, os jornais vão acabar te fazendo odiar as pessoas que estão sendo oprimidas e adorar os opressores",
     author: "Malcolm X (1925-1965), ativista dos direitos dos negros",
     category: "geral"
   },
   {
     quote: "A violência, seja qual for a maneira como ela se manifesta, é sempre uma derrota",
     author: "Autora: Jean-Paul Sartre (1905-1980), filósofo e escritor francês",
     category: "filosofia"
   },
   {
     quote: "A natureza não faz milagres, faz revelações",
     author: "Carlos Drummond de Andrade (1902-1087), escritor brasileiro",
     category: "literatura"
   },
   {
     quote: "Preconceito é opinião sem conhecimento",
     author: "Voltaire (1694-1778), filósofo francês",
     category: "filosofia"
   },
   {
     quote: "A internet é muito mais que uma tecnologia É um meio de comunicação, de interação e de organização social",
     author: "Manuel Castells (1942), sociólogo espanhol",
     category: "sociologia"
   },
   {
     quote: "A verdadeira felicidade está na própria casa, entre as alegrias da família",
     author: "Leon Tolstoi (1828-1910), escritor russo",
     category: "literatura"
   },
   {
     quote: "Faz da tua vida um reflexo da sociedade que desejas",
     author: "Mahatma Gandhi (1869-1948), ativista indiano",
     category: "religião"
   }
 ];

 export default quotes;