<!--
*** Thanks for checking out the Best-README-Template. If you have a suggestion
*** that would make this better, please fork the repo and create a pull request
*** or simply open an issue with the tag "enhancement".
*** Thanks again! Now go create something AMAZING! :D
***
***
***
*** To avoid retyping too much info. Do a search and replace for the following:
*** uguremirmustafa, express-graphql-jwt-auth, uguremirmustafa, uguremirmustafa@gmail.com, express-graphql-jwt-auth, Auth server created with GraphQL and Express using JWT.
-->

<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->

<!-- [![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url] -->

<!-- PROJECT LOGO -->
<br />
<p align="center">
  <a href="https://github.com/uguremirmustafa/express-graphql-jwt-auth">
    <img src="./screenshots/register.png" alt="Logo" width="80" height="80">
  </a>

  <h3 align="center">Client for express-graphql-jwt-auth-server</h3>

  <p align="center">
    Client created with Apollo Client and React for the server code <a href="https://github.com/uguremirmustafa/graphql-express-jwt-auth-server">here.</a>
    <br />
    <a href="https://github.com/uguremirmustafa/express-graphql-jwt-auth"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://github.com/uguremirmustafa/express-graphql-jwt-auth">View Demo</a>
    ·
    <a href="https://github.com/uguremirmustafa/express-graphql-jwt-auth/issues">Report Bug</a>
    ·
    <a href="https://github.com/uguremirmustafa/express-graphql-jwt-auth/issues">Request Feature</a>
  </p>
</p>
<a href="https://github.com/uguremirmustafa/express-graphql-jwt-auth">SERVER CODE WITH APOLLO-EXPRESS IS HERE</a>

<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary><h2 style="display: inline-block">Table of Contents</h2></summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgements">Acknowledgements</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## About The Project

![express-graphql-jwt-auth Home Screen Shot](/screenshots/register.png)

express-graphql-jwt-auth is built as a boilerplate code for starting graphql applications faster.

### Built With

- [Graphql](https://graphql.org/)
- [apollo-client](https://www.apollographql.com/docs/react/)
- [jwt](https://jwt.io)
- [formik](https://formik.org/)
- [chakra-ui](https://chakra-ui.com/)
- [typescript](https://www.typescriptlang.org/)
- [graphql-code-generator](https://www.graphql-code-generator.com/)

<!-- GETTING STARTED -->

## Getting Started

To get a local copy up and running follow these simple steps.

### Prerequisites

First of all be sure you have node installed on your computer. You can find detailed instructions [here](https://www.devugur.com/blog/how-to-install-different-node-versions-on-linux) to install node.

- node
  ```sh
  node -v
  ```

I prefer yarn, it is a personal choice.

- yarn
  ```sh
  npm install yarn -g
  ```

In order to create graphql types, I use [graphql-code-generator](https://www.graphql-code-generator.com/). Please install the CLI. You can create types with `yarn gen` command after having the cli.

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/uguremirmustafa/express-graphql-jwt-auth.git
   ```
2. Install NPM packages
   ```sh
   yarn
   # OR
   npm install
   ```
3. Move .env.example to .env and fill in the keys

   ```sh
   mv .env.example .env
   ```

4. Start the server and head to [http://localhost:4000/graphql](http://localhost:4000/graphql)
   ```sh
   yarn dev
   # OR
   npm run dev
   ```

<!-- USAGE EXAMPLES -->

## Usage

You can find some screenshots of the project.

### User List

![list](/screenshots/list.png)

### Register Page

![register](/screenshots/register.png)

### Login Page

![login](/screenshots/login.png)

<!-- ROADMAP -->

## Roadmap

See the [open issues](https://github.com/uguremirmustafa/express-graphql-jwt-auth/issues) for a list of proposed features (and known issues).

<!-- CONTRIBUTING -->

## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<!-- LICENSE -->

## License

Distributed under the MIT License. See `LICENSE` for more information.

<!-- CONTACT -->

## Contact

Uğur Emirmustafa - [@uguremirmustafa](https://twitter.com/uguremirmustafa) - uguremirmustafa@gmail.com

Project Link: [https://github.com/uguremirmustafa/express-graphql-jwt-auth](https://github.com/uguremirmustafa/express-graphql-jwt-auth)

<!-- ACKNOWLEDGEMENTS -->

## Acknowledgements

- [graphql-code-generator](https://www.graphql-code-generator.com/)

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[contributors-shield]: https://img.shields.io/github/contributors/uguremirmustafa/repo.svg?style=for-the-badge
[contributors-url]: https://github.com/uguremirmustafa/express-graphql-jwt-auth/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/uguremirmustafa/repo.svg?style=for-the-badge
[forks-url]: https://github.com/uguremirmustafa/express-graphql-jwt-auth/network/members
[stars-shield]: https://img.shields.io/github/stars/uguremirmustafa/repo.svg?style=for-the-badge
[stars-url]: https://github.com/uguremirmustafa/express-graphql-jwt-auth/stargazers
[issues-shield]: https://img.shields.io/github/issues/uguremirmustafa/repo.svg?style=for-the-badge
[issues-url]: https://github.com/uguremirmustafa/express-graphql-jwt-auth/issues
[license-shield]: https://img.shields.io/github/license/uguremirmustafa/repo.svg?style=for-the-badge
[license-url]: https://github.com/uguremirmustafa/express-graphql-jwt-auth/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/uguremirmustafa
