import { Loader } from "@/Components"
import { PageLoaderProps } from "@/interfaces"
import "./_styles.scss"
import { usePageLoader } from "./usePageLoader"

export const PageLoader = (props: PageLoaderProps): JSX.Element => {
    const { rest } = usePageLoader(props)
    return (
        <div className="pageLoader" {...rest}>
            <Loader size="3" />
        </div>
    )
}
