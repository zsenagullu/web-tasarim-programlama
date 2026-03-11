import { useState } from 'react';
import Card from './components/Card';
import Input from './components/Input';
import Button from './components/Button';
import UIKit from './pages/UIKit';

function App() {
  const [showUIKit, setShowUIKit] = useState(false);

  if (showUIKit) {
    return (
      <div className="relative font-sans text-accent bg-surface">
        <button 
          onClick={() => setShowUIKit(false)} 
          className="fixed top-4 left-4 z-50 bg-primary text-accent font-bold px-4 py-2 rounded-lg shadow-lg hover:bg-yellow-500 transition-colors"
        >
          &larr; Return to Gossip
        </button>
        <UIKit />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-surface dark:bg-accent text-accent dark:text-surface transition-colors font-sans">
      <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-0 focus:left-0 bg-secondary text-white p-2 z-50">
        Skip to Content
      </a>

      <header className="sticky top-0 z-40 bg-surface/90 dark:bg-accent/90 backdrop-blur-md border-b border-primary/20 shadow-sm">
        <div className="max-w-6xl mx-auto px-4 py-4 flex flex-col sm:flex-row justify-between items-center gap-3">
          <h1 className="text-2xl font-bold font-serif italic text-accent dark:text-primary tracking-wider">
            Zeliha Sena Güllü
          </h1>
          <nav aria-label="Ana navigasyon">
            <ul className="flex flex-wrap items-center gap-4 text-sm uppercase tracking-widest font-semibold text-accent dark:text-surface">
              <li>
                <a href="#spotted" className="hover:text-primary transition-colors">
                  Spotted
                </a>
              </li>
              <li>
                <a href="#details" className="hover:text-primary transition-colors">
                  Details
                </a>
              </li>
              <li>
                <a href="#confess" className="hover:text-primary transition-colors">
                  Confess
                </a>
              </li>
              <li>
                <button
                  onClick={() => setShowUIKit(true)}
                  className="px-4 py-1.5 border border-primary text-primary hover:bg-primary hover:text-accent transition-colors ml-2"
                >
                  UI Kit
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.documentElement.classList.toggle('dark')}
                  className="ml-2 p-2 rounded-full border border-transparent hover:border-primary transition-colors relative"
                  aria-label="Toggle Theme"
                >
                  <span className="dark:hidden text-accent text-lg">&#9790;</span>
                  <span className="hidden dark:inline text-primary text-lg">&#9728;</span>
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <main id="main-content">
        <section id="spotted" className="py-20 px-4">
          <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-12">
            <figure className="shrink-0 group">
              <div className="relative p-2 border-2 border-primary">
                <img
                  src="https://via.placeholder.com/250"
                  alt="Zeliha Sena Güllü Profile"
                  className="w-48 h-48 object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                />
              </div>
            </figure>
            <div className="text-center md:text-left">
              <h2 className="text-5xl font-bold font-serif mb-6 text-accent dark:text-primary italic relative inline-block">
                Spotted: The Queen
                <span className="absolute -bottom-2 left-0 w-12 h-1 bg-primary"></span>
              </h2>
              <p className="text-lg leading-relaxed mb-6 font-light opacity-80">
                Upper East Side'ın en yeni yeteneği Zeliha Sena Güllü, modern web teknolojileriyle sahnede. Bu dijital dünyada sadece en iyiler hayatta kalır. Bilgisayar Mühendisliği öğrencisi.
              </p>
              <p className="mb-8 font-serif italic text-primary text-xl">ID: 235541048</p>
              
              <div className="space-y-3">
                <h3 className="uppercase tracking-widest text-xs font-bold text-secondary dark:text-gray-400">Skills & Secrets</h3>
                <ul className="flex flex-wrap justify-center md:justify-start gap-2">
                  {['High-Fashion HTML5 & CSS3', 'Exclusive React', 'TypeScript', 'Elite TailwindCSS'].map(skill => (
                    <li key={skill} className="border border-accent dark:border-surface px-4 py-1.5 text-xs uppercase tracking-wider hover:bg-primary hover:border-primary hover:text-accent transition-all cursor-default">
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section id="details" className="py-20 px-4">
          <div className="max-w-6xl mx-auto border-t border-accent/20 dark:border-surface/20 pt-16">
            <h2 className="text-4xl font-bold text-center font-serif text-accent dark:text-primary italic mb-12">
              The Social Diary
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <Card 
                variant="outlined" 
                title="E-Ticaret Sitesi" 
                footer={
                  <div className="flex justify-between items-center text-xs uppercase tracking-widest text-secondary font-bold">
                    <span>Status: Elite</span>
                    <span className="text-primary italic font-serif text-sm">React & TS</span>
                  </div>
                }
              >
                React ve TypeScript kullanılarak geliştirilmiş lüks bir alışveriş platformu. Sadece davetliler için.
              </Card>

              <Card 
                variant="outlined" 
                title="Blog Uygulamasi" 
                footer={
                  <div className="flex justify-between items-center text-xs uppercase tracking-widest text-secondary font-bold">
                    <span>Status: Trending</span>
                    <span className="text-primary italic font-serif text-sm">Node.js</span>
                  </div>
                }
              >
                Kullanıcıların en gizli sırlarını paylaşabildiği dinamik bir blog sitesi. Kimse güvende değil.
              </Card>
            </div>
          </div>
        </section>

        <section id="confess" className="py-20 px-4">
          <div className="max-w-2xl mx-auto bg-surface dark:bg-accent/50 p-10 border border-primary/30 relative">
            <div className="absolute top-0 left-1/2 flex -translate-x-1/2 -translate-y-1/2 bg-surface dark:bg-accent px-4">
              <span className="text-3xl font-serif italic text-secondary">&#10084;</span>
            </div>
            
            <h2 className="text-3xl font-bold text-center font-serif mb-8 italic text-accent dark:text-primary">
              Send a Tip
            </h2>
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div>
                <Input id="name" label="Who are you?" placeholder="B. Waldorf" required className="bg-transparent border-accent/20 dark:border-surface/20 focus:border-primary" />
              </div>
              <div>
                <Input id="email" label="Where can I reach you?" type="email" placeholder="b@constance-billard.edu" required className="bg-transparent border-accent/20 dark:border-surface/20 focus:border-primary" />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="message" className="block text-xs uppercase tracking-widest font-bold text-accent dark:text-surface">
                  The Secret
                </label>
                <textarea
                  id="message"
                  rows={5}
                  required
                  placeholder="You know you love me..."
                  className="w-full px-4 py-3 border border-accent/20 dark:border-surface/20 focus:ring-1 focus:ring-primary focus:border-primary outline-none bg-transparent resize-none transition-colors"
                ></textarea>
              </div>
              <Button variant="primary" size="lg" type="submit" className="w-full uppercase tracking-widest text-sm bg-accent text-primary border border-primary hover:bg-primary hover:text-accent rounded-none">
                Publish
              </Button>
            </form>
          </div>
        </section>
      </main>

      <footer className="text-center py-12 px-4 border-t border-accent/10 dark:border-surface/10 mt-10">
        <span className="block text-4xl font-serif italic text-primary mb-4">You know you love me, XOXO.</span>
        <p className="text-xs tracking-[0.2em] uppercase font-bold opacity-60">
          &copy; 2025 Zeliha Sena Güllü. Produced by the Elite.
        </p>
      </footer>
    </div>
  );
}

export default App;
