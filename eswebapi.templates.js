angular.module('es.Web.UI').run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('src/partials/es00DocumentsDetail.html',
    "<es-grid es-grid-options=\"esDocumentGridOptions\">"
  );


  $templateCache.put('src/partials/esAdvancedModalDR.html',
    "<div class=modal-header><h5 class=modal-title id=modal-title>{{::$ctrl.editedParam.esParamDef.caption}}</h5></div><div class=modal-body id=modal-body><form novalidate class=form name=d1><div class=form-row><div class=\"form-group col-12\"><select class=\"form-control es-param-control\" kendo-drop-down-list=drDate k-data-text-field=\"'title'\" k-auto-bind=true k-data-value-field=\"'dValue'\" k-data-source=\"::$ctrl.editedParam.esGlobals.getesDateRangeOptions({dateRangeClass: esParamDef.controlType})\" k-value-primitive=true k-ng-model=$ctrl.editedParam.esParamVal[$ctrl.editedParam.esParamDef.id].paramValue.dRange></select></div><div ng-class=\"{'form-group col-6': $ctrl.editedParam.esParamVal[$ctrl.editedParam.esParamDef.id].paramValue.dRange == '0', 'form-group col-12': $ctrl.editedParam.esParamVal[$ctrl.editedParam.esParamDef.id].paramValue.dRange == '1'}\" ng-hide=\"$ctrl.editedParam.esParamVal[$ctrl.editedParam.esParamDef.id].paramValue.dRange > '1'\"><input class=\"form-control es-param-control margin-t\" autocomplete=nope kendo-date-picker k-ng-model=\"$ctrl.editedParam.esParamVal[$ctrl.editedParam.esParamDef.id].paramValue.fromD\"></div><div class=\"form-group col-6\" ng-hide=\"$ctrl.editedParam.esParamVal[$ctrl.editedParam.esParamDef.id].paramValue.dRange != '0'\"><input class=\"form-control es-param-control margin-t\" autocomplete=nope kendo-date-picker k-ng-model=\"$ctrl.editedParam.esParamVal[$ctrl.editedParam.esParamDef.id].paramValue.toD\"></div></div></form></div><div class=modal-footer><button class=\"btn btn-primary\" type=button ng-click=$ctrl.ok()>{{'ESUI.GENERIC.OK' | translate}}</button></div>"
  );


  $templateCache.put('src/partials/esAdvancedModalNM.html',
    "<div class=modal-header><h5 class=modal-title id=modal-title>{{::$ctrl.editedParam.esParamDef.caption}}</h5></div><div class=modal-body id=modal-body><form novalidate class=form name=d1><div class=form-row><div class=\"form-group col-12\"><select class=\"form-control es-param-control\" kendo-drop-down-list ng-cloak k-ng-delay=$ctrl.editedParam.esParamDef k-data-text-field=\"'caption'\" k-data-value-field=\"'value'\" k-auto-bind=true k-data-source=$ctrl.editedParam.esGlobals.getesComplexParamFunctionOptions() k-value-primitive=true k-ng-model=$ctrl.editedParam.esParamVal[$ctrl.editedParam.esParamDef.id].paramValue.oper></select></div><div class=\"form-group col-12\" ng-hide=\"$ctrl.editedParam.esParamVal[$ctrl.editedParam.esParamDef.id].paramValue.oper == 'NULL' || $ctrl.editedParam.esParamVal[$ctrl.editedParam.esParamDef.id].paramValue.oper == 'NOTNULL'\" ng-class=\"{'col-12': $ctrl.editedParam.esParamVal[$ctrl.editedParam.esParamDef.id].paramValue.oper != 'RANGE', 'col-6': $ctrl.editedParam.esParamVal[$ctrl.editedParam.esParamDef.id].paramValue.oper == 'RANGE'}\"><input type=number autocomplete=nope class=\"form-control es-param-control margin-t\" kendo-numeric-text-box align=right k-ng-model=$ctrl.editedParam.esParamVal[$ctrl.editedParam.esParamDef.id].paramValue.value k-spinners=\"false\"></div><div class=\"form-group col-6\" ng-hide=\"$ctrl.editedParam.esParamVal[$ctrl.editedParam.esParamDef.id].paramValue.oper != 'RANGE'\"><input class=\"form-control es-param-control margin-t\" autocomplete=nope kendo-numeric-text-box align=right k-ng-model=$ctrl.editedParam.esParamVal[$ctrl.editedParam.esParamDef.id].paramValue.valueTo k-spinners=false k-decimals=$ctrl.editedParam.esParamDef.precision k-format=\"'n'+'{{::$ctrl.editedParam.esParamDef.precision}}'\"></div></div></form></div><div class=modal-footer><button class=\"btn btn-primary\" type=button ng-click=$ctrl.ok()>{{'ESUI.GENERIC.OK' | translate}}</button></div>"
  );


  $templateCache.put('src/partials/esAdvancedModalST.html',
    "<div class=modal-header><h5 class=modal-title id=modal-title>{{::$ctrl.editedParam.esParamDef.caption}}</h5></div><div class=modal-body id=modal-body><form novalidate class=form name=d1><div class=form-row><div class=\"form-group col-12\"><select class=\"form-control es-param-control\" kendo-drop-down-list ng-cloak k-ng-delay=$ctrl.editedParam.esParamDef k-data-text-field=\"'caption'\" k-data-value-field=\"'value'\" k-auto-bind=true k-data-source=$ctrl.editedParam.esGlobals.getesComplexParamFunctionOptions() k-value-primitive=true k-ng-model=$ctrl.editedParam.esParamVal[$ctrl.editedParam.esParamDef.id].paramValue.oper></select></div><div class=\"form-group col-12\" ng-if=\"$ctrl.editedParam.esParamVal[$ctrl.editedParam.esParamDef.id].paramValue.oper != 'NOTNULL' && $ctrl.editedParam.esParamVal[$ctrl.editedParam.esParamDef.id].paramValue.oper != 'NULL'\" ng-class=\"{'col-12': $ctrl.editedParam.esParamVal[$ctrl.editedParam.esParamDef.id].paramValue.oper != 'RANGE', 'col-6': $ctrl.editedParam.esParamVal[$ctrl.editedParam.esParamDef.id].paramValue.oper == 'RANGE'}\"><input class=\"form-control es-param-control margin-t\" autocomplete=nope kendo-masked-text-box ng-required=\"$ctrl.editedParam.esParamVal[$ctrl.editedParam.esParamDef.id].paramValue.oper != 'RANGE' && $ctrl.editedParam.esParamDef.required\" name={{::$ctrl.editedParam.esParamDef.id}} ng-model=\"$ctrl.editedParam.esParamVal[$ctrl.editedParam.esParamDef.id].paramValue.value\"></div><div class=\"form-group col-6\" ng-if=\"$ctrl.editedParam.esParamVal[$ctrl.editedParam.esParamDef.id].paramValue.oper == 'RANGE'\"><input class=\"form-control es-param-control margin-t\" autocomplete=nope kendo-masked-text-box ng-model=\"$ctrl.editedParam.esParamVal[$ctrl.editedParam.esParamDef.id].paramValue.valueTo\"></div></div></form></div><div class=modal-footer><button class=\"btn btn-primary\" type=button ng-click=$ctrl.ok()>{{'ESUI.GENERIC.OK' | translate}}</button></div>"
  );


  $templateCache.put('src/partials/esAskForField.html',
    "<div class=modal-header><h5 ng-if=::$ctrl.inDef.title class=modal-title id=modal-title>{{::$ctrl.inDef.title}}</h5></div><div class=modal-body id=modal-body><form novalidate class=form name=askform><div class=form-row><div class=\"form-group col-12\" ng-class=\"{'has-error': askform.{{::$ctrl.inDef.id}}.$invalid}\"><label class=\"control-label es-param-label\" uib-tooltip={{::$ctrl.inDef.toolTip}} tooltip-placement=bottom>{{::$ctrl.inDef.caption}}</label><input class=\"form-control es-param-control\" kendo-masked-text-box name={{::$ctrl.inDef.id}} autocomplete=nope autofocus type=\"{{::$ctrl.inDef.isPassword ? 'password' : ''}}\" ng-required=::$ctrl.inDef.required k-mask=::$ctrl.inDef.formatString ng-readonly=::$ctrl.inDef.inputType ng-model-options=\"{getterSetter: true}\" ng-model=\"$ctrl.inDef.param.pValue\"></div></div></form></div><div class=modal-footer><button class=\"btn btn-primary\" type=button ng-disabled=askform.$invalid ng-click=$ctrl.ok()>{{'ESUI.GENERIC.OK' | translate}}</button> <button class=\"btn btn-default\" type=button ng-click=$ctrl.cancel()>{{'ESUI.GENERIC.CANCEL' | translate}}</button></div>"
  );


  $templateCache.put('src/partials/esCalendarPQ.html',
    "<div class=row><div class=col-12><es-params-panel ng-cloak es-panel-open=esPqDef.esPanelOpen ng-if=!esLocalData es-group-id=esPqDef es-local-data-source=\"'true'\" es-force-title=esPqDef.Title es-show-run=\"'true'\" es-run-click=::executePQ()></es-params-panel></div><div class=col-12><div class=escalendar-wrapper><div kendo-scheduler=esCalendarCtrl k-ng-delay=esCalendarOptions k-options=esCalendarOptions></div></div></div></div>"
  );


  $templateCache.put('src/partials/esCardPQ.html',
    "<div class=row><div class=col-12><es-params-panel ng-show=::!UIOptions.simpleView ng-cloak es-panel-open=esPqDef.esPanelOpen ng-if=!esLocalData es-group-id=::esPqDef es-local-data-source=\"'true'\" es-force-title=::esPqDef.Title es-show-run=true es-run-click=::executePQ()></es-params-panel></div><div class=col-12><div class=\"es-module es-module-card\"><kendo-pager ng-if=\"!UIOptions.simpleView && cardDataSource && (cardDataSource.total() > (esPqDef.PQOptions.PageSize || 1))\" auto-bind=false page-size=::esPqDef.PQOptions.PageSize page-sizes=\"[20, 50, 100]\" refresh=true data-source=cardDataSource></kendo-pager><div class=row ng-if=\"!UIOptions.simpleView || cardDataSource.data().length\"><div ng-class=\"::{'col-12': UIOptions.simpleView, 'col-sm-6 col-md-4 col-xl-3': !UIOptions.simpleView}\" ng-repeat=\"row in cardDataSource.data()\"><div class=\"card card-tag-{{::getTagField(row)}}\" ng-class=\"::{'card-noimage': isNoImage(row)}\"><div ng-if=::UIOptions.headerField class=card-header>{{::row[UIOptions.headerField]}}</div><img class=card-img-top ng-if=::getImageUrl(row) ng-src=\"{{::getImageUrl(row)}}\"><div class=card-body><h5 class=card-title ng-if=::UIOptions.titleField>{{::row[UIOptions.titleField]}}</h5><ul ng-if=bodyFields().length class=\"list-group list-group-flush\"><li class=list-group-item ng-repeat=\"col in ::bodyFields()\"><label>{{::col.title}}</label><p ng-style=\"getFieldStyle(row, col)\" ng-bind-html=\"::getFieldText(row, col)\"></p></li></ul></div><div ng-if=\"::(UIOptions.footerField || hasMap(row))\" class=card-footer><small class=text-muted>{{::row[UIOptions.footerField]}}</small><div class=actions><a class=\"btn btn-transparent\" ng-if=::hasMap(row) ng-click=showMap(row)><i class=\"mdi mdi-map-marker\"></i></a></div></div></div></div></div></div></div></div>"
  );


  $templateCache.put('src/partials/esChangePassword.html',
    "<div class=modal-header><h5 class=modal-title id=modal-title>{{'ESUI.CHGPWD.TITLE' | translate}}</h5></div><div class=modal-body id=modal-body><form novalidate class=form name=askform><div class=form-row><div class=\"form-group col-12\" ng-class=\"{'has-error': askform.OldPassword.$invalid}\"><label class=\"control-label es-param-label\" tooltip-placement=bottom>{{'ESUI.CHGPWD.OLDPASSWORD' | translate}}</label><input class=form-control name=OldPassword placeholder=\"{{'ESUI.CHGPWD.OLDPASSWORD' | translate}}\" type=password name=password autocomplete=off required autofocus ng-model=\"$ctrl.inDef.OldPassword\"></div><div class=\"form-group col-12\" ng-class=\"{'has-error': askform.NewPassword.$invalid}\"><label class=\"control-label es-param-label\" tooltip-placement=bottom>{{'ESUI.CHGPWD.NEWPASSWORD' | translate}}</label><input class=form-control name=NewPassword placeholder=\"{{'ESUI.CHGPWD.NEWPASSWORD' | translate}}\" type=password name=password autocomplete=off required ng-model=\"$ctrl.inDef.NewPassword\"></div><div class=\"form-group col-12\" ng-class=\"{'has-error': askform.NewPassword2.$invalid}\"><label class=\"control-label es-param-label\" tooltip-placement=bottom>{{'ESUI.CHGPWD.NEWPASSWORD2' | translate}}</label><input class=form-control name=NewPassword2 placeholder=\"{{'ESUI.CHGPWD.NEWPASSWORD2' | translate}}\" type=password name=password autocomplete=off required ng-model=\"$ctrl.inDef.NewPassword2\"></div></div></form></div><div class=modal-footer><button class=\"btn btn-primary\" type=submit ng-disabled=askform.$invalid ng-click=$ctrl.ok()>{{'ESUI.GENERIC.OK' | translate}}</button> <button class=\"btn btn-default\" type=button ng-click=$ctrl.cancel()>{{'ESUI.GENERIC.CANCEL' | translate}}</button></div>"
  );


  $templateCache.put('src/partials/esChartPQ.html',
    "<div class=row><div class=col-12><es-params-panel ng-cloak es-panel-open=esPqDef.esPanelOpen ng-if=!esLocalData es-group-id=esPqDef es-local-data-source=\"'true'\" es-force-title=esPqDef.Title es-show-run=\"'true'\" es-run-click=::executePQ() es-data-source=esChartDataSource></es-params-panel></div><div class=col-12><div class=eschart-wrapper><div kendo-chart=esChartCtrl k-ng-delay=esChartOptions.dataSource k-options=esChartOptions></div></div></div></div>"
  );


  $templateCache.put('src/partials/esComboPQ.html',
    "<div ng-controller=esComboPQCtrl><div id=globalCtx class=\"es-section global\" ng-if=esPqDef.GlobalParamsPanel><div class=actions><a class=\"btn btn-transparent\" ng-click=::globalExecutePQ() title=\"{{'ESUI.FAV.RELOAD' | translate}}\"><i class=\"mdi mdi-reload\"></i></a></div><es-params-panel ng-cloak es-panel-open=esPqDef.GlobalParamsPanel.esPanelOpen es-params-def=esPqDef.GlobalParamsPanel.Parameters es-params-values=esPqDef.GlobalParamsPanel.Parameters.paramsValues es-force-title=globalTitle es-show-run=\"'true'\" es-run-click=::globalExecutePQ()></es-params-panel></div><div ng-repeat=\"section in esPqDef\" class=row><div ng-repeat=\"dbItem in section\" ng-class=\"{'col-md-6' : section.length == 2, 'col-lg-3': section.length == 4, 'col-lg-4': section.length == 3, 'col-12': section.length == 1 || section.length > 4}\"><div id=anchor{{dbItem.CtxID}} class=es-section><div class=actions><a ng-if=\"::(!isFavouritesMode && !esSimpleMode)\" class=\"btn btn-transparent\" ng-click=\"addRemoveFav(dbItem, true)\" title=\"{{'ESUI.FAV.ADD' | translate}}\"><i class=\"mdi mdi-heart\"></i></a> <a ng-if=\"::(!isFavouritesMode && !esSimpleMode)\" class=\"btn btn-transparent\" ng-click=email(dbItem) title=\"{{'ESUI.FAV.LINK' | translate}}\"><i class=\"mdi mdi-link-variant\"></i></a> <a ng-if=\"::(isFavouritesMode && !esSimpleMode)\" class=\"btn btn-transparent\" ng-click=\"addRemoveFav(dbItem, false)\" title=\"{{'ESUI.FAV.DEL' | translate}}\"><i class=\"mdi mdi-heart-off\"></i></a> <a ng-if=\"::(isFavouritesMode && !esSimpleMode)\" class=\"btn btn-transparent\" ng-class=\"{'disabled': !canMoveUpOrDown(dbItem, true)}\" ng-click=\"moveUpOrDown(dbItem, true)\" title=\"{{'ESUI.FAV.UP' | translate}}\"><i class=\"mdi mdi-arrow-up-bold-circle\"></i></a> <a ng-if=\"::(isFavouritesMode && !esSimpleMode)\" class=\"btn btn-transparent\" ng-class=\"{'disabled': !canMoveUpOrDown(dbItem, false)}\" ng-click=\"moveUpOrDown(dbItem, false)\" title=\"{{'ESUI.FAV.DOWN' | translate}}\"><i class=\"mdi mdi-arrow-down-bold-circle\"></i></a> <a ng-if=\"::(isFavouritesMode && !esSimpleMode)\" class=\"btn btn-transparent\" ng-click=email(dbItem) title=\"{{'ESUI.FAV.LINK' | translate}}\"><i class=\"mdi mdi-link-variant\"></i></a> <a ng-if=::dbItem.runPQ class=\"btn btn-transparent\" ng-click=dbItem.runPQ() title=\"{{'ESUI.FAV.RELOAD' | translate}}\"><i class=\"mdi mdi-reload\"></i></a></div><es-web-pq ng-if=\"dbItem.ESUIType.toLowerCase() == 'esgrid'\" es-group-id=dbItem.GroupID es-p-q-options=dbItem.PQOptions es-panel-open=dbItem.esPanelOpen es-params-values=dbItem.Params es-force-title=dbItem.Title es-filter-id=dbItem.FilterID es-grid-options=dbItem.UIOptions es-pq-def=dbItem></es-web-pq><es-chart ng-if=\"dbItem.ESUIType.toLowerCase() == 'eschart'\" es-pq-def=dbItem es-panel-open=dbItem.esPanelOpen es-chart-options=dbItem.UIOptions></es-chart><es-stock-chart ng-if=\"dbItem.ESUIType.toLowerCase() == 'esstockchart'\" es-pq-def=dbItem es-panel-open=dbItem.esPanelOpen es-chart-options=dbItem.UIOptions></es-stock-chart><es-tree-map ng-if=\"dbItem.ESUIType.toLowerCase() == 'estreemap'\" es-pq-def=dbItem es-panel-open=dbItem.esPanelOpen es-chart-options=dbItem.UIOptions></es-tree-map><es-pivot-pq ng-if=\"dbItem.ESUIType.toLowerCase() == 'espivot'\" es-pq-def=dbItem es-panel-open=dbItem.esPanelOpen></es-pivot-pq><es-map-pq ng-if=\"dbItem.ESUIType.toLowerCase() == 'esmap'\" es-options=dbItem.UIOptions es-pq-def=dbItem es-panel-open=dbItem.esPanelOpen></es-map-pq><es-card-pq ng-if=\"dbItem.ESUIType.toLowerCase() == 'escard'\" es-pq-def=dbItem></es-card-pq><es-san-key-pq ng-if=\"dbItem.ESUIType.toLowerCase() == 'essankey'\" es-pq-def=dbItem></es-san-key-pq><es-gauge-pq ng-if=\"dbItem.ESUIType.toLowerCase() == 'esgauge'\" es-pq-def=dbItem></es-gauge-pq><es-gantt-pq ng-if=\"dbItem.ESUIType.toLowerCase() == 'esgantt'\" es-pq-def=dbItem></es-gantt-pq><es-timeline-pq ng-if=\"dbItem.ESUIType.toLowerCase() == 'estimeline'\" es-pq-def=dbItem></es-timeline-pq><es-calendar-pq ng-if=\"dbItem.ESUIType.toLowerCase() == 'escalendar'\" es-pq-def=dbItem></es-calendar-pq><es-metric-pq ng-if=\"dbItem.ESUIType.toLowerCase() == 'esmetric'\" es-pq-def=dbItem></es-metric-pq></div></div></div><div class=clearfix><button class=\"btn btn-danger pull-right\" type=button ng-if=\"isFavouritesMode && Favourites.shortcuts.length > 1\" ng-click=clearAll()>{{'ESUI.FAV.CLEAR_ALL' | translate}}</button></div><div ng-if=!esPqDef.length class=\"alert alert-warning\"><strong>{{'ESUI.FAV.NODATA' | translate}}</strong></div></div>"
  );


  $templateCache.put('src/partials/esGanttPQ.html',
    "<div class=row><div class=col-12><es-params-panel ng-cloak es-panel-open=esPqDef.esPanelOpen ng-if=!esLocalData es-group-id=esPqDef es-local-data-source=\"'true'\" es-force-title=esPqDef.Title es-show-run=\"'true'\" es-run-click=::executePQ()></es-params-panel></div><div class=col-12><div class=esgantt-wrapper><div kendo-gantt=esGanttCtrl k-ng-delay=esGanttOptions k-options=esGanttOptions></div></div></div></div>"
  );


  $templateCache.put('src/partials/esGaugePQ.html',
    "<div class=row><div class=col-12><es-params-panel ng-cloak es-panel-open=esPqDef.esPanelOpen ng-if=!esLocalData es-group-id=esPqDef es-local-data-source=\"'true'\" es-force-title=esPqDef.Title es-show-run=\"'true'\" es-run-click=::executePQ() es-data-source=esMapDataSource></es-params-panel></div><div ng-class=\"::{ 'col-3': esPqDef.UIOptions.gaugesPerRow == 4, 'col-4': esPqDef.UIOptions.gaugesPerRow == 3, 'col-6': esPqDef.UIOptions.gaugesPerRow == 2, 'col-1': esPqDef.UIOptions.gaugesPerRow == 12, 'col-12': esPqDef.UIOptions.gaugesPerRow == 1}\" ng-repeat=\"esRow in esRows\"><kendo-radialgauge k-ng-delay=esRow.esScaleOptions k-pointer=esRow.esPointer k-rebind=esRow.esScaleOptions ng-if=\"esPqDef.UIOptions.GType == 'radial'\" k-scale=esRow.esScaleOptions></kendo-radialgauge><kendo-lineargauge k-ng-delay=esRow.esScaleOptions k-pointer=esRow.esPointer k-rebind=esRow.esScaleOptions ng-if=\"esPqDef.UIOptions.GType == 'linear'\" k-scale=esRow.esScaleOptions></kendo-lineargauge><kendo-arcgauge k-ng-delay=esRow.esScaleOptions k-pointer=esRow.esPointer k-rebind=esRow.esScaleOptions ng-if=\"esPqDef.UIOptions.GType == 'arc'\" k-scale=esRow.esScaleOptions></kendo-arcgauge><h6 style=\"margin-left: 30px;margin-right: 30px\" class=text-center>{{esPqDef.UIOptions.title}}{{esPqDef.UIOptions.title ? ' - ' : ''}}{{esRow.GTitle}}</h6></div></div>"
  );


  $templateCache.put('src/partials/esGrid.html',
    "<div class=\"es-module es-module-grid\"><div kendo-grid k-ng-delay=esGridOptions.dataSource es-p-q-options=esPQOptions k-options=esGridOptions k-rebind=esGridOptions.reBind></div></div>"
  );


  $templateCache.put('src/partials/esInvestigate.html',
    "<div class=modal-header><h4 class=modal-title id=modal-title>{{'ESUI.PQ.INVESTIGATE' | translate}} - {{::invParams.paramDef.caption}}</h4></div><div class=modal-body id=modal-body><es-grid es-group-id=::invParams.esGroup es-filter-id=::invParams.esFilter es-post-grid-options=investigateGridOptions es-execute-params=invParams.pVals></es-grid></div><div class=modal-footer><button class=\"btn btn-primary\" type=button ng-click=ok()>{{'ESUI.GENERIC.OK' | translate}}</button> <button class=\"btn btn-default\" type=button ng-click=cancel()>{{'ESUI.GENERIC.CANCEL' | translate}}</button></div>"
  );


  $templateCache.put('src/partials/esLocalGrid.html',
    "<div class=\"es-module es-module-grid\"><div kendo-grid=esGridCtrl k-ng-delay=esGridOptions k-data-source=esDataSource k-rebind=esGridOptions.reBind k-options=esGridOptions></div></div>"
  );


  $templateCache.put('src/partials/esLogin.html',
    "<div class=\"es-module es-module-login\"><form name=esLoginFrm novalidate><div class=es-login-icon ng-if=::esLoginIcon><a ng-href={{::esLoginUrl}}><img ng-src=\"{{::esLoginIcon}}\"></a></div><div class=es-login-label ng-if=::esLoginLabel><span>{{::esLoginLabel}}</span></div><div class=\"es-login-lang form-group\" ng-class=\"{'has-error': esLoginFrm.lang.$invalid}\"><label for=lang class=sr-only>{{'ESUI.LOGIN_FORM.LANG_ID' | translate}}</label><select id=lang kendo-drop-down-list k-ng-model=esCredentials.LangID k-options=esLangOptions class=form-control></select></div><div class=form-group ng-class=\"{'has-error': esLoginFrm.userId.$invalid}\"><label for=userId class=sr-only>{{'ESUI.LOGIN_FORM.USER_ID' | translate}}</label><input autocomplete=nope name=userId class=form-control placeholder=\"{{'ESUI.LOGIN_FORM.USER_ID' | translate}}\" ng-model=esCredentials.UserID required></div><div class=form-group ng-class=\"{'has-error': esLoginFrm.password.$invalid}\"><label for=password class=sr-only>{{'ESUI.LOGIN_FORM.USER_PASSWORD' | translate}}</label><input type=password name=password autocomplete=nope class=form-control placeholder=\"{{'ESUI.LOGIN_FORM.USER_PASSWORD' | translate}}\" ng-model=esCredentials.Password required></div><div class=form-group ng-if=::esShowBridge ng-class=\"{'has-error': esLoginFrm.bridgeId.$invalid}\"><label for=bridgeId class=sr-only>{{'ESUI.LOGIN_FORM.COMPANY_ID' | translate}}</label><input name=bridgeId class=form-control placeholder=\"{{'ESUI.LOGIN_FORM.COMPANY_ID' | translate}}\" ng-model=esCredentials.bridgeId></div><div class=form-group ng-class=\"{'has-error': esLoginFrm.branch.$invalid}\"><label for=branch class=sr-only>{{'ESUI.LOGIN_FORM.BRANCH_ID' | translate}}</label><input name=branch autocomplete=nope class=form-control placeholder=\"{{'ESUI.LOGIN_FORM.BRANCH_ID' | translate}}\" ng-model=esCredentials.BranchID></div><div class=form-group><label for=extraPin class=sr-only>{{'ESUI.LOGIN_FORM.EXTRA_PIN' | translate}}</label><input type=tel name=extraPin autocomplete=nope class=form-control placeholder=\"{{'ESUI.LOGIN_FORM.EXTRA_PIN' | translate}}\" ng-model=esCredentials.extraPin></div><div class=form-group ng-class=\"{'has-error': esLoginFrm.subscriptionId.$invalid}\" ng-if=::esShowSubscription><label for=subscriptionId class=sr-only>{{'ESUI.LOGIN_FORM.SUBSCRIPTION_ID' | translate}}</label><input name=subscriptionId class=form-control placeholder=\"{{'ESUI.LOGIN_FORM.SUBSCRIPTION_ID' | translate}}\" ng-model=esCredentials.subscriptionId></div><div class=form-group ng-class=\"{'has-error': esLoginFrm.subscriptionPwd.$invalid}\" ng-if=::esShowSubscription><label for=subscriptionPwd class=sr-only>{{'ESUI.LOGIN_FORM.SUBSCRIPTION_PASSWORD' | translate}}</label><input type=password autocomplete=nope name=subscriptionPwd class=form-control placeholder=\"{{'ESUI.LOGIN_FORM.SUBSCRIPTION_PASSWORD' | translate}}\" ng-model=esCredentials.subscriptionPassword></div><div class=\"es-login-action form-group\"><button class=\"btn btn-lg btn-primary btn-block\" ng-disabled=esLoginFrm.$invalid ng-click=esOnSuccess()>{{'ESUI.LOGIN_FORM.DOLOGIN' | translate}}</button></div><div class=\"es-login-rememberme form-check\" ng-if=::esLoginShowRememberMe><input class=form-check-input type=checkbox ng-model=\"esCredentials.rememberme\"><label class=form-check-label>{{'ESUI.LOGIN_FORM.REMEMBERME' | translate}}</label></div><div class=\"es-login-signup form-group\" ng-if=::esLoginSignUp><a ng-href={{esLoginSignUpUrl}} target=_blank>{{esLoginSignUp}}</a></div><div class=\"es-login-terms form-group\" ng-if=::esLoginTerms><a ng-href={{esLoginTermsUrl}} target=_blank>{{esLoginTerms}}</a></div><div class=es-login-version ng-if=::esLoginVersion><span>{{::esLoginVersion}}</span></div></form></div>"
  );


  $templateCache.put('src/partials/esMapPQ.html',
    "<div class=row><div class=col-12><es-params-panel ng-cloak es-panel-open=esPqDef.esPanelOpen ng-if=!esLocalData es-group-id=esPqDef es-local-data-source=\"'true'\" es-force-title=esPqDef.Title es-show-run=\"'true'\" es-run-click=::executePQ() es-data-source=esMapDataSource></es-params-panel></div><div class=col-12><div class=esmap-wrapper kendo-tooltip=tl k-options=tlOptions><div kendo-map=esMapCtrl k-ng-delay=esMapOptions.dataSource es-options=esOptions k-options=esMapOptions></div></div></div></div>"
  );


  $templateCache.put('src/partials/esMetricPQ.html',
    "<div class=row><div class=col-12><es-params-panel ng-cloak es-panel-open=esPqDef.esPanelOpen ng-if=!esLocalData es-group-id=::esPqDef es-local-data-source=\"'true'\" es-force-title=::esPqDef.Title es-show-run=\"'true'\" es-run-click=::executePQ()></es-params-panel></div><div class=col-12><div class=\"es-module es-module-metric\"><div class=row><div class=\"col-sm-6 col-md-4 col-xl-3\" ng-repeat=\"row in metricDataSource.data()\"><div class=\"card card-tag-{{::getTagField(row)}}\"><div class=card-body><div class=icon ng-if=\"::(UIOptions.iconField && row[UIOptions.iconField])\"><i ng-class=::row[UIOptions.iconField]></i></div><div class=value><h5 ng-if=::UIOptions.valueField>{{::getValue(row)}}</h5><p ng-if=::UIOptions.titleField ng-bind-html=::row[UIOptions.titleField]></p></div></div></div></div></div></div></div></div>"
  );


  $templateCache.put('src/partials/esParamAdvancedNumeric.html',
    "<label class=\"control-label es-param-label\" uib-tooltip={{::esParamDef.toolTip}} tooltip-placement=bottom>{{::esParamDef.caption}}</label><button type=button class=\"btn btn-info btn-open-modal es-param-control\" ng-click=\"askForMore('nm')\">{{esParamVal[esParamDef.id].strVal(true)}}<span class=\"mdi mdi-open-in-new pull-right\"></span></button>"
  );


  $templateCache.put('src/partials/esParamAdvancedString.html',
    "<label class=\"control-label es-param-label\" uib-tooltip={{::esParamDef.toolTip}} tooltip-placement=bottom>{{::esParamDef.caption}}</label><button type=button class=\"btn btn-info btn-open-modal es-param-control\" ng-click=\"askForMore('st')\">{{esParamVal[esParamDef.id].strVal(true)}}<span class=\"mdi mdi-open-in-new pull-right\"></span></button>"
  );


  $templateCache.put('src/partials/esParamBoolean.html',
    "<label class=\"control-label es-param-label\" uib-tooltip={{::esParamDef.toolTip}} tooltip-placement=bottom>{{::esParamDef.caption}}</label><div class=form-check><input class=\"es-param-control form-check-input\" type=checkbox id=check-{{::esParamDef.id}} ng-model-options=\"{getterSetter: true}\" ng-model=esParamVal[esParamDef.id].pValue ng-false-value=\"0\"><label class=bg-primary for=check-{{::esParamDef.id}}></label></div>"
  );


  $templateCache.put('src/partials/esParamDateRange.html',
    "<label class=\"control-label es-param-label\" uib-tooltip={{::esParamDef.toolTip}} tooltip-placement=bottom>{{::esParamDef.caption}}</label><button type=button class=\"btn btn-info btn-open-modal es-param-control\" ng-click=\"askForMore('dr')\">{{esParamVal[esParamDef.id].strVal(true)}}<span class=\"mdi mdi-open-in-new pull-right\"></span></button>"
  );


  $templateCache.put('src/partials/esParamEnum.html',
    "<label class=\"control-label es-param-label\" uib-tooltip={{::esParamDef.toolTip}} tooltip-placement=bottom>{{::esParamDef.caption}}</label><select class=\"form-control es-param-control\" kendo-drop-down-list name={{::esParamDef.id}} ng-required=::esParamDef.required ng-cloak k-data-text-field=\"'text'\" k-data-value-field=\"'value'\" k-auto-bind=true k-data-source=::esParamDef.enumList k-value-primitive=true k-ng-delay=esParamVal[esParamDef.id].paramValue k-ng-model=esParamVal[esParamDef.id].paramValue></select>"
  );


  $templateCache.put('src/partials/esParamInv.html',
    "<label class=\"control-label es-param-label\" uib-tooltip={{::esParamDef.toolTip}} tooltip-placement=bottom>{{::esParamDef.caption}}</label><div class=input-group><input class=\"form-control es-param-control\" kendo-masked-text-box name={{::esParamDef.id}} autocomplete=nope ng-required=::esParamDef.required k-mask=::esParamDef.formatString ng-model-options=\"{getterSetter: true}\" ng-model=\"esParamVal[esParamDef.id].pValue\"><div class=input-group-append><button class=\"btn btn-outline-secondary\" type=button ng-click=onInvestigate()><i class=\"mdi mdi-magnify\"></i></button></div></div>"
  );


  $templateCache.put('src/partials/esParamMultiEnum.html',
    "<label class=\"control-label es-param-label\" uib-tooltip={{::esParamDef.toolTip}} tooltip-placement=bottom>{{::esParamDef.caption}}</label><select class=\"form-control es-param-control\" name={{::esParamDef.id}} ng-required=::esParamDef.required kendo-multi-select k-data-text-field=\"'text'\" k-data-value-field=\"'value'\" k-auto-bind=false k-value-primitive=true k-data-source=esParamDef.enumList k-ng-model=esParamVal[esParamDef.id].paramValue></select>"
  );


  $templateCache.put('src/partials/esParamMultiZoom.html',
    "<label class=\"control-label es-param-label\" uib-tooltip={{::esParamDef.toolTip}} tooltip-placement=bottom>{{::esParamDef.caption}}</label><select class=\"form-control es-param-control\" kendo-multi-select name={{::esParamDef.id}} ng-required=::esParamDef.required k-template=\"'<span><b>#: Code #</b> -- #: Description #</span>'\" k-data-text-field=::esParamDef.invSelectedMasterField k-data-value-field=::esParamDef.invSelectedMasterField k-filter=\"'contains'\" k-auto-bind=false k-value-primitive=true k-ng-model=esParamVal[esParamDef.id].paramValue k-data-source=esParamLookupDS></select>"
  );


  $templateCache.put('src/partials/esParamNumeric.html',
    "<label class=\"control-label es-param-label\" uib-tooltip={{::esParamDef.toolTip}} tooltip-placement=bottom>{{::esParamDef.caption}}</label><input class=\"form-control es-param-control\" kendo-numeric-text-box autocomplete=nope name={{::esParamDef.id}} ng-required=::esParamDef.required align=right k-ng-model=esParamVal[esParamDef.id].paramValue k-spinners=false k-decimals=esParamDef.precision k-format=\"'n'+'{{::esParamDef.precision}}'\">"
  );


  $templateCache.put('src/partials/esParamText.html',
    "<label class=\"control-label es-param-label\" uib-tooltip={{::esParamDef.toolTip}} tooltip-placement=bottom>{{::esParamDef.caption}}</label><input class=\"form-control es-param-control\" type={{::esParamDef.inputType}} autocomplete=nope kendo-masked-text-box name={{::esParamDef.id}} ng-required=::esParamDef.required k-mask=::esParamDef.formatString ng-model-options=\"{getterSetter: true}\" ng-model=\"esParamVal[esParamDef.id].pValue\">"
  );


  $templateCache.put('src/partials/esParamZoom.html',
    "<label class=\"control-label es-param-label\" uib-tooltip={{::esParamDef.toolTip}} tooltip-placement=bottom>{{::esParamDef.caption}}</label><select class=\"form-control es-param-control\" kendo-combo-box name={{::esParamDef.id}} ng-required=::esParamDef.required k-template=\"'<span><b>#: Code #</b> -- #: Description #</span>'\" k-data-text-field=::esParamDef.invSelectedMasterField k-data-value-field=::esParamDef.invSelectedMasterField k-filter=\"'contains'\" k-auto-bind=false k-min-length=3 k-value-primitive=true k-ng-model=esParamVal[esParamDef.id].paramValue k-data-source=esParamLookupDS></select>"
  );


  $templateCache.put('src/partials/esParams.html',
    "<div class=\"es-module es-module-params\"><uib-accordion close-others=false><div uib-accordion-group is-open=esPanelOpen.status><uib-accordion-heading><span uib-tooltip-html=\"esParamsDef.strVal(esParamsValues, false, '<br/>')\" tooltip-placement=\"auto bottom-left\" tooltip-enable=\"esParamsDef.strVal(esParamsValues, false) != ''\"><i class=mdi ng-class=\"{'mdi-menu-down': esPanelOpen.status, 'mdi-menu-right': !esPanelOpen.status}\"></i>&nbsp;{{(esForceTitle ? esForceTitle : esParamsDef.title)}} <small>{{esParamsDef.strVal(esParamsValues, true)}}</small></span></uib-accordion-heading><form novalidate class=form name=esParamsPanelForm><div class=row><div class=\"form-group col-12 col-md-6 col-lg-3\" ng-class=\"{'has-error is-invalid': esParamsPanelForm.{{::param.id}}.$invalid}\" ng-repeat=\"param in esParamsDef.simpleDefinitions() | orderBy:'aa'\"><es-param class=es-param es-type=\"::param | esParamTypeMapper\" es-param-val=esParamsValues es-param-def=param></es-param></div><div ng-if=\"esParamsDef.hasAdvancedParams() && !esMore\" class=\"col-12 col-md-6 col-lg-3 es-param-more\"><button type=button class=\"btn btn-default\" tabindex=0 ng-click=esToggleMore()><i class=\"mdi mdi-plus\"></i></button></div><div ng-if=esMore class=\"form-group col-12 col-md-6 col-lg-3\" ng-class=\"{'has-error is-invalid': esParamsPanelForm.{{::param.id}}.$invalid}\" ng-repeat=\"param in esParamsDef.advancedDefinitions() | orderBy:'aa'\"><es-param class=es-param es-type=\"::param | esParamTypeMapper\" es-param-val=esParamsValues es-param-def=param></es-param></div><div ng-if=esMore class=\"col-12 col-md-6 col-lg-3 es-param-more\"><button type=button class=\"btn btn-default\" tabindex=0 ng-click=esToggleMore()><i class=\"mdi mdi-minus\"></i></button></div></div></form><button type=button ng-if=esShowRun ng-disabled=esParamsPanelForm.$invalid class=\"btn btn-primary\" ng-click=esRunClick()>{{::esRunTitle}}</button></div></uib-accordion></div>"
  );


  $templateCache.put('src/partials/esParamsPanelPopover.html',
    "<div class=row ng-repeat=\"param in esParamsDef.definitions | filter:{visible: true} | orderBy:'aa'\"><div ng-if=esParamsValues[param.id].strVal()><span class=\"col-12 col-sm-6\"><strong>{{::param.caption}}</strong></span> <span class=\"col-12 col-sm-6\">{{esParamsValues[param.id].strVal()}}</span></div></div>"
  );


  $templateCache.put('src/partials/esPivotPQ.html',
    "<div class=row><div class=col-12><es-params-panel ng-cloak es-panel-open=esPqDef.esPanelOpen es-group-id=esPqDef es-force-title=esPqDef.Title es-show-run=\"'true'\" es-run-click=::executePQ() es-data-source=esPivotDataSource></es-params-panel></div><div class=col-12><div class=espivot-wrapper><div ng-if=esPqDef.UIOptions.enableChart ng-hide=\"!esPqDef.UIOptions.enableChart || esPqDef.UIOptions.hideChart\"><div id=esPivotChart dx-chart=chartOptions></div></div><div id=esPivotGrid dx-pivot-grid=pivotOptions></div><div dx-popup=popupOptions><div data-options=\"dxTemplate: { name: 'content' }\"><div dx-data-grid=dataGridOptions></div></div></div></div></div></div>"
  );


  $templateCache.put('src/partials/esSanKeyPQ.html',
    "<div class=row><div class=col-12><es-params-panel ng-cloak es-panel-open=esPqDef.esPanelOpen ng-if=!esLocalData es-group-id=::esPqDef es-local-data-source=\"'true'\" es-force-title=::esPqDef.Title es-show-run=\"'true'\" es-run-click=::executePQ()></es-params-panel></div><div class=col-12><div id=essankey dx-sankey=UIOptions style=\"height: 1024px\"></div></div></div>"
  );


  $templateCache.put('src/partials/esStockChartPQ.html',
    "<div class=row><div class=col-12><es-params-panel ng-cloak es-panel-open=esPqDef.esPanelOpen ng-if=!esLocalData es-group-id=esPqDef es-local-data-source=\"'true'\" es-force-title=esPqDef.Title es-show-run=\"'true'\" es-run-click=::executePQ() es-data-source=esChartDataSource></es-params-panel></div><div class=col-12><div class=eschart-wrapper><div kendo-stock-chart=esChartCtrl k-ng-delay=esChartOptions.dataSource k-rebind=esChartOptions k-options=esChartOptions></div></div></div></div>"
  );


  $templateCache.put('src/partials/esTimelinePQ.html',
    "<div class=row><div class=col-12><es-params-panel ng-cloak es-panel-open=esPqDef.esPanelOpen ng-if=!esLocalData es-group-id=esPqDef es-local-data-source=\"'true'\" es-force-title=esPqDef.Title es-show-run=\"'true'\" es-run-click=::executePQ()></es-params-panel></div><div class=col-12><div class=estimeline-wrapper><div class=top-header ng-if=\"(entityDS && entityDS.Name)\"><div class=row><div class=\"col icon\" ng-if=entityDS.fBlobGID><img ng-src=\"{{ getImageUrl(entityDS.fBlobGID) }}\"></div><div class=col><h1>{{ (entityDS.Code + ' - ' + (entityDS.Name || ''))}} <span class=text-muted ng-if=entityDS.SinceWithUs>(since {{ toHeaderDateString(entityDS.SinceWithUs) }})</span></h1><h2>{{ (entityDS.FullName || '')}} <span class=date ng-if=\"oldestEvent && newestEvent\">({{ toHeaderDateString(oldestEvent.date) }} - {{ toHeaderDateString(newestEvent.date) }})</span> <span class=badge>{{ timelineDS.length }} items</span></h2></div></div></div><div kendo-timeline=esTimelineCtrl k-ng-delay=esTimelineOptions options=esTimelineOptions></div></div></div></div>"
  );


  $templateCache.put('src/partials/esTreeMapPQ.html',
    "<div class=row><div class=col-12><es-params-panel ng-cloak es-panel-open=esPqDef.esPanelOpen ng-if=!esLocalData es-group-id=esPqDef es-local-data-source=\"'true'\" es-force-title=esPqDef.Title es-show-run=\"'true'\" es-run-click=::executePQ() es-data-source=esChartDataSource></es-params-panel></div><div class=col-12><div class=eschart-wrapper><div kendo-treemap=esTreeMapCtrl k-ng-delay=esChartOptions.dataSource k-options=esChartOptions></div></div></div></div>"
  );


  $templateCache.put('src/partials/esWebPQ.html',
    "<div class=row><div class=col-12><es-params-panel ng-cloak ng-if=::esParamsDef.visibleDefinitions().length es-params-values=esParamsValues es-group-id=esGroupId es-filter-id=esFilterId es-force-title=::esForceTitle es-panel-open=esPanelOpen es-params-def=esParamsDef></es-params-panel></div><div class=col-12><kendo-pager ng-if=esShowTopPagination auto-bind=false page-size=20 page-sizes=esGridOptions.pageable.pageSizes refresh=true data-source=esGridOptions.dataSource></kendo-pager></div><div class=col-12><es-grid class=esgrid ng-cloak es-group-id=esGroupId es-filter-id=esFilterId es-grid-options=esGridOptions es-p-q-options=esPQOptions es-execute-params=esParamsValues></es-grid></div></div>"
  );


  $templateCache.put('src/partials/esmodalmap.html',
    "<div kendo-map=esMap es-kendomap-init k-center=$ctrl.point k-zoom=15 k-layers=\"[{\r" +
    "\n" +
    "                type: 'tile',\r" +
    "\n" +
    "                urlTemplate: 'https://#= subdomain #.tile.openstreetmap.org/#= zoom #/#= x #/#= y #.png',\r" +
    "\n" +
    "                subdomains: ['a', 'b', 'c']\r" +
    "\n" +
    "            }]\" k-markers=\"[{\r" +
    "\n" +
    "                location: $ctrl.point,\r" +
    "\n" +
    "                shape: 'pinTarget',\r" +
    "\n" +
    "                tooltip: {\r" +
    "\n" +
    "                    content: $ctrl.title\r" +
    "\n" +
    "                }\r" +
    "\n" +
    "            }]\" style=\"height: 300px\"></div>"
  );


  $templateCache.put('src/partials/esSurvey/esPropertyQuestion_0.html',
    "<input class=\"es-survey-question-control form-control\" name={{::esGlobals.esConvertGIDtoId(esQuestion.GID)}} ng-required=esQuestion.Mandatory ng-model=\"esPsVal[esQuestion.Code]\">"
  );


  $templateCache.put('src/partials/esSurvey/esPropertyQuestion_1.html',
    "<input class=\"es-survey-question-control form-control\" type=number name={{::esGlobals.esConvertGIDtoId(esQuestion.GID)}} ng-required=esQuestion.Mandatory align=right ng-model=esPsVal[esQuestion.Code] spinners=\"false\">"
  );


  $templateCache.put('src/partials/esSurvey/esPropertyQuestion_11.html',
    "<input class=\"es-survey-question-control es-param-control\" kendo-date-time-picker name={{::esGlobals.esConvertGIDtoId(esQuestion.GID)}} ng-required=esQuestion.Mandatory ng-model=\"esPsVal[esQuestion.Code]\">"
  );


  $templateCache.put('src/partials/esSurvey/esPropertyQuestion_12.html',
    "<uib-timepicker class=\"es-survey-question-control es-param-control\" name={{::esGlobals.esConvertGIDtoId(esQuestion.GID)}} ng-required=esQuestion.Mandatory ng-model=esPsVal[esQuestion.Code] hour-step=1 minute-step=30 show-meridian=false></uib-timepicker>"
  );


  $templateCache.put('src/partials/esSurvey/esPropertyQuestion_14.html',
    "<div ng-repeat=\"option in getChoicesOfQuestion()\"><label><input name={{::esGlobals.esConvertGIDtoId(esQuestion.GID)}} type=checkbox es-checklist-model=esPsVal[esQuestion.Code] es-checklist-value=option.Value>{{option.Description}}</label></div>"
  );


  $templateCache.put('src/partials/esSurvey/esPropertyQuestion_15.html',
    "<input kendo-numeric-text-box k-min=0 k-max=100 class=\"es-survey-question-control es-param-control\" name={{::esGlobals.esConvertGIDtoId(esQuestion.GID)}} ng-required=esQuestion.Mandatory ng-model=esPsVal[esQuestion.Code] style=\"width: 100%\">"
  );


  $templateCache.put('src/partials/esSurvey/esPropertyQuestion_2.html',
    "<input ng-if=!esQuestion.PArg class=\"es-survey-question-control form-control\" type=number name={{::esGlobals.esConvertGIDtoId(esQuestion.GID)}} ng-required=esQuestion.Mandatory align=right pattern=[0-9]+ ng-model=\"esPsVal[esQuestion.Code]\"><uib-rating ng-if=\"esQuestion.PArg && (esQuestion.PArg.slice(0, 1) != '-')\" name={{::esGlobals.esConvertGIDtoId(esQuestion.GID)}} es-positive-integer=!esQuestion.Mandatory ng-model=esPsVal[esQuestion.Code] max={{esQuestion.PArg}}></uib-rating><div ng-if=\"esQuestion.PArg && (esQuestion.PArg.slice(0, 1) == '-')\" ng-repeat=\"option in getScale(esQuestion.PArg)\"><label><input type=radio name={{::esGlobals.esConvertGIDtoId(esQuestion.GID)}} ng-required=\"esQuestion.Mandatory && !esPsVal[esQuestion.Code]\" ng-model=esPsVal[esQuestion.Code] ng-value=option>{{option}}</label></div>"
  );


  $templateCache.put('src/partials/esSurvey/esPropertyQuestion_3.html',
    "<p class=input-group><input class=\"es-survey-question-control form-control\" is-open=calendarStatus.opened name={{::esGlobals.esConvertGIDtoId(esQuestion.GID)}} ng-required=esQuestion.Mandatory uib-datepicker-popup={{calendarFormat}} ng-model=esPsVal[esQuestion.Code] close-text=\"Close\"> <span class=input-group-btn><button type=button class=\"btn btn-default\" ng-click=openCalendar($event)><i class=\"mdi mdi-calendar\"></i></button></span></p>"
  );


  $templateCache.put('src/partials/esSurvey/esPropertyQuestion_4.html',
    "<div ng-repeat=\"option in getChoicesOfQuestion()\"><label><input type=radio name={{::esGlobals.esConvertGIDtoId(esQuestion.GID)}} ng-required=\"esQuestion.Mandatory && !esPsVal[esQuestion.Code]\" ng-model=esPsVal[esQuestion.Code] ng-value={{option.Value}}>{{option.Description}}</label></div>"
  );


  $templateCache.put('src/partials/esSurvey/esPropertyQuestion_6.html',
    "<input class=\"es-survey-question-control form-control\" type=number name={{::esGlobals.esConvertGIDtoId(esQuestion.GID)}} ng-required=esQuestion.Mandatory align=right ng-model=esPsVal[esQuestion.Code] spinners=\"false\">"
  );


  $templateCache.put('src/partials/esSurvey/esPropertyQuestion_7.html',
    "<select kendo-drop-down-list name={{::esGlobals.esConvertGIDtoId(esQuestion.GID)}} ng-required=esQuestion.Mandatory k-data-text-field=\"'Description'\" k-data-value-field=\"'Code'\" k-auto-bind=false k-ng-delay=esQuestion k-data-source=\"{{esQuestion.PArg + '_DS'}}\" k-value-primitive=true ng-model=esPsVal[esQuestion.Code] style=\"width: 100%\"></select>"
  );


  $templateCache.put('src/partials/esSurvey/esSurvey.html',
    "<div class=row><div ng-if=isIntroduction() class=es-survey-introduction><div><div ng-bind-html=esPsDef.Campaign.TaskNotes></div></div><div><button class=\"btn btn-primary\" ng-click=advanceStep()>{{'ESUI.ESSURVEY.START' | translate}}</button></div></div><div ng-show=\"esSectionIdx >= 0\"><h2>{{esSectionIdx + 1}}. {{esPsDef.Sections[esSectionIdx].Description}}</h2><form novalidate class=form name=esqsection><div class=row><ng-form name=esqsection><div class=\"es-survey-question form-group col-12\" ng-class=\"{'has-error': esqsection.{{esGlobals.esConvertGIDtoId(question.GID)}}.$invalid && esqsection.{{esGlobals.esConvertGIDtoId(question.GID)}}.$dirty}\" ng-repeat=\"question in getQuestionsofSection()\"><label class=\"control-label es-survey-question-label\">{{$index + 1}}. {{question.Description}} <span ng-if=question.Mandatory>(*)</span></label><label class=es-survey-question-hint>{{question.AlternativeDescription}}</label><es-property-question es-ps-def=esPsDef es-question=question es-ps-val=\"esPsVal\"></div></ng-form><div><button class=\"btn btn-primary\" ng-click=backStep() ng-disabled=isIntroduction()>{{'ESUI.ESSURVEY.PREVIOUS' | translate}}</button> <button class=\"btn btn-primary\" ng-click=advanceStep() ng-hide=isLast() ng-disabled=esqsection.$invalid>{{'ESUI.ESSURVEY.NEXT' | translate}}</button> <button class=\"btn btn-primary\" ng-click=saveAndComplete() ng-show=isLast() ng-disabled=esqsection.$invalid>{{'ESUI.ESSURVEY.SAVE' | translate}}</button></div></div></form></div></div>"
  );

}]);
