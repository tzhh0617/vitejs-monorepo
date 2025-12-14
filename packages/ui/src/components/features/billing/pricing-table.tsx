'use client'

import { Button } from '../../ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '../../ui/card'
import { Badge } from '../../ui/badge'
import { Check } from 'lucide-react'

interface PricingPlan {
  name: string
  description: string
  price: string
  features: string[]
  cta: string
  popular?: boolean
}

const pricingPlans: PricingPlan[] = [
  {
    name: 'Starter',
    description: 'Perfect for small projects',
    price: '$9/month',
    features: ['Up to 3 projects', 'Basic features', 'Community support', '99.9% uptime'],
    cta: 'Get Started',
  },
  {
    name: 'Professional',
    description: 'For growing businesses',
    price: '$29/month',
    features: [
      'Unlimited projects',
      'Advanced features',
      'Priority support',
      '99.99% uptime',
      'Team collaboration',
    ],
    cta: 'Start Free Trial',
    popular: true,
  },
  {
    name: 'Enterprise',
    description: 'Custom solutions for large teams',
    price: 'Custom',
    features: [
      'Everything in Professional',
      'Dedicated support',
      'Custom integrations',
      'SLA guarantee',
      'Advanced security',
    ],
    cta: 'Contact Sales',
  },
]

export function PricingTable() {
  return (
    <div className="grid gap-8 md:grid-cols-3">
      {pricingPlans.map((plan) => (
        <Card key={plan.name} className={plan.popular ? 'border-primary scale-105 shadow-lg' : ''}>
          <CardHeader className="text-center">
            <CardTitle className="flex items-center justify-between">
              {plan.name}
              {plan.popular && (
                <Badge variant="default" className="ml-2">
                  Popular
                </Badge>
              )}
            </CardTitle>
            <CardDescription>{plan.description}</CardDescription>
            <div className="text-3xl font-bold">{plan.price}</div>
          </CardHeader>

          <CardContent>
            <ul className="space-y-3">
              {plan.features.map((feature) => (
                <li key={feature} className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-green-500" />
                  <span className="text-sm">{feature}</span>
                </li>
              ))}
            </ul>
          </CardContent>

          <CardFooter>
            <Button className="w-full" variant={plan.popular ? 'default' : 'outline'}>
              {plan.cta}
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  )
}
