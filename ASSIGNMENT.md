# INF 554 Assignment 7

## Description

Use 10 countries from Assignment 1 and 1 year. Load the data in JSON format and implement a D3 bar chart complete with axes, axes labels, tick marks, tick mark labels, legend, and title. Implement smooth transitions based on user input to filter the data (show all countries, filter sort by value to show the top 5 countries, show the bottom 5 countries) and reorder the data (sort countries alphabetically (both default start state and to reset the chart), sort by value in ascending order, sort by value in descending order). Transitions should work well between any two states.

Demonstrate good development practices:

- Document set-up & deployment in [README.md](README.md)
- Use incremental commits that are consistent and tested.

**Publish on your USC SCF account and add a link to the published `a7.html` in `README.md`**. All files, including `a7.html` should be stored in the repository. Describe the data and cite your source in `a7.html`.

## Rubric

### Bar chart (5 pts)

|               | Points | Description |
| ------------- | ------ | ----------- |
| Sophisticated | 4-5    | Chart well formatted, data is well formatted, imported as JSON, using margin conventions, uses D3 data join, axes, axes labels, tick marks, tick mark labels and title are well formatted, using scales appropriately. |
| Competent     | 2-3    | Chart is not well formatted, data is not well formatted or JSON improperly used, improper use of margin conventions, improper uses of D3 data join, axes, axes labels, tick marks, tick mark labels and title are not well formatted, not using scales appropriately.|
| Needs work    | 0-1    | Chart is not formatted, data is not formatted or JSON is not used, not using margin conventions, not using of D3 data join, axes, axes labels, tick marks, tick mark labels and title are not included, not using scales. |

### Smooth transitions (5 pts)

|               | Points | Description |
| ------------- | ------ | ----------- |
| Sophisticated | 4-5    | Smooth transitions based on user input reorder the bars and update the axes, axes labels, tick marks, tick mark labels and title are working well between in any two combinations. Allows to show: all bars in alphabetic order (default), ascending order, descending order, show only top 5, show only bottom 5. |
| Competent     | 2-3    | Smooth transitions based on user input to reorder the bars not working well. Updates to the axes, axes labels, tick marks, tick mark labels and title are not working well between in any two combinations. Does not allow to show well: all bars in alphabetic order (default), ascending order, descending order, show only top 5, show only bottom 5. |
| Needs work    | 0-1    | Smooth transitions based on user input to reorder the bars not working. Updates to the axes, axes labels, tick marks, tick mark labels and title are not working between in any two combinations. Does not allow to show: all bars in alphabetic order (default), ascending order, descending order, show only top 5, show only bottom 5. |

### Development & published page (5 pts)

|               | Points | Description |
| ------------- | ------ | ----------- |
| Sophisticated | 4-5    | Use of GIT is demonstrated. Using Bootstrap for buttons and layout. Use of node and npm is demonstrated. Set-up and deployment are documented (include link to published page in README!). Page is well formatted with a proper layout and explanatory text. Code is broken down into js, css and html files. Page is deployed and working well. |
| Competent     | 2-3    | Use of GIT is not well demonstrated. Improper use of Bootstrap for buttons and layout. Use of node and npm is not well demonstrated. Set-up and deployment are not well documented (include link to published page in README!). Page is not well formatted with a proper layout and explanatory text. Code is not well broken down into js, css and html files. Page is deployed but not working well. |
| Needs work    | 0-1    | Use of GIT is not demonstrated. Bootstrap is not used. Use of node and npm is not demonstrated. Set-up and deployment are not documented (include link to published page in README!). Page is not formatted with a proper layout and explanatory text. Code is not broken down into js, css and html files. Page is not deployed. |

## Homework Guidelines

- Homework repository must be updated before the start of next class
- Commits after the submission deadline will not be considered unless requested
- Late policy: 10% of total available points per each 24-hour late; duration less than 24 hours counts as a 24-hour period
- Homework is expected to work in: Safari AND Chrome (Mac), Edge AND Chrome (Windows), Firefox AND Chrome (Linux)

## Important Note from Graders

Homework will be assessed on Linux systems which use case-sensitive filesystem by default. Ensure that you use the same case when referring to files in web pages. For example, if an image tag refers to `myFile.png` but the actual filename is `myfile.png`, the image will not appear on the web page in Linux systems. We will deduct points if this happens. Use [Visual Studio Code HTML path completion feature](https://code.visualstudio.com/updates/v1_21#_html-path-completion) and/or double-check filenames to avoid this problem.
