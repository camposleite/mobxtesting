jest.mock("../../services/albumService");

import AlbumStore from "../albumStore";

describe("Album Store", () => {
  it("should get all albums", async () => {
    const store = new AlbumStore();

    jest.setTimeout(15000);
    expect(store.albums).not.toBeUndefined();
    expect(store.albums).not.toBeNull();
    expect(store.albums.length).toBe(0);

    await store.getAlbums();

    expect(store.albums).not.toBeUndefined();
    expect(store.albums).not.toBeNull();
    expect(store.albums.length).toBeGreaterThan(0);
  });
});
