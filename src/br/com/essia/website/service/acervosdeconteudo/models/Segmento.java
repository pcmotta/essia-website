package br.com.essia.website.service.acervosdeconteudo.models;

public enum Segmento
{
	FUNDAMENTALI("Ensino Fundamental I"),
	FUNDAMENTALII("Ensino Fundamental II"),
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
