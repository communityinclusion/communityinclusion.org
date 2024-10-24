// imports
import React from 'react';
import Layout from "../../components/layout"
import Search from "../../components/search"
const searchIndices = [{ name: `Pages`, title: `Pages` }]


export default function App() {
  return(
    <Layout>
    <div>
    <Search indices={searchIndices} />
    </div>
    </Layout>
  );
}