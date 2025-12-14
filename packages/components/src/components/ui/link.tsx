export interface LinkProps {
  href: string
  children: React.ReactNode
  className?: string
}

export function Link({ href, children, className }: LinkProps) {
  // This is a placeholder component that should be overridden by the framework
  // The consuming application will replace this with appropriate Link component
  return (
    <a href={href} className={className}>
      {children}
    </a>
  )
}
