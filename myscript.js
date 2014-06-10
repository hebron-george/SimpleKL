// function onInitFs(fs) {
// 	  fs.root.getFile('log.txt', {create: true, exclusive: true}, function(fileEntry) {

//     // fileEntry.isFile === true
//     // fileEntry.name == 'log.txt'
//     // fileEntry.fullPath == '/log.txt'
//     console.log(fileEntry.name);
//   }, errorHandler);
// }
// function errorHandler(e) {
//   var msg = '';

//   switch (e.code) {
//     case FileError.QUOTA_EXCEEDED_ERR:
//       msg = 'QUOTA_EXCEEDED_ERR';
//       break;
//     case FileError.NOT_FOUND_ERR:
//       msg = 'NOT_FOUND_ERR';
//       break;
//     case FileError.SECURITY_ERR:
//       msg = 'SECURITY_ERR';
//       break;
//     case FileError.INVALID_MODIFICATION_ERR:
//       msg = 'INVALID_MODIFICATION_ERR';
//       break;
//     case FileError.INVALID_STATE_ERR:
//       msg = 'INVALID_STATE_ERR';
//       break;
//     default:
//       msg = 'Unknown Error';
//       break;
//   };

//   console.log('Error: ' + msg);
// }
// window.requestFileSystem  = window.requestFileSystem || window.webkitRequestFileSystem;
// window.webkitStorageInfo.requestQuota(PERSISTENT, 10*1024*1024 /* 10 MB */, function(grantedBytes) {
//   window.requestFileSystem(PERSISTENT, grantedBytes, onInitFs, errorHandler);
// }, function(e) {
//   console.log('Error', e);
// });

console.log(document.URL);
//chrome.tabs.executeScript({code: 'document.body.style.backgroundColor="red"'});
document.body.style.backgroundColor="red";