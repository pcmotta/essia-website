package br.com.essia.website.service.acervosdeconteudo.models;

public enum Disciplina
{
	BIOLOGIA("Biologia"),
	CIENCIAS("Ciências"),
	CIENCIASNATUREZA("Ciências da Natureza"),
	CIENCIASHUMANAS("Ciências Humanas"),
	EMPREENDEDORISMO("Empreendedorismo"),
	ESPANHOL("Espanhol"),
	FILOSOFIA("Filosofia"),
	FISICA("Física"),
	GEOGRAFIA("Geografia"),
	GRAMATICA("Gramática"),
	HISTORIA("Historia"),
	INGLES("Inglês"),
	LITERATURA("Literatura"),
	MATEMATICA("Matemática"),
	PORTUGUES("Português"),
	PROJETOVIDA("Projeto de Vida"),
	QUIMICA("Quimica"),
	REDACAO("Redação"),
	SOCIOLOGIA("Sociologia");
	
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
