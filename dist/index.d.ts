export { FrostedContext } from "./Context";
export type { FrostedContextParams } from "./Context";
export { FrostedDiv } from "./Div";
export { FrostedLabel } from "./Label";
export { FrostedSpan } from "./Span";
export { useFrostedEffect, useFrostAfterEffect } from "./hook";
export declare function withFrost({ blurSize }: {
    blurSize: string;
}): {
    style: {
        filter: string;
    };
};
