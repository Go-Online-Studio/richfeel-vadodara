export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  category: string;
  topicTag: string;
  excerpt: string;
  content: string;
  publishDate: string;
  readTime: string;
  author: {
    name: string;
    title: string;
    role?: string;
    avatar?: string;
  };
  popular: boolean;
  recent: boolean;
  coverImage: string;
}

export interface Treatment {
  id: string;
  slug: string;
  title: string;
  category: 'Hair Restoration' | 'Scalp Therapy' | 'Skin Aesthetics';
  tagline: string;
  countryOfOrigin?: string;
  technology: string;
  description: string;
  image: string;
  badge?: string;
  conditions: string[];
  // Deep Page Sections:
  what: string;
  why: string;
  beforeAfter: string;
  howDiagnose: string;
  preTreatment: string[];
  duringProcedure: string[];
  postTreatment: string[];
  benefits: string[];
  // Compatibility properties
  duration?: string;
  idealFor?: string;
  procedureSteps?: string[];
  preCare?: string;
  postCare?: string;
}

export interface DiagnosticTest {
  id: string;
  title: string;
  subtitle: string;
  purpose: string;
  outcome: string;
  clinicalDetail: string;
  badgeText?: string;
}

export interface Award {
  id: string;
  title: string;
  organization: string;
  year: string;
  location?: string;
  description: string;
}

export interface ConditionCategory {
  id: string;
  name: string;
  tagline: string;
  image: string;
  what: string;
  why: string;
  types: string[];
  causes: string[];
  symptoms: string[];
  howDiagnose: string;
  preventManagement: string[];
  recommendedTreatmentIds: string[];
  description?: string;
}

export interface ConsultationRequest {
  fullName: string;
  phone: string;
  email?: string;
  concern: string;
  preferredDate?: string;
  notes?: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  subtitle: string;
  category: 'Hair Restoration' | 'Scalp Therapy' | 'Skin Aesthetics' | 'Hair Transplant' | 'Clinic';
  image: string;
  fullImage: string;
  description: string;
}
