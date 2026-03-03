# CSS Kararlari

## 1. Breakpoint Secimi
- **Neden 640px ve 1024px sectim?** 
  Genel kabul görmüş ekran sınırları oldukları için seçtim. 640px genel olarak tablet, 1024px ise standart masaüstü görünümünün başlangıcı olarak kabul görmektedir.
- **Icerigim bu noktalarda nasil degisiyor?** 
  Mobil cihazlarda (0-639px) tüm elemanlar dikey (column) yapıda alt alta sıralanıyor. 640px'te (Tablet) "Hakkımda" bölümü yatay boyuta geçiyor. 1024px'te (Masaüstü) ise içerik `max-width: 1200px` ile ortalanıyor ve proje gridleri otomatik olarak üçlü sütuna ulaşıyor.

## 2. Layout Tercihleri
- **Header icin neden Flexbox sectim?** 
  Header içindeki logo ve navigasyon tek eksenli (yatay) bir dizilime sahip olduğu için `space-between` ve `center` hizalamalarını en temiz şekilde Flexbox sağlayabiliyor.
- **Proje kartlari icin neden Grid sectim?** 
  Projelerin yan yana ve alt alta (iki boyutlu) bir ızgara düzeninde, aralarındaki boşlukların da tutarlı kalarak sergilenmesi gerekiyor.
- **auto-fit mi auto-fill mi kullandim, neden?** 
  `auto-fit` kullandım. Böylece ekran genişledikçe kapsayıcı boş kalmıyor; elemanlar uzayarak veya satıra sığacak şekilde çoğalarak daha dinamik bir büyüme sergiliyor.

## 3. Design Tokens
- **Hangi renk paletini sectim ve neden?** 
  Mavi tabanlı güvenilir hissettiren renkleri (primary: #1E3A8A, secondary: #2563EB) seçtim. Bu renkler profesyonel portfolyolara uygundur ve beyaz/gri tonlarındaki arkaplan yüzeyleriyle kontrast yaratır.
- **Spacing skalasini nasil belirledim?** 
  Modern web tasarımlarında olduğu gibi 4px'lik aralıklı katsayılar (0.25rem = 4px, 1rem = 16px) kullanarak standart bir ölçeklendirme uyguladım.
- **Fluid typography icin clamp degerlerini nasil ayarladim?** 
  `clamp()` fonksiyonu içine erişilebilir minimum büyüklük (`rem`), genişliğe oranlı akıcı büyüklük (`vw` + `rem`) ve maksimum metin değeri ekleyerek fontların kademesiz doğal esnemesini sağladım.

## 4. Responsive Stratejiler
- **Mobile-first yaklasimini nasil uyguladim?** 
  Standart CSS kurallarımı herhangi bir media query kullanmadan sadece mobil cihazı düşünerek yazdım. Sonrasında `@media (min-width: ...)` ile ekran büyüdüğünde eklenecek kuralları inşa ettim (progressive enhancement).
- **Hangi elemanlar breakpoint'lerde degisiyor?** 
  Menü mobilde alt altayken, masaüstünde yan yana geliyor. Section padding'leri ve proje kartı Grid kolonları büyüyen cihaza göre değişiklik gösteriyor ("Hakkımda" flex yönünün `column`dan `row`a dönmesi vb).
- **Gorsel boyutlari nasil yonettim?** 
  Proje kartlarındaki görsellerin kapsayıcı kutu dışına taşmaması için `width: 100%` koydum, aynı zamanda deforme olmamaları ve eşit yükseklikte hizalanmaları için görüntüleri `height: 200px` kısıtlamasıyla birlikte `object-fit: cover` kuralı atadım.
