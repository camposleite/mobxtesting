import * as React from "react";
import { observer } from "mobx-react";
import { inject } from "mobx-react";
import AlbumStore from "../stores/albumStore";

export interface IAlbumProps {
  albumStore: AlbumStore;
}

@inject("albumStore")
@observer
class AlbumComponent extends React.Component<IAlbumProps> {
  async componentDidMount() {
    await this.props.albumStore.getAlbums();
  }

  render() {
    const albums = this.props.albumStore.albums
      .slice(0, 5)
      .map((album) => <li key={album.id}>{album.title}</li>);

    return (
      <div>
        <h1>Albums list</h1>
        <ul>{albums}</ul>
      </div>
    );
  }
}

export default AlbumComponent;
