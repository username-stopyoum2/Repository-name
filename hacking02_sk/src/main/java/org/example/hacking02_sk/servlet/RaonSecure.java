package org.example.hacking02_sk.servlet;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.example.hacking02_sk.MyLibrary;
import org.json.JSONObject;

import com.raonsecure.touchenkey.*;



/*
	2024-02-12 개발자 이현호
	프로젝트용으로 라이센스가 localhost 또는 127.0.0.1 만이 허용되어있는 상태.
	해당 제품은 라온시큐어 제품으로 무단배포를 금지함. 무단배포를 할 경우 법적책임은 무단배포를 한 당사자한테 있음을 알립니다.
	
	개발에 사용된 제품 : 
		TouchEn_Nxkey v1.0.13.1
*/

@WebServlet("/RaonSecure")
public class RaonSecure extends HttpServlet {
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
    	request.setCharacterEncoding("UTF-8");
        response.setContentType("text/html; charset=UTF-8"); 		
		
		PrintWriter printWriter = response.getWriter();
		
		JSONObject jsonObject = new JSONObject();
		String type = request.getParameter("type");
		
		if(MyLibrary.f_check_valid(type)) {
			if(type.equals("nxkey")) {
				String TNK_SR = request.getParameter("TNK_SR");
				if(MyLibrary.f_check_valid(TNK_SR)) {
					//TNK_SR = E2ECrypto.CreateSessionRandom(request.getSession(), true);
					TNK_SR = MyLibrary.RaonSecure.Nxkey.createTNK_SR(request.getSession());
					if(MyLibrary.f_check_valid(TNK_SR)) jsonObject.put("TNK_SR", TNK_SR);
				}				
			}
		}
		
		printWriter.println(jsonObject.toString());
		printWriter.flush();
		
	}

}
