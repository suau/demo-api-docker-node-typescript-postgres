import * as http from "http";
import {app} from "./app";

const port = normalizePort(process.env.PORT || '8080');
const server = http.createServer(app);
server.listen(port);
server.on('error', onError);
server.on('listening', onListening);

function onError(error: any) {
    if (error.syscall !== 'listen') {
        throw error;
    }
    switch (error.code) {
        case 'EACCES':
            console.error(getBind(port) + ' requires elevated privileges');
            process.exit(1);
            break;
        case 'EADDRINUSE':
            console.error(getBind(port) + ' is already in use');
            process.exit(1);
            break;
        default:
            throw error;
    }
}

function onListening() {
    const bind = getBind(server.address());
    console.log('Listening on ' + bind);
}

// HELPERS

function getBind(address: any): string {
    return typeof address === 'string'
        ? 'Pipe ' + address
        : 'Port ' + address.port;
}

function normalizePort(val: string) {
    const port = parseInt(val, 10);
    if (isNaN(port)) {
        return val;
    }
    if (port >= 0) {
        return port;
    }
    return false;
}
