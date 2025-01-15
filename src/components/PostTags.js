import { kebabCase } from "lodash"
import React, { Component } from "react"
// import _ from "lodash";
import { Link } from "gatsby"
import "../components/tags.css"

class PostTags extends Component {
  render() {
    const { tags } = this.props
    return (
      <div className="tags-container">
        <ul className="tags">
          {tags &&
            tags.map((tag) => (
              <li key={tag + `tag`}>
                <Link className="tag" to={`/tags/${kebabCase(tag)}/`}>
                  {tag}
                </Link>
              </li>
            ))}
        </ul>
      </div>
    )
  }
}

export default PostTags
