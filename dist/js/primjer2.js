    var ort1;
     
    var xLast1,yLast1,zLast1;
    var sx1,sy1,px1,py1;
    var XMIN1, XMAX1, YMIN1, YMAX1;
    var gr1;
    
    var matrica1;
    var kut=0;
    
    var canvas2;
    var a, b, c;
    function func1() {
        window.addEventListener("keypress", pritisni2, true);
        matrica1 = izradiMatricu(4,4,0);
    
    canvas2 = document.getElementById("drugi");
    if (canvas2.getContext)
    {
        c1 = canvas2 .getContext('2d');
        c1.strokeStyle = 'black';
        crtaj1();
    }
    
    function identitet()
    {
        matrica1[0][0]=1;
        matrica1[1][1]=1;
        matrica1[2][2]=1;
        matrica1[3][3]=1;
    }
    
    function crtaj1()
    {
        identitet();
        ort1 = Ortho(c1,-10,10,-10,10,canvas2.width,canvas2.height);
        c1.fillText("Trenutni kut rotacije = "+kut, 50, 50);        
        pravac();
        pomakni(5,5,5);
        identitet();
        izracunaj(2,-5,2,-3,5,-3);
        rotiraj(2,-5,2,a,b,c,kut);
        kocka3d(3);
        
    }
    
    function pritisni2(e) 
    {        
        if (e.keyCode === 65) { // A
        kut+=1;   
        c1.clearRect(0, 0, canvas2.width, canvas2.height);
        crtaj1();
    }
    if(kut===360)kut=0;
        
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
        a=(x2-x1)/nazivnik;
        b=(y2-y1)/nazivnik;
        c=(z2-z1)/nazivnik;
        
    }
    
    function pravac()
    {
        postaviNa(2,-5,2);
        linijaDo(-3,5,-3);
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
    
    function identitet()
    {
        matrica1 = izradiMatricu(4,4,0);
        matrica1[0][0]=1;
        matrica1[1][1]=1;
        matrica1[2][2]=1;
        matrica1[3][3]=1;
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
        var r1 = matrica1.length;
        var s1 = matrica1[0].length;
        var s2 = m[0].length;        
        var m1 = izradiMatricu(r1,s2,0);
        
        for (var i = 0 ; i<r1; i++)
        {
            for(var j =0;j<s2;j++)
            {
                for(var k = 0; k<s1;k++)
                {
                    m1[i][j]+= matrica1[i][k] * m[k][j];
                    
                }
            }
        }
     matrica1 = m1;
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
        sx1 = xsize/(xmax-xmin);
        sy1 = ysize/(ymin-ymax);
        px1 = -sx1*xmin;
        py1 = -sy1*ymax;
        gr1 = g;
        XMIN1 = xmin;
        XMAX1 = xmax;
        YMIN1 = ymin;
        YMAX1 = ymax;
    }
    
    function x_to_pix(x) 
    {
        return parseInt(sx1*x+px1);
    }
    
    function y_to_pix(y) 
    {
        return parseInt(sy1*y+py1);
    }
    
   function postaviNa(x, y, z) 
    {
        xLast1 = matrica1[0][0]*x + matrica1[0][1]*y + matrica1[0][2]*z+matrica1[0][3];
        yLast1 = matrica1[1][0]*x + matrica1[1][1]*y + matrica1[1][2]*z+matrica1[1][3];
        zLast1 = matrica1[2][0]*x + matrica1[2][1]*y + matrica1[2][2]*z+matrica1[2][3];
    }   
    
    function linijaDo(x, y, z) 
    {
        var x1, y1, x2, y2;
        x1 = x_to_pix(xLast1);
        y1 = y_to_pix(yLast1);
        xLast1 = matrica1[0][0]*x + matrica1[0][1]*y + matrica1[0][2]*z+matrica1[0][3];
        yLast1 = matrica1[1][0]*x + matrica1[1][1]*y + matrica1[1][2]*z+matrica1[1][3];
        zLast1 = matrica1[2][0]*x + matrica1[2][1]*y + matrica1[2][2]*z+matrica1[2][3];
        x2 = x_to_pix(xLast1);
        y2 = y_to_pix(yLast1);
        
        c1.lineWidth = 1;
        c1.beginPath();        
        c1.moveTo(x1,y1);
        c1.lineTo(x2,y2);
        
        c1.stroke();
        
    }
    
    
    }