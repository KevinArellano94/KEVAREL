import { useState } from "react";
import Layout from '../components/Layout/Layout';
import styles from '../styles/Home.module.css'
import SearchInput from '../components/SearchInput/SearchInput';
import CountriesTable from '../components/CountriesTable/CountriesTable'

export default function Home({countries}) {
  console.log(countries);

  const [keyword, setKeyword] = useState("");

  const filteredCountries = countries.filter(country =>
    country.name.toLowerCase().includes(keyword) ||
    country.region.toLowerCase().includes(keyword)
  );

  const onInputChange = (e) => {
    e.preventDefault();

    setKeyword(e.target.value.toLowerCase());
  }

  return (
    <Layout>
      <div className={styles.counts}>
        Total countries found: {countries.length}
      </div>
      
      <SearchInput
        placeholder="Filter by Nmae, Region or SubRegion"
        onChange={onInputChange}
      />

      <CountriesTable countries={filteredCountries} />
    </Layout>
  );
}

export const getStaticProps = async () => {
  const res = await fetch("https://restcountries.eu/rest/v2/all");
  const countries = await res.json();
  return {
    props: {
      countries,
    }
  }
}