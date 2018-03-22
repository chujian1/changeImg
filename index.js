/**
 * Created by ypj on 18-3-22.
 */

    const arr = ['img/1.jpg','img/2.jpg','img/3.jpg','img/4.jpg'];
    var Odiv = document.getElementById("container");
    var Oimg = Odiv.getElementsByTagName("img")[0];
    var Op = Odiv.getElementsByTagName("p")[0];
    var Oul = Odiv.getElementsByTagName("ul")[0];
    var Oli = Odiv.getElementsByTagName("li");
    var that=null;
    for(let i=0;i<arr.length;i++){
        Oul.innerHTML += '<li></li>';
    }

    function fn() {
            var num=0;
            Oimg.src = arr[num];
            Op.innerHTML = num+1 + '/' + arr.length;
            Oli[num].className = "active";
            that=Oli[num];
        }
    fn();
    for(let i=0;i<Oli.length;i++){
        Oli[i].index=i;
        Oli[i].onclick=function () {
            Oimg.src=arr[this.index];
            Op.innerHTML = this.index+1 + '/' + arr.length;
            that.className='';
            this.className="active";
            that=this;

          /*  for(let i=0;i<arr.length;i++){
                Oli[i].className='';
            }
            this.className="active";*/

        }
    }





