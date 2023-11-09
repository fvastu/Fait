import { Layout } from "../components/layout";
import Hero from "../components/patterns/hero";
import Navigation from "../components/patterns/navbar";
import { TrustedBy } from "../components/patterns/trustedBy";

export default function Home() {
  return (
    <>
      <Navigation />
      <Layout>
        <Hero />
        <TrustedBy />
      </Layout>
    </>
  );
}
