import { Award, DiagnosticTest, ConditionCategory } from '../types';

export const clinicInfo = {
  name: 'Richfeel Vadodara',
  headline: 'Pioneers of Trichology & Advanced Skin Aesthetics in Vadodara',
  tagline: "Invest in your hair, it's the crown you never take off.",
  subTagline: 'Expert Care for Skin & Hair: Revive. Rejuvenate. Reveal.',
  address: 'FF/09/10/11, Marvel Square, Sunpharma road, Opp. Gokulesh Complex, Vadodara - 390012, Gujarat, India',
  city: 'Vadodara',
  state: 'Gujarat',
  postalCode: '390012',
  phones: ['+91 74900 40063', '+91 74900 35002'],
  rawPhones: ['917490040063', '917490035002'],
  email: 'richfeelbaroda24@gmail.com',
  website: 'https://richfeelvadodara.com',
  workingHours: 'Mon - Sun: 10:00 AM - 7:30 PM',
  consultationFee: 'Complimentary Initial Assessment',
  whatsappUrl: 'https://wa.me/917490040063?text=Hello%20Richfeel%20Vadodara%2C%20I%20would%20like%20to%20book%20a%20consultation.',
  googleMapsUrl: 'https://maps.app.goo.gl/zTiEoMz2phsFqeH67'
};

export const foundersInfo = {
  names: 'Dr. Apoorva Shah & Dr. Sonal Shah',
  monikers: "The 'Shahs of Trichology'",
  title: "India's First Certified Trichologists",
  accolade: 'Featured in the Limca Book of Records',
  inceptionYear: '1986',
  bio: `Dr. Apoorva Shah and Dr. Sonal Shah are names synonymous with hair and scalp care, not only in India but across the world. Featured in the Limca Book of Records as India's first certified Trichologist, they are considered to be the Pioneers of Trichology in India and are popularly referred to as the 'Shahs of Trichology'. At a time when India was witnessing a revolution in healthcare, they ventured into the profession in 1986 to pioneer the Richfeel Trichology Centre — India's first and only dedicated chain of hair & scalp clinics.`
};

export const vadodaraDoctorInfo = {
  name: 'Dr. Leena Patil',
  qualifications: 'BHMS',
  roles: 'Counsellor | Clinical Cosmetologist | WMTA-Certified Trichologist',
  title: 'Dr. Leena Patil, BHMS',
  subtitle: 'Counsellor | Clinical Cosmetologist | WMTA-Certified Trichologist',
  experience: '2 Years of Professional Experience in Hair & Skin Care',
  clinic: 'Richfeel Hair & Skin Clinic, Vadodara Branch',
  image: '/images/doctorProfile.webp',
  certificationBody: 'World Medical Trichologists Association (WMTA, U.S.A)',
  bio: 'Dr. Leena Patil is a qualified BHMS practitioner, Counsellor, Clinical Cosmetologist, and WMTA-certified Trichologist with two years of professional experience in hair and skin care. Currently associated with Richfeel Hair & Skin Clinic, she is committed to providing personalized consultations and client-focused care for hair, scalp, and skin concerns.',
  approach: 'With a holistic approach and a focus on individual needs, Dr. Patil strives to guide clients toward suitable treatment solutions and support their journey toward healthier hair and skin through professional counselling and cosmetology care.'
};

export const diagnosticTests: DiagnosticTest[] = [
  {
    id: 'trichogram',
    title: 'Trichogram Analysis',
    subtitle: 'ANAGEN / TELOGEN (A/T) RATIO MEASUREMENT',
    purpose: 'Determines the precise ratio of hair in the active growth phase vs. the falling phase.',
    outcome: 'Identifies whether hair fall is physiological shed or progressive follicular miniaturization.',
    clinicalDetail: 'Under microscopic analysis, the follicular bulbs are measured to establish the exact A/T ratio, determining root anchorage strength and shedding trajectory.'
  },
  {
    id: 'capilloscopy',
    title: 'Digital Capilloscopy',
    subtitle: 'HIGH-RESOLUTION SCALP & MICRO-VASCULAR ASSESSMENT',
    purpose: 'Examines micro-circulation, sebum accumulation, fungal colonization, and follicular ostia health.',
    outcome: 'Reveals underlying scalp pathology (seborrhea, eczema, perifollicular inflammation) before visible hair loss occurs.',
    clinicalDetail: 'Conducted on every patient at Richfeel to evaluate scalp hydration, sebum quality, and capillary blood supply around follicles.'
  },
  {
    id: 'follicular-count',
    title: 'Follicular Count Test',
    subtitle: 'DENSITY MEASUREMENT PER SQUARE CENTIMETER',
    purpose: 'Quantifies the exact number of active hair follicles per square centimeter.',
    outcome: 'Enables objective, mathematical monitoring of male and female pattern thinning (MPT/FPT).',
    clinicalDetail: 'Precision optical grid mapping measures single, double, and triple hair follicular units to track therapy response over time.'
  }
];

export const awardsData: Award[] = [
  {
    id: 'frost-sullivan',
    title: 'Best Hair Restoration Service Provider Company of the Year',
    organization: 'Frost & Sullivan',
    year: '2014',
    description: 'Conferred for pioneering clinical standards, patient satisfaction, and non-surgical innovation across India.'
  },
  {
    id: 'brand-trust',
    title: "India's Most Trusted Haircare Brand",
    organization: 'The Brand Trust Report, India Study',
    year: '2014',
    description: 'Ranked #1 in patient confidence and clinical integrity in a nationwide study.'
  },
  {
    id: 'cmo-asia',
    title: "India's Greatest Brand Builder",
    organization: 'CMO Asia Awards',
    year: '2010',
    location: 'Singapore',
    description: 'International recognition for establishing trichology as a recognized medical science in Asia.'
  },
  {
    id: 'ronald-salinger',
    title: 'Ronald Salinger Award',
    organization: 'International Association of Trichologists (IAT)',
    year: '2007 (Awarded 2010)',
    location: 'Australia',
    description: 'Prestigious global award for outstanding international contributions to the science of trichology.'
  },
  {
    id: 'maharashtra-vaibhav',
    title: 'Maharashtra Vaibhav Award',
    organization: 'Government / State Forum',
    year: '2002',
    description: 'Awarded for supreme excellence and pioneering healthcare service in the field of Trichology.'
  },
  {
    id: 'miss-india',
    title: 'Official Hair Care Experts (10+ Years)',
    organization: 'Femina Miss India Pageant',
    year: '10+ Consecutive Years',
    description: 'Chosen as the trusted aesthetic and scalp mentors for India’s premier beauty pageants.'
  }
];

export const conditionCategories: ConditionCategory[] = [
  {
    id: 'hair-fall',
    name: 'Active Hair Fall & Shedding',
    tagline: 'Acute & Chronic Telogen Effluvium, Weak Anchorage, Diffuse Shedding',
    image: '/images/conditions/hair_fall.webp',
    what: 'Active hair fall (clinically termed Telogen Effluvium or diffuse shedding) is a condition where a significantly higher percentage of hair follicles abruptly transition from the active growing Anagen phase into the resting Telogen phase, leading to excessive daily shedding exceeding 100 strands per day.',
    why: 'Hair follicles have an intense metabolic requirement. When triggered by physiological stressors, high fevers, thyroid or hormonal imbalances, post-viral illness, rapid weight changes, or scalp lymphatic congestion, the anchorage sheath around the hair bulb loosens, causing premature expulsion of the hair shaft.',
    types: [
      'Acute Telogen Effluvium (Sudden shedding 2-3 months after a triggering stressor)',
      'Chronic Telogen Effluvium (Persistent daily shedding lasting over 6 months without distinct bald spots)',
      'Anagen Effluvium (Rapid loss from metabolic insult or medical treatments)',
      'Traction-Induced Follicle Shedding (From tight hairstyles and physical tension)'
    ],
    causes: [
      'Nutritional deficiencies: Low Ferritin (iron storage), Vitamin D3, and Vitamin B12',
      'Hormonal fluctuations: Post-pregnancy, PCOS, perimenopause, thyroid disorders',
      'Scalp lymphatic stasis and sebum clogging around follicle openings',
      'High cortisol levels from chronic emotional or professional stress',
      'Post-illness recovery (viral infections, dengue, typhoid, surgery)'
    ],
    symptoms: [
      'Losing clumps of hair while washing or combing (often >100-150 hairs daily)',
      'Hair collecting profusely on pillowcases, shower drains, and clothing',
      'Overall noticeable reduction in ponytail thickness and braid volume',
      'Tender or burning sensation across the scalp (trichodynia)'
    ],
    howDiagnose: 'At Richfeel Vadodara, diagnosis begins with a Trichogram to quantify the exact Anagen/Telogen (A/T) ratio and root morphology, followed by Digital Capilloscopy to rule out micro-capillary inflammation and nutritional blood profiling.',
    preventManagement: [
      'Maintain adequate dietary protein (paneer, eggs, lentils, nuts) and iron-rich foods',
      'Avoid tight ponytails, harsh mechanical pulling, or brushing soaking-wet hair',
      'Manage stress through mindfulness, adequate sleep, and targeted micronutrition',
      'Undergo regular Austrian MLD scalp detox sessions to stimulate lymphatic clearance'
    ],
    recommendedTreatmentIds: ['tst-plus', 'anagrow', 'advanced-prp']
  },
  {
    id: 'baldness',
    name: 'Baldness & Pattern Thinning',
    tagline: 'Androgenetic Alopecia (Male & Female Pattern Hair Loss), Crown Miniaturization',
    image: '/images/conditions/baldness.webp',
    what: 'Pattern Baldness (Androgenetic Alopecia) is a genetically predetermined progressive disorder where terminal hair follicles gradually shrink (miniaturize) under the enzymatic action of Dihydrotestosterone (DHT), producing progressively thinner, shorter, and less pigmented hairs until the follicle becomes dormant or permanently inactive.',
    why: 'Hair follicles on the frontal hairline, temples, and crown possess androgen receptors. In genetically susceptible individuals, the 5-alpha reductase enzyme converts testosterone to DHT, which constricts the dermal papilla blood vessels, choking off cellular nutrient supplies and shortening the hair growth cycle.',
    types: [
      'Male Pattern Baldness (Norwood Stages I through VII: Receding temples, M-shaped hairline, vertex crown thinning)',
      'Female Pattern Thinning (Ludwig Stages I through III: Widening central parting, preserved frontal hairline)',
      'Diffuse Patterned Alopecia (DPA) and Diffuse Unpatterned Alopecia (DUPA)',
      'Irreversible Advanced Baldness (Grade VI-VII with depleted donor regions)'
    ],
    causes: [
      'Genetic predisposition inherited from maternal or paternal lineages',
      'High scalp 5-alpha reductase enzymatic activity creating localized DHT excess',
      'Micro-inflammation and perifollicular fibrosis choking the follicle bulb',
      'Aging and natural cellular stem cell senescence in the hair bulge'
    ],
    symptoms: [
      'Gradual recession of the front hairline and temples forming an "M" shape',
      'Widening of the center parting in women with visible scalp through hair',
      'Progressive thinning of hair shaft caliber: terminal hairs becoming fine vellus hairs',
      'Excessive scalp shine and loss of follicular density on the crown'
    ],
    howDiagnose: 'Conducted using the Follicular Count Test to measure single vs. multiple hair follicular units per cm², coupled with high-resolution Capilloscopy to grade miniaturization severity and Norwood/Ludwig staging.',
    preventManagement: [
      'Early clinical intervention before follicles suffer permanent fibrotic closure',
      'Anti-DHT nutrition and tricho-active food supplements to block local enzyme activity',
      'Scalp micro-circulation stimulation to preserve oxygenation to the dermal papilla',
      'Avoiding harsh heating and chemical stress on fragile thinning strands'
    ],
    recommendedTreatmentIds: ['anagrow', 'hair-transplant', 'advanced-gfc', 'non-surgical-hair-system', 'photo-bio-therapy']
  },
  {
    id: 'dandruff',
    name: 'Dandruff & Scalp Disorders',
    tagline: 'Seborrheic Dermatitis, Pityriasis Capitis, Stubborn Flaking, Scalp Pruritus',
    image: '/images/conditions/dandruff.webp',
    what: 'Dandruff and scalp disorders are chronic inflammatory conditions characterized by excessive flaking of dead epidermal cells, abnormal sebum secretion, and microbial colonization of the scalp skin barrier.',
    why: 'The human scalp is naturally colonized by the lipophilic fungus Malassezia globosa. When the scalp overproduces sebum, Malassezia breaks down triglycerides into irritating oleic acids, triggering epidermal hyper-proliferation, cellular inflammation, and persistent flaking.',
    types: [
      'Pityriasis Capitis Simplex (Dry, fine white powdery flakes that fall on shoulders)',
      'Pityriasis Steatoides (Oily, sticky yellowish flakes that adhere to the scalp and hair roots)',
      'Seborrheic Dermatitis (Erythematous inflamed scalp with thick greasy crusts and burning)',
      'Scalp Psoriasis (Thick, silvery-white plaques with clearly demarcated borders)'
    ],
    causes: [
      'Over-colonization of Malassezia globosa and microbial imbalance',
      'Hyperactive sebaceous glands caused by hormonal spikes or humidity in Gujarat',
      'Weakened epidermal barrier allowing chemical irritants to penetrate',
      'Frequent application of heavy greasy oils (coconut/mustard) which feed fungal spores',
      'Infrequent washing or excessive hot-water usage irritating the scalp'
    ],
    symptoms: [
      'Visible white flakes on clothing, collars, and shoulders',
      'Greasy, yellowish scales clinging to hair roots and scalp surface',
      'Intense, embarrassing scalp itching (pruritus) especially when sweating',
      'Redness, raw burning sensations, and unpleasant scalp odor'
    ],
    howDiagnose: 'Digital Capilloscopy under 200x optical magnification to inspect sebum crust thickness, perifollicular erythema, and fungal colonization without invasive scraping.',
    preventManagement: [
      'Discontinue heavy oily massages which worsen fungal overgrowth',
      'Wash hair 3-4 times weekly with medically prescribed keratostatic cleansers',
      'Sanitize pillowcases, helmets, combs, and towels regularly in hot water',
      'Undergo in-clinic ultrasound keratostatic anti-dandruff therapy to eradicate stubborn reservoirs'
    ],
    recommendedTreatmentIds: ['anti-dandruff-therapy']
  },
  {
    id: 'acne-skin',
    name: 'Acne, Texture & Dull Skin',
    tagline: 'Clogged Pores, Melasma, Hyperpigmentation, Early Photoaging',
    image: '/images/conditions/acne_skin.webp',
    what: 'Dermatological skin concerns encompass active acne vulgaris, comedones (blackheads/whiteheads), post-inflammatory hyperpigmentation, uneven dermal texture, and environmental pollution-induced dullness.',
    why: 'When dead skin cells fail to shed naturally, they combine with excess sebum to form keratin plugs inside hair follicles. Propionibacterium acnes bacteria proliferate in these clogged pores, sparking inflammation and triggering melanocytes to release uneven melanin pigment.',
    types: [
      'Comedonal Acne (Closed whiteheads and open blackheads without major inflammation)',
      'Inflammatory Papulopustular Acne (Red tender bumps and pus-filled blemishes)',
      'Post-Inflammatory Hyperpigmentation (Dark brown or purple marks remaining after acne heals)',
      'Melasma and Chloasma (Hormonal brown patches on cheeks, forehead, and upper lip)',
      'Dehydrated, Photo-Aged Dull Skin (Loss of dermal bounce, fine surface lines, rough skin)'
    ],
    causes: [
      'Excess sebum production influenced by hormonal surges (androgens, PCOS)',
      'Retention hyperkeratosis (abnormal dead skin buildup)',
      'Intense ultraviolet radiation from Gujarat sun causing melanocyte hyperactivity',
      'Pollution particles and smog inducing dermal oxidative free radical damage',
      'Comedogenic cosmetics and improper skincare routines'
    ],
    symptoms: [
      'Persistent blackheads, whiteheads, or cystic eruptions on face and neck',
      'Stubborn dark spots and uneven skin discoloration that resist regular creams',
      'Enlarged visible pores across the nose, cheeks, and forehead',
      'Rough, flaky surface texture that causes makeup to cake and crease'
    ],
    preventManagement: [
      'Apply broad-spectrum non-comedogenic SPF 50 sunscreen every morning',
      'Double-cleanse every evening to remove atmospheric grime and sebum',
      'Avoid picking or squeezing acne blemishes to prevent permanent scarring',
      'Schedule clinical medical exfoliation (Chemical Peels or Hydra Facial) every 4-6 weeks'
    ],
    recommendedTreatmentIds: [
      'hydra-facial',
      'carbon-facial',
      'acne-treatment',
      'skin-brightening-treatment',
      'darma-korean-treatment',
      'korean-glass-skin-treatment',
      'medi-facial',
      'chemical-peels'
    ]
  },
  {
    id: 'unwanted-hair',
    name: 'Unwanted Body & Facial Hair',
    tagline: 'Hirsutism, Coarse Facial Hair, Recurrent Ingrown Hairs, Folliculitis',
    image: '/images/conditions/unwanted_hair.webp',
    what: 'Unwanted hair growth (including Hirsutism and Hypertrichosis) refers to excess dark, coarse terminal hair appearing in androgen-dependent areas such as the upper lip, chin, jawline, chest, arms, legs, or bikini zone.',
    why: 'Hair growth is regulated by testosterone and DHEA acting on hair follicle androgen receptors. Hormonal imbalances like Polycystic Ovary Syndrome (PCOS), insulin resistance, or genetic traits convert fine vellus hairs into thick, deeply rooted terminal follicles.',
    types: [
      'Facial Hirsutism (Chin, upper lip, sideburns, neck in females)',
      'Body Hypertrichosis (Coarse hair on arms, legs, back, abdomen)',
      'Pseudofolliculitis Barbae (Painful ingrown hairs and bumps from shaving)',
      'Keratosis Pilaris (Bumpy strawberry skin on arms and legs)'
    ],
    causes: [
      'Elevated androgen levels associated with PCOS or ovarian/adrenal factors',
      'Genetic family history and ethnicity predisposition',
      'Insulin resistance stimulating ovarian testosterone production',
      'Repeated mechanical trauma from waxing and threading causing thicker regrowth and ingrowns'
    ],
    symptoms: [
      'Dark, bristly hair appearing on the chin, jawline, upper lip, or abdomen',
      'Chronic painful red bumps, pustules, and ingrown hairs from shaving or waxing',
      'Dark pigmentation and rough texture under arms and in the bikini region',
      'Daily time burden and skin irritation from temporary hair removal methods'
    ],
    preventManagement: [
      'Cease aggressive waxing or threading which stretches sensitive skin and promotes ingrown hairs',
      'Exfoliate gently with chemical AHAs rather than harsh physical scrubs',
      'Maintain stable blood sugar through balanced nutrition',
      'Opt for ICE CUBE 2.0 Laser Hair Reduction for permanent follicular resolution'
    ],
    recommendedTreatmentIds: ['laser-hair-reduction']
  },
  {
    id: 'color-damage',
    name: 'Chemical Color & Heat Damage',
    tagline: 'Bleached Strands, Porous Broken Cuticles, Split Ends, Shaft Breakage',
    image: '/images/conditions/color_damage.webp',
    what: 'Chemical and thermal damage refers to structural breakdown of the hair shaft cuticle and cortex caused by chemical hair coloring, bleach developers, chemical straightening, and frequent high-heat styling irons.',
    why: 'Permanent hair dyes use ammonia and hydrogen peroxide to swell and force open the protective cuticle scales, oxidizing natural melanin. This breaks disulfide cystine bonds within the cortex, stripping natural moisture and leaving the hair shaft hollow, brittle, and fragile.',
    types: [
      'Chemical Dye & Bleach Porosity (High porosity causing rapid color fade and straw-like texture)',
      'Heat Styling Keratin Degradation (From blow-dryers, curling tongs, and straightening flat irons)',
      'Mechanical Breakage & Split Ends (Trichoptilosis and Trichorrhexis Nodosa)',
      'Chemical Scalp Dermatitis (Scalp itching, sensitivity, and flaking post-coloring)'
    ],
    causes: [
      'Repeated application of chemical hair colors, streaks, highlights, and bleaches',
      'Frequent use of hot styling tools exceeding 180°C without heat protection',
      'Chemical rebonding, smoothening, and keratin blowouts containing harsh aldehydes',
      'Chlorinated swimming pool water and hard municipal mineral water'
    ],
    symptoms: [
      'Hair feels rough, coarse, and straw-like even after using conditioners',
      'Rapid color fading within 1-2 weeks of expensive salon coloring',
      'Split ends and hair breaking off midway along the shaft during brushing',
      'Severe tangling, flyaways, chronic frizz, and lack of natural reflective shine'
    ],
    howDiagnose: 'Microscopic hair shaft porosity evaluation and tensile elasticity stretch test under high optical zoom.',
    preventManagement: [
      'Incorporate Richfeel Ana-d-tox with Power THP from USA before and after coloring',
      'Limit high-temperature flat ironing and always apply thermal protection',
      'Use sulfate-free color-shielding shampoos and protein deep conditioners',
      'Protect hair from harsh direct sun rays and chlorine'
    ],
    recommendedTreatmentIds: ['ana-d-tox', 'hair-hydratherapy']
  }
];

export const whyChooseUsReasons = [
  {
    title: 'Vadodara Local Excellence',
    description: 'Conveniently located at Marvel Square on Sunpharma Road, serving thousands of satisfied Gujarat patients with personalized trichological care.'
  },
  {
    title: 'Pioneered by Doctors in 1986',
    description: 'Founded by Dr. Apoorva Shah & Dr. Sonal Shah, India’s 1st certified trichologists featured in the Limca Book of Records.'
  },
  {
    title: 'Scientific Diagnosis',
    description: 'Our Trichogram, Capilloscopy, and Follicular Count Test pinpoint the microscopic root causes of hair and scalp issues.'
  },
  {
    title: 'Global Innovations (Italy, Switzerland, USA)',
    description: 'Exclusive access to patented international protocols: Austrian MLD, Swiss Stem Cells, Biotec Italia laser diodes, and Ailesbury UK hair transplants.'
  },
  {
    title: 'In-House Research & Formulations',
    description: 'Proprietary clinical supplements, topical botanical formulations, and medical-grade facial kits crafted with clinical purity.'
  },
  {
    title: 'US-FDA Approved Technologies',
    description: 'State-of-the-art cold lasers, ICE CUBE 2.0 laser reduction, and high-frequency ultrasound systems ensuring zero downtime and highest safety.'
  }
];
