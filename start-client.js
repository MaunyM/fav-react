const args = [ 'start --help' ];
const opts = { stdio: 'inherit', cwd: 'client', shell: true };
console.log( process.env.PATH );
require('child_process').spawn('npm', args, opts);
