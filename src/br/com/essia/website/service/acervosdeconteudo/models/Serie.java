package br.com.essia.website.service.acervosdeconteudo.models;

public enum Serie
{
	ANO1("1� Ano"),
	ANO2("2� Ano");
	
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
