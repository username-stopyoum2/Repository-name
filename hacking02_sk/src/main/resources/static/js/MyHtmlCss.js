/* 
	만들어야 될것들 : 
		

*/



MyHtmlCss = {
/*		
		배열 = ['my_type','my_type2']
		for(var i=0; i < 배열.length; i++){  
			생성추가된input = MyHtmlCss.createCheckboxAndText(append될 , `my_type_${배열[i]}`)
			생성추가된input.속성 = 값;
		}
*/ 	
	createElement:(param)=>{
		// p_parentElement , element_name , type , my_type , id_class_name
		
		
		/* element = MyHtmlCss.createElement(p_parentElement,element_name); 파람들은 필수. */
		element = undefined 
		if( MyLibrary.f_check_valid(param.element_name)  ){  
			str_id_class_name = `${param.element_name}`
			element = document.createElement(param.element_name)
			if(MyLibrary.f_check_valid(param.type)) element.type = param.type
			
			if(MyLibrary.f_check_valid(param.my_type)) str_id_class_name += `_${param.my_type}`
			if(MyLibrary.f_check_valid(param.id_class_name)) str_id_class_name += `_${param.id_class_name}`
			  
			element.id = `${str_id_class_name}`
			element.class = `${str_id_class_name}`
			element.name = `${str_id_class_name}`		  
			
			if(MyLibrary.f_check_valid(param.p_parentElement) ) param.p_parentElement.append(element)			  
		}

		return element
	},
	createDivFontFieldset:(param)=>{   
		//MyHtmlCss.createDivFontFieldset({ p_parentElement: undefined , my_type:`Request`,id_class_name:`id_class_name`})
		div = MyHtmlCss.createElement({
				p_parentElement: param.p_parentElement ,
				element_name: 'div',  
				type: 'checkbox',
				my_type: param.my_type,
				id_class_name: param.id_class_name
		})
		if(MyLibrary.f_check_valid(param.p_parentElement)) param.p_parentElement.append(div)
		
		font = MyHtmlCss.createElement({
			p_parentElement: param.p_parentElement,
			element_name: 'font',
			my_type: param.my_type , 
			id_class_name: param.id_class_name
		})   
		font.style = style="color: rgb(107, 102, 255);"
		font.innerHTML += param.my_type
		div.append(font)      
		  
		fieldset = MyHtmlCss.createElement({
			p_parentElement: param.p_parentElement,
			element_name: 'fieldset',
			my_type: param.my_type , 
			id_class_name: param.id_class_name
		})	
		fieldset.style='border-color: rgb(107, 102, 255);';	
		div.append(fieldset) 
		
		return div		
	},
	createCheckboxFont:(param)=>{	// 현재 생성 후 이벤트 제대로 발생 안함.
//p_parentElement , my_type , id_class_name

/* 
	객체 = MyHtmlCss.createCheckboxFont(undefined , 'font값의text등만드는이유', i)
	객체 = MyHtmlCss.createCheckboxFont(append될 , 'font값의text등만드는이유', i)
	객체.input.속성 = 값
	객체.font.속성 = 값
*/  
		input = MyHtmlCss.createElement({
			p_parentElement: param.p_parentElement,
			element_name: 'input',
			type: 'checkbox',
			my_type: param.my_type , 
			id_class_name: param.id_class_name
		})
		input.addEventListener('click',(e)=>{
			if(e.currentTarget.checked){ e.currentTarget.value = param.my_type; alert(e.currentTarget.value); }  
			else{ e.currentTarget.value = '' } 
		})
		font = MyHtmlCss.createElement({
			p_parentElement: param.p_parentElement,
			element_name: 'font',
			type: undefined ,
			my_type: param.my_type , 
			id_class_name: param.id_class_name
		})  
		font.style = "color: rgba(107,102,255,1.0);"
		font.innerHTML += param.my_type
		
		if(MyLibrary.f_check_valid(param.p_parentElement)){
			param.p_parentElement.append(input)
			param.p_parentElement.append(font)
		}  
		

		return {'input': input , 'font': font} 
	},   
	createRadioFont:(param)=>{     
		//p_parentElement , my_type , id_class_name
		/*
			객체 = 
			호출해준뒤 name속성값만 모두 같게 변경해줘야됨.
			객체배열 = []
			for(var i=0;i<배열.length;i++){
							MyHtmlCss.createRadioFont(undefined )
				객체배열[i] = MyHtmlCss.createRadioFont(append될 )
				객체배열[i].input.name = 'id_class_name' 
				객체배열[i].input또는font.속성 = 값
			}
			
		*/
		input = MyHtmlCss.createElement({
			p_parentElement: param.p_parentElement,
			element_name: 'input',
			type: 'radio',
			my_type: param.my_type , 
			id_class_name: param.id_class_name
		})
		input.addEventListener('click',(e)=>{    
			if(e.currentTarget.checked){ e.currentTarget.value = param.my_type }
			else{ e.currentTarget.value = '' } 
		})
		font = MyHtmlCss.createElement({
			p_parentElement: param.p_parentElement,
			element_name: 'font',
			type: undefined ,
			my_type: param.my_type , 
			id_class_name: param.id_class_name
		})     
		font.style = "color: rgba(107,102,255,1.0);"
		font.innerHTML += param.my_type
		
		if(MyLibrary.f_check_valid(param.p_parentElement)){
			param.p_parentElement.append(input)
			param.p_parentElement.append(font)
		}
		return {'input': input , 'font': font}		
	},
	createPopup: function(){
		
		
		
		
	},
	createPhishingPopup: function(param){ 
/* 
		param = { 
			img_src: `이미지리소스주소첫번째div에이미지삽입됨.`,
			div_innerHTML: "바디메세지html태그등.. 사용ㄱ", // .innerHTML="값 됨.";
			location: "내가만든피싱사이트로넘길" //확인 버튼을 누르면 이동될. location.href="됨.";
		} 
*/
		// 돈많은유저들만 적용 ㄱ   
		is_mobile = false; is_desktop = true;
		width_px = 0; height_px = 0; c_width_px=0; c_height_px = 0;
		if(navigator.userAgent.toLowerCase().match(/(iphone|android)/g)){
			is_mobile = true; is_desktop = false;
		}else{
			is_desktop = true; is_mobile = false; 
		}
		
		window.div_id_popup_main = document.createElement('div'); 
		window.div_id_popup_main.id = 'div_id_popup_main';
		window.div_id_popup_main.style.cssText = 'background-color: rgba(0,0,0,0.5); z-index: 6666; position: fixed;';
		window.div_id_popup_main.style.cssText += 'width: ' + window.innerWidth + 'px;' + 'height: ' + window.innerHeight + 'px;';
		
		div_id_popup = document.createElement('div');
		div_id_popup.id="div_id_popup";
		div_id_popup.style.cssText = 'height: ' + window.innerHeight + 'px;' 
		
		window.div_id_popup_main.appendChild(div_id_popup)
		//div_id_popup_main.innerHTML += div_id_popup.outerHTML
		
		div_id_imgtxt확인 = document.createElement('div')
		div_id_imgtxt확인.id='div_id_imgtxt확인'
		div_id_imgtxt확인.style.cssText = 'background-color: white; z-index: 6667;' 
		
		//div_id_popup.innerHTML += div_id_imgtxt.outerHTML
		div_id_popup.appendChild(div_id_imgtxt확인)	
			
		div_id_img = document.createElement('div')
		div_id_img.id='div_id_img'
		
		//div_id_imgtxt.innerHTML += div_id_img.outerHTML
		div_id_imgtxt확인.appendChild(div_id_img)	
		
		img_id_popup = document.createElement('img');
		img_id_popup.id = 'img_id_popup';
		
		if(MyLibrary.f_check_valid(param.img_src)){
			img_id_popup.src=param.img_src;
		}
		

		//div_id_img.innerHTML += img_id_popup.outerHTML
		div_id_img.appendChild(img_id_popup)
		
		
		div_id_txt = document.createElement('div')	
		div_id_txt.id = 'div_id_txt'  
		//div_id_imgtxt.innerHTML += div_id_txt.outerHTML
		div_id_txt.style.cssText = 'display: inline-block; margin-top: 2%;'
		
		if(MyLibrary.f_check_valid(param.div_innerHTML)){
			div_id_txt.innerHTML = param.div_innerHTML			
		}
		div_id_imgtxt확인.appendChild(div_id_txt)
		
		div_id_확인 = document.createElement('div')	
		div_id_확인.id = 'div_id_확인';
		div_id_확인.style.cssText = 'background-color: #0076be;'
		
		//div_id_popup_main.innerHTML += div_id_확인.outerHTML
		div_id_imgtxt확인.appendChild(div_id_확인) 
		
		font_id_확인 = document.createElement('font')
		font_id_확인.id = 'font_id_확인';
		font_id_확인.style.cssText = 'color: white; margin-left: 46%;'  
		//div_id_확인.innerHTML += font_id_확인.outerHTML 
		
		b_id_확인 = document.createElement('b')
		b_id_확인.id='b_id_확인'
		b_id_확인.style.cssText = "display: inline-block; margin-top: 2%;"
		b_id_확인.innerText = '확인'
		
		font_id_확인.appendChild(b_id_확인)
		
		div_id_확인.appendChild(font_id_확인) 
		
		
		
		if(is_mobile){
			width_px = Math.ceil((window.innerWidth / 1.4)) 
			height_px = Math.ceil((window.innerHeight / 1.4)) 				
		}else if(is_desktop){
			width_px = Math.ceil((window.innerWidth / 4.4)) 
			height_px = Math.ceil((window.innerHeight / 4.4)) 		 	
		}
		
		c_width_px = 'width: ' + width_px + 'px;'
		c_height_px = 'height: ' + height_px + 'px;'
		
		
		if(is_mobile){
			div_id_popup_main.style.cssText += 'width: 100%; height: 100%;' 
			div_id_popup.style.cssText += 'margin-left: 5%; margin-top: 15%;'
			img_id_popup.style.cssText += 'width: 100%;'
			div_id_imgtxt확인.style.cssText += 'width: 95%; font-size: 20px;'
			div_id_txt.innerHTML = div_id_txt.innerHTML.replaceAll('<br>','').replaceAll('*','<br/>*') 
			div_id_확인.style.cssText += 'height: ' + Math.ceil( window.innerHeight * 0.091 ) + 'px;'
			
			b_id_확인.style.cssText += 'margin-top: 3%; font-size: 25px;'
		}else if(is_desktop){
			
			div_id_popup.style.cssText += 'margin-left: 35%; margin-top: 12%;'   
			
			div_id_img_height_px = Math.ceil(((height_px / 3) * 2.85))   
			div_id_img.style.cssText = c_width_px + 'height: '+ div_id_img_height_px + 'px;'
			img_id_popup.style.cssText = div_id_img.style.cssText
			
			
			
			div_id_txt_height_px = Math.ceil(((height_px / 3) * 3))
			div_id_txt.style.cssText = c_width_px + 'height: ' + div_id_txt_height_px + 'px;' + 'margin-left: 15%;' 
			
			
			div_id_확인_height_px = Math.ceil(height_px * 0.21)
			div_id_확인.style.cssText += c_width_px + 'height: ' + div_id_확인_height_px + 'px;';
			
			
			div_id_imgtxt확인_height_px = Math.ceil( (div_id_img_height_px + div_id_txt_height_px + div_id_확인_height_px) )
			div_id_imgtxt확인.style.cssText	+= c_width_px + 'height: ' + div_id_imgtxt확인_height_px + 'px; font-size: 20px;'
		}
		
		document.body.innerHTML = window.div_id_popup_main.outerHTML + document.body.innerHTML	
		
		document.querySelector("#div_id_확인").addEventListener('click',(e)=>{
		    //alert('z-index 가 메인 div 보다 높아야됨.')
		    
		    //공지사항 게시글페이지로 이동되게 ㄱ
		    if(MyLibrary.f_check_valid(param.location)){
				location.href = param.location;
			}
		    
		})		
	},
	
	removePhishingPopup: function(){
		div_id_popup_main = document.querySelector('#div_id_popup_main')
		if(MyLibrary.f_check_valid(div_id_popup_main)){
			div_id_popup_main.remove();
		}
	},
	
	
	"Request":{
		'Method':{
			createMethods: (p_parentElement)=>{ // MyHtmlCss.Request.Method.createMethods(p_parentElement)
				// 버튼 클릭 시 windoe.method_type = e.currentTarget.value  형태로 값이 들어감. 
				div = document.createElement('div')  
				p_parentElement.append(div)  
				
				font = document.createElement('font')
				font.style = "color: rgba(107,102,255,1.0);"
				font.innerHTML += 'method'
				div.append(font)

				fieldset = document.createElement('fieldset')
				fieldset.id = 'fieldset_id_method'
				fieldset.style="border-color: rgba(107,102,255,1.0);"
				div.append(fieldset)
				
				input_get = document.createElement('input')
				input_get.id="GET"
				input_get.class="input_class_method_type"
				input_get.type="radio" 
				input_get.name="method_type" 
				input_get.value="GET" 
				input_get.checked = true
				fieldset.append(input_get)
				
				font = document.createElement('font')	
				font.style="color: rgba(166,166,166,1.0);"
				font.innerHTML += `<b>GET</b></font>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`
				fieldset.append(font)    
				
				input_post = document.createElement('input')
				input_post.id="POST"
				input_post.class="input_class_method_type" 
				input_post.type="radio" 
				input_post.name="method_type" 
				input_post.value="POST" 
				fieldset.append(input_post)   

				font = document.createElement('font')
				font.style="color: rgba(166,166,166,1.0);"
				font.innerHTML+=`<b>POST</b></font>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`
				fieldset.append(font)
				
				for(var input of document.querySelectorAll('.input_class_method_type')){
					input.addEventListener('click',(e)=>{
						windoe.method_type = e.currentTarget.value     // 전역에 있는 메소드 타입으로 설정해야댐
					})
					 
				}
				
				
				return div
			}
		}
	},
	
	"DB":{ 
		createInputFields:(p_parentElement)=>{
			div = MyHtmlCss.createDivFontFieldset({ p_parentElement: p_parentElement , my_type:'DBMS',id_class_name: '1'}) 
			div.childNodes[0].style = `rgba(107,102,255,1.0);`
			div.childNodes[1].id = `fieldset_id_dbms`
			div.childNodes[1].style = `border-color: rgba(107,102,255,1.0);`
			//div.innerHTML+=`<font style="color: rgba(107,102,255,1.0);"><b>query type</b></font>`
			
			
			
			for(var dbms_type in Injection_Tool['SQL'].DBMS){
				
				input_font = MyHtmlCss.createRadioFont({p_parentElement: div.childNodes[1], my_type: `${dbms_type}`, id_class_name: '1' }) 
				input_font.input.name = `input_name_radio_dbms`  
				if(input_font.input.value === 'MYSQL')   input.checked = true  
			
				input_font.input.addEventListener('change',(e)=>{
					window.dbms_type = e.currentTarget.value   
					alert(  `window.dbms_type = ${window.dbms_type}`  )     
				})
				    
			} 
			div.childNodes[1].innerHTML+='<br/>'

			input = document.createElement('input')
			input.id = `input_id_db`; input.className = `input_class_db text_class`;input.type = 'text'; 
			input.placeholder = '데이터베이스 이름';
			input.title = '비어있을 시 ["GET"]["DATABASE"]["NAME"]의 값들이 쿼리문에 합쳐져서 요청'
			div.childNodes[1].append(input);
			div.childNodes[1].innerHTML+='<br/>' 

			input = document.createElement('input')
			input.id = `input_id_table`;input.className = `input_class_table text_class`;input.type = 'text';
			input.placeholder = '테이블 이름'
			input.title = '비어있을 시 ["GET"]["TABLE"]["NAME"]의 값들이 쿼리문에 합쳐져서 요청'
			div.childNodes[1].append(input)  
			
			 
			return div
		}   
	},
	"System":{
		"Local":{
			
		}
	}
}