import {
  HeroSection,
  FeaturesSection,
  StatsSection,
  Navbar,
  Footer
} from "@workspace/ui"

export default function Home() {
  return (
    <div className="min-h-screen bg-background font-sans antialiased">
      <Navbar />
      <main>
        <HeroSection />
        <FeaturesSection />
        <StatsSection />
      </main>
      <Footer />
    </div>
  )
}
