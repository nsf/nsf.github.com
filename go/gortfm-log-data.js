var gortfmData = {index:"index.html",html:"<p>\nSimple logging package. It defines a type, Logger, with methods\nfor formatting output. It also has a predefined &#39;standard&#39; Logger\naccessible through helper functions Print[f|ln], Exit[f|ln], and\nPanic[f|ln], which are easier to use than creating a Logger manually.\nThat logger writes to standard error and prints the date and time\nof each logged message.\nThe Exit functions call os.Exit(1) after writing the log message.\nThe Panic functions call panic after writing the log message.\n</p>\n",name:"log",types:[{html:"\n<h2><a class=\"black\" href=\"?t:\">type</a> <a href=\"?t:Logger!\">Logger</a></h2>\n<pre>type Logger struct {\n\t// contains unexported fields\n}</pre>\n<p>\nLogger represents an active logging object.\n</p>\n\n",name:"Logger","methods":[{html:"\n<h2><a class=\"black\" href=\"?m:Logger\">func (*Logger)</a> <a href=\"?m:Logger.Output!\">Output</a></h2>\n<code>func (l *Logger) Output(calldepth int, s string) os.Error</code>\n<p>\nOutput writes the output for a logging event.  The string s contains\nthe text to print after the prefix specified by the flags of the\nLogger.  A newline is appended if the last character of s is not\nalready a newline.  Calldepth is used to recover the PC and is\nprovided for generality, although at the moment on all pre-defined\npaths it will be 2.\n</p>\n\n",name:"Output"},{html:"\n<h2><a class=\"black\" href=\"?m:Logger\">func (*Logger)</a> <a href=\"?m:Logger.Print!\">Print</a></h2>\n<code>func (l *Logger) Print(v ...interface{})</code>\n<p>\nPrint calls l.Output to print to the logger.\nArguments are handled in the manner of fmt.Print.\n</p>\n\n",name:"Print"},{html:"\n<h2><a class=\"black\" href=\"?m:Logger\">func (*Logger)</a> <a href=\"?m:Logger.Printf!\">Printf</a></h2>\n<code>func (l *Logger) Printf(format string, v ...interface{})</code>\n<p>\nPrintf calls l.Output to print to the logger.\nArguments are handled in the manner of fmt.Printf.\n</p>\n\n",name:"Printf"},{html:"\n<h2><a class=\"black\" href=\"?m:Logger\">func (*Logger)</a> <a href=\"?m:Logger.Println!\">Println</a></h2>\n<code>func (l *Logger) Println(v ...interface{})</code>\n<p>\nPrintln calls l.Output to print to the logger.\nArguments are handled in the manner of fmt.Println.\n</p>\n\n",name:"Println"}]}],funcs:[{html:"\n<h2><a class=\"black\" href=\"?f:\">func</a> <a href=\"?f:Exit!\">Exit</a></h2>\n<code>func Exit(v ...interface{})</code>\n<p>\nExit is equivalent to Print() followed by a call to os.Exit(1).\n</p>\n\n",name:"Exit"},{html:"\n<h2><a class=\"black\" href=\"?f:\">func</a> <a href=\"?f:Exitf!\">Exitf</a></h2>\n<code>func Exitf(format string, v ...interface{})</code>\n<p>\nExitf is equivalent to Printf() followed by a call to os.Exit(1).\n</p>\n\n",name:"Exitf"},{html:"\n<h2><a class=\"black\" href=\"?f:\">func</a> <a href=\"?f:Exitln!\">Exitln</a></h2>\n<code>func Exitln(v ...interface{})</code>\n<p>\nExitln is equivalent to Println() followed by a call to os.Exit(1).\n</p>\n\n",name:"Exitln"},{html:"\n<h2><a class=\"black\" href=\"?f:\">func</a> <a href=\"?f:New!\">New</a></h2>\n<code>func New(out io.Writer, prefix string, flag int) *Logger</code>\n<p>\nNew creates a new Logger.   The out variable sets the\ndestination to which log data will be written.\nThe prefix appears at the beginning of each generated log line.\nThe flag argument defines the logging properties.\n</p>\n\n",name:"New"},{html:"\n<h2><a class=\"black\" href=\"?f:\">func</a> <a href=\"?f:Panic!\">Panic</a></h2>\n<code>func Panic(v ...interface{})</code>\n<p>\nPanic is equivalent to Print() followed by a call to panic().\n</p>\n\n",name:"Panic"},{html:"\n<h2><a class=\"black\" href=\"?f:\">func</a> <a href=\"?f:Panicf!\">Panicf</a></h2>\n<code>func Panicf(format string, v ...interface{})</code>\n<p>\nPanicf is equivalent to Printf() followed by a call to panic().\n</p>\n\n",name:"Panicf"},{html:"\n<h2><a class=\"black\" href=\"?f:\">func</a> <a href=\"?f:Panicln!\">Panicln</a></h2>\n<code>func Panicln(v ...interface{})</code>\n<p>\nPanicln is equivalent to Println() followed by a call to panic().\n</p>\n\n",name:"Panicln"},{html:"\n<h2><a class=\"black\" href=\"?f:\">func</a> <a href=\"?f:Print!\">Print</a></h2>\n<code>func Print(v ...interface{})</code>\n<p>\nPrint calls Output to print to the standard logger.\nArguments are handled in the manner of fmt.Print.\n</p>\n\n",name:"Print"},{html:"\n<h2><a class=\"black\" href=\"?f:\">func</a> <a href=\"?f:Printf!\">Printf</a></h2>\n<code>func Printf(format string, v ...interface{})</code>\n<p>\nPrintf calls Output to print to the standard logger.\nArguments are handled in the manner of fmt.Printf.\n</p>\n\n",name:"Printf"},{html:"\n<h2><a class=\"black\" href=\"?f:\">func</a> <a href=\"?f:Println!\">Println</a></h2>\n<code>func Println(v ...interface{})</code>\n<p>\nPrintln calls Output to print to the standard logger.\nArguments are handled in the manner of fmt.Println.\n</p>\n\n",name:"Println"},{html:"\n<h2><a class=\"black\" href=\"?f:\">func</a> <a href=\"?f:SetFlags!\">SetFlags</a></h2>\n<code>func SetFlags(flag int)</code>\n<p>\nSetFlags sets the output flags for the standard logger.\n</p>\n\n",name:"SetFlags"},{html:"\n<h2><a class=\"black\" href=\"?f:\">func</a> <a href=\"?f:SetOutput!\">SetOutput</a></h2>\n<code>func SetOutput(w io.Writer)</code>\n<p>\nSetOutput sets the output destination for the standard logger.\n</p>\n\n",name:"SetOutput"},{html:"\n<h2><a class=\"black\" href=\"?f:\">func</a> <a href=\"?f:SetPrefix!\">SetPrefix</a></h2>\n<code>func SetPrefix(prefix string)</code>\n<p>\nSetPrefix sets the output prefix for the standard logger.\n</p>\n\n",name:"SetPrefix"}],consts:[{html:"\n<h2><a class=\"black\" href=\"?c:\">const</a> <a href=\"?c:Ldate!\"><em>group</em></a></h2>\n<pre>const (\n\t// Bits or&#39;ed together to control what&#39;s printed. There is no control over the\n\t// order they appear (the order listed here) or the format they present (as\n\t// described in the comments).  A colon appears after these items:\n\t//\t2009/0123 01:23:23.123123 /a/b/c/d.go:23: message\n\tLdate         = 1 &lt;&lt; iota // the date: 2009/0123\n\tLtime                     // the time: 01:23:23\n\tLmicroseconds             // microsecond resolution: 01:23:23.123123.  assumes Ltime.\n\tLlongfile                 // full file name and line number: /a/b/c/d.go:23\n\tLshortfile                // final file name element and line number: d.go:23. overrides Llongfile\n)</pre>\n<p>\nThese flags define which text to prefix to each log entry generated by the Logger.\n</p>\n\n",names:["Ldate","Ltime","Lmicroseconds","Llongfile","Lshortfile"],type:""}],vars:[]}