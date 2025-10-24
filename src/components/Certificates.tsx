import { FiExternalLink } from 'react-icons/fi';

type Cert = {
  name: string;
  issuer?: string;
  date?: string; 
  icon?: string; 
  link?: string; 
};

const certs: Cert[] = [
  {
    name: 'HTML & CSS Internship',
    issuer: 'Internship',
    date: '2023',
    icon: '/assets/icons/badge.png',
    link: 'https://drive.google.com/file/d/1AIe3dVferdlnNSbw0-g2EIsK01X1f1gJ/view?usp=sharing',
  },
  {
    name: 'Tech Vaseegrah Internship',
    issuer: 'Internship',
    date: '2023',
    icon: '/assets/icons/badge.png',
    link: 'https://drive.google.com/file/d/1L554dNvekxryKZ1nNic7NMpwaKLrLIni/view?usp=sharing',
  },
  {
    name: 'NPTEL DBMS',
    issuer: 'NPTEL',
    date: '2024',
    icon: '/assets/icons/badge.png',
    link: 'https://drive.google.com/file/d/1moDwGVQD0kJoVj6o7UQGa7HIqdzThW0X/view?usp=sharing',
  },
  {
    name: 'JLPT N4',
    issuer: 'Japanese Language Proficiency Test',
    date: '2025',
    icon: '/assets/icons/badge.png',
    link: 'https://drive.google.com/file/d/1NPJ2Xite-OCCAV48GaSFpB8f-Yz6DTbS/view?usp=sharing',
  },
  {
    name: 'AWS Cloud Practitioner',
    issuer: 'Amazon',
    date: '2025',
    icon: '/assets/icons/badge.png',
    link: 'https://drive.google.com/file/d/1Xk49Zwt-1a4ha7C4v-R6AfwW7E_cWKeN/view?usp=sharing',
  },
];

// Sort certificates by ascending date
certs.sort((a, b) => (parseInt(a.date || '0') - parseInt(b.date || '0')));

const Certificates = () => {
  return (
    <section
      id="certificates"
      className="relative py-20 px-4 overflow-hidden bg-white dark:bg-gray-800 scroll-mt-20"
    >
      {/* Subtle animated background */}
      <div className="absolute inset-0 -z-10 opacity-20">
        <div className="w-full h-full bg-[radial-gradient(circle_at_30%_30%,_#93c5fd,_transparent_60%)] animate-wave"></div>
      </div>

      <h2 className="text-3xl font-bold text-center text-gradient mb-8 relative z-10">
        Certificates
      </h2>

      <div className="max-w-6xl mx-auto grid sm:grid-cols-2 md:grid-cols-3 gap-6 relative z-10">
        {certs.map((c) => (
          <div
            key={c.name}
            className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-lg hover:scale-105 transform transition duration-300 flex flex-col items-center text-center"
          >
            {c.icon && (
              <div className="bg-blue-50 dark:bg-gray-800 p-3 rounded-full mb-3">
                <img src={c.icon} alt={c.name} className="w-16 h-16 object-contain" />
              </div>
            )}
            <div className="font-semibold text-blue-600 dark:text-cyan-300 mb-1">
              {c.name}
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-300">{c.issuer}</div>
            <div className="text-xs text-gray-400 mt-1">{c.date}</div>
            {c.link && (
              <a
                href={c.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center gap-1 text-sm text-blue-600 dark:text-cyan-300 hover:underline"
              >
                View Certificate <FiExternalLink size={16} />
              </a>
            )}
          </div>
        ))}
      </div>

      <style>
        {`
          @keyframes wave {
            0% { transform: translateY(0px); }
            50% { transform: translateY(10px); }
            100% { transform: translateY(0px); }
          }
          .animate-wave {
            animation: wave 8s ease-in-out infinite;
          }
        `}
      </style>
    </section>
  );
};

export default Certificates;
