import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faInfoCircle
} from '@fortawesome/free-solid-svg-icons'



const Message = () => (
<div className="flex items-center justify-center pa3 bg-lightest-blue navy">

  <span className="lh-title ml3">  
  <FontAwesomeIcon icon={faInfoCircle} /> 
  &nbsp;You are viewing the beta version of our new site. You can still use our archived site at <a href="https://archive.communityinclusion.org/">archive.communityinclusion.org</a>
  </span>
</div>
)

export default Message
