import useSWR from 'swr';
import axios from 'axios';

import Layout from '@/components/Layout';
import { useEffect, useState } from 'react';

const fetcher = (url: string) => fetch(url).then((r) => r.json());

type Client = {
  id: string;
  name: string;
  email: string;
  random: string;
};

export default function ConsumingAPI() {
  const [clientData, setClientData] = useState<Client>();

  const [clientIdInput, setClientIdInput] = useState('');

  // Using SWR
  // const { data, error } = useSWR('/api/clients', fetcher)
  // console.log(data);

  // const getClientData = async () => {
  //   // Using Axios
  //   axios
  //     .get(`/api/clients/${clientIdInput}`)
  //     .then((response) => {
  //       console.log(response?.data);
  //       setClientData(response?.data);
  //     })
  //     .catch(function (error) {
  //       console.error(error);
  //     });
  // };

  const getClientData = async () => {
    const response = await axios.get(`/api/clients/${clientIdInput}`);

    console.log(response?.data);
    setClientData(response?.data);
  };

  return (
    <Layout>
      <input
        type='text'
        name=''
        id=''
        value={clientIdInput}
        onChange={(event) => setClientIdInput(event.target.value)}
      />
      <button onClick={getClientData}>Get Client Data</button>

      <ul>
        <li>id: {clientData?.id}</li>
        <li>name: {clientData?.name}</li>
        <li>email: {clientData?.email}</li>
        <li>random value: {clientData?.random}</li>
      </ul>
    </Layout>
  );
}
