import { useState, useEffect } from 'react';
import bgLion from '../imgs/BG_lion.png';

const Certificates = ({ isDark }) => {
  const [selectedCertificate, setSelectedCertificate] = useState(null);
  const backgroundOpacity = 0.5; // Ajuste este valor entre 0 (invisível) e 1 (totalmente visível)

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
      title: 'CERT1',
      issuer: 'CERTIFICADORA',
      date: 'DATA',
      image: 'CAMINHO DA IMAGEM',
      credentialUrl: '#',
    },
    {
      id: 1,
      title: 'CERT2',
      issuer: 'CERTIFICADORA',
      date: 'DATA',
      image: 'CAMINHO DA IMAGEM',
      credentialUrl: '#',
    },{
      id: 1,
      title: 'CERT3',
      issuer: 'CERTIFICADORA',
      date: 'DATA',
      image: 'CAMINHO DA IMAGEM',
      credentialUrl: '#',
    },{
      id: 1,
      title: 'CERT4',
      issuer: 'CERTIFICADORA',
      date: 'DATA',
      image: 'CAMINHO DA IMAGEM',
      credentialUrl: '#',
    },{
      id: 1,
      title: 'CERT5',
      issuer: 'CERTIFICADORA',
      date: 'DATA',
      image: 'CAMINHO DA IMAGEM',
      credentialUrl: '#',
    },{
      id: 1,
      title: 'CERT6',
      issuer: 'CERTIFICADORA',
      date: 'DATA',
      image: 'CAMINHO DA IMAGEM',
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
              {/* Imagem placeholder do certificado */}
              <div className="aspect-[4/3] bg-gradient-to-br from-purple-500/20 to-blue-500/20 relative overflow-hidden flex items-center justify-center">
                <div className="text-4xl opacity-20">{cert.title.charAt(0)}</div>
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
            <div className="text-6xl opacity-20">{selectedCertificate.title.charAt(0)}</div>
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
