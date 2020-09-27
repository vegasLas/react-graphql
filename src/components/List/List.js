import React, { useState } from 'react'
import withHOC from './queries'
import img from '../../img/images.jpg'
import './List.scss'
import MoviesFrom from './ListForm/ListForm'
import { withGraphqlDelete } from './ListForm/ListFormHoc'
import { compose } from 'recompose'



const MoviesList = ({ m, deleteMovie }) => {
    const handleDelete = () => {
        deleteMovie(m.id)
    }
    return (
        <div className="list__body" >
            <img src={img} />
            <div className="list__content">
                <div>
                    {m.name}
                </div>
                <div>
                    {m.genre}
                </div>
            </div>
            <button onClick={handleDelete}>Remove</button>
        </div>
    )
}
const List = (prop) => {
    const deleteMovie = prop.deleteMovie
    const movies = prop.data.movies
    const [state, setState] = useState(false)
    console.log(prop.data)
    if (!movies) return <div>Loading..</div>
    if (state) return <MoviesFrom setState={setState} />
    if (!state) return (
        <div className='list'>
            <button onClick={() => setState(true)}>Add movie</button>
            {movies.map(m => <MoviesList key={m.id} m={m} deleteMovie={deleteMovie} />)}
        </div>
    )

}

export default compose(withHOC, withGraphqlDelete)(List)