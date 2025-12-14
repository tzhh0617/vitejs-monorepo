import { HeroSection, FeaturesSection, StatsSection, Navbar, Footer } from '@workspace/ui'

export default function Home() {
  return (
    <div className="bg-background min-h-screen font-sans antialiased">
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
