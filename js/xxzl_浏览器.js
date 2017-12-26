//简明魔法网站：
function addCookie0()
{
	//加入收藏夹
if(document.all)
	window.externaddFavorite('http://www.yangtzeu.edu.cn','长江大学');
else 
	if (window.sidebar)
		window.sidebar.addPanel('长江大学','http://www.yangtzeu.edu.cn',"");
}
//FF:TypeError: window.sidebar.addPanel is not a function 
//IE：SCRIPT438: 对象不支持“externaddFavorite”属性或方法
//360 chrome：没反应 crtl+D 可以
function setHomepage0(){
//设置首页
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
	catch(e){ alert( "该操作被浏览器拒绝，如果想启用该功能，请在地址栏内输入 about:config,然后将项 signed.applets.codebase_principal_support 值该为true");}
	}
	var prefs  =  Components.classes['@mozilla.org/preferences-service;1'].getService(Components.interfaces.nsIPrefBranch); prefs.setCharPref( 'browser.startup.homepage','http://www.yangtzeu.edu.cn');
}
}
//FF:alert```````  Components 对象已不赞成使用，它很快就会被移除。 %E6%B5%8F%E8%A7%88%E5%99%A8.TypeError: Components.classes is undefined
//IE:弹出确定框
//360 chrome : 没反应
//
function addFavorite1(){
    if (document.all){
        try{
            window.external.addFavorite(window.location.href,document.title);
        }catch(e){
            alert( "加入收藏失败，请使用Ctrl+D进行添加" );
        }

    }else if (window.sidebar){
        window.sidebar.addPanel(document.title, window.location.href, "");
     }else{
        alert( "加入收藏失败，请使用Ctrl+D进行添加" );
    }
}
//360 IE chrome：加入收藏失败，请使用Ctrl+D进行添加 能成功！
//FF :TypeError: window.sidebar.addPanel is not a function  crtl+D 可以
function setHomepage1(){
    if (document.all){
        document.body.style.behavior='url(#default#homepage)';
          document.body.setHomePage(window.location.href);
    }else if (window.sidebar){
        if(netscape){
            try{
                netscape.security.PrivilegeManager.enablePrivilege("UniversalXPConnect");
            }catch (e){
                alert( "该操作被浏览器拒绝，如果想启用该功能，请在地址栏内输入 about:config,然后将项 debase_principal_support 值该为true" );
            }
        }
        var prefs = Components.classes['/preferences-service;1'].getService(Components. interfaces.nsIPrefBranch);
        prefs.setCharPref('browser.startup.homepage',window.location.href);
    }else{
        alert('您的浏览器不支持自动自动设置首页, 请使用浏览器菜单手动设置!');
    }
}
//360 chrome：alert您的浏览器不支持自动自动设置首页, 请使用浏览器菜单手动设置!
//IE:SCRIPT5: 拒绝访问。
//FF:Components 对象已不赞成使用，它很快就会被移除。 %E6%B5%8F%E8%A7%88%E5%99%A8.TypeError: Components.classes is undefined
//加入收藏夹
function Addme() {
    url = document.URL;  //你自己的主页地址
    title = "****";  //你自己的主页名称
    window.external.AddFavorite(url, title);
}
//IE：没有权限
//设为首页
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
                                alert("此操作被浏览器拒绝！\n请在浏览器地址栏输入“about:config”并回车\n然后将 [signed.applets.codebase_principal_support]的值设置为'true',双击即可。");
                        }
                        var prefs = Components.classes['@mozilla.org/preferences-service;1'].getService(Components.interfaces.nsIPrefBranch);
                        prefs.setCharPref('browser.startup.homepage',vrl);
                 }
        }
}
//IE：无反应