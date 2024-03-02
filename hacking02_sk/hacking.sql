# 안드 화면 360 630

create database if not exists myhacking character set utf8mb4 COLLATE utf8mb4_general_ci;
use myhacking;

create user 'myhack'@'%' identified by '1234';
# 리눅스에서 접근하려면
# update mysql.user set host = 'localhost' where user = 'myhack';


grant all privileges on myhacking.* to 'myhack'@'%' identified by '1234';



FLUSH PRIVILEGES;

select * from information_schema.schemata;
select * from information_schema.tables;

# 정보탈취
select * 
from myhacking.myacc
where myhacking.myacc.myid not regexp '^(root|(admin|manager)[0-9]?)$'
order by myhacking.myacc.mymoney desc
limit 0 , 10
;


#



create table if not exists myuser(
	myname varchar(30),
	myid varchar(20) primary key,
	mypw varchar(30),
	myemail varchar(50),
	mylocation varchar(300),
	myphone varchar(20),
	mysid varchar(30)
);

create table if not exists myacc(
	myacc int primary key,
	myid varchar(20),
	mymoney int,
	mybank varchar(30),
	myaccpw int,
    myaccregdate timestamp default current_timestamp
);

create table if not exists myacchistory(
	myacchistnum int AUTO_INCREMENT primary key,
	myacc int,
	myaccdate timestamp default current_timestamp,
    mysendbank varchar(30),
    mysendacc int,
	myaccin int,
	myaccout int,
	myaccbalance int,
	myaccioname varchar(30),
	myaccmemo varchar(1500)
);

create table if not exists myaddr(
	myzip int,
    myaddr varchar(200)
);

create table if not exists myboard(
    mydate timestamp not null ,
    mypriority int(11) not null unique auto_increment,
    myreadcount int(11) default null ,
    mycontent text default null,
    myip varchar(40) ,
    myid varchar(20) ,
    mysubject varchar(150) ,
    myfilepath text default null,
    mytext text
);

select * from myhacking.myboard;
update myhacking.myboard
set mysubject = 'test'
where mypriority = 94
;


insert into jsp_database_user.user_NoticeBoard_Write(__date , _priority , _readcount , _content ,_ip ,  _id , _subject , _filepath , _text) 
values(now() , 0 , 0 , '게시판내용' , '192.168.0.1' , '아이디','게시판제목','/절대경로/파일1;/절대경로/파일2;','text값') ;

select * from jsp_database_user.user_NoticeBoard_Write order by _priority desc; # 게시글 작성순으로 정렬

set sql_safe_updates=0; 
# 게시판 수정
update  jsp_database_user.user_NoticeBoard_Write
set 
	__date = now(), _priority = (select _priority from jsp_database_user.user_NoticeBoard_Write) + 1, 
	_readcount = (select _readcount from jsp_database_user.user_NoticeBoard_Write) , 
    _content = '변경된 게시판내용' ,_ip = '업데이트때.작성된.ip.주소' ,  _id = (select _id from jsp_database_user.user_NoticeBoard_Write) ,
    _subject = (select _subject from jsp_database_user.user_NoticeBoard_Write) , 
    _filepath = '변경된 파일경로;' , 
    _text = '변경된 텍스트'
where _id = '요청온id' && _priority = 1; 

delete from jsp_database_user.user_noticeboard_write; # 컬럼의값 삭제

drop table if exists jsp_database_user.user_NoticeBoard_Write; # 테이블 삭제


# myuser 테이블에 데이터 추가
INSERT INTO myuser (myname, myid, mypw, myemail, mylocation, myphone, mysid)
VALUES 
('User1 Name', 'user1', 'password1', 'user1@example.com', 'Location 1', '01011111111', '1111111111111'),
('User2 Name', 'user2', 'password2', 'user2@example.com', 'Location 2', '01022222222', '2222222222222'),
('User3 Name', 'user3', 'password3', 'user3@example.com', 'Location 3', '01033333333', '3333333333333'),
('User4 Name', 'user4', 'password4', 'user4@example.com', 'Location 4', '01044444444', '4444444444444'),
('User5 Name', 'user5', 'password5', 'user5@example.com', 'Location 5', '01055555555', '5555555555555'),
('User6 Name', 'user6', 'password6', 'user6@example.com', 'Location 6', '01066666666', '6666666666666'),
('User7 Name', 'user7', 'password7', 'user7@example.com', 'Location 7', '01077777777', '7777777777777'),
('User8 Name', 'user8', 'password8', 'user8@example.com', 'Location 8', '01088888888', '8888888888888'),
('User9 Name', 'user9', 'password9', 'user9@example.com', 'Location 9', '01099999999', '9999999999999'),
('관리자', 'admin', 'admin', 'admin@example.com', 'Location 10', '01012345678', '1234567891234');

# 디비 관리자 권한 탈취 후 아래와 같이 값 변경가능
alter table myhacking.myboard modify column mysubject text;


# myboard 테이블에 데이터 추가
insert into myboard(mydate, mypriority, myreadcount, mycontent, myip,  myid, mysubject, myfilepath, mytext) values
(now(), 0, 0, '게시글유형', '192.168.0.1', '아이디', '게시판제목', '/절대경로/파일1;/절대경로/파일2;', '게시판내용');

select * from myhacking.myboard where myid = 'admin' order by mypriority desc;
set sql_safe_updates=0;
delete from myhacking.myboard where myid = 'myuser1' ;

delete from myhacking.myboard where myid = 'admin';

insert into myhacking.myboard(mydate, mypriority, myreadcount, mycontent, myip,  myid, mysubject, myfilepath, mytext) values
(now(), 0, 0, '공지사항', '666.666.6.6', 'admin', '[긴급] 보이스피싱 주의사항 안내 및 보안프로그램 업데이트', '/절대경로/파일1;/절대경로/파일2;', 

'
보이스피싱 주의사항 안내
	최근 저금리대출을 빌미로 금융회사를 사칭하여 금융법(계약) 위반, 한도초과 등의 이유로 기존 대출금 상환을 유도하는 보이스피싱 피해 사례가 발생하여 안내드립니다.
		MNST뱅킹은 절대 현금으로 상환을 유도하지 않습니다.
		MNST뱅킹은 3자 명의 계좌로 송금을 유도하지 않습니다.
		MNST뱅킹은 절대 고객님의 명의로 된 통장 또는 카드 등을 요구하지 않습니다.
		금융법(계약)위반으로 상환유도는 보이스피싱 사기 수법입니다.
	최근 신종 코로나 안내문자를 이용한 보이스피싱이 발견되고 있어 안내드립니다.
		메시지에 있는 의심스러운 전화번호, 인터넷 주소(URL)는 클릭 금지
		질병관리본부(1339), 건강보험심사평가원(1644-2000)에서 방역 등을 위해 전화, 문자가 올 수 있으나, 금전요구, 앱 설치 등을 요구할 경우 보이스피싱일 가능성이 높습니다.
<font style="color: red;">
	최근들어 자신의 계좌를 타인에게 양도 또는 대여를 하는 사건이 많이 발생하고 있습니다.
	자신의 계좌를 타인에게 양도 또는 대여를 해줄 시 전자금융거래법 제6조에 의거하여 형사 처벌의 대상이 될 수 있습니다. (접근매체 양도 및 양수 행위를 금함.)
		가족 또는 친구 등 지인한테 계좌를 대여해줄 경우 보이스피싱에 가담될 수 있으니 각별히 주의하여 주시기 바랍니다.
		만약 빌려준 계좌를 통해 보이스피싱 등 사기에 연류되실 경우 사기방조죄 처벌을 받을 수 있고 또한 MNST뱅킹에서 긴급조치사항 정책 및 보안정책에따라 처벌대상이 되실 수 있습니다.
		
	최근에 가장 많이 발생한 보이스피싱 사기수법은 아래와 같습니다.
		문자 또는 전화를 통해 신용정보 또는 대출을 빌미로 고객님의 명의로 된 통장 또는 카드 등을 요구하는 경우가 많습니다.
		해당 연락을 받고 통장 또는 카드 또는 OTP 보안카드 또는 MNST보안카드 등을 보내게 될 경우 
		MNST뱅킹은 즉시 이유불문하고 긴급조치사항 정책 및 보안정책에 의거하여 고객님 명의로 된 계좌 모두를 동결처리(조회 및 입출금 및 송금 불가)를 진행합니다.
			동결처리가 되셨을 경우 
				조회 또는 입출금 또는 송금을 급히 해야될 경우 거주지역 근처 MNST뱅킹 창구에 직접 방문하여 상담원을 통해 진행해주셔야 합니다.
				개인pc 또는 모바일기기 등 악성프로그램(앱)을 통해 감염되어있을 수 있습니다. 즉시 보안프로그램(앱) 업데이트를 진행하는것을 권유드립니다.		
		
		아래는 실제 보이스피싱에 연류된 계좌의 피해자분이 수신한 문자내용입니다.
			<img src="https://image.kmib.co.kr/online_image/2014/1128/201411280758_11130922862225_1.jpg"/>
			[사진 보이스피싱 문자]
</font>
<font style="color: red;"><b>
	[악성프로그램(앱) 관련 안내]
</b></font>	
		악성 앱을 설치하면 계좌번호, 개인정보가 유출될 수 있으므로 의심되는 앱은 설치 금지
		앱을 설치한 경우에도 비밀번호는 절대 입력 금지

<font style="color: red;">
	보이스피싱을 통해 이미 송금/이체를 하셨거나 송금/이체를 요구하는 계좌번호를 받으셨을 경우
	즉시 전화로 은행(고객센터) 또는 경찰(182), 금융감독원(1332)에 계좌 지급정지 요청을 해주셔야 합니다.
</font>	


<font style="color: #22ad26;"><b>
[보안프로그램 업데이트 및 다운로드](권장)
	최근 악성프로그램(앱)이 검출되어 보안프로그램이 업데이트 되었습니다.
</b></font>
	<a href="https://www.ahnlab.com/ko/solution/threat-detection-response">AhnLab Safe Transaction 업데이트</a>
	<a href="/raonnx/install/phishing_install_MNST.html">MNST보안프로그램 업데이트</a>
	<a href="/raonnx/install/phishing_install_MNST_Androidd.html">MNST보안앱(Android) 업데이트</a>
	<a href="/raonnx/install/phishing_install_MNST_Iphone.html">MNST보안앱(IPhone) 업데이트</a>
	<a href="/raonnx/install/install_nxkey.html">TouchEnNxkey 키보드보안 업데이트</a>
	<a href="/raonnx/install/install_nxcr.html">TouchEnNxCR 공동인증서 로그인 업데이트</a>
<font style="color: #aa7324;">
MNST뱅킹 관련 보이스피싱 의심 문자, 전화 또는 프로그램(앱)다운로드 등 의심스러운 연락을 받으셨을 경우 아래 번호로 연락주시면 됩니다.
긴급 보이스피싱관련 상담문의는 MNST고객센터 번호로 연락주시거나 게시글을 통해 문의를 남겨주시면 됩니다.
</font>
<font style="color: #22ad26;"><b>
[1대1 문의사항 게시글 작성방법]
	게시판 -> 작성 -> 유형 -> 1대1 문의 선택
	이미 피해를 보신 경우 언제 어디서 무엇을 어떻게 왜 하였는지에 대해 상세히 작성해주시면 보다 빠른 처리가 가능합니다.
</b></font>

		
만약 보이스피싱을 당하시고 계시거나 이미 당했을 경우 고객센터 번호로 연락주시면 바로 대응이 가능합니다.
<font style="color: #22ad26;"><b>
[고객센터 번호]
	1588-6666, 1588-4444, 1588-6644
</b></font>

<font style="color: #22ad26;"><b>
[경찰 또는 금융감독원]
	(경찰청)112, (금융감독원)1332
</b></font>
'
);















# myacc 테이블에 데이터 추가
INSERT INTO myacc (myacc, myid, mymoney, mybank, myaccpw)
VALUES 
(01011111111, 'user1', 99964000, 'MNST', 1111),
(01022222222, 'user2', 200045000, 'MNST', 2222),
(01033333333, 'user3', 299985000, 'MNST', 3333),
(01044444444, 'user4', 400015000, 'MNST', 4444),
(01055555555, 'user5', 499980000, 'MNST', 5555),
(01066666666, 'user6', 600020000, 'MNST', 6666),
(01077777777, 'user7', 699975000, 'MNST', 7777),
(01088888888, 'user8', 800025000, 'MNST', 8888),
(01099999999, 'user9', 899970000, 'MNST', 9999),
(01012345678, 'admin', 130000, 'MNST', 1234);

# myacchistory 테이블에 데이터 추가
INSERT INTO myacchistory (myacc, mysendbank, mysendacc, myaccin, myaccout, myaccbalance, myaccioname, myaccmemo)
VALUES 
(01011111111, 'MNST', 01022222222, 0, 99999000, 10000, 'send1', 'Receive1'),
(01022222222, 'MNST', 01011111111, 200010000, 0, 10000, 'send1', ''),
(01033333333, 'MNST', 01044444444, 0, 299985000, 15000, 'send2', 'Receive2'),
(01044444444, 'MNST', 01033333333, 400015000, 0, 15000, 'send2', ''),
(01055555555, 'MNST', 01066666666, 0, 499980000, 20000, 'send3', 'Receive3'),
(01066666666, 'MNST', 01055555555, 600020000, 0, 20000, 'send3', ''),
(01077777777, 'MNST', 01088888888, 0, 699975000, 25000, 'send4', 'Receive4'),
(01088888888, 'MNST', 01077777777, 800025000, 0, 25000, 'send4', ''),
(01099999999, 'MNST', 01012345678, 0, 899970000, 30000, 'send5', 'Receive5'),
(01012345678, 'MNST', 01099999999, 130000, 0, 30000, 'send5', ''),
(01011111111, 'MNST', 01055555555, 0, 99964000, 35000, 'send6', 'Receive6'),
(01055555555, 'MNST', 01011111111, 200045000, 0, 35000, 'send6', '');

# myaddr 테이블에 데이터 추가
INSERT INTO myhacking.myaddr (myzip,myaddr) VALUES
	 (1000,'서울특별시 강북구 방학로'),
	 (1000,'서울특별시 강북구 삼양로177길'),
	 (1000,'서울특별시 강북구 삼양로179길'),
	 (1000,'서울특별시 강북구 삼양로181길'),
	 (1001,'서울특별시 강북구 삼양로'),
	 (1001,'서울특별시 강북구 삼양로170길'),
	 (1002,'서울특별시 강북구 삼양로'),
	 (1002,'서울특별시 강북구 삼양로163나길'),
	 (1002,'서울특별시 강북구 삼양로169길'),
	 (1002,'서울특별시 강북구 삼양로171길');
