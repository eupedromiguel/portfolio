import fotoPedro from '../imgs/foto-pedro1.png';

const About = ({ isDark }) => {
  return (
    <section id="sobre" className="min-h-screen py-20 px-8">
      <div className="max-w-6xl mx-auto">
        {/* Título da seção */}
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Sobre mim</h2>
          <div className="h-1 w-32 bg-gradient-to-r from-blue-500 to-purple-500"></div>
        </div>

        {/* Conteúdo */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
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
            />
          </div>

          {/* Texto */}
          <div className="space-y-6">
            <h3 className="text-3xl font-bold">
              Trazendo experiência de produção musical onde passei anos transformando ideias criativas em projetos concretos. 
            </h3>

            <div className="space-y-4 opacity-80 leading-relaxed">
              <p>
                A tecnologia me acompanha desde cedo, e hoje finalmente uno esse interesse com meus estudos e projetos pessoais. Na produção musical, aprendi que bom código, assim como boa música, está nos detalhes. A mesma atenção que dediquei à organização de arquivos de projetos complexos e à qualidade técnica de mix e masterização, hoje aplico na estrutura de código limpo, arquitetura de pastas e desenvolvimento de aplicações. A experiência lidando com artistas, produtores e gestores fortaleceu minha capacidade de traduzir necessidades criativas em soluções técnicas viáveis, equilibrando inovação, prazos e estabilidade. Essa vivência contribuiu diretamente para minha comunicação, visão de produto e responsabilidade técnica. Atualmente finalizando curso técnico de Análise e Desenvolvimento de Sistemas e desenvolvendo meu primeiro projeto web full stack : um sistema de agendamento médico com autenticação (firebase), automação de e-mails e gestão de consultas. Reforço minha aprendizagem consultando documentações oficiais e aplicando boas práticas, priorizando cibersegurança, arquitetura escalável e com boa manutenibilidade. Busco oportunidades para contribuir com projetos reais e continuar evoluindo como desenvolvedor. 
              </p>
            </div>

            {/* CTA */}
            <div className="pt-6">
              <h4 className="text-2xl font-bold mb-4">
                Pronto para dar vida às suas ideias?
              </h4>
              <p className="opacity-80 mb-6">
                Posso impulsionar seu projeto ou fazer parte da sua equipe.
              </p>

              <div className="flex gap-4">
                <a
                  href="mailto:pedromiguelataides@gmail.com"
                  className={`px-8 py-3 rounded-full transition-all ${
                    isDark
                      ? 'bg-white text-black hover:bg-white/90'
                      : 'bg-black text-white hover:bg-black/90'
                  }`}
                >
                  Entre em contato comigo
                </a>
                <a
                  href="https://linkedin.com/in/pedro-ataides"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`px-8 py-3 rounded-full border transition-all flex items-center gap-2 ${
                    isDark
                      ? 'border-white/30 hover:bg-white/10'
                      : 'border-black/30 hover:bg-black/10'
                  }`}
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                  LinkedIn
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
