import React from 'react';
import { studioConfig } from '../data/studioData';
import { GraduationCap, MessageCircle } from 'lucide-react';
import Reveal from './Reveal';

export default function AboutSection() {
  const a = studioConfig.about;
  const coursesLink = `https://wa.me/${studioConfig.whatsappNumber}?text=${encodeURIComponent('Olá, Rose! Vim pelo site e quero saber das próximas turmas de curso.')}`;

  return (
    <section id="sobre" className="py-20 sm:py-28 scroll-mt-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 grid grid-cols-1 md:grid-cols-12 gap-10 items-center">
        <Reveal className="md:col-span-4 flex justify-center">
          <div className="relative">
            <div className="absolute -inset-3 rounded-full border border-champagne/60" />
            <img src={a.photo} alt={`${studioConfig.name}`} className="relative w-48 h-48 sm:w-56 sm:h-56 rounded-full object-cover shadow-2xl shadow-brand-900/20 border-[6px] border-white" />
          </div>
        </Reveal>

        <Reveal delay={120} className="md:col-span-8">
          <span className="text-xs font-semibold tracking-[0.3em] uppercase text-brand-600">Quem cuida de você</span>
          <h2 className="font-serif text-4xl sm:text-5xl text-brand-950 mt-3 uppercase tracking-[0.06em] font-medium leading-[1.05]">
            {studioConfig.name}
          </h2>
          <p className="mt-2 font-serif italic text-xl text-champagne-dark">{a.title}</p>
          <p className="mt-5 text-sm sm:text-base text-brand-900/75 leading-relaxed">{a.text}</p>

          <ul className="mt-6 flex flex-wrap gap-2">
            {a.highlights.map((h) => (
              <li key={h} className="px-3.5 py-1.5 rounded-full bg-white border border-brand-200 text-xs font-semibold text-brand-800">{h}</li>
            ))}
          </ul>

          <div className="mt-8 p-5 rounded-3xl bg-brand-800 text-brand-50 flex flex-col sm:flex-row sm:items-center gap-4">
            <GraduationCap className="w-8 h-8 text-champagne shrink-0" />
            <p className="flex-1 text-sm leading-relaxed">{a.coursesText}</p>
            <a href={coursesLink} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 bg-champagne hover:bg-champagne-light text-brand-950 px-5 py-2.5 rounded-full text-sm font-semibold transition-colors whitespace-nowrap">
              <MessageCircle className="w-4 h-4" /> Saber das turmas
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
