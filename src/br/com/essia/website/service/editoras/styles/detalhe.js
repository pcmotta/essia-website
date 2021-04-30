<%
	var row = lum_xpath.selectNodes("/renderData/controls/control[@id='autoLayout']/control[@id='autoLayout.details']/data/row");
	var editora = lum_xpath.toMap(row[0]);
%>
<section class="banner_area blog-banner" style="background: url('<%=editora.bannerDetalhe.href%>')no-repeat scroll  0 0 / cover">
	<div class="container">
		<div class="row">
			<div class="col-lg-12">
				<div class="banner blog-bnr">
					<img src="<%=editora.logoDetalhe.href%>" alt="image">
				</div>
			</div>
		</div>
	</div>
</section>

<section class="blog-main-area section-padding">
	<div class="container">

		<div class="row">
			<div class="col-lg-12">
				<div class="blog-main-title">
					<p><%=editora.textoDetalhe%></p>
				</div>
			</div>
		</div>
		
		<div class="row">
			<div class="col-lg-6">
				<div class="blog-filter filter-left">
					<label for="search_box">BUSCA POR TÍTULO</label>
					<div class="input-group form_group">
						<input type="text" id="search_box" class="form-control" placeholder="Título">
						<div class="input-group-append">
							<button class="btn serch_btn" type="button">
								<i class="fa fa-search"></i>
							</button>
						</div>
					</div>
					<div class="blog-select-filete">
						<div class="select-fileter-1">
							<label for="select_1">SEGMENTO</label>
							<select class="form-select" id="select_1" aria-label="Default select example">
								<option selected>Todos</option>
								<option value="1">Ensino Fundamental 1</option>
								<option value="2">Ensino Fundamental 2</option>
								<option value="3">Ensino Médio</option>
							</select>
						</div>
						<div class="select-fileter-2">
							<label for="select_2">SÉRIE</label>
							<select class="form-select" id="select_2" aria-label="Default select example">
								<option selected>Todas</option>
								<option value="1">1º Ano</option>
								<option value="2">2º Ano</option>
							</select>
						</div>
					</div>
				</div>
			</div>
			<div class="col-lg-6 right-filet">
				<div class="blog-filter filter-right">
					<label for="search_box">AUTOR</label>
					<div class="input-group form_group">
						<input type="text" id="search_box" class="form-control" placeholder="Author">
						<div class="input-group-append">
							<button class="btn serch_btn" type="button">
								<i class="fa fa-search"></i>
							</button>
						</div>
					</div>
					<div class="blog-select-filete">
						<div class="select-fileter-1">
							<label for="select_1">DISCIPLINA</label>
							<select class="form-select" id="select_1" aria-label="Default select example">
								<option selected>Todas</option>
								<option value="1">Geografia</option>
								<option value="2">História</option>
							</select>
						</div>
						<div class="select-fileter-1 button">
							<a href="#" class="btn_style_1">Filtrar</a>
						</div>
					</div>
				</div>
			</div>
		</div>
		
		<div class="row all-blog-items">
			<%
				var livros = lum_xpath.selectNodes("/renderData/controls/control[@id='lum_list']/control[@id='lum_list.tabulardata']/data/row");
				for( var index in livros ) {
					var livro = lum_xpath.toMap(livros[index]);
			%>
			
			<!-- single-blog items -->
			<div class="col-12 col-lg-3 col-md-6 col-sm-6">
				<div class="single-blog-item">
					<div class="blog-img">
						<img src="<%=livro.capa.href%>" alt="blog-image">
					</div>
				</div>
				<div class="blog-content">
					<h2><%=livro.titulo%></h2>
					
					<%
					if (livro.autor) {
					%>
					<h5>Autor</h5>
					<h3><%=livro.autor%></h3>
					<%
					}
					
					if (livro.colecao) {
					%>
					<h5>Coleção</h5>
					<h4><%=livro.colecao%></h4>
					<%
					}
					
					if (livro.disciplina) {
					%>
					<h6><span>▸&nbsp;&nbsp;</span><%=livro.disciplina%></h6>
					<%
					}
					
					if (livro.segmento) {
					%>
					<h6><span>▸&nbsp;&nbsp;</span><%=livro.segmento%></h6>
					<%
					}
					
					if (livro.serie) {
					%>
					<h6><span>▸&nbsp;&nbsp;</span><%=livro.serie%></h6>
					<%
					}
					%>
				</div>
			</div>
			
			<%
			}
			%>
		</div>
	</div>
</section>