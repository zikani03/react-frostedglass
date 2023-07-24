import { useEffect, useState, createRef } from "react";

export function useFrostedEffect(intervalMs, blurSize = '0.3em') {
    let isBlurredRef = createRef(false)
    const targetBlurSize = blurSize;
    const [currentBlurSize, setCurrentBlurSize] = useState('0em');
    useFrostAfterEffect(intervalMs, targetBlurSize, setCurrentBlurSize, isBlurredRef);

    return [currentBlurSize, isBlurredRef]
}

export function useFrostAfterEffect(intervalMs, targetBlurSize, setBlurState, isBlurredRef) {
    const [intervalID, setIntervalID] = useState(null)

    let frostedIntervalFunc = (event) => {
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

    useEffect(() => {
        if (!intervalID) {
            let id = setInterval(frostedIntervalFunc, intervalMs);
            setIntervalID(id);
        }

        return clearInterval(intervalID);
    }, [])
}
