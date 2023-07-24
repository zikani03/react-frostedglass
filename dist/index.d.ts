import { FrostedContextParams } from "./Context";
import { useFrostedEffect, useFrostAfterEffect } from "./hook";
declare function withFrost({ blurSize }: FrostedContextParams): {
    style: {
        filter: string;
    };
};
declare const _default: {
    FrostedContext: any;
    FrostedDiv: any;
    FrostedLabel: any;
    FrostedSpan: any;
    withFrost: typeof withFrost;
    useFrostedEffect: typeof useFrostedEffect;
    useFrostAfterEffect: typeof useFrostAfterEffect;
};
export default _default;
