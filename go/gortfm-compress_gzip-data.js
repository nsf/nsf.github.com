var gortfmData = {index:"index.html",html:"<p>\nThe gzip package implements reading and writing of\ngzip format compressed files, as specified in RFC 1952.\n</p>\n",name:"gzip",types:[{html:"\n<h2><a class=\"black\" href=\"?t:\">type</a> <a href=\"?t:Compressor!\">Compressor</a></h2>\n<pre>type Compressor struct {\n\tHeader\n\t// contains unexported fields\n}</pre>\n<p>\nA Compressor is an io.WriteCloser that satisfies writes by compressing data written\nto its wrapped io.Writer.\n</p>\n\n",name:"Compressor","methods":[{html:"\n<h2><a class=\"black\" href=\"?m:Compressor\">func (*Compressor)</a> <a href=\"?m:Compressor.Close!\">Close</a></h2>\n<code>func (z *Compressor) Close() os.Error</code>\n<p>\nCalling Close does not close the wrapped io.Writer originally passed to NewWriter.\n</p>\n\n",name:"Close"},{html:"\n<h2><a class=\"black\" href=\"?m:Compressor\">func (*Compressor)</a> <a href=\"?m:Compressor.Write!\">Write</a></h2>\n<code>func (z *Compressor) Write(p []byte) (int, os.Error)</code>\n\n",name:"Write"}]},{html:"\n<h2><a class=\"black\" href=\"?t:\">type</a> <a href=\"?t:Decompressor!\">Decompressor</a></h2>\n<pre>type Decompressor struct {\n\tHeader\n\t// contains unexported fields\n}</pre>\n<p>\nAn Decompressor is an io.Reader that can be read to retrieve\nuncompressed data from a gzip-format compressed file.\n</p>\n<p>\nIn general, a gzip file can be a concatenation of gzip files,\neach with its own header.  Reads from the Decompressor\nreturn the concatenation of the uncompressed data of each.\nOnly the first header is recorded in the Decompressor fields.\n</p>\n<p>\nGzip files store a length and checksum of the uncompressed data.\nThe Decompressor will return a ChecksumError when Read\nreaches the end of the uncompressed data if it does not\nhave the expected length or checksum.  Clients should treat data\nreturned by Read as tentative until they receive the successful\n(zero length, nil error) Read marking the end of the data.\n</p>\n\n",name:"Decompressor","methods":[{html:"\n<h2><a class=\"black\" href=\"?m:Decompressor\">func (*Decompressor)</a> <a href=\"?m:Decompressor.Close!\">Close</a></h2>\n<code>func (z *Decompressor) Close() os.Error</code>\n<p>\nCalling Close does not close the wrapped io.Reader originally passed to NewReader.\n</p>\n\n",name:"Close"},{html:"\n<h2><a class=\"black\" href=\"?m:Decompressor\">func (*Decompressor)</a> <a href=\"?m:Decompressor.Read!\">Read</a></h2>\n<code>func (z *Decompressor) Read(p []byte) (n int, err os.Error)</code>\n\n",name:"Read"}]},{html:"\n<h2><a class=\"black\" href=\"?t:\">type</a> <a href=\"?t:Header!\">Header</a></h2>\n<pre>type Header struct {\n\tComment string // comment\n\tExtra   []byte // &#34;extra data&#34;\n\tMtime   uint32 // modification time (seconds since January 1, 1970)\n\tName    string // file name\n\tOS      byte   // operating system type\n}</pre>\n<p>\nThe gzip file stores a header giving metadata about the compressed file.\nThat header is exposed as the fields of the Compressor and Decompressor structs.\n</p>\n\n",name:"Header","methods":[]}],funcs:[{html:"\n<h2><a class=\"black\" href=\"?f:\">func</a> <a href=\"?f:NewReader!\">NewReader</a></h2>\n<code>func NewReader(r io.Reader) (*Decompressor, os.Error)</code>\n<p>\nNewReader creates a new Decompressor reading the given reader.\nThe implementation buffers input and may read more data than necessary from r.\nIt is the caller&#39;s responsibility to call Close on the Decompressor when done.\n</p>\n\n",name:"NewReader"},{html:"\n<h2><a class=\"black\" href=\"?f:\">func</a> <a href=\"?f:NewWriter!\">NewWriter</a></h2>\n<code>func NewWriter(w io.Writer) (*Compressor, os.Error)</code>\n<p>\nNewWriter calls NewWriterLevel with the default compression level.\n</p>\n\n",name:"NewWriter"},{html:"\n<h2><a class=\"black\" href=\"?f:\">func</a> <a href=\"?f:NewWriterLevel!\">NewWriterLevel</a></h2>\n<code>func NewWriterLevel(w io.Writer, level int) (*Compressor, os.Error)</code>\n<p>\nNewWriterLevel creates a new Compressor writing to the given writer.\nWrites may be buffered and not flushed until Close.\nCallers that wish to set the fields in Compressor.Header must\ndo so before the first call to Write or Close.\nIt is the caller&#39;s responsibility to call Close on the WriteCloser when done.\nlevel is the compression level, which can be DefaultCompression, NoCompression,\nor any integer value between BestSpeed and BestCompression (inclusive).\n</p>\n\n",name:"NewWriterLevel"}],consts:[{html:"\n<h2><a class=\"black\" href=\"?c:\">const</a> <a href=\"?c:NoCompression!\"><em>group</em></a></h2>\n<pre>const (\n\tNoCompression      = flate.NoCompression\n\tBestSpeed          = flate.BestSpeed\n\tBestCompression    = flate.BestCompression\n\tDefaultCompression = flate.DefaultCompression\n)</pre>\n<p>\nThese constants are copied from the flate package, so that code that imports\n&#34;compress/gzip&#34; does not also have to import &#34;compress/flate&#34;.\n</p>\n\n",names:["NoCompression","BestSpeed","BestCompression","DefaultCompression"],type:""}],vars:[{html:"\n<h2><a class=\"black\" href=\"?v:\">var</a> <a href=\"?v:HeaderError!\">HeaderError</a></h2>\n<pre>var HeaderError os.Error = os.ErrorString(&#34;invalid gzip header&#34;)</pre>\n\n",names:["HeaderError"],type:""},{html:"\n<h2><a class=\"black\" href=\"?v:\">var</a> <a href=\"?v:ChecksumError!\">ChecksumError</a></h2>\n<pre>var ChecksumError os.Error = os.ErrorString(&#34;gzip checksum error&#34;)</pre>\n\n",names:["ChecksumError"],type:""}]}