namespace app{
  let movies = []
  export function createMovie() {

    let title = $('#title').val()
    let year = $('#year').val()
    let rating = $('#rating').val()
    let movie = new app.Face.Movie(title, year, rating);
    movies.push(movie)

    $('#populate').append(`
    <tr>
      <td>${title}</td>
      <td>${year}</td>
      <td>${rating}</td>
      <td><button onclick ='app.deleteMovie(${movies.length -1})'>Delete</button></td>
    </tr>`);
    //append adds to what is there .html replaces it!!
  $('#title').val('');
  $('#year').val('');
  $('#rating').val('');


//to delete!
  }
  export function deleteMovie(index){
    movies.splice(index, 1);

    let result = "";
    for (let i =0; i < movies.length; i++){
      result += `
      <tr>
        <td>${movies[i].Title}</td>
        <td>${movies[i].Year}</td>
        <td>${movies[i].Rating}</td>
        <td><button onclick ='app.deleteMovie(${i})'>Delete</button></td>
      </tr>`
    }
    $('#populate').html(result)
  };

}
