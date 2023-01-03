
export const GifItem = ({ title, url, id }) => {
    // console.log(image);

  return (
    <figure className="card">
        <img src={ url } alt={ title } />
        <figcaption>{ title }</figcaption>
    </figure>
  )
}
