// react-frostedglass
import {FrostedContext, FrostedContextParams} from "./Context"
import FrostedDiv from "./Div";
import FrostedLabel from "./Label";
import FrostedSpan from "./Span";
import { useFrostedEffect, useFrostAfterEffect } from "./hook";

function withFrost({ blurSize }: FrostedContextParams) {
    let mergedProps = Object.assign({}, {
        style: {
            filter: `blur(${blurSize})`
        }
    })

    return {...mergedProps}
}

export default {
    FrostedContext,
    FrostedDiv,
    FrostedLabel,
    FrostedSpan,
    withFrost,
    useFrostedEffect,
    useFrostAfterEffect
}