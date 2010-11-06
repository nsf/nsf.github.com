var gortfmData = {index:"index.html",html:"<p>\nThis package implements translation between\nunsigned integer values and byte sequences.\n</p>\n",name:"binary",types:[{html:"\n<h2><a class=\"black\" href=\"?t:\">type</a> <a href=\"?t:ByteOrder!\">ByteOrder</a></h2>\n<pre>type ByteOrder interface {\n\tUint16(b []byte) uint16\n\tUint32(b []byte) uint32\n\tUint64(b []byte) uint64\n\tPutUint16([]byte, uint16)\n\tPutUint32([]byte, uint32)\n\tPutUint64([]byte, uint64)\n\tString() string\n}</pre>\n<p>\nA ByteOrder specifies how to convert byte sequences into\n16-, 32-, or 64-bit unsigned integers.\n</p>\n\n",name:"ByteOrder","methods":[]}],funcs:[{html:"\n<h2><a class=\"black\" href=\"?f:\">func</a> <a href=\"?f:Read!\">Read</a></h2>\n<code>func Read(r io.Reader, order ByteOrder, data interface{}) os.Error</code>\n<p>\nRead reads structured binary data from r into data.\nData must be a pointer to a fixed-size value or a slice\nof fixed-size values.\nA fixed-size value is either a fixed-size arithmetic\ntype (int8, uint8, int16, float32, complex64, ...)\nor an array or struct containing only fixed-size values.\nBytes read from r are decoded using the specified byte order\nand written to successive fields of the data.\n</p>\n\n",name:"Read"},{html:"\n<h2><a class=\"black\" href=\"?f:\">func</a> <a href=\"?f:TotalSize!\">TotalSize</a></h2>\n<code>func TotalSize(v reflect.Value) int</code>\n\n",name:"TotalSize"},{html:"\n<h2><a class=\"black\" href=\"?f:\">func</a> <a href=\"?f:Write!\">Write</a></h2>\n<code>func Write(w io.Writer, order ByteOrder, data interface{}) os.Error</code>\n<p>\nWrite writes the binary representation of data into w.\nData must be a fixed-size value or a pointer to\na fixed-size value.\nA fixed-size value is either a fixed-size arithmetic\ntype (int8, uint8, int16, float32, complex64, ...)\nor an array or struct containing only fixed-size values.\nBytes written to w are encoded using the specified byte order\nand read from successive fields of the data.\n</p>\n\n",name:"Write"}],consts:[],vars:[{html:"\n<h2><a class=\"black\" href=\"?v:\">var</a> <a href=\"?v:LittleEndian!\">LittleEndian</a></h2>\n<pre>var LittleEndian littleEndian</pre>\n<p>\nLittleEndian is the little-endian implementation of ByteOrder.\n</p>\n\n",names:["LittleEndian"],type:""},{html:"\n<h2><a class=\"black\" href=\"?v:\">var</a> <a href=\"?v:BigEndian!\">BigEndian</a></h2>\n<pre>var BigEndian bigEndian</pre>\n<p>\nBigEndian is the big-endian implementation of ByteOrder.\n</p>\n\n",names:["BigEndian"],type:""}]}