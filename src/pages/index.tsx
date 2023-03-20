import NavLink from '@/components/NavLink';

export default function Home() {
  return (
    <>
      <h1>Home</h1>

      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          flexWrap: 'wrap',
          height: '100vh',
          gap: 30,
        }}
      >
        <NavLink href='/StyledPage' text='Go To Styled Page' />

        <NavLink href='/JSX' text='Go To JSX Page' />

        <NavLink href='/client/Uberaba/123' text='Go To Cliente Page' />

        <NavLink href='/consumingAPI' text='Go To Consuming API Page' />
      </div>
    </>
  );
}
