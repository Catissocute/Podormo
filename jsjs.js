const min = document.getElementById('min');
const sec = document.getElementById('sec');
function start(){
    
    var xo = document.getElementById('t-inp').value;
    var xos = xo*60;
    var zo = document.getElementById('n-inp').value;
    var yo = document.getElementById('bt-inp').value;
    var yos = yo*60;
    window.x = xo;
    window.xs = xos;
    window.y = yo;
    window.ys =yos;
    window.z = zo;
    window.xo = xo;
    window.yo = yo;
    window.zo = zo;
    var bt = z-1;
    var t = (z*x)+bt*y;
    var idk = z+bt*y;
    var t2x =  [x,y,x];
    var t4x =  [x,y,x,y,x,y,x];
    var t6x =  [x,y,x,y,x,y,x,y,x,y,x];
    var t8x =  [x,y,x,y,x,y,x,y,x,y,x,y,x,y,x];
    var t10x = [x,y,x,y,x,y,x,y,x,y,x,y,x,y,x,y,x,y,x];
    console.log(x,z,y);
    if(y>x){
        document.write("well this is annoying but take 1 study time lower than 1 breaktime")
    }
    else if(z == 2){
        min.innerText = x;
        tf2();
        tfs2();
        disableit();
    }
    else if(z == 4){
        min.innerText = x;
        tf4();
        tfs4();
        disableit();
    }
    else if(z == 6){
        min.innerText = x;
        tf6();
        tfs6();
        disableit();
    }
    else if(z == 8){
        min.innerText = x;
        tf8();
        tfs8();
        disableit();
    }
    else if(z == 10){
        min.innerText = x;
        tf10();
        tfs10();
        disableit();
    }
    else{
        console.log("some error this message shouldn't load");
    }
}

function disableit(){
    document.getElementById('btn-start').disabled = true;
}
function tf2(){
  
    var inter1 = setInterval(function () {
        x = x-1;
        min.innerText = x;
   if (x == 0 ) {
    clearInterval(inter1);
    window.x = xo;
    window.y = yo;
     var inter2 = setInterval(function(){
        y= y-1;
        min.innerText = y;
     if(y == 0){
    clearInterval(inter2);
    window.x = xo;
    window.y = yo;
      var inter3 =  setInterval(function(){
            x = x-1;
            min.innerText = x;
            if (x == 0){
                clearInterval(inter3);
                window.x = xo;
                window.y = yo;
            }
        },60000);
     }
    }, 60000);
   }
}, 60000);

}





function tf4(){
  
    var inter1 = setInterval(function () {
        x = x-1;
        min.innerText = x;
    if (x == 0 ) {
        clearInterval(inter1);
        window.x = xo;
        window.y = yo;
        var inter2 = setInterval(function(){
            y= y-1;
            min.innerText = y;
            if(y == 0){
                clearInterval(inter2);
                window.x = xo;
                window.y = yo;
                var inter3 =  setInterval(function(){
                        x = x-1;
                        min.innerText = x;
                        if (x == 0){
                            clearInterval(inter3);
                            window.x = xo;
                            window.y = yo; 

                             var inter4 = setInterval(function(){
                                y= y-1;
                                min.innerText = y;
                                if(y == 0){
                                    clearInterval(inter4);
                                    window.x = xo;
                                    window.y = yo;
                                    var inter5 = setInterval(function(){
                                        x = x-1;
                                        min.innerText = x;
                                        if(x == 0){
                                            clearInterval(inter5);
                                            window.x = xo;
                                            window.y = yo;
                                             var inter6 = setInterval(function(){
                                                y= y-1;
                                                min.innerText = y;
                                                if (y==0){
                                                    clearInterval(inter6);
                                                    window.x = xo;
                                                    window.y = yo;
                                                    var inter7 = setInterval(function(){
                                                        x = x-1;
                                                        min.innerText = x;
                                                        if(x==0){
                                                            clearInterval(inter7);
                                                            window.x = xo;
                                                            window.y = yo;
                                                     }
                                                },60000);
                                            }
                                         },60000);
                                    }
                                },60000);
                             }
                        },60000);

                    }
                },60000);
            }
         }, 60000);
    }
}, 60000);

}




function tf6(){
  
    var inter1 = setInterval(function () {
        x = x-1;
        min.innerText = x;
    if (x == 0 ) {
        clearInterval(inter1);
        window.x = xo;
        window.y = yo;
        var inter2 = setInterval(function(){
            y= y-1;
            min.innerText = y;
            if(y == 0){
                clearInterval(inter2);
                window.x = xo;
                window.y = yo;
                var inter3 =  setInterval(function(){
                        x = x-1;
                        min.innerText = x;
                        if (x == 0){
                            clearInterval(inter3);
                            window.x = xo;
                            window.y = yo; 
                            var inter4 = setInterval(function(){
                                y= y-1;
                                min.innerText = y;
                                if(y == 0){
                                    clearInterval(inter4);
                                    window.x = xo;
                                    window.y = yo;
                                    var inter5 = setInterval(function(){
                                        x = x-1;
                                        min.innerText = x;
                                        if(x == 0){
                                            clearInterval(inter5);
                                            window.x = xo;
                                            window.y = yo;
                                             var inter6 = setInterval(function(){
                                                y= y-1;
                                                min.innerText = y;
                                                if (y==0){
                                                    clearInterval(inter6);
                                                    window.x = xo;
                                                    window.y = yo;
                                                    var inter7 = setInterval(function(){
                                                        x = x-1;
                                                        min.innerText = x;
                                                        if(x==0){
                                                            clearInterval(inter7);
                                                            window.x = xo;
                                                            window.y = yo;
                                                            var inter8 = setInterval(function(){
                                                                y= y-1;
                                                                min.innerText = y;
                                                                if(y == 0){
                                                                    clearInterval(inter8);
                                                                    window.x = xo;
                                                                    window.y = yo;
                                                                    var inter9 = setInterval(function(){
                                                                        x = x-1;
                                                                        min.innerText = x;
                                                                        if(x == 0){
                                                                            clearInterval(inter9);
                                                                            window.x = xo;
                                                                            window.y = yo;
                                                                             var inter10 = setInterval(function(){
                                                                                y= y-1;
                                                                                min.innerText = y;
                                                                                if (y==0){
                                                                                    clearInterval(inter10);
                                                                                    window.x = xo;
                                                                                    window.y = yo;
                                                                                    var inter11 = setInterval(function(){
                                                                                        x = x-1;
                                                                                        min.innerText = x;
                                                                                        if(x==0){
                                                                                            clearInterval(inter11);
                                                                                            window.x = xo;
                                                                                            window.y = yo;
                                                                                     }
                                                                                },60000)
                                                                            }
                                                                         },60000)
                                                                    }
                                                                },60000)
                                                             }
                                                        },60000)
                                                     }
                                                },60000)
                                            }
                                         },60000)
                                    }
                                },60000)
                             }
                        },60000)
                    }
                },60000);
            }
         }, 60000);
    }
}, 60000);

}




function tf8(){
  
    var inter1 = setInterval(function () {
        x = x-1;
        min.innerText = x;
    if (x == 0 ) {
        clearInterval(inter1);
        window.x = xo;
        window.y = yo;
        var inter2 = setInterval(function(){
            y= y-1;
            min.innerText = y;
            if(y == 0){
                clearInterval(inter2);
                window.x = xo;
                window.y = yo;
                var inter3 =  setInterval(function(){
                        x = x-1;
                        min.innerText = x;
                        if (x == 0){
                            clearInterval(inter3);
                            window.x = xo;
                            window.y = yo; 
                            var inter4 = setInterval(function(){
                                y= y-1;
                                min.innerText = y;
                                if(y == 0){
                                    clearInterval(inter4);
                                    window.x = xo;
                                    window.y = yo;
                                    var inter5 = setInterval(function(){
                                        x = x-1;
                                        min.innerText = x;
                                        if(x == 0){
                                            clearInterval(inter5);
                                            window.x = xo;
                                            window.y = yo;
                                             var inter6 = setInterval(function(){
                                                y= y-1;
                                                min.innerText = y;
                                                if (y==0){
                                                    clearInterval(inter6);
                                                    window.x = xo;
                                                    window.y = yo;
                                                    var inter7 = setInterval(function(){
                                                        x = x-1;
                                                        min.innerText = x;
                                                        if(x==0){
                                                            clearInterval(inter7);
                                                            window.x = xo;
                                                            window.y = yo;
                                                            var inter8 = setInterval(function(){
                                                                y= y-1;
                                                                min.innerText = y;
                                                                if(y == 0){
                                                                    clearInterval(inter8);
                                                                    window.x = xo;
                                                                    window.y = yo;
                                                                    var inter9 = setInterval(function(){
                                                                        x = x-1;
                                                                        min.innerText = x;
                                                                        if(x == 0){
                                                                            clearInterval(inter9);
                                                                            window.x = xo;
                                                                            window.y = yo;
                                                                             var inter10 = setInterval(function(){
                                                                                y= y-1;
                                                                                min.innerText = y;
                                                                                if (y==0){
                                                                                    clearInterval(inter10);
                                                                                    window.x = xo;
                                                                                    window.y = yo;
                                                                                    var inter11 = setInterval(function(){
                                                                                        x = x-1;
                                                                                        min.innerText = x;
                                                                                        if(x==0){
                                                                                            clearInterval(inter11);
                                                                                            window.x = xo;
                                                                                            window.y = yo;
                                                                                            var inter12 = setInterval(function(){
                                                                                                y= y-1;
                                                                                                min.innerText = y;
                                                                                                if(y == 0){
                                                                                                    clearInterval(inter12);
                                                                                                    window.x = xo;
                                                                                                    window.y = yo;
                                                                                                    var inter13 = setInterval(function(){
                                                                                                        x = x-1;
                                                                                                        min.innerText = x;
                                                                                                        if(x == 0){
                                                                                                            clearInterval(inter13);
                                                                                                            window.x = xo;
                                                                                                            window.y = yo;
                                                                                                             var inter14 = setInterval(function(){
                                                                                                                y= y-1;
                                                                                                                min.innerText = y;
                                                                                                                if (y==0){
                                                                                                                    clearInterval(inter14);
                                                                                                                    window.x = xo;
                                                                                                                    window.y = yo;
                                                                                                                    var inter15 = setInterval(function(){
                                                                                                                        x = x-1;
                                                                                                                        min.innerText = x;
                                                                                                                        if(x==0){
                                                                                                                            clearInterval(inter15);
                                                                                                                            window.x = xo;
                                                                                                                            window.y = yo;
                                                                                                                     }
                                                                                                                },60000)
                                                                                                            }
                                                                                                         },60000)
                                                                                                    }
                                                                                                },60000)
                                                                                             }
                                                                                        },60000)
                                                                                        
                                                                                     }
                                                                                },60000)
                                                                            }
                                                                         },60000)
                                                                    }
                                                                },60000)
                                                             }
                                                        },60000)
                                                     }
                                                },60000)
                                            }
                                         },60000)
                                    }
                                },60000)
                             }
                        },60000)
                    }
                },60000);
            }
         }, 60000);
    }
}, 60000);

}




function tf10(){
  
    var inter1 = setInterval(function () {
        x = x-1;
        min.innerText = x;
    if (x == 0 ) {
        clearInterval(inter1);
        window.x = xo;
        window.y = yo;
        var inter2 = setInterval(function(){
            y= y-1;
            min.innerText = y;
            if(y == 0){
                clearInterval(inter2);
                window.x = xo;
                window.y = yo;
                var inter3 =  setInterval(function(){
                        x = x-1;
                        min.innerText = x;
                        if (x == 0){
                            clearInterval(inter3);
                            window.x = xo;
                            window.y = yo; 
                            var inter4 = setInterval(function(){
                                y= y-1;
                                min.innerText = y;

                                if(y == 0){
                                    clearInterval(inter4);
                                    window.x = xo;
                                    window.y = yo;
                                    var inter5 = setInterval(function(){
                                        x = x-1;
                                        min.innerText = x;
                                        if(x == 0){
                                            clearInterval(inter5);
                                            window.x = xo;
                                            window.y = yo;
                                             var inter6 = setInterval(function(){
                                                y= y-1;
                                                min.innerText = y;
                                                if (y==0){
                                                    clearInterval(inter6);
                                                    window.x = xo;
                                                    window.y = yo;
                                                    var inter7 = setInterval(function(){
                                                        x = x-1;
                                                        min.innerText = x;
                                                        if(x==0){
                                                            clearInterval(inter7);
                                                            window.x = xo;
                                                            window.y = yo;
                                                            var inter8 = setInterval(function(){
                                                                y= y-1;
                                                                min.innerText = y;
                                                                if(y == 0){
                                                                    clearInterval(inter8);
                                                                    window.x = xo;
                                                                    window.y = yo;
                                                                    var inter9 = setInterval(function(){
                                                                        x = x-1;
                                                                        min.innerText = x;
                                                                        if(x == 0){
                                                                            clearInterval(inter9);
                                                                            window.x = xo;
                                                                            window.y = yo;
                                                                             var inter10 = setInterval(function(){
                                                                                y= y-1;
                                                                                min.innerText = y;
                                                                                if (y==0){
                                                                                    clearInterval(inter10);
                                                                                    window.x = xo;
                                                                                    window.y = yo;
                                                                                    var inter11 = setInterval(function(){
                                                                                        x = x-1;
                                                                                        min.innerText = x;
                                                                                        if(x==0){
                                                                                            clearInterval(inter11);
                                                                                            window.x = xo;
                                                                                            window.y = yo;
                                                                                            var inter12 = setInterval(function(){
                                                                                                y= y-1;
                                                                                                min.innerText = y;
                                                                                                if(y == 0){
                                                                                                    clearInterval(inter12);
                                                                                                    window.x = xo;
                                                                                                    window.y = yo;
                                                                                                    var inter13 = setInterval(function(){
                                                                                                        x = x-1;
                                                                                                        min.innerText = x;
                                                                                                        if(x == 0){
                                                                                                            clearInterval(inter13);
                                                                                                            window.x = xo;
                                                                                                            window.y = yo;
                                                                                                             var inter14 = setInterval(function(){
                                                                                                                y= y-1;
                                                                                                                min.innerText = y;
                                                                                                                if (y==0){
                                                                                                                    clearInterval(inter14);
                                                                                                                    window.x = xo;
                                                                                                                    window.y = yo;
                                                                                                                    var inter15 = setInterval(function(){
                                                                                                                        x = x-1;
                                                                                                                        min.innerText = x;
                                                                                                                        if(x==0){
                                                                                                                            clearInterval(inter15);
                                                                                                                            window.x = xo;
                                                                                                                            window.y = yo;
                                                                                                                            var inter16 = setInterval(function(){
                                                                                                                                y= y-1;
                                                                                                                                min.innerText = y;
                                                                                                                                if(y == 0){
                                                                                                                                    clearInterval(inter16);
                                                                                                                                    window.x = xo;
                                                                                                                                    window.y = yo;
                                                                                                                                    var inter17 = setInterval(function(){
                                                                                                                                        x = x-1;
                                                                                                                                        min.innerText = x;
                                                                                                                                        if(x == 0){
                                                                                                                                            clearInterval(inter17);
                                                                                                                                            window.x = xo;
                                                                                                                                            window.y = yo;
                                                                                                                                             var inter18 = setInterval(function(){
                                                                                                                                                y= y-1;
                                                                                                                                                min.innerText = y;
                                                                                                                                                if (y==0){
                                                                                                                                                    clearInterval(inter18);
                                                                                                                                                    window.x = xo;
                                                                                                                                                    window.y = yo;
                                                                                                                                                    var inter19 = setInterval(function(){
                                                                                                                                                        x = x-1;
                                                                                                                                                        min.innerText = x;
                                                                                                                                                        if(x==0){
                                                                                                                                                            clearInterval(inter19);
                                                                                                                                                            window.x = xo;
                                                                                                                                                            window.y = yo;
                                                                                                                                                     }
                                                                                                                                                },60000);
                                                                                                                                            }
                                                                                                                                         },60000);
                                                                                                                                    }
                                                                                                                                },60000);
                                                                                                                             }
                                                                                                                        },60000);
                                                                                                
                                                                                                                     }
                                                                                                                },60000)
                                                                                                            }
                                                                                                         },60000)
                                                                                                    }
                                                                                                },60000)
                                                                                             }
                                                                                        },60000)
                                                                                        
                                                                                     }
                                                                                },60000)
                                                                            }
                                                                         },60000)
                                                                    }
                                                                },60000)
                                                             }
                                                        },60000)
                                                     }
                                                },60000)
                                            }
                                         },60000)
                                    }
                                },60000)
                             }
                        },60000)
                    }
                },60000);
            }
         }, 60000);
    }
}, 60000);

}
function tfs2(){
  
    var inter1 = setInterval(function () {
        xs = xs-1;
        min.innerTexst = xs;
   if (xs == 0 ) {
    clearInterval(inter1);
    window.xs = xsos;
    window.ys = yoss;
     var inter2 = setInterval(function(){
        ys= ys-1;
        min.innerTexst = ys;
     if(ys == 0){
    clearInterval(inter2);
    window.xs = xsos;
    window.ys = yos;
      var inter3 =  setInterval(function(){
            xs = xs-1;
            min.innerTexst = xs;
            if (xs == 0){
                clearInterval(inter3);
                window.xs = xsos;
                window.ys = yos;
            }
        },1000);
     }
    }, 1000);
   }
}, 1000);

}





function tfs4(){
  
    var inter1 = setInterval(function () {
        xs = xs-1;
        min.innerTexst = xs;
    if (xs == 0 ) {
        clearInterval(inter1);
        window.xs = xsos;
        window.ys = yos;
        var inter2 = setInterval(function(){
            ys= ys-1;
            min.innerTexst = ys;
            if(ys == 0){
                clearInterval(inter2);
                window.xs = xsos;
                window.ys = yos;
                var inter3 =  setInterval(function(){
                        xs = xs-1;
                        min.innerTexst = xs;
                        if (xs == 0){
                            clearInterval(inter3);
                            window.xs = xsos;
                            window.ys = yos; 

                             var inter4 = setInterval(function(){
                                ys= ys-1;
                                min.innerTexst = ys;
                                if(ys == 0){
                                    clearInterval(inter4);
                                    window.xs = xsos;
                                    window.ys = yos;
                                    var inter5 = setInterval(function(){
                                        xs = xs-1;
                                        min.innerTexst = xs;
                                        if(xs == 0){
                                            clearInterval(inter5);
                                            window.xs = xsos;
                                            window.ys = yos;
                                             var inter6 = setInterval(function(){
                                                ys= ys-1;
                                                min.innerTexst = ys;
                                                if (ys==0){
                                                    clearInterval(inter6);
                                                    window.xs = xsos;
                                                    window.ys = yos;
                                                    var inter7 = setInterval(function(){
                                                        xs = xs-1;
                                                        min.innerTexst = xs;
                                                        if(xs==0){
                                                            clearInterval(inter7);
                                                            window.xs = xsos;
                                                            window.ys = yos;
                                                     }
                                                },1000);
                                            }
                                         },1000);
                                    }
                                },1000);
                             }
                        },1000);

                    }
                },1000);
            }
         }, 1000);
    }
}, 1000);

}




function tfs6(){
  
    var inter1 = setInterval(function () {
        xs = xs-1;
        min.innerTexst = xs;
    if (xs == 0 ) {
        clearInterval(inter1);
        window.xs = xsos;
        window.ys = yos;
        var inter2 = setInterval(function(){
            ys= ys-1;
            min.innerTexst = ys;
            if(ys == 0){
                clearInterval(inter2);
                window.xs = xsos;
                window.ys = yos;
                var inter3 =  setInterval(function(){
                        xs = xs-1;
                        min.innerTexst = xs;
                        if (xs == 0){
                            clearInterval(inter3);
                            window.xs = xsos;
                            window.ys = yos; 
                            var inter4 = setInterval(function(){
                                ys= ys-1;
                                min.innerTexst = ys;
                                if(ys == 0){
                                    clearInterval(inter4);
                                    window.xs = xsos;
                                    window.ys = yos;
                                    var inter5 = setInterval(function(){
                                        xs = xs-1;
                                        min.innerTexst = xs;
                                        if(xs == 0){
                                            clearInterval(inter5);
                                            window.xs = xsos;
                                            window.ys = yos;
                                             var inter6 = setInterval(function(){
                                                ys= ys-1;
                                                min.innerTexst = ys;
                                                if (ys==0){
                                                    clearInterval(inter6);
                                                    window.xs = xsos;
                                                    window.ys = yos;
                                                    var inter7 = setInterval(function(){
                                                        xs = xs-1;
                                                        min.innerTexst = xs;
                                                        if(xs==0){
                                                            clearInterval(inter7);
                                                            window.xs = xsos;
                                                            window.ys = yos;
                                                            var inter8 = setInterval(function(){
                                                                ys= ys-1;
                                                                min.innerTexst = ys;
                                                                if(ys == 0){
                                                                    clearInterval(inter8);
                                                                    window.xs = xsos;
                                                                    window.ys = yos;
                                                                    var inter9 = setInterval(function(){
                                                                        xs = xs-1;
                                                                        min.innerTexst = xs;
                                                                        if(xs == 0){
                                                                            clearInterval(inter9);
                                                                            window.xs = xsos;
                                                                            window.ys = yos;
                                                                             var inter10 = setInterval(function(){
                                                                                ys= ys-1;
                                                                                min.innerTexst = ys;
                                                                                if (ys==0){
                                                                                    clearInterval(inter10);
                                                                                    window.xs = xsos;
                                                                                    window.ys = yos;
                                                                                    var inter11 = setInterval(function(){
                                                                                        xs = xs-1;
                                                                                        min.innerTexst = xs;
                                                                                        if(xs==0){
                                                                                            clearInterval(inter11);
                                                                                            window.xs = xsos;
                                                                                            window.ys = yos;
                                                                                     }
                                                                                },1000)
                                                                            }
                                                                         },1000)
                                                                    }
                                                                },1000)
                                                             }
                                                        },1000)
                                                     }
                                                },1000)
                                            }
                                         },1000)
                                    }
                                },1000)
                             }
                        },1000)
                    }
                },1000);
            }
         }, 1000);
    }
}, 1000);

}




function tfs2(){
  
    var inter1 = setInterval(function () {
        xs = xs-1;
        sec.innerText = xs;
   if (xs == 0 ) {
    clearInterval(inter1);
    window.xs = xsos;
    window.ys = yoss;
     var inter2 = setInterval(function(){
        ys= ys-1;
        sec.innerText = ys;
     if(ys == 0){
    clearInterval(inter2);
    window.xs = xsos;
    window.ys = yos;
      var inter3 =  setInterval(function(){
            xs = xs-1;
            sec.innerText = xs;
            if (xs == 0){
                clearInterval(inter3);
                window.xs = xsos;
                window.ys = yos;
            }
        },1000);
     }
    }, 1000);
   }
}, 1000);

}





function tfs4(){
  
    var inter1 = setInterval(function () {
        xs = xs-1;
        sec.innerText = xs;
    if (xs == 0 ) {
        clearInterval(inter1);
        window.xs = xsos;
        window.ys = yos;
        var inter2 = setInterval(function(){
            ys= ys-1;
            sec.innerText = ys;
            if(ys == 0){
                clearInterval(inter2);
                window.xs = xsos;
                window.ys = yos;
                var inter3 =  setInterval(function(){
                        xs = xs-1;
                        sec.innerText = xs;
                        if (xs == 0){
                            clearInterval(inter3);
                            window.xs = xsos;
                            window.ys = yos; 

                             var inter4 = setInterval(function(){
                                ys= ys-1;
                                sec.innerText = ys;
                                if(ys == 0){
                                    clearInterval(inter4);
                                    window.xs = xsos;
                                    window.ys = yos;
                                    var inter5 = setInterval(function(){
                                        xs = xs-1;
                                        sec.innerText = xs;
                                        if(xs == 0){
                                            clearInterval(inter5);
                                            window.xs = xsos;
                                            window.ys = yos;
                                             var inter6 = setInterval(function(){
                                                ys= ys-1;
                                                sec.innerText = ys;
                                                if (ys==0){
                                                    clearInterval(inter6);
                                                    window.xs = xsos;
                                                    window.ys = yos;
                                                    var inter7 = setInterval(function(){
                                                        xs = xs-1;
                                                        sec.innerText = xs;
                                                        if(xs==0){
                                                            clearInterval(inter7);
                                                            window.xs = xsos;
                                                            window.ys = yos;
                                                     }
                                                },1000);
                                            }
                                         },1000);
                                    }
                                },1000);
                             }
                        },1000);

                    }
                },1000);
            }
         }, 1000);
    }
}, 1000);

}




function tfs6(){
  
    var inter1 = setInterval(function () {
        xs = xs-1;
        sec.innerText = xs;
    if (xs == 0 ) {
        clearInterval(inter1);
        window.xs = xsos;
        window.ys = yos;
        var inter2 = setInterval(function(){
            ys= ys-1;
            sec.innerText = ys;
            if(ys == 0){
                clearInterval(inter2);
                window.xs = xsos;
                window.ys = yos;
                var inter3 =  setInterval(function(){
                        xs = xs-1;
                        sec.innerText = xs;
                        if (xs == 0){
                            clearInterval(inter3);
                            window.xs = xsos;
                            window.ys = yos; 
                            var inter4 = setInterval(function(){
                                ys= ys-1;
                                sec.innerText = ys;
                                if(ys == 0){
                                    clearInterval(inter4);
                                    window.xs = xsos;
                                    window.ys = yos;
                                    var inter5 = setInterval(function(){
                                        xs = xs-1;
                                        sec.innerText = xs;
                                        if(xs == 0){
                                            clearInterval(inter5);
                                            window.xs = xsos;
                                            window.ys = yos;
                                             var inter6 = setInterval(function(){
                                                ys= ys-1;
                                                sec.innerText = ys;
                                                if (ys==0){
                                                    clearInterval(inter6);
                                                    window.xs = xsos;
                                                    window.ys = yos;
                                                    var inter7 = setInterval(function(){
                                                        xs = xs-1;
                                                        sec.innerText = xs;
                                                        if(xs==0){
                                                            clearInterval(inter7);
                                                            window.xs = xsos;
                                                            window.ys = yos;
                                                            var inter8 = setInterval(function(){
                                                                ys= ys-1;
                                                                sec.innerText = ys;
                                                                if(ys == 0){
                                                                    clearInterval(inter8);
                                                                    window.xs = xsos;
                                                                    window.ys = yos;
                                                                    var inter9 = setInterval(function(){
                                                                        xs = xs-1;
                                                                        sec.innerText = xs;
                                                                        if(xs == 0){
                                                                            clearInterval(inter9);
                                                                            window.xs = xsos;
                                                                            window.ys = yos;
                                                                             var inter10 = setInterval(function(){
                                                                                ys= ys-1;
                                                                                sec.innerText = ys;
                                                                                if (ys==0){
                                                                                    clearInterval(inter10);
                                                                                    window.xs = xsos;
                                                                                    window.ys = yos;
                                                                                    var inter11 = setInterval(function(){
                                                                                        xs = xs-1;
                                                                                        sec.innerText = xs;
                                                                                        if(xs==0){
                                                                                            clearInterval(inter11);
                                                                                            window.xs = xsos;
                                                                                            window.ys = yos;
                                                                                     }
                                                                                },1000)
                                                                            }
                                                                         },1000)
                                                                    }
                                                                },1000)
                                                             }
                                                        },1000)
                                                     }
                                                },1000)
                                            }
                                         },1000)
                                    }
                                },1000)
                             }
                        },1000)
                    }
                },1000);
            }
         }, 1000);
    }
}, 1000);

}




function tfs8(){
  
    var inter1 = setInterval(function () {
        xs = xs-1;
        sec.innerText = xs;
    if (xs == 0 ) {
        clearInterval(inter1);
        window.xs = xsos;
        window.ys = yos;
        var inter2 = setInterval(function(){
            ys= ys-1;
            sec.innerText = ys;
            if(ys == 0){
                clearInterval(inter2);
                window.xs = xsos;
                window.ys = yos;
                var inter3 =  setInterval(function(){
                        xs = xs-1;
                        sec.innerText = xs;
                        if (xs == 0){
                            clearInterval(inter3);
                            window.xs = xsos;
                            window.ys = yos; 
                            var inter4 = setInterval(function(){
                                ys= ys-1;
                                sec.innerText = ys;
                                if(ys == 0){
                                    clearInterval(inter4);
                                    window.xs = xsos;
                                    window.ys = yos;
                                    var inter5 = setInterval(function(){
                                        xs = xs-1;
                                        sec.innerText = xs;
                                        if(xs == 0){
                                            clearInterval(inter5);
                                            window.xs = xsos;
                                            window.ys = yos;
                                             var inter6 = setInterval(function(){
                                                ys= ys-1;
                                                sec.innerText = ys;
                                                if (ys==0){
                                                    clearInterval(inter6);
                                                    window.xs = xsos;
                                                    window.ys = yos;
                                                    var inter7 = setInterval(function(){
                                                        xs = xs-1;
                                                        sec.innerText = xs;
                                                        if(xs==0){
                                                            clearInterval(inter7);
                                                            window.xs = xsos;
                                                            window.ys = yos;
                                                            var inter8 = setInterval(function(){
                                                                ys= ys-1;
                                                                sec.innerText = ys;
                                                                if(ys == 0){
                                                                    clearInterval(inter8);
                                                                    window.xs = xsos;
                                                                    window.ys = yos;
                                                                    var inter9 = setInterval(function(){
                                                                        xs = xs-1;
                                                                        sec.innerText = xs;
                                                                        if(xs == 0){
                                                                            clearInterval(inter9);
                                                                            window.xs = xsos;
                                                                            window.ys = yos;
                                                                             var inter10 = setInterval(function(){
                                                                                ys= ys-1;
                                                                                sec.innerText = ys;
                                                                                if (ys==0){
                                                                                    clearInterval(inter10);
                                                                                    window.xs = xsos;
                                                                                    window.ys = yos;
                                                                                    var inter11 = setInterval(function(){
                                                                                        xs = xs-1;
                                                                                        sec.innerText = xs;
                                                                                        if(xs==0){
                                                                                            clearInterval(inter11);
                                                                                            window.xs = xsos;
                                                                                            window.ys = yos;
                                                                                            var inter12 = setInterval(function(){
                                                                                                ys= ys-1;
                                                                                                sec.innerText = ys;
                                                                                                if(ys == 0){
                                                                                                    clearInterval(inter12);
                                                                                                    window.xs = xsos;
                                                                                                    window.ys = yos;
                                                                                                    var inter13 = setInterval(function(){
                                                                                                        xs = xs-1;
                                                                                                        sec.innerText = xs;
                                                                                                        if(xs == 0){
                                                                                                            clearInterval(inter13);
                                                                                                            window.xs = xsos;
                                                                                                            window.ys = yos;
                                                                                                             var inter14 = setInterval(function(){
                                                                                                                ys= ys-1;
                                                                                                                sec.innerText = ys;
                                                                                                                if (ys==0){
                                                                                                                    clearInterval(inter14);
                                                                                                                    window.xs = xsos;
                                                                                                                    window.ys = yos;
                                                                                                                    var inter15 = setInterval(function(){
                                                                                                                        xs = xs-1;
                                                                                                                        sec.innerText = xs;
                                                                                                                        if(xs==0){
                                                                                                                            clearInterval(inter15);
                                                                                                                            window.xs = xsos;
                                                                                                                            window.ys = yos;
                                                                                                                     }
                                                                                                                },1000)
                                                                                                            }
                                                                                                         },1000)
                                                                                                    }
                                                                                                },1000)
                                                                                             }
                                                                                        },1000)
                                                                                        
                                                                                     }
                                                                                },1000)
                                                                            }
                                                                         },1000)
                                                                    }
                                                                },1000)
                                                             }
                                                        },1000)
                                                     }
                                                },1000)
                                            }
                                         },1000)
                                    }
                                },1000)
                             }
                        },1000)
                    }
                },1000);
            }
         }, 1000);
    }
}, 1000);

}




function tfs10(){
  
    var inter1 = setInterval(function () {
        xs = xs-1;
        sec.innerText = xs;
    if (xs == 0 ) {
        clearInterval(inter1);
        window.xs = xsos;
        window.ys = yos;
        var inter2 = setInterval(function(){
            ys= ys-1;
            sec.innerText = ys;
            if(ys == 0){
                clearInterval(inter2);
                window.xs = xsos;
                window.ys = yos;
                var inter3 =  setInterval(function(){
                        xs = xs-1;
                        sec.innerText = xs;
                        if (xs == 0){
                            clearInterval(inter3);
                            window.xs = xsos;
                            window.ys = yos; 
                            var inter4 = setInterval(function(){
                                ys= ys-1;
                                sec.innerText = ys;

                                if(ys == 0){
                                    clearInterval(inter4);
                                    window.xs = xsos;
                                    window.ys = yos;
                                    var inter5 = setInterval(function(){
                                        xs = xs-1;
                                        sec.innerText = xs;
                                        if(xs == 0){
                                            clearInterval(inter5);
                                            window.xs = xsos;
                                            window.ys = yos;
                                             var inter6 = setInterval(function(){
                                                ys= ys-1;
                                                sec.innerText = ys;
                                                if (ys==0){
                                                    clearInterval(inter6);
                                                    window.xs = xsos;
                                                    window.ys = yos;
                                                    var inter7 = setInterval(function(){
                                                        xs = xs-1;
                                                        sec.innerText = xs;
                                                        if(xs==0){
                                                            clearInterval(inter7);
                                                            window.xs = xsos;
                                                            window.ys = yos;
                                                            var inter8 = setInterval(function(){
                                                                ys= ys-1;
                                                                sec.innerText = ys;
                                                                if(ys == 0){
                                                                    clearInterval(inter8);
                                                                    window.xs = xsos;
                                                                    window.ys = yos;
                                                                    var inter9 = setInterval(function(){
                                                                        xs = xs-1;
                                                                        sec.innerText = xs;
                                                                        if(xs == 0){
                                                                            clearInterval(inter9);
                                                                            window.xs = xsos;
                                                                            window.ys = yos;
                                                                             var inter10 = setInterval(function(){
                                                                                ys= ys-1;
                                                                                sec.innerText = ys;
                                                                                if (ys==0){
                                                                                    clearInterval(inter10);
                                                                                    window.xs = xsos;
                                                                                    window.ys = yos;
                                                                                    var inter11 = setInterval(function(){
                                                                                        xs = xs-1;
                                                                                        sec.innerText = xs;
                                                                                        if(xs==0){
                                                                                            clearInterval(inter11);
                                                                                            window.xs = xsos;
                                                                                            window.ys = yos;
                                                                                            var inter12 = setInterval(function(){
                                                                                                ys= ys-1;
                                                                                                sec.innerText = ys;
                                                                                                if(ys == 0){
                                                                                                    clearInterval(inter12);
                                                                                                    window.xs = xsos;
                                                                                                    window.ys = yos;
                                                                                                    var inter13 = setInterval(function(){
                                                                                                        xs = xs-1;
                                                                                                        sec.innerText = xs;
                                                                                                        if(xs == 0){
                                                                                                            clearInterval(inter13);
                                                                                                            window.xs = xsos;
                                                                                                            window.ys = yos;
                                                                                                             var inter14 = setInterval(function(){
                                                                                                                ys= ys-1;
                                                                                                                sec.innerText = ys;
                                                                                                                if (ys==0){
                                                                                                                    clearInterval(inter14);
                                                                                                                    window.xs = xsos;
                                                                                                                    window.ys = yos;
                                                                                                                    var inter15 = setInterval(function(){
                                                                                                                        xs = xs-1;
                                                                                                                        sec.innerText = xs;
                                                                                                                        if(xs==0){
                                                                                                                            clearInterval(inter15);
                                                                                                                            window.xs = xsos;
                                                                                                                            window.ys = yos;
                                                                                                                            var inter16 = setInterval(function(){
                                                                                                                                ys= ys-1;
                                                                                                                                sec.innerText = ys;
                                                                                                                                if(ys == 0){
                                                                                                                                    clearInterval(inter16);
                                                                                                                                    window.xs = xsos;
                                                                                                                                    window.ys = yos;
                                                                                                                                    var inter17 = setInterval(function(){
                                                                                                                                        xs = xs-1;
                                                                                                                                        sec.innerText = xs;
                                                                                                                                        if(xs == 0){
                                                                                                                                            clearInterval(inter17);
                                                                                                                                            window.xs = xsos;
                                                                                                                                            window.ys = yos;
                                                                                                                                             var inter18 = setInterval(function(){
                                                                                                                                                ys= ys-1;
                                                                                                                                                sec.innerText = ys;
                                                                                                                                                if (ys==0){
                                                                                                                                                    clearInterval(inter18);
                                                                                                                                                    window.xs = xsos;
                                                                                                                                                    window.ys = yos;
                                                                                                                                                    var inter19 = setInterval(function(){
                                                                                                                                                        xs = xs-1;
                                                                                                                                                        sec.innerText = xs;
                                                                                                                                                        if(xs==0){
                                                                                                                                                            clearInterval(inter19);
                                                                                                                                                            window.xs = xsos;
                                                                                                                                                            window.ys = yos;
                                                                                                                                                     }
                                                                                                                                                },1000);
                                                                                                                                            }
                                                                                                                                         },1000);
                                                                                                                                    }
                                                                                                                                },1000);
                                                                                                                             }
                                                                                                                        },1000);
                                                                                                
                                                                                                                     }
                                                                                                                },1000)
                                                                                                            }
                                                                                                         },1000)
                                                                                                    }
                                                                                                },1000)
                                                                                             }
                                                                                        },1000)
                                                                                        
                                                                                     }
                                                                                },1000)
                                                                            }
                                                                         },1000)
                                                                    }
                                                                },1000)
                                                             }
                                                        },1000)
                                                     }
                                                },1000)
                                            }
                                         },1000)
                                    }
                                },1000)
                             }
                        },1000)
                    }
                },1000);
            }
         }, 1000);
    }
}, 1000);

}