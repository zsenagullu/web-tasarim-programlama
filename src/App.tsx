import { useState } from 'react';
import Card from './components/Card';
import Input from './components/Input';
import Button from './components/Button';
import UIKit from './pages/UIKit';

function App() {
  const [showUIKit, setShowUIKit] = useState(false);

  if (showUIKit) {
    return (
      <div className="relative">
        <button 
          onClick={() => setShowUIKit(false)} 
          className="fixed top-4 left-4 z-50 bg-blue-600 text-white px-4 py-2 rounded-lg shadow-lg hover:bg-blue-700"
        >
          &larr; Portföye Dön
        </button>
        <UIKit />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100 transition-colors">
      <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-0 focus:left-0 bg-blue-800 text-white p-2 z-50">
        Ana icerige atla
      </a>

      <header className="sticky top-0 z-40 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 shadow-sm">
        <div className="max-w-6xl mx-auto px-4 py-3 flex flex-col sm:flex-row justify-between items-center gap-3">
          <h1 className="text-xl font-bold text-blue-800 dark:text-blue-300">
            Zeliha Sena Güllü
          </h1>
          <nav aria-label="Ana navigasyon">
            <ul className="flex flex-wrap items-center gap-2">
              <li>
                <a href="#hakkimda" className="px-3 py-1 rounded-md text-gray-700 dark:text-gray-300 hover:bg-blue-100 dark:hover:bg-gray-800 transition-colors">
                  Hakkimda
                </a>
              </li>
              <li>
                <a href="#projeler" className="px-3 py-1 rounded-md text-gray-700 dark:text-gray-300 hover:bg-blue-100 dark:hover:bg-gray-800 transition-colors">
                  Projeler
                </a>
              </li>
              <li>
                <a href="#iletisim" className="px-3 py-1 rounded-md text-gray-700 dark:text-gray-300 hover:bg-blue-100 dark:hover:bg-gray-800 transition-colors">
                  Iletisim
                </a>
              </li>
              <li>
                <button
                  onClick={() => setShowUIKit(true)}
                  className="px-3 py-1 rounded-md bg-accent text-white hover:bg-purple-700 transition-colors ml-2"
                >
                  UI Kit
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.documentElement.classList.toggle('dark')}
                  className="ml-2 p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                  aria-label="Tema Degistir"
                >
                  <span className="dark:hidden text-gray-800">&#9790;</span>
                  <span className="hidden dark:inline text-gray-200">&#9728;</span>
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <main id="main-content">
        <section id="hakkimda" className="py-16 px-4">
          <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-8">
            <figure className="shrink-0">
              <img
                src="https://via.placeholder.com/150"
                alt="Zeliha Sena Güllü'nün vesikalik fotografi"
                className="w-40 h-40 rounded-full object-cover shadow-lg border-4 border-gray-100 dark:border-gray-800"
              />
            </figure>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4 text-center md:text-left">
                Hakkimda
              </h2>
              <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                Merhaba! Ben Zeliha Sena Güllü. Web Tasarımı ve Programlama dersi kapsamında modern web teknolojilerini öğreniyorum. Bilgisayar Mühendisliği öğrencisiyim.
              </p>
              <p className="text-gray-600 dark:text-gray-400 mb-4 font-medium">Ögrenci No: 235541048</p>
              <ul className="flex flex-wrap gap-2">
                {['HTML5', 'CSS3', 'JavaScript', 'React', 'TypeScript', 'Git', 'Tailwind CSS'].map(skill => (
                  <li key={skill} className="bg-blue-800 dark:bg-blue-900 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section id="projeler" className="py-16 px-4 bg-gray-50 dark:bg-gray-900">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-10">
              Projelerim
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card 
                variant="elevated" 
                title="E-Ticaret Sitesi" 
                image="https://via.placeholder.com/300x200?text=E-Ticaret" 
                imageAlt="E-Ticaret anasayfa gorunumu"
                footer={
                  <div className="flex gap-2">
                    <span className="text-xs bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded">React</span>
                    <span className="text-xs bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded">Tailwind</span>
                  </div>
                }
              >
                React ve TypeScript kullanılarak geliştirilmiş bir alışveriş platformu.
              </Card>

              <Card 
                variant="elevated" 
                title="Blog Uygulamasi" 
                image="https://via.placeholder.com/300x200?text=Blog" 
                imageAlt="Blog Uygulamasi ekran goruntusu"
                footer={
                  <div className="flex gap-2">
                    <span className="text-xs bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded">Node.js</span>
                    <span className="text-xs bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded">MongoDB</span>
                  </div>
                }
              >
                Kullanıcıların içerik paylaşabildiği dinamik API tabanlı blog sitesi.
              </Card>

              <Card 
                variant="elevated" 
                title="Hava Durumu" 
                image="https://via.placeholder.com/300x200?text=Hava+Durumu" 
                imageAlt="Hava Durumu Uygulamasi ekran goruntusu"
                footer={
                  <div className="flex gap-2">
                    <span className="text-xs bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded">JavaScript</span>
                    <span className="text-xs bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded">API</span>
                  </div>
                }
              >
                OpenWeather API ile entegreli, anlık hava durumu bilgisi sunar.
              </Card>
            </div>
          </div>
        </section>

        <section id="iletisim" className="py-16 px-4">
          <div className="max-w-lg mx-auto bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-800">
            <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-8">
              Iletisim
            </h2>
            <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
              <Input id="name" label="Ad Soyad" placeholder="Sena Güllü" required />
              <Input id="email" label="E-posta" type="email" placeholder="sena@ornek.com" required />
              
              <div className="space-y-1">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Mesajiniz
                </label>
                <textarea
                  id="message"
                  rows={5}
                  required
                  placeholder="Bana buradan ulaşabilirsiniz..."
                  className="w-full px-3 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none dark:bg-gray-800 dark:text-gray-100 dark:border-gray-600 transition-colors"
                ></textarea>
              </div>
              <Button variant="primary" size="lg" type="submit" className="w-full">
                Gonder
              </Button>
            </form>
          </div>
        </section>
      </main>

      <footer className="bg-gray-100 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 text-center py-6 px-4 text-gray-500 dark:text-gray-400 text-sm">
        <p>&copy; 2025 Zeliha Sena Güllü. Tum haklari saklidir.</p>
      </footer>
    </div>
  );
}

export default App;
