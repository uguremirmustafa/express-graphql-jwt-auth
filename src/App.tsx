import React, { useEffect, useState } from 'react';
import Routes from './Routes';
import { setAccessToken } from './utils/accessToken';

interface Props {}

const App = (props: Props) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_SERVER_BASE_URL}/refresh_token`, {
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
