var gowtfData = {"html":"<p>\u000aPackage gosym implements access to the Go symbol\u000aand line number tables embedded in Go binaries generated\u000aby the gc compilers.\u000a</p>\u000a","name":"gosym","filenames":["/home/nsf/go/src/pkg/debug/gosym/pclntab.go","/home/nsf/go/src/pkg/debug/gosym/symtab.go"],"types":[{"html":"\u000a<h2><a class=\"black\" href=\"?t:\">type</a> <a href=\"?t:DecodingError!\">DecodingError</a></h2>\u000a<pre>type DecodingError struct {\u000a\u0009off int\u000a\u0009msg string\u000a\u0009val interface{}\u000a}</pre>\u000a<p>\u000aDecodingError represents an error during the decoding of\u000athe symbol table.\u000a</p>\u000a\u000a","name":"DecodingError","methods":[{"html":"\u000a<h2><a class=\"black\" href=\"?m:DecodingError\">func (*DecodingError)</a> <a href=\"?m:DecodingError.String!\">String</a></h2>\u000a<code>func (e *DecodingError) String() string</code>\u000a\u000a","name":"String"}]},{"html":"\u000a<h2><a class=\"black\" href=\"?t:\">type</a> <a href=\"?t:Func!\">Func</a></h2>\u000a<pre>type Func struct {\u000a\u0009Entry uint64\u000a\u0009*Sym\u000a\u0009End       uint64\u000a\u0009Params    []*Sym\u000a\u0009Locals    []*Sym\u000a\u0009FrameSize int\u000a\u0009LineTable *LineTable\u000a\u0009Obj       *Obj\u000a}</pre>\u000a<p>\u000aA Func collects information about a single function.\u000a</p>\u000a\u000a","name":"Func","methods":[]},{"html":"\u000a<h2><a class=\"black\" href=\"?t:\">type</a> <a href=\"?t:LineTable!\">LineTable</a></h2>\u000a<pre>type LineTable struct {\u000a\u0009Data []byte\u000a\u0009PC   uint64\u000a\u0009Line int\u000a}</pre>\u000a\u000a","name":"LineTable","methods":[{"html":"\u000a<h2><a class=\"black\" href=\"?m:LineTable\">func (*LineTable)</a> <a href=\"?m:LineTable.LineToPC!\">LineToPC</a></h2>\u000a<code>func (t *LineTable) LineToPC(line int, maxpc uint64) uint64</code>\u000a\u000a","name":"LineToPC"},{"html":"\u000a<h2><a class=\"black\" href=\"?m:LineTable\">func (*LineTable)</a> <a href=\"?m:LineTable.PCToLine!\">PCToLine</a></h2>\u000a<code>func (t *LineTable) PCToLine(pc uint64) int</code>\u000a\u000a","name":"PCToLine"}]},{"html":"\u000a<h2><a class=\"black\" href=\"?t:\">type</a> <a href=\"?t:Obj!\">Obj</a></h2>\u000a<pre>type Obj struct {\u000a\u0009Funcs []Func\u000a\u0009Paths []Sym\u000a}</pre>\u000a<p>\u000aAn Obj represents a single object file.\u000a</p>\u000a\u000a","name":"Obj","methods":[]},{"html":"\u000a<h2><a class=\"black\" href=\"?t:\">type</a> <a href=\"?t:Sym!\">Sym</a></h2>\u000a<pre>type Sym struct {\u000a\u0009Value  uint64\u000a\u0009Type   byte\u000a\u0009Name   string\u000a\u0009GoType uint64\u000a\u0009// If this symbol if a function symbol, the corresponding Func\u000a\u0009Func *Func\u000a}</pre>\u000a<p>\u000aA Sym represents a single symbol table entry.\u000a</p>\u000a\u000a","name":"Sym","methods":[{"html":"\u000a<h2><a class=\"black\" href=\"?m:Sym\">func (*Sym)</a> <a href=\"?m:Sym.BaseName!\">BaseName</a></h2>\u000a<code>func (s *Sym) BaseName() string</code>\u000a<p>\u000aBaseName returns the symbol name without the package or receiver name.\u000a</p>\u000a\u000a","name":"BaseName"},{"html":"\u000a<h2><a class=\"black\" href=\"?m:Sym\">func (*Sym)</a> <a href=\"?m:Sym.PackageName!\">PackageName</a></h2>\u000a<code>func (s *Sym) PackageName() string</code>\u000a<p>\u000aPackageName returns the package part of the symbol name,\u000aor the empty string if there is none.\u000a</p>\u000a\u000a","name":"PackageName"},{"html":"\u000a<h2><a class=\"black\" href=\"?m:Sym\">func (*Sym)</a> <a href=\"?m:Sym.ReceiverName!\">ReceiverName</a></h2>\u000a<code>func (s *Sym) ReceiverName() string</code>\u000a<p>\u000aReceiverName returns the receiver type name of this symbol,\u000aor the empty string if there is none.\u000a</p>\u000a\u000a","name":"ReceiverName"},{"html":"\u000a<h2><a class=\"black\" href=\"?m:Sym\">func (*Sym)</a> <a href=\"?m:Sym.Static!\">Static</a></h2>\u000a<code>func (s *Sym) Static() bool</code>\u000a<p>\u000aStatic returns whether this symbol is static (not visible outside its file).\u000a</p>\u000a\u000a","name":"Static"}]},{"html":"\u000a<h2><a class=\"black\" href=\"?t:\">type</a> <a href=\"?t:Table!\">Table</a></h2>\u000a<pre>type Table struct {\u000a\u0009Syms  []Sym\u000a\u0009Funcs []Func\u000a\u0009Files map[string]*Obj\u000a\u0009Objs  []Obj\u000a}</pre>\u000a<p>\u000aTable represents a Go symbol table.  It stores all of the\u000asymbols decoded from the program and provides methods to translate\u000abetween symbols, names, and addresses.\u000a</p>\u000a\u000a","name":"Table","methods":[{"html":"\u000a<h2><a class=\"black\" href=\"?m:Table\">func (*Table)</a> <a href=\"?m:Table.LineToPC!\">LineToPC</a></h2>\u000a<code>func (t *Table) LineToPC(file string, line int) (pc uint64, fn *Func, err os.Error)</code>\u000a<p>\u000aLineToPC looks up the first program counter on the given line in\u000athe named file.  Returns UnknownPathError or UnknownLineError if\u000athere is an error looking up this line.\u000a</p>\u000a\u000a","name":"LineToPC"},{"html":"\u000a<h2><a class=\"black\" href=\"?m:Table\">func (*Table)</a> <a href=\"?m:Table.LookupFunc!\">LookupFunc</a></h2>\u000a<code>func (t *Table) LookupFunc(name string) *Func</code>\u000a<p>\u000aLookupFunc returns the text, data, or bss symbol with the given name,\u000aor nil if no such symbol is found.\u000a</p>\u000a\u000a","name":"LookupFunc"},{"html":"\u000a<h2><a class=\"black\" href=\"?m:Table\">func (*Table)</a> <a href=\"?m:Table.LookupSym!\">LookupSym</a></h2>\u000a<code>func (t *Table) LookupSym(name string) *Sym</code>\u000a<p>\u000aLookupSym returns the text, data, or bss symbol with the given name,\u000aor nil if no such symbol is found.\u000a</p>\u000a\u000a","name":"LookupSym"},{"html":"\u000a<h2><a class=\"black\" href=\"?m:Table\">func (*Table)</a> <a href=\"?m:Table.PCToFunc!\">PCToFunc</a></h2>\u000a<code>func (t *Table) PCToFunc(pc uint64) *Func</code>\u000a<p>\u000aPCToFunc returns the function containing the program counter pc,\u000aor nil if there is no such function.\u000a</p>\u000a\u000a","name":"PCToFunc"},{"html":"\u000a<h2><a class=\"black\" href=\"?m:Table\">func (*Table)</a> <a href=\"?m:Table.PCToLine!\">PCToLine</a></h2>\u000a<code>func (t *Table) PCToLine(pc uint64) (file string, line int, fn *Func)</code>\u000a<p>\u000aPCToLine looks up line number information for a program counter.\u000aIf there is no information, it returns fn == nil.\u000a</p>\u000a\u000a","name":"PCToLine"},{"html":"\u000a<h2><a class=\"black\" href=\"?m:Table\">func (*Table)</a> <a href=\"?m:Table.SymByAddr!\">SymByAddr</a></h2>\u000a<code>func (t *Table) SymByAddr(addr uint64) *Sym</code>\u000a<p>\u000aSymByAddr returns the text, data, or bss symbol starting at the given address.\u000aTODO(rsc): Allow lookup by any address within the symbol.\u000a</p>\u000a\u000a","name":"SymByAddr"}]},{"html":"\u000a<h2><a class=\"black\" href=\"?t:\">type</a> <a href=\"?t:UnknownFileError!\">UnknownFileError</a></h2>\u000a<pre>type UnknownFileError string</pre>\u000a<p>\u000aUnknownFileError represents a failure to find the specific file in\u000athe symbol table.\u000a</p>\u000a\u000a","name":"UnknownFileError","methods":[{"html":"\u000a<h2><a class=\"black\" href=\"?m:UnknownFileError\">func (UnknownFileError)</a> <a href=\"?m:UnknownFileError.String!\">String</a></h2>\u000a<code>func (e UnknownFileError) String() string</code>\u000a\u000a","name":"String"}]},{"html":"\u000a<h2><a class=\"black\" href=\"?t:\">type</a> <a href=\"?t:UnknownLineError!\">UnknownLineError</a></h2>\u000a<pre>type UnknownLineError struct {\u000a\u0009File string\u000a\u0009Line int\u000a}</pre>\u000a<p>\u000aUnknownLineError represents a failure to map a line to a program\u000acounter, either because the line is beyond the bounds of the file\u000aor because there is no code on the given line.\u000a</p>\u000a\u000a","name":"UnknownLineError","methods":[{"html":"\u000a<h2><a class=\"black\" href=\"?m:UnknownLineError\">func (*UnknownLineError)</a> <a href=\"?m:UnknownLineError.String!\">String</a></h2>\u000a<code>func (e *UnknownLineError) String() string</code>\u000a\u000a","name":"String"}]}],"funcs":[{"html":"\u000a<h2><a class=\"black\" href=\"?f:\">func</a> <a href=\"?f:NewLineTable!\">NewLineTable</a></h2>\u000a<code>func NewLineTable(data []byte, text uint64) *LineTable</code>\u000a<p>\u000aNewLineTable returns a new PC/line table\u000acorresponding to the encoded data.\u000aText must be the start address of the\u000acorresponding text segment.\u000a</p>\u000a\u000a","name":"NewLineTable"},{"html":"\u000a<h2><a class=\"black\" href=\"?f:\">func</a> <a href=\"?f:NewTable!\">NewTable</a></h2>\u000a<code>func NewTable(symtab []byte, pcln *LineTable) (*Table, os.Error)</code>\u000a<p>\u000aNewTable decodes the Go symbol table in data,\u000areturning an in-memory representation.\u000a</p>\u000a\u000a","name":"NewTable"}],"consts":[],"vars":[]}