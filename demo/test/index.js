const test = require('test');
test.setup();

var fs = require('fs');

try {
    fs.unlink("test.db");
} catch (e) {};
try {
    fs.unlink("test.db-shm");
} catch (e) {};
try {
    fs.unlink("test.db-wal");
} catch (e) {};

run('../app');

run('./classes');
run('./extend');
run('./reverse');

run('./acl');
run('./graphql');
run('./nographql');

run('./chat');

run('./user');

test.run(console.DEBUG);
process.exit();
