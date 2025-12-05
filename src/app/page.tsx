import BeneficiosSection from '../components/beneficios-section';
import ComoFuncionaSection from '../components/comofunciona-section';
import Header from '../components/header-section';
import HeroSection from '../components/hero-section';
import FuncionalidadesSection from '../components/funcionalidades-section';

export default function Home() {
  return (
    <>
      <Header />
      <HeroSection />
      <ComoFuncionaSection />
      <BeneficiosSection />
      <FuncionalidadesSection />
    </>
  );
}
