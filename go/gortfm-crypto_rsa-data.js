var gortfmData = {index:"index.html",html:"<p>\nThis package implements RSA encryption as specified in PKCS#1.\n</p>\n",name:"rsa",types:[{html:"\n<h2><a class=\"black\" href=\"?t:\">type</a> <a href=\"?t:DecryptionError!\">DecryptionError</a></h2>\n<pre>type DecryptionError struct{}</pre>\n<p>\nA DecryptionError represents a failure to decrypt a message.\nIt is deliberately vague to avoid adaptive attacks.\n</p>\n\n",name:"DecryptionError","methods":[{html:"\n<h2><a class=\"black\" href=\"?m:DecryptionError\">func (DecryptionError)</a> <a href=\"?m:DecryptionError.String!\">String</a></h2>\n<code>func (DecryptionError) String() string</code>\n\n",name:"String"}]},{html:"\n<h2><a class=\"black\" href=\"?t:\">type</a> <a href=\"?t:MessageTooLongError!\">MessageTooLongError</a></h2>\n<pre>type MessageTooLongError struct{}</pre>\n<p>\nMessageTooLongError is returned when attempting to encrypt a message which\nis too large for the size of the public key.\n</p>\n\n",name:"MessageTooLongError","methods":[{html:"\n<h2><a class=\"black\" href=\"?m:MessageTooLongError\">func (MessageTooLongError)</a> <a href=\"?m:MessageTooLongError.String!\">String</a></h2>\n<code>func (MessageTooLongError) String() string</code>\n\n",name:"String"}]},{html:"\n<h2><a class=\"black\" href=\"?t:\">type</a> <a href=\"?t:PKCS1v15Hash!\">PKCS1v15Hash</a></h2>\n<pre>type PKCS1v15Hash int</pre>\n<p>\nDue to the design of PKCS#1 v1.5, we need to know the exact hash function in\nuse. A generic hash.Hash will not do.\n</p>\n\n",name:"PKCS1v15Hash","methods":[]},{html:"\n<h2><a class=\"black\" href=\"?t:\">type</a> <a href=\"?t:PrivateKey!\">PrivateKey</a></h2>\n<pre>type PrivateKey struct {\n\tPublicKey          // public part.\n\tD         *big.Int // private exponent\n\tP, Q      *big.Int // prime factors of N\n}</pre>\n<p>\nA PrivateKey represents an RSA key\n</p>\n\n",name:"PrivateKey","methods":[{html:"\n<h2><a class=\"black\" href=\"?m:PrivateKey\">func (PrivateKey)</a> <a href=\"?m:PrivateKey.Validate!\">Validate</a></h2>\n<code>func (priv PrivateKey) Validate() os.Error</code>\n\n",name:"Validate"}]},{html:"\n<h2><a class=\"black\" href=\"?t:\">type</a> <a href=\"?t:PublicKey!\">PublicKey</a></h2>\n<pre>type PublicKey struct {\n\tN *big.Int // modulus\n\tE int      // public exponent\n}</pre>\n<p>\nA PublicKey represents the public part of an RSA key.\n</p>\n\n",name:"PublicKey","methods":[]},{html:"\n<h2><a class=\"black\" href=\"?t:\">type</a> <a href=\"?t:VerificationError!\">VerificationError</a></h2>\n<pre>type VerificationError struct{}</pre>\n<p>\nA VerificationError represents a failure to verify a signature.\nIt is deliberately vague to avoid adaptive attacks.\n</p>\n\n",name:"VerificationError","methods":[{html:"\n<h2><a class=\"black\" href=\"?m:VerificationError\">func (VerificationError)</a> <a href=\"?m:VerificationError.String!\">String</a></h2>\n<code>func (VerificationError) String() string</code>\n\n",name:"String"}]}],funcs:[{html:"\n<h2><a class=\"black\" href=\"?f:\">func</a> <a href=\"?f:DecryptOAEP!\">DecryptOAEP</a></h2>\n<code>func DecryptOAEP(hash hash.Hash, rand io.Reader, priv *PrivateKey, ciphertext []byte, label []byte) (msg []byte, err os.Error)</code>\n<p>\nDecryptOAEP decrypts ciphertext using RSA-OAEP.\nIf rand != nil, DecryptOAEP uses RSA blinding to avoid timing side-channel attacks.\n</p>\n\n",name:"DecryptOAEP"},{html:"\n<h2><a class=\"black\" href=\"?f:\">func</a> <a href=\"?f:DecryptPKCS1v15!\">DecryptPKCS1v15</a></h2>\n<code>func DecryptPKCS1v15(rand io.Reader, priv *PrivateKey, ciphertext []byte) (out []byte, err os.Error)</code>\n<p>\nDecryptPKCS1v15 decrypts a plaintext using RSA and the padding scheme from PKCS#1 v1.5.\nIf rand != nil, it uses RSA blinding to avoid timing side-channel attacks.\n</p>\n\n",name:"DecryptPKCS1v15"},{html:"\n<h2><a class=\"black\" href=\"?f:\">func</a> <a href=\"?f:DecryptPKCS1v15SessionKey!\">DecryptPKCS1v15SessionKey</a></h2>\n<code>func DecryptPKCS1v15SessionKey(rand io.Reader, priv *PrivateKey, ciphertext []byte, key []byte) (err os.Error)</code>\n<p>\nDecryptPKCS1v15SessionKey decrypts a session key using RSA and the padding scheme from PKCS#1 v1.5.\nIf rand != nil, it uses RSA blinding to avoid timing side-channel attacks.\nIt returns an error if the ciphertext is the wrong length or if the\nciphertext is greater than the public modulus. Otherwise, no error is\nreturned. If the padding is valid, the resulting plaintext message is copied\ninto key. Otherwise, key is unchanged. These alternatives occur in constant\ntime. It is intended that the user of this function generate a random\nsession key beforehand and continue the protocol with the resulting value.\nThis will remove any possibility that an attacker can learn any information\nabout the plaintext.\nSee &ldquo;Chosen Ciphertext Attacks Against Protocols Based on the RSA\nEncryption Standard PKCS #1&rdquo;, Daniel Bleichenbacher, Advances in Cryptology\n(Crypto &#39;98),\n</p>\n\n",name:"DecryptPKCS1v15SessionKey"},{html:"\n<h2><a class=\"black\" href=\"?f:\">func</a> <a href=\"?f:EncryptOAEP!\">EncryptOAEP</a></h2>\n<code>func EncryptOAEP(hash hash.Hash, rand io.Reader, pub *PublicKey, msg []byte, label []byte) (out []byte, err os.Error)</code>\n<p>\nEncryptOAEP encrypts the given message with RSA-OAEP.\nThe message must be no longer than the length of the public modulus less\ntwice the hash length plus 2.\n</p>\n\n",name:"EncryptOAEP"},{html:"\n<h2><a class=\"black\" href=\"?f:\">func</a> <a href=\"?f:EncryptPKCS1v15!\">EncryptPKCS1v15</a></h2>\n<code>func EncryptPKCS1v15(rand io.Reader, pub *PublicKey, msg []byte) (out []byte, err os.Error)</code>\n<p>\nEncryptPKCS1v15 encrypts the given message with RSA and the padding scheme from PKCS#1 v1.5.\nThe message must be no longer than the length of the public modulus minus 11 bytes.\nWARNING: use of this function to encrypt plaintexts other than session keys\nis dangerous. Use RSA OAEP in new protocols.\n</p>\n\n",name:"EncryptPKCS1v15"},{html:"\n<h2><a class=\"black\" href=\"?f:\">func</a> <a href=\"?f:GenerateKey!\">GenerateKey</a></h2>\n<code>func GenerateKey(rand io.Reader, bits int) (priv *PrivateKey, err os.Error)</code>\n<p>\nGenerateKeyPair generates an RSA keypair of the given bit size.\n</p>\n\n",name:"GenerateKey"},{html:"\n<h2><a class=\"black\" href=\"?f:\">func</a> <a href=\"?f:SignPKCS1v15!\">SignPKCS1v15</a></h2>\n<code>func SignPKCS1v15(rand io.Reader, priv *PrivateKey, hash PKCS1v15Hash, hashed []byte) (s []byte, err os.Error)</code>\n<p>\nSignPKCS1v15 calcuates the signature of hashed using RSASSA-PSS-SIGN from RSA PKCS#1 v1.5.\nNote that hashed must be the result of hashing the input message using the\ngiven hash function.\n</p>\n\n",name:"SignPKCS1v15"},{html:"\n<h2><a class=\"black\" href=\"?f:\">func</a> <a href=\"?f:VerifyPKCS1v15!\">VerifyPKCS1v15</a></h2>\n<code>func VerifyPKCS1v15(pub *PublicKey, hash PKCS1v15Hash, hashed []byte, sig []byte) (err os.Error)</code>\n<p>\nVerifyPKCS1v15 verifies an RSA PKCS#1 v1.5 signature.\nhashed is the result of hashing the input message using the given hash\nfunction and sig is the signature. A valid signature is indicated by\nreturning a nil error.\n</p>\n\n",name:"VerifyPKCS1v15"}],consts:[{html:"\n<h2><a class=\"black\" href=\"?c:\">const</a> <a href=\"?c:PKCS1v15Hash!\">PKCS1v15Hash</a></h2>\n<pre>const (\n\tHashMD5 PKCS1v15Hash = iota\n\tHashSHA1\n\tHashSHA256\n\tHashSHA384\n\tHashSHA512\n\tHashMD5SHA1 // combined MD5 and SHA1 hash used for RSA signing in TLS.\n)</pre>\n\n",names:["HashMD5","HashSHA1","HashSHA256","HashSHA384","HashSHA512","HashMD5SHA1"],type:"PKCS1v15Hash"}],vars:[]}