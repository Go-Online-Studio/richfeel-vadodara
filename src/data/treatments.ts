import { Treatment } from '../types';

export const treatmentsData: Treatment[] = [
  {
    id: 'tst-plus',
    slug: 'tst-plus',
    title: 'TST+',
    category: 'Scalp Therapy',
    tagline: 'First time in India - A Revolutionary Patented Technique from Austria',
    countryOfOrigin: 'Austria',
    technology: 'Dr. Vodder Austrian Manual Lymphatic Drainage (MLD) & Tricho Active Therapy',
    description: 'First time in India: A revolutionary patented technique from Austria. TST+ is a 3-step programme engineered to ensure complete control over hair loss.',
    image: 'https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&w=800&q=80',
    badge: 'Austrian MLD Tech',
    conditions: ['Hair Fall', 'Scalp Congestion', 'Thinning Roots'],
    what: 'Richfeel TST+ (Tricho Scalp Treatment Plus) is a revolutionary patented programme from Austria, brought to India by pioneer trichologists Dr. Apoorva Shah & Dr. Sonal Shah. It is a comprehensive 3-step clinical programme designed to control active hair loss, detoxify the scalp, and strengthen the hair follicle and shaft.',
    why: 'Hair loss occurs due to a combination of external and internal factors: pollution, improper diet, fashion & heat styling, chemical treatments, and internal health disorders (Anaemia, Thyroid, Post-Pregnancy). TST+ combines clinical trichological diagnosis, Austrian Manual Lymphatic Drainage (MLD) by Dr. Emil Vodder, high-frequency disinfection, and specialized in-clinic hair diet to halt hair loss at its root.',
    beforeAfter: 'Within 3 to 4 clinical sessions, patients experience a dramatic 60-70% decline in active daily shedding. By the 8th session, follicular anchorage is solidified and new baby vellus hairs transition into stronger terminal hairs.',
    howDiagnose: 'Diagnosed via Digital Capilloscopy to examine micro-lymphatic pooling and sebum blockage, coupled with a Trichogram to assess the Anagen/Telogen (A/T) ratio.',
    preTreatment: [
      'Wash hair with a gentle pH-balanced shampoo 24 hours prior',
      'Avoid heavy cosmetic hair oils or gels on the morning of the procedure',
      'Stay well-hydrated to aid lymphatic circulation'
    ],
    duringProcedure: [
      'Step 1: Thorough diagnostic consultation including Tricho Analysis (Trichogram), digital Capilloscopy, and follicular count mapping',
      'Step 1 (cont.): Prescription of personalized internal food supplements matched to the patient health profile',
      'Step 2: High frequency (HF) scalp disinfection and sterilization',
      'Step 2 (cont.): Photo-Bio Therapy cold laser application to stimulate follicle cellular respiration',
      'Step 2 (cont.): Application of TST Root Rx & Hair Repair Serum for structural shaft fortification',
      'Step 2 (cont.): Austrian Manual Lymphatic Drainage (MLD) technique pioneered by Dr. Emil Vodder for deep lymphatic detoxification',
      'Step 2 (cont.): Serving of specialized in-clinic Hair Diet to nourish active follicles',
      'Step 3: Complimentary provision of Free Home Care Kit Shaft Rx for sustained at-home therapy'
    ],
    postTreatment: [
      'Avoid harsh chemical coloring or bleaching for 48 hours',
      'Continue prescribed daily tricho-active oral supplements',
      'Protect scalp from intense sun exposure and heavy helmet sweat for 24 hours'
    ],
    benefits: [
      'Strengthens hair follicles and root anchors',
      'Protects hair shaft & follicles from environmental damage',
      'Disinfects, detoxifies & rejuvenates scalp lymphatic circulation',
      'Includes Free Home Care Kit Shaft Rx for at-home application',
    ]
  },
  {
    id: 'anagrow',
    slug: 'anagrow',
    title: 'Richfeel Anagrow',
    category: 'Hair Restoration',
    tagline: 'World\'s First Hair Thinning Treatment With Plant Stem Cell Extracts (PCT Rejuve MAX)',
    countryOfOrigin: 'Switzerland & Italy',
    technology: 'PCT Rejuve MAX (Swiss Apple, Argan, Pea Sprout, Nano-Lipobelle Q10) & RF Anagain 10X Transdermal Machine',
    description: 'World\'s first plant stem cell hair thinning treatment (PCT Rejuve MAX) developed with Swiss scientist Dr. Fred Zülli and Italian biomedical engineers Dr. Ferrari.',
    image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=800&q=80',
    badge: 'Patented Stem Cell',
    conditions: ['Hair Thinning', 'Decreased Density', 'Lack of Growth', 'Scanty Hair'],
    what: 'Richfeel Anagrow is the world\'s first hair thinning treatment powered by Plant Stem Cell Extracts (PCT Rejuve MAX). Developed in scientific collaboration with Swiss scientist Dr. Fred Zülli (Mibelle Group Biochemistry, Switzerland) and Italian biomedical engineers Dr. Ferrari & Dr. Beatrix Ferrari (Milan, Italy), it fights all 5 signs of thinning hair without needles or surgery.',
    why: 'The answer to hair thinning lies in stem cells: Epidermal stem cells in the outer root sheath stimulate shaft growth and delay aging, while Dermal stem cells in the dermal papilla and hair bulge regenerate new follicles. PCT Rejuve MAX revitalizes both niches with Swiss Apple, Argan Tree stem cells, Pea Sprout extracts, and Nano-Lipobelle Q10 nano-emulsions. The RF Anagain 10X transdermal machine uses Detoxification, Rejuvenation, and Vascularization to drive these bio-actives deep into the scalp.',
    beforeAfter: 'Noticeable reduction in scalp visibility and increased hair shaft diameter within 8-12 weeks. Clinical studies confirm a 35% increase in hair density and rejuvenation of dormant follicles.',
    howDiagnose: 'Diagnosed using Follicular Count Test to measure follicular unit density per square cm, and Capilloscopy to verify dormant follicle patency.',
    preTreatment: [
      'Ensure the scalp is cleanly washed and dry prior to session',
      'Avoid applying topical minoxidil or leave-in serums on treatment day',
      'Do not perform chemical smoothening or straightening 1 week prior'
    ],
    duringProcedure: [
      'Phase 1 - Detoxification: Gentle vacuum-assisted lymphatic drainage to clear sebum plugs and prepare follicle entry points',
      'Phase 2 - Rejuvenation: Non-invasive RF electroporation driving PCT Rejuve MAX (Swiss Apple, Argan, Pea Sprout) directly into the follicle stem cell niche',
      'Phase 3 - Vascularization: Micro-vascular capillary expansion to surge oxygen, amino acids, and nutrients to awakened roots',
      'Post-treatment bio-protective serum application to seal transdermal channels'
    ],
    postTreatment: [
      'Do not wash hair for at least 12 hours after the session',
      'Avoid high-heat sauna or steam rooms for 24 hours',
      'Maintain weekly or bi-weekly session schedule as mapped by the doctor'
    ],
    benefits: [
      'World\'s first hair thinning treatment with plant stem cell extracts (PCT Rejuve MAX)',
      'Swiss Apple Stem Cells (Uttwiler Spätlauber) proven to produce +80% stem cell colony growth',
      'Moroccan Argan Tree Stem Cells to regenerate deep dermal papilla stem cells',
      'Pea Sprout Extracts stimulating Noggin signal molecules to prolong the Anagen growth cycle',
      '100% painless, needle-free transdermal delivery via RF Anagain 10X (Milan, Italy)',
      'Fights all 5 signs: scanty hair, volume loss, slow growth, low density, shedding'
    ]
  },
  {
    id: 'hair-transplant',
    slug: 'hair-transplant',
    title: 'AHI Hair Transplant',
    category: 'Hair Restoration',
    tagline: 'Surgical Procedure for Irreversible Baldness from Ailesbury, UK',
    countryOfOrigin: 'United Kingdom',
    technology: 'Ailesbury UK Aesthetic Implantation (No Cuts, No Stitches, No Scars)',
    description: 'Award-winning UK procedure under local anesthesia. Natural hairline design with lifetime permanent follicular growth.',
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=800&q=80',
    badge: 'Ailesbury UK Tech',
    conditions: ['Irreversible Baldness', 'Male Pattern Baldness', 'Receding Hairline'],
    what: 'The Aesthetic Hair Transplant from Ailesbury Hair Clinic, UK is a surgical hair restoration procedure awarded "The Most Innovative Medical Procedure" in the UK at the London My Face My Body Awards. It extracts individual healthy donor units and implants them at biological angles with zero scalp incisions, scalpel cuts, or linear scarring.',
    why: 'Traditional strip (FUT) transplants leave an unsightly horizontal scar across the donor scalp and require prolonged healing. The Ailesbury method achieves maximum follicle survival (95%+) with zero visible marks and a bespoke artistic hairline designed for your facial geometry.',
    beforeAfter: 'Full healing of micro-punches occurs within 7 days. Transplanted follicles enter a natural resting phase and begin permanent, lifelong vigorous growth from Month 3 to Month 12.',
    howDiagnose: 'Comprehensive Trichogram & Donor Density Assessment under magnification to verify donor bank reserves at the occipital region.',
    preTreatment: [
      'Discontinue blood-thinning supplements 7 days prior with physician advice',
      'Avoid alcohol and smoking for 72 hours prior to the procedure',
      'Wear a button-down shirt on surgery day to avoid pulling over the head'
    ],
    duringProcedure: [
      'Precision hairline artistic mapping under trichological supervision',
      'Local anesthesia administration ensuring a comfortable, pain-free 6-8 hour session',
      'Micro-motor extraction of individual follicular grafts',
      'Implantation at physiological 40-45 degree natural hair angles',
      'Immediate post-procedure antiseptic dressing and cold compression'
    ],
    postTreatment: [
      'Sleep with head elevated at a 45-degree angle for the first 3 nights',
      'Use provided saline spray every 2 hours to keep grafts hydrated',
      'Wash hair on Day 4 only according to our surgical nurse instructions'
    ],
    benefits: [
      'Zero cuts, stitches, or linear scalpel scars',
      'Completely natural density and feathered hairline contour',
      'Permanent lifetime hair growth utilizing DHT-resistant donor roots',
      'Single day 6-8 hour outpatient procedure'
    ]
  },
  {
    id: 'non-surgical-hair-system',
    slug: 'non-surgical-hair-system',
    title: 'Non-Surgical Hair System',
    category: 'Hair Restoration',
    tagline: 'Revolutionary Swiss Lace System for Irreversible Baldness',
    countryOfOrigin: 'Switzerland',
    technology: 'Swiss Lace System with Micro-Permeable Derma Base',
    description: 'Breathable second-skin Swiss derma base for advanced baldness. Swim, brush, and live actively with zero restrictions.',
    image: 'https://images.unsplash.com/photo-1585747860715-2ba37e788b70?auto=format&fit=crop&w=800&q=80',
    badge: 'Instant Natural Density',
    conditions: ['Advanced Baldness', 'Alopecia Totalis', 'Large Area Thinning'],
    what: 'The Swiss Lace Non-Surgical Hair System is an advanced cosmetic hair restoration solution crafted with a micro-thin, permeable biological derma membrane imported from Switzerland. High-grade natural human hair is hand-tied follicle-by-follicle into a breathable base that feels like a natural second skin.',
    why: 'When donor hair reserves are depleted or medical conditions prevent surgery, this non-surgical system offers instant, 100% natural cosmetic density. It allows total freedom to shampoo, swim, exercise, and style hair without detection.',
    beforeAfter: 'Instant transformation within a 90-minute clinic fitting session. Complete hairline and crown volume restoration that undetectable even upon close inspection.',
    howDiagnose: 'Digital scalp contour mapping, hair shade matching, caliber assessment, and scalp sensitivity profiling at our Vadodara clinic.',
    preTreatment: [
      'Consultation with our hair system stylist to match color, curl, and density',
      'Scalp cleansing and perimeter mapping',
      'Skin allergy patch test for medical-grade bonding adhesive'
    ],
    duringProcedure: [
      'Scalp preparation and anti-fungal biological barrier application',
      'Custom trimming and sizing of the Swiss Lace derma membrane',
      'Medical-grade bonding with biological hypo-allergenic derma-adhesives',
      'Artistic haircut, blending, and styling to match existing side/back hair'
    ],
    postTreatment: [
      'Routine maintenance service every 4 to 6 weeks at Richfeel Vadodara',
      'Use sulfate-free nourishing shampoo and hair serum',
      'Swim, shower, and exercise with absolute confidence'
    ],
    benefits: [
      'Micro-permeable base that lets your scalp breathe naturally',
      'Feels weightless and just like your own natural skin',
      'Allows regular active lifestyle: swimming, helmet wear, and sports',
      'Immediate same-day cosmetic transformation'
    ]
  },
  {
    id: 'advanced-prp',
    slug: 'advanced-prp',
    title: 'Advanced PRP (Biotin Enriched)',
    category: 'Hair Restoration',
    tagline: 'Autologous Platelet-Rich Plasma Infused with Biotin',
    technology: 'Double-Spin Centrifugation with Micronized Biotin Synergy',
    description: 'Autologous concentrated platelets enriched with Biotin to stimulate keratin synthesis, thicken roots, and hair loss.',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80',
    badge: 'Biotin Enriched',
    conditions: ['Hair Loss', 'Thinning Hair', 'Weak Roots'],
    what: 'Advanced PRP is an autologous regenerative therapy where a small sample of your own blood is processed through specialized double-spin centrifugation to isolate concentrated platelets. At Richfeel, this platelet matrix is uniquely fortified with medical-grade Biotin (Vitamin B7) before micro-application into the scalp.',
    why: 'Platelets contain concentrated growth factors (PDGF, VEGF, TGF-beta) that trigger stem cells in the hair bulge. Adding Biotin provides the direct enzymatic cofactor required for keratin protein formation, doubling the clinical response rate.',
    beforeAfter: 'Hair shedding reduces within 3 weeks. Progressive shaft thickening and reduction in empty follicular openings become evident over 3 to 6 monthly sessions.',
    howDiagnose: 'Baseline blood test evaluation and Trichogram to quantify the percentage of miniaturized telogen hairs.',
    preTreatment: [
      'Drink at least 2 liters of water on the day before the session',
      'Avoid NSAID painkillers (ibuprofen, aspirin) for 5 days prior',
      'Wash scalp with a clean antiseptic shampoo on appointment morning'
    ],
    duringProcedure: [
      'Safe, painless venous blood draw (approximately 20-30ml)',
      'Dual-spin centrifugation to harvest pure golden platelet-rich plasma',
      'Enrichment with sterile pharmaceutical-grade Biotin solution',
      'Application of topical numbing spray for complete comfort',
      'Micro-infusion across thinning crown and hairline zones'
    ],
    postTreatment: [
      'Avoid heavy gym workouts or vigorous sweating for 24 hours',
      'Do not wash hair until the next morning',
      'Avoid touching or scratching treated scalp areas'
    ],
    benefits: [
      '100% autologous biological therapy with zero risk of rejection',
      'Enriched with Biotin for amplified keratin hair synthesis',
      'Clinically thickens diameter of existing hair shafts',
      'Stimulates micro-capillary vascularity around hair roots'
    ]
  },
  {
    id: 'advanced-gfc',
    slug: 'advanced-gfc',
    title: 'Advanced Exosome GFC',
    category: 'Hair Restoration',
    tagline: 'Next-Generation Engineered Growth Factor Concentrate',
    technology: 'A cellular High-Yield Recombinant Vacuum Tube Extraction',
    description: 'A cellular growth factor matrix that prolongs the anagen growth phase and delays catagen regression.',
    image: 'https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=800&q=80',
    badge: 'Next-Gen Regenerative',
    conditions: ['Male Pattern Thinning (MPT)', 'Female Pattern Thinning (FPT)', 'Diffuse Shedding'],
    what: 'Growth Factor Concentrate (GFC) represents the latest milestone in regenerative trichology, advancing beyond traditional PRP. Utilizing specialized pre-treated vacuum tubes, platelets are completely activated to release high concentrations of PDGF, VEGF, EGF, and IGF-1, while completely filtering out red and white blood cells.',
    why: 'Because GFC is completely a cellular (free from inflammatory RBCs and WBCs), it produces zero pain, zero burning, and virtually no post-procedure swelling. The pure concentration of growth factors is up to 5 times higher than conventional PRP.',
    beforeAfter: 'Noticeable reduction in hair loss within 2 sessions; significant improvement in follicle caliber, hairline stability, and crown density by 3 to 4 months.',
    howDiagnose: 'Detailed Capilloscopy and Follicular Count Test to map follicle unit distributions.',
    preTreatment: [
      'Stay well hydrated with 2-3 liters of water on procedure day',
      'Avoid smoking, alcohol, and blood-thinners for 3 days prior',
      'Eat a nutritious meal before your clinic visit'
    ],
    duringProcedure: [
      'Blood collection into proprietary GFC activator vacuum tubes',
      'Incubation at controlled temperature to prompt pure growth factor release',
      'Centrifugation to separate pure, crystal-clear GFC serum',
      'Virtually painless micro-delivery into affected dermal areas'
    ],
    postTreatment: [
      'Resume regular activities immediately with zero downtime',
      'Wait 12-24 hours before your first hair wash',
      'Maintain adequate dietary protein and zinc intake'
    ],
    benefits: [
      'Pure a cellular formulation with zero pain or burning',
      '5x higher concentration of essential hair growth factors',
      'Significantly prolongs the active Anagen growth cycle',
      'Highly effective for both male and female genetic thinning'
    ]
  },
  {
    id: 'ana-d-tox',
    slug: 'ana-d-tox',
    title: 'Richfeel Ana-d-tox',
    category: 'Scalp Therapy',
    tagline: 'Break-Free From The Guilt Of Hair Colour Damage · Power THP from USA',
    countryOfOrigin: 'USA',
    technology: 'Power THP Formula (Hydrolyzed Quinoa, Barley & Wheat Proteins) & RF Anagain 10X',
    description: 'For coloured hair with Power THP from USA. Protects and repairs hair and scalp damage, locks in vibrant colour, and increases color retention by 20%. "ana-d-tox chaar baar, colour karo baar baar."',
    image: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=800&q=80',
    badge: 'Power THP USA',
    conditions: ['Chemical Color Damage', 'Frizzy Dry Hair', 'Split Ends', 'Itchy Scalp'],
    what: 'Introduced in India by Richfeel, Ana-d-tox is a clinical restorative treatment for coloured and chemically processed hair featuring Power THP formulation directly from the USA. It contains an advanced synergy of hydrolyzed Quinoa, Barley, and Wheat proteins that neutralizes chemical oxidation, seals damaged cuticles, and restores high-definition vibrancy.',
    why: 'Hair colouring uses ammonia to swell open cuticle scales and hydrogen peroxide to bleach natural melanin, leaving hair brittle and frizzy while toxic chemical residues (PPD, Ammonia, Resorcinol, Coal Tar) inflame the scalp. Ana-d-tox protects you: "ana-d-tox chaar baar, colour karo baar baar." Quinoa seals cuticles (+20% colour retention), Barley shields against heat & UV, and Wheat restores cortex elasticity.',
    beforeAfter: 'Instant restoration of hair silkiness and gloss immediately after the first session. Split ends and breakage are curtailed by up to 80% after completing the 4-session cycle.',
    howDiagnose: 'Microscopic hair shaft porosity evaluation and scalp barrier moisture testing under high magnification.',
    preTreatment: [
      'Schedule ideally 2-3 days prior to your planned hair coloring or immediately after',
      'Arrive with untangled, dry hair'
    ],
    duringProcedure: [
      'Step 1: Cuticle conditioning and protective scalp barrier application to shield against chemical dye burns',
      'Step 2: Deep transdermal penetration of Power THP proteins using the RF Anagain 10X Miracle Machine',
      'Step 3: Scalp detoxification and neutralization of residual PPD, ammonia, and chemical oxidation residues',
      'Step 4: Power THP gloss sealing to flatten cuticles, lock in pigments, and impart mirror-like shine'
    ],
    postTreatment: [
      'Use color-safe shampoo recommended by Richfeel',
      'Avoid high-temperature flat irons for 48 hours',
      'Repeat before or after each major chemical coloring session'
    ],
    benefits: [
      'Increases hair color retention by +20% and color uptake by +25%',
      'Hydrolyzed Quinoa protein repairs split ends and seals cuticle cracks',
      'Hydrolyzed Barley protein provides high-temperature heat styling and UV defense',
      'Hydrolyzed Wheat protein deeply hydrates the cortex and restores elastic bounce',
      'Neutralizes toxic PPD, ammonia, and peroxide residues to prevent scalp chemical burns',
      'Signature clinical assurance: "ana-d-tox chaar baar, colour karo baar baar"'
    ]
  },
  {
    id: 'laser-hair-reduction',
    slug: 'laser-hair-reduction',
    title: 'Laser Hair Reduction 2.0 (ICE CUBE)',
    category: 'Skin Aesthetics',
    tagline: 'Freedom From Unwanted Hair with Cool Brush Technology',
    technology: 'RF ICE CUBE 2.0 with Dynamic Cool Brush & Large Spot Size',
    description: 'Painless, continuous gliding laser with large spot size. Achieves up to 90% permanent hair reduction safely across Indian skin.',
    image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=800&q=80',
    badge: 'ICE CUBE 2.0',
    conditions: ['Unwanted Body Hair', 'Ingrown Hair', 'Folliculitis', 'Facial Hair'],
    what: 'Richfeel ICE CUBE 2.0 represents the new generation of laser hair reduction. Using a large spot size and gliding in-motion technique combined with integrated Cool Brush contact chilling, it safely targets hair follicle melanin to disable hair roots without burning the epidermis.',
    why: 'Unlike outdated, painful single-shot laser machines, ICE CUBE 2.0 delivers rapid pulses while maintaining skin surface temperature near 0°C. This makes sessions virtually painless, reduces treatment time by 50%, and completely eliminates ingrown hairs and strawberry legs.',
    beforeAfter: 'Noticeable reduction in hair density and thickness after just 1 session. Up to 90% permanent reduction achieved after a standard 6 to 8 session package.',
    howDiagnose: 'Skin Fitzpatrick typing and hair follicle coarseness assessment by our certified cosmetologist at Vadodara.',
    preTreatment: [
      'Shave the target area 24 hours prior to your session (do not wax, pluck, or thread)',
      'Avoid sunbathing, tanning, or chemical peels 1 week prior',
      'Keep skin clean and free of moisturizers or deodorants on session day'
    ],
    duringProcedure: [
      'Skin sanitization and skin sensitivity parameter configuration',
      'Application of chilled hypoallergenic ultrasound coupling gel',
      'Rapid gliding in-motion passes of the ICE CUBE 2.0 handpiece',
      'Instant Cool Brush skin soothing and ice cooling',
      'Application of soothing post-laser aloe-calming moisturizer and sunscreen'
    ],
    postTreatment: [
      'Avoid hot water baths, saunas, and intense workouts for 24 hours',
      'Apply SPF 50 sunscreen daily on exposed treated areas',
      'Do not wax or thread between sessions; only shave if needed'
    ],
    benefits: [
      'Virtually painless with Cool Brush contact skin freezing',
      'Up to 90% permanent hair reduction across full body and face',
      'Permanently eliminates painful ingrown hairs and razor bumps',
      'Calibrated for safe, burn-free treatment across Indian skin types'
    ]
  },
  {
    id: 'advance-hydra-facial',
    slug: 'advance-hydra-facial',
    title: 'Advanced Hydra Facial',
    category: 'Skin Aesthetics',
    tagline: 'Multi-Step Clinical Hydration & Dermal Resurfacing',
    technology: 'Vortex Dermal Infusion & Vacuum Extraction Technology',
    description: 'Combines medical exfoliation, deep pore extraction, intense hydration, and clinical super-serums for an immediate glow.',
    image: 'https://images.unsplash.com/photo-1512290900672-1f5be572d4ff?auto=format&fit=crop&w=800&q=80',
    badge: 'Instant Glow & Hydration',
    conditions: ['Dull Skin', 'Clogged Pores', 'Uneven Skin Tone', 'Early Wrinkles'],
    what: 'Advanced Hydra Facial is a clinical medical-grade facial that combines non-invasive mechanical exfoliation, deep vortex vacuum pore extraction, and high-pressure antioxidant serum infusion to rejuvenate facial skin.',
    why: 'Environmental pollution in industrial cities like Vadodara clogs facial pores and oxidizes dermal collagen. Hydra Facial cleanses sebum plugs, extracts blackheads painlessly, and drenches the skin in hyaluronic acid and peptides for an immediate luminous red-carpet radiance.',
    beforeAfter: 'Instant bridal glow immediately upon completing the 45-minute procedure. Complexion appears noticeably brighter, pores look tightened, and texture feels silky smooth with zero downtime.',
    howDiagnose: 'Digital dermal hydration mapping and sebum level assessment by our cosmetologist.',
    preTreatment: [
      'Discontinue retinol or exfoliating acids 3 days prior',
      'Avoid facial waxing or threading 48 hours prior'
    ],
    duringProcedure: [
      'Exfoliation and dead skin resurfacing',
      'Gentle glycolic/salicylic peeling solution to loosen pore congestion',
      'Vortex vacuum extraction of stubborn blackheads and sebum',
      'Targeted infusion of super serums containing hyaluronic acid and antioxidants',
      'LED photo-rejuvenation therapy to calm redness and boost collagen'
    ],
    postTreatment: [
      'Avoid makeup for at least 12 hours to let super serums absorb',
      'Apply broad-spectrum sunscreen daily',
      'Enjoy your fresh radiant glow immediately'
    ],
    benefits: [
      'Zero downtime with immediate visible luminous glow',
      'Painless vacuum extraction of stubborn blackheads',
      'Deep hydration and fine line smoothing',
      'Tailored serum cocktails for sensitive, dry, or oily skin'
    ]
  },
  {
    id: 'medi-facial',
    slug: 'medi-facial',
    title: 'Medi-Facial (Richfeel Naturals)',
    category: 'Skin Aesthetics',
    tagline: 'Doctor-Formulated Clinical Facial with Natural Actives',
    technology: 'Physician Formulated Richfeel Naturals Active Formulations',
    description: 'Tailored clinical facial formulated by India\'s leading beauty physicians. Infuses medicinal actives for balanced cellular restoration.',
    image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=800&q=80',
    badge: 'Physician Formulated',
    conditions: ['Dehydrated Skin', 'Tired Aging Skin', 'Rough Texture'],
    what: 'Medi-Facial is a physician-designed dermatological therapy utilizing the celebrated Richfeel Naturals clinical facial kits. Formulated by India\'s leading aesthetic physicians, it balances pharmaceutical-grade actives with soothing natural botanicals.',
    why: 'Unlike generic salon facials which use synthetic perfumes and cause breakouts, our Medi-Facial is customized to your exact clinical skin sensitivity. It restores the damaged skin lipid mantle, boosts cellular hydration, and leaves a youthful, refreshed glow.',
    beforeAfter: 'Calms inflamed skin, balances surface oiliness, and imparts a dewy, revitalized texture lasting weeks.',
    howDiagnose: 'Skin type analysis (sebum, hydration, sensitivity) conducted prior to treatment.',
    preTreatment: [
      'Inform the physician of any known skin allergies or active skin rashes',
      'Arrive with a clean face free of heavy foundation'
    ],
    duringProcedure: [
      'Deep medical cleansing with botanically active cleansers',
      'Enzymatic micro-exfoliation to remove dead surface keratin',
      'Lymphatic facial drainage massage using therapeutic botanical elixirs',
      'Application of customized Richfeel Naturals active mask',
      'Intense barrier replenishment and sun protection application'
    ],
    postTreatment: [
      'Wash face with lukewarm water only on the first evening',
      'Drink plenty of water to maintain skin hydration',
      'Use gentle moisturizer prescribed by our cosmetologist'
    ],
    benefits: [
      'Formulated by India’s leading beauty physicians',
      'Hypoallergenic and safe for highly reactive skin types',
      'Imparts lasting deep moisture and cellular relaxation',
      'Leaves a natural, youthful, and vibrant complexion'
    ]
  },
  {
    id: 'chemical-peels',
    slug: 'chemical-peels',
    title: 'Clinical Chemical Peels',
    category: 'Skin Aesthetics',
    tagline: 'Targeted Dermal Exfoliation for Texture, Acne & Pigmentation',
    technology: 'Medical Grade AHA & BHA Formulations with Neutralizing Protocols',
    description: 'Controlled exfoliation targeting melasma, acne scars, enlarged pores, and fine lines to reveal fresh radiant skin.',
    image: 'https://images.unsplash.com/photo-1512290900672-1f5be572d4ff?auto=format&fit=crop&w=800&q=80',
    badge: 'Clinical Exfoliation',
    conditions: ['Acne & Breakouts', 'Melasma & Pigmentation', 'Enlarged Pores', 'Fine Lines'],
    what: 'Clinical Chemical Peels involve the controlled application of physician-prescribed Alpha Hydroxy Acids (Glycolic, Lactic, Mandelic) and Beta Hydroxy Acids (Salicylic) to gently dissolve the outer damaged stratum corneum.',
    why: 'Sun exposure and pollution in Gujarat frequently cause hyperpigmentation, stubborn melasma patches, and clogged pores. Chemical peels accelerate cellular renewal, diminish dark spots, and stimulate fresh collagen synthesis.',
    beforeAfter: 'Minor micro-flaking over 3 to 5 days reveals visibly clearer, brighter, and significantly more even-toned skin.',
    howDiagnose: 'Wood\'s lamp examination and pigmentation depth analysis by our doctor.',
    preTreatment: [
      'Stop all bleaching, waxing, and retinoids 5 days prior',
      'Avoid sun tanning or beach visits 1 week prior'
    ],
    duringProcedure: [
      'Thorough degreasing and pre-peel skin preparation',
      'Precision brush application of the customized peel solution',
      'Exact medical timing monitoring of skin erythema response',
      'Chemical neutralization and cold compress application',
      'Post-peel restorative zinc-oxide calming balm and physical sunscreen'
    ],
    postTreatment: [
      'Never pick, scratch, or peel flaking skin',
      'Apply SPF 50 sunscreen every 3 hours when outdoors',
      'Use gentle moisturizer freely throughout the day'
    ],
    benefits: [
      'Fades stubborn melasma, sun spots, and post-acne pigmentation',
      'Unclogs pores and calms active acne outbreaks',
      'Diminishes fine wrinkles and refines rough skin texture',
      'Administered under strict medical supervision'
    ]
  },
  {
    id: 'anti-dandruff-therapy',
    slug: 'anti-dandruff-therapy',
    title: 'Clinical Anti-Dandruff Therapy',
    category: 'Scalp Therapy',
    tagline: 'Ultrasound Delivery of Keratostatic Agents for Stubborn Flakes',
    technology: 'Keratostatic Formulations with Therapeutic Ultrasound Waves',
    description: 'Medically designed regime for seborrheic dermatitis, sticky dandruff, and severe itching with ultrasonic penetration.',
    image: 'https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&w=800&q=80',
    badge: 'Ultrasound Keratostatic',
    conditions: ['Dandruff (Sticky/Dry)', 'Seborrheic Dermatitis', 'Scalp Itching'],
    what: 'Richfeel Anti-Dandruff Therapy is a medically formulated protocol combining active keratostatic agents with therapeutic ultrasound wave frequency to eradicate chronic pityriasis and seborrheic dermatitis.',
    why: 'Over-the-counter anti-dandruff shampoos only wash surface flakes without killing the Malassezia fungal colonies deep within follicular ostia. Our ultrasonic technology pushes antifungal and keratostatic actives into the follicular depths, halting flaking and itching at the root.',
    beforeAfter: 'Immediate relief from scalp itching after Session 1; complete resolution of stubborn white/yellow crusts over 4 to 6 sessions.',
    howDiagnose: 'High-magnification Digital Capilloscopy to examine fungal crusts, erythema, and sticky sebum plugs.',
    preTreatment: [
      'Avoid applying mustard oil or heavy commercial hair oils 2 days prior',
      'Do not aggressively scratch or scrape the scalp'
    ],
    duringProcedure: [
      'Clinical scalp exfoliating scrub to loosen adherent crusts',
      'Application of targeted keratostatic medicinal lotions',
      'Therapeutic ultrasound transducer massage to drive active ingredients into follicles',
      'Antimicrobial ozone/high-frequency sterilizing treatment',
      'Soothing anti-inflammatory scalp tonic application'
    ],
    postTreatment: [
      'Use Richfeel prescribed anti-dandruff maintenance shampoo at home',
      'Wash pillowcases and hairbrushes in hot water',
      'Avoid sharing combs and helmets'
    ],
    benefits: [
      'Eradicates both dry flaking and sticky seborrheic dandruff',
      'Ultrasound ensures medicinal delivery deep into follicle roots',
      'Provides immediate lasting relief from scalp itching and burning',
      'Restores physiological scalp pH balance and microbial equilibrium'
    ]
  },
  {
    id: 'hair-hydratherapy',
    slug: 'hair-hydratherapy',
    title: 'Hair Hydratherapy',
    category: 'Scalp Therapy',
    tagline: '5-Step Natural Protein Restoration (Rejuve & Revive)',
    technology: 'Natural Flax Seed & Wheat Protein 5-Step Clinical Therapy',
    description: 'Shields and repairs hair from environmental pollution, heat tools, and stress using natural flaxseed and wheat proteins.',
    image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=800&q=80',
    badge: '5-Step Hydration',
    conditions: ['Dull Lifeless Hair', 'Dry Brittle Hair', 'Heat Damage', 'Damage Hair'],
    what: 'Hair Hydratherapy is an intensive 5-step restorative clinical treatment utilizing omega-rich flaxseed and wheat protein hydrolysates. It features two specialized modalities: Hydro Rejuve (for dull, lifeless hair) and Hydro Revive (for dry, brittle hair).',
    why: 'Harsh tap water, hot blow-drying, and city pollution deplete the hair shaft of essential lipids, leaving strands fragile and snap-prone. Hydratherapy infuses natural moisture directly into the cortex, rebuilding broken protein chains.',
    beforeAfter: 'Instant transformation into silky, manageable hair with enhanced natural bounce and 80% reduction in combing breakage.',
    howDiagnose: 'Hair shaft elasticity and tensile strength pull test conducted by our trichologist.',
    preTreatment: [
      'Arrive for your appointment with dry, un-styled hair'
    ],
    duringProcedure: [
      'Clarifying cleanse to strip external atmospheric pollutants',
      'Application of protein-rich Flax Seed & Wheat Hydro Rejuve / Revive complex',
      'Therapeutic micro-mist steaming to open cuticles for deep nutrient saturation',
      'Hydrating scalp massage to nourish roots',
      'Cold rinse and protective botanical leave-in serum sealing'
    ],
    postTreatment: [
      'Air dry hair whenever possible rather than using high-heat blowers',
      'Use a wide-tooth wooden comb',
      'Repeat monthly for continuous salon-grade silkiness and root strength'
    ],
    benefits: [
      'Hydro Rejuve transforms dull, lifeless hair into lustrous locks',
      'Hydro Revive restores extreme moisture to dry, brittle, damaged hair',
      'Natural flaxseed omega-3 fatty acids reinforce shaft flexibility',
      'Prevents split ends and reduces brush breakage by 80%'
    ]
  },
  {
    id: 'photo-bio-therapy',
    slug: 'photo-bio-therapy',
    title: 'Photo Bio Therapy (Cold Laser)',
    category: 'Hair Restoration',
    tagline: 'Low-Level Cold Beam Laser for Hair Follicle Simulation',
    countryOfOrigin: 'United Kingdom',
    technology: 'Low-Level Light Therapy (LLLT) / Cold Laser Beams',
    description: 'Non-invasive low-level cold beam laser light therapy that energizes weak hair follicles and boosts cellular ATP.',
    image: 'https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=800&q=80',
    badge: 'UK Cold Laser',
    conditions: ['Early Stage Hair Thinning', 'Preventive Hair Care', 'Weak Follicles'],
    what: 'Photo Bio Therapy utilizes cold laser light (Low-Level Laser Therapy / LLLT) technology developed in the United Kingdom. It delivers monochromatic, coherent light wavelengths directly to the scalp without producing heat or tissue damage.',
    why: 'Cold laser light penetrates 5mm into the scalp, stimulating micro-vascular capillary circulation and energizing cellular respiration. This converts weak, miniaturizing follicles back into thick, productive terminal hair generators.',
    beforeAfter: 'Stabilizes shedding within 4 weeks and progressively enhances hair caliber, fullness, and sheen over 8 to 12 weeks.',
    howDiagnose: 'Follicular Density Mapping and early-stage thinning evaluation.',
    preTreatment: [
      'Wash hair before session; no gels or hairsprays',
      '100% painless and non-invasive; zero preparation required'
    ],
    duringProcedure: [
      'Positioning under the UK cold laser hood system',
      'Gentle exposure of the scalp to therapeutic cold laser beams for 20 minutes',
      'Relaxation while the laser works silently and painlessly',
      'Optional application of activating botanical scalp serum'
    ],
    postTreatment: [
      'No downtime whatsoever; resume work or exercise immediately',
      'Ideal when combined with PRP, GFC, or Anagrow for synergistic results'
    ],
    benefits: [
      'Non-invasive, relaxing, and completely painless',
      'Increases capillary blood flow to hair roots by up to 54%',
      'Stimulates mitochondrial ATP production in follicle cells',
      'Superb preventive and maintenance therapy for lifelong hair retention'
    ]
  }
];
