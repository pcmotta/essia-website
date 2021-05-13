package com.essia.website.service.acervosdeconteudo.postload;

import org.w3c.dom.Node;

import com.essia.website.service.acervosdeconteudo.models.Disciplina;
import com.essia.website.service.acervosdeconteudo.models.Segmento;
import com.essia.website.service.acervosdeconteudo.models.Serie;
import lumis.doui.source.ISourceData;
import lumis.doui.source.Source;
import lumis.doui.source.TabularData;
import lumis.doui.source.TabularSource;
import lumis.doui.source.postloadprocessor.IPostLoadProcessor;
import lumis.portal.PortalException;
import lumis.portal.authentication.SessionConfig;
import lumis.util.ITransaction;

public class GetLivrosPostLoadProcessor implements IPostLoadProcessor
{
	@Override
	public void processSource( SessionConfig sessionConfig, @SuppressWarnings("rawtypes") Source source, Node parametersNode, ITransaction transaction ) throws PortalException 
	{
		TabularData allEntries = ((TabularSource<?>) source).getData();
		
		for( ISourceData row : allEntries.getRows( ) )
		{
			String segmento = row.get( "segmento", String.class );
			String disciplina = row.get( "disciplina", String.class );
			String serie = row.get( "serie", String.class );
			
			if( segmento != null )
				row.put( "segmento", Segmento.valueOf( segmento ).getDescricao( ) );
			
			if( serie != null )
				row.put( "serie", Serie.valueOf( serie ).getDescricao( ) );
			
			if( disciplina != null )
				row.put( "disciplina", Disciplina.valueOf( disciplina ).getDescricao( ) );
		}
	}
}
