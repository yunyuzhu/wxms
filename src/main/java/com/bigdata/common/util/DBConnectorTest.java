package com.bigdata.common.util;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

/**   
 * @Title: DBConnectorTest.java
 * @Description: test
 * @author test   
 * @date 2015年9月18日 下午4:42:03   
 */
public class DBConnectorTest {

	public static Connection getConnector() throws SQLException {
		Connection conn = null;
		String url = "jdbc:mysql://127.0.0.1:3306/hx";
		String user = "root";
		String passwd = "123456";
		try {
			Class.forName("com.mysql.jdbc.Driver");
			conn = DriverManager.getConnection(url, user, passwd);
		} catch (ClassNotFoundException e) {
			e.printStackTrace();
		}
		
		return conn;
	}

	public String testQuery() {
		Connection conn = null;
		PreparedStatement ps = null;
		ResultSet rs = null;

		String str = null;
		String sql = " select key_id,user_name from t_user ";
		try {
			conn = DBConnectorTest.getConnector();
			ps = conn.prepareStatement(sql);
			rs = ps.executeQuery();

			while (rs.next()) {
				str = rs.getString("user_name");
			}
			
			rs.close();
			ps.close();
			conn.close();
		} catch (SQLException e) {
			e.printStackTrace();
		}

		return str;
	}
	
	public String testAdd() {
		Connection conn = null;
		PreparedStatement ps = null;

		String str = null;
		String sql = " insert into t_user(key_id, user_name, password, remark) " +
						    " values(4, ?, '123456', 'test') ";
		try {
			conn = DBConnectorTest.getConnector();
			ps = conn.prepareStatement(sql);
			ps.setString(1, "test");
			ps.executeUpdate();

			ps.close();
			conn.close();
		} catch (SQLException e) {
			e.printStackTrace();
		}

		return str;
	}

}
