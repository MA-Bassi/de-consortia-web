import PageJumbotronSection from '@/app/shared/components/page-jumbotron-section';
import PageServicesSection from '@/app/shared/components/page-services-section';
import PageAboutSection from '@/app/shared/components/page-about-section';
import PageClientSection from '@/app/shared/components/page-client-section';
import PageContactSection from '@/app/shared/components/page-contact-section';

export default function Home() {
  return (
    <main>
      <PageJumbotronSection />
      <PageServicesSection />
      <PageAboutSection />
      <PageClientSection />
      <PageContactSection />
    </main>
  );
}
