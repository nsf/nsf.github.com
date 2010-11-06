var gortfmData = {index:"index.html",html:"<p>\nThis package implements AES encryption (formerly Rijndael),\nas defined in U.S. Federal Information Processing Standards Publication 197.\n</p>\n",name:"aes",types:[{html:"\n<h2><a class=\"black\" href=\"?t:\">type</a> <a href=\"?t:Cipher!\">Cipher</a></h2>\n<pre>type Cipher struct {\n\t// contains unexported fields\n}</pre>\n<p>\nA Cipher is an instance of AES encryption using a particular key.\n</p>\n\n",name:"Cipher","methods":[{html:"\n<h2><a class=\"black\" href=\"?m:Cipher\">func (*Cipher)</a> <a href=\"?m:Cipher.BlockSize!\">BlockSize</a></h2>\n<code>func (c *Cipher) BlockSize() int</code>\n<p>\nBlockSize returns the AES block size, 16 bytes.\nIt is necessary to satisfy the Cipher interface in the\npackage &#34;crypto/block&#34;.\n</p>\n\n",name:"BlockSize"},{html:"\n<h2><a class=\"black\" href=\"?m:Cipher\">func (*Cipher)</a> <a href=\"?m:Cipher.Decrypt!\">Decrypt</a></h2>\n<code>func (c *Cipher) Decrypt(src, dst []byte)</code>\n<p>\nDecrypt decrypts the 16-byte buffer src using the key k\nand stores the result in dst.\n</p>\n\n",name:"Decrypt"},{html:"\n<h2><a class=\"black\" href=\"?m:Cipher\">func (*Cipher)</a> <a href=\"?m:Cipher.Encrypt!\">Encrypt</a></h2>\n<code>func (c *Cipher) Encrypt(src, dst []byte)</code>\n<p>\nEncrypt encrypts the 16-byte buffer src using the key k\nand stores the result in dst.\nNote that for amounts of data larger than a block,\nit is not safe to just call Encrypt on successive blocks;\ninstead, use an encryption mode like CBC (see crypto/block/cbc.go).\n</p>\n\n",name:"Encrypt"},{html:"\n<h2><a class=\"black\" href=\"?m:Cipher\">func (*Cipher)</a> <a href=\"?m:Cipher.Reset!\">Reset</a></h2>\n<code>func (c *Cipher) Reset()</code>\n<p>\nReset zeros the key data, so that it will no longer\nappear in the process&#39;s memory.\n</p>\n\n",name:"Reset"}]},{html:"\n<h2><a class=\"black\" href=\"?t:\">type</a> <a href=\"?t:KeySizeError!\">KeySizeError</a></h2>\n<pre>type KeySizeError int</pre>\n\n",name:"KeySizeError","methods":[{html:"\n<h2><a class=\"black\" href=\"?m:KeySizeError\">func (KeySizeError)</a> <a href=\"?m:KeySizeError.String!\">String</a></h2>\n<code>func (k KeySizeError) String() string</code>\n\n",name:"String"}]}],funcs:[{html:"\n<h2><a class=\"black\" href=\"?f:\">func</a> <a href=\"?f:NewCipher!\">NewCipher</a></h2>\n<code>func NewCipher(key []byte) (*Cipher, os.Error)</code>\n<p>\nNewCipher creates and returns a new Cipher.\nThe key argument should be the AES key,\neither 16, 24, or 32 bytes to select\nAES-128, AES-192, or AES-256.\n</p>\n\n",name:"NewCipher"}],consts:[{html:"\n<h2><a class=\"black\" href=\"?c:\">const</a> <a href=\"?c:BlockSize!\">BlockSize</a></h2>\n<pre>const BlockSize = 16</pre>\n<p>\nThe AES block size in bytes.\n</p>\n\n",names:["BlockSize"],type:""}],vars:[]}