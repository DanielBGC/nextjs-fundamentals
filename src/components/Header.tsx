type HeaderProps = {
  title?: string
}

export default function Header({ title = 'NextJS & React Fundamentals' }: HeaderProps) {
  return (
    <header>
      <h1>{title}</h1>
    </header>
  )
}