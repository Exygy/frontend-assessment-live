# Exygy In Person Frontend Assessment

This project was initialized with [Vite](https://vitejs.dev/) and Typescript.

This repo is an implementation of [part 1](https://github.com/Exygy/frontend-assessment-part-1/blob/main/README.md) of our frontend assessment, which asks candidates to build a visual directory of housing listings. Two additional features has been added on top of that assessment, which is pagination of the listings and filtering by unit type.

## Pagination

The desired behavior of the new pagination feature is as follows:

1.  When the application loads, the user should be on page 1 and the default number of items per page should be 2.
2.  A user should be able to change the number of items per page. The update takes place when a user clicks the "Update" button.
3. A user should be able to paginate by clicking the arrows or the numbers
4. When a user updates the number of items per page, the selected page should reset to page 1.
5. Only numbers greater than 0 are valid in the input for number of items per page.
6. The number of pages should be dynamic based on the length of the list and the number of items per page.
7. A user should be able to navigate through the pages by clicking on the arrows on either side of the numbers themselves.

## Responsivity

1. Look for any issues when in a mobile view. Do filters, pagination and the listing layout look comparable to the desktop view?

## Unit Type Filter

1. A user should be able to filter listings by selecting a unit type.
2. The unit type options should only reflect types that are assigned to listings.

## Code Quality

We should try and leave code better than we found it. One opportunity to do that within a codebase is to limit the use of string literals and use [enums](https://www.typescriptlang.org/docs/handbook/enums.html) instead. Enums make it easier to document intent or create a set of distinct cases.

In Listings.tsx and UnitTable.tsx you will find interfaces for UnitTable and UnitRow, respectively, which have a property "type" with a union of string literals. Please create an enum to use for "type" in both cases. If done correctly, you should also be able to remove the use of "unitStrings" in UnitTable.tsx.

## Available Scripts

In the project directory, you can run:

### `yarn dev`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.
