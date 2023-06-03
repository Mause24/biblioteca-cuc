import { Book } from "@/interfaces"
import { db } from "@/providers"
import { collection, getDocs } from "firebase/firestore"
import { useEffect, useState } from "react"

export const useHome = () => {
    const [searchQuery, setSearchQuery] = useState("")
    const [booksData, setBooksData] = useState<Book[]>([])
    const [filteredBooks, setFilteredBooks] = useState<Book[]>(booksData)

    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        const query = e.target.value.toLowerCase()
        setSearchQuery(query)

        const filtered = booksData.filter(book =>
            book.title.toLowerCase().includes(query)
        )
        setFilteredBooks(filtered)
    }

    const getData = async (): Promise<void> => {
        try {
            const collectionRef = collection(db, "books")
            const querySnapshot = await getDocs(collectionRef)
            const entries = querySnapshot.docs.map(item => item.data() as Book)
            setBooksData(entries)
            setFilteredBooks(entries)
        } catch (error) {
            console.error(error)
        }
    }

    useEffect(() => {
        let mounted = true

        if (mounted) getData()

        return () => {
            mounted = false
        }
    }, [])

    return {
        searchQuery,
        filteredBooks,
        handleSearch,
    }
}
