var gortfmData = {index:"index.html",html:"<p>\nPackage zlib implements reading and writing of zlib format compressed data,\nas specified in RFC 1950.\n</p>\n<p>\nThe implementation provides filters that uncompress during reading\nand compress during writing.  For example, to write compressed data\nto a buffer:\n</p>\n<pre>var b bytes.Buffer\nw, err := zlib.NewWriter(&amp;b)\nw.Write([]byte(&#34;hello, world\\n&#34;))\nw.Close()\n</pre>\n<p>\nand to read that data back:\n</p>\n<pre>r, err := zlib.NewReader(&amp;b)\nio.Copy(os.Stdout, r)\nr.Close()\n</pre>\n",name:"zlib",types:[{html:"\n<h2><a class=\"black\" href=\"?t:\">type</a> <a href=\"?t:Writer!\">Writer</a></h2>\n<pre>type Writer struct {\n\t// contains filtered or unexported fields\n}</pre>\n<p>\nA Writer takes data written to it and writes the compressed\nform of that data to an underlying writer (see NewWriter).\n</p>\n\n",name:"Writer","methods":[{html:"\n<h2><a class=\"black\" href=\"?m:Writer\">func (*Writer)</a> <a href=\"?m:Writer.Close!\">Close</a></h2>\n<code>func (z *Writer) Close() os.Error</code>\n<p>\nCalling Close does not close the wrapped io.Writer originally passed to NewWriter.\n</p>\n\n",name:"Close"},{html:"\n<h2><a class=\"black\" href=\"?m:Writer\">func (*Writer)</a> <a href=\"?m:Writer.Flush!\">Flush</a></h2>\n<code>func (z *Writer) Flush() os.Error</code>\n<p>\nFlush flushes the underlying compressor.\n</p>\n\n",name:"Flush"},{html:"\n<h2><a class=\"black\" href=\"?m:Writer\">func (*Writer)</a> <a href=\"?m:Writer.Write!\">Write</a></h2>\n<code>func (z *Writer) Write(p []byte) (n int, err os.Error)</code>\n\n",name:"Write"}]}],funcs:[{html:"\n<h2><a class=\"black\" href=\"?f:\">func</a> <a href=\"?f:NewReader!\">NewReader</a></h2>\n<code>func NewReader(r io.Reader) (io.ReadCloser, os.Error)</code>\n<p>\nNewReader creates a new io.ReadCloser that satisfies reads by decompressing data read from r.\nThe implementation buffers input and may read more data than necessary from r.\nIt is the caller&#39;s responsibility to call Close on the ReadCloser when done.\n</p>\n\n",name:"NewReader"},{html:"\n<h2><a class=\"black\" href=\"?f:\">func</a> <a href=\"?f:NewReaderDict!\">NewReaderDict</a></h2>\n<code>func NewReaderDict(r io.Reader, dict []byte) (io.ReadCloser, os.Error)</code>\n<p>\nNewReaderDict is like NewReader but uses a preset dictionary.\nNewReaderDict ignores the dictionary if the compressed data does not refer to it.\n</p>\n\n",name:"NewReaderDict"},{html:"\n<h2><a class=\"black\" href=\"?f:\">func</a> <a href=\"?f:NewWriter!\">NewWriter</a></h2>\n<code>func NewWriter(w io.Writer) (*Writer, os.Error)</code>\n<p>\nNewWriter calls NewWriterLevel with the default compression level.\n</p>\n\n",name:"NewWriter"},{html:"\n<h2><a class=\"black\" href=\"?f:\">func</a> <a href=\"?f:NewWriterDict!\">NewWriterDict</a></h2>\n<code>func NewWriterDict(w io.Writer, level int, dict []byte) (*Writer, os.Error)</code>\n<p>\nNewWriterDict creates a new io.WriteCloser that satisfies writes by compressing data written to w.\nIt is the caller&#39;s responsibility to call Close on the WriteCloser when done.\nlevel is the compression level, which can be DefaultCompression, NoCompression,\nor any integer value between BestSpeed and BestCompression (inclusive).\ndict is the preset dictionary to compress with, or nil to use no dictionary.\n</p>\n\n",name:"NewWriterDict"},{html:"\n<h2><a class=\"black\" href=\"?f:\">func</a> <a href=\"?f:NewWriterLevel!\">NewWriterLevel</a></h2>\n<code>func NewWriterLevel(w io.Writer, level int) (*Writer, os.Error)</code>\n<p>\nNewWriterLevel calls NewWriterDict with no dictionary.\n</p>\n\n",name:"NewWriterLevel"}],consts:[{html:"\n<h2><a class=\"black\" href=\"?c:\">const</a> <a href=\"?c:NoCompression!\"><em>group</em></a></h2>\n<pre>const (\n\tNoCompression      = flate.NoCompression\n\tBestSpeed          = flate.BestSpeed\n\tBestCompression    = flate.BestCompression\n\tDefaultCompression = flate.DefaultCompression\n)</pre>\n<p>\nThese constants are copied from the flate package, so that code that imports\n&#34;compress/zlib&#34; does not also have to import &#34;compress/flate&#34;.\n</p>\n\n",names:["NoCompression","BestSpeed","BestCompression","DefaultCompression"],type:""}],vars:[{html:"\n<h2><a class=\"black\" href=\"?v:\">var</a> <a href=\"?v:ChecksumError!\">ChecksumError</a></h2>\n<pre>var ChecksumError os.Error = os.ErrorString(&#34;zlib checksum error&#34;)</pre>\n\n",names:["ChecksumError"],type:""},{html:"\n<h2><a class=\"black\" href=\"?v:\">var</a> <a href=\"?v:HeaderError!\">HeaderError</a></h2>\n<pre>var HeaderError os.Error = os.ErrorString(&#34;invalid zlib header&#34;)</pre>\n\n",names:["HeaderError"],type:""},{html:"\n<h2><a class=\"black\" href=\"?v:\">var</a> <a href=\"?v:DictionaryError!\">DictionaryError</a></h2>\n<pre>var DictionaryError os.Error = os.ErrorString(&#34;invalid zlib dictionary&#34;)</pre>\n\n",names:["DictionaryError"],type:""}]}