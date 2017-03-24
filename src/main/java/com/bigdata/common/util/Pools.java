package com.bigdata.common.util;

import org.apache.commons.pool.impl.GenericObjectPool;

public class Pools {
	private static PooledObjectFactory poolFactory = new PooledObjectFactory();
	private static GenericObjectPool<Object> pool = new GenericObjectPool<Object>(poolFactory);
	
	public static GenericObjectPool<Object> getPool() {
		return pool;
	}
	public static void setPool(GenericObjectPool<Object> pool) {
		Pools.pool = pool;
	}
	
	
}
