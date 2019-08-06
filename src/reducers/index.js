import { combineReducers } from 'redux'
import doc from './doc.reducer'
import pages from './page.reducer'

export default combineReducers({
    doc,
    pages,
})
