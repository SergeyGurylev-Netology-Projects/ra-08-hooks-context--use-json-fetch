import './app.css'
import Data from './components/data.js';
import Error from "./components/error.js";
import Loading from './components/loading.js';

export function App() {
  const url = 'http://localhost:7071';

  return (
    <>
      <Data url={url} opts={'/data'}/>
      <Error url={url} opts={'/error'}/>
      <Loading url={url} opts={'/loading'}/>
    </>
  )
}
