import { useState, useRef } from 'react';
import { Mail, Phone, MapPin, Linkedin, Github, Send, MailCheck } from 'lucide-react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [sent, setSent] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    emailjs.sendForm(
      'service_3592ldj',      // your Service ID
      'template_f4ytchp',     // your Template ID
      formRef.current,
      'I6ahiif8WoVyzhdym'     // your Public Key
    ).then(
      () => {
        setSent(true); // only show after success
        setTimeout(() => setSent(false), 3000);
        formRef.current?.reset();
      },
      (error) => {
        alert('Oops! Something went wrong. Please try again.');
        console.error('EmailJS error:', error.text);
      }
    );
  };

  return (
    <section id="contact" className="relative py-20 px-4 max-w-6xl mx-auto overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-blue-100 via-cyan-100 to-purple-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 animate-pulse-slow"></div>

      <h2 className="text-4xl font-bold text-center text-gradient mb-12 relative z-10">
        Contact Me
      </h2>

      <div className="grid md:grid-cols-2 gap-12 relative z-10">
        {/* Contact Info */}
        <div className="bg-white dark:bg-gray-700 p-8 rounded-2xl shadow-lg flex flex-col gap-6 hover:scale-[1.02] transition-transform duration-300">
          <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">Get in Touch</h3>
          <p className="text-gray-600 dark:text-gray-300">Email me or use the contact form — I answer within a few days.</p>

          <div className="space-y-4">
            {[
              { icon: <Mail className="w-5 h-5" />, value: 'mukhashreemukhashree@gmail.com', link: 'mailto:mukhashreemukhashree@gmail.com' },
              { icon: <Phone className="w-5 h-5" />, value: '+91 8610707218', link: 'tel:+918610707218' },
              { icon: <MapPin className="w-5 h-5" />, value: 'Tiruchirappalli' },
              { icon: <Linkedin className="w-5 h-5" />, value: 'linkedin.com/in/mukhashree-s-042aa5257', link: 'https://www.linkedin.com/in/mukhashree-s-042aa5257/' },
              { icon: <Github className="w-5 h-5" />, value: 'github.com/shreesha69', link: 'https://github.com/shreesha69' },
            ].map((c, i) => (
              <div key={i} className="flex items-center gap-3 text-gray-700 dark:text-gray-200">
                <div className="p-2 rounded-full bg-gradient-to-r from-blue-200 via-cyan-200 to-purple-200 dark:from-gray-800 dark:via-gray-700 dark:to-gray-600">{c.icon}</div>
                {c.link ? <a href={c.link} target="_blank" rel="noopener noreferrer" className="hover:underline break-words">{c.value}</a> : <span>{c.value}</span>}
              </div>
            ))}
          </div>
        </div>

        {/* Contact Form */}
        <form ref={formRef} onSubmit={submit} className="bg-white dark:bg-gray-700 p-8 rounded-2xl shadow-lg flex flex-col gap-4 hover:scale-[1.02] transition-transform duration-300">
          {/* Hidden time field for EmailJS */}
          <input type="hidden" name="time" value={new Date().toLocaleString()} />

          <input name="name" placeholder="Your Name" required className="p-3 rounded-xl border border-gray-200 dark:border-gray-600 bg-transparent focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-cyan-400 transition duration-300 shadow-sm" />
          <input name="email" placeholder="Your Email" type="email" required className="p-3 rounded-xl border border-gray-200 dark:border-gray-600 bg-transparent focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-cyan-400 transition duration-300 shadow-sm" />
          <input name="subject" placeholder="Subject" className="p-3 rounded-xl border border-gray-200 dark:border-gray-600 bg-transparent focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-cyan-400 transition duration-300 shadow-sm" />
          <textarea name="message" placeholder="Message" rows={5} className="p-3 rounded-xl border border-gray-200 dark:border-gray-600 bg-transparent focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-cyan-400 transition duration-300 shadow-sm"></textarea>

          <button type="submit" className="mt-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-cyan-400 text-white rounded-xl font-medium flex items-center justify-center gap-2 hover:scale-[1.02] transition transform duration-300 shadow-md">
            {sent ? (
              <>
                Sent <MailCheck className="w-5 h-5 text-green-400 animate-bounce" />
              </>
            ) : (
              <>
                Send Message <Send className="w-5 h-5" />
              </>
            )}
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
