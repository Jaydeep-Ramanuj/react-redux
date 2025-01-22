import { useId } from 'react';
import './App.css';
import Counter from './components/Counter';
import ProductsPage from './components/productsPage';
import TodoApp from './components/TodoApp';
function App() {
  // const uniqueID = useId();
  const uniqueID = crypto.randomUUID();

  console.log(uniqueID);

  return (
    <>
      {/* <h1 className="bg-slate-200 py-4 ">Hello</h1> */}
      {/* <Counter /> */}
      {/* <TodoApp /> */}
      {/* <ProductsPage /> */}
    </>
  );
}

export default App;
