'use client';

import React, { useState, useEffect, useRef, useCallback } from 'react';
import { ZoomIn, Sparkles, Calendar } from 'lucide-react';
import { GalleryItem } from '@/types';
import { ScrollableFilterContainer } from '@/components/common/ScrollableFilterContainer';
import { useConsultation } from '@/context/ConsultationContext';

import { Fancybox } from '@fancyapps/ui';
import '@fancyapps/ui/dist/fancybox/fancybox.css';

interface FancyGalleryProps {
  onOpenBooking?: () => void;
}

export const FancyGallery: React.FC<FancyGalleryProps> = () => {
  const { openBooking } = useConsultation();
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const gridRef = useRef<HTMLDivElement>(null);

  const categories = [
    'All',
    'Anagrow Treatment',
    'Anagain Treatment',
    'Female hair transplant',
    'Non surgical',
    'Invasive Treatment',
  ];

  const items: GalleryItem[] = [
    // --- 1. ANAGROW TREATMENT (Female presentation) ---
    {
      id: 'anagrow-1',
      title: 'FPT-I Age 50-60 Yrs',
      subtitle: 'Anagrow Swiss Plant Stem Cell Protocol',
      category: 'Anagrow Treatment',
      image: '/images/gallery/Anagrow_presentation_female/Thumb/FPT-I-AGE50-60YRS.webp',
      fullImage: '/images/gallery/Anagrow_presentation_female/FPT-I-AGE50-60YRS.jpg',
      description: 'Anagrow Swiss plant stem cell hair regrowth for female pattern thinning',
    },
    {
      id: 'anagrow-2',
      title: 'FPT-I Age 30-40 Yrs',
      subtitle: 'Anagrow Swiss Plant Stem Cell Protocol',
      category: 'Anagrow Treatment',
      image: '/images/gallery/Anagrow_presentation_female/Thumb/FPT-I-AGE_30TO40YRS.webp',
      fullImage: '/images/gallery/Anagrow_presentation_female/FPT-I-AGE_30TO40YRS.jpg',
      description: 'Targeted hair follicle density revival through biological stem cell actives',
    },
    {
      id: 'anagrow-3',
      title: 'FPT-II Age 30-40 Yrs',
      subtitle: 'Anagrow Swiss Plant Stem Cell Protocol',
      category: 'Anagrow Treatment',
      image: '/images/gallery/Anagrow_presentation_female/Thumb/FPT-II-AGE30TO40YRS.webp',
      fullImage: '/images/gallery/Anagrow_presentation_female/FPT-II-AGE30TO40YRS.jpg',
      description: 'Crown densification and midline volume recovery in female pattern thinning',
    },
    {
      id: 'anagrow-4',
      title: 'FPT-II Age 40-50 Yrs',
      subtitle: 'Anagrow Swiss Plant Stem Cell Protocol',
      category: 'Anagrow Treatment',
      image: '/images/gallery/Anagrow_presentation_female/Thumb/FPT-II_AGE-40TO50YRS.webp',
      fullImage: '/images/gallery/Anagrow_presentation_female/FPT-II_AGE-40TO50YRS.jpg',
      description: 'Restoration of scalp coverage and hair follicle rejuvenation',
    },
    {
      id: 'anagrow-5',
      title: 'FPT-II Age 20-30 Yrs',
      subtitle: 'Anagrow Swiss Plant Stem Cell Protocol',
      category: 'Anagrow Treatment',
      image: '/images/gallery/Anagrow_presentation_female/Thumb/FPT_II-AGE-20-30YRS.webp',
      fullImage: '/images/gallery/Anagrow_presentation_female/FPT_II-AGE-20-30YRS.jpg',
      description: 'Early intervention for younger females experiencing thinning and widening',
    },
    {
      id: 'anagrow-6',
      title: 'FPT Pre-I Widening of Parting Age 20-30 Yrs',
      subtitle: 'Anagrow Swiss Plant Stem Cell Protocol',
      category: 'Anagrow Treatment',
      image: '/images/gallery/Anagrow_presentation_female/Thumb/FPT_PRE-I-WIDENING_OF_PARTING_AGE-20 _TO30YRS.webp',
      fullImage: '/images/gallery/Anagrow_presentation_female/FPT_PRE-I-WIDENING_OF_PARTING_AGE-20 _TO30YRS.jpg',
      description: 'Strengthening central partition density and halting miniaturization',
    },
    {
      id: 'anagrow-7',
      title: 'FPT Pre-I Widening of Parting Age 20-30 Yrs',
      subtitle: 'Anagrow Swiss Plant Stem Cell Protocol',
      category: 'Anagrow Treatment',
      image: '/images/gallery/Anagrow_presentation_female/Thumb/FPT_PRE-I-WIDENING_OF_PARTING_AGE-20 _TO30YRS_2nd.webp',
      fullImage: '/images/gallery/Anagrow_presentation_female/FPT_PRE-I-WIDENING_OF_PARTING_AGE-20 _TO30YRS_2nd.jpg',
      description: 'Midline partition stabilization and hair shaft thickening',
    },
    {
      id: 'anagrow-8',
      title: 'Very Early FPT Age 20-30 Yrs',
      subtitle: 'Anagrow Swiss Plant Stem Cell Protocol',
      category: 'Anagrow Treatment',
      image: '/images/gallery/Anagrow_presentation_female/Thumb/VERY_EARLY_FPT-AGE_20-30YRS.webp',
      fullImage: '/images/gallery/Anagrow_presentation_female/VERY_EARLY_FPT-AGE_20-30YRS.jpg',
      description: 'Early stage trichological recovery and preventative follicle nutrition',
    },
    {
      id: 'anagrow-9',
      title: 'Widening of Parting Age 20-30 Yrs',
      subtitle: 'Anagrow Swiss Plant Stem Cell Protocol',
      category: 'Anagrow Treatment',
      image: '/images/gallery/Anagrow_presentation_female/Thumb/WIDENING_OF_PARTING-AGE 20-30YRS.webp',
      fullImage: '/images/gallery/Anagrow_presentation_female/WIDENING_OF_PARTING-AGE 20-30YRS.jpg',
      description: 'Restoration of natural partition line width and density',
    },
    {
      id: 'anagrow-10',
      title: 'Widening of Parting Age 20-30 Yrs',
      subtitle: 'Anagrow Swiss Plant Stem Cell Protocol',
      category: 'Anagrow Treatment',
      image: '/images/gallery/Anagrow_presentation_female/Thumb/WIDENING_OF_PARTING-AGE 20-30YRS_2nd.webp',
      fullImage: '/images/gallery/Anagrow_presentation_female/WIDENING_OF_PARTING-AGE 20-30YRS_2nd.jpg',
      description: 'Comprehensive stem cell nourishment for robust hair strands',
    },

    // --- 2. ANAGAIN TREATMENT (Male presentation) ---
    {
      id: 'anagain-1',
      title: 'Advanced Diffuse Thinning',
      subtitle: 'Anagain Organic Pea Sprout Protocol',
      category: 'Anagain Treatment',
      image: '/images/gallery/AnagainPresentation_male/Thumb/ADVANCED_DIFFUSE_THINNING.webp',
      fullImage: '/images/gallery/AnagainPresentation_male/ADVANCED_DIFFUSE_THINNING.jpg',
      description: 'Clinical revival for widespread hair thinning across scalp zones',
    },
    {
      id: 'anagain-2',
      title: 'Advanced Stage Vertex',
      subtitle: 'Anagain Organic Pea Sprout Protocol',
      category: 'Anagain Treatment',
      image: '/images/gallery/AnagainPresentation_male/Thumb/ADVANCED_STAGE_VERTEX.webp',
      fullImage: '/images/gallery/AnagainPresentation_male/ADVANCED_STAGE_VERTEX.jpg',
      description: 'Crown vertex density reactivation and hair root stimulation',
    },
    {
      id: 'anagain-3',
      title: 'Advanced Thinning in Older Age Group',
      subtitle: 'Anagain Organic Pea Sprout Protocol',
      category: 'Anagain Treatment',
      image: '/images/gallery/AnagainPresentation_male/Thumb/ADVANCED_THINNING_IN_OLDER_AGE_GROUP.webp',
      fullImage: '/images/gallery/AnagainPresentation_male/ADVANCED_THINNING_IN_OLDER_AGE_GROUP.jpg',
      description: 'Age-appropriate scalp regeneration and follicle fortification',
    },
    {
      id: 'anagain-4',
      title: 'MPT-I Diffuse',
      subtitle: 'Anagain Organic Pea Sprout Protocol',
      category: 'Anagain Treatment',
      image: '/images/gallery/AnagainPresentation_male/Thumb/MPT-I_DIFFUSE.webp',
      fullImage: '/images/gallery/AnagainPresentation_male/MPT-I_DIFFUSE.jpg',
      description: 'Male pattern thinning stage I diffuse stabilization and density boost',
    },
    {
      id: 'anagain-5',
      title: 'MPT-I Diffuse',
      subtitle: 'Anagain Organic Pea Sprout Protocol',
      category: 'Anagain Treatment',
      image: '/images/gallery/AnagainPresentation_male/Thumb/MPT-I_DIFFUSE_2nd.webp',
      fullImage: '/images/gallery/AnagainPresentation_male/MPT-I_DIFFUSE_2nd.jpg',
      description: 'Reactivation of dermal papilla cells to initiate anagen hair growth',
    },
    {
      id: 'anagain-6',
      title: 'MPT-I Early Vertex',
      subtitle: 'Anagain Organic Pea Sprout Protocol',
      category: 'Anagain Treatment',
      image: '/images/gallery/AnagainPresentation_male/Thumb/MPT-I_EARLY_VERTEX.webp',
      fullImage: '/images/gallery/AnagainPresentation_male/MPT-I_EARLY_VERTEX.jpg',
      description: 'Early intervention for crown vertex miniaturization in male patients',
    },

    // --- 3. FEMALE HAIR TRANSPLANT ---
    {
      id: 'female-ht-1',
      title: 'FPT-I Age Group 20-30',
      subtitle: 'Precision Micro-FUE Hairline Restoration',
      category: 'Female hair transplant',
      image: '/images/gallery/Female_hair_transplant_result/Thumb/FPT-I-Age_group20to30.webp',
      fullImage: '/images/gallery/Female_hair_transplant_result/FPT-I-Age_group20to30.jpg',
      description: 'Natural artistic hairline design with single hair graft precision',
    },
    {
      id: 'female-ht-2',
      title: 'FPT-I Age Group 20-30 Yrs',
      subtitle: 'Precision Micro-FUE Hairline Restoration',
      category: 'Female hair transplant',
      image: '/images/gallery/Female_hair_transplant_result/Thumb/FPT-I-Age_group20to30yrs.webp',
      fullImage: '/images/gallery/Female_hair_transplant_result/FPT-I-Age_group20to30yrs.jpg',
      description: 'Feathered soft frontal hairline grafting with optimal angle alignment',
    },
    {
      id: 'female-ht-3',
      title: 'FPT-I Age Group 30-40',
      subtitle: 'Precision Micro-FUE Hairline Restoration',
      category: 'Female hair transplant',
      image: '/images/gallery/Female_hair_transplant_result/Thumb/FPT-I-Age_group30to40.webp',
      fullImage: '/images/gallery/Female_hair_transplant_result/FPT-I-Age_group30to40.jpg',
      description: 'Frontal zone densification with invisible donor extraction scars',
    },
    {
      id: 'female-ht-4',
      title: 'FPT-II Age Group 30-40 Yrs',
      subtitle: 'Precision Micro-FUE Hairline Restoration',
      category: 'Female hair transplant',
      image: '/images/gallery/Female_hair_transplant_result/Thumb/FPT-II-Age_gorup-30-40yrs.webp',
      fullImage: '/images/gallery/Female_hair_transplant_result/FPT-II-Age_gorup-30-40yrs.jpg',
      description: 'Mid-scalp and frontal hairline aesthetic reconstruction',
    },
    {
      id: 'female-ht-5',
      title: 'FPT-II Age Group 40-50 Yrs',
      subtitle: 'Precision Micro-FUE Hairline Restoration',
      category: 'Female hair transplant',
      image: '/images/gallery/Female_hair_transplant_result/Thumb/FPT-II-Age_group-40-50yrs.webp',
      fullImage: '/images/gallery/Female_hair_transplant_result/FPT-II-Age_group-40-50yrs.jpg',
      description: 'High-density graft placement matching natural female whorl patterns',
    },
    {
      id: 'female-ht-6',
      title: 'FPT-II Age Group 50-60 Yrs',
      subtitle: 'Precision Micro-FUE Hairline Restoration',
      category: 'Female hair transplant',
      image: '/images/gallery/Female_hair_transplant_result/Thumb/FPT-II-Age_group-50-60yrs.webp',
      fullImage: '/images/gallery/Female_hair_transplant_result/FPT-II-Age_group-50-60yrs.jpg',
      description: 'Mature hairline restoration with maximum graft viability',
    },
    {
      id: 'female-ht-7',
      title: 'FPT-II to III - 2 Sessions Done',
      subtitle: 'Precision Micro-FUE Hairline Restoration',
      category: 'Female hair transplant',
      image: '/images/gallery/Female_hair_transplant_result/Thumb/FPT-II_to-III–2_sessons_done.webp',
      fullImage: '/images/gallery/Female_hair_transplant_result/FPT-II_to-III–2_sessons_done.jpg',
      description: 'Two-stage procedural density restoration for extensive thinning',
    },
    {
      id: 'female-ht-8',
      title: 'Hairline Lowered Age 30-40 Yrs',
      subtitle: 'Aesthetic Forehead Hairline Lowering',
      category: 'Female hair transplant',
      image: '/images/gallery/Female_hair_transplant_result/Thumb/Hairline_loweredAge30to40yrs.webp',
      fullImage: '/images/gallery/Female_hair_transplant_result/Hairline_loweredAge30to40yrs.jpg',
      description: 'Surgical hairline reduction providing balanced facial proportions',
    },
    {
      id: 'female-ht-9',
      title: 'Hairline Lowered Age 20-30 Yrs',
      subtitle: 'Aesthetic Forehead Hairline Lowering',
      category: 'Female hair transplant',
      image: '/images/gallery/Female_hair_transplant_result/Thumb/Hairline_lowered_Age20to30yrs.webp',
      fullImage: '/images/gallery/Female_hair_transplant_result/Hairline_lowered_Age20to30yrs.jpg',
      description: 'Youthful aesthetic hairline lowering with natural micro-irregularities',
    },

    // --- 4. NON SURGICAL BEFORE & AFTER ---
    {
      id: 'non-surgical-1',
      title: 'FPT-II to III Age Group 40-50 Yrs',
      subtitle: 'Non-Surgical Hair Replacement System',
      category: 'Non surgical',
      image: '/images/gallery/Non_surgical_before_after/Thumb/FPT-II-to-III-Age_group40to50yrs.webp',
      fullImage: '/images/gallery/Non_surgical_before_after/FPT-II-to-III-Age_group40to50yrs.jpg',
      description: 'Seamless non-surgical hair integration with 100% natural virgin hair',
    },
    {
      id: 'non-surgical-2',
      title: 'MPT Stage IV Age Group 20-30 Years',
      subtitle: 'Non-Surgical Hair Replacement System',
      category: 'Non surgical',
      image: '/images/gallery/Non_surgical_before_after/Thumb/MPT_STAGE_IV_Age_group-20to30years.webp',
      fullImage: '/images/gallery/Non_surgical_before_after/MPT_STAGE_IV_Age_group-20to30years.jpg',
      description: 'Breathable dermal membrane base with undetectable hairline integration',
    },
    {
      id: 'non-surgical-3',
      title: 'MPT Stage IV Age Group 20-30 Years',
      subtitle: 'Non-Surgical Hair Replacement System',
      category: 'Non surgical',
      image: '/images/gallery/Non_surgical_before_after/Thumb/MPT_STAGE_IV_Age_group-20to30years_2nd.webp',
      fullImage: '/images/gallery/Non_surgical_before_after/MPT_STAGE_IV_Age_group-20to30years_2nd.jpg',
      description: 'Instant full crown transformation without downtime or surgical risks',
    },
    {
      id: 'non-surgical-4',
      title: 'MPT Stage IV Age Group 30-40 Years',
      subtitle: 'Non-Surgical Hair Replacement System',
      category: 'Non surgical',
      image: '/images/gallery/Non_surgical_before_after/Thumb/MPT_STAGE_IV_Age_group-30to40years.webp',
      fullImage: '/images/gallery/Non_surgical_before_after/MPT_STAGE_IV_Age_group-30to40years.jpg',
      description: 'Custom color-matched base designed for active lifestyle and swimming',
    },
    {
      id: 'non-surgical-5',
      title: 'MPT Stage IV Age Group 30-40 Years',
      subtitle: 'Non-Surgical Hair Replacement System',
      category: 'Non surgical',
      image: '/images/gallery/Non_surgical_before_after/Thumb/MPT_STAGE_IV_Age_group-30to40years_2nd.webp',
      fullImage: '/images/gallery/Non_surgical_before_after/MPT_STAGE_IV_Age_group-30to40years_2nd.jpg',
      description: 'Precision side-blending with patient’s existing biological hair',
    },
    {
      id: 'non-surgical-6',
      title: 'MPT Stage IV Age Group 40-50 Years',
      subtitle: 'Non-Surgical Hair Replacement System',
      category: 'Non surgical',
      image: '/images/gallery/Non_surgical_before_after/Thumb/MPT_STAGE_IV_Age_group-40to50years.webp',
      fullImage: '/images/gallery/Non_surgical_before_after/MPT_STAGE_IV_Age_group-40to50years.jpg',
      description: 'Age-appropriate density and hairline positioning for realistic aesthetics',
    },
    {
      id: 'non-surgical-7',
      title: 'MPT Stage IV Age Group 40-50 Years',
      subtitle: 'Non-Surgical Hair Replacement System',
      category: 'Non surgical',
      image: '/images/gallery/Non_surgical_before_after/Thumb/MPT_STAGE_IV_Age_group-40to50years_2nd.webp',
      fullImage: '/images/gallery/Non_surgical_before_after/MPT_STAGE_IV_Age_group-40to50years_2nd.jpg',
      description: 'Long-lasting polymer bonding ensuring security during all activities',
    },
    {
      id: 'non-surgical-8',
      title: 'MPT Stage VII Trendy Hair Style Age 20-30 Years',
      subtitle: 'Non-Surgical Hair Replacement System',
      category: 'Non surgical',
      image: '/images/gallery/Non_surgical_before_after/Thumb/MPT_STAGE_VII-Age_group20to30yearsTrendy_hair_style.webp',
      fullImage: '/images/gallery/Non_surgical_before_after/MPT_STAGE_VII-Age_group20to30yearsTrendy_hair_style.jpg',
      description: 'Contemporary textured hairstyle with complete scalp coverage for stage VII',
    },
    {
      id: 'non-surgical-9',
      title: 'MPT Stage VII Trendy Hair Style Age 20-30 Years',
      subtitle: 'Non-Surgical Hair Replacement System',
      category: 'Non surgical',
      image: '/images/gallery/Non_surgical_before_after/Thumb/MPT_STAGE_VII-Age_group20to30yearsTrendy_hair_style_2nd.webp',
      fullImage: '/images/gallery/Non_surgical_before_after/MPT_STAGE_VII-Age_group20to30yearsTrendy_hair_style_2nd.jpg',
      description: 'Ultra-thin Swiss lace perimeter allowing backward brushing styles',
    },
    {
      id: 'non-surgical-10',
      title: 'MPT Stage VII Trendy Hair Style Age 20-30 Years',
      subtitle: 'Non-Surgical Hair Replacement System',
      category: 'Non surgical',
      image: '/images/gallery/Non_surgical_before_after/Thumb/MPT_STAGE_VII-Age_group20to30yearsTrendy_hair_style_3rd.webp',
      fullImage: '/images/gallery/Non_surgical_before_after/MPT_STAGE_VII-Age_group20to30yearsTrendy_hair_style_3rd.jpg',
      description: 'Flawless side taper and crown integration with high density hair strands',
    },
    {
      id: 'non-surgical-11',
      title: 'MPT Stage VII Trendy Hair Style',
      subtitle: 'Non-Surgical Hair Replacement System',
      category: 'Non surgical',
      image: '/images/gallery/Non_surgical_before_after/Thumb/MPT_STAGE_VII_Trendy_hair_style.webp',
      fullImage: '/images/gallery/Non_surgical_before_after/MPT_STAGE_VII_Trendy_hair_style.jpg',
      description: 'Versatile styling freedom with heat-friendly human hair fibers',
    },
    {
      id: 'non-surgical-12',
      title: 'MPT Stage VI Age Group 20-30 Years',
      subtitle: 'Non-Surgical Hair Replacement System',
      category: 'Non surgical',
      image: '/images/gallery/Non_surgical_before_after/Thumb/MPT_STAGE_VI_Age_group20to30years.webp',
      fullImage: '/images/gallery/Non_surgical_before_after/MPT_STAGE_VI_Age_group20to30years.jpg',
      description: 'Comprehensive coverage for extensive male pattern hair loss',
    },
    {
      id: 'non-surgical-13',
      title: 'MPT Stage VI Blending of Hair at Back',
      subtitle: 'Non-Surgical Hair Replacement System',
      category: 'Non surgical',
      image: '/images/gallery/Non_surgical_before_after/Thumb/MPT_STAGE_VI_Blending_of_hair_at_back.webp',
      fullImage: '/images/gallery/Non_surgical_before_after/MPT_STAGE_VI_Blending_of_hair_at_back.jpg',
      description: 'Invisible occipital transition between natural hair and replacement system',
    },
    {
      id: 'non-surgical-14',
      title: 'Scalp Seen Through Base',
      subtitle: 'Non-Surgical Hair Replacement System',
      category: 'Non surgical',
      image: '/images/gallery/Non_surgical_before_after/Thumb/Scalp_seen_through_base.webp',
      fullImage: '/images/gallery/Non_surgical_before_after/Scalp_seen_through_base.jpg',
      description: 'Ultra-realistic micro-skin base showing authentic scalp transparency',
    },

    // --- 5. INVASIVE TREATMENT ---
    {
      id: 'invasive-1',
      title: 'Widening of Parting Age 20-30 Yrs',
      subtitle: 'Invasive Clinical Protocol',
      category: 'Invasive Treatment',
      image: '/images/gallery/Invasive_Treatment/Thumb/WIDENING_OF_PARTING-AGE_20-30YRS.webp',
      fullImage: '/images/gallery/Invasive_Treatment/WIDENING_OF_PARTING-AGE_20-30YRS.jpg',
      description: 'Targeted clinical intervention for widening of parting in young adults',
    },
    {
      id: 'invasive-2',
      title: 'Widening of Parting Age 20-30 Yrs',
      subtitle: 'Invasive Clinical Protocol',
      category: 'Invasive Treatment',
      image: '/images/gallery/Invasive_Treatment/Thumb/WIDENING_OF_PARTING-AGE_20-30YRS_2nd.webp',
      fullImage: '/images/gallery/Invasive_Treatment/WIDENING_OF_PARTING-AGE_20-30YRS_2nd.jpg',
      description: 'Advanced follicle stimulation and partition line restoration',
    },
  ];

  const filteredItems = selectedCategory === 'All'
    ? items
    : items.filter((item) => item.category === selectedCategory);

  // Initialize and re-initiate Masonry on mount, filter changes, image loads, and resize
  useEffect(() => {
    let msnryInstance: any = null;
    let imgLoadedInstance: any = null;
    let isCancelled = false;

    const initMasonry = async () => {
      if (typeof window === 'undefined' || !gridRef.current) return;

      try {
        const MasonryModule = await import('masonry-layout');
        const imagesLoadedModule = await import('imagesloaded');
        const Masonry = ((MasonryModule as any).default || MasonryModule) as any;
        const imagesLoaded = ((imagesLoadedModule as any).default || imagesLoadedModule) as any;

        if (isCancelled || !gridRef.current) return;

        // Initialize Masonry with responsive percentage positioning
        msnryInstance = new Masonry(gridRef.current, {
          itemSelector: '.masonry-item',
          columnWidth: '.masonry-sizer',
          percentPosition: true,
          transitionDuration: '0.25s',
          resize: true,
        });

        // Trigger immediate layout
        msnryInstance.layout();

        // Re-layout as each image finishes loading
        imgLoadedInstance = imagesLoaded(gridRef.current);
        imgLoadedInstance.on('progress', () => {
          if (!isCancelled && msnryInstance) {
            msnryInstance.layout();
          }
        });
        imgLoadedInstance.on('always', () => {
          if (!isCancelled && msnryInstance) {
            msnryInstance.layout();
          }
        });
      } catch (err) {
        console.error('Error initializing Masonry layout:', err);
      }
    };

    initMasonry();

    return () => {
      isCancelled = true;
      if (imgLoadedInstance && typeof imgLoadedInstance.off === 'function') {
        imgLoadedInstance.off('progress');
        imgLoadedInstance.off('always');
      }
      if (msnryInstance && typeof msnryInstance.destroy === 'function') {
        msnryInstance.destroy();
      }
    };
  }, [filteredItems]);

  // Initialize Fancybox on gallery anchors and rebind on filter changes
  useEffect(() => {
    Fancybox.bind('[data-fancybox="richfeel-gallery"]', {
      theme: 'dark',
      dragToClose: true,
      fadeEffect: true,
      zoomEffect: true,
      backdropClick: 'close',
    });

    return () => {
      Fancybox.unbind('[data-fancybox="richfeel-gallery"]');
      Fancybox.destroy();
    };
  }, [filteredItems]);

  return (
    <div className="py-6 sm:py-10 lg:py-12 bg-[#f6f9fc] min-h-screen">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        {/* Header: Visual-first, minimal, elegant */}
        <div className="max-w-2xl mb-6 sm:mb-8">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-blue-50 border border-blue-100 text-[#0a6ebd] text-[11px] sm:text-xs font-bold uppercase tracking-wider mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Visual Gallery</span>
          </div>
          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-black text-[#27448a] tracking-tight">
            Real Results &amp; Transformations
          </h1>
          <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
            Click any photo to open full-screen high-resolution view with zoom and navigation.
          </p>
        </div>

        {/* Categories Filter Pills */}
        <div className="mb-6 sm:mb-8">
          <ScrollableFilterContainer
            className="w-full sm:w-auto min-w-0"
            contentClassName="gap-2 p-1"
            bgColor="slate-tint"
          >
            {categories.map((cat) => {
              const count = cat === 'All' ? items.length : items.filter((i) => i.category === cat).length;
              const isActive = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-xl text-xs font-bold transition-all shrink-0 cursor-pointer inline-flex items-center gap-1.5 ${
                    isActive
                      ? 'bg-[#27448a] text-white shadow-md'
                      : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200/80'
                  }`}
                >
                  <span>{cat}</span>
                  <span
                    className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                      isActive ? 'bg-white/20 text-white' : 'bg-slate-100 text-slate-500'
                    }`}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </ScrollableFilterContainer>
        </div>

        {/* Responsive Masonry Grid or Empty State */}
        {filteredItems.length === 0 ? (
          <div className="text-center py-16 px-4 bg-white rounded-3xl border border-slate-200/80 shadow-xs max-w-lg mx-auto my-8">
            <div className="w-14 h-14 mx-auto rounded-2xl bg-blue-50 text-[#0a6ebd] flex items-center justify-center mb-3">
              <Sparkles className="w-7 h-7" />
            </div>
            <h3 className="text-base font-bold text-[#27448a]">
              Clinical Cases Coming Soon
            </h3>
            <p className="text-xs text-slate-500 mt-1.5 max-w-sm mx-auto leading-relaxed">
              High-resolution photo documentation for {selectedCategory} is being compiled and will be available shortly.
            </p>
          </div>
        ) : (
          <div ref={gridRef} className="masonry-container relative -mx-2 sm:-mx-3 clear-both">
            {/* Column Sizer for Masonry Calculation (1 col on mobile, 2 on sm, 3 on lg) */}
            <div className="masonry-sizer w-full sm:w-1/2 lg:w-1/3" />

            {filteredItems.map((item) => (
              <div
                key={item.id}
                className="masonry-item w-full sm:w-1/2 lg:w-1/3 p-2 sm:p-3 float-left"
              >
                <a
                  href={item.fullImage}
                  data-fancybox="richfeel-gallery"
                  data-caption={`<b>${item.title}</b> — <span style="opacity: 0.85">${item.category} · ${item.subtitle}</span>`}
                  style={{ cursor: 'zoom-in' }}
                  className="group block bg-white rounded-2xl overflow-hidden border border-slate-200/90 shadow-xs hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-zoom-in"
                >
                  {/* Photo Container: NO fixed aspect ratio, natural image height */}
                  <div className="relative overflow-hidden bg-slate-900 rounded-2xl" style={{ cursor: 'zoom-in' }}>
                    <img
                      src={item.image}
                      alt={item.title}
                      loading="lazy"
                      className="w-full h-auto block object-cover group-hover:scale-105 transition-transform duration-500"
                    />

                    {/* Lens-Plus Hover Overlay */}
                    <div className="absolute inset-0 z-20 flex items-center justify-center bg-black/30 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none backdrop-blur-[1px]">
                      <div className="w-12 h-12 rounded-full bg-white/95 text-[#27448a] shadow-2xl border border-white/60 flex items-center justify-center transform scale-75 group-hover:scale-100 transition-transform duration-300">
                        <ZoomIn className="w-5 h-5 stroke-[2.3]" />
                      </div>
                    </div>

                    {/* Minimal Bottom Vignette Gradient */}
                    <div className="absolute bottom-0 inset-x-0 h-24 bg-gradient-to-t from-black/85 via-black/40 to-transparent pointer-events-none" />

                    {/* Minimal Bottom Bar: Title & Tag in Flexbox */}
                    <div className="absolute bottom-0 inset-x-0 p-3 sm:p-3.5 z-10 flex items-center justify-between gap-2.5">
                      <h3 className="text-xs sm:text-sm font-bold text-white group-hover:text-cyan-200 transition-colors drop-shadow-sm leading-snug truncate flex-1 min-w-0">
                        {item.title}
                      </h3>
                      <span className="px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md text-white text-[10px] sm:text-[11px] font-semibold border border-white/15 whitespace-nowrap shrink-0 shadow-xs">
                        {item.category}
                      </span>
                    </div>
                  </div>
                </a>
              </div>
            ))}
          </div>
        )}

        {/* Minimal Bottom Assessment CTA */}
        <div className="mt-10 sm:mt-14 bg-gradient-to-r from-[#27448a] to-[#0a6ebd] rounded-2xl sm:rounded-3xl p-4 sm:p-8 lg:p-10 text-white shadow-lg flex flex-col md:flex-row items-center justify-between gap-4 sm:gap-6">
          <div className="space-y-1.5 text-center md:text-left max-w-xl">
            <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-[#4ecdc4] block">
              In-Clinic Consultation · Vadodara
            </span>
            <h3 className="text-lg sm:text-2xl font-black text-white">
              Start Your Hair Transformation
            </h3>
            <p className="text-xs sm:text-sm text-cyan-100 leading-relaxed">
              Book a digital Trichogram scalp assessment with certified trichologists at Marvel Square, Sunpharma Road.
            </p>
          </div>

          <button
            onClick={() => openBooking('Gallery Page Consultation')}
            className="w-full sm:w-auto px-5 py-3 sm:px-8 sm:py-3.5 rounded-xl bg-white text-[#27448a] font-black text-xs sm:text-sm shadow-md hover:bg-cyan-50 hover:scale-105 active:scale-95 transition-all cursor-pointer whitespace-nowrap inline-flex items-center justify-center gap-2 shrink-0"
          >
            <Calendar className="w-4 h-4 text-[#0a6ebd]" />
            <span>Book In-Clinic Assessment</span>
          </button>
        </div>
      </div>
    </div>
  );
};
