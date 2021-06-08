${lum_beforeWrite('<script type="text/javascript" src="lumis-theme/br/com/essia/website/theme/essia-website/assets/js/validator/jquery.validate.js"></script>', 'jquery.validate.js')}
${lum_beforeWrite('<script type="text/javascript" src="lumis-theme/br/com/essia/website/theme/essia-website/assets/js/validator/messages_pt_BR.js"></script>', 'messages_pt_BR.js')}

<form action="javascript:;" id="form-contato" class="contact-inner">
	<div class="form-group">
		<input type="text" name="firstname" class="form-control" placeholder="Nome">
	</div>
	<div class="form-group">
		<input type="text" name="lastname" class="form-control" placeholder="Sobrenome">
	</div>
	<div class="form-group">
		<input type="email" name="email" class="form-control" placeholder="E-mail">
	</div>
	<div class="form-group">
		<textarea name="message" placeholder="Mensagem"></textarea>
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
			lastname: {required: true},
			email: {required: true, emailValidator: true},
			message: {required: true}
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
	var url = '${environment.properties['formulario.contato.url'][0]}'
	
	var nome = $('input[name="firstname"]').val()
	var sobrenome = $('input[name="lastname"]').val()
	var email = $('input[name="email"]').val()
	var mensagem = $('textarea[name="message"]').val()	
	
	var body =  {
		"fields": [
			{
				"name": 'firstname',
				"value": nome
			},
			{
				"name": 'lastname',
				"value": sobrenome
			},
			{
				"name": 'email',
				"value": email
			},
			{
				"name": 'message',
				"value": mensagem
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