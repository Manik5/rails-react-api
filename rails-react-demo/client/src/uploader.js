import React from 'react'
import Axios from 'axios'

const submitForm = function (event) {
  event.preventDefault();
  let formData = new FormData(event.target);
  Axios.post('/api/v1/uploads', formData)
    .then(res => {
      alert(`File has been uploaded ${res.data.url}`)
    })
    .catch(err => {
      console.error(err);
      alert('Error')
    })
}

export default function Uploader() {
  return (
    <div>
      <form onSubmit={submitForm}>
        <label htmlFor="file">File input</label>
        <input
          type="file"
          id="file"
          name="upload[file]" />
        <button type="submit">Send file</button>
      </form>
    </div>
  )
}
