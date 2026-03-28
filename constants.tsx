
import React from 'react';
import { 
  ShieldCheck, 
  Hospital, 
  Settings, 
  Handshake, 
  Stethoscope, 
  HardHat, 
  UserRound, 
  Brain, 
  Ear, 
  Search, 
  Activity, 
  Users,
  FileText,
  AlertTriangle,
  GraduationCap,
  Microscope,
  ClipboardCheck,
  TrendingDown,
  LineChart
} from 'lucide-react';
import { Service, Differential, Professional } from './types';

export const COLORS = {
  primary: '#064e3b', // Deep green
  secondary: '#d1fae5', // Mint
  accent: '#d4af37', // Gold
  text: '#374151', // Graphite
  white: '#ffffff',
};

export const DIFFERENTIALS: Differential[] = [
  {
    title: 'Confiança',
    description: 'Processos seguros, atuação ética e equipe altamente qualificada.',
    icon: <ShieldCheck className="w-8 h-8" />,
  },
  {
    title: 'Estrutura Completa',
    description: 'Clínica moderna, unidade móvel equipada e ambulância própria.',
    icon: <Hospital className="w-8 h-8" />,
  },
  {
    title: 'Tecnologia',
    description: 'Sistema de gestão integrado ao e-Social e SOC, com segurança da informação.',
    icon: <Settings className="w-8 h-8" />,
  },
  {
    title: 'Comodidade',
    description: 'Atendimento integrado, personalizado e, se necessário, direto na sua empresa.',
    icon: <Handshake className="w-8 h-8" />,
  },
];

export const PROFESSIONALS: Professional[] = [
  { title: 'Médico do Trabalho', icon: <Stethoscope /> },
  { title: 'Engenheiro de Segurança', icon: <HardHat /> },
  { title: 'Técnico de Segurança', icon: <UserRound /> },
  { title: 'Psicólogo', icon: <Brain /> },
  { title: 'Fonoaudiólogo', icon: <Ear /> },
  { title: 'Ergonomista', icon: <Activity /> },
  { title: 'Fisioterapeuta', icon: <Users /> },
  { title: 'Equipe Administrativa', icon: <FileText /> },
];

export const SERVICES: Service[] = [
  { 
    id: 'pcmso', 
    title: 'PCMSO', 
    description: 'Programa de Controle Médico de Saúde Ocupacional.', 
    fullDescription: 'O PCMSO (NR-7) é o principal programa de saúde da empresa. Ele estabelece a obrigatoriedade da elaboração e implementação, por parte de todos os empregadores e instituições que admitam trabalhadores como empregados. Na Sanare, realizamos a gestão completa, desde a avaliação clínica até os exames complementares, garantindo a prevenção, rastreamento e diagnóstico precoce dos agravos à saúde relacionados ao trabalho.',
    icon: <Stethoscope /> 
  },
  { 
    id: 'pgr', 
    title: 'PGR', 
    description: 'Programa de Gerenciamento de Riscos.', 
    fullDescription: 'O PGR (NR-1) substituiu o antigo PPRA e tem como objetivo estabelecer as diretrizes e requisitos para o gerenciamento de riscos ocupacionais. Nossa equipe de engenharia realiza o levantamento detalhado de perigos e a avaliação de riscos físicos, químicos e biológicos, elaborando um plano de ação robusto para a mitigação de acidentes e doenças ocupacionais.',
    icon: <AlertTriangle /> 
  },
  { 
    id: 'toxicologico', 
    title: 'Exame Toxicológico', 
    description: 'Evento obrigatório do e-Social (S2221).', 
    fullDescription: 'Realizamos exames toxicológicos de larga janela de detecção, obrigatórios para motoristas profissionais das categorias C, D e E. Garantimos a coleta ágil e o envio dos dados para o e-Social (Evento S2221), assegurando que sua empresa cumpra os prazos legais e evite multas.',
    icon: <Microscope /> 
  },
  { 
    id: 'absenteismo', 
    title: 'Controle de Absenteísmo e Presenteísmo', 
    description: 'Gestão estratégica de faltas e afastamentos.', 
    fullDescription: 'O controle de absenteísmo e presenteísmo visa identificar as causas de faltas e da baixa produtividade decorrentes de problemas de saúde. Realizamos a análise epidemiológica dos atestados médicos, avaliação das condições de trabalho e implementação de programas de promoção à saúde, ajudando a empresa a reduzir custos operacionais e melhorar o clima organizacional através de uma gestão humanizada e técnica.',
    icon: <Activity /> 
  },
  { 
    id: 'pgrss', 
    title: 'PGRSS', 
    description: 'Plano de Gerenciamento de Resíduos de Serviços de Saúde.', 
    fullDescription: 'Elaboramos o PGRSS para estabelecimentos de saúde, garantindo o manejo correto, segregação, acondicionamento e destinação final de resíduos infectantes e químicos, seguindo rigorosamente as normas da ANVISA e órgãos ambientais.',
    icon: <ClipboardCheck /> 
  },
  { 
    id: 'ppp', 
    title: 'PPP', 
    description: 'Perfil Profissiográfico Previdenciário.', 
    fullDescription: 'O PPP é um documento histórico-laboral do trabalhador que reúne dados sobre a saúde e a exposição a agentes nocivos. Com a digitalização do e-Social, a Sanare garante a emissão eletrônica precisa, fundamental para processos de aposentadoria especial.',
    icon: <FileText /> 
  },
  { 
    id: 'pca', 
    title: 'PCA', 
    description: 'Programa de Conservação Auditiva.', 
    fullDescription: 'O PCA é um conjunto de medidas coordenadas que visam a prevenir a instalação ou evolução das perdas auditivas ocupacionais. Inclui avaliações ambientais, exames de audiometria periódicos e treinamentos sobre o uso correto de protetores auriculares.',
    icon: <Ear /> 
  },
  { 
    id: 'ppr', 
    title: 'PPR', 
    description: 'Programa de Proteção Respiratória.', 
    fullDescription: 'Desenvolvemos o PPR para controlar doenças ocupacionais causadas pela inalação de poeiras, fumos, névoas ou vapores. O programa engloba a seleção adequada do respirador, ensaios de vedação (fit test) e treinamento dos colaboradores.',
    icon: <Activity /> 
  },
  { 
    id: 'treinamentos', 
    title: 'Treinamentos NR', 
    description: 'Capacitação completa em normas regulamentadoras.', 
    fullDescription: 'Oferecemos treinamentos presenciais e in company para diversas NRs (NR-10, NR-33, NR-35, CIPA, entre outras). Nossos instrutores são especialistas com vasta experiência prática, focados em uma cultura de segurança ativa.',
    icon: <GraduationCap /> 
  },
  { 
    id: 'avaliacoes', 
    title: 'Avaliações Ambientais', 
    description: 'Medições precisas de riscos físicos e químicos.', 
    fullDescription: 'Utilizamos equipamentos de alta precisão para medição de ruído, calor, vibração, agentes químicos e iluminação. Estes dados são fundamentais para o preenchimento do PGR e do LTCAT, garantindo segurança jurídica para a empresa.',
    icon: <Search /> 
  },
  { 
    id: 'pericias', 
    title: 'Perícias Judiciais', 
    description: 'Suporte técnico especializado em perícias.', 
    fullDescription: 'Atuamos como Assistentes Técnicos em perícias médicas e de engenharia. Oferecemos suporte na elaboração de quesitos, acompanhamento do perito oficial e confecção de pareceres técnicos divergentes ou concordantes.',
    icon: <ShieldCheck /> 
  },
  { 
    id: 'palestras', 
    title: 'Palestras Preventivas', 
    description: 'Eventos preventivos e motivacionais.', 
    fullDescription: 'Promovemos SIPATs e palestras focadas em saúde mental, ergonomia, prevenção de acidentes e qualidade de vida. Nossos conteúdos são personalizados para a realidade de cada cliente, visando o engajamento do time.',
    icon: <Users /> 
  },
];

export const EXAMS = [
  'Audiometria Tonal e Vocal',
  'Logoaudiometria (SRT)',
  'Imitanciometria',
  'Impedanciometria',
  'Teste da Orelhinha',
  'Emissões Otoacústicas',
  'Eletrocardiograma (ECG)',
  'Eletroencefalograma (EEG)',
  'Espirometria',
  'Acuidade Visual',
  'Raio X Digital',
  'Exame Toxicológico (S2221)',
  'ASO'
];
