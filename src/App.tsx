import React, {ChangeEvent} from 'react';
import './App.css';

interface Item {
    name: string,
    key: number | null,
}

const App: React.FC = () => {
    const [state, setState] = React.useState<Item>({name: '', key: null});
    const [items, setItems] = React.useState<Item[]>([]);

    const onChangeTodo = (e: ChangeEvent<HTMLInputElement>) => {
        setState({
            name: e.target.value,
            key: Date.now()
        })
    };

    return (
        <div className="App">
            <form id="to-do-form">
                <input type="text"
                       placeholder="Enter Text"
                       value={state.name}
                       onChange={onChangeTodo}
                />
                <button onClick={e => {
                    e.preventDefault();
                    setItems([...items, state])
                }}>
                    Add
                </button>
            </form>
            <div id="to-do-list">
                <ul>
                </ul>
            </div>
        </div>

    );
}

export default App;
