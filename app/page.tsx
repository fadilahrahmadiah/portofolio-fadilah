import React from 'react';
import Image from 'next/image';
import styles from './Home.module.css'; 
import {IoMailOutline} from 'react-icons/io5';  
import { FaLinkedin, FaGithub, FaWhatsapp } from "react-icons/fa6"; 

export const metadata ={
  title: "Fadilah Rahmadiah Portfolio | AI & Data Analytics",
  description: "Official portfolio of Fadilah Rahmadiah, an Informatics Engineering student at Sriwijaya University. Experienced as an AI & Data Analytics Intern at PT Timah Tbk, specializing in Artificial Intelligence and Intelligent Systems.",
};

export default function Home() {
  return (
    <main className={styles.mainContainer}>
      
      <header className={styles.header}>
        <div className="absolute inset-0 w-full h-full z-0">
          <Image 
            src="/hero-section.png" 
            alt="Fadilah Rahmadiah Portfolio Hero Background"
            fill
            priority
            className="object-cover opacity-10 transition-transform duration-1000 hover:scale-105" 
          />
          <div className={styles.heroGradientOverlay}></div>
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-12 w-full grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 items-center text-center md:text-left">
          
          <div className="flex justify-center md:col-span-1 md:order-last">
            <div className={styles.profileFrame}>
              <div className="w-full h-full rounded-full overflow-hidden bg-slate-100 relative">
                <Image 
                  src="/profile.png" 
                  alt="Fadilah Rahmadiah" 
                  fill
                  className="object-cover transition-transform duration-500"
                />
              </div>
            </div>
          </div>

          <div className="space-y-6 md:col-span-2">
            <h1 className={styles.titleName}>
              Fadilah Rahmadiah's Portfolio
            </h1>
            <p className="text-lg md:text-xl text-slate-600 leading-relaxed">
              Informatics Engineering student at <span className="text-slate-900 font-semibold">Sriwijaya University</span> specializing in Artificial Intelligence and Intelligent Systems. Experienced in data preprocessing, machine learning development, and robust model evaluation.
            </p>
            <div className="flex flex-wrap gap-4 pt-2 justify-center md:justify-start">
              <a href="mailto:rahmadiahfadilah@gmail.com" className={styles.btnPrimary}>
                Contact Me
              </a>
              <a href="https://linkedin.com/in/fadilahrahmadiah" target="_blank" rel="noopener noreferrer" className={styles.btnSecondary}>
                LinkedIn Profile
              </a>
            </div>
          </div>
        </div>
      </header>

      <section className={styles.section}>
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className={`${styles.card} md:col-span-2 space-y-3`}>
              <h3 className="text-sm font-semibold tracking-wider text-teal-600 uppercase">Education</h3>
              <h4 className="text-2xl font-bold text-slate-800">Sriwijaya University</h4>
              <p className="text-base text-slate-500">Bachelor of Informatics Engineering (2023 - Present)</p>
              <p className="text-sm text-teal-600 font-medium">Concentration in Artificial Intelligence & Intelligent System Development</p>
            </div>
            <div className={`${styles.card} ${styles.cardHighlight} flex flex-col justify-center items-center text-center space-y-1`}>
              <span className={styles.gpaNumber}>3.98</span>
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">Current GPA / 4.00</span>
            </div>
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.sectionGray}`}>
        <div className="max-w-6xl mx-auto space-y-6">
          <div className="space-y-2">
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-slate-800">Official Certificates & Credentials</h2>
            <div className="h-1 w-12 bg-teal-600 rounded-full"></div>
          </div>

          <div className="flex gap-6 overflow-x-auto pb-6 pt-2 scrollbar-thin snap-x snap-mandatory">
            
            <div className={`${styles.card} min-w-[280px] sm:min-w-[350px] max-w-[350px] snap-start p-0 overflow-hidden flex flex-col`}>
              <div className="relative w-full h-48 bg-slate-100 overflow-hidden">
                <Image src="/certificates/iffest.png" alt="Certificate" fill className="object-fill group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-5 space-y-1 flex-1">
                <span className={`${styles.badge} ${styles.badgeAmber}`}>Competition Award</span>
                <h4 className="text-base font-bold text-slate-800 line-clamp-1">2nd Place Winner Certificate</h4>
                <p className="text-xs text-slate-500">Web Design Competition — IFFEST UNSRI 2024</p>
              </div>
            </div>

            <div className={`${styles.card} min-w-[280px] sm:min-w-[350px] max-w-[350px] snap-start p-0 overflow-hidden flex flex-col`}>
              <div className="relative w-full h-48 bg-slate-100 overflow-hidden">
                <Image src="/certificates/intern_timah.png" alt="Certificate" fill className="object-fill group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-5 space-y-1 flex-1">
                <span className={`${styles.badge} ${styles.badgeTeal}`}>Professional Internship</span>
                <h4 className="text-base font-bold text-slate-800 line-clamp-1">AI & Data Analytics Intern</h4>
                <p className="text-xs text-slate-500">Issued by PT Timah Tbk</p>
              </div>
            </div>
            
            <div className={`${styles.card} min-w-[280px] sm:min-w-[350px] max-w-[350px] snap-start p-0 overflow-hidden flex flex-col`}>
              <div className="relative w-full h-48 bg-slate-100 overflow-hidden">
                <Image src="/certificates/comlab.png" alt="Certificate" fill className="object-fill" />
              </div>
              <div className="p-5 space-y-1 flex-1">
                <span className={`${styles.badge} ${styles.badgeTeal}`}>Work Experience</span>
                <h4 className="text-base font-bold text-slate-800 line-clamp-1">Lab Teaching Assistant</h4>
                <p className="text-xs text-slate-500">Sriwijaya University</p>
              </div>
            </div>

            <div className={`${styles.card} min-w-[280px] sm:min-w-[350px] max-w-[350px] snap-start p-0 overflow-hidden flex flex-col`}>
              <div className="relative w-full h-48 bg-slate-100 overflow-hidden">
                <Image src="/certificates/hmif.png" alt="Certificate" fill className="object-fill" />
              </div>
              <div className="p-5 space-y-1 flex-1">
                <span className={`${styles.badge} ${styles.badgeTeal}`}>Leadership & Organization</span>
                <h4 className="text-base font-bold text-slate-800 line-clamp-1">Entrepreneurship Staff</h4>
                <p className="text-xs text-slate-500">Himpunan Mahasiswa Informatika (HMIF) UNSRI 2024</p>
              </div>
            </div>

            <div className={`${styles.card} min-w-[280px] sm:min-w-[350px] max-w-[350px] snap-start p-0 overflow-hidden flex flex-col`}>
              <div className="relative w-full h-48 bg-slate-100 overflow-hidden">
                <Image src="/certificates/temanmengabdi.png" alt="Sertifikat" fill className="object-fill" />
              </div>
              <div className="p-5 space-y-1 flex-1">
                <span className={`${styles.badge} ${styles.badgeEmerald}`}>Volunteering</span>
                <h4 className="text-base font-bold text-slate-800 line-clamp-1">Part of Teman Mengabdi 2025</h4>
                <p className="text-xs text-slate-500">Yayasan TEACH Indonesia</p>
              </div>
            </div>

            <div className={`${styles.card} min-w-[280px] sm:min-w-[350px] max-w-[350px] snap-start p-0 overflow-hidden flex flex-col`}>
              <div className="relative w-full h-48 bg-slate-100 overflow-hidden">
                <Image src="/certificates/wya.png" alt="Sertifikat" fill className="object-fill" />
              </div>
              <div className="p-5 space-y-1 flex-1">
                <span className={`${styles.badge} ${styles.badgeEmerald}`}>Volunteering</span>
                <h4 className="text-base font-bold text-slate-800 line-clamp-1">Volunteer Group Lead</h4>
                <p className="text-xs text-slate-500">Issued by World Youth Action</p>
              </div>
            </div>

            <div className={`${styles.card} min-w-[280px] sm:min-w-[350px] max-w-[350px] snap-start p-0 overflow-hidden flex flex-col`}>
              <div className="relative w-full h-48 bg-slate-100 overflow-hidden">
                <Image src="/certificates/ief.png" alt="Sertifikat" fill className="object-fill" />
              </div>
              <div className="p-5 space-y-1 flex-1">
                <span className={`${styles.badge} ${styles.badgeEmerald}`}>Volunteering</span>
                <h4 className="text-base font-bold text-slate-800 line-clamp-1">Design Staff Volunteer</h4>
                <p className="text-xs text-slate-500">Issued by Ilkom's Community of English Lover</p>
              </div>
            </div>

            <div className={`${styles.card} min-w-[280px] sm:min-w-[350px] max-w-[350px] snap-start p-0 overflow-hidden flex flex-col`}>
              <div className="relative w-full h-48 bg-slate-100 overflow-hidden">
                <Image src="/certificates/tri1.png" alt="Sertifikat" fill className="object-fill" />
              </div>
              <div className="p-5 space-y-1 flex-1">
                <span className={`${styles.badge} ${styles.badgeEmerald}`}>Volunteering</span>
                <h4 className="text-base font-bold text-slate-800 line-clamp-1">Volunteer</h4>
                <p className="text-xs text-slate-500">Issued by Trash Ranger Indonesia</p>
              </div>
            </div>

            <div className={`${styles.card} min-w-[280px] sm:min-w-[350px] max-w-[350px] snap-start p-0 overflow-hidden flex flex-col`}>
              <div className="relative w-full h-48 bg-slate-100 overflow-hidden">
                <Image src="/certificates/tri2.png" alt="Sertifikat" fill className="object-fill" />
              </div>
              <div className="p-5 space-y-1 flex-1">
                <span className={`${styles.badge} ${styles.badgeEmerald}`}>Volunteering</span>
                <h4 className="text-base font-bold text-slate-800 line-clamp-1">Environmental Support</h4>
                <p className="text-xs text-slate-500">Issued by Trash Ranger Indonesia</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className="max-w-6xl mx-auto space-y-10">
          <div className="space-y-2">
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-slate-800">Professional & Research Experience</h2>
            <div className="h-1 w-12 bg-teal-600 rounded-full"></div>
          </div>
          <div className="space-y-12 border-l border-slate-200 pl-6 ml-2">
            
            {/* <div className={styles.timelineItem}>
              <div className={styles.timelineDot} />
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-1">
                <h3 className="text-xl font-bold text-slate-800">Research and Advocacy</h3>
                <span className="text-xs font-medium text-teal-700 bg-teal-50 px-2.5 py-1 rounded-full border border-teal-200">Mar 2026 - Present</span>
              </div>
              <p className="text-sm font-semibold text-teal-600">Samarthana Think Lab (Full-time)</p>
            </div> */}

            <div className={styles.timelineItem}>
              <div className={styles.timelineDot} style={{backgroundColor: '#64748b'}} />
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-1">
                <h3 className="text-xl font-bold text-slate-800">AI & Data Analytics Intern</h3>
                <span className="text-xs font-medium text-slate-600 bg-slate-100 px-2.5 py-1 rounded-full border border-slate-200">Dec 2025 - Jan 2026</span>
              </div>
              <p className="text-sm font-semibold text-teal-600">PT Timah Tbk</p>
              <ul className="list-disc list-outside pl-4 space-y-2 text-sm text-slate-500 leading-relaxed">
                <li>Developed an AI-based time series forecasting model to predict tin commodity prices for the next three years.</li>
                <li>Processed and analyzed historical commodity data to support predictive modeling.</li>
                <li>Contributed to front-end development for an AI-based Tin Commodity Price Prediction system.</li>
              </ul>
            </div>

            <div className={styles.timelineItem}>
              <div className={styles.timelineDot} style={{backgroundColor: '#64748b'}} />
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-1">
                <h3 className="text-xl font-bold text-slate-800">Computer Lab Assistant</h3>
                <span className="text-xs font-medium text-slate-600 bg-slate-100 px-2.5 py-1 rounded-full border border-slate-200">Aug 2020 - Jan 2026</span>
              </div>
              <p className="text-sm font-semibold text-teal-600">Sriwijaya University</p>
              <ul className="list-disc list-outside pl-4 space-y-2 text-sm text-slate-500 leading-relaxed">
                <li>Assisted students during basic programming laboratory. </li>
                <li>Provided technical troubleshooting support during practical classes. </li>
                <li>Prepared and managed laboratory setups, including software installation on 30+ computers, classroom readiness, and required equipment. </li>
                <li>Performed routine computer maintenance to ensure optimal laboratory performance. </li>
              </ul>
            </div>

            <div className={styles.timelineItem}>
              <div className={styles.timelineDot} style={{backgroundColor: '#64748b'}} />
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-1">
                <h3 className="text-xl font-bold text-slate-800">Data Scientist Intern</h3>
                <span className="text-xs font-medium text-slate-600 bg-slate-100 px-2.5 py-1 rounded-full border border-slate-200">June 2025 - Aug 2025</span>
              </div>
              <p className="text-sm font-semibold text-teal-600">PT Vinix Seven Aurum</p>
              <ul className="list-disc list-outside pl-4 space-y-2 text-sm text-slate-500 leading-relaxed">
                <li>Conducted thorough Exploratory Data Analysis (EDA) and data preprocessing tasks utilizing Python.</li>
                <li>Applied feature engineering techniques to improve model performance.</li>
                <li>Visualized insights and model evaluation results using Matplotlib and Seaborn.</li>
              </ul>
            </div>

          </div>
        </div>
      </section>
      
      <section className={styles.section}>
        <div className="max-w-6xl mx-auto space-y-6">
          <div className="space-y-2">
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-slate-800">Skills & Toolkits</h2>
            <div className="h-1 w-12 bg-teal-600 rounded-full"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className={`${styles.card} space-y-4`}>
              <h3 className="text-sm font-bold text-teal-600 tracking-wider uppercase">Technical & AI</h3>
              <div className="flex flex-wrap gap-2">
                {['Python', 'Data Preprocessing', 'Data Annotation', 'Data Labelling', 'Content Evaluation', 'Feature Engineering', 'Machine Learning', 'Statistical Analysis', 'Model Evaluation','C++', 'Java', 'Deep Learning', 'Programming', 'Computer Vision', 'Natural Language Processing'].map((skill) => (
                  <span key={skill} className={styles.pill}>{skill}</span>
                ))}
              </div>
            </div>
            <div className={`${styles.card} space-y-4`}>
              <h3 className="text-sm font-bold text-teal-600 tracking-wider uppercase">Languages & Core Competencies</h3>
              <div className="flex flex-wrap gap-2">
                {['Indonesian (Native)', 'English (Upper-Intermediate)', 'Attention to Detail', 'Analytical Thinking', 'Problem Solving', 'Leadership'].map((skill) => (
                  <span key={skill} className={styles.pill} style={{color: '#0f766e', backgroundColor: '#f0fdfa'}}>{skill}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.sectionGray}`}>
        <div className="max-w-6xl mx-auto space-y-10">
          <div className="space-y-2">
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-slate-800">Achievements & Activities</h2>
            <div className="h-1 w-12 bg-teal-600 rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
            <div className="space-y-4 md:col-span-1 md:sticky md:top-8">
              <h3 className="text-xs font-bold uppercase tracking-widest text-slate-400">Awards & Competitions</h3>
              <div className={`${styles.card} space-y-2`}>
                <span className={`${styles.badge} ${styles.badgeAmber}`}>Winner</span>
                <h4 className="text-lg font-bold text-slate-800">2nd Place, Web Design Competition</h4>
                <p className="text-sm text-slate-500">IFFEST UNSRI 2024</p>
              </div>
              <div className={`${styles.card} space-y-2`}>
                <span className="text-[10px] font-bold text-slate-500 tracking-wider uppercase bg-slate-100 px-2 py-0.5 rounded border border-slate-200">Contestant</span>
                <h4 className="text-base font-bold text-slate-800">Rimau Robotic Contest 2025</h4>
                <p className="text-xs text-slate-500">Sumo Robot Category — Sriwijaya University</p>
              </div>
            </div>

            <div className="space-y-4 md:col-span-2">
              <h3 className="text-xs font-bold uppercase tracking-widest text-slate-400">Organizations & Volunteering</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {['Research & Advocacy'].map((activity, i) => (
                  <div key={i} className={styles.card}>
                    <h4 className="text-sm font-bold text-slate-800">{activity}</h4>
                    <p className="text-[11px] text-slate-400">Samarthana Think Lab</p>
                  </div>
                ))}
                {['Entrepreneurship Staff'].map((activity, i) => (
                  <div key={i} className={styles.card}>
                    <h4 className="text-sm font-bold text-slate-800">{activity}</h4>
                    <p className="text-[11px] text-slate-400">HMIF Sriwijaya University</p>
                  </div>
                ))}
                {['Member'].map((activity, i) => (
                  <div key={i} className={styles.card}>
                    <h4 className="text-sm font-bold text-slate-800">{activity}</h4>
                    <p className="text-[11px] text-slate-400">Klub Robotika Sriwijaya University</p>
                  </div>
                ))}
                {['Part of Teman Mengabdi', 'Volunteer Trash Ranger', 'Design Division Staff'].map((activity, i) => (
                  <div key={i} className={styles.card}>
                    <h4 className="text-sm font-bold text-slate-800">{activity}</h4>
                    <p className="text-[11px] text-slate-400">Volunteering</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.contactSection}>
        <div className="max-w-6xl mx-auto space-y-3">
          <div className="space-y-2">
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-slate-800">Get In Touch</h2>
            <div className="h-1 w-12 bg-teal-600 rounded-full"></div>
          </div>
          <p className="text-sm text-slate-500 pt-2">
            I'm always thrilled to connect! Whether you want to discuss technology, exchange innovative ideas, or simply expand your network, feel free to reach out through any of these platforms:
          </p>

          <div className={styles.contactGrid}>
            
            <a href="mailto:rahmadiahfadilah@gmail.com" className={styles.contactCard}>
              <div className={styles.contactIcon}>
                <IoMailOutline />
              </div>
              <span>Email</span>
              <span className="text-xs font-normal text-slate-400 mt-1">rahmadiahfadilah@gmail.com</span>
            </a>

            <a href="https://linkedin.com/in/fadilahrahmadiah" target="_blank" rel="noopener noreferrer" className={styles.contactCard}>
              <div className={styles.contactIcon}>
                <FaLinkedin />
              </div>
              <span>LinkedIn</span>
              <span className="text-xs font-normal text-slate-400 mt-1">Fadilah Rahmadiah</span>
            </a>

            <a href="https://github.com/fadilahrahmadiah" target="_blank" rel="noopener noreferrer" className={styles.contactCard}>
              <div className={styles.contactIcon}>
                <FaGithub />
              </div>
              <span>GitHub</span>
              <span className="text-xs font-normal text-slate-400 mt-1">@fadilahrahmadiah</span>
            </a>

            <a href="https://wa.me/6285710018805" target="_blank" rel="noopener noreferrer" className={styles.contactCard}>
              <div className={styles.contactIcon}>
                <FaWhatsapp />
              </div>
              <span>WhatsApp</span>
              <span className="text-xs font-normal text-slate-400 mt-1">+62 857-1001-8805</span>
            </a>

          </div>
        </div>
      </section>

      <footer className="w-full py-12 text-center text-xs text-slate-400 bg-white border-t border-slate-100">
        <p>© {new Date().getFullYear()} Fadilah Rahmadiah. Built natively using Next.js & Pure CSS Modules.</p>
      </footer>
    </main>
  );
}