define(["./defaultValue-0a909f67","./Transforms-01e95659","./Matrix3-a348023f","./ComponentDatatype-77274976","./GeometryAttribute-f5d71750","./GeometryAttributes-f06a2792","./Math-e97915da","./Matrix2-7146c9ca","./RuntimeError-06c93819","./combine-ca22a614","./WebGLConstants-a8cc3e8c"],(function(e,t,n,r,a,i,o,c,u,s,y){"use strict";function m(){this._workerName="createPlaneOutlineGeometry"}m.packedLength=0,m.pack=function(e,t){return t},m.unpack=function(t,n,r){return e.defined(r)?r:new m};const p=new n.Cartesian3(-.5,-.5,0),f=new n.Cartesian3(.5,.5,0);return m.createGeometry=function(){const e=new i.GeometryAttributes,o=new Uint16Array(8),c=new Float64Array(12);return c[0]=p.x,c[1]=p.y,c[2]=p.z,c[3]=f.x,c[4]=p.y,c[5]=p.z,c[6]=f.x,c[7]=f.y,c[8]=p.z,c[9]=p.x,c[10]=f.y,c[11]=p.z,e.position=new a.GeometryAttribute({componentDatatype:r.ComponentDatatype.DOUBLE,componentsPerAttribute:3,values:c}),o[0]=0,o[1]=1,o[2]=1,o[3]=2,o[4]=2,o[5]=3,o[6]=3,o[7]=0,new a.Geometry({attributes:e,indices:o,primitiveType:a.PrimitiveType.LINES,boundingSphere:new t.BoundingSphere(n.Cartesian3.ZERO,Math.sqrt(2))})},function(t,n){return e.defined(n)&&(t=m.unpack(t,n)),m.createGeometry(t)}}));
