/*
 * Licensed to Jasig under one or more contributor license
 * agreements. See the NOTICE file distributed with this work
 * for additional information regarding copyright ownership.
 * Jasig licenses this file to you under the Apache License,
 * Version 2.0 (the "License"); you may not use this file
 * except in compliance with the License. You may obtain a
 * copy of the License at:
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on
 * an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied. See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
﻿/*
Copyright (c) 2003-2010, CKSource - Frederico Knabben. All rights reserved.
For licensing, see LICENSE.html or http://ckeditor.com/license
*/

CKEDITOR.dialog.add('checkbox',function(a){return{title:a.lang.checkboxAndRadio.checkboxTitle,minWidth:350,minHeight:140,onShow:function(){var c=this;delete c.checkbox;var b=c.getParentEditor().getSelection().getSelectedElement();if(b&&b.getAttribute('type')=='checkbox'){c.checkbox=b;c.setupContent(b);}},onOk:function(){var b,c=this.checkbox,d=!c;if(d){b=this.getParentEditor();c=b.document.createElement('input');c.setAttribute('type','checkbox');}if(d)b.insertElement(c);this.commitContent({element:c});},contents:[{id:'info',label:a.lang.checkboxAndRadio.checkboxTitle,title:a.lang.checkboxAndRadio.checkboxTitle,startupFocus:'txtName',elements:[{id:'txtName',type:'text',label:a.lang.common.name,'default':'',accessKey:'N',setup:function(b){this.setValue(b.getAttribute('_cke_saved_name')||b.getAttribute('name')||'');},commit:function(b){var c=b.element;if(this.getValue())c.setAttribute('_cke_saved_name',this.getValue());else{c.removeAttribute('_cke_saved_name');c.removeAttribute('name');}}},{id:'txtValue',type:'text',label:a.lang.checkboxAndRadio.value,'default':'',accessKey:'V',setup:function(b){var c=b.getAttribute('value');this.setValue(CKEDITOR.env.ie&&c=='on'?'':c);},commit:function(b){var c=b.element,d=this.getValue();if(d&&!(CKEDITOR.env.ie&&d=='on'))c.setAttribute('value',d);else if(CKEDITOR.env.ie){var e=new CKEDITOR.dom.element('input',c.getDocument());c.copyAttributes(e,{value:1});e.replace(c);a.getSelection().selectElement(e);b.element=e;}else c.removeAttribute('value');}},{id:'cmbSelected',type:'checkbox',label:a.lang.checkboxAndRadio.selected,'default':'',accessKey:'S',value:'checked',setup:function(b){this.setValue(b.getAttribute('checked'));},commit:function(b){var c=b.element;if(CKEDITOR.env.ie){var d=!!c.getAttribute('checked'),e=!!this.getValue();if(d!=e){var f=CKEDITOR.dom.element.createFromHtml('<input type="checkbox"'+(e?' checked="checked"':'')+'/>',a.document);c.copyAttributes(f,{type:1,checked:1});f.replace(c);a.getSelection().selectElement(f);b.element=f;}}else{var g=this.getValue();if(g)c.setAttribute('checked','checked');else c.removeAttribute('checked');}}}]}]};});