import React from 'react';
import { Box, Button } from '@chakra-ui/react';
import { Form, Formik } from 'formik';
import InputField from '../components/InputField';
import { MeDocument, MeQuery, useLoginMutation } from '../generated/graphql';
import { RouteComponentProps } from 'react-router';
import { toErrorMap } from '../utils/toErrorMap';
import { setAccessToken } from '../utils/accessToken';
import { Link } from 'react-router-dom';

interface Props extends RouteComponentProps {}

const Login = ({ history }: Props) => {
  const [login] = useLoginMutation();

  return (
    <Box maxW="lg" mx="auto">
      <Formik
        initialValues={{ email: '', password: '' }}
        onSubmit={async (values, { setErrors }) => {
          const response = await login({
            variables: values,
            update: (cache, { data }) => {
              if (!data) {
                return null;
              }
              cache.writeQuery<MeQuery>({
                query: MeDocument,
                data: {
                  me: data.login.user,
                },
              });
            },
          });
          if (response.data?.login?.errors) {
            setErrors(toErrorMap(response.data.login.errors));
          } else if (response.data?.login?.accessToken) {
            setAccessToken(response.data.login.accessToken);
            history.push('/');
          }
        }}
      >
        {({ values, handleChange, isSubmitting }) => (
          <Form>
            <InputField name="email" placeholder="email" label="Email" />
            <Box mt={4}>
              <InputField name="password" placeholder="password" label="Password" type="password" />
            </Box>
            <Box mt={4} color="twitter.400">
              <Link to="/register">Hesabınız yok mu? Hemen kaydolun!</Link>
            </Box>
            <Button type="submit" colorScheme="teal" mt={4} isLoading={isSubmitting}>
              giriş yap
            </Button>
          </Form>
        )}
      </Formik>
    </Box>
  );
};

export default Login;
