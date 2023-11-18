export const getsGift = async( category ) =>{
    //creamos una variable para guardar la url de la api 
    const url =`https://api.giphy.com/v1/gifs/search?api_key=pfkn9ZBS88mhvAWydz2Iy7r1HG5vNBzo&q=${ category }&limit=10`;
    //variable para guardar la informacion que obtendremos de la api con fetch
    const resp = await fetch( url );
    // console.log(resp);
    
    const { data = []} = await resp.json();
    // console.log(data)
  
    const gift = data.map( img => ({
      id: img.id,
      title: img.title,
      url: img.images.downsized_medium.url
    }) )
    console.log(gift);
    return gift;
  }