# Exygy Frontend Assessment Part 2

This project was initialized with [Create React App](https://github.com/facebook/create-react-app) and Typescript.

This repo is an implementation of [part 1](https://github.com/Exygy/frontend-assessment-part-1/blob/main/README.md) of our frontend assessment, which asked you to build a visual directory of housing listings. One additional feature has been added on top of what exists in part 1, which is pagination of the listings.

The desired visual implementation of the new pagination feature can be found in [this Figma file](https://www.figma.com/file/mhBuGnbhoXYbbVhMkCsDqm/Frontend-Skills-Assessment-Part-2?node-id=0%3A1&t=7y3TtrYNnA6nNyxK-1). The password for file access is `may_the_force_be_with_you`.

The desired behavior of the new pagination feature is as follows:

- When the application loads, the user should be on page 1 and the default number of items per page should be 2.
- A user should be able to change the number of items per page. The update takes place when a user clicks the `Update` button.
- When a user updates the number of items per page, the selected page should reset to page 1.
- Only numbers greater than 0 are valid in the input for number of items per page.
- The number of pages should be dynamic based on the length of the list and the number of items per page.
- A user should be able to navigate through the pages by clicking on the arrows on either side of the numbers themselves.

In this second part of the assessment, we would like you to review the addition of pagination as if you were reviewing someone else's code. The implementation of pagination here is intentionally buggy. We'd like you to take note of any bugs or issues you find with pagination whether functional or visual, and try to fix them in your local clone of this repo. Feel free to add comments if that's helpful for you. Please do not create a public fork of this repo, or a PR in this repo, but use this repo as your base.

There are two main commits in this repo, the first being just the UI, and the second being the attempt at adding the pagination functionality. It may be helpful to view that [second functional commit](https://github.com/Exygy/frontend-assessment-part2/commit/f6594fe94eb794865840d25bdfa4edbd6044f24b) in isolation, to see what has been added on top.

In the in-person skills interview, which is your next step and the last part of our technical interviews, we will take some time to do brief overviews of both your part 1 and part 2 assessment with you, to chat about the approach you took and what you found. You do not need to make any changes in the repo or do a code review outside of the desired criteria for pagination.

We know that any at-home work in an interview process requires your time, and we want to be respectful of that time while also ensuring this role is a good fit for you. Please do not spend more than 1 hour on this assessment. If you run out of time to complete what you wanted, that’s okay! We are more interested in what bugs you found and how you found them versus fixing them, if that helps you focus your time. We look forward to having a conversation with you about what you completed.

If you do not anticipate having the space to complete this assessment, please let us know, and we will work with you to find alternatives. There is not a harsh deadline on returning the assessment after receiving it.

You can share your project with us as a repo on GitHub (@seanmalbert, @ludtkemorgan, @emilyjablonski, @yazeedloonat, @kramduckner, @colinbuyck, @adriencyberspace, @chadbrokaw-exygy) or as a zip file in your email chain. We look forward to seeing it!

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.
