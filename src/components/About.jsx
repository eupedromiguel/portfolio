import fotoPedro from '../imgs/foto-pedro1.png';
import bgUniverse from '../imgs/BG_universe.jpg';

const About = ({ isDark }) => {
  const backgroundOpacity = 0.5; // Ajuste este valor entre 0 (invisível) e 1 (totalmente visível)

  return (
    <section id="sobre" className="min-h-screen py-12 md:py-20 px-4 md:px-8 relative overflow-hidden">
      {/* Background com opacidade controlável */}
      <div
        className="absolute inset-0 -z-10"
        style={{
          backgroundImage: `url(${bgUniverse})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          opacity: backgroundOpacity,
        }}
      />
      <div className="max-w-6xl mx-auto">
        {/* Título da seção */}
        <div className="mb-8 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">Sobre mim</h2>
          <div className="h-1 w-24 md:w-32 bg-gradient-to-r from-blue-500 to-purple-500"></div>
        </div>

        {/* Conteúdo */}
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Imagem */}
          <div
            className={`rounded-2xl overflow-hidden ${
              isDark ? 'bg-white/5 border border-white/10' : 'bg-black/5 border border-black/10'
            }`}
          >
            <img
              src={fotoPedro}
              alt="Pedro Miguel"
              className="w-full h-full object-cover aspect-square"
              style={{ objectPosition: 'center center' }}
            />
          </div>

          {/* Texto */}
          <div className="space-y-4 md:space-y-6">
            <h3 className="text-xl md:text-2xl lg:text-3xl font-bold">
              Trazendo experiência de produção musical onde passei anos transformando ideias criativas em projetos concretos.
            </h3>

            <div className="space-y-4 opacity-80 leading-relaxed text-sm md:text-base">
              <p>
                A tecnologia me acompanha desde cedo, e hoje finalmente uno esse interesse com meus estudos e projetos pessoais. Na produção musical, aprendi que bom código, assim como boa música, está nos detalhes. A mesma atenção que dediquei à organização de arquivos de projetos complexos e à qualidade técnica de mix e masterização, hoje aplico na estrutura de código limpo, arquitetura de pastas e desenvolvimento de aplicações. A experiência lidando com artistas, produtores e gestores fortaleceu minha capacidade de traduzir necessidades criativas em soluções técnicas viáveis, equilibrando inovação, prazos e estabilidade. Essa vivência contribuiu diretamente para minha comunicação, visão de produto e responsabilidade técnica. Atualmente finalizando curso técnico de Análise e Desenvolvimento de Sistemas e desenvolvendo meu primeiro projeto web full stack : um sistema de agendamento médico com autenticação (firebase), automação de e-mails e gestão de consultas. Reforço minha aprendizagem consultando documentações oficiais e aplicando boas práticas, priorizando cibersegurança, arquitetura escalável e com boa manutenibilidade. Busco oportunidades para contribuir com projetos reais e continuar evoluindo como desenvolvedor.
              </p>
            </div>

            {/* CTA */}
            <div className="pt-4 md:pt-6">
              <h4 className="text-xl md:text-2xl font-bold mb-3 md:mb-4">
                Pronto para dar vida às suas ideias?
              </h4>
              <p className="opacity-80 mb-4 md:mb-6 text-sm md:text-base">
                Posso impulsionar seu projeto ou fazer parte da sua equipe.
                Email : pedromiguelataides@gmail.com
              </p>

              <div className="flex flex-wrap gap-2 md:gap-3">

                <a
                  href="https://linkedin.com/in/pedro-ataides"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`px-3 md:px-4 py-2 md:py-3 rounded-full border transition-all flex items-center gap-2 text-sm md:text-base ${
                    isDark
                      ? 'border-white/30 hover:bg-white/10'
                      : 'border-black/30 hover:bg-black/10'
                  }`}
                >
                  <svg className="w-4 h-4 md:w-5 md:h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                  LinkedIn
                </a>

                <a
                  href="https://wa.me/5511930293249"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`px-3 md:px-4 py-2 md:py-3 rounded-full border transition-all flex items-center gap-2 text-sm md:text-base ${
                    isDark
                      ? 'border-white/30 hover:bg-white/10'
                      : 'border-black/30 hover:bg-black/10'
                  }`}
                >
                  <svg className="w-4 h-4 md:w-5 md:h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                  </svg>
                  WhatsApp
                </a>

                <a
                  href="https://github.com/eupedromiguel"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`px-3 md:px-4 py-2 md:py-3 rounded-full border transition-all flex items-center gap-2 text-sm md:text-base ${
                    isDark
                      ? 'border-white/30 hover:bg-white/10'
                      : 'border-black/30 hover:bg-black/10'
                  }`}
                >
                  <svg className="w-4 h-4 md:w-5 md:h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                  GitHub
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
