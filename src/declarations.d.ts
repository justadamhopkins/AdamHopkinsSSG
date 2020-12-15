import 'styled-components'

declare const graphql: (query: TemplateStringsArray) => void

declare module 'styled-components' {
  export interface DefaultTheme {}
}
