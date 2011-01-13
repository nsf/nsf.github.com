var gortfmData = {index:"index.html",html:"<p>\nThis package implements Bruce Schneier&#39;s Twofish encryption algorithm.\n</p>\n",name:"twofish",types:[{html:"\n<h2><a class=\"black\" href=\"?t:\">type</a> <a href=\"?t:Cipher!\">Cipher</a></h2>\n<pre>type Cipher struct {\n\t// contains unexported fields\n}</pre>\n<p>\nA Cipher is an instance of Twofish encryption using a particular key.\n</p>\n\n",name:"Cipher","methods":[{html:"\n<h2><a class=\"black\" href=\"?m:Cipher\">func (*Cipher)</a> <a href=\"?m:Cipher.BlockSize!\">BlockSize</a></h2>\n<code>func (c *Cipher) BlockSize() int</code>\n<p>\nBlockSize returns the Twofish block size, 16 bytes.\n</p>\n\n",name:"BlockSize"},{html:"\n<h2><a class=\"black\" href=\"?m:Cipher\">func (*Cipher)</a> <a href=\"?m:Cipher.Decrypt!\">Decrypt</a></h2>\n<code>func (skey *Cipher) Decrypt(dst, src []byte)</code>\n<p>\nDecrypt decrypts a 16-byte block from src to dst, which may overlap.\n</p>\n\n",name:"Decrypt"},{html:"\n<h2><a class=\"black\" href=\"?m:Cipher\">func (*Cipher)</a> <a href=\"?m:Cipher.Encrypt!\">Encrypt</a></h2>\n<code>func (skey *Cipher) Encrypt(dst, src []byte)</code>\n<p>\nEncrypt encrypts a 16-byte block from src to dst, which may overlap.\nNote that for amounts of data larger than a block,\nit is not safe to just call Encrypt on successive blocks;\ninstead, use an encryption mode like CBC (see crypto/block/cbc.go).\n</p>\n\n",name:"Encrypt"},{html:"\n<h2><a class=\"black\" href=\"?m:Cipher\">func (*Cipher)</a> <a href=\"?m:Cipher.Reset!\">Reset</a></h2>\n<code>func (c *Cipher) Reset()</code>\n<p>\nReset zeros the key data, so that it will no longer appear in the process&#39;s\nmemory.\n</p>\n\n",name:"Reset"}]},{html:"\n<h2><a class=\"black\" href=\"?t:\">type</a> <a href=\"?t:KeySizeError!\">KeySizeError</a></h2>\n<pre>type KeySizeError int</pre>\n\n",name:"KeySizeError","methods":[{html:"\n<h2><a class=\"black\" href=\"?m:KeySizeError\">func (KeySizeError)</a> <a href=\"?m:KeySizeError.String!\">String</a></h2>\n<code>func (k KeySizeError) String() string</code>\n\n",name:"String"}]}],funcs:[{html:"\n<h2><a class=\"black\" href=\"?f:\">func</a> <a href=\"?f:NewCipher!\">NewCipher</a></h2>\n<code>func NewCipher(key []byte) (*Cipher, os.Error)</code>\n<p>\nNewCipher creates and returns a Cipher.\nThe key argument should be the Twofish key, 16, 24 or 32 bytes.\n</p>\n\n",name:"NewCipher"}],consts:[{html:"\n<h2><a class=\"black\" href=\"?c:\">const</a> <a href=\"?c:BlockSize!\">BlockSize</a></h2>\n<pre>const BlockSize = 16</pre>\n<p>\nBlockSize is the constant block size of Twofish.\n</p>\n\n",names:["BlockSize"],type:""}],vars:[]}