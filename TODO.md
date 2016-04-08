# TODO

## 2.0
- Test Frontend
- Make it service type app
- Make it into electron app, maybe menubar app?
- handle nested todo
- Able to specify todo.conf.yml path

# PENDING
- filter by tag

# DONE
- init command
- edit command
- project title fallback to dirname when none given
- log which todo.md is used
- add screenshot
- Show remaining num of todos
- Make DONEs section closed at first
- create dom-gen module
- Use class-component
- Add cli
- Add .npmignore
- Set up frontend build with bulbo
- Set up bootstrap
- Server
  - search configuraton $CWD/todo.conf.yml -> $HOME/.todo.conf.yml
- Implement GET /projects
- Create ProjectConfiguration#getProject(): Project
- Create ProjectConfigurationRepository#getByPath
- Create TODO model
  - title The title of the todo
  - completed True iff completed
  - subtodos The child todos
- Create Project model
  - title The title of the project
  - path The path to the TODO.md file
  - todos The todos which belong to the project
  - dones The completed todos which belong to the project
- Create ProjectConfiguration model
  - path The path to the TODO.md file
  - note The note for the project
  - order The order to show the project
  - tags The tags used for filtering
- Set up package.json
