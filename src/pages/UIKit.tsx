
import Button from '../components/Button';
import Input from '../components/Input';
import Card from '../components/Card';
import Alert from '../components/Alert';

export default function UIKit() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 p-8 space-y-12 transition-colors">
      <div className="flex justify-between items-center">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
          UI Kit
        </h1>
        <button
          onClick={() => document.documentElement.classList.toggle('dark')}
          className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 p-2 rounded-full shadow-lg hover:scale-110 transition-transform"
          aria-label="Tema Degistir"
        >
          <span className="dark:hidden">&#9790;</span>
          <span className="hidden dark:inline">&#9728;</span>
        </button>
      </div>

      {/* --- BUTTONS --- */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold border-b border-gray-200 dark:border-gray-800 pb-2 text-gray-900 dark:text-white">Buttons</h2>
        {/* Varyant 1: Renkler */}
        <div className="flex flex-wrap gap-3">
          <Button variant="primary">Primary</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="danger">Danger</Button>
          <Button variant="ghost">Ghost</Button>
        </div>
        {/* Varyant 2: Boyutlar */}
        <div className="flex flex-wrap items-end gap-3 mt-4">
          <Button size="sm">Small</Button>
          <Button size="md">Medium</Button>
          <Button size="lg">Large</Button>
        </div>
        {/* Varyant: Disabled */}
        <div className="flex flex-wrap gap-4 mt-4">
          <Button variant="primary" disabled className="opacity-50 cursor-not-allowed pointer-events-none">
            Disabled
          </Button>
        </div>
      </section>

      {/* --- INPUTS --- */}
      <section className="space-y-4 max-w-md">
        <h2 className="text-2xl font-semibold border-b border-gray-200 dark:border-gray-800 pb-2 text-gray-900 dark:text-white">Inputs</h2>
        {/* Varyant 3: Normal */}
        <Input id="ui-name" label="Normal Input" placeholder="Bir seyler yazin..." />
        {/* Varyant 4: Hatali */}
        <Input id="ui-err" label="Hatali Input" error="Bu alan zorunludur" defaultValue="Hatalı Veri" />
        {/* Varyant 5: Help text */}
        <Input id="ui-help" label="Help Text" type="email" helpText="E-posta adresinizi girin" />
        {/* Varyant 6: Disabled */}
        <Input id="ui-dis" label="Disabled Input" disabled value="Duzenlenemez" />
      </section>

      {/* --- CARDS --- */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold border-b border-gray-200 dark:border-gray-800 pb-2 text-gray-900 dark:text-white">Cards</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Varyant 7: Elevated */}
          <Card variant="elevated" title="Elevated Card" image="https://via.placeholder.com/400x200?text=Proje+Gorseli" imageAlt="Kare gorsel">
            Gölge ile yukseltılmıs kart.
          </Card>
          {/* Varyant 8: Outlined */}
          <Card variant="outlined" title="Outlined Card">
            Çerceveli kart tasarimi.
          </Card>
          {/* Varyant 9: Filled */}
          <Card variant="filled" title="Filled Card" footer={<Button size="sm">Detay</Button>}>
            Dolgulu arka plana sahip kart.
          </Card>
        </div>
      </section>

      {/* --- ALERTS --- */}
      <section className="space-y-4 max-w-xl pb-12">
        <h2 className="text-2xl font-semibold border-b border-gray-200 dark:border-gray-800 pb-2 text-gray-900 dark:text-white">Alerts</h2>
        <Alert variant="info" title="Bilgi">Bilgilendirme mesaji.</Alert>
        <Alert variant="success" title="Basarili">Islem tamamlandi.</Alert>
        <Alert variant="warning" title="Uyari">Dikkat edilmesi gereken durum.</Alert>
        <Alert variant="error" title="Hata" dismissible onDismiss={() => console.log('kapatildi')}>Bir hata olustu.</Alert>
      </section>
    </div>
  );
}
