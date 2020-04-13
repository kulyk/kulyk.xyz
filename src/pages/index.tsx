import React from 'react';
import {NextPage} from 'next';

type HomeProps = {
  userAgent: string;
};

export const Home: NextPage<HomeProps> = ({userAgent}: HomeProps) => (
  <h1>Hello world! - user agent: {userAgent}</h1>
);

Home.getInitialProps = async ({req}): Promise<HomeProps> => {
  const userAgent = req ? req.headers['user-agent'] || '' : navigator.userAgent;
  return {userAgent};
};

export default Home;
