import React, { useEffect, useState } from 'react';
import Routes from './Routes';
import { setAccessToken } from './utils/accessToken';

interface Props {}

const App = (props: Props) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('http://localhost:4000/refresh_token', { credentials: 'include', method: 'POST' }).then(
      async (x) => {
        const { accessToken } = await x.json();

        setAccessToken(accessToken);

        setLoading(false);
      }
    );
  }, []);

  if (loading) {
    return <div>loading...</div>;
  }
  return <Routes />;
};

export default App;
