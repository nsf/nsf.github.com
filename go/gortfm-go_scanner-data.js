var gortfmData = {index:"index.html",html:"<p>\nA scanner for Go source text. Takes a []byte as source which can\nthen be tokenized through repeated calls to the Scan function.\nFor a sample use of a scanner, see the implementation of Tokenize.\n</p>\n",name:"scanner",types:[{html:"\n<h2><a class=\"black\" href=\"?t:\">type</a> <a href=\"?t:Error!\">Error</a></h2>\n<pre>type Error struct {\n\tPos token.Position\n\tMsg string\n}</pre>\n<p>\nWithin ErrorVector, an error is represented by an Error node. The\nposition Pos, if valid, points to the beginning of the offending\ntoken, and the error condition is described by Msg.\n</p>\n\n",name:"Error","methods":[{html:"\n<h2><a class=\"black\" href=\"?m:Error\">func (*Error)</a> <a href=\"?m:Error.String!\">String</a></h2>\n<code>func (e *Error) String() string</code>\n\n",name:"String"}]},{html:"\n<h2><a class=\"black\" href=\"?t:\">type</a> <a href=\"?t:ErrorHandler!\">ErrorHandler</a></h2>\n<pre>type ErrorHandler interface {\n\tError(pos token.Position, msg string)\n}</pre>\n<p>\nAn implementation of an ErrorHandler may be provided to the Scanner.\nIf a syntax error is encountered and a handler was installed, Error\nis called with a position and an error message. The position points\nto the beginning of the offending token.\n</p>\n\n",name:"ErrorHandler","methods":[]},{html:"\n<h2><a class=\"black\" href=\"?t:\">type</a> <a href=\"?t:ErrorList!\">ErrorList</a></h2>\n<pre>type ErrorList []*Error</pre>\n<p>\nAn ErrorList is a (possibly sorted) list of Errors.\n</p>\n\n",name:"ErrorList","methods":[{html:"\n<h2><a class=\"black\" href=\"?m:ErrorList\">func (ErrorList)</a> <a href=\"?m:ErrorList.Len!\">Len</a></h2>\n<code>func (p ErrorList) Len() int</code>\n<p>\nErrorList implements the sort Interface.\n</p>\n\n",name:"Len"},{html:"\n<h2><a class=\"black\" href=\"?m:ErrorList\">func (ErrorList)</a> <a href=\"?m:ErrorList.Less!\">Less</a></h2>\n<code>func (p ErrorList) Less(i, j int) bool</code>\n\n",name:"Less"},{html:"\n<h2><a class=\"black\" href=\"?m:ErrorList\">func (ErrorList)</a> <a href=\"?m:ErrorList.String!\">String</a></h2>\n<code>func (p ErrorList) String() string</code>\n\n",name:"String"},{html:"\n<h2><a class=\"black\" href=\"?m:ErrorList\">func (ErrorList)</a> <a href=\"?m:ErrorList.Swap!\">Swap</a></h2>\n<code>func (p ErrorList) Swap(i, j int)</code>\n\n",name:"Swap"}]},{html:"\n<h2><a class=\"black\" href=\"?t:\">type</a> <a href=\"?t:ErrorVector!\">ErrorVector</a></h2>\n<pre>type ErrorVector struct {\n\t// contains unexported fields\n}</pre>\n<p>\nErrorVector implements the ErrorHandler interface. It maintains a list\nof errors which can be retrieved with GetErrorList and GetError. The\nzero value for an ErrorVector is an empty ErrorVector ready to use.\n</p>\n<p>\nA common usage pattern is to embed an ErrorVector alongside a\nscanner in a data structure that uses the scanner. By passing a\nreference to an ErrorVector to the scanner&#39;s Init call, default\nerror handling is obtained.\n</p>\n\n",name:"ErrorVector","methods":[{html:"\n<h2><a class=\"black\" href=\"?m:ErrorVector\">func (*ErrorVector)</a> <a href=\"?m:ErrorVector.Error!\">Error</a></h2>\n<code>func (h *ErrorVector) Error(pos token.Position, msg string)</code>\n<p>\nErrorVector implements the ErrorHandler interface.\n</p>\n\n",name:"Error"},{html:"\n<h2><a class=\"black\" href=\"?m:ErrorVector\">func (*ErrorVector)</a> <a href=\"?m:ErrorVector.ErrorCount!\">ErrorCount</a></h2>\n<code>func (h *ErrorVector) ErrorCount() int</code>\n<p>\nErrorCount returns the number of errors collected.\n</p>\n\n",name:"ErrorCount"},{html:"\n<h2><a class=\"black\" href=\"?m:ErrorVector\">func (*ErrorVector)</a> <a href=\"?m:ErrorVector.GetError!\">GetError</a></h2>\n<code>func (h *ErrorVector) GetError(mode int) os.Error</code>\n<p>\nGetError is like GetErrorList, but it returns an os.Error instead\nso that a nil result can be assigned to an os.Error variable and\nremains nil.\n</p>\n\n",name:"GetError"},{html:"\n<h2><a class=\"black\" href=\"?m:ErrorVector\">func (*ErrorVector)</a> <a href=\"?m:ErrorVector.GetErrorList!\">GetErrorList</a></h2>\n<code>func (h *ErrorVector) GetErrorList(mode int) ErrorList</code>\n<p>\nGetErrorList returns the list of errors collected by an ErrorVector.\nThe construction of the ErrorList returned is controlled by the mode\nparameter. If there are no errors, the result is nil.\n</p>\n\n",name:"GetErrorList"},{html:"\n<h2><a class=\"black\" href=\"?m:ErrorVector\">func (*ErrorVector)</a> <a href=\"?m:ErrorVector.Reset!\">Reset</a></h2>\n<code>func (h *ErrorVector) Reset()</code>\n<p>\nReset resets an ErrorVector to no errors.\n</p>\n\n",name:"Reset"}]},{html:"\n<h2><a class=\"black\" href=\"?t:\">type</a> <a href=\"?t:Scanner!\">Scanner</a></h2>\n<pre>type Scanner struct {\n\n\t// public state - ok to modify\n\tErrorCount int // number of errors encountered\n\t// contains unexported fields\n}</pre>\n<p>\nA Scanner holds the scanner&#39;s internal state while processing\na given text.  It can be allocated as part of another data\nstructure but must be initialized via Init before use. For\na sample use, see the implementation of Tokenize.\n</p>\n\n",name:"Scanner","methods":[{html:"\n<h2><a class=\"black\" href=\"?m:Scanner\">func (*Scanner)</a> <a href=\"?m:Scanner.Init!\">Init</a></h2>\n<code>func (S *Scanner) Init(filename string, src []byte, err ErrorHandler, mode uint)</code>\n<p>\nInit prepares the scanner S to tokenize the text src. Calls to Scan\nwill use the error handler err if they encounter a syntax error and\nerr is not nil. Also, for each error encountered, the Scanner field\nErrorCount is incremented by one. The filename parameter is used as\nfilename in the token.Position returned by Scan for each token. The\nmode parameter determines how comments and illegal characters are\nhandled.\n</p>\n\n",name:"Init"},{html:"\n<h2><a class=\"black\" href=\"?m:Scanner\">func (*Scanner)</a> <a href=\"?m:Scanner.Scan!\">Scan</a></h2>\n<code>func (S *Scanner) Scan() (pos token.Position, tok token.Token, lit []byte)</code>\n<p>\nScan scans the next token and returns the token position pos,\nthe token tok, and the literal text lit corresponding to the\ntoken. The source end is indicated by token.EOF.\n</p>\n<p>\nIf the returned token is token.SEMICOLON, the corresponding\nliteral value is &#34;;&#34; if the semicolon was present in the source,\nand &#34;\\n&#34; if the semicolon was inserted because of a newline or\nat EOF.\n</p>\n<p>\nFor more tolerant parsing, Scan will return a valid token if\npossible even if a syntax error was encountered. Thus, even\nif the resulting token sequence contains no illegal tokens,\na client may not assume that no error occurred. Instead it\nmust check the scanner&#39;s ErrorCount or the number of calls\nof the error handler, if there was one installed.\n</p>\n\n",name:"Scan"}]}],funcs:[{html:"\n<h2><a class=\"black\" href=\"?f:\">func</a> <a href=\"?f:PrintError!\">PrintError</a></h2>\n<code>func PrintError(w io.Writer, err os.Error)</code>\n<p>\nPrintError is a utility function that prints a list of errors to w,\none error per line, if the err parameter is an ErrorList. Otherwise\nit prints the err string.\n</p>\n\n",name:"PrintError"},{html:"\n<h2><a class=\"black\" href=\"?f:\">func</a> <a href=\"?f:Tokenize!\">Tokenize</a></h2>\n<code>func Tokenize(filename string, src []byte, err ErrorHandler, mode uint, f func(pos token.Position, tok token.Token, lit []byte) bool) int</code>\n<p>\nTokenize calls a function f with the token position, token value, and token\ntext for each token in the source src. The other parameters have the same\nmeaning as for the Init function. Tokenize keeps scanning until f returns\nfalse (usually when the token value is token.EOF). The result is the number\nof errors encountered.\n</p>\n\n",name:"Tokenize"}],consts:[{html:"\n<h2><a class=\"black\" href=\"?c:\">const</a> <a href=\"?c:ScanComments!\"><em>group</em></a></h2>\n<pre>const (\n\tScanComments      = 1 &lt;&lt; iota // return comments as COMMENT tokens\n\tAllowIllegalChars             // do not report an error for illegal chars\n\tInsertSemis                   // automatically insert semicolons\n)</pre>\n<p>\nThe mode parameter to the Init function is a set of flags (or 0).\nThey control scanner behavior.\n</p>\n\n",names:["ScanComments","AllowIllegalChars","InsertSemis"],type:""},{html:"\n<h2><a class=\"black\" href=\"?c:\">const</a> <a href=\"?c:Raw!\"><em>group</em></a></h2>\n<pre>const (\n\tRaw         = iota // leave error list unchanged\n\tSorted             // sort error list by file, line, and column number\n\tNoMultiples        // sort error list and leave only the first error per line\n)</pre>\n<p>\nThese constants control the construction of the ErrorList\nreturned by GetErrors.\n</p>\n\n",names:["Raw","Sorted","NoMultiples"],type:""}],vars:[]}