package org.example.hacking02_sk.model;

import lombok.Data;

import org.springframework.stereotype.Repository;

import com.raonsecure.*;



@Repository
public class User {
	private String myname;
	private String myid;
	private String mypw;
	private String myemail;
	private String mylocation;
	private String myphone;
	private String mysid;
	private String myaccpw;
	
	public String getMyname() {
	
		return myname;
	}
	public void setMyname(String myname) {
		this.myname = myname;
	}
	public String getMyid() {
		return myid;
	}
	public void setMyid(String myid) {
		this.myid = myid;
	}
	public String getMypw() {
		return mypw;
	}
	public void setMypw(String mypw) {
		//http 일때는 평문전송되므로. nxkey 적용시킴. 암호화 후 복호화된 내용을 적용시켜 취약하게 설정 했기 때문에 db탈취 때 값이 평문으로 남아있음.
		// 복호화 ㄱㄱ
		this.mypw = mypw;
	}
	public String getMyemail() {
		return myemail;
	}
	public void setMyemail(String myemail) {
		this.myemail = myemail;
	}
	public String getMylocation() {
		return mylocation;
	}
	public void setMylocation(String mylocation) {
		this.mylocation = mylocation;
	}
	public String getMyphone() {
		return myphone;
	}
	public void setMyphone(String myphone) {
		this.myphone = myphone;
	}
	public String getMysid() {
		return mysid;
	}
	public void setMysid(String mysid) {
		this.mysid = mysid;
	}
	public String getMyaccpw() {
		return myaccpw;
	}
	public void setMyaccpw(String myaccpw) {
		this.myaccpw = myaccpw;
	}
}
