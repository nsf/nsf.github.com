var gortfmData = {index:"index.html",html:"<p>\nThis package implements buffered I/O.  It wraps an io.Reader or io.Writer\nobject, creating another object (Reader or Writer) that also implements\nthe interface but provides buffering and some help for textual I/O.\n</p>\n",name:"bufio",types:[{html:"\n<h2><a class=\"black\" href=\"?t:\">type</a> <a href=\"?t:BufSizeError!\">BufSizeError</a></h2>\n<pre>type BufSizeError int</pre>\n<p>\nBufSizeError is the error representing an invalid buffer size.\n</p>\n\n",name:"BufSizeError","methods":[{html:"\n<h2><a class=\"black\" href=\"?m:BufSizeError\">func (BufSizeError)</a> <a href=\"?m:BufSizeError.String!\">String</a></h2>\n<code>func (b BufSizeError) String() string</code>\n\n",name:"String"}]},{html:"\n<h2><a class=\"black\" href=\"?t:\">type</a> <a href=\"?t:Error!\">Error</a></h2>\n<pre>type Error struct {\n\tos.ErrorString\n}</pre>\n<p>\nErrors introduced by this package.\n</p>\n\n",name:"Error","methods":[]},{html:"\n<h2><a class=\"black\" href=\"?t:\">type</a> <a href=\"?t:ReadWriter!\">ReadWriter</a></h2>\n<pre>type ReadWriter struct {\n\t*Reader\n\t*Writer\n}</pre>\n<p>\nReadWriter stores pointers to a Reader and a Writer.\nIt implements io.ReadWriter.\n</p>\n\n",name:"ReadWriter","methods":[]},{html:"\n<h2><a class=\"black\" href=\"?t:\">type</a> <a href=\"?t:Reader!\">Reader</a></h2>\n<pre>type Reader struct {\n\t// contains unexported fields\n}</pre>\n<p>\nReader implements buffering for an io.Reader object.\n</p>\n\n",name:"Reader","methods":[{html:"\n<h2><a class=\"black\" href=\"?m:Reader\">func (*Reader)</a> <a href=\"?m:Reader.Buffered!\">Buffered</a></h2>\n<code>func (b *Reader) Buffered() int</code>\n<p>\nBuffered returns the number of bytes that can be read from the current buffer.\n</p>\n\n",name:"Buffered"},{html:"\n<h2><a class=\"black\" href=\"?m:Reader\">func (*Reader)</a> <a href=\"?m:Reader.Peek!\">Peek</a></h2>\n<code>func (b *Reader) Peek(n int) ([]byte, os.Error)</code>\n<p>\nPeek returns the next n bytes without advancing the reader. The bytes stop\nbeing valid at the next read call. If Peek returns fewer than n bytes, it\nalso returns an error explaining why the read is short. The error is\nErrBufferFull if n is larger than b&#39;s buffer size.\n</p>\n\n",name:"Peek"},{html:"\n<h2><a class=\"black\" href=\"?m:Reader\">func (*Reader)</a> <a href=\"?m:Reader.Read!\">Read</a></h2>\n<code>func (b *Reader) Read(p []byte) (nn int, err os.Error)</code>\n<p>\nRead reads data into p.\nIt returns the number of bytes read into p.\nIf nn &lt; len(p), also returns an error explaining\nwhy the read is short.  At EOF, the count will be\nzero and err will be os.EOF.\n</p>\n\n",name:"Read"},{html:"\n<h2><a class=\"black\" href=\"?m:Reader\">func (*Reader)</a> <a href=\"?m:Reader.ReadByte!\">ReadByte</a></h2>\n<code>func (b *Reader) ReadByte() (c byte, err os.Error)</code>\n<p>\nReadByte reads and returns a single byte.\nIf no byte is available, returns an error.\n</p>\n\n",name:"ReadByte"},{html:"\n<h2><a class=\"black\" href=\"?m:Reader\">func (*Reader)</a> <a href=\"?m:Reader.ReadBytes!\">ReadBytes</a></h2>\n<code>func (b *Reader) ReadBytes(delim byte) (line []byte, err os.Error)</code>\n<p>\nReadBytes reads until the first occurrence of delim in the input,\nreturning a slice containing the data up to and including the delimiter.\nIf ReadBytes encounters an error before finding a delimiter,\nit returns the data read before the error and the error itself (often os.EOF).\nReadBytes returns err != nil if and only if line does not end in delim.\n</p>\n\n",name:"ReadBytes"},{html:"\n<h2><a class=\"black\" href=\"?m:Reader\">func (*Reader)</a> <a href=\"?m:Reader.ReadRune!\">ReadRune</a></h2>\n<code>func (b *Reader) ReadRune() (rune int, size int, err os.Error)</code>\n<p>\nReadRune reads a single UTF-8 encoded Unicode character and returns the\nrune and its size in bytes.\n</p>\n\n",name:"ReadRune"},{html:"\n<h2><a class=\"black\" href=\"?m:Reader\">func (*Reader)</a> <a href=\"?m:Reader.ReadSlice!\">ReadSlice</a></h2>\n<code>func (b *Reader) ReadSlice(delim byte) (line []byte, err os.Error)</code>\n<p>\nReadSlice reads until the first occurrence of delim in the input,\nreturning a slice pointing at the bytes in the buffer.\nThe bytes stop being valid at the next read call.\nIf ReadSlice encounters an error before finding a delimiter,\nit returns all the data in the buffer and the error itself (often os.EOF).\nReadSlice fails with error ErrBufferFull if the buffer fills without a delim.\nBecause the data returned from ReadSlice will be overwritten\nby the next I/O operation, most clients should use\nReadBytes or ReadString instead.\nReadSlice returns err != nil if and only if line does not end in delim.\n</p>\n\n",name:"ReadSlice"},{html:"\n<h2><a class=\"black\" href=\"?m:Reader\">func (*Reader)</a> <a href=\"?m:Reader.ReadString!\">ReadString</a></h2>\n<code>func (b *Reader) ReadString(delim byte) (line string, err os.Error)</code>\n<p>\nReadString reads until the first occurrence of delim in the input,\nreturning a string containing the data up to and including the delimiter.\nIf ReadString encounters an error before finding a delimiter,\nit returns the data read before the error and the error itself (often os.EOF).\nReadString returns err != nil if and only if line does not end in delim.\n</p>\n\n",name:"ReadString"},{html:"\n<h2><a class=\"black\" href=\"?m:Reader\">func (*Reader)</a> <a href=\"?m:Reader.UnreadByte!\">UnreadByte</a></h2>\n<code>func (b *Reader) UnreadByte() os.Error</code>\n<p>\nUnreadByte unreads the last byte.  Only the most recently read byte can be unread.\n</p>\n\n",name:"UnreadByte"},{html:"\n<h2><a class=\"black\" href=\"?m:Reader\">func (*Reader)</a> <a href=\"?m:Reader.UnreadRune!\">UnreadRune</a></h2>\n<code>func (b *Reader) UnreadRune() os.Error</code>\n<p>\nUnreadRune unreads the last rune.  If the most recent read operation on\nthe buffer was not a ReadRune, UnreadRune returns an error.  (In this\nregard it is stricter than UnreadByte, which will unread the last byte\nfrom any read operation.)\n</p>\n\n",name:"UnreadRune"}]},{html:"\n<h2><a class=\"black\" href=\"?t:\">type</a> <a href=\"?t:Writer!\">Writer</a></h2>\n<pre>type Writer struct {\n\t// contains unexported fields\n}</pre>\n<p>\nWriter implements buffering for an io.Writer object.\n</p>\n\n",name:"Writer","methods":[{html:"\n<h2><a class=\"black\" href=\"?m:Writer\">func (*Writer)</a> <a href=\"?m:Writer.Available!\">Available</a></h2>\n<code>func (b *Writer) Available() int</code>\n<p>\nAvailable returns how many bytes are unused in the buffer.\n</p>\n\n",name:"Available"},{html:"\n<h2><a class=\"black\" href=\"?m:Writer\">func (*Writer)</a> <a href=\"?m:Writer.Buffered!\">Buffered</a></h2>\n<code>func (b *Writer) Buffered() int</code>\n<p>\nBuffered returns the number of bytes that have been written into the current buffer.\n</p>\n\n",name:"Buffered"},{html:"\n<h2><a class=\"black\" href=\"?m:Writer\">func (*Writer)</a> <a href=\"?m:Writer.Flush!\">Flush</a></h2>\n<code>func (b *Writer) Flush() os.Error</code>\n<p>\nFlush writes any buffered data to the underlying io.Writer.\n</p>\n\n",name:"Flush"},{html:"\n<h2><a class=\"black\" href=\"?m:Writer\">func (*Writer)</a> <a href=\"?m:Writer.Write!\">Write</a></h2>\n<code>func (b *Writer) Write(p []byte) (nn int, err os.Error)</code>\n<p>\nWrite writes the contents of p into the buffer.\nIt returns the number of bytes written.\nIf nn &lt; len(p), it also returns an error explaining\nwhy the write is short.\n</p>\n\n",name:"Write"},{html:"\n<h2><a class=\"black\" href=\"?m:Writer\">func (*Writer)</a> <a href=\"?m:Writer.WriteByte!\">WriteByte</a></h2>\n<code>func (b *Writer) WriteByte(c byte) os.Error</code>\n<p>\nWriteByte writes a single byte.\n</p>\n\n",name:"WriteByte"},{html:"\n<h2><a class=\"black\" href=\"?m:Writer\">func (*Writer)</a> <a href=\"?m:Writer.WriteRune!\">WriteRune</a></h2>\n<code>func (b *Writer) WriteRune(rune int) (size int, err os.Error)</code>\n<p>\nWriteRune writes a single Unicode code point, returning\nthe number of bytes written and any error.\n</p>\n\n",name:"WriteRune"},{html:"\n<h2><a class=\"black\" href=\"?m:Writer\">func (*Writer)</a> <a href=\"?m:Writer.WriteString!\">WriteString</a></h2>\n<code>func (b *Writer) WriteString(s string) (int, os.Error)</code>\n<p>\nWriteString writes a string.\nIt returns the number of bytes written.\nIf the count is less than len(s), it also returns an error explaining\nwhy the write is short.\n</p>\n\n",name:"WriteString"}]}],funcs:[{html:"\n<h2><a class=\"black\" href=\"?f:\">func</a> <a href=\"?f:NewReadWriter!\">NewReadWriter</a></h2>\n<code>func NewReadWriter(r *Reader, w *Writer) *ReadWriter</code>\n<p>\nNewReadWriter allocates a new ReadWriter that dispatches to r and w.\n</p>\n\n",name:"NewReadWriter"},{html:"\n<h2><a class=\"black\" href=\"?f:\">func</a> <a href=\"?f:NewReader!\">NewReader</a></h2>\n<code>func NewReader(rd io.Reader) *Reader</code>\n<p>\nNewReader returns a new Reader whose buffer has the default size.\n</p>\n\n",name:"NewReader"},{html:"\n<h2><a class=\"black\" href=\"?f:\">func</a> <a href=\"?f:NewReaderSize!\">NewReaderSize</a></h2>\n<code>func NewReaderSize(rd io.Reader, size int) (*Reader, os.Error)</code>\n<p>\nNewReaderSize creates a new Reader whose buffer has the specified size,\nwhich must be greater than zero.  If the argument io.Reader is already a\nReader with large enough size, it returns the underlying Reader.\nIt returns the Reader and any error.\n</p>\n\n",name:"NewReaderSize"},{html:"\n<h2><a class=\"black\" href=\"?f:\">func</a> <a href=\"?f:NewWriter!\">NewWriter</a></h2>\n<code>func NewWriter(wr io.Writer) *Writer</code>\n<p>\nNewWriter returns a new Writer whose buffer has the default size.\n</p>\n\n",name:"NewWriter"},{html:"\n<h2><a class=\"black\" href=\"?f:\">func</a> <a href=\"?f:NewWriterSize!\">NewWriterSize</a></h2>\n<code>func NewWriterSize(wr io.Writer, size int) (*Writer, os.Error)</code>\n<p>\nNewWriterSize creates a new Writer whose buffer has the specified size,\nwhich must be greater than zero. If the argument io.Writer is already a\nWriter with large enough size, it returns the underlying Writer.\nIt returns the Writer and any error.\n</p>\n\n",name:"NewWriterSize"}],consts:[],vars:[{html:"\n<h2><a class=\"black\" href=\"?v:\">var</a> <a href=\"?v:ErrInvalidUnreadByte!\"><em>group</em></a></h2>\n<pre>var (\n\tErrInvalidUnreadByte os.Error = &amp;Error{&#34;bufio: invalid use of UnreadByte&#34;}\n\tErrInvalidUnreadRune os.Error = &amp;Error{&#34;bufio: invalid use of UnreadRune&#34;}\n\tErrBufferFull        os.Error = &amp;Error{&#34;bufio: buffer full&#34;}\n\tErrNegativeCount     os.Error = &amp;Error{&#34;bufio: negative count&#34;}\n)</pre>\n\n",names:["ErrInvalidUnreadByte","ErrInvalidUnreadRune","ErrBufferFull","ErrNegativeCount"],type:""}]}