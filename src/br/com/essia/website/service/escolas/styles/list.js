<section class="encolas-area section-padding">
    <div class="container">
        <div class="row">
            <div class="col-lg-12">
                <div class="encolas-heading-title">
                	<p>Conheça todas as instituições de ensino que tornaram as suas rotinas mais digitais e seu aprendizado mais interativo com a Essia</p>
                </div>
            </div>
        </div>
		<div class="row brand-log">
			<div class="col-lg-12 brand-logo-">
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
			</div>
		</div>
    </div>
</section>