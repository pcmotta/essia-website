package br.com.essia.website.service.acervosdeconteudo.models;

public enum Serie
{
	ANO1("1º Ano"),
	ANO2("2º Ano"),
	ANO3("3º Ano"),
	ANO4("4º Ano"),
	ANO5("5º Ano"),
	ANO6("6º Ano"),
	ANO7("7º Ano"),
	ANO8("8º Ano"),
	ANO9("9º Ano");
	
	String descricao;
	
	Serie( String descricao )
	{
		this.descricao = descricao;
	}
	
	public String getDescricao( )
	{
		return this.descricao;
	}
}
