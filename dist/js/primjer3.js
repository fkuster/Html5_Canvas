    var ort2;
     
    var xLast2,yLast2,zLast2;
    var sx2,sy2,px2,py2;
    var XMIN2, XMAX2, YMIN2, YMAX2;
    var gr2;
    
    var matrica2;
    var kut2=0;
    var kutt=0;
    
    var canvas3;
    var ab, bb, cc;
    
    var korak=1;
    function func2() {
        window.addEventListener("keypress", pritisni3, true);
        matrica2 = izradiMatricu(4,4,0);
        kut=0;
    canvas3 = document.getElementById("treci");
    if (canvas3.getContext)
    {
        c2 = canvas3 .getContext('2d');
        ort2 = Ortho(c2,-10,10,-10,10,canvas3.width,canvas3.height);
        izracunaj(2,-5,2,-3,5,-3);
        crtaj2();
    }
    
    
    function crtaj2()
    {
        
        identitet();
        c2.clearRect(0, 0, canvas3.width, canvas3.height);
        c2.fillText("Animacija slijeda transformacija", 50, 50); 
        c2.fillText("Trenutni kut rotacije"+kut2, 50, 10);
        c2.fillText("Kocka je duljine stranice 3", 300, 10);
        c2.fillText("Tocka na pravcu (2,-5,-3)", 300, 50);
        c2.fillText("Vektor smijera pravca (-3,5,-3)", 300, 100);
        c2.strokeStyle = 'blue';
        kor_osi();
        c2.strokeStyle = 'green';
        pravac();
        rotiraj(2,-5,2,aa,bb,cc,kutt);
        c2.strokeStyle = 'red';
        kocka3d(3);
        identitet();
        c2.strokeStyle = 'black';
    }
    
    
    function myTimer() {
            
            
        var fi =kut2;
        var d = Math.sqrt((bb*bb)+(cc*cc));
        var alfa=(Math.asin(bb/d))*(180/3.14);
        var beta=(Math.asin(aa))*(180/3.14);        
        
        switch(korak) {
    case 1:
        {
            kut2+=10;
            crtaj2();
            c2.fillText("Korak 1 = pomakni(2,-5,2)", 50, 100);
            rotiraj(2,-5,2,aa,bb,cc,kutt); 
            pomakni(2,-5,2);
            kocka3d(3);
            korak+=1;
        }
        break;
    case 2:
        {   
            crtaj2(); 
            c2.fillText("Korak 2 =  rotirajX(-alfa)", 50, 100);
        rotiraj(2,-5,2,aa,bb,cc,kutt);
            pomakni(2,-5,2);        
            rotirajX(-alfa);
            kocka3d(3);
            korak+=1;
        }
        break;
     case 3:
        {
            
            crtaj2();
            c2.fillText("Korak 3 =  rotirajY(beta)", 50, 100);
        rotiraj(2,-5,2,aa,bb,cc,kutt);
            pomakni(2,-5,2);        
            rotirajX(-alfa);
            rotirajY(beta);
            kocka3d(3);
            korak+=1;
        }        
        break;
     case 4:
        {
            
            crtaj2();
            c2.fillText("Korak 4 =  rotirajZ(fi)", 50, 100);
        rotiraj(2,-5,2,aa,bb,cc,kutt);
            pomakni(2,-5,2);        
            rotirajX(-alfa);
            rotirajY(beta);
            rotirajZ(fi);
            kocka3d(3);
            korak+=1;
        }        
        break;
     case 5:
        {            
            crtaj2();
            c2.fillText("Korak 5 =  rotirajY(-beta)", 50, 100);
        rotiraj(2,-5,2,aa,bb,cc,kutt);
            pomakni(2,-5,2);        
            rotirajX(-alfa);
            rotirajY(beta);
            rotirajZ(fi);
            rotirajY(-beta);
            kocka3d(3);
            korak+=1;
        }        
        break;
     case 6:
        { 
            crtaj2();
            c2.fillText("Korak 6 =  rotirajX(alfa)", 50, 100);
        rotiraj(2,-5,2,aa,bb,cc,kutt);
            pomakni(2,-5,2);        
            rotirajX(-alfa);
            rotirajY(beta);
            rotirajZ(fi);
            rotirajY(-beta);
            rotirajX(alfa);
            kocka3d(3);
            korak+=1;
           }        
           break;
     case 7:
        {
            crtaj2();
            c2.fillText("Korak 7 =  pomakni(-2,5,-2)", 50, 100);
            pomakni(2,-5,2);        
            rotirajX(-alfa);
            rotirajY(beta);
            rotirajZ(fi);
            rotirajY(-beta);
            rotirajX(alfa);
            pomakni(-2,5,-2);
            kocka3d(3);
            korak=1;
            kutt+=10;
        }        
        break;
    default:
        {break;}
    }
         
        if(kut2===360)kut2=0;
        if(kutt===360)kutt=0
}
    
    function pritisni3(e) 
    {        
        
        if (e.keyCode === 83) { // A 
        var myVar=setInterval(function () {myTimer()}, 2000);

    }

        
    }
    
    
    function identitet()
    {
        matrica2 = izradiMatricu(4,4,0);
        matrica2[0][0]=1;
        matrica2[1][1]=1;
        matrica2[2][2]=1;
        matrica2[3][3]=1;
    }
    
    function kocka3d(a) 
    { 
        postaviNa(-a/2,-a/2,-a/2);
        linijaDo(a/2,-a/2,-a/2);
        linijaDo(a/2,a/2,-a/2);
        linijaDo(-a/2,a/2,-a/2);
        linijaDo(-a/2,-a/2,-a/2);
        linijaDo(-a/2,-a/2,a/2);
        linijaDo(a/2,-a/2,a/2);
        linijaDo(a/2,a/2,a/2);
        linijaDo(-a/2,a/2,a/2);
        linijaDo(-a/2,-a/2,a/2);
        postaviNa(a/2,-a/2,-a/2);
        linijaDo(a/2,-a/2,a/2);
        postaviNa(a/2,a/2,-a/2);
        linijaDo(a/2,a/2,a/2);
        postaviNa(-a/2,a/2,-a/2);
        linijaDo(-a/2,a/2,a/2); 
    }
    
    function izracunaj(x1,y1,z1,x2,y2,z2)
    {
        var nazivnik = Math.sqrt(((x2-x1)*(x2-x1))+((y2-y1)*(y2-y1))+((z2-z1)*(z2-z1)));
        aa=(x2-x1)/nazivnik;
        bb=(y2-y1)/nazivnik;
        cc=(z2-z1)/nazivnik;
        
    }
    
    function pravac()
    {
        postaviNa(2,-5,2);
        linijaDo(-3,5,-3);
    }
    
    function kor_osi()
    {
        postaviNa(-10,0,0);
        linijaDo(10,0,0);
        
        postaviNa(0,-10,0);
        linijaDo(0,10,0);
    }
    
   function izradiMatricu(numrows, numcols, initial){
   var arr = [];
   for (var i = 0; i < numrows; ++i){
      var columns = [];
      for (var j = 0; j < numcols; ++j){
         columns[j] = initial;
      }
      arr[i] = columns;
    }
    return arr;
    }
    
    
    function pomakni(px, py, pz)
    {
        var m1  = izradiMatricu(4,4,0);
        m1[0][0]=1;
        m1[1][1]=1;
        m1[2][2]=1;
        m1[3][3]=1;
        m1[0][3]=px;
        m1[1][3]=py;
        m1[2][3]=pz;
        mult(m1);
    }    
    
    function rotirajX (kut)
    {
        
        var fi = kut * Math.PI / 180;
        var cosfi=Math.cos(fi);
        var sinfi=Math.sin(fi); 
        
        var m1  = izradiMatricu(4,4,0);
        m1[0][0]=1;
        m1[1][1]=cosfi;
        m1[1][2]=-sinfi;
        m1[2][1]=sinfi;
        m1[2][2]=cosfi;
        m1[3][3]=1;
        
        mult(m1);
    }
    
    function rotirajY (kut)
    {
        var fi = kut * Math.PI / 180;
        var cosfi=Math.cos(fi);
        var sinfi=Math.sin(fi);    
        var m1  = izradiMatricu(4,4,0);
        m1[0][0]=cosfi;
        m1[0][2]=sinfi;
        m1[1][1]=1;
        m1[2][0]=-sinfi;
        m1[2][2]=cosfi;
        m1[3][3]=1;
        mult(m1);
    }
    
    function rotirajZ (kut)
    {
        var fi = kut * Math.PI / 180;
        var cosfi=Math.cos(fi);
        var sinfi=Math.sin(fi);  
        var m1  = izradiMatricu(4,4,0);
        m1[0][0]=cosfi;
        m1[0][1]=-sinfi;
        m1[1][0]=sinfi;
        m1[1][1]=cosfi;
        m1[2][2]=1;
        m1[3][3]=1;
        mult(m1);
    }
    
    function mult(m)
    {
        var r1 = matrica2.length;
        var s1 = matrica2[0].length;
        var s2 = m[0].length;        
        var m1 = izradiMatricu(r1,s2,0);
        
        for (var i = 0 ; i<r1; i++)
        {
            for(var j =0;j<s2;j++)
            {
                for(var k = 0; k<s1;k++)
                {
                    m1[i][j]+= matrica2[i][k] * m[k][j];
                    
                }
            }
        }
     matrica2 = m1;
    }   
    
    function rotiraj(x0, y0, z0,u1, u2, u3, kut)
    {
        var fi =kut;
        var d = Math.sqrt((u2*u2)+(u3*u3));
        var alfa=(Math.asin(u2/d))*(180/3.14);
        var beta=(Math.asin(u1))*(180/3.14);        
        pomakni(x0,y0,z0);
        rotirajX(-alfa);
        rotirajY(beta);
        rotirajZ(fi);
        rotirajY(-beta);
        rotirajX(alfa);
        pomakni(-x0,-y0,-z0);
    }
    
    //////////////////////////////////////////////////////////////////////
    //tu pocinje ortho
    
    function Ortho(g,xmin, xmax, ymin, ymax, xsize, ysize) 
    {
        sx2 = xsize/(xmax-xmin);
        sy2 = ysize/(ymin-ymax);
        px2 = -sx2*xmin;
        py2 = -sy2*ymax;
        gr2 = g;
        XMIN2 = xmin;
        XMAX2 = xmax;
        YMIN2 = ymin;
        YMAX2 = ymax;
    }
    
    function x_to_pix(x) 
    {
        return parseInt(sx2*x+px2);
    }
    
    function y_to_pix(y) 
    {
        return parseInt(sy2*y+py2);
    }
    
   function postaviNa(x, y, z) 
    {
        xLast2 = matrica2[0][0]*x + matrica2[0][1]*y + matrica2[0][2]*z+matrica2[0][3];
        yLast2 = matrica2[1][0]*x + matrica2[1][1]*y + matrica2[1][2]*z+matrica2[1][3];
        zLast2 = matrica2[2][0]*x + matrica2[2][1]*y + matrica2[2][2]*z+matrica2[2][3];
    }   
    
    function linijaDo(x, y, z) 
    {
        var x1, y1, x2, y2;
        x1 = x_to_pix(xLast2);
        y1 = y_to_pix(yLast2);
        xLast2 = matrica2[0][0]*x + matrica2[0][1]*y + matrica2[0][2]*z+matrica2[0][3];
        yLast2 = matrica2[1][0]*x + matrica2[1][1]*y + matrica2[1][2]*z+matrica2[1][3];
        zLast2 = matrica2[2][0]*x + matrica2[2][1]*y + matrica2[2][2]*z+matrica2[2][3];
        x2 = x_to_pix(xLast2);
        y2 = y_to_pix(yLast2);
        
        c2.lineWidth = 1;
        c2.beginPath();        
        c2.moveTo(x1,y1);
        c2.lineTo(x2,y2);
        
        c2.stroke();
        
    }
    
    
    }