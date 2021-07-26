import { action, observable } from "mobx";
import AlbumModel from "../models/albumModel";
import albumService from "../services/albumService";
import { AlbumDto } from "../services/dto/albumDto";

class AlbumStore {
  @observable albums: AlbumDto[] = [];
  @observable currentAlbum: AlbumModel = new AlbumModel();

  @action
  async getAlbums() {
    const result = await albumService.GetAlbums();

    this.albums = result;
  }

  @action
  async getAlbum(id: number) {
    const result = await albumService.GetAlbum(id);

    this.currentAlbum = result;
  }

}

export default AlbumStore;
