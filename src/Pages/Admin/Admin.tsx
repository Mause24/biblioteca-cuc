import React from "react"
import "./_styles.scss"
import { useAdmin } from "./useAdmin"

export const Admin: React.FC = () => {
    const {
        books,
        createBook,
        deleteBook,
        updateBook,
        editingBook,
        setEditingBook,
        handleEdit,
        newBook,
        setNewBook,
        setCurrentPage,
        PAGE_SIZE,
        currentPage,
    } = useAdmin()

    const isEditing = !!editingBook.id

    return (
        <div className="admin">
            <h2>Admin</h2>

            <form
                className="admin__form"
                onSubmit={e => {
                    e.preventDefault()
                    if (isEditing) {
                        updateBook()
                    } else {
                        createBook()
                    }
                }}
            >
                <input
                    type="text"
                    placeholder="Título"
                    value={isEditing ? editingBook.title : newBook.title}
                    onChange={e =>
                        isEditing
                            ? setEditingBook({
                                  ...editingBook,
                                  title: e.target.value,
                              })
                            : setNewBook({ ...newBook, title: e.target.value })
                    }
                />
                <input
                    type="text"
                    placeholder="Autor"
                    value={isEditing ? editingBook.author : newBook.author}
                    onChange={e =>
                        isEditing
                            ? setEditingBook({
                                  ...editingBook,
                                  author: e.target.value,
                              })
                            : setNewBook({ ...newBook, author: e.target.value })
                    }
                />
                <input
                    type="text"
                    placeholder="Descripción"
                    value={
                        isEditing
                            ? editingBook.description
                            : newBook.description
                    }
                    onChange={e =>
                        isEditing
                            ? setEditingBook({
                                  ...editingBook,
                                  description: e.target.value,
                              })
                            : setNewBook({
                                  ...newBook,
                                  description: e.target.value,
                              })
                    }
                />
                <select
                    value={
                        isEditing ? editingBook.availability.toString() : "true"
                    }
                    onChange={e =>
                        isEditing
                            ? setEditingBook({
                                  ...editingBook,
                                  availability: e.target.value === "true",
                              })
                            : setNewBook({
                                  ...newBook,
                                  availability: e.target.value === "true",
                              })
                    }
                >
                    <option value="true">Disponible</option>
                    <option value="false">No disponible</option>
                </select>
                <button type="submit">
                    {isEditing ? "Guardar libro" : "Crear libro"}
                </button>
            </form>

            {/* Tabla de libros */}
            <table className="admin__table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Título</th>
                        <th>Autor</th>
                        <th>Descripción</th>
                        <th>Disponibilidad</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {books.map(book => (
                        <tr key={book.id}>
                            <td>{book.id}</td>
                            <td>{book.title}</td>
                            <td>{book.author}</td>
                            <td>{book.description}</td>
                            <td>
                                {book.availability ? "disponible" : "ocupado"}
                            </td>
                            <td>
                                <button onClick={() => deleteBook(book.id)}>
                                    Eliminar
                                </button>

                                <button
                                    className="edit__button"
                                    onClick={() => handleEdit(book)}
                                >
                                    Editar
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div className="admin__table">
                <div className="pagination">
                    <button
                        disabled={currentPage === 1}
                        onClick={() => setCurrentPage(currentPage - 1)}
                    >
                        Prev
                    </button>
                    {Array(Math.ceil(books.length / PAGE_SIZE))
                        .fill(null)
                        .map((_, index) => (
                            <button
                                key={index}
                                className={
                                    currentPage === index + 1 ? "active" : ""
                                }
                                onClick={() => setCurrentPage(index + 1)}
                            >
                                {index + 1}
                            </button>
                        ))}
                    <button
                        disabled={
                            currentPage === Math.ceil(books.length / PAGE_SIZE)
                        }
                        onClick={() => setCurrentPage(currentPage + 1)}
                    >
                        Next
                    </button>
                </div>
            </div>
        </div>
    )
}
