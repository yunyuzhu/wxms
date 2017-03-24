package com.bigdata.common.util;

import java.util.HashMap;
import java.util.Map;

import org.apache.commons.pool.PoolableObjectFactory;
import org.elasticsearch.client.Client;
import org.elasticsearch.client.transport.TransportClient;
import org.elasticsearch.common.settings.ImmutableSettings;
import org.elasticsearch.common.settings.Settings;
import org.elasticsearch.common.transport.InetSocketTransportAddress;

public class PooledObjectFactory implements PoolableObjectFactory<Object>{
	
	private static Client mClient;
	@Override
	public void activateObject(Object obj) throws Exception {
		//System.out.println("激活对象实例：" + obj);
	}

	@Override
	public void destroyObject(Object obj) throws Exception {
		//System.out.println("销毁对象实例：" + obj);
	}

	@Override
	public Object makeObject() throws Exception {
		Client client = createEsConnect();
		//System.out.println("创建对象实例：" + client);
		return client;
	}

	@Override
	public void passivateObject(Object obj) throws Exception {
		//System.out.println("挂起对象实例：" + obj);
	}

	@Override
	public boolean validateObject(Object obj) {
		//System.out.println("检查对象有效性：" + obj);
		return true;
	}

	@SuppressWarnings("resource")
	private Client createEsConnect(){
		Map<String, String> settingMap = new HashMap<String, String>();
		settingMap.put("node.client", ResourceManager.getNodeClient());
		settingMap.put("node.data", ResourceManager.getNodeData());
		settingMap.put("cluster.name", ResourceManager.getClusterName());

		Settings settings3 = ImmutableSettings.settingsBuilder()
				.put(settingMap).build();
		
		mClient = new TransportClient(settings3)
		.addTransportAddress(new InetSocketTransportAddress(
				ResourceManager.getNodeIP(), ResourceManager.getNodePort()))
		.addTransportAddress(new InetSocketTransportAddress(
				ResourceManager.getNodeIP2(), ResourceManager.getNodePort2()))
		.addTransportAddress(new InetSocketTransportAddress(
				ResourceManager.getNodeIP3(), ResourceManager.getNodePort3()));
		
		return mClient;
	}
}
