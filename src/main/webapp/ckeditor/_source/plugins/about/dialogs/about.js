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

CKEDITOR.dialog.add( 'about', function( editor )
{
	var lang = editor.lang.about;

	return {
		title : CKEDITOR.env.ie ? lang.dlgTitle : lang.title,
		minWidth : 390,
		minHeight : 230,
		contents : [
			{
				id : 'tab1',
				label : '',
				title : '',
				expand : true,
				padding : 0,
				elements :
				[
					{
						type : 'html',
						html :
							'<style type="text/css">' +
								'.cke_about_container' +
								'{' +
									'color:#000 !important;' +
									'padding:10px 10px 0;' +
									'margin-top:5px' +
								'}' +
								'.cke_about_container p' +
								'{' +
									'margin: 0 0 10px;' +
								'}' +
								'.cke_about_container .cke_about_logo' +
								'{' +
									'height:81px;' +
									'background-color:#fff;' +
									'background-image:url(' + CKEDITOR.plugins.get( 'about' ).path + 'dialogs/logo_ckeditor.png);' +
									'background-position:center; ' +
									'background-repeat:no-repeat;' +
									'margin-bottom:10px;' +
								'}' +
								'.cke_about_container a' +
								'{' +
									'cursor:pointer !important;' +
									'color:blue !important;' +
									'text-decoration:underline !important;' +
								'}' +
							'</style>' +
							'<div class="cke_about_container">' +
								'<div class="cke_about_logo"></div>' +
								'<p>' +
									'CKEditor ' + CKEDITOR.version + ' (revision ' + CKEDITOR.revision + ')<br>' +
									'<a href="http://ckeditor.com/">http://ckeditor.com</a>' +
								'</p>' +
								'<p>' +
									lang.moreInfo + '<br>' +
									'<a href="http://ckeditor.com/license">http://ckeditor.com/license</a>' +
								'</p>' +
								'<p>' +
									lang.copy.replace( '$1', '<a href="http://cksource.com/">CKSource</a> - Frederico Knabben' ) +
								'</p>' +
							'</div>'
					}
				]
			}
		],
		buttons : [ CKEDITOR.dialog.cancelButton ]
	};
} );