import Layout from '@/components/Layout';

type StaticGenerationType = {
  randomNumber: string;
};

export async function getStaticProps() {
  return {
    props: {
      randomNumber: Math.random(),
    },
  };
}

export default function StaticGeneration({
  randomNumber,
}: StaticGenerationType) {
  return (
    <Layout>
      <div>{randomNumber}</div>
    </Layout>
  );
}
