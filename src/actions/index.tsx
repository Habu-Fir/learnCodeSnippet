'use server'

import { db } from '@/db'
import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'



export const createAction = async (formState: { message: string }, formData: FormData) => {
    try {


        //make sure the data is valid 
        const title = formData.get("title")
        const snippet = formData.get("snippet")
        if (typeof title != 'string' || title.length < 3) {
            return { message: "Title must be longer" }
        }
        if (typeof snippet != 'string' || snippet.length < 10) {
            return {
                message: 'snippet code must be longer'
            }
        }

        //date to the database
        await db.snippet.create({
            data: {
                title,
                snippet
            }

        })
    } catch (err: unknown) {
        if (err instanceof Error) {
            return { message: err.message };
        } else {
            return {
                message: 'Something went wrong'
            }
        }

    }
    revalidatePath('/')
    redirect('/')

}

export async function editSnippet(id: number, newContent: string) {
    await db.snippet.update({
        where: { id },
        data: { snippet: newContent },
    })
    revalidatePath(`/snippet/${id}`)
    redirect(`/snippet/${id}`)
}
export async function deleteSnippet(id: number) {

    await db.snippet.delete({
        where: { id }

    })
    revalidatePath('/')
    redirect('/')
}
