export default function JSX() {
  const title = <h1>This is my title</h1>

  const subtitle = () => {
    return <h2>This is my subtitle</h2>
  }
  return (
    <>
      {title}
      {subtitle()}
    </>
  )
}

