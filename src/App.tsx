import { useState } from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  MessageSquare, 
  CheckCircle2, 
  Building2, 
  Users, 
  TrendingUp, 
  GraduationCap, 
  Globe, 
  ArrowLeft, 
  Copy, 
  Check, 
  Menu, 
  X, 
  Briefcase, 
  ShieldCheck, 
  Award, 
  Radio, 
  Ship, 
  Scale,
  Sparkles,
  Info,
  ChevronLeft,
  Search,
  ExternalLink,
  Facebook
} from 'lucide-react';

interface OfficeContact {
  id: string;
  city: string;
  cityAr: string;
  address: string;
  addressAr: string;
  landlines?: string[];
  mobile: string;
  whatsappLink: string;
  whatsappChannel?: string;
  whatsappChannelName?: string;
  facebookLink?: string;
  flag: string;
  mapLink?: string;
}

interface ManagerContact {
  id: string;
  role: string;
  roleAr: string;
  phone: string;
  whatsappLink: string;
}

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<'all' | 'syria' | 'intl' | 'management'>('all');
  const [currentPage, setCurrentPage] = useState<'home' | 'contacts'>('home');

  const syriaOffices: OfficeContact[] = [
    {
      id: 'latakia',
      city: 'Latakia',
      cityAr: 'اللاذقية (المقر الرئيسي)',
      address: 'Project 10 - Sport\'s City Rd',
      addressAr: 'المشروع العاشر - طريق المدينة الرياضية',
      landlines: ['017-2310151', '017-2338777'],
      mobile: '+963 940 165 008',
      whatsappLink: 'https://wa.me/963940165008',
      whatsappChannel: 'https://whatsapp.com/channel/0029Vb6bHoHFi8xV5nMaPr43',
      whatsappChannelName: 'قناة اللاذقية لشواغر العمل 📢',
      facebookLink: 'https://www.facebook.com/profile.php?id=61588217540062',
      flag: '🇸🇾',
      mapLink: 'https://maps.app.goo.gl/nR3X23dAqmHKdSUM9'
    },
    {
      id: 'damascus',
      city: 'Damascus',
      cityAr: 'دمشق العاصمة',
      address: 'Dumar Project - Blk 4 Bld 3',
      addressAr: 'مشروع دمر - جزيرة 4 - بناء 3',
      landlines: ['011-3119676', '011-3164449'],
      mobile: '+963 994 692 888',
      whatsappLink: 'https://wa.me/963994692888',
      whatsappChannel: 'https://whatsapp.com/channel/0029VbBnE8c5vKAD4cZ4OX3H',
      whatsappChannelName: 'قناة دمشق لشواغر العمل 📢',
      facebookLink: 'https://www.facebook.com/profile.php?id=61564334551740',
      flag: '🇸🇾',
      mapLink: 'https://maps.app.goo.gl/iXHnFzbvqJe8DTpR6'
    },
    {
      id: 'homs',
      city: 'Homs',
      cityAr: 'حمص',
      address: 'Al_Hadara Street - opposite MTN',
      addressAr: 'شارع الحضارة - مقابل شركة MTN',
      landlines: ['012-2119211', '012-2711270'],
      mobile: '+963 932 344 898',
      whatsappLink: 'https://wa.me/963932344898',
      whatsappChannel: 'https://whatsapp.com/channel/0029VbB9jgG90x33AGZYvU1y',
      whatsappChannelName: 'قناة حمص لشواغر العمل 📢',
      facebookLink: 'https://www.facebook.com/profile.php?id=61563886544278',
      flag: '🇸🇾',
      mapLink: 'https://maps.app.goo.gl/w2sNi8hnaemfGZsP9'
    }
  ];

  const internationalOffices: OfficeContact[] = [
    {
      id: 'lebanon',
      city: 'Lebanon - Aley',
      cityAr: 'لبنان - عاليه',
      address: 'Pisine St',
      addressAr: 'شارع البيسين',
      mobile: '+961 3 492 724',
      whatsappLink: 'https://wa.me/9613492724',
      whatsappChannel: 'https://whatsapp.com/channel/0029Vb7HzDyB4hdOUQ1vKy00',
      whatsappChannelName: 'قناة لبنان لشواغر العمل 📢',
      facebookLink: 'https://www.facebook.com/profile.php?id=61576853063342',
      flag: '🇱🇧',
      mapLink: 'https://maps.app.goo.gl/R7wQBhDnsDT7zMkV8'
    }
  ];

  const managementContacts: ManagerContact[] = [
    {
      id: 'main_agency',
      role: 'General Agency Number',
      roleAr: 'الرقم الأساسي للوكالة بشكل عام',
      phone: '+963 952 710 300',
      whatsappLink: 'https://wa.me/963952710300'
    },
    {
      id: 'mgmt',
      role: 'Management',
      roleAr: 'الإدارة العامة',
      phone: '+963 933 471 567',
      whatsappLink: 'https://wa.me/963933471567'
    },
    {
      id: 'recruitment',
      role: 'Recruitment & PR Manager',
      roleAr: 'مدير التوظيف والعلاقات العامة',
      phone: '+963 931 684 145',
      whatsappLink: 'https://wa.me/963931684145'
    },
    {
      id: 'hr',
      role: 'HR Manager',
      roleAr: 'مدير الموارد البشرية',
      phone: '+963 982 791 717',
      whatsappLink: 'https://wa.me/963982791717'
    }
  ];

  const handleCopy = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <div className="min-h-screen font-sans text-slate-100 bg-[#080c14] relative selection:bg-blue-600 selection:text-white">
      {/* Background Decorative Blobs */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-blue-950/40 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 w-[600px] h-[600px] bg-indigo-950/30 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/3 w-[500px] h-[500px] bg-blue-900/10 rounded-full blur-[150px] pointer-events-none" />

      {/* ====== HEADER / NAVIGATION ====== */}
      <header className="sticky top-0 w-full bg-[#080c14]/85 backdrop-blur-md z-50 border-b border-slate-800/80 transition-all">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          
          {/* Logo Brand with logo.png fallback */}
          <button onClick={() => setCurrentPage('home')} className="flex items-center gap-3 group cursor-pointer text-right">
            <div className="w-11 h-11 rounded-xl bg-gradient-to-tr from-blue-600 to-indigo-500 flex items-center justify-center shadow-lg shadow-blue-500/20 group-hover:scale-105 transition-all duration-300">
              <img 
                src="/logo.png" 
                alt="Serena Logo" 
                className="w-8 h-8 object-contain rounded-lg" 
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  const parent = e.currentTarget.parentElement;
                  if (parent && !parent.querySelector('.fallback-svg')) {
                    const svg = document.createElement('div');
                    svg.className = 'fallback-svg text-white font-black text-sm';
                    svg.innerText = 'S';
                    parent.appendChild(svg);
                  }
                }} 
              />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-black text-white tracking-wide group-hover:text-blue-400 transition-colors">SERENA</span>
              <span className="text-[10px] text-slate-400 font-medium tracking-widest uppercase">GROUP • سيرينا</span>
            </div>
          </button>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex gap-8 items-center text-sm font-semibold text-slate-300">
            <button 
              onClick={() => setCurrentPage('home')} 
              className={`hover:text-white transition-all cursor-pointer ${currentPage === 'home' ? 'text-blue-400 font-bold border-b-2 border-blue-500 pb-1' : ''}`}
            >
              الرئيسية
            </button>
            <button 
              onClick={() => {
                setCurrentPage('home');
                setTimeout(() => {
                  document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
                }, 100);
              }} 
              className="hover:text-white transition-all cursor-pointer"
            >
              عن المجموعة
            </button>
            <button 
              onClick={() => {
                setCurrentPage('home');
                setTimeout(() => {
                  document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
                }, 100);
              }} 
              className="hover:text-white transition-all cursor-pointer"
            >
              خدماتنا
            </button>
            <button 
              onClick={() => setCurrentPage('contacts')} 
              className={`hover:text-white transition-all cursor-pointer flex items-center gap-1.5 ${currentPage === 'contacts' ? 'text-blue-400 font-bold border-b-2 border-blue-500 pb-1' : ''}`}
            >
              <span>جهات اتصالنا</span>
              <span className="text-[11px] px-1.5 py-0.5 bg-emerald-500/10 text-emerald-400 rounded-full font-mono font-bold">جديد</span>
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)} 
            className="md:hidden p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800/50 transition-colors"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-[#090d16] border-b border-slate-800 px-4 py-6 space-y-4 animate-fadeIn text-right">
            <button 
              onClick={() => {
                setCurrentPage('home');
                setMobileMenuOpen(false);
              }}
              className={`block w-full text-right px-4 py-2.5 rounded-lg text-slate-300 hover:bg-slate-800/40 hover:text-white font-medium transition ${currentPage === 'home' ? 'text-blue-400 bg-slate-900/60' : ''}`}
            >
              الرئيسية
            </button>
            <button 
              onClick={() => {
                setCurrentPage('home');
                setMobileMenuOpen(false);
                setTimeout(() => {
                  document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
                }, 100);
              }}
              className="block w-full text-right px-4 py-2.5 rounded-lg text-slate-300 hover:bg-slate-800/40 hover:text-white font-medium transition"
            >
              عن المجموعة
            </button>
            <button 
              onClick={() => {
                setCurrentPage('home');
                setMobileMenuOpen(false);
                setTimeout(() => {
                  document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
                }, 100);
              }}
              className="block w-full text-right px-4 py-2.5 rounded-lg text-slate-300 hover:bg-slate-800/40 hover:text-white font-medium transition"
            >
              خدماتنا
            </button>
            <button 
              onClick={() => {
                setCurrentPage('contacts');
                setMobileMenuOpen(false);
              }}
              className={`block w-full text-right px-4 py-2.5 rounded-lg text-slate-300 hover:bg-slate-800/40 hover:text-white font-medium transition ${currentPage === 'contacts' ? 'text-blue-400 bg-slate-900/60' : ''}`}
            >
              جهات اتصالنا 📞
            </button>
          </div>
        )}
      </header>

      {/* ====== MAIN DYNAMIC CONTENT ====== */}
      {currentPage === 'home' ? (
        <>
          {/* ====== HERO SECTION ====== */}
          <section 
            className="relative min-h-[85vh] flex flex-col justify-center overflow-hidden py-16 sm:py-24 bg-cover bg-center transition-all duration-500"
            style={{ backgroundImage: "linear-gradient(to bottom, rgba(8, 12, 20, 0.9), rgba(8, 12, 20, 0.96)), url('/hero-bg.jpg')" }}
          >
            {/* Modern radial grid lines */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-60 pointer-events-none" />

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col items-center text-center">
              
              {/* Tagline Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-blue-500/20 bg-blue-500/10 text-blue-400 text-xs sm:text-sm font-semibold mb-8 animate-pulse">
                <Sparkles className="w-4 h-4" />
                <span>مجموعة سيرينا • عراقة، تميز، ومستقبل واعد</span>
              </div>

              {/* Majestic Hero Header */}
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black text-white leading-tight max-w-4xl tracking-tight mb-8">
                بوابة الفرص للتوظيف و<span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-blue-200">الاستثمار الذكي</span>
              </h1>
              
              {/* High status brief */}
              <p className="text-base sm:text-lg lg:text-xl text-slate-300/90 max-w-2xl mx-auto mb-12 leading-relaxed font-normal">
                نحن نربط بكفاءة متناهية بين الطموحات الفردية والاحتياجات المؤسسية، لنصنع معاً قصة نجاح مهنية مستدامة مدعومة بخبرات تمتد لأكثر من ربع قرن.
              </p>

              {/* Quick buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 w-full max-w-md mx-auto mb-16">
                <button 
                  onClick={() => setCurrentPage('contacts')}
                  className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold rounded-xl shadow-lg shadow-blue-500/25 hover:shadow-blue-500/45 hover:from-blue-500 hover:to-indigo-500 transition-all duration-300 flex items-center justify-center gap-2 whitespace-nowrap cursor-pointer"
                >
                  <span>اتصل بقنواتنا الآن</span>
                  <ArrowLeft className="w-5 h-5" />
                </button>
                <a 
                  href="#services" 
                  className="w-full sm:w-auto px-8 py-4 bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-200 font-bold rounded-xl transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <span>استكشف الخدمات</span>
                </a>
              </div>
              
              {/* Trust stats row */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-10 w-full max-w-4xl p-6 sm:p-8 rounded-2xl bg-slate-900/60 border border-slate-800/80 backdrop-blur-md">
                <div className="text-center">
                  <div className="text-2xl sm:text-4xl font-extrabold text-blue-400 font-mono mb-1">35,000+</div>
                  <div className="text-xs sm:text-sm text-slate-400 font-medium">موظف وكفاءة مسجلة</div>
                </div>
                <div className="text-center border-r border-slate-800 text-right pr-4">
                  <div className="text-2xl sm:text-4xl font-extrabold text-indigo-400 font-mono mb-1">26+</div>
                  <div className="text-xs sm:text-sm text-slate-400 font-medium">سنة من ريادة الأعمال</div>
                </div>
                <div className="text-center border-r border-slate-800 text-right pr-4">
                  <div className="text-2xl sm:text-4xl font-extrabold text-blue-400 font-mono mb-1">100%</div>
                  <div className="text-xs sm:text-sm text-slate-400 font-medium">موثوقية وأمان تام</div>
                </div>
                <div className="text-center border-r border-slate-800 text-right pr-4">
                  <div className="text-2xl sm:text-4xl font-extrabold text-emerald-400 font-mono mb-1">24/7</div>
                  <div className="text-xs sm:text-sm text-slate-400 font-medium">دعم واستشارات مستمرة</div>
                </div>
              </div>
            </div>
          </section>

          {/* ====== ABOUT SERENA GROUP SECTION ====== */}
          <section id="about" className="py-24 bg-[#090d16] border-y border-slate-900 relative">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex flex-col lg:flex-row gap-16 items-center">
                
                {/* Left Column: Visual description & Story */}
                <div className="w-full lg:w-5/12 space-y-6 text-right">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-indigo-500/20 bg-indigo-500/10 text-indigo-400 text-xs font-bold">
                    <Award className="w-4 h-4" />
                    <span>الريادة الاستراتيجية</span>
                  </div>
                  <h2 className="text-3xl sm:text-5xl font-black text-white leading-tight">
                    مجموعة سيرينا <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-300">مسيرة تميز منذ عام 2000</span>
                  </h2>
                  <p className="text-slate-300 leading-relaxed text-base sm:text-lg">
                    تأسست مجموعة سيرينا لتكون النواة الأساسية لبناء استثمارات مستدامة وحلول متكاملة عبر تخديم كبرى القطاعات الحيوية في المنطقة، متبنين أعلى معايير الجودة والمهنية.
                  </p>
                  <div className="space-y-4 pt-2">
                    <div className="flex items-start gap-3 text-right">
                      <div className="p-2 rounded-lg bg-blue-500/10 text-blue-400 shrink-0 mt-1">
                        <ShieldCheck className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="text-white font-bold text-base">ترخيص رسمي وموثق</h4>
                        <p className="text-slate-400 text-sm">نعمل بشكل قانوني ومرخص لتأمين الحقوق والفرص المثالية لشركائنا.</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 text-right">
                      <div className="p-2 rounded-lg bg-indigo-500/10 text-indigo-400 shrink-0 mt-1">
                        <Globe className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="text-white font-bold text-base">شراكات عابرة للحدود</h4>
                        <p className="text-slate-400 text-sm">ربط دائم بين مكاتبنا في سوريا ولبنان وبلغاريا لتسهيل وتنسيق الأعمال.</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right Column: Grid of sectors */}
                <div className="w-full lg:w-7/12 grid grid-cols-1 sm:grid-cols-2 gap-6 text-right">
                  
                  {/* Sector 1 */}
                  <div className="p-6 rounded-2xl bg-gradient-to-b from-slate-900 to-[#090d16] border border-slate-800/80 hover:border-blue-500/40 hover:translate-y-[-4px] transition-all duration-300 group">
                    <div className="w-12 h-12 rounded-xl bg-blue-500/10 text-blue-400 flex items-center justify-center mb-5 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                      <Radio className="w-6 h-6" />
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2">الإعلام والاتصالات</h3>
                    <p className="text-slate-400 text-sm leading-relaxed">إدارة وتشغيل منصات إعلامية رائدة وحملات تسويقية وتوعوية ذات صدى واسع.</p>
                  </div>

                  {/* Sector 2 */}
                  <div className="p-6 rounded-2xl bg-gradient-to-b from-slate-900 to-[#090d16] border border-slate-800/80 hover:border-emerald-500/40 hover:translate-y-[-4px] transition-all duration-300 group">
                    <div className="w-12 h-12 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center mb-5 group-hover:bg-emerald-600 group-hover:text-white transition-all duration-300">
                      <Ship className="w-6 h-6" />
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2">النقل والخدمات اللوجستية</h3>
                    <p className="text-slate-400 text-sm leading-relaxed">تأمين حركة الشحن البري والبحري، وتوفير حلول سلاسل التوريد بكفاءة وموثوقية.</p>
                  </div>

                  {/* Sector 3 */}
                  <div className="p-6 rounded-2xl bg-gradient-to-b from-slate-900 to-[#090d16] border border-slate-800/80 hover:border-amber-500/40 hover:translate-y-[-4px] transition-all duration-300 group">
                    <div className="w-12 h-12 rounded-xl bg-amber-500/10 text-amber-400 flex items-center justify-center mb-5 group-hover:bg-amber-600 group-hover:text-white transition-all duration-300">
                      <Scale className="w-6 h-6" />
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2">الاستشارات والحلول القانونية</h3>
                    <p className="text-slate-400 text-sm leading-relaxed">تقديم استشارات متكاملة وضمان مطابقة الأعمال لكافة القوانين والأنظمة المعمول بها.</p>
                  </div>

                  {/* Sector 4 */}
                  <div className="p-6 rounded-2xl bg-gradient-to-b from-slate-900 to-[#090d16] border border-slate-800/80 hover:border-indigo-500/40 hover:translate-y-[-4px] transition-all duration-300 group">
                    <div className="w-12 h-12 rounded-xl bg-indigo-500/10 text-indigo-400 flex items-center justify-center mb-5 group-hover:bg-indigo-600 group-hover:text-white transition-all duration-300">
                      <GraduationCap className="w-6 h-6" />
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2">التعليم والتطوير المستمر</h3>
                    <p className="text-slate-400 text-sm leading-relaxed">برامج متخصصة لتأهيل الكوادر، ورفع الجاهزية لسوق العمل المحلي والإقليمي.</p>
                  </div>

                </div>
              </div>
            </div>
          </section>

          {/* ====== SERVICES SECTION ====== */}
          <section id="services" className="py-24 bg-gradient-to-b from-[#080c14] to-[#0a0f1b] relative">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-right">
              
              {/* Section Header */}
              <div className="text-center max-w-3xl mx-auto mb-16">
                <span className="text-xs font-bold uppercase tracking-widest text-blue-500 bg-blue-500/10 px-4 py-1.5 rounded-full inline-block mb-4">خدمات وكالة سيرينا للتوظيف</span>
                <h2 className="text-3xl sm:text-5xl font-black text-white mb-4">خدمات متكاملة وحلول ذكية</h2>
                <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto rounded-full mb-6" />
                <p className="text-slate-400 text-sm sm:text-base">نوفر حلولاً تلبي كافة رغبات وطموحات الأفراد والشركات والمستثمرين على حدٍ سواء.</p>
              </div>

              {/* Services Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-right">
                
                {/* For Individuals */}
                <div className="p-8 rounded-2xl bg-slate-900/40 border border-slate-800/80 hover:border-blue-500/30 transition-all duration-300 flex flex-col justify-between group">
                  <div>
                    <div className="w-14 h-14 rounded-2xl bg-blue-600/10 text-blue-400 flex items-center justify-center text-xl mb-6 group-hover:scale-105 transition-transform mr-auto md:mr-0 ml-auto">
                      <Users className="w-7 h-7" />
                    </div>
                    <h3 className="text-2xl font-black text-white mb-4">خدمات الأفراد</h3>
                    <p className="text-slate-400 text-sm leading-relaxed mb-6">
                      نوفر لك المنصة المناسبة للبحث عن شغفك ووظيفة أحلامك. نرافقك في إعداد سيرتك الذاتية وتوجيهك للمقابلات بشكل احترافي.
                    </p>
                    <ul className="space-y-3 mb-8">
                      <li className="flex items-center gap-2 text-sm text-slate-300 font-medium">
                        <CheckCircle2 className="w-4 h-4 text-blue-500 shrink-0" />
                        <span>تأمين مقابلات عمل حقيقية ومباشرة</span>
                      </li>
                      <li className="flex items-center gap-2 text-sm text-slate-300 font-medium">
                        <CheckCircle2 className="w-4 h-4 text-blue-500 shrink-0" />
                        <span>استشارات مهنية لتطوير السيرة الذاتية</span>
                      </li>
                      <li className="flex items-center gap-2 text-sm text-slate-300 font-medium">
                        <CheckCircle2 className="w-4 h-4 text-blue-500 shrink-0" />
                        <span>فرص وظيفية متنوعة في كبرى القطاعات</span>
                      </li>
                    </ul>
                  </div>
                  <button onClick={() => setCurrentPage('contacts')} className="mt-4 py-3 text-center bg-slate-800 hover:bg-slate-700 text-white text-sm font-bold rounded-xl transition-colors cursor-pointer">
                    سجل الآن كباحث عن عمل
                  </button>
                </div>

                {/* For Companies */}
                <div className="p-8 rounded-2xl bg-slate-900/40 border border-slate-800/80 hover:border-indigo-500/30 transition-all duration-300 flex flex-col justify-between group">
                  <div>
                    <div className="w-14 h-14 rounded-2xl bg-indigo-600/10 text-indigo-400 flex items-center justify-center text-xl mb-6 group-hover:scale-105 transition-transform mr-auto md:mr-0 ml-auto">
                      <Building2 className="w-7 h-7" />
                    </div>
                    <h3 className="text-2xl font-black text-white mb-4">خدمات الشركات</h3>
                    <p className="text-slate-400 text-sm leading-relaxed mb-6">
                      ندعم نمو أعمالك من خلال تزويدك بأفضل الكوادر وأجدرهم. نقوم بعملية الفرز والاختبار نيابة عنك لتوفير الوقت والجهد.
                    </p>
                    <ul className="space-y-3 mb-8">
                      <li className="flex items-center gap-2 text-sm text-slate-300 font-medium">
                        <CheckCircle2 className="w-4 h-4 text-indigo-500 shrink-0" />
                        <span>فرز واختيار دقيق للمرشحين والكوادر</span>
                      </li>
                      <li className="flex items-center gap-2 text-sm text-slate-300 font-medium">
                        <CheckCircle2 className="w-4 h-4 text-indigo-500 shrink-0" />
                        <span>بناء وتجهيز الهيكل الوظيفي للشركات الناشئة</span>
                      </li>
                      <li className="flex items-center gap-2 text-sm text-slate-300 font-medium">
                        <CheckCircle2 className="w-4 h-4 text-indigo-500 shrink-0" />
                        <span>تقارير شاملة ومتابعة دورية للأداء</span>
                      </li>
                    </ul>
                  </div>
                  <button onClick={() => setCurrentPage('contacts')} className="mt-4 py-3 text-center bg-slate-800 hover:bg-slate-700 text-white text-sm font-bold rounded-xl transition-colors cursor-pointer">
                    اطلب كوادر لشركتك
                  </button>
                </div>

                {/* For Investors */}
                <div className="p-8 rounded-2xl bg-slate-900/40 border border-slate-800/80 hover:border-blue-500/30 transition-all duration-300 flex flex-col justify-between group">
                  <div>
                    <div className="w-14 h-14 rounded-2xl bg-emerald-600/10 text-emerald-400 flex items-center justify-center text-xl mb-6 group-hover:scale-105 transition-transform mr-auto md:mr-0 ml-auto">
                      <TrendingUp className="w-7 h-7" />
                    </div>
                    <h3 className="text-2xl font-black text-white mb-4">خدمات المستثمرين</h3>
                    <p className="text-slate-400 text-sm leading-relaxed mb-6">
                      نصنع لك فرصاً استثمارية متميزة ونوجه أموالك إلى مشاريع ذات عوائد مدروسة ومضمونة بموجب دراسات جدوى واقعية ومعمقة.
                    </p>
                    <ul className="space-y-3 mb-8">
                      <li className="flex items-center gap-2 text-sm text-slate-300 font-medium">
                        <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                        <span>دراسات جدوى متكاملة برؤية واقعية</span>
                      </li>
                      <li className="flex items-center gap-2 text-sm text-slate-300 font-medium">
                        <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                        <span>شراكات وتحالفات تجارية واستثمارية ناجحة</span>
                      </li>
                      <li className="flex items-center gap-2 text-sm text-slate-300 font-medium">
                        <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                        <span>توفير أمان استثماري وخفض المخاطر</span>
                      </li>
                    </ul>
                  </div>
                  <button onClick={() => setCurrentPage('contacts')} className="mt-4 py-3 text-center bg-slate-800 hover:bg-slate-700 text-white text-sm font-bold rounded-xl transition-colors cursor-pointer">
                    طلب استشارة استثمارية
                  </button>
                </div>

              </div>

              {/* Education Study Abroad Placeholder Card */}
              <div className="mt-12 p-8 rounded-2xl bg-gradient-to-r from-slate-900/60 to-indigo-950/20 border border-slate-800/80 flex flex-col sm:flex-row justify-between items-center gap-6 relative overflow-hidden text-right">
                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl pointer-events-none" />
                <div className="flex items-center gap-5 relative z-10 text-right">
                  <div className="w-14 h-14 rounded-2xl bg-indigo-500/10 text-indigo-400 flex items-center justify-center shrink-0">
                    <GraduationCap className="w-7 h-7" />
                  </div>
                  <div>
                    <span className="inline-block text-[10px] uppercase font-bold tracking-widest text-indigo-400 bg-indigo-400/10 px-2 py-0.5 rounded mb-1">مشروع مستقبلي</span>
                    <h4 className="text-xl font-bold text-white mb-1">خدمة الدراسة والتدريب بالخارج</h4>
                    <p className="text-slate-400 text-sm max-w-xl">نسعى قريباً لتوفير قبولات جامعية ومنح تدريبية في أرقى المعاهد والجامعات العالمية لطلابنا.</p>
                  </div>
                </div>
                <span className="px-5 py-2 rounded-full border border-slate-700 text-slate-400 font-bold text-xs shrink-0 bg-slate-900">قريباً جداً</span>
              </div>

            </div>
          </section>

          {/* ====== HOW WE WORK ====== */}
          <section id="how-it-works" className="py-24 bg-[#070b13] relative">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-right">
              
              <div className="text-center max-w-2xl mx-auto mb-16">
                <h2 className="text-3xl sm:text-4xl font-black text-white mb-4">آلية العمل والنجاح</h2>
                <p className="text-slate-400 text-sm">خطوات بسيطة ومدروسة تمهد لك طريق النجاح</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-5xl mx-auto relative">
                
                {/* Step 1 */}
                <div className="text-center relative">
                  <div className="w-16 h-16 mx-auto bg-blue-600/10 text-blue-400 border border-blue-500/30 rounded-2xl flex items-center justify-center text-xl font-bold mb-6">
                    1
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">تقديم الطلب</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">تواصل معنا وقدم سيرتك الذاتية أو حدد متطلبات الكوادر والمشروع الاستثماري.</p>
                </div>

                {/* Step 2 */}
                <div className="text-center relative">
                  <div className="w-16 h-16 mx-auto bg-indigo-600 text-white border border-indigo-500/40 rounded-2xl flex items-center justify-center text-xl font-bold mb-6 shadow-lg shadow-indigo-600/30">
                    2
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">الدراسة والتطابق</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">يقوم خبراؤنا بفرز السير ومقارنة المواصفات لتحديد الفرص والمقترحات المتطابقة بنسبة عالية.</p>
                </div>

                {/* Step 3 */}
                <div className="text-center relative">
                  <div className="w-16 h-16 mx-auto bg-emerald-600 text-white border border-emerald-500/40 rounded-2xl flex items-center justify-center text-xl font-bold mb-6 shadow-lg shadow-emerald-600/30">
                    3
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">المقابلة والمباشرة</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">تنسيق المقابلة الشخصية وإتمام الاتفاقيات القانونية لمباشرة العمل والنجاح المهني.</p>
                </div>

              </div>

            </div>
          </section>

          {/* ====== SECTORS COVERED ====== */}
          <section id="sectors" className="py-20 bg-slate-900/30 border-y border-slate-900">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex flex-col lg:flex-row items-center justify-between gap-12 max-w-6xl mx-auto text-right">
                <div className="w-full lg:w-5/12">
                  <h2 className="text-3xl font-black text-white mb-4">قطاعات واسعة ومجالات متعددة</h2>
                  <p className="text-slate-400 leading-relaxed text-sm sm:text-base">
                    نحن لا نحصر خدماتنا في مجال واحد، بل تمتد شبكتنا لتغطي كبرى القطاعات الحيوية لضمان تأمين الكوادر لأكثر من 50 تخصصاً مختلفاً.
                  </p>
                </div>
                
                <div className="w-full lg:w-7/12 flex flex-wrap gap-3 lg:justify-end">
                  {['الفنادق والسياحة', 'البناء والمقاولات', 'الصحة والطب', 'الصناعة والتشغيل', 'التكنولوجيا والبرمجة', 'المالية والمحاسبة', 'التسويق والمبيعات'].map((sec, i) => (
                    <span 
                      key={i} 
                      className="px-5 py-3 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 font-bold text-xs sm:text-sm flex items-center gap-2 hover:bg-slate-800 hover:text-white transition-all cursor-default"
                    >
                      <Check className="w-4 h-4 text-blue-500" />
                      <span>{sec}</span>
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </section>

        </>
      ) : (
        /* ====== DEDICATED CONTACTS PAGE (OUR CONTACTS / جهات اتصالنا) ====== */
        <div className="py-16 sm:py-24 relative overflow-hidden min-h-[75vh]">
          {/* Radial glow background for high premium impact */}
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-emerald-950/20 rounded-full blur-[160px] pointer-events-none" />
          
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-right">
            
            {/* Header Area */}
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-emerald-500/20 bg-emerald-500/10 text-emerald-400 text-xs sm:text-sm font-semibold mb-6 animate-pulse">
                <Radio className="w-4 h-4 text-emerald-500" />
                <span>شواغر العمل اليومية والتواصل المباشر للمحافظات</span>
              </div>
              <h1 className="text-4xl sm:text-5xl font-black text-white leading-tight mb-5">
                قنوات وقروبات شواغر المحافظات الرسمية
              </h1>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
                لكل محافظة قناة واتساب مستقلة مخصصة لنشر فرص العمل وشواغر اليوم مباشرة. اضغط على زر القناة للانضمام الفوري، أو اضغط على مربع المحافظة لبدء محادثة واتساب مع مكتبنا.
              </p>
            </div>

            {/* Quick Helper Tip Box */}
            <div className="max-w-4xl mx-auto mb-12 p-5 rounded-2xl bg-slate-900/60 border border-slate-800 text-right flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-blue-500/10 text-blue-400 flex items-center justify-center shrink-0 mt-0.5">
                <Info className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-white font-bold text-sm mb-1">تعليمات هامة للباحثين عن شواغر العمل:</h4>
                <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                  يتم تحديث قنوات الواتساب المخصصة لكل محافظة بشكل يومي بالشواغر الوظيفية المتاحة (فنادق، سياحة، محاسبة، علاقات عامة، طب، وغيرها). يُنصح بالانضمام إلى قناة محافظتك والضغط على "كتم الكتم" مع تفعيل الإشعارات ليصلك كل شاغر جديد فور صدوره.
                </p>
              </div>
            </div>

            {/* Premium 12-Column Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 max-w-6xl mx-auto items-start">
              
              {/* Right Side (8 cols): Governorates list */}
              <div className="lg:col-span-8 space-y-8">
                <div className="flex items-center gap-2 pb-2 border-b border-slate-800/60 justify-start">
                  <span className="text-xl">📍</span>
                  <h3 className="text-xl font-bold text-slate-200">مكاتبنا وقنوات شواغر المحافظات الرسمية</h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {[...syriaOffices, ...internationalOffices].map((office) => {
                    const isLebanon = office.id === 'lebanon';
                    return (
                      <div 
                        key={office.id}
                        className={`p-6 rounded-2xl bg-gradient-to-b from-slate-900 to-[#090d16] border border-slate-800/90 hover:translate-y-[-4px] transition-all duration-500 group relative flex flex-col justify-between ${
                          isLebanon 
                            ? 'hover:border-red-500/50 hover:shadow-[0_8px_30px_rgba(239,68,68,0.12)]' 
                            : 'hover:border-emerald-500/50 hover:shadow-[0_8px_30px_rgba(16,185,129,0.12)]'
                        }`}
                      >
                        <div>
                          {/* Badge header */}
                          <div className="flex justify-between items-center mb-5 pb-3 border-b border-slate-800/40">
                            <span className={`px-3 py-1 text-xs font-bold rounded-full flex items-center gap-1.5 ${
                              isLebanon 
                                ? 'text-red-400 bg-red-500/10' 
                                : 'text-emerald-400 bg-emerald-500/10'
                            }`}>
                              <span className="text-sm">{office.flag}</span>
                              <span>مكتب {office.cityAr}</span>
                            </span>
                            <span className="text-xs font-mono text-slate-500">{office.city}</span>
                          </div>

                          {/* Address details */}
                          <div className="flex items-start gap-2.5 text-slate-300 text-sm mb-5 justify-start text-right">
                            <MapPin className="w-5 h-5 text-red-400 shrink-0 mt-0.5 ml-2" />
                            <div>
                              <p className="font-bold">{office.addressAr}</p>
                              <p className="text-xs text-slate-500 font-mono mt-0.5">{office.address}</p>
                              {office.mapLink && (
                                <a 
                                  href={office.mapLink} 
                                  target="_blank" 
                                  rel="noreferrer" 
                                  className={`inline-flex items-center gap-1 text-[11px] font-bold mt-1.5 transition-colors underline decoration-dotted ${
                                    isLebanon ? 'text-red-400 hover:text-red-300' : 'text-emerald-400 hover:text-emerald-300'
                                  }`}
                                >
                                  <span>عرض الموقع على الخريطة 🗺️</span>
                                </a>
                              )}
                            </div>
                          </div>

                          {/* Landline phones if exists */}
                          {office.landlines && office.landlines.length > 0 && (
                            <div className="space-y-1.5 mb-5 pt-3 border-t border-slate-800/40">
                              <span className="text-xs text-slate-500 block font-semibold">الهاتف الأرضي للمكتب:</span>
                              <div className="flex flex-wrap gap-2 justify-start">
                                {office.landlines.map((line) => (
                                  <div key={line} className="flex items-center gap-1 bg-slate-800/50 border border-slate-850 px-2.5 py-1 rounded-lg text-xs font-mono text-slate-300">
                                    <Phone className="w-3 h-3 text-slate-500 ml-1" />
                                    <a href={`tel:${line}`} className="hover:text-white hover:underline">{line}</a>
                                  </div>
                                ))}
                              </div>
                            </div>
                          )}

                          {/* Main Clickable box for WhatsApp direct connection */}
                          <div className="pt-3 border-t border-slate-800/40 mb-5 text-right">
                            <span className="text-xs text-slate-500 block font-semibold mb-2">رقم الجوال والواتساب للتواصل الفردي:</span>
                            
                            <button 
                              onClick={() => window.open(office.whatsappLink, '_blank')}
                              className={`w-full p-4 rounded-xl bg-slate-900/60 border border-slate-850 text-right transition-all group/wa cursor-pointer ${
                                isLebanon 
                                  ? 'hover:border-red-500/30 hover:bg-red-500/5' 
                                  : 'hover:border-emerald-500/30 hover:bg-emerald-500/5'
                              }`}
                              title="افتح محادثة واتساب"
                            >
                              <div className="flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center group-hover/wa:scale-110 transition-transform ${
                                    isLebanon ? 'bg-red-500/10 text-red-400' : 'bg-emerald-500/10 text-emerald-400'
                                  }`}>
                                    <MessageSquare className="w-5 h-5" />
                                  </div>
                                  <div className="text-right">
                                    <p className="text-[11px] text-slate-400">تواصل مباشر واتساب 💬</p>
                                    <p className="text-sm font-bold font-mono text-white mt-0.5">{office.mobile}</p>
                                  </div>
                                </div>
                                <ChevronLeft className={`w-5 h-5 text-slate-500 transition-colors ${
                                  isLebanon ? 'group-hover/wa:text-red-400' : 'group-hover/wa:text-emerald-400'
                                }`} />
                              </div>
                            </button>
                          </div>

                          {/* Facebook branch page link */}
                          {office.facebookLink && (
                            <div className="pt-3 border-t border-slate-800/40 mb-6">
                              <span className="text-xs text-slate-500 block font-semibold mb-2">الصفحة الرسمية للفرع على فيسبوك:</span>
                              <a 
                                href={office.facebookLink}
                                target="_blank"
                                rel="noreferrer"
                                className={`w-full p-3.5 rounded-xl bg-slate-900/60 border border-slate-850 flex items-center justify-between transition-all cursor-pointer ${
                                  isLebanon 
                                    ? 'hover:border-red-500/35 hover:bg-red-500/5' 
                                    : 'hover:border-emerald-500/35 hover:bg-emerald-500/5'
                                }`}
                              >
                                <div className="flex items-center gap-2.5">
                                  <div className={`w-9 h-9 rounded-lg flex items-center justify-center shrink-0 ${
                                    isLebanon ? 'bg-red-500/10 text-red-400' : 'bg-emerald-500/10 text-emerald-400'
                                  }`}>
                                    <Facebook className="w-4.5 h-4.5 fill-current" />
                                  </div>
                                  <span className="text-xs sm:text-sm font-bold text-slate-200">
                                    تصفح فيسبوك {office.cityAr.includes('اللاذقية') ? 'اللاذقية' : office.cityAr.includes('دمشق') ? 'دمشق' : office.cityAr.includes('حمص') ? 'حمص' : 'لبنان'} 💻
                                  </span>
                                </div>
                                <ChevronLeft className="w-4 h-4 text-slate-500" />
                              </a>
                            </div>
                          )}
                        </div>

                        {/* Governorate WhatsApp Channel Button */}
                        {office.whatsappChannel && (
                          <div className="pt-4 border-t border-slate-800/40 mt-auto">
                            <a 
                              href={office.whatsappChannel}
                              target="_blank"
                              rel="noreferrer"
                              className={`w-full py-4 px-4 bg-gradient-to-r text-white font-bold rounded-xl shadow-lg transition-all duration-300 flex items-center justify-center gap-2.5 text-center ${
                                isLebanon 
                                  ? 'from-red-600 to-rose-600 hover:from-red-500 hover:to-rose-500 shadow-red-950/20 hover:shadow-red-500/35' 
                                  : 'from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 shadow-emerald-950/20 hover:shadow-emerald-500/35'
                              }`}
                            >
                              <span className="relative flex h-2.5 w-2.5">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-white"></span>
                              </span>
                              <span className="text-xs sm:text-sm">الانضمام لقناة شواغر {office.cityAr.split(' ')[0]} 📢</span>
                            </a>
                          </div>
                        )}
                      </div>
                    );
                  })}

                  {/* Aleppo Placeholder card for expansion */}
                  <div className="p-6 rounded-2xl bg-slate-900/40 border border-slate-800/50 relative flex flex-col justify-between text-right opacity-80">
                    <div>
                      <div className="flex justify-between items-center mb-5 pb-3 border-b border-slate-800/40">
                        <span className="px-3 py-1 text-xs font-bold text-blue-400 bg-blue-500/10 rounded-full flex items-center gap-1.5">
                          <span className="text-sm">🇸🇾</span>
                          <span>مكتب حلب [قريباً]</span>
                        </span>
                        <span className="text-xs font-mono text-slate-500">Aleppo</span>
                      </div>
                      <div className="flex items-start gap-2.5 text-slate-400 text-sm mb-5 justify-start text-right">
                        <MapPin className="w-5 h-5 text-slate-600 shrink-0 mt-0.5 ml-2" />
                        <div>
                          <p className="font-bold">سيتم التوسع لتغطية محافظة حلب قريباً</p>
                          <p className="text-xs text-slate-500 font-mono mt-0.5">Aleppo City - Coming Soon</p>
                        </div>
                      </div>
                    </div>
                    <div className="pt-4 border-t border-slate-800/40 mt-auto text-center">
                      <span className="inline-block px-4 py-2 bg-slate-900 text-slate-500 border border-slate-800 rounded-lg text-xs font-bold">انتظرونا قريباً</span>
                    </div>
                  </div>
                </div>

                {/* Indirect International Representations & Consultancies Badge (Bulgaria & Germany) */}
                <div className="mt-6 p-5 rounded-2xl bg-slate-900/35 border border-slate-800/60 text-right flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-indigo-500/10 text-indigo-400 flex items-center justify-center shrink-0">
                      <Globe className="w-5 h-5" />
                    </div>
                    <div className="text-right">
                      <p className="text-xs text-slate-400">فروع وتمثيل خارجي غير مباشر (الاستشارات القانونية والتعليم الدولي)</p>
                      <p className="text-sm font-bold text-slate-200 mt-0.5 flex items-center gap-2">
                        <span>بلغاريا 🇧🇬</span>
                        <span className="text-slate-600">•</span>
                        <span>ألمانيا 🇩🇪</span>
                      </p>
                    </div>
                  </div>
                  <span className="text-[11px] text-slate-500 bg-slate-900/80 px-3 py-1 rounded-full border border-slate-800/80">تنسيق وتواصل عبر الإدارة العامة</span>
                </div>
              </div>

              {/* Left Side (4 cols): Management & Department Contacts */}
              <div className="lg:col-span-4 space-y-6">
                <div className="flex items-center gap-2 pb-2 border-b border-slate-800/60 justify-start">
                  <span className="text-xl">👑</span>
                  <h3 className="text-xl font-bold text-slate-200">أرقام الإدارة والمشرفين</h3>
                </div>

                {/* Elevated High Status Silver/Chrome Box */}
                <div className="rounded-2xl bg-gradient-to-br from-slate-900 to-[#090d16] p-6 border-2 border-indigo-500/20 shadow-2xl relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/5 rounded-full blur-2xl pointer-events-none" />
                  
                  <div className="flex items-center gap-2 mb-6 justify-start text-right">
                    <div className="w-10 h-10 rounded-lg bg-indigo-500/20 text-indigo-400 flex items-center justify-center ml-2">
                      <Award className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-white font-extrabold text-base">تواصل مباشر مع الإدارة</h4>
                      <p className="text-[10px] text-slate-400 uppercase tracking-widest font-mono">Serena Departments Contact</p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    {managementContacts.map((contact) => (
                      <div 
                        key={contact.id} 
                        className="p-4 rounded-xl bg-slate-950/60 border border-slate-800/80 hover:border-slate-700/80 transition-all text-right"
                      >
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-xs sm:text-sm font-bold text-slate-200">{contact.roleAr}</span>
                          <span className="text-[9px] text-slate-400 font-mono uppercase">{contact.role}</span>
                        </div>
                        <div className="flex items-center justify-between gap-2 pt-2 border-t border-slate-900">
                          <span className="font-mono text-xs text-indigo-300 font-bold">
                            {contact.phone}
                          </span>
                          <div className="flex gap-2">
                            {/* Copy Button */}
                            <button 
                              onClick={() => handleCopy(contact.phone, contact.id)}
                              className="p-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white transition-all cursor-pointer border border-slate-800"
                              title="نسخ الرقم"
                            >
                              {copiedId === contact.id ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                            </button>
                            
                            {/* WhatsApp Chat Button */}
                            <a 
                              href={contact.whatsappLink}
                              target="_blank"
                              rel="noreferrer"
                              className="p-1.5 rounded-lg bg-emerald-600/20 hover:bg-emerald-600 text-emerald-400 hover:text-white transition-all"
                              title="محادثة واتساب مباشرة"
                            >
                              <MessageSquare className="w-3.5 h-3.5" />
                            </a>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Email & Website Info Box */}
                  <div className="mt-6 pt-5 border-t border-slate-800/80 space-y-3 text-right font-sans">
                    <div className="flex items-center gap-3 text-slate-300 text-sm justify-start">
                      <Mail className="w-5 h-5 text-blue-400 shrink-0 ml-2" />
                      <div className="overflow-hidden">
                        <p className="text-xs text-slate-500 font-semibold">البريد الإلكتروني المعتمد:</p>
                        <a href="mailto:latakia@serena-sy.com" className="hover:text-blue-400 hover:underline text-xs sm:text-sm font-mono truncate block">
                          latakia@serena-sy.com
                        </a>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 text-slate-300 text-sm justify-start">
                      <Globe className="w-5 h-5 text-indigo-400 shrink-0 ml-2" />
                      <div>
                        <p className="text-xs text-slate-500 font-semibold">الموقع الإلكتروني الرسمي:</p>
                        <a href="https://serena-sy.com" target="_blank" rel="noreferrer" className="hover:text-indigo-400 hover:underline text-xs sm:text-sm font-mono block">
                          serena-sy.com
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>

            {/* Dedicated Facebook & Communities Hub section */}
            <div className="mt-20 p-8 rounded-2xl bg-gradient-to-br from-slate-900/80 to-slate-950/40 border border-slate-800/80 relative overflow-hidden max-w-6xl mx-auto">
              <div className="absolute top-0 left-0 w-48 h-48 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />
              <div className="flex flex-col lg:flex-row items-center justify-between gap-8 relative z-10">
                <div className="max-w-xl text-right">
                  <h3 className="text-2xl font-bold text-white mb-2">تابع مجتمعاتنا على سوشيال ميديا</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    نوفر تحديثات يومية للمقالات القانونية، فرص السفر والتوظيف، والإعلانات الحصرية لوكالة سيرينا عبر قنواتنا المعتمدة رسمياً.
                  </p>
                </div>
                <div className="flex flex-wrap gap-4 justify-center">
                  <a 
                    href="https://www.facebook.com/profile.php?id=61577240213275" 
                    target="_blank" 
                    rel="noreferrer"
                    className="px-5 py-3.5 bg-blue-600 hover:bg-blue-500 text-white rounded-xl text-sm font-bold transition-all transform hover:scale-105 flex items-center gap-2 cursor-pointer shadow-lg shadow-blue-500/10"
                  >
                    <Facebook className="w-4 h-4 fill-white text-white" />
                    <span>فيسبوك سوريا 🇸🇾</span>
                  </a>
                  <a 
                    href="https://www.instagram.com/serena_employment_agency/" 
                    target="_blank" 
                    rel="noreferrer"
                    className="px-5 py-3.5 bg-gradient-to-tr from-yellow-500 via-pink-500 to-purple-600 text-white rounded-xl text-sm font-bold transition-all transform hover:scale-105 flex items-center gap-2 cursor-pointer shadow-lg shadow-pink-500/10"
                  >
                    <span>📸 انستغرام</span>
                  </a>
                  <a 
                    href="https://www.linkedin.com/company/serena-employment-agency" 
                    target="_blank" 
                    rel="noreferrer"
                    className="px-5 py-3.5 bg-blue-800 hover:bg-blue-700 text-white rounded-xl text-sm font-bold transition-all transform hover:scale-105 flex items-center gap-2 cursor-pointer shadow-lg shadow-blue-800/10"
                  >
                    <span>💼 لينكد إن</span>
                  </a>
                  <a 
                    href="https://whatsapp.com/channel/0029Vb6bHoHFi8xV5nMaPr43" 
                    target="_blank" 
                    rel="noreferrer"
                    className="px-5 py-3.5 bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl text-sm font-bold transition-all transform hover:scale-105 flex items-center gap-2 cursor-pointer shadow-lg shadow-emerald-600/10"
                  >
                    <span>قناة واتساب سوريا 🇸🇾</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Back button to return to Homepage */}
            <div className="text-center mt-16 max-w-xs mx-auto">
              <button 
                onClick={() => {
                  setCurrentPage('home');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="w-full py-4 px-6 bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-300 hover:text-white font-bold rounded-xl transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
              >
                <ArrowLeft className="w-5 h-5 rotate-180" />
                <span>العودة للصفحة الرئيسية</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ====== FOOTER ====== */}
      <footer className="bg-slate-950 border-t border-slate-900 text-slate-500 py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-right">
            <div>
              <p className="text-sm font-bold text-slate-300">© {new Date().getFullYear()} وكالة سيرينا للتوظيف والاستثمار.</p>
              <p className="text-xs text-slate-500 mt-1">جميع الحقوق محفوظة لمجموعة سيرينا الاستثمارية.</p>
            </div>
            <div className="flex gap-6 text-xs font-semibold">
              <button 
                onClick={() => {
                  setCurrentPage('home');
                  setTimeout(() => {
                    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
                  }, 100);
                }}
                className="hover:text-slate-300 transition-colors cursor-pointer"
              >
                عن سيرينا
              </button>
              <button 
                onClick={() => {
                  setCurrentPage('home');
                  setTimeout(() => {
                    document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
                  }, 100);
                }}
                className="hover:text-slate-300 transition-colors cursor-pointer"
              >
                خدماتنا
              </button>
              <button 
                onClick={() => {
                  setCurrentPage('contacts');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="hover:text-slate-300 transition-colors cursor-pointer"
              >
                جهات اتصالنا 📞
              </button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
