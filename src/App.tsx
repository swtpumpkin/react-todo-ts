import React, { ChangeEvent } from 'react';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

library.add(faTrash);

interface Item {
    name: string,
    key: number,
}

const App: React.FC = () => {
    const [state, setState] = React.useState<Item>({name: '', key: 0});
    const [items, setItems] = React.useState<Item[]>([]);

    const onChangeTodo = (e: ChangeEvent<HTMLInputElement>) => {
        setState({
            name: e.target.value,
            key: 0
        })
    };

    const deleteItem = (item: Item) => {
        setItems(items.filter(obj => obj.key !== item.key))
    };

    return (
        <div className="App">
            <form id="to-do-form" onSubmit={e => {
                e.preventDefault();
                // 빈 값 이벤트 끊기
                if (!state.name) return;
                setItems([...items, {
                    ...state,
                    key: Date.now()
                }]);
            }}>
                <input type="text"
                       placeholder="Enter Text"
                       value={state.name}
                       onChange={onChangeTodo}
                />
                <button type="submit">
                    Add
                </button>
            </form>
            <div id="to-do-list">
                <ul className="item-list">
                    {items.map((item) => <li className="item" key={item.key}><p>{item.name}</p><span
                        onClick={() => deleteItem(item)}>
                        <FontAwesomeIcon icon="trash"/>
                    </span>
                    </li>)}
                </ul>
            </div>
        </div>

    );
}

export default App;
