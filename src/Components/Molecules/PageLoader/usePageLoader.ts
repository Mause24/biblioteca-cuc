import { PageLoaderProps } from "interfaces"

export const usePageLoader = (props: PageLoaderProps) => {
    const { ...rest } = props

    return {
        rest,
    }
}
