//����ħ����վ��
function addCookie0()
{
	//�����ղؼ�
if(document.all)
	window.externaddFavorite('http://www.yangtzeu.edu.cn','������ѧ');
else 
	if (window.sidebar)
		window.sidebar.addPanel('������ѧ','http://www.yangtzeu.edu.cn',"");
}
//FF:TypeError: window.sidebar.addPanel is not a function 
//IE��SCRIPT438: ����֧�֡�externaddFavorite�����Ի򷽷�
//360 chrome��û��Ӧ crtl+D ����
function setHomepage0(){
//������ҳ
if(document.all){
	document.body.style.behavior  = 'url(#default#homepage)';
	document.body.setHomePage('http://www.yangtzeu.edu.cn');
}
else if  (window.sidebar)
{
	if(window.netscape)
	{
		try{netscape.security.PrivilegeManager.enablePrivilege( "UniversalXPConnect");
	}
	catch(e){ alert( "�ò�����������ܾ�����������øù��ܣ����ڵ�ַ�������� about:config,Ȼ���� signed.applets.codebase_principal_support ֵ��Ϊtrue");}
	}
	var prefs  =  Components.classes['@mozilla.org/preferences-service;1'].getService(Components.interfaces.nsIPrefBranch); prefs.setCharPref( 'browser.startup.homepage','http://www.yangtzeu.edu.cn');
}
}
//FF:alert```````  Components �����Ѳ��޳�ʹ�ã����ܿ�ͻᱻ�Ƴ��� %E6%B5%8F%E8%A7%88%E5%99%A8.TypeError: Components.classes is undefined
//IE:����ȷ����
//360 chrome : û��Ӧ
//
function addFavorite1(){
    if (document.all){
        try{
            window.external.addFavorite(window.location.href,document.title);
        }catch(e){
            alert( "�����ղ�ʧ�ܣ���ʹ��Ctrl+D�������" );
        }

    }else if (window.sidebar){
        window.sidebar.addPanel(document.title, window.location.href, "");
     }else{
        alert( "�����ղ�ʧ�ܣ���ʹ��Ctrl+D�������" );
    }
}
//360 IE chrome�������ղ�ʧ�ܣ���ʹ��Ctrl+D������� �ܳɹ���
//FF :TypeError: window.sidebar.addPanel is not a function  crtl+D ����
function setHomepage1(){
    if (document.all){
        document.body.style.behavior='url(#default#homepage)';
          document.body.setHomePage(window.location.href);
    }else if (window.sidebar){
        if(netscape){
            try{
                netscape.security.PrivilegeManager.enablePrivilege("UniversalXPConnect");
            }catch (e){
                alert( "�ò�����������ܾ�����������øù��ܣ����ڵ�ַ�������� about:config,Ȼ���� debase_principal_support ֵ��Ϊtrue" );
            }
        }
        var prefs = Components.classes['/preferences-service;1'].getService(Components. interfaces.nsIPrefBranch);
        prefs.setCharPref('browser.startup.homepage',window.location.href);
    }else{
        alert('�����������֧���Զ��Զ�������ҳ, ��ʹ��������˵��ֶ�����!');
    }
}
//360 chrome��alert�����������֧���Զ��Զ�������ҳ, ��ʹ��������˵��ֶ�����!
//IE:SCRIPT5: �ܾ����ʡ�
//FF:Components �����Ѳ��޳�ʹ�ã����ܿ�ͻᱻ�Ƴ��� %E6%B5%8F%E8%A7%88%E5%99%A8.TypeError: Components.classes is undefined
//�����ղؼ�
function Addme() {
    url = document.URL;  //���Լ�����ҳ��ַ
    title = "****";  //���Լ�����ҳ����
    window.external.AddFavorite(url, title);
}
//IE��û��Ȩ��
//��Ϊ��ҳ
function SetHome(obj,vrl){
        try{
                obj.style.behavior='url(#default#homepage)';obj.setHomePage(vrl);
        }
        catch(e){
                if(window.netscape) {
                        try {
                                netscape.security.PrivilegeManager.enablePrivilege("UniversalXPConnect");
                        }
                        catch (e) {
                                alert("�˲�����������ܾ���\n�����������ַ�����롰about:config�����س�\nȻ�� [signed.applets.codebase_principal_support]��ֵ����Ϊ'true',˫�����ɡ�");
                        }
                        var prefs = Components.classes['@mozilla.org/preferences-service;1'].getService(Components.interfaces.nsIPrefBranch);
                        prefs.setCharPref('browser.startup.homepage',vrl);
                 }
        }
}
//IE���޷�Ӧ