import { useState } from 'react'
import MarkdownEditor from './MarkdownEditor';
import './index.css'

function App() {
  const [markdown, setMarkdown] = useState("Markdown!")

  return (
    <>
      <div className='App'>
        <h1 style={{textAlign:'center'}}>Markdown Previewer</h1>
        <MarkdownEditor markdown={markdown} setMarkdown={setMarkdown}></MarkdownEditor>
      </div>
    </>
  )
}

export default App
