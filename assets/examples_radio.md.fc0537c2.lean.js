import{i as y,r as i,o as u,c as m,a as n,w as p,f as c,b as F,e}from"./app.9115598c.js";const E=c("",5),b=c("",3),g=c("",3),v=c("",3),_=c("",3),q=F("br",null,null,-1),h=F("br",null,null,-1),V=F("br",null,null,-1),f=F("br",null,null,-1),T=F("br",null,null,-1),S=F("br",null,null,-1),B=c("",6),O=JSON.parse('{"title":"Radio \u5355\u9009\u6846","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u57FA\u672C\u4F7F\u7528","slug":"\u57FA\u672C\u4F7F\u7528"},{"level":3,"title":"\u4F20\u9012\u4E00\u4E2A options \u6570\u7EC4\u6765\u63CF\u8FF0 radio","slug":"\u4F20\u9012\u4E00\u4E2A-options-\u6570\u7EC4\u6765\u63CF\u8FF0-radio"},{"level":3,"title":"\u901A\u8FC7\u6807\u7B7E\u6765\u63CF\u8FF0 radio","slug":"\u901A\u8FC7\u6807\u7B7E\u6765\u63CF\u8FF0-radio"},{"level":2,"title":"\u7981\u7528\u72B6\u6001","slug":"\u7981\u7528\u72B6\u6001"},{"level":2,"title":"\u5E26\u6709\u8FB9\u6846","slug":"\u5E26\u6709\u8FB9\u6846"},{"level":2,"title":"\u914D\u7F6E\u5927\u5C0F","slug":"\u914D\u7F6E\u5927\u5C0F"},{"level":2,"title":"API","slug":"api"},{"level":2,"title":"Events","slug":"events"}],"relativePath":"examples/radio.md"}'),z={name:"examples/radio.md"},P=Object.assign(z,{setup(x){const A=[{label:"\u7EFF\u8272",value:"green"},{label:"\u84DD\u8272",value:"blue",disabled:!0},{label:"\u9EC4\u8272",value:"yellow"},{label:"\u7EA2\u8272",value:"red"}],C=[{label:"\u5907\u9009\u98791",value:"\u5907\u9009\u98791"},{label:"\u5907\u9009\u98792",value:"\u5907\u9009\u98792"},{label:"\u5907\u9009\u98793",value:"\u5907\u9009\u98793"}],d=y("green"),t=y("\u5907\u9009\u98791"),r=y("\u5907\u9009\u98792"),D=y("\u5907\u9009\u98793"),o=y("\u5907\u9009\u98791");return(I,s)=>{const l=i("n-radio");return u(),m("div",null,[E,n(l,{modelValue:d.value,"onUpdate:modelValue":s[0]||(s[0]=a=>d.value=a),options:A},null,8,["modelValue"]),b,n(l,{modelValue:t.value,"onUpdate:modelValue":s[1]||(s[1]=a=>t.value=a),label:"\u5907\u9009\u98791"},{default:p(()=>[e("\u5907\u9009\u9879 1")]),_:1},8,["modelValue"]),n(l,{modelValue:t.value,"onUpdate:modelValue":s[2]||(s[2]=a=>t.value=a),label:"\u5907\u9009\u98792"},{default:p(()=>[e("\u5907\u9009\u9879 2")]),_:1},8,["modelValue"]),n(l,{modelValue:t.value,"onUpdate:modelValue":s[3]||(s[3]=a=>t.value=a),label:"\u5907\u9009\u98793"},{default:p(()=>[e("\u5907\u9009\u9879 3")]),_:1},8,["modelValue"]),g,n(l,{modelValue:r.value,"onUpdate:modelValue":s[4]||(s[4]=a=>r.value=a),disabled:"",label:"\u5907\u9009\u98791"},{default:p(()=>[e("\u5907\u9009\u9879 1")]),_:1},8,["modelValue"]),n(l,{modelValue:r.value,"onUpdate:modelValue":s[5]||(s[5]=a=>r.value=a),label:"\u5907\u9009\u98792"},{default:p(()=>[e("\u5907\u9009\u9879 2")]),_:1},8,["modelValue"]),n(l,{modelValue:r.value,"onUpdate:modelValue":s[6]||(s[6]=a=>r.value=a),label:"\u5907\u9009\u98793"},{default:p(()=>[e("\u5907\u9009\u9879 3")]),_:1},8,["modelValue"]),v,n(l,{modelValue:D.value,"onUpdate:modelValue":s[7]||(s[7]=a=>D.value=a),label:"\u5907\u9009\u98791",border:""},{default:p(()=>[e("\u5907\u9009\u9879 1")]),_:1},8,["modelValue"]),n(l,{modelValue:D.value,"onUpdate:modelValue":s[8]||(s[8]=a=>D.value=a),label:"\u5907\u9009\u98792",border:""},{default:p(()=>[e("\u5907\u9009\u9879 2")]),_:1},8,["modelValue"]),n(l,{modelValue:D.value,"onUpdate:modelValue":s[9]||(s[9]=a=>D.value=a),label:"\u5907\u9009\u98793",border:""},{default:p(()=>[e("\u5907\u9009\u9879 3")]),_:1},8,["modelValue"]),_,n(l,{modelValue:o.value,"onUpdate:modelValue":s[10]||(s[10]=a=>o.value=a),label:"\u5907\u9009\u98791",border:"",size:"large"},{default:p(()=>[e("\u5907\u9009\u9879 1")]),_:1},8,["modelValue"]),n(l,{modelValue:o.value,"onUpdate:modelValue":s[11]||(s[11]=a=>o.value=a),label:"\u5907\u9009\u98792",border:"",size:"large"},{default:p(()=>[e(" \u5907\u9009\u9879 2")]),_:1},8,["modelValue"]),n(l,{modelValue:o.value,"onUpdate:modelValue":s[12]||(s[12]=a=>o.value=a),label:"\u5907\u9009\u98793",border:"",size:"large"},{default:p(()=>[e(" \u5907\u9009\u9879 3")]),_:1},8,["modelValue"]),q,h,n(l,{modelValue:o.value,"onUpdate:modelValue":s[13]||(s[13]=a=>o.value=a),border:"",size:"medium",options:C},null,8,["modelValue"]),V,f,n(l,{modelValue:o.value,"onUpdate:modelValue":s[14]||(s[14]=a=>o.value=a),border:"",size:"small",options:C},null,8,["modelValue"]),T,S,n(l,{modelValue:o.value,"onUpdate:modelValue":s[15]||(s[15]=a=>o.value=a),border:"",size:"mini",options:C},null,8,["modelValue"]),B])}}});export{O as __pageData,P as default};
