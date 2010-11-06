var gortfmData = {index:"index.html",html:"<p>\nA parser for Go source files. Input may be provided in a variety of\nforms (see the various Parse* functions); the output is an abstract\nsyntax tree (AST) representing the Go source. The parser is invoked\nthrough one of the Parse* functions.\n</p>\n",name:"parser",types:[],funcs:[{html:"\n<h2><a class=\"black\" href=\"?f:\">func</a> <a href=\"?f:ParseDeclList!\">ParseDeclList</a></h2>\n<code>func ParseDeclList(filename string, src interface{}) ([]ast.Decl, os.Error)</code>\n<p>\nParseDeclList parses a list of Go declarations and returns the list\nof corresponding AST nodes.  The filename and src arguments have the same\ninterpretation as for ParseFile. If there is an error, the node\nlist may be nil or contain partial ASTs.\n</p>\n\n",name:"ParseDeclList"},{html:"\n<h2><a class=\"black\" href=\"?f:\">func</a> <a href=\"?f:ParseDir!\">ParseDir</a></h2>\n<code>func ParseDir(path string, filter func(*os.FileInfo) bool, mode uint) (map[string]*ast.Package, os.Error)</code>\n<p>\nParseDir calls ParseFile for the files in the directory specified by path and\nreturns a map of package name -&gt; package AST with all the packages found. If\nfilter != nil, only the files with os.FileInfo entries passing through the filter\nare considered. The mode bits are passed to ParseFile unchanged.\n</p>\n<p>\nIf the directory couldn&#39;t be read, a nil map and the respective error are\nreturned. If a parse error occured, a non-nil but incomplete map and the\nerror are returned.\n</p>\n\n",name:"ParseDir"},{html:"\n<h2><a class=\"black\" href=\"?f:\">func</a> <a href=\"?f:ParseExpr!\">ParseExpr</a></h2>\n<code>func ParseExpr(filename string, src interface{}) (ast.Expr, os.Error)</code>\n<p>\nParseExpr parses a Go expression and returns the corresponding\nAST node. The filename and src arguments have the same interpretation\nas for ParseFile. If there is an error, the result expression\nmay be nil or contain a partial AST.\n</p>\n\n",name:"ParseExpr"},{html:"\n<h2><a class=\"black\" href=\"?f:\">func</a> <a href=\"?f:ParseFile!\">ParseFile</a></h2>\n<code>func ParseFile(filename string, src interface{}, mode uint) (*ast.File, os.Error)</code>\n<p>\nParseFile parses a Go source file and returns a File node.\n</p>\n<p>\nIf src != nil, ParseFile parses the file source from src. src may\nbe provided in a variety of formats. At the moment the following types\nare supported: string, []byte, and io.Reader. In this case, filename is\nonly used for source position information and error messages.\n</p>\n<p>\nIf src == nil, ParseFile parses the file specified by filename.\n</p>\n<p>\nThe mode parameter controls the amount of source text parsed and other\noptional parser functionality.\n</p>\n<p>\nIf the source couldn&#39;t be read, the returned AST is nil and the error\nindicates the specific failure. If the source was read but syntax\nerrors were found, the result is a partial AST (with ast.BadX nodes\nrepresenting the fragments of erroneous source code). Multiple errors\nare returned via a scanner.ErrorList which is sorted by file position.\n</p>\n\n",name:"ParseFile"},{html:"\n<h2><a class=\"black\" href=\"?f:\">func</a> <a href=\"?f:ParseFiles!\">ParseFiles</a></h2>\n<code>func ParseFiles(filenames []string, mode uint) (pkgs map[string]*ast.Package, first os.Error)</code>\n<p>\nParseFiles calls ParseFile for each file in the filenames list and returns\na map of package name -&gt; package AST with all the packages found. The mode\nbits are passed to ParseFile unchanged.\n</p>\n<p>\nFiles with parse errors are ignored. In this case the map of packages may\nbe incomplete (missing packages and/or incomplete packages) and the first\nerror encountered is returned.\n</p>\n\n",name:"ParseFiles"},{html:"\n<h2><a class=\"black\" href=\"?f:\">func</a> <a href=\"?f:ParseStmtList!\">ParseStmtList</a></h2>\n<code>func ParseStmtList(filename string, src interface{}) ([]ast.Stmt, os.Error)</code>\n<p>\nParseStmtList parses a list of Go statements and returns the list\nof corresponding AST nodes. The filename and src arguments have the same\ninterpretation as for ParseFile. If there is an error, the node\nlist may be nil or contain partial ASTs.\n</p>\n\n",name:"ParseStmtList"}],consts:[{html:"\n<h2><a class=\"black\" href=\"?c:\">const</a> <a href=\"?c:PackageClauseOnly!\"><em>group</em></a></h2>\n<pre>const (\n\tPackageClauseOnly uint = 1 &lt;&lt; iota // parsing stops after package clause\n\tImportsOnly                        // parsing stops after import declarations\n\tParseComments                      // parse comments and add them to AST\n\tTrace                              // print a trace of parsed productions\n)</pre>\n<p>\nThe mode parameter to the Parse* functions is a set of flags (or 0).\nThey control the amount of source code parsed and other optional\nparser functionality.\n</p>\n\n",names:["PackageClauseOnly","ImportsOnly","ParseComments","Trace"],type:""}],vars:[]}