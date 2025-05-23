import {
  PhoneIcon,
  ClockIcon,
  MapPinIcon,
  CheckCircleIcon,
  WrenchScrewdriverIcon,
  ShieldCheckIcon,
  FireIcon,
  Cog6ToothIcon
} from '@heroicons/react/24/outline';
import Image from 'next/image';

export default function Home() {
  const phoneNumber = "+90 530 048 20 77";
  const whatsappNumber = "+905300482077";

  const services = [
    {
      icon: <FireIcon className="service-icon" />,
      title: "Kombi Temizliği",
      description: "Tüm marka kombi temizliği, bakımı ve servisi. Kombi verimliliğinizi artırıyoruz.",
      image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=400&h=300&fit=crop&auto=format"
    },
    {
      icon: <Cog6ToothIcon className="service-icon" />,
      title: "Petek Temizliği",
      description: "Profesyonel petek temizliği ile ısıtma veriminizi artırın ve enerji tasarrufu sağlayın.",
      image: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=400&h=300&fit=crop&auto=format"
    },
    {
      icon: <WrenchScrewdriverIcon className="service-icon" />,
      title: "Petek Kombi Onarım",
      description: "Petek ve kombi sistemleri tamiri, bakımı ve yeni montaj hizmetleri.",
      image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=400&h=300&fit=crop&auto=format"
    },
    {
      icon: <ShieldCheckIcon className="service-icon" />,
      title: "Garantili Hizmet",
      description: "Tüm işlerimizde garanti veriyoruz. Müşteri memnuniyeti önceliğimizdir.",
      image: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=400&h=300&fit=crop&auto=format"
    }
  ];

  const features = [
    "7/24 Acil Servis",
    "Uygun Fiyat",
    "Deneyimli Teknisyen",
    "Garantili İşçilik",
    "Hızlı Çözüm",
    "Kaliteli Malzeme"
  ];

  return (
    <div className="min-h-screen">
      {/* Header/Navigation */}
      <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-lg z-50">
        <div className="container-custom">
          <div className="flex items-center justify-between py-3 md:py-4">
            <div className="flex items-center space-x-2">
              <FireIcon className="h-6 w-6 md:h-8 md:w-8 text-red-600" />
              <span className="text-lg md:text-xl font-bold text-gray-900">
                Çerkezköy Isı Teknik
              </span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-6">
              <a href="#hizmetler" className="text-gray-700 hover:text-red-600 transition-colors">
                Hizmetler
              </a>
              <a href="#hakkimizda" className="text-gray-700 hover:text-red-600 transition-colors">
                Hakkımızda
              </a>
              <a href="#iletisim" className="text-gray-700 hover:text-red-600 transition-colors">
                İletişim
              </a>
              <a href={`tel:${phoneNumber}`} className="btn-primary">
                Hemen Ara
              </a>
            </div>

            {/* Mobile Call Button */}
            <div className="lg:hidden">
              <a href={`tel:${phoneNumber}`} className="btn-primary text-sm px-4 py-2">
                Ara
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative section-padding pt-24 md:pt-32 overflow-hidden min-h-screen flex items-center">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=1920&h=1080&fit=crop&auto=format"
            alt="Boiler Service Background"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-red-900/90 to-red-600/75"></div>
        </div>

        <div className="container-custom relative z-10 w-full">
          <div className="text-center">
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white leading-tight hero-text-shadow fade-in-up">
              Çerkezköy&apos;ün En Güvenilir<br />
              <span className="text-yellow-300">Kombi Servisi</span>
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl text-red-100 mt-6 mb-8 max-w-3xl mx-auto px-4">
              7/24 acil servis ile kombi ve petek temizliği, petek kombi onarım
              hizmetleri sunuyoruz. Uygun fiyat, garantili hizmet.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8 px-4">
              <a
                href={`tel:${phoneNumber}`}
                className="btn-primary text-lg px-6 md:px-8 py-3 md:py-4 animate-pulse-slow w-full sm:w-auto"
              >
                <PhoneIcon className="h-5 w-5 md:h-6 md:w-6 inline mr-2" />
                Hemen Ara: {phoneNumber}
              </a>
              <a
                href={`https://wa.me/${whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary w-full sm:w-auto"
              >
                📱 WhatsApp ile İletişim
              </a>
            </div>

            {/* Quick Info */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mt-12 md:mt-16 px-4">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 md:p-6 text-center">
                <ClockIcon className="h-10 w-10 md:h-12 md:w-12 text-yellow-300 mx-auto mb-3" />
                <h3 className="text-white font-semibold text-base md:text-lg">7/24 Servis</h3>
                <p className="text-red-100 text-sm md:text-base">Her gün, her saat hizmetinizdeyiz</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 md:p-6 text-center">
                <MapPinIcon className="h-10 w-10 md:h-12 md:w-12 text-yellow-300 mx-auto mb-3" />
                <h3 className="text-white font-semibold text-base md:text-lg">Çerkezköy</h3>
                <p className="text-red-100 text-sm md:text-base">Tüm Çerkezköy&apos;e hizmet veriyoruz</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 md:p-6 text-center">
                <ShieldCheckIcon className="h-10 w-10 md:h-12 md:w-12 text-yellow-300 mx-auto mb-3" />
                <h3 className="text-white font-semibold text-base md:text-lg">Garantili</h3>
                <p className="text-red-100 text-sm md:text-base">İşçilik garantisi veriyoruz</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="hizmetler" className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="section-title">Hizmetlerimiz</h2>
            <p className="section-subtitle">
              Profesyonel ekibimizle ısıtma sistemlerinizin tüm ihtiyaçlarını karşılıyoruz
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {services.map((service, index) => (
              <div key={index} className="service-card text-center overflow-hidden">
                <div className="relative h-40 md:h-48 mb-4 rounded-lg overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-300 hover:scale-110"
                  />
                </div>
                {service.icon}
                <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-sm md:text-base text-gray-600">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Neden Çerkezköy Isı Teknik?
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                15 yılı aşkın deneyimimizle Çerkezköy&apos;de ısıtma sistemleri alanında
                güvenilir hizmet veriyoruz. Müşteri memnuniyeti bizim için öncelik.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircleIcon className="h-6 w-6 text-red-600 flex-shrink-0" />
                    <span className="text-gray-700 font-medium">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8">
                <a href={`tel:${phoneNumber}`} className="btn-primary">
                  Ücretsiz Fiyat Teklifi Al
                </a>
              </div>
            </div>

            {/* Professional Team Image */}
            <div className="relative lg:block hidden">
              <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=600&h=800&fit=crop&auto=format"
                  alt="Professional Boiler Technician"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          {/* Emergency Call Section - Separate and Mobile Responsive */}
          <div className="mt-16">
            <div className="bg-gradient-to-br from-red-600 to-red-800 rounded-2xl p-6 md:p-8 text-white shadow-2xl max-w-4xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold mb-4">Acil Durum?</h3>
                  <p className="text-red-100 mb-6 text-lg">
                    Kombiniz arızalandı mı? Soğuk havada ısıtma sisteminiz çalışmıyor mu?
                    Hemen arayın, en kısa sürede geliyoruz!
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                    <div className="flex items-center space-x-3">
                      <ClockIcon className="h-6 w-6 text-yellow-300 flex-shrink-0" />
                      <span>7/24 Acil Servis</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <MapPinIcon className="h-6 w-6 text-yellow-300 flex-shrink-0" />
                      <span>30 Dakika İçinde</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <ShieldCheckIcon className="h-6 w-6 text-yellow-300 flex-shrink-0" />
                      <span>Garantili Çözüm</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <WrenchScrewdriverIcon className="h-6 w-6 text-yellow-300 flex-shrink-0" />
                      <span>Profesyonel Ekip</span>
                    </div>
                  </div>
                </div>

                <div className="text-center md:text-right">
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 mb-4">
                    <h4 className="text-yellow-300 font-semibold mb-2">Acil Arama Hattı</h4>
                    <a
                      href={`tel:${phoneNumber}`}
                      className="text-3xl md:text-4xl font-bold text-white hover:text-yellow-300 transition-colors duration-300 block"
                    >
                      {phoneNumber}
                    </a>
                  </div>

                  <div className="space-y-3">
                    <a
                      href={`tel:${phoneNumber}`}
                      className="btn-secondary w-full bg-white text-red-600 hover:bg-gray-100 text-lg py-3"
                    >
                      <PhoneIcon className="h-6 w-6 inline mr-2" />
                      Hemen Ara
                    </a>

                    <a
                      href={`https://wa.me/${whatsappNumber}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-secondary w-full bg-green-600 text-white hover:bg-green-700 text-lg py-3"
                    >
                      📱 WhatsApp
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="hakkimizda" className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="section-title">Hakkımızda</h2>
            <p className="section-subtitle">
              Çerkezköy&apos;de ısıtma sistemleri konusunda uzman ekibimizle hizmet veriyoruz
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-red-600 text-white rounded-full w-20 h-20 md:w-24 md:h-24 flex items-center justify-center mx-auto mb-4">
                <span className="text-xl md:text-2xl font-bold">15+</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Yıl Deneyim</h3>
              <p className="text-gray-600">
                15 yılı aşkın sektör deneyimi ile güvenilir hizmet
              </p>
            </div>

            <div className="text-center">
              <div className="bg-red-600 text-white rounded-full w-20 h-20 md:w-24 md:h-24 flex items-center justify-center mx-auto mb-4">
                <span className="text-lg md:text-xl font-bold">1000+</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Mutlu Müşteri</h3>
              <p className="text-gray-600">
                1000&apos;den fazla müşterimize hizmet verdik
              </p>
            </div>

            <div className="text-center">
              <div className="bg-red-600 text-white rounded-full w-20 h-20 md:w-24 md:h-24 flex items-center justify-center mx-auto mb-4">
                <span className="text-xl md:text-2xl font-bold">7/24</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Acil Servis</h3>
              <p className="text-gray-600">
                Günün her saati acil durumlarda yanınızdayız
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="iletisim" className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="section-title">İletişim</h2>
            <p className="section-subtitle">
              Kombileriniz için hemen bizi arayın, ücretsiz fiyat teklifi alın
            </p>
          </div>

          <div className="flex justify-center">
            {/* Contact Info */}
            <div className="max-w-2xl w-full">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                Hemen İletişime Geçin
              </h3>

              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="bg-red-600 p-3 rounded-lg">
                    <PhoneIcon className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Telefon</h4>
                    <a href={`tel:${phoneNumber}`} className="phone-link">
                      {phoneNumber}
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="bg-red-600 p-3 rounded-lg">
                    <MapPinIcon className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Hizmet Alanı</h4>
                    <p className="text-gray-600">Çerkezköy ve çevre ilçeler</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="bg-red-600 p-3 rounded-lg">
                    <ClockIcon className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Çalışma Saatleri</h4>
                    <p className="text-gray-600">7/24 Acil Servis</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-6 bg-red-50 rounded-lg">
                <h4 className="font-semibold text-red-800 mb-3 text-center">
                  Acil Durumlarda
                </h4>
                <p className="text-red-700 mb-4 text-center">
                  Kombiniz çalışmıyor mu? Kalorifer sisteminiz arızalı mı?
                  Hemen arayın, 30 dakika içinde yerindeyiz!
                </p>
                <div className="text-center">
                  <a href={`tel:${phoneNumber}`} className="btn-primary">
                    Acil Arama Yap
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <FireIcon className="h-8 w-8 text-red-500" />
                <span className="text-xl font-bold">Çerkezköy Isı Teknik</span>
              </div>
              <p className="text-gray-400 mb-4">
                Çerkezköy&apos;de 15 yılı aşkın deneyimimizle ısıtma sistemleri
                konusunda güvenilir hizmet veriyoruz.
              </p>
              <div className="flex space-x-4">
                <a href={`tel:${phoneNumber}`} className="text-red-500 hover:text-red-400">
                  <PhoneIcon className="h-6 w-6" />
                </a>
                <a href={`https://wa.me/${whatsappNumber}`} className="text-red-500 hover:text-red-400">
                  📱
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Hizmetlerimiz</h3>
              <ul className="space-y-2 text-gray-400">
                <li>Kombi Temizliği</li>
                <li>Petek Temizliği</li>
                <li>Petek Kombi Onarım</li>
                <li>Acil Servis</li>
                <li>Bakım ve Onarım</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">İletişim</h3>
              <div className="space-y-2 text-gray-400">
                <p>📞 {phoneNumber}</p>
                <p>📍 Çerkezköy, Tekirdağ</p>
                <p>🕐 7/24 Acil Servis</p>
                <p>✅ Garantili Hizmet</p>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Çerkezköy Isı Teknik. Tüm hakları saklıdır.</p>
            <p className="mt-2 text-sm">
              Çerkezköy Kombi Servisi | Kazan Temizliği | Isıtma Sistemleri
            </p>
          </div>
        </div>
      </footer>

      {/* Fixed Call Button */}
      <div className="fixed bottom-4 right-4 z-50 md:bottom-6 md:right-6">
        <a
          href={`tel:${phoneNumber}`}
          className="bg-red-600 hover:bg-red-700 text-white p-3 md:p-4 rounded-full shadow-2xl hover:shadow-3xl transform hover:scale-110 transition-all duration-300 animate-pulse-slow block"
          aria-label="Hemen Ara"
        >
          <PhoneIcon className="h-6 w-6 md:h-8 md:w-8" />
        </a>
      </div>
    </div>
  );
}
