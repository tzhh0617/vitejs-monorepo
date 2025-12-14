import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge, BadgeCheck, Zap, Shield } from "lucide-react"

const features = [
  {
    icon: BadgeCheck,
    title: "TypeScript First",
    description: "Full TypeScript support with strict type checking for better development experience.",
  },
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Built with Next.js 15 for optimal performance and SEO.",
  },
  {
    icon: Shield,
    title: "Secure by Default",
    description: "Follows latest security best practices and patterns.",
  },
]

export function FeaturesSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
              Built for Modern Development
            </h2>
            <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
              Everything you need to build amazing web applications with the latest technologies.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
          {features.map((feature, index) => (
            <Card key={index}>
              <CardHeader>
                <feature.icon className="h-10 w-10 text-primary" />
                <CardTitle>{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{feature.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}