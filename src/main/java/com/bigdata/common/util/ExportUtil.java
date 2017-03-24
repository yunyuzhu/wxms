package com.bigdata.common.util;

import java.io.ByteArrayOutputStream;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;

import org.apache.poi.hssf.usermodel.HSSFWorkbook;
import org.apache.poi.ss.usermodel.Cell;
import org.apache.poi.ss.usermodel.CellStyle;
import org.apache.poi.ss.usermodel.Font;
import org.apache.poi.ss.usermodel.IndexedColors;
import org.apache.poi.ss.usermodel.Row;
import org.apache.poi.ss.usermodel.Sheet;
import org.apache.poi.ss.usermodel.Workbook;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;

/**   
 * @Title: ExportUtil.java
 * @Description: 导出 
 * @author zzc   
 * @date 2015年9月29日 下午4:59:05   
 */
public class ExportUtil {

	/**
	 * POI版本
	 * @author zzc
	 *
	 */
	public enum PoiVersion {
		HSSF,
		XSSF
	}

	/**
	 * 创建工作薄
	 * @param xlsFile
	 * @return
	 * @throws Exception
	 */
	public static Workbook createWorkBook(String xlsFile) throws Exception{
		PoiVersion poiVer = getPoiVersion(xlsFile);
		FileInputStream inStream = new FileInputStream(xlsFile);
		Workbook xlsBook = null;
		if(poiVer == PoiVersion.HSSF){
			xlsBook = new HSSFWorkbook(inStream,false);
		}else if(poiVer == PoiVersion.XSSF){
			xlsBook = new XSSFWorkbook(inStream);
		}
		return xlsBook;
	}
	
	/**
	 * Excel版本
	 * @param filename
	 * @return
	 */
	public static PoiVersion getPoiVersion(String filename){
		PoiVersion poiVer = PoiVersion.HSSF;
		if (filename.toLowerCase().endsWith(".xls")) {
			poiVer = PoiVersion.HSSF;
		} else if (filename.toLowerCase().endsWith(".xlsx")) {
			poiVer = PoiVersion.XSSF;
		}
		return poiVer;
	}
	
	/**
	 * 设置cell的值,java内部用
	 * @param sheet 传递过来的sheet
	 * @param rowIndex 传递过来的行号
	 * @param colIndex 列号
	 * @param value 给单元格设置的值
	 * @param style 单元格的样式
	 * @param format 是否是数字
	 * @throws Exception
	 */
	public static void setCellValue(Sheet sheet,
			int rowIndex, int colIndex, String value,CellStyle style,String format) throws Exception {
		Row row = sheet.getRow(rowIndex);
		if (null == row)
			row = sheet.createRow(rowIndex);

		Cell cell = row.createCell(colIndex);
		if (null == value)
			value = "";
		if("number".equals(format)){
			cell.setCellValue(Integer.parseInt(value));
		}else{
			cell.setCellValue(value);
		}
		cell.setCellStyle(style);
	}
	
	/**
	 * 设置Excel格式
	 * 
	 * @param workbook
	 * @param sheetName
	 */
	public static void configCellStyle(Workbook workbook, String sheetName) {
		Sheet sheet = workbook.getSheet(sheetName);
		if (null != sheet)
			configCellStyle(workbook, sheet);
	}
	
	/**
	 * 设置Excel格式,内部调用
	 * 
	 * @param workbook
	 * @param sheetName
	 */
	private static void configCellStyle(Workbook workbook, Sheet sheet) {

		int lastRowNum = sheet.getLastRowNum();
		Row modelRow = sheet.getRow(lastRowNum);
		int lastColumn = modelRow.getLastCellNum();
		for (int column = 0; column < lastColumn; column++) {
			//调整单元格的宽度
			//sheet.autoSizeColumn(column);
		}
	}
	
	/**
	 * 写入到Excel
	 * 
	 * @param xlsBook
	 * @param xlsFile
	 * @return 
	 */
	public static byte[] writeXlsBook(Workbook xlsBook) {
		try {
			ByteArrayOutputStream baos = new ByteArrayOutputStream();
			xlsBook.write(baos);
			baos.close();
			
			return baos.toByteArray();
		} catch (FileNotFoundException e) {
			e.printStackTrace();
		} catch (IOException e) {
			e.printStackTrace();
		}
		
		return null;
	}
	
	/**
	 * 导出文件下载
	 * 
	 * @param fileName 导出文件
	 * @param fileSize 文件大小
	 * @return 
	 */
	public static HttpHeaders httpHeaderExcelFileAttachment(final String fileName,
			long fileSize) {
		HttpHeaders responseHeaders = new HttpHeaders();
		responseHeaders.setContentType(MediaType.parseMediaType("application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"));
		responseHeaders.setContentLength(fileSize);
		responseHeaders.add("Content-Disposition", "attachment; filename=\""
				+ fileName + '\"');
		return responseHeaders;
	}
	
	/**
	 * 设置用户的格式
	 * @param xlsBook excel工作薄
	 * @param sheetName sheet名字
	 * @param fontSize 字体的大小
	 * @param align 水平方向上居中
	 * @param valign 垂直方向上的居中
	 * @param border 有无边框的标识
	 * @return 用户定义的表格样式
	 */
	public static CellStyle setCellStyle(Workbook xlsBook,String sheetName,short fontSize, short align, short valign, boolean border){
		CellStyle style=xlsBook.createCellStyle();
		if(border){//若为true给表格设置边框
			style.setBorderRight(CellStyle.BORDER_THIN);
			style.setRightBorderColor(IndexedColors.BLACK.getIndex());
			style.setBorderBottom(CellStyle.BORDER_THIN);
			style.setBottomBorderColor(IndexedColors.BLACK.getIndex());
			style.setBorderLeft(CellStyle.BORDER_THIN);
			style.setLeftBorderColor(IndexedColors.BLACK.getIndex());
			style.setBorderTop(CellStyle.BORDER_THIN);
			style.setTopBorderColor(IndexedColors.BLACK.getIndex());
		}
		//字体的设置
		Font font = xlsBook.createFont();
		font.setFontHeightInPoints(fontSize);
		style.setFont(font);
		//水平位置
		style.setAlignment(align);
		//垂直位置
		style.setVerticalAlignment(valign);
		return style;
	}

}
