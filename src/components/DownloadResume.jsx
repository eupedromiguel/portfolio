const DownloadResume = ({ isDark }) => {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/Currículo - Pedro Miguel.pdf';
    link.download = 'Currículo - Pedro Miguel.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="py-20 px-8">
      <div className="max-w-4xl mx-auto text-center">
        <div
          className={`rounded-2xl p-12 ${
            isDark
              ? 'bg-gradient-to-br from-purple-500/10 to-blue-500/10 border border-white/10'
              : 'bg-gradient-to-br from-purple-500/10 to-blue-500/10 border border-black/10'
          }`}
        >
          <h2 className="text-4xl font-bold mb-4">Baixe meu currículo</h2>
          <p className="text-lg opacity-80 mb-8">
            Confira minhas qualificações, experiências e habilidades completas
          </p>
          <button
            onClick={handleDownload}
            className={`px-8 py-4 rounded-full transition-all flex items-center gap-3 mx-auto ${
              isDark
                ? 'bg-white text-black hover:bg-white/90'
                : 'bg-black text-white hover:bg-black/90'
            }`}
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              />
            </svg>
            Download Currículo (PDF)
          </button>
        </div>
      </div>
    </section>
  );
};

export default DownloadResume;
