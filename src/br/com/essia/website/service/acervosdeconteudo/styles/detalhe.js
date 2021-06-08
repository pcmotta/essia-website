${lum_beforeWrite('<script type="text/javascript" src="lumis/tool/jquery/jquery.js"></script>', 'jquery.js')}
<%
	var row = lum_xpath.selectNodes("/renderData/controls/control[@id='autoLayout']/control[@id='autoLayout.details']/data/row");
	var editora = lum_xpath.toMap(row[0]);
	var id = editora.id;
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
					<label for="search_box_titulo">BUSCA POR TÍTULO</label>
					<div class="input-group form_group">
						<input type="text" id="search_box_titulo" class="form-control" placeholder="Título">
						<div class="input-group-append">
							<button class="btn serch_btn" type="button">
								<i class="fa fa-search"></i>
							</button>
						</div>
					</div>
				</div>
			</div>
			<div class="col-lg-6 right-filet">
				<div class="blog-filter filter-right">
					<label for="search_box_autor">AUTOR</label>
					<div class="input-group form_group">
						<input type="text" id="search_box_autor" class="form-control" placeholder="Author">
						<div class="input-group-append">
							<button class="btn serch_btn" type="button">
								<i class="fa fa-search"></i>
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
		
		<div class="row">
			<%
			if (editora.exibeFiltroSegmento == 'true') {
				var segmentos = lum_xpath.selectNodes("/renderData/controls/control[@id='autoLayoutFields']/field[@id='segmento']/value/control[@id='segmento']/data/option");
			%>
			<div class="col-lg-3">
				<div class="select-fileter-1 blog-filter mt-30">
					<label for="select_1">SEGMENTO</label>
					<select class="form-select" id="select_segmento" aria-label="Default select example">
						<option selected value="">Todos</option>
						<%
							for (var seg in segmentos) {
								var segmento = lum_xpath.toMap(segmentos[seg])
								if (segmento.text !== '') {
						%>
						<option value="<%=segmento.value%>"><%=segmento.text%></option>
						<%
								}
							}
						%>
					</select>
				</div>
			</div>
			<%
			}
			
			if (editora.exibeFiltroSerie == 'true') {
				var series = lum_xpath.selectNodes("/renderData/controls/control[@id='autoLayoutFields']/field[@id='serie']/value/control[@id='serie']/data/option");
			%>
			<div class="col-lg-3">
				<div class="select-fileter-2 blog-filter mt-30">
					<label for="select_2">SÉRIE</label>
					<select class="form-select" id="select_serie" aria-label="Séries">
						<option selected value="">Todas</option>
						<%
							for (var s in series) {
								var serie = lum_xpath.toMap(series[s])
								if (serie.text !== '') {
						%>
							<option value="<%=serie.value%>"><%=serie.text%></option>
						<%
								}
							}
						%>
					</select>
				</div>
			</div>
			<%
			}
			
			if (editora.exibeFiltroDisciplina == 'true') {
				var disciplinas = lum_xpath.selectNodes("/renderData/controls/control[@id='autoLayoutFields']/field[@id='disciplina']/value/control[@id='disciplina']/data/option");
			%>
			<div class="col-lg-3">
				<div class="select-fileter-1 blog-filter mt-30">
					<label for="select_1">DISCIPLINA</label>
					<select class="form-select" id="select_disciplina" aria-label="Disciplinas">
						<option selected value="">Todas</option>
						<%
							for (var d in disciplinas) {
								var disciplina = lum_xpath.toMap(disciplinas[d])
								if (disciplina.text !== '') {
						%>
							<option value="<%=disciplina.value%>"><%=disciplina.text%></option>
						<%
								}
							}
						%>
					</select>
				</div>
			</div>
			<%
			}
			%>
			<div class="col-lg-3">
				<div class="select-fileter-1 button mt-30">
					<a href="javascript:;" class="btn_style_1" onclick="filtrar();">Filtrar</a>
				</div>
			</div>
		</div>
		
		<div class="row all-blog-items">
		</div>
		
		<div class="row">
			<div class="col-12 text-center blog-pagination">
				<nav>
					<ul class="pagination">
					</ul>
				</nav>
			</div>
		</div>
	</div>
	
	<script type="text/javascript">
	var perPage = 1;
	var livros = [];
	
	$(function() {
		livros = [];
		<%
			var rows = lum_xpath.selectNodes("/renderData/controls/control[@id='lum_list']/control[@id='lum_list.tabulardata']/data/row");
			var livros = [];
			for (var i in rows) {
				var row = lum_xpath.toMap(rows[i]);
				
				var titulo = row.titulo;
				var autor = row.autor;
				var capa = row.capa.href;
				var colecao = row.colecao;
				var editora = row.editora;
				var segmento = row.segmento;
				var disciplina = row.disciplina;
				var serie = row.serie;
			%>
				var livro = {
					"titulo": "<%=titulo%>",
					"autor": "<%=autor%>",
					"capa": {
						"href": "<%=capa%>"
				 	},
					"colecao": "<%=colecao%>",
					"editora": "<%=editora%>",
					"segmento": "<%=segmento%>",
					"disciplina": "<%=disciplina%>",
					"serie": "<%=serie%>"
				}
				livros.push(livro);
			<%
			}
		%>	
		
		initPagination(livros.length);
	});
	
	function filtrar () {
		var url = g_LumisRootPath + 'lumis/api/rest/acervos/lumgetdata/getLivros.json?acervoId=<%=id%>';
		var titulo = $('#search_box_titulo').val();
		var autor = $('#search_box_autor').val();
		var serie = $('#select_serie').val();
		var disciplina = $('#select_disciplina').val();
		var segmento = $('#select_segmento').val();
		
		if (titulo) {
			url = url + '&titulo=' + titulo;
		}
		
		if (autor) {
			url = url + '&autor=' + autor;
		}
		
		if (serie) {
			url = url + '&serie=' + serie;
		}
		
		if (disciplina) {
			url = url + '&disciplina=' + disciplina;
		}
		
		if (segmento) {
			url = url + '&segmento=' + segmento;
		}
		
		$.ajax({
			url: url,
			dataType: 'json',
			async: false,
			success: function(data) {
				livros = data.rows;
				initPagination(livros.length);
			}
		})
	}
		
	function initPagination (totalRows) {
		$('.pagination').paging(totalRows, {
			format: '< nncnn >',
			perpage: perPage,
			lapping: 0,
			page: 1,
			onSelect: function (page) {
				var indexInicio = (page - 1) * perPage;
				render(livros.slice(indexInicio, indexInicio + perPage));
			},
			onFormat: function (type) {
				switch (type) {
					case 'block':
						return '<li class="page-item ' + (this.page == this.value ? 'active' : '') + '"><a class="page-link " href="# ">' + this.value + '</a></li>';
					case 'next':
						return '<li class="page-item "><a class="page-link " href="# " aria-label="Next "><span aria-hidden="true ">»</span><span class="sr-only ">Próximo</span></a></li>';
					case 'prev':
						return '<li class="page-item "><a class="page-link " href="# " aria-label="Previous "><span aria-hidden="true ">«</span><span class="sr-only ">Anterior</span></a></li>';
				}
			}
		})
	} 
	
	function render (livros) {
		var html = '';
		
		for (var i in livros) {
			var livro = livros[i];
					
			html += '<div class="col-12 col-lg-3 col-md-6 col-sm-6">';
			html += '<div class="single-blog-item">';
			html += '<div class="blog-img">';
			html += '<img src="' + livro.capa.href + '" alt="blog-image"></div></div>';
			
			html += '<div class="blog-content"><h2>' + livro.titulo + '</h2>';
			
			if (livro.autor) {
				html += '<h5>Autor</h5><h3>' + livro.autor + '</h3>';
			}
			
			if (livro.colecao) {
				html += '<h5>Coleção</h5><h3>' + livro.colecao + '</h3>';
			}
			
			if (livro.editora) {
				html += '<h5>Editora</h5><h3>' + livro.editora + '</h3>';
			}
			
			if (livro.disciplina) {
				html += '<h6><span>▸&nbsp;&nbsp;</span>' + livro.disciplina + '</h6>';
			}
			
			if (livro.segmento) {
				html += '<h6><span>▸&nbsp;&nbsp;</span>' + livro.segmento + '</h6>';
			}
			
			if (livro.serie) {
				html += '<h6><span>▸&nbsp;&nbsp;</span>' + livro.serie + '</h6>';
			}
			
			html += '</div></div>';
		}
		
		$('.all-blog-items').html(html);
	}
	
	</script>
</section>