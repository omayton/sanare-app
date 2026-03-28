
import React, { useState, useEffect } from 'react';
import { 
  Menu, X, CheckCircle2, MapPin, Phone, Mail, Instagram, 
  ArrowRight, Users, Ambulance as AmbulanceIcon, Truck, 
  Monitor, ExternalLink, Microscope, ChevronLeft, ShieldCheck
} from 'lucide-react';
import Section from './components/Section';
import Button from './components/Button';
import WhatsAppButton from './components/Chatbot';
import { 
  DIFFERENTIALS, 
  PROFESSIONALS, 
  SERVICES, 
  EXAMS,
  COLORS 
} from './constants.tsx';
import { Service } from './types';

const App: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const LOGO_URL = "https://www.rkdigital.co/wp-content/uploads/2026/02/LOGO-SANARE.png";
  
  // Contacts
  const PHONE_FIXED = "(31) 3541-2848";
  const PHONE_FIXED_RAW = "553135412848";
  const PHONE_SPECIALIST = "(31) 99969-3446";
  const PHONE_SPECIALIST_RAW = "5531999693446";
  const EMAIL_PRIMARY = "gerencia@clinicasanare.com.br";
  const EMAIL_SECONDARY = "gerencia@clinicasanare.com.br";

  const handleEmailProposal = () => {
    window.location.href = `mailto:${EMAIL_PRIMARY}?subject=Solicitação de Proposta - Sanare`;
  };

  return (
    <div className="min-h-screen overflow-x-hidden w-full relative">
      {/* Navbar */}
      <nav className={`fixed w-full z-50 transition-all duration-300 left-0 top-0 ${scrolled ? 'bg-[#064e3b] py-3 shadow-2xl border-b border-emerald-800/30' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center cursor-pointer" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
            <img 
              src={LOGO_URL} 
              alt="Sanare Logo" 
              className="h-14 md:h-20 w-auto object-contain transition-all duration-300"
            />
          </div>

          {/* Desktop Menu */}
          <div className={`hidden lg:flex items-center gap-8 text-white`}>
            <button onClick={() => scrollTo('quem-somos')} className="hover:text-emerald-300 transition-colors font-bold">Quem Somos</button>
            <button onClick={() => scrollTo('servicos')} className="hover:text-emerald-300 transition-colors font-bold">Serviços</button>
            <button onClick={() => scrollTo('unidade-movel')} className="hover:text-emerald-300 transition-colors font-bold">Unidade Móvel</button>
            <button onClick={() => scrollTo('contato')} className="hover:text-emerald-300 transition-colors font-bold">Fale Conosco</button>
            <Button 
              variant={scrolled ? 'secondary' : 'secondary'} 
              size="md" 
              className="font-extrabold px-8 shadow-none hover:scale-105" 
              onClick={handleEmailProposal}
            >
              Solicitar Proposta
            </Button>
          </div>

          {/* Mobile Toggle */}
          <button className="lg:hidden p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={28} className="text-white" /> : <Menu size={28} className="text-white" />}
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        {isMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 w-full bg-[#064e3b] shadow-2xl p-6 flex flex-col gap-6 border-t border-emerald-800 animate-in slide-in-from-top duration-300">
            <button onClick={() => scrollTo('quem-somos')} className="text-xl font-bold text-white text-left">Quem Somos</button>
            <button onClick={() => scrollTo('servicos')} className="text-xl font-bold text-white text-left">Serviços</button>
            <button onClick={() => scrollTo('unidade-movel')} className="text-xl font-bold text-white text-left">Unidade Móvel</button>
            <button onClick={() => scrollTo('contato')} className="text-xl font-bold text-white text-left">Fale Conosco</button>
            <Button variant="secondary" size="lg" className="w-full font-extrabold" onClick={handleEmailProposal}>Solicitar Proposta</Button>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden w-full">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=1920" 
            alt="Profissionais de saúde em ambiente corporativo" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-950/90 via-emerald-900/70 to-transparent" />
        </div>

        {/* Ajustado para reduzir o espaço entre a logo e o título (máximo 100px de gap visível) */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full text-white pt-36 md:pt-44 pb-16 md:pb-24">
          <div className="max-w-3xl">
            <h1 className="text-[28px] xs:text-[34px] sm:text-[46px] md:text-[58px] font-extrabold leading-tight mb-6 tracking-tighter">
              Saúde ocupacional e segurança para empresas que <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-emerald-200">pensam no futuro.</span>
            </h1>
            <p className="text-base sm:text-lg text-emerald-50 mb-10 leading-relaxed max-w-2xl font-medium">
              Há mais de 20 anos, a Sanare oferece soluções completas em medicina e segurança do trabalho, 
              unindo tecnologia e atendimento humanizado.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button size="lg" className="px-10 font-bold shadow-2xl" onClick={handleEmailProposal}>Solicitar Proposta</Button>
              <Button variant="secondary" size="lg" className="px-10 font-bold" onClick={() => scrollTo('servicos')}>Conheça Serviços</Button>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-x-4 gap-y-6 md:gap-6 pt-8 border-t border-white/10">
              {[
                { label: 'Conformidade legal', icon: <CheckCircle2 size={16} /> },
                { label: 'Atendimento in company', icon: <CheckCircle2 size={16} /> },
                { label: 'e-Social', icon: <CheckCircle2 size={16} /> },
                { label: 'NR1', icon: <CheckCircle2 size={16} /> },
                { label: 'Estrutura completa', icon: <CheckCircle2 size={16} /> },
                { label: 'Tecnologia SOC', icon: <CheckCircle2 size={16} /> },
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-2 text-emerald-100/90 text-xs sm:text-sm font-semibold">
                  <span className="text-emerald-400 shrink-0 mt-0.5">{item.icon}</span>
                  <span className="leading-tight">{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Quem Somos */}
      <Section id="quem-somos" title="Tradição, credibilidade e cuidado com pessoas">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 text-gray-700 leading-relaxed text-lg order-2 lg:order-1">
            <p>
              A Sanare é referência em medicina e segurança do trabalho em Nova Lima e região, atuando com excelência técnica, ética profissional e foco absoluto na prevenção de riscos ocupacionais.
            </p>
            <p>
              Nossa trajetória é construída com base na confiança, no compromisso com a legislação e na busca constante por soluções que promovam saúde e produtividade.
            </p>
            <p className="font-bold text-[#064e3b] text-xl">
              Atuamos tanto em nossa unidade própria quanto com atendimento in company, levando estrutura e profissionais especializados até a sua empresa.
            </p>
          </div>
          <div className="relative order-1 lg:order-2">
            <img 
              src="https://www.rkdigital.co/wp-content/uploads/2026/02/sanare03.png" 
              alt="Equipe Sanare" 
              className="rounded-[2.5rem] shadow-2xl relative z-10 w-full"
            />
            <div className="absolute -bottom-6 -right-6 w-full h-full bg-emerald-50 rounded-[2.5rem] -z-10 border border-emerald-100" />
          </div>
        </div>
      </Section>

      {/* Destaque Exame Toxicológico */}
      <Section className="bg-[#064e3b] text-white" title="Exame Toxicológico">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
             <div className="bg-white/10 p-8 md:p-12 rounded-[3rem] backdrop-blur-md border border-white/20 shadow-2xl">
                <div className="flex items-center gap-4 mb-8">
                   <div className="p-4 bg-emerald-400 rounded-2xl text-[#064e3b]"><Microscope size={40} /></div>
                   <div>
                      <h3 className="text-2xl md:text-3xl font-black uppercase tracking-tighter">Evento e-Social - S2221</h3>
                      <p className="text-emerald-300 font-bold text-sm tracking-widest uppercase">Obrigatoriedade Legal</p>
                   </div>
                </div>
                <div className="space-y-4">
                   {[
                     'Renovação de CNH',
                     'Exame Periódico',
                     'Admissão e Demissão'
                   ].map((item, idx) => (
                     <div key={idx} className="flex items-center gap-4 text-xl md:text-2xl font-bold border-b border-white/10 pb-4 last:border-0 last:pb-0">
                       <CheckCircle2 className="text-emerald-400" size={24} />
                       {item}
                     </div>
                   ))}
                </div>
                <Button variant="secondary" className="w-full mt-10 font-black uppercase py-5" onClick={() => {
                  const s = SERVICES.find(s => s.id === 'toxicologico');
                  if (s) setSelectedService(s);
                }}>Saiba Mais Detalhes</Button>
             </div>
          </div>
          <div className="space-y-6 text-emerald-50 text-lg md:text-xl font-medium leading-relaxed">
            <p>
              O exame toxicológico é essencial para empresas que operam com motoristas profissionais e em conformidade com o e-Social.
            </p>
            <p>
              Na Sanare, realizamos a coleta com agilidade e enviamos os dados diretamente para o governo, garantindo que sua empresa esteja 100% regularizada perante o evento S2221.
            </p>
          </div>
        </div>
      </Section>

      {/* Diferenciais */}
      <Section className="bg-emerald-50/30" title="O que nos torna a escolha certa">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
          {DIFFERENTIALS.map((diff, idx) => (
            <div key={idx} className="bg-white p-6 md:p-8 rounded-[2rem] shadow-sm border border-emerald-100 hover:shadow-xl transition-all duration-500 group hover:-translate-y-2">
              <div className="bg-white w-16 h-16 rounded-2xl flex items-center justify-center mb-6 border-2 border-[#064e3b] group-hover:bg-[#064e3b] transition-all duration-300 shadow-sm group-hover:shadow-emerald-200/50">
                <div className="text-[#064e3b] group-hover:text-white transition-colors duration-300 scale-110">
                  {diff.icon}
                </div>
              </div>
              <h3 className="text-xl font-extrabold mb-3 text-[#064e3b]">{diff.title}</h3>
              <p className="text-gray-600 text-sm md:text-base font-medium leading-relaxed">{diff.description}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Unidade Móvel / Digital (Revamped Section) */}
      <Section id="unidade-movel" className="bg-white pt-10 pb-20 overflow-visible" title="Atendimento de Excelência">
        <div className="flex flex-col gap-12">
          
          {/* Top Label & Title */}
          <div className="flex flex-col sm:flex-row items-center gap-6 mb-4">
             <div className="bg-emerald-100 p-4 sm:p-6 rounded-[2rem] shadow-sm shrink-0">
               <Truck size={48} className="text-[#064e3b]" />
             </div>
             <div>
                <div className="bg-[#064e3b] text-white text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-widest mb-2 inline-block shadow-sm">
                  Unidade Móvel
                </div>
                <h3 className="text-3xl md:text-5xl font-black text-[#064e3b] uppercase tracking-tighter leading-none">
                  Atendimento Nacional
                </h3>
             </div>
          </div>

          {/* Gallery Block */}
          <div className="relative">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 h-[350px] md:h-[500px] rounded-[3rem] overflow-hidden shadow-2xl">
              {/* Photo 1: Medical Equipment */}
              <div className="relative group overflow-hidden">
                <img 
                  src="https://www.rkdigital.co/wp-content/uploads/2026/02/sanare02.png" 
                  alt="Raio X Digital Unidade Móvel" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#064e3b]/40 to-transparent" />
              </div>

              {/* Photo 2: Computer/Office */}
              <div className="group overflow-hidden relative">
                <img 
                  src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=800" 
                  alt="Sistemas de Gestão" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#064e3b]/40 to-transparent pointer-events-none" />
              </div>

              {/* Photo 3: Exam Room/Cabinets */}
              <div className="group overflow-hidden relative">
                <img 
                  src="https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&q=80&w=800" 
                  alt="Sala de Exames" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#064e3b]/40 to-transparent pointer-events-none" />
              </div>
            </div>

            {/* Float Badge Shadow */}
            <div className="absolute -z-10 -bottom-10 -right-10 w-64 h-64 bg-emerald-50 rounded-full blur-3xl opacity-50" />
          </div>

          {/* Description Text Below */}
          <div className="grid lg:grid-cols-2 gap-16 items-start mt-8">
            <div className="space-y-6">
              <p className="text-xl md:text-2xl text-gray-700 leading-relaxed font-semibold">
                Nossa infraestrutura móvel foi projetada para levar a clínica completa até o pátio da sua empresa.
              </p>
              <div className="bg-emerald-50 p-8 rounded-[2.5rem] border-l-[8px] border-[#064e3b] shadow-sm">
                <p className="text-gray-600 text-lg font-medium leading-relaxed">
                  Realizamos exames ocupacionais com tecnologia de ponta, incluindo <span className="font-bold text-[#064e3b]">Raio X Digital</span> e exames complementares, garantindo agilidade e reduzindo drasticamente o tempo de afastamento dos colaboradores.
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-6">
              {[
                { icon: <Monitor size={24} />, title: "Digitalização Total", desc: "Resultados integrados em tempo real ao sistema da empresa." },
                { icon: <Users size={24} />, title: "Escalabilidade", desc: "Atendimento de grandes equipes em curtos períodos." }
              ].map((item, i) => (
                <div key={i} className="flex gap-6 items-start p-6 rounded-3xl border border-emerald-100 hover:bg-emerald-50 transition-all group">
                  <div className="p-4 bg-white rounded-2xl shadow-sm group-hover:scale-110 transition-transform text-[#064e3b]">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="font-black text-xl text-[#064e3b] mb-1 uppercase tracking-tighter">{item.title}</h4>
                    <p className="text-gray-600 font-medium">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* Equipe */}
      <Section title="Equipe multidisciplinar especializada" className="bg-gray-50/50">
        <div className="max-w-4xl mx-auto">
          <p className="text-center text-gray-600 mb-12 text-lg font-medium">
            A Sanare conta com um team completo e integrado de profissionais para garantir uma gestão eficiente da saúde e segurança ocupacional.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {PROFESSIONALS.map((prof, idx) => (
              <div key={idx} className="flex flex-col items-center text-center p-6 bg-white rounded-3xl border border-emerald-50 hover:border-emerald-200 hover:shadow-lg transition-all cursor-default">
                <div className="text-[#064e3b] mb-4 scale-125">
                  {prof.icon}
                </div>
                <span className="font-bold text-gray-800 text-sm md:text-base leading-tight uppercase tracking-tight">{prof.title}</span>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Serviços */}
      <Section id="servicos" className="bg-white" title="Soluções completas em SST">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
          {SERVICES.map((service) => (
            <div 
              key={service.id} 
              className="bg-white p-6 md:p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all group border border-transparent hover:border-emerald-200 cursor-pointer"
              onClick={() => setSelectedService(service)}
            >
              <div className="text-emerald-600 mb-5 group-hover:scale-110 transition-transform bg-emerald-50 w-12 h-12 flex items-center justify-center rounded-xl">
                {service.icon}
              </div>
              <h3 className="text-xl font-extrabold mb-3 text-[#064e3b]">{service.title}</h3>
              <p className="text-gray-600 text-sm mb-5 line-clamp-3 font-medium">{service.description}</p>
              <button className="text-[#064e3b] font-black text-sm flex items-center gap-2 group-hover:gap-4 transition-all uppercase tracking-tighter">
                Saiba mais <ArrowRight size={16} />
              </button>
            </div>
          ))}
        </div>
      </Section>

      {/* Exames Complementares */}
      <Section className="bg-emerald-50/10" title="Exames Ocupacionais">
        <div className="flex flex-wrap justify-center gap-2 md:gap-4">
          {EXAMS.map((exam, idx) => (
            <div key={idx} className="bg-white px-4 py-3 md:px-8 md:py-4 rounded-2xl shadow-sm border border-emerald-100 font-bold text-xs md:text-lg text-[#064e3b] hover:bg-[#064e3b] hover:text-white hover:-translate-y-1 transition-all cursor-default">
              {exam}
            </div>
          ))}
        </div>
      </Section>

      {/* Ambulância */}
      <Section title="Suporte e Emergência">
        <div className="bg-[#064e3b] rounded-[3rem] p-8 md:p-16 overflow-hidden relative border border-emerald-400/20">
          <div className="absolute -top-10 -right-10 p-10 md:p-20 opacity-5">
             <AmbulanceIcon size={400} className="text-white" />
          </div>
          <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center text-white">
            <div>
              <h3 className="text-3xl md:text-4xl font-extrabold mb-8 tracking-tight uppercase">Ambulâncias UTI Móvel</h3>
              <p className="text-xl md:text-2xl text-emerald-100 mb-10 leading-relaxed font-medium">
                Equipadas para atendimento adulto e neonatal, abrangendo suporte nacional e cobertura completa de eventos corporativos.
              </p>
              <Button variant="secondary" size="lg" className="w-full sm:w-auto px-12 font-black uppercase" onClick={() => scrollTo('contato')}>Saiba Mais</Button>
            </div>
            <div className="grid grid-cols-2 gap-4 md:gap-6">
               <div className="bg-white/10 p-4 md:p-8 rounded-2xl md:rounded-3xl backdrop-blur-sm border border-white/10 text-center group hover:bg-white/20 transition-colors">
                  <span className="block text-3xl md:text-6xl font-black mb-1 md:mb-2 tracking-tighter">24h</span>
                  <span className="text-emerald-300 text-[10px] md:text-sm font-bold uppercase tracking-wider md:tracking-widest">Disponibilidade</span>
               </div>
               <div className="bg-white/10 p-4 md:p-8 rounded-2xl md:rounded-3xl backdrop-blur-sm border border-white/10 text-center group hover:bg-white/20 transition-colors">
                  <span className="block text-3xl md:text-6xl font-black mb-1 md:mb-2 tracking-tighter">UTI</span>
                  <span className="text-emerald-300 text-[10px] md:text-sm font-bold uppercase tracking-wider md:tracking-widest">Equipamento</span>
               </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Proposta Comercial */}
      <Section id="proposta" className="bg-gray-50/50" title="Solicite uma Proposta">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-xl md:text-2xl text-gray-700 mb-12 leading-relaxed px-4 font-medium">
            Desenvolvemos propostas personalizadas conforme porte, segmento e riscos da sua empresa.
          </p>
          <div className="bg-white p-8 md:p-16 rounded-[3rem] shadow-2xl border border-emerald-100 relative overflow-hidden">
             <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-emerald-400 to-[#064e3b]" />
             <h4 className="text-2xl md:text-3xl font-black text-[#064e3b] mb-10 uppercase tracking-tighter">ESCOLHA SUA NECESSIDADE</h4>
             <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 text-left mb-12">
                {[
                  'PCMSO - Programa de Controle Médico de Saúde Ocupacional', 
                  'PGR - Programa de Gerenciamento de Riscos', 
                  'LTCAT - Laudo Técnico das Condições Ambientais de Trabalho', 
                  'AET - Analise Ergonomia do Trabalho', 
                  'PCA - Programa de Conservação Auditiva', 
                  'PPR - Programa de Proteção Respiratória',
                  'NR1 Avaliação Psicosocial no Trabalho',
                  'Gestão de insalubridade, periculosidade e aposentadoria especial',
                  'Treinamentos de NRs'
                ].map((item, idx) => (
                  <div key={idx} onClick={handleEmailProposal} className="flex items-center gap-4 p-5 bg-gray-50 rounded-2xl hover:bg-emerald-50 transition-all cursor-pointer border border-transparent hover:border-emerald-200 group">
                    <CheckCircle2 className="text-emerald-600 shrink-0 group-hover:scale-110 transition-transform" size={22} />
                    <span className="font-bold text-gray-700 text-base md:text-lg">{item}</span>
                  </div>
                ))}
             </div>
             <Button variant="primary" size="lg" className="w-full sm:w-auto px-16 font-black uppercase shadow-xl hover:scale-105" onClick={handleEmailProposal}>Solicitar Orçamento Agora</Button>
          </div>
        </div>
      </Section>

      {/* Proteção de Dados */}
      <Section className="bg-[#064e3b] text-white" title="Proteção de Dados (LGPD)">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 text-emerald-50 text-lg md:text-xl font-medium leading-relaxed">
            <p>
              Na Sanare, a segurança da informação é prioridade. Atuamos em total conformidade com a Lei Geral de Proteção de Dados (LGPD), garantindo o sigilo absoluto das informações de saúde dos seus colaboradores.
            </p>
            <p>
              Nossos sistemas são protegidos por criptografia e protocolos rigorosos de acesso, assegurando que os dados sensíveis sejam tratados com a máxima responsabilidade e ética profissional.
            </p>
            <div className="flex items-center gap-4 pt-4">
              <div className="p-3 bg-emerald-400 rounded-xl text-[#064e3b] shadow-lg">
                <ShieldCheck size={32} />
              </div>
              <span className="text-xl font-bold uppercase tracking-tighter">Ambiente 100% Seguro</span>
            </div>
          </div>
          <div className="bg-white/10 p-8 md:p-12 rounded-[3rem] backdrop-blur-md border border-white/20 shadow-2xl">
            <h4 className="text-2xl font-black mb-6 uppercase tracking-tighter">Nossos Compromissos:</h4>
            <ul className="space-y-4">
              {[
                'Coleta mínima necessária de dados',
                'Armazenamento em servidores seguros',
                'Acesso restrito a profissionais autorizados',
                'Transparência no tratamento das informações'
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-3 font-bold">
                  <CheckCircle2 className="text-emerald-400 shrink-0 mt-1" size={20} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      {/* Localização */}
      <Section id="localizacao" title="Localização">
        <div className="grid lg:grid-cols-3 gap-10">
          <div className="lg:col-span-1 space-y-6">
            <div className="bg-[#064e3b] text-white p-10 rounded-[2.5rem] shadow-xl">
              <MapPin className="mb-6 text-emerald-400" size={36} />
              <h4 className="text-2xl font-black mb-3 uppercase tracking-tighter">Nova Lima – MG</h4>
              <p className="text-emerald-100 text-lg leading-relaxed mb-8 font-medium">
                Centro<br />
                Nova Lima - MG
              </p>
              <a 
                href="https://www.google.com/maps/dir//Nova+Lima+-+MG/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block"
              >
                <Button variant="secondary" size="md" className="w-full font-bold uppercase tracking-tight">
                  <ExternalLink size={18} className="mr-2" /> Ver no Google Maps
                </Button>
              </a>
            </div>
            <div className="p-8 border border-emerald-100 rounded-[2.5rem] space-y-6 bg-emerald-50/20">
               <div className="flex flex-col gap-4 text-gray-800">
                 <div className="flex items-center gap-3">
                   <div className="p-2 bg-white rounded-lg shadow-sm"><Phone className="text-emerald-600" size={18} /></div>
                   <span className="font-black text-base">{PHONE_FIXED}</span>
                 </div>
                 <div className="flex items-center gap-3">
                   <div className="p-2 bg-white rounded-lg shadow-sm"><Phone className="text-emerald-600" size={18} /></div>
                   <span className="font-black text-base">{PHONE_SPECIALIST}</span>
                 </div>
               </div>
               <div className="flex flex-col gap-4 text-gray-800">
                 <div className="flex items-center gap-3">
                   <div className="p-2 bg-white rounded-lg shadow-sm"><Mail className="text-emerald-600" size={18} /></div>
                   <span className="font-black text-sm truncate">{EMAIL_PRIMARY}</span>
                 </div>
                 <div className="flex items-center gap-3">
                   <div className="p-2 bg-white rounded-lg shadow-sm"><Mail className="text-emerald-600" size={18} /></div>
                   <span className="font-black text-sm truncate">{EMAIL_SECONDARY}</span>
                 </div>
               </div>
            </div>
          </div>
          <div className="lg:col-span-2 bg-gray-100 rounded-[2.5rem] overflow-hidden h-[400px] md:h-[550px] shadow-inner border border-emerald-50">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14995.666986567156!2d-43.9515918!3d-19.991054!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa697669d67562f%3A0xc3f6a27576839352!2sNova%20Lima%2C%20MG!5e0!3m2!1spt-BR!2sbr!4v1715610000000!5m2!1spt-BR!2sbr" 
              width="100%" 
              height="100%" 
              style={{border:0}} 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </Section>

      {/* Fale Conosco */}
      <Section id="contato" className="bg-white" title="Fale Conosco">
        <div className="grid lg:grid-cols-2 gap-16 md:gap-24">
          <form className="space-y-6 bg-white p-8 md:p-12 rounded-[3rem] border border-emerald-100 shadow-2xl relative">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs font-black text-[#064e3b] uppercase tracking-widest ml-1">Nome Completo</label>
                <input type="text" className="w-full bg-gray-50 border-2 border-transparent rounded-2xl px-5 py-4 text-base font-medium focus:border-emerald-500 focus:bg-white outline-none transition-all shadow-sm" placeholder="Seu nome" />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-black text-[#064e3b] uppercase tracking-widest ml-1">Empresa</label>
                <input type="text" className="w-full bg-gray-50 border-2 border-transparent rounded-2xl px-5 py-4 text-base font-medium focus:border-emerald-500 focus:bg-white outline-none transition-all shadow-sm" placeholder="Nome da empresa" />
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs font-black text-[#064e3b] uppercase tracking-widest ml-1">Telefone / WhatsApp</label>
                <input type="tel" className="w-full bg-gray-50 border-2 border-transparent rounded-2xl px-5 py-4 text-base font-medium focus:border-emerald-500 focus:bg-white outline-none transition-all shadow-sm" placeholder="(00) 00000-0000" />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-black text-[#064e3b] uppercase tracking-widest ml-1">E-mail Corporativo</label>
                <input type="email" className="w-full bg-gray-50 border-2 border-transparent rounded-2xl px-5 py-4 text-base font-medium focus:border-emerald-500 focus:bg-white outline-none transition-all shadow-sm" placeholder="email@empresa.com" />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-xs font-black text-[#064e3b] uppercase tracking-widest ml-1">Mensagem</label>
              <textarea className="w-full bg-gray-50 border-2 border-transparent rounded-2xl px-5 py-4 h-40 text-base font-medium focus:border-emerald-500 focus:bg-white outline-none transition-all shadow-sm resize-none" placeholder="Como podemos ajudar?"></textarea>
            </div>
            <Button className="w-full font-black uppercase text-lg py-5 shadow-xl" size="lg">Enviar Mensagem</Button>
          </form>

          <div className="flex flex-col justify-center gap-10 md:gap-16">
            <div>
              <h4 className="text-3xl font-black text-[#064e3b] mb-8 uppercase tracking-tighter">Contatos Rápidos</h4>
              <div className="space-y-4">
                <a href={`https://wa.me/${PHONE_FIXED_RAW}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-6 p-6 bg-emerald-50 rounded-[2rem] hover:bg-emerald-100 transition-all group border border-emerald-100/50 shadow-sm">
                  <div className="bg-[#064e3b] text-white p-4 rounded-2xl group-hover:scale-110 transition-transform shrink-0 shadow-lg">
                    <Phone size={24} />
                  </div>
                  <div>
                    <span className="block text-xs text-emerald-800 font-black uppercase tracking-widest mb-1">Fixo e WhatsApp</span>
                    <span className="text-xl md:text-2xl font-black text-[#064e3b] tracking-tighter">{PHONE_FIXED}</span>
                  </div>
                </a>
                <a href={`https://wa.me/${PHONE_SPECIALIST_RAW}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-6 p-6 bg-emerald-50 rounded-[2rem] hover:bg-emerald-100 transition-all group border border-emerald-100/50 shadow-sm">
                  <div className="bg-emerald-600 text-white p-4 rounded-2xl group-hover:scale-110 transition-transform shrink-0 shadow-lg">
                    <Phone size={24} />
                  </div>
                  <div>
                    <span className="block text-xs text-emerald-800 font-black uppercase tracking-widest mb-1">Especialista Médico</span>
                    <span className="text-xl md:text-2xl font-black text-emerald-800 tracking-tighter">{PHONE_SPECIALIST}</span>
                  </div>
                </a>
                <div className="p-6 bg-emerald-50 rounded-[2rem] border border-emerald-100/50 shadow-sm space-y-3">
                   <div className="flex items-center gap-4 text-[#064e3b]">
                      <Mail size={20} className="shrink-0" />
                      <span className="text-sm font-black break-all">{EMAIL_PRIMARY}</span>
                   </div>
                </div>
              </div>
            </div>
            <div className="p-10 bg-gray-50 rounded-[2.5rem] border border-dashed border-emerald-300 text-center relative overflow-hidden">
               <div className="absolute top-0 right-0 w-16 h-16 bg-emerald-100 rounded-bl-[2.5rem] opacity-50" />
               <p className="text-gray-700 font-bold italic text-lg md:text-xl leading-relaxed">
                 "Atendimento personalizado para garantir a saúde do seu maior patrimônio: as pessoas."
               </p>
            </div>
          </div>
        </div>
      </Section>

      {/* Footer */}
      <footer className="bg-[#064e3b] text-white pt-24 pb-12 px-6">
        <div className="max-w-7xl mx-auto flex flex-col gap-16">
          
          {/* Section 1: Brand & Intro */}
          <div className="flex flex-col items-center lg:items-start space-y-8 border-b border-white/10 pb-16">
             <div className="flex items-center">
                <img 
                  src={LOGO_URL} 
                  alt="Sanare Logo" 
                  className="h-20 w-auto object-contain brightness-0 invert"
                />
             </div>
             <p className="text-emerald-100/80 text-lg md:text-xl leading-relaxed max-w-3xl text-center lg:text-left font-medium">
                Referência em Medicina e Segurança do Trabalho. Protegendo empresas e promovendo a saúde de colaboradores com excelência técnica e atendimento humanizado há mais de 20 anos.
             </p>
          </div>

          {/* Section 2: Split Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-16 gap-x-8 border-b border-white/10 pb-16">
            
            <div className="col-span-1">
              <h5 className="text-emerald-400 uppercase tracking-[0.2em] text-xs font-black mb-8">Links Úteis</h5>
              <ul className="space-y-4 text-emerald-100/80 text-sm md:text-base font-bold">
                <li><button onClick={() => scrollTo('quem-somos')} className="hover:text-white transition-colors">Quem Somos</button></li>
                <li><button onClick={() => scrollTo('servicos')} className="hover:text-white transition-colors">Serviços</button></li>
                <li><button onClick={() => scrollTo('unidade-movel')} className="hover:text-white transition-colors">Unidade Móvel</button></li>
                <li><button onClick={handleEmailProposal} className="hover:text-white transition-colors">Solicitar Orçamento</button></li>
              </ul>
            </div>

            <div className="col-span-1">
              <h5 className="text-emerald-400 uppercase tracking-[0.2em] text-xs font-black mb-8">Atendimento</h5>
              <ul className="space-y-5 text-emerald-100/80 text-xs md:text-sm font-bold">
                <li className="flex flex-col gap-2">
                  <div className="flex items-center gap-3">
                    <div className="p-1.5 bg-white/5 rounded-lg"><Phone size={14} className="text-emerald-400 shrink-0" /></div>
                    <span className="truncate tracking-tighter">{PHONE_FIXED}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="p-1.5 bg-white/5 rounded-lg"><Phone size={14} className="text-emerald-400 shrink-0" /></div>
                    <span className="truncate tracking-tighter">{PHONE_SPECIALIST}</span>
                  </div>
                </li>
                <li className="flex flex-col gap-2 mt-2">
                  <div className="flex items-center gap-3">
                    <div className="p-1.5 bg-white/5 rounded-lg"><Mail size={14} className="text-emerald-400 shrink-0" /></div>
                    <span className="truncate tracking-tighter break-all">{EMAIL_PRIMARY}</span>
                  </div>
                </li>
              </ul>
            </div>

            <div className="col-span-2 lg:col-span-2 flex flex-col md:flex-row lg:flex-col gap-10 justify-between lg:justify-start">
               <div>
                  <h5 className="text-emerald-400 uppercase tracking-[0.2em] text-xs font-black mb-8">Certificações e-Social</h5>
                  <div className="flex flex-wrap gap-3">
                    <div className="bg-white/10 px-4 py-2 rounded-xl text-[10px] font-black border border-white/10 uppercase tracking-widest shadow-inner">eSocial Ready</div>
                    <div className="bg-white/10 px-4 py-2 rounded-xl text-[10px] font-black border border-white/10 uppercase tracking-widest shadow-inner">SOC Integrated</div>
                  </div>
               </div>
               <div>
                  <h5 className="text-emerald-400 uppercase tracking-[0.2em] text-xs font-black mb-8">Siga-nos</h5>
                  <div className="flex gap-5">
                    <a href="#" className="p-3 bg-white/5 rounded-2xl hover:bg-white/20 hover:scale-110 transition-all border border-white/10 shadow-lg"><Instagram size={22} /></a>
                    <a href={`https://wa.me/${PHONE_FIXED_RAW}`} target="_blank" rel="noopener noreferrer" className="p-3 bg-white/5 rounded-2xl hover:bg-white/20 hover:scale-110 transition-all border border-white/10 shadow-lg"><Phone size={22} /></a>
                  </div>
               </div>
            </div>
          </div>

          {/* Section 3: Bottom Bar */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-8 text-[11px] md:text-xs font-bold uppercase tracking-widest">
            <div className="text-center md:text-left space-y-3">
              <p className="text-emerald-400/50">© 2026 Sanare Medicina e Segurança do Trabalho.</p>
              <p className="text-emerald-100/40">
                Criado por <a href="http://rkdigital.co" target="_blank" rel="noopener noreferrer" className="text-emerald-300 hover:text-white transition-all underline underline-offset-4 decoration-emerald-500/30">RK DIGITAL</a>
              </p>
            </div>
            <div className="flex items-center gap-6 opacity-30 grayscale contrast-200">
              <span className="text-emerald-100">Excelência</span>
              <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></div>
              <span className="text-emerald-100">Ética</span>
              <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></div>
              <span className="text-emerald-100">Cuidado</span>
            </div>
          </div>
        </div>
      </footer>

      {/* Service Detail Modal (Upgraded Size) */}
      {selectedService && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-10 animate-in fade-in duration-300">
           <div className="absolute inset-0 bg-emerald-950/80 backdrop-blur-xl" onClick={() => setSelectedService(null)} />
           <div className="relative bg-white w-full max-w-6xl max-h-full overflow-y-auto rounded-[2rem] md:rounded-[4rem] shadow-3xl border border-emerald-100/30 flex flex-col">
              <div className="sticky top-0 bg-white/90 backdrop-blur-md px-6 md:px-12 py-6 flex justify-between items-center border-b border-gray-100 z-10">
                 <button 
                  onClick={() => setSelectedService(null)}
                  className="flex items-center gap-2 text-[#064e3b] font-black uppercase text-xs tracking-widest hover:translate-x-[-4px] transition-transform"
                 >
                   <ChevronLeft size={20} /> Voltar
                 </button>
                 <button onClick={() => setSelectedService(null)} className="p-3 hover:bg-gray-100 rounded-full transition-colors">
                    <X size={28} className="text-gray-400" />
                 </button>
              </div>
              
              <div className="p-6 md:p-12 lg:p-16">
                 <div className="flex flex-col lg:flex-row gap-10 lg:gap-20 items-start">
                    {/* Left Side: Icon & Title */}
                    <div className="lg:w-1/3">
                       <div className="text-[#064e3b] mb-10 scale-[1.8] origin-left bg-emerald-50 w-12 h-12 flex items-center justify-center rounded-2xl shadow-sm">
                          {selectedService.icon}
                       </div>
                       <h2 className="text-3xl md:text-5xl font-black text-[#064e3b] mb-6 uppercase tracking-tighter leading-[1.1]">
                          {selectedService.title}
                       </h2>
                       <div className="w-20 h-1.5 bg-emerald-400 rounded-full mb-8" />
                       <div className="hidden lg:block space-y-3 text-gray-500 font-bold text-xs uppercase tracking-widest">
                          <p className="flex items-center gap-2"><CheckCircle2 size={14} className="text-emerald-500" /> Excelência Técnica</p>
                          <p className="flex items-center gap-2"><CheckCircle2 size={14} className="text-emerald-500" /> e-Social Integrado</p>
                          <p className="flex items-center gap-2"><CheckCircle2 size={14} className="text-emerald-500" /> Saúde do Trabalho</p>
                       </div>
                    </div>

                    {/* Right Side: Content & Actions */}
                    <div className="lg:w-2/3 flex flex-col">
                       <div className="prose prose-emerald max-w-none">
                          <p className="text-lg md:text-xl text-gray-700 leading-relaxed font-medium">
                             {selectedService.fullDescription}
                          </p>
                       </div>
                       
                       <div className="mt-12 pt-10 border-t border-gray-100 flex flex-col sm:flex-row gap-6 items-center">
                          <div className="flex-1">
                             <p className="text-gray-500 font-bold uppercase text-[10px] tracking-widest mb-1">Pronto para começar?</p>
                             <h4 className="text-xl md:text-2xl font-black text-[#064e3b] uppercase tracking-tighter">Solicite uma consultoria gratuita</h4>
                          </div>
                          <Button variant="primary" size="lg" className="w-full sm:w-auto px-12 font-black uppercase py-4 text-lg shadow-xl hover:scale-105" onClick={() => {
                             setSelectedService(null);
                             handleEmailProposal();
                          }}>Receber Orçamento</Button>
                       </div>
                    </div>
                 </div>
              </div>
           </div>
        </div>
      )}

      {/* Floating Elements */}
      <WhatsAppButton />
    </div>
  );
};

export default App; 

