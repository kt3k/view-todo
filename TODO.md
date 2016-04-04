# TODO

- Create ProjectConfigurationRepository#getFromPath
- Implement GET /projects
- Set up frontend build with bulbo
- Server
  - search configuraton $CWD/todo.conf.yml -> $HOME/.todo.conf.yml

# DONE

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
