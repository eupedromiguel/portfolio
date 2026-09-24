import { useState, useEffect } from 'react';
import bgLion from '../imgs/BG_lion.png';
import googleCyberBadge from '../imgs/google-cybersecurity-badge.png';

// Ícones por categoria (usados no lugar da foto do certificado, que contém dados pessoais)
const categoryIcons = {
  security: (
    <path d="M12 3l7 3v5c0 4.5-3 8.5-7 10-4-1.5-7-5.5-7-10V6l7-3zm-3 9l2 2 4-4" />
  ),
  dev: <path d="M8 8l-4 4 4 4m8-8l4 4-4 4m-6 2l4-12" />,
  support: (
    <path d="M14.7 6.3a4 4 0 00-5.4 5.4L4 17l3 3 5.3-5.3a4 4 0 005.4-5.4l-2.5 2.5-2.5-.5-.5-2.5 2.5-2.5z" />
  ),
  network: (
    <path d="M9 3h6v5H9V3zM3 16h6v5H3v-5zm12 0h6v5h-6v-5zM12 8v4m-6 4v-4h12v4" />
  ),
  law: <path d="M12 4v16m-7 0h14M6 8h12M6 8l-3 6a3 3 0 006 0L6 8zm12 0l-3 6a3 3 0 006 0l-3-6z" />,
  admin: (
    <path d="M4 8h16v11H4V8zm5 0V6a1 1 0 011-1h4a1 1 0 011 1v2M4 13h16" />
  ),
};

const categoryLabels = {
  security: 'Segurança da Informação',
  dev: 'Desenvolvimento',
  support: 'Suporte Técnico',
  network: 'Redes e Segurança',
  law: 'Direito Digital',
  admin: 'Administração',
};

const CertificateCover = ({ cert, size = 'sm' }) => {
  const iconSize = size === 'lg' ? 'w-20 h-20' : 'w-14 h-14';

  return (
    <div className="h-full w-full bg-gradient-to-br from-purple-500/20 to-blue-500/20 relative overflow-hidden flex flex-col items-center justify-center gap-3 p-6">
      {cert.badge ? (
        <img
          src={cert.badge}
          alt={`Badge ${cert.title}`}
          className={size === 'lg' ? 'h-48 object-contain' : 'h-32 object-contain'}
        />
      ) : (
        <>
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={`${iconSize} opacity-80`}
          >
            {categoryIcons[cert.category]}
          </svg>
          <span className="text-xs uppercase tracking-widest opacity-60 text-center">
            {cert.issuerShort}
          </span>
        </>
      )}
    </div>
  );
};

const Certificates = ({ isDark }) => {
  const [selectedCertificate, setSelectedCertificate] = useState(null);
  const backgroundOpacity = 0.3; // Ajustar este valor entre 0 (invisível) e 1 (totalmente visível)

  // Bloquear scroll quando modal estiver aberto
  useEffect(() => {
    if (selectedCertificate) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedCertificate]);

  const certificates = [
    {
      id: 1,
      title: 'ISO/IEC 27001:2022 Information Security Associate™',
      issuer: 'SkillFront',
      issuerShort: 'SkillFront',
      category: 'security',
      date: '31/07/2026',
      credentialUrl: '#',
    },
    {
      id: 2,
      title: 'Google Cybersecurity Certificate',
      issuer: 'Google',
      issuerShort: 'Google',
      category: 'security',
      badge: googleCyberBadge,
      date: '',
      credentialUrl: '#',
    },
    {
      id: 9,
      title: 'Cisco Networking Academy',
      issuer: 'Cisco',
      issuerShort: 'Cisco',
      category: 'network',
      date: '',
      credentialUrl: '#',
      courses: [
        'Networking Basics',
        'Hardware Basics',
        'Operating Systems Basics',
        'Networking Devices and Initial Configuration',
        'Network Addressing and Basic Troubleshooting',
        'Introduction to Cybersecurity',
        'Network Support and Security',
        'Endpoint Security',
      ],
    },
    {
      id: 3,
      title: 'Programador Web',
      issuer: 'Instituto Federal de Educação, Ciência e Tecnologia do Rio Grande do Sul',
      issuerShort: 'IFRS',
      category: 'dev',
      date: '10/07/2025',
      credentialUrl: 'https://moodle.ifrs.edu.br/mod/simplecertificate/verify.php?code=68701f93-027c-41aa-a7f9-81d00aa81322',
    },
    {
      id: 4,
      title: 'Estrutura de Dados',
      issuer: 'Instituto Federal de Educação, Ciência e Tecnologia do Rio Grande do Sul',
      issuerShort: 'IFRS',
      category: 'dev',
      date: '05/03/2025',
      credentialUrl: 'https://aprendamais.mec.gov.br/mod/simplecertificate/verify.php?code=67c8efb6-b7c8-4970-9342-a46fac1f02a4',
    },
    {
      id: 5,
      title: 'Crimes Cibernéticos, Direito Autoral',
      issuer: 'Instituto Federal de Educação, Ciência e Tecnologia do Rio Grande do Sul',
      issuerShort: 'IFRS',
      category: 'law',
      date: '07/01/2025',
      credentialUrl: 'https://aprendamais.mec.gov.br/mod/simplecertificate/verify.php?code=677d7052-04ac-4fbb-9ab8-0b00ac1f030b',
    },
    {
      id: 6,
      title: 'Assistente Administrativo',
      issuer: 'Instituto Federal de Educação, Ciência e Tecnologia do Rio Grande do Sul',
      issuerShort: 'IFRS',
      category: 'admin',
      date: '22/05/2025',
      credentialUrl: 'https://moodle.ifrs.edu.br/mod/simplecertificate/verify.php?code=682f6e86-70dc-4af4-b9d4-2a100ade0005',
    },
    {
      id: 7,
      title: 'Analista de Suporte Técnico',
      issuer: 'Fênix Cursos',
      issuerShort: 'Fênix Cursos',
      category: 'support',
      date: '13/10/2012',
      credentialUrl: '#',
    },
    {
      id: 8,
      title: 'Manutenção em Notebooks',
      issuer: 'Fênix Cursos',
      issuerShort: 'Fênix Cursos',
      category: 'support',
      date: '02/05/2014',
      credentialUrl: '#',
    },
  ];

  return (
    <>
      <section id="certificados" className="min-h-screen py-20 px-8 relative overflow-hidden">
        {/* Background com opacidade controlável */}
        <div
          className="absolute inset-0 -z-10"
          style={{
            backgroundImage: `url(${bgLion})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            opacity: backgroundOpacity,
          }}
        />
        <div className="max-w-6xl mx-auto">
          {/* Título da seção */}
          <div className="mb-16 text-left">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Cursos e certificados</h2>
            <div className="h-1 w-32 bg-gradient-to-r from-blue-500 to-purple-500"></div>
          </div>

          {/* Grid de certificados */}
          <div className="grid md:grid-cols-3 gap-6">
          {certificates.map((cert) => (
            <div
              key={cert.id}
              onClick={() => setSelectedCertificate(cert)}
              className={`group rounded-2xl overflow-hidden transition-all duration-300 hover:scale-105 ${
                isDark
                  ? 'bg-white/5 hover:bg-white/10 border border-white/10'
                  : 'bg-black/5 hover:bg-black/10 border border-black/10'
              }`}
            >
              {/* Capa do certificado */}
              <div className="aspect-[4/3]">
                <CertificateCover cert={cert} />
              </div>

              {/* Informações do certificado */}
              <div className="p-4 space-y-2">
                <p className="text-xs uppercase tracking-wider opacity-50">{categoryLabels[cert.category]}</p>
                <h3 className="font-bold text-lg line-clamp-2">{cert.title}</h3>
                <p className="text-sm opacity-70">{cert.issuer}</p>
                {cert.courses && (
                  <p className="text-xs opacity-50">{cert.courses.length} cursos · clique para ver</p>
                )}
                {cert.date && <p className="text-xs opacity-50">{cert.date}</p>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Modal de certificado */}
    {selectedCertificate && (
      <div
        className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center p-8"
        style={{ zIndex: 10000, cursor: 'none' }}
        onClick={() => setSelectedCertificate(null)}
      >
        <div
          className={`max-w-xl w-full max-h-full overflow-y-auto rounded-2xl ${
            isDark ? 'bg-zinc-900 border border-white/10' : 'bg-white border border-black/10'
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Capa do certificado */}
          <div className="h-64">
            <CertificateCover cert={selectedCertificate} size="lg" />
          </div>

          {/* Detalhes */}
          <div className="p-6 space-y-3">
            <p className="text-xs uppercase tracking-wider opacity-50">{categoryLabels[selectedCertificate.category]}</p>
            <h3 className="text-2xl font-bold">{selectedCertificate.title}</h3>
            <p className="text-lg opacity-70">{selectedCertificate.issuer}</p>
            {selectedCertificate.date && (
              <p className="text-sm opacity-50">Emitido em {selectedCertificate.date}</p>
            )}

            {selectedCertificate.courses && (
              <ul className="grid sm:grid-cols-2 gap-2 pt-2">
                {selectedCertificate.courses.map((course) => (
                  <li
                    key={course}
                    className={`text-sm px-3 py-2 rounded-lg ${
                      isDark ? 'bg-white/5 border border-white/10' : 'bg-black/5 border border-black/10'
                    }`}
                  >
                    {course}
                  </li>
                ))}
              </ul>
            )}

            <div className="flex gap-3 pt-3">
              {selectedCertificate.credentialUrl !== '#' && (
                <a
                  href={selectedCertificate.credentialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`px-5 py-2 rounded-full text-sm transition-all ${
                    isDark
                      ? 'bg-white text-black hover:bg-white/90'
                      : 'bg-black text-white hover:bg-black/90'
                  }`}
                >
                  Ver credencial
                </a>
              )}
              <button
                onClick={() => setSelectedCertificate(null)}
                className={`px-5 py-2 rounded-full border text-sm transition-all ${
                  isDark
                    ? 'border-white/30 hover:bg-white/10'
                    : 'border-black/30 hover:bg-black/10'
                }`}
              >
                Fechar
              </button>
            </div>
          </div>
        </div>
      </div>
    )}
  </>
  );
};

export default Certificates;
