import React from 'react';

const FolderIcon = ({ className }) => {
  return (
    <svg
      className={className}
      fill="currentColor"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path d="M10 4l2 2h8c1.1 0 2 .9 2 2v10c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2h6z" />
    </svg>
  );
};

const FileIcon = ({ className }) => {
  return (
    <svg
      className={className}
      fill="currentColor"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path d="M14 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V8l-6-6zm1 7V3.5L19.5 9H15z" />
    </svg>
  );
};

/**
 * TreeNode:
 * - label: string
 * - type: 'folder' | 'file'
 * - children?: TreeNode[]
 */
const Tree = ({ nodes, isDark, level = 0 }) => {
  const lineColor = isDark ? 'bg-white/15' : 'bg-black/15';
  const textColor = isDark ? 'text-white/80' : 'text-black/80';

  return (
    <ul className={`${level === 0 ? '' : 'mt-2'} space-y-1`}>
      {nodes.map((node, index) => {
        const isLast = index === nodes.length - 1;

        return (
          <li
            key={`${node.label}-${index}`}
            className="relative"
          >
            {/* Linhas (somente se não for raiz) */}
            {level > 0 && (
              <>
                {/* Linha vertical */}
                {!isLast ? (
                  <span
                    className={`absolute left-[10px] top-0 bottom-0 w-px ${lineColor}`}
                    aria-hidden="true"
                  />
                ) : (
                  <span
                    className={`absolute left-[10px] top-0 h-[14px] w-px ${lineColor}`}
                    aria-hidden="true"
                  />
                )}

                {/* Linha horizontal */}
                <span
                  className={`absolute left-[10px] top-[14px] w-[18px] h-px ${lineColor}`}
                  aria-hidden="true"
                />
              </>
            )}

            <div
              className={`flex items-start gap-2 ${textColor}`}
              style={{
                paddingLeft: level === 0 ? 0 : 36,
              }}
            >
              {/* Ícone */}
              {node.type === 'folder' ? (
                <FolderIcon
                  className={`w-5 h-5 mt-[2px] flex-shrink-0 ${isDark ? 'text-blue-400' : 'text-blue-600'
                    }`}
                />
              ) : (
                <FileIcon
                  className={`w-5 h-5 mt-[2px] flex-shrink-0 ${isDark ? 'text-white/70' : 'text-black/60'
                    }`}
                />
              )}

              {/* Label */}
              <span className="leading-relaxed">
                {node.label}
              </span>
            </div>

            {/* Filhos */}
            {Array.isArray(node.children) && node.children.length > 0 && (
              <Tree
                nodes={node.children}
                isDark={isDark}
                level={level + 1}
              />
            )}
          </li>
        );
      })}
    </ul>
  );
};

const Experience = ({ isDark }) => {
  const experiences = [
    {
      company: 'Junior | Estágiário',
      role: 'Curso técnico em Análise e Desenvolvimento de Sistemas',
      period: 'UNICORP - Faculdades, desde julho de 2025',
      current: true,
      description:
        'Soft Skills : Documentação clara de código e APIs para facilitar colaboração, Debugging sistemático, análise de logs para resolução de problemas e estudo constante de novas tecnologias.',
      responsibilitiesTree: [
        {
          label: 'Linguagens',
          type: 'folder',
          children: [
            { label: 'JavaScript (ES6+)', type: 'file' },
          ],
        },
        {
          label: 'Front-end',
          type: 'folder',
          children: [
            { label: 'HTML5', type: 'file' },
            { label: 'Tailwind CSS', type: 'file' },
            { label: 'React.js', type: 'file' },
            { label: 'Next.js', type: 'file' },
          ],
        },
        {
          label: 'Back-end',
          type: 'folder',
          children: [
            { label: 'Node.js', type: 'file' },
            { label: 'APIs REST', type: 'file' },
          ],
        },
        {
          label: 'Banco de Dados',
          type: 'folder',
          children: [
            { label: 'PostgreSQL', type: 'file' },
            { label: 'MySQL', type: 'file' },
            { label: 'NoSQL (Firestore)', type: 'file' },
          ],
        },
        {
          label: 'Ferramentas',
          type: 'folder',
          children: [
            { label: 'Git e GitHub', type: 'file' },
            { label: 'VS Code', type: 'file' },
            { label: 'Vite', type: 'file' },
          ],
        },
        {
          label: 'Arquitetura',
          type: 'folder',
          children: [
            { label: 'MVC', type: 'file' },
            { label: 'Clean Architecture', type: 'file' },
            { label: 'Vite', type: 'file' },
          ],
        },
        {
          label: 'Deploy',
          type: 'folder',
          children: [
            { label: 'Firebase', type: 'file' },
            { label: 'Vercel', type: 'file' },
            { label: 'Railway', type: 'file' },
            { label: 'Heroku', type: 'file' },
          ],
        },
        {
          label: 'Conceitos',
          type: 'folder',
          children: [
            { label: 'DevOps', type: 'file' },
            { label: 'Cibersegurança', type: 'file' },
            { label: 'SEO', type: 'file' },
            { label: 'Acessibilidade', type: 'file' },
            { label: 'Docker', type: 'file' },
          ],
        },
      ],
    },
  ];

  return (
    <section id="experiencia" className="min-h-screen py-20 px-8">
      <div className="max-w-6xl mx-auto">
        {/* Título da seção */}
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Experiência
          </h2>
          <div className="h-1 w-32 bg-gradient-to-r from-blue-500 to-purple-500"></div>
        </div>

        {/* Lista de experiências */}
        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="grid md:grid-cols-[300px_1fr] gap-8"
            >
              {/* Coluna esquerda - Empresa */}
              <div className="space-y-2">
                <h3 className="text-xl font-semibold">{exp.company}</h3>
                <p className="opacity-70">{exp.location}</p>
              </div>

              {/* Coluna direita - Detalhes */}
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <h4 className="text-2xl font-light">{exp.role}</h4>
                </div>

                <div className="flex items-center gap-3">
                  <span className="opacity-70">{exp.period}</span>
                  <span className="opacity-30">—</span>
                  {exp.current && (
                    <span
                      className={`px-3 py-1 rounded-full text-sm ${isDark
                          ? 'bg-green-500/20 text-green-400 border border-green-500/30'
                          : 'bg-green-500/20 text-green-600 border border-green-500/30'
                        }`}
                    >
                      Atual
                    </span>
                  )}
                </div>

                <p className="opacity-80 leading-relaxed">{exp.description}</p>

                {/* Árvore de responsabilidades (hierarquia + linhas) */}
                <div className="mt-4">
                  <Tree
                    nodes={[
                      {
                        label: 'Hard Skills',
                        type: 'folder',
                        children: exp.responsibilitiesTree,
                      },
                    ]}
                    isDark={isDark}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
