import React, { useState } from 'react';
import { Text, StyleSheet, ScrollView } from 'react-native';
import ResultsList from '../components/ResultsList';
import SearchBar from '../components/SearchBar';
import useRestaurants from '../hooks/useRestaurants';

const SearchScreen = () => {
  const [term, setTerm] = useState("");
  const [searchAPI, results, errorMessage] = useRestaurants()

  const filterByPrice = (price) => {
    return results.filter(result => result.price === price)
  }

  return (
    <>
      <SearchBar
        term={term}
        onTermChange={setTerm}
        onTermSubmit={() => searchAPI(term)} />
      {errorMessage ? <Text>{errorMessage}</Text> : null}
      <ScrollView>
        <ResultsList results={filterByPrice('$')} title="Cost Effective" />
        <ResultsList results={filterByPrice('$$')} title="Bit Pricier" />
        <ResultsList results={filterByPrice('$$$')} title="Big Spender" />
      </ScrollView>
    </>
  )

}
const styles = StyleSheet.create({})
export default SearchScreen