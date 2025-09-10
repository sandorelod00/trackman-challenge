import { useState } from 'react';
import Input from './components/Input/Input';
import TextArea from './components/TextArea/TextArea';
import Checkbox from './components/Checkbox/Checkbox';
import Button from './components/Button/Button';
import IconButton from './components/Button/IconButton';
import IconDelete from './components/Icons/IconDelete';
import IconStar from './components/Icons/IconStar';
import FacilityCard from './components/FacilityCard/FacilityCard';

function App() {
    const [test, setTest] = useState('');
    const [textAreaTest, setTextAreaTest] = useState('');

    return (
        <div className="w-[800px] flex flex-col items-center bg-gray-100 gap-4 p-4">
            <h1 className="text-3xl font-bold underline">Hello world!</h1>
            <Input
                label="Label"
                placeholder="Value"
                value={test}
                onChange={(e) => setTest(e.target.value)}
                required
            />
            <br />
            <TextArea
                label="Label"
                placeholder="Value"
                value={textAreaTest}
                onChange={(e) => setTextAreaTest(e.target.value)}
                required
            />
            <br />
            <Checkbox label="Default Facility" description="Default Facility" />
            <br />
            <Button label="Click Me" variant="primary" onClick={() => alert('Button Clicked!')} />
            <br />
            <Button label="Click Me" variant="secondary" onClick={() => alert('Button Clicked!')} />
            <br />
            <IconButton onClick={() => alert('Icon Button Clicked!')}>
                <IconDelete />
            </IconButton>
            <br />
            <IconButton onClick={() => alert('Icon Button Clicked!')}>
                <IconStar />
            </IconButton>
            <br />
            <FacilityCard />
        </div>
    );
}

export default App;
