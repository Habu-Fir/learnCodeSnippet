import { db } from "@/db"
import Link from "next/link"
import { notFound } from "next/navigation"
import * as actions from '@/actions'


interface showSnippetPageProps {
    params: {
        id: string
    }
}

const showSnippetPage = async (props: showSnippetPageProps) => {
    await new Promise((r) => setTimeout(r, 2000))
    const snippet = await db.snippet.findFirst({
        where: {
            id: parseInt(props.params.id)
        }
    })

    if (!snippet) {
        return notFound()
    }

    const deleteSnippet = actions.deleteSnippet.bind(null, snippet.id)


    return (
        <div>
            <div className="flex justify-between items-center m-3">
                <div className="font-bold text-xl">{snippet.title}</div>
                <div className="flex gap-4">
                    <Link
                        href={`/snippet/${props.params.id}/edit`}
                        className="border rounded p-2">Edit</Link>
                    <form action={deleteSnippet}> <button className="border rounded p-2">Delete</button></form>

                </div>
            </div>
            <pre className="bg-gray-200 rounded p-2 border-gray-200">
                <code>
                    {snippet.snippet}
                </code>
            </pre>

        </div>

    )
}

export default showSnippetPage

export async function generateStaticParams() {
    const snippetData = await db.snippet.findMany()

    return snippetData.map(snippet => {
        {
            return {
                id: snippet.id.toString()
            }
        }
    })

}