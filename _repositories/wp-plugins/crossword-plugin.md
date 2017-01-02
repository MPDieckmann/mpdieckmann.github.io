---
title: "Crossword Puzzle Plugin"
subtitle: "Developed by <a href=\"https://github.com/MPDieckmann/\">MPDieckmann</a>"
branch: "https://github.com/MPDieckmann/wp-plugins/tree/crossword-puzzle"
icon: "extension"
---

## Basic information
Contributors: [MPDieckmann](https://github.com/MPDieckmann/)<br/>
Tags: games,game,crossword,puzzle<br/>
Requires at least: WordPress version 2.5<br/>
Tested up to: WordPress version 4.6<br/>
License: GPLv3<br/>
License URI: https://www.gnu.org/licenses/gpl-3.0.html

## Description
Crossword Puzzle Plugin converts a valid csv-file (optimized for crossword puzzle plugin) to a crossword puzzle table, which can be filled by the visitors.

Downlaod [crossword-puzzle.zip]({{ "/wp-plugins/crossword-puzzle/crossword-puzzle.zip" | relative_url }}).

## Installation
1. Upload the plugin files to the `/wp-content/plugins/crossword-puzzle` directory, *(following is **not** supportet: install the plugin through the WordPress plugins screen directly)*.
2. Activate the plugin through the 'Plugins' screen in WordPress
3. Upload a valid csv-file (optimized for crossword puzzle plugin) and copy the link to the file on wordpress
4. Go to the (or create a new) article and include at that point you wish the crossword-puzzle to apear following shortcode `[crossword url="__URL__" check-button="__CHECK__" float="__FLOAT__"]`
5. Replace `__URL__` with your copied url to the uploaded csv-file
6. Replace `__CHECK__` with either `true` (if you wish to see a check-button) or `false` (if you don't wish to see a check-button) or leave out this attribute (so it will default to `true`)
7. Replace `__FLOAT__` with either `left` (if you wish the puzzle to flaot left) or `right` (if you wish the puzzle to float right) or leave out this attribute (so it will be displayed as a block)

## Frequently Asked Questions

### What marks a valid csv-file as `crossword puzzle optimized`?
A `crossword puzzle optimized csv-file` will look like following:
In the first row in first cell you have to write the keyword `crossword`; each other cell in this row must stay empty.
The following rows must be filled up with single letters, `questionIndex#arrow`-marks or must stay empty.
After you have finished filling up the crossword you have to write in the row directly under the crossword in the first cell: `questions`; each other cell in this row must stay empty.
After this row you have to write the questions in following format:

* first cell in row: `questionIndex`
* second cell in row: Your question
* each following cell in row must stay empty

### What will a `questionIndex#arrow`-mark look like?
This mark can be splitted up in 3 parts:

1. the `questionIndex`-part: a positive integer starting at 0
2. the `#`-part: to seperate part 1 and 3
3. the `arrow`-part: one of the following snippets:
  * `up`: will display an up-pointing arrow
  * `down`: will display a down-pointing arrow
  * `left`: will display a left-pointing arrow
  * `right`: will display a right-pointing arrow

## Screenshots

### assets/screenshot-1
The screenshots shows a valid csv-file (optimized for crossword puzzle)  
![assets/screenshot-1](https://raw.githubusercontent.com/MPDieckmann/wp-plugins/crossword-puzzle/crossword-puzzle/assets/screenshot-1.png)

### assets/screenshot-2
The screenshots shows the output of the valid crossword optimized csv-file (from above)  
![assets/screenshot-2](https://raw.githubusercontent.com/MPDieckmann/wp-plugins/crossword-puzzle/crossword-puzzle/assets/screenshot-2.png)

### assets/screenshot-3
The screenshots shows the dialog shown when pressing on the first arrow  
![assets/screenshot-3](https://raw.githubusercontent.com/MPDieckmann/wp-plugins/crossword-puzzle/crossword-puzzle/assets/screenshot-3.png)

### assets/screenshot-4
The screenshots shows what will happen when the `check crossword`-button is clicked (red cells: input was wrong or empty, green cells: input was correct)  
![assets/screenshot-4](https://raw.githubusercontent.com/MPDieckmann/wp-plugins/crossword-puzzle/crossword-puzzle/assets/screenshot-4.png)

## Changelog

### 1.0
Plugin is released (after multiple tests).

* It supports csv-files exported by Google Docs Spreadsheet
* It supports csv-files exported by Microsoft Office Excel

## Example
Links to csv-files:

* [google-docs-spreadsheet.csv]({{ "google-docs-spreadsheet.csv" | relative_url }})
* [microsoft-office-excel.csv]({{ "microsoft-office-excel.csv" | relative_url }})

See an [Example]({{ "example" | relative_url }}).
