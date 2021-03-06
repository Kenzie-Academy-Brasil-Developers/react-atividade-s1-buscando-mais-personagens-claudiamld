import Characters from './Components/Characters'
import { useEffect, useState } from 'react';
import './App.css';

function App() {

  const [characterList, setcharacterList] = useState([])
  const [currentPage, setCurrentPage] = useState(1)

  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/?page=${currentPage}`)
      .then((response) => response.json())
      .then((response) => setcharacterList(response.results))
      .catch((err) => console.log(err))

    return;
  }, [currentPage])


  const previousPage = () => {
    currentPage > 1 ? setCurrentPage(currentPage - 1) : setCurrentPage(currentPage)
  }

  const nextPage = () => {
    setCurrentPage(currentPage + 1)
  }

  return (
    <div>
      <Characters characterList={characterList} />
      <div className='btn-div'>
        <button onClick={previousPage} className='btn-previous'>Página anterior</button>
        <button onClick={nextPage} className='btn-next'>Próxima página</button>
      </div>
    </div>
  );
}

export default App;
