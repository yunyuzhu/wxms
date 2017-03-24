/*
 *    Copyright 2009-2014 the original author or authors.
 *
 *    Licensed under the Apache License, Version 2.0 (the "License");
 *    you may not use this file except in compliance with the License.
 *    You may obtain a copy of the License at
 *
 *       http://www.apache.org/licenses/LICENSE-2.0
 *
 *    Unless required by applicable law or agreed to in writing, software
 *    distributed under the License is distributed on an "AS IS" BASIS,
 *    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *    See the License for the specific language governing permissions and
 *    limitations under the License.
 */
package com.bigdata.plugin;

import org.apache.ibatis.builder.CacheRefResolver;
import org.apache.ibatis.builder.ResultMapResolver;
import org.apache.ibatis.builder.annotation.MethodResolver;
import org.apache.ibatis.builder.xml.XMLStatementBuilder;
import org.apache.ibatis.executor.loader.ProxyFactory;
import org.apache.ibatis.mapping.Environment;
import org.apache.ibatis.plugin.InterceptorChain;
import org.apache.ibatis.scripting.LanguageDriverRegistry;
import org.apache.ibatis.type.TypeAliasRegistry;
import org.apache.ibatis.type.TypeHandlerRegistry;

import java.util.Collection;
import java.util.HashMap;
import java.util.LinkedList;
import java.util.Map;

/**
 * @author Clinton Begin
 */
public class ConfigurationRel {

	protected Environment environment;

	protected boolean safeRowBoundsEnabled = false;
	protected boolean safeResultHandlerEnabled = true;
	protected boolean mapUnderscoreToCamelCase = false;
	protected boolean aggressiveLazyLoading = true;
	protected boolean multipleResultSetsEnabled = true;
	protected boolean useGeneratedKeys = false;
	protected boolean useColumnLabel = true;
	protected boolean cacheEnabled = true;
	protected boolean callSettersOnNulls = false;
	protected String logPrefix;

	protected boolean lazyLoadingEnabled = false;
	protected ProxyFactory proxyFactory;

	protected String databaseId;
	/**
	 * Configuration factory class. Used to create Configuration for loading
	 * deserialized unread properties.
	 * 
	 * @see <a
	 *      href='https://code.google.com/p/mybatis/issues/detail?id=300'>Issue
	 *      300</a> (google code)
	 */
	protected Class<?> configurationFactory;

	protected final InterceptorChain interceptorChain = new InterceptorChain();
	protected final TypeHandlerRegistry typeHandlerRegistry = new TypeHandlerRegistry();
	protected final TypeAliasRegistry typeAliasRegistry = new TypeAliasRegistry();
	protected final LanguageDriverRegistry languageRegistry = new LanguageDriverRegistry();

	protected final Collection<XMLStatementBuilder> incompleteStatements = new LinkedList<XMLStatementBuilder>();
	protected final Collection<CacheRefResolver> incompleteCacheRefs = new LinkedList<CacheRefResolver>();
	protected final Collection<ResultMapResolver> incompleteResultMaps = new LinkedList<ResultMapResolver>();
	protected final Collection<MethodResolver> incompleteMethods = new LinkedList<MethodResolver>();

	public static final String SHOW_COLUMNS_FROM = "show columns from ";

	public static final String COLUMN_KEY = "column_key";

	public static final String FIELD = "field";

	public static final String TABLE = "table";

	public static final String FINDBYWHERE = "findByWhere";

	public static final String FINDBYPAGE = "findByPage";

	public static final String DELETEBYNAMES = "deleteByNames";

	public static final String DELETEBYATTRIBUTE = "deleteByAttribute";

	public static final String FINDBYNAMES = "findByNames";

	public static final String FINDBYATTRIBUTE = "findByAttribute";

	public static final String ADDENTITY = "addEntity";

	public static final String EDITENTITY = "editEntity";

	public static final String FINDBYFRIST = "findbyFrist";

	public static final String BATCHSAVE = "batchSave";

	/*
	 * A map holds cache-ref relationship. The key is the namespace that
	 * references a cache bound to another namespace and the value is the
	 * namespace which the actual cache is bound to.
	 */
	protected final Map<String, String> cacheRefMap = new HashMap<String, String>();

	public ConfigurationRel(
			Environment environment) {
		this.environment = environment;
	}

	

}
