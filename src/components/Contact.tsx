import { useState } from 'react';
import { Mail, Phone, MapPin, Linkedin, Github } from 'lucide-react';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [sent, setSent] = useState(false);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 3000);
    setName('');
    setEmail('');
    setSubject('');
    setMessage('');
  };

  return (
    <section id="contact" className="relative py-20 px-4 max-w-6xl mx-auto">
      
      {/* Animated gradient background */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-blue-100 via-cyan-100 to-purple-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 animate-pulse-slow"></div>

      <h2 className="text-4xl font-bold text-center text-gradient mb-12 relative z-10">Contact Me</h2>

      <div className="grid md:grid-cols-2 gap-12 relative z-10">

        {/* Contact Info */}
        <div className="bg-white dark:bg-gray-700 p-8 rounded-2xl shadow-lg flex flex-col gap-6 hover:scale-105 transition-transform duration-300">
          <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">Get in Touch</h3>
          <p className="text-gray-600 dark:text-gray-300">Email me or use the contact form — I answer within a few days.</p>

          <div className="space-y-4">
            {[
              { icon: <Mail className="w-5 h-5" />, value: 'mukhashreemukhashree@gmail.com', link: 'mailto:mukhashreemukhashree@gmail.com' },
              { icon: <Phone className="w-5 h-5" />, value: '+91 810707218', link: 'tel:+91810707218' },
              { icon: <MapPin className="w-5 h-5" />, value: 'Tiruchirappalli' },
              { icon: <Linkedin className="w-5 h-5" />, value: 'linkedin.com/in/mukhashree-s-042aa5257', link: 'https://www.linkedin.com/in/mukhashree-s-042aa5257/' },
              { icon: <Github className="w-5 h-5" />, value: 'github.com/shreesha69', link: 'https://github.com/shreesha69' },
            ].map((c, i) => (
              <div key={i} className="flex items-center gap-3 text-gray-700 dark:text-gray-200">
                <div className="p-2 rounded-full bg-gradient-to-r from-blue-200 via-cyan-200 to-purple-200 dark:from-gray-800 dark:via-gray-700 dark:to-gray-600">
                  {c.icon}
                </div>
                {c.link ? (
                  <a href={c.link} target="_blank" className="hover:underline">{c.value}</a>
                ) : (
                  <span>{c.value}</span>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Contact Form */}
        <form onSubmit={submit} className="bg-white dark:bg-gray-700 p-8 rounded-2xl shadow-lg flex flex-col gap-4 hover:scale-105 transition-transform duration-300">
          <input
            value={name} onChange={(e) => setName(e.target.value)}
            placeholder="Your Name"
            required
            className="p-3 rounded-xl border border-gray-200 dark:border-gray-600 bg-transparent focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-cyan-400 transition duration-300 shadow-sm"
          />
          <input
            value={email} onChange={(e) => setEmail(e.target.value)}
            placeholder="Your Email"
            type="email"
            required
            className="p-3 rounded-xl border border-gray-200 dark:border-gray-600 bg-transparent focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-cyan-400 transition duration-300 shadow-sm"
          />
          <input
            value={subject} onChange={(e) => setSubject(e.target.value)}
            placeholder="Subject"
            className="p-3 rounded-xl border border-gray-200 dark:border-gray-600 bg-transparent focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-cyan-400 transition duration-300 shadow-sm"
          />
          <textarea
            value={message} onChange={(e) => setMessage(e.target.value)}
            placeholder="Message" rows={5}
            className="p-3 rounded-xl border border-gray-200 dark:border-gray-600 bg-transparent focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-cyan-400 transition duration-300 shadow-sm"
          ></textarea>
          <button
            type="submit"
            className="mt-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-cyan-400 text-white rounded-xl font-medium hover:scale-105 transition transform duration-300 shadow-md"
          >
            {sent ? 'Sent ✅' : 'Send Message'}
          </button>
        </form>

      </div>

      <style>
        {`
          @keyframes pulse-slow {
            0%, 100% { opacity: 0.7; }
            50% { opacity: 0.4; }
          }
          .animate-pulse-slow {
            animation: pulse-slow 6s ease-in-out infinite;
          }
        `}
      </style>
    </section>
  );
};

export default Contact;
