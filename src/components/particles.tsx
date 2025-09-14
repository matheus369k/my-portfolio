'use client'

import { tsParticles, type IShape, type RecursivePartial, type ShapeData } from '@tsparticles/engine'
import { loadLinksPreset } from '@tsparticles/preset-links'
import { useEffect } from 'react'

export function ParticlesCanvas() {
  useEffect(()=>{
    const initParticles = async ()=>{
      await loadLinksPreset(tsParticles)

      await tsParticles.load({
        id: "tsparticles",
        options:{
          fullScreen: { 
            zIndex: -100, 
            enable: true, 
          },
          particles: {
            color: {
              value: "#2563eb",
            },
            opacity: {
              value: 0.1,
            },
            number: { 
              value: 35, 
            },
            move: {
              enable: true, 
              speed: 1,
            },
            size: {
              value: 2,
            },
            links: {
              enable: true,
              distance: 150,
              color: "#2563eb",
              opacity: 0.2,
              width: 1,
              blink: true,
              consent: true,
            },
          },
          background: {
            color: {
              value: 'transparent' 
            },
          },
          detectRetina: true,
          preset: "links",
        },
      });
    }    

    initParticles()
  },[])

  return <div id='tsparticles' style={{position: 'fixed'}} />
}