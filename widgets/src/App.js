import React, {useState} from 'react';
import Dropdown from './components/Dropdown';
// import Accordion from './components/Accordion'
// import Search from './components/Search'

// const items = [{ title: 'What is React?', content: 'React is a front end javascript frameowrk' }, { title: 'Why us React?', content: 'React is a favourite framework for devs' }, { title: 'How do you use React?', content: 'You  use React by creating components' }]
const options = [{label: 'The Colour Red', value: 'red'}, {label: 'The Colour Green', value: 'green'}, {label: 'A Shade Blue', value: 'blue'}]
const App = () => {
    const [selected, setSelected] = useState(options[0]);
    return (
        <div>
            {/* <Accordion items={items} /> */}
            {/* <Search /> */}
            <Dropdown
            onSelectedChange={setSelected}
            selected={selected}
            options={options}/>
        </div>)
}
export default App