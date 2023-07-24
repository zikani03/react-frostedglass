import { createContext } from "react";

export interface FrostedContextParams {
    blurSize: string 
}

export const FrostedContext = createContext<FrostedContextParams>({
    blurSize: '0.3em', // default blur size is 0.3em
});
