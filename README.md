# [GitExplorer](https://gitexplorer.skp.dev/)

### Find the right commands you need without digging through the web.

Website: [GitExplorer](https://gitexplorer.skp.dev/)
Explore and Enjoy!

You can reach me on via [twitter](https://twitter.com/su_yash_7)

### Tech Stack

- Next.js
- Tailwindcss

### Installation

Clone the repo via

```
git clone https://github.com/su-yash-7/GitExplorer.git
```

Install all dependencies

```
 yarn
```

Then, run the application in the command line and it will be available at `http://localhost:3000`.

```
yarn run dev
```

### Contribute

Thank you for contributing to GitExplorer!

Please follow the below instructions to send a Pull Request (Search the website to make sure that this command doesn't already exist).

The data folder (inside the src directory) is where you will be operating from. The three files you should be concerned with are the `primary-options.js`, `secondary-options.js` and `tertiary-options.js` files.

These three files are responsible for the options a user can pick.

`primary-options.js` contains an array of objects responsible for the options of the first select box.

`secondary-options.js` contains an object. This object houses an arrays of objects, this is responsible for the second set of options a user sees when they select a primary option.

`tertiary-option.js` file is responsible for cases where there needs to be a third & final select box.

###### Steps to add a new command

0. Please ensure you are not on the master branch. Checkout to a new branch entirely.

1. Add an object to the array in the `primary-options.js` file. Sample Format:

```

{ value: 'show', label: 'show/view' }

```

2. Add an array to the `secondary-options` file. Sample Format:

```

show: [

{

value: 'repo-status',

label: 'status of project including staged, unstaged and untracked files',

usage: 'git status'

nb: 'To know about this command, "run git status --help"'

},

{

value: 'logs',

label: 'commit logs/history'

},

```

The `nb` is optional. It is responsible for what the user sees in the notes section.

`\n` is used to insert newline.

3. To add tertiary options, remove the `usage` and `nb` key/value pair for that command in the `secondary-options.js` file e.g..

```

show: [

{

value: 'logs',

label: 'commit logs/history'

},

```

then supply `tertiary-options.js` file the necessary data e.g.

```

logs: [

{

value: 'all',

label: 'all',

usage: 'git log',

nb: 'Type q in the terminal to exit the logs'

},

{

value: 'last-n-commit',

label: 'for last xxx number of commits',

usage: 'git log -n',

nb: 'Replace n with number of commits e.g. git log -2'

},

{

value: 'particular-period',

label: 'since a particular period',

usage: 'git log --since=period',

nb: 'Replace period with intended timeframe e.g git log --since=3days. You can use dates like 2018-12-31.\n\n Similar flags are --until, --before, --after'

}

]

```

4. Once you are done, add, commit, push and create a PR to Main.
