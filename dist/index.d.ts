export { FrostedContext } from "./Context";
export type { FrostedContextParams } from "./Context";
export { FrostedDiv } from "./Div";
export type { FrostedLabel } from "./Label";
export type { FrostedSpan } from "./Span";
export { useFrostedEffect, useFrostAfterEffect } from "./hook";
export declare function withFrost({ blurSize }: {
    blurSize: string;
}): {
    style: {
        filter: string;
    };
};
