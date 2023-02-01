import { api } from "../src/store/Api";
import { render, screen, waitFor, act } from "@testing-library/react";
import Home from "../src/pages/Home";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../src/store/Store";
import UserDetails from "../src/pages/UserDetails";
import AlbumDetails from "../src/pages/AlbumDetails";
import PhotoDetails from "../src/pages/PhotoDetails";



describe("API calls", () => {
  test("Get Users", async () => {
    const mockFetchData = vi
      .spyOn(api, "getUsers")
      .mockImplementation(async () => {
        return [
          {
            username: "Breta",
          },
        ];
      });

    render(
      <BrowserRouter>
        <Provider store={store}>
          <Home />
        </Provider>
      </BrowserRouter>
    );

    expect(mockFetchData).toHaveBeenCalled();
    await waitFor(() => {
      expect(screen.getByText("Breta")).toBeInTheDocument();
    });
  });

  test("Get Albums is called and page displays number of albums", async () => {
    const mockFetchAlbums = vi
      .spyOn(api, "getAlbums")
      .mockImplementation(async () => {
        return [
          {
            title: "first album",
          },
          {
            title: "second album",
          },
        ];
      });
    render(
      <BrowserRouter>
        <Provider store={store}>
          <Home />
        </Provider>
      </BrowserRouter>
    );
    expect(mockFetchAlbums).toHaveBeenCalled();
    await waitFor(() => {
        expect(screen.getByText("2 albums")).toBeInTheDocument();
      });
  });


// -----------------------------------------------------------------------------------------------------


  test("Get User is called", async () => {

    const mockData = {
      id: "1",
      name: "Leanne"
    }
    const mockFetchData = vi
      .spyOn(api, "getUser")
      .mockImplementation(async () => {
        return mockData
      });

    render(
      <BrowserRouter>
        <Provider store={store}>
          <UserDetails />
        </Provider>
      </BrowserRouter>
    );

    expect(mockFetchData).toHaveBeenCalled();
    await waitFor(() => {
        expect(screen.getByText("Leanne")).toBeInTheDocument();
        // expect(screen.getByTestId("name").value).toEqual("Leanne");
      });
  });
  

  test("Get UserAlbums is called", async () => {
    const mockFetchData = vi
      .spyOn(api, "getUserAlbums")
      .mockImplementation(async () => {
        return [
          {
            title: "UserAlbumTitle",
          },
        ];
      });
    render(
      <BrowserRouter>
        <Provider store={store}>
          <UserDetails />
        </Provider>
      </BrowserRouter>
    );

    expect(mockFetchData).toHaveBeenCalled();
        await waitFor(() => {
        expect(screen.getByText("UserAlbumTitle")).toBeInTheDocument();
      });
  });


// ------------------------------------------------------------------------------------------------------



  test("Get Album Details is called", async () => {

    const mockData = 
      {
        album: { title: "album name" },
        photos: [{ title: "veritatis numquam eius" }],
      }
     

    const mockFetchData = vi
      .spyOn(api, "getAlbum")
      .mockImplementation(async () => {
        return mockData
      });
    render(
      <BrowserRouter>
        <Provider store={store}>
          <AlbumDetails />
        </Provider>
      </BrowserRouter>
    );

    expect(mockFetchData).toHaveBeenCalled();
    await waitFor(() => {
        expect(screen.getByText('album name')).toBeInTheDocument();
        expect(screen.getByText('(1) photos')).toBeInTheDocument();

    })
  });


// ---------------------------------------------------------------------------------------------

  
  test("Get Photo is called", async () => {

    const mockData = {
      id: "1",
      title: "photoTitle"
      }
    const mockFetchData = vi
      .spyOn(api, "getPhoto")
      .mockImplementation(async () => {
        return mockData
      });
    render(
      <BrowserRouter>
        <Provider store={store}>
          <PhotoDetails />
        </Provider>
      </BrowserRouter>
    );

    expect(mockFetchData).toHaveBeenCalled();
    await waitFor(() => {
        expect(screen.getByText('photoTitle')).toBeInTheDocument();
    })
  });
});
