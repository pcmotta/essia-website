<ul> 
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
</ul>