[TOC]

## React and Mobx Store Unit Testing and Mocking With Jest

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

Researching how to do unit tests of a Mobx store, I came across examples that, although useful, did not fully serve me, as their stores did not access an http service, as was the case with my project.

The project stores did not receive instances of services due to dependency injection, so it was not possible to inject a mock of the service.

#### Enter Jest

As the project uses Jest, I realized that I could leave it in charge of mocking these services. And I found it was quite simple.

#### Tools

- mobx and mobx-react: npm i mobx mobx-react --save-dev
- jest
- @types/jest: npm install --save @types/jest

#### Basic Folder Structure Before

    src/
       components/
            albumComponent.tsx
       services/
            albumService.ts
       stores/
            albumStore.ts
       App.js
       index.js
       ...

#### Basic Folder Structure After

Using jest for testing, we create a **test** folder in the same level of the componente we are testing. In our case, the albumStore.ts

For the mock, we create a **mocks** folder in the same level of the component we want to mock. Note: the name of the mock file must be the same of the original file (albumService.ts) being mocked, so jest can undestand and mock during the tests.

So the folder structure looks like as following:

    src/
       components/
            albumComponent.tsx
       services/
    		__mocks__/
    			albumService.ts
    		albumService.ts
       stores/
    		__test__/
    			albumStore.test.ts
            albumStore.ts
       App.js
       index.js
       ...


#### Simple service using Fetch

```javascript
class AlbumService {
  public async GetAlbums() {
    let response = await fetch("http://jsonplaceholder.typicode.com/albums");
    let data = await response.json();
    return data;
  }
}

export default new AlbumService();
```

#### Simple Mobx store calling the service

```javascript
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
```
