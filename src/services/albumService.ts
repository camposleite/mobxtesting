class AlbumService {
  public async GetAlbums() {
    let response = await fetch("http://jsonplaceholder.typicode.com/albums");
    let data = await response.json();
    return data;
  }

  public async GetAlbum(id: number) {
    let response = await fetch("http://jsonplaceholder.typicode.com/albums/" + id);
    let data = await response.json();
    return data;
  }

}

export default new AlbumService();
