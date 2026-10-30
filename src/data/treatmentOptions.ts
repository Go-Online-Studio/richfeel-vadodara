/**
 * Unified Treatment & Concern options for all lead forms
 * (Modal Consultation Form & Contact Page Form)
 */

export interface TreatmentGroup {
  category: string;
  options: string[];
}

export const treatmentOptionsGroups: TreatmentGroup[] = [
  {
    category: 'Hair Restoration (Patented Therapies)',
    options: [
      'Richfeel Anagrow (Swiss Plant Stem Cells)',
      'TST+ (Tricho Scalp Treatment Plus - Austrian MLD)',
      'AHI Hair Transplant (Aesthetic Scar-Free UK Tech)',
      'Advanced PRP (Biotin Enriched)',
      'Advanced Exosome GFC (Growth Factor Concentrate)',
      'Non-Surgical Hair System (Swiss Lace & Monofilament)',
      'Photo Bio Therapy (Cold Laser Biostimulation)'
    ]
  },
  {
    category: 'Scalp Therapy & Diagnostics',
    options: [
      'Richfeel Ana-d-tox (Hair & Scalp Detoxification)',
      'Clinical Anti-Dandruff Therapy (Ultrasonic Detox)',
      'Hair Hydratherapy (Deep Follicle Hydration)',
      'Trichogram & Capilloscopy Diagnostic Triad'
    ]
  },
  {
    category: 'Skin Aesthetics & Laser',
    options: [
      'Laser Hair Reduction 2.0 (ICE CUBE Cool Brush)',
      'Advance Hydra Facial',
      'Medi-Facial (Richfeel Naturals Clinical Care)',
      'Clinical Chemical Peels (AHA / BHA Peeling)',
      'Carbon Laser Facial (Q-Switched Hollywood Peel)',
      'Clinical Acne & Scar Treatment',
      'Skin Brightening & Pigmentation Treatment',
      'Derma-Korean Treatment',
      'Korean Glass Skin Treatment'
    ]
  },
  {
    category: 'General Clinical Consultations',
    options: [
      'Hair Fall & Thinning Assessment',
      'Male / Female Pattern Baldness Evaluation',
      'Stubborn Dandruff & Scalp Itch Consultation',
      'General In-Clinic Doctor Consultation (Vadodara Branch)'
    ]
  }
];

export const allTreatmentOptions: string[] = treatmentOptionsGroups.flatMap((g) => g.options);

export const defaultTreatmentOption = 'Hair Fall & Thinning Assessment';

