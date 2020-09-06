// State
import reducers from './state/reducers'
import selectors from './state/selectors'

// Containers
import About from './containers/About'

// Components
import Author from './components/author/Author'

// Assets
import * as AboutImage from './assets/img/about.jpg'

export {
  reducers as AboutReducers,
  selectors as AboutSelectors,
  About as AboutContainer,
  Author as AuthorComponent,
  Author,
  AboutImage,
}
