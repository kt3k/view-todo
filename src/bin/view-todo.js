import {serve} from '../server'

import minimist from 'minimist'

import {exec} from 'child_process'
import editor from 'editor'

const PORT = 3000
const CONFIG_FILE = 'todo.conf.yml'

const argv = minimist(process.argv.slice(2))

const COMMAND = {
  SERVE: 0,
  INIT: 1,
  EDIT: 2,
  UNKNOWN: -1
}

main(argv)

/**
 * @param {object} argv The minimist parsed opts
 */
function main (argv) {
  switch (getCommand(argv._)) {
    case COMMAND.SERVE:
      serve(CONFIG_FILE, PORT)
      break
    case COMMAND.INIT:
      console.log('touch ~/.todo.conf.yml')
      exec('touch ~/.todo.conf.yml')
      break
    case COMMAND.EDIT:
      editor(process.env.HOME + '/.todo.conf.yml')
      break
    default:
      console.log('unknown command:', argv._[0])
      process.exit(1)
  }
}

function getCommand (args) {
  if (args == null || args.length === 0) {
    return COMMAND.SERVE
  }

  if (args[0] === 'init') {
    return COMMAND.INIT
  }

  if (args[0] === 'edit') {
    return COMMAND.EDIT
  }

  return COMMAND.UNKNOWN
}
