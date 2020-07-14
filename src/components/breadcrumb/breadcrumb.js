import React from "react"
import { Link } from "gatsby"
//import breadcrumbStyles from "./breadcrumb.module.css"

const juicyBread = ({ breaddata }) => {
    var elementsNew = []
 
    breaddata.crumbs.forEach(createdBread);
    function createdBread(item) {
     var newlast = item.crumbLabel.replace(/-/g, " ");
     elementsNew.push({pathname: item.pathname, crumlabel: newlast});
   }
   //console.log(elementsNew)
 
 
   return (
 
     <>
     <div className="row">
     <div className="col-md-12 shopintro">
 <ul className="gjbread">
     {elementsNew.map((value, index) => {
       return  <li key={index} className="gjbreadcrumb"> 
       <Link key={index} to={`${value.pathname}`}>{value.crumlabel} <span> / </span> </Link>
       </li>
     })}
   </ul>
 </div>
 </div>
 </>
   )
 }
 
 export default juicyBread
