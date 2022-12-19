import React, { useState, useEffect } from 'react';
import { Meta } from '@storybook/react';
import GridFormSubmit, { Address } from '../components/GridForm';

const logInfo = (props: Address) => {
  const MyPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      const error = false;
      if (!error) {
        resolve(console.log(props));
      } else {
        reject(new Error('Error'));
      }
    }, 5000);
  });
  MyPromise.then().catch((err) => console.log(err));
};
const getInfo = async () => {
  const promise = new Promise((resolve) => {
    setTimeout(
      () =>
        resolve({
          street: 'Vitosha 100',
          city: 'Sofia',
          region: 'Sofia',
          zip: '1000',
          country: 'Bulgaria',
        }),
      3000,
    );
  });
  const result = await promise.catch((err) => console.log(err));
  return result;
};

export function FormWithDefaultValues() {
  const [values, setValues] = useState<Address | null>({
    street: '',
    city: '',
    region: '',
    zip: '',
    country: '',
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  useEffect(() => {
    setLoading(true);
    getInfo()
      .then((res: any) => setValues(res))
      .catch(() => {
        setError(true);
        setValues(null);
      })
      .finally(() => setLoading(false));
  }, []);
  if (error) {
    return <main>An error has ocurred</main>;
  }
  const handleSubmit = (values: Address) => {
    logInfo(values);
    if (error) {
      console.log(error);
    }
  };
  return (
    <GridFormSubmit
      onFormSubmit={handleSubmit}
      defaultValues={values}
      loading={loading}
    />
  );
}

const meta: Meta = {
  title: 'GridForm',
  component: GridFormSubmit,
};

export default meta;
