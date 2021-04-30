<% 
	var editoras = lum_xpath.selectNodes("//data/row"); 
	for (var e in editoras) {
		var editora = lum_xpath.toMap(editoras[e])
%>
	<section class="conteudo-area conteudo-1 section-padding" style="background: <%=editora.cor%>">
    	<div class="container">
	        <div class="row">
                <div class="col-lg-6">
                    <div class="conteudo-img-bg">
                        <div class="cont-brand-logo">
                            <img src="<%=editora.logo.href%>" alt="image" />
                        </div>
                        
                        <%
                        	if(editora.imagemSecundaria) {
                        %>
	                        <div class="cont-fiexd-img">
	                            <img src="<%=editora.imagemSecundaria.href%>" alt="image" />
	                        </div>
                        <%
                        	}
                        %>
                    </div>
                </div>
                <div class="col-lg-6">
                    <div class="conteudo-content">
                        <div class="conteudo-tex">
                            <h2 style="color: <%=editora.corTexto%>"><%=editora.texto%></h2>
                            <div class="button">
                                <a href="<%=editora.$href%>&editora=<%=encodeURIComponent(editora.nome)%>" class="btn_style_1">Quero conhecer o conteúdo</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
<%
	}
%>