import React from "react"
import { Link } from "gatsby"
import breadcrumbStyles from "./breadcrumb.module.css"

export default props => {
    return (
        <div className="ph2-ns mw8 center">
            <ul className={breadcrumbStyles.breadcrumb}>
                {props.crumbs.map((crumb, index) => (
                    ((props.crumbs.length - index) > 1) ? <li key={index}><Link to={crumb.toLowerCase()}>{crumb}</Link></li> : <li key={index}>{crumb}</li> 
                ))}
            </ul>
            <div style={{ clear: 'both' }}></div>
        </div>
        
    )
}