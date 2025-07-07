import AddTodos from './components/AddTodos';
import { Todos } from './components/Todos';

function App() {
  return (
    <div className='flex justify-center items-center h-screen'>
      <div className='w-96 bg-white/20 rounded-lg p-5'>
        <h2 className='text-2xl font-semibold mb-4'>Todo List</h2>
        <AddTodos />
        {/* Assuming Todos component is imported and used here */}
        <Todos />
      </div>
    </div>
  );
}

export default App;
