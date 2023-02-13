import { useSelector } from 'react-redux';
import './App.css';
import Forms from './components/Forms';

function App() {
    const todos = useSelector((state) => {
        return state.todos;
    });

    return (
        <>
            <Forms />
        </>
    );
}

export default App;
