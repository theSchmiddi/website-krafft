import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header'
import HeroSection from '../components/HeroSection/HeroSection';
import ImageGallerySelection from '../components/ImageGallerySelection/ImageGallerySelection';
import VideoAdSection from '../components/VideoAdSection/VideoAdSection';

const IMAGES = [
  { path: process.env.PUBLIC_URL + '/images/fotoCard1.jpeg', headline: 'Bild 1 Info', subline: 'Subline für Bild 1', link: '/services' },
  { path: process.env.PUBLIC_URL + '/images/fotoCard2.jpeg', headline: 'Bild 1 Info', subline: 'Subline für Bild 1', link: '/services' },
  { path: process.env.PUBLIC_URL + '/images/fotoCard3.jpeg', headline: 'Bild 1 Info', subline: 'Subline für Bild 1', link: '/services' },
  { path: process.env.PUBLIC_URL + '/images/fotoCard4.jpeg', headline: 'Kontaktieren Sie uns!', subline: 'Für weitere Dienstleistungen können sie uns einfach kontaktieren.', link: '/contactus' },
];

<ImageGallerySelection images={IMAGES} />


function Homescreen() {
  return (
    <div className="HomeScreen-Container">
      <Header />
      <HeroSection 
        backgroundImage={process.env.PUBLIC_URL + '/images/hero-background.jpeg'} 
        headline="Willkommen bei Krafft" 
        subheadline="Ihre Lösung für alle Dienstleistungen" 
      />
      <VideoAdSection
        headline="Entdecken Sie unsere neuesten Dienstleistungen"
        description="Erleben Sie in diesem Video, wie wir Ihnen mit unseren maßgeschneiderten Lösungen den Alltag erleichtern können."
        youtubeId="dQw4w9WgXcQ"
      />
      <ImageGallerySelection headline="Entdecken Sie unsere neuesten Dienstleistungen"
        description="Erleben Sie in diesem Video, wie wir Ihnen mit unseren maßgeschneiderten Lösungen den Alltag erleichtern können." images={IMAGES} />
      <Footer />
    </div>
  );
}

export default Homescreen;
