import React from 'react'

export default function EditGame() {
  return (
    <section id="edit-page" className="auth">
        <htmlForm id="edit">
          <div className="container">

            <h1>Edit Game</h1>
            <label htmlFor="leg-title">Legendary title:</label>
            <input type="text" id="title" name="title" />

            <label htmlFor="category">Category:</label>
            <input type="text" id="category" name="category" />

            <label htmlFor="levels">MaxLevel:</label>
            <input type="number" id="maxLevel" name="maxLevel" min="1" />

            <label htmlFor="game-img">Image:</label>
            <input type="text" id="imageUrl" name="imageUrl" />

            <label htmlFor="summary">Summary:</label>
            <textarea name="summary" id="summary"></textarea>
            <input className="btn submit" type="submit" />

          </div>
        </htmlForm>
      </section>
  )
}
