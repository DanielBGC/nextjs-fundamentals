import Layout from '@/components/Layout';
import { useRouter } from 'next/router';

export default function Client() {
  const router = useRouter();

  return (
    <Layout>
      <h1>Client ID = {router?.query?.client_id}</h1>
      <h1>City = {router?.query?.city}</h1>
    </Layout>
  );
}
