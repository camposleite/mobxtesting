class AlbumService {
  albums = [
    {
      userId: 1,
      id: 1,
      title: "Album 1",
    },
    {
      userId: 1,
      id: 2,
      title: "Album 2",
    },
    {
      userId: 1,
      id: 3,
      title: "Album 3",
    },
  ];

  public async GetAlbums() {
    return new Promise((resolve) => {
      console.log("Called mocked GetAlbums");
      process.nextTick(() => resolve(this.albums)); //Resolving the promise with the mocked list
    });
  }
}

export default new AlbumService();
