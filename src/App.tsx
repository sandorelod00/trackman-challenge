import { useState } from 'react'
import Input from './components/Input/Input'

function App() {
    const [test, setTest] = useState('')

    return (
        <>
            <h1 className="text-3xl font-bold underline">Hello world!</h1>
            <Input
                label="Label"
                placeholder="Value"
                value={test}
                onChange={(e) => setTest(e.target.value)}
                required
                className="mt-4"
            />
        </>
    )
}

export default App
