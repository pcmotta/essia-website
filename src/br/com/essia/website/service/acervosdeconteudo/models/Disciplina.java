package br.com.essia.website.service.acervosdeconteudo.models;

public enum Disciplina
{
	BIOLOGIA("Biologia"),
	CIENCIAS("Ci�ncias"),
	CIENCIASNATUREZA("Ci�ncias da Natureza"),
	CIENCIASHUMANAS("Ci�ncias Humanas"),
	EMPREENDEDORISMO("Empreendedorismo"),
	ESPANHOL("Espanhol"),
	FILOSOFIA("Filosofia"),
	FISICA("F�sica"),
	GEOGRAFIA("Geografia"),
	GRAMATICA("Gram�tica"),
	HISTORIA("Historia"),
	INGLES("Ingl�s"),
	LITERATURA("Literatura"),
	MATEMATICA("Matem�tica"),
	PORTUGUES("Portugu�s"),
	PROJETOVIDA("Projeto de Vida"),
	QUIMICA("Qu�mica"),
	REDACAO("Reda��o"),
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
