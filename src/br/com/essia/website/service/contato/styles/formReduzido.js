${lum_beforeWrite('<script type="text/javascript" src="lumis-theme/br/com/essia/website/theme/essia-website/assets/js/validator/jquery.validate.js"></script>', 'jquery.validate.js')}
${lum_beforeWrite('<script type="text/javascript" src="lumis-theme/br/com/essia/website/theme/essia-website/assets/js/validator/messages_pt_BR.js"></script>', 'messages_pt_BR.js')}

<form action="javascript:;" id="form-contato">
	<div class="form-group">
		<input type="text" name="firstname" class="form-control" placeholder="Nome">
	</div>
	<div class="form-group">
		<input type="email" name="email" class="form-control" placeholder="E-mail">
	</div>
	<div class="form-group">
		<input type="tel" name="phone" class="form-control" placeholder="Telefone" />
	</div>
	<div class="form-group">
		<input type="text" name="company" class="form-control" placeholder="Nome da Escola" />
	</div>
	<div class="form-group contact-selector">
		<select class="form-select" name="papel_na_escola" placeholder="Papel na Escola">
			<option value="" selected disabled>Papel na Escola</option>
			<option value="Mantenedor(a)">Mantenedor(a)</option>
			<option value="Diretor(a)">Diretor(a)</option>
			<option value="Coordenador(a)">Coordenador(a)</option>
			<option value="Professor(a)">Professor(a)</option>
			<option value="Tecnologia Educacional">Tecnologia Educacional</option>
			<option value="Outros">Outros</option>
		</select>
	</div>
	<button type="submit" class="btn my-cus_btn">Enviar</button>
</form>
<div id="form-response" style="display:none">
	<h1 id="form-response-text" style="color: white;text-align: center;background: rgba(0,0,0,0.3);">
		
	</h1>
</div>

<script>
$(function(){
	$('#form-contato').validate({
		rules: {
			firstname: {required: true},
			email: {required: true, emailValidator: true},
			phone: {required: true},
			company: {required: true},
			papel_na_escola: {required: true}
		},
		errorElement: 'label',
		submitHandler: submeter
	})
		
	$.validator.addMethod("emailValidator",
	    function(value, element)
	    {
	        return this.optional(element) || /([a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$)/.test(value);
		}, "Formato inválido"
	);
})
	
function submeter () {
	var url = '${environment.properties['formulario.reduzido.url'][0]}'
	
	var nome = $('input[name="firstname"]').val()
	var email = $('input[name="email"]').val()
	var telefone = $('input[name="phone"]').val()
	var escola = $('input[name="company"]').val()
	var papel = $('select[name="papel_na_escola"]').val()
	
	var body =  {
		"fields": [
			{
				"name": 'firstname',
				"value": nome
			},
			{
				"name": 'email',
				"value": email
			},
			{
				"name": "phone",
				"value": telefone
			},
			{
				"name": "company",
				"value": escola
			},
			{
				"name": "papel_na_escola",
				"value": papel
			}
		]
	}
	
	$.ajax({
		url: url,
		type: 'POST',
		dataType: 'json',
		contentType: 'application/json',
		data: JSON.stringify(body),
		success: function (data) {
			var message = data.inlineMessage
			$('#form-response-text').text(message)
			$('#form-response').show()
			$('#form-contato').hide()
		},
		error: function () {
			$('#form-response-text').text('Ocorreu um erro. Tente novamente mais tarde')
			$('#form-response').show()
			$('#form-contato').hide()
		}
	})
}

</script>