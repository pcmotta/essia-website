package br.com.essia.website.service.acervosdeconteudo.models;

public enum Serie
{
	ANO1("1º Ano"),
	ANO2("2º Ano");
	
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
