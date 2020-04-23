class AlbumService {
  albums = [
    {
      userId: 1,
      id: 1,
      title: "quidem molestiae enim",
    },
    {
      userId: 1,
      id: 2,
      title: "sunt qui excepturi placeat culpa",
    },
    {
      userId: 1,
      id: 3,
      title: "omnis laborum odio",
    },
  ];

  public async GetAlbums() {
    return new Promise((resolve) => {
      console.log("Called mocked GetAlbums");
      process.nextTick(() => resolve(this.albums)); //Devolvendo a promise com a lista simulada
    });
  }
}

export default new AlbumService();
