import React, { useEffect, useState } from 'react';
import Routes from './Routes';
import { setAccessToken } from './utils/accessToken';
import { config } from './config';

interface Props {}

const App = (props: Props) => {
  const [loading, setLoading] = useState(true);
  console.log(process.env.NODE_ENV);

  console.log(config);

  useEffect(() => {
    fetch(`${process.env.SERVER_BASE_URL}/refresh_token`, {
      credentials: 'include',
      method: 'POST',
    }).then(async (x) => {
      const { accessToken } = await x.json();

      setAccessToken(accessToken);

      setLoading(false);
    });
  }, []);

  if (loading) {
    return <div>loading...</div>;
  }
  return <Routes />;
};

export default App;
