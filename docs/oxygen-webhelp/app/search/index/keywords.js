define(function() {var keywords=[{w:"My",p:["p0","p1","p2","p4","p5","p6","p7","p8","p9","p11"]},{w:"first",p:["p0","p4","p7","p11"]},{w:"topic",p:["p0","p1","p2","p4","p10"]},{w:"second",p:["p1","p5","p8"]},{w:"third",p:["p2","p6","p9"]},{w:"Glossary",p:["p3"]},{w:"reference",p:["p4","p5","p6"]},{w:"Creating",p:["p7","p8","p9"]},{w:"task",p:["p7","p8","p9"]},{w:"New",p:["p10"]},{w:"map",p:["p11"]}];
var ph={};
ph["p0"]=[0, 1, 2];
ph["p1"]=[0, 3, 2];
ph["p11"]=[0, 1, 10];
ph["p2"]=[0, 4, 2];
ph["p3"]=[5];
ph["p4"]=[0, 1, 6, 2];
ph["p5"]=[0, 3, 6];
ph["p6"]=[0, 4, 6];
ph["p7"]=[7, 0, 1, 8];
ph["p8"]=[7, 0, 3, 8];
ph["p9"]=[7, 0, 4, 8];
ph["p10"]=[9, 2];
     return {
         keywords: keywords,
         ph: ph
     }
});
