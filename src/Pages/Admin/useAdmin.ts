import { Book } from "@/interfaces"
import { db } from "@/providers"
import {
    addDoc,
    collection,
    deleteDoc,
    doc,
    getDocs,
    updateDoc,
} from "firebase/firestore"
import { useEffect, useState } from "react"
import Swal from "sweetalert2"

export const useAdmin = () => {
    const PAGE_SIZE = 5
    const [books, setBooks] = useState<Book[]>([])
    const [editingBook, setEditingBook] = useState<Book>({} as Book)
    const [newBook, setNewBook] = useState<Omit<Book, "id">>({
        title: "",
        author: "",
        description: "",
        availability: true,
    })
    const [currentPage, setCurrentPage] = useState(1)

    useEffect(() => {
        fetchBooks()
    }, [])

    useEffect(() => {
        const startIndex = (currentPage - 1) * PAGE_SIZE
        const endIndex = startIndex + PAGE_SIZE
        const pagedBooks = books.slice(startIndex, endIndex)

        setBooks(pagedBooks)
    }, [currentPage])

    const fetchBooks = async () => {
        try {
            const booksCollection = collection(db, "books")
            const querySnapshot = await getDocs(booksCollection)

            const booksData: Book[] = []
            querySnapshot.forEach(doc => {
                booksData.push({
                    id: doc.id,
                    ...(doc.data() as Omit<Book, "id">),
                })
            })

            setBooks(booksData)
        } catch (error) {
            Swal.fire(
                "ERROR!",
                "Ha ocurrido un error, por favor intente mas tarde",
                "error"
            )
        }
    }

    const handleEdit = (book: Book) => {
        setEditingBook({ ...book })
    }

    const createBook = async () => {
        try {
            await addDoc(collection(db, "books"), {
                ...newBook,
                availability: true,
            })

            setNewBook({
                title: "",
                author: "",
                availability: true,
                description: "",
            })

            Swal.fire("CREADO!", "Libro creado correctamente", "success")
            fetchBooks()
        } catch (error) {
            Swal.fire(
                "ERROR!",
                "Ha ocurrido un error, por favor intente mas tarde",
                "error"
            )
        }
    }

    const deleteBook = async (id: string) => {
        try {
            await deleteDoc(doc(db, "books", id))

            Swal.fire("ELIMINADO!", "Se ha elimiando correctamente", "success")
            fetchBooks()
        } catch (error) {
            Swal.fire(
                "ERROR!",
                "Ha ocurrido un error, por favor intente mas tarde",
                "error"
            )
        }
    }

    const updateBook = async () => {
        try {
            await updateDoc(doc(db, "books", editingBook.id), {
                ...editingBook,
            })

            setEditingBook({} as Book)

            Swal.fire("EDITADO!", "Se ha editado correctamente", "success")
            fetchBooks()
        } catch (error) {
            Swal.fire(
                "ERROR!",
                "Ha ocurrido un error, por favor intente mas tarde",
                "error"
            )
        }
    }

    return {
        books,
        newBook,
        setNewBook,
        setEditingBook,
        editingBook,
        handleEdit,
        setCurrentPage,
        PAGE_SIZE,
        currentPage,
        createBook,
        deleteBook,
        updateBook,
    }
}
