package br.com.essia.website.service.acervosdeconteudo.models;

public enum Segmento 
{
	FUNDAMENTAL1("Ensino Fundamental 1"),
	FUNDAMENTAL2("Ensino Fundamental 2"),
	MEDIO("Ensino Médio");
	
	String descricao;
	
	Segmento( String descricao )
	{
		this.descricao = descricao;
	}
	
	public String getDescricao( )
	{
		return descricao;
	}
}
