import { FileType, MediaType } from '@/definitions/post'

// https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Common_types
export function isValidFileType(file: File) {
  return isImage(file) || isText(file)
}

/**
 * Validate file size
 * @param file
 * @param maxFileSize - in MBytes
 * @returns
 */
export function isValidFileSize(file: File, maxFileSize: number) {
  const fileSizeInMB = file.size / 1024 / 1024
  return fileSizeInMB <= maxFileSize
}

function isImage(file: File) {
  return file.name.match(/.(jpg|jpeg|png|gif|JPEG|JPG|PNG|GIF)$/g) !== null
}

function isText(file: File) {
  return file.name.match(/.(txt|html|css|js|TXT|HTML|CSS|JS)$/g) !== null
}

export async function convertFileToString(file: File): Promise<MediaType> {
  return new Promise((resolve, reject) => {
    let type: FileType = 'text'
    const reader = new FileReader()
    if (isImage(file)) {
      type = 'image'
      reader.readAsDataURL(file)
    } else {
      // PRE: text/plain
      reader.readAsText(file) // by default, encode in UTF-8
    }

    reader.addEventListener(
      'load',
      () => {
        resolve({ type, value: reader.result as string })
      },
      false
    )
    reader.onerror = (error) => reject(error)

    // reader.onload = () => resolve(reader.result as string)
    // reader.onerror = (error) => reject(error)
  })
}
