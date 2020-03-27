import React, { useState } from 'react';

const NewSongForm = ({ addSong }) => {
  const [title, setTitle] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    addSong(title);
    setTitle('');
  }

  return (
    <form>
      <label>Song Name: </label>
      <input type="text" value={title} required onChange={(e) => { setTitle(e.target.value) }} />
      <input type="submit" value="Add Song" onClick={handleSubmit} />
    </form>
  );
}

export default NewSongForm;