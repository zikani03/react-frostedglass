import { useLayoutEffect, useState, useRef, MutableRefObject, SetStateAction, Dispatch} from "react";

export function useFrostedEffect(intervalMs: number, blurSize: string = '0.3em') {
    let isBlurredRef: MutableRefObject<boolean> = useRef(false)
    const targetBlurSize = blurSize;
    const [currentBlurSize, setCurrentBlurSize] = useState('0em');
    useFrostAfterEffect(intervalMs, targetBlurSize, setCurrentBlurSize, isBlurredRef);

    return [currentBlurSize, isBlurredRef]
}

export function useFrostAfterEffect(intervalMs: number, targetBlurSize: string, setBlurState: Dispatch<SetStateAction<string>>, isBlurredRef: MutableRefObject<Boolean>) {
    const [intervalID, setIntervalID] = useState<number|any>(null)

    let frostedIntervalFunc = () => {
        if (!document.hasFocus()) {
            setBlurState(targetBlurSize);
            // debug: console.log('frosted: we DONT have focus')
            isBlurredRef.current = true
        } else {
            // debug: console.log('frosted: we have focus')
            setBlurState('0em');
            isBlurredRef.current = false
        }
    };

    useLayoutEffect(() => {
        if (!intervalID) {
            let id = setInterval(frostedIntervalFunc, intervalMs);
            setIntervalID(id);
        }

        return clearInterval(intervalID);
    }, [])
}
