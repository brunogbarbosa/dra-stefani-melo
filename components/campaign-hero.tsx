'use client';

import Image from 'next/image';
import { useId } from 'react';
import { ArrowRight } from 'lucide-react';
import { appointmentUrl, site } from '@/data/site';
import { useCampaignMotion } from './use-campaign-motion';

const metrics = [
  { value: 'Seus traços', label: 'NOSSO PONTO DE PARTIDA' },
  { value: 'Seu tempo', label: 'CUIDADO EM CADA ETAPA' },
  { value: 'Sua essência', label: 'SEMPRE EM PRIMEIRO LUGAR' },
];

function SmileSeal() {
  const id = useId().replace(/:/g, '');
  return <div className="campaign-seal" role="img" aria-label="Beleza que respeita sua essência">
    <svg viewBox="0 0 180 180" fill="none" aria-hidden="true">
      <defs>
        <path id={`${id}-top`} d="M18 90a72 72 0 0 1 144 0"/>
        <path id={`${id}-bottom`} d="M12 90a78 78 0 0 0 156 0"/>
      </defs>
      <circle pathLength="1" cx="90" cy="90" r="54" stroke="currentColor" strokeWidth=".7"/>
      <text fill="currentColor" textAnchor="middle">
        <textPath href={`#${id}-top`} startOffset="50%">BELEZA SINGULAR</textPath>
      </text>
      <text fill="currentColor" textAnchor="middle">
        <textPath href={`#${id}-bottom`} startOffset="50%">SUA ESSÊNCIA</textPath>
      </text>
      <text x="90" y="108" textAnchor="middle" className="seal-monogram" fill="currentColor">sm.</text>
    </svg>
  </div>;
}

export function CampaignHero() {
  const motionRef = useCampaignMotion();
  return <section ref={motionRef} id="inicio" className="campaign" aria-labelledby="campaign-title">
    <div className="campaign-organic campaign-organic-one" aria-hidden="true"/>
    <div className="campaign-organic campaign-organic-two" aria-hidden="true"/>
    <div className="campaign-contour" aria-hidden="true"/>
    <div className="campaign-inner">
      <div className="campaign-copy">
        <p className="campaign-kicker">DRA. STEFANI MELO · ESTÉTICA FACIAL</p>
        <h1 id="campaign-title" aria-label="Beleza que respeita quem você é.">
          <span className="campaign-title-line"><span>BELEZA</span></span>
          <span className="campaign-title-line"><span>QUE RESPEITA</span></span>
          <span className="campaign-title-line"><span>QUEM VOCÊ É.</span></span>
        </h1>
        <p className="campaign-subtitle">Um olhar atento aos seus traços.<br/>Um cuidado que começa em você.</p>
        <div className="campaign-action"><a className="campaign-cta" href={appointmentUrl} target="_blank" rel="noreferrer"><span>AGENDAR AVALIAÇÃO</span><ArrowRight size={22} strokeWidth={1.2}/></a></div>
      </div>
      <figure className="campaign-portrait">
        <div className="campaign-silhouette"><Image className="campaign-original" src={site.images.hero} alt="Dra. Stefani Melo" fill preload sizes="(max-width:700px) 90vw, (max-width:1100px) 50vw, 48vw"/></div>
      </figure>
      <SmileSeal/>
      <p className="campaign-editorial">Natural<br/>em cada<br/>detalhe.<span aria-hidden="true"/></p>
      <div className="campaign-metrics" aria-label="Um cuidado centrado em você">
        {metrics.map(metric=><div className="campaign-metric" key={metric.value}><strong>{metric.value}</strong><span>{metric.label}</span></div>)}
      </div>
      <div className="campaign-signature"><span aria-hidden="true"/><div><p>DRA. STEFANI MELO</p><em>Estética Facial<br className="campaign-signature-break"/> para uma vida mais confiante.</em></div></div>
    </div>
  </section>;
}
