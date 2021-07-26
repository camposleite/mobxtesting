//Here we are telling Jest to pick the mocked version when the store make a call to the album service.
jest.mock("../../services/albumService");

import AlbumStore from "../albumStore";

describe("Album Store", () => {
  it("should get all albums", async () => {
    const store = new AlbumStore();

    //Some simple tests
    expect(store.albums).not.toBeUndefined();
    expect(store.albums).not.toBeNull();
    expect(store.albums.length).toBe(0);

    await store.getAlbums();

    expect(store.albums).not.toBeUndefined();
    expect(store.albums).not.toBeNull();
    expect(store.albums.length).toBeGreaterThan(0);
  });

  it("should get one album", async () => {
    const store = new AlbumStore();

    //Some simple tests
    expect(store.albums).not.toBeUndefined();
    expect(store.albums).not.toBeNull();
    expect(store.currentAlbum.id).toBeUndefined();

    await store.getAlbum(1);

    expect(store.currentAlbum).not.toBeUndefined();
    expect(store.currentAlbum).not.toBeNull();
    expect(store.currentAlbum.id).toBe(1);
  });
});
