'use client'

import React from 'react'
import { useFormState } from 'react-dom'
import * as actions from '@/actions'


const NewSnippet = () => {

    const [formState, action] = useFormState(actions.createAction, { message: '' })



    return (
        <form action={action}>
            <h3 className='font-bold m-3'>Create snippet</h3>
            <div className='flex flex-col gap-4'>
                <div className='flex gap-4'>
                    <label htmlFor='title' className='w-12'>Title</label>
                    <input className='rounded border w-1/2 p-2' name='title' id='title' />
                </div>
                <div className='flex flex-col gap-4'>
                    <div className='flex gap-4'>
                        <label htmlFor='title' className='w-12'>Snippet</label>
                        <textarea className='rounded border w-1/2 p-2' name='snippet' id='snippet' />
                    </div>
                </div>{
                    formState.message ? <div className='border rounded p-2 bg-red-300 w-1/4'>{formState.message}</div> : null
                }

                <button type='submit' className='bg-green-700 p-2 rounded w-1/12'>Save</button>
            </div>

        </form>
    )
}

export default NewSnippet