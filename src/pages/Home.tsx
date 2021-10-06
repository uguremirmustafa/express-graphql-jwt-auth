import { Table, Thead, Tbody, Tr, Th, Td, TableCaption } from '@chakra-ui/react';
import { useUsersQuery } from '../generated/graphql';

interface Props {}

const Home = (props: Props) => {
  const { data, loading } = useUsersQuery({ fetchPolicy: 'network-only' });

  if (loading) {
    return (
      <div>
        <h2>loading...</h2>
      </div>
    );
  }

  return (
    <div>
      <Table variant="simple">
        <TableCaption>Kullanıcı Listesi</TableCaption>
        <Thead>
          <Tr>
            <Th>Id</Th>
            <Th>Kullanıcı Adı</Th>
            <Th>E-posta</Th>
            <Th>Type</Th>
          </Tr>
        </Thead>
        <Tbody>
          {data?.users.map((user) => (
            <Tr key={user.id}>
              <Td>{user.id}</Td>
              <Td>{user.username}</Td>
              <Td>{user.email}</Td>
              <Td>{user.type}</Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </div>
  );
};

export default Home;
