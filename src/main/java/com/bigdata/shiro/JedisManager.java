package com.bigdata.shiro;

import redis.clients.jedis.Jedis;
import redis.clients.jedis.JedisPool;
import redis.clients.jedis.exceptions.JedisConnectionException;

import java.util.Set;

/**
* jedis manager
* @Title: JedisManager.java
* @Description: jedis manager 
* @author zzc   
* @date 2016年10月28日 下午5:08:52
*/
public class JedisManager {

    private JedisPool jedisPool;

    public Jedis getJedis() {
        Jedis jedis = null;
        try {
            jedis = getJedisPool().getResource();
        } catch (Exception e) {
            throw new JedisConnectionException(e);
        }
        return jedis;
    }

    public void returnResource(Jedis jedis, boolean isBroken) {
        if (jedis == null)
            return;
        if (isBroken)
            getJedisPool().returnBrokenResource(jedis);
        else
            getJedisPool().returnResource(jedis);
    }

    public byte[] getValueByKey(int dbIndex, byte[] key) throws Exception {
        Jedis jedis = null;
        byte[] result = null;
        boolean isBroken = false;
        try {
            jedis = getJedis();
            jedis.select(dbIndex);
            result = jedis.get(key);
        } catch (Exception e) {
            isBroken = true;
            throw e;
        } finally {
            returnResource(jedis, isBroken);
        }
        return result;
    }

    public void deleteByKey(int dbIndex, byte[] key) throws Exception {
        Jedis jedis = null;
        boolean isBroken = false;
        try {
            jedis = getJedis();
            jedis.select(dbIndex);
            jedis.del(key);
        } catch (Exception e) {
            isBroken = true;
            throw e;
        } finally {
            returnResource(jedis, isBroken);
        }
    }

    public void saveValueByKey(int dbIndex, byte[] key, byte[] value, int expireTime)
            throws Exception {
        Jedis jedis = null;
        boolean isBroken = false;
        try {
            jedis = getJedis();
            jedis.select(dbIndex);
            jedis.set(key, value);
            if (expireTime > 0)
                jedis.expire(key, expireTime);
        } catch (Exception e) {
            isBroken = true;
            throw e;
        } finally {
            returnResource(jedis, isBroken);
        }
    }
	
	/**
	 * flush
	 */
	public void flushDB(){
		Jedis jedis = getJedis();
        boolean isBroken = false;
		try{
			jedis.flushDB();
		}catch(Exception e){
            isBroken = true;
		}finally{
			returnResource(jedis, isBroken);
		}
	}
	
	/**
	 * size
	 */
	public Long dbSize(){
		Long dbSize = 0L;
		Jedis jedis = getJedis();
        boolean isBroken = false;
		try{
			dbSize = jedis.dbSize();
		}catch(Exception e){
            isBroken = true;
		}finally{
			returnResource(jedis, isBroken);
		}
		return dbSize;
	}
    
    /**
	 * keys
	 * @param regex
	 * @return
	 */
	public Set<byte[]> keys(String pattern){
		Set<byte[]> keys = null;
		Jedis jedis = getJedis();
        boolean isBroken = false;
		try{
			keys = jedis.keys(pattern.getBytes());
		}catch(Exception e){
            isBroken = true;
		}finally{
			returnResource(jedis, isBroken);
		}
		return keys;
	}

    public JedisPool getJedisPool() {
        return jedisPool;
    }

    public void setJedisPool(JedisPool jedisPool) {
        this.jedisPool = jedisPool;
    }
}
