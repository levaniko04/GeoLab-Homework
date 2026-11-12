import React, { useState } from 'react';
import { Button } from './Button';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.email) {
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 5000);
      setFormData({ name: '', email: '', message: '' });
    }
  };

  return (
    <section id="contact" className="py-12 sm:py-20 relative">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white dark:bg-[#161b22] border border-slate-200 dark:border-[#30363d] rounded-2xl overflow-hidden shadow-xl dark:shadow-2xl transition-colors duration-300">
          {/* ტერმინალის ჰედერი */}
          <div className="px-4 py-3 bg-slate-100 dark:bg-[#0d1117] border-b border-slate-200 dark:border-[#30363d] flex items-center justify-between font-code text-xs">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-[#ff5f56]"></span>
              <span className="w-3 h-3 rounded-full bg-[#ffbd2e]"></span>
              <span className="w-3 h-3 rounded-full bg-[#27c93f]"></span>
              <span className="text-slate-500 dark:text-slate-400 ml-2">send-message.sh</span>
            </div>
            <span className="text-emerald-600 dark:text-emerald-400 font-semibold">● Live Connection</span>
          </div>

          <div className="p-6 sm:p-10">
            <div className="text-center max-w-xl mx-auto mb-8">
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white font-sans">
                დამიკავშირდით
              </h2>
              <p className="text-slate-500 dark:text-slate-400 text-xs sm:text-sm mt-2 font-code">
                $ curl -X POST https://api.levan.dev/contact
              </p>
            </div>

            {submitted && (
              <div className="mb-6 p-4 rounded-xl bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-300 dark:border-emerald-500/50 text-emerald-800 dark:text-emerald-300 text-xs sm:text-sm font-code text-center font-bold">
                ✓ 200 OK: შეტყობინება წარმატებით გაიგზავნა!
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4 font-code">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs text-slate-600 dark:text-slate-400 mb-1.5">
                    input: name
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="ლევან მელქონიანი"
                    className="w-full px-3.5 py-2.5 rounded-lg bg-slate-50 dark:bg-[#0d1117] border border-slate-300 dark:border-[#30363d] text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-600 focus:outline-none focus:border-cyan-500 text-xs sm:text-sm transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs text-slate-600 dark:text-slate-400 mb-1.5">
                    input: email
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="example@mail.com"
                    className="w-full px-3.5 py-2.5 rounded-lg bg-slate-50 dark:bg-[#0d1117] border border-slate-300 dark:border-[#30363d] text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-600 focus:outline-none focus:border-cyan-500 text-xs sm:text-sm transition-all"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs text-slate-600 dark:text-slate-400 mb-1.5">
                  input: payload (message)
                </label>
                <textarea
                  rows={4}
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="მომწერეთ თქვენი პროექტის ან შეთავაზების შესახებ..."
                  className="w-full px-3.5 py-2.5 rounded-lg bg-slate-50 dark:bg-[#0d1117] border border-slate-300 dark:border-[#30363d] text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-600 focus:outline-none focus:border-cyan-500 text-xs sm:text-sm transition-all resize-none"
                ></textarea>
              </div>

              <div className="text-center pt-2">
                <Button type="submit" variant="primary" size="lg" className="w-full sm:w-auto min-w-[200px]">
                  dispatch(sendMessage) 🚀
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
