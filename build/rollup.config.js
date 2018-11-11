import { pkg, outputCfg, baseCfg } from './rollup.base'

/**
 * 总组件库专用
 */
export default [
  {
    output: {
      file: `lib/index.min.js`,
      format: 'umd',
      name: pkg.keywords[0] || '',
      ...outputCfg
    },
    ...baseCfg
  },
  {
    output: {
      file: `lib/index.common.js`,
      format: 'cjs',
      ...outputCfg
    },
    ...baseCfg
  },
  {
    output: {
      file: `lib/index.esm.js`,
      format: 'es',
      ...outputCfg
    },
    ...baseCfg
  }
]
