import React, { useState, useEffect } from 'react';
import { 
  Server, 
  Network, 
  ShieldCheck, 
  Mail, 
  Linkedin, 
  FileText, 
  ChevronRight, 
  ExternalLink, 
  Globe,
  Menu,
  X,
  CheckCircle2,
  Calendar,
  Award,
  Download,
  Smartphone,
  Terminal,
  Settings,
  Layers,
  Package,
  FileDown,
  Rss,
  BookOpen,
  Bell,
  Eye,
  Database,
  Monitor,
  Lock,
  Wifi,
  Share2
} from 'lucide-react';


const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('all');
  const [scrolled, setScrolled] = useState(false);

  // Gestion du scroll pour l'effet de la barre de navigation
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigation = [
    { name: 'À Propos', href: '#about' },
    { name: 'Compétences', href: '#skills' },
    { name: 'Expériences', href: '#experience' },
    { name: 'Réalisations', href: '#projects' },
    { name: 'Certifications', href: '#certifications' },
    { name: 'Veille', href: '#veille' },
    { name: 'Contact', href: '#contact' },
  ];

  const skillGroups = [
    {
      title: "Cybersécurité",
      icon: <Lock className="w-5 h-5 text-red-400" />,
      skills: ["Pare-feu : OPNsense", "GPO sécurité", "SIEM Wazuh"]
    },
    {
      title: "Infrastructure & Systèmes",
      icon: <Server className="w-5 h-5 text-emerald-400" />,
      skills: [
        "Architecture DMZ, VLANs, segmentation réseau",
        "Administration Windows Serveur / Linux, Active Directory",
        "Virtualisation : Hyper-V, Proxmox",
        "VPN site à site"
      ]
    },
    {
      title: "Réseau",
      icon: <Wifi className="w-5 h-5 text-blue-400" />,
      skills: [
        "Switching, VLAN, DNS/DHCP",
        "Configuration VPN et routage inter-VLANs"
      ]
    },
    {
      title: "Cloud & Services",
      icon: <Layers className="w-5 h-5 text-purple-400" />, 
      skills: ["M365", "Powershell (M365, AD)", "Bash"]
    }
  ];

  const projects = [
    {
      title: "Projet Convergence - Agro Mousquetaires",
      category: "Entreprise",
      desc: "Modernisation infrastructurelle globale : ToIP Ascom, WiFi Aruba (Audit & Heatmaps) et MDM SOTI pour terminaux Zebra.",
      tags: ["Aruba", "SOTI MDM", "Ascom", "WiFi Audit"],
      icon: <Network className="w-6 h-6 text-emerald-400" />,
      docLink: "/docs/projet_convergence.pdf" 
    },
    {
      title: "Projet SFTP Leroy",
      category: "Entreprise",
      desc: "Configuration d'un client SFTP sur Windows Server. Ouverture des flux réseau spécifiques et développement de scripts d'automatisation.",
      tags: ["Windows Server", "SFTP", "Scripting", "Réseau"],
      icon: <Share2 className="w-6 h-6 text-orange-400" />,
      docLink: "/docs/projet_sftp.pdf"
    },
    {
      title: "Configuration Alarme PTI",
      category: "Entreprise",
      desc: "Installation et paramétrage d'un système de Protection du Travailleur Isolé (PTI) intégré à l'infrastructure réseau.",
      tags: ["Sécurité", "IoT", "PTI", "Alarme"],
      icon: <Smartphone className="w-6 h-6 text-red-400" />,
      docLink: "/docs/projet_alarme_pti.pdf"
    },
    {
      title: "Mise en place Serveur GLPI",
      category: "SISR",
      desc: "Déploiement et configuration complète de la solution GLPI pour la gestion du parc informatique et le suivi du helpdesk.",
      tags: ["GLPI", "ITSM", "Inventaire", "Ticketing"],
      icon: <Monitor className="w-6 h-6 text-blue-400" />,
      docLink: "/docs/projet_glpi.pdf"
    },
    {
      title: "Mise en place Serveur Nextcloud",
      category: "SISR",
      desc: "Installation d'une solution cloud privée collaborative pour le stockage et le partage de fichiers sécurisé.",
      tags: ["Nextcloud", "Cloud Privé", "Storage", "Linux"],
      icon: <Database className="w-6 h-6 text-emerald-400" />,
      docLink: "/docs/projet_nextcloud.pdf"
    },
    {
      title: "Mise en place Serveur Owncloud",
      category: "SISR",
      desc: "Configuration d'un serveur Owncloud pour la gestion de fichiers en entreprise avec mise en place de politiques de quotas.",
      tags: ["Owncloud", "Collaboration", "Linux", "Apache"],
      icon: <Globe className="w-6 h-6 text-indigo-400" />,
      docLink: "/docs/projet_owncloud.pdf"
    },
    {
      title: "Création site Web",
      category: "SISR",
      desc: "Conception et développement de ce portfolio professionnel présentant mes compétences et expériences techniques.",
      tags: ["React", "Tailwind CSS", "UI/UX", "Portfolio"],
      icon: <Globe className="w-6 h-6 text-purple-400" />,
      docLink: "/docs/projet_portfolio.pdf"
    },
    {
      title: "Veille Technologique",
      category: "SISR",
      desc: "Organisation et mise en œuvre d'une veille active sur les innovations technologiques et la cybersécurité.",
      tags: ["Veille", "RSS", "Cybersécurité", "Innovation"],
      icon: <BookOpen className="w-6 h-6 text-yellow-400" />,
      docLink: "/docs/veille_technologique.pdf"
    },
    {
      title: "Redondance Active Directory",
      category: "SISR",
      desc: "Architecture haute disponibilité : Réplication de contrôleurs de domaine (DC), gestion FSMO et DNS redondé.",
      tags: ["Windows Server", "ADDS", "FSMO", "DNS"],
      icon: <ShieldCheck className="w-6 h-6 text-blue-400" />,
      docLink: "/docs/projet_ad.pdf"
    },
    {
      title: "Déploiement Application via GPO",
      category: "Entreprise",
      desc: "Automatisation du déploiement logiciel : Création de paquets MSI et application de stratégies de groupe (GPO).",
      tags: ["GPO", "MSI", "Automation", "Deployment"],
      icon: <Package className="w-6 h-6 text-purple-400" />,
      docLink: "/docs/projet_gpo.pdf"
    }
  ];

  const experiences = [
    {
      company: "Solarys \"Groupement les Mousquetaires\", Vauvert",
      role: "Technicien Support Informatique en alternance",
      period: "Août 2024 - Présent",
      tasks: [
        "Infogérance : Support N1/N2 via GLPI, diagnostic, résolution d'incidents et suivi utilisateurs",
        "Migration de parc informatique (Windows 10 vers Windows 11)",
        "Création de liens SFTP sécurisés vers des prestataires",
        "Maintenance informatique du site (Logiciel / Matériel)",
        "Réseaux : Paramétrage de VLAN",
        "Téléphonie IP : Création de numéros, paramétrage de standards et DECT",
        "Solution MDM : Création de profils et intégration du matériel",
        "Wifi : Réalisation d'audits et de Heatmaps"
      ]
    },
    {
      company: "Digit'hall, Saint Rémy de Provence",
      role: "Stage Bac Pro SN (12 semaines)",
      period: "2024",
      tasks: [
        "Création de VLAN et routage InterVlan",
        "Configuration de serveurs et migration dynamique de VMs",
        "Installation d'un système de sauvegarde (Beemo)"
      ]
    },
    {
      company: "EPC FRANCE, Saint Martin de Crau",
      role: "Stage Bac Pro SN (4 semaines)",
      period: "2023",
      tasks: [
        "Configurations de postes de travail et de smartphones"
      ]
    },
    {
      company: "Mairie de TARASCON",
      role: "Stage Bac Pro SN (6 semaines)",
      period: "2022",
      tasks: [
        "Configuration d'une borne Wifi"
      ]
    }
  ];

  const documents = [
    {
      title: "Tableau de Synthèse (E4)",
      desc: "Récapitulatif officiel des compétences SISR validées durant le cursus BTS SIO.",
      icon: <FileText className="w-8 h-8 text-blue-500" />,
      link: "/docs/tableau_synthese_E4.pdf" 
    },
    {
      title: "SecNumacadémie (ANSSI)",
      desc: "Certification de cybersécurité obtenue avec 90% de réussite.",
      icon: <ShieldCheck className="w-8 h-8 text-red-500" />,
      link: "/docs/certif_secnumacademie.pdf" 
    },
    {
      title: "Certification PIX",
      desc: "Attestation des compétences numériques (Maîtrise des outils & sécurité).",
      icon: <Award className="w-8 h-8 text-emerald-500" />,
      link: "/docs/certif_pix.pdf" 
    }
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 font-sans selection:bg-blue-500/30 scroll-smooth">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? 'bg-slate-950/90 backdrop-blur-xl border-b border-slate-800 py-2' : 'bg-transparent py-4'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex-shrink-0 flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-emerald-600 rounded-xl flex items-center justify-center font-black text-white shadow-lg shadow-blue-500/20 transition-transform hover:scale-105">TC</div>
              <div className="flex flex-col leading-tight">
                <span className="font-bold text-lg tracking-tight text-white">Théo Chatelier</span>
                <span className="text-[10px] text-blue-400 font-bold uppercase tracking-widest italic">Technicien Informatique</span>
              </div>
            </div>
            
            <div className="hidden lg:flex items-center space-x-1">
              {navigation.map((item) => (
                <a 
                  key={item.name} 
                  href={item.href} 
                  className="px-4 py-2 text-xs font-bold text-slate-400 hover:text-blue-400 transition-all rounded-lg hover:bg-white/5"
                >
                  {item.name}
                </a>
              ))}
            </div>

            <div className="lg:hidden">
              <button 
                onClick={() => setIsMenuOpen(!isMenuOpen)} 
                className="p-2 text-slate-400 hover:text-white transition-colors"
                aria-label="Menu"
              >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`lg:hidden absolute w-full bg-slate-900/95 backdrop-blur-xl border-b border-slate-800 transition-all duration-300 overflow-hidden ${isMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'}`}>
          <div className="px-4 pt-2 pb-6 space-y-1 shadow-2xl">
            {navigation.map((item) => (
              <a 
                key={item.name} 
                href={item.href} 
                className="block px-4 py-3 text-base font-bold text-slate-300 hover:bg-blue-600/10 hover:text-blue-400 rounded-xl transition-all"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="relative pt-48 pb-32 px-4 overflow-hidden text-center">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-600/10 blur-[150px] rounded-full -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-emerald-600/5 blur-[120px] rounded-full translate-y-1/2 -translate-x-1/2"></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-black uppercase tracking-[0.2em] mb-10">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            Disponible pour Alternance
          </div>
          
          <h1 className="text-5xl md:text-8xl font-black text-white mb-8 tracking-tighter leading-[0.95]">
            Technicien <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-emerald-400 to-blue-500 italic">Systèmes & Réseaux</span>
          </h1>
          
          <p className="max-w-2xl mx-auto text-lg md:text-xl text-slate-400 mb-12 leading-relaxed font-medium">
            Étudiant en <span className="text-white">BTS SIO option SISR</span>. Passionné par l'infrastructure réseau, la virtualisation et la cybersécurité opérationnelle.
          </p>
          
          <div className="flex flex-wrap justify-center gap-5">
            <a 
              href="/CV_CHATELIER_Theo.pdf"
              download="CV_Theo_Chatelier.pdf"
              className="group px-10 py-5 bg-blue-600 hover:bg-blue-700 text-white font-black rounded-2xl transition-all shadow-2xl shadow-blue-600/40 flex items-center gap-3 uppercase text-xs tracking-widest inline-flex"
            >
              <FileDown className="w-5 h-5 group-hover:translate-y-1 transition-transform" /> Télécharger mon CV
            </a>
            <a href="#contact" className="px-10 py-5 bg-slate-800/50 hover:bg-slate-800 text-white font-black rounded-2xl transition-all flex items-center gap-3 border border-slate-700 uppercase text-xs tracking-widest backdrop-blur-sm">
              Me contacter <ChevronRight className="w-5 h-5 text-blue-400" />
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 bg-slate-900/40 border-y border-slate-900 px-4">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-20 items-center">
          <div className="space-y-8 text-left">
            <h2 className="text-4xl font-black text-white flex items-center gap-4">
              <Layers className="text-blue-500 w-10 h-10" /> À propos
            </h2>
            <div className="space-y-6">
              <p className="text-slate-400 text-xl leading-relaxed">
                Diplômé d'un <span className="text-white underline decoration-blue-500 underline-offset-8">Bac Pro RISC (Mention Bien)</span> en 2024, je forge mon expertise technique à travers un BTS SIO au CCI Vaucluse.
              </p>
              <p className="text-slate-400 text-lg leading-relaxed">
                Curieux et rigoureux, j'ai eu l'opportunité de travailler sur des projets d'envergure comme le projet <span className="text-white font-bold italic">Convergence</span> chez Agro Mousquetaires, alliant audit WiFi et déploiement MDM.
              </p>
            </div>
            <div className="pt-6">
              <div className="p-8 bg-slate-950 rounded-3xl border border-slate-800 shadow-xl inline-block group hover:border-blue-500/40 transition-all">
                <div className="text-4xl font-black text-blue-500 mb-1 group-hover:scale-105 transition-transform origin-left">SISR</div>
                <div className="text-[10px] uppercase text-slate-500 font-black tracking-[0.2em]">Option de spécialisation</div>
              </div>
            </div>
          </div>
          
          <div className="relative group">
            <div className="aspect-[4/5] rounded-[2.5rem] bg-gradient-to-br from-blue-600 via-indigo-900 to-slate-900 overflow-hidden border border-slate-700 shadow-2xl relative">
              <div className="absolute inset-0 flex items-center justify-center opacity-10">
                <Terminal className="w-72 h-72 text-white" />
              </div>
              <div className="absolute inset-x-6 bottom-6 p-8 bg-slate-950/80 backdrop-blur-2xl rounded-3xl border border-white/5 text-left">
                <h3 className="text-2xl font-black text-white mb-1 uppercase tracking-tight">Théo Chatelier</h3>
                <p className="text-blue-400 font-black text-xs uppercase tracking-[0.2em]">Technicien Informatique</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-32 px-4 bg-slate-950">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-black text-white mb-6 tracking-tighter uppercase">Compétences Techniques</h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-blue-600 to-emerald-600 mx-auto rounded-full"></div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skillGroups.map((group, idx) => (
              <div key={idx} className="p-8 bg-slate-900/40 rounded-3xl border border-slate-800 hover:border-blue-500/50 transition-all group shadow-lg">
                <div className="w-12 h-12 bg-slate-950 rounded-2xl flex items-center justify-center mb-6 group-hover:rotate-6 transition-transform">
                  {group.icon}
                </div>
                <h3 className="text-lg font-black text-white mb-6 uppercase tracking-wider">{group.title}</h3>
                <ul className="space-y-3">
                  {group.skills.map((skill, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm text-slate-400">
                      <CheckCircle2 className="w-4 h-4 text-blue-500 shrink-0" />
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Timeline */}
      <section id="experience" className="py-32 bg-slate-900/20 px-4 border-y border-slate-900">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-black text-white mb-20 text-center uppercase tracking-tight">Parcours Professionnel</h2>
          
          <div className="space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-slate-800">
            {experiences.map((exp, idx) => (
              <div key={idx} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
                <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-slate-950 bg-blue-600 text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 transition-transform group-hover:scale-110">
                  <Calendar className="w-4 h-4" />
                </div>
                
                <div className="w-[calc(100%-4rem)] md:w-[45%] p-8 rounded-[2rem] border border-slate-800 bg-slate-950 shadow-2xl text-left hover:border-blue-500/40 transition-all">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 gap-2">
                    <h4 className="text-xl font-black text-white tracking-tight">{exp.company}</h4>
                    <span className="text-[10px] uppercase font-black text-blue-400 px-3 py-1 bg-blue-400/10 rounded-full border border-blue-400/20 w-fit">{exp.period}</span>
                  </div>
                  <div className="text-sm font-bold text-slate-300 mb-6 flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div>
                    {exp.role}
                  </div>
                  <ul className="text-sm text-slate-500 space-y-3 font-medium">
                    {exp.tasks.map((task, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-blue-500 mt-1">•</span> {task}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Realisations Section */}
      <section id="projects" className="py-32 px-4 bg-slate-950">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <div className="space-y-4 text-left">
              <h2 className="text-5xl font-black text-white tracking-tighter uppercase">Réalisations</h2>
              <p className="text-slate-500 font-bold italic text-lg max-w-xl border-l-4 border-blue-600 pl-6">
                Projets d'infrastructure critiques et documentation technique E4.
              </p>
            </div>
            
            <div className="flex bg-slate-900/50 p-1.5 rounded-2xl border border-slate-800 backdrop-blur-sm">
              {[
                { id: 'all', label: 'Tous' },
                { id: 'SISR', label: 'SISR' },
                { id: 'Entreprise', label: 'Entreprise' }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-8 py-3 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all ${activeTab === tab.id ? 'bg-blue-600 text-white shadow-xl shadow-blue-600/20' : 'text-slate-500 hover:text-white'}`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {projects.filter(p => activeTab === 'all' || p.category === activeTab).map((proj, idx) => (
              <div key={idx} className="group p-1 rounded-[2.5rem] bg-slate-900/50 hover:bg-gradient-to-br hover:from-blue-600/20 hover:to-emerald-600/20 transition-all border border-slate-800 shadow-xl h-full">
                <div className="bg-slate-950 p-10 rounded-[2.2rem] h-full flex flex-col">
                  <div className="flex justify-between items-start mb-8">
                    <div className="p-4 bg-slate-900 rounded-2xl group-hover:rotate-6 transition-transform shadow-inner">{proj.icon}</div>
                    <span className="px-3 py-1 text-[9px] font-black uppercase tracking-widest bg-blue-500/10 text-blue-400 rounded-full border border-blue-500/20">{proj.category}</span>
                  </div>
                  
                  <h3 className="text-2xl font-black text-white mb-4 leading-tight group-hover:text-blue-400 transition-colors text-left">{proj.title}</h3>
                  <p className="text-slate-400 text-sm mb-10 flex-grow leading-relaxed font-medium italic text-left">
                    {proj.desc}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-10">
                    {proj.tags.map(tag => (
                      <span key={tag} className="px-3 py-1 text-[9px] uppercase tracking-tighter font-black bg-slate-900 text-slate-500 rounded-lg border border-slate-800">{tag}</span>
                    ))}
                  </div>

                  <a 
                    href={proj.docLink}
                    download
                    className="w-full inline-flex items-center justify-center gap-3 py-4 bg-blue-600/10 hover:bg-blue-600 text-blue-400 hover:text-white rounded-2xl text-[10px] font-black uppercase tracking-[0.2em] transition-all border border-blue-600/20 group/btn"
                  >
                    <FileDown className="w-4 h-4 group-hover/btn:animate-bounce" />
                    Télécharger le document
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section id="certifications" className="py-32 px-4 bg-slate-900/30 relative overflow-hidden border-t border-slate-900">
        <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-blue-600/5 rounded-full blur-[100px]"></div>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-black text-white mb-6 tracking-tighter uppercase">Dossier E4 & Certifications</h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-blue-600 to-emerald-600 mx-auto rounded-full"></div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {documents.map((doc, idx) => (
              <div key={idx} className="p-10 bg-slate-950 border border-slate-800 rounded-[2.5rem] hover:border-blue-500 transition-all group shadow-2xl relative flex flex-col items-start">
                <div className="p-5 bg-slate-900 rounded-3xl w-fit mb-8 group-hover:scale-110 transition-transform">
                  {doc.icon}
                </div>
                <h3 className="text-2xl font-black text-white mb-4 tracking-tight text-left">{doc.title}</h3>
                <p className="text-slate-500 mb-10 text-base leading-relaxed font-medium text-left flex-grow">{doc.desc}</p>
                
                <a 
                  href={doc.link}
                  download
                  className="inline-flex items-center gap-3 text-[10px] font-black text-blue-400 hover:text-blue-300 uppercase tracking-[0.25em]"
                >
                  <Download className="w-5 h-5" /> Télécharger
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Veille Technologique Section */}
      <section id="veille" className="py-32 px-4 bg-slate-950 border-t border-slate-900">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center mb-24 gap-12 text-left">
            <div className="space-y-4">
              <h2 className="text-5xl font-black text-white tracking-tighter uppercase">Veille Technologique</h2>
              <p className="text-slate-500 font-bold text-xl italic max-w-2xl border-l-4 border-blue-600 pl-6">
                Suivi continu des innovations IT et de la cybersécurité.
              </p>
            </div>
            <div className="p-8 bg-blue-600 rounded-3xl shadow-2xl shadow-blue-600/20 hidden md:block">
               <Rss className="w-12 h-12 text-white" />
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div className="space-y-10">
              <h3 className="text-xl font-black text-white flex items-center gap-4 uppercase tracking-widest text-left">
                <Settings className="text-blue-500 w-8 h-8" /> Mes Outils de Veille
              </h3>
              <div className="grid gap-6">
                {[
                  { title: "Google Alerts", desc: "Monitoring quotidien des mots-clés : Cyber, MDM, Active Directory.", icon: <Bell className="w-8 h-8"/>, color: "blue" },
                  { title: "ANSSI / CERT-FR", desc: "Abonnement aux alertes de vulnérabilité et guides de bonnes pratiques.", icon: <ShieldCheck className="w-8 h-8"/>, color: "red" }
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-6 p-8 bg-slate-900/60 rounded-[2rem] border border-slate-800 hover:border-blue-500/40 transition-all shadow-lg group text-left">
                    <div className={`w-16 h-16 bg-slate-950 rounded-2xl flex items-center justify-center text-blue-500 group-hover:bg-blue-600 group-hover:text-white transition-all`}>
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="font-black text-white text-lg">{item.title}</h4>
                      <p className="text-sm text-slate-400 font-medium italic">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-10">
              <h3 className="text-xl font-black text-white flex items-center gap-4 uppercase tracking-widest text-left">
                <Eye className="text-emerald-500 w-8 h-8" /> Thèmes de Veille
              </h3>
              <div className="space-y-8">
                {[
                  { tag: "Sécurité Réseau", title: "IA & NDR : Le cas Custocy", desc: "Analyse de l'IA dans la détection comportementale des menaces réseaux.", color: "emerald" },
                  { tag: "Gouvernance IT", title: "CISA : Évolution Cyber", desc: "Étude des standards de cybersécurité mondiaux pilotés par la CISA.", color: "blue" }
                ].map((item, i) => (
                  <div key={i} className="group p-8 bg-slate-900/20 rounded-[2rem] border border-slate-800/50 hover:bg-slate-900/40 transition-all text-left">
                    <div className={`flex items-center gap-4 mb-4`}>
                      <div className={`w-10 h-[2px] bg-blue-500`}></div>
                      <span className="text-[10px] font-black uppercase tracking-widest text-blue-400">{item.tag}</span>
                    </div>
                    <h4 className="text-white text-2xl font-black mb-4 flex items-center gap-3 tracking-tight">
                      {item.title} <ExternalLink className="w-5 h-5 text-slate-700" />
                    </h4>
                    <p className="text-slate-400 text-sm leading-relaxed font-medium italic">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer / Contact */}
      <footer id="contact" className="py-32 bg-slate-950 border-t border-slate-900 px-4">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-20 text-left">
          <div className="space-y-10">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-blue-600 rounded-2xl flex items-center justify-center font-black text-white text-2xl shadow-xl shadow-blue-600/20">TC</div>
              <span className="font-black text-3xl text-white tracking-tighter uppercase">Théo Chatelier</span>
            </div>
            <p className="text-slate-500 font-medium text-lg leading-relaxed italic">
              Technicien systèmes et réseaux focalisé sur l'efficience opérationnelle et la sécurité des infrastructures.
            </p>
            <div className="flex gap-6">
              <a href="#" className="p-4 bg-slate-900 rounded-2xl text-slate-400 hover:text-blue-400 border border-slate-800 transition-all hover:-translate-y-2 shadow-lg"><Linkedin className="w-7 h-7" /></a>
              <a href="mailto:theo.chatelier@outlook.fr" className="p-4 bg-slate-900 rounded-2xl text-slate-400 hover:text-white border border-slate-800 transition-all hover:-translate-y-2 shadow-lg"><Mail className="w-7 h-7" /></a>
            </div>
          </div>
          
          <div className="space-y-10">
            <h3 className="text-white font-black uppercase tracking-[0.25em] text-xs">Plan du site</h3>
            <ul className="grid grid-cols-1 gap-y-5 text-slate-500 font-black text-xs uppercase tracking-widest">
              {navigation.map((item) => (
                <li key={item.name} className="flex items-center gap-3 group">
                  <div className="w-1.5 h-1.5 rounded-full bg-slate-800 group-hover:bg-blue-500 transition-colors"></div>
                  <a href={item.href} className="hover:text-white transition-colors">{item.name}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-10">
            <h3 className="text-white font-black uppercase tracking-[0.25em] text-xs">Informations</h3>
            <div className="bg-slate-900/50 p-10 rounded-[2.5rem] border border-slate-800 space-y-8 shadow-2xl relative overflow-hidden group">
              <div className="flex items-center gap-6 text-slate-400 font-medium">
                <div className="p-4 bg-slate-950 rounded-2xl border border-slate-800 shrink-0"><Mail className="w-6 h-6 text-blue-500" /></div>
                <div className="flex flex-col min-w-0">
                  <span className="text-[10px] uppercase font-black tracking-widest text-slate-600">Email</span>
                  <span className="text-white font-bold text-sm truncate">theo.chatelier@outlook.fr</span>
                </div>
              </div>
              <div className="flex items-center gap-6 text-slate-400 font-medium">
                <div className="p-4 bg-slate-950 rounded-2xl border border-slate-800 shrink-0"><Globe className="w-6 h-6 text-emerald-500" /></div>
                <div className="flex flex-col">
                  <span className="text-[10px] uppercase font-black tracking-widest text-slate-600">Localisation</span>
                  <span className="text-white font-bold text-sm">Avignon, France</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-32 pt-12 border-t border-slate-900 text-center text-slate-700 text-[10px] font-black uppercase tracking-[0.5em]">
          © {new Date().getFullYear()} Théo Chatelier • Portfolio BTS SIO SISR
        </div>
      </footer>
    </div>
  );
};

export default App;