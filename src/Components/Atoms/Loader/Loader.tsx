import { LoaderProps } from "@/interfaces"
import { classNames } from "@/utils"
import "./_styles.scss"

export const Loader = ({ color = "white", size }: LoaderProps): JSX.Element => {
    return (
        <div style={{ scale: size, color: "" }}>
            <svg width="30" height="30">
                <circle
                    stroke={color}
                    cy="15"
                    cx="15"
                    r="10"
                    className={classNames("loader")}
                />
            </svg>
        </div>
    )
}
