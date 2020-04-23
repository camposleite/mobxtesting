import { action, observable } from "mobx";
import albumService from "../services/albumService";
import { AlbumDto } from "../services/dto/albumDto";

class AlbumStore {
  @observable albums: AlbumDto[] = [];

  @action
  async getAlbums() {
    const result = await albumService.GetAlbums();

    this.albums = result;
  }
}

export default AlbumStore;
