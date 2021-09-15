import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faInfoCircle
} from '@fortawesome/free-solid-svg-icons'



const Message = () => (
<div className="flex items-center justify-center pa3 bg-lightest-blue navy">

  <span className="lh-title ml3">  
  <FontAwesomeIcon icon={faInfoCircle} /> 
  &nbsp;You are viewing a new version of our site. You can still use our  <a href="https://archive.communityinclusion.org/index_vintage.php">archived site</a> and <a href="https://iciwebs.wufoo.com/forms/z1ip25ac1ub7lxc/" target="_blank">request help finding a resource</a>
  </span>
</div>
)

export default Message
