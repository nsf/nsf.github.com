var gortfmData = {index:"index.html",html:"<p>\nThe zip package provides support for reading ZIP archives.\n</p>\n<p>\nSee: <a href=\"http://www.pkware.com/documents/casestudies/APPNOTE.TXT\">http://www.pkware.com/documents/casestudies/APPNOTE.TXT</a>\n</p>\n<p>\nThis package does not support ZIP64 or disk spanning.\n</p>\n",name:"zip",types:[{html:"\n<h2><a class=\"black\" href=\"?t:\">type</a> <a href=\"?t:File!\">File</a></h2>\n<pre>type File struct {\n\tFileHeader\n\t// contains unexported fields\n}</pre>\n\n",name:"File","methods":[{html:"\n<h2><a class=\"black\" href=\"?m:File\">func (*File)</a> <a href=\"?m:File.Open!\">Open</a></h2>\n<code>func (f *File) Open() (rc io.ReadCloser, err os.Error)</code>\n<p>\nOpen returns a ReadCloser that provides access to the File&#39;s contents.\n</p>\n\n",name:"Open"}]},{html:"\n<h2><a class=\"black\" href=\"?t:\">type</a> <a href=\"?t:FileHeader!\">FileHeader</a></h2>\n<pre>type FileHeader struct {\n\tName             string\n\tCreatorVersion   uint16\n\tReaderVersion    uint16\n\tFlags            uint16\n\tMethod           uint16\n\tModifiedTime     uint16\n\tModifiedDate     uint16\n\tCRC32            uint32\n\tCompressedSize   uint32\n\tUncompressedSize uint32\n\tExtra            []byte\n\tComment          string\n}</pre>\n\n",name:"FileHeader","methods":[]},{html:"\n<h2><a class=\"black\" href=\"?t:\">type</a> <a href=\"?t:ReadCloser!\">ReadCloser</a></h2>\n<pre>type ReadCloser struct {\n\tReader\n\t// contains unexported fields\n}</pre>\n\n",name:"ReadCloser","methods":[{html:"\n<h2><a class=\"black\" href=\"?m:ReadCloser\">func (*ReadCloser)</a> <a href=\"?m:ReadCloser.Close!\">Close</a></h2>\n<code>func (rc *ReadCloser) Close() os.Error</code>\n<p>\nClose closes the Zip file, rendering it unusable for I/O.\n</p>\n\n",name:"Close"}]},{html:"\n<h2><a class=\"black\" href=\"?t:\">type</a> <a href=\"?t:Reader!\">Reader</a></h2>\n<pre>type Reader struct {\n\tFile    []*File\n\tComment string\n\t// contains unexported fields\n}</pre>\n\n",name:"Reader","methods":[]}],funcs:[{html:"\n<h2><a class=\"black\" href=\"?f:\">func</a> <a href=\"?f:NewReader!\">NewReader</a></h2>\n<code>func NewReader(r io.ReaderAt, size int64) (*Reader, os.Error)</code>\n<p>\nNewReader returns a new Reader reading from r, which is assumed to\nhave the given size in bytes.\n</p>\n\n",name:"NewReader"},{html:"\n<h2><a class=\"black\" href=\"?f:\">func</a> <a href=\"?f:OpenReader!\">OpenReader</a></h2>\n<code>func OpenReader(name string) (*ReadCloser, os.Error)</code>\n<p>\nOpenReader will open the Zip file specified by name and return a ReaderCloser.\n</p>\n\n",name:"OpenReader"}],consts:[],vars:[{html:"\n<h2><a class=\"black\" href=\"?v:\">var</a> <a href=\"?v:FormatError!\"><em>group</em></a></h2>\n<pre>var (\n\tFormatError       = os.NewError(&#34;not a valid zip file&#34;)\n\tUnsupportedMethod = os.NewError(&#34;unsupported compression algorithm&#34;)\n\tChecksumError     = os.NewError(&#34;checksum error&#34;)\n)</pre>\n\n",names:["FormatError","UnsupportedMethod","ChecksumError"],type:""}]}