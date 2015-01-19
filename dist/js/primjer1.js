    var ort;
    var c;    
    var c1;   
    var xLast,yLast,zLast;
    var sx,sy,px,py;
    var XMIN, XMAX, YMIN, YMAX;
    var gr;
    
    var matrica;
    var kutx=0;
    var kuty=0;
    var kutz=0;
    var canvas;
    window.onload = function func() {
        
        window.addEventListener("keypress", pritisni, true);
        
        func1(); //DRUGI PRIMJER
        func2();//treci primjer
        matrica = izradiMatricu(4,4,0);
    
    
    
    canvas = document.getElementById("prvi");
    
    if (canvas.getContext)
    {
        //prvi canvas
        c = canvas .getContext('2d');
        c.strokeStyle = 'black';
        identitet();        
        crtaj();
    }
    
    
    function identitet()
    {
        matrica[0][0]=1;
        matrica[1][1]=1;
        matrica[2][2]=1;
        matrica[3][3]=1;       
    }
    
    function crtaj()
    {
        identitet();
        
        ort = Ortho(c,-5,5,-5,5,canvas.width,canvas.height);
        c.fillText("X = " +kutx, 75, 50);
        c.fillText("Y = " +kuty, 200, 50);
        c.fillText("Z = " +kutz, 325, 50);
        rotirajX(kutx);
        rotirajY(kuty);
        rotirajZ(kutz);
        kocka3d(5);
    }
    
    function pritisni(e) 
    {        
        if(kutx === 360 || kutx===-360){kutx=0;}
        if(kuty === 360 || kuty===-360){kuty=0;}
        if(kutz === 360 || kutz===-360){kutz=0;}
    if (e.keyCode === 72) { // H
        kutx+=1;   
        c.clearRect(0, 0, canvas.width, canvas.height);
        crtaj();
    }
    if (e.keyCode === 74) { // J
        kuty+=1;
        c.clearRect(0, 0, canvas.width, canvas.height);
        crtaj();
    }
    if (e.keyCode === 75) { // K
        kutz+=1;
        c.clearRect(0, 0, canvas.width, canvas.height);
        crtaj();
    }
    
    if (e.keyCode === 90) { // Z
        kutx-=1;
        c.clearRect(0, 0, canvas.width, canvas.height);
        crtaj();
    }
    
    if (e.keyCode === 85) { // U
        kuty-=1;
        c.clearRect(0, 0, canvas.width, canvas.height);
        crtaj();
    }
    
    if (e.keyCode === 73) { // I
        kutz-=1;
        c.clearRect(0, 0, canvas.width, canvas.height);
        crtaj();
    } 
    
    if (e.keyCode === 82) { // RESET
        kutx=0;
        kuty=0;
        kutz=0;        
        c.clearRect(0, 0, canvas.width, canvas.height);
        crtaj();
    } 
    
        
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
    
    
    /////////////////tu je pocetak MT3D
    
    
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
        matrica = izradiMatricu(4,4,0);
        matrica[0][0]=1;
        matrica[1][1]=1;
        matrica[2][2]=1;
        matrica[3][3]=1;
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
        var r1 = matrica.length;
        var s1 = matrica[0].length;
        var s2 = m[0].length;        
        var m1 = izradiMatricu(r1,s2,0);
        
        for (var i = 0 ; i<r1; i++)
        {
            for(var j =0;j<s2;j++)
            {
                for(var k = 0; k<s1;k++)
                {
                    m1[i][j]+= matrica[i][k] * m[k][j];
                    
                }
            }
        }
     matrica = m1;
    }   
    
    function rotiraj(x0, y0, z0,u1, u2, u3, kut)
    {
        
        var fi =kut;
        var d = Math.sqrt((u2*u2)+(u3*u3));
        var alfa=(Math.asin(u2/d))*(180/MATH.PI);
        var beta=(Math.asin(u1))*(180/MATH.PI);        
        pomakni(x0,y0,z0);
        rotirajX(-alfa);
        rotirajY(beta);
        rotirajZ(fi);
        rotirajY(-beta);
        rotirajX(alfa);
        pomakni(-x0,-y0,-z0);
        

        
    }
    function Ortho(g,xmin, xmax, ymin, ymax, xsize, ysize) 
    {
        sx = xsize/(xmax-xmin);
        sy = ysize/(ymin-ymax);
        px = -sx*xmin;
        py = -sy*ymax;
        gr = g;
        XMIN = xmin;
        XMAX = xmax;
        YMIN = ymin;
        YMAX = ymax;
    }
    
    function x_to_pix(x) 
    {
        return parseInt(sx*x+px);
    }
    
    function y_to_pix(y) 
    {
        return parseInt(sy*y+py);
    }
    
   function postaviNa(x, y, z) 
    {
        xLast = matrica[0][0]*x + matrica[0][1]*y + matrica[0][2]*z+matrica[0][3];
        yLast = matrica[1][0]*x + matrica[1][1]*y + matrica[1][2]*z+matrica[1][3];
        zLast = matrica[2][0]*x + matrica[2][1]*y + matrica[2][2]*z+matrica[2][3];
    }   
    
    function linijaDo(x, y, z) 
    {
        var x1, y1, x2, y2;
        x1 = x_to_pix(xLast);
        y1 = y_to_pix(yLast);
        xLast = matrica[0][0]*x + matrica[0][1]*y + matrica[0][2]*z+matrica[0][3];
        yLast = matrica[1][0]*x + matrica[1][1]*y + matrica[1][2]*z+matrica[1][3];
        zLast = matrica[2][0]*x + matrica[2][1]*y + matrica[2][2]*z+matrica[2][3];
        x2 = x_to_pix(xLast);
        y2 = y_to_pix(yLast);
        
        c.lineWidth = 1;
        c.beginPath();        
        c.moveTo(x1,y1);
        c.lineTo(x2,y2);
        
        c.stroke();
        
    }    
    }