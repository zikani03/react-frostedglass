import { useContext } from "react"
import {FrostedContext} from "./Context"

export function FrostedSpan(props) {
    const ctx = useContext(FrostedContext)
    return (
        <span {...props} style={{filter: `blur(${ctx.blurSize})`}}>
            {props.children}
        </span>
    )
}

export default FrostedSpan;

