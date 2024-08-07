'use client'

interface errorPageProps {
    error: Error,
    reset: () => void
}

function error({ error }: errorPageProps) {
    return (
        <div>{error.message}</div>
    )
}

export default error