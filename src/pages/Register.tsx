import React from 'react';
import { Box, Button } from '@chakra-ui/react';
import { Form, Formik } from 'formik';
import InputField from '../components/InputField';
import { useRegisterMutation } from '../generated/graphql';
import { toErrorMap } from '../utils/toErrorMap';
import { RouteComponentProps } from 'react-router';

interface Props extends RouteComponentProps {}

const Register = ({ history }: Props) => {
  const [register] = useRegisterMutation();

  return (
    <div>
      <Formik
        initialValues={{ email: '', username: '', password: '' }}
        onSubmit={async (values, { setErrors }) => {
          const response = await register({ variables: { options: values } });
          if (response.data?.register?.errors) {
            setErrors(toErrorMap(response.data.register.errors));
          } else if (response.data?.register?.user) {
            console.log(response.data.register.user);
            history.push('/');
          }
        }}
      >
        {({ values, handleChange, isSubmitting }) => (
          <Form>
            <InputField name="username" placeholder="username" label="Username" />
            <Box mt={4}>
              <InputField name="email" placeholder="email" label="Email" />
            </Box>
            <Box mt={4}>
              <InputField name="password" placeholder="password" label="Password" type="password" />
            </Box>
            <Button type="submit" colorScheme="teal" mt={4} isLoading={isSubmitting}>
              register
            </Button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Register;
