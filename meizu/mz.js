/**
 * Created by 10587 on 2017/9/3.
 */
//window.onload = function() {

    //var div1 = document.getElementsByClassName("div1")[0];
    //var divx = document.getElementsByClassName("x")[0];
    //
    //divx.onclick = function () {
    //    div1.style.display = "none";
    //}
    //---------------�����ʾ1------------------------
    //var li1 = document.getElementById("li-1");
    //var dli1 = document.getElementById("dli1");
    //var a1 = li1.getElementsByTagName("a")[0]
    //
    //li1.onmouseover = function () {
    //    dli1.style.display = "block";
    //    a1.style.color = "deepskyblue"
    //}
    //li1.onmouseout = function () {
    //    dli1.style.display = "none";
    //    a1.style.color = ""
    //}
    ////--------------------------------------
    //var li2 = document.getElementById("li-2");
    //var dli2 = document.getElementById("dli2");
    //var a2 = li2.getElementsByTagName("a")[0]
    //
    //li2.onmouseover = function () {
    //    dli2.style.display = "block";
    //    a2.style.color = "deepskyblue"
    //}
    //li2.onmouseout = function () {
    //    dli2.style.display = "none";
    //    a2.style.color = ""
    //}
    ////--------------------------------------
    //var li3 = document.getElementById("li-3");
    //var dli3 = document.getElementById("dli3");
    //var a3 = li3.getElementsByTagName("a")[0]
    //
    //li3.onmouseover = function () {
    //    dli3.style.display = "block";
    //    a3.style.color = "deepskyblue"
    //}
    //li3.onmouseout = function () {
    //    dli3.style.display = "none";
    //    a3.style.color = ""
    //}
    ////--------------------------------------
    //var li4 = document.getElementById("li-4");
    //var dli4 = document.getElementById("dli4");
    //var a4 = li4.getElementsByTagName("a")[0]
    //
    //li4.onmouseover = function () {
    //    dli4.style.display = "block";
    //    a4.style.color = "deepskyblue"
    //}
    //li4.onmouseout = function () {
    //    dli4.style.display = "none";
    //    a4.style.color = ""
    //}
    //-------------�ֲ�ͼ�ԱߵĲ���------------------
//}

//����������
$(function(){
    $(".x").click(function(){
        $(".div1").slideUp(1000)
    })
})
//��¼�͹�����
$(function(){
    //BUG1 û�аѶ�ʱ����Ϊ�� �����л���ʱ�� ��ʱ���޷�ȡ��
    //��ʱ����Ҫ�� 1.��ն�ʱ��
    var timers = null
    $("#DL").mouseover(function(){
        //2.ɾ����ʱ��
        clearInterval(timers)
        $("#DL1").css("display","block")
    })
    $("#DL").mouseout(function(){
        //3.���ö�ʱ��
        timers=setInterval(function(){
            $("#DL1").css("display","none")
        },100)
    })
})
$(function(){
    //BUG1 û�аѶ�ʱ����Ϊ�� �����л���ʱ�� ��ʱ���޷�ȡ��
    var timers = null
    $("#GW").mouseover(function(){
        clearInterval(timers)
        $("#GW1").css("display","block")
    })
    $("#GW").mouseout(function(){
        timers=setInterval(function(){
        $("#GW1").css("display","none")
        },100)
    })
})
//�ֻ��»�����
//������DIV�е�li ������Li�����䵭
//BUG2 �����mouseoverð�� Ӱ�����
$(function(){
    $("#dli1>ul>li").mouseenter(function(){
        $(this).siblings().stop().fadeTo(400,0.4)
    })
    $("#dli1>ul>li").mouseleave(function(){
        $(this).parent().find("li").stop().fadeTo(400,1)
    })
    //---------2----------
    $("#dli2>ul>li").mouseenter(function(){
        $(this).siblings().stop().fadeTo(400,0.4)
    })
    $("#dli2>ul>li").mouseleave(function(){
        $(this).parent().find("li").stop().fadeTo(400,1)
    })
    //----------3-----------
    $("#dli3>ul>li").mouseenter(function(){
        $(this).siblings().stop().fadeTo(400,0.4)
    })
    $("#dli3>ul>li").mouseleave(function(){
        $(this).parent().find("li").stop().fadeTo(400,1)
    })
    //----------4-------------
    $("#dli4>ul>li").mouseenter(function(){
        $(this).siblings().stop().fadeTo(400,0.4)
    })
    $("#dli4>ul>li").mouseleave(function(){
        $(this).parent().find("li").stop().fadeTo(400,1)
    })
})
//���뵱ǰli��ʾli�е�div
//�����ֻ�
$(function(){
    $("#li-1").mouseenter(function(){
        //������li��ʾdiv��ͬʱ div�е�liҲҪ��������
        $("#dli1").stop().slideDown(400,function(){
            //��ȡdiv�е�li ����animate����
            $("#dli1>ul>li").stop().animate({
                //�����right��-25��Ϊ0 �ﵽ�˶�Ч��
                right:0,
                //��ɫ��0��Ϊ1 �ﵽ���޵��е�Ч��
                opacity:1
            },400)
        });
    })
    //����ƿ��� ����ԭ״
    $("#li-1").mouseleave(function(){
        $("#dli1").stop().slideUp(400,function(){
            //�ƿ������λ�ú���ɫ������ǰ��λ��
            // ��β���Ч�� ֱ�ӷ��ؾͺ���css����
            $("#dli1>ul>li").css({
                right:-25,
                opacity:0
            })
        })
    })
//�����ֻ�
    $("#li-2").mouseenter(function(){
        $("#dli2").stop().slideDown(400,function(){
            $("#dli2>ul>li").animate({
                right:0,
                opacity:1
            },400)
        })
    })
    $("#li-2").mouseleave(function(){
        $("#dli2").stop().slideUp(400,function(){
            $("#dli2>ul>li").css({
                right:-25,
                opacity:0
            })
        })
    })
    //������ѧ
    $("#li-3").mouseenter(function(){
        $("#dli3").stop().slideDown(400,function(){
            $("#dli3>ul>li").animate({
                right:0,
                opacity:1
            },400)
        })
    })
    $("#li-3").mouseleave(function(){
        $("#dli3").stop().slideUp(400,function(){
            $("#dli3>ul>li").css({
                right:-25,
                opacity:0
            })
        })
    })
    //�������
    $("#li-4").mouseenter(function(){
        $("#dli4").stop().slideDown(400,function(){
            $("#dli4>ul>li").animate({
                right:0,
                opacity:1
            },400)
        })
    })
    $("#li-4").mouseleave(function(){
        $("#dli4").stop().slideUp(400,function(){
            $("#dli4>ul>li").css({
                right:-25,
                opacity:0
            })
        })
    })
})

//�ֻ��һ�����
$(function(){
    //��ȡul��ÿ��li������ֵ
    //���������liʱ ��ʾ���li�е�div
    $("#d3ul>li").mouseenter(function(){
        var num = $(this).index()
        $("#d3ul div").eq(num).css("display","block")
    })
    //����Ƴ�liʱ ����Li�е�div
    $("#d3ul>li").mouseleave(function(){
        var num = $(this).index()
        $("#d3ul div").eq(num).css("display","none")
    })
})
//--------�ֲ�ͼ------------
$(function(){
    //��ȡol��li������ֵ
    //������ul���li����ol��li���ƶ����ƶ�
    $("#d3ol>li").mouseover(function(){
        var idx = $(this).index()
        $("#d3ol>li").eq(idx).css("backgroundColor","orange").siblings().css("backgroundColor","")
        $("#d3ul1>li").eq(idx).fadeIn(500).siblings().fadeOut(500)
        num = idx;
    })
    //��ն�ʱ��
    var timer = null;
    //����ֵĬ��Ϊ0
    var num = 0;
    //���ö�ʱ�� ͼƬÿ���������ƶ�һ��
    function autoPlay(){
        num++;
        if(num > $("#d3ul1>li").length-1){
            num = 0;
        }
        $("#d3ol>li").eq(num).css("backgroundColor","orange").siblings().css("backgroundColor","")
        $("#d3ul1>li").eq(num).fadeIn(500).siblings().fadeOut(500)
    }
    timer = setInterval(autoPlay,2000);
    //������ͼƬɾ����ʱ��
    $(".div3-1").mouseenter(function(){
        clearInterval(timer);
    })
    //����Ƴ�ͼƬʹ�ö�ʱ��
    $(".div3-1").mouseleave(function(){
        timer = setInterval(autoPlay,2000);
    })
    //������<> ��ʾ����ɫ
    $(".spleft").mouseenter(function(){
        $(this).css("backgroundColor","rgba(0,0,0,0.5)")
    })
    $(".spleft").mouseleave(function(){
        $(this).css("backgroundColor","")
    })
    $(".spright").mouseenter(function(){
        $(this).css("backgroundColor","rgba(0,0,0,0.5)")
    })
    $(".spright").mouseleave(function(){
        $(this).css("backgroundColor","")
    })
    //���������< ͼƬ�����ƶ�
    $(".spleft").click(function(){
        num--;
        if(num < 0) {
            num = $("#d3ul1>li").length-1;
        }
        $("#d3ol>li").eq(num).css("backgroundColor","orange").siblings().css("backgroundColor","")
        $("#d3ul1>li").eq(num).fadeIn(500).siblings().fadeOut(500)
    })
    //������Ҳ��> ͼƬ�����ƶ�
    $(".spright").click(function(){
        //��������ķ���
        autoPlay()
    })
})
//��Ʒ�Ƽ������л�
    $(function(){
        $(".d5-right").click(function(){
            $(".D6left").animate({marginLeft:"-1240px"},1000)
            $(".d5-right").css("opacity","0.4").siblings().css("opacity","1")
        })
        $(".d5-left").click(function(){
            $(".D6left").animate({marginLeft:"0px"},1000)
            $(".d5-left").css("opacity","0.4").siblings().css("opacity","1")
        })
    })
//������ʾ
    $(function(){
        //������ʾ�˵�
        $(window).scroll(function(){
            if($(this).scrollTop() >= $(".div3").outerHeight()){
                $(".div10").css("display","block").addClass("gddw");
            }else{
                $(".div10").css("display","none").addClass("");
            }
        })
        //���빺�ﳵ �ú��ӱ�� �����ƶ�Ч��
        $("#guc").mouseenter(function(){
            $("#guc").css("backgroundColor","#b6b0b1").animate({
                width:110,
                marginLeft:-60,
            },400)
            $("#guc").click(function(){
                alert("Silly boy, poor people don't have shopping carts ");
            })
        })
        $("#guc").mouseleave(function(){
            $("#guc").css("backgroundColor","#ccc").animate({
                width:50,
                marginLeft:0
            })
        })
        //���붥�� �ٵ�� ���ض���
        $("#db").mouseenter(function(){
            $("#db").css("backgroundColor","#b6b0b1").animate({
                width:110,
                marginLeft:-60,
            },400)

        })

        $("#db").mouseleave(function(){
            $("#db").css("backgroundColor","#ccc").animate({
                width:50,
                marginLeft:0
            })
        })
        //����app��ʾ��ά��
        $(".app").mouseenter(function(){
            $(".ewm").css("display","block");
            $(".app").css("backgroundColor","#b6b0b1")
        })
        $(".app").mouseleave(function(){
            $(".ewm").css("display","none");
            $(".app").css("backgroundColor","#ccc")
        })
    })
    //�±����л�
    $(function(){
        $("#erji").mouseenter(function(){
            $("#derji").css("display","block")
            $("#yuanban").css("display","none")
            $("#dshebei").css("display","none")
            $("#djianshu").css("display","none")
            $(".div8-1-p").css("color","inherit").css("borderBottom","none")
        })
        $("#chaozhi").mouseenter(function(){
            $("#derji").css("display","none")
            $("#dshebei").css("display","none")
            $("#djianshu").css("display","none")
            $("#yuanban").css("display","block")
            $(".div8-1-p").css("color","deepskyblue").css("borderBottom","2px solid deepskyblue")
        })
        $("#shebei").mouseenter(function(){
            $("#derji").css("display","none")
            $("#dshebei").css("display","block")
            $("#yuanban").css("display","none")
            $("#djianshu").css("display","none")
            $(".div8-1-p").css("color","inherit").css("borderBottom","none")
        })
        $("#jianshu").mouseenter(function(){
            $("#derji").css("display","none")
            $("#dshebei").css("display","none")
            $("#yuanban").css("display","none")
            $("#djianshu").css("display","block")
            $(".div8-1-p").css("color","inherit").css("borderBottom","none")
        })
        $("#shuju").mouseenter(function(){
            $("#dshuju").css("display","block")
            $("#banyuan").css("display","none")
            $("#dbaohu").css("display","none")
            $(".div8-1-p").css("color","inherit").css("borderBottom","none")
        })
        $("#tuijian").mouseenter(function(){
            $("#dshuju").css("display","none")
            $("#dbaohu").css("display","none")
            $("#banyuan").css("display","block")
            $(".div8-1-p").css("color","deepskyblue").css("borderBottom","2px solid deepskyblue")
        })
        $("#baohu").mouseenter(function(){
            $("#banyuan").css("display","none")
            $("#dbaohu").css("display","block")
            $("#dshuju").css("display","none")
            $(".div8-1-p").css("color","inherit").css("borderBottom","none")
        })
    })
        $(function(){
            $(".div9-2-sp1").mouseenter(function(){
                $(this).css("backgroundPosition","-222px 55px")
            })
            $(".div9-2-sp1").mouseleave(function(){
                $(this).css("backgroundPosition","-222px 101px")
            })
            $(".div9-2-sp2").mouseenter(function(){
                $(this).css("backgroundPosition","-305px 55px")
            })
            $(".div9-2-sp2").mouseleave(function(){
                $(this).css("backgroundPosition","-305px 101px")
            })
            $(".div9-2-sp3").mouseenter(function(){
                $(this).css("backgroundPosition","-347px 55px")
            })
            $(".div9-2-sp3").mouseleave(function(){
                $(this).css("backgroundPosition","-347px 101px")
            })
        })
        $(function(){
            var timers = null
            $(".div9-2-sp2").mouseenter(function(){
                clearInterval(timers)
                $(".div9-2-dg").css("display","block")
            })
            $(".div9-2-sp2").mouseleave(function(){
                timers=setInterval(function(){
                    $(".div9-2-dg").css("display","none")
                },100)
            })
        })
        //������� �������
        $(function(){
            //���� �Ż����ض���
            $("#db").click(function(){
                $("html,body").animate({

                    scrollTop:0,

                },200,"linear")
            })
        })



