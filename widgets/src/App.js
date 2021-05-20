import React, { useState } from 'react';
import Dropdown from './components/Dropdown';
import Translate from './components/Translate';
import Accordion from './components/Accordion'
import Search from './components/Search'
import Route from './components/Route'
import Header from './components/Header';

const App = () => {
    const items = [{ title: 'What is React?', content: 'React is a front end javascript frameowrk' }, { title: 'Why us React?', content: 'React is a favourite framework for devs' }, { title: 'How do you use React?', content: 'You  use React by creating components' }]
    const options = [{ label: 'The Colour Red', value: 'red' }, { label: 'The Colour Green', value: 'green' }, { label: 'A Shade Blue', value: 'blue' }]
    const [selected, setSelected] = useState(options[0]);

    return (
        <div>
            <Header />
            <Route path="/" >
                <Accordion items={items} />
            </Route>
            <Route path="/list">
                <Search />
            </Route>
            <Route path="/dropdown">
                <Dropdown label="Select a colour" options={options} selected={selected} onSelectedChange={setSelected} />
            </Route>
            <Route path="/translate">
                <Translate />
            </Route>
        </div>)
}
export default App