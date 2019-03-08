import * as ibmdbOrigin from "ibm_db"
import bluebird from "bluebird";
const ibmdb = bluebird.promisifyAll(ibmdbOrigin);

const conn = ibmdb.openSync("DATABASE=PRUEBA;HOSTNAME=db2;UID=db2inst1;PWD=db2inst1;PORT=50000;PROTOCOL=TCPIP");
const res = conn.querySync("SELECT * FROM PUBLIC.TAB001");
console.log(res);