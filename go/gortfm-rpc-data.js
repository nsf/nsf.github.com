var gortfmData = {index:"index.html",html:"<p>\nPackage rpc provides access to the exported methods of an object across a\nnetwork or other I/O connection.  A server registers an object, making it visible\nas a service with the name of the type of the object.  After registration, exported\nmethods of the object will be accessible remotely.  A server may register multiple\nobjects (services) of different types but it is an error to register multiple\nobjects of the same type.\n</p>\n<p>\nOnly methods that satisfy these criteria will be made available for remote access;\nother methods will be ignored:\n</p>\n<pre>- the method name is exported, that is, begins with an upper case letter.\n- the method receiver is exported or local (defined in the package\n  registering the service).\n- the method has two arguments, both exported or local types.\n- the method&#39;s second argument is a pointer.\n- the method has return type os.Error.\n</pre>\n<p>\nThe method&#39;s first argument represents the arguments provided by the caller; the\nsecond argument represents the result parameters to be returned to the caller.\nThe method&#39;s return value, if non-nil, is passed back as a string that the client\nsees as an os.ErrorString.\n</p>\n<p>\nThe server may handle requests on a single connection by calling ServeConn.  More\ntypically it will create a network listener and call Accept or, for an HTTP\nlistener, HandleHTTP and http.Serve.\n</p>\n<p>\nA client wishing to use the service establishes a connection and then invokes\nNewClient on the connection.  The convenience function Dial (DialHTTP) performs\nboth steps for a raw network connection (an HTTP connection).  The resulting\nClient object has two methods, Call and Go, that specify the service and method to\ncall, a pointer containing the arguments, and a pointer to receive the result\nparameters.\n</p>\n<p>\nCall waits for the remote call to complete; Go launches the call asynchronously\nand returns a channel that will signal completion.\n</p>\n<p>\nPackage &#34;gob&#34; is used to transport the data.\n</p>\n<p>\nHere is a simple example.  A server wishes to export an object of type Arith:\n</p>\n<pre>package server\n\ntype Args struct {\n\tA, B int\n}\n\ntype Quotient struct {\n\tQuo, Rem int\n}\n\ntype Arith int\n\nfunc (t *Arith) Multiply(args *Args, reply *int) os.Error {\n\t*reply = args.A * args.B\n\treturn nil\n}\n\nfunc (t *Arith) Divide(args *Args, quo *Quotient) os.Error {\n\tif args.B == 0 {\n\t\treturn os.ErrorString(&#34;divide by zero&#34;)\n\t}\n\tquo.Quo = args.A / args.B\n\tquo.Rem = args.A % args.B\n\treturn nil\n}\n</pre>\n<p>\nThe server calls (for HTTP service):\n</p>\n<pre>arith := new(Arith)\nrpc.Register(arith)\nrpc.HandleHTTP()\nl, e := net.Listen(&#34;tcp&#34;, &#34;:1234&#34;)\nif e != nil {\n\tlog.Fatal(&#34;listen error:&#34;, e)\n}\ngo http.Serve(l, nil)\n</pre>\n<p>\nAt this point, clients can see a service &#34;Arith&#34; with methods &#34;Arith.Multiply&#34; and\n&#34;Arith.Divide&#34;.  To invoke one, a client first dials the server:\n</p>\n<pre>client, err := rpc.DialHTTP(&#34;tcp&#34;, serverAddress + &#34;:1234&#34;)\nif err != nil {\n\tlog.Fatal(&#34;dialing:&#34;, err)\n}\n</pre>\n<p>\nThen it can make a remote call:\n</p>\n<pre>// Synchronous call\nargs := &amp;server.Args{7,8}\nvar reply int\nerr = client.Call(&#34;Arith.Multiply&#34;, args, &amp;reply)\nif err != nil {\n\tlog.Fatal(&#34;arith error:&#34;, err)\n}\nfmt.Printf(&#34;Arith: %d*%d=%d&#34;, args.A, args.B, *reply)\n</pre>\n<p>\nor\n</p>\n<pre>// Asynchronous call\nquotient := new(Quotient)\ndivCall := client.Go(&#34;Arith.Divide&#34;, args, &amp;quotient, nil)\nreplyCall := &lt;-divCall.Done\t// will be equal to divCall\n// check errors, print, etc.\n</pre>\n<p>\nA server implementation will often provide a simple, type-safe wrapper for the\nclient.\n</p>\n",name:"rpc",types:[{html:"\n<h2><a class=\"black\" href=\"?t:\">type</a> <a href=\"?t:Call!\">Call</a></h2>\n<pre>type Call struct {\n\tServiceMethod string      // The name of the service and method to call.\n\tArgs          interface{} // The argument to the function (*struct).\n\tReply         interface{} // The reply from the function (*struct).\n\tError         os.Error    // After completion, the error status.\n\tDone          chan *Call  // Strobes when call is complete; value is the error status.\n\t// contains filtered or unexported fields\n}</pre>\n<p>\nCall represents an active RPC.\n</p>\n\n",name:"Call","methods":[]},{html:"\n<h2><a class=\"black\" href=\"?t:\">type</a> <a href=\"?t:Client!\">Client</a></h2>\n<pre>type Client struct {\n\t// contains filtered or unexported fields\n}</pre>\n<p>\nClient represents an RPC Client.\nThere may be multiple outstanding Calls associated\nwith a single Client.\n</p>\n\n",name:"Client","methods":[{html:"\n<h2><a class=\"black\" href=\"?m:Client\">func (*Client)</a> <a href=\"?m:Client.Call!\">Call</a></h2>\n<code>func (client *Client) Call(serviceMethod string, args interface{}, reply interface{}) os.Error</code>\n<p>\nCall invokes the named function, waits for it to complete, and returns its error status.\n</p>\n\n",name:"Call"},{html:"\n<h2><a class=\"black\" href=\"?m:Client\">func (*Client)</a> <a href=\"?m:Client.Close!\">Close</a></h2>\n<code>func (client *Client) Close() os.Error</code>\n\n",name:"Close"},{html:"\n<h2><a class=\"black\" href=\"?m:Client\">func (*Client)</a> <a href=\"?m:Client.Go!\">Go</a></h2>\n<code>func (client *Client) Go(serviceMethod string, args interface{}, reply interface{}, done chan *Call) *Call</code>\n<p>\nGo invokes the function asynchronously.  It returns the Call structure representing\nthe invocation.  The done channel will signal when the call is complete by returning\nthe same Call object.  If done is nil, Go will allocate a new channel.\nIf non-nil, done must be buffered or Go will deliberately crash.\n</p>\n\n",name:"Go"}]},{html:"\n<h2><a class=\"black\" href=\"?t:\">type</a> <a href=\"?t:ClientCodec!\">ClientCodec</a></h2>\n<pre>type ClientCodec interface {\n\tWriteRequest(*Request, interface{}) os.Error\n\tReadResponseHeader(*Response) os.Error\n\tReadResponseBody(interface{}) os.Error\n\n\tClose() os.Error\n}</pre>\n<p>\nA ClientCodec implements writing of RPC requests and\nreading of RPC responses for the client side of an RPC session.\nThe client calls WriteRequest to write a request to the connection\nand calls ReadResponseHeader and ReadResponseBody in pairs\nto read responses.  The client calls Close when finished with the\nconnection. ReadResponseBody may be called with a nil\nargument to force the body of the response to be read and then\ndiscarded.\n</p>\n\n",name:"ClientCodec","methods":[]},{html:"\n<h2><a class=\"black\" href=\"?t:\">type</a> <a href=\"?t:InvalidRequest!\">InvalidRequest</a></h2>\n<pre>type InvalidRequest struct{}</pre>\n<p>\nA value sent as a placeholder for the response when the server receives an invalid request.\n</p>\n\n",name:"InvalidRequest","methods":[]},{html:"\n<h2><a class=\"black\" href=\"?t:\">type</a> <a href=\"?t:Request!\">Request</a></h2>\n<pre>type Request struct {\n\tServiceMethod string // format: &#34;Service.Method&#34;\n\tSeq           uint64 // sequence number chosen by client\n\t// contains filtered or unexported fields\n}</pre>\n<p>\nRequest is a header written before every RPC call.  It is used internally\nbut documented here as an aid to debugging, such as when analyzing\nnetwork traffic.\n</p>\n\n",name:"Request","methods":[]},{html:"\n<h2><a class=\"black\" href=\"?t:\">type</a> <a href=\"?t:Response!\">Response</a></h2>\n<pre>type Response struct {\n\tServiceMethod string // echoes that of the Request\n\tSeq           uint64 // echoes that of the request\n\tError         string // error, if any.\n\t// contains filtered or unexported fields\n}</pre>\n<p>\nResponse is a header written before every RPC return.  It is used internally\nbut documented here as an aid to debugging, such as when analyzing\nnetwork traffic.\n</p>\n\n",name:"Response","methods":[]},{html:"\n<h2><a class=\"black\" href=\"?t:\">type</a> <a href=\"?t:Server!\">Server</a></h2>\n<pre>type Server struct {\n\tsync.Mutex // protects the serviceMap\n\t// contains filtered or unexported fields\n}</pre>\n<p>\nServer represents an RPC Server.\n</p>\n\n",name:"Server","methods":[{html:"\n<h2><a class=\"black\" href=\"?m:Server\">func (*Server)</a> <a href=\"?m:Server.Accept!\">Accept</a></h2>\n<code>func (server *Server) Accept(lis net.Listener)</code>\n<p>\nAccept accepts connections on the listener and serves requests\nfor each incoming connection.  Accept blocks; the caller typically\ninvokes it in a go statement.\n</p>\n\n",name:"Accept"},{html:"\n<h2><a class=\"black\" href=\"?m:Server\">func (*Server)</a> <a href=\"?m:Server.HandleHTTP!\">HandleHTTP</a></h2>\n<code>func (server *Server) HandleHTTP(rpcPath, debugPath string)</code>\n<p>\nHandleHTTP registers an HTTP handler for RPC messages on rpcPath,\nand a debugging handler on debugPath.\nIt is still necessary to invoke http.Serve(), typically in a go statement.\n</p>\n\n",name:"HandleHTTP"},{html:"\n<h2><a class=\"black\" href=\"?m:Server\">func (*Server)</a> <a href=\"?m:Server.Register!\">Register</a></h2>\n<code>func (server *Server) Register(rcvr interface{}) os.Error</code>\n<p>\nRegister publishes in the server the set of methods of the\nreceiver value that satisfy the following conditions:\n</p>\n<pre>- exported method\n- two arguments, both pointers to exported structs\n- one return value, of type os.Error\n</pre>\n<p>\nIt returns an error if the receiver is not an exported type or has no\nsuitable methods.\nThe client accesses each method using a string of the form &#34;Type.Method&#34;,\nwhere Type is the receiver&#39;s concrete type.\n</p>\n\n",name:"Register"},{html:"\n<h2><a class=\"black\" href=\"?m:Server\">func (*Server)</a> <a href=\"?m:Server.RegisterName!\">RegisterName</a></h2>\n<code>func (server *Server) RegisterName(name string, rcvr interface{}) os.Error</code>\n<p>\nRegisterName is like Register but uses the provided name for the type\ninstead of the receiver&#39;s concrete type.\n</p>\n\n",name:"RegisterName"},{html:"\n<h2><a class=\"black\" href=\"?m:Server\">func (*Server)</a> <a href=\"?m:Server.ServeCodec!\">ServeCodec</a></h2>\n<code>func (server *Server) ServeCodec(codec ServerCodec)</code>\n<p>\nServeCodec is like ServeConn but uses the specified codec to\ndecode requests and encode responses.\n</p>\n\n",name:"ServeCodec"},{html:"\n<h2><a class=\"black\" href=\"?m:Server\">func (*Server)</a> <a href=\"?m:Server.ServeConn!\">ServeConn</a></h2>\n<code>func (server *Server) ServeConn(conn io.ReadWriteCloser)</code>\n<p>\nServeConn runs the server on a single connection.\nServeConn blocks, serving the connection until the client hangs up.\nThe caller typically invokes ServeConn in a go statement.\nServeConn uses the gob wire format (see package gob) on the\nconnection.  To use an alternate codec, use ServeCodec.\n</p>\n\n",name:"ServeConn"},{html:"\n<h2><a class=\"black\" href=\"?m:Server\">func (*Server)</a> <a href=\"?m:Server.ServeHTTP!\">ServeHTTP</a></h2>\n<code>func (server *Server) ServeHTTP(w http.ResponseWriter, req *http.Request)</code>\n<p>\nServeHTTP implements an http.Handler that answers RPC requests.\n</p>\n\n",name:"ServeHTTP"}]},{html:"\n<h2><a class=\"black\" href=\"?t:\">type</a> <a href=\"?t:ServerCodec!\">ServerCodec</a></h2>\n<pre>type ServerCodec interface {\n\tReadRequestHeader(*Request) os.Error\n\tReadRequestBody(interface{}) os.Error\n\tWriteResponse(*Response, interface{}) os.Error\n\n\tClose() os.Error\n}</pre>\n<p>\nA ServerCodec implements reading of RPC requests and writing of\nRPC responses for the server side of an RPC session.\nThe server calls ReadRequestHeader and ReadRequestBody in pairs\nto read requests from the connection, and it calls WriteResponse to\nwrite a response back.  The server calls Close when finished with the\nconnection. ReadRequestBody may be called with a nil\nargument to force the body of the request to be read and discarded.\n</p>\n\n",name:"ServerCodec","methods":[]},{html:"\n<h2><a class=\"black\" href=\"?t:\">type</a> <a href=\"?t:ServerError!\">ServerError</a></h2>\n<pre>type ServerError string</pre>\n<p>\nServerError represents an error that has been returned from\nthe remote side of the RPC connection.\n</p>\n\n",name:"ServerError","methods":[{html:"\n<h2><a class=\"black\" href=\"?m:ServerError\">func (ServerError)</a> <a href=\"?m:ServerError.String!\">String</a></h2>\n<code>func (e ServerError) String() string</code>\n\n",name:"String"}]}],funcs:[{html:"\n<h2><a class=\"black\" href=\"?f:\">func</a> <a href=\"?f:Accept!\">Accept</a></h2>\n<code>func Accept(lis net.Listener)</code>\n<p>\nAccept accepts connections on the listener and serves requests\nto DefaultServer for each incoming connection.\nAccept blocks; the caller typically invokes it in a go statement.\n</p>\n\n",name:"Accept"},{html:"\n<h2><a class=\"black\" href=\"?f:\">func</a> <a href=\"?f:Dial!\">Dial</a></h2>\n<code>func Dial(network, address string) (*Client, os.Error)</code>\n<p>\nDial connects to an RPC server at the specified network address.\n</p>\n\n",name:"Dial"},{html:"\n<h2><a class=\"black\" href=\"?f:\">func</a> <a href=\"?f:DialHTTP!\">DialHTTP</a></h2>\n<code>func DialHTTP(network, address string) (*Client, os.Error)</code>\n<p>\nDialHTTP connects to an HTTP RPC server at the specified network address\nlistening on the default HTTP RPC path.\n</p>\n\n",name:"DialHTTP"},{html:"\n<h2><a class=\"black\" href=\"?f:\">func</a> <a href=\"?f:DialHTTPPath!\">DialHTTPPath</a></h2>\n<code>func DialHTTPPath(network, address, path string) (*Client, os.Error)</code>\n<p>\nDialHTTPPath connects to an HTTP RPC server\nat the specified network address and path.\n</p>\n\n",name:"DialHTTPPath"},{html:"\n<h2><a class=\"black\" href=\"?f:\">func</a> <a href=\"?f:HandleHTTP!\">HandleHTTP</a></h2>\n<code>func HandleHTTP()</code>\n<p>\nHandleHTTP registers an HTTP handler for RPC messages to DefaultServer\non DefaultRPCPath and a debugging handler on DefaultDebugPath.\nIt is still necessary to invoke http.Serve(), typically in a go statement.\n</p>\n\n",name:"HandleHTTP"},{html:"\n<h2><a class=\"black\" href=\"?f:\">func</a> <a href=\"?f:NewClient!\">NewClient</a></h2>\n<code>func NewClient(conn io.ReadWriteCloser) *Client</code>\n<p>\nNewClient returns a new Client to handle requests to the\nset of services at the other end of the connection.\nIt adds a buffer to the write side of the connection so\nthe header and payload are sent as a unit.\n</p>\n\n",name:"NewClient"},{html:"\n<h2><a class=\"black\" href=\"?f:\">func</a> <a href=\"?f:NewClientWithCodec!\">NewClientWithCodec</a></h2>\n<code>func NewClientWithCodec(codec ClientCodec) *Client</code>\n<p>\nNewClientWithCodec is like NewClient but uses the specified\ncodec to encode requests and decode responses.\n</p>\n\n",name:"NewClientWithCodec"},{html:"\n<h2><a class=\"black\" href=\"?f:\">func</a> <a href=\"?f:NewServer!\">NewServer</a></h2>\n<code>func NewServer() *Server</code>\n<p>\nNewServer returns a new Server.\n</p>\n\n",name:"NewServer"},{html:"\n<h2><a class=\"black\" href=\"?f:\">func</a> <a href=\"?f:Register!\">Register</a></h2>\n<code>func Register(rcvr interface{}) os.Error</code>\n<p>\nRegister publishes the receiver&#39;s methods in the DefaultServer.\n</p>\n\n",name:"Register"},{html:"\n<h2><a class=\"black\" href=\"?f:\">func</a> <a href=\"?f:RegisterName!\">RegisterName</a></h2>\n<code>func RegisterName(name string, rcvr interface{}) os.Error</code>\n<p>\nRegisterName is like Register but uses the provided name for the type\ninstead of the receiver&#39;s concrete type.\n</p>\n\n",name:"RegisterName"},{html:"\n<h2><a class=\"black\" href=\"?f:\">func</a> <a href=\"?f:ServeCodec!\">ServeCodec</a></h2>\n<code>func ServeCodec(codec ServerCodec)</code>\n<p>\nServeCodec is like ServeConn but uses the specified codec to\ndecode requests and encode responses.\n</p>\n\n",name:"ServeCodec"},{html:"\n<h2><a class=\"black\" href=\"?f:\">func</a> <a href=\"?f:ServeConn!\">ServeConn</a></h2>\n<code>func ServeConn(conn io.ReadWriteCloser)</code>\n<p>\nServeConn runs the DefaultServer on a single connection.\nServeConn blocks, serving the connection until the client hangs up.\nThe caller typically invokes ServeConn in a go statement.\nServeConn uses the gob wire format (see package gob) on the\nconnection.  To use an alternate codec, use ServeCodec.\n</p>\n\n",name:"ServeConn"}],consts:[{html:"\n<h2><a class=\"black\" href=\"?c:\">const</a> <a href=\"?c:ErrShutdown!\">ErrShutdown</a></h2>\n<pre>const ErrShutdown = os.ErrorString(&#34;connection is shut down&#34;)</pre>\n\n",names:["ErrShutdown"],type:""},{html:"\n<h2><a class=\"black\" href=\"?c:\">const</a> <a href=\"?c:DefaultRPCPath!\"><em>group</em></a></h2>\n<pre>const (\n\t// Defaults used by HandleHTTP\n\tDefaultRPCPath   = &#34;/_goRPC_&#34;\n\tDefaultDebugPath = &#34;/debug/rpc&#34;\n)</pre>\n\n",names:["DefaultRPCPath","DefaultDebugPath"],type:""}],vars:[{html:"\n<h2><a class=\"black\" href=\"?v:\">var</a> <a href=\"?v:DefaultServer!\">DefaultServer</a></h2>\n<pre>var DefaultServer = NewServer()</pre>\n<p>\nDefaultServer is the default instance of *Server.\n</p>\n\n",names:["DefaultServer"],type:""}]}