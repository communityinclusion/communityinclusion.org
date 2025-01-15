// imports
import React, { useState } from "react"
import useSortableData from "./Sort"

const PublicationArchive = (props) => {
  const [value, setValue] = useState("")
  const { pubs, sort } = useSortableData(props.pubs)

  return (
    <>
      <h1 className="page-title">Publications Archive</h1>
      <input
        type="text"
        autoComplete="off"
        placeholder="Search"
        value={value}
        onChange={(event) => setValue(event.target.value)}
      />
      <table id="pubTable" className="table table-bordered table-sm mt-4">
        <thead>
          <tr>
            <th>
              <button
                className="btn btn-link"
                type="button"
                onClick={() => sort("title")}
              >
                {" "}
                Title{" "}
              </button>
            </th>

            <th>
              <button
                className="btn btn-link"
                type="button"
                onClick={() => sort("subtitle")}
              >
                {" "}
                Subtitle
              </button>
            </th>

            <th>
              <button
                className="btn btn-link"
                type="button"
                onClick={() => sort("author")}
              >
                Author
              </button>
            </th>

            <th>
              <button
                className="btn btn-link"
                type="button"
                onClick={() => sort("audience")}
              >
                Suggested Audience
              </button>
            </th>

            <th>
              <button
                className="btn btn-link"
                type="button"
                onClick={() => sort("topics")}
              >
                Related Topics
              </button>
            </th>

            <th>
              <button
                className="btn btn-link"
                type="button"
                onClick={() => sort("projects")}
              >
                Related Projects
              </button>
            </th>

            <th>
              <button
                className="btn btn-link"
                type="button"
                onClick={() => sort("pdflink")}
              >
                PDF Link
              </button>
            </th>

            <th>
              <button
                className="btn btn-link"
                type="button"
                onClick={() => sort("doclink")}
              >
                Word Link
              </button>
            </th>
          </tr>
        </thead>
        <tbody>
          {pubs
            .filter((item) => {
              if (!value) return true
              if (
                item.title.toLowerCase().includes(value.toLowerCase()) ||
                item.subtitle.toLowerCase().includes(value.toLowerCase()) ||
                item.author.toLowerCase().includes(value.toLowerCase()) ||
                item.audience.toLowerCase().includes(value.toLowerCase()) ||
                item.topics.toLowerCase().includes(value.toLowerCase()) ||
                item.projects.toLowerCase().includes(value.toLowerCase()) ||
                item.pdflink.toLowerCase().includes(value.toLowerCase()) ||
                item.doclink.toLowerCase().includes(value.toLowerCase())
              ) {
                return true
              }
              return false
            })
            .map((pub) => (
              <tr key={pub.id}>
                <td>{pub.title}</td>
                <td>{pub.subtitle}</td>
                <td>{pub.author}</td>
                <td>{pub.audience}</td>
                <td>{pub.topics}</td>
                <td>{pub.projects}</td>
                <td> {pub.pdflink && <a href={pub.pdflink}>Link</a>}</td>
                <td> {pub.doclink && <a href={pub.doclink}>Link</a>}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </>
  )
}

export default PublicationArchive
