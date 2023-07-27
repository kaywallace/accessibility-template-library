import { useParams } from 'react-router-dom'
import Snippet from '../snippet/Snippet'

import './Pages.scss'

const Component = ({ children }: any) => {
  let componentSelected = useParams()
  console.log(componentSelected)
  return (
    <div>
      <h2 className="title">{componentSelected.component}</h2>
      <p>{children}</p>
      <div className="component-snippet">
        <Snippet file={componentSelected.component || ''} />
      </div>
    </div>
  )
}
export default Component
