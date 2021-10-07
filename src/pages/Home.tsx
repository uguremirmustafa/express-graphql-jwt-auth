import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableCaption,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
} from '@chakra-ui/react';

import { useUsersQuery } from '../generated/graphql';

interface Props {}

const Home = (props: Props) => {
  const { data, loading, error } = useUsersQuery();

  if (loading) {
    return (
      <div>
        <h2>yükleniyor...</h2>
      </div>
    );
  }
  if (error) {
    return (
      <Alert
        status="error"
        variant="solid"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        textAlign="center"
        height="200px"
        borderRadius="md"
      >
        <AlertIcon boxSize="40px" mr={0} />
        <AlertTitle mt={4} mb={1} fontSize="lg">
          Hata
        </AlertTitle>
        <AlertDescription maxWidth="sm">{error.message}</AlertDescription>
      </Alert>
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
