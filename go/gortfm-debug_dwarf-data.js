var gortfmData = {index:"index.html",html:"<p>\nThis package provides access to DWARF debugging information\nloaded from executable files, as defined in the DWARF 2.0 Standard\nat <a href=\"http://dwarfstd.org/doc/dwarf-2.0.0.pdf\">http://dwarfstd.org/doc/dwarf-2.0.0.pdf</a>\n</p>\n",name:"dwarf",types:[{html:"\n<h2><a class=\"black\" href=\"?t:\">type</a> <a href=\"?t:AddrType!\">AddrType</a></h2>\n<pre>type AddrType struct {\n\tBasicType\n}</pre>\n<p>\nAn AddrType represents a machine address type.\n</p>\n\n",name:"AddrType","methods":[]},{html:"\n<h2><a class=\"black\" href=\"?t:\">type</a> <a href=\"?t:ArrayType!\">ArrayType</a></h2>\n<pre>type ArrayType struct {\n\tCommonType\n\tType          Type\n\tStrideBitSize int64 // if &gt; 0, number of bits to hold each element\n\tCount         int64 // if == -1, an incomplete array, like char x[].\n}</pre>\n<p>\nAn ArrayType represents a fixed size array type.\n</p>\n\n",name:"ArrayType","methods":[{html:"\n<h2><a class=\"black\" href=\"?m:ArrayType\">func (*ArrayType)</a> <a href=\"?m:ArrayType.Size!\">Size</a></h2>\n<code>func (t *ArrayType) Size() int64</code>\n\n",name:"Size"},{html:"\n<h2><a class=\"black\" href=\"?m:ArrayType\">func (*ArrayType)</a> <a href=\"?m:ArrayType.String!\">String</a></h2>\n<code>func (t *ArrayType) String() string</code>\n\n",name:"String"}]},{html:"\n<h2><a class=\"black\" href=\"?t:\">type</a> <a href=\"?t:Attr!\">Attr</a></h2>\n<pre>type Attr uint32</pre>\n<p>\nAn Attr identifies the attribute type in a DWARF Entry&#39;s Field.\n</p>\n\n",name:"Attr","methods":[{html:"\n<h2><a class=\"black\" href=\"?m:Attr\">func (Attr)</a> <a href=\"?m:Attr.GoString!\">GoString</a></h2>\n<code>func (a Attr) GoString() string</code>\n\n",name:"GoString"},{html:"\n<h2><a class=\"black\" href=\"?m:Attr\">func (Attr)</a> <a href=\"?m:Attr.String!\">String</a></h2>\n<code>func (a Attr) String() string</code>\n\n",name:"String"}]},{html:"\n<h2><a class=\"black\" href=\"?t:\">type</a> <a href=\"?t:BasicType!\">BasicType</a></h2>\n<pre>type BasicType struct {\n\tCommonType\n\tBitSize   int64\n\tBitOffset int64\n}</pre>\n<p>\nA BasicType holds fields common to all basic types.\n</p>\n\n",name:"BasicType","methods":[{html:"\n<h2><a class=\"black\" href=\"?m:BasicType\">func (*BasicType)</a> <a href=\"?m:BasicType.Basic!\">Basic</a></h2>\n<code>func (b *BasicType) Basic() *BasicType</code>\n\n",name:"Basic"},{html:"\n<h2><a class=\"black\" href=\"?m:BasicType\">func (*BasicType)</a> <a href=\"?m:BasicType.String!\">String</a></h2>\n<code>func (t *BasicType) String() string</code>\n\n",name:"String"}]},{html:"\n<h2><a class=\"black\" href=\"?t:\">type</a> <a href=\"?t:BoolType!\">BoolType</a></h2>\n<pre>type BoolType struct {\n\tBasicType\n}</pre>\n<p>\nA BoolType represents a boolean type.\n</p>\n\n",name:"BoolType","methods":[]},{html:"\n<h2><a class=\"black\" href=\"?t:\">type</a> <a href=\"?t:CharType!\">CharType</a></h2>\n<pre>type CharType struct {\n\tBasicType\n}</pre>\n<p>\nA CharType represents a signed character type.\n</p>\n\n",name:"CharType","methods":[]},{html:"\n<h2><a class=\"black\" href=\"?t:\">type</a> <a href=\"?t:CommonType!\">CommonType</a></h2>\n<pre>type CommonType struct {\n\tByteSize int64  // size of value of this type, in bytes\n\tName     string // name that can be used to refer to type\n}</pre>\n<p>\nA CommonType holds fields common to multiple types.\nIf a field is not known or not applicable for a given type,\nthe zero value is used.\n</p>\n\n",name:"CommonType","methods":[{html:"\n<h2><a class=\"black\" href=\"?m:CommonType\">func (*CommonType)</a> <a href=\"?m:CommonType.Common!\">Common</a></h2>\n<code>func (c *CommonType) Common() *CommonType</code>\n\n",name:"Common"},{html:"\n<h2><a class=\"black\" href=\"?m:CommonType\">func (*CommonType)</a> <a href=\"?m:CommonType.Size!\">Size</a></h2>\n<code>func (c *CommonType) Size() int64</code>\n\n",name:"Size"}]},{html:"\n<h2><a class=\"black\" href=\"?t:\">type</a> <a href=\"?t:ComplexType!\">ComplexType</a></h2>\n<pre>type ComplexType struct {\n\tBasicType\n}</pre>\n<p>\nA ComplexType represents a complex floating point type.\n</p>\n\n",name:"ComplexType","methods":[]},{html:"\n<h2><a class=\"black\" href=\"?t:\">type</a> <a href=\"?t:Data!\">Data</a></h2>\n<pre>type Data struct {\n\t// contains unexported fields\n}</pre>\n<p>\nData represents the DWARF debugging information\nloaded from an executable file (for example, an ELF or Mach-O executable).\n</p>\n\n",name:"Data","methods":[{html:"\n<h2><a class=\"black\" href=\"?m:Data\">func (*Data)</a> <a href=\"?m:Data.Reader!\">Reader</a></h2>\n<code>func (d *Data) Reader() *Reader</code>\n<p>\nReader returns a new Reader for Data.\nThe reader is positioned at byte offset 0 in the DWARF &ldquo;info&rdquo; section.\n</p>\n\n",name:"Reader"},{html:"\n<h2><a class=\"black\" href=\"?m:Data\">func (*Data)</a> <a href=\"?m:Data.Type!\">Type</a></h2>\n<code>func (d *Data) Type(off Offset) (Type, os.Error)</code>\n\n",name:"Type"}]},{html:"\n<h2><a class=\"black\" href=\"?t:\">type</a> <a href=\"?t:DecodeError!\">DecodeError</a></h2>\n<pre>type DecodeError struct {\n\tName   string\n\tOffset Offset\n\tError  string\n}</pre>\n\n",name:"DecodeError","methods":[{html:"\n<h2><a class=\"black\" href=\"?m:DecodeError\">func (DecodeError)</a> <a href=\"?m:DecodeError.String!\">String</a></h2>\n<code>func (e DecodeError) String() string</code>\n\n",name:"String"}]},{html:"\n<h2><a class=\"black\" href=\"?t:\">type</a> <a href=\"?t:DotDotDotType!\">DotDotDotType</a></h2>\n<pre>type DotDotDotType struct {\n\tCommonType\n}</pre>\n<p>\nA DotDotDotType represents the variadic ... function parameter.\n</p>\n\n",name:"DotDotDotType","methods":[{html:"\n<h2><a class=\"black\" href=\"?m:DotDotDotType\">func (*DotDotDotType)</a> <a href=\"?m:DotDotDotType.String!\">String</a></h2>\n<code>func (t *DotDotDotType) String() string</code>\n\n",name:"String"}]},{html:"\n<h2><a class=\"black\" href=\"?t:\">type</a> <a href=\"?t:Entry!\">Entry</a></h2>\n<pre>type Entry struct {\n\tOffset   Offset // offset of Entry in DWARF info\n\tTag      Tag    // tag (kind of Entry)\n\tChildren bool   // whether Entry is followed by children\n\tField    []Field\n}</pre>\n<p>\nAn entry is a sequence of attribute/value pairs.\n</p>\n\n",name:"Entry","methods":[{html:"\n<h2><a class=\"black\" href=\"?m:Entry\">func (*Entry)</a> <a href=\"?m:Entry.Val!\">Val</a></h2>\n<code>func (e *Entry) Val(a Attr) interface{}</code>\n<p>\nVal returns the value associated with attribute Attr in Entry,\nor nil if there is no such attribute.\n</p>\n<p>\nA common idiom is to merge the check for nil return with\nthe check that the value has the expected dynamic type, as in:\n</p>\n<pre>v, ok := e.Val(AttrSibling).(int64);\n</pre>\n\n",name:"Val"}]},{html:"\n<h2><a class=\"black\" href=\"?t:\">type</a> <a href=\"?t:EnumType!\">EnumType</a></h2>\n<pre>type EnumType struct {\n\tCommonType\n\tEnumName string\n\tVal      []*EnumValue\n}</pre>\n<p>\nAn EnumType represents an enumerated type.\nThe only indication of its native integer type is its ByteSize\n(inside CommonType).\n</p>\n\n",name:"EnumType","methods":[{html:"\n<h2><a class=\"black\" href=\"?m:EnumType\">func (*EnumType)</a> <a href=\"?m:EnumType.String!\">String</a></h2>\n<code>func (t *EnumType) String() string</code>\n\n",name:"String"}]},{html:"\n<h2><a class=\"black\" href=\"?t:\">type</a> <a href=\"?t:EnumValue!\">EnumValue</a></h2>\n<pre>type EnumValue struct {\n\tName string\n\tVal  int64\n}</pre>\n<p>\nAn EnumValue represents a single enumeration value.\n</p>\n\n",name:"EnumValue","methods":[]},{html:"\n<h2><a class=\"black\" href=\"?t:\">type</a> <a href=\"?t:Field!\">Field</a></h2>\n<pre>type Field struct {\n\tAttr Attr\n\tVal  interface{}\n}</pre>\n<p>\nA Field is a single attribute/value pair in an Entry.\n</p>\n\n",name:"Field","methods":[]},{html:"\n<h2><a class=\"black\" href=\"?t:\">type</a> <a href=\"?t:FloatType!\">FloatType</a></h2>\n<pre>type FloatType struct {\n\tBasicType\n}</pre>\n<p>\nA FloatType represents a floating point type.\n</p>\n\n",name:"FloatType","methods":[]},{html:"\n<h2><a class=\"black\" href=\"?t:\">type</a> <a href=\"?t:FuncType!\">FuncType</a></h2>\n<pre>type FuncType struct {\n\tCommonType\n\tReturnType Type\n\tParamType  []Type\n}</pre>\n<p>\nA FuncType represents a function type.\n</p>\n\n",name:"FuncType","methods":[{html:"\n<h2><a class=\"black\" href=\"?m:FuncType\">func (*FuncType)</a> <a href=\"?m:FuncType.String!\">String</a></h2>\n<code>func (t *FuncType) String() string</code>\n\n",name:"String"}]},{html:"\n<h2><a class=\"black\" href=\"?t:\">type</a> <a href=\"?t:IntType!\">IntType</a></h2>\n<pre>type IntType struct {\n\tBasicType\n}</pre>\n<p>\nAn IntType represents a signed integer type.\n</p>\n\n",name:"IntType","methods":[]},{html:"\n<h2><a class=\"black\" href=\"?t:\">type</a> <a href=\"?t:Offset!\">Offset</a></h2>\n<pre>type Offset uint32</pre>\n<p>\nAn Offset represents the location of an Entry within the DWARF info.\n(See Reader.Seek.)\n</p>\n\n",name:"Offset","methods":[]},{html:"\n<h2><a class=\"black\" href=\"?t:\">type</a> <a href=\"?t:PtrType!\">PtrType</a></h2>\n<pre>type PtrType struct {\n\tCommonType\n\tType Type\n}</pre>\n<p>\nA PtrType represents a pointer type.\n</p>\n\n",name:"PtrType","methods":[{html:"\n<h2><a class=\"black\" href=\"?m:PtrType\">func (*PtrType)</a> <a href=\"?m:PtrType.String!\">String</a></h2>\n<code>func (t *PtrType) String() string</code>\n\n",name:"String"}]},{html:"\n<h2><a class=\"black\" href=\"?t:\">type</a> <a href=\"?t:QualType!\">QualType</a></h2>\n<pre>type QualType struct {\n\tCommonType\n\tQual string\n\tType Type\n}</pre>\n<p>\nA QualType represents a type that has the C/C++ &#34;const&#34;, &#34;restrict&#34;, or &#34;volatile&#34; qualifier.\n</p>\n\n",name:"QualType","methods":[{html:"\n<h2><a class=\"black\" href=\"?m:QualType\">func (*QualType)</a> <a href=\"?m:QualType.Size!\">Size</a></h2>\n<code>func (t *QualType) Size() int64</code>\n\n",name:"Size"},{html:"\n<h2><a class=\"black\" href=\"?m:QualType\">func (*QualType)</a> <a href=\"?m:QualType.String!\">String</a></h2>\n<code>func (t *QualType) String() string</code>\n\n",name:"String"}]},{html:"\n<h2><a class=\"black\" href=\"?t:\">type</a> <a href=\"?t:Reader!\">Reader</a></h2>\n<pre>type Reader struct {\n\t// contains unexported fields\n}</pre>\n<p>\nA Reader allows reading Entry structures from a DWARF &ldquo;info&rdquo; section.\nThe Entry structures are arranged in a tree.  The Reader&#39;s Next function\nreturn successive entries from a pre-order traversal of the tree.\nIf an entry has children, its Children field will be true, and the children\nfollow, terminated by an Entry with Tag 0.\n</p>\n\n",name:"Reader","methods":[{html:"\n<h2><a class=\"black\" href=\"?m:Reader\">func (*Reader)</a> <a href=\"?m:Reader.Next!\">Next</a></h2>\n<code>func (r *Reader) Next() (*Entry, os.Error)</code>\n<p>\nNext reads the next entry from the encoded entry stream.\nIt returns nil, nil when it reaches the end of the section.\nIt returns an error if the current offset is invalid or the data at the\noffset cannot be decoded as a valid Entry.\n</p>\n\n",name:"Next"},{html:"\n<h2><a class=\"black\" href=\"?m:Reader\">func (*Reader)</a> <a href=\"?m:Reader.Seek!\">Seek</a></h2>\n<code>func (r *Reader) Seek(off Offset)</code>\n<p>\nSeek positions the Reader at offset off in the encoded entry stream.\nOffset 0 can be used to denote the first entry.\n</p>\n\n",name:"Seek"},{html:"\n<h2><a class=\"black\" href=\"?m:Reader\">func (*Reader)</a> <a href=\"?m:Reader.SkipChildren!\">SkipChildren</a></h2>\n<code>func (r *Reader) SkipChildren()</code>\n<p>\nSkipChildren skips over the child entries associated with\nthe last Entry returned by Next.  If that Entry did not have\nchildren or Next has not been called, SkipChildren is a no-op.\n</p>\n\n",name:"SkipChildren"}]},{html:"\n<h2><a class=\"black\" href=\"?t:\">type</a> <a href=\"?t:StructField!\">StructField</a></h2>\n<pre>type StructField struct {\n\tName       string\n\tType       Type\n\tByteOffset int64\n\tByteSize   int64\n\tBitOffset  int64 // within the ByteSize bytes at ByteOffset\n\tBitSize    int64 // zero if not a bit field\n}</pre>\n<p>\nA StructField represents a field in a struct, union, or C++ class type.\n</p>\n\n",name:"StructField","methods":[]},{html:"\n<h2><a class=\"black\" href=\"?t:\">type</a> <a href=\"?t:StructType!\">StructType</a></h2>\n<pre>type StructType struct {\n\tCommonType\n\tStructName string\n\tKind       string // &#34;struct&#34;, &#34;union&#34;, or &#34;class&#34;.\n\tField      []*StructField\n\tIncomplete bool // if true, struct, union, class is declared but not defined\n}</pre>\n<p>\nA StructType represents a struct, union, or C++ class type.\n</p>\n\n",name:"StructType","methods":[{html:"\n<h2><a class=\"black\" href=\"?m:StructType\">func (*StructType)</a> <a href=\"?m:StructType.Defn!\">Defn</a></h2>\n<code>func (t *StructType) Defn() string</code>\n\n",name:"Defn"},{html:"\n<h2><a class=\"black\" href=\"?m:StructType\">func (*StructType)</a> <a href=\"?m:StructType.String!\">String</a></h2>\n<code>func (t *StructType) String() string</code>\n\n",name:"String"}]},{html:"\n<h2><a class=\"black\" href=\"?t:\">type</a> <a href=\"?t:Tag!\">Tag</a></h2>\n<pre>type Tag uint32</pre>\n<p>\nA Tag is the classification (the type) of an Entry.\n</p>\n\n",name:"Tag","methods":[{html:"\n<h2><a class=\"black\" href=\"?m:Tag\">func (Tag)</a> <a href=\"?m:Tag.GoString!\">GoString</a></h2>\n<code>func (t Tag) GoString() string</code>\n\n",name:"GoString"},{html:"\n<h2><a class=\"black\" href=\"?m:Tag\">func (Tag)</a> <a href=\"?m:Tag.String!\">String</a></h2>\n<code>func (t Tag) String() string</code>\n\n",name:"String"}]},{html:"\n<h2><a class=\"black\" href=\"?t:\">type</a> <a href=\"?t:Type!\">Type</a></h2>\n<pre>type Type interface {\n\tCommon() *CommonType\n\tString() string\n\tSize() int64\n}</pre>\n<p>\nA Type conventionally represents a pointer to any of the\nspecific Type structures (CharType, StructType, etc.).\n</p>\n\n",name:"Type","methods":[]},{html:"\n<h2><a class=\"black\" href=\"?t:\">type</a> <a href=\"?t:TypedefType!\">TypedefType</a></h2>\n<pre>type TypedefType struct {\n\tCommonType\n\tType Type\n}</pre>\n<p>\nA TypedefType represents a named type.\n</p>\n\n",name:"TypedefType","methods":[{html:"\n<h2><a class=\"black\" href=\"?m:TypedefType\">func (*TypedefType)</a> <a href=\"?m:TypedefType.Size!\">Size</a></h2>\n<code>func (t *TypedefType) Size() int64</code>\n\n",name:"Size"},{html:"\n<h2><a class=\"black\" href=\"?m:TypedefType\">func (*TypedefType)</a> <a href=\"?m:TypedefType.String!\">String</a></h2>\n<code>func (t *TypedefType) String() string</code>\n\n",name:"String"}]},{html:"\n<h2><a class=\"black\" href=\"?t:\">type</a> <a href=\"?t:UcharType!\">UcharType</a></h2>\n<pre>type UcharType struct {\n\tBasicType\n}</pre>\n<p>\nA UcharType represents an unsigned character type.\n</p>\n\n",name:"UcharType","methods":[]},{html:"\n<h2><a class=\"black\" href=\"?t:\">type</a> <a href=\"?t:UintType!\">UintType</a></h2>\n<pre>type UintType struct {\n\tBasicType\n}</pre>\n<p>\nA UintType represents an unsigned integer type.\n</p>\n\n",name:"UintType","methods":[]},{html:"\n<h2><a class=\"black\" href=\"?t:\">type</a> <a href=\"?t:VoidType!\">VoidType</a></h2>\n<pre>type VoidType struct {\n\tCommonType\n}</pre>\n<p>\nA VoidType represents the C void type.\n</p>\n\n",name:"VoidType","methods":[{html:"\n<h2><a class=\"black\" href=\"?m:VoidType\">func (*VoidType)</a> <a href=\"?m:VoidType.String!\">String</a></h2>\n<code>func (t *VoidType) String() string</code>\n\n",name:"String"}]}],funcs:[{html:"\n<h2><a class=\"black\" href=\"?f:\">func</a> <a href=\"?f:New!\">New</a></h2>\n<code>func New(abbrev, aranges, frame, info, line, pubnames, ranges, str []byte) (*Data, os.Error)</code>\n<p>\nNew returns a new Data object initialized from the given parameters.\nClients should typically use [TODO(rsc): method to be named later] instead of calling\nNew directly.\n</p>\n<p>\nThe []byte arguments are the data from the corresponding debug section\nin the object file; for example, for an ELF object, abbrev is the contents of\nthe &#34;.debug_abbrev&#34; section.\n</p>\n\n",name:"New"}],consts:[{html:"\n<h2><a class=\"black\" href=\"?c:\">const</a> <a href=\"?c:Attr!\">Attr</a></h2>\n<pre>const (\n\tAttrSibling        Attr = 0x01\n\tAttrLocation       Attr = 0x02\n\tAttrName           Attr = 0x03\n\tAttrOrdering       Attr = 0x09\n\tAttrByteSize       Attr = 0x0B\n\tAttrBitOffset      Attr = 0x0C\n\tAttrBitSize        Attr = 0x0D\n\tAttrStmtList       Attr = 0x10\n\tAttrLowpc          Attr = 0x11\n\tAttrHighpc         Attr = 0x12\n\tAttrLanguage       Attr = 0x13\n\tAttrDiscr          Attr = 0x15\n\tAttrDiscrValue     Attr = 0x16\n\tAttrVisibility     Attr = 0x17\n\tAttrImport         Attr = 0x18\n\tAttrStringLength   Attr = 0x19\n\tAttrCommonRef      Attr = 0x1A\n\tAttrCompDir        Attr = 0x1B\n\tAttrConstValue     Attr = 0x1C\n\tAttrContainingType Attr = 0x1D\n\tAttrDefaultValue   Attr = 0x1E\n\tAttrInline         Attr = 0x20\n\tAttrIsOptional     Attr = 0x21\n\tAttrLowerBound     Attr = 0x22\n\tAttrProducer       Attr = 0x25\n\tAttrPrototyped     Attr = 0x27\n\tAttrReturnAddr     Attr = 0x2A\n\tAttrStartScope     Attr = 0x2C\n\tAttrStrideSize     Attr = 0x2E\n\tAttrUpperBound     Attr = 0x2F\n\tAttrAbstractOrigin Attr = 0x31\n\tAttrAccessibility  Attr = 0x32\n\tAttrAddrClass      Attr = 0x33\n\tAttrArtificial     Attr = 0x34\n\tAttrBaseTypes      Attr = 0x35\n\tAttrCalling        Attr = 0x36\n\tAttrCount          Attr = 0x37\n\tAttrDataMemberLoc  Attr = 0x38\n\tAttrDeclColumn     Attr = 0x39\n\tAttrDeclFile       Attr = 0x3A\n\tAttrDeclLine       Attr = 0x3B\n\tAttrDeclaration    Attr = 0x3C\n\tAttrDiscrList      Attr = 0x3D\n\tAttrEncoding       Attr = 0x3E\n\tAttrExternal       Attr = 0x3F\n\tAttrFrameBase      Attr = 0x40\n\tAttrFriend         Attr = 0x41\n\tAttrIdentifierCase Attr = 0x42\n\tAttrMacroInfo      Attr = 0x43\n\tAttrNamelistItem   Attr = 0x44\n\tAttrPriority       Attr = 0x45\n\tAttrSegment        Attr = 0x46\n\tAttrSpecification  Attr = 0x47\n\tAttrStaticLink     Attr = 0x48\n\tAttrType           Attr = 0x49\n\tAttrUseLocation    Attr = 0x4A\n\tAttrVarParam       Attr = 0x4B\n\tAttrVirtuality     Attr = 0x4C\n\tAttrVtableElemLoc  Attr = 0x4D\n\tAttrAllocated      Attr = 0x4E\n\tAttrAssociated     Attr = 0x4F\n\tAttrDataLocation   Attr = 0x50\n\tAttrStride         Attr = 0x51\n\tAttrEntrypc        Attr = 0x52\n\tAttrUseUTF8        Attr = 0x53\n\tAttrExtension      Attr = 0x54\n\tAttrRanges         Attr = 0x55\n\tAttrTrampoline     Attr = 0x56\n\tAttrCallColumn     Attr = 0x57\n\tAttrCallFile       Attr = 0x58\n\tAttrCallLine       Attr = 0x59\n\tAttrDescription    Attr = 0x5A\n)</pre>\n\n",names:["AttrSibling","AttrLocation","AttrName","AttrOrdering","AttrByteSize","AttrBitOffset","AttrBitSize","AttrStmtList","AttrLowpc","AttrHighpc","AttrLanguage","AttrDiscr","AttrDiscrValue","AttrVisibility","AttrImport","AttrStringLength","AttrCommonRef","AttrCompDir","AttrConstValue","AttrContainingType","AttrDefaultValue","AttrInline","AttrIsOptional","AttrLowerBound","AttrProducer","AttrPrototyped","AttrReturnAddr","AttrStartScope","AttrStrideSize","AttrUpperBound","AttrAbstractOrigin","AttrAccessibility","AttrAddrClass","AttrArtificial","AttrBaseTypes","AttrCalling","AttrCount","AttrDataMemberLoc","AttrDeclColumn","AttrDeclFile","AttrDeclLine","AttrDeclaration","AttrDiscrList","AttrEncoding","AttrExternal","AttrFrameBase","AttrFriend","AttrIdentifierCase","AttrMacroInfo","AttrNamelistItem","AttrPriority","AttrSegment","AttrSpecification","AttrStaticLink","AttrType","AttrUseLocation","AttrVarParam","AttrVirtuality","AttrVtableElemLoc","AttrAllocated","AttrAssociated","AttrDataLocation","AttrStride","AttrEntrypc","AttrUseUTF8","AttrExtension","AttrRanges","AttrTrampoline","AttrCallColumn","AttrCallFile","AttrCallLine","AttrDescription"],type:"Attr"},{html:"\n<h2><a class=\"black\" href=\"?c:\">const</a> <a href=\"?c:Tag!\">Tag</a></h2>\n<pre>const (\n\tTagArrayType              Tag = 0x01\n\tTagClassType              Tag = 0x02\n\tTagEntryPoint             Tag = 0x03\n\tTagEnumerationType        Tag = 0x04\n\tTagFormalParameter        Tag = 0x05\n\tTagImportedDeclaration    Tag = 0x08\n\tTagLabel                  Tag = 0x0A\n\tTagLexDwarfBlock          Tag = 0x0B\n\tTagMember                 Tag = 0x0D\n\tTagPointerType            Tag = 0x0F\n\tTagReferenceType          Tag = 0x10\n\tTagCompileUnit            Tag = 0x11\n\tTagStringType             Tag = 0x12\n\tTagStructType             Tag = 0x13\n\tTagSubroutineType         Tag = 0x15\n\tTagTypedef                Tag = 0x16\n\tTagUnionType              Tag = 0x17\n\tTagUnspecifiedParameters  Tag = 0x18\n\tTagVariant                Tag = 0x19\n\tTagCommonDwarfBlock       Tag = 0x1A\n\tTagCommonInclusion        Tag = 0x1B\n\tTagInheritance            Tag = 0x1C\n\tTagInlinedSubroutine      Tag = 0x1D\n\tTagModule                 Tag = 0x1E\n\tTagPtrToMemberType        Tag = 0x1F\n\tTagSetType                Tag = 0x20\n\tTagSubrangeType           Tag = 0x21\n\tTagWithStmt               Tag = 0x22\n\tTagAccessDeclaration      Tag = 0x23\n\tTagBaseType               Tag = 0x24\n\tTagCatchDwarfBlock        Tag = 0x25\n\tTagConstType              Tag = 0x26\n\tTagConstant               Tag = 0x27\n\tTagEnumerator             Tag = 0x28\n\tTagFileType               Tag = 0x29\n\tTagFriend                 Tag = 0x2A\n\tTagNamelist               Tag = 0x2B\n\tTagNamelistItem           Tag = 0x2C\n\tTagPackedType             Tag = 0x2D\n\tTagSubprogram             Tag = 0x2E\n\tTagTemplateTypeParameter  Tag = 0x2F\n\tTagTemplateValueParameter Tag = 0x30\n\tTagThrownType             Tag = 0x31\n\tTagTryDwarfBlock          Tag = 0x32\n\tTagVariantPart            Tag = 0x33\n\tTagVariable               Tag = 0x34\n\tTagVolatileType           Tag = 0x35\n\tTagDwarfProcedure         Tag = 0x36\n\tTagRestrictType           Tag = 0x37\n\tTagInterfaceType          Tag = 0x38\n\tTagNamespace              Tag = 0x39\n\tTagImportedModule         Tag = 0x3A\n\tTagUnspecifiedType        Tag = 0x3B\n\tTagPartialUnit            Tag = 0x3C\n\tTagImportedUnit           Tag = 0x3D\n\tTagMutableType            Tag = 0x3E\n)</pre>\n\n",names:["TagArrayType","TagClassType","TagEntryPoint","TagEnumerationType","TagFormalParameter","TagImportedDeclaration","TagLabel","TagLexDwarfBlock","TagMember","TagPointerType","TagReferenceType","TagCompileUnit","TagStringType","TagStructType","TagSubroutineType","TagTypedef","TagUnionType","TagUnspecifiedParameters","TagVariant","TagCommonDwarfBlock","TagCommonInclusion","TagInheritance","TagInlinedSubroutine","TagModule","TagPtrToMemberType","TagSetType","TagSubrangeType","TagWithStmt","TagAccessDeclaration","TagBaseType","TagCatchDwarfBlock","TagConstType","TagConstant","TagEnumerator","TagFileType","TagFriend","TagNamelist","TagNamelistItem","TagPackedType","TagSubprogram","TagTemplateTypeParameter","TagTemplateValueParameter","TagThrownType","TagTryDwarfBlock","TagVariantPart","TagVariable","TagVolatileType","TagDwarfProcedure","TagRestrictType","TagInterfaceType","TagNamespace","TagImportedModule","TagUnspecifiedType","TagPartialUnit","TagImportedUnit","TagMutableType"],type:"Tag"}],vars:[]}