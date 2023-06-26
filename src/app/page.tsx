
import Button from "@/components/Button";
import { IGame } from "@/interfaces/igame";
import { GameList } from '@/components/GameList'



export default async function Home() {




  return (
    <main className="pb-[80px]">

      <h1 className="font-bold text-white text-4xl text-center mb-20 lg:text-2xl lg:mb-10">Sobre o projeto</h1>

      <p className="text-lg text-white lg:text-base"> Esse foi meu primeiro projeto com Nextjs e Tailwind. </p>
      <p className="text-lg text-white lg:text-base">Por já entnder como funciona, apliquei a estilização no modo Go Horse, com um olho no código e outra na documentação (também tive que anotar no papel algumas classes pois são muuuuitas, então é certo que essas anotações vão ficar comigo por um tempo ainda).</p>
      <p className="text-lg text-white lg:text-base">Já tive alguma experiência com tailwind anteriormente, porém em projetos do tipo tutorial, nunca havia feito um projeto com essa tecnologia por conta própria. </p>
      <p className="text-lg text-white lg:text-base">Quanto ao Nextjs, devido a demanda do mercado era a próxima tech na minha lista de coisas para estudar.</p>
      <p className="text-lg text-white lg:text-base">Para aprender, algo, normalmente leio a documentação com calma ou vejo longos vídeos, buscando entender conceito por conceito.</p>
      <p className="text-lg text-white lg:text-base">Nesse projeto as coisas foram diferentes, aprendi sobre Next ainda na versão 12 atarvés de alguns vídeos no Youtube e logo em seguida fui atrás de entender as mudanças da versão 13.</p>
      <p className="text-lg text-white lg:text-base">Por ser algo novo tive algumas dificuldades que não teria normalmente, como aplicar uma fonte (passei um pouco de trabalho pra descobrir como fazer)</p>
      <p className="text-lg text-white lg:text-base mb-4">Desenvolver algo com requisitos a serem seguidos, utilizando tecnologias desconhecidas, foi um desafio divertido. Poderia ter feito tranquilamente com Vite e React Router. Porém nunca chegaremos ao próximo nível se não sairmos da zona de conforto</p>
      <p className="text-lg text-white lg:text-base italic">ps: esse projeto vai para o meu portfólio, então vou fazer algumas mudanças ao longo da semana, como aplicar uma troca de temas e Radix UI</p>

    </main>
  )
}
