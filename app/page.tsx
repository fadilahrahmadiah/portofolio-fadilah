import React from 'react';
import Image from 'next/image';

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 font-sans antialiased selection:bg-teal-500 selection:text-slate-950">
      
      <header className="relative w-full min-h-[85vh] flex items-center justify-center overflow-hidden border-b border-teal-500/30 shadow-lg shadow-teal-500/5 py-12 md:py-0">
        <div className="absolute inset-0 w-full h-full z-0">
          <Image 
            src="/hero-section.png" 
            alt="Fadilah Rahmadiah Portfolio Hero Background"
            fill
            priority
            className="object-cover opacity-30 transition-transform duration-1000 hover:scale-105" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-slate-950/40"></div>
          <div className="absolute inset-0 bg-radial-gradient from-transparent to-slate-950/80"></div>
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-12 w-full grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 items-center text-center md:text-left">
          
          <div className="flex justify-center md:col-span-1 md:order-last">
            <div className="relative w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 rounded-full p-1  hover:shadow-[0_0_35px_rgba(30,58,138,0.6)] transition-all duration-500 group border border-blue-800">
              <div className="w-full h-full rounded-full overflow-hidden bg-slate-900 relative">
                <Image 
                  src="/profile.png" 
                  alt="Fadilah Rahmadiah" 
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>

          <div className="space-y-6 md:col-span-2">
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-slate-100 drop-shadow-md">
              <span className="bg-gradient-to-r from-teal-400 via-emerald-400 to-indigo-400 bg-clip-text text-transparent">
                Fadilah Rahmadiah's Portfolio
              </span>
            </h1>
            <p className="text-lg md:text-xl text-slate-300 leading-relaxed drop-shadow">
              Informatics Engineering student at <span className="text-slate-100 font-semibold">Sriwijaya University</span> specializing in Artificial Intelligence and Intelligent Systems. Experienced in data preprocessing, machine learning development, and robust model evaluation.
            </p>
            <div className="flex flex-wrap gap-4 pt-2 justify-center md:justify-start">
              <a href="mailto:rahmadiahfadilah@gmail.com" className="px-5 py-2.5 rounded-lg bg-teal-500 text-slate-950 font-semibold hover:bg-teal-400 transition-colors shadow-lg shadow-teal-500/20 text-sm">
                Contact Me
              </a>
              <a href="https://linkedin.com/in/fadilahrahmadiah" target="_blank" rel="noopener noreferrer" className="px-5 py-2.5 rounded-lg bg-slate-900 text-slate-300 font-medium hover:bg-slate-800 transition-colors border border-teal-500/30 text-sm backdrop-blur-sm shadow-md shadow-teal-500/5">
                LinkedIn Profile
              </a>
            </div>
          </div>

        </div>
      </header>

      <section className="w-full py-20 px-6 md:px-12 border-b border-teal-500/20">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="md:col-span-2 p-8 rounded-2xl bg-slate-900/40 border border-teal-500/20 backdrop-blur-sm space-y-3 shadow-md shadow-teal-500/5">
              <h3 className="text-sm font-semibold tracking-wider text-teal-400 uppercase">Education</h3>
              <h4 className="text-2xl font-bold text-slate-200">Sriwijaya University</h4>
              <p className="text-base text-slate-400">Bachelor of Informatics Engineering (2023 - Present)</p>
              <p className="text-sm text-teal-400/90 font-medium">Concentration in Artificial Intelligence & Intelligent System Development</p>
            </div>
            <div className="p-8 rounded-2xl bg-gradient-to-br from-teal-500/10 to-indigo-500/5 border border-teal-500/30 flex flex-col justify-center items-center text-center space-y-1 shadow-md shadow-teal-500/5">
              <span className="text-5xl font-extrabold text-teal-400">3.98</span>
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">Current GPA / 4.00</span>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-20 px-6 md:px-12 border-b border-teal-500/20 bg-slate-900/10">
        <div className="max-w-6xl mx-auto space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div className="space-y-2">
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-slate-100">Official Certificates & Credentials</h2>
              <div className="h-1 w-12 bg-teal-500 rounded-full shadow-[0_0_8px_rgba(20,184,166,0.6)]"></div>
            </div>
          </div>

          <div className="flex gap-6 overflow-x-auto pb-6 pt-2 scrollbar-thin scrollbar-thumb-teal-500/20 scrollbar-track-transparent snap-x snap-mandatory [-webkit-overflow-scrolling:touch]">
            
            {/* 1. Lomba Web Design */}
            <div className="min-w-[280px] sm:min-w-[350px] max-w-[350px] snap-start group rounded-xl overflow-hidden bg-slate-900/40 border border-teal-500/20 shadow-md shadow-teal-500/5 hover:border-teal-400 transition-all duration-300 flex flex-col">
              <div className="relative w-full h-48 bg-slate-950 overflow-hidden">
                <Image src="/certificates/iffest.png" alt="Certificate" fill className="object-fill opacity-85 group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-5 space-y-1 flex-1">
                <span className="text-xs font-semibold text-amber-400 uppercase tracking-wider">🏆 Competition Award</span>
                <h4 className="text-base font-bold text-slate-200 line-clamp-1">2nd Place Winner Certificate</h4>
                <p className="text-xs text-slate-400">Web Design Competition — IFFEST UNSRI 2024</p>
              </div>
            </div>

            <div className="min-w-[280px] sm:min-w-[350px] max-w-[350px] snap-start group rounded-xl overflow-hidden bg-slate-900/40 border border-teal-500/20 shadow-md shadow-teal-500/5 hover:border-teal-400 transition-all duration-300 flex flex-col">
              <div className="relative w-full h-48 bg-slate-950 overflow-hidden">
                <Image src="/certificates/intern_timah.png" alt="Certificate" fill className="object-fill opacity-85 group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-5 space-y-1 flex-1">
                <span className="text-xs font-semibold text-teal-400 uppercase tracking-wider">💼 Professional Internship</span>
                <h4 className="text-base font-bold text-slate-200 line-clamp-1">AI & Data Analytics Intern</h4>
                <p className="text-xs text-slate-400">Issued by PT Timah Tbk</p>
              </div>
            </div>
            
            <div className="min-w-[280px] sm:min-w-[350px] max-w-[350px] snap-start group rounded-xl overflow-hidden bg-slate-900/40 border border-teal-500/20 shadow-md shadow-teal-500/5 hover:border-teal-400 transition-all duration-300 flex flex-col">
              <div className="relative w-full h-48 bg-slate-950 overflow-hidden">
                <Image src="/certificates/comlab.png" alt="Certificate" fill className="object-fill opacity-85 group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-5 space-y-1 flex-1">
                <span className="text-xs font-semibold text-teal-400 uppercase tracking-wider">💼 Work Experience</span>
                <h4 className="text-base font-bold text-slate-200 line-clamp-1">Computer Lab Teaching Assistant</h4>
                <p className="text-xs text-slate-400">Sriwijaya University</p>
              </div>
            </div>

            <div className="min-w-[280px] sm:min-w-[350px] max-w-[350px] snap-start group rounded-xl overflow-hidden bg-slate-900/40 border border-teal-500/20 shadow-md shadow-teal-500/5 hover:border-teal-400 transition-all duration-300 flex flex-col">
              <div className="relative w-full h-48 bg-slate-950 overflow-hidden">
                <Image src="/certificates/hmif.png" alt="Certificate" fill className="object-fill opacity-85 group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-5 space-y-1 flex-1">
                <span className="text-xs font-semibold text-teal-400 uppercase tracking-wider">👥 Leadership & Organization</span>
                <h4 className="text-base font-bold text-slate-200 line-clamp-1">Staff Dinas Kewirausahaan</h4>
                <p className="text-xs text-slate-400">Himpunan Mahasiswa Informatika (HMIF) UNSRI 2024</p>
              </div>
            </div>

            <div className="min-w-[280px] sm:min-w-[350px] max-w-[350px] snap-start group rounded-xl overflow-hidden bg-slate-900/40 border border-teal-500/20 shadow-md shadow-teal-500/5 hover:border-teal-400 transition-all duration-300 flex flex-col">
              <div className="relative w-full h-48 bg-slate-950 overflow-hidden">
                <Image src="/certificates/temanmengabdi.png" alt="Sertifikat TEACH Indonesia" fill className="object-fill opacity-85 group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-5 space-y-1 flex-1">
                <span className="text-xs font-semibold text-emerald-400 uppercase tracking-wider">🌱 Social Volunteering</span>
                <h4 className="text-base font-bold text-slate-200 line-clamp-1">Part of Teman Mengabdi 2025</h4>
                <p className="text-xs text-slate-400">Yayasan Teman Aksara Cita Harapan (TEACH) Indonesia</p>
              </div>
            </div>

            <div className="min-w-[280px] sm:min-w-[350px] max-w-[350px] snap-start group rounded-xl overflow-hidden bg-slate-900/40 border border-teal-500/20 shadow-md shadow-teal-500/5 hover:border-teal-400 transition-all duration-300 flex flex-col">
              <div className="relative w-full h-48 bg-slate-950 overflow-hidden">
                <Image src="/certificates/wya.png" alt="Sertifikat World Youth Action" fill className="object-fill opacity-85 group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-5 space-y-1 flex-1">
                <span className="text-xs font-semibold text-emerald-400 uppercase tracking-wider">🌍 Youth Empowerment</span>
                <h4 className="text-base font-bold text-slate-200 line-clamp-1">Volunteer Group Lead</h4>
                <p className="text-xs text-slate-400">Issued by World Youth Action</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-20 px-6 md:px-12 border-b border-teal-500/20">
        <div className="max-w-6xl mx-auto space-y-10">
          <div className="space-y-2">
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-slate-100">Professional & Research Experience</h2>
            <div className="h-1 w-12 bg-teal-500 rounded-full shadow-[0_0_8px_rgba(20,184,166,0.6)]"></div>
          </div>
          <div className="space-y-12 border-l border-teal-500/30 pl-6 ml-2">
            
            <div className="relative space-y-3">
              <div className="absolute -left-[31px] top-1.5 w-3 h-3 rounded-full bg-teal-400 ring-4 ring-slate-950 shadow-[0_0_8px_rgba(45,212,191,0.8)]" />
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-1">
                <h3 className="text-xl font-bold text-slate-200">Research and Advocacy</h3>
                <span className="text-xs font-medium text-teal-400 bg-slate-900 px-2.5 py-1 rounded-full border border-teal-500/20">Mar 2026 - Present</span>
              </div>
              <p className="text-sm font-semibold text-teal-400">Samarthana Think Lab (Full-time)</p>
            </div>

            <div className="relative space-y-3">
              <div className="absolute -left-[31px] top-1.5 w-3 h-3 rounded-full bg-slate-700 ring-4 ring-slate-950" />
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-1">
                <h3 className="text-xl font-bold text-slate-200">AI & Data Analytics Intern</h3>
                <span className="text-xs font-medium text-slate-400 bg-slate-900/50 px-2.5 py-1 rounded-full border border-slate-800">Dec 2025 - Jan 2026</span>
              </div>
              <p className="text-sm font-semibold text-teal-400">PT Timah Tbk</p>
              <ul className="list-disc list-outside pl-4 space-y-2 text-sm text-slate-400 leading-relaxed">
                <li>Developed a hybrid time series forecasting model using Prophet and LSTM (TensorFlow/Keras) to predict tin commodity prices.</li>
                <li>Performed extensive data preprocessing, trend and seasonality decomposition, and feature scaling using Python (Pandas, NumPy).</li>
              </ul>
            </div>

            <div className="relative space-y-3">
              <div className="absolute -left-[31px] top-1.5 w-3 h-3 rounded-full bg-slate-700 ring-4 ring-slate-950" />
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-1">
                <h3 className="text-xl font-bold text-slate-200">Data Scientist Intern</h3>
                <span className="text-xs font-medium text-slate-400 bg-slate-900 px-2.5 py-1 rounded-full border border-teal-500/20">June 2025 - Aug 2025</span>
              </div>
              <p className="text-sm font-semibold text-teal-400">PT Vinix Seven Aurum</p>
              <ul className="list-disc list-outside pl-4 space-y-2 text-sm text-slate-400 leading-relaxed">
                <li>Conducted thorough Exploratory Data Analysis (EDA) and data preprocessing tasks utilizing Python.</li>
              </ul>
            </div>

            <div className="relative space-y-3">
              <div className="absolute -left-[31px] top-1.5 w-3 h-3 rounded-full bg-slate-700 ring-4 ring-slate-950" />
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-1">
                <h3 className="text-xl font-bold text-slate-200">Computer Laboratory Teaching Assistant</h3>
                <span className="text-xs font-medium text-slate-400 bg-slate-900 px-2.5 py-1 rounded-full border border-teal-500/20">Sept 2025 - Jan 2026</span>
              </div>
              <p className="text-sm font-semibold text-teal-400">Sriwijaya University</p>
            </div>

          </div>
        </div>
      </section>

      <section className="w-full py-20 px-6 md:px-12 border-b border-teal-500/20">
        <div className="max-w-6xl mx-auto space-y-6">
          <div className="space-y-2">
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-slate-100">Skills & Toolkits</h2>
            <div className="h-1 w-12 bg-teal-500 rounded-full shadow-[0_0_8px_rgba(20,184,166,0.6)]"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-xl bg-slate-900/30 border border-teal-500/20 space-y-4 shadow-md shadow-teal-500/5">
              <h3 className="text-sm font-bold text-teal-400 tracking-wider uppercase">Technical & AI</h3>
              <div className="flex flex-wrap gap-2">
                {['Python', 'Data Preprocessing', 'Data Annotation', 'Data Labelling', 'Content Evaluation', 'Feature Engineering', 'Machine Learning', 'Statistical Analysis', 'Model Evaluation','C++', 'Java', 'Deep Learning', 'Programming', 'Data Preprocessing', 'Feature Engineering', 'Statistical Analysis', 'Computer Vision', 'Natural Language Processing', 'Model Evaluation'].map((skill) => (
                  <span key={skill} className="px-3 py-1.5 rounded-md bg-slate-950 text-slate-300 border border-teal-500/20 text-xs font-medium hover:border-teal-400 transition-colors">{skill}</span>
                ))}
              </div>
            </div>
            <div className="p-6 rounded-xl bg-slate-900/30 border border-teal-500/20 space-y-4 shadow-md shadow-teal-500/5">
              <h3 className="text-sm font-bold text-teal-400 tracking-wider uppercase">Languages & Core Competencies</h3>
              <div className="flex flex-wrap gap-2">
                {['Indonesian (Native)', 'English (Upper-Intermediate)', 'Attention to Detail', 'Analytical Thinking', 'Problem Solving', 'Leadership'].map((skill) => (
                  <span key={skill} className="px-3 py-1.5 rounded-md bg-slate-950 text-teal-400/90 border border-teal-500/20 text-xs font-medium hover:border-teal-400 transition-colors">{skill}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-20 px-6 md:px-12 border-b border-teal-500/20">
        <div className="max-w-6xl mx-auto space-y-10">
          <div className="space-y-2">
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-slate-100">Achievements & Activities</h2>
            <div className="h-1 w-12 bg-teal-500 rounded-full shadow-[0_0_8px_rgba(20,184,166,0.6)]"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
            
            <div className="space-y-4 md:col-span-1 md:sticky md:top-8">
              <h3 className="text-xs font-bold uppercase tracking-widest text-slate-500">🏆 Awards & Competitions</h3>
              <div className="p-6 rounded-xl bg-gradient-to-br from-slate-900 to-indigo-950/20 border border-teal-500/20 space-y-2 shadow-md shadow-teal-500/5">
                <div className="flex">
                  <span className="text-[10px] font-bold text-amber-400 tracking-wider uppercase bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/20">Winner</span>
                </div>
                <h4 className="text-lg font-bold text-slate-200">2nd Place, Web Design Competition</h4>
                <p className="text-sm text-slate-400">IFFEST UNSRI 2024</p>
              </div>

              <div className="p-5 rounded-xl bg-slate-900/40 border border-slate-800 space-y-2 shadow-md shadow-teal-500/5 hover:border-teal-500/20 transition-colors">
                <div className="flex">
                  <span className="text-[10px] font-bold text-slate-400 tracking-wider uppercase bg-slate-800 px-2 py-0.5 rounded border border-slate-700">Contestant</span>
                </div>
                <h4 className="text-base font-bold text-slate-200">Rimau Robotic Contest & Exhibition 2025</h4>
                <p className="text-xs text-slate-400">Sumo Robot Category — Fakultas Teknik UNSRI</p>
              </div>
            </div>

            <div className="space-y-4 md:col-span-2">
              <h3 className="text-xs font-bold uppercase tracking-widest text-slate-500">🤝 Leadership & Volunteering</h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

                <div className="p-4 rounded-xl bg-slate-900/50 border border-teal-500/20 flex flex-col justify-between shadow-md shadow-teal-500/5 hover:border-teal-400 transition-colors">
                  <div className="space-y-2">
                    <div className="flex justify-between items-center gap-1">
                      <span className="text-[9px] font-bold text-teal-400 tracking-wider uppercase bg-teal-500/10 px-1.5 py-0.5 rounded border border-teal-500/20">Active</span>
                      <span className="text-[10px] text-slate-500 font-medium">2026</span>
                    </div>
                    <h4 className="text-sm font-bold text-slate-200 leading-snug">Research & Advocacy</h4>
                    <p className="text-[11px] text-slate-400">Samarthana Think Lab</p>
                  </div>
                </div>

                <div className="p-5 rounded-xl bg-slate-900/50 border border-teal-500/20 flex flex-col justify-between shadow-md shadow-teal-500/5 hover:border-teal-500/40 transition-colors">
                  <div className="space-y-2">
                    <div className="flex justify-between items-start gap-2">
                      <span className="text-[10px] font-bold text-teal-400 tracking-wider uppercase bg-teal-500/10 px-2 py-0.5 rounded border border-teal-500/20 shrink-0">Organization</span>
                      <span className="text-[11px] text-slate-500 font-medium shrink-0">2024</span>
                    </div>
                    <h4 className="text-base font-bold text-slate-200 leading-snug">Entrepreneurship Staff</h4>
                    <p className="text-xs text-teal-400/90 font-medium">HMIF — Universitas Sriwijaya</p>
                  </div>
                </div>

                <div className="p-5 rounded-xl bg-slate-900/50 border border-teal-500/20 flex flex-col justify-between shadow-md shadow-teal-500/5 hover:border-teal-500/40 transition-colors">
                  <div className="space-y-2">
                    <div className="flex justify-between items-start gap-2">
                      <span className="text-[10px] font-bold text-teal-400 tracking-wider uppercase bg-teal-500/10 px-2 py-0.5 rounded border border-teal-500/20 shrink-0">Organization</span>
                      <span className="text-[11px] text-slate-500 font-medium shrink-0">2024 - 2025</span>
                    </div>
                    <h4 className="text-base font-bold text-slate-200 leading-snug">Member (Programming Div.)</h4>
                    <p className="text-xs text-teal-400/90 font-medium">Klub Robotika UNSRI</p>
                  </div>
                </div>

                <div className="p-5 rounded-xl bg-slate-900/50 border border-emerald-500/20 flex flex-col justify-between shadow-md shadow-emerald-500/5 hover:border-emerald-500/40 transition-colors">
                  <div className="space-y-2">
                    <div className="flex justify-between items-start gap-2">
                      <span className="text-[10px] font-bold text-emerald-400 tracking-wider uppercase bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20 shrink-0">Volunteering</span>
                      <span className="text-[11px] text-slate-500 font-medium shrink-0">2025</span>
                    </div>
                    <h4 className="text-base font-bold text-slate-200 leading-snug">Part of Teman Mengabdi 2025</h4>
                    <p className="text-xs text-emerald-400/90 font-medium">TEACH Indonesia</p>
                  </div>
                  <p className="text-[11px] text-slate-400 pt-3 flex justify-between">
                  </p>
                </div>

                <div className="p-5 rounded-xl bg-slate-900/50  flex flex-col justify-between shadow-md shadow-emerald-500/5 hover:border-emerald-500/40 transition-colors">
                  <div className="space-y-2">
                    <div className="flex justify-between items-start gap-2">
                      <span className="text-[10px] font-bold text-emerald-400 tracking-wider uppercase bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20 shrink-0">Volunteering</span>
                      <span className="text-[11px] text-slate-500 font-medium shrink-0">2026</span>
                    </div>
                    <h4 className="text-base font-bold text-slate-200 leading-snug">Volunteer</h4>
                    <p className="text-xs text-emerald-400/90 font-medium">Trash Ranger Indonesia</p>
                  </div>
                </div>

                <div className="p-5 rounded-xl bg-slate-900/50 border border-emerald-500/20 flex flex-col justify-between shadow-md shadow-emerald-500/5 hover:border-emerald-500/40 transition-colors">
                  <div className="space-y-2">
                    <div className="flex justify-between items-start gap-2">
                      <span className="text-[10px] font-bold text-emerald-400 tracking-wider uppercase bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20 shrink-0">Volunteering</span>
                      <span className="text-[11px] text-slate-500 font-medium shrink-0">2024</span>
                    </div>
                    <h4 className="text-base font-bold text-slate-200 leading-snug">Design Division Staff</h4>
                    <p className="text-xs text-emerald-400/90 font-medium">INTEL IEF 2024 — UNSRI</p>
                  </div>
                </div>

                <div className="p-5 rounded-xl bg-slate-900/50 border border-emerald-500/20 flex flex-col justify-between shadow-md shadow-emerald-500/5 hover:border-emerald-500/40 transition-colors">
                  <div className="space-y-2">
                    <div className="flex justify-between items-start gap-2">
                      <span className="text-[10px] font-bold text-emerald-400 tracking-wider uppercase bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20 shrink-0">Volunteering</span>
                      <span className="text-[11px] text-slate-500 font-medium shrink-0">2025</span>
                    </div>
                    <h4 className="text-base font-bold text-slate-200 leading-snug">Group Lead</h4>
                    <p className="text-xs text-emerald-400/90 font-medium">World Youth Action</p>
                  </div>
                  <p className="text-[11px] text-slate-400 pt-3 border-t border-slate-800/60 mt-3 flex justify-between">
                  </p>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="w-full py-12 text-center text-xs text-slate-600 bg-slate-950">
        <p>© {new Date().getFullYear()} Fadilah Rahmadiah. Built natively using Next.js & Tailwind CSS.</p>
      </footer>

    </main>
  );
}