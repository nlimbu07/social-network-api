# social-network-api

## Description

Built an API for a social network web application where users can share their thoughts, react to friends’ thoughts, and create a friend list.

### User Story

```
AS A social media startup
I WANT an API for my social network that uses a NoSQL database
SO THAT my website can handle large amounts of unstructured data
```

### Acceptance Criteria

```
GIVEN a social network API
WHEN I enter the command to invoke the application
THEN my server is started and the Mongoose models are synced to the MongoDB database
WHEN I open API GET routes in Insomnia for users and thoughts
THEN the data for each of these routes is displayed in a formatted JSON
WHEN I test API POST, PUT, and DELETE routes in Insomnia
THEN I am able to successfully create, update, and delete users and thoughts in my database
WHEN I test API POST and DELETE routes in Insomnia
THEN I am able to successfully create and delete reactions to thoughts and add and remove friends to a user’s friend list
Mock-Up
```

## Table of Content

- [Description](#description)
- [User Story](#user-story)
- [Acceptance Criteria](#acceptance-criteria)
- [Technologies Used](#technologies-used)
- [Walkthrough Video](#walkthrough-video)
- [Users CURD](#users-curd)
- [Thought CURD](#thought-curd)
- [Add, Remove Friend](#add-remove-friend)
- [Create, Remove Reactions](#create-remove-reactions)

### Technologies Used

- Node.js
- express.js
- MongoDB
- Mongoose

## Walkthrough Video

- [How to start the application's server.](https://drive.google.com/file/d/12ANWjDAjf8_LgmzRBIkc9xuctpBzBvvT/view)
- [Users CURD Operations](https://drive.google.com/file/d/1qhhJ4JBBGioNcBixaRMTI2h4299zw_xQ/view)
- [Thought CURD Operations](https://drive.google.com/file/d/1MsjVcdMAul5J9zYAg-7pkQWribpxtOZ0/view)
- [Add, Remove Friend](https://drive.google.com/file/d/1TPweZ16GnPTEw1gUKBRYlDWxHWP2X1GX/view)
- [Create, Remove Reactions](https://drive.google.com/file/d/1uCiigM6EpQr5u6sHtiLqlfuonLvbT8Qa/view)

#### Users CURD

![User Video](./assets/video/User.gif)

#### Thought CURD

![Thought video](./assets/video/Thought.gif)

#### Add, Remove Friend

![Friend video](./assets/video/Friend.gif)

#### Create, Remove Reactions

![Reaction video](./assets/video/Reaction.gif)

### Questions

If you have any questions or inquiries, please reach out through GitHub.

- GitHub: nlimbu07
