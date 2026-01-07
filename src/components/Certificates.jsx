import { useState, useEffect } from 'react';
import bgLion from '../imgs/BG_lion.png';
import programWebImg from '../imgs/Program_web-img.jpg';
import EstruturaDados from '../imgs/estrutura_de_dados-img.jpg';
import DirAutorCiber from '../imgs/Dir.Autoral_Crim.Ciber-img.jpg';
import AssisAdmin from '../imgs/Assis.Admin-img.jpg';
import AnalistSuporTec from '../imgs/Analista_Supor_Tec-img.jpg';
import ManutNoteb from '../imgs/Noteb-img.jpg';

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
      title: 'Programador Web',
      issuer: 'Instituto Federal de Educação, Ciência e Tecnologia do Rio Grande do Sul',
      date: '10/07/2025',
      image: programWebImg,
      credentialUrl: 'https://moodle.ifrs.edu.br/mod/simplecertificate/verify.php?code=68701f93-027c-41aa-a7f9-81d00aa81322',
    },
    {
      id: 1,
      title: 'Estrutura de Dados',
      issuer: 'Instituto Federal de Educação, Ciência e Tecnologia do Rio Grande do Sul',
      date: '05/03/2025',
      image: EstruturaDados,
      credentialUrl: 'https://aprendamais.mec.gov.br/mod/simplecertificate/verify.php?code=67c8efb6-b7c8-4970-9342-a46fac1f02a4',
    },{
      id: 1,
      title: 'Crimes Cibernéticos, Direito Autoral',
      issuer: 'Instituto Federal de Educação, Ciência e Tecnologia do Rio Grande do Sul',
      date: '07/01/2025',
      image: DirAutorCiber,
      credentialUrl: 'https://aprendamais.mec.gov.br/mod/simplecertificate/verify.php?code=677d7052-04ac-4fbb-9ab8-0b00ac1f030b',
    },{
      id: 1,
      title: 'Analista de Suporte Técnico',
      issuer: 'Fênix Cursos',
      date: '13/10/2012',
      image: AnalistSuporTec,
      credentialUrl: '#',
    },{
      id: 1,
      title: 'Manutenção em Notebooks',
      issuer: 'Fênix Cursos',
      date: '02/05/2014',
      image: ManutNoteb,
      credentialUrl: '#',
    },{
      id: 1,
      title: 'Assistente Administrativo',
      issuer: 'Instituto Federal de Educação, Ciência e Tecnologia do Rio Grande do Sul',
      date: '22/05/2025',
      image: AssisAdmin,
      credentialUrl: 'https://moodle.ifrs.edu.br/mod/simplecertificate/verify.php?code=682f6e86-70dc-4af4-b9d4-2a100ade0005',
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
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Certificados</h2>
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
              {/* Imagem do certificado */}
              <div className="aspect-[4/3] bg-gradient-to-br from-purple-500/20 to-blue-500/20 relative overflow-hidden flex items-center justify-center">
                {cert.image && cert.image !== 'CAMINHO DA IMAGEM' ? (
                  <img src={cert.image} alt={cert.title} className="object-cover" />
                ) : (
                  <div className="text-4xl opacity-20">{cert.title.charAt(0)}</div>
                )}
              </div>

              {/* Informações do certificado */}
              <div className="p-4 space-y-2">
                <h3 className="font-bold text-lg line-clamp-2">{cert.title}</h3>
                <p className="text-sm opacity-70">{cert.issuer}</p>
                <p className="text-xs opacity-50">{cert.date}</p>
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
          className={`max-w-3xl w-full rounded-2xl overflow-hidden ${
            isDark ? 'bg-zinc-900 border border-white/10' : 'bg-white border border-black/10'
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Imagem do certificado */}
          <div className="aspect-video bg-gradient-to-br from-purple-500/20 to-blue-500/20 relative overflow-hidden flex items-center justify-center">
            {selectedCertificate.image && selectedCertificate.image !== 'CAMINHO DA IMAGEM' ? (
              <img src={selectedCertificate.image} alt={selectedCertificate.title} className="w-full h-full object-contain" />
            ) : (
              <div className="text-6xl opacity-20">{selectedCertificate.title.charAt(0)}</div>
            )}
          </div>

          {/* Detalhes */}
          <div className="p-6 space-y-3">
            <h3 className="text-2xl font-bold">{selectedCertificate.title}</h3>
            <p className="text-lg opacity-70">{selectedCertificate.issuer}</p>
            <p className="text-sm opacity-50">Emitido em {selectedCertificate.date}</p>

            <div className="flex gap-3 pt-3">
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
