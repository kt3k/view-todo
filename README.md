<img align="right" width="200" height="200" src="http://kt3k.github.io/view-todo/src/site/img/view-todo.svg" />

# view-todo v1.8.4 [![Circle CI](https://circleci.com/gh/kt3k/view-todo.svg?style=svg)](https://circleci.com/gh/kt3k/view-todo) [![codecov.io](https://codecov.io/github/kt3k/view-todo/coverage.svg?branch=master)](https://codecov.io/github/kt3k/view-todo?branch=master)

> TODO.md viewer app.

# Install

    npm install -g view-todo

The above installs `view-todo` command globally.

## todo.conf.yml

Set up the config file `$HOME/.todo.conf.yml` like the following:

```yml
title: view-todo
path: /Users/kt3k/tmp/view-todo
note: todo management service
tags: todo, javascript
---
title: ledgerman
path: /Users/kt3k/tmp/ledgerman
note: A Cli tool for creating a general ledger from the journal.
tags: ledger, accounting, javascript
---
title: bulbo
path: /Users/kt3k/tmp/bulbo
note: Streaming static site generator, based on gulp
tags: javascript, statis site generator
```

Then you can run todo viewer server with the command:

    view-todo

The above starts the server at http://localhost:3000/site/

# Commands

## Starts the server

    view-todo

Example

    $ view-todo
    Using the config file: /Users/kt3k/.todo.conf.yml
    Server running at: http://localhost:3000/site

You can access http://localhost:3000/site and will see something like:

![ss0](http://kt3k.github.io/view-todo/media/view-todo-ss0.png)
![ss1](http://kt3k.github.io/view-todo/media/view-todo-ss1.png)
![ss2](http://kt3k.github.io/view-todo/media/view-todo-ss2.png)

## Init config file

    view-todo init

The above command touches `$HOME/.todo.conf.yml`.

## Edit config file

    view-todo edit

The above command opens `$HOME/.todo.conf.yml` with your `$EDITOR`.

# License

MIT
