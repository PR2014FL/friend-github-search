import { useState, createContext, useContext } from 'react';
import { useFetch } from './useFetch';
import './App.css';
import SearchBar from './components/SearchBar';
import GithubContainer from './components/GithubContainer';

export const GithubContext = createContext(null); 

function App() {
  const [searchTerm, setSearchTerm] = useState(''); 
  const [userData, setUserData] = useState(null); 

  const handleSearch = (username) => {
 
    
  };

  return (
    <GithubContext.Provider value={{ searchTerm, setSearchTerm, userData, handleSearch }}>
      <>
        <h1>Know Your Github Status!</h1>
        <SearchBar searchVal={handleSearch} placeholder="Enter Github Username..." />
        <GithubContainer  /> 
      </>
    </GithubContext.Provider>
  );
}

export default App;
