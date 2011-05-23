var gortfmData = {index:"index.html",html:"<p>\nPackage packet implements parsing and serialization of OpenPGP packets, as\nspecified in RFC 4880.\n</p>\n",name:"packet",types:[{html:"\n<h2><a class=\"black\" href=\"?t:\">type</a> <a href=\"?t:CipherFunction!\">CipherFunction</a></h2>\n<pre>type CipherFunction uint8</pre>\n<p>\nCipherFunction represents the different block ciphers specified for OpenPGP. See\n<a href=\"http://www.iana.org/assignments/pgp-parameters/pgp-parameters.xhtml#pgp-parameters-13\">http://www.iana.org/assignments/pgp-parameters/pgp-parameters.xhtml#pgp-parameters-13</a>\n</p>\n\n",name:"CipherFunction","methods":[]},{html:"\n<h2><a class=\"black\" href=\"?t:\">type</a> <a href=\"?t:Compressed!\">Compressed</a></h2>\n<pre>type Compressed struct {\n\tBody io.Reader\n}</pre>\n<p>\nCompressed represents a compressed OpenPGP packet. The decompressed contents\nwill contain more OpenPGP packets. See RFC 4880, section 5.6.\n</p>\n\n",name:"Compressed","methods":[]},{html:"\n<h2><a class=\"black\" href=\"?t:\">type</a> <a href=\"?t:EncryptedKey!\">EncryptedKey</a></h2>\n<pre>type EncryptedKey struct {\n\tKeyId      uint64\n\tAlgo       PublicKeyAlgorithm\n\tEncrypted  []byte\n\tCipherFunc CipherFunction // only valid after a successful Decrypt\n\tKey        []byte         // only valid after a successful Decrypt\n}</pre>\n<p>\nEncryptedKey represents a public-key encrypted session key. See RFC 4880,\nsection 5.1.\n</p>\n\n",name:"EncryptedKey","methods":[{html:"\n<h2><a class=\"black\" href=\"?m:EncryptedKey\">func (*EncryptedKey)</a> <a href=\"?m:EncryptedKey.DecryptRSA!\">DecryptRSA</a></h2>\n<code>func (e *EncryptedKey) DecryptRSA(priv *rsa.PrivateKey) (err os.Error)</code>\n<p>\nDecryptRSA decrypts an RSA encrypted session key with the given private key.\n</p>\n\n",name:"DecryptRSA"}]},{html:"\n<h2><a class=\"black\" href=\"?t:\">type</a> <a href=\"?t:LiteralData!\">LiteralData</a></h2>\n<pre>type LiteralData struct {\n\tIsBinary bool\n\tFileName string\n\tTime     uint32 // Unix epoch time. Either creation time or modification time. 0 means undefined.\n\tBody     io.Reader\n}</pre>\n<p>\nLiteralData represents an encrypted file. See RFC 4880, section 5.9.\n</p>\n\n",name:"LiteralData","methods":[{html:"\n<h2><a class=\"black\" href=\"?m:LiteralData\">func (*LiteralData)</a> <a href=\"?m:LiteralData.ForEyesOnly!\">ForEyesOnly</a></h2>\n<code>func (l *LiteralData) ForEyesOnly() bool</code>\n<p>\nForEyesOnly returns whether the contents of the LiteralData have been marked\nas especially sensitive.\n</p>\n\n",name:"ForEyesOnly"}]},{html:"\n<h2><a class=\"black\" href=\"?t:\">type</a> <a href=\"?t:OnePassSignature!\">OnePassSignature</a></h2>\n<pre>type OnePassSignature struct {\n\tSigType    SignatureType\n\tHash       crypto.Hash\n\tPubKeyAlgo PublicKeyAlgorithm\n\tKeyId      uint64\n\tIsLast     bool\n}</pre>\n<p>\nOnePassSignature represents a one-pass signature packet. See RFC 4880,\nsection 5.4.\n</p>\n\n",name:"OnePassSignature","methods":[]},{html:"\n<h2><a class=\"black\" href=\"?t:\">type</a> <a href=\"?t:Packet!\">Packet</a></h2>\n<pre>type Packet interface {\n\t// contains filtered or unexported methods\n}</pre>\n<p>\nPacket represents an OpenPGP packet. Users are expected to try casting\ninstances of this interface to specific packet types.\n</p>\n\n",name:"Packet","methods":[]},{html:"\n<h2><a class=\"black\" href=\"?t:\">type</a> <a href=\"?t:PrivateKey!\">PrivateKey</a></h2>\n<pre>type PrivateKey struct {\n\tPublicKey\n\tEncrypted bool // if true then the private key is unavailable until Decrypt has been called.\n\n\n\tPrivateKey interface{} // An *rsa.PrivateKey.\n\t// contains filtered or unexported fields\n}</pre>\n<p>\nPrivateKey represents a possibly encrypted private key. See RFC 4880,\nsection 5.5.3.\n</p>\n\n",name:"PrivateKey","methods":[{html:"\n<h2><a class=\"black\" href=\"?m:PrivateKey\">func (*PrivateKey)</a> <a href=\"?m:PrivateKey.Decrypt!\">Decrypt</a></h2>\n<code>func (pk *PrivateKey) Decrypt(passphrase []byte) os.Error</code>\n<p>\nDecrypt decrypts an encrypted private key using a passphrase.\n</p>\n\n",name:"Decrypt"},{html:"\n<h2><a class=\"black\" href=\"?m:PrivateKey\">func (*PrivateKey)</a> <a href=\"?m:PrivateKey.Serialize!\">Serialize</a></h2>\n<code>func (pk *PrivateKey) Serialize(w io.Writer) (err os.Error)</code>\n\n",name:"Serialize"}]},{html:"\n<h2><a class=\"black\" href=\"?t:\">type</a> <a href=\"?t:PublicKey!\">PublicKey</a></h2>\n<pre>type PublicKey struct {\n\tCreationTime uint32 // seconds since the epoch\n\tPubKeyAlgo   PublicKeyAlgorithm\n\tPublicKey    interface{} // Either a *rsa.PublicKey or *dsa.PublicKey\n\tFingerprint  [20]byte\n\tKeyId        uint64\n\tIsSubkey     bool\n\t// contains filtered or unexported fields\n}</pre>\n<p>\nPublicKey represents an OpenPGP public key. See RFC 4880, section 5.5.2.\n</p>\n\n",name:"PublicKey","methods":[{html:"\n<h2><a class=\"black\" href=\"?m:PublicKey\">func (*PublicKey)</a> <a href=\"?m:PublicKey.CanSign!\">CanSign</a></h2>\n<code>func (pk *PublicKey) CanSign() bool</code>\n<p>\nCanSign returns true iff this public key can generate signatures\n</p>\n\n",name:"CanSign"},{html:"\n<h2><a class=\"black\" href=\"?m:PublicKey\">func (*PublicKey)</a> <a href=\"?m:PublicKey.KeyIdShortString!\">KeyIdShortString</a></h2>\n<code>func (pk *PublicKey) KeyIdShortString() string</code>\n<p>\nKeyIdShortString returns the short form of public key&#39;s fingerprint\nin capital hex, as shown by gpg --list-keys (e.g. &#34;621CC013&#34;).\n</p>\n\n",name:"KeyIdShortString"},{html:"\n<h2><a class=\"black\" href=\"?m:PublicKey\">func (*PublicKey)</a> <a href=\"?m:PublicKey.KeyIdString!\">KeyIdString</a></h2>\n<code>func (pk *PublicKey) KeyIdString() string</code>\n<p>\nKeyIdString returns the public key&#39;s fingerprint in capital hex\n(e.g. &#34;6C7EE1B8621CC013&#34;).\n</p>\n\n",name:"KeyIdString"},{html:"\n<h2><a class=\"black\" href=\"?m:PublicKey\">func (*PublicKey)</a> <a href=\"?m:PublicKey.Serialize!\">Serialize</a></h2>\n<code>func (pk *PublicKey) Serialize(w io.Writer) (err os.Error)</code>\n\n",name:"Serialize"},{html:"\n<h2><a class=\"black\" href=\"?m:PublicKey\">func (*PublicKey)</a> <a href=\"?m:PublicKey.SerializeSignaturePrefix!\">SerializeSignaturePrefix</a></h2>\n<code>func (pk *PublicKey) SerializeSignaturePrefix(h hash.Hash)</code>\n<p>\nSerializeSignaturePrefix writes the prefix for this public key to the given Writer.\nThe prefix is used when calculating a signature over this public key. See\nRFC 4880, section 5.2.4.\n</p>\n\n",name:"SerializeSignaturePrefix"},{html:"\n<h2><a class=\"black\" href=\"?m:PublicKey\">func (*PublicKey)</a> <a href=\"?m:PublicKey.VerifyKeySignature!\">VerifyKeySignature</a></h2>\n<code>func (pk *PublicKey) VerifyKeySignature(signed *PublicKey, sig *Signature) (err os.Error)</code>\n<p>\nVerifyKeySignature returns nil iff sig is a valid signature, made by this\npublic key, of signed.\n</p>\n\n",name:"VerifyKeySignature"},{html:"\n<h2><a class=\"black\" href=\"?m:PublicKey\">func (*PublicKey)</a> <a href=\"?m:PublicKey.VerifySignature!\">VerifySignature</a></h2>\n<code>func (pk *PublicKey) VerifySignature(signed hash.Hash, sig *Signature) (err os.Error)</code>\n<p>\nVerifySignature returns nil iff sig is a valid signature, made by this\npublic key, of the data hashed into signed. signed is mutated by this call.\n</p>\n\n",name:"VerifySignature"},{html:"\n<h2><a class=\"black\" href=\"?m:PublicKey\">func (*PublicKey)</a> <a href=\"?m:PublicKey.VerifyUserIdSignature!\">VerifyUserIdSignature</a></h2>\n<code>func (pk *PublicKey) VerifyUserIdSignature(id string, sig *Signature) (err os.Error)</code>\n<p>\nVerifyUserIdSignature returns nil iff sig is a valid signature, made by this\npublic key, of id.\n</p>\n\n",name:"VerifyUserIdSignature"}]},{html:"\n<h2><a class=\"black\" href=\"?t:\">type</a> <a href=\"?t:PublicKeyAlgorithm!\">PublicKeyAlgorithm</a></h2>\n<pre>type PublicKeyAlgorithm uint8</pre>\n<p>\nPublicKeyAlgorithm represents the different public key system specified for\nOpenPGP. See\n<a href=\"http://www.iana.org/assignments/pgp-parameters/pgp-parameters.xhtml#pgp-parameters-12\">http://www.iana.org/assignments/pgp-parameters/pgp-parameters.xhtml#pgp-parameters-12</a>\n</p>\n\n",name:"PublicKeyAlgorithm","methods":[]},{html:"\n<h2><a class=\"black\" href=\"?t:\">type</a> <a href=\"?t:Reader!\">Reader</a></h2>\n<pre>type Reader struct {\n\t// contains filtered or unexported fields\n}</pre>\n<p>\nReader reads packets from an io.Reader and allows packets to be &#39;unread&#39; so\nthat they result from the next call to Next.\n</p>\n\n",name:"Reader","methods":[{html:"\n<h2><a class=\"black\" href=\"?m:Reader\">func (*Reader)</a> <a href=\"?m:Reader.Next!\">Next</a></h2>\n<code>func (r *Reader) Next() (p Packet, err os.Error)</code>\n<p>\nNext returns the most recently unread Packet, or reads another packet from\nthe top-most io.Reader. Unknown packet types are skipped.\n</p>\n\n",name:"Next"},{html:"\n<h2><a class=\"black\" href=\"?m:Reader\">func (*Reader)</a> <a href=\"?m:Reader.Push!\">Push</a></h2>\n<code>func (r *Reader) Push(reader io.Reader)</code>\n<p>\nPush causes the Reader to start reading from a new io.Reader. When an EOF\nerror is seen from the new io.Reader, it is popped and the Reader continues\nto read from the next most recent io.Reader.\n</p>\n\n",name:"Push"},{html:"\n<h2><a class=\"black\" href=\"?m:Reader\">func (*Reader)</a> <a href=\"?m:Reader.Unread!\">Unread</a></h2>\n<code>func (r *Reader) Unread(p Packet)</code>\n<p>\nUnread causes the given Packet to be returned from the next call to Next.\n</p>\n\n",name:"Unread"}]},{html:"\n<h2><a class=\"black\" href=\"?t:\">type</a> <a href=\"?t:Signature!\">Signature</a></h2>\n<pre>type Signature struct {\n\tSigType    SignatureType\n\tPubKeyAlgo PublicKeyAlgorithm\n\tHash       crypto.Hash\n\n\t// HashSuffix is extra data that is hashed in after the signed data.\n\tHashSuffix []byte\n\t// HashTag contains the first two bytes of the hash for fast rejection\n\t// of bad signed data.\n\tHashTag      [2]byte\n\tCreationTime uint32 // Unix epoch time\n\n\tRSASignature     []byte\n\tDSASigR, DSASigS *big.Int\n\n\tSigLifetimeSecs, KeyLifetimeSecs                        *uint32\n\tPreferredSymmetric, PreferredHash, PreferredCompression []uint8\n\tIssuerKeyId                                             *uint64\n\tIsPrimaryId                                             *bool\n\n\t// FlagsValid is set if any flags were given. See RFC 4880, section\n\t// 5.2.3.21 for details.\n\tFlagsValid                                                           bool\n\tFlagCertify, FlagSign, FlagEncryptCommunications, FlagEncryptStorage bool\n\t// contains filtered or unexported fields\n}</pre>\n<p>\nSignature represents a signature. See RFC 4880, section 5.2.\n</p>\n\n",name:"Signature","methods":[{html:"\n<h2><a class=\"black\" href=\"?m:Signature\">func (*Signature)</a> <a href=\"?m:Signature.Serialize!\">Serialize</a></h2>\n<code>func (sig *Signature) Serialize(w io.Writer) (err os.Error)</code>\n<p>\nSerialize marshals sig to w. SignRSA or SignDSA must have been called first.\n</p>\n\n",name:"Serialize"},{html:"\n<h2><a class=\"black\" href=\"?m:Signature\">func (*Signature)</a> <a href=\"?m:Signature.Sign!\">Sign</a></h2>\n<code>func (sig *Signature) Sign(h hash.Hash, priv *PrivateKey) (err os.Error)</code>\n<p>\nSign signs a message with a private key. The hash, h, must contain\nthe hash of the message to be signed and will be mutated by this function.\nOn success, the signature is stored in sig. Call Serialize to write it out.\n</p>\n\n",name:"Sign"},{html:"\n<h2><a class=\"black\" href=\"?m:Signature\">func (*Signature)</a> <a href=\"?m:Signature.SignKey!\">SignKey</a></h2>\n<code>func (sig *Signature) SignKey(pub *PublicKey, priv *PrivateKey) os.Error</code>\n<p>\nSignKey computes a signature from priv, asserting that pub is a subkey.  On\nsuccess, the signature is stored in sig. Call Serialize to write it out.\n</p>\n\n",name:"SignKey"},{html:"\n<h2><a class=\"black\" href=\"?m:Signature\">func (*Signature)</a> <a href=\"?m:Signature.SignUserId!\">SignUserId</a></h2>\n<code>func (sig *Signature) SignUserId(id string, pub *PublicKey, priv *PrivateKey) os.Error</code>\n<p>\nSignUserId computes a signature from priv, asserting that pub is a valid\nkey for the identity id.  On success, the signature is stored in sig. Call\nSerialize to write it out.\n</p>\n\n",name:"SignUserId"}]},{html:"\n<h2><a class=\"black\" href=\"?t:\">type</a> <a href=\"?t:SignatureType!\">SignatureType</a></h2>\n<pre>type SignatureType uint8</pre>\n<p>\nSignatureType represents the different semantic meanings of an OpenPGP\nsignature. See RFC 4880, section 5.2.1.\n</p>\n\n",name:"SignatureType","methods":[]},{html:"\n<h2><a class=\"black\" href=\"?t:\">type</a> <a href=\"?t:SymmetricKeyEncrypted!\">SymmetricKeyEncrypted</a></h2>\n<pre>type SymmetricKeyEncrypted struct {\n\tCipherFunc CipherFunction\n\tEncrypted  bool\n\tKey        []byte // Empty unless Encrypted is false.\n\t// contains filtered or unexported fields\n}</pre>\n<p>\nSymmetricKeyEncrypted represents a passphrase protected session key. See RFC\n4880, section 5.3.\n</p>\n\n",name:"SymmetricKeyEncrypted","methods":[{html:"\n<h2><a class=\"black\" href=\"?m:SymmetricKeyEncrypted\">func (*SymmetricKeyEncrypted)</a> <a href=\"?m:SymmetricKeyEncrypted.Decrypt!\">Decrypt</a></h2>\n<code>func (ske *SymmetricKeyEncrypted) Decrypt(passphrase []byte) os.Error</code>\n<p>\nDecrypt attempts to decrypt an encrypted session key. If it returns nil,\nske.Key will contain the session key.\n</p>\n\n",name:"Decrypt"}]},{html:"\n<h2><a class=\"black\" href=\"?t:\">type</a> <a href=\"?t:SymmetricallyEncrypted!\">SymmetricallyEncrypted</a></h2>\n<pre>type SymmetricallyEncrypted struct {\n\tMDC bool // true iff this is a type 18 packet and thus has an embedded MAC.\n\t// contains filtered or unexported fields\n}</pre>\n<p>\nSymmetricallyEncrypted represents a symmetrically encrypted byte string. The\nencrypted contents will consist of more OpenPGP packets. See RFC 4880,\nsections 5.7 and 5.13.\n</p>\n\n",name:"SymmetricallyEncrypted","methods":[{html:"\n<h2><a class=\"black\" href=\"?m:SymmetricallyEncrypted\">func (*SymmetricallyEncrypted)</a> <a href=\"?m:SymmetricallyEncrypted.Decrypt!\">Decrypt</a></h2>\n<code>func (se *SymmetricallyEncrypted) Decrypt(c CipherFunction, key []byte) (io.ReadCloser, os.Error)</code>\n<p>\nDecrypt returns a ReadCloser, from which the decrypted contents of the\npacket can be read. An incorrect key can, with high probability, be detected\nimmediately and this will result in a KeyIncorrect error being returned.\n</p>\n\n",name:"Decrypt"}]},{html:"\n<h2><a class=\"black\" href=\"?t:\">type</a> <a href=\"?t:UserId!\">UserId</a></h2>\n<pre>type UserId struct {\n\tId string // By convention, this takes the form &#34;Full Name (Comment) &lt;email@example.com&gt;&#34; which is split out in the fields below.\n\n\tName, Comment, Email string\n}</pre>\n<p>\nUserId contains text that is intended to represent the name and email\naddress of the key holder. See RFC 4880, section 5.11. By convention, this\ntakes the form &#34;Full Name (Comment) &lt;email@example.com&gt;&#34;\n</p>\n\n",name:"UserId","methods":[{html:"\n<h2><a class=\"black\" href=\"?m:UserId\">func (*UserId)</a> <a href=\"?m:UserId.Serialize!\">Serialize</a></h2>\n<code>func (uid *UserId) Serialize(w io.Writer) os.Error</code>\n<p>\nSerialize marshals uid to w in the form of an OpenPGP packet, including\nheader.\n</p>\n\n",name:"Serialize"}]}],funcs:[{html:"\n<h2><a class=\"black\" href=\"?f:\">func</a> <a href=\"?f:NewRSAPrivateKey!\">NewRSAPrivateKey</a></h2>\n<code>func NewRSAPrivateKey(currentTimeSecs uint32, priv *rsa.PrivateKey, isSubkey bool) *PrivateKey</code>\n\n",name:"NewRSAPrivateKey"},{html:"\n<h2><a class=\"black\" href=\"?f:\">func</a> <a href=\"?f:NewRSAPublicKey!\">NewRSAPublicKey</a></h2>\n<code>func NewRSAPublicKey(creationTimeSecs uint32, pub *rsa.PublicKey, isSubkey bool) *PublicKey</code>\n<p>\nNewRSAPublicKey returns a PublicKey that wraps the given rsa.PublicKey.\n</p>\n\n",name:"NewRSAPublicKey"},{html:"\n<h2><a class=\"black\" href=\"?f:\">func</a> <a href=\"?f:NewReader!\">NewReader</a></h2>\n<code>func NewReader(r io.Reader) *Reader</code>\n\n",name:"NewReader"},{html:"\n<h2><a class=\"black\" href=\"?f:\">func</a> <a href=\"?f:NewUserId!\">NewUserId</a></h2>\n<code>func NewUserId(name, comment, email string) *UserId</code>\n<p>\nNewUserId returns a UserId or nil if any of the arguments contain invalid\ncharacters. The invalid characters are &#39;\\x00&#39;, &#39;(&#39;, &#39;)&#39;, &#39;&lt;&#39; and &#39;&gt;&#39;\n</p>\n\n",name:"NewUserId"},{html:"\n<h2><a class=\"black\" href=\"?f:\">func</a> <a href=\"?f:Read!\">Read</a></h2>\n<code>func Read(r io.Reader) (p Packet, err os.Error)</code>\n<p>\nRead reads a single OpenPGP packet from the given io.Reader. If there is an\nerror parsing a packet, the whole packet is consumed from the input.\n</p>\n\n",name:"Read"}],consts:[{html:"\n<h2><a class=\"black\" href=\"?c:\">const</a> <a href=\"?c:SignatureType!\">SignatureType</a></h2>\n<pre>const (\n\tSigTypeBinary        SignatureType = 0\n\tSigTypeText                        = 1\n\tSigTypeGenericCert                 = 0x10\n\tSigTypePersonaCert                 = 0x11\n\tSigTypeCasualCert                  = 0x12\n\tSigTypePositiveCert                = 0x13\n\tSigTypeSubkeyBinding               = 0x18\n)</pre>\n\n",names:["SigTypeBinary","SigTypeText","SigTypeGenericCert","SigTypePersonaCert","SigTypeCasualCert","SigTypePositiveCert","SigTypeSubkeyBinding"],type:"SignatureType"},{html:"\n<h2><a class=\"black\" href=\"?c:\">const</a> <a href=\"?c:PublicKeyAlgorithm!\">PublicKeyAlgorithm</a></h2>\n<pre>const (\n\tPubKeyAlgoRSA            PublicKeyAlgorithm = 1\n\tPubKeyAlgoRSAEncryptOnly PublicKeyAlgorithm = 2\n\tPubKeyAlgoRSASignOnly    PublicKeyAlgorithm = 3\n\tPubKeyAlgoElgamal        PublicKeyAlgorithm = 16\n\tPubKeyAlgoDSA            PublicKeyAlgorithm = 17\n)</pre>\n\n",names:["PubKeyAlgoRSA","PubKeyAlgoRSAEncryptOnly","PubKeyAlgoRSASignOnly","PubKeyAlgoElgamal","PubKeyAlgoDSA"],type:"PublicKeyAlgorithm"},{html:"\n<h2><a class=\"black\" href=\"?c:\">const</a> <a href=\"?c:CipherCAST5!\"><em>group</em></a></h2>\n<pre>const (\n\tCipherCAST5  = 3\n\tCipherAES128 = 7\n\tCipherAES192 = 8\n\tCipherAES256 = 9\n)</pre>\n\n",names:["CipherCAST5","CipherAES128","CipherAES192","CipherAES256"],type:""}],vars:[]}