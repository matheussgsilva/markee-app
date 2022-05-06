import { useRef, useState, useEffect, ChangeEvent, MouseEvent } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { MarkeeItem } from 'resources/files/type'
import { item } from 'data/item'

export function useFile () {
  const inputRef = useRef<HTMLInputElement>(null)
  const [files, setFiles] = useState<MarkeeItem[]>(item)

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>

    function updateStatus () {
      const file = files.find(file => file.active === true)

      if (!file || file.status !== 'editing') {
        return
      }

      timer = setTimeout(() => {
        setFiles(files => files.map(file => {
          if (file.active) {
            return {
              ...file,
              status: 'saving',
            }
          }
          return file
        }))

        setTimeout(() => {
          setFiles(files => files.map(file => {
            if (file.active) {
              return {
                ...file,
                status: 'saved',
              }
            }

            return file
          }))
        }, 400)
      }, 400)
    }

    updateStatus()

    return () => clearTimeout(timer)
  }, [files])

  const handleCreateNewFile = () => {
    inputRef.current?.focus()

    setFiles(files => files
      .map(file => ({
        ...file,
        active: false,
      }))
      .concat({
        id: uuidv4(),
        name: 'Sem Título',
        content: '',
        active: true,
        status: 'saved',
      }))
  }

  const handleUpdateFileName = (id: string) => (e: ChangeEvent<HTMLInputElement>) => {
    setFiles(files => files.map(file => {
      if (file.id === id) {
        return {
          ...file,
          name: e.target.value,
          status: 'editing',
        }
      }

      return file
    }))
  }

  const handleUpdateFileContent = (id: string) => (e: ChangeEvent<HTMLTextAreaElement>) => {
    setFiles(files => files.map(file => {
      if (file.id === id) {
        return {
          ...file,
          content: e.target.value,
          status: 'editing',
        }
      }

      return file
    }))
  }

  const handleSelectFile = (id: string) => (e: MouseEvent) => {
    e.preventDefault()

    inputRef.current?.focus()

    setFiles(files => files.map(file => ({
      ...file,
      active: file.id === id,
    })))
  }

  const handleRemoveFile = (id: string) => {
    setFiles(files => files.filter(file => file.id !== id))
  }

  return {
    handleCreateNewFile,
    handleUpdateFileName,
    handleUpdateFileContent,
    handleSelectFile,
    handleRemoveFile,
    inputRef,
    files,
  }
}
