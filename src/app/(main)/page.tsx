import UploadFiles from '@/components/UploadFiles'

export default function Home() {
  return (
    <main className="container flex  min-h-screen flex-col  gap-y-4 p-24">
      <h3 className="m-10 text-5xl font-bold">
        Add Data to Firestore database
      </h3>
      <UploadFiles />
    </main>
  )
}
