// react-frostedglass
export {FrostedContext} from "./Context"
export type {FrostedContextParams} from "./Context"
export { FrostedDiv } from "./Div";
export { FrostedLabel } from "./Label";
export { FrostedSpan } from "./Span";
export { useFrostedEffect, useFrostAfterEffect } from "./hook";

export function withFrost({ blurSize }: { blurSize: string }) {
    let mergedProps = Object.assign({}, {
        style: {
            filter: `blur(${blurSize})`
        }
    })

    return {...mergedProps}
}
