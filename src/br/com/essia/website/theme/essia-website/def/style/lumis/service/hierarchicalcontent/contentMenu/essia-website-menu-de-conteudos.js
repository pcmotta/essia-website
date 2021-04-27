<%
var rows = lum_xpath.getMaps("//data/row");
for(var i in rows)
{
	var row = rows[i];
%>
	<li><a href="<%=row.$href%>"><%=row.title%></a></li>
<%
}
%> 
<li class="test-btn"><a href="#">Quero testar</a></li> 
<li class="login-btn"><a href="#">Entrar</a></li> 
<li><a href="#"><i class="fa fa-search"></i></a></li>