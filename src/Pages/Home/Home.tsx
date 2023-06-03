import "./_styles.scss"
import { useHome } from "./useHome"

export const Home = (): JSX.Element => {
    const { filteredBooks, handleSearch, searchQuery } = useHome()

    return (
        <div className="home">
            <div className="search">
                <input
                    type="text"
                    placeholder="Buscar por título..."
                    value={searchQuery}
                    onChange={handleSearch}
                />
            </div>
            <div className="cards">
                {filteredBooks.map(book => (
                    <div className="card" key={book.id}>
                        <h3>{book.title}</h3>
                        <p>{book.description}</p>
                        <p>Disponibilidad: {book.availability}</p>
                        <p>Autor: {book.author}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}
