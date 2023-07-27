import { useEffect, useState } from 'react'
import { ReactMarkdown } from 'react-markdown/lib/react-markdown'
import './Snippet.scss'

interface SnippetProps {
  file: string
}

const Snippet = (props: SnippetProps) => {
  const [markdown, setMarkdown] = useState('')

  useEffect(() => {
    ;(async () => {
      const file = await import(
        `../../markdown/accessibility-ac-markdown-library/components/${props.file}.md`
      )
      const fetched = await fetch(file.default)
      const importedMarkdown = await fetched.text()

      setMarkdown(importedMarkdown)
    })()

    return () => {}
  })

  if (markdown) return <ReactMarkdown className="snippet-wrapper">{markdown}</ReactMarkdown>
  return <div>Markdown not found</div>
}

export default Snippet
