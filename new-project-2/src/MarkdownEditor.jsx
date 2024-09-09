import React from "react";
import ReactMarkdown from 'react-markdown'
import { useState } from 'react';
import remarkGfm from 'remark-gfm';
import remarkBreaks from "remark-breaks";
import './index.css'

const MarkdownEditor = () => {
    const [markdown, setMarkdown] = useState(`# Header (H1)

## Sub Header (H2)

Here is a link to [@PureAdamC](https://www.youtube.com/@PureAdamC).

Inline code example: \`const x = 10;\`

Code block example:
\`\`\`javascript
const x = 10;
console.log(x);
\`\`\`

- List item 1
- List item 2
  - Sub-list item

> This is a blockquote. It's used to highlight text or quotes.

![Sample Image](https://via.placeholder.com/150)

**This text is bolded.**`);
    return(
        <div className="container" >
            <textarea
                id="editor"
                value={markdown}
                onChange={(e) => setMarkdown(e.target.value)}
            ></textarea>
            <div className="preview" id="preview"  
                aria-live="polite">
            <ReactMarkdown
                    children={markdown}
                    remarkPlugins={[remarkGfm, remarkBreaks]}
                    
                />
            </div>
        </div>
    );
};

export default MarkdownEditor;