import { ImageBannerCarousel } from '@/components/home/ImageBannerCarousel';
import { Heritage } from '@/components/home/Heritage';
import { TreatmentsCarouselSection } from '@/components/home/TreatmentsCarouselSection';
import { WhyChooseUs } from '@/components/home/WhyChooseUs';
import { Diagnostics } from '@/components/home/Diagnostics';
import { AwardsSection } from '@/components/home/Awards';
import { ConsultationCtaBanner } from '@/components/home/ConsultationCtaBanner';
import { treatmentsData } from '@/data/treatments';

export default function HomePage() {
  return (
    <>
      {/* 1. Image Banner Carousel */}
      <ImageBannerCarousel />

      {/* 2. Pioneering History Section (Heritage) */}
      <Heritage />

      {/* 3. Single Treatments Section with Filter and Carousel */}
      <TreatmentsCarouselSection treatments={treatmentsData} />

      {/* 4. Why Choose Us Section */}
      <WhyChooseUs />

      {/* 5. Unique Diagnostic Tests */}
      <Diagnostics />

      {/* 6. Awards & Accolades Showcase */}
      <AwardsSection />

      {/* 7. In-Clinic Consultation Banner */}
      <ConsultationCtaBanner />
    </>
  );
}
