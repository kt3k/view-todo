import {serve} from '../server'

const PORT = 3000
const CONFIG_FILE = 'todo.conf.yml'

serve(CONFIG_FILE, PORT)
