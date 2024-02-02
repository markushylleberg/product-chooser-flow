type IconProps = {
  name: string
  className?: string
}

export default function Icon({ name, className }: IconProps) {
  try {
    if (!name) return null
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const SVG = require(`../../../../public/${name}.svg`)?.default
    if (!SVG) return null
    return (
      <span className={`svg-sizing inline-block ${className}`}>
        <SVG />
      </span>
    )
  } catch (error) {
    return null
  }
}
