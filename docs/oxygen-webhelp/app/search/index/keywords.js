define(function() {var keywords=[{w:"Example",p:["p0"]},{w:"My",p:["p1","p2","p3","p5","p6","p7","p9","p10","p11","p12"]},{w:"first",p:["p1","p5","p9"]},{w:"topic",p:["p1","p2","p3","p5"]},{w:"second",p:["p2","p6","p10"]},{w:"third",p:["p3","p7","p11"]},{w:"Glossary",p:["p4"]},{w:"reference",p:["p5","p6","p7"]},{w:"Sample",p:["p8"]},{w:"file",p:["p8"]},{w:"Creating",p:["p9","p10","p11"]},{w:"task",p:["p9","p10","p11"]},{w:"DITA",p:["p12"]},{w:"map",p:["p12"]}];
var ph={};
ph["p0"]=[0];
ph["p1"]=[1, 2, 3];
ph["p2"]=[1, 4, 3];
ph["p3"]=[1, 5, 3];
ph["p4"]=[6];
ph["p5"]=[1, 2, 7, 3];
ph["p6"]=[1, 4, 7];
ph["p7"]=[1, 5, 7];
ph["p8"]=[8, 9];
ph["p9"]=[10, 1, 2, 11];
ph["p10"]=[10, 1, 4, 11];
ph["p12"]=[1, 12, 13];
ph["p11"]=[10, 1, 5, 11];
     return {
         keywords: keywords,
         ph: ph
     }
});
