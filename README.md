# todo-md-cli v1.0.1

> TODO.md viewer app.

# Install

    npm install -g todo-md-cli

The above installs `todo-md` command globally.

## todo.conf.yml

Set up the config file `$HOME/.todo.conf.yml` like the following:

```yml
title: todo-md
path: /Users/kt3k/tmp/todo-md
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

    todo-md

The above starts the server at http://localhost:3000/site/

# Commands

## Starts the server

    todo-md

Example

    $ todo-md
    Server running at: http://localhost:3000/site

You can access http://localhost:3000/site and will see something like:

![ss](http://kt3k.github.io/todo-md/media/todo-ss.png)

## Init config (not yet implemented)

    todo-md init

## Edit config (not yet implemented)

    todo-md edit

# License

MIT
