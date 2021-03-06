/* eslint-disable import/no-unresolved,react/jsx-props-no-spreading */
/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
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
