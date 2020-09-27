import React, { useState } from 'react'
import '../List.scss'
import { withGraphqlAdd } from './ListFormHoc'


const MoviesFrom = ({ addMovie, setState }) => {
    const [name, setName] = useState()
    const [genre, seGenre] = useState()


    const genreChange = (e) => {
        seGenre(e.currentTarget.value)
    }
    const nameChange = (e) => {
        setName(e.currentTarget.value)
    }
    const setStatee = () => {
        return setState(false)
    }
    const handleSave = () => {
        addMovie({ name, genre });
        setStatee()
    };
    return (
        <div className='list-form'>
            <h2>Add film</h2>
            <form>
                <input placeholder='movie name' value={name} onChange={nameChange} type="text" />
                <input placeholder='movie genre' value={genre} onChange={genreChange} type="text" />
                <button onClick={handleSave}>Add Movie</button>
            </form>
        </div>
    )
}
export default withGraphqlAdd(MoviesFrom)