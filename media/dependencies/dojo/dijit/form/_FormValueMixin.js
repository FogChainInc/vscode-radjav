//>>built
define("dijit/form/_FormValueMixin",["dojo/_base/declare","dojo/dom-attr","dojo/keys","dojo/_base/lang","dojo/on","dojo/sniff","./_FormWidgetMixin"],function(_1,_2,_3,_4,on,_5,_6){
return _1("dijit.form._FormValueMixin",_6,{readOnly:false,_setReadOnlyAttr:function(_7){
if(_5("trident")&&"disabled" in this){
_2.set(this.focusNode,"readOnly",_7||this.disabled);
}else{
_2.set(this.focusNode,"readOnly",_7);
}
this._set("readOnly",_7);
},postCreate:function(){
this.inherited(arguments);
if(this._resetValue===undefined){
this._lastValueReported=this._resetValue=this.value;
}
},_setValueAttr:function(_8,_9){
this._handleOnChange(_8,_9);
},_handleOnChange:function(_a,_b){
this._set("value",_a);
this.inherited(arguments);
},undo:function(){
this._setValueAttr(this._lastValueReported,false);
},reset:function(){
this._hasBeenBlurred=false;
this._setValueAttr(this._resetValue,true);
}});
});
