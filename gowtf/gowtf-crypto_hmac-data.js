var gowtfData = {"html":"<p>\u000aThe hmac package implements the Keyed-Hash Message Authentication Code (HMAC)\u000aas defined in U.S. Federal Information Processing Standards Publication 198.\u000aAn HMAC is a cryptographic hash that uses a key to sign a message.\u000aThe receiver verifies the hash by recomputing it using the same key.\u000a</p>\u000a","name":"hmac","filenames":["/home/nsf/go/src/pkg/crypto/hmac/hmac.go"],"types":[],"funcs":[{"html":"\u000a<h2><a class=\"black\" href=\"?f:\">func</a> <a href=\"?f:New!\">New</a></h2>\u000a<code>func New(h func() hash.Hash, key []byte) hash.Hash</code>\u000a<p>\u000aNew returns a new HMAC hash using the given hash generator and key.\u000a</p>\u000a\u000a","name":"New"},{"html":"\u000a<h2><a class=\"black\" href=\"?f:\">func</a> <a href=\"?f:NewMD5!\">NewMD5</a></h2>\u000a<code>func NewMD5(key []byte) hash.Hash</code>\u000a<p>\u000aNewMD5 returns a new HMAC-MD5 hash using the given key.\u000a</p>\u000a\u000a","name":"NewMD5"},{"html":"\u000a<h2><a class=\"black\" href=\"?f:\">func</a> <a href=\"?f:NewSHA1!\">NewSHA1</a></h2>\u000a<code>func NewSHA1(key []byte) hash.Hash</code>\u000a<p>\u000aNewSHA1 returns a new HMAC-SHA1 hash using the given key.\u000a</p>\u000a\u000a","name":"NewSHA1"}],"consts":[],"vars":[]}