export const getGifs = async( category ) => {
        
    const url = `https://api.giphy.com/v1/gifs/search?api_key=jHV5Ywd6VjEBwxXQQcIxVsQFOLFl6sIF&q=${ category }&limit=20`
    const resp = await fetch( url );
    const { data = [] } = await resp.json();  // ---> Lo igualo a un array vacío para que siempre me retorne algo

    const gifs = data.map( img => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url

    }))
    
    // console.log(resp)
    // console.log(data)
    console.log(gifs)
    return gifs;
}
