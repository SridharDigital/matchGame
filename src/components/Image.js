import React from "react"

const Image = (props) => {
  const { image, checkMatch } = props
  const { thumbnailUrl, id } = image
  return (
    <div>
      <img
        src={thumbnailUrl}
        className="image-thumbnail"
        alt="thumbnail"
        onClick={() => checkMatch(id)}
      />
    </div>
  )
}

export default Image
