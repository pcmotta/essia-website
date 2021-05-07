package br.com.essia.website.service.acervosdeconteudo.models;

public enum Disciplina 
{
	GEOGRAFIA("Geografia"),
	HISTORIA("Historia");
	
	String descricao;
	
	Disciplina( String descricao )
	{
		this.descricao = descricao;
	}
	
	public String getDescricao( )
	{
		return descricao;
	}
}
