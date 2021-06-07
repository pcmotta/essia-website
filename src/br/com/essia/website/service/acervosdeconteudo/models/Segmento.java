package br.com.essia.website.service.acervosdeconteudo.models;

public enum Segmento
{
	FUNDAMENTAL1("Ensino Fundamental I"),
	FUNDAMENTAL2("Ensino Fundamental II"),
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
