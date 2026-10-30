import type { Metadata } from 'next';
import Link from 'next/link';
import { Award, ShieldCheck, Microscope, HeartHandshake, Sparkles, Trophy, Calendar, Phone, ArrowRight, CheckCircle2 } from 'lucide-react';
import { clinicInfo, foundersInfo, awardsData, diagnosticTests, whyChooseUsReasons } from '@/data/staticData';

export const metadata: Metadata = {
  title: 'About Richfeel Vadodara | Pioneers of Trichology & Clinic Heritage',
  description:
    'Discover the 38+ year clinical legacy of Dr. Apoorva Shah and Dr. Sonal Shah — India’s first certified Trichologists in the Limca Book of Records. World-class hair restoration at Marvel Square, Vadodara.',
  alternates: {
    canonical: 'https://richfeelvadodara.com/about',
  },
  openGraph: {
    title: 'About Richfeel Vadodara | Pioneers of Trichology',
    description:
      'Learn about India’s premier hair and scalp institution founded in 1986. Diagnostic Trichogram science and patented treatments.',
    url: 'https://richfeelvadodara.com/about',
    images: [
      {
        url: 'https://richfeelvadodara.com/images/richfeel-vadodara-og-banner.jpg',
        width: 1200,
        height: 630,
        alt: 'About Richfeel Vadodara Founders Heritage',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Richfeel Vadodara | Pioneers of Trichology & Clinic Heritage',
    description:
      'Discover the 38+ year clinical legacy of Dr. Apoorva Shah and Dr. Sonal Shah at Richfeel Vadodara.',
    images: ['https://richfeelvadodara.com/images/richfeel-vadodara-og-banner.jpg'],
  },
};

export default function AboutPage() {
  const diagnosticIcons = [Microscope, ShieldCheck, Sparkles];

  const aboutSchema = {
    '@context': 'https://schema.org',
    '@type': 'AboutPage',
    name: 'About Richfeel Vadodara - Pioneers of Trichology',
    description:
      '38+ years clinical legacy of Dr. Apoorva Shah & Dr. Sonal Shah. India\'s first certified trichologists featured in the Limca Book of Records.',
    mainEntity: {
      '@type': 'MedicalOrganization',
      name: 'Richfeel Trichology Centre',
      foundingDate: '1986',
      founder: [
        {
          '@type': 'Person',
          name: 'Dr. Apoorva Shah',
          jobTitle: 'Founder & Pioneer Trichologist',
          award: 'Limca Book of Records Honoree',
        },
        {
          '@type': 'Person',
          name: 'Dr. Sonal Shah',
          jobTitle: 'Co-Founder & Pioneer Trichologist',
          award: 'Limca Book of Records Honoree',
        },
      ],
      areaServed: {
        '@type': 'AdministrativeArea',
        name: 'Vadodara, Gujarat',
      },
    },
  };

  return (
    <div className="bg-[#f6f9fc] min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutSchema) }}
      />
      {/* 1. Hero Header */}
      <section className="bg-[#101e3d] text-white py-20 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-bold uppercase tracking-widest text-[#4ecdc4]">
              About Richfeel Vadodara
            </span>
            <h1 className="text-3xl sm:text-5xl font-black tracking-tight leading-tight">
              Pioneering the Science of Trichology in India Since 1986
            </h1>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              Founded by Dr. Apoorva Shah & Dr. Sonal Shah — India's first certified Trichologists featured in the Limca Book of Records. Richfeel Vadodara brings over 38 years of research-backed medical hair restoration, Austrian scalp detox, and advanced laser aesthetics to Marvel Square, Sunpharma Road.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Detailed Clinical Narrative & Founders Story */}
      <section id="heritage" className="py-20 bg-white border-b border-slate-200/80 scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Visual Portrait */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-slate-100">
                <img
                  src="/images/DoctorsProfilePic.webp"
                  alt="Clinical Trichology Consultation at Richfeel"
                  className="w-full h-[480px] object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#101e3d] via-[#101e3d]/30 to-transparent"></div>
                <div className="absolute bottom-6 sm:bottom-12 left-6 right-6 text-white space-y-1">
                  <span className="text-[11px] font-bold uppercase tracking-widest text-[#4ecdc4]">
                    Limca Book of Records Honorees
                  </span>
                  <h3 className="text-xl font-bold text-white">
                    {foundersInfo.names}
                  </h3>
                  <p className="text-xs text-slate-300">
                    "The Shahs of Trichology" · Certified London Institute Protocols
                  </p>
                </div>
              </div>

              <div className="absolute -bottom-6 -right-4 bg-white rounded-2xl shadow-xl p-4 border border-slate-100 max-w-xs hidden sm:block">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center text-[#0a6ebd] shrink-0">
                    <Award className="w-5 h-5 text-[#0a6ebd]" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-slate-900">Brand Trust Report #1</div>
                    <div className="text-[11px] text-slate-500">India's Most Trusted Haircare Brand</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Narrative Copy */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#0a6ebd] block mb-2">
                  Clinical Mission & Heritage
                </span>
                <h2 className="text-2xl sm:text-4xl font-extrabold text-[#27448a] tracking-tight leading-tight">
                  Over Three Decades of Hair & Scalp Excellence
                </h2>
              </div>

              <p className="text-slate-600 text-sm leading-relaxed">
                {foundersInfo.bio}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-2xl bg-[#f6f9fc] border border-slate-200/80 space-y-1">
                  <div className="text-xl font-black text-[#0a6ebd]">38+ Years</div>
                  <div className="text-xs font-bold text-slate-800">Clinical Trichology Experience</div>
                  <p className="text-[11px] text-slate-500">Continuous innovation since 1986 across India.</p>
                </div>

                <div className="p-4 rounded-2xl bg-[#f6f9fc] border border-slate-200/80 space-y-1">
                  <div className="text-xl font-black text-[#0a6ebd]">1,000,000+</div>
                  <div className="text-xs font-bold text-slate-800">Patients Evaluated</div>
                  <p className="text-[11px] text-slate-500">Documented scientific scalp case studies.</p>
                </div>

                <div className="p-4 rounded-2xl bg-[#f6f9fc] border border-slate-200/80 space-y-1">
                  <div className="text-xl font-black text-[#0a6ebd]">15+ Patented</div>
                  <div className="text-xs font-bold text-slate-800">Treatment Procedures</div>
                  <p className="text-[11px] text-slate-500">Collaborations with Switzerland, Austria, Italy & UK.</p>
                </div>

                <div className="p-4 rounded-2xl bg-[#f6f9fc] border border-slate-200/80 space-y-1">
                  <div className="text-xl font-black text-[#0a6ebd]">100% Doctor Led</div>
                  <div className="text-xs font-bold text-slate-800">Microscopic Diagnostics</div>
                  <p className="text-[11px] text-slate-500">Trichogram & Capilloscopy on every patient.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Diagnostic Science (Dedicated Insight) */}
      <section id="diagnostics" className="py-20 bg-[#f6f9fc] border-b border-slate-200/80 scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-wider text-[#0a6ebd] block mb-2">
              Scientific Diagnostics
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#27448a] tracking-tight">
              Why We Never Rely On Visual Guesswork
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm mt-3 leading-relaxed">
              Every hair follicle has an underlying vascular and cellular history. At Richfeel Vadodara, every consultation incorporates clinical diagnostic instruments to evaluate root health before prescribing treatment.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {diagnosticTests.map((test, idx) => {
              const Icon = diagnosticIcons[idx % diagnosticIcons.length];
              return (
                <div
                  key={test.id}
                  className="bg-white rounded-3xl p-8 border border-slate-200/90 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
                >
                  <div className="space-y-4">
                    <div className="w-12 h-12 rounded-2xl bg-blue-50 text-[#0a6ebd] flex items-center justify-center">
                      <Icon className="w-6 h-6" />
                    </div>
                    <div>
                      <span className="text-[10px] font-bold text-[#0a6ebd] uppercase tracking-wider block mb-1">
                        {test.subtitle}
                      </span>
                      <h3 className="text-xl font-bold text-[#27448a]">
                        {test.title}
                      </h3>
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {test.clinicalDetail}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-slate-100">
                    <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block mb-1">
                      Clinical Purpose:
                    </span>
                    <p className="text-xs font-semibold text-slate-800">
                      {test.outcome || test.purpose}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. Awards & Accolades */}
      <section id="awards" className="py-20 bg-white border-b border-slate-200/80 scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-wider text-[#0a6ebd] block mb-2">
              National & Global Honors
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#27448a] tracking-tight">
              Awards & Recognitions
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm mt-3">
              Recognized globally for pioneering contributions to dermatological and trichological sciences.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {awardsData.map((award) => (
              <div
                key={award.id}
                className="bg-[#f6f9fc] rounded-2xl p-6 border border-slate-200/70 hover:border-[#0a6ebd]/30 hover:bg-white hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-white shadow-xs border border-slate-100 flex items-center justify-center text-[#27448a]">
                      <Trophy className="w-5 h-5 text-[#0a6ebd]" />
                    </div>
                    <span className="text-xs font-bold px-2.5 py-1 rounded-md bg-blue-50 text-[#0a6ebd] border border-blue-100">
                      {award.year}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-[#27448a] mb-1.5 leading-snug">
                    {award.title}
                  </h3>

                  <div className="text-xs font-semibold text-slate-700 mb-2">
                    {award.organization} {award.location && `· ${award.location}`}
                  </div>

                  <p className="text-xs text-slate-500 leading-relaxed">
                    {award.description}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-slate-200/60 flex items-center gap-1.5 text-[11px] text-[#0a6ebd] font-semibold">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Verified Industry Honor</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. In-Clinic Care Philosophy & Visit Banner */}
      <section className="py-20 bg-gradient-brand text-white text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <span className="text-xs font-bold uppercase tracking-widest text-[#4ecdc4]">
            Marvel Square · Sunpharma Road · Vadodara
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
            Meet Our Certified Trichology Team in Vadodara
          </h2>
          <p className="text-xs sm:text-sm text-cyan-100 max-w-2xl mx-auto leading-relaxed">
            Located in Marvel Square with dedicated patient consultation suites, microscopic analysis stations, and privacy-focused procedure rooms.
          </p>
          <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/about/doctor"
              className="px-6 py-3.5 rounded-xl bg-white text-[#27448a] font-bold text-xs sm:text-sm shadow-xl hover:bg-cyan-50 transition-all cursor-pointer"
            >
              About Doctor (Vadodara Branch)
            </Link>
            <Link
              href="/contact"
              className="px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold text-xs sm:text-sm border border-white/20 transition-all cursor-pointer"
            >
              Get Directions & Hours
            </Link>
            <a
              href={`tel:${clinicInfo.rawPhones[0]}`}
              className="px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold text-xs sm:text-sm border border-white/20 transition-all"
            >
              Call {clinicInfo.phones[0]}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
