// imports
import React from 'react';
import PublicationArchive from '../../components/PublicationArchive';
import pubs from './pubs.json';
import Layout from "../../components/layout"
import Seo from "../../components/seo"


export default function App() {
  return(
    <Layout>
    <div>
      <PublicationArchive pubs = { pubs } />
    </div>
    </Layout>
  );
}
export const Head = () => <Seo title="Publications Archive" />
