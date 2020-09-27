/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */

// You can delete this file if you're not using it

import React from 'react'
import 'normalize.css' // todo: normalize css
import provideStores from './src/stores/mobx-store'
import Layout from './src/components/layout'

export const wrapRootElement = provideStores

export function wrapPageElement({ element, props }) {
  return <Layout {...props}>{element}</Layout>
}
