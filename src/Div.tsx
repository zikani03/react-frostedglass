import React, { useContext } from "react"
import {FrostedContext} from "./Context"

export function FrostedDiv(props) {
    const ctx = useContext(FrostedContext)
    return (
        <div {...props} style={{filter: `blur(${ctx.blurSize})` }}>
            {props.children}
        </div>
    )
}

export default FrostedDiv
