import { Layout } from "../components/layout";
import { Contact } from "../components/patterns/contact";
import { DownloadFromStore } from "../components/patterns/download-from-store";
import Faq from "../components/patterns/faq";
import { Features } from "../components/patterns/features";
import Footer from "../components/patterns/footer";
import Hero from "../components/patterns/hero";
import Navigation from "../components/patterns/navbar";
import { Pricing } from "../components/patterns/pricing";
import { Showcase } from "../components/patterns/showcase";
import { Testimonials } from "../components/patterns/testimonials";
import { TrustedBy } from "../components/patterns/trustedBy";
import { UserFollowing } from "../components/patterns/user-following";

export default function Home() {
  return (
    <>
      <Navigation />
      <Layout>
        <Hero />
        <TrustedBy />
        <Features />
        <UserFollowing />
        <Showcase />
        <Pricing />
        <Testimonials />
        <Faq />
        <Contact />
        <DownloadFromStore />
        <Footer />
      </Layout>
    </>
  );
}
