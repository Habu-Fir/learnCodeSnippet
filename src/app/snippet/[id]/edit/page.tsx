import { db } from '@/db'
import React from 'react'
import SnippetEditForm from '@/components/snippet-edit-form'
import { notFound } from 'next/navigation'

interface ShowEditPageProps {
    params: {
        id: string
    }
}

export default async function ShowEditPage(props: ShowEditPageProps) {
    const id = parseInt(props.params.id)
    const snippet = await db.snippet.findFirst({
        where: { id }
    })

    if (!snippet) {
        return notFound()
    }

    return (
        <div>
            <SnippetEditForm snippet={snippet} />
        </div>
    )
}
