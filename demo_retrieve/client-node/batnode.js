const BatNode = require('../../batnode').BatNode;
const PERSONAL_DIR = require('../../utils/file').PERSONAL_DIR;
const HOSTED_DIR = require('../../utils/file').HOSTED_DIR;
const fileSystem = require('../../utils/file').fileSystem;

const node = new BatNode();
// node2.uploadFile('./personal/example.txt');
// node2.retrieveFile('./manifest/781f4f99874938ab85b22fb008694f26e222e081.batchain', null);
// node2.uploadFile('./personal/cat.jpg');
node.retrieveFile('./manifest/fccd50f5bfc3d4f3a4ebd12930336df45b96fee5.batchain', null);
// node2.retrieveFile('./manifest/b0b4b14735e13c45b029577c3b4d379d19d93ce7.batchain', null);
// node2.retrieveFile('./manifest/0c0d5abc0056e4f9454406dca0610e547db4c71b.batchain', null);
// node2.retrieveFile('./manifest/ff7ff31d419b3b92fa5bbee72af9047a613ee623.batchain', null);
// node2.uploadFile(1237,'127.0.0.1', './personal/cat.jpg');
// node2.uploadFile(1237,'127.0.0.1', './personal/test.pdf');
// fileSystem.processUpload('./personal/example.txt');
//fileSystem.composeShards('./manifest/4f112a6ec12a710bc3cc4fba8d334ab09f87e2c4.batchain') //results in a decrypted-example.txt saved to personal dir