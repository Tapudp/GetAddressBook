### App structure

- The whole app starts with the App component.

  - `createGlobalStyle` and `ThemeProvider` are used from `styled-components` library.
  - implementation of `getInitialTheme` takes care of the saving previously used theme into localStorage and use it upon the opening the webpage again.

- For adding custom design and animation

  - usage of styled-components is available there.
  - class-names from Md-bootstrap library have been used to implement grid and flex-box layouts in the app.

- App starts from the `"/pages"` folder with these 2 major page containers

  - default
    - it renders whenever user enters an unknown route
  - home
    - first page of the app renders on the `"/"` route

- Custom created components are divided into 2 folders:
  1. Atom
  2. Moledcule

## Atom Components Details

1. ButtonContainer:

- a custom button component made with style-components and css
- provides usage of props as well
- not a named export so we have to import it always with `{ButtonContainer}`.

2. Item:

- This is a table row component, which is being used to render a single row data in our usertable
- It doesn't have any of its own state, only uses the data as props passed to it.
- Named export available.

3. Loadspinner

- Used as spinner or loading component.
- made with md-bootstrap library
- Named export available.

4. Search

- This is a single inpute field used as search box in our Home page
- stateless component, only uses the data as passed props to it.
- Named export available.

5. TableContainer

- As the name suggests, TableContainer components.
- Custom scroll-bar created with styled-components. It can be also configured with props.
- Named export is not available.

## Molecule Components details

1. Modal

- Own custom modal
- created with mixture of md-bootstrap and styled-components
- consumes data as the props passed to it.
- contains various positions and design aesthetics to render name and profile image.
- Named export available.

2. Usertable

- manages the api call and state updation associated with it.
- provides search, userdatatable component.
- It can be configured with different state level logic with hooks.
- Renders 50 data rows each time upon calling more data in.
- Named export available.
