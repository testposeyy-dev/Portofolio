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
  Share2,
  Paperclip
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
      icon: <Lock className="w-8 h-8 text-red-600" />,
      skills: ["Pare-feu : OPNsense", "GPO sécurité", "SIEM Wazuh"]
    },
    {
      title: "Infrastructure & Systèmes",
      icon: <Server className="w-8 h-8 text-emerald-600" />,
      skills: [
        "Architecture DMZ, VLANs, segmentation réseau",
        "Administration Windows Serveur / Linux, Active Directory",
        "Virtualisation : Hyper-V, Proxmox",
        "VPN site à site"
      ]
    },
    {
      title: "Réseau",
      icon: <Wifi className="w-8 h-8 text-blue-600" />,
      skills: [
        "Switching, VLAN, DNS/DHCP",
        "Configuration VPN et routage inter-VLANs"
      ]
    },
    {
      title: "Cloud & Services",
      icon: <Layers className="w-8 h-8 text-purple-600" />, 
      skills: ["M365", "Powershell (M365, AD)", "Bash"]
    }
  ];

  const projects = [
    {
      title: "Projet Convergence - Agro Mousquetaires",
      category: "Entreprise",
      desc: "Modernisation infrastructurelle globale : ToIP Ascom, WiFi Aruba (Audit & Heatmaps) et MDM SOTI pour terminaux Zebra.",
      tags: ["Aruba", "SOTI MDM", "Ascom", "WiFi Audit"],
      icon: <Network className="w-8 h-8 text-emerald-600" />,
      docLink: "/docs/Solarys Projet Convergence.pdf",
      annexes: [
        { title: "Téléphonie IP", link: "/docs/Telephone-IP.pdf" },
        { title: "Annuaire Cisco Jabber", link: "/docs/Annuaire_Cisco_Jabber.pdf" },
        { title: "SOTI MobiControl", link: "/docs/soti.pdf" }
      ]
    },
    {
      title: "Projet SFTP Leroy",
      category: "Entreprise",
      desc: "Configuration d'un client SFTP sur Windows Server. Ouverture des flux réseau spécifiques et développement de scripts d'automatisation.",
      tags: ["Windows Server", "SFTP", "Scripting", "Réseau"],
      icon: <Share2 className="w-8 h-8 text-orange-600" />,
      docLink: "/docs/Solarys SFTP LeRoy.docx.pdf"
    },
    {
      title: "Configuration Alarme PTI",
      category: "Entreprise",
      desc: "Installation et paramétrage d'un système de Protection du Travailleur Isolé (PTI) intégré à l'infrastructure réseau.",
      tags: ["Sécurité", "IoT", "PTI", "Alarme"],
      icon: <Smartphone className="w-8 h-8 text-red-600" />,
      docLink: "/docs/Solarys Configuration PTI.pdf"
    },
    {
      title: "Mise en place Serveur GLPI",
      category: "SISR",
      desc: "Déploiement et configuration complète de la solution GLPI pour la gestion du parc informatique et le suivi du helpdesk.",
      tags: ["GLPI", "ITSM", "Inventaire", "Ticketing"],
      icon: <Monitor className="w-8 h-8 text-blue-600" />,
      docLink: "/docs/SISR GLPI.pdf"
    },
    {
      title: "Mise en place Serveur Nextcloud",
      category: "SISR",
      desc: "Installation d'une solution cloud privée collaborative pour le stockage et le partage de fichiers sécurisé.",
      tags: ["Nextcloud", "Cloud Privé", "Storage", "Linux"],
      icon: <Database className="w-8 h-8 text-emerald-600" />,
      docLink: "/docs/SISR Serveur Nextcloud.pdf"
    },
    {
      title: "Mise en place Serveur Owncloud",
      category: "SISR",
      desc: "Configuration d'un serveur Owncloud pour la gestion de fichiers en entreprise avec mise en place de politiques de quotas.",
      tags: ["Owncloud", "Collaboration", "Linux", "Apache"],
      icon: <Globe className="w-8 h-8 text-indigo-600" />,
      docLink: "/docs/SISR Serveur Owncloud.pdf"
    },
    {
      title: "Création site Web",
      category: "SISR",
      desc: "Conception et développement de ce portfolio professionnel présentant mes compétences et expériences techniques.",
      tags: ["React", "Tailwind CSS", "UI/UX", "Portfolio"],
      icon: <Globe className="w-8 h-8 text-purple-600" />,
      docLink: "/docs/Portfolio.pdf"
    },
    {
      title: "Veille Technologique",
      category: "SISR",
      desc: "Organisation et mise en œuvre d'une veille active sur les innovations technologiques et la cybersécurité.",
      tags: ["Veille", "RSS", "Cybersécurité", "Innovation"],
      icon: <BookOpen className="w-8 h-8 text-yellow-600" />,
      docLink: "/docs/veille_technologique.pdf"
    },
    {
      title: "Redondance Active Directory",
      category: "SISR",
      desc: "Architecture haute disponibilité : Réplication de contrôleurs de domaine (DC), gestion FSMO et DNS redondé.",
      tags: ["Windows Server", "ADDS", "FSMO", "DNS"],
      icon: <ShieldCheck className="w-8 h-8 text-blue-600" />,
      docLink: "/docs/SISR Redondance AD.pdf"
    },
    {
      title: "Déploiement Application via GPO",
      category: "Entreprise",
      desc: "Automatisation du déploiement logiciel : Création de paquets MSI et application de stratégies de groupe (GPO).",
      tags: ["GPO", "MSI", "Automation", "Deployment"],
      icon: <Package className="w-8 h-8 text-purple-600" />,
      docLink: "/docs/Solarys Déploiement Wireshark via GPO.pdf"
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
      period: "2023 - 2024",
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
      icon: <FileText className="w-10 h-10 text-blue-600" />,
      link: "/docs/Tableau de Synthèse.pdf" 
    },
    {
      title: "SecNumacadémie (ANSSI)",
      desc: "Certification de cybersécurité obtenue avec 90% de réussite.",
      icon: <ShieldCheck className="w-10 h-10 text-red-600" />,
      link: "Anssi.pdf" 
    },
    {
      title: "Certification PIX",
      desc: "Attestation des compétences numériques (Maîtrise des outils & sécurité).",
      icon: <Award className="w-10 h-10 text-emerald-600" />,
      link: "pix.pdf" 
    }
  ];

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-blue-200 scroll-smooth">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? 'bg-white/95 border-b-2 border-slate-200 py-3 shadow-md' : 'bg-white py-4 border-b-2 border-slate-100'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20 items-center">
            <div className="flex-shrink-0 flex items-center gap-4">
              <div className="w-14 h-14 bg-gradient-to-br from-blue-600 to-emerald-600 rounded-xl flex items-center justify-center font-black text-white text-2xl shadow-lg shadow-blue-500/20">TC</div>
              <div className="flex flex-col leading-tight">
                <span className="font-black text-2xl tracking-tight text-slate-900">Théo Chatelier</span>
                <span className="text-sm text-blue-600 font-black uppercase tracking-widest italic">Technicien Informatique</span>
              </div>
            </div>
            
            <div className="hidden lg:flex items-center space-x-2">
              {navigation.map((item) => (
                <a 
                  key={item.name} 
                  href={item.href} 
                  className="px-4 py-2 text-lg font-bold text-slate-700 hover:text-blue-600 hover:bg-slate-100 transition-all rounded-lg"
                >
                  {item.name}
                </a>
              ))}
            </div>

            <div className="lg:hidden">
              <button 
                onClick={() => setIsMenuOpen(!isMenuOpen)} 
                className="p-3 text-slate-900 bg-slate-100 rounded-xl hover:bg-slate-200 transition-colors"
                aria-label="Menu"
              >
                {isMenuOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`lg:hidden absolute w-full bg-white border-b-2 border-slate-200 transition-all duration-300 overflow-hidden ${isMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'} shadow-xl`}>
          <div className="px-4 pt-4 pb-8 space-y-2">
            {navigation.map((item) => (
              <a 
                key={item.name} 
                href={item.href} 
                className="block px-6 py-4 text-xl font-bold text-slate-900 hover:bg-blue-50 hover:text-blue-700 rounded-xl transition-all border border-slate-200"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="relative pt-56 pb-40 px-4 overflow-hidden text-center bg-white">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-100/50 blur-[150px] rounded-full -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-emerald-100/50 blur-[120px] rounded-full translate-y-1/2 -translate-x-1/2"></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-blue-50 border-2 border-blue-200 text-blue-700 text-base font-black uppercase tracking-[0.2em] mb-12 shadow-sm">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-500 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-blue-600"></span>
            </span>
            Disponible pour Alternance
          </div>
          
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-black text-slate-900 mb-10 tracking-tighter leading-[1.1]">
            Technicien <br />
            <span className="text-blue-600 italic">Systèmes & Réseaux</span>
          </h1>
          
          <p className="max-w-4xl mx-auto text-2xl md:text-3xl text-slate-700 mb-16 leading-relaxed font-bold">
            Étudiant en <span className="text-slate-900 underline decoration-blue-600 decoration-4 underline-offset-8">BTS SIO option SISR</span>, j'évolue actuellement en alternance en tant que Technicien Informatique chez Solarys "Groupement les Mousquetaires". Passionné par l'infrastructure réseau, la virtualisation et la cybersécurité opérationnelle.
          </p>
          
          <div className="flex flex-wrap justify-center gap-6">
            <a 
              href="/CV_CHATELIER_Theo.pdf"
              download="CV_Theo_Chatelier.pdf"
              className="group px-12 py-6 bg-blue-600 hover:bg-blue-700 text-white font-black rounded-2xl transition-all shadow-xl flex items-center gap-4 uppercase text-lg tracking-widest inline-flex border-2 border-blue-600"
            >
              <FileDown className="w-8 h-8 group-hover:translate-y-1 transition-transform" /> Télécharger mon CV
            </a>
            <a 
             href="/CV_CHATELIER_Theo.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="group px-10 py-6 bg-white hover:bg-slate-50 text-blue-700 font-black rounded-2xl transition-all border-2 border-blue-300 shadow-sm flex items-center gap-4 uppercase text-lg tracking-widest inline-flex"
            >
            <Eye className="w-8 h-8 group-hover:scale-110 transition-transform" /> 
            Voir mon CV
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-40 bg-slate-50 border-y-2 border-slate-200 px-4">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-24 items-center">
          <div className="space-y-10 text-left">
            <h2 className="text-5xl font-black text-slate-900 flex items-center gap-5 uppercase">
              <Layers className="text-blue-600 w-14 h-14" /> À propos
            </h2>
            <div className="space-y-8">
              <p className="text-slate-700 text-2xl leading-relaxed font-bold">
                Diplômé d'un <span className="text-slate-900 underline decoration-blue-600 decoration-4 underline-offset-8">Bac Pro RISC (Mention Bien)</span> en 2024, je forge mon expertise technique à travers un BTS SIO au CCI Vaucluse.
              </p>
              <p className="text-slate-700 text-2xl leading-relaxed font-bold">
                Curieux et rigoureux, j'ai eu l'opportunité de travailler sur des projets d'envergure comme le projet <span className="text-blue-700 font-black italic">Convergence</span> chez Agro Mousquetaires, alliant audit WiFi, déploiement MDM et téléphonie IP.
              </p>
            </div>
            <div className="pt-8">
              <div className="p-10 bg-white rounded-3xl border-2 border-slate-300 shadow-xl inline-block group hover:border-blue-500 transition-all">
                <div className="text-5xl font-black text-blue-600 mb-2 group-hover:scale-105 transition-transform origin-left">BTS SIO SISR</div>
                <div className="text-base uppercase text-slate-500 font-black tracking-[0.2em]">Option de spécialisation</div>
              </div>
            </div>
          </div>
          
          <div className="relative group hidden md:block">
            <div className="aspect-[4/5] rounded-[3rem] bg-slate-200 overflow-hidden border-4 border-slate-300 shadow-xl relative flex items-center justify-center">
              <Terminal className="w-64 h-64 text-slate-400" />
              <div className="absolute inset-x-8 bottom-8 p-8 bg-white/95 rounded-3xl border-2 border-slate-300 shadow-lg text-left backdrop-blur-md">
                <h3 className="text-3xl font-black text-slate-900 mb-2 uppercase tracking-tight">Théo Chatelier</h3>
                <p className="text-blue-600 font-black text-lg uppercase tracking-[0.2em]">Technicien Informatique</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-40 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-24">
            <h2 className="text-5xl lg:text-6xl font-black text-slate-900 mb-8 tracking-tighter uppercase">Compétences Techniques</h2>
            <div className="w-32 h-2 bg-gradient-to-r from-blue-600 to-emerald-600 mx-auto rounded-full"></div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
            {skillGroups.map((group, idx) => (
              <div key={idx} className="p-10 bg-slate-50 rounded-3xl border-2 border-slate-200 hover:border-blue-400 transition-all group shadow-lg hover:shadow-xl">
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mb-8 group-hover:rotate-6 transition-transform border-2 border-slate-200 shadow-sm">
                  {group.icon}
                </div>
                <h3 className="text-2xl font-black text-slate-900 mb-8 uppercase tracking-wider leading-tight">{group.title}</h3>
                <ul className="space-y-5">
                  {group.skills.map((skill, i) => (
                    <li key={i} className="flex items-start gap-4 text-xl text-slate-700 font-bold leading-snug">
                      <CheckCircle2 className="w-6 h-6 text-blue-600 shrink-0 mt-1" />
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
      <section id="experience" className="py-40 bg-slate-50 px-4 border-y-2 border-slate-200">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-5xl lg:text-6xl font-black text-slate-900 mb-24 text-center uppercase tracking-tight">Parcours Professionnel</h2>
          
          <div className="space-y-16 relative before:absolute before:inset-0 before:ml-6 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-1 before:bg-slate-300">
            {experiences.map((exp, idx) => (
              <div key={idx} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
                <div className="flex items-center justify-center w-14 h-14 rounded-full border-4 border-slate-50 bg-blue-600 text-white shadow-xl shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 transition-transform group-hover:scale-110">
                  <Calendar className="w-6 h-6" />
                </div>
                
                <div className="w-[calc(100%-5rem)] md:w-[45%] p-10 rounded-[2.5rem] border-2 border-slate-300 bg-white shadow-xl text-left hover:border-blue-400 transition-all hover:shadow-2xl">
                  <div className="flex flex-col xl:flex-row xl:items-start justify-between mb-6 gap-4">
                    <h4 className="text-3xl font-black text-slate-900 tracking-tight leading-tight">{exp.company}</h4>
                    <span className="text-sm uppercase font-black text-blue-700 px-4 py-2 bg-blue-50 rounded-full border-2 border-blue-200 w-fit shrink-0">{exp.period}</span>
                  </div>
                  <div className="text-xl font-black text-emerald-600 mb-8 flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-emerald-600"></div>
                    {exp.role}
                  </div>
                  <ul className="text-xl text-slate-700 space-y-4 font-bold">
                    {exp.tasks.map((task, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <span className="text-blue-600 mt-1 font-black text-2xl">•</span> <span className="leading-snug">{task}</span>
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
      <section id="projects" className="py-40 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-10">
            <div className="space-y-6 text-left">
              <h2 className="text-5xl lg:text-6xl font-black text-slate-900 tracking-tighter uppercase">Réalisations</h2>
              <p className="text-slate-600 font-bold text-2xl max-w-2xl border-l-8 border-blue-600 pl-8 py-2">
                Projets d'infrastructure critiques et documentation technique E4.
              </p>
            </div>
            
            <div className="flex bg-slate-100 p-2 rounded-2xl border-2 border-slate-300 shadow-sm">
              {[
                { id: 'all', label: 'Tous' },
                { id: 'SISR', label: 'SISR' },
                { id: 'Entreprise', label: 'Entreprise' }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-10 py-4 rounded-xl text-lg font-black uppercase tracking-widest transition-all ${activeTab === tab.id ? 'bg-blue-600 text-white shadow-md' : 'text-slate-600 hover:text-slate-900 hover:bg-white'}`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
            {projects.filter(p => activeTab === 'all' || p.category === activeTab).map((proj, idx) => (
            <div key={idx} className="group rounded-[3rem] bg-slate-50 transition-all border-2 border-slate-300 shadow-lg h-full text-left overflow-hidden hover:border-blue-500 hover:shadow-2xl">
              <div className="p-10 md:p-12 h-full flex flex-col">
                <div className="flex justify-between items-start mb-10">
                  <div className="p-5 bg-white rounded-2xl group-hover:scale-110 transition-transform shadow-sm border-2 border-slate-200">{proj.icon}</div>
                  <span className="px-5 py-2 text-sm font-black uppercase tracking-widest bg-white text-blue-700 rounded-full border-2 border-slate-300 shadow-sm">{proj.category}</span>
                </div>
                
                <h3 className="text-3xl font-black text-slate-900 mb-6 leading-tight">{proj.title}</h3>
                <p className="text-slate-700 text-xl mb-12 flex-grow leading-relaxed font-bold">
                  {proj.desc}
                </p>
                
                <div className="flex flex-wrap gap-3 mb-10">
                  {proj.tags.map(tag => (
                    <span key={tag} className="px-4 py-2 text-sm uppercase tracking-wider font-black bg-slate-200 text-slate-800 rounded-xl border border-slate-300">{tag}</span>
                  ))}
                </div>

                {/* ESPACE ANNEXES (Conditionnel) */}
                {proj.annexes && proj.annexes.length > 0 && (
                  <div className="mb-12 p-6 bg-white rounded-2xl border-2 border-slate-300 shadow-sm">
                    <div className="flex items-center gap-3 mb-4 text-sm font-black uppercase tracking-widest text-blue-700">
                      <Paperclip className="w-5 h-5" /> Annexes techniques
                    </div>
                    <div className="flex flex-wrap gap-3">
                      {proj.annexes.map((annexe, i) => (
                        <a 
                          key={i} 
                          href={annexe.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-4 py-3 bg-slate-50 hover:bg-blue-50 hover:text-blue-700 text-sm font-black text-slate-800 rounded-xl border-2 border-slate-300 transition-all flex items-center gap-3"
                        >
                          {annexe.title}
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      ))}
                    </div>
                  </div>
                )}

                {/* BLOC BOUTONS : VOIR ET TÉLÉCHARGER */}
                <div className="flex gap-4">
                  <a 
                    href={proj.docLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-3 py-5 bg-blue-600 hover:bg-blue-700 text-white rounded-2xl text-base font-black uppercase tracking-[0.2em] transition-all shadow-md border-2 border-blue-700"
                  >
                    <Eye className="w-6 h-6" />
                    Visualiser
                  </a>
                  
                  <a 
                    href={proj.docLink}
                    download
                    className="px-6 inline-flex items-center justify-center bg-white hover:bg-slate-100 text-slate-800 rounded-2xl transition-all border-2 border-slate-300 shadow-sm"
                    title="Télécharger"
                  >
                    <FileDown className="w-8 h-8" />
                  </a>
                </div>
              </div>
            </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section id="certifications" className="py-40 px-4 bg-slate-50 border-t-2 border-slate-200">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-24">
            <h2 className="text-5xl lg:text-6xl font-black text-slate-900 mb-8 tracking-tighter uppercase">Dossier E4 & Certifications</h2>
            <div className="w-32 h-2 bg-gradient-to-r from-blue-600 to-emerald-600 mx-auto rounded-full"></div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-12">
            {documents.map((doc, idx) => (
              <div key={idx} className="p-12 bg-white border-2 border-slate-300 rounded-[3rem] hover:border-blue-400 transition-all group shadow-xl flex flex-col items-start text-left">
                <div className="p-6 bg-slate-50 rounded-3xl w-fit mb-10 group-hover:scale-110 transition-transform border-2 border-slate-200">
                  {doc.icon}
                </div>
                <h3 className="text-3xl font-black text-slate-900 mb-6 tracking-tight leading-tight">{doc.title}</h3>
                <p className="text-slate-700 mb-12 text-xl leading-relaxed font-bold flex-grow">{doc.desc}</p>
                
                {/* BLOC BOUTONS DOUBLE ACTION */}
                <div className="flex items-center gap-5 w-full pt-8 border-t-2 border-slate-200">
                  <a 
                    href={doc.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-3 py-4 bg-white hover:bg-blue-50 text-slate-800 hover:text-blue-700 rounded-xl text-base font-black uppercase tracking-[0.1em] transition-all border-2 border-slate-300 hover:border-blue-400 shadow-sm"
                  >
                    <Eye className="w-5 h-5" /> Visualiser
                  </a>
                  
                  <a 
                    href={doc.link}
                    download
                    className="p-4 bg-white hover:bg-slate-100 text-slate-800 rounded-xl transition-all border-2 border-slate-300 shadow-sm"
                    title="Télécharger"
                  >
                    <Download className="w-6 h-6" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Veille Technologique Section */}
      <section id="veille" className="py-40 px-4 bg-white border-t-2 border-slate-200">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center mb-24 gap-12 text-left">
            <div className="space-y-6">
              <h2 className="text-5xl lg:text-6xl font-black text-slate-900 tracking-tighter uppercase">Veille Technologique</h2>
              <p className="text-slate-600 font-bold text-2xl max-w-3xl border-l-8 border-blue-600 pl-8 py-2">
                Suivi continu des innovations IT et de la cybersécurité.
              </p>
            </div>
            <div className="p-10 bg-blue-600 rounded-3xl shadow-xl border-4 border-blue-700 hidden md:block">
               <Rss className="w-16 h-16 text-white" />
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-20 items-start">
            <div className="space-y-12">
              <h3 className="text-3xl font-black text-slate-900 flex items-center gap-5 uppercase tracking-widest text-left">
                <Settings className="text-blue-600 w-10 h-10" /> Mes Outils de Veille
              </h3>
              <div className="grid gap-8">
                {[
                  { title: "Google Alerts", desc: "Monitoring quotidien des mots-clés : Cyber, MDM, Active Directory.", icon: <Bell className="w-10 h-10"/>, color: "blue" },
                  { title: "ANSSI / CERT-FR", desc: "Abonnement aux alertes de vulnérabilité et guides de bonnes pratiques.", icon: <ShieldCheck className="w-10 h-10"/>, color: "red" }
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-8 p-10 bg-slate-50 rounded-[2.5rem] border-2 border-slate-300 hover:border-blue-400 transition-all shadow-md group text-left">
                    <div className={`w-20 h-20 bg-white border-2 border-slate-300 rounded-2xl flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-700 transition-all shrink-0`}>
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="font-black text-slate-900 text-2xl mb-3">{item.title}</h4>
                      <p className="text-xl text-slate-700 font-bold">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-12">
              <h3 className="text-3xl font-black text-slate-900 flex items-center gap-5 uppercase tracking-widest text-left">
                <Eye className="text-emerald-600 w-10 h-10" /> Thèmes de Veille
              </h3>
              <div className="space-y-8">
                {[
                  { tag: "Sécurité Réseau", title: "IA & NDR : Le cas Custocy", desc: "Analyse de l'IA dans la détection comportementale des menaces réseaux.", color: "emerald" },
                  { tag: "Gouvernance IT", title: "CISA : Évolution Cyber", desc: "Étude des standards de cybersécurité mondiaux pilotés par la CISA.", color: "blue" }
                ].map((item, i) => (
                  <div key={i} className="group p-10 bg-slate-50 rounded-[2.5rem] border-2 border-slate-300 hover:border-blue-400 transition-all text-left shadow-md">
                    <div className={`flex items-center gap-4 mb-6`}>
                      <div className={`w-12 h-1 bg-blue-600`}></div>
                      <span className="text-sm font-black uppercase tracking-widest text-blue-700">{item.tag}</span>
                    </div>
                    <h4 className="text-slate-900 text-3xl font-black mb-6 flex items-center gap-4 tracking-tight leading-tight">
                      {item.title} <ExternalLink className="w-8 h-8 text-slate-500" />
                    </h4>
                    <p className="text-slate-700 text-xl leading-relaxed font-bold">
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
      <footer id="contact" className="py-32 bg-slate-100 border-t-4 border-slate-300 px-4">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-24 text-left">
          <div className="space-y-10">
            <div className="flex items-center gap-6">
              <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center font-black text-white text-3xl shadow-md border-2 border-blue-700">TC</div>
              <span className="font-black text-4xl text-slate-900 tracking-tighter uppercase">Théo Chatelier</span>
            </div>
            <p className="text-slate-700 font-bold text-2xl leading-relaxed">
              Technicien Informatique.
            </p>
            <div className="flex gap-6">
              <a href="#" className="p-5 bg-white rounded-2xl text-slate-800 border-2 border-slate-300 hover:border-blue-500 hover:text-blue-700 transition-all hover:-translate-y-2 shadow-sm"><Linkedin className="w-8 h-8" /></a>
              <a href="mailto:tchatelier13@gmail.com" className="p-5 bg-white rounded-2xl text-slate-800 border-2 border-slate-300 hover:border-blue-500 hover:text-blue-700 transition-all hover:-translate-y-2 shadow-sm"><Mail className="w-8 h-8" /></a>
            </div>
          </div>
          
          <div className="space-y-10">
            <h3 className="text-slate-900 font-black uppercase tracking-[0.2em] text-lg">Plan du site</h3>
            <ul className="grid grid-cols-1 gap-y-6 text-slate-700 font-bold text-lg uppercase tracking-wider">
              {navigation.map((item) => (
                <li key={item.name} className="flex items-center gap-4 group">
                  <div className="w-3 h-3 rounded-full bg-slate-400 group-hover:bg-blue-600 transition-colors"></div>
                  <a href={item.href} className="hover:text-blue-700 transition-colors">{item.name}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-10">
            <h3 className="text-slate-900 font-black uppercase tracking-[0.2em] text-lg">Informations</h3>
            <div className="bg-white p-10 rounded-[2.5rem] border-2 border-slate-300 space-y-10 shadow-lg">
              <div className="flex items-center gap-6 text-slate-900 font-bold">
                <div className="p-5 bg-slate-50 rounded-2xl border-2 border-slate-300 shrink-0"><Mail className="w-8 h-8 text-blue-600" /></div>
                <div className="flex flex-col min-w-0">
                  <span className="text-sm uppercase font-black tracking-widest text-slate-500 mb-1">Email</span>
                  <span className="text-slate-900 font-black text-lg truncate">tchatelier13@gmail.com</span>
                </div>
              </div>
              <div className="flex items-center gap-6 text-slate-900 font-bold">
                <div className="p-5 bg-slate-50 rounded-2xl border-2 border-slate-300 shrink-0"><Globe className="w-8 h-8 text-emerald-600" /></div>
                <div className="flex flex-col">
                  <span className="text-sm uppercase font-black tracking-widest text-slate-500 mb-1">Localisation</span>
                  <span className="text-slate-900 font-black text-lg">Tarascon, France</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-32 pt-16 border-t-2 border-slate-300 text-center text-slate-500 text-sm font-black uppercase tracking-[0.3em]">
          © {new Date().getFullYear()} Théo Chatelier • Portfolio BTS SIO SISR
        </div>
      </footer>
    </div>
  );
};

export default App;