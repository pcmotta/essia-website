<section class="testimonial section-padding">
    <div class="container">
        <div class="row">
            <div class="col-lg-12">
                <div class="testimonial-carousel owl-carousel owl-theme">
                <% 
					var depoimentos = lum_xpath.getMaps("/renderData/controls/control/control/control[@id='list']/control[@id='list.tabulardata']/data/row"); 
					for (var d in depoimentos) {
						var depoimento = depoimentos[d]
				%>
						<div class="testimonial-item">
							<div class="testi-imgs">
								<img src="<%=depoimento.foto.href%>" alt="image">
							</div>
							<div class="testi-des">
								<p>“<%=depoimento.texto%>”</p>
							</div>
							<div class="testi-author">
								<h3><%=depoimento.nome%></h3>
								<h4><%=depoimento.funcao%></h4>
							</div>
						</div>
				<%
					}
				%>
                </div>
            </div>
        </div>
    </div>
</section>