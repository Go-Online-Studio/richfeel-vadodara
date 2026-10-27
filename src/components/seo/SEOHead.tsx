import React, { useEffect } from 'react';
import { clinicInfo, foundersInfo } from '../../data/staticData';
import { Treatment, BlogPost, ConditionCategory } from '../../types';

interface SEOHeadProps {
  currentView: string;
  treatment?: Treatment;
  condition?: ConditionCategory;
  blogPost?: BlogPost;
}

export const SEOHead: React.FC<SEOHeadProps> = ({
  currentView,
  treatment,
  condition,
  blogPost
}) => {
  useEffect(() => {
    let title = 'Richfeel Vadodara - Hair Restoration & Skin Aesthetics Clinic';
    let description =
      'Premier hair restoration, trichology treatments, and skin aesthetics clinic in Vadodara, Gujarat. Pioneered by Dr. Apoorva Shah & Dr. Sonal Shah.';
    let ogType = 'website';
    let ogImage =
      'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1200&q=80';
    let canonicalUrl = 'https://richfeelvadodara.com/';

    // Dynamic metadata based on current view
    if (currentView === 'treatment-page' && treatment) {
      title = `${treatment.title} in Vadodara | Richfeel Trichology Clinic`;
      description = `${treatment.description} Learn about procedure steps, before & after expectations, and pre-care at our Vadodara clinic.`;
      canonicalUrl = `https://richfeelvadodara.com/treatments/${treatment.slug}`;
      ogImage = treatment.image;
    } else if (currentView === 'condition-page' && condition) {
      title = `${condition.name} Treatment & Causes in Vadodara | Richfeel`;
      description = `Understand the causes, symptoms, and clinical treatments for ${condition.name} at Richfeel Vadodara. Trichogram & Capilloscopy diagnosis.`;
      canonicalUrl = `https://richfeelvadodara.com/conditions/${condition.id}`;
      ogImage = condition.image;
    } else if (currentView === 'blog-detail' && blogPost) {
      title = `${blogPost.title} | Richfeel Vadodara Knowledge Hub`;
      description = blogPost.excerpt;
      ogType = 'article';
      ogImage = blogPost.coverImage;
      canonicalUrl = `https://richfeelvadodara.com/blog/${blogPost.slug}`;
    } else if (currentView === 'treatments') {
      title = '15+ Hair & Skin Treatments | Richfeel Vadodara';
      description =
        'Explore 15+ patented procedures: Anagrow stem cell, Austrian TST+ scalp detox, Ailesbury UK hair transplants, and ICE CUBE 2.0 laser reduction.';
      canonicalUrl = 'https://richfeelvadodara.com/treatments';
    } else if (currentView === 'conditions') {
      title = 'Hair Fall, Baldness & Scalp Diagnosis | Richfeel Vadodara';
      description =
        'Find targeted medical solutions for active hair fall, male/female pattern thinning, stubborn dandruff, and facial acne.';
      canonicalUrl = 'https://richfeelvadodara.com/conditions';
    } else if (currentView === 'gallery') {
      title = 'Before & After Hair Regrowth Gallery | Richfeel Vadodara';
      description =
        'View real patient results and clinic consultation suites at Marvel Square, Sunpharma Road, Vadodara. #wepledgebaldfreeindia.';
      canonicalUrl = 'https://richfeelvadodara.com/gallery';
    } else if (currentView === 'blog') {
      title = 'Clinical Trichology & Aesthetics Knowledge Hub | Richfeel';
      description =
        'Evidence-based hair and skin science articles written and vetted by certified Trichologists at Richfeel Vadodara.';
      canonicalUrl = 'https://richfeelvadodara.com/blog';
    } else if (currentView === 'contact') {
      title = 'Contact Richfeel Vadodara | Marvel Square Sunpharma Road';
      description =
        'Book your consultation at FF/09/10/11, Marvel Square, Sunpharma road, Opp. Gokulesh Complex, Vadodara. Hotline: +91 74900 40063.';
      canonicalUrl = 'https://richfeelvadodara.com/contact';
    }

    // Set DOM Title
    document.title = title;

    // Helper to update or create meta tags
    const setMeta = (nameOrProperty: string, content: string, isProperty = false) => {
      const attr = isProperty ? 'property' : 'name';
      let meta = document.querySelector(`meta[${attr}="${nameOrProperty}"]`);
      if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute(attr, nameOrProperty);
        document.head.appendChild(meta);
      }
      meta.setAttribute('content', content);
    };

    setMeta('description', description);
    setMeta('og:title', title, true);
    setMeta('og:description', description, true);
    setMeta('og:type', ogType, true);
    setMeta('og:image', ogImage, true);
    setMeta('og:url', canonicalUrl, true);
    setMeta('twitter:card', 'summary_large_image');
    setMeta('twitter:title', title);
    setMeta('twitter:description', description);
    setMeta('twitter:image', ogImage);

    // Geo Meta Tags for Vadodara, Gujarat Local SEO
    setMeta('geo.region', 'IN-GJ');
    setMeta('geo.placename', 'Vadodara, Gujarat, India');
    setMeta('geo.position', '22.2858;73.1492');
    setMeta('ICBM', '22.2858, 73.1492');

    // Set Canonical link
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute('href', canonicalUrl);

    // STRUCTURED DATA (JSON-LD)
    const structuredData: any[] = [];

    // 1. Global MedicalClinic Schema
    const clinicSchema = {
      '@context': 'https://schema.org',
      '@type': 'MedicalClinic',
      name: 'Richfeel Vadodara',
      alternateName: 'Richfeel Trichology Centre Vadodara',
      image: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1200&q=80',
      description:
        'Pioneering hair restoration, scalp detox, and skin aesthetics clinic in Vadodara, Gujarat. Founded by India’s first certified Trichologists Dr. Apoorva Shah & Dr. Sonal Shah.',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'FF/09/10/11, Marvel Square, Sunpharma road, Opp. Gokulesh Complex',
        addressLocality: 'Vadodara',
        addressRegion: 'Gujarat',
        postalCode: '390012',
        addressCountry: 'IN'
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: 22.2858,
        longitude: 73.1492
      },
      telephone: ['+91 74900 40063', '+91 74900 35002'],
      email: clinicInfo.email,
      url: 'https://richfeelvadodara.com',
      openingHoursSpecification: [
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
          opens: '10:00',
          closes: '19:30'
        }
      ],
      medicalSpecialty: ['Dermatology', 'PlasticSurgery'],
      priceRange: '₹₹ - ₹₹₹',
      founder: [
        {
          '@type': 'Person',
          name: 'Dr. Apoorva Shah',
          jobTitle: "India's First Certified Trichologist"
        },
        {
          '@type': 'Person',
          name: 'Dr. Sonal Shah',
          jobTitle: 'Certified Trichologist & Cosmetologist'
        }
      ]
    };
    structuredData.push(clinicSchema);

    // 2. MedicalProcedure Schema (when on treatment page)
    if (currentView === 'treatment-page' && treatment) {
      const procedureSchema = {
        '@context': 'https://schema.org',
        '@type': 'MedicalProcedure',
        name: treatment.title,
        description: treatment.description,
        procedureType: treatment.id === 'hair-transplant' ? 'SurgicalProcedure' : 'NoninvasiveProcedure',
        bodyLocation: treatment.category === 'Skin Aesthetics' ? 'Face and Body Skin' : 'Scalp and Hair',
        howPerformed: treatment.technology,
        provider: {
          '@type': 'MedicalClinic',
          name: 'Richfeel Vadodara',
          telephone: '+91 74900 40063',
          address: 'FF/09/10/11, Marvel Square, Sunpharma road, Vadodara - 390012'
        }
      };
      structuredData.push(procedureSchema);
    }

    // 3. BlogPosting Schema (when on blog page)
    if (currentView === 'blog-detail' && blogPost) {
      const blogSchema = {
        '@context': 'https://schema.org',
        '@type': 'BlogPosting',
        headline: blogPost.title,
        description: blogPost.excerpt,
        image: blogPost.coverImage,
        datePublished: '2026-05-01',
        author: {
          '@type': 'Person',
          name: blogPost.author.name,
          jobTitle: blogPost.author.title
        },
        publisher: {
          '@type': 'Organization',
          name: 'Richfeel Trichology Centre',
          logo: {
            '@type': 'ImageObject',
            url: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=400&q=80'
          }
        }
      };
      structuredData.push(blogSchema);
    }

    // 4. BreadcrumbList Schema
    const breadcrumbSchema = {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Home',
          item: 'https://richfeelvadodara.com/'
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: currentView.charAt(0).toUpperCase() + currentView.slice(1).replace('-', ' '),
          item: canonicalUrl
        }
      ]
    };
    structuredData.push(breadcrumbSchema);

    // Inject into head
    let scriptTag = document.getElementById('seo-json-ld');
    if (!scriptTag) {
      scriptTag = document.createElement('script');
      scriptTag.id = 'seo-json-ld';
      scriptTag.setAttribute('type', 'application/ld+json');
      document.head.appendChild(scriptTag);
    }
    scriptTag.textContent = JSON.stringify(structuredData);
  }, [currentView, treatment, condition, blogPost]);

  return null;
};
