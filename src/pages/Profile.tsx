import { useMeQuery } from '../generated/graphql';

interface Props {}

const Profile = (props: Props) => {
  const { data, error, loading } = useMeQuery({ fetchPolicy: 'network-only' });
  if (loading) {
    return <div>loading...</div>;
  }
  if (error) return <pre>{JSON.stringify(error, null, 2)}</pre>;

  return (
    <div>
      <h2>profile</h2>
      <pre>{JSON.stringify(data?.me, null, 2)}</pre>
    </div>
  );
};

export default Profile;
