import { CSSProperties } from "react"

export type LoaderSizes = "1" | "2" | "3" | "4"

export interface LoaderProps {
    color?: CSSProperties["color"]
    size?: LoaderSizes
}
