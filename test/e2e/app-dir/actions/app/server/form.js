import { redirect, notFound } from 'next/navigation'

async function action(formData) {
  'use server'
  redirect(
    '/header?name=' +
      formData.get('name') +
      '&constructor=' +
      formData.constructor.name
  )
}

async function nowhere() {
  'use server'
  notFound()
}

async function here() {
  'use server'
  // nothing
}

async function file(formData) {
  'use server'
  const file = formData.get('file')
  console.log('File name:', file.name, 'size:', file.size)
}

export default function Form() {
  return (
    <>
      <hr />
      <form action={action}>
        <input type="text" name="name" id="name" required />
        <button type="submit" id="submit">
          Submit
        </button>
      </form>
      <hr />
      <form>
        <button formAction={nowhere} type="submit" id="nowhere">
          Go nowhere
        </button>
        <button formAction={here} type="submit" id="here">
          Go here
        </button>
      </form>
      <hr />
      <form action={file}>
        <input type="file" name="file" id="file" required />
        <button type="submit" id="upload">
          Upload file
        </button>
      </form>
    </>
  )
}
