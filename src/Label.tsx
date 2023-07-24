import { useContext } from "react"
import FrostedContext from "./Context"

export function FrostedLabel(props) {
    const ctx = useContext(FrostedContext)
    return (
        <label {...props} style={{filter: `blur(${ctx.blurSize})`}}>
            {props.children}
        </label>
    )
}

export default FrostedLabel;

