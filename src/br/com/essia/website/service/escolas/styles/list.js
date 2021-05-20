<div class="brand-carousel owl-carousel owl-theme">
<% 
	var escolas = lum_xpath.getMaps("/renderData/controls/control/control/control[@id='list']/control[@id='list.tabulardata']/data/row"); 
	for (var e in escolas) {
		var escola = escolas[e]
%>
		<div class="brand-item">
			<div class="brand-logo">
				<img src="<%=escola.logo.href%>" alt="<%=escola.nome%>" />
			</div>
			<div class="brand-inner-text">
				<p><%=escola.cidade%> – <%=escola.estado%></p>
			</div>
		</div>
<%
	}
%>
</div>
