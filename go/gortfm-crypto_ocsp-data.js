var gortfmData = {index:"index.html",html:"<p>\nThis package parses OCSP responses as specified in RFC 2560. OCSP responses\nare signed messages attesting to the validity of a certificate for a small\nperiod of time. This is used to manage revocation for X.509 certificates.\n</p>\n",name:"ocsp",types:[{html:"\n<h2><a class=\"black\" href=\"?t:\">type</a> <a href=\"?t:ParseError!\">ParseError</a></h2>\n<pre>type ParseError string</pre>\n<p>\nParseError results from an invalid OCSP response.\n</p>\n\n",name:"ParseError","methods":[{html:"\n<h2><a class=\"black\" href=\"?m:ParseError\">func (ParseError)</a> <a href=\"?m:ParseError.String!\">String</a></h2>\n<code>func (p ParseError) String() string</code>\n\n",name:"String"}]},{html:"\n<h2><a class=\"black\" href=\"?t:\">type</a> <a href=\"?t:Response!\">Response</a></h2>\n<pre>type Response struct {\n\t// Status is one of {Good, Revoked, Unknown, ServerFailed}\n\tStatus                                        int\n\tSerialNumber                                  []byte\n\tProducedAt, ThisUpdate, NextUpdate, RevokedAt *time.Time\n\tRevocationReason                              int\n\tCertificate                                   *x509.Certificate\n}</pre>\n<p>\nResponse represents an OCSP response. See RFC 2560.\n</p>\n\n",name:"Response","methods":[]}],funcs:[{html:"\n<h2><a class=\"black\" href=\"?f:\">func</a> <a href=\"?f:ParseResponse!\">ParseResponse</a></h2>\n<code>func ParseResponse(bytes []byte) (*Response, os.Error)</code>\n<p>\nParseResponse parses an OCSP response in DER form. It only supports\nresponses for a single certificate and only those using RSA signatures.\nNon-RSA responses will result in an x509.UnsupportedAlgorithmError.\nSignature errors or parse failures will result in a ParseError.\n</p>\n\n",name:"ParseResponse"}],consts:[{html:"\n<h2><a class=\"black\" href=\"?c:\">const</a> <a href=\"?c:Good!\"><em>group</em></a></h2>\n<pre>const (\n\t// Good means that the certificate is valid.\n\tGood = iota\n\t// Revoked means that the certificate has been deliberately revoked.\n\tRevoked = iota\n\t// Unknown means that the OCSP responder doesn&#39;t know about the certificate.\n\tUnknown = iota\n\t// ServerFailed means that the OCSP responder failed to process the request.\n\tServerFailed = iota\n)</pre>\n\n",names:["Good","Revoked","Unknown","ServerFailed"],type:""}],vars:[]}