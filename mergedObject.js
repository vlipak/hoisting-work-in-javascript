console.log(['foo', 'bar'].concat(['baz', 'qux'].reverse().slice(1)).join(' ').replace(/a/i, 'ee').toUpperCase());
const cookie = name => `; ${document.cookie}`.split(`; ${name}=`).pop().split(';').shift();
const merge = Object.assign({}, obj1, obj2);