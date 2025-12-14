import { Card, CardContent } from "@/components/ui/card"

const stats = [
  {
    title: "Production Ready",
    value: "100%",
    description: "Optimized for production deployment",
  },
  {
    title: "Components",
    value: "40+",
    description: "Pre-built shadcn/ui components",
  },
  {
    title: "Performance",
    value: "99+",
    description: "Core Web Vitals score",
  },
  {
    title: "Bundle Size",
    value: "<100KB",
    description: "Initial JavaScript bundle",
  },
]

export function StatsSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-900">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <Card key={index}>
              <CardContent className="flex flex-col items-center justify-center space-y-2 p-6 text-center">
                <div className="text-2xl font-bold tabular-nums lg:text-3xl">
                  {stat.value}
                </div>
                <div className="text-sm font-medium text-gray-500 dark:text-gray-400">
                  {stat.title}
                </div>
                <div className="text-xs text-gray-500 dark:text-gray-400">
                  {stat.description}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}