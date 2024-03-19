import DataInputComponent from '../../components/dataInput'

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-center">
            <div className="max-w-4xl items-center justify-center font-mono text-sm flex-col gap-4">
                <DataInputComponent />
            </div>
        </main>
    )
}
