import { resolve } from "path";
import { defineConfig } from "vite";
import packageJson from './package.json' assert { type: 'json' }
import react from "@vitejs/plugin-react"
import dts from "vite-plugin-dts"
import tsConfigPaths from "vite-tsconfig-paths"

export default defineConfig((env) => ({
    plugins: [
        react({ jsxRuntime: env.command == 'build' ? 'classic' : 'automatic' }),
        dts({ insertTypesEntry: true }),
        tsConfigPaths(),
    ],
    build: {
        lib: {
            entry: resolve(__dirname, 'src', 'index.tsx'),
            name: '@zikani03/react-frostedglass',
        },
        rollupOptions: {
            external: [...Object.keys(packageJson.peerDependencies)],
            output: {
                globals: {
                    react: 'react'
                }
            }
        },
        minify: true,
    },
    // test: {
    //     setupFiles:['./boostrap.']
    // }
}));