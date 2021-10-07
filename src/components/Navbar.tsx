import { Button } from '@chakra-ui/button';
import { Text, Flex } from '@chakra-ui/layout';
import { Link } from 'react-router-dom';
import { MeDocument, MeQuery, useLogoutMutation, useMeQuery } from '../generated/graphql';
import { setAccessToken } from '../utils/accessToken';

interface Props {}

const Navbar = (props: Props) => {
  const { data, loading } = useMeQuery();
  const [logout, { client }] = useLogoutMutation();
  return (
    <Flex as="header" h="20" w="full" shadow="lg" color="white">
      <Flex
        as="nav"
        justify="space-between"
        alignItems="center"
        px="4"
        w="full"
        maxW="800px"
        mx="auto"
      >
        <Text as="h2" fontSize="lg" fontWeight="bold">
          <Link to="/">devugur - auth system</Link>
        </Text>
        <Flex gridGap="4" alignItems="center">
          <div>
            <Link to="/">Kullanıcılar</Link>
          </div>
          {loading && <Button>Yükleniyor...</Button>}
          {data?.me && (
            <>
              <div>
                <Link to="/profile">Profil</Link>
              </div>
              <Button
                colorScheme="pink"
                size="sm"
                onClick={async () => {
                  await logout({
                    update: (cache, { data }) => {
                      if (!data) {
                        return null;
                      }
                      cache.writeQuery<MeQuery>({
                        query: MeDocument,
                        data: {
                          me: null,
                        },
                      });
                    },
                  });
                  setAccessToken('');
                  await client!.resetStore();
                }}
              >
                Çıkış
              </Button>
            </>
          )}
          {!loading && !data?.me && (
            <>
              <div>
                <Link to="/register">Kaydol</Link>
              </div>
              <div>
                <Link to="/login">Giriş</Link>
              </div>
            </>
          )}
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Navbar;
