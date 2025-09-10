import { useState } from 'react';
import Input from './components/Input/Input';
import TextArea from './components/TextArea/TextArea';
import Checkbox from './components/Checkbox/Checkbox';

function App() {
    const [test, setTest] = useState('');
    const [textAreaTest, setTextAreaTest] = useState('');

    return (
        <div>
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
        </div>
    );
}

export default App;
