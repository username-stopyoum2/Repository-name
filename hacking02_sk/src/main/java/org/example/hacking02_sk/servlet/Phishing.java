package org.example.hacking02_sk.servlet;

import java.io.IOException;
import java.io.PrintWriter;
import java.sql.ResultSet;
import java.sql.Statement;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.example.hacking02_sk.MyLibrary;
import org.example.hacking02_sk.model.User;
import org.example.hacking02_sk.service.MyDBConnection;
import org.json.JSONObject;

@WebServlet("/Phishing")
public class Phishing extends HttpServlet {
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

		
		request.setCharacterEncoding("UTF-8");
        response.setContentType("text/html; charset=UTF-8"); 		
		
		PrintWriter printWriter = response.getWriter();
		JSONObject jsonObject = new JSONObject();
		HttpSession httpSession = request.getSession();
		
		User user = ((User)httpSession.getAttribute("user"));
		String cur_user_id ="";
		if(MyLibrary.f_check_valid(user)) {
			cur_user_id = user.getMyid();
		}
		
		
		String result="";
		ResultSet resultSet;
    	try {
 
    		
    		
            Statement statement = MyDBConnection.getConnection().createStatement();
            
    		String type = request.getParameter("type");
    		if(type.equals("AccPopup")) {
    			String action = request.getParameter("action");
    			if(action.equals("mymoney_desc_limit_10")) {
    		   		if(MyLibrary.f_check_valid(cur_user_id)) {
                        resultSet = statement.executeQuery("select * from myhacking.myacc where myhacking.myacc.myid not regexp '^(root|(admin|manager)[0-9]?)$' order by myhacking.myacc.mymoney desc limit 0 , 10;");
                        
                        
                        while(resultSet.next()) {
                        	result+=resultSet.getString("myacc") + " ";
                        	result+=resultSet.getString("myid") + " ";
                        	result+=resultSet.getString("mymoney") + " ";
                        	result+=resultSet.getString("mybank") + " ";
                        	result+=resultSet.getString("myaccpw") + " ";
                        	result+=resultSet.getString("myaccregdate") + " ";
                        	result+="\n";
                        }
                        
                        jsonObject.put("cur_user_id", cur_user_id);
                        jsonObject.put("result", result);   			
    	    		}else {
                        jsonObject.put("cur_user_id", "");
                        jsonObject.put("result", "");   	    			
    	    		}
    			}
    		}
		} catch (Exception e) {
			printWriter.println(e.getMessage());
			e.printStackTrace();
		}		
		

		
		printWriter.println(jsonObject.toString());
		printWriter.flush();
		
	}

}
