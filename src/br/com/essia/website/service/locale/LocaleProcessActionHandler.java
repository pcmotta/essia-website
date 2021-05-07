package br.com.essia.website.service.locale;


import javax.persistence.NoResultException;

import lumis.doui.processaction.ProcessActionHandler;
import lumis.doui.source.Source;
import lumis.portal.PortalException;
import lumis.portal.localization.CustomStringConfig;
import lumis.portal.manager.ManagerFactory;
import lumis.util.XmlUtil;

/**
 * Sets the current user's locale to the locale specified in the
 * <code>locale</code> request parameter.
 * @version $Revision: 17734 $ $Date: 2015-09-14 15:41:28 +0000 (Mon, 14 Sep 2015) $
 * @since 4.0.10
 */
public class LocaleProcessActionHandler extends ProcessActionHandler<Source<?>>
{
	public static final String CLEAR_CACHE = "clearCache";
	public static final String ADD_OR_UPDATE_CUSTOM_STRING = "addOrUpdateCustomString";
	public static final String DELETE_CUSTOM_STRING = "deleteCustomString";
	public static final String DELETE_LOCALE = "deleteLocale";
	
	@Override
	public void processAction() throws PortalException 
	{
		String actionType = XmlUtil.readAttributeString("actionType", processActionNode);

		if (actionType.equals(LocaleProcessActionHandler.CLEAR_CACHE))
			clearCache();
		else if (actionType.equals(LocaleProcessActionHandler.ADD_OR_UPDATE_CUSTOM_STRING))
			addOrUpdateCustomString();
		else if (actionType.equals(LocaleProcessActionHandler.DELETE_CUSTOM_STRING))
			deleteCustomString();
		else if (actionType.equals(DELETE_LOCALE))
			deleteLocale();
	}

	/**
	 * Method called when locales are been deleted from administration
	 * interface.
	 * 
	 * @since 6.0.0
	 */
	private void deleteLocale() throws PortalException
	{
		String[] localeIds = getParameter("localeId", String[].class);
		if (localeIds == null || localeIds.length == 0)
			return;

		for (String localeId : localeIds)
		{
			try
			{
				ManagerFactory.getEntityManager().createNativeQuery(
								"select wr.id from lum_WebResource wr inner join lum_Locale l on wr.locale = l.locale where l.localeId = :localeId")
						.setMaxResults(1).setParameter("localeId", localeId).getSingleResult();
			}
			catch (NoResultException e)
			{
				// no WR with the given locale was found. continue.
				continue;
			}
			// a WR with the given locale has been found. terminate operation.
			throw new PortalException(localize("STR_LOCALE_TO_BE_DELETED_IS_BEEN_USED"));
		}
	}

	
	public void clearCache() throws PortalException 
	{
		
		ManagerFactory.getLocalizationManager().clearCache();
		
		addDefaultResponse();
	}
	
	public void addOrUpdateCustomString( ) throws PortalException
    {
        String customStringId = (String)getParameter( "customStringId" );
        String stringId       = (String)getParameter( "stringId"       );
        String string         = (String)getParameter( "string"         );
        String resourcePath   = (String)getParameter( "resourcePath"   );
        String localeCode     = (String)getParameter( "localeCode"     );
        Number status         = (Number)getParameter( "status"         );

        CustomStringConfig customStringConfig = new CustomStringConfig( );

        customStringConfig.setCustomStringId( customStringId );
        customStringConfig.setStringId( stringId );
        customStringConfig.setString( string );
        customStringConfig.setResourcePath( resourcePath );
        customStringConfig.setLocaleCode( localeCode );
        customStringConfig.setStatus( status.intValue( ) );

        if( customStringId == null )
            ManagerFactory.getLocalizationManager( ).addCustomString( sessionConfig, customStringConfig, transaction );
        else
            ManagerFactory.getLocalizationManager( ).updateCustomString( sessionConfig, customStringConfig, transaction );

        ManagerFactory.getPageManager( ).clearCache( sessionConfig, resourcePath, transaction );

        addDefaultResponse( );
    }
	
	public void deleteCustomString() throws PortalException
    {
        String[] customStringIds = (String[]) getParameter("customStringId");
        
        for (String customStringId : customStringIds)
        {
            CustomStringConfig customStringConfig = ManagerFactory.getLocalizationManager( ).getCustomString( sessionConfig, customStringId, transaction );
            
            ManagerFactory.getPageManager( ).clearCache( sessionConfig, customStringConfig.getResourcePath( ), transaction );
            
            ManagerFactory.getLocalizationManager().deleteCustomString(sessionConfig, customStringId, transaction);
        }
        
        addDefaultResponse();
    }
}