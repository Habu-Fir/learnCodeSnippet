'use client'

import { Editor } from "@monaco-editor/react"
import { Snippet } from "@prisma/client"
import { act, useState } from "react"
import * as actions from '@/actions'


interface SnippetEditFormProps {
    snippet: Snippet
}

export default function SnippetEditForm({ snippet }: SnippetEditFormProps) {
    const [code, setCode] = useState(snippet.snippet)

    const handleEditorChange = (value: string = "") => {
        setCode(value)
    }

    const editSnippet = actions.editSnippet.bind(null, snippet.id, code)

    return (
        <div className="m-3">
            <Editor
                height='40vh'
                theme="vs-dark"
                language="java-script"
                defaultValue={snippet.snippet}
                options={{ minimap: { enabled: false } }}
                onChange={handleEditorChange} />
            <form action={editSnippet}>
                <button className="mt-2 px-4 py-2 bg-blue-500 text-white rounded">
                    Save
                </button>
            </form>
        </div>
    )
}
