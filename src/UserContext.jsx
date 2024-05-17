import {createContext} from 'react';

const [inputText, setInputText] = useState({
    searchTerm: "",
  });

const UserContext = createContext(null);