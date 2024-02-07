import { writeFile } from 'fs/promises'
import { join } from 'path'

const ServerUploadPage = () => {
  async function upload(data: FormData) {
    'use server'

    const file: File | null = data.get('file') as unknown as File

    if (!file) {
      throw new Error('No File uploaded')
    }

    const bytes = await file.arrayBuffer()
    const buffer = Buffer.from(bytes)

    //With the file in the buffer you can do what you want with it
    //Fot this we'll just write it to the filesystem in a new location

    const path = join('/', 'tmp', file.name)
    await writeFile(path, buffer)
    console.log(`open ${path} to see the uploaded file`)

    return { success: true }
  }

  return (
    <div>
      <form action={upload}>
        <input type="file" name="file" />
        <input type="submit" value="upload" />
      </form>
    </div>
  )
}

export default ServerUploadPage
