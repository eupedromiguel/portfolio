import clinicaImg from '../imgs/clinica-img.png';
import artistFyImg from '../imgs/artistFy-img.jpg';
import portfolio from '../imgs/portfolio-img.jpg';

const Projects = ({ isDark }) => {
  const projects = [
    {
      title: 'Clínica Dr. Roberto Nigro',
      description:
        'Sistema de agendamento médico completo com autenticação, automação de e-mails e gestão de consultas.',
      image: clinicaImg,
      technologies: ['Tailwind CSS', 'Firebase', 'React.js', 'Node.js', 'Vite', 'GCP', 'Nodemailer'],
      githubUrl: 'https://github.com/eupedromiguel/dr-roberto-nigro',
      liveUrl: 'https://consultorio-app-2156a.web.app/',
    },
    {
      title: 'artistFy',
      description:
        'Aplicação Web para pesquisar dados de artistas no Spotify, visualização de faixas e albúns, além da geração e exportação de relatórios em Excel e PDF, utilizando dados públicos da Spotify Web API',
      image: artistFyImg,
      technologies: ['Tailwind CSS', 'Vercel', 'React.js', 'Node.js', 'Vite', 'Express'],
      githubUrl: 'https://github.com/eupedromiguel/artistfy-app',
      liveUrl: 'https://artistfy.vercel.app/',
    },
    {
      title: 'Este portfólio',
      description:
        'Desenvolvido como parte do meu processo de consolidação em front-end moderno, utilizando React, Vite e Tailwind CSS. A interface foi pensada para oferecer uma experiência clara e objetiva, com atenção a responsividade, consistência visual e boas práticas de UI.',
      image: portfolio,
      technologies: ['Tailwind CSS', 'Vercel', 'React.js', 'Node.js', 'Vite'],
      githubUrl: 'https://github.com/eupedromiguel/portfolio',
      liveUrl: 'LINK DO SITE',
    },
  ];

  return (
    <section id="projetos" className="min-h-screen py-20 px-8">
      <div className="max-w-6xl mx-auto">
        {/* Título da seção */}
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Projetos</h2>
          <div className="h-1 w-32 bg-gradient-to-r from-blue-500 to-purple-500"></div>
        </div>

        {/* Grid de projetos */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`group rounded-2xl overflow-hidden transition-all duration-300 ${
                isDark
                  ? 'bg-white/5 hover:bg-white/10 border border-white/10'
                  : 'bg-black/5 hover:bg-black/10 border border-black/10'
              } ${index === 0 ? 'md:col-span-2' : ''}`}
            >
              {/* Imagem do projeto */}
              <div className="aspect-video bg-gradient-to-br from-purple-500/20 to-blue-500/20 relative overflow-hidden">
                {project.image ? (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center text-6xl opacity-20">
                    {project.title.charAt(0)}
                  </div>
                )}
              </div>

              {/* Conteúdo do card */}
              <div className="p-6 space-y-4">
                <h3 className="text-2xl font-bold">{project.title}</h3>

                {/* Tags de tecnologias */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className={`px-3 py-1 rounded-full text-sm ${
                        tech === 'Beta'
                          ? isDark
                            ? 'bg-orange-500/20 text-orange-400 border border-orange-500/30'
                            : 'bg-orange-500/20 text-orange-600 border border-orange-500/30'
                          : isDark
                          ? 'bg-blue-500/20 text-blue-400 border border-blue-500/30'
                          : 'bg-blue-500/20 text-blue-600 border border-blue-500/30'
                      }`}
                    >
                      {tech}
                    </span>
                  ))}
                  {project.additionalTech?.map((tech, idx) => (
                    <span
                      key={`add-${idx}`}
                      className={`px-3 py-1 rounded-full text-sm ${
                        isDark
                          ? 'bg-purple-500/20 text-purple-400 border border-purple-500/30'
                          : 'bg-purple-500/20 text-purple-600 border border-purple-500/30'
                      }`}
                    >
                      {tech}
                    </span>
                  ))}
                  {project.additionalTech && project.additionalTech.length > 2 && (
                    <span
                      className={`px-3 py-1 rounded-full text-sm ${
                        isDark
                          ? 'bg-gray-500/20 text-gray-400 border border-gray-500/30'
                          : 'bg-gray-500/20 text-gray-600 border border-gray-500/30'
                      }`}
                    >
                      Firebase
                    </span>
                  )}
                </div>

                <p className="opacity-80 leading-relaxed">{project.description}</p>

                {/* Botões de ação */}
                <div className="flex gap-3 pt-4">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center gap-2 px-4 py-2 rounded-full border transition-all ${
                      isDark
                        ? 'border-white/30 hover:bg-white/10'
                        : 'border-black/30 hover:bg-black/10'
                    }`}
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                    Repositório
                  </a>
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center gap-2 px-4 py-2 rounded-full border transition-all ${
                      isDark
                        ? 'border-white/30 hover:bg-white/10'
                        : 'border-black/30 hover:bg-black/10'
                    }`}
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                    Acesse o site
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
