import { useState } from 'react'
import './App.css'

function App() {
  const [clickedNavs, setClickedNavs] = useState(new Set())
  const showSkip = clickedNavs.size >= 1 // Any of the 3 buttons trigger it

  const handleNavClick = (name: string) => {
    setClickedNavs(prev => new Set(prev).add(name))
  }

  return (
    <div className="app-container">
      {showSkip ? (
        <a href="#main-content" className="skip-link-visible">
          Add Skip Main Content
        </a>
      ) : (
        <a href="#main-content" className="skip-link">Skip to Content</a>
      )}

      <header>
        <nav aria-label="Ana navigasyon">
          <ul>
            <li><a href="#hakkimda" onClick={() => handleNavClick('spotted')}>Spotted</a></li>
            <li><a href="#projeler" onClick={() => handleNavClick('details')}>Details</a></li>
            <li><a href="#iletisim" onClick={() => handleNavClick('confess')}>Confess</a></li>
          </ul>
        </nav>
      </header>

      <main id="main-content">
        <h1>Spotted: Zeliha Sena Güllü</h1>

        <section id="hakkimda">
          <div className="hakkimda-content">
            <div className="bio">
              <h2>About The Queen</h2>
              <p>
                Upper East Side'ın en yeni yeteneği Zeliha Sena Güllü, modern web
                teknolojileriyle sahnede. Bu dijital dünyada sadece en iyiler hayatta kalır.
              </p>
              <p>ID: 235541048</p>
              <h3>Skills & Secrets</h3>
              <ul>
                <li>High-Fashion HTML5 & CSS3</li>
                <li>Exclusive React & TypeScript</li>
                <li>Elite Version Control</li>
              </ul>
            </div>
          </div>
        </section>

        <section id="projeler">
          <h2>The Social Diary</h2>
          <div className="project-grid">
            <article className="project-card">
              <h3>E-Ticaret Sitesi</h3>
              <p>React ve TypeScript kullanılarak geliştirilmiş lüks bir alışveriş platformu.</p>
              <span className="footer-credits">Status: Elite</span>
            </article>
            <article className="project-card">
              <h3>Blog Uygulamasi</h3>
              <p>Kullanıcıların en gizli sırlarını paylaşabildiği dinamik bir blog sitesi.</p>
              <span className="footer-credits">Status: Trending</span>
            </article>
          </div>
        </section>

        <section id="iletisim">
          <h2>Send a Tip</h2>
          <form action="#" method="POST" noValidate>
            <fieldset>
              <legend>Gossip Box</legend>

              <div className="form-group">
                <label htmlFor="name">Who are you?</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="B. Waldorf"
                  required
                  minLength={2}
                  aria-describedby="name-error"
                />
                <small id="name-error" className="error-msg" role="alert"></small>
              </div>

              <div className="form-group">
                <label htmlFor="email">Where can I reach you?</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="b@constance-billard.edu"
                  required
                  aria-describedby="email-error"
                />
                <small id="email-error" className="error-msg" role="alert"></small>
              </div>

              <div className="form-group">
                <label htmlFor="message">The Secret:</label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  minLength={10}
                  aria-describedby="message-error"
                  placeholder="You know you love me..."
                ></textarea>
                <small id="message-error" className="error-msg" role="alert"></small>
              </div>

              <button type="submit">Publish</button>
            </fieldset>
          </form>
        </section>
      </main>

      <footer>
        <span className="xoxo">You know you love me, XOXO.</span>
        <span className="footer-credits">&copy; 2025 ZELIHA SENA GÜLLÜ. PRODUCED BY THE ELITE.</span>
      </footer>
    </div>
  )
}

export default App
