import { useState } from 'react';
import Input from './components/core/Input/Input';
import TextArea from './components/core/TextArea/TextArea';
import Checkbox from './components/core/Checkbox/Checkbox';
import Button from './components/core/Button/Button';
import IconButton from './components/core/Button/IconButton';
import IconDelete from './components/core/Icons/IconDelete';
import IconStar from './components/core/Icons/IconStar';
import FacilityCard from './components/core/FacilityCard/FacilityCard';
import { Outlet } from 'react-router-dom';
import NavBar from './components/navigation/NavBar';

function App() {
    const [test, setTest] = useState('');
    const [textAreaTest, setTextAreaTest] = useState('');

    return (
        <>
            <NavBar />
            <main>
                <Outlet />
            </main>
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
                <Button
                    label="Click Me"
                    variant="primary"
                    onClick={() => alert('Button Clicked!')}
                />
                <br />
                <Button
                    label="Click Me"
                    variant="secondary"
                    onClick={() => alert('Button Clicked!')}
                />
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
        </>
    );
}

export default App;
