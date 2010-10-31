var gowtfData = {"html":"<p>\u000aThe datafmt package implements syntax-directed, type-driven formatting\u000aof arbitrary data structures. Formatting a data structure consists of\u000atwo phases: first, a parser reads a format specification and builds a\u000a&#34;compiled&#34; format. Then, the format can be applied repeatedly to\u000aarbitrary values. Applying a format to a value evaluates to a []byte\u000acontaining the formatted value bytes, or nil.\u000a</p>\u000a<p>\u000aA format specification is a set of package declarations and format rules:\u000a</p>\u000a<pre>Format      = [ Entry { &#34;;&#34; Entry } [ &#34;;&#34; ] ] .\u000aEntry       = PackageDecl | FormatRule .\u000a</pre>\u000a<p>\u000a(The syntax of a format specification is presented in the same EBNF\u000anotation as used in the Go language specification. The syntax of white\u000aspace, comments, identifiers, and string literals is the same as in Go.)\u000a</p>\u000a<p>\u000aA package declaration binds a package name (such as &#39;ast&#39;) to a\u000apackage import path (such as &#39;&#34;go/ast&#34;&#39;). Each package used (in\u000aa type name, see below) must be declared once before use.\u000a</p>\u000a<pre>PackageDecl = PackageName ImportPath .\u000aPackageName = identifier .\u000aImportPath  = string .\u000a</pre>\u000a<p>\u000aA format rule binds a rule name to a format expression. A rule name\u000amay be a type name or one of the special names &#39;default&#39; or &#39;/&#39;.\u000aA type name may be the name of a predeclared type (for example, &#39;int&#39;,\u000a&#39;float32&#39;, etc.), the package-qualified name of a user-defined type\u000a(for example, &#39;ast.MapType&#39;), or an identifier indicating the structure\u000aof unnamed composite types (&#39;array&#39;, &#39;chan&#39;, &#39;func&#39;, &#39;interface&#39;, &#39;map&#39;,\u000aor &#39;ptr&#39;). Each rule must have a unique name; rules can be declared in\u000aany order.\u000a</p>\u000a<pre>FormatRule  = RuleName &#34;=&#34; Expression .\u000aRuleName    = TypeName | &#34;default&#34; | &#34;/&#34; .\u000aTypeName    = [ PackageName &#34;.&#34; ] identifier .\u000a</pre>\u000a<p>\u000aTo format a value, the value&#39;s type name is used to select the format rule\u000a(there is an override mechanism, see below). The format expression of the\u000aselected rule specifies how the value is formatted. Each format expression,\u000awhen applied to a value, evaluates to a byte sequence or nil.\u000a</p>\u000a<p>\u000aIn its most general form, a format expression is a list of alternatives,\u000aeach of which is a sequence of operands:\u000a</p>\u000a<pre>Expression  = [ Sequence ] { &#34;|&#34; [ Sequence ] } .\u000aSequence    = Operand { Operand } .\u000a</pre>\u000a<p>\u000aThe formatted result produced by an expression is the result of the first\u000aalternative sequence that evaluates to a non-nil result; if there is no\u000asuch alternative, the expression evaluates to nil. The result produced by\u000aan operand sequence is the concatenation of the results of its operands.\u000aIf any operand in the sequence evaluates to nil, the entire sequence\u000aevaluates to nil.\u000a</p>\u000a<p>\u000aThere are five kinds of operands:\u000a</p>\u000a<pre>Operand     = Literal | Field | Group | Option | Repetition .\u000a</pre>\u000a<p>\u000aLiterals evaluate to themselves, with two substitutions. First,\u000a%-formats expand in the manner of fmt.Printf, with the current value\u000apassed as the parameter. Second, the current indentation (see below)\u000ais inserted after every newline or form feed character.\u000a</p>\u000a<pre>Literal     = string .\u000a</pre>\u000a<p>\u000aThis table shows string literals applied to the value 42 and the\u000acorresponding formatted result:\u000a</p>\u000a<pre>&#34;foo&#34;       foo\u000a&#34;%x&#34;        2a\u000a&#34;x = %d&#34;    x = 42\u000a&#34;%#x = %d&#34;  0x2a = 42\u000a</pre>\u000a<p>\u000aA field operand is a field name optionally followed by an alternate\u000arule name. The field name may be an identifier or one of the special\u000anames @ or *.\u000a</p>\u000a<pre>Field       = FieldName [ &#34;:&#34; RuleName ] .\u000aFieldName   = identifier | &#34;@&#34; | &#34;*&#34; .\u000a</pre>\u000a<p>\u000aIf the field name is an identifier, the current value must be a struct,\u000aand there must be a field with that name in the struct. The same lookup\u000arules apply as in the Go language (for instance, the name of an anonymous\u000afield is the unqualified type name). The field name denotes the field\u000avalue in the struct. If the field is not found, formatting is aborted\u000aand an error message is returned. (TODO consider changing the semantics\u000asuch that if a field is not found, it evaluates to nil).\u000a</p>\u000a<p>\u000aThe special name &#39;@&#39; denotes the current value.\u000a</p>\u000a<p>\u000aThe meaning of the special name &#39;*&#39; depends on the type of the current\u000avalue:\u000a</p>\u000a<pre>array, slice types   array, slice element (inside {} only, see below)\u000ainterfaces           value stored in interface\u000apointers             value pointed to by pointer\u000a</pre>\u000a<p>\u000a(Implementation restriction: channel, function and map types are not\u000asupported due to missing reflection support).\u000a</p>\u000a<p>\u000aFields are evaluated as follows: If the field value is nil, or an array\u000aor slice element does not exist, the result is nil (see below for details\u000aon array/slice elements). If the value is not nil the field value is\u000aformatted (recursively) using the rule corresponding to its type name,\u000aor the alternate rule name, if given.\u000a</p>\u000a<p>\u000aThe following example shows a complete format specification for a\u000astruct &#39;myPackage.Point&#39;. Assume the package\u000a</p>\u000a<pre>package myPackage  // in directory myDir/myPackage\u000atype Point struct {\u000a\u0009name string;\u000a\u0009x, y int;\u000a}\u000a</pre>\u000a<p>\u000aApplying the format specification\u000a</p>\u000a<pre>myPackage &#34;myDir/myPackage&#34;;\u000aint = &#34;%d&#34;;\u000ahexInt = &#34;0x%x&#34;;\u000astring = &#34;---%s---&#34;;\u000amyPackage.Point = name &#34;{&#34; x &#34;, &#34; y:hexInt &#34;}&#34;;\u000a</pre>\u000a<p>\u000ato the value myPackage.Point{&#34;foo&#34;, 3, 15} results in\u000a</p>\u000a<pre>---foo---{3, 0xf}\u000a</pre>\u000a<p>\u000aFinally, an operand may be a grouped, optional, or repeated expression.\u000aA grouped expression (&#34;group&#34;) groups a more complex expression (body)\u000aso that it can be used in place of a single operand:\u000a</p>\u000a<pre>Group       = &#34;(&#34; [ Indentation &#34;&gt;&gt;&#34; ] Body &#34;)&#34; .\u000aIndentation = Expression .\u000aBody        = Expression .\u000a</pre>\u000a<p>\u000aA group body may be prefixed by an indentation expression followed by &#39;&gt;&gt;&#39;.\u000aThe indentation expression is applied to the current value like any other\u000aexpression and the result, if not nil, is appended to the current indentation\u000aduring the evaluation of the body (see also formatting state, below).\u000a</p>\u000a<p>\u000aAn optional expression (&#34;option&#34;) is enclosed in &#39;[]&#39; brackets.\u000a</p>\u000a<pre>Option      = &#34;[&#34; Body &#34;]&#34; .\u000a</pre>\u000a<p>\u000aAn option evaluates to its body, except that if the body evaluates to nil,\u000athe option expression evaluates to an empty []byte. Thus an option&#39;s purpose\u000ais to protect the expression containing the option from a nil operand.\u000a</p>\u000a<p>\u000aA repeated expression (&#34;repetition&#34;) is enclosed in &#39;{}&#39; braces.\u000a</p>\u000a<pre>Repetition  = &#34;{&#34; Body [ &#34;/&#34; Separator ] &#34;}&#34; .\u000aSeparator   = Expression .\u000a</pre>\u000a<p>\u000aA repeated expression is evaluated as follows: The body is evaluated\u000arepeatedly and its results are concatenated until the body evaluates\u000ato nil. The result of the repetition is the (possibly empty) concatenation,\u000abut it is never nil. An implicit index is supplied for the evaluation of\u000athe body: that index is used to address elements of arrays or slices. If\u000athe corresponding elements do not exist, the field denoting the element\u000aevaluates to nil (which in turn may terminate the repetition).\u000a</p>\u000a<p>\u000aThe body of a repetition may be followed by a &#39;/&#39; and a &#34;separator&#34;\u000aexpression. If the separator is present, it is invoked between repetitions\u000aof the body.\u000a</p>\u000a<p>\u000aThe following example shows a complete format specification for formatting\u000aa slice of unnamed type. Applying the specification\u000a</p>\u000a<pre>int = &#34;%b&#34;;\u000aarray = { * / &#34;, &#34; };  // array is the type name for an unnamed slice\u000a</pre>\u000a<p>\u000ato the value &#39;[]int{2, 3, 5, 7}&#39; results in\u000a</p>\u000a<pre>10, 11, 101, 111\u000a</pre>\u000a<p>\u000aDefault rule: If a format rule named &#39;default&#39; is present, it is used for\u000aformatting a value if no other rule was found. A common default rule is\u000a</p>\u000a<pre>default = &#34;%v&#34;\u000a</pre>\u000a<p>\u000ato provide default formatting for basic types without having to specify\u000aa specific rule for each basic type.\u000a</p>\u000a<p>\u000aGlobal separator rule: If a format rule named &#39;/&#39; is present, it is\u000ainvoked with the current value between literals. If the separator\u000aexpression evaluates to nil, it is ignored.\u000a</p>\u000a<p>\u000aFor instance, a global separator rule may be used to punctuate a sequence\u000aof values with commas. The rules:\u000a</p>\u000a<pre>default = &#34;%v&#34;;\u000a/ = &#34;, &#34;;\u000a</pre>\u000a<p>\u000awill format an argument list by printing each one in its default format,\u000aseparated by a comma and a space.\u000a</p>\u000a","name":"datafmt","filenames":["/home/nsf/go/src/pkg/exp/datafmt/datafmt.go","/home/nsf/go/src/pkg/exp/datafmt/parser.go"],"types":[{"html":"\u000a<h2><a class=\"black\" href=\"?t:\">type</a> <a href=\"?t:Environment!\">Environment</a></h2>\u000a<pre>type Environment interface {\u000a\u0009Copy() Environment\u000a}</pre>\u000a<p>\u000aAn application-specific environment may be provided to Format.Apply;\u000athe environment is available inside custom formatters via State.Env().\u000aEnvironments must implement copying; the Copy method must return an\u000acomplete copy of the receiver. This is necessary so that the formatter\u000acan save and restore an environment (in case of an absent expression).\u000a</p>\u000a<p>\u000aIf the Environment doesn&#39;t change during formatting (this is under\u000acontrol of the custom formatters), the Copy function can simply return\u000athe receiver, and thus can be very light-weight.\u000a</p>\u000a\u000a","name":"Environment","methods":[]},{"html":"\u000a<h2><a class=\"black\" href=\"?t:\">type</a> <a href=\"?t:Format!\">Format</a></h2>\u000a<pre>type Format map[string]expr</pre>\u000a<p>\u000aA Format is the result of parsing a format specification.\u000aThe format may be applied repeatedly to format values.\u000a</p>\u000a\u000a","name":"Format","methods":[{"html":"\u000a<h2><a class=\"black\" href=\"?m:Format\">func (Format)</a> <a href=\"?m:Format.Eval!\">Eval</a></h2>\u000a<code>func (f Format) Eval(env Environment, args ...interface{}) ([]byte, os.Error)</code>\u000a<p>\u000aEval formats each argument according to the format\u000af and returns the resulting []byte and os.Error. If\u000aan error occured, the []byte contains the partially\u000aformatted result. An environment env may be passed\u000ain which is available in custom formatters through\u000athe state parameter.\u000a</p>\u000a\u000a","name":"Eval"},{"html":"\u000a<h2><a class=\"black\" href=\"?m:Format\">func (Format)</a> <a href=\"?m:Format.Fprint!\">Fprint</a></h2>\u000a<code>func (f Format) Fprint(w io.Writer, env Environment, args ...interface{}) (int, os.Error)</code>\u000a<p>\u000aFprint formats each argument according to the format f\u000aand writes to w. The result is the total number of bytes\u000awritten and an os.Error, if any.\u000a</p>\u000a\u000a","name":"Fprint"},{"html":"\u000a<h2><a class=\"black\" href=\"?m:Format\">func (Format)</a> <a href=\"?m:Format.Print!\">Print</a></h2>\u000a<code>func (f Format) Print(args ...interface{}) (int, os.Error)</code>\u000a<p>\u000aPrint formats each argument according to the format f\u000aand writes to standard output. The result is the total\u000anumber of bytes written and an os.Error, if any.\u000a</p>\u000a\u000a","name":"Print"},{"html":"\u000a<h2><a class=\"black\" href=\"?m:Format\">func (Format)</a> <a href=\"?m:Format.Sprint!\">Sprint</a></h2>\u000a<code>func (f Format) Sprint(args ...interface{}) string</code>\u000a<p>\u000aSprint formats each argument according to the format f\u000aand returns the resulting string. If an error occurs\u000aduring formatting, the result string contains the\u000apartially formatted result followed by an error message.\u000a</p>\u000a\u000a","name":"Sprint"}]},{"html":"\u000a<h2><a class=\"black\" href=\"?t:\">type</a> <a href=\"?t:Formatter!\">Formatter</a></h2>\u000a<pre>type Formatter func(state *State, value interface{}, ruleName string) bool</pre>\u000a<p>\u000aCustom formatters implement the Formatter function type.\u000aA formatter is invoked with the current formatting state, the\u000avalue to format, and the rule name under which the formatter\u000awas installed (the same formatter function may be installed\u000aunder different names). The formatter may access the current state\u000ato guide formatting and use State.Write to append to the state&#39;s\u000aoutput.\u000a</p>\u000a<p>\u000aA formatter must return a boolean value indicating if it evaluated\u000ato a non-nil value (true), or a nil value (false).\u000a</p>\u000a\u000a","name":"Formatter","methods":[]},{"html":"\u000a<h2><a class=\"black\" href=\"?t:\">type</a> <a href=\"?t:FormatterMap!\">FormatterMap</a></h2>\u000a<pre>type FormatterMap map[string]Formatter</pre>\u000a<p>\u000aA FormatterMap is a set of custom formatters.\u000aIt maps a rule name to a formatter function.\u000a</p>\u000a\u000a","name":"FormatterMap","methods":[]},{"html":"\u000a<h2><a class=\"black\" href=\"?t:\">type</a> <a href=\"?t:State!\">State</a></h2>\u000a<pre>type State struct {\u000a\u0009fmt       Format         // format in use\u000a\u0009env       Environment    // user-supplied environment\u000a\u0009errors    chan os.Error  // not chan *Error (errors &lt;- nil would be wrong!)\u000a\u0009hasOutput bool           // true after the first literal has been written\u000a\u0009indent    bytes.Buffer   // current indentation\u000a\u0009output    bytes.Buffer   // format output\u000a\u0009linePos   token.Position // position of line beginning (Column == 0)\u000a\u0009default_  expr           // possibly nil\u000a\u0009separator expr           // possibly nil\u000a}</pre>\u000a<p>\u000aState represents the current formatting state.\u000aIt is provided as argument to custom formatters.\u000a</p>\u000a\u000a","name":"State","methods":[{"html":"\u000a<h2><a class=\"black\" href=\"?m:State\">func (*State)</a> <a href=\"?m:State.Env!\">Env</a></h2>\u000a<code>func (s *State) Env() interface{}</code>\u000a<p>\u000aEnv returns the environment passed to Format.Apply.\u000a</p>\u000a\u000a","name":"Env"},{"html":"\u000a<h2><a class=\"black\" href=\"?m:State\">func (*State)</a> <a href=\"?m:State.LinePos!\">LinePos</a></h2>\u000a<code>func (s *State) LinePos() token.Position</code>\u000a<p>\u000aLinePos returns the position of the current line beginning\u000ain the state&#39;s output buffer. Line numbers start at 1.\u000a</p>\u000a\u000a","name":"LinePos"},{"html":"\u000a<h2><a class=\"black\" href=\"?m:State\">func (*State)</a> <a href=\"?m:State.Pos!\">Pos</a></h2>\u000a<code>func (s *State) Pos() token.Position</code>\u000a<p>\u000aPos returns the position of the next byte to be written to the\u000aoutput buffer. Line numbers start at 1.\u000a</p>\u000a\u000a","name":"Pos"},{"html":"\u000a<h2><a class=\"black\" href=\"?m:State\">func (*State)</a> <a href=\"?m:State.Write!\">Write</a></h2>\u000a<code>func (s *State) Write(data []byte) (int, os.Error)</code>\u000a<p>\u000aWrite writes data to the output buffer, inserting the indentation\u000astring after each newline or form feed character. It cannot return an error.\u000a</p>\u000a\u000a","name":"Write"}]}],"funcs":[{"html":"\u000a<h2><a class=\"black\" href=\"?f:\">func</a> <a href=\"?f:Parse!\">Parse</a></h2>\u000a<code>func Parse(filename string, src []byte, fmap FormatterMap) (Format, os.Error)</code>\u000a<p>\u000aParse parses a set of format productions from source src. Custom\u000aformatters may be provided via a map of formatter functions. If\u000athere are no errors, the result is a Format and the error is nil.\u000aOtherwise the format is nil and a non-empty ErrorList is returned.\u000a</p>\u000a\u000a","name":"Parse"}],"consts":[],"vars":[]}