var gowtfData = {"html":"<p>\u000aThis package implements AES encryption (formerly Rijndael),\u000aas defined in U.S. Federal Information Processing Standards Publication 197.\u000a</p>\u000a","name":"aes","filenames":["/home/nsf/go/src/pkg/crypto/aes/const.go","/home/nsf/go/src/pkg/crypto/aes/cipher.go","/home/nsf/go/src/pkg/crypto/aes/block.go"],"types":[{"html":"\u000a<h2><a class=\"black\" href=\"?t:\">type</a> <a href=\"?t:Cipher!\">Cipher</a></h2>\u000a<pre>type Cipher struct {\u000a\u0009enc []uint32\u000a\u0009dec []uint32\u000a}</pre>\u000a<p>\u000aA Cipher is an instance of AES encryption using a particular key.\u000a</p>\u000a\u000a","name":"Cipher","methods":[{"html":"\u000a<h2><a class=\"black\" href=\"?m:Cipher\">func (*Cipher)</a> <a href=\"?m:Cipher.BlockSize!\">BlockSize</a></h2>\u000a<code>func (c *Cipher) BlockSize() int</code>\u000a<p>\u000aBlockSize returns the AES block size, 16 bytes.\u000aIt is necessary to satisfy the Cipher interface in the\u000apackage &#34;crypto/block&#34;.\u000a</p>\u000a\u000a","name":"BlockSize"},{"html":"\u000a<h2><a class=\"black\" href=\"?m:Cipher\">func (*Cipher)</a> <a href=\"?m:Cipher.Decrypt!\">Decrypt</a></h2>\u000a<code>func (c *Cipher) Decrypt(src, dst []byte)</code>\u000a<p>\u000aDecrypt decrypts the 16-byte buffer src using the key k\u000aand stores the result in dst.\u000a</p>\u000a\u000a","name":"Decrypt"},{"html":"\u000a<h2><a class=\"black\" href=\"?m:Cipher\">func (*Cipher)</a> <a href=\"?m:Cipher.Encrypt!\">Encrypt</a></h2>\u000a<code>func (c *Cipher) Encrypt(src, dst []byte)</code>\u000a<p>\u000aEncrypt encrypts the 16-byte buffer src using the key k\u000aand stores the result in dst.\u000aNote that for amounts of data larger than a block,\u000ait is not safe to just call Encrypt on successive blocks;\u000ainstead, use an encryption mode like CBC (see crypto/block/cbc.go).\u000a</p>\u000a\u000a","name":"Encrypt"},{"html":"\u000a<h2><a class=\"black\" href=\"?m:Cipher\">func (*Cipher)</a> <a href=\"?m:Cipher.Reset!\">Reset</a></h2>\u000a<code>func (c *Cipher) Reset()</code>\u000a<p>\u000aReset zeros the key data, so that it will no longer\u000aappear in the process&#39;s memory.\u000a</p>\u000a\u000a","name":"Reset"}]},{"html":"\u000a<h2><a class=\"black\" href=\"?t:\">type</a> <a href=\"?t:KeySizeError!\">KeySizeError</a></h2>\u000a<pre>type KeySizeError int</pre>\u000a\u000a","name":"KeySizeError","methods":[{"html":"\u000a<h2><a class=\"black\" href=\"?m:KeySizeError\">func (KeySizeError)</a> <a href=\"?m:KeySizeError.String!\">String</a></h2>\u000a<code>func (k KeySizeError) String() string</code>\u000a\u000a","name":"String"}]}],"funcs":[{"html":"\u000a<h2><a class=\"black\" href=\"?f:\">func</a> <a href=\"?f:NewCipher!\">NewCipher</a></h2>\u000a<code>func NewCipher(key []byte) (*Cipher, os.Error)</code>\u000a<p>\u000aNewCipher creates and returns a new Cipher.\u000aThe key argument should be the AES key,\u000aeither 16, 24, or 32 bytes to select\u000aAES-128, AES-192, or AES-256.\u000a</p>\u000a\u000a","name":"NewCipher"}],"consts":[{"html":"\u000a<h2><a class=\"black\" href=\"?c:\">const</a> <a href=\"?c:BlockSize!\">BlockSize</a></h2>\u000a<pre>const BlockSize = 16</pre>\u000a<p>\u000aThe AES block size in bytes.\u000a</p>\u000a\u000a","names":["BlockSize"],"type":""}],"vars":[]}