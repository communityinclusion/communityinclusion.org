import React from "react";
import Layout from "../../components/layout"
import GoogleCustomSearchResults from "../../components/GoogleCustomSearchResults.jsx";



function SearchPage() {
  return (
    <Layout>
      <h1 className="page-title">Search</h1>
        <GoogleCustomSearchResults />
    </Layout>
  );
}

export default SearchPage;