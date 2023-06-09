import { Inter } from 'next/font/google'
import {
  AiFillTwitterCircle,
  AiFillGithub,
  AiFillYoutube,
  AiFillPhone,
  AiFillMail
} from "react-icons/ai";
import Image from "next/image";
import deved from "../../public/vampeta.png";
import webdev from "../../public/webdev.png";
import design from "../../public/design.png";
import trid from "../../public/3dimage.png";
import web1 from "../../public/web1.png";
import web2 from "../../public/web2.png";
import web3 from "../../public/web3.png";
import web4 from "../../public/web4.png";
import web5 from "../../public/web5.png";
import web6 from "../../public/web6.png";
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    
    <main className='bg-gunmetal '>
      <head>
        <title> /nyeru/ </title>
      </head>
      <section  className='min-h-screen px-10'> 
      <nav className='py-10 mb-4 flex justify-between'>
        <h1 className='text-3xl text-columbia font-extrabold '>Meu portfólio</h1>
          <ul className='flex items-center'> 
            
          </ul>
        
      </nav>
      <div className='p-5'>
  <div className="flex flex-col items-center sm:flex-row">
    <div className="text-center">
      <h2 className='text-5xl sm:text-8xl py-3 text-columbia font-burtons font-medium'>Nyeru</h2>
      <h3 className='text-2xl sm:text-4xl font-medium text-columbia p-3'>Desenvolvedor, Ilustrador, Modelador e Designer</h3>
      <p className='text-base sm:text-2xl text-columbia pb-12 md:px-10 sm:px-7'> Como desenvolvedor com vasta experiência em design e modelagem 3D, possuo habilidades especializadas para a criação de sistemas de administração escolar. Ao longo de minha carreira, tenho trabalhado em diversas oportunidades nesta área, consolidando meu conhecimento em projetos de alta qualidade. Convido-o(a) a conhecer alguns exemplos de meu trabalho abaixo.</p>
      <div className="text-5xl sm:text-8xl flex justify-center gap-20 py-7 text-seaweed">
      <a href="https://twitter.com/NyeruArt" target="_blank" rel="noopener noreferrer">
        <div className="cursor-pointer">
          <AiFillTwitterCircle />
        </div>
      </a>
      <a href="https://github.com/Thenyeru" target="_blank" rel="noopener noreferrer">
        <div className="cursor-pointer">
          <AiFillGithub />
        </div>
      </a>
      <a href="https://www.youtube.com/channel/UCb4T7KJdOON-NAzoVuc-N_w" target="_blank" rel="noopener noreferrer">
        <div className="cursor-pointer">
          <AiFillYoutube />
        </div>
  </a>
</div>
    </div>
    <div className="mx-auto sm:ml-auto sm:mx-0">
      <div className="mx-auto bg-gradient-to-b from-gray-600 rounded-full w-100 h-100 relative overflow-hidden mt-10 md:h-96 md:w-96">
        <Image src={deved} layout="fill" objectFit="cover" alt={''}  />
      </div>
    </div>
  </div>
</div>
        </section>
        <section className='px-10'>
          <div>
            <h3 className="text-3xl py-1 text-columbia text-black font-medium">Serviços que eu ofereço</h3>
            <p className="text-xl py-2 leading-8 text-columbia text-gray-800">
             Com uma formação artística sólida e vasta experiência em desenvolvimento web e design, ofereço soluções simples e intuitivas para atender às necessidades de meus clientes e associados. Com conhecimento aprofundado das mais modernas ferramentas do mercado, sou capaz de implementar projetos de alta qualidade que atendam às expectativas dos clientes. Além disso, minha habilidade no atendimento ao cliente e resolução de problemas me permite desenvolver soluções úteis e eficientes para o ambiente de trabalho de meus clientes.
            </p>
            <p className="text-md text-columbia py-2 pb-11 leading-8 text-gray-800">
              Eu faço serviços variados de desenvolvimento, design de marcas e ate ensino e treinamento de alunos 
            </p>
          </div>
          <div className="lg:flex gap-5">
            
            <div className="text-center p-10 rounded-xl my-10 bg-darkslate flex-1">
              <Image className='mx-auto' src={design} width={145} height={145} alt={''} />
              <h3 className="text-2xl text-columbia font-medium pt-8 pb-2  ">
                Nova identidade visual
              </h3>
              <p className='text-columbia'>
                Utilizando minhas habilidades de ilustração trarei vida a seus websites e a seu ambiente empresarial.
              </p>
              <h4 className="py-4 font-medium text-white">Ferramentas de ilustração que uso</h4>
              <p className="text-columbia py-1">Adobe Illustrator</p>
              <p className="text-columbia py-1">Clip Studio Paint</p>
              <p className="text-columbia py-1">Corel draw</p>
            </div>
            <div className="text-center p-10 rounded-xl my-10 bg-darkslate flex-1">
              <Image className='mx-auto' src={webdev} width={150} height={150} alt={''} />
              <h3 className="text-2xl text-columbia font-medium pt-8 pb-2">
                Criando seu website
              </h3>
              <p className="text-columbia">
                Tem uma ideia para um novo website? torne o realidade
              </p>
              <h4 className="py-4 pt-9 font-medium text-white">minhas especializações</h4>
              <p className="text-columbia py-1">HTML</p>
              <p className="text-columbia py-1">CSS</p>
              <p className="text-columbia py-1">Javascript</p>
            </div>
            <div className="text-center p-10 rounded-xl my-10 bg-darkslate flex-1">
              <Image className='mx-auto' src={trid} width={150} height={150} alt={''} />
              <h3 className="text-2xl text-columbia font-medium pt-8 pb-2">Modelagem 3D</h3>
              <p className="text-columbia py-2">
                Precisa de algum elemento 3d ou de uma animação personalizada? colocarei sua imaginação na terceira dimensão
              </p>
              <h4 className="py-4 pt-5 font-medium text-white">Apps de modelagem e sculpt que uso</h4>
              <p className="text-columbia py-1">Blender</p>
              <p className="text-columbia py-1">Maya</p>
              <p className="text-columbia py-1">ZBrush</p>
          </div>
        </div>
        <div className='py-10 pb- text-center text-columbia font-medium text-5xl'>
          <p>
            Exemplos de criação
          </p>
          <p className='py-10 text-columbia font-medium text-2xl' >
            Sites que desenvolvi
          </p>
        </div>
        <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
            <div className="basis-1/3 flex-1 ">
              <Image
              className="rounded-lg object-cover"
              layout="responsive"
              src={web1} alt={''}              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
              className="rounded-lg object-cover"
              layout="responsive"
              src={web2} alt={''}              />
            </div>
        </div>
        <p className='py-10 text-columbia text-center font-medium text-2xl' >
            Designs que criei
          </p>
        <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
            <div className="basis-1/3 flex-1 ">
              <Image
              className="rounded-lg object-cover"
              layout="responsive"
              src={web3} alt={''}              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
              className="rounded-lg object-cover"
              layout="responsive"
              src={web4} alt={''}              />
            </div>
            <div className='w-full py-10 text-center'>
              <p className=' text-columbia font-medium text-2xl' >
                modelos que criei
              </p>
            </div>
          </div>
        <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
            <div className="basis-1/3 flex-1 ">
              <Image
              className="rounded-lg object-cover"
              layout="responsive"
              src={web5} alt={''}              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
              className="rounded-lg object-cover"
              layout="responsive"
              src={web6} alt={''}              />
            </div>
        </div>
      
      </section>
      <footer>
    <section>
      <div className='bg-darkslate w-auto h-90' >
        <p className='text-6xl text-center pb-9 py-5 font-medium text-columbia'>
          Entre em contato
        </p>
        <div className="px-5 sm:px-10 pt-6 flex items-center">
  <AiFillPhone className="text-6xl sm:text-8xl pb-4 text-seaweed" />
  <p className="text-2xl px-2 sm:px-6 pb-10 text-columbia font-medium">(31)99149-0625</p>
</div>
        <div className="px-5 sm:px-10 flex items-center text-justify">
  <AiFillMail className="text-6xl sm:text-8xl pb-4 text-seaweed" />
  <p className="text-2xl px-2 sm:px-6 pb-10 text-columbia font-medium">nyeruartcontact@gmail.com</p>
          <form method="POST" action="https://formsubmit.co/emanuelgoncalvescontato@gmail.com">
  <div class="mb-4">
    <label class="block  font-bold mb-2" for="name">
      Name
    </label>
    <input class="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline" id="name" name="name" type="text" placeholder="Name">
  </div>
  <div class="mb-4">
    <label class="block  font-bold mb-2" for="email">
      Email
    </label>
    <input class="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline" id="email" name="email" type="email" placeholder="Email">
  </div>
  <div class="mb-4">
    <label class="block font-bold mb-2" for="message">
      Message
    </label>
    <textarea class="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline" id="message" name="message" placeholder="Message"></textarea>
  </div>
  <div class="flex items-center justify-center">
    <button class=" text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
      Send Message
    </button>
  </div>
</form>
</div>
        
      </div>
    </section>
    </footer>
  </main>
  )
}
