<div align="left">
<picture style="display:inline-block; max-width:200px; padding-bottom: 5px">
    <source media="(prefers-color-scheme: dark)" srcset=".github/assets/logo.png">
    <img src=".github/assets/logo-light.svg" alt="Logo" style="width:25%; height:auto; display:block;">
</picture>


  A proof-of-concept web application integrating with a popular third-party streaming service.

https://github.com/user-attachments/assets/81f67ea3-0d72-4748-b4bd-7620f5717db2

</div>

---

## About the project
One Pace: Stream Project is a proof-of-concept passion project made in late 2023 to explore the technical aspects of integrating community-created versions of anime into existing streaming platforms. The web application showcases the community-made One Pace, a community curated-version of One Piece, becoming available on-demand through authentication of a Crunchyroll® Premium account, the global license holder for One Piece.

Though the licensing complexities ultimately made a production release unfeasible, discovering the general design process leveraging Figma to compose designs & flow from page to page, and use of Next.js, React, AWS DynamoDB, and the (albeit over-engineered) NextAuth.js + Authentik passwordless logon: learning this process was hugely enjoyable in making the entire app possible.

### App creation process

The project was made initially from heavy inspirations of the (now old) [HIDIVE landing page](https://web.archive.org/web/20230301112134/https://www.hidive.com/), which showed a background video of a variety of anime, almost as-if showing what you're missing out on- very much the style I wanted to go for, as a person that got into One Piece - a 1,000+ episode anime - through One Pace. Which is how the initial colour scheme came to be, and how the layout of pages were early crafted. 

From there, I wanted page flow to be seamless, responsive, and pages themselves easy-to-understand, so after a few revisions, pages introducing the project were split into sections, finalised guided left-to-right, easily guiding the user throughout the setup process. Authentication was reverse-engineered from the Android TV version of the Crunchyroll app, with some work intercepting network traffic via Charles, (the now EOL) Windows Subsystem for Android (WSA) to emulate the app, and an Android TV app launcher. Utilizing the Crunchyroll TV app itself & Charles to navigate possible scenarios & thoroughly understand the REST API, the website then integrated this solution. This was done similarly via the website directly, collecting all endpoints, ready for integration into the project.

### General notice & disclaimer
The purpose of the One Pace: Stream Project is purely for proof-of-concept, technical-learning purposes and explores potential models for community collaborations with streaming platforms and/or animation companies. This repository showcases system design capabilities through technical-skill development.
 
This project is not affiliated with Crunchyroll, the One Pace project, or Toei Animation. This repository does not host, distribute, or provide any access to copyrighted content. Endpoints used throughout the code are outdated. The project itself is not intended for in-production-use.

Crunchyroll® is owned by Crunchyroll LLC (Sony Corporation). One Piece © Eiichiro Oda/Toei Animation.
