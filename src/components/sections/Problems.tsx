const problems = [
  {
    icon: '🧶',
    description: '78% orang tua mengalami kesulitan mengajarkan komunikasi pada anak.'
  },
  {
    icon: '🧠',
    description: '20% anak mengalami speech delay, mempengaruhi kepercayaan diri dan kemampuan komunikasi.'
  },
  {
    icon: '📖',
    description: '75% anak kesulitan dalam belajar, mempengaruhi kemampuan akademis dan sosial.'
  }
];

export default function Problems() {
  return (
    <section className="py-16 bg-gradient-to-b from-primary-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-primary-100 text-primary-800 px-4 py-2 rounded-full mb-4">
            <span className="text-sm font-medium">Fakta</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Banyak Ayah Bunda Yang Mengalami Hal Serupa?
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {problems.map((problem, index) => (
            <div 
              key={index} 
              className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 border border-gray-100 text-center"
            >
              <div className="text-5xl mb-4">{problem.icon}</div>
              <p className="text-gray-700 leading-relaxed">{problem.description}</p>
            </div>
          ))}
        </div>

        <p className="text-center text-lg font-medium text-gray-700 mt-12">
          Selamat! Ayah Bunda sudah menemukan solusinya di halaman ini
        </p>
      </div>
    </section>
  );
}