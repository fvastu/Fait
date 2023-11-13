import { Layout } from "../components/layout";
import { Features } from "../components/patterns/features";
import Hero from "../components/patterns/hero";
import Navigation from "../components/patterns/navbar";
import { Pricing } from "../components/patterns/pricing";
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
        <Pricing />
      </Layout>
    </>
  );
}
