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
    id: 'hydra-facial',
    slug: 'hydra-facial',
    title: 'Hydra Facial',
    category: 'Skin Aesthetics',
    tagline: 'Multi-Step Clinical Hydration, Vortex Extraction & Dermal Resurfacing',
    countryOfOrigin: 'USA',
    technology: 'Vortex Dermal Infusion & Negative-Pressure Vacuum Extraction Technology',
    description: 'Clinical medical-grade facial combining deep exfoliation, painless vortex extraction of blackheads, and high-pressure infusion of hyaluronic acid and antioxidant super-serums.',
    image: '/images/treatments/skin-aesthetics/hydra_facial.webp',
    badge: 'Instant Dewy Glow',
    conditions: ['Dull Skin', 'Clogged Pores', 'Uneven Skin Tone', 'Dehydrated Skin', 'Early Fine Lines'],
    what: 'Hydra Facial is a patented multi-step dermatological procedure that merges mechanical hydro-dermabrasion, chemical peeling, painless vortex suction, and dermal infusion of medical-grade antioxidants, hyaluronic acid, and peptides.',
    why: 'Urban environmental pollution, dust, and hard water in Vadodara clog pores and oxidize dermal collagen. Traditional parlor facials push debris deeper into pores; Hydra Facial extracts impurities painlessly using negative vortex pressure while simultaneously quenching dehydrated cells with restorative nutrients.',
    beforeAfter: 'Instant luminous red-carpet radiance immediately after the 45-minute clinical session. Skin appears visibly plumper, blackheads are completely cleared, and dermal texture feels petal-soft with zero peeling or downtime.',
    howDiagnose: 'Digital dermal hydration analysis and sebum mapping using high-resolution polarising skin sensors.',
    preTreatment: [
      'Discontinue retinol, AHA/BHA exfoliants, and benzoyl peroxide 3 days prior',
      'Avoid facial bleaching, waxing, or threading for 48 hours',
      'Arrive free of heavy cosmetic foundation'
    ],
    duringProcedure: [
      'Step 1: Gentle vortex cleansing and dead keratin exfoliation',
      'Step 2: Non-irritating salicylic and glycolic acid peel infusion to loosen sebum plugs',
      'Step 3: Painless vortex vacuum extraction of stubborn blackheads and sebum deposits',
      'Step 4: Targeted delivery of antioxidant, hyaluronic acid, and peptide super-serums',
      'Step 5: Calming LED photo-rejuvenation light to reduce transient redness and boost cellular collagen'
    ],
    postTreatment: [
      'Avoid wearing makeup for at least 12 hours to permit deep serum absorption',
      'Apply broad-spectrum non-comedogenic SPF 50 sunscreen daily',
      'Drink adequate water and maintain daily moisturizing routine'
    ],
    benefits: [
      'Immediate, camera-ready bridal radiance with zero downtime',
      'Painless extraction of stubborn blackheads and whiteheads',
      'Deep cellular hydration plumping fine dehydration lines',
      'Safe and customizable across all Indian skin types and tones'
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
    id: 'carbon-facial',
    slug: 'carbon-facial',
    title: 'Carbon Laser Facial',
    category: 'Skin Aesthetics',
    tagline: 'The Celebrated Hollywood Laser Peel with Q-Switched Nd:YAG Laser & Liquid Carbon',
    countryOfOrigin: 'South Korea & USA',
    technology: 'Q-Switched Nd:YAG Laser (1064nm) & Micronized Activated Bamboo Charcoal',
    description: 'Celebrity-favorite non-invasive laser facial using medical carbon lotion and nanosecond laser pulses to vaporize deep impurities, tighten enlarged pores, and restore porcelain radiance.',
    image: '/images/treatments/skin-aesthetics/carbon_facial.webp',
    badge: 'Hollywood Laser Peel',
    conditions: ['Enlarged Pores', 'Oily Congested Skin', 'Stubborn Blackheads', 'Dull Complexion', 'Mild Pigmentation'],
    what: 'The Carbon Laser Facial (also renowned globally as the Hollywood Peel or China Doll Facial) applies a medical liquid carbon suspension onto the facial skin. The carbon particles penetrate deep into pores where a Q-Switched Nd:YAG laser photo-acoustically shatters the carbon along with trapped sebum, dead cells, and pigment.',
    why: 'Overactive sebaceous glands and environmental grime cause stubbornly dilated pores and persistent shine. The carbon laser treatment creates a controlled photothermal shockwave that shrinks sebaceous gland activity, vaporizes epidermal debris, and promotes neocollagenesis for tightened, poreless skin.',
    beforeAfter: 'Pores appear dramatically minimized, oily shine is replaced with an airbrushed matte luminescence, and skin tone looks noticeably brighter from the very first session.',
    howDiagnose: 'Sebum excretion measurement, pore diameter assessment, and Fitzpatrick phototype safety screening.',
    preTreatment: [
      'Avoid excessive sun exposure and tanning beds for 1 week prior',
      'Do not use active retinoids or chemical peels for 4 days before procedure',
      'Men should shave 12-24 hours prior if treating the beard zone'
    ],
    duringProcedure: [
      'Application of medical-grade activated bamboo carbon lotion allowed to set for 10-15 minutes',
      'Short-pulse laser warming pass to drive carbon particles deep into follicular ostia',
      'Q-Switched 1064nm laser acoustic pass with snap sounds as carbon particles vaporize instantly',
      'Gentle soothing toner cleanse to remove residual micro-particles',
      'Application of cooling peptide sheet mask and broad-spectrum physical sunscreen'
    ],
    postTreatment: [
      'Avoid hot saunas, steam rooms, and vigorous sweaty workouts for 24 hours',
      'Use gentle non-foaming cleanser and avoid gritty exfoliating scrubs for 5 days',
      'Strict application of broad-spectrum SPF 50 sunscreen every 3-4 hours'
    ],
    benefits: [
      'Visibly tightens and refines enlarged pores within 1 session',
      'Vaporizes blackheads and eliminates surface dead skin cells',
      'Controls chronic oily shine without drying out the skin barrier',
      '100% painless, non-invasive protocol with instant porcelain finish'
    ]
  },
  {
    id: 'acne-treatment',
    slug: 'acne-treatment',
    title: 'Clinical Acne Treatment',
    category: 'Skin Aesthetics',
    tagline: 'Doctor-Supervised Acne Eradication, Salicylic Therapy & Blue Light Sterilization',
    technology: 'Medical High-Frequency Ozone, 415nm Blue Light LED & Keratolytic Extraction',
    description: 'Comprehensive dermatological acne protocol designed to neutralize P. acnes bacteria, dissolve comedones, calm cystic inflammation, and prevent permanent scarring.',
    image: '/images/treatments/skin-aesthetics/acne_treatment.webp',
    badge: 'Clinical Blemish Control',
    conditions: ['Active Acne Vulgaris', 'Cystic Breakouts', 'Blackheads & Whiteheads', 'Post-Acne Redness', 'Excess Sebum'],
    what: 'Our Clinical Acne Treatment is an evidence-based multi-tier dermatological therapy that targets all four pathophysiological stages of acne: follicular hyperkeratinization, microbial proliferation (Cutibacterium acnes), sebum overproduction, and inflammatory mediator release.',
    why: 'Self-treating acne with OTC creams or popping pimples pushes infection into deep dermal tissues, creating dark post-inflammatory hyperpigmentation (PIH) and pitted scars. Our doctor-supervised protocol treats active blemishes without damaging adjacent healthy skin, halting recurrence.',
    beforeAfter: 'Painful cystic inflammation subsides within 48 to 72 hours. A scheduled course of 4 to 6 sessions yields clear, blemish-free skin with up to an 85% decrease in active breakouts.',
    howDiagnose: 'Clinical acne staging (Leeds acne grading system), digital Wood’s lamp bacterial porphyrin fluorescing, and hormonal profile evaluation.',
    preTreatment: [
      'Avoid squeezing or picking active acne lesions for at least 1 week',
      'Stop benzoyl peroxide and topical antibiotic gels 24 hours prior to appointment',
      'Stay well-hydrated and disclose any oral medications (e.g. isotretinoin)'
    ],
    duringProcedure: [
      'Antiseptic medical cleanse with clarifying botanical extracts',
      'Aseptic comedone extraction under sterile clinical magnification',
      'High-frequency ozone sterilizing electrode pass to eliminate anaerobic bacteria',
      'Targeted application of doctor-calibrated lipophilic beta-hydroxy peel solution',
      '415nm medical blue light phototherapy to suppress bacterial porphyrin',
      'Calming anti-inflammatory zinc and niacinamide soothing mask'
    ],
    postTreatment: [
      'Do not touch face with unwashed hands or pick at healing extraction points',
      'Wash pillowcases and clean phone screens regularly',
      'Use non-comedogenic, oil-free moisturizer and prescribed dermatological topicals',
      'Apply physical mineral sunscreen daily'
    ],
    benefits: [
      'Rapidly calms painful red inflamed pimples and cystic nodules',
      'Eradicates anaerobic bacteria deep within the follicular canal',
      'Prevents permanent pitted scars and post-inflammatory dark marks',
      'Balances excessive oil output while repairing damaged skin barrier'
    ]
  },
  {
    id: 'skin-brightening-treatment',
    slug: 'skin-brightening-treatment',
    title: 'Skin Brightening Treatment',
    category: 'Skin Aesthetics',
    tagline: 'Glutathione, Vitamin C & Kojic Dermal Infusion for Radiant Skin Glow',
    technology: 'Transdermal Electroporation & Medical Antioxidant Depigmentation Complex',
    description: 'Medical-grade brightening treatment combining glutathione, alpha arbutin, and pure ascorbic acid to diminish sun damage, erase tanning, and even skin tone.',
    image: '/images/treatments/skin-aesthetics/skin_brightening.webp',
    badge: 'Antioxidant Glow',
    conditions: ['Melasma & Sun Spots', 'Uneven Skin Tone', 'Dull Skin', 'Tanning & Hyperpigmentation', 'Photo-Aging'],
    what: 'Richfeel Skin Brightening Treatment is an intensive medical aesthetic procedure formulated to treat epidermal and dermal pigmentation. It employs transdermal electroporation to deliver master antioxidants (Glutathione, Vitamin C, Kojic Acid, and Alpha-Arbutin) deep into the basal cell layer where melanogenesis occurs.',
    why: 'Intense sunlight and UV radiation in Gujarat trigger melanocytes to overproduce melanin, resulting in uneven tanning, stubborn sun spots, and patchy melasma. Unlike topical creams that stay on the surface, our transdermal infusion penetrates cell membranes to inhibit tyrosinase enzyme activity and lighten dark patches safely.',
    beforeAfter: 'Visibly brighter complexion after the very first treatment, with a 60-80% lightening of sun tan and dark spots over a tailored 4-session course.',
    howDiagnose: 'Digital UV pigment depth analysis to classify epidermal vs. dermal melasma and assess cellular oxidation.',
    preTreatment: [
      'Avoid bleaching, threading, or salon facials for 5 days before treatment',
      'Avoid tanning outdoors for 48 hours prior',
      'Disclose any topical steroid creams previously used'
    ],
    duringProcedure: [
      'Enzymatic exfoliation to lift dull, oxidized dead keratin cells',
      'Application of potent medical-grade depigmenting cocktail (Glutathione + Ascorbic Acid + Kojic Acid)',
      'Needle-free electroporation and ultrasound sonophoresis for deep transdermal cellular infusion',
      'Cryo-cooling lymphatic massage to lock actives into dermal layers',
      'Application of brightening botanical peel-off alginate mask enriched with licorice extract',
      'Broad-spectrum PA++++ physical photoprotection application'
    ],
    postTreatment: [
      'Strict sun avoidance and reapplication of SPF 50+ every 3 hours',
      'Avoid direct steam, sauna, or chemical bleaching for 7 days',
      'Use prescribed maintenance depigmenting serums as advised by physician'
    ],
    benefits: [
      'Inhibits melanin synthesis at the cellular tyrosinase level',
      'Fades stubborn sun tan, dark patches, and post-inflammatory spots',
      'Infuses powerful master antioxidants to reverse oxidative photoaging',
      'Leaves the face luminous, evenly toned, and visibly refreshed'
    ]
  },
  {
    id: 'darma-korean-treatment',
    slug: 'darma-korean-treatment',
    title: 'Derma-Korean Treatment',
    category: 'Skin Aesthetics',
    tagline: 'Seoul Dermatology Protocol: Microneedle Meso-Therapy & PDRN Salmon DNA',
    countryOfOrigin: 'South Korea',
    technology: 'Automated Korean Microneedling & Medical PDRN Polydeoxyribonucleotide',
    description: 'Advanced Korean clinical meso-infusion therapy utilizing micro-needling and PDRN salmon DNA to stimulate deep cellular collagen renewal, shrink pores, and tighten skin.',
    image: '/images/treatments/skin-aesthetics/derma_korean.webp',
    badge: 'Korean PDRN Tech',
    conditions: ['Acne Scars & Texture', 'Open Enlarged Pores', 'Fine Lines & Wrinkles', 'Loss of Elasticity', 'Dull Tired Skin'],
    what: 'The Derma-Korean Treatment (K-Derma Meso Infusion) is a cutting-edge clinical aesthetic protocol pioneered in Seoul, South Korea. It pairs precision automated microneedling with pharmaceutical-grade PDRN (Polydeoxyribonucleotide extracted from wild salmon DNA), essential amino acids, and cross-linked hyaluronic acid.',
    why: 'As skin ages or heals from severe acne, dermal collagen matrix collapses, causing pitted scars, enlarged pores, and laxity. PDRN binds to adenosine A2A receptors in human fibroblasts, activating tissue regeneration, microvascular angiogenesis, and synthesis of Type I & III collagen from deep within.',
    beforeAfter: 'Smooth, plump, and refined skin texture within 7 to 10 days post-procedure. Scars soften, pore sizes reduce significantly, and skin demonstrates remarkable bounce and firmness over 3 to 4 monthly sessions.',
    howDiagnose: 'Dermal elasticity assessment, 3D skin texture topography analysis, and scar classification (ice-pick, rolling, boxcar).',
    preTreatment: [
      'Apply topical anesthetic numbing cream 30-40 minutes prior to session for 100% comfort',
      'Avoid blood thinners (aspirin, vitamin E) for 3 days before procedure',
      'Do not use active retinol or AHA/BHA for 5 days prior'
    ],
    duringProcedure: [
      'Clinical skin sanitization and removal of topical numbing cream',
      'Application of medical-grade Korean PDRN Salmon DNA and growth factor complex',
      'Automated vertical micro-channeling using sterile surgical-grade titanium cartridges',
      'Dermal meso-infusion ensuring 100% absorption of bioactive peptides into fibroblasts',
      'Cryogenic LED soothing mask application to rapidly quench redness and stimulate healing',
      'Post-procedure barrier recovery serum and protective peptide shield'
    ],
    postTreatment: [
      'Avoid washing face for 8 hours after procedure',
      'Use only sterile hydrating serum and gentle ceramide barrier cream for 48 hours',
      'Avoid direct sunlight, sweaty cardio, and swimming pools for 72 hours',
      'Always apply physical mineral SPF 50 sunscreen'
    ],
    benefits: [
      'Stimulates true biological collagen synthesis and tissue regeneration',
      'Smooths stubborn acne scars and refines coarse skin texture',
      'Visibly shrinks open, gaping pores and improves skin tightness',
      'Pioneered with authentic Korean medical aesthetic protocols'
    ]
  },
  {
    id: 'korean-glass-skin-treatment',
    slug: 'korean-glass-skin-treatment',
    title: 'Korean Glass Skin Treatment',
    category: 'Skin Aesthetics',
    tagline: 'Multi-Layer Dewy Hydration, Peptide Peeling & Cryo-Infusion for Crystal Clarity',
    countryOfOrigin: 'South Korea',
    technology: 'Korean Cryo-Electroporation, Phyto-Peptides & Hyaluronic Dermal Glaze',
    description: 'Signature Korean 7-step aesthetic therapy designed to achieve translucent, ultra-smooth, poreless, and luminescent "glass-like" skin reflection.',
    image: '/images/treatments/skin-aesthetics/korean_glass_skin.webp',
    badge: 'Luminescent Glass Skin',
    conditions: ['Dehydrated Skin', 'Rough Texture', 'Dull Skin', 'Large Pores', 'Lack of Radiance'],
    what: 'The Korean Glass Skin Treatment is an internationally celebrated aesthetic protocol engineered in Korea to produce "Yuri Pibu" (Glass Skin) - skin so poreless, luminous, intensely hydrated, and translucent that it mirrors the clarity of clean glass.',
    why: 'Dehydration, cellular sluggishness, and micro-flaking create uneven light refraction, making skin appear tired, dull, and chalky. The Korean 7-step clinical method combines gentle lactic micro-resurfacing, multi-molecular weight hyaluronic hydration, cryogenic electroporation, and a peptide glaze to restore maximum light reflection.',
    beforeAfter: 'Spectacular, hyper-dewy, reflective "glass" glow immediately noticeable when leaving the clinic. Makeup glides on seamlessly, and skin retains a lit-from-within sheen for weeks.',
    howDiagnose: 'Optical skin reflection analysis, dermal moisture retention testing, and barrier integrity diagnostic.',
    preTreatment: [
      'Arrive with clean skin free of waterproof makeup',
      'Avoid harsh chemical exfoliants 48 hours prior',
      'Suitable for all skin types, including sensitive and pre-event bridal skin'
    ],
    duringProcedure: [
      'Step 1: Double clinical oil-gel cleansing to eliminate micro-particles and sebum',
      'Step 2: Gentle Korean bubble enzyme exfoliation to melt dead surface keratin',
      'Step 3: Aqua-peel pore purifying extraction focusing on T-zone congestion',
      'Step 4: Transdermal infusion of 5-molecular-weight hyaluronic acid essence',
      'Step 5: Cryo-electroporation device pass at -10°C to lock moisture into cells and tighten pores',
      'Step 6: Luminescent Korean modeling rubber mask infused with botanical brightening agents',
      'Step 7: Signature peptide dermal glaze and barrier-sealing physical SPF application'
    ],
    postTreatment: [
      'Do not wash face for 6 hours to allow deep hydration layers to set',
      'Avoid matte powders or heavy drying foundations for 24 hours to showcase natural dewiness',
      'Maintain skin hydration by drinking plenty of water and using hydrating mists',
      'Apply broad-spectrum sunscreen daily'
    ],
    benefits: [
      'Achieves the coveted poreless, ultra-dewy Korean glass skin finish',
      'Provides deep multi-layer cellular hydration that lasts for weeks',
      'Infuses powerful botanical peptides to boost natural skin elasticity',
      'Perfect instant pre-event, red-carpet, or bridal glow with zero peeling'
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
