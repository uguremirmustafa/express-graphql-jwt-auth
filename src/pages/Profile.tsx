import { Avatar, Badge, Flex, Text, Heading } from '@chakra-ui/react';
import { useMeQuery } from '../generated/graphql';

interface Props {}

const Profile = (props: Props) => {
  const { data, error, loading } = useMeQuery({ fetchPolicy: 'network-only' });
  if (loading) {
    return <div>loading...</div>;
  }
  if (error) return <pre>{JSON.stringify(error, null, 2)}</pre>;

  let colorScheme;
  switch (data?.me?.type) {
    case 'student':
      colorScheme = 'green';
      break;
    case 'lecturer':
      colorScheme = 'red';
      break;

    default:
      colorScheme = 'blue';
      break;
  }

  return (
    <div>
      <Heading mb="2">Profilim</Heading>
      <Flex align="center" gridGap="2" mb="2">
        <Avatar name={data?.me?.username} size="sm" />
        <Text>
          {data?.me?.username} - {data?.me?.id}
        </Text>
      </Flex>
      <Badge colorScheme={colorScheme}>{data?.me?.type}</Badge>
      <Text mt="2">{data?.me?.email}</Text>
    </div>
  );
};

export default Profile;
