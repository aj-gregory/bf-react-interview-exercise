## Introduction

This is a small and buggy React-Redux Kanban-like application that enables users to:

- create columns
- create tasks
- drag-n-drop tasks between columns
- drag-n-drop tasks within the same column to reorder them

## Setup

- Run `npm install` or equivalent to install dependency packages.
- Start the development server via `npm run start`. By default, it will run on port 3000.
- `npm run test` to run unit tests and `npm run test -- --coverage` will provide coverage report.
- Click a few times on the top-left + button to add columns

## Questions

Please add unit tests for all your work. Jest and Enzyme are avialable.

You may work on the following stories in any order you prefer, other than the bonus.

- Another developer started implementing a delete-column feature.
  But this week they are on the Prod App Support team and the story was unstarted. It's next in the backlog so it is yours to pick up and deliver the feature.

  <div style="background: #acacac; padding: 20px; color: #333;">

  <span style="font-weight:bold;">GIVEN</span> a user hovers over a column's title.<br />
  <span style="font-weight:bold;">WHEN</span> a button labeled x becomes visible.<br />
  <span style="font-weight:bold;">AND</span> they click it<br />
  <span style="font-weight:bold;">THEN</span> the column should be removed from the ui and application state.

  ###### Notes

  The DELETE_COLUMN action dispatches but does nothing.

  </div>

- New Feature request:

  <div style="background: #acacac; padding: 20px; color: #333">

  <span style="font-weight:bold;">GIVEN</span> a user clicks on a column's title and edits the content<br />
  <span style="font-weight:bold;">WHEN</span> they click outside of the input field<br />
  <span style="font-weight:bold;">THEN</span> the new content should be saved as the columns title.

  ###### Notes

  Clicking `Enter` currently while input is active saves the content.

  </div>

- Product has reported the following bug.

  <div style="background: #acacac; padding: 20px; color: #333">
  <span style="font-weight:bold;">GIVEN</span> a user wants to add a new task.<br />
  <span style="font-weight:bold;">WHEN</span> they click on the [+] cyan button on the top-left corner of the column.<br />
  <span style="font-weight:bold;">THEN</span> the new task should be added to the top of the task list.

  ##### Notes

  Current functionality is new task is added to the bottom of the list.

  </div>

- #### Bonus

  A team member has reported the following bug:

  <div style="background: #acacac; padding: 20px; color: #333">
  <span style="font-weight:bold;">GIVEN</span> a user is reordering items in the same task list<br />
  <span style="font-weight:bold;">WHEN</span> they drag a task up or down<br />
  <span style="font-weight:bold;">THEN</span> the item should be reordered accordingly

  ##### Notes

  Current fucntionality is item does not reorder at all.

  </div>
