import './App.css'

function App() {
  return (
    <div className="app-container">
      <a href="#main-content" className="skip-link">Ana icerige atla</a>

      <header>
        <nav aria-label="Ana navigasyon">
          <ul>
            <li><a href="#hakkimda">Hakkimda</a></li>
            <li><a href="#projeler">Projeler</a></li>
            <li><a href="#iletisim">Iletisim</a></li>
          </ul>
        </nav>
      </header>

      <main id="main-content">
        <h1>Zeliha Sena Güllü - Kisisel Portfolyo</h1>

        <section id="hakkimda">
          <h2>Hakkimda</h2>
          <figure>
            <img
              src="https://via.placeholder.com/150"
              alt="Zeliha Sena Güllü'nün vesikalik fotografi"
            />
            <figcaption>Zeliha Sena Güllü</figcaption>
          </figure>
          <p>
            Merhaba! Ben Zeliha Sena Güllü. Web Tasarımı ve Programlama dersi kapsamında
            modern web teknolojilerini öğreniyorum. Bilgisayar Mühendisliği öğrencisiyim.
          </p>
          <p>Ögrenci No: 235541048</p>
          <h3>Kullandigim Teknolojiler</h3>
          <ul>
            <li>HTML5 & CSS3</li>
            <li>React & TypeScript</li>
            <li>Git & GitHub</li>
          </ul>
        </section>

        <hr />

        <section id="projeler">
          <h2>Projelerim</h2>
          <article className="project-card">
            <h3>E-Ticaret Sitesi</h3>
            <p>React ve TypeScript kullanılarak geliştirilmiş bir alışveriş platformu.</p>
            <p><strong>Teknolojiler:</strong> React, CSS Modules</p>
          </article>
          <article className="project-card">
            <h3>Blog Uygulamasi</h3>
            <p>Kullanıcıların içerik paylaşabildiği dinamik bir blog sitesi.</p>
            <p><strong>Teknolojiler:</strong> Node.js, Express, MongoDB</p>
          </article>
        </section>

        <hr />

        <section id="iletisim">
          <h2>Iletisim</h2>
          <form action="#" method="POST" novalidate>
            <fieldset>
              <legend>Iletisim Formu</legend>

              <div className="form-group">
                <label htmlFor="name">Ad Soyad:</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  minLength={2}
                  aria-describedby="name-error"
                />
                <small id="name-error" className="error-msg" role="alert"></small>
              </div>

              <div className="form-group">
                <label htmlFor="email">E-posta:</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  aria-describedby="email-error"
                />
                <small id="email-error" className="error-msg" role="alert"></small>
              </div>

              <div className="form-group">
                <label htmlFor="subject">Konu:</label>
                <select id="subject" name="subject" required aria-describedby="subject-error">
                  <option value="">-- Seciniz --</option>
                  <option value="is">Is Teklifi</option>
                  <option value="soru">Soru</option>
                  <option value="oneri">Oneri</option>
                </select>
                <small id="subject-error" className="error-msg" role="alert"></small>
              </div>

              <div className="form-group">
                <label htmlFor="message">Mesajiniz:</label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  minLength={10}
                  aria-describedby="message-error"
                ></textarea>
                <small id="message-error" className="error-msg" role="alert"></small>
              </div>

              <button type="submit">Gonder</button>
            </fieldset>
          </form>
        </section>
      </main>

      <footer>
        <p>&copy; 2025 Zeliha Sena Güllü. Tum haklari saklidir.</p>
      </footer>
    </div>
  )
}

export default App
