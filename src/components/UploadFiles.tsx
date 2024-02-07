'use client'
import { database } from '@/app/firebaseConfig'

import React, { ChangeEvent, useState } from 'react'

import { Button } from './ui/button'
import { Input } from './ui/input'

export default function UploadFiles() {
  const [isFileVisible, setIsFileVisible] = useState(false)
  const [file, setFile] = useState({})

  const uploadFile = (event: ChangeEvent<HTMLInputElement>) => {
    let files = event.target.files?.[0]
    console.log(files)
  }
  return (
    <div className="flex flex-col">
      <div className=" flex gap-5">
        <Button
          onClick={() => setIsFileVisible(!isFileVisible)}
          className="bg-orange-600"
        >
          Add a file
        </Button>
        {isFileVisible ? (
          <Input
            onChange={(event) => uploadFile(event)}
            className="w-[300px] text-red-500"
            type="file"
          />
        ) : (
          <></>
        )}
        <Button className="bg-blue-600">Create a folder</Button>
      </div>
    </div>
  )
}
