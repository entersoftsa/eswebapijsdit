/*! Entersoft Application Server WEB API - v3.1.4 - 2022-10-31
* Copyright (c) 2022 Entersoft SA; Licensed Apache-2.0 */
/***********************************
 * Entersoft SA
 * http://www.entersoft.eu
 * v0.0.72
 *
 ***********************************/

/**
 * @ngdoc overview
 * @name es.Services.Web
 * @module es.Services.Web
 * @requires ngStorage
 * @requires ngFileUpload
 * @kind module
 * @description
 * This module encapsulates the services, providers, factories and constants for the **Entersoft AngularJS WEB API** services that can be used
 * within the context of any AngularJS Single Page Application (SPA).
 * The core components of the ES WEB API is the Angular Provider {@link es.Services.Web.esWebApi esWebApiProvider}
 */

(function() {
    'use strict';

    /* Services */

    var esWebServices = angular.module('es.Services.Web', ['ngStorage' /*, 'es.Services.Analytics' */ ]);

    esWebServices.
    constant('ESWEBAPI_URL', {
        __LOGIN__: "api/Login/Login",
        __VALIDATE_USER__: "api/Login/ValidateUser",
        __TOKEN__: "api/Login/validateToken",
        __LOGOUT__: "api/Login/Logout",
        __CHG_PWD__: "api/Login/ChangePassword",
        __USER_LOGO__: "api/Login/UserLogo/",
        __REMOVE_USER_LOGO__: "api/Login/RemoveUserLogo/",
        __REMOVE_ENTITY_BLOB__: "api/Login/RemoveEntityBlob/",
        __PERSON_LOGO__: "api/rpc/personLogo/",
        __POST_USER_LOGO__: "api/Login/UpdateUserLogo/",
        __POST_ENTITY_BLOB__: "api/Login/UpdateEntityBlob/",
        __EVENTLOG__: "api/rpc/EventLog/",
        __PUBLICQUERY__: "api/rpc/PublicQuery/",
        __MULTI_PULIC_QUERY__: "api/rpc/MultiPublicQuery/",
        __PUBLICQUERY_INFO__: "api/rpc/PublicQueryInfo/",
        __USERSITES__: "api/Login/Usersites",
        __STANDARD_ZOOM__: "api/rpc/FetchStdZoom/",
        __MULTI_STANDARD_ZOOM__: "api/rpc/MultiFetchStdZoom/",
        __SCROLLERROOTTABLE__: "api/rpc/SimpleScrollerRootTable/",
        __SCROLLER__: "api/rpc/SimpleScroller/",
        __ENTITYACTION__: "api/Entity/",
        __REGISTERED_ENDPOINT_FOR_TYPE__: "api/endpoint/RegisteredEndpointFor",
        __ENTITYBYGIDACTION__: "api/EntityByGID/",
        __ELASTICSEARCH__: "api/esearch/",
        __SEND_SMS__: "api/collaboration/SendSMS/",
        __SERVER_CAPABILITIES__: "api/Login/ServerCapabilities/",
        __FETCH_COMPANY_PARAM__: "api/rpc/FetchCompanyParam/",
        __GET_PARAMETER_VALUE__: "api/rpc/ParameterValue/",
        __FETCH_COMPANY_PARAMS__: "api/rpc/FetchCompanyParams/",
        __SCROLLER_COMMAND__: "api/rpc/ScrollerCommand/",
        __FORM_COMMAND__: "api/rpc/FormCommand/",
        __EBS_SERVICE__: "api/rpc/EbsService/",
        __FETCH_SESSION_INFO__: "api/rpc/FetchSessionInfo/",
        __FETCH_ODS_TABLE_INFO__: "api/rpc/FetchOdsTableInfo/",
        __FETCH_ODS_COLUMN_INFO__: "api/rpc/FetchOdsColumnInfo/",
        __FETCH_ODS_RELATION_INFO__: "api/rpc/FetchOdsRelationInfo/",
        __FETCH_ODS_DETAIL_RELATIONS_INFO__: "api/rpc/FetchOdsDetailRelationsInfo/",
        __FETCH_ODS_MASTER_RELATIONS_INFO__: "api/rpc/FetchOdsMasterRelationsInfo/",
        __FI_IMPORTDOCUMENT___: "api/rpc/FIImportDocument/",
        __FETCH_ENTITY__: "api/rpc/fetchEntity/",
        __FETCH_ENTITY_BY_CODE__: "api/rpc/fetchEntityByCode/",
        __FETCH_ESPROPERTY_SET__: "api/rpc/fetchPropertySet/",
        __FETCH_ESSCALE__: "api/rpc/fetchESScale/",
        __FETCH_WEB_EAS_ASSET__: "api/asset/",
        __DOWNLOAD_WEB_EAS_ASSET__: "api/asset2/downloadAsset/",
        __FETCH_ES00DOCUMENT_BY_GID__: "api/ES00Documents/InfoByGID/",
        __FETCH_ES00DOCUMENT_BY_CODE__: "api/ES00Documents/InfoByCode/",
        __FETCH_ES00DOCUMENT_BY_ENTITYGID__: "api/ES00Documents/InfoByEntityGid/",
        __FETCH_ES00DOCUMENT_BLOBDATA_BY_GID__: "api/ES00Documents/BlobDataByGID/",
        __DOWNLOAD_ES00DOCUMENT_BLOBDATA_BY_GID__: "api/ES00Documents/DownloadBlobDataByGID/",
        __DOWNLOAD_ES00BLOB_BY_GID__: "api/ES00Documents/GetES00Blob/",
        __DOWNLOAD_ES00BLOB_BY_OBJECT__: "api/ES00Documents/GetES00BlobFromObject/",
        __FETCH_ES00DOCUMENT_MIME_TYPES__: "api/ES00Documents/ESMimeTypes/",
        __DELETE_ES00DOCUMENT__: "api/ES00Documents/DeleteES00Document/",
        __ADD_OR_UPDATE_ES00DOCUMENT_BLOBDATA__: "api/ES00Documents/AddOrUpdateES00DocumentBlobData/",
        __EXPORT_PROXY_SAVEFILE__: "api/export/savefile/",
        __FETCH_ES00DEVICE__: "api/device/fetchDevice/",
        __GET_BODY_FROM_ES00BLOB__: "api/ES00Documents/GetBodyFromES00Blob/",
        __POST_BODY_TO_ES00BLOB__: "api/ES00Documents/PostBodyToES00Blob/",

    });

    esWebServices.value("__WEBAPI_RT__", {
        url: ""
    });


    function endsWith(str, suffix) {
        return str.indexOf(suffix, str.length - suffix.length) !== -1;
    }

    function startsWith(str, prefix) {
        return str.toLowerCase().indexOf(prefix.toLowerCase()) === 0;
    }

    /**
     * @ngdoc service
     * @name es.Services.Web.esWebApiProvider
     * @module es.Services.Web
     * @kind provider
     * @description
     * Provides the functions needed to configure the esWebAPI service through the esWebApiProvider that is taking place typically in the _app.js_ file of the AngularJS SPA
     *  in the _app.config_ function.
     * Web API.
     */

    /**
     * @ngdoc service
     * @name es.Services.Web.esWebApi
     * @module es.Services.Web
     * @requires $http 
     * @requires $log 
     * @requires $q 
     * @requires $rootScope 
     * @requires es.Services.Web.esGlobals 
     * @requires es.Services.Web.esMessaging
     * @kind provider
     * @description
     * In order to use the esWebApi service you have to configure within your AngularJS application the service through the {@link es.Services.Web.esWebApiProvider esWebApiProvider}.
     * Web API.
     */
    esWebServices.provider("esWebApi",
        function() {

            var urlWEBAPI = "";
            var unSecureWEBAPI = "";
            var secureWEBAPI = "";
            var additionalHeaders = {};

            var esConfigSettings = {
                host: "",
                allowUnsecureConnection: false,
                subscriptionId: "",
                subscriptionPassword: "",
                bridgeId: "",
                additionalHeaders: {},
            };

            return {
                /**
                 * @ngdoc function
                 * @name es.Services.Web.esWebApiProvider#getSettings
                 * @methodOf es.Services.Web.esWebApiProvider
                 * @module es.Services.Web
                 * @kind function
                 * @description Function that returns the current settings that have been used for the configuration of the esWebApiProvider.
                 * @return {object} A JSON object representing the esWebApiProvider configuration settings. A typical form 
                 * of the _settings_ configuration object is as follows:
```js
var esWebApiSettings = {
    host: string, // i.e. "localhost/eswebapi" the url (with out the http or https protocol) that points to the Entersoft WEB API Server
                  // if you specify the complete url, then the https or https part will be automatically removed. The actual protocol that 
                  // wil be used depends on the allowUnsecureConnection property.
    subscriptionId: string, // i.e. in typical installations this should be an empty string ""
    subscriptionPassword: string, // the passowrd for the selected subscriptionId. In typical instllations this would be "passx"
    allowUnsecureConnection: boolean // whether the ES Web Api Server allows for unsecure connections i.e. http or not i.e. https will be used
}
```
                 **/
                getSettings: function() {
                    return esConfigSettings;
                },

                /**
                 * @ngdoc function
                 * @name es.Services.Web.esWebApiProvider#getServerUrl
                 * @methodOf es.Services.Web.esWebApiProvider
                 * @module es.Services.Web
                 * @kind function
                 * @description Function that returns the actual URL to the Entersoft WEB API Server as it has been resolved after configuration of
                 * the esWebApiProvider.
                 * @return {string} Returns the actual URL to the Entersoft WEB API Server 
                 **/
                getServerUrl: function() {
                    return urlWEBAPI;
                },

                /**
                 * @ngdoc function
                 * @name es.Services.Web.esWebApiProvider#setSettings
                 * @methodOf es.Services.Web.esWebApiProvider
                 * @module es.Services.Web
                 * @kind function
                 * @description Function that returns the full URL to the Entersoft WEB API Server as it has been resolved 
                 * according to the configuration of the esWebApiProvider at the provider's configuration function of the AngularJS application.
                 * For more information on how to setup the Entersoft Web Api Server please refer to {@link installation/es02wapis ES WEB API Server}.
                 * A typical form 
                 * of the _settings_ configuration object is as follows:
```js
var esWebApiSettings = {
            host: string, // i.e. "localhost/eswebapi" the url  .
            subscriptionId: string, // i.e. in typical installations this should be an empty string ""
            subscriptionPassword: string, // the passowrd for the selected subscriptionId. In typical instllations this would be "passx"
            allowUnsecureConnection: boolean // whether the ES Web Api Server allows for unsecure connections i.e. http or not i.e. https will be used
        }
```
                 * @param {object} settings A JSON object that contains the configuration properties for the esWebApi service to work. 
                 * @param {string} settings.host The URL (with out the http or https protocol) that points to the Entersoft WEB API Server.
                 * if you specify the complete url, then the https or https part will be automatically removed. The actual protocol that 
                 * will be used depends on the allowUnsecureConnection property. For example, "localhost/eswebapi" or "api.entersoft.gr".
                 * @param {boolean} settings.allowUnsecureConnection Boolean value that indicates whether the ES WEB API Server allows for unsecure connections (true) i.e. http or not (false) i.e. https will be used
                 * @param {string=} settings.subscriptionId The ID that identifies from the list of the registered subscriptions in the {@link installation/es02wapis#config-file config.json} will be used to open session.
                 * If null, or empty or undefined, then if  the __subscriptionId__ is not specified at the run-time when calling the {@link es.Services.Web.esWebApi#methods_opensession openSession}
                 * the framework will search for a Subscription with SubscriptionID = "". If such a subscription is not found in 
                 * the {@link installation/es02wapis#config-file config.json} under the Subscriptions list, an error will be returned.
                 * @param {string=} settings.subscriptionPassword The password that has been assigned in the {@link installation/es02wapis#config-file config.json} for the given 
                 * SubscriptionId.
                 * @param {string=} settings.bridgeId The ID that identifies the bridge from the list of bridges under the given Subscription that matches the SubscrptionID that
                 * will be used in {@link es.Services.Web.esWebApi#methods_opensession openSession} and in {@link es.Services.Web.esWebApi#methods_fetchUserSites fetchUserSites}.
                 * If null, or empty or undefined, then if the __bridgeId__ is not specified at the run-time when calling the {@link es.Services.Web.esWebApi#methods_opensession openSession}
                 * the framework will search for a Bridge with BridgeID = "" under the list of bridges of the specific Subscription. If such a bridge is not found in 
                 * the {@link installation/es02wapis#config-file config.json} under the Subscription's Bridges list, an error will be returned.
                 * @param {object=} claims A JSON string/value pairs object with a set of claims that should be passed all the way from the web api client to
                 * the Entersoft Application Server with full support of Call Context. For more information
                 * @example
                 * This sample assumes that the Entersoft WEB API Server has been installed in the local Microsoft IIS as a WEB Application under
                 * the Default Web Site as shown below:
                 * ![Local ES WEB API Server](images/api/es01webapisrv.png)
```js
eskbApp.config(['$logProvider',
    '$routeProvider',
    'esWebApiProvider',
    '$exceptionHandlerProvider',
    function($logProvider, $routeProvider, esWebApiServiceProvider, $exceptionHandlerProvider) {

        // The configuration of the other providers used in this AngularJS Application is 
        // omitted for clarity purposes

        var subscriptionId = "";
        esWebApiServiceProvider.setSettings({
            host: "localhost/eswebapi",
            subscriptionId: subscriptionId,
            subscriptionPassword: "passx",
            bridgeId: "",
            allowUnsecureConnection: true
        });
    }
]);
```
                **/
                setSettings: function(settings) {
                    var __SECURE_HTTP_PREFIX__ = "https://";
                    var __UNSECURE_HTTP_PREFIX__ = "http://";

                    esConfigSettings = settings;

                    if (esConfigSettings.host) {
                        esConfigSettings.host = esConfigSettings.host.trim();

                        if (startsWith(esConfigSettings.host, __SECURE_HTTP_PREFIX__)) {
                            esConfigSettings.host = esConfigSettings.host.slice(__SECURE_HTTP_PREFIX__.length).trim();
                        } else if (startsWith(esConfigSettings.host, __UNSECURE_HTTP_PREFIX__)) {
                            esConfigSettings.host = esConfigSettings.host.slice(__UNSECURE_HTTP_PREFIX__.length).trim();
                        }

                        if (esConfigSettings.host == "") {
                            throw new Error("host for Entersoft WEB API Server is not specified");
                        }

                        if (!endsWith(esConfigSettings.host, "/")) {
                            esConfigSettings.host += "/";
                        }

                        unSecureWEBAPI = __UNSECURE_HTTP_PREFIX__ + esConfigSettings.host;;
                        secureWEBAPI = __SECURE_HTTP_PREFIX__ + esConfigSettings.host;
                        additionalHeaders = esConfigSettings.additionalHeaders;

                        if (esConfigSettings.allowUnsecureConnection) {
                            urlWEBAPI = unSecureWEBAPI;
                        } else {
                            urlWEBAPI = secureWEBAPI;
                        }

                    } else {
                        throw new Error("host for Entersoft WEB API Server is not specified");
                    }
                    return this;
                },

                $get: ['$http', '$log', '$q', '$timeout', '$rootScope', '$injector', 'ESWEBAPI_URL', 'esGlobals', 'esMessaging', 'esCache',
                    function($http, $log, $q, $timeout, $rootScope, $injector, ESWEBAPI_URL, esGlobals, esMessaging, esCache) {

                        function prepareHeaders(inHds) {

                            var hds = inHds || {
                                "Authorization": esGlobals.getWebApiToken()
                            };

                            angular.extend(hds, additionalHeaders);
                            return hds;
                        }

                        function fregisterException(inMessageObj, storeToRegister) {
                            if (!inMessageObj) {
                                return;
                            }

                            var messageObj = angular.copy(inMessageObj);

                            try {
                                $.ajax({
                                    type: "POST",
                                    url: urlWEBAPI.concat(ESWEBAPI_URL.__EVENTLOG__),
                                    contentType: "application/json",
                                    headers: prepareHeaders(),
                                    data: JSON.stringify({
                                        exceptionData: messageObj,
                                        exceptionStore: storeToRegister
                                    }, null, '\t')
                                });

                            } catch (loggingError) {

                                // For Developers - log the log-failure.
                                $log.warn("Error logging failed");
                                $log.error(loggingError);
                            }
                        }

                        function fGetMimeTypes() {
                            var deferred = $q.defer();
                            var cItem = esCache.getItem("ES_MIME_TYPES");
                            if (cItem) {
                                $timeout(function() {
                                    deferred.resolve(cItem);
                                });
                                return deferred.promise;
                            }

                            var surl = urlWEBAPI.concat(ESWEBAPI_URL.__FETCH_ES00DOCUMENT_MIME_TYPES__);
                            
                            var httpConfig = {
                                method: 'GET',
                                headers: prepareHeaders(),
                                url: surl,
                            };
                            var ht = $http(httpConfig);
                            processWEBAPIPromise(ht)
                                .then(function(ret) {
                                    esCache.setItem("ES_MIME_TYPES", ret.data);
                                    deferred.resolve(ret.data);
                                }, function() {
                                    deferred.reject(arguments);
                                });
                            return deferred.promise;
                        }

                        function execScrollerCommand(scrollerCommandParams) {
                            if (!scrollerCommandParams || !scrollerCommandParams.ScrollerID || !scrollerCommandParams.CommandID) {
                                throw new Error("ScrollerID and CommandID properties must be defined");
                            }
                            var surl = urlWEBAPI.concat(ESWEBAPI_URL.__SCROLLER_COMMAND__);

                            if (window.ESIsB2B) {
                                scrollerCommandParams = scrollerCommandParams || {};
                                scrollerCommandParams.TAGID = window.TAGID;
                                if (!scrollerCommandParams.TAGID) {
                                    var deferred = $q.defer();
                                    deferred.reject( new Error("Trying to execute Scroller Command [" + scrollerCommandParams.ScrollerID + "/" + scrollerCommandParams.CommandID + "] with no parameter TAGID set is forbidden."));
                                    return processWEBAPIPromise(deferred.promise);
                                }
                            }


                            var ht = $http({
                                method: 'post',
                                headers: prepareHeaders(),
                                url: surl,
                                data: scrollerCommandParams
                            });

                            return ht;
                        }

                        function getOdsInfo(odsType, odsID) {
                            var surl = urlWEBAPI + ESWEBAPI_URL[odsType] + odsID;

                            var deferred = $q.defer();
                            var cItem = esCache.getItem(surl);
                            if (cItem) {
                                $timeout(function() {
                                    deferred.resolve(cItem);
                                });
                                return deferred.promise;
                            }

                            var ht = $http({
                                method: 'get',
                                headers: prepareHeaders(),
                                url: surl
                            });

                            processWEBAPIPromise(ht)
                                .then(function(ret) {
                                    esCache.setItem(surl, ret);
                                    deferred.resolve(ret);

                                }, function() {
                                    deferred.reject(arguments);
                                });

                            return deferred.promise;
                        }

                        function execFormCommand(formCommandParams) {
                            if (!formCommandParams || !formCommandParams.EntityID || !formCommandParams.CommandID) {
                                throw new Error("EntityID and CommandID properties must be defined");
                            }
                            var surl = urlWEBAPI + ESWEBAPI_URL.__FORM_COMMAND__;

                            if (window.ESIsB2B) {
                                formCommandParams = formCommandParams || {};
                                formCommandParams.TAGID = window.TAGID;
                                if (!formCommandParams.TAGID) {
                                    var deferred = $q.defer();
                                    deferred.reject( new Error("Trying to execute form command [" + formCommandParams.EntityID + "/" + formCommandParams.CommandID + "] with no parameter TAGID set is forbidden."));
                                    return processWEBAPIPromise(deferred.promise);
                                }
                            }

                            var ht = $http({
                                method: 'post',
                                headers: prepareHeaders(),
                                url: surl,
                                data: formCommandParams
                            });

                            return processWEBAPIPromise(ht);
                        }

                        function execScroller(apiUrl, groupID, filterID, params) {
                            groupID = groupID ? groupID.trim() : "";
                            filterID = filterID ? filterID.trim() : "";

                            if (window.ESIsB2B) {
                                params = params || {};
                                params.TAGID = window.TAGID;
                                if (!params.TAGID) {
                                    var deferred = $q.defer();
                                    deferred.reject( new Error("Trying to execute Scroller [" + groupID + "/" + filterID + "] with no parameter TAGID set is forbidden."));
                                    return processWEBAPIPromise(deferred.promise);
                                }
                            }

                            var surl = urlWEBAPI.concat(apiUrl, groupID, "/", filterID);
                            var ht = $http({
                                method: 'GET',
                                headers: prepareHeaders(),
                                url: surl,
                                params: params
                            });

                            return processWEBAPIPromise(ht);
                        }

                        function processWEBAPIPromise(promise, doNotHandleError) {
                            if (!promise) {
                                throw new Error("processWEBAPIToken can have parameter promise null or undefined");
                            }

                            var webapitokenOK = function(a) {
                                var hds;
                                if (a && angular.isFunction(a.headers)) {
                                    hds = a.headers();
                                    if (hds && hds["x-es-refresh-token"]) {
                                        esGlobals.setWebApiToken(hds["x-es-refresh-token"], a.config.url || "-");
                                    }
                                }
                                return a;
                            };

                            var webapitokenErr = function(a) {
                                webapitokenOK(a);
                                throw a;
                            };

                            promise = promise.then(webapitokenOK).catch(webapitokenErr);
                            
                            promise = promise.catch(function(xerr) {
                                var a = xerr.data || xerr;
                                if (a) {
                                    $log.error(a);
                                } else {
                                    console.log("Generic Http error");
                                }

                                if (!doNotHandleError) {
                                    esMessaging.publish("ES_HTTP_CORE_ERR", a, xerr.status);
                                }
                                throw xerr;

                            });
                            return promise;
                        }

                        return {
                            /**
                             * @ngdoc function
                             * @name es.Services.Web.esWebApi#getServerUrl
                             * @methodOf es.Services.Web.esWebApi
                             * @module es.Services.Web
                             * @kind function
                             * @description Function that returns the full URL to the Entersoft WEB API Server as it has been resolved 
                             * according to the configuration of the esWebApiProvider at the provider's configuration function of the AngularJS application.
                             * For more information, please  
                             * @return {string} The URL to the Entersoft WEB API Server
                             * @example
```js
// getServerUrl

var sUrl = esWebApi.getServerUrl();
alert(sUrl);

// i.e. http://localhost/eswebapi/ (if allowUnsecureConnection configuration setting of the esWebApiProvider is true)
// i.e. https://localhost/eswebapi/ (if allowUnsecureConnection configuration setting of the esWebApiProvider is false)
```
                             **/
                            getServerUrl: function() {
                                return urlWEBAPI;
                            },

                            getServerSettings: function() {
                                return esConfigSettings;
                            },

                            /**
                             * @ngdoc function
                             * @name es.Services.Web.esWebApi#openSession
                             * @methodOf es.Services.Web.esWebApi
                             * @description This is the function that enables for login and connect through the Entersoft WEB API Server to the Entersoft Application Server.
                             * The vast majority of the esWebApi service methods **REQUIRE** for an authorization token in order to be executed. This Authorization token is obtained 
                             * through a successfull call of the **__openSession__**  function and it is implicitly stored and managed by the esWebApi for its complete lifecycle.
                             *
                             * When credentials.StickySession evaluates to true this is a requirement to the Entersoft WEB API Server
                             * that it requires / mandates the Entersoft WEB API Server to route all the subsequent calls to the same server side session object
                             * i.e. stick to the initial session. That means that in case that more than one Entersoft Application Servers have been registered in the
                             * web api server config.json file as shown in the image below
                             * 
                             * ![Load-Balanced WEB API Server servers](images/api/es011loadbalance.png)
                             * 
                             * the server that will be selected to full fill the stickySession request will be the same that will serve all the subsequent
                             * calls for this session, i.e. all calls will be serverd by the same ESSession of the same server.
                             * On the other hand, openSession instructs Entersoft WEB API Server to fully use load balancing and fault-tolerant logic by
                             * randomly selecting one of the available server to fullfil any susequent call on a per call basis. 
                             * 
                             * @module es.Services.Web
                             * @kind function
                             * @param {object} credentials Entersoft Business Suite login credentials in the form of a JSON object with the following form:
                             * @param {string} credentials.UserID The Entersoft Application User ID
                             * @param {string} credentials.Password The Entersoft Application User password.
                             * @param {string} credentials.BranchID The Entersoft BranchID
                             * @param {string} credentials.LangID The language that will be used for all UI and message elements
                             * @param {string=} credentials.subscriptionId The id of the Subscription. It should be a valid and existing ID that uniquely identifies the
                             * Subscription object in the config.json file of the Entersoft WEB API Server. For more information, {@link installation/es02wapis#config-file ES WEB API Server Configuration File}.
                             * If null or undefined or empty, the esWebApiProvider settings configuration will be used as described in the For more information, {@link api/es.Services.Web.esWebApiProvider#methods_setsettings esWebApiProvider.setSettings}.
                             * @param {string=} credentials.subscriptionPassword The password for the given Subscription
                             * @param {string=} credentials.bridgeId The BridgeID
                             ```js
                             var credentials  = {
                                UserID: "xxxx", //Entersoft User id 
                                Password: "this is my password", // Entersoft User's password
                                BranchID: "Branch", // a valid Branch that the user has access rights and will be used as default for all operations requiring a BranchID
                                LangID: "el-GR",
                                SubscriptionID: "", // a valid subscription id that is registred in the Entersoft WEB API Server config.json file. If undefined, then
                                the esWebApiProvider settings configuration value will be used. This was specified in the config module of the AngularJS app like in the example below
                                SubscriptionPassword: "passx", // the password for the given subscription
                                BridgeID: "", // the ID of the specific bridge to be used 
                             }
                             ```
                             * Example of esWebApiProvider configuration statements:
```js
(function(angular) {
    var eskbApp = angular.module('smeApp', [
        'ngRoute',
        'ngStorage',
        'ui.bootstrap',
        'es.Services.Web',
        'smeControllers'
    ]);

    eskbApp.config(['$logProvider',
        '$routeProvider',
        'esWebApiProvider',
        '$exceptionHandlerProvider',
        function($logProvider, $routeProvider, esWebApiServiceProvider, $exceptionHandlerProvider) {

            esWebApiServiceProvider.setSettings({
                "host" : "192.168.1.190/eswebapijti",
                subscriptionId: "",
                subscriptionPassword: "passx",
                bridgeId: "",
                allowUnsecureConnection: true
            });

        }
    ]);

})(window.angular);
```

                             * @return {httpPromise} Returns a promise.
                             ** If success i.e. success(function(ret) {...}) the response ret is a JSON object that holds the current web session
                             * properties. In an Entersoft AngularJS SPA typical template, upon successful login i.e. openSession, the response object is stored
                             * in the browser's local storage and in most of the cases the developer will not need to use or retrieve it manually. It is up to
                             * Entersoft AngularJS WEB API calls that need the access token in order to access the Web API services and methods to retrieve it from the 
                             * local storage.
                             * 
                             * A success response object has the following form:
```js
var rep = {
    "data": {
        "Model": {
            "GID": "5b6f2e05-0ab6-4f29-9015-6a4352009ead",
            "UserID": "Admin",
            "Name": "Administrator",
            "Inactive": false,
            "WebApiToken": "abcd",
            "WebApiTokenExpiresAt": "2015-09-08T09:59:36.5487011+00:00",
            "PasswdKey": "*",
            "Administrator": true,
            "UserSites": [{
                "Site": {
                    "GID": "86947579-6885-4e86-914e-46378db3794f",
                    "fPersonCodeGID": "11ea77d7-f5dc-4a8d-b629-845c8ff207ac",
                    "Code": "ΑΘΗ",
                    "Description": "Κεντρικά Entersoft",
                    "Status": true,
                    "KindSite": true,
                    "KindWH": true
                },
                "GID": "198e94d8-2026-4426-8bee-b029e39fa4a2",
                "fUserGID": "5b6f2e05-0ab6-4f29-9015-6a4352009ead",
                "fCompanyCode": "ES",
                "fCompanySiteGID": "86947579-6885-4e86-914e-46378db3794f",
                "ServiceLevel": 0
            }, {
                "Site": {
                    "GID": "9a151756-7185-4f40-834f-e6153062b5e2",
                    "fPersonCodeGID": "11ea77d7-f5dc-4a8d-b629-845c8ff207ac",
                    "Code": "ΘΕΣ",
                    "Description": "Υποκατάστημα Θεσσαλονίκης ES",
                    "Status": true,
                    "KindSite": true,
                    "KindWH": true
                },
                "GID": "e1515a3c-8262-4581-8332-8663c2787964",
                "fUserGID": "5b6f2e05-0ab6-4f29-9015-6a4352009ead",
                "fCompanyCode": "ES",
                "fCompanySiteGID": "9a151756-7185-4f40-834f-e6153062b5e2",
                "ServiceLevel": 0
            }]
        },
        "SubscriptionID": "",
        "SubscriptionPassword": "passx"
    },
    "status": 200,
    "config": {
        "method": "POST",
        "transformRequest": [null],
        "transformResponse": [null],
        "url": "http://localhost/eswebapi/api/Login",
        "data": {
            "SubscriptionID": "",
            "SubscriptionPassword": "passx",
            "Model": {
                "UserID": "admin",
                "Password": "entersoft",
                "BranchID": "ΑΘΗ",
                "LangID": "el-GR"
            }
        },
        "headers": {
            "Accept": "application/json",
            "Content-Type": "application/json;charset=utf-8"
        }
    },
    "statusText": "OK"
}
```
                             * In case of an error i.e. function(err) {...} the err contains the Entersoft's Application Server error message and 
                             * the http error codes in case the error is network related. As in the case of success, should you use the typical Entersoft
                             * AngularJS development template for SPAs, the framework automatically handles the error response of openSession call and 
                             * performs a clean-up in browsers local storage, cache, messaging, etc. so that no valid web session exists (as if the user never)
                             * logged-in or performed a logout operation
                             * 
                             * An Entersoft application server releated response error e.g. User does not exist has the following form:
```js
var x = {
    "data": {
        "MessageID": "login-invalid-user",
        "UserMessage": "User [ADMINDSDSDS] is not registered",
        "Messages": []
    },
    "status": 401,
    "config": {
        "method": "POST",
        "transformRequest": [null],
        "transformResponse": [null],
        "url": "http://localhost/eswebapi/api/Login",
        "data": {
            "SubscriptionID": "",
            "SubscriptionPassword": "passx",
            "Model": {
                "UserID": "admindsdsds",
                "Password": "entersoft",
                "BranchID": "ΑΘΗ",
                "LangID": "el-GR"
            }
        },
        "headers": {
            "Accept": "application/json, text/plain",
            "Content-Type": "application/json;charset=utf-8"
        }
    },
    "statusText": "Unauthorized"
};

```
                             * @example
```js
$scope.credentials = {
    UserID: 'admin',
    Password: 'entersoft',
    BranchID: 'ΑΘΗ',
    LangID: 'el-GR'
};

$scope.doLogin = function() {
    esWebApiService.openSession($scope.credentials)
        .then(function(rep) {
                $log.info(rep);
                $location.path("/pq");
            },
            function(err) {
                $log.error(err);
            });
}
```
*/
                            openSession: function(credentials, claims) {

                                var dat = {
                                    SubscriptionID: credentials.subscriptionId || esConfigSettings.subscriptionId,
                                    SubscriptionPassword: credentials.subscriptionPassword || esConfigSettings.subscriptionPassword,
                                    BridgeID: credentials.bridgeId || esConfigSettings.bridgeId,
                                    ExtraPin: credentials.extraPin,
                                    Model: credentials,
                                    Claims: claims || esConfigSettings.claims,
                                    IsExternal: credentials.IsExternal
                                };

                                if (!!credentials.StickySession) {
                                    dat.SessionSpec = '*';
                                }

                                var promise = $http({
                                    method: 'post',
                                    url: urlWEBAPI + ESWEBAPI_URL.__LOGIN__,
                                    headers: prepareHeaders({}),
                                    data: dat
                                }).
                                then(function(data) {
                                    esGlobals.sessionOpened(data.data, credentials);
                                    return data;
                                }).
                                catch(function(ex) {
                                    esGlobals.sessionClosed();
                                    throw ex;
                                });

                                return processWEBAPIPromise(promise);
                            },

                            validateUser: function(ValidateUserInfo) {
                                if (!ValidateUserInfo) {
                                    throw new Error("Parameter token cannot be empty");
                                }

                                var promise = $http({
                                    method: 'post',
                                    url: urlWEBAPI + ESWEBAPI_URL.__VALIDATE_USER__,
                                    headers: prepareHeaders(),
                                    data: ValidateUserInfo
                                }).
                                then(function(data) {
                                    return data;
                                }).
                                catch(function(ex) {
                                    throw ex;
                                });

                                return processWEBAPIPromise(promise);
                            },

                            validateToken: function(token, credentials) {
                                if (!token) {
                                    throw new Error("Parameter token cannot be empty");
                                }

                                var promise = $http({
                                    method: 'post',
                                    url: urlWEBAPI + ESWEBAPI_URL.__TOKEN__,
                                    headers: prepareHeaders({}),
                                    data: { webapitoken: !token.startsWith("Bearer ") ? "Bearer " + token : token }
                                }).
                                then(function(data) {
                                    esGlobals.sessionOpened(data.data, credentials);
                                    return data;
                                }).
                                catch(function(ex) {
                                    esGlobals.sessionClosed();
                                    throw ex;
                                });

                                return processWEBAPIPromise(promise);
                            },

                            /**
                            * @ngdoc function
                            * @name es.Services.Web.esWebApi#eventLog
                            * @methodOf es.Services.Web.esWebApi
                            * @module es.Services.Web
                            * @kind function
                            * @description This function inserts a new log entry in the ES00EventLog Entersoft Application Server subsystem
                            * @param {object} esLog a simple JSON object with the following properties:
                            * @param {string} esLog.ID The ID (class identifier) for the event to be logged.
                            * @param {string} esLog.Description The description of the event to be logged.
                            * @param {number} esLog.TypeID TypeID The severity of the event to be logged, where:
                            * 0 = _Information_
                            * 
                            * 1 = _Warning_
                            * 
                            * 2 = _Error_
                            * 
                            * 3 = _Fatal Error_
                            * @return {promise} A promise that denotes either success or error. No data are expected to be retrieved from the promise success function
                            * @example
```html
<div>
        <h3>29. eventLog</h3>
        <span>
            <input type="text" ng-model="eID" placeholder="Event ID"/>
            <input type="text" ng-model="eDescription" placeholder="Event Description"/>
            <input type="number" ng-model="eSeverity" placeholder="Event Severity"/>

            <button ng-click="eventLog()">Log an Event</button>
            <textarea>{{eRet}}</textarea>
        </span>
    </div>
```
```js
$scope.eventLog = function() {
    esWebApi.eventLog({
            ID: $scope.eID,
            Description: $scope.eDescription,
            TypeID: $scope.eSeverity
        })
        .then(function(ret) {
                $scope.eRet = ret.data;
            },
            function(err) {
                $scope.eRet = err;
            });
}
```
                            */
                            eventLog: function(esLog) {
                                if (!esLog) {
                                    throw new Error("esLog parameter cannot be empty");
                                }

                                
                                

                                var promise = $http({
                                    method: 'post',
                                    headers: prepareHeaders(),
                                    url: urlWEBAPI + ESWEBAPI_URL.__EVENTLOG__,
                                    data: JSON.stringify(esLog)
                                });
                                return processWEBAPIPromise(promise);
                            },

                            /**
                            * @ngdoc function
                            * @name es.Services.Web.esWebApi#ebsService
                            * @methodOf es.Services.Web.esWebApi
                            * @module es.Services.Web
                            * @kind function
                            * @description This function executes an EBS service method defined and registered at the Entersoft Application Server.
                            * For such an example you may download the Microsoft VS2015 C# project and solution that has the implementation of such an example project.
                            * Download the zip file from [esbotestapiservice.zip](images/esbotestapiservice.zip) 
                            * Once you download and extract the zip, please resolve the .NET Assembly References to the required dlls by pointing the Reference Path to the run-time
                            * directory where the Entersoft Application Server is installed and running. 
                            * Compile the assembly and copy the built DLL in the run-time directory of the EAS.
                            * @param {object} serviceObj a simple JSON object with the following properties:
                            * @param {string} serviceObj.netAssembly The .NET assembly name that contains the service class to be executed. You should specify 
                            * only the assembly name without any extension i.e. .dll or .EXE. For example, _esbotestapiservice_
                            * @param {string} serviceObj.netNamespace The .NET namespace where the service class is defined. In case that the name space 
                            * has more than one depth i.e. esbotestapiservice.Generic then instead of . you should use / so in the previous case
                            * the namespace will be _esbotestapiservice/Generic_
                            * @param {string} serviceObj.netClass The .NET class that holds the service method i.e. __ESWebApiCustomService__
                            * @param {string} serviceObj.netMethod The .NET method of the class that will be executed i.e. Identity2
                            * @param {boolean=} serviceObj.netIsBinaryResult Indicates whether the expected result is a byte array i.e. binary. By default this parameter is false. 
                            * When calling a service that returns a byte array the set this parameter to true and the ret.data response will contain an Angular arrayBuffer.
                            * @param {object|string|number|date|*} paramObject the object that will be passed as parameter to the method call. It should be compatible and
                            * consistent to what the service method expects in the .NET space. In case that .NET method expects a POCO class or struct as the type of the 
                            * function's argument you can pass a javascript POCO class with respect to property names and types
                            * @return {httpPromise} Returns a promise that upon success the ret.data contains the result of the service
                            * @example
* __.NET Assembly and class definitions __
```cs
using Entersoft.Framework.Platform;
using Entersoft.Web.Api;
using Entersoft.Web.Api.Text;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace esbotestapiservice.Generic
{
    public class ESWebApiCustomService
    {
        public class Identity2Payload
        {
            public string TextValue { get; set; }
            public int IntValue { get; set; }
            public byte[] ByteArray { get; set; }
            public int[] IntArray { get; set; }
        }

        public struct Identity2Struct
        {
            public string TextValue { get; set; }
            public int IntValue { get; set; }
            public byte[] ByteArray { get; set; }
            public int[] IntArray { get; set; }
        }

        [EbsService]
        public static byte[] SanRebel(ESSession session, string Message)
        {
            return Enumerable.Range(64, 90).Select(i => (byte)i).ToArray();
        }

        [EbsService]
        public static Identity2Payload Identity2(ESSession session, Identity2Payload payload)
        {
            payload.TextValue += payload.TextValue;
            payload.IntValue += payload.IntValue;
            payload.ByteArray = Enumerable.Range(1, 10).Select(i => (byte)i).ToArray();
            payload.IntArray = Enumerable.Range(1, 10).ToArray();
            return payload;
        }

        [EbsService]
        public static Identity2Struct Identity2Structure(ESSession session, Identity2Struct payload)
        {
            payload.TextValue += payload.TextValue;
            payload.IntValue += payload.IntValue;
            payload.ByteArray = Enumerable.Range(1, 10).Select(i => (byte)i).ToArray();
            payload.IntArray = Enumerable.Range(1, 10).ToArray();
            return payload;
        }

        [EbsService]
        public static Identity2Payload ReturnNull(ESSession session, Identity2Payload payload)
        {
            return null;
        }

        [EbsService]
        public static int SimpleInt(ESSession session, int x)
        {
            return x * x;
        }

        [EbsService]
        public static string ReturnString(ESSession session, Identity2Payload payload)
        {
            return "{0}-{1}".SafeFormat(payload.IntValue, payload.TextValue);
        }


        [EbsService]
        public static int ReturnInt(ESSession session, Identity2Payload payload)
        {
            return payload.IntValue * 2;
        }

        [EbsService]
        public static byte[] ReturnByteArray(ESSession session, Identity2Payload payload)
        {
            return Enumerable.Range(0, payload.IntValue).Select(i => (byte)i).ToArray();

        }

        public static int InvalidService(ESSession session, Identity2Payload payload)
        {
            return payload.IntValue * 2;
        }
    }
}
```

* __Ajax calls sample __
```js
tester.register_ajax_call({
    caption: 'execute an EBS service - returns null',
    ajax_options: function () {
        return {
            //    /api/rpc/EbsService/<assembly>/<namespace>/<namespace>/<namespace>/<class>/<method>,
            url: '/api/rpc/EbsService/ESWebApiServices/Entersoft/Web/Test/EbsServiceTest/ReturnNull',
            type: 'POST',
            headers: {
                Authorization: 'Bearer ' + tester.user.Model.WebApiToken
            },

            data: JSON.stringify({
                TextValue: "hello",
                IntValue: 123
            }),
            contentType: "application/json; charset=utf-8"
        }
    },
    done: function (results) {
        assert.are_equal(null, results);
        logger.ok();
    }
});

tester.register_ajax_call({
    caption: 'execute an EBS service - returns a complex object ',
    ajax_options: function () {
        return {
            //    /api/rpc/EbsService/<assembly>/<namespace>/<namespace>/<namespace>/<class>/<method>,
            url: '/api/rpc/EbsService/ESWebApiServices/Entersoft/Web/Test/EbsServiceTest/Identity2',
            type: 'POST',
            headers: {
                Authorization: 'Bearer ' + tester.user.Model.WebApiToken
            },

            data: JSON.stringify({
                    TextValue: "hello",
                    IntValue: 123
            }),
            contentType: "application/json; charset=utf-8"
        }
    },
    done: function (results) {
        assert.existy(results);
        assert.are_equal("hellohello", results.TextValue);
        assert.are_equal("246", results.IntValue);
        logger.ok();
    }
});

tester.register_ajax_call({
    caption: 'execute an EBS service - returns a struct' ,
    ajax_options: function () {
        return {
            //    /api/rpc/EbsService/<assembly>/<namespace>/<namespace>/<namespace>/<class>/<method>,
            url: '/api/rpc/EbsService/ESWebApiServices/Entersoft/Web/Test/EbsServiceTest/Identity2Structure',
            type: 'POST',
            headers: {
                Authorization: 'Bearer ' + tester.user.Model.WebApiToken
            },

            data: JSON.stringify({
                TextValue: "hello",
                IntValue: 123
            }),
            contentType: "application/json; charset=utf-8"
        }
    },
    done: function (results) {
        assert.existy(results);
        assert.are_equal("hellohello", results.TextValue);
        assert.are_equal("246", results.IntValue);
        logger.ok();
    }
});


tester.register_ajax_call({
    caption: 'execute an EBS service - returns a string',
    ajax_options: function () {
        return {
            //    /api/rpc/EbsService/<assembly>/<namespace>/<namespace>/<namespace>/<class>/<method>,
            url: '/api/rpc/EbsService/ESWebApiServices/Entersoft/Web/Test/EbsServiceTest/ReturnString',
            type: 'POST',
            headers: {
                Authorization: 'Bearer ' + tester.user.Model.WebApiToken
            },

            data: JSON.stringify({
                TextValue: "hello",
                IntValue: 123
            }),
            contentType: "application/json; charset=utf-8"
        }
    },
    done: function (results) {
        assert.existy(results);
        assert.are_equal("123-hello", results);
        logger.ok();
    }
});

tester.register_ajax_call({
    caption: 'execute an EBS service - returns an integer',
    ajax_options: function () {
        return {
            //    /api/rpc/EbsService/<assembly>/<namespace>/<namespace>/<namespace>/<class>/<method>,
            url: '/api/rpc/EbsService/ESWebApiServices/Entersoft/Web/Test/EbsServiceTest/ReturnInt',
            type: 'POST',
            headers: {
                Authorization: 'Bearer ' + tester.user.Model.WebApiToken
            },

            data: JSON.stringify({
                TextValue: "hello",
                IntValue: 123
            }),
            contentType: "application/json; charset=utf-8"
        }
    },
    done: function (results) {
        assert.existy(results);
        assert.are_equal(246, results);
        logger.ok();
    }
});


tester.register_ajax_call({
    caption: 'execute an EBS service - returns a byte array',
    ajax_options: function () {
        return {
            url: '/api/rpc/EbsService/ESWebApiServices/Entersoft/Web/Test/EbsServiceTest/ReturnByteArray',
            type: 'POST',
            headers: {
                Authorization: 'Bearer ' + tester.user.Model.WebApiToken
            },

            data: JSON.stringify({
                TextValue: "hello",
                IntValue: 10
            }),
            contentType: "application/json; charset=utf-8"
        }
    },
    done: function (results) {
        assert.existy(results);
        assert.are_equal("AAECAwQFBgcICQ==", results);
        var byteCharacters = atob(results);
        //logger.ok(byteCharacters.to_s());
        assert.are_equal(0, byteCharacters.charCodeAt(0));
        //assert.are_equal(10, byteCharacters.length);
        logger.ok();
    }
});


tester.register_ajax_call({
    caption: 'execute an invaldid EBS service',
    ajax_options: function () {
        return {
            url: '/api/rpc/EbsService/ESWebApiServices/Entersoft/Web/Test/EbsServiceTest/InvalidService',
            type: 'POST',
            headers: {
                Authorization: 'Bearer ' + tester.user.Model.WebApiToken
            },

            data: JSON.stringify({
                TextValue: "hello",
                IntValue: 10
            }),
            contentType: "application/json; charset=utf-8"
        }
    },
    done: function (user) {
        assert.fail('invaldid EBS service')
    }, error: function (jqXHR, textStatus, errorThrown) {
        assert.are_equal(403, jqXHR.status);
        var data = jqXHR.responseJSON;
        assert.are_equal("invalid-service", data.MessageID)
        logger.ok();
        return true;
    }
});
```
* __javascript sample__
```js
$scope.serviceObj = {
    netAssembly: "esbotestapiservice",
    netNamespace: "esbotestapiservice/Generic",
    netClass: "ESWebApiCustomService",
    netIsBinaryResult: false,
    netMethod: ""
}

$scope.execEbsService = function() {
    esWebApi.ebsService($scope.serviceObj, $scope.netParam)
    .then(function(ret) {
        $scope.ebsret = ret.data;
    }, function(err) {
        $scope.ebsret = JSON.stringify(err);
    });
}
```
* __html sample__
```html
<hr/>
    <div>
        <h3>34. esService</h3>
        <span>
            <input type="text" ng-model="serviceObj.netAssembly" placeholder=".NET Assembly name"/>
            <input type="text" ng-model="serviceObj.netNamespace" placeholder=".NET Namespace"/>
            <input type="text" ng-model="serviceObj.netClass" placeholder=".NET Class"/>
            <input type="text" ng-model="serviceObj.netMethod" placeholder=".NET Method"/>
            <input type="text" ng-model="netParam" placeholder="POCO Object in string format"/>
            <label>Binary Result: 
                <input type="checkbox" ng-model="serviceObj.netIsBinaryResult">
            </label>

            <button ng-click="execEbsService()">Execute EBS Service</button>
        </span>
        <textarea>{{ebsret}}</textarea>
    </div>
```
                            **/
                            ebsService: function(serviceObj, paramObject) {
                                if (!serviceObj || !serviceObj.netAssembly || !serviceObj.netNamespace || !serviceObj.netClass || !serviceObj.netMethod) {
                                    throw new Error("serviceObj.netAssembly, serviceObj.netNamespace, serviceObj.netClass, serviceObj.netMethod properties MUST ALL have value");
                                }

                                var sPart = serviceObj.netAssembly.concat("/", serviceObj.netNamespace, "/", serviceObj.netClass, "/", serviceObj.netMethod);
                                var dData = paramObject;

                                
                                

                                var httpOptions = {
                                    method: 'post',
                                    headers: prepareHeaders(),
                                    url: urlWEBAPI.concat(ESWEBAPI_URL.__EBS_SERVICE__, sPart),
                                    data: dData
                                };

                                if (serviceObj.netIsBinaryResult) {
                                    httpOptions.headers.Accept = undefined;
                                    httpOptions.responseType = 'arraybuffer';
                                } else {
                                    httpOptions.contentType = "application/json; charset=utf-8";
                                }

                                var promise = $http(httpOptions);
                                return processWEBAPIPromise(promise);
                            },

                            /**
                            * @ngdoc function
                            * @name es.Services.Web.esWebApi#fetchUserLogo
                            * @methodOf es.Services.Web.esWebApi
                            * @module es.Services.Web
                            * @kind function
                            * @description This function inserts a new log entry in the ES00EventLog Entersoft Application Server subsystem
                            * @param {string|guid=} userID Either the code of the user (ESGOUser) or the GID of the ESGOUser the logo of which we are interested in.
                            * If empty, null or undefined, the logo of the current logged-in user will be requested
                            * @return  {httpPromise} If success i.e. function(ret) { ...} the ret.data contains the string __base64__ of the image that corresponds to the requested logo.
                            * If the ESGOUser exists BUT there is no logo stored for the given user an empty string will be returned.
                            * If the ESGOUser does not exist an error 404 will be returned.
                            * @example
```html
<div>
        <h3>30. fetchUserLogo</h3>
        <span>
            <input type="text" ng-model="lUserID" placeholder="User ID or GID"/>

            <button ng-click="fetchUserLogo()">Get the PHOTO</button>
            <img ng-if="userPhoto" data-ng-src="{{'data:image/jpg;base64,' + userPhoto}}"/>
        </span>
    </div>
```
```js
$scope.fetchUserLogo = function() {
    esWebApi.fetchUserLogo($scope.lUserID)
        .then(function(ret) {
                $scope.userPhoto = ret.data;
            },
            function(err) {
                $scope.userPhoto = "";
            });
}
```
                            */
                            fetchUserLogo: function(userID) {
                                
                                

                                var promise = $http({
                                    method: 'get',
                                    headers: prepareHeaders(),
                                    url: urlWEBAPI.concat(ESWEBAPI_URL.__USER_LOGO__, userID || ""),
                                });
                                return processWEBAPIPromise(promise);
                            },

                            /**
                            * @ngdoc function
                            * @name es.Services.Web.esWebApi#uploadEntityBlob
                            * @methodOf es.Services.Web.esWebApi
                            * @module es.Services.Web
                            * @kind function
                            * @description This function uploads and stores in the EAS an image as the current logged-in User's Logo
                             * 
                             * __ATTENTION__ 
                             * 
                             * This method requires the ngFileUpload module of AngularJS. In order to use it you must make sure that the appropriate js libraries have been loaded.
                             * For example, in the main html file e.g. index.html of the AngularJS application you have to include the ng-file-upload/ng-file-upload-shim.min.js prior to loading the angular library
                             * and the ng-file-upload/ng-file-upload.min.js just after the Angular library has been loaded, as shown in the example below:

                            */
                            uploadEntityBlob: function(blobInfo, file, okfunc, errfunc, progressfunc) {
                                if (!blobInfo || !blobInfo.ObjectID || !blobInfo.KeyID) {
                                    throw new Error("blobInfo argument is null or one or more of the required properties [ObjectID, KeyID] are missing");
                                }

                                if (!file) {
                                    throw new Error("Invalid File");
                                }

                                var Upload = $injector.get('Upload');
                                if (!Upload) {
                                    throw new Error("You have to include the ngFileUpload");
                                }

                                
                                blobInfo.TypeID = blobInfo.TypeID || 0;

                                
                                file.upload = Upload.upload({
                                    url: urlWEBAPI.concat(ESWEBAPI_URL.__POST_ENTITY_BLOB__),
                                    method: 'POST',
                                    headers: prepareHeaders(),
                                    fields: {
                                        esblobinfo: JSON.stringify(blobInfo)
                                    },
                                    file: file,
                                });


                                file.upload.then(function(response) {
                                    $timeout(function() {
                                        file.result = response.data;
                                        if (angular.isFunction(okfunc)) {
                                            okfunc(file);
                                        }
                                    });
                                }, errfunc);

                                file.upload.progress(progressfunc);

                                return file.upload;
                            },

                            /**
                            * @ngdoc function
                            * @name es.Services.Web.esWebApi#uploadUserLogo
                            * @methodOf es.Services.Web.esWebApi
                            * @module es.Services.Web
                            * @kind function
                            * @description This function uploads and stores in the EAS an image as the current logged-in User's Logo
                             * 
                             * __ATTENTION__ 
                             * 
                             * This method requires the ngFileUpload module of AngularJS. In order to use it you must make sure that the appropriate js libraries have been loaded.
                             * For example, in the main html file e.g. index.html of the AngularJS application you have to include the ng-file-upload/ng-file-upload-shim.min.js prior to loading the angular library
                             * and the ng-file-upload/ng-file-upload.min.js just after the Angular library has been loaded, as shown in the example below:
```html
<script src="bower_components/ng-file-upload/ng-file-upload-shim.min.js"></script>
<script src="bower_components/angular/angular.js"></script>
<script src="bower_components/ng-file-upload/ng-file-upload.min.js"></script>
```
                             * Also in your application Angular controller module or application module you should also require the ngFileUpload module as 
                             * shown in the code below:
```js
var smeControllers = angular.module('smeControllers', ['kendo.directives', 'underscore', 'es.Web.UI', 'ui.bootstrap', 'uiGmapgoogle-maps', 'ngFileUpload']);
```
                             * And in the AngularJS application controller function you should inject the _Upload_ service as shown below:
```js
smeControllers.controller('examplesCtrl', ['$log', '$q', '$scope', 'Upload', 'esWebApi', 'esUIHelper', 'esGlobals', 'esCache', 'esGeoLocationSrv', 'uiGmapGoogleMapApi',
function($log, $q, $scope, Upload, esWebApi, esWebUIHelper, esGlobals, esCache, esGeoLocationSrv, GoogleMapApi) {
    // your application code
    // goes here
}
```
                            * @param {file} file The file that should be of type image that will be uploaded and stored in the EAS
                            * @param {function=} okfunc a function that will be called when the upload is completed
                            * @param {function=} errfunc a function that will called should an error occurs while uploading the file
                            * @param {function=} progressfunc a function that will be called as many times as necessary to indicate the progress of the
                            * uploading of the file i.e. to inform the user about the percentage of the bytes that have been uploaded so far
                            * @return {Upload} An object of type Upload. For detailed documentation please visit {@link https://github.com/danialfarid/ng-file-upload ng-file-upload}.
                            * @example
```html
<div>
        <h3>31. uploadUserLogo</h3>
        <span>
            <input type="file" ngf-select ng-model="userLogoImage" name="file" accept="image/*" required>
            <button ng-click="uploadUserLogo()">Upload Photo</button>
        </span>
        <div ng-if="userLogoImage.progress">
            <div kendo-progress-bar k-min="0" k-max="100" ng-model="userLogoImage.progress" style="width: 100%;"></div>
        </div>
    </div>
```
```js
$scope.uploadUserLogo = function() {
var progressf = function(evt) {
    $scope.userLogoImage.progress = Math.min(100, parseInt(100.0 * evt.loaded / evt.total));
};
var errf = function(x) {
    alert(x);
}
esWebApi.uploadUserLogo($scope.userLogoImage, undefined, errf, progressf);
}
```
                            */
                            uploadUserLogo: function(file, okfunc, errfunc, progressfunc) {

                                if (!file) {
                                    throw new Error("Invalid File");
                                }

                                var Upload = $injector.get('Upload');
                                if (!Upload) {
                                    throw new Error("You have to include the ngFileUpload");
                                }

                                
                                
                                file.upload = Upload.upload({
                                    url: urlWEBAPI.concat(ESWEBAPI_URL.__POST_USER_LOGO__),
                                    method: 'POST',
                                    headers: prepareHeaders(),
                                    file: file,
                                });


                                file.upload.then(function(response) {
                                    $timeout(function() {
                                        file.result = response.data;
                                        if (angular.isFunction(okfunc)) {
                                            okfunc(file);
                                        }
                                    });
                                }, errfunc);

                                file.upload.progress(progressfunc);

                                return file.upload;
                            },


                            /**
                             * @ngdoc function
                             * @name es.Services.Web.esWebApi#removeEntityBlob
                             * @methodOf es.Services.Web.esWebApi
                             * @module es.Services.Web
                             * @kind function
                             * @description This function deletes, if exists, the entry in the ES00Blob that exact matches the ObjectID, KeyID and TypeID of the ES00BlobInfo parameter 
                             * @return {httpPromise} Returns an httpPromise that once resolved, it has a status code OK if everything went OK, or BadRequest if an error occurred.
                             */
                            removeEntityBlob: function(blobInfo) {
                                var bOK = blobInfo && (blobInfo.GID || (blobInfo.ObjectID && blobInfo.KeyID));

                                if (!bOK) {
                                    throw new Error("blobInfo argument is null or one or more of the required properties [GID or (ObjectID and KeyID)] are missing");
                                }
                                
                                blobInfo.TypeID = blobInfo.TypeID || 0;

                                
                                var promise = $http({
                                    method: 'POST',
                                    headers: prepareHeaders(),
                                    url: urlWEBAPI.concat(ESWEBAPI_URL.__REMOVE_ENTITY_BLOB__),
                                    data: blobInfo
                                });
                                return processWEBAPIPromise(promise);
                            },


                            /**
                            * @ngdoc function
                            * @name es.Services.Web.esWebApi#removeCurrentUserLogo
                            * @methodOf es.Services.Web.esWebApi
                            * @module es.Services.Web
                            * @kind function
                            * @description This function delete the current logged in user logo from the Entersoft Application. 
                            * @return {httpPromise} Returns an httpPromise that once resolved, it has a status code OK if everything went OK, or BadRequest if an error occurred.
                            * @example
```html
<div>
        <h3>30. fetchUserLogo</h3>
        <span>
            <input type="text" ng-model="lUserID" placeholder="User ID or GID"/>

            <button ng-click="fetchUserLogo()">Get the PHOTO</button>
            <img  class="img-circle" width="304" height="236" ng-if="userPhoto" data-ng-src="{{'data:image/jpg;base64,' + userPhoto}}"/>
            <button ng-click="removeCurrentUserLogo()">Remove Current User Logo</button>
        </span>
    </div>
```
```js
$scope.removeCurrentUserLogo = function() {
    esWebApi.removeCurrentUserLogo();
}
```
                            */
                            removeCurrentUserLogo: function() {
                                
                                
                                var promise = $http({
                                    method: 'POST',
                                    headers: prepareHeaders(),
                                    url: urlWEBAPI.concat(ESWEBAPI_URL.__REMOVE_USER_LOGO__),
                                });
                                return processWEBAPIPromise(promise);
                            },

                            /**
                            * @ngdoc function
                            * @name es.Services.Web.esWebApi#fetchPersonLogo
                            * @methodOf es.Services.Web.esWebApi
                            * @module es.Services.Web
                            * @kind function
                            * @description This function delete the current logged in user logo from the Entersoft Application. 
                            * @param {string} personGID The GID of the ESGOPerson in string format, the logo of which we are looking for
                            * @return {httpPromise} Returns an httpPromise that once resolved, the ret.data contains the base64 string for the logo image
                            * of the specified person
                            * @example
```html
<hr/>
<div>
    <h3>33. fetchPersonLogo</h3>
    <span>
        <input type="text" ng-model="PersonGID" placeholder="PersonGID"/>

        <button ng-click="fetchPersonlogo()">Get Person Logo</button>
        <img  class="img-circle" width="304" height="236" ng-if="personPhoto" data-ng-src="{{'data:image/jpg;base64,' + personPhoto}}"/>
        
    </span>
</div>
```
* and the controller's part
```js
        $scope.fetchPersonlogo = function() {
            esWebApi.fetchPersonLogo($scope.PersonGID)
                .then(function(x) {
                    $scope.personPhoto = x.data;
                });
        }
```
                            */
                            fetchPersonLogo: function(personGID) {
                                if (!personGID) {
                                    throw new Error("Invalid personGID");
                                }

                                
                                

                                var promise = $http({
                                    method: 'get',
                                    headers: prepareHeaders(),
                                    url: urlWEBAPI.concat(ESWEBAPI_URL.__PERSON_LOGO__, personGID),
                                });
                                return processWEBAPIPromise(promise);
                            },

                            /**
                             * @ngdoc function
                             * @name es.Services.Web.esWebApi#logout
                             * @methodOf es.Services.Web.esWebApi
                             * @description Function that performs a web session logout. As a result of calling this function, all internal state
                             * related to the current web session, if any, is cleaned-up and no valid web session is available. The application/user must login again through {@link es.Services.Web.esWebApi#methods_opensession openSession}
                             * in order to be able to call any Entersoft WEB API autheticated method or service.
                             * @module es.Services.Web
                             * @kind function
                             * @example
```js
//logout sample
$scope.doLogout = function ()
{
    esWebApi.logout();
    alert("LOGGED OUT. You must relogin to run the samples");
};
```
                             */
                            logout: function() {
                                // 
                                var hds = prepareHeaders();

                                esGlobals.sessionClosed();
                                esCache.clear();

                                
                                

                                var promise = $http({
                                    method: 'post',
                                    headers: hds,
                                    url: urlWEBAPI.concat(ESWEBAPI_URL.__LOGOUT__),
                                });
                                return promise.catch(function(ex) {

                                });
                            },

                            changePassword: function(chgPwd) {
                                if (!chgPwd || !chgPwd.OldPassword || !chgPwd.NewPassword || !chgPwd.NewPassword2) {
                                    throw new Error("Invalid Arguments. Either Old Password, or New Password or Verify Password is empty");
                                }


                                var hds = prepareHeaders();

                                
                                

                                var promise = $http({
                                    method: 'post',
                                    headers: hds,
                                    url: urlWEBAPI.concat(ESWEBAPI_URL.__CHG_PWD__),
                                    data: chgPwd
                                });
                                return promise
                                .then(function(ret) {
                                    esGlobals.sessionClosed();
                                    esCache.clear();
                                });
                            },

                            /**
                             * @ngdoc function
                             * @name es.Services.Web.esWebApi#fetchCompanyParam
                             * @methodOf es.Services.Web.esWebApi
                             * @description Function that returns the ES Param for a requested ParamID.
                             * @module es.Services.Web
                             * @kind function
                             * @param {string} esParam The ID of the ES CompanyParam. The ID should not contain the @ i.e. fetchCompanyParam("MyValidParamKey")
                             * @return {httpPromise} Returns a promise.
                             ** If sucess the response.data contains the Parameter definition and parameter value.
                             ** If error the err.data object contains the Entersoft Application Server error definition. Typically the user error message is 
                             * err.data.UserMessage
                             *
                             * Success promise return value i.e. response.data is of the following form:
```js
var x = {
    "ID": "MyValidParamKey",
    "Value": "hello world",
    "Description": "Password for use of Google mapping service",
    "Help": "Password for use of Google mapping service",
    "ESType": 0
};
```
                             *
                             * Error promise return value i.e. function(err) is of the following form:
```js
var f = {
    "data": {
        "MessageID": "company-parameter-not-found",
        "UserMessage": "Company parameter 'ssaS' not found",
        "Messages": []
    },
    "status": 404,
    "config": {
        "method": "GET",
        "transformRequest": [null],
        "transformResponse": [null],
        "headers": {
            "Authorization": "Bearer xyzquerty....",
            "Accept": "application/json, text/plain"
        },
        url ":",
        http: "//localhost/eswebapi/api/rpc/FetchCompanyParam/ssaS"
    },
    "statusText": "Not Found"
}; 
``` 
                            * @example
```js
// fetchCompanyParam
$scope.fetchCompanyParam = function() {
    esWebApi.fetchCompanyParam($scope.pCompanyParam)
        .then(function(x) {
                $scope.pCompanyParamValue = x.data;
            },
            function(err)
            {
                $scope.pCompanyParamValue = JSON.stringify(err);
            });
}

```
*/
                            fetchCompanyParam: function(esparam) {
                                if (!esparam) {
                                    throw new Error("Invalid Paramter ID");
                                }

                                var surl = urlWEBAPI.concat(ESWEBAPI_URL.__FETCH_COMPANY_PARAM__, esparam.replace(" ", ""));
                                var ht = $http({
                                    method: 'get',
                                    headers: prepareHeaders(),
                                    url: surl
                                });
                                return processWEBAPIPromise(ht);
                            },

                            getParameterValue: function(paramId) {
                                if (!paramId) {
                                    throw new Error("Invalid Paramter ID");
                                }
                                var surl = urlWEBAPI.concat(ESWEBAPI_URL.__GET_PARAMETER_VALUE__, paramId.replace(" ", ""));
                                var ht = $http({
                                    method: 'get',
                                    headers: prepareHeaders(),
                                    url: surl
                                });
                                return processWEBAPIPromise(ht, true);
                            },

                            /**
                             * @ngdoc function
                             * @name es.Services.Web.esWebApi#fetchCompanyParams
                             * @methodOf es.Services.Web.esWebApi
                             * @description Function that returns the ES Params for the requested array of parameter id's
                             * @module es.Services.Web
                             * @kind function
                             * @param {string[]|string} esParams can be
                             ** an array of strings
                             ** a comma separated string of values
                             ** a string of comma separated list of es params the values of which we want to be returned.
                             * _If esParams is null or undefined or emprty string_ the complete set of ES Company Params will be returned.
                             * @return {httpPromise} Returns a promise.
                             ** If sucess the response.data contains the Array of Parameter definition and parameter value objects.
                             ** If error the err.data object contains the Entersoft Application Server error definition. Typically the user error message is 
                             * err.data.UserMessage
                             *
                             * Success promise return value i.e. *response.data* is of the following form:
```js
var x = [{
    "ID": "PERSONINTERESTCATEGORYVALUE",
    "Value": "ΠΡΟΤΙΜΗΣΕΙΣ ΦΥΣΙΚΟΥ ΠΡΟΣΩΠΟΥ",
    "Description": "Person preference category code",
    "Help": "It is required to define ONE preference set whose contents will be available for (multi) selection in the person form.",
    "ESType": 0
}, {
    "ID": "ES_MAIL_BODYFOOTER",
    "Value": "Powered by Entersoft Business Suite",
    "Description": "Footer in e-mail text",
    "Help": "Text to appear as footer in e-mails to be sent by the application.",
    "ESType": 0
}];

```
                             *
                             * Error promise return value i.e. function(err) is of the following form:
```js
var f = {
    "data": {
        "MessageID": "company-parameter-not-found",
        "UserMessage": "Company parameter 'ssaS' not found",
        "Messages": []
    },
    "status": 404,
    "config": {
        "method": "GET",
        "transformRequest": [null],
        "transformResponse": [null],
        "headers": {
            "Authorization": "Bearer xyzquerty....",
            "Accept": "application/json, text/plain"
        },
        url ":",
        http: "//localhost/eswebapi/api/rpc/FetchCompanyParam/ssaS"
    },
    "statusText": "Not Found"
}; 
``` 
                            * @example
```js
//fetchCompanyParams
$scope.fetchCompanyParams = function() {
    if (!$scope.pCompanyParams) {
        $scope.pCompanyParams = null;
    }
    esWebApi.fetchCompanyParams($scope.pCompanyParams)
        .then(function(x) {
                $scope.pCompanyParamsValue = x.data;
            },

            function(err) {
                $scope.pCompanyParamsValue = JSON.stringify(err);
            });
};
```
*/
                            fetchCompanyParams: function(esparams, doNotHandleErrors) {
                                var surl;
                                if (!esparams) {
                                    // get all parameters
                                    surl = urlWEBAPI + ESWEBAPI_URL.__FETCH_COMPANY_PARAMS__;
                                } else {
                                    if (angular.isArray(esparams)) {
                                        surl = urlWEBAPI + ESWEBAPI_URL.__FETCH_COMPANY_PARAMS__ + esparams.join("/").replace(/ /g, "");
                                    } else {
                                        surl = urlWEBAPI + ESWEBAPI_URL.__FETCH_COMPANY_PARAMS__ + esparams.replace(/,/g, "/").replace(/ /g, "");
                                    }
                                }

                                var ht = $http({
                                    method: 'get',
                                    headers: prepareHeaders(),
                                    url: surl
                                });
                                return processWEBAPIPromise(ht, doNotHandleErrors);
                            },

                            execHttp: function(config) {
                                if (!config) {
                                    return null;
                                }
                                var ht = $http(config);
                                return ht;
                            },

                            registerException: fregisterException,

                            /**
                                                         * @ngdoc function
                                                         * @name es.Services.Web.esWebApi#fetchOdsTableInfo
                                                         * @methodOf es.Services.Web.esWebApi
                                                         * @description Function that returns the ODSTable definition from the ** Entersoft Object Description System (ODS)** repository.
                                                         * @module es.Services.Web
                                                         * @kind function
                                                         * @param {string} tableID The ODS Table ID or the ODS Table GID in string (guid) to retrieve
                                                         * @return {promise} Returns a promise.
                                                         ** If sucess the response.data contains the ODS Table Definition object in JSON representation
                                                         ** If error the err.data object contains the Entersoft Application Server error definition. Typically the user error message is 
                                                         * err.data.UserMessage
                                                         *
                                                         * Success promise return value i.e. response.data is of the following form:
                            ```js
                            var odsTableforESGOCity = {
                                "Role": 1,
                                "ModuleID": "ESGO",
                                "ID": "ESGOZCity",
                                "GID": "0a3f7d43-dfb9-4a11-8610-8e2931c09868",
                                "DBTableName": "ESGOZCity",
                                "Flags": 1028,
                                "Columns": [{
                                    "ID": "Code",
                                    "GID": "aa00f03d-640b-4c0c-8bbe-4b3adabea477",
                                    "TableID": "ESGOZCity",
                                    "TableGID": "0a3f7d43-dfb9-4a11-8610-8e2931c09868",
                                    "DBColumnName": "Code",
                                    "AllowEQUC": true,
                                    "Size": 20,
                                    "ODSType": "ESZOOMCODE",
                                    "Precision": 0,
                                    "Nullable": false,
                                    "ChoiceType": "",
                                    "Flags": 0,
                                    "HelpTxt": "",
                                    "SeqNum": 1
                                }, {
                                    "ID": "Description",
                                    "GID": "b92ab124-86c0-4c70-9093-53337f91577b",
                                    "TableID": "ESGOZCity",
                                    "TableGID": "0a3f7d43-dfb9-4a11-8610-8e2931c09868",
                                    "DBColumnName": "Description",
                                    "AllowEQUC": true,
                                    "Size": 100,
                                    "ODSType": "ESFIELD",
                                    "Precision": 0,
                                    "Nullable": true,
                                    "ChoiceType": "",
                                    "Flags": 0,
                                    "HelpTxt": "",
                                    "SeqNum": 2
                                }, {
                                    "ID": "AlternativeDescription",
                                    "GID": "bcccdd8d-afe8-4fca-a448-cacde6593adc",
                                    "TableID": "ESGOZCity",
                                    "TableGID": "0a3f7d43-dfb9-4a11-8610-8e2931c09868",
                                    "DBColumnName": "AlternativeDescription",
                                    "AllowEQUC": true,
                                    "Size": 100,
                                    "ODSType": "ESFIELD",
                                    "Precision": 0,
                                    "Nullable": true,
                                    "ChoiceType": "",
                                    "Flags": 0,
                                    "HelpTxt": "",
                                    "SeqNum": 3
                                }, {
                                    "ID": "Inactive",
                                    "GID": "df7e74e8-af69-4f9f-bd5a-8bec32361423",
                                    "TableID": "ESGOZCity",
                                    "TableGID": "0a3f7d43-dfb9-4a11-8610-8e2931c09868",
                                    "DBColumnName": "Inactive",
                                    "AllowEQUC": false,
                                    "Size": -1,
                                    "ODSType": "ESBOOL",
                                    "Precision": 0,
                                    "Nullable": false,
                                    "ChoiceType": "",
                                    "Flags": 0,
                                    "HelpTxt": "",
                                    "SeqNum": 4
                                }, {
                                    "ID": "PhonePrefix",
                                    "GID": "806db65c-9f30-4859-b5b0-7f91a32d6aca",
                                    "TableID": "ESGOZCity",
                                    "TableGID": "0a3f7d43-dfb9-4a11-8610-8e2931c09868",
                                    "DBColumnName": "PhonePrefix",
                                    "AllowEQUC": true,
                                    "Size": 15,
                                    "ODSType": "ESTELNO",
                                    "Precision": 0,
                                    "Nullable": true,
                                    "ChoiceType": "",
                                    "Flags": 0,
                                    "HelpTxt": "",
                                    "SeqNum": 5
                                }, {
                                    "ID": "fMunicipalityCode",
                                    "GID": "3ebdcae6-a3a4-4cfd-8371-8b8825a1d542",
                                    "TableID": "ESGOZCity",
                                    "TableGID": "0a3f7d43-dfb9-4a11-8610-8e2931c09868",
                                    "DBColumnName": "fMunicipalityCode",
                                    "AllowEQUC": false,
                                    "Size": 20,
                                    "ODSType": "ESFZOOMCODE",
                                    "Precision": 0,
                                    "Nullable": true,
                                    "ChoiceType": "",
                                    "Flags": 0,
                                    "HelpTxt": "",
                                    "SeqNum": 6
                                }]
                            };
                            ```
                                                         *
                                                         * Error promise return value i.e. function(err) is of the following form:
                            ```js
                            // fetchOdsTableInfo("escity"), which does not exist in the ODS
                            var f = {
                                    "data": {
                                        "MessageID": "invalid-table-id",
                                        "UserMessage": "invalid table id: escity",
                                        "Messages": []
                                    },
                                    "status": 404,
                                    "config": {
                                        "method": "GET",
                                        "transformRequest": [null],
                                        "transformResponse": [null],
                                        "headers": {
                                            "Authorization": "Bearer xyzquerty....",
                                            "Accept": "application/json, text/plain},"
                                            url ":"
                                            http: //localhost/eswebapi/api/rpc/FetchOdsTableInfo/escity"},"statusText":"Not Found"};

                            ``` 
                                                        * @example
                            ```js
                            //fetchODSTableInfo example
                            $scope.fetchOdsTableInfo = function() {
                                esWebApi.fetchOdsTableInfo($scope.odsID)
                                    .then(function(ret) {
                                        $scope.pTableInfo = ret.data;
                                    }, function(err) {
                                        $scope.pTableInfo = err;
                                    });
                            }
                            ```
                            */
                            fetchOdsTableInfo: function(tableID) {
                                tableID = tableID ? tableID.trim() : "";
                                return getOdsInfo("__FETCH_ODS_TABLE_INFO__", tableID);
                            },

                            /**
                                                         * @ngdoc function
                                                         * @name es.Services.Web.esWebApi#fetchOdsColumnInfo
                                                         * @methodOf es.Services.Web.esWebApi
                                                         * @description Function that returns the ODSTable definition from the ** Entersoft Object Description System (ODS)** repository.
                                                         * @module es.Services.Web
                                                         * @kind function
                                                         * @param {string} tableID The ODS Table ID i.e. "ESFFitem". If columnID parameter is undefined, null or empty string **then**
                                                         * additional forms of tableid-column id definition are available:
                                                         ** Fully qualified column name i.e. "ESFIItem.Description"
                                                         ** ODS Column's GID in string i.e. "74c82778-6b49-4928-9f06-81b4384bf677"
                                                         * @param {string=} columnID The ODS Column/Field ID  to retrieve i.e. "Description". If columnID is undefined or null or empty string
                                                         * then tableID should be one of the forms described above.
                                                         * @return {promise} Returns a promise.
                                                         ** If sucess the response.data contains the ODS Column/Field Definition object in JSON representation
                                                         ** If error the err.data object contains the Entersoft Application Server error definition. Typically the user error message is 
                                                         * err.data.UserMessage
                                                         *
                                                         * Success promise return value i.e. response.data is of the following form:
                            ```js
                            var odsColumnforESFIItem_Code = {
                                "ID": "Code",
                                "GID": "74c82778-6b49-4928-9f06-81b4384bf677",
                                "TableID": "ESFIItem",
                                "TableGID": "8445cfd5-9dda-47cc-8f3a-01b5586347d2",
                                "DBColumnName": "Code",
                                "AllowEQUC": true,
                                "Size": 50,
                                "ODSType": "ESCODE",
                                "Precision": 0,
                                "Nullable": false,
                                "ChoiceType": "",
                                "Flags": 2112,
                                "HelpTxt": "",
                                "SeqNum": 2
                            };
                            ```
                                                         *
                                                         * Error promise return value i.e. function(err) is of the following form:
                            ```js
                            // fetchOdsColumnInfo("esfiitem", "codeg"), which does not exist in the ODS
                            var f = {
                                    "data": {
                                        "MessageID": "invalid-column-id",
                                        "UserMessage": "invalid column id: esfiitem.codeg",
                                        "Messages": []
                                    },
                                    "status": 404,
                                    "config": {
                                        "method": "GET",
                                        "transformRequest": [null],
                                        "transformResponse": [null],
                                        "headers": {
                                            "Authorization": "Bearer xyzquerty....",
                                            "Accept": "application/json, text/plain},"
                                            url ":"
                                            http: //localhost/eswebapi/api/rpc/FetchOdsColumnInfo/esfiitem/codeg"},"statusText":"Not Found"};

                            ``` 
                                                        * @example
                            ```js
                             //fetchODSColumnInfo example
                            $scope.fetchOdsColumnInfo = function() {
                                esWebApi.fetchOdsColumnInfo($scope.odsID, $scope.odsColumnID)
                                    .then(function(ret) {
                                        $scope.pColumnInfo = ret.data;
                                    }, function(err) {
                                        $scope.pColumnInfo = err;
                                    });
                            }
                            ```
                            */
                            fetchOdsColumnInfo: function(tableID, columnID) {
                                tableID = tableID ? tableID.trim() : "";
                                columnID = columnID ? columnID.trim() : "";
                                var odsItem = "";
                                columnID ? tableID + "/" + columnID : tableID;
                                if (columnID) {
                                    odsItem = tableID + "/" + columnID;
                                } else {
                                    var ids = tableID.split(".");
                                    if (ids.length == 2) {
                                        odsItem = ids[0] + "/" + ids[1];
                                    } else {
                                        odsItem = tableID;
                                    }
                                }
                                return getOdsInfo("__FETCH_ODS_COLUMN_INFO__", odsItem);
                            },

                            /**
                                                         * @ngdoc function
                                                         * @name es.Services.Web.esWebApi#fetchOdsRelationInfo
                                                         * @methodOf es.Services.Web.esWebApi
                                                         * @description Function that returns the ODS Releation definition from the ** Entersoft Object Description System (ODS)** repository.
                                                         * @module es.Services.Web
                                                         * @kind function
                                                         * @param {string} relationID The ODS Relation ID or the ODS Relation GID in string (guid) to retrieve
                                                         * @return {promise} Returns a promise.
                                                         ** If sucess the response.data contains the ODS Relation Definition object in JSON representation
                                                         ** If error the err.data object contains the Entersoft Application Server error definition. Typically the user error message is 
                                                         * err.data.UserMessage
                                                         *
                                                         * Success promise return value i.e. response.data is of the following form:
                            ```js
                            var odsRelation = {
                                "ID": "FK_ESFIPricelistItem_ESFIPricelist",
                                "GID": "87fbc76d-7ac7-4102-a7cd-00374a6a4338",
                                "NameInDB": "FK_ESFIPricelistItem_ESFIPricelist",
                                "MTableID": "ESFIPricelist",
                                "DTableID": "ESFIPricelistItem",
                                "MTableGID": "1f361b65-09e3-40c7-b675-ba70d24ec33d",
                                "MValue1GID": "2c8ea6ae-5438-46a3-bcb0-2d0208a84ad0",
                                "DTableGID": "1aae96fc-f1bc-448a-9940-1d122a935e37",
                                "DValue1GID": "3a9f7b4b-c4fd-4900-8337-cddb9e4cf1f5",
                                "IsVirtual": false,
                                "IsDeleted": false,
                                "MasterColumns": [{
                                    "ID": "GID",
                                    "GID": "2c8ea6ae-5438-46a3-bcb0-2d0208a84ad0",
                                    "TableID": "ESFIPricelist",
                                    "TableGID": "1f361b65-09e3-40c7-b675-ba70d24ec33d",
                                    "DBColumnName": "GID",
                                    "AllowEQUC": false,
                                    "Size": -1,
                                    "ODSType": "ESGID",
                                    "Precision": 0,
                                    "Nullable": false,
                                    "ChoiceType": "",
                                    "Flags": 0,
                                    "HelpTxt": "",
                                    "SeqNum": 1
                                }],
                                "DetailColumns": [{
                                    "ID": "fPricelistGID",
                                    "GID": "3a9f7b4b-c4fd-4900-8337-cddb9e4cf1f5",
                                    "TableID": "ESFIPricelistItem",
                                    "TableGID": "1aae96fc-f1bc-448a-9940-1d122a935e37",
                                    "DBColumnName": "fPricelistGID",
                                    "AllowEQUC": false,
                                    "Size": -1,
                                    "ODSType": "ESFGID",
                                    "Precision": 0,
                                    "Nullable": true,
                                    "ChoiceType": "",
                                    "Flags": 2048,
                                    "HelpTxt": "",
                                    "SeqNum": 2
                                }]
                            };

                            ```
                                                         *
                                                         * Error promise return value i.e. function(err) is of the following form:
                            ```js
                            // fetchRelationInfo("abcd"), which does not exist in the ODS
                            var f = {
                                    "data": {
                                        "MessageID": "invalid-relation-id",
                                        "UserMessage": "invalid relation id: abcd",
                                        "Messages": []
                                    },
                                    "status": 404,
                                    "config": {
                                        "method": "GET",
                                        "transformRequest": [null],
                                        "transformResponse": [null],
                                        "headers": {
                                            "Authorization": "Bearer xyzquerty....",
                                            "Accept": "application/json, text/plain},"
                                            url ":"
                                            http: //localhost/eswebapi/api/rpc/FetchOdsRelationInfo/abcd"},"statusText":"Not Found"};


                            ``` 
                                                        * @example
                            ```js
                            //fetchOdsRelationInfo example
                            $scope.fetchOdsRelationInfo = function() {
                                esWebApi.fetchOdsRelationInfo($scope.odsID)
                                    .then(function(ret) {
                                        $scope.pRelationInfo = ret.data;
                                    }, function(err) {
                                        $scope.pRelationInfo = err;
                                    });
                            }
                            ```
                            */
                            fetchOdsRelationInfo: function(relationID) {
                                relationID = relationID ? relationID.trim() : "";
                                return getOdsInfo("__FETCH_ODS_RELATION_INFO__", relationID);
                            },

                            /**
                                                         * @ngdoc function
                                                         * @name es.Services.Web.esWebApi#fetchOdsMasterRelationsInfo
                                                         * @methodOf es.Services.Web.esWebApi
                                                         * @description Function that returns the Master Relations ODS Relation definitions that exist in the ODS Repository for a given Master TableID on a given foreign ColumnID of the Master TableID
                                                         * from the ** Entersoft Object Description System (ODS)** repository.
                                                         * @module es.Services.Web
                                                         * @kind function
                                                         * @param {string} tableID The ODS Table ID i.e. "ESFFitem". 
                                                         * @param {string} columnID The ODS Column/Field ID  to retrieve i.e. "fDim1Code".
                                                         * @return {promise} Returns a promise..
                                                         ** If sucess the response.data contains an Array of Master relations of the ODS Relation Definition objects in JSON representation, that exist
                                                         * for the given *tableID* and foreign *columnID*
                                                         ** If error the err.data object contains the Entersoft Application Server error definition. Typically the user error message is 
                                                         * err.data.UserMessage
                                                         *
                                                         * Success promise return value i.e. response.data is of the following form:
                            ```js
                            var odsMasterRelations = [{
                                "ID": "FK_ESFIPricelistItem_ESFIPricelist",
                                "GID": "87fbc76d-7ac7-4102-a7cd-00374a6a4338",
                                "NameInDB": "FK_ESFIPricelistItem_ESFIPricelist",
                                "MTableID": "ESFIPricelist",
                                "DTableID": "ESFIPricelistItem",
                                "MTableGID": "1f361b65-09e3-40c7-b675-ba70d24ec33d",
                                "MValue1GID": "2c8ea6ae-5438-46a3-bcb0-2d0208a84ad0",
                                "DTableGID": "1aae96fc-f1bc-448a-9940-1d122a935e37",
                                "DValue1GID": "3a9f7b4b-c4fd-4900-8337-cddb9e4cf1f5",
                                "IsVirtual": false,
                                "IsDeleted": false,
                                "MasterColumns": [{
                                    "ID": "GID",
                                    "GID": "2c8ea6ae-5438-46a3-bcb0-2d0208a84ad0",
                                    "TableID": "ESFIPricelist",
                                    "TableGID": "1f361b65-09e3-40c7-b675-ba70d24ec33d",
                                    "DBColumnName": "GID",
                                    "AllowEQUC": false,
                                    "Size": -1,
                                    "ODSType": "ESGID",
                                    "Precision": 0,
                                    "Nullable": false,
                                    "ChoiceType": "",
                                    "Flags": 0,
                                    "HelpTxt": "",
                                    "SeqNum": 1
                                }],
                                "DetailColumns": [{
                                    "ID": "fPricelistGID",
                                    "GID": "3a9f7b4b-c4fd-4900-8337-cddb9e4cf1f5",
                                    "TableID": "ESFIPricelistItem",
                                    "TableGID": "1aae96fc-f1bc-448a-9940-1d122a935e37",
                                    "DBColumnName": "fPricelistGID",
                                    "AllowEQUC": false,
                                    "Size": -1,
                                    "ODSType": "ESFGID",
                                    "Precision": 0,
                                    "Nullable": true,
                                    "ChoiceType": "",
                                    "Flags": 2048,
                                    "HelpTxt": "",
                                    "SeqNum": 2
                                }]
                            }];
                            ```
                                                         *
                                                         * Error promise return value i.e. function(err) is of the following form:
                            ```js
                            // fetchOdsMasterRelationsInfo("esfiitem", "fnon"), which does not exist in the ODS
                            var f = {
                                "data": {
                                    "MessageID": "invalid-column-id",
                                    "UserMessage": "invalid column id: esfiitem.fnon",
                                    "Messages": []
                                },
                                "status": 404,
                                "config": {
                                    "method": "GET",
                                    "transformRequest": [null],
                                    "transformResponse": [null],
                                    "headers": {
                                        "Authorization": "Bearer xyzquerty....",
                                        "Accept": "application/json, text/plain"
                                    },
                                    "url": "http://localhost/eswebapi/api/rpc/FetchOdsMasterRelationsInfo/esfiitem/fnon"
                                },
                                "statusText": "Not Found"
                            };
                            ```
                                                        * @example
                            ```js
                            //fetchOdsMasterRelationsInfo example
                            $scope.fetchOdsMasterRelationsInfo = function() {
                                esWebApi.fetchOdsMasterRelationsInfo($scope.odsID, $scope.odsColumnID)
                                    .then(function(ret) {
                                        $scope.pRelationInfo = ret.data;
                                    }, function(err) {
                                        $scope.pRelationInfo = err;
                                    });
                            }
                            ```
                            */
                            fetchOdsMasterRelationsInfo: function(tableID, columnID) {
                                tableID = tableID ? tableID.trim() : "";
                                columnID = columnID ? columnID.trim() : "";
                                return getOdsInfo("__FETCH_ODS_MASTER_RELATIONS_INFO__", tableID + "/" + columnID);
                            },

                            /**
                                                         * @ngdoc function
                                                         * @name es.Services.Web.esWebApi#fetchOdsDetailRelationsInfo
                                                         * @methodOf es.Services.Web.esWebApi
                                                         * @description Function that returns the Detail ODS Relation definitions that exist in the ODS Repository for a given Master TableID on a given ColumnID of the Master TableID
                                                         * from the ** Entersoft Object Description System (ODS)** repository.
                                                         * @module es.Services.Web
                                                         * @kind function
                                                         * @param {string} tableID The ODS Table ID i.e. "ESFFitem". 
                                                         * @param {string} columnID The ODS Column/Field ID  to retrieve i.e. "GID".
                                                         * @return {promise} Returns a promise..
                                                         ** If sucess the response.data contains an Array of the Detail ODS Relation Definition objects in JSON representation, that exist
                                                         * for the given *tableID* and foreign *columnID*
                                                         ** If error the err.data object contains the Entersoft Application Server error definition. Typically the user error message is 
                                                         * err.data.UserMessage
                                                         *
                                                         * Success promise return value i.e. response.data is of the following form:
                            ```js
                            var odsDetailRelations = [{
                                "ID": "FK_ESFIItemPriceHistory_ESFIPricelist",
                                "GID": "6ec8be7a-bfac-42c2-95c2-c15b68cca9d2",
                                "NameInDB": "FK_ESFIItemPriceHistory_ESFIPricelist",
                                "MTableID": "ESFIPricelist",
                                "DTableID": "ESFIItemPriceHistory",
                                "MTableGID": "1f361b65-09e3-40c7-b675-ba70d24ec33d",
                                "MValue1GID": "2c8ea6ae-5438-46a3-bcb0-2d0208a84ad0",
                                "DTableGID": "08b1d27b-5425-4dbf-8dc5-8f340f289d84",
                                "DValue1GID": "71f4b69d-0db5-4fd3-9e62-772f50673b69",
                                "IsVirtual": false,
                                "IsDeleted": false,
                                "MasterColumns": [{
                                    "ID": "GID",
                                    "GID": "2c8ea6ae-5438-46a3-bcb0-2d0208a84ad0",
                                    "TableID": "ESFIPricelist",
                                    "TableGID": "1f361b65-09e3-40c7-b675-ba70d24ec33d",
                                    "DBColumnName": "GID",
                                    "AllowEQUC": false,
                                    "Size": -1,
                                    "ODSType": "ESGID",
                                    "Precision": 0,
                                    "Nullable": false,
                                    "ChoiceType": "",
                                    "Flags": 0,
                                    "HelpTxt": "",
                                    "SeqNum": 1
                                }],
                                "DetailColumns": [{
                                    "ID": "fPricelistGID",
                                    "GID": "71f4b69d-0db5-4fd3-9e62-772f50673b69",
                                    "TableID": "ESFIItemPriceHistory",
                                    "TableGID": "08b1d27b-5425-4dbf-8dc5-8f340f289d84",
                                    "DBColumnName": "fPricelistGID",
                                    "AllowEQUC": false,
                                    "Size": -1,
                                    "ODSType": "ESFGID",
                                    "Precision": 0,
                                    "Nullable": true,
                                    "ChoiceType": "",
                                    "Flags": 0,
                                    "HelpTxt": "",
                                    "SeqNum": 7
                                }]
                            },

                            // ...
                            // ...

                            }];

                            ```
                                                         *
                                                         * Error promise return value i.e. function(err) is of the following form:
                            ```js
                            // fetchOdsDetailRelationsInfo("ESFIPricelist", "gidc"), which does not exist in the ODS
                            var f = {
                                "data": {
                                    "MessageID": "invalid-column-id",
                                    "UserMessage": "invalid column id: ESFIPricelist.gidc",
                                    "Messages": []
                                },
                                "status": 404,
                                "config": {
                                    "method": "GET",
                                    "transformRequest": [null],
                                    "transformResponse": [null],
                                    "headers": {
                                        "Authorization": "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1bmlxdWVfbmFtZSI6ImFkbWluIiwieC1lcy11c2VyLXBhc3N3b3JkIjoiZW50ZXJzb2Z0IiwieC1lcy11c2VyLWJyYW5jaC1pZCI6Is6RzpjOlyIsIngtZXMtdXNlci1sYW5nLWlkIjoiZWwtR1IiLCJ4LWVzbG9naW5pbmZvLVN1YnNjcmlwdGlvblBhc3N3b3JkIjoicGFzc3giLCJpc3MiOiJFbnRlcnNvZnQiLCJhdWQiOiJodHRwOi8vbG9jYWxob3N0IiwiZXhwIjoxNDQxODkyMDcwLCJuYmYiOjE0NDE4ODYwNzB9.tCuasMPd4kXT02kQo0Z9M8MuwnoGCTkexDs58OeRwcI",
                                        "Accept": "application/json, text/plain"
                                    },
                                    "url": "http://localhost/eswebapi/api/rpc/FetchOdsDetailRelationsInfo/ESFIPricelist/gidc"
                                },
                                "statusText": "Not Found"
                            };
                            ```
                                                        * @example
                            ```js
                            //fetchOdsDetailRelationsInfo example
                            $scope.fetchOdsDetailRelationsInfo = function() {
                                esWebApi.fetchOdsDetailRelationsInfo($scope.odsID, $scope.odsColumnID)
                                    .then(function(ret) {
                                        $scope.pRelationInfo = ret.data;
                                    }, function(err) {
                                        $scope.pRelationInfo = err;
                                    });
                            }
                            ```
                            */
                            fetchOdsDetailRelationsInfo: function(tableID, columnID) {
                                tableID = tableID ? tableID.trim() : "";
                                columnID = columnID ? columnID.trim() : "";
                                return getOdsInfo("__FETCH_ODS_DETAIL_RELATIONS_INFO__", tableID + "/" + columnID);
                            },

                            /**
                             * @ngdoc function
                             * @name es.Services.Web.esWebApi#fetchServerCapabilities
                             * @methodOf es.Services.Web.esWebApi
                             * @description Function that returns the WEB API Server capabilities in terms of http(s). This service does not require
                             * authorization prior to call
                             * @module es.Services.Web
                             * @kind function
                             * @return {httpPromise} If success i.e. function(ret) { ... } **_ret_** is a JSON object of the current WEB API Server capabilities.
                             * The return object has the following structure:
```js
var srvCapabilities = {
    AllowInsecureHttp: boolean, 
    // If false, WEB API Server does not allow unsecure conncetions. ONLY httpS is supported
    // If true, WEB API Server allows for unsecure connection. This scenario is most likely expected in VPN connections for LOB applications
    WebApiVersion: {
        Major: int, // i.e. 1
        Minor: int, // i.e. 7
        Patch: int  // i.e. 7
    }
};
```
                             * @example
```js
$scope.fetchServerCapabilities = function()
{
    esWebApi.fetchServerCapabilities()
        .then(function(ret) {
            $scope.pSrvCapabilities = ret;
        }, function(err) {
            $scope.pSrvCapabilities = err;
        });
}
```
*/
                            fetchServerCapabilities: function() {

                                var defered = $q.defer();
                                $http.get(secureWEBAPI + ESWEBAPI_URL.__SERVER_CAPABILITIES__)
                                    .then(function(data) {
                                        defered.resolve(data.data);
                                    }, function(err) {
                                        defered.reject([err.data, err.status, err.headers, err.config]);
                                    });
                                return defered.promise;
                            },

                            /**
                             * @ngdoc function
                             * @name es.Services.Web.esWebApi#fetchScroller
                             * @methodOf es.Services.Web.esWebApi
                             * @description Function that returns the results of the execution of an Entersoft Scroller (simple or hierarchical) in JSON format
                             * @module es.Services.Web
                             * @kind function
                             * @param {string} groupID Entersoft Scroller GroupID
                             * @param {string} filterID Entersoft Scroller FilterID
                             * @param {object} params pqParams Parameters that will be used for the execution of the Scroller at the Entersoft Application Server
                             * The typical structure of the params object is:
```js
var pqParams = {
    Name: "a*",
    RegDate: "ESDateRange(Day)"
};
```
                             * params is a typical JSON object of key: value properties, where key is the parameter name as defined in the Scroller 
                             * (through Entersoft Scroller Designer) and value is an Entersoft Application server acceptable value for the given parameter, depending on the
                             * parameter type and properties as defined in the Scroller (through Entersoft Scroller Designer)
                             *
                             ** If params is null or undefined or empty object i.e. {} THEN the Scroller will be executed by the Entersoft Application Server
                             * with all parameters assigned the value null.
                             *
                             ** If params is not null and some parameters are specified THEN all the parameters that are not explicitly assigned a value i.e. are missing or are null or undefined in the params object 
                             * at the execution time will be treated by the Entersoft Application Server as having null value.
                             * @return {httpPromise} Returns a promise. 
                             ** If success i.e. function(ret) { ...} ret.data contains the JSON object of the results of tables and records in the following form:
```js
var scrollerRet = {
    DatasetTable1: [
        {
         Field_1: value1,
         ...
         Field_N: valueN
        } // Row 1,
        ...
        {
        Field_1: value1,
         ...
         Field_N: valueN
        } // Row N
    ],
    ...
    DatasetTableY: [
        {
         Field_1: value1,
         ...
         Field_N: valueN
        } // Row 1,
        ...
        {
        Field_1: value1,
         ...
         Field_Z: valueZ
        } // Row K
    ]
};
```
                            ** If error i.e. function(err) { ... } err contains the server error oject in JSON Format.
                            *@example
```js
// fetchScroller sample
$scope.fetchScroller = function() {
     var scroller_params = {
        Name: "a*"
    };
    esWebApi.fetchScroller($scope.pGroup, $scope.pFilter, scroller_params)
        .then(function(ret) {
                $scope.pScrollerResults = ret.data;
                $log.info(ret);
            },
            function(err) {
                $scope.pScrollerResults = ret;
                $log.error(err);
            });
}
```
                            * The result for fetchScroller("ESGOPerson", "PersonList", scroller_Params) has the following format:
```js
var scrollerResults = {
    "ESGOPerson": [{
        "GID": "d4b166f4-417d-46b8-8459-1d11d81f4aff",
        "Code": "0000026",
        "Name": "AGROSKY A.E.",
        "Description1": "Εμπόριο Αγροτικών Προϊόντων",
        "TaxRegistrationNumber": "094123469",
        "Code5": "1",
        "Address1": "ΑΝΔΡΕOY 212",
        "fPostalCode": "30300",
        "fCityCode": "ΝΑΥΠΑΚΤΟΣ",
        "Area": "ΑΙΤΩΛΟΑΚΑΡΝΑΝΙΑΣ",
        "Code7": "010",
        "Description5": "ΔΥΤΙΚΗ ΣΤΕΡΕΑ / ΛΕΥΚΑΔΑ",
        "Telephone1": "2310-804858",
        "Code8": "ΣΥΝΕΡΓΑΤΗΣ",
        "Description6": "ΣΥΝΕΡΓΑΤΗΣ",
        "Code9": "ΥΠΗΡΕΣΙΕΣ",
        "Description7": "ΥΠΗΡΕΣΙΕΣ",
        "EMailAddress": "info@agrosky.gr"
    }, 
    // ...
    {
        "GID": "ee80474d-0f07-48df-b8e0-b47d58d9e9ba",
        "Code": "0000003",
        "Name": "AMY Α.Ε.",
        "Description1": "Εμπόριο - Διανομή Ποτών & Αναψυκτικών",
        "TaxRegistrationNumber": "094123478",
        "Code5": "2",
        "Address1": "ΧΟΛΑΡΓΟΥ 34",
        "fPostalCode": "10437",
        "fCityCode": "ΑΘΗΝΑ",
        "Area": "ΟΜΟΝΟΙΑ",
        "Code7": "001",
        "Description5": "ΑΘΗΝΑ - ΠΡΟΑΣΤΙΑ",
        "Telephone1": "23210-24680",
        "Code8": "ΠΕΛΑΤΕΣ",
        "Description6": "ΠΕΛΑΤΕΣ",
        "Code9": "BIOMHXANIA",
        "Description7": "BIOMHXANIA",
        "EMailAddress": "info@elma.gr"
    }]
};
```
                            **/
                            fetchScroller: function(groupID, filterID, params) {
                                return execScroller(ESWEBAPI_URL.__SCROLLER__, groupID, filterID, params);
                            },

                            /**
                             * @ngdoc function
                             * @name es.Services.Web.esWebApi#fetchSimpleScrollerRootTable
                             * @methodOf es.Services.Web.esWebApi
                             * @description Function that returns the data of the defined MasterTable for an Entersoft Scroller (simple or hierarchical) in JSON format.
                             * It is very similar to fetchScroller function with the **MAIN** difference that it only returns the data for the **MASTER Table** as
                             * defined by the creator at the Scroller Definition
                             * @module es.Services.Web
                             * @kind function
                             * @param {string} groupID Entersoft Scroller GroupID
                             * @param {string} filterID Entersoft Scroller FilterID
                             * @param {object} params pqParams Parameters that will be used for the execution of the Scroller at the Entersoft Application Server
                             * The typical structure of the params object is:
```js
var pqParams = {
    Name: "a*",
    RegDate: "ESDateRange(Day)"
};
```
                             * params is a typical JSON object of key: value properties, where key is the parameter name as defined in the Scroller 
                             * (through Entersoft Scroller Designer) and value is an Entersoft Application server acceptable value for the given parameter, depending on the
                             * parameter type and properties as defined in the Scroller (through Entersoft Scroller Designer)
                             *
                             ** If params is null or undefined or empty object i.e. {} THEN the Scroller will be executed by the Entersoft Application Server
                             * with all parameters assigned the value null.
                             *
                             ** If params is not null and some parameters are specified THEN all the parameters that are not explicitly assigned a value i.e. are missing or are null or undefined in the params object 
                             * at the execution time will be treated by the Entersoft Application Server as having null value.
                             * @return {httpPromise} Returns a promise. 
                             ** If success i.e. function(ret) { ...} ret.data contains the **array** of the JSON objects that represent the records of the Master Table. Result has the following form:
```js
var simpleRootTablescrollerRet = [
        {
         Field_1: value1,
         ...
         Field_N: valueN
        } // Row 1,
        ...
        {
        Field_1: value1,
         ...
         Field_N: valueN
        } // Row N
    ];
```
                            ** If error i.e. function(err) { ... } err contains the server error oject in JSON Format.
                            *@example
```js
// fetchSimpleScrollerRootTable sample
$scope.fetchSimpleScrollerRootTable = function() {
     var scroller_params = {
        Name: "a*"
    };
    esWebApi.fetchSimpleScrollerRootTable($scope.pGroup, $scope.pFilter, scroller_params)
        .then(function(ret) {
                $scope.pScrollerResults = ret.data;
                $log.info(ret);
            },
            function(err) {
                $scope.pScrollerResults = ret;
                $log.error(err);
            });
}
```
                            * The result for fetchSimpleScrollerRootTable("ESGOPerson", "PersonList", scroller_Params) has the following format:
```js
var simpleRootTable_scrollerResults = [{
        "GID": "d4b166f4-417d-46b8-8459-1d11d81f4aff",
        "Code": "0000026",
        "Name": "AGROSKY A.E.",
        "Description1": "Εμπόριο Αγροτικών Προϊόντων",
        "TaxRegistrationNumber": "094123469",
        "Code5": "1",
        "Address1": "ΑΝΔΡΕOY 212",
        "fPostalCode": "30300",
        "fCityCode": "ΝΑΥΠΑΚΤΟΣ",
        "Area": "ΑΙΤΩΛΟΑΚΑΡΝΑΝΙΑΣ",
        "Code7": "010",
        "Description5": "ΔΥΤΙΚΗ ΣΤΕΡΕΑ / ΛΕΥΚΑΔΑ",
        "Telephone1": "2310-804858",
        "Code8": "ΣΥΝΕΡΓΑΤΗΣ",
        "Description6": "ΣΥΝΕΡΓΑΤΗΣ",
        "Code9": "ΥΠΗΡΕΣΙΕΣ",
        "Description7": "ΥΠΗΡΕΣΙΕΣ",
        "EMailAddress": "info@agrosky.gr"
    }, 
    // ...
    {
        "GID": "ee80474d-0f07-48df-b8e0-b47d58d9e9ba",
        "Code": "0000003",
        "Name": "AMY Α.Ε.",
        "Description1": "Εμπόριο - Διανομή Ποτών & Αναψυκτικών",
        "TaxRegistrationNumber": "094123478",
        "Code5": "2",
        "Address1": "ΧΟΛΑΡΓΟΥ 34",
        "fPostalCode": "10437",
        "fCityCode": "ΑΘΗΝΑ",
        "Area": "ΟΜΟΝΟΙΑ",
        "Code7": "001",
        "Description5": "ΑΘΗΝΑ - ΠΡΟΑΣΤΙΑ",
        "Telephone1": "23210-24680",
        "Code8": "ΠΕΛΑΤΕΣ",
        "Description6": "ΠΕΛΑΤΕΣ",
        "Code9": "BIOMHXANIA",
        "Description7": "BIOMHXANIA",
        "EMailAddress": "info@elma.gr"
    }];
```
                            **/
                            fetchSimpleScrollerRootTable: function(groupID, filterID, params) {
                                return execScroller(ESWEBAPI_URL.__SCROLLERROOTTABLE__, groupID, filterID, params);
                            },

                            /**
                             * @ngdoc function
                             * @name es.Services.Web.esWebApi#fetchUserSites
                             * @methodOf es.Services.Web.esWebApi
                             * @description Function that returns ESGOSites of the current ESCompany that the given user has access to
                             * authorization prior to call
                             * @module es.Services.Web
                             * @kind function
                             * @param {string} ebsuser The Entersoft Business Suite UserID for whom we want to fetch the ESGOSites of the current ESCompany
                             * the user has access to.
                             * @param {object=} credentials A JSON object with subscriptionId, subscriptionPassword and bridgeId properties defined. If empty
                             * the default configuration settings will be used
                             * @param {string} credentials.subscriptionId The id of the Subscription
                             * @param {string} credentials.subscriptionPassword The password for the given Subscription
                             * @param {string} credentials.bridgeId The BridgeID
                             * @return {httpPromise} If success i.e. function(ret) { ... } ret.data is an Array of JSON objects representing the ESGOSites user has access to whitin the context of the current ESCompany.
                             * The return object has the following structure:
```js
var UserSite = {
    Key: string,  // The ESGOSite Code i.e. "ΑΘΗ",
    Value: string // The ESGOSite Description i.e. "Κεντρικά Entersoft" 
};
```
                             * @example
```js
$scope.fetchUserSites = function()
{
    esWebApi.fetchUserSites($scope.pUser)
        .then(function(ret) {
            $scope.pUserSites = ret.data;
        }, function(err) {
            $scope.pUserSites = err;
        });
}

// results based on EBS Demo fetchUserSites("esmaster") =>
// ret.data ===> [{"Key":"ΑΘΗ","Value":"Κεντρικά Entersoft"},{"Key":"ΘΕΣ","Value":"Υποκατάστημα Θεσσαλονίκης ES"}]
```
*/
                            fetchUserSites: function(ebsuser, credentials) {
                                credentials = credentials || {};

                                var ht = $http({
                                    method: 'post',
                                    url: urlWEBAPI + ESWEBAPI_URL.__USERSITES__,
                                    data: {
                                        SubscriptionID: credentials.subscriptionId || esConfigSettings.subscriptionId,
                                        SubscriptionPassword: credentials.subscriptionPassword || esConfigSettings.subscriptionPassword,
                                        BridgeID: credentials.bridgeId || esConfigSettings.bridgeId,
                                        Model: ebsuser
                                    }
                                });
                                return processWEBAPIPromise(ht);
                            },

                            /**
                             * @ngdoc function
                             * @name es.Services.Web.esWebApi#fetchSessionInfo
                             * @methodOf es.Services.Web.esWebApi
                             * @description Function that returns Entersoft Application Server session information
                             * @module es.Services.Web
                             * @kind function
                             * @return {httpPromise} Returns a promise.
                             ** If sucess the **response.data.ESProperty** contains the array of the session properties objects.
                             * Each session property object is fo the following form:
                            ```js
                            var sessprop = {
                                ID: string, // property ID i.e. "101"
                                Description: string, // property Description in the session's language translation i.e. "Έκδοση Εγκατάστασης"
                                ValueS: string, // property Value in string format i.e. "4.0.36 - 2"
                                Type: int // property EBS Type i.e. 0
                            };
                            ```
                                                         ** If error the err.data object contains the Entersoft Application Server error definition. Typically the user error message is 
                                                         * err.data.UserMessage
                                                         *
                                                         * Success promise return value i.e. response.data is of the following form:
                            ```js
                            var x = {
                                "ESProperty": [{
                                    "ID": "101",
                                    "Description": "Έκδοση Εγκατάστασης",
                                    "ValueS": "4.0.36 - 2",
                                    "Type": 0
                                }, {
                                    "ID": "102",
                                    "Description": "Έκδοση Παραστατικών",
                                    "ValueS": "167",
                                    "Type": 0
                                }, 
                                // ... more properties
                                {
                                    "ID": "16",
                                    "Description": "Τρέχων Αριθμός Χρηστών",
                                    "ValueS": "BackOffice = 1, Retail = 0, Mobile = 6, Web = 0",
                                    "Type": 0
                                }]
                            };

                            ```
                                                         * @example
                            ```js
                            //fetchSessionInfo example
                            $scope.fetchSessionInfo = function() {
                                esWebApi.fetchSessionInfo()
                                    .then(function(ret) {
                                        $scope.pSessionInfo = ret.data;
                                    }, function(err) {
                                        $scope.pSessionInfo = err;
                                    });
                            }
                            ```
                            */
                            fetchSessionInfo: function() {
                                var promise = $http({
                                    method: 'get',
                                    headers: prepareHeaders(),
                                    url: urlWEBAPI + ESWEBAPI_URL.__FETCH_SESSION_INFO__
                                });

                                return processWEBAPIPromise(promise);
                            },

                            registeredEndpointForType: function(endpointType) {
                                var promise = $http({
                                    method: 'post',
                                    headers: prepareHeaders(),
                                    params: { EndpointType: endpointType},
                                    url: urlWEBAPI + ESWEBAPI_URL.__REGISTERED_ENDPOINT_FOR_TYPE__
                                });

                                return processWEBAPIPromise(promise);
                            },

                            executeNewEntityAction: function(entityType, actionID, commandParams) {
                                var surl = urlWEBAPI.concat(ESWEBAPI_URL.__ENTITYACTION__, entityType, "/", actionID);
                                
                                

                                var ht = $http({
                                    method: 'post',
                                    headers: prepareHeaders(),
                                    url: surl,
                                    data: commandParams
                                });
                                return processWEBAPIPromise(ht);
                            },

                            executeEntityActionByCode: function(entityType, entityCode, actionID, commandParams) {
                                var surl = urlWEBAPI.concat(ESWEBAPI_URL.__ENTITYACTION__, entityType, "/", entityCode, "/", actionID);
                                
                                

                                var ht = $http({
                                    method: 'post',
                                    headers: prepareHeaders(),
                                    url: surl,
                                    data: commandParams
                                });

                                return processWEBAPIPromise(ht);
                            },

                            executeEntityActionByGID: function(entityType, entityGID, actionID, commandParams) {
                                var surl = urlWEBAPI.concat(ESWEBAPI_URL.__ENTITYBYGIDACTION__, entityType, "/", entityGID, "/", actionID);
                                
                                

                                var ht = $http({
                                    method: 'post',
                                    headers: prepareHeaders(),
                                    url: surl,
                                    data: commandParams
                                });

                                return processWEBAPIPromise(ht);

                            },

                            executeFormCommand: function(formCommandParams) {
                                return execFormCommand(formCommandParams);
                            },

                            executeFormCommandDS: function(entityID, commandID, commandParams, ds) {
                                var params = {
                                    EntityID: entityID,
                                    CommandID: commandID,
                                    CommandParams: commandParams
                                };
                                if (ds) {
                                    params.EntityDataset = ds;
                                }

                                return execFormCommand(params);
                            },

                            executeScrollerCommandSRV: function(groupID, filterID, commandID, scrollerParams, commandParams) {

                                var scrollerCommandParams = {
                                    ScrollerID: groupID + "/" + filterID,
                                    CommandID: commandID,
                                    ScrollerParams: scrollerParams,
                                    CommandParams: commandParams
                                };
                                return execScrollerCommand(scrollerCommandParams);
                            },

                            executeScrollerCommandDS: function(groupID, filterID, commandID, dataSet, commandParams) {
                                var scrollerCommandParams = {
                                    ScrollerID: groupID + "/" + filterID,
                                    CommandID: commandID,
                                    ScrollerDataset: dataSet,
                                    CommandParams: commandParams
                                };
                                return execScrollerCommand(scrollerCommandParams);
                            },

                            /**
                             * @ngdoc function
                             * @name es.Services.Web.esWebApi#fetchPublicQueryInfo
                             * @methodOf es.Services.Web.esWebApi
                             * @description Function that returns the Entersoft Janus based GridExLayout as a JSON object.
                             * @module es.Services.Web
                             * @kind function
                             * @param {string|ESPublicQueryDef} pqGroupID if string then Entersoft Public Query GroupID or a {@link es.Services.Web.esGlobals#methods_ESPublicQueryDef ESPublicQueryDef} object that defines the rest of the parameters
                             * @param {string} pqFilterID Entersoft Public Query FilterID. In case that pqGroupID is ESPublicQueryDef type then this parameter can be null or undefined
                             * @param {boolean} useCache If true, then the results of the fetchPublicQueryInfo will be cached by the framework for any
                             * subsequent calls.
                             * @return {httpPromise} Returns a promise. 
                             ** If success i.e. success(function(ret) {...}) the response ret is a JSON object representing the Entersoft 
                             * Business Suite Janus based GridEx Layout. The result of the fetchPublicQueryInfo is of the following type:
```js
var ret = {
// Identification and ID properties of the PQ
    "Filter": [{
        "ID": "ESMMStockItem_Def",
        "Caption": "Είδη Αποθήκης",
        "QueryID": "ESMMStockItem\\ESMMStockItem_Def\\ESMMStockItem_Def_Q1.esq",
        "RootTable": "ESFIItem",
        "SelectedMasterTable": "ESFIItem",
        "SelectedMasterField": "ISUDGID",
        "TotalRow": "0",
        "ColumnHeaders": "0",
        "ColumnSetHeaders": "0",
        "ColumnSetRowCount": "2",
        "ColumnSetHeaderLines": "1",
        "HeaderLines": "1",
        "GroupByBoxVisible": "false",
        "FilterLineVisible": "false",
        "PreviewRow": "false",
        "PreviewRowMember": "",
        "PreviewRowLines": "3"
    }],

// Definition of the Parameters, if any, for the PQ
    "Param": [{
        "ID": "ESDCreated",
        "AA": "1",
        "Caption": "Ημ/νία δημιουργίας",
        "Tooltip": "Ημ/νία δημιουργίας",
        "ControlType": "6",
        "ParameterType": "Entersoft.Framework.Platform.ESDateRange, QueryProcess",
        "Precision": "0",
        "MultiValued": "false",
        "Visible": "true",
        "Required": "false",
        "ODSTag": "AA049FD6-4EFF-499F-8F6B-0573BD14D183",
        "Tags": "",
        "Visibility": "0"
    }, {
        "ID": "ESUCreated",
        "AA": "2",
        "Caption": "Χρήστης δημιουργίας",
        "Tooltip": "Χρήστης δημιουργίας",
        "ControlType": "9",
        "ParameterType": "Entersoft.Framework.Platform.ESString, QueryProcess",
        "Precision": "0",
        "MultiValued": "false",
        "Visible": "true",
        "Required": "false",
        "ODSTag": "0ABDC77C-119B-4729-A99F-C226EBCE0C1B",
        "Tags": "",
        "Visibility": "0"
    }, {
        "ID": "ESDModified",
        "AA": "3",
        "Caption": "Ημ/νία τελ.μεταβολής",
        "Tooltip": "Ημ/νία τελ.μεταβολής",
        "ControlType": "20",
        "ParameterType": "Entersoft.Framework.Platform.ESDateRange, QueryProcess",
        "Precision": "0",
        "MultiValued": "false",
        "Visible": "true",
        "Required": "false",
        "ODSTag": "4E4E17A4-ECA5-4CB0-9F11-02C943F6E6C8",
        "Tags": "",
        "Visibility": "0"
    }],

    // Default Values for the parameters specified in the previous section
    "DefaultValue": [{
        "fParamID": "ESDCreated",
        "Value": "#2006/04/15#"
    }, {
        "fParamID": "ESUCreated",
        "Value": "ESString(RANGE, 'wλμ', 'χχω')"
    }, {
        "fParamID": "ESDModified",
        "Value": "#2011/03/14#"
    }],

    // Grid column Definition

    "LayoutColumn": [{
        "fFilterID": "ESMMStockItem_Def",
        "ColName": "Code",
        "AA": "0",
        "Caption": "Κωδικός",
        "FormatString": "",
        "Width": "100",
        "ODSTag": "74C82778-6B49-4928-9F06-81B4384BF677",
        "Visible": "true",
        "ColumnSetRow": "-1",
        "ColumnSetColumn": "-1",
        "RowSpan": "-1",
        "ColSpan": "-1",
        "AggregateFunction": "0",
        "TextAlignment": "1",
        "EditType": "1",
        "DataTypeName": "String"
    }, {
        "fFilterID": "ESMMStockItem_Def",
        "ColName": "Description",
        "AA": "4",
        "Caption": "Περιγραφή",
        "FormatString": "",
        "Width": "100",
        "ODSTag": "2B666760-3FA7-478A-8112-CCC77FBC754E",
        "Visible": "true",
        "ColumnSetRow": "-1",
        "ColumnSetColumn": "-1",
        "RowSpan": "-1",
        "ColSpan": "-1",
        "AggregateFunction": "0",
        "TextAlignment": "1",
        "EditType": "1",
        "DataTypeName": "String"
    }, {
        "fFilterID": "ESMMStockItem_Def",
        "ColName": "AlternativeDescription",
        "AA": "5",
        "Caption": "Εναλλακτική περιγραφή",
        "FormatString": "",
        "Width": "100",
        "ODSTag": "A8E42370-78F3-4F38-BB65-F861B6DD1F84",
        "Visible": "false",
        "ColumnSetRow": "-1",
        "ColumnSetColumn": "-1",
        "RowSpan": "-1",
        "ColSpan": "-1",
        "AggregateFunction": "0",
        "TextAlignment": "1",
        "EditType": "1",
        "DataTypeName": "String"
    }, {
        "fFilterID": "ESMMStockItem_Def",
        "ColName": "Price",
        "AA": "6",
        "Caption": "Τιμή χονδρικής",
        "FormatString": "#,0.00",
        "Width": "100",
        "ODSTag": "FC8D207E-FE62-4791-98C0-C5787C8940AD",
        "Visible": "true",
        "ColumnSetRow": "-1",
        "ColumnSetColumn": "-1",
        "RowSpan": "-1",
        "ColSpan": "-1",
        "AggregateFunction": "0",
        "TextAlignment": "3",
        "EditType": "1",
        "DataTypeName": "Decimal"
    }, {
        "fFilterID": "ESMMStockItem_Def",
        "ColName": "RetailPrice",
        "AA": "7",
        "Caption": "Τιμή λιανικής",
        "FormatString": "#,0.00",
        "Width": "100",
        "ODSTag": "F1FE2820-573E-41A5-B0A8-5DE247EEC20A",
        "Visible": "true",
        "ColumnSetRow": "-1",
        "ColumnSetColumn": "-1",
        "RowSpan": "-1",
        "ColSpan": "-1",
        "AggregateFunction": "0",
        "TextAlignment": "3",
        "EditType": "1",
        "DataTypeName": "Decimal"
    }, {
        "fFilterID": "ESMMStockItem_Def",
        "ColName": "AssemblyType",
        "AA": "8",
        "Caption": "Τύπος σύνθεσης",
        "FormatString": "",
        "Width": "100",
        "ODSTag": "AEAA32D3-E015-4891-AEB9-8A60ABBCA9AF",
        "Visible": "true",
        "ColumnSetRow": "-1",
        "ColumnSetColumn": "-1",
        "RowSpan": "-1",
        "ColSpan": "-1",
        "AggregateFunction": "0",
        "TextAlignment": "1",
        "EditType": "5",
        "DataTypeName": "Byte"
    }, {
        "fFilterID": "ESMMStockItem_Def",
        "ColName": "ItemClass",
        "AA": "9",
        "Caption": "Κλάση",
        "FormatString": "",
        "Width": "100",
        "ODSTag": "82538EA3-8EF0-4E8F-A395-9EF1466DCFB6",
        "Visible": "true",
        "ColumnSetRow": "-1",
        "ColumnSetColumn": "-1",
        "RowSpan": "-1",
        "ColSpan": "-1",
        "AggregateFunction": "0",
        "TextAlignment": "1",
        "EditType": "5",
        "DataTypeName": "Byte"
    }, {
        "fFilterID": "ESMMStockItem_Def",
        "ColName": "ItemType",
        "AA": "10",
        "Caption": "Τύπος",
        "FormatString": "",
        "Width": "100",
        "ODSTag": "0107AD25-0F2D-41F6-9D59-4C6B1CC0FE30",
        "Visible": "true",
        "ColumnSetRow": "-1",
        "ColumnSetColumn": "-1",
        "RowSpan": "-1",
        "ColSpan": "-1",
        "AggregateFunction": "0",
        "TextAlignment": "1",
        "EditType": "5",
        "DataTypeName": "Byte"
    }, {
        "fFilterID": "ESMMStockItem_Def",
        "ColName": "Name",
        "AA": "11",
        "Caption": "Επωνυμία/Ονοματεπώνυμο",
        "FormatString": "",
        "Width": "100",
        "ODSTag": "7699C12E-3B5F-47E8-B509-7AF97F4560B1",
        "Visible": "true",
        "ColumnSetRow": "-1",
        "ColumnSetColumn": "-1",
        "RowSpan": "-1",
        "ColSpan": "-1",
        "AggregateFunction": "0",
        "TextAlignment": "1",
        "EditType": "1",
        "DataTypeName": "String"
    }, {
        "fFilterID": "ESMMStockItem_Def",
        "ColName": "Description1",
        "AA": "12",
        "Caption": "Περιγραφή1",
        "FormatString": "",
        "Width": "100",
        "ODSTag": "2BF1AC3B-BDB3-4239-A9D1-696793981822",
        "Visible": "true",
        "ColumnSetRow": "-1",
        "ColumnSetColumn": "-1",
        "RowSpan": "-1",
        "ColSpan": "-1",
        "AggregateFunction": "0",
        "TextAlignment": "1",
        "EditType": "1",
        "DataTypeName": "String"
    }, {
        "fFilterID": "ESMMStockItem_Def",
        "ColName": "fItemFamilyCode",
        "AA": "13",
        "Caption": "Οικογένεια",
        "FormatString": "",
        "Width": "100",
        "ODSTag": "7D4D3335-3D6D-45B5-A1D3-FF237A33867C",
        "Visible": "true",
        "ColumnSetRow": "-1",
        "ColumnSetColumn": "-1",
        "RowSpan": "-1",
        "ColSpan": "-1",
        "AggregateFunction": "0",
        "TextAlignment": "1",
        "EditType": "1",
        "DataTypeName": "String"
    }, {
        "fFilterID": "ESMMStockItem_Def",
        "ColName": "fItemGroupCode",
        "AA": "14",
        "Caption": "Ομάδα",
        "FormatString": "",
        "Width": "100",
        "ODSTag": "CE625D36-7744-4DF9-9AFA-2F0851F9B025",
        "Visible": "true",
        "ColumnSetRow": "-1",
        "ColumnSetColumn": "-1",
        "RowSpan": "-1",
        "ColSpan": "-1",
        "AggregateFunction": "0",
        "TextAlignment": "1",
        "EditType": "1",
        "DataTypeName": "String"
    }, {
        "fFilterID": "ESMMStockItem_Def",
        "ColName": "fItemCategoryCode",
        "AA": "15",
        "Caption": "Κατηγορία",
        "FormatString": "",
        "Width": "100",
        "ODSTag": "19AB9EB4-7791-4090-8AF6-F9434B031EF0",
        "Visible": "true",
        "ColumnSetRow": "-1",
        "ColumnSetColumn": "-1",
        "RowSpan": "-1",
        "ColSpan": "-1",
        "AggregateFunction": "0",
        "TextAlignment": "1",
        "EditType": "1",
        "DataTypeName": "String"
    }, {
        "fFilterID": "ESMMStockItem_Def",
        "ColName": "fItemSubcategoryCode",
        "AA": "16",
        "Caption": "Υποκατηγορία",
        "FormatString": "",
        "Width": "100",
        "ODSTag": "22E443E1-9A08-4FAD-835A-6B7C15A844C2",
        "Visible": "true",
        "ColumnSetRow": "-1",
        "ColumnSetColumn": "-1",
        "RowSpan": "-1",
        "ColSpan": "-1",
        "AggregateFunction": "0",
        "TextAlignment": "1",
        "EditType": "1",
        "DataTypeName": "String"
    }, {
        "fFilterID": "ESMMStockItem_Def",
        "ColName": "ESDCreated",
        "AA": "1",
        "Caption": "Ημ/νία δημιουργίας",
        "FormatString": "d",
        "Width": "100",
        "ODSTag": "AA049FD6-4EFF-499F-8F6B-0573BD14D183",
        "Visible": "true",
        "ColumnSetRow": "-1",
        "ColumnSetColumn": "-1",
        "RowSpan": "-1",
        "ColSpan": "-1",
        "AggregateFunction": "0",
        "TextAlignment": "1",
        "EditType": "0",
        "DataTypeName": "DateTime"
    }, {
        "fFilterID": "ESMMStockItem_Def",
        "ColName": "ESDModified",
        "AA": "2",
        "Caption": "Ημ/νία τελ.μεταβολής",
        "FormatString": "d",
        "Width": "100",
        "ODSTag": "4E4E17A4-ECA5-4CB0-9F11-02C943F6E6C8",
        "Visible": "true",
        "ColumnSetRow": "-1",
        "ColumnSetColumn": "-1",
        "RowSpan": "-1",
        "ColSpan": "-1",
        "AggregateFunction": "0",
        "TextAlignment": "1",
        "EditType": "0",
        "DataTypeName": "DateTime"
    }, {
        "fFilterID": "ESMMStockItem_Def",
        "ColName": "ESUCreated",
        "AA": "3",
        "Caption": "Χρήστης δημιουργίας",
        "FormatString": "",
        "Width": "100",
        "ODSTag": "0ABDC77C-119B-4729-A99F-C226EBCE0C1B",
        "Visible": "true",
        "ColumnSetRow": "-1",
        "ColumnSetColumn": "-1",
        "RowSpan": "-1",
        "ColSpan": "-1",
        "AggregateFunction": "0",
        "TextAlignment": "1",
        "EditType": "0",
        "DataTypeName": "String"
    }, {
        "fFilterID": "ESMMStockItem_Def",
        "ColName": "ESUModified",
        "AA": "17",
        "Caption": "Χρήστης τελ.μεταβολής",
        "FormatString": "",
        "Width": "100",
        "ODSTag": "FC41CA99-AC07-45B5-825F-3982037E148C",
        "Visible": "true",
        "ColumnSetRow": "-1",
        "ColumnSetColumn": "-1",
        "RowSpan": "-1",
        "ColSpan": "-1",
        "AggregateFunction": "0",
        "TextAlignment": "1",
        "EditType": "0",
        "DataTypeName": "String"
    }, {
        "fFilterID": "ESMMStockItem_Def",
        "ColName": "Comment",
        "AA": "18",
        "Caption": "Σχόλιο",
        "FormatString": "",
        "Width": "100",
        "ODSTag": "BD9B18D3-BA45-4FA7-911A-C66ACA556AB9",
        "Visible": "true",
        "ColumnSetRow": "-1",
        "ColumnSetColumn": "-1",
        "RowSpan": "-1",
        "ColSpan": "-1",
        "AggregateFunction": "0",
        "TextAlignment": "1",
        "EditType": "1",
        "DataTypeName": "String"
    }],

    // List of values (enums, custom enums, etc.)
    "ValueList": [{
        "fFilterID": "ESMMStockItem_Def",
        "ColName": "AssemblyType",
        "Value": "0",
        "Caption": "Απλό"
    }, {
        "fFilterID": "ESMMStockItem_Def",
        "ColName": "AssemblyType",
        "Value": "1",
        "Caption": "Σετ"
    }, {
        "fFilterID": "ESMMStockItem_Def",
        "ColName": "AssemblyType",
        "Value": "2",
        "Caption": "Παραγόμενο"
    }, {
        "fFilterID": "ESMMStockItem_Def",
        "ColName": "ItemClass",
        "Value": "0",
        "Caption": "Γενικό είδος-Υπηρεσία"
    }, {
        "fFilterID": "ESMMStockItem_Def",
        "ColName": "ItemClass",
        "Value": "1",
        "Caption": "Είδος Αποθήκης"
    }, {
        "fFilterID": "ESMMStockItem_Def",
        "ColName": "ItemClass",
        "Value": "2",
        "Caption": "Πάγιο"
    }, {
        "fFilterID": "ESMMStockItem_Def",
        "ColName": "ItemType",
        "Value": "0",
        "Caption": "Εμπόρευμα"
    }, {
        "fFilterID": "ESMMStockItem_Def",
        "ColName": "ItemType",
        "Value": "1",
        "Caption": "Προϊόν"
    }, {
        "fFilterID": "ESMMStockItem_Def",
        "ColName": "ItemType",
        "Value": "8",
        "Caption": "Ημιέτοιμο"
    }, {
        "fFilterID": "ESMMStockItem_Def",
        "ColName": "ItemType",
        "Value": "2",
        "Caption": "Ά ύλη"
    }, {
        "fFilterID": "ESMMStockItem_Def",
        "ColName": "ItemType",
        "Value": "9",
        "Caption": "Β’ύλη"
    }, {
        "fFilterID": "ESMMStockItem_Def",
        "ColName": "ItemType",
        "Value": "12",
        "Caption": "Υλικό συσκευασίας"
    }, {
        "fFilterID": "ESMMStockItem_Def",
        "ColName": "ItemType",
        "Value": "3",
        "Caption": "Ανταλλακτικό"
    }, {
        "fFilterID": "ESMMStockItem_Def",
        "ColName": "ItemType",
        "Value": "4",
        "Caption": "Αναλώσιμο"
    }, {
        "fFilterID": "ESMMStockItem_Def",
        "ColName": "ItemType",
        "Value": "5",
        "Caption": "Είδος συσκευασίας"
    }, {
        "fFilterID": "ESMMStockItem_Def",
        "ColName": "ItemType",
        "Value": "6",
        "Caption": "Eίδος εγγυοδοσίας"
    }, {
        "fFilterID": "ESMMStockItem_Def",
        "ColName": "ItemType",
        "Value": "10",
        "Caption": "Προϋπ/να έσοδα"
    }, {
        "fFilterID": "ESMMStockItem_Def",
        "ColName": "ItemType",
        "Value": "11",
        "Caption": "Προϋπ/να έξοδα"
    }, {
        "fFilterID": "ESMMStockItem_Def",
        "ColName": "ItemType",
        "Value": "7",
        "Caption": "Άλλο"
    }],

    //Gridex format styles and conditions
    "FormatingCondition": [{
        "fFilterID": "ESMMStockItem_Def",
        "Key": "PriceMarkNegativeValues",
        "AllowMerge": "true",
        "ColumnKey": "Price",
        "ConditionOperator": "3",
        "Value1": "0",
        "TargetColumnKey": "Price",
        "fFormatStyleKey": "1ecd5e8f-b3d0-4a02-b9ac-d70a36ee4d41"
    }, {
        "fFilterID": "ESMMStockItem_Def",
        "Key": "RetailPriceMarkNegativeValues",
        "AllowMerge": "true",
        "ColumnKey": "RetailPrice",
        "ConditionOperator": "3",
        "Value1": "0",
        "TargetColumnKey": "RetailPrice",
        "fFormatStyleKey": "3a9999f7-322b-437d-abbf-43ded2a4bec6"
    }],
    "FormatStyle": [{
        "Key": "1ecd5e8f-b3d0-4a02-b9ac-d70a36ee4d41",
        "BackColor": "0",
        "ForeColor": "-65536",
        "FontBold": "0",
        "FontItalic": "0",
        "FontStrikeout": "0"
    }, {
        "Key": "3a9999f7-322b-437d-abbf-43ded2a4bec6",
        "BackColor": "0",
        "ForeColor": "-65536",
        "FontBold": "0",
        "FontItalic": "0",
        "FontStrikeout": "0"
    }]
};
```
                             * 
                             * See the example on how to use the returned value in order to create an esGrid options object
                             *
                             ** If error i.e. error(function(err, status) { ... }) the err contains the server error object and if available the status code i.e. 400
                             * @example
```js
function($scope, esWebApi, esWebUIHelper) {
    $scope.pGroup = "ESMMStockItem";
    $scope.pFilter = "ESMMStockItem_def";
    $scope.fetchPQInfo = function() {
        esWebApi.fetchPublicQueryInfo($scope.pGroup, $scope.pFilter)
            .success(function(ret) {
                // This is the gridlayout as defined in the EBS Public Query based on .NET Janus GridEx Layout
                $scope.esJanusGridLayout = ret;

                // This is the neutral-abstract representation of the Janus GridEx Layout according to the ES WEB UI simplification
                $scope.esWebGridInfo = esWebUIHelper.winGridInfoToESGridInfo($scope.pGroup, $scope.pFilter, $scope.esJanusGridLayout);

                // This is the kendo-grid based layout ready to be assigned to kendo-grid options attribute for rendering the results
                // and for executing the corresponding Public Query
                $scope.esWebGridLayout = esWebUIHelper.esGridInfoToKInfo(esWebApi, $scope.pGroup, $scope.pFilter, {}, $scope.esWebGridInfo);
            })
            .error(function(err, status) {
                alert(a.UserMessage || a.MessageID || "Generic Error");
            });
    }
}
```
                             */
                            fetchPublicQueryInfo: function(pqGroupID, pqFilterID, useCache, resolveParams) {
                                var group = "";
                                if (pqGroupID instanceof esGlobals.ESPublicQueryDef) {
                                    group = (pqGroupID.GroupID || "").trim();
                                    pqFilterID = (pqGroupID.FilterID || "").trim();
                                } else {
                                    group = pqGroupID ? pqGroupID.trim() : "";
                                    pqFilterID = pqFilterID ? pqFilterID.trim() : "";
                                }

                                var surl = urlWEBAPI.concat(ESWEBAPI_URL.__PUBLICQUERY_INFO__, group, "/", pqFilterID);
                                
                                /* sme explicitly ignoring parameter resolveParams
                                * For cases like ##(ENDPERIODDATE) does not work well

                                if (resolveParams) {
                                    surl = surl.concat("/true");
                                }
                                */

                                var deferred = $q.defer();
                                if (useCache) {
                                    var cItem = esCache.getItem(surl);
                                    if (cItem) {
                                        $timeout(function() {
                                            deferred.resolve(cItem);
                                        });
                                        return deferred.promise;
                                    }
                                }

                                
                                

                                var ht = $http({
                                    method: 'get',
                                    headers: prepareHeaders(),
                                    url: surl
                                });
                                processWEBAPIPromise(ht)
                                    .then(function(ret) {
                                        if (useCache) {
                                            esCache.setItem(surl, ret);
                                        }

                                        deferred.resolve(ret);

                                    }, function() {
                                        deferred.reject(arguments);
                                    });
                                return deferred.promise;
                            },

                            /**
                             * @ngdoc function
                             * @name es.Services.Web.esWebApi#fetchStdZoom
                             * @methodOf es.Services.Web.esWebApi
                             * @module es.Services.Web
                             * @kind function
                             * @param {string} zoomID Entersoft Public Query GroupID
                             * @param {ESPQOptions} pqOptions Entersoft Public Query execution options with respect to Paging, PageSize and WithCount.
                             * See {@link es.Services.Web.esGlobals#methods_ESPQOptions ESPQOptions}
                             ** If pqOptions is null or undefined OR pqOptions.Page is null OR undefined OR NaN OR less than or equal to 0 THEN
                             * the Public Query will be executed at the Entersoft Application Server with no paging at all, which means that ALL the 
                             * rows will be returned.
                             *
                             ** If pqOptions is valid and pqOptions.PageSize is null OR undefined OR NaN OR less or equal to 0 THEN 
                             * the Public Query will be executed with PageSize equal to 20 which is the server's default
                             *
                             ** If pqOptions is valid and pqOptions.WithCount is true THEN the result will also include the total count of records 
                             * (no natter what the pagesize is) found in the server for the given Public Query and pqParams supplied for the PQ execution.
                             ** If pqOptions is valid and pqOptions.WithCount is false, the result still might contain information about the 
                             * total records depending on the other parameters. See the return section for detailed information about the returned value.
                             * @param {boolean} useCache if pqOptions is null or undefined meaning that we want all data for the zoom to be fetched from the server
                             * if useCache is true then on success the zoom records will be cached by the framework so that next call for the same zoom will get the results
                             * from the cache.
                             * @return {promise} Returns a promise.
                             ** If success i.e. then(function(ret) { ... }) ret.data holds the result of the Zoom Records.
                             * In any success response, ret.data.Table will hold as string the Public Query MasterTableName as defined through the Entersoft Scroller Designer.
                             * The response has the typical form as follows:
```js
var x = {
    Table: string, // The name of the standard i.e. in the form ESXXZxxxx provided in the **_zoomID_** parameter
    Rows: [{Record 1}, {Record 2}, ....], // An array of JSON objects each one representing a record in the form of fieldName: fieldValue
    Count: int, // In contrast to fetchPublicQuery, for fetchStdZoom, Count will always have value no matter of the options parameter and fields.
    Page: int, // If applicable the requested Page Number (1 based), otherwise -1
    PageSize: int, // If applicable the Number of records in the Page (i.e. less or equal to the requested PageSize) otherwise -1
}
```                        
                             *
                             ** If error i.e. function(err) { ... } then err.data contains the Entersoft Application server error object.
                             * @example
```js
$scope.fetchStdZoom = function()
{
    var zoomOptions = {
        WithCount: false,
        Page: 2,
        PageSize: 5

    };
    esWebApi.fetchStdZoom($scope.pZoomID, zoomOptions)
        .then(function(ret) {
            $scope.pZoomResults = ret.data;
        }, function(err) {
            $scope.pZoomResults = err;
        });
}
```
                             */
                            fetchStdZoom: function(zoomID, pqOptions, useCache) {
                                zoomID = zoomID ? zoomID.trim() : "";

                                useCache = !pqOptions && useCache;

                                var deferred = $q.defer();
                                if (useCache) {
                                    var it = esCache.getItem("ESZOOM_" + zoomID);
                                    if (it) {
                                        $timeout(function() {
                                            deferred.resolve(it);
                                        });
                                        return deferred.promise;
                                    }
                                }

                                var surl = urlWEBAPI.concat(ESWEBAPI_URL.__STANDARD_ZOOM__, zoomID);
                                
                                

                                var ht = $http({
                                    method: 'get',
                                    headers: prepareHeaders({
                                        "Authorization": esGlobals.getWebApiToken(),
                                        "X-ESPQOptions": JSON.stringify(pqOptions)
                                    }),
                                    url: surl
                                });
                                var sp = processWEBAPIPromise(ht);

                                sp.then(function(ret) {
                                    if (useCache) {
                                        esCache.setItem("ESZOOM_" + zoomID, ret);
                                    }
                                    deferred.resolve(ret);
                                }, function() {
                                    deferred.reject(arguments);
                                });
                                return deferred.promise;
                            },

                            /**
                             * @ngdoc function
                             * @name es.Services.Web.esWebApi#fetchMultiStdZoom
                             * @methodOf es.Services.Web.esWebApi
                             * @module es.Services.Web
                             * @kind function
                             * @description a function that fetches with just one round-trip for the browser to the Entersoft Application Server
                             * the contebts of one or more ES Zooms as sepcified by the input parameter
                             * @param {ESMultiZoomDef[]} multizoomdefs An array of {@link es.Services.Web.esGlobals#methods_ESMultiZoomDef ESMultiZoomDef} objects each one of which specifies the ES Zoom to be retrieved from the server.
                             * @return {promise} Returns a promise that once resolved the returned object will hold an array with the Zoom contents in one-to-one mapping with the input array
                             * @example
```js
$scope.multifetchStdZoom = function() {
    var zoomOptions = new esGlobals.ESPQOptions(300, 5, false);

    var zooms = _.map($scope.pZoomID.split(','), function(k) {
        return new esGlobals.ESMultiZoomDef(k, zoomOptions, true);
    });

    esWebApi.fetchMultiStdZoom(zooms)
        .then(function(ret) {
            $scope.pZoomResults = ret;
        }, function(err) {
            $scope.pZoomResults = JSON.stringify(err);
        });
}
```
                             */
                            fetchMultiStdZoom: function(multizoomdefs) {
                                var deferred = $q.defer();
                                var retzooms = [];

                                multizoomdefs = multizoomdefs || [];

                                var toFetchFromSrv = _.filter(multizoomdefs, function(x) {
                                    if (x.UseCache && esCache.getItem("ESZOOM_" + x.ZoomID)) {
                                        return false;
                                    }
                                    return true;
                                });

                                if (toFetchFromSrv.length == 0) {
                                    $timeout(function() {
                                        var ix;
                                        for (ix = 0; ix < multizoomdefs.length; ix++) {
                                            retzooms.push(esCache.getItem("ESZOOM_" + multizoomdefs[ix].ZoomID))
                                        }
                                        deferred.resolve(retzooms);
                                    });
                                    return deferred.promise;
                                }


                                var surl = urlWEBAPI.concat(ESWEBAPI_URL.__MULTI_STANDARD_ZOOM__);
                                
                                

                                var ht = $http({
                                    method: 'POST',
                                    headers: prepareHeaders(),
                                    data: toFetchFromSrv,
                                    url: surl
                                });
                                var sp = processWEBAPIPromise(ht);

                                sp.then(function(ret) {
                                    var kx = 0;

                                    _.each(multizoomdefs, function(element) {
                                        if (element.UseCache && esCache.getItem("ESZOOM_" + element.ZoomID)) {
                                            retzooms.push(esCache.getItem("ESZOOM_" + element.ZoomID));
                                        } else {
                                            var zx = ret[kx];
                                            kx = kx + 1;

                                            if (element.UseCache) {
                                                esCache.setItem("ESZOOM_" + element.ZoomID, zx);
                                            }
                                            retzooms.push(zx);
                                        }
                                    });

                                    deferred.resolve(retzooms);
                                }, function() {
                                    deferred.reject(arguments);
                                });

                                return deferred.promise;
                            },

                            /**
                             * @ngdoc function
                             * @name es.Services.Web.esWebApi#fetchPublicQuery
                             * @methodOf es.Services.Web.esWebApi
                             * @module es.Services.Web
                             * @kind function
                             * @description fetchPublicQuery is one of the most important functions of the esWebApi Service as it is the most preferable and
                             * strongly recommended way to get data from the Entersoft Application Server through the Entersoft WEB API Sever.
                             *
                             * **Public Queries** is a new Entersoft Data Retrieval component introduced since 4.0.28.0 version of EBS. Public Queries can be defined and managed 
                             * through the Entersoft Scroller Designer much like the well-know and widely used across all Entersoft Applications ecosystem *Entersoft Scroller*.
                             * Although, Entersoft Public Queries are very similar in principle and definition to Entersoft Scrollers, they have a completely new implementation and a set of prerequisites
                             * in order to use and execute them against the Entersoft Application Server.
                             *
                             * Public Queries have been designed and developed in order to enable for modern programming, customization and integration with 3rd party systems with respect to: 
                             * WEB Programming i.e. Ajax calls, JQuery, plain Javascript, AngularJS, node.js, Python, etc. as well as mobile programming in native platforms such as: Microsoft Univeral Applications, Microsoft .NET Framework applications, Xamarin Forms, Xamarin Monotouch, Xamarin Monodroid, Objective C, Java, etc.
                             * and in general in any Mono (.NET open source platform for Linux and Mac OSx OSs), .NET or javascript based development frameworks.
                             *
                             * The main features of Entersoft Public Queries (PQ) compared to Entersoft Scrollers are:
                             ** **async** PQs are executed asynchronously, by taking full advantage of the **async** capabilities of Microsoft .NET Framework 4.5.1, which is required to be installed and available at the Entersoft Application Server as well as at the Entersoft WEB API Server.
                             * This feaure allows for greater scalability i.e. greater number of concurrent calls to the Entersoft Application Server, better thread management and better use of server's CPU
                             * 
                             ** **server side paging** PQ's fully support first class Microsoft SQL Server server side paging with FAST and cpu and memory OPTIMIZED Transact SQL transformations and Execution.
                             * PQs require that the underlying Microsoft SQL Server should be SQL Server 2008 R2 or higher with SQL Server 2014 being strongly recommended.
                             * PQ's Paging allows for variable Page number request of variable PageSize. 
                             * 
                             * For example, suppose that we have a large table of ESGOPerson with millions of records 
                             * and we have defined a Public Query with Parameters such as @Name, @eMail, @City, etc. ORDERED BY the ESGOPerson.FullName. 
                             * Suppose we want to execute this PQ with no parameter values meaning ALL elgibile records and we want just the data of 6th Page with PageSize of 250 Records.
                             * Assuming that all prerequisites are met, the PQ will be executed by the Entersoft Application Server aynchronously, getting ONLY the 6th Page of 250 records pagesize. 
                             * Also interesting, we want a second execution of this PQ for the 37th Page with a PageSize of 1000 Rows. No problem, since, Page and PageSize are variable
                             * and can take any value in every subsequent call.
                             * Should this scenario is executed with Entersoft Scroller instead of PQ, we would have a huge burden on the SQL Server to get all millions of records !!! as well as a HUGE XML Dataset in the Entersoft Application Server (possibly an out-of-memory exception) 
                             * and a couple of memory operations to slice the data to get just the 6th page i.e. out of question !!!
                             * 
                             * **IMPORTANT** PQs also allow for ALL data to be returned, i.e. with No Paging at all, if this is what we want. Even in this bad scenario, PQ execution will be orders
                             * of magnitude BETTER performin in all aspects compared to Scoller execution: FASTER SQL Execution, LESS Memory required, ASYNC App Server Execution, MORE Efficient memory processing (JSON instead of XML).
                             * Of course, we have to be careful,
                             * so that we will not overload systems resources (SQL, Entersoft App Server, nework, traffic, bandwidth, Browser's memory etc.). 
                             * 
                             ** **Count of Records** PQs no matter whether Paging in taking place or not, allow for the Number of Records that meet the current sql statement (defined by the PQ along with the run-time params) to be returned along with the data.
                             * The number of records, if requested to be returned, it highly optimized executed by the SQL Server with just one round-trip to the server 
                             * with no need to re-write or restructure the PQ's defintion. Any transformations are done at run-time atomatically by the Entersoft Query Processor along with 
                             * the support of the new features of SQL Server, Transact SQL.
                             * 
                             ** **JSON format** The default format to which PQ data and results are transformed to and returned to the caller. 
                             * JSON for this kind of data i.e. records which outperforms in almost any aspect the *DataSet - XML* representation. Most important, PQ's execution 
                             * is taking advantage of the latest .NET Framework and ADO.NET execution options with ASYNC READERS, ASYNC Streams and StringBuilders in order to 
                             * construct the JSON result in the most optimal way. **Newtonsoft JSON** .NET library, now 1st class citizen of the .NET Framework, is the core 
                             * component used for serialization and deserialization of objects in the Entersoft .NET Framework code ecosystem. 
                             * **ATTENTION** Special consideration and Newtonsoft serialization configuration has taken place in order to properly handle NULL values and DATES.
                             *
                             ** **Precompiled SQL** PQ Actual SQL Statement is precompiled and stored at design time, which speeds up the application server PQ execution time as
                             * the sql statement to be sent to the SQL Server is instantly available. This is in contrast to the Scroller's execution model that requires the SQL Statement 
                             * to be constructed in every execution.
                             *
                             * 
                             * **Public Query Prerequisites**
                             ** Entersoft Business Suite, Entersoft Expert, Entersoft CRM family products of version 4.0.28 or later 
                             ** Microsoft .NET Framework 4.5.1 or later to be installed on the Entersoft Application Server(s) and Entersoft WEB API Server(s)
                             ** Microsoft SQL Server 2008 R2 or later (Recommended: SQL Server 2014 or later)
                             ** For Paging to work, the PQ Definition should explicitly contain at least one ORDER BY field
                             *
                             * 
                             * **Public Query Restrictions**
                             ** Hierarchical Public Queries are NOT SUPPORTED and will not be supported as the are fundamentally against the core concept of the PQ.
                             * The developer should design its solution in such a way with multiple PQ's i.e. for a Master-Detail old style Hierarchical DataSet OR if its not
                             * a major overhead to have a PQ for the details including the necessary fields form the Master (verbose). In case that a Hierarchical datase old style 
                             * result is absolutely necessary, the only choice is to use Scroller instead of Public Query with all the drawbacks.
                             ** BINARY* type fields are supported BUT not explicitly converted to any web or javascript recommended BASE64 representation. The use of fields of binary type
                             * in the PQ schema should be extemely rare for many reasons (web performance, security, javascript's limitations & restrictions, etc.).
                             * 
                             * @param {string|ESPublicQueryDef} pqGroupID if string then Entersoft Public Query GroupID or a {@link es.Services.Web.esGlobals#methods_ESPublicQueryDef ESPublicQueryDef} object that defines the rest of the parameters
                             * @param {string} pqFilterID Entersoft Public Query FilterID
                             * @param {ESPQOptions} pqOptions Entersoft Public Query execution options. See {@link es.Services.Web.esGlobals#methods_ESPQOptions ESPQOptions}.
                             * 
                             ** If pqOptions is null or undefined OR pqOptions.Page is null OR undefined OR NaN OR less than or equal to 0 THEN
                             * the Public Query will be executed at the Entersoft Application Server with no paging at all, which means that ALL the 
                             * rows will be returned.
                             *
                             ** If pqOptions is valid and pqOptions.PageSize is null OR undefined OR NaN OR less or equal to 0 THEN 
                             * the Public Query will be executed with PageSize equal to 20 which is the server's default
                             *
                             ** If pqOptions is valid and pqOptions.WithCount is true THEN the result will also include the total count of records 
                             * (no natter what the pagesize is) found in the server for the given Public Query and pqParams supplied for the PQ execution.
                             ** If pqOptions is valid and pqOptions.WithCount is false, the result still might contain information about the 
                             * total records depending on the other parameters. See the return section for detailed information about the returned value.
                             * @param {object} pqParams Parameters that will be used for the execution of the Public Query at the Entersoft Application Server
                             * The typical structure of the pqParams object is:
```js
var pqParams = {
    Name: "a*",
    RegDate: "ESDateRange(Day)"
};
```
                             * pqParams is a typical JSON object of key: value properties, where key is the parameter name as defined in the Public Query 
                             * (through Entersoft Scroller Designer) and value is an Entersoft Application server acceptable value for the given parameter, depending on the
                             * parameter type and properties as defined in the Public Query (through Entersoft Scroller Designer)
                             *
                             ** If pqParams is null or undefined or empty object i.e. {} THEN the Public Query will be executed by the Entersoft Application Server
                             * with all parameters assigned the value null.
                             *
                             ** If pqParams is not null and some parameters are specified THEN all the parameters that are not explicitly assigned a value i.e. are missing or are null or undefined in the pqParams object 
                             * at the execution time will be treated by the Entersoft Application Server as having null value.
                             * @param {string=} httpVerb Parameter to specify HTTP verb. Default is GET
                             * @return {httpPromise} Returns a promise.
                             ** If success i.e. then(function(ret) { ... }) ret.data holds the result of the Public Query Execution.
                             * In any success response, ret.data.Table will hold as string the Public Query MasterTableName as defined through the Entersoft Scroller Designer.
                             * The response has the typical form as follows:
```js
var x = {
    Table: string, // The name of the MasterTable as defined in the Public Query definition (through the Scroller Designer)
    Rows: [{Record 1}, {Record 2}, ....], // An array of JSON objects each one representing a record in the form of fieldName: fieldValue
    Count: int, // If applicable and capable the total number of records found in the server at the execution time for the current execution of Public Query / pqParams 
    Page: int, // If applicable the requested Page Number (1 based), otherwise -1
    PageSize: int, // If applicable the Number of records in the Page (i.e. less or equal to the requested PageSize) otherwise -1
}
```                        
                             *                              * 
                             * If **NO PAGING** is taking place (no matter how), which means that all data are returned from the server THEN
                             * ret.data.Count will always be greater or equal to 0 and it will always be equal to the ret.data.Rows.length i.e. the number of 
                             * records returned by the server. If the query returns no data, the ret.Count will be 0 and ret.data.Rows will always be an empty array []. 
                             * So, if NO PAGING is taking place, we always have ret.data.Count == ret.data.Rows.length.
                             * 
                             * **ATTENTION** If no records are returned by the Server ret.data.Rows will NOT BE null or undefined or not defined. It will be an empty array. ret.data.PageSize will be -1, ret.data.Page will be -1, 
                             * 
                             *If **PAGING** is taking place the following pseudo code diagram reflects the contents of ret.data response:
```js
IF WithCount == TRUE THEN
    {
        Count: 0, // (if no data at all exist or the number of records found in the database for the specific pq & params execution),
        Page: inputPage,
        PageSize: inputPageSize,
        Rows: [{} empty i.e. length = 0 or > 0 num of elements], // no page exists or the page has no data. IF Rows.length == 0 and Count == 0 THEN page is empty because in general no data exist
        Table: “xxxx”
    }
ELSE
    {
        Count: -1,
        Page: inputPage,
        PageSize: inputPageSize,
        Rows: [{} empty i.e. length = 0 or > 0 num of elements], // 0 length means that either no data at all exist or no page exists or the page has no data
        Table: “xxxx”
    }
END IF
```
                             *
                             ** If error i.e. function(err) { ... } then err.data contains the Entersoft Application server error object.
                             * @example
```js
$scope.dofetchPublicQuery = function() {
    var group = "ESGOPerson";
    var filter = "PersonList";
    $scope.pqResult = "";

    var pqOptions = {
        WithCount: false,
        Page: 2,
        PageSize: 5
    };

    var pqParams = {
        Name: "a*"
    };

    esWebApi.fetchPublicQuery(group, filter, pqOptions, pqParams)
        .then(function(ret) {
                $scope.pqResult = ret.data;
                $log.info(ret);
            },
            function(err) {
                $scope.pqResult = ret;
                $log.error(err);
            });
}
```
                             */
                            fetchPublicQuery: function(pqGroupID, pqFilterID, pqOptions, pqParams, httpVerb) {
                                var group;
                                var execParams;
                                if (pqGroupID instanceof esGlobals.ESPublicQueryDef) {
                                    group = (pqGroupID.GroupID || "").trim();
                                    pqFilterID = (pqGroupID.FilterID || "").trim();
                                    pqOptions = pqGroupID.PQOptions;
                                    execParams = pqGroupID.Params;
                                } else {
                                    group = pqGroupID ? pqGroupID.trim() : "";
                                    pqFilterID = pqFilterID ? pqFilterID.trim() : "";
                                    execParams = pqParams;
                                }

                                if (execParams && execParams instanceof esGlobals.ESParamValues) {
                                    execParams = execParams.getExecuteVals();
                                }

                                if (window.ESIsB2B) {

                                    execParams = execParams || {};
                                    execParams.TAGID = window.TAGID;

                                    if (!execParams.TAGID) {
                                        var deferred = $q.defer();
                                        deferred.reject( new Error("Trying to execute a PQ with no TAGID parameter in PQ [" + pqGroupID + "/" + pqFilterID + "] is forbidden"));
                                        return processWEBAPIPromise(deferred.promise);
                                    }
                                }

                                var surl = urlWEBAPI.concat(ESWEBAPI_URL.__PUBLICQUERY__, group, "/", pqFilterID);
                                
                                

                                /**
                                 * $http object configuration
                                 * @type {Object}
                                 */
                                var httpConfig = {
                                    headers: prepareHeaders(),
                                    url: surl,
                                    params: execParams
                                };

                                if (pqOptions) {
                                    httpConfig.headers["X-ESPQOptions"] = JSON.stringify(pqOptions);
                                }

                                //if called with 3 arguments then default to a GET request
                                httpConfig.method = httpVerb || 'POST';

                                //if not a GET request, switch to data instead of params
                                if (httpConfig.method !== 'GET') {
                                    delete httpConfig.params;
                                    httpConfig.data = execParams;
                                }

                                var ht = $http(httpConfig);
                                return processWEBAPIPromise(ht);
                            },

                            /**
                             * @ngdoc function
                             * @name es.Services.Web.esWebApi#multiPublicQuery
                             * @methodOf es.Services.Web.esWebApi
                             * @module es.Services.Web
                             * @kind function
                             * @description multiPublicQuery is similar to the {@link es.Services.Web.esWebApi#methods_fetchPublicQuery fetchPublicQuery} with the difference 
                             * that it supports for multiple public queries execution with just one round-trip to the Entersoft WEB API Server and to the Entersoft
                             * Application Server.
                             * @param {ESPublicQueryDef[]} pqDefs An array of one or more public query defintion objects that are to be executed to the server.
                             * The object has the following structure:
                             * @param {string} pqDefs.GroupID The GroupID of the Public Query
                             * @param {string} pqDefs.FilterID The FilterID of the Public Query
                             * @param {object} pqDefs.Params The params to be used for the execution of the Public Query
                             * @param {ESPQOptions} pqDefs.PQOptions The paging options for the Public Query Execution. See {@link es.Services.Web.esGlobals#methods_ESPQOptions ESPQOptions}.
                             * @return {MultPublicQueryResult[]} An array of equal size to the _pqDefs_ of objects each one of which holds the results of the 
                             * corresponding public query. The structure of the MultPublicQueryResult object is as follows:
```js
{
    GroupID: //string representing the GroupIF of the Public Query,
    FilterID: //string representing the FilterID of the Public Query,
    PQResults: // string that should be parsed by JSON.parse that holds the results of the Public Query,
    Error: // string if null or undefined or empty string means that the specific Public Query was executed with no errors. Ohterwise, an error has occurred 
    and the PQResults will be null or undefined.
}```
                             * @example
```js
var pqParams = [{
        GroupID: "ESGOPerson",
        FilterID: "CRM_Personlist",
        Params: {
            Name: "εντ*"
        }
    },

    {
        GroupID: "notdefined",
        FilterID: "not exists",
        Params: {
            Name: "ao*",
            Code: "noname"
        }
    }
];

esWebApi.MultiPublicQuery(pqParams)
    .then(function(x) {
            $scope.ret = x.data;
        },
        function(err) {
            $scope.pCompanyParamValue = JSON.stringify(err);
        });
}
```
                             **/
                            multiPublicQuery: function(pqDefs) {
                                var surl = urlWEBAPI.concat(ESWEBAPI_URL.__MULTI_PULIC_QUERY__);
                                
                                

                                /**
                                 * $http object configuration
                                 * @type {Object}
                                 */
                                var httpConfig = {
                                    headers: prepareHeaders(),
                                    url: surl,
                                    method: 'POST'
                                };

                                httpConfig.data = pqDefs;

                                var ht = $http(httpConfig);
                                return processWEBAPIPromise(ht);
                            },

                            /** 
                             * @ngdoc function
                             * @name es.Services.Web.esWebApi#fetchEASWebAsset
                             * @methodOf es.Services.Web.esWebApi
                             * @kind function
                             * @description This function returns the contents of a file asset stored in the Entersoft Application Server (EAS) **ESWebAssets** 
                             * or **CSWebAssets** sub-directories of the EAS. 
                             * 
                             * **REQUIRES ESWebAPIServer >= 1.7.9**
                             * 
                             * @param {string} assetUrlPath the sub-path that points to the file the contents of which we need to retrieve. So,
                             * if at the EAS the file is stored in the _$/CSWebAssets/esrfa/config/menuConfig.json_ you have to provide as *assetUrlPath* 
                             * the value "esrfa/config/menuConfig.json". 
                             * @param {object=} options JSON object representing the options that will be used to get the contents of the file.
                             * These options depend on what the caller wants to do with the results and on the document type e.g. image, MS Office document, PDF, etc.
                             * If left null or unspecified, then contents of the file will be returned as _arraybuffer_ (requires AngularJS v1.2 or hogher)
                             *
                             * To get an image i.e. myphoto.png to be displayed by an <image> html element, you need to call with options.
                             *
                             * **ATTENTION**
                             *
                             * For the image to be shown correctly by an HTML image element you should pre-pappend to the begining of the returned string
                             * the following string: "data:image/png;base64," i.e. img_data = "data:image/png;base64," + ret.data
```js
var options = {
    base64: true
}
```
                             * To get a unicode or utf-8 text document contents as a string you need to call
```js
var options = {Accept: 'text/plain'}
```
                             * As described above, if options is null or undefined, then the default options that will be used to execute the operation:
```js
{
    base64: false,
    responseType: 'arraybuffer'
}
```
                             * @return {httpPromise} If success i.e. function(ret) { ...} the ret.data contains the string or the array buffer with the contents of the file requested
                             * @example
                             * ![EAS directory structure example for fetchEASWebAsset](images/api/es09api-fetchasset.png)
```js
 $scope.fetchEASWebAsset = function() {
    esWebApi.fetchEASWebAsset($scope.pAsset, false)
    .then(function(ret) {
        $scope.pAssetResults = ret.data;
    },
    function(err) {
        $scope.pAssetResults = err;
    });
}

// call this function
// esWebApi.fetchEASWebAsset("xx/yy/abcd.txt", {Accept: 'text/plain'})
// will return the contents of the file.
// sample
```
                             */
                            fetchEASWebAsset: function(assetUrlPath, options, doNotHandleError) {
                                var cOptions = {
                                    base64: false,
                                };

                                if (options) {
                                    cOptions.base64 = !!options.base64;
                                    cOptions.responseType = options.responseType;
                                    cOptions.Accept = options.Accept;
                                    cOptions.esonly = options.esonly || false;
                                } else {
                                    cOptions.responseType = 'arraybuffer';
                                    cOptions.esonly = false;
                                }

                                var surl = urlWEBAPI.concat(ESWEBAPI_URL.__FETCH_WEB_EAS_ASSET__);
                                
                                

                                var httpConfig = {
                                    method: 'GET',
                                    headers: prepareHeaders(),
                                    url: surl,
                                    params: {
                                        routeId: assetUrlPath,
                                        base64: cOptions.base64,
                                        esonly: cOptions.esonly
                                    },
                                };

                                httpConfig.headers.Accept = cOptions.Accept;

                                if (cOptions.responseType) {
                                    httpConfig.responseType = cOptions.responseType;
                                }

                                var ht = $http(httpConfig);
                                return processWEBAPIPromise(ht, doNotHandleError);
                            },

                            /**
                             * @ngdoc function
                             * @name es.Services.Web.esWebApi#fetchEntity
                             * @methodOf es.Services.Web.esWebApi
                             * @kind function
                             * @description This function returns the Entersoft Entity ISUD dataset in JSON representation
                             * @param {string} entityclass The Entersoft ODS object ID the ISUD record to be retrieved
                             * @param {string} entitygid The gid in string format that represents the Primary Key of the record to be retrieved
                             * @return {httpPromise} If success i.e. function(ret) { ...} the ret.data contains JSON object of the ISUD dataset.
                             * @example
```js
$scope.fetchEntity = function() {
    esWebApi.fetchEntity("esmmstockitem", "B485C0C2-D9A9-47A6-88A3-039A40CA0157")
        .then(function(ret) {
                $scope.pEntityDS = ret.data;
            },
            function(err) {
                $scope.pEntityDS = err;
            })
}

var x = {
    "ESMMStockItem": [{
        "GID": "b485c0c2-d9a9-47a6-88a3-039a40ca0157",
        "Code": "ΘΡ.ΑΛ.425",
        "Description": "ΛΟΥΚ.Τ.ΦΡΑΓΚΦ.18ΧΛ.400ΓΡ -20%",
        "AlternativeDescription": "SAUSAGE FRANFURT 18ΧΛ.400ΓΡ -20%",
        "InternationalCode": "ΘΡ.ΑΛ.425",
        "AlternativeCode": "THR.AL.425",
        "AssemblyType": 0,
        "ItemClass": 1,
        "ItemType": 0,
        "fMainSupplierGID": "f6f24cba-6c22-49ef-b072-7165ad834592",
        "fItemPricingCategoryCode": "ΕΜΠΟΡΕΥΜΑΤΑ",
        "Price": 35,
        "RetailPrice": 42,
        "MarkupOnPrice": 11,
        "MarkupOnRetailPrice": 14,
        "PriceIncludedVAT": 0,
        "RetailPriceIncludedVAT": 1,
        "fMainMUGID": "ac431509-66a2-4fdb-9b75-ac1cd5b9c1e7",
        "fVATCategoryCode": "1111",
        "Discount": 4,
        "MaxDiscount": 6,
        "MinProfitMargin": 8,
        "MinSalesOrderQty": 0,
        "UsualPurchaseOrderQty": 0,
        "fCommissionLevelCode": "M.FLAT",
        "fItemFamilyCode": "ΤΡΟΦΙΜΑ",
        "fItemGroupCode": "ΧΑΙΤΟΓΛΟΥ",
        "fItemCategoryCode": "ΛΟΥΚΑΝΙΚΑ",
        "StandardCost": 3.6,
        "ValuationMethod": 0,
        "fItemControlProfileGID": "134fe00c-3212-440a-8237-0abd89e5b02c",
        "IncludedTaxReports": 0,
        "SerialNumberMgmt": 0,
        "LotMgmt": 0,
        "ColorMgmt": 0,
        "SizeMgmt": 0,
        "StockDim1Mgmt": 0,
        "StockDim2Mgmt": 0,
        "fCatalogueItemGID": "c1f5f5b1-6a9e-4100-9186-49385878f18d",
        "DateField1": "2006-11-16T00:00:00",
        "NumericField1": 0,
        "NumericField2": 0,
        "NumericField3": 0,
        "NumericField4": 0,
        "NumericField5": 0,
        "NumericField6": 0,
        "NumericField7": 0,
        "NumericField8": 0,
        "NumericField9": 0,
        "NumericField10": 0,
        "Flag1": 0,
        "Flag2": 0,
        "Flag3": 0,
        "Flag4": 0,
        "Flag5": 0,
        "Flag6": 0,
        "Flag7": 0,
        "Flag8": 0,
        "Flag9": 0,
        "Flag10": 0,
        "Flag11": 0,
        "Flag12": 0,
        "fBusinessActivityCode": "ΤΡΟΦΙΜΑ",
        "fGLSegCode": "Εμπορεύματα",
        "Price1": 0,
        "Price2": 0,
        "Price3": 0,
        "Price1IncludedVAT": false,
        "Price2IncludedVAT": false,
        "Price3IncludedVAT": false,
        "fMUServiceCode": "ΤΕΜ",
        "fMUMainCode": "ΤΕΜ",
        "MainSupplier": "f9eef0bf-2995-45cc-85b6-473a03a25a0d",
        "VATCalculationValue": 1,
        "Web": 1,
        "ValuationMethodAnalysis": 0,
        "MainCode": 1,
        "ValuationPerPeriod": 0,
        "ServiceMUType": 0,
        "Mobile": 0,
        "SelectInMobileOrder": 1,
        "PerCentOfTaxExclusion": 0,
        "MarkupOnPrice1": 0,
        "MarkupOnPrice2": 0,
        "MarkupOnPrice3": 0,
        "OpeningPerFiscalYear": 1,
        "LotCharacteristicsMgmt": 0,
        "CatalogueItemBehaviour": 0,
        "NS_MainSupplierDescription_Col": "ZOLOTAS Α.Ε..",
        "NS_MainMUDescription_Col": "Τεμάχια",
        "NS_MainSupplierItemCode_Col": "ΘΡ.ΑΛ.425",
        "NS_MainSupplierCurrency_Col": "EUR",
        "fCurrencyRateGroupCode": "1",
        "SetDate": "2015-11-23T00:00:00",
        "CurrencyExchangePriceType": 2,
        "CurrencyRate": 1,
        "NS_MainSupplierPrice_Col": 0,
        "ESDCREATED": "2006-11-16T13:51:19.86",
        "ESDMODIFIED": "2013-09-30T11:42:29.65",
        "ESUCREATED": "esmaster",
        "ESUMODIFIED": "KAR",
        "INACTIVE": 0,
        "fCompanyCode": "ES"
    }],
    "ESMMCatalogueItemRelation": [],
    "ESMMCatalogueItemRelationStockDimSetMap": [],
    "ESMMItemStorageLocation": [],
    "ESMMItemCodes": [{
        "ItemGID": "b485c0c2-d9a9-47a6-88a3-039a40ca0157",
        "Code": "ΘΡ.ΑΛ.425",
        "fMUGID": "ac431509-66a2-4fdb-9b75-ac1cd5b9c1e7",
        "Description": "ΛΟΥΚ.Τ.ΦΡΑΓΚΦ.18ΧΛ.400ΓΡ -20%",
        "RequiresBCProcessing": 0,
        "NumericField1": 0,
        "NumericField2": 0,
        "Flag1": false,
        "Flag2": false,
        "INACTIVE": 0,
        "fCompanyCode": "ES"
    }],
    "ESMMItemMU": [{
        "GID": "ac431509-66a2-4fdb-9b75-ac1cd5b9c1e7",
        "fItemGID": "b485c0c2-d9a9-47a6-88a3-039a40ca0157",
        "fMUCode": "ΤΕΜ",
        "Relation": 1,
        "EditRelation": 0,
        "DefaultVar2": 1,
        "DefaultVar3": 1,
        "DefaultVar4": 0,
        "RelationType": 0,
        "ApplyOnUserSelection": 0,
        "INACTIVE": 0,
        "fCompanyCode": "ES"
    }],
    "ESMMSISupplier": [{
        "GID": "f6f24cba-6c22-49ef-b072-7165ad834592",
        "fItemGID": "b485c0c2-d9a9-47a6-88a3-039a40ca0157",
        "fSupplierGID": "f9eef0bf-2995-45cc-85b6-473a03a25a0d",
        "SupplierItemCode": "ΘΡ.ΑΛ.425",
        "fCurrencyCode": "EUR",
        "Price": 0,
        "CurrencyPrice": 0,
        "DeliveryDays": 2,
        "Discount": 10,
        "fMUCode": "ΤΕΜ",
        "MinOrderQty": 0,
        "OptionLevel": "1",
        "OfferPrice": 0,
        "RequiresBCProcessing": 0,
        "PurchaseNetPrice": 0,
        "CurrencyPurchaseNetPrice": 0,
        "CrossCompanyID": "7jgU4Jjao1LMuhSJe6fjJg==",
        "fCurrencyRateGroupCode": "1",
        "SetDate": "2015-11-23T00:00:00",
        "CurrencyExchangePriceType": 2,
        "CurrencyRate": 1,
        "fCompanyCode": "ES",
        "SeqNum": 1
    }],
    "ESMMItemWH": [{
        "GID": "9f88e587-185d-4e2a-8bd2-14eb4c169c9e",
        "fItemGID": "b485c0c2-d9a9-47a6-88a3-039a40ca0157",
        "fWareHouseGID": "86947579-6885-4e86-914e-46378db3794f",
        "BottomLevel": 1,
        "SecurityLevel": 0,
        "ReorderLevel": 0,
        "UpperLevel": 0,
        "DebitQty": 100,
        "CreditQty": 2,
        "ReservedStock": 0,
        "Remainder": 98,
        "Available": 98,
        "BottomLevelAltMU": 0,
        "SecurityLevelAltMU": 0,
        "ReorderLevelAltMU": 0,
        "UpperLevelAltMU": 0,
        "DebitQtyAltMU": 0,
        "CreditQtyAltMU": 0,
        "ReservedStockAltMU": 0,
        "RemainderAltMU": 0,
        "AvailableAltMU": 0,
        "NumericField1": 0,
        "NumericField2": 0,
        "NumericField3": 0,
        "NumericField4": 0,
        "NumericField5": 0,
        "AnalysisDebitQty": 0,
        "AnalysisCreditQty": 0,
        "AnalysisReservedStock": 0,
        "AnalysisRemainder": 0,
        "AnalysisAvailable": 0,
        "AnalysisDebitQtyAltMU": 0,
        "AnalysisCreditQtyAltMU": 0,
        "AnalysisReservedStockAltMU": 0,
        "AnalysisRemainderAltMU": 0,
        "AnalysisAvailableAltMU": 0,
        "fCompanyCode": "ES"
    }],
    "ESMMItemCostPrices": [],
    "ESMMItemDimensionPrices": [],
    "ESFIItemCategory": [],
    "ESMMDimensionalAnalysis": [{
        "GID": "098ec252-57c1-4d68-8f2d-65966c57c567",
        "fItemGID": "b485c0c2-d9a9-47a6-88a3-039a40ca0157",
        "fItemMUGID": "ac431509-66a2-4fdb-9b75-ac1cd5b9c1e7",
        "Length": 0,
        "Width": 0,
        "Height": 0,
        "SurfaceArea": 0,
        "Volume": 0,
        "NetWeight": 0,
        "GrossWeight": 0
    }],
    "ESMMItemMURelation": [],
    "ESWMItemContainerType": [],
    "FK_ESFIItem_ESMMCommercialProfile": [],
    "FK_ESFIItem_ESMMItemControlPolicy": [{
        "GID": "134fe00c-3212-440a-8237-0abd89e5b02c",
        "Code": "ΠΟΛ-ΔΙΑ-02",
        "Description": "Απαγόρευση Αρνητικών & Ελεγχος Διαστάσεων",
        "Display": "ΠΟΛ-ΔΙΑ-02 / Απαγόρευση Αρνητικών & Ελεγχος Διαστάσεων"
    }],
    "FK_ESFIItemCategory_ESTMTaskCategoryValue": [],
    "FK_ESFIItem_ESTMContractTerm": [],
    "FK_ESFIItem_TaxDifferencesAccount": [],
    "FK_ESFIItem_ESMMZIntrastatCode": [],
    "FK_ESMMStockItem_ES00PropertySet": [],
    "ESTMPCatalogueItem": [],
    "FK_ESMMCatalogueItemRelation_ESMMStockDimSetMap_Color": [],
    "FK_ESMMCatalogueItemRelation_ESMMStockDimSetMap_Size": [],
    "FK_ESMMCatalogueItemRelation_ESMMStockDimSetMap_StockDim1": [],
    "FK_ESMMCatalogueItemRelation_ESMMStockDimSetMap_StockDim2": [],
    "FK_ESMMCatalogueItemRelationStockDimSetMap_ESMMStockDimSetMap_Color": [],
    "FK_ESMMCatalogueItemRelationStockDimSetMap_ESMMStockDimSetMap_Size": [],
    "FK_ESMMCatalogueItemRelationStockDimSetMap_ESMMStockDimSetMap_StockDim1": [],
    "FK_ESMMCatalogueItemRelationStockDimSetMap_ESMMStockDimSetMap_StockDim2": [],
    "FK_ESMMStockItem_ESFIItem": [],
    "FK_ESMMStockItem_ESBGAllocationProfile": [],
    "FK_ESMMItemCodes_ESMMZColor": [],
    "FK_ESMMItemCodes_ESMMZSize": [],
    "FK_ESMMItemCodes_ESMMZStockDim1": [],
    "FK_ESMMItemCodes_ESMMZStockDim2": [],
    "FK_ESMMStockItem_ESFIItemAllocationProfile": [],
    "FK_ESFIItem_ESFISpecialAccountGroup_DiscountGroup": [],
    "FK_ESFIItem_ESFISpecialAccountGroup_TaxesGroup": [],
    "FK_ESFIItem_ESFISpecialAccountGroup_ChargesGroup": [],
    "FK_ESFIItem_ESFISpecialAccountGroup_DeductionGroup": [],
    "FK_ESFIItem_ESFISpecialAccountGroup_BonusGroup": [],
    "FK_ESFIItem_ESMMStockDimSet_Color": [],
    "FK_ESFIItem_ESMMStockDimSet_Size": [],
    "FK_ESFIItem_ESMMStockDimSet_1": [],
    "FK_ESFIItem_ESMMStockDimSet_2": [],
    "FK_ESMMSISupplier_ESFITradeAccount": [{
        "GID": "f9eef0bf-2995-45cc-85b6-473a03a25a0d",
        "Code": "ΠΡΟΜ00020",
        "Type": 1,
        "Name": "ZOLOTAS Α.Ε..",
        "fTradeCurrencyCode": "EUR"
    }],
    "FK_ESWMItemContainerType_ESWMContainerType": [],
    "FK_ESFIItem_ESWMItemControlPolicy": [],
    "FK_ESMMLot_ESMMItemDimensionPrices": [],
    "FK_ESMMZColor_ESMMItemDimensionPrices": [],
    "FK_ESMMZSize_ESMMItemDimensionPrices": [],
    "FK_ESMMZStockDim1_ESMMItemDimensionPrices": [],
    "FK_ESMMZStockDim2_ESMMItemDimensionPrices": [],
    "FK_ESFIItem_ESFIItemNetProfitCodes": [],
    "FK_Supplier": [{
        "GID": "f9eef0bf-2995-45cc-85b6-473a03a25a0d",
        "Code": "ΠΡΟΜ00020",
        "Name": "ZOLOTAS Α.Ε.."
    }],
    "FK_FamilyCode": [{
        "Code": "ΤΡΟΦΙΜΑ",
        "Description": "ΤΡΟΦΙΜΑ",
        "Display": "ΤΡΟΦΙΜΑ / ΤΡΟΦΙΜΑ"
    }],
    "FK_CategoryCode": [{
        "Code": "ΛΟΥΚΑΝΙΚΑ",
        "fParentCode": "ΧΑΙΤΟΓΛΟΥ",
        "Description": "ΛΟΥΚΑΝΙΚΑ",
        "Display": "ΛΟΥΚΑΝΙΚΑ / ΛΟΥΚΑΝΙΚΑ"
    }],
    "FK_GroupCode": [{
        "Code": "ΧΑΙΤΟΓΛΟΥ",
        "fParentCode": "ΤΡΟΦΙΜΑ",
        "Description": "ΧΑΙΤΟΓΛΟΥ",
        "Display": "ΧΑΙΤΟΓΛΟΥ / ΧΑΙΤΟΓΛΟΥ"
    }],
    "FK_SubCategoryCode": [],
    "FK_ESFIItem_ESGOZBusinessUnit": [],
    "FK_ESFIItem_ESGOZBusinessActivity": [{
        "Code": "ΤΡΟΦΙΜΑ",
        "Description": "ΤΡΟΦΙΜΑ",
        "Display": "ΤΡΟΦΙΜΑ / ΤΡΟΦΙΜΑ"
    }],
    "FK_ESMMItemUnit_ESMMZMeasurementUnit": [{
        "Code": "ΤΕΜ",
        "Description": "Τεμάχια",
        "DefaultRelation": 1,
        "Symbol": "ΤΕΜ"
    }],
    "FK_ESFIItem_ESGOPerson_Manufacturer": [],
    "FK_ESMMStorageLocation_ESGOSites_WareHouse": [],
    "FK_ESMMItemWH_ESGOSites": [{
        "GID": "86947579-6885-4e86-914e-46378db3794f",
        "Code": "ΑΘΗ",
        "Description": "Κεντρικά Entersoft",
        "Address1": "ΛΕΩΦΌΡΟΣ ΣΥΓΓΡΟΎ 362"
    }],
    "FK_ESMMItemCostPrices_ESGOFiscalYear": [],
    "FK_ESMMItemCostPrices_ESGOFiscalPeriod": [],
    "FK_ESFIItem_ESMMBOM_Base": [],
    "FK_ESFIItem_ESMMCatalogueItem": [{
        "GID": "c1f5f5b1-6a9e-4100-9186-49385878f18d",
        "Code": "ΘΡ.ΑΛ.425",
        "Description": "ΛΟΥΚ.Τ.ΦΡΑΓΚΦ.18ΧΛ.400ΓΡ -20%"
    }],
    "FK_ESFIItem_ESCOCostElementType": [],
    "ES00Documents": [],
    "ES00Properties": [],
    "ES00PropertiesMultipleValues": []
};
```
                             */
                            fetchEntity: function(entityclass, entitygid) {
                                if (!entityclass || !entitygid) {
                                    throw new Error("Invalid parameters");
                                }

                                var surl = urlWEBAPI.concat(ESWEBAPI_URL.__FETCH_ENTITY__, entityclass, "/", entitygid);
                                
                                

                                var ht = $http({
                                    method: 'get',
                                    headers: prepareHeaders(),
                                    url: surl
                                });
                                return processWEBAPIPromise(ht);
                            },

                            /**
                             * @ngdoc function
                             * @name es.Services.Web.esWebApi#fetchEntityByCode
                             * @methodOf es.Services.Web.esWebApi
                             * @kind function
                             * @description This function returns the Entersoft Entity ISUD dataset in JSON representation
                             * @param {string} entityclass The Entersoft ODS object ID the ISUD record to be retrieved
                             * @param {string} entityCode The string code that represents the unique human understandable key of the record to be retrieved
                             * @return {httpPromise} If success i.e. function(ret) { ...} the ret.data contains JSON object of the ISUD dataset.
                             * @example
```js
$scope.fetchEntityByCode = function() {
    esWebApi.fetchEntityByCode("esmmstockitem", "ΕLΕ.Q.CΑΤΗ")
        .then(function(ret) {
                $scope.pEntityDS = ret.data;
            },
            function(err) {
                $scope.pEntityDS = err;
            })
}
                            */
                            fetchEntityByCode: function(entityclass, entityCode) {
                                if (!entityclass || !entityCode) {
                                    throw new Error("Invalid parameters");
                                }

                                var surl = urlWEBAPI.concat(ESWEBAPI_URL.__FETCH_ENTITY_BY_CODE__, entityclass, "/", entityCode);
                                
                                

                                var ht = $http({
                                    method: 'get',
                                    headers: prepareHeaders(),
                                    url: surl
                                });
                                return processWEBAPIPromise(ht);
                            },

                            /**
                             * @ngdoc function
                             * @name es.Services.Web.esWebApi#fetchPropertySet
                             * @methodOf es.Services.Web.esWebApi
                             * @kind function
                             * @description This function returns the property set / survey identified by the psCode parameter that is optionally linked / attached to the 
                             * campaignID specified by the campaignGID parameter 
                             * @param {string} psCode The Entersoft ODS object ID the ISUD record to be retrieved
                             * @param {string} campaignGID The gid in string format that represents the gid of the campaign that is of type sruvey
                             * @return {httpPromise} If success i.e. function(ret) { ...} the ret.data contains JSON object of the ESPropertySet object.
                             * @example
```js
smeControllers.controller('surveyCtrl', ['$location', '$scope', '$log', 'esWebApi', 'esUIHelper', '_', 'esCache', 'esMessaging', 'esGlobals',
    function($location, $scope, $log, esWebApiService, esWebUIHelper, _, cache, esMessaging, esGlobals) {

        $scope.surveyDef = {};

        $scope.startFrom = -1;
        $scope.surveyCode = "usage_s1";
        $scope.surveyAns = {};

        $scope.loadSurvey = function() {
            esWebApiService.fetchPropertySet($scope.surveyCode, "2E035E80-BFED-4B45-91D2-1CEB64C2BB7B")
                .then(function(ret) {
                        $scope.surveyDef = ret.data;
                        $scope.startFrom = -1;
                        $scope.surveyCode = "usage_s1";
                        $scope.surveyAns = {};
                    },
                    function(err) {
                        $scope.surveyDef = {};
                        alert(err);
                    });
        }
    }
]);
```
                            * and the result would be similar to the example below according to the following defintion in EBS:
                            * ![Entersoft Survey Marketing Campaign](images/api/es012propertySet.png)
                            *
                            * ![Entersoft Survey Definition](images/api/es013propertySet.png)
                            *
                            * ![Entersoft Survey Choice List](images/api/es014propertySet.png)
                            *
                            * and the JSON model for this definition would be as follows:
```js
{
    "GID": "254feeb8-b56e-4c57-bcd3-6c023b085cc6",
    "Code": "usage_s1",
    "Description": "Survey for RFA Usage",
    "ESDCreated": "2015-12-07T15:46:05.193",
    "ESUCreated": "ADMIN",
    "ESDModified": "0001-01-01T00:00:00",
    "Inactive": false,
    "Type": 1,
    "MobileSurvey": false,
    "Lines": [{
        "GID": "184b1993-db48-4c38-ac39-b31958b6cf0c",
        "fPropertySetGID": "254feeb8-b56e-4c57-bcd3-6c023b085cc6",
        "SeqNum": 1,
        "Category_Code": "Γενικές Ερωτήσεις",
        "Category_OrderPriority": 0,
        "ESDModified": "0001-01-01T00:00:00",
        "ESUCreated": "ADMIN",
        "ESDCreated": "2015-12-17T18:34:12.373",
        "Mandatory": true,
        "VisualizationStyle": 0,
        "Inactive": false,
        "PhotoRelated": false,
        "NotApplicable": false,
        "Code": "usage_s1 - Q001",
        "Description": "Profit",
        "PType": 1
    }, {
        "GID": "032d0b05-5fd5-46fa-a909-1cac51c5d766",
        "fPropertySetGID": "254feeb8-b56e-4c57-bcd3-6c023b085cc6",
        "SeqNum": 2,
        "Category_Code": "Ειδικά Στοιχεία",
        "Category_OrderPriority": 0,
        "ESDModified": "2015-12-20T13:02:57.067",
        "ESUModified": "ADMIN",
        "ESUCreated": "ADMIN",
        "ESDCreated": "2015-12-07T15:46:05.263",
        "Mandatory": true,
        "VisualizationStyle": 1,
        "Inactive": false,
        "PhotoRelated": false,
        "NotApplicable": false,
        "Code": "usage_s1 - Q002",
        "Description": "Age",
        "AlternativeDescription": "you should answer with care",
        "PArg": "AgeScale",
        "PType": 4
    }, {
        "GID": "57526e4c-ccf7-4d2b-92f1-754d31590771",
        "fPropertySetGID": "254feeb8-b56e-4c57-bcd3-6c023b085cc6",
        "SeqNum": 3,
        "Category_Code": "Ειδικά Στοιχεία",
        "Category_OrderPriority": 0,
        "ESDModified": "2015-12-17T18:34:12.353",
        "ESUModified": "ADMIN",
        "ESUCreated": "ADMIN",
        "ESDCreated": "2015-12-07T15:46:05.32",
        "Mandatory": true,
        "VisualizationStyle": 2,
        "Inactive": false,
        "PhotoRelated": false,
        "NotApplicable": false,
        "Code": "usage_s1 - Q003",
        "Description": "Colors",
        "PArg": "ColorsType",
        "PType": 14
    }, {
        "GID": "f4af1a79-16ee-45fa-b7fd-31654fd6876a",
        "fPropertySetGID": "254feeb8-b56e-4c57-bcd3-6c023b085cc6",
        "SeqNum": 4,
        "Category_Code": "Εμπορικά Θέματα",
        "Category_OrderPriority": 0,
        "ESDModified": "2015-12-17T18:34:12.353",
        "ESUModified": "ADMIN",
        "ESUCreated": "ADMIN",
        "ESDCreated": "2015-12-07T15:46:05.34",
        "Mandatory": true,
        "VisualizationStyle": 4,
        "Inactive": false,
        "PhotoRelated": false,
        "NotApplicable": false,
        "Code": "ES.YesNoDontKnow",
        "Description": "Σας αρέσει το EBS?",
        "PArg": "ES.YesNoDontKnow",
        "PType": 4
    }, {
        "GID": "753e2d67-28df-4054-877c-2706f8179711",
        "fPropertySetGID": "254feeb8-b56e-4c57-bcd3-6c023b085cc6",
        "SeqNum": 5,
        "Category_Code": "Εμπορικά Θέματα",
        "Category_OrderPriority": 0,
        "ESDModified": "2015-12-17T18:34:12.353",
        "ESUModified": "ADMIN",
        "ESUCreated": "ADMIN",
        "ESDCreated": "2015-12-07T15:46:05.34",
        "Mandatory": true,
        "VisualizationStyle": 0,
        "Inactive": false,
        "PhotoRelated": false,
        "NotApplicable": false,
        "Code": "usage_s1 - Q005",
        "Description": "Άλλα Στοιχεια",
        "PType": 0
    }, {
        "GID": "1708e894-c3c7-446c-8af7-595c07233cb2",
        "fPropertySetGID": "254feeb8-b56e-4c57-bcd3-6c023b085cc6",
        "SeqNum": 6,
        "Category_Code": "Εμπορικά Θέματα",
        "Category_OrderPriority": 0,
        "ESDModified": "2015-12-17T18:34:12.357",
        "ESUModified": "ADMIN",
        "ESUCreated": "ADMIN",
        "ESDCreated": "2015-12-07T15:46:05.343",
        "Mandatory": true,
        "VisualizationStyle": 0,
        "Inactive": false,
        "PhotoRelated": false,
        "NotApplicable": false,
        "Code": "usage_s1 - Q006",
        "Description": "Τζίρος",
        "PArg": "3",
        "PType": 1
    }, {
        "GID": "9c79a9d6-6943-42e2-b4af-108e440f9ec9",
        "fPropertySetGID": "254feeb8-b56e-4c57-bcd3-6c023b085cc6",
        "SeqNum": 7,
        "Category_Code": "Εμπορικά Θέματα",
        "Category_OrderPriority": 0,
        "ESDModified": "2015-12-17T18:34:12.357",
        "ESUModified": "ADMIN",
        "ESUCreated": "ADMIN",
        "ESDCreated": "2015-12-07T15:46:05.343",
        "Mandatory": true,
        "VisualizationStyle": 0,
        "Inactive": false,
        "PhotoRelated": false,
        "NotApplicable": false,
        "Code": "usage_s1 - Q007",
        "Description": "Αριθμός Υπαλλήλων",
        "PType": 2
    }, {
        "GID": "4c6a89e2-6d0e-48e0-9a34-c3603019c3d6",
        "fPropertySetGID": "254feeb8-b56e-4c57-bcd3-6c023b085cc6",
        "SeqNum": 8,
        "Category_Code": "Εμπορικά Θέματα",
        "Category_OrderPriority": 0,
        "ESDModified": "2015-12-17T18:34:12.357",
        "ESUModified": "ADMIN",
        "ESUCreated": "ADMIN",
        "ESDCreated": "2015-12-07T15:46:05.343",
        "Mandatory": true,
        "VisualizationStyle": 0,
        "Inactive": false,
        "PhotoRelated": false,
        "NotApplicable": false,
        "Code": "usage_s1 - Q008",
        "Description": "Ετος Ίδρυσης",
        "PType": 3
    }, {
        "GID": "51ca7792-a339-452a-bf68-023029fc7bad",
        "fPropertySetGID": "254feeb8-b56e-4c57-bcd3-6c023b085cc6",
        "SeqNum": 9,
        "Category_Code": "Ερωτηματολόγιο",
        "Category_OrderPriority": 0,
        "ESDModified": "2015-12-17T18:34:12.357",
        "ESUModified": "ADMIN",
        "ESUCreated": "ADMIN",
        "ESDCreated": "2015-12-07T15:46:05.347",
        "Mandatory": true,
        "VisualizationStyle": 0,
        "Inactive": false,
        "PhotoRelated": false,
        "NotApplicable": false,
        "Code": "usage_s1 - Q009",
        "Description": "Εναρξη Ημέρας",
        "PType": 12
    }, {
        "GID": "a408bc3c-75d8-49b7-a989-0c3cbbf686d3",
        "fPropertySetGID": "254feeb8-b56e-4c57-bcd3-6c023b085cc6",
        "SeqNum": 10,
        "Category_Code": "Ερωτηματολόγιο",
        "Category_OrderPriority": 0,
        "ESDModified": "2015-12-17T18:34:12.357",
        "ESUModified": "ADMIN",
        "ESUCreated": "ADMIN",
        "ESDCreated": "2015-12-07T15:46:05.347",
        "Mandatory": true,
        "VisualizationStyle": 0,
        "Inactive": false,
        "PhotoRelated": false,
        "NotApplicable": false,
        "Code": "usage_s1 - Q010",
        "Description": "Ραντεβού",
        "PType": 11
    }, {
        "GID": "f1e8406c-418a-4aa1-b1fe-e57e4aca09b7",
        "fPropertySetGID": "254feeb8-b56e-4c57-bcd3-6c023b085cc6",
        "SeqNum": 11,
        "Category_Code": "Ερωτηματολόγιο",
        "Category_OrderPriority": 0,
        "ESDModified": "2015-12-17T18:34:12.36",
        "ESUModified": "ADMIN",
        "ESUCreated": "ADMIN",
        "ESDCreated": "2015-12-07T15:46:05.35",
        "Mandatory": true,
        "VisualizationStyle": 0,
        "Inactive": false,
        "PhotoRelated": false,
        "NotApplicable": false,
        "Code": "usage_s1 - Q011",
        "Description": "Κατανομή Εσόδων",
        "PArg": "9",
        "PType": 15
    }, {
        "GID": "ce67f1ec-0ffb-4046-b2d9-512cf16ed7bc",
        "fPropertySetGID": "254feeb8-b56e-4c57-bcd3-6c023b085cc6",
        "SeqNum": 12,
        "Category_Code": "Γενικές Ερωτήσεις",
        "Category_OrderPriority": 0,
        "ESDModified": "0001-01-01T00:00:00",
        "ESUCreated": "ADMIN",
        "ESDCreated": "2015-12-17T19:36:02.473",
        "Mandatory": true,
        "VisualizationStyle": 0,
        "Inactive": false,
        "PhotoRelated": false,
        "NotApplicable": false,
        "Code": "usage_s1 - Q012",
        "Description": "Statisfaction",
        "AlternativeDescription": "0=δυσαρεστημένος και με το 5=ευχαριστημένος",
        "PArg": "5Scale",
        "PType": 4
    }, {
        "GID": "a3064835-afe2-4da9-bc90-db17d3980e33",
        "fPropertySetGID": "254feeb8-b56e-4c57-bcd3-6c023b085cc6",
        "SeqNum": 13,
        "Category_Code": "Ειδικά Στοιχεία",
        "Category_OrderPriority": 0,
        "ESDModified": "2015-12-20T13:02:57.48",
        "ESUModified": "ADMIN",
        "ESUCreated": "ADMIN",
        "ESDCreated": "2015-12-18T10:51:01.857",
        "Mandatory": true,
        "VisualizationStyle": 0,
        "Inactive": false,
        "PhotoRelated": false,
        "NotApplicable": false,
        "Code": "usage_s1 - Q013",
        "Description": "Πώς αξιολογείτε την Υποστήριξη",
        "AlternativeDescription": "0 = χαμηλά 4 = άριστα",
        "PArg": "9",
        "PType": 2
    }, {
        "GID": "00c75e94-a9e6-42a9-b5b0-e9b1f48cc0e9",
        "fPropertySetGID": "254feeb8-b56e-4c57-bcd3-6c023b085cc6",
        "SeqNum": 14,
        "Category_Code": "Γενικές Ερωτήσεις",
        "Category_OrderPriority": 0,
        "ESDModified": "0001-01-01T00:00:00",
        "ESUCreated": "ADMIN",
        "ESDCreated": "2015-12-21T08:57:06.54",
        "Mandatory": true,
        "VisualizationStyle": 0,
        "Inactive": false,
        "PhotoRelated": false,
        "NotApplicable": false,
        "Code": "usage_s1 - Q014",
        "Description": "Χώρα Προέλευσης",
        "PArg": "ESGOZCountry",
        "PType": 4
    }, {
        "GID": "57aaa798-9d49-499f-8807-4ce9daef6260",
        "fPropertySetGID": "254feeb8-b56e-4c57-bcd3-6c023b085cc6",
        "SeqNum": 15,
        "Category_Code": "Γενικές Ερωτήσεις",
        "Category_OrderPriority": 0,
        "ESDModified": "0001-01-01T00:00:00",
        "ESUCreated": "ADMIN",
        "ESDCreated": "2015-12-21T09:35:19.923",
        "Mandatory": true,
        "VisualizationStyle": 0,
        "Inactive": false,
        "PhotoRelated": false,
        "NotApplicable": false,
        "Code": "usage_s1 - Q015",
        "Description": "Μερίδιο Αγοράς",
        "PType": 15
    }],
    "Choices": [{
        "ChoiceCode": "5Scale",
        "Code": "0",
        "Description": "Καθόλου Ικανοποιημένος",
        "Value": "0",
        "OrderPriority": 1
    }, {
        "ChoiceCode": "5Scale",
        "Code": "1",
        "Description": "-",
        "Value": "1",
        "OrderPriority": 2
    }, {
        "ChoiceCode": "5Scale",
        "Code": "22",
        "Description": "-",
        "Value": "22",
        "OrderPriority": 3
    }, {
        "ChoiceCode": "5Scale",
        "Code": "33",
        "Description": "-",
        "Value": "33",
        "OrderPriority": 4
    }, {
        "ChoiceCode": "5Scale",
        "Code": "4",
        "Description": "Εξαιρετικά Ικανοποιημένος",
        "Value": "4",
        "OrderPriority": 5
    }, {
        "ChoiceCode": "AgeScale",
        "Code": "1",
        "Description": "18-25",
        "Value": "1",
        "OrderPriority": 1
    }, {
        "ChoiceCode": "AgeScale",
        "Code": "2",
        "Description": "26-35",
        "Value": "2",
        "OrderPriority": 2
    }, {
        "ChoiceCode": "AgeScale",
        "Code": "3",
        "Description": ">36",
        "Value": "3",
        "OrderPriority": 3
    }, {
        "ChoiceCode": "ColorsType",
        "Code": "1",
        "Description": "Red",
        "Value": "1",
        "OrderPriority": 1
    }, {
        "ChoiceCode": "ColorsType",
        "Code": "2",
        "Description": "Green",
        "Value": "2",
        "OrderPriority": 2
    }, {
        "ChoiceCode": "ColorsType",
        "Code": "3",
        "Description": "Blue",
        "Value": "3",
        "OrderPriority": 3
    }, {
        "ChoiceCode": "ES.YesNoDontKnow",
        "Code": "55",
        "Description": "Όχι",
        "Value": "55",
        "AlternativeDescription": "No",
        "OrderPriority": 1
    }, {
        "ChoiceCode": "ES.YesNoDontKnow",
        "Code": "Yes",
        "Description": "Ναι",
        "Value": "1",
        "AlternativeDescription": "Yes",
        "OrderPriority": 2
    }, {
        "ChoiceCode": "ES.YesNoDontKnow",
        "Code": "DontKnow",
        "Description": "Δεν γνωρίζω/Δεν απαντώ",
        "Value": "2",
        "AlternativeDescription": "Don't know",
        "OrderPriority": 3
    }],
    "Sections": [{
        "Code": "Γενικές Ερωτήσεις",
        "Description": "Γενικές Ερωτήσεις",
        "Inactive": false,
        "OrderPriority": 0
    }, {
        "Code": "Ειδικά Στοιχεία",
        "Description": "Ειδικά Χαρακτηριστικά Είδους",
        "Inactive": false,
        "OrderPriority": 0
    }, {
        "Code": "Εμπορικά Θέματα",
        "Description": "Εμπορικά Θέματα Είδους",
        "Inactive": false,
        "OrderPriority": 0
    }, {
        "Code": "Ερωτηματολόγιο",
        "Description": "Ερωτηματολόγιο",
        "Inactive": false,
        "OrderPriority": 0
    }]
}
``` 
                            */
                            fetchPropertySet: function(psCode, campaignGID) {
                                if (!psCode) {
                                    throw new Error("Invalid parameter");
                                }

                                if (campaignGID) {
                                    psCode = psCode + "/" + campaignGID;
                                }

                                var surl = urlWEBAPI.concat(ESWEBAPI_URL.__FETCH_ESPROPERTY_SET__, psCode);
                                
                                

                                var ht = $http({
                                    method: 'get',
                                    headers: prepareHeaders(),
                                    url: surl
                                });
                                return processWEBAPIPromise(ht);
                            },

                            /**
                             * @ngdoc function
                             * @name es.Services.Web.esWebApi#fetchESScale
                             * @methodOf es.Services.Web.esWebApi
                             * @kind function
                             * @description This function returns a scale object as it is defined in the Entersoft Application Server ESGOZScales
                             * @param {string} scaleCode The string code of the ESGOScale object we want to retrieve
                             * @return {object} If success i.e. function(ret) { ...} the ret contains the JSON representation of the ESGOScaleObject
                             * @example
```js
var ret = {
                                    "GID": "78bd32f1-398d-4779-850c-7ae4f0bc2290",
                                    "Code": "AgeScale",
                                    "Description": "Age scale",
                                    "InternationalID": "ES.AgeScale",
                                    "Inactive": false,
                                    "ESSystem": true,
                                    "Ranges": [{
                                        "GID": "d9a19f99-6f34-4a7d-aab8-288f77c6ee9d",
                                        "fScaleGID": "78bd32f1-398d-4779-850c-7ae4f0bc2290",
                                        "SeqNum": 1,
                                        "Code": "18-24",
                                        "Inactive": false,
                                        "MinValue": 0,
                                        "MaxValue": 24,
                                        "ImageIndex": 0,
                                        "ColorARGB": -103
                                    }, {
                                        "GID": "6eed297b-f7cb-4c06-9215-0276c424e39a",
                                        "fScaleGID": "78bd32f1-398d-4779-850c-7ae4f0bc2290",
                                        "SeqNum": 2,
                                        "Code": "25-34",
                                        "Inactive": false,
                                        "MinValue": 24,
                                        "MaxValue": 34,
                                        "ImageIndex": 0,
                                        "ColorARGB": -7876885
                                    }, {
                                        "GID": "cdf25cd5-1cf3-4f81-8b99-9a4f6907ecc8",
                                        "fScaleGID": "78bd32f1-398d-4779-850c-7ae4f0bc2290",
                                        "SeqNum": 3,
                                        "Code": "35-44",
                                        "Inactive": false,
                                        "MinValue": 34,
                                        "MaxValue": 44,
                                        "ImageIndex": 0,
                                        "ColorARGB": -1146130
                                    }, {
                                        "GID": "b63498c2-b104-4adb-b316-31c7b889b2f5",
                                        "fScaleGID": "78bd32f1-398d-4779-850c-7ae4f0bc2290",
                                        "SeqNum": 4,
                                        "Code": "45-54",
                                        "Inactive": false,
                                        "MinValue": 44,
                                        "MaxValue": 54,
                                        "ImageIndex": 0,
                                        "ColorARGB": -16776961
                                    }, {
                                        "GID": "e39f3163-e71a-43d6-9a04-bf09b2ba129d",
                                        "fScaleGID": "78bd32f1-398d-4779-850c-7ae4f0bc2290",
                                        "SeqNum": 5,
                                        "Code": "55-64",
                                        "Inactive": false,
                                        "MinValue": 54,
                                        "MaxValue": 64,
                                        "ImageIndex": 0,
                                        "ColorARGB": -16744448
                                    }, {
                                        "GID": "2a871edb-1732-4f2a-863e-7dc9cacd752c",
                                        "fScaleGID": "78bd32f1-398d-4779-850c-7ae4f0bc2290",
                                        "SeqNum": 6,
                                        "Code": "65+",
                                        "Inactive": false,
                                        "MinValue": 64,
                                        "MaxValue": 130,
                                        "ImageIndex": 0,
                                        "ColorARGB": -65536
                                    }]
                                };

```
                             **/
                            fetchESScale: function(scaleCode) {
                                var deferred = $q.defer();

                                if (!scaleCode) {
                                    deferred.reject("Invalid parameter");
                                    return deferred.promise;
                                }

                                scaleCode = scaleCode.toLowerCase();

                                
                                var cItem = esCache.getItem("ESGOSCALE_" + scaleCode);
                                if (cItem) {
                                    $timeout(function() {
                                        deferred.resolve(cItem);
                                    });
                                    return deferred.promise;
                                }

                                var surl = urlWEBAPI.concat(ESWEBAPI_URL.__FETCH_ESSCALE__, scaleCode);
                                
                                

                                var ht = $http({
                                    method: 'get',
                                    headers: prepareHeaders(),
                                    url: surl
                                });
                                processWEBAPIPromise(ht, true)
                                    .then(function(ret) {
                                        esCache.setItem("ESGOSCALE_" + scaleCode, ret.data);
                                        deferred.resolve(ret.data);
                                    }, function() {
                                        deferred.reject(arguments);
                                    });
                                return deferred.promise;
                            },

                            /**
                             * @ngdoc function
                             * @name es.Services.Web.esWebApi#fiImportDocument
                             * @methodOf es.Services.Web.esWebApi
                             * @kind function
                             * @description This function imports a ESFIDocument of all the supported classes i.e.(Trade, Cash, Adjustment and Stock) through the FIImportDoc service of the Entersoft Application Server.
                             * @param {string} xmldocstr The XML representation of the financial document to be inserted/updates through the
                             * Entersoft Application Server FIImportDocument service. For more, see the relative {@link http://www.entersoft.gr/KBArticle/%CE%94%CE%B9%CE%B1%CE%B4%CE%B9%CE%BA%CE%B1%CF%83%CE%AF%CE%B1%20%CE%B5%CE%B9%CF%83%CE%B1%CE%B3%CF%89%CE%B3%CE%AE%CF%82%20%CF%80%CE%B1%CF%81%CE%B1%CF%83%CF%84%CE%B1%CF%84%CE%B9%CE%BA%CF%8E%CE%BD%20%CE%B1%CF%80%CF%8C%20XML/MEMBERS_slh_KnowledgeBase Entersoft Knowledge Base article}.
                             * @return {httpPromise} If success i.e. function(ret) { ...} the ret.data contains the string result of the FIImportDocument function.
                             */
                            fiImportDocument: function(xmldocstr) {

                                if (!xmldocstr) {
                                    throw new Error("xmldocstr is not a valid string");
                                }

                                var surl = urlWEBAPI.concat(ESWEBAPI_URL.__FI_IMPORTDOCUMENT___);
                                
                                

                                var ht = $http({
                                    method: 'post',
                                    headers: prepareHeaders(),
                                    url: surl,
                                    data: xmldocstr
                                });
                                return processWEBAPIPromise(ht);

                            },


                            /**
                             * @ngdoc function
                             * @name es.Services.Web.esWebApi#downloadURLForBlobDataDownload
                             * @methodOf es.Services.Web.esWebApi
                             * @kind function
                             * @description Creates a URL that direct downalods the specified ES00DocumentGID. The URL contains the query parameter for the GID of the ES00Document to be downloaded as well as the web api token.
                             * The download process is performed in chunks of 8KB buffer size, it is resumable and it also supports ranges.
                             * @param {string} es00documentGID The GID of the ES00Document to be downloaded. Should the ES00Document does not exist or the contents of the blob or binded file are empty 404 is returned.
                             * @return {string} A complete URL for the ES00Document to be downloaded, ready to be used in an ng-href or similar html element.
                             */
                            downloadURLForBlobDataDownload: function(es00documentGID) {
                                if (!es00documentGID) {
                                    return "";
                                }

                                var surl = urlWEBAPI.concat(ESWEBAPI_URL.__DOWNLOAD_ES00DOCUMENT_BLOBDATA_BY_GID__, es00documentGID);
                                surl += "?webapitoken=" + esGlobals.getWebApiToken();
                                return surl;
                            },

                            userLogoUrl: function(userid) {
                                var surl = urlWEBAPI.concat(ESWEBAPI_URL.__USER_LOGO__, userid);
                                surl += "?webapitoken=" + esGlobals.getWebApiToken();
                                surl += "&base64=false";
                                return surl;
                            },

                            /**
                             * @ngdoc function
                             * @name es.Services.Web.esWebApi#downloadES00BlobURLByGID
                             * @methodOf es.Services.Web.esWebApi
                             * @kind function
                             * @description Creates a URL that direct downalods the specified ES00Blob. The URL contains the query parameter for the GID of the ES00Blob to be downloaded as well as the web api token.
                             * The download process is performed in chunks of 8KB buffer size, it is resumable and it also supports ranges.
                             * @param {string} es00BlobGID The GID of the ES00Blob to be downloaded. Should the ES00Blob does not exist or the contents of the blob is empty 404 is returned.
                             * @param {string=} fExt Optional, the file extension of the related ES00Blob i.e. ".xlsx"
                             * @return {string} A complete URL for the ES00Blob to be downloaded, ready to be used in an ng-href or similar html element.
                             */
                            downloadES00BlobURLByGID: function(es00BlobGID, fExt, bPromise) {
                                if (!es00BlobGID) {
                                    return "";
                                }

                                var surl = urlWEBAPI.concat(ESWEBAPI_URL.__DOWNLOAD_ES00BLOB_BY_GID__, es00BlobGID);
                                surl += "?webapitoken=" + esGlobals.getWebApiToken();
                                if (fExt) {
                                    surl += "&extType=" + fExt;
                                }

                                if (!bPromise) {
                                    return surl;
                                }

                                
                                
                                var ht = $http({
                                    method: 'get',
                                    headers: prepareHeaders(),
                                    url: surl
                                });
                                return processWEBAPIPromise(ht, true);
                            },


                            downloadES00BlobURLByObject: function(objectid, keyid, typeid, fExt, ts, bPromise) {
                                if (!objectid || !keyid || typeid == null || typeid == undefined) {
                                    return "";
                                }

                                var surl = urlWEBAPI.concat(ESWEBAPI_URL.__DOWNLOAD_ES00BLOB_BY_OBJECT__, objectid);
                                surl += "?keyid=" + keyid;
                                surl += "&typeid=" + typeid;
                                surl += "&webapitoken=" + esGlobals.getWebApiToken();
                                if (fExt) {
                                    surl += "&extType=" + fExt;
                                }

                                if (ts) {
                                    surl += "&ts=" + Number(new Date());
                                }

                                if (!bPromise) {
                                    return surl;
                                }

                                
                                
                                var ht = $http({
                                    method: 'get',
                                    headers: prepareHeaders(),
                                    url: surl
                                });
                                return processWEBAPIPromise(ht, true);
                            },

                            getBodyFromES00Blob: function(objectid, keyid, typeid) {
                                if (!objectid) {
                                    throw new Error("invalid parameters");
                                }

                                var surl = urlWEBAPI.concat(ESWEBAPI_URL.__GET_BODY_FROM_ES00BLOB__, objectid);
                                if (keyid && typeid) {
                                    surl += "?keyid=" + keyid;
                                    surl += "&typeid=" + typeid;
                                }

                                
                                
                                var ht = $http({
                                    method: 'get',
                                    headers: prepareHeaders(),
                                    url: surl
                                });
                                return processWEBAPIPromise(ht);
                            },

                            postBodyToES00Blob: function(blobInfo) {
                                if (!blobInfo || !blobInfo.ObjectID || !blobInfo.KeyID || blobInfo.TypeID == null || blobInfo.TypeID == undefined) {
                                    throw new Error("invalid parameters");
                                }

                                var surl = urlWEBAPI.concat(ESWEBAPI_URL.__POST_BODY_TO_ES00BLOB__);

                                
                                
                                var ht = $http({
                                    method: 'post',
                                    headers: prepareHeaders(),
                                    url: surl,
                                    data: blobInfo
                                });
                                return processWEBAPIPromise(ht);
                            },
                            /** 
                             * @ngdoc function
                             * @name es.Services.Web.esWebApi#downloadES00BlobByGID
                             * @methodOf es.Services.Web.esWebApi
                             * @kind function
                             * @description This function returns the arraybuffer for the document stored in **ES00Document** as **BLOBDATA** for a given by GID ES00Document record.
                             * 
                             * **REQUIRES ESWebAPIServer >= 1.9.7 and Entersoft Application Server >= 4.4.0.4**
                             * 
                             * @param {string} es00BlobGID The GID of the ES00Blob to be downloaded. Should the ES00Blob does not exist or the contents of the blob is empty 404 is returned.
                             * @param {string=} fExt Optional, the file extension of the related ES00Blob i.e. ".xlsx"
                             * @return {httpPromise} If success i.e. function(ret) { ...} the ret.data contains the **arraybuffer** of the contents of the ES00Blob identified by the parameters es00BlobGID
                             **/
                            downloadES00BlobByGID: function(es00BlobGID, fExt) {
                                if (!es00BlobGID) {
                                    throw new Error("Invalid parameter es00documentGID");
                                }
                                var surl = urlWEBAPI.concat(ESWEBAPI_URL.__DOWNLOAD_ES00BLOB_BY_GID__, es00BlobGID);

                                if (fExt) {
                                    surl += "?extType=" + fExt;
                                }

                                
                                

                                var httpConfig = {
                                    method: 'GET',
                                    headers: prepareHeaders({
                                        "Authorization": esGlobals.getWebApiToken(),
                                        "Accept": undefined
                                    }),
                                    url: surl,
                                    responseType: 'arraybuffer',
                                };
                                var ht = $http(httpConfig);
                                return processWEBAPIPromise(ht);
                            },

                            /**
                             * @ngdoc function
                             * @name es.Services.Web.esWebApi#downloadAssetURL
                             * @methodOf es.Services.Web.esWebApi
                             * @kind function
                             * @description Creates a URL that directly downalods the specified assetUrlPath.
                             * The download process is performed in chunks of 8KB buffer size, it is resumable and it also supports ranges.
                             * @param {string} assetUrlPath The string path of the asset to be downloaded. 
                             * @return {string} A complete URL for the asset to be downloaded.
                             */
                            downloadAssetURL: function(assetUrlPath) {
                                var surl = urlWEBAPI.concat(ESWEBAPI_URL.__DOWNLOAD_WEB_EAS_ASSET__, assetUrlPath);
                                surl += "?base64=false&webapitoken=" + esGlobals.getWebApiToken();
                                return surl;
                            },

                            /** 
                             * @ngdoc function
                             * @name es.Services.Web.esWebApi#fetchES00DocumentBlobDataByGID
                             * @methodOf es.Services.Web.esWebApi
                             * @kind function
                             * @description This function returns the arraybuffer for the document stored in **ES00Document** as **BLOBDATA** for a given by GID ES00Document record.
                             * 
                             * **REQUIRES ESWebAPIServer >= 1.7.9**
                             * 
                             * @param {string} es00DocumentGID The GID of the ES00Document record the blobdata of which we are looking for.
                             * @return {httpPromise} If success i.e. function(ret) { ...} the ret.data contains the **arraybuffer** of the contents of the file stored in **blobdata** in the ES00Document record specified by its GID key.
                             * @example
```js
```
                             **/
                            fetchES00DocumentBlobDataByGID: function(es00documentGID) {
                                var surl = urlWEBAPI.concat(ESWEBAPI_URL.__FETCH_ES00DOCUMENT_BLOBDATA_BY_GID__, es00documentGID);
                                
                                

                                var httpConfig = {
                                    method: 'GET',
                                    headers: prepareHeaders({
                                        "Authorization": esGlobals.getWebApiToken(),
                                        "Accept": undefined
                                    }),
                                    url: surl,
                                    responseType: 'arraybuffer',
                                };
                                var ht = $http(httpConfig);
                                return processWEBAPIPromise(ht);
                            },

                            /**
                             @ngdoc function
                             * @name es.Services.Web.esWebApi#getMimeTypes
                             * @methodOf es.Services.Web.esWebApi
                             * @kind function
                             * @description This function returns an array of JSON objects representing the Mime types that the ES WEB API server supports
                             * @return {object[]} Array of json objects of the form {mime: string, extension: string, IsText: boolean}
                             * @example
```js
esWebApi.getMimeTypes()
    .then(function(ret) {
        $scope.pMimeTypes = JSON.stringify(ret);
    },
    function(err) {
        $scope.pMimeTypes = JSON.stringify(err);
    });

// The result will be like:
[{
    "mime": "application/andrew-inset",
    "extension": ["ez"],
    "IsText": false
}, {
    "mime": "application/applixware",
    "extension": ["aw"],
    "IsText": false
}, {
    "mime": "application/atom+xml",
    "extension": ["atom"],
    "IsText": false
},
...
]

```
                             */
                            getMimeTypes: fGetMimeTypes,


                            /** 
                             * @ngdoc function
                             * @name es.Services.Web.esWebApi#fetchES00DocumentByGID
                             * @methodOf es.Services.Web.esWebApi
                             * @kind function
                             * @description This function returns the JSON object for the record of the ES00Document object that matches the es00DocumentGID parameter. 
                             * 
                             * **REQUIRES ESWebAPIServer >= 1.7.9**
                             * 
                             * @param {string} es00DocumentGID The GID of the ES00Document record that we are looking for
                             * @return {httpPromise} If success i.e. function(ret) { ...} the ret.data contains the JSON representation of the ES00Document record for the specific GID.
                             * The JSON object is of the form:
```js
// a sample document
var sampleDoc = {
    "GID": "cdb000bb-e7a1-49bf-a216-e11c192c3bcc",
    "Code": "0000029",
    "Title": "test",
    "Caption": "this is a caption",
    "EDate": "2015-09-21T00:00:00",
    "FType": ".pdf",
    "TableID": "ESTMTask",
    "TableName": "ESTMTask",
    "fGID": "611b490c-f3bc-4d33-9f55-03513e983e28",
    "UNCPath": "C:\\build\\ESDev\\out\\ERP-EL02-F45-Debug\\CSWebAssets\\test\\test.pdf",
    "OriginalPath": "C:\\build\\ESDev\\out\\ERP-EL02-F45-Debug\\CSWebAssets\\test\\test.pdf",
    "OriginalFN": "test",
    "fCompanyCode": "abc",
    "ESDModified": "0001-01-01T00:00:00",
    "ESDCreated": "2015-09-22T10:24:35.617",
    "ESUCreated": "ESMASTER",
    "IsBLOB": true,
    "Ingoing": false,
    "fRLSNodeGID": "00000000-0000-0000-0000-000000000000",
    "BLOBDATALength": 584849
};
```
                             * @example
```js
$scope.fetchES00DocumentByGID = function() {
    esWebApi.fetchES00DocumentByGID($scope.pES00Doc)
        .then(function(ret) {
                $scope.pES00DocResults = ret.data;
            },
            function(err) {
                $scope.pES00DocResults = err;
            });    
}
```

                             */
                            fetchES00DocumentByGID: function(es00DocumentGID) {
                                es00DocumentGID = es00DocumentGID ? es00DocumentGID.trim() : "";
                                var surl = urlWEBAPI.concat(ESWEBAPI_URL.__FETCH_ES00DOCUMENT_BY_GID__, es00DocumentGID);
                                
                                

                                var ht = $http({
                                    method: 'get',
                                    headers: prepareHeaders(),
                                    url: surl
                                });
                                return processWEBAPIPromise(ht);

                            },

                            /** 
                             * @ngdoc function
                             * @name es.Services.Web.esWebApi#fetchES00DocumentByCode
                             * @methodOf es.Services.Web.esWebApi
                             * @kind function
                             * @description This function returns the JSON object for the record of the ES00Document object that matches the es00DocumentCode parameter. 
                             * 
                             * **REQUIRES ESWebAPIServer >= 1.7.9**
                             * 
                             * @param {string} es00DocumentCode The Code of the ES00Document record that we are looking for
                             * @return {httpPromise} If success i.e. function(ret) { ...} the ret.data contains the JSON representation of the ES00Document record for the specific doc Code.
                             * The JSON object is of the form:
```js
// a sample document
var sampleDoc = {
    "GID": "cdb000bb-e7a1-49bf-a216-e11c192c3bcc",
    "Code": "0000029",
    "Title": "test",
    "Caption": "this is a caption",
    "EDate": "2015-09-21T00:00:00",
    "FType": ".pdf",
    "TableID": "ESTMTask",
    "TableName": "ESTMTask",
    "fGID": "611b490c-f3bc-4d33-9f55-03513e983e28",
    "UNCPath": "C:\\build\\ESDev\\out\\ERP-EL02-F45-Debug\\CSWebAssets\\test\\test.pdf",
    "OriginalPath": "C:\\build\\ESDev\\out\\ERP-EL02-F45-Debug\\CSWebAssets\\test\\test.pdf",
    "OriginalFN": "test",
    "fCompanyCode": "abc",
    "ESDModified": "0001-01-01T00:00:00",
    "ESDCreated": "2015-09-22T10:24:35.617",
    "ESUCreated": "ESMASTER",
    "IsBLOB": true,
    "Ingoing": false,
    "fRLSNodeGID": "00000000-0000-0000-0000-000000000000",
    "BLOBDATALength": 584849
};
```
                             * @example
```js
$scope.fetchES00DocumentByCode = function() {
    esWebApi.fetchES00DocumentByCode($scope.pES00Doc)
        .then(function(ret) {
                $scope.pES00DocResults = ret.data;
            },
            function(err) {
                $scope.pES00DocResults = err;
            });    
}
```
                             */
                            fetchES00DocumentByCode: function(es00DocumentCode) {
                                es00DocumentCode = es00DocumentCode ? es00DocumentCode.trim() : "";
                                var surl = urlWEBAPI.concat(ESWEBAPI_URL.__FETCH_ES00DOCUMENT_BY_CODE__, es00DocumentCode);
                                
                                

                                var ht = $http({
                                    method: 'get',
                                    headers: prepareHeaders(),
                                    url: surl
                                });
                                return processWEBAPIPromise(ht);

                            },

                            /** 
                             * @ngdoc function
                             * @name es.Services.Web.esWebApi#fetchES00DocumentsByEntityGID
                             * @methodOf es.Services.Web.esWebApi
                             * @kind function
                             * @description This function returns an array of JSON objects for the records of type ES00Document that belong to entity with GID equal to entityGID. 
                             * 
                             * **REQUIRES ESWebAPIServer >= 1.7.9**
                             * 
                             * @param {string} entityGID The GID of the entity for which we want to get all the registered ES00Documents
                             * @return {httpPromise} If success i.e. function(ret) { ...} the ret.data contains the array of the JSON representation of the ES00Document records for the specific entity.
                             * The JSON object is of the form:
```js
// a sample document
var listOfDocs = [{
    "GID": "cdb000bb-e7a1-49bf-a216-e11c192c3bcc",
    "Code": "0000029",
    "Title": "test",
    "Caption": "this is a caption",
    "EDate": "2015-09-21T00:00:00",
    "FType": ".pdf",
    "TableID": "ESTMTask",
    "TableName": "ESTMTask",
    "fGID": "611b490c-f3bc-4d33-9f55-03513e983e28",
    "UNCPath": "C:\\build\\ESDev\\out\\ERP-EL02-F45-Debug\\CSWebAssets\\test\\test.pdf",
    "OriginalPath": "C:\\build\\ESDev\\out\\ERP-EL02-F45-Debug\\CSWebAssets\\test\\test.pdf",
    "OriginalFN": "test",
    "fCompanyCode": "abc",
    "ESDModified": "0001-01-01T00:00:00",
    "ESDCreated": "2015-09-22T10:24:35.617",
    "ESUCreated": "ESMASTER",
    "IsBLOB": true,
    "Ingoing": false,
    "fRLSNodeGID": "00000000-0000-0000-0000-000000000000",
    "BLOBDATALength": 584849
},
//...
// ...
]};
```
                             * @example
```js
$scope.fetchES00DocumentsByEntityGID = function() {
    esWebApi.fetchES00DocumentsByEntityGID($scope.pES00Doc)
        .then(function(ret) {
                $scope.pES00DocResults = ret.data;
            },
            function(err) {
                $scope.pES00DocResults = err;
            });    
}
```
                             */
                            fetchES00DocumentsByEntityGID: function(entityGID) {
                                entityGID = entityGID ? entityGID.trim() : "";
                                var surl = urlWEBAPI.concat(ESWEBAPI_URL.__FETCH_ES00DOCUMENT_BY_ENTITYGID__, entityGID);
                                
                                

                                var ht = $http({
                                    method: 'get',
                                    headers: prepareHeaders(),
                                    url: surl
                                });
                                return processWEBAPIPromise(ht);
                            },

                            /**
                             * @ngdoc function
                             * @name es.Services.Web.esWebApi#deleteES00Document
                             * @methodOf es.Services.Web.esWebApi
                             * @kind function
                             * @description Deletes the ES00DocumentInfo record as specified by the parameters and returns the current set of ES00Documents
                             * that are corelated to the specified Entity object
                             * @param {object} es00Document The JSON object representation of the ES00Documen to be deleted. The following attributes are mandatory:
                             * * __GID__
                             * * __TableID__
                             * * __TableName__
                             * * __fGID__
                             * @example
```js
 $scope.deleteES00Document = function() {
    esWebApi.deleteES00Document($scope.pEntityType, $scope.pEntityGID, $scope.pDocumentGID)
        .then(function(ret) {
                $scope.pES00DocResults = ret.data;
            },
            function(err) {
                $scope.pES00DocResults = err;
            });
}
```
                             */
                            deleteES00Document: function(es00Document) {
                                es00Document = es00Document || {};

                                if (!es00Document.TableID || !es00Document.TableName || !es00Document.GID || !es00Document.fGID) {
                                    throw new Error("Invalid parameter. One or more of the properties TableID, TableName, fGID and GID are not specified");
                                }

                                var surl = urlWEBAPI.concat(ESWEBAPI_URL.__DELETE_ES00DOCUMENT__);
                                
                                

                                var ht = $http({
                                    method: 'post',
                                    headers: prepareHeaders(),
                                    url: surl,
                                    data: es00Document
                                });
                                return processWEBAPIPromise(ht);
                            },

                            /**
                             * @ngdoc function
                             * @name es.Services.Web.esWebApi#proxyExportSaveFile
                             * @methodOf es.Services.Web.esWebApi
                             * @kind function
                             * @description Function that returns the full URL that acts as a POST proxy for downloading files, in cases where the 
                             * client generated file cannot be savedAs by the local browser (i.e. Safari on iOS, etc).
                             * @param {string=} proxyType The proxyType instructs the WEB API Server what sort of processing should to the POST payload. 
                             * if empty or "telerik" the POST payload for body should conform to Telerik's documentation for proxyUrl
                             * @return {string} Returns the full URL to the Entersoft Web API server that will execute the actual POST request. 
                             */
                            proxyExportSaveFile: function(proxyType) {
                                var surl = urlWEBAPI.concat(ESWEBAPI_URL.__EXPORT_PROXY_SAVEFILE__);
                                surl += "?webapitoken=" + esGlobals.getWebApiToken();
                                if (proxyType) {
                                    surl += "&proxyType=" + proxyType;
                                }
                                return surl;
                            },

                            /**
                             * @ngdoc function
                             * @name es.Services.Web.esWebApi#addOrUpdateES00Document
                             * @methodOf es.Services.Web.esWebApi
                             * @kind function
                             * @description Deletes the ES00DocumentInfo record as specified by the parameters and returns the current set of ES00Documents
                             * that are corelated to the specified Entity object. 
                             * 
                             * __ATTENTION__ 
                             * 
                             * This method requires the ngFileUpload module of AngularJS. In order to use it you must make sure that the appropriate js libraries have been loaded.
                             * For example, in the main html file e.g. index.html of the AngularJS application you have to include the ng-file-upload/ng-file-upload-shim.min.js prior to loading the angular library
                             * and the ng-file-upload/ng-file-upload.min.js just after the Angular library has been loaded, as shown in the example below:
```html
    <script src="bower_components/ng-file-upload/ng-file-upload-shim.min.js"></script>
    <script src="bower_components/angular/angular.js"></script>
    <script src="bower_components/ng-file-upload/ng-file-upload.min.js"></script>
```
                             * Also in your application Angular controller module or application module you should also require the ngFileUpload module as 
                             * shown in the code below:
```js
    var smeControllers = angular.module('smeControllers', ['kendo.directives', 'underscore', 'es.Web.UI', 'ui.bootstrap', 'uiGmapgoogle-maps', 'ngFileUpload']);
```
                             * And in the AngularJS application controller function you should inject the _Upload_ service as shown below:
```js
    smeControllers.controller('examplesCtrl', ['$log', '$q', '$scope', 'Upload', 'esWebApi', 'esUIHelper', 'esGlobals', 'esCache', 'esGeoLocationSrv', 'uiGmapGoogleMapApi',
    function($log, $q, $scope, Upload, esWebApi, esWebUIHelper, esGlobals, esCache, esGeoLocationSrv, GoogleMapApi) {
        // your application code
        // goes here
}
```
                             * @param {object} doc The JSON object representation of the ES00Document to be added or updated (in case that it exists)
                             * @param {file} file The file object holding the value of the <input> element of type file
                             * @param {function=} okfunc a function that will be called when the upload is completed
                             * @param {function=} errfunc a function that will called should an error occurs while uploading the file
                             * @param {function=} progressfunc a function that will be called as many times as necessary to indicate the progress of the
                             * uploading of the file i.e. to inform the user about the percentage of the bytes that have been uploaded so far
                             * @return {Upload} An object of type Upload. For detailed documentation please visit {@link https://github.com/danialfarid/ng-file-upload ng-file-upload}.
                             * @example
```js
 $scope.uploadPic = function(myFile) {
    var okf = function(retFile) {
        $log.info("file uploaded ....");
    };

    var errf = function(response) {
        if (response.status > 0)
            $scope.errorMsg = response.status + ': ' + response.data;
        else {
            $scope.errorMsg = "Ooops something wnet wrong";
        }
        $log.error($scope.errorMsg);
    };

    var progressf = function(evt) {
        myFile.progress = Math.min(100, parseInt(100.0 * evt.loaded / evt.total));
    };

    var doc = {
        "GID": "3536eaa3-6c67-4d15-a8d9-3519711969c9",
        "Title": "Hello File",
        "Description": $scope.username,
        "Caption": "Tehcnical Guide for Hello File",
        "OriginalFN": "xxx.pdf"
    };

    esWebApi.addES00Document(doc, myFile, okf, errf, progressf);
}
```
                             */
                            addOrUpdateES00Document: function(doc, file, okfunc, errfunc, progressfunc) {
                                
                                

                                if (!file) {
                                    throw new Error("Invalid File");
                                }

                                var Upload = $injector.get('Upload');
                                if (!Upload) {
                                    throw new Error("You have to include the ngFileUpload");
                                }

                                file.upload = Upload.upload({
                                    url: urlWEBAPI.concat(ESWEBAPI_URL.__ADD_OR_UPDATE_ES00DOCUMENT_BLOBDATA__),
                                    method: 'POST',
                                    headers: prepareHeaders(),
                                    fields: {
                                        esdoc: JSON.stringify(doc)
                                    },
                                    file: file,
                                });


                                file.upload.then(function(response) {
                                    $timeout(function() {
                                        file.result = response.data;
                                        okfunc(file);
                                    });
                                }, errfunc);

                                file.upload.progress(progressfunc);

                                return file.upload;

                            },

                            sendSMS: function(smsObject) {
                                if (!smsObject || !smsObject.Body || ((smsObject.Recipients || []).length == 0)) 
                                {
                                    throw new Error("Invalid smsObject");
                                }

                                var surl = urlWEBAPI.concat(ESWEBAPI_URL.__SEND_SMS__);
                                var ht = $http({
                                    method: 'post',
                                    headers: prepareHeaders(),
                                    url: surl,
                                    data: smsObject
                                });
                                return processWEBAPIPromise(ht);
                            },

                            /**
                             * @ngdoc function
                             * @name es.Services.Web.esWebApi#fetchDeviceInfo
                             * @methodOf es.Services.Web.esWebApi
                             * @kind function
                             * @description Retrieves information for the ES00Device identified by the parameter deviceCode.
                             * @param {string} deviceCode The Code (Device code, which typically is the DeviceID as supplied by the mobile device application. This is NOT Device GID).
                             * @return {object} The datase in JSON representation for the given device. If the user that send this request is not an EBS administrator then data is returned only if the device identified
                             * by the deviceCode belongs to the user issueing this request. Otheriwise, the result will be empty.
                             */
                            fetchDeviceInfo: function(deviceCode) {
                                if (!deviceCode) {
                                    throw new Error("Invalid deviceCode");
                                }

                                var surl = urlWEBAPI.concat(ESWEBAPI_URL.__FETCH_ES00DEVICE__, deviceCode);
                                
                                

                                var ht = $http({
                                    method: 'get',
                                    headers: prepareHeaders(),
                                    url: surl
                                });
                                return processWEBAPIPromise(ht);
                            },
                        }
                    }
                ]
            }
        }
    );

}());
(function() {
    'use strict';

    var underscore = angular.module('underscore', []);
    underscore.factory('_', function() {
        return window._; //Underscore must already be loaded on the page 
    });

    var version = "3.1.4";
    var vParts = _.map(version.split("."), function(x) {
        return parseInt(x);
    });

    var esAngularAPIVer = {
        Major: vParts[0],
        Minor: vParts[1],
        Patch: vParts[2]
    };

    var esUISettings = {
        mobile: undefined
    };

    var esWebFramework = angular.module('es.Services.Web');


    /**
     * @ngdoc service
     * @name es.Services.Web.esCacheProvider
     * @kind provider
     * @description
     * esCacheProvider exposes a set of functions that can be used to configure the esCache servive prior to its use. Configuration usually takes place
     * at the _app.js_ file of the AngularJS SPA in the _app.config_ function.
     */

    /**
     * @ngdoc service
     * @name es.Services.Web.esCache
     * @module es.Services.Web
     * @kind provider
     * @description
     * esCache is a service that provides chachinf functionality to the Entersoft AngularJS API library that can be also used from the application developer
     * for the needs of his/her Single Page Application. Although, the functions offered by the service are not specific to any of the publicly 
     * available javascript libraries, the current version of the service relies on jscache, but this can change any time in the future with 100%
     * compatibility to the functions offered by the service i.e. the exposed functions and their signature is an **interface** to the client developer, but not the
     * implementation.
     */
    esWebFramework.provider('esCache', function() {
        var cache = null;
        var settings = {
            capacity: Number.MAX_VALUE,
            storageMode: 'memory'
        };

        return {
            /**
             * @ngdoc function
             * @name es.Services.Web.esCacheProvider#setCapacity
             * @methodOf es.Services.Web.esCacheProvider
             * @module es.Services.Web
             * @kind function
             * @description This function is used to set the maximum number of items that the cache can hold.
             * @param {number} size the maximum number of items that the cache can hold. If parameter does not resolve to a number it is set to Number.MAX_VALUE i.e. 
             * **no limitation** in the number of cache items.
             **/
            setCapacity: function(size) {
                if (angular.isNumber(size)) {
                    settings.capacity = size;
                } else {
                    settings.capacity = Number.MAX_VALUE;
                }
            },

            /**
             * @ngdoc function
             * @name es.Services.Web.esCacheProvider#getCapacity
             * @methodOf es.Services.Web.esCacheProvider
             * @module es.Services.Web
             * @kind function
             * @description This function returns the current maxsize for the cache.
             * @return {number} the maxSize that cache engine has been set to.
             **/
            getCapacity: function() {
                return settings.capacity;
            },

            /**
             * @ngdoc function
             * @name es.Services.Web.esCacheProvider#getSettings
             * @methodOf es.Services.Web.esCacheProvider
             * @module es.Services.Web
             * @kind function
             * @description This function returns the storage object that cache engine has been configured to use, if any.
             * @return {Object} The storage object that cache engine has been configured to use, if any.
             **/
            getSettings: function() {
                return settings;
            },

            /**
             * @ngdoc function
             * @name es.Services.Web.esCacheProvider#setStorageSettings
             * @methodOf es.Services.Web.esCacheProvider
             * @module es.Services.Web
             * @kind function
             * @description This function sets the storage object to be used as a 2nd level cache by the cache engine.
             * @param {Object} storage The storage object to be used by the cache engine for 2nd level cache.
             **/
            setStorageSettings: function(storage) {
                if (settings) {
                    settings.storageMode = storage || 'memory';
                }
            },

            $get: ['$cacheFactory', function($cacheFactory) {

                cache = $cacheFactory('esCache', settings);

                return {
                    /**
                     * @ngdoc function
                     * @name es.Services.Web.esCache#getItem
                     * @methodOf es.Services.Web.esCache
                     * @module es.Services.Web
                     * @kind function
                     * @description This function is used to get a value that might exist in the cache under the unique id **key**.
                     * @param {Object|string} key Typically _key_ is of type string but it can be an object.
                     * @return {Object} If the key exists in the cache, the value of that key is returned, otherwise _undefined_
                     **/
                    getItem: function(key) {
                        return cache.get(key);
                    },

                    /**
                     * @ngdoc function
                     * @name es.Services.Web.esCache#setItem
                     * @methodOf es.Services.Web.esCache
                     * @module es.Services.Web
                     * @kind function
                     * @description This function is used to set a key, value pair in the cache. If the key is already in the cache, its value will 
                     * be replaced by the new value i.e. val
                     * @param {Object|string} key Typically _key_ is of type string but it can be an object.
                     * @param {Object} val The value to be stored under the key
                     * @param {Object=} options Caching options. For more information please visit [monsur jscache](https://github.com/monsur/jscache).
                     **/
                    setItem: function(key, val, options) {
                        cache.put(key, val);
                    },

                    /**
                     * @ngdoc function
                     * @name es.Services.Web.esCache#removeItem
                     * @methodOf es.Services.Web.esCache
                     * @module es.Services.Web
                     * @kind function
                     * @description This function is used to remove an entry from the cache identified by **key**
                     * @param {Object|string} key Typically _key_ is of type string but it can be an object.
                     **/
                    removeItem: function(key) {
                        cache.remove(key);
                    },


                    /**
                     * @ngdoc function
                     * @name es.Services.Web.esCache#clear
                     * @methodOf es.Services.Web.esCache
                     * @module es.Services.Web
                     * @kind function
                     * @description This function clears the cache, by removing **ALL** its entries.
                     **/
                    clear: function() {
                        cache.removeAll();
                    },

                    /**
					 * @ngdoc function
					 * @name es.Services.Web.esCache#stats
					 * @methodOf es.Services.Web.esCache
					 * @module es.Services.Web
					 * @kind function
					 * @description This function returns cache statistics
					 * @return {object} It returns an object holding all cache statistics i.e.
```js
{
"hits": 5,
"misses": 1
}

```
					 **/
                    stats: function() {
                        return cache.info();
                    }
                }
            }]

        }

    });


    /**
     * @ngdoc service
     * @name es.Services.Web.esMessaging
     * @kind factory
     * @description
     * esMessaging is a factory service that provides all the primitive functions for a publisher-subscribers messaging event system that its is not based 
     * on the AngularJS events or watch pattern but in pure callaback function pattern.
     */
    esWebFramework.factory('esMessaging', function() {
        //#region Internal Properties
        var cache = {};

        //#endregion

        //#region Internal Methods
        function publish() {
            if (!arguments || arguments.Length < 1) {
                throw "Publishing events requires at least one argument for topic id";
            }

            var topic = arguments[0];
            var restArgs = Array.prototype.slice.call(arguments, 1);

            cache[topic] && angular.forEach(cache[topic], function(callback) {
                try {
                    callback.apply(null, restArgs);
                } catch (exc) {
                    console.log("Error in messaging handler for topic ", topic);
                }
            });
        }

        function subscribe(topic, callback) {
            if (!cache[topic]) {
                cache[topic] = [];
            }
            cache[topic].push(callback);
            return [topic, callback];
        }

        function unsubscribe(handle) {
            var t = handle[0];
            cache[t] && angular.forEach(cache[t], function(idx) {
                if (idx == handle[1]) {
                    cache[t].splice(idx, 1);
                }
            });
        }

        //#endregion

        // Define the functions and properties to reveal.
        var service = {

            /**
			 * @ngdoc function
			 * @name es.Services.Web.esMessaging#publish
			 * @methodOf es.Services.Web.esMessaging
			 * @module es.Services.Web
			 * @kind function
			 * @description This function is used to raise - publish that an event-topic has occurred. As a consequence, all the subscribed to 
			 * this topic-event subsciption callback functions will be triggered and executed sequentially.
			 * @param {object} args One or more arguments, with the first being the string for the topic-event that occurred. The rest of the arguments
			 * if any will be supplied to the callback functions that will be fired. These extra arguments are considered to be specific to the nature 
			 * of the topic-event.
			 * @example
			 * esMessaging is also used by the Entersoft AngularJS API in order to implement the login, logout, session expired, etc. logical events
			 * that need to be handled and properly managed in any application based on the API. 
			 *
			 * This call is used by the API to publish an event that occured. The topic-event is the "AUTH_CHANGED" and it is this event-topic that any interested in 
			 * party should subscribe to in order to be notified whenever this event occurs. The rest arguments, i.e. esClientSession and getAuthToken(model) are the
			 * parameters that will be supplied to the callback functions that have been registered to this topic-event.
```js
esMessaging.publish("AUTH_CHANGED", esClientSession, getAuthToken(model));
```
			 **/
            publish: publish,


            /**
			 * @ngdoc function
			 * @name es.Services.Web.esMessaging#subscribe
			 * @methodOf es.Services.Web.esMessaging
			 * @module es.Services.Web
			 * @kind function
			 * @description This function is used to subscribe to a specific event-topic and register a callback function to be called (i.e. fired)
			 * once the event-topic is being raised - published.
			 * @param {string} topic the event name to which this function will subscribe to the callback
			 * @param {function} callback the callback function that will be fired once this event-topic is being **raised - published**
			 * @return {object} An object representic the handle to this specific subscription instance. 
			 * If you need to unsubscribe from this event-topic then you need to store the returned handle value, otherwise you do not need to keep the result
			 * @example
			 * In a controller, typically the root controller of an ng-app, we need to register for the "AUTH_CHANGED" topic event in order to properly configure and
			 * handle the logic of our application depending on the current login / authentication state with the Entersoft Application Server. For this, we need to
			 * use the subscribe function as in the example below:
```js
smeControllers.controller('mainCtrl', ['$location', '$scope', '$log', 'esMessaging', 'esWebApi', 'esGlobals',
function($location, $scope, $log, esMessaging, esWebApiService, esGlobals) {

	// ... other things

	esMessaging.subscribe("AUTH_CHANGED", function(sess, apitoken) {
			$scope.esnotify.error(s);
	});
}
]);
```
			*  
			**/
            subscribe: subscribe,

            /**
             * @ngdoc function
             * @name es.Services.Web.esMessaging#unsubscribe
             * @methodOf es.Services.Web.esMessaging
             * @module es.Services.Web
             * @kind function
             * @description This function is used to unsubscribe from an event-topic to which there was a subscription with the subscribe function
             * @param {object} handle The handle that the subscribe function returned as a result when we first did the subscription.
             **/
            unsubscribe: unsubscribe
        };

        return service;
    });

    /**
     * @ngdoc service
     * @name es.Services.Web.esGeoLocationSrv
     * @requires $q
     * @requires $window
     * @kind factory
     * @description
     * esGeoLocationSrv is a factory service that provides Html5 geolocation services to the API developer.
     */
    esWebFramework.factory('esGeoLocationSrv', ['$q', '$window', function($q, $window) {
        'use strict';

        function getCurrentPosition() {
            var deferred = $q.defer();

            if (!$window.navigator.geolocation) {
                deferred.reject('Geolocation not supported.');
            } else {
                $window.navigator.geolocation.getCurrentPosition(
                    function(position) {
                        deferred.resolve(position);
                    },
                    function(err) {
                        deferred.reject(err);
                    });
            }

            return deferred.promise;
        }

        return {
            getCurrentPosition: getCurrentPosition
        };
    }]);


    /**
     * @ngdoc service
     * @name es.Services.Web.esGlobals
     * @requires $sessionStorage
     * @requires $log
     * @requires $injector
     * @requires es.Services.Web.esMessaging
     * @kind factory
     * @description
     * esGlobals is a factory service that provides functions, constructs and messaging events for common _global_ nature in the context of a typical
     * AngularJS SPA based on Entersoft AngularJS API.
     */
    esWebFramework.factory('esGlobals', ['$translate', '$rootScope', '$sessionStorage', '$log', 'esMessaging', 'esCache', '$injector',
        function($translate, $rootScope, $sessionStorage, $log, esMessaging, esCache, $injector) {

            var esDateRangeOptions = [];
            var esComplexParamFunctionOptions = [];
            var esYesNoTrans = [];
            var esOperTrans = [];

            $rootScope.$on('$translateChangeSuccess', function() {

                esYesNoTrans = $translate.instant([
                    "ESUI.BOOLEAN.YES",
                    "ESUI.BOOLEAN.NO"
                ]);

                esOperTrans = $translate.instant([
                    "ESCOMPLEX.EQ",
                    "ESCOMPLEX.NE",
                    "ESCOMPLEX.LT",
                    "ESCOMPLEX.LE",
                    "ESCOMPLEX.GT",
                    "ESCOMPLEX.GE",
                    "ESCOMPLEX.RANGE",
                    "ESCOMPLEX.NULL",
                    "ESCOMPLEX.NOTNULL",
                    "ESCOMPLEX.FROM",
                    "ESCOMPLEX.TO",

                    "ESDATE_RANGE.SDR",
                    "ESDATE_RANGE.SD",
                    "ESDATE_RANGE.ANY",
                    "ESDATE_RANGE.TODAY",
                    "ESDATE_RANGE.UTD",
                    "ESDATE_RANGE.SFTD",
                    "ESDATE_RANGE.YTD",
                    "ESDATE_RANGE.UTYD",
                    "ESDATE_RANGE.TMR",
                    "ESDATE_RANGE.SFTR",
                    "ESDATE_RANGE.CW",
                    "ESDATE_RANGE.PW",
                    "ESDATE_RANGE.NW",
                    "ESDATE_RANGE.CM",
                    "ESDATE_RANGE.PM",
                    "ESDATE_RANGE.NM",
                    "ESDATE_RANGE.SFM",
                    "ESDATE_RANGE.UEM",
                    "ESDATE_RANGE.SFLM",
                    "ESDATE_RANGE.UELM",
                    "ESDATE_RANGE.CQ",
                    "ESDATE_RANGE.PQ",
                    "ESDATE_RANGE.CSM",
                    "ESDATE_RANGE.PSM",
                    "ESDATE_RANGE.CY",
                    "ESDATE_RANGE.PY",
                    "ESDATE_RANGE.CFP",
                    "ESDATE_RANGE.SSFYUTD",
                    "ESDATE_RANGE.SFYTEFP",
                    "ESDATE_RANGE.PFP",
                    "ESDATE_RANGE.SLFPUTD",
                    "ESDATE_RANGE.SFYULFP"
                ]);

                esComplexParamFunctionOptions = [{
                    caption: "=",
                    value: "EQ"
                }, {
                    caption: "<>",
                    value: "NE"
                }, {
                    caption: "<",
                    value: "LT"
                }, {
                    caption: "<=",
                    value: "LE"
                }, {
                    caption: ">",
                    value: "GT"
                }, {
                    caption: ">=",
                    value: "GE"
                }, {
                    caption: "[]",
                    value: "RANGE"
                }, {
                    caption: "Κενό",
                    value: "NULL"
                }, {
                    caption: "Μη κενό",
                    value: "NOTNULL"
                }];

                _.map(esComplexParamFunctionOptions, function(x) {
                    x.caption = esOperTrans["ESCOMPLEX." + x.value];
                });

                esDateRangeOptions = [{
                    dValue: "0",
                    dType: 0,
                    title: esOperTrans["ESDATE_RANGE.SDR"]
                }, {
                    dValue: "1",
                    dType: 1,
                    title: esOperTrans["ESDATE_RANGE.SD"]
                }, {
                    dValue: 'ESDateRange(SpecificDate, #9999/01/01#, SpecificDate, #1753/01/01#)',
                    dType: 2,
                    title: esOperTrans["ESDATE_RANGE.ANY"]
                }, {
                    dValue: "ESDateRange(Day)",
                    dType: 3,
                    title: esOperTrans["ESDATE_RANGE.TODAY"]
                }, {
                    dValue: 'ESDateRange(SpecificDate, #1753/01/01#, Day, 0)',
                    dType: 4,
                    title: esOperTrans["ESDATE_RANGE.UTD"]
                }, {
                    dValue: 'ESDateRange(Day, 0, SpecificDate, #9999/01/01#)',
                    dType: 5,
                    title: esOperTrans["ESDATE_RANGE.SFTD"]
                }, {
                    dValue: "ESDateRange(Day, -1)",
                    dType: 6,
                    title: esOperTrans["ESDATE_RANGE.YTD"]
                }, {
                    dValue: 'ESDateRange(SpecificDate, #1753/01/01#, Day, -1)',
                    dType: 7,
                    title: esOperTrans["ESDATE_RANGE.UTYD"]
                }, {
                    dValue: "ESDateRange(Day, 1)",
                    dType: 8,
                    title: esOperTrans["ESDATE_RANGE.TMR"]
                }, {
                    dValue: 'ESDateRange(Day, 1, SpecificDate, #9999/01/01#)',
                    dType: 9,
                    title: esOperTrans["ESDATE_RANGE.SFTR"]
                }, {
                    dValue: "ESDateRange(Week)",
                    dType: 10,
                    title: esOperTrans["ESDATE_RANGE.CW"]
                }, {
                    dValue: "ESDateRange(Week, -1)",
                    dType: 11,
                    title: esOperTrans["ESDATE_RANGE.PW"]
                }, {
                    dValue: "ESDateRange(Week, 1)",
                    dType: 12,
                    title: esOperTrans["ESDATE_RANGE.NW"]
                }, {
                    dValue: "ESDateRange(Month)",
                    dType: 13,
                    title: esOperTrans["ESDATE_RANGE.CM"]
                }, {
                    dValue: 'ESDateRange(Month, 0, SpecificDate, #9999/01/01#)',
                    dType: 14,
                    title: esOperTrans["ESDATE_RANGE.SFM"]
                }, {
                    dValue: 'ESDateRange(SpecificDate, #1753/01/01#, Month, 0)',
                    dType: 15,
                    title: esOperTrans["ESDATE_RANGE.UEM"]
                }, {
                    dValue: "ESDateRange(Month, -1)",
                    dType: 16,
                    title: esOperTrans["ESDATE_RANGE.PM"]
                }, {
                    dValue: 'ESDateRange(Month, -1, SpecificDate, #9999/01/01#)',
                    dType: 17,
                    title: esOperTrans["ESDATE_RANGE.SFLM"]
                }, {
                    dValue: 'ESDateRange(SpecificDate, #1753/01/01#, Month, -1)',
                    dType: 18,
                    title: esOperTrans["ESDATE_RANGE.UELM"]
                }, {
                    dValue: "ESDateRange(Quarter)",
                    dType: 19,
                    title: esOperTrans["ESDATE_RANGE.CQ"]
                }, {
                    dValue: "ESDateRange(Quarter, -1)",
                    dType: 20,
                    title: esOperTrans["ESDATE_RANGE.PQ"]
                }, {
                    dValue: "ESDateRange(SixMonth)",
                    dType: 21,
                    title: esOperTrans["ESDATE_RANGE.CSM"]
                }, {
                    dValue: "ESDateRange(SixMonth, -1)",
                    dType: 22,
                    title: esOperTrans["ESDATE_RANGE.PSM"]
                }, {
                    dValue: "ESDateRange(Year)",
                    dType: 23,
                    title: esOperTrans["ESDATE_RANGE.CY"]
                }, {
                    dValue: "ESDateRange(Year, -1)",
                    dType: 24,
                    title: esOperTrans["ESDATE_RANGE.PY"]
                }, {
                    dValue: "ESDateRange(FiscalPeriod)",
                    dType: 25,
                    title: esOperTrans["ESDATE_RANGE.CFP"]
                }, {
                    dValue: "ESDateRange(FiscalYear, 0, Day, 0)",
                    dType: 26,
                    title: esOperTrans["ESDATE_RANGE.SSFYUTD"]
                }, {
                    dValue: "ESDateRange(FiscalYear, 0, FiscalPeriod, 0)",
                    dType: 27,
                    title: esOperTrans["ESDATE_RANGE.SFYTEFP"]
                }, {
                    dValue: "ESDateRange(FiscalPeriod, -1)",
                    dType: 28,
                    title: esOperTrans["ESDATE_RANGE.PFP"]
                }, {
                    dValue: "ESDateRange(FiscalPeriod, -1, Day, 0)",
                    dType: 29,
                    title: esOperTrans["ESDATE_RANGE.SLFPUTD"]
                }, {
                    dValue: "ESDateRange(FiscalYear, 0, FiscalPeriod, -1)",
                    dType: 30,
                    title: esOperTrans["ESDATE_RANGE.SFYULFP"]
                }, ];

            });

            var _esSupportedLanguages = [{
                    id: "el-GR",
                    title: "Ελληνικά (GR)",
                    icon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAAE3SURBVHjapJOxSgNBEEDfspsoiSaSIgat5CwsRCT2goqNnb9h4S+olSiWFjZWthYKaiUJaH7A6kRitJEjigiJXsjlzrGJuSJBueQ1y7Izw5vdHSUiDIIC4sBIe42CB3waIL10VHil6VPYXAVg+fAaYhq+/7YrbqxkDZAMGi0WJsY6B/PZFCqmWZ/N9VQW4K32RRGSCrBEpNxX/0pNG4AgCNBadwWsHd/0TMwk4jy/1zp7a2brVBb3r+SXue0zye9dyl+4riuAZQBaBJTrjU7FR7eJ8QNyO+co1W2QGo5hWmG85TiORMVxnNAgf3CByYzjev7/NyeQGDL4H9XQwLbtyAa2bYcGJ7d3TFWbkZ7w6eEeAAN4u6UKlCr9fAVPAWlgEhiNmFwHXhSg24OkIxYIAE8NOs4/AwC7uO3xQbABsAAAAABJRU5ErkJggg=="
                }, {
                    id: "en-US",
                    title: "English (US)",
                    icon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAAFuSURBVHjapJM/SEJRGMV/Lx9lWGoENjhkOCVBBUYRUUNZ0aBE2VbQHOLaoBA4GrRGEIoIgdLQ1GASGlTjW2oI4U06GCTRH8yQ2yKKPIdeHbj8uMN37uHjHkkIwX8kAd1AX4N6VAPeZcDi8RyV/f4Z0ul7OtF/dtjRYeD63CYBjuPjW7VQKLKw4CKXe9QwGt3sHF+SRmTAkEzeEAyuEovn8XndxON5vF43sVgOn2+K1/XdtsGuwQG+H54ADDLAxsY0qdQdK8sTJBJ5trZm27hzFdO8Xq/XQZaRAU5PswQCa5ycZNnentfwZXyxPbrVwmf5uXl3HhxciOHhfREOXwqrNahhJ1UqFQE4AZx2+56IRDLCbA6IUOhSw3Kvo+0828bEw5CrZaCqqtArVVUF4JQBSqNzmIwmRPXrd7/P2EOp+tHagaIouhMoitJMUCtPLpH5WxVqEmAB7EC/zuE3oCgBhkaRDDoN6kBN+m+dfwYAI5QcdaFOn+AAAAAASUVORK5CYII="
                },

                {
                    id: "ro-RO",
                    title: "Românesc (RO)",
                    icon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAAFTSURBVHjapJM9TgMxEEafs5sgSEgEBUJwBAQNJ+AaVNyJI0BLRc8NEIgaQVIAEgKym0Ra/+x6KIhiO9BEWBpZn2w/fx7PKBHhP0MBHaA3n1cZFpjlwODk7PJ9efXm/CLRb6e9X4S966udHOg2jef4YDddzY4SuXa4HpkWzP0DQDcHMusaJjPDZ1GFE34IyOKQG3UDe3sLcQ4gywGMdYwnmvFEB4AUiQNf1EG0WtTGAJADVJXho6gop4bFr0ixsAvgyyYYAlylY0DF46ihnJroyqfEgXseBAP9PlWeBYDWGslzfFITPk1qE7S4Gu1sBDCGjA28jwASAwR80Kp2mJ8k0gIwusJ7Qc1frRbfFYUKIV7QNkqitZaOFzrtLKrRpcLstIMf8RgbnmBFPNOvYbL/9q5M9Gvp/yxnBQyAfWBzxV6YAi8KyOaNlK0IaACr/tvO3wMAJOGiBWzsFlIAAAAASUVORK5CYII="
                },

                {
                    id: "bg-BG",
                    title: "Bulgară (BG)",
                    icon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAADmSURBVHjapJM9TsQwEIW/SeIsIUCklaBBXAWuxFnoqDkOHRegQEgIpAUWlMTD2kNBoixdfl4zcvG+8dhvxMxYIgFy4KirU6TAdwZUZvY6q7vIWQKUCyYoEyBdAEgTgBDCZGfvyQCu7q45rdZsfY1hey8s/869qlXJ2+dmADSt59Fe2Go9qvtJfkjqbR9Qk7gV0eIowC7u0NYPgNubey5cTmyaUYCkKHj6US57QKuKZQ5ERgHMjFZ1uIH3Hg4KxLlxXxDjn6cDaDDj4eN9Tg5UgAo4B44nmr+AZ+mSmM9IZABUlq7z7wChM1nCssShPAAAAABJRU5ErkJggg=="
                }
            ];

            function fGetesDateRangeOptions(dateRangeClass) {
                if (!dateRangeClass || !dDateRangeClass[dateRangeClass]) {
                    return esDateRangeOptions;
                }

                var arr = dDateRangeClass[dateRangeClass];
                if (!_.isArray(arr) || arr.length == 0) {
                    return esDateRangeOptions;
                }

                var x = [];
                var i;
                for (i = 0; i < arr.length; i++) {
                    x[i] = esDateRangeOptions[arr[i]];
                }
                return x;
            }

            function suggestESLanguageID(locale) {
                if (!locale) {
                    return "en-US";
                }

                var lang = locale.split('-')[0];
                if (!lang) {
                    return "es-US";
                }
                lang = lang.toLowerCase();

                var x = _.find(_esSupportedLanguages, function(y) {
                    return lang == (y.id.split('-')[0].toLowerCase());
                });

                return x ? x.id : "en-US";
            }

            function esConvertGIDtoId(gid) {
                if (!gid) {
                    return 'gid';
                }
                return 'gid' + gid.replace(/-/g, '_');
            }

            function esConvertIDtoGID(id) {
                if (!id) {
                    return '';
                }

                if (id.slice(0, 'gid'.length) != 'gid') {
                    return id;
                }
                return id.slice(3).replace(/_/g, '-');
            }

            function ESPropertySet(ps) {
                this.ps = ps;
            }

            ESPropertySet.prototype.getSections = function() {
                var p = this.ps;

                if (!p || !p.Lines) {
                    return [];
                }

                return _.groupBy(p.Lines, 'Category_Code');
            }

            function componentToHex(c) {
                var hex = c.toString(16);
                return hex.length == 1 ? "0" + hex : hex;
            }

            function rgbToHex(c) {
                var r = (c & 0xff0000) >> 16;
                var g = (c & 0x00ff00) >> 8;
                var b = (c & 0x0000ff);
                return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
            }

            function ESPublicQueryDef(ctxId, groupId, filterId, pqOptions, params, uiOptions, esPanelOpen) {
                this.CtxID = ctxId;
                this.GroupID = groupId;
                this.FilterID = filterId;
                this.PQOptions = pqOptions;
                this.Params = params;
                this.UIOptions = uiOptions;
                this.Title = undefined;

                if (angular.isUndefined(esPanelOpen)) {
                    this.esPanelOpen = {
                        status: false
                    };
                } else {
                    if (angular.isObject(esPanelOpen)) {
                        this.esPanelOpen = esPanelOpen;
                    } else {
                        this.esPanelOpen = {
                            status: !!esPanelOpen
                        };
                    }
                }


                this.initFromObj = function(inObj) {
                    var x = inObj || {};
                    this.CtxID = x.CtxID;
                    this.GroupID = x.GroupID;
                    this.FilterID = x.FilterID;
                    this.PQOptions = new ESPQOptions().initFromObj(x.PQOptions);
                    this.Params = x.Params;
                    this.Title = x.Title;
                    if (angular.isUndefined(x.esPanelOpen)) {
                        this.esPanelOpen = {
                            status: false
                        };
                    } else {
                        if (angular.isObject(x.esPanelOpen)) {
                            this.esPanelOpen = x.esPanelOpen;
                        } else {
                            this.esPanelOpen = {
                                status: !!x.esPanelOpen
                            };
                        }
                    }

                    this.UIOptions = angular.merge({}, x.UIOptions);

                    for (var prop in inObj) {
                        if (!this.hasOwnProperty(prop)) {
                            // property xxx i.e. param xxx does not exist at all. So we must add it during the merge
                            this[prop] = inObj[prop];
                        }
                    }
                    return this;
                }
            }



            function ESMultiZoomDef(zoomId, pqOptions, useCache) {
                this.ZoomID = zoomId;
                this.PQOptions = pqOptions;
                this.UseCache = !!useCache;
            }

            function ESPQOptions(page, pageSize, withCount, serverPaging, autoExecute) {
                this.Page = page || -1;
                this.PageSize = pageSize || -1;
                this.WithCount = !!withCount;
                this.ServerPaging = (angular.isUndefined(serverPaging) || serverPaging == null) ? true : serverPaging;
                this.AutoExecute = !!autoExecute;

                this.getPageSizeForServer = function() {
                    if (this.ServerPaging) {
                        return this.PageSize;
                    }
                    return -1;
                }

                this.getPageSizeForUI = function() {
                    return this.PageSize < 1 ? 20 : this.PageSize;
                }

                this.initFromObj = function(inObj) {
                    var x = inObj || {};
                    this.Page = x.Page || -1;
                    this.PageSize = x.PageSize || -1;
                    this.WithCount = !!x.WithCount;
                    this.ServerPaging = (angular.isUndefined(x.ServerPaging) || x.ServerPaging == null) ? true : x.ServerPaging;
                    this.AutoExecute = !!x.AutoExecute;
                    return this;
                }
            }


            var dDateRangeClass = {
                6: [0, 1, 2, 3, 6, 8, 10, 11, 12, 13, 16, 19, 20, 21, 22, 23, 24],
                20: [0, 1, 25, 26, 27, 28, 29, 30],
            };

            var getLocale = function() {
                var loc = window.esLoginLanguage;
                var t = esClientSession;
                if (t && t.connectionModel && t.connectionModel.LangID) {
                    loc = t.connectionModel.LangID;
                }
                return loc;
            }

            var dateRangeResolve = function(dateVal, verbose) {
                var empty = _.find(esDateRangeOptions, {
                    dType: 2
                });

                var emptyS = empty ? empty.title : "Any Date";

                if (!dateVal || !dateVal.dRange) {
                    return emptyS;
                }

                var d = new Date();
                var dFullYear = d.getFullYear();
                var dMonth = d.getMonth();

                var dObj = _.find(esDateRangeOptions, {
                    dValue: dateVal.dRange
                });
                if (!dObj) {
                    return emptyS;
                }

                var loc = getLocale();

                switch (dObj.dType) {
                    case 0:
                        {
                            if (!angular.isDate(dateVal.fromD) && !angular.isDate(dateVal.toD)) {
                                return emptyS;
                            }

                            var s = "";
                            if (angular.isDate(dateVal.fromD)) {
                                s = dateVal.fromD.toLocaleDateString(loc);
                            }
                            s = s + " - ";

                            var toS = "";
                            if (angular.isDate(dateVal.toD)) {
                                toS = dateVal.toD.toLocaleDateString(loc);
                            }
                            s = s + toS;
                            return s;
                        }
                    case 1:
                        {
                            if (!angular.isDate(dateVal.fromD)) {
                                return emptyS;
                            }
                            return dateVal.fromD.toLocaleDateString(loc);
                        }
                    case 2:
                        return dObj.title;
                    case 3:
                        return d.toLocaleDateString(loc) + " (" + dObj.title + ")";
                    case 4:
                        return "-> " + d.toLocaleDateString(loc) + " (" + dObj.title + ")";
                    case 5:
                        return d.toLocaleDateString(loc) + " ->" + " (" + dObj.title + ")";
                    case 6:
                        {
                            d.setDate(d.getDate() - 1);
                            return d.toLocaleDateString(loc) + " (" + dObj.title + ")";
                        }
                    case 7:
                        {
                            d.setDate(d.getDate() - 1);
                            return d.toLocaleDateString(loc) + " ->" + " (" + dObj.title + ")";
                        }
                    case 8:
                        {
                            d.setDate(d.getDate() + 1);
                            return d.toLocaleDateString(loc) + " (" + dObj.title + ")";
                        }
                    case 9:
                        {
                            d.setDate(d.getDate() + 1);
                            return d.toLocaleDateString(loc) + " ->" + " (" + dObj.title + ")";
                        }
                    case 10:
                        {
                            var cDay = d.getDay();
                            var sDiff = (cDay == 0) ? 6 : (cDay - 1);

                            var f = new Date(d);
                            var t = new Date(d);
                            f.setDate(d.getDate() - sDiff);
                            t.setDate(f.getDate() + 6);

                            return f.toLocaleDateString(loc) + " - " + t.toLocaleDateString(loc) + " (" + dObj.title + ")";
                        }
                    case 11:
                        {
                            d.setDate(d.getDate() - 7);

                            var cDay = d.getDay();
                            var sDiff = (cDay == 0) ? 6 : (cDay - 1);

                            var f = new Date(d);
                            var t = new Date(d);
                            f.setDate(d.getDate() - sDiff);
                            t.setDate(f.getDate() + 6);

                            return f.toLocaleDateString(loc) + " - " + t.toLocaleDateString(loc) + " (" + dObj.title + ")";
                        }
                    case 12:
                        {
                            d.setDate(d.getDate() + 7);

                            var cDay = d.getDay();
                            var sDiff = (cDay == 0) ? 6 : (cDay - 1);

                            var f = new Date(d);
                            var t = new Date(d);
                            f.setDate(d.getDate() - sDiff);
                            t.setDate(f.getDate() + 6);

                            return f.toLocaleDateString(loc) + " - " + t.toLocaleDateString(loc) + " (" + dObj.title + ")";
                        }
                    case 13:
                        {
                            d.setDate(1);

                            var f = new Date(dFullYear, dMonth + 1, 0);
                            return d.toLocaleDateString(loc) + " - " + f.toLocaleDateString(loc) + " (" + dObj.title + ")";
                        }
                    case 14:
                        {
                            d.setDate(1);
                            return d.toLocaleDateString(loc) + " ->" + " (" + dObj.title + ")";
                        }
                    case 15:
                        {
                            var f = new Date(dFullYear, dMonth + 1, 0);
                            return "-> " + f.toLocaleDateString(loc) + " (" + dObj.title + ")";
                        }
                    case 16:
                        {
                            var f = new Date(dFullYear, dMonth - 1, 1);
                            var t = new Date(dFullYear, dMonth, 0);
                            return f.toLocaleDateString(loc) + " - " + t.toLocaleDateString(loc) + " (" + dObj.title + ")";
                        }
                    case 17:
                        {
                            var f = new Date(dFullYear, dMonth - 1, 1);
                            return f.toLocaleDateString(loc) + " ->" + " (" + dObj.title + ")";
                        }
                    case 18:
                        {
                            var f = new Date(dFullYear, dMonth, 0);
                            return "-> " + f.toLocaleDateString(loc) + " (" + dObj.title + ")";
                        }
                    case 19:
                        {
                            var m = dMonth;
                            var r = m % 3;

                            var f = new Date(dFullYear, m - r, 1);
                            var t = new Date(dFullYear, m + (3 - r), 0);
                            return f.toLocaleDateString(loc) + " -> " + t.toLocaleDateString(loc) + " (" + dObj.title + ")";
                        }
                    case 20:
                        {
                            var m = dMonth;
                            var r = m % 3;

                            var t = new Date(dFullYear, m - r, 0);
                            var f = new Date(dFullYear, t.getMonth() - 2, 1);
                            return f.toLocaleDateString(loc) + " -> " + t.toLocaleDateString(loc) + " (" + dObj.title + ")";
                        }
                    case 21:
                        {
                            var m = dMonth;
                            var f = new Date(dFullYear, (m >= 6) ? 6 : 0, 1);
                            var t = new Date(dFullYear, (m >= 6) ? 11 : 5, (m >= 6) ? 31 : 30);
                            return f.toLocaleDateString(loc) + " -> " + t.toLocaleDateString(loc) + " (" + dObj.title + ")";
                        }
                    case 22:
                        {
                            var f;
                            var t;
                            var y = dFullYear;
                            var m = dMonth;
                            
                            if (m >= 6) {
                                f = new Date(y, 0, 1);
                                t = new Date(y, 5, 30);
                            } else {
                                f = new Date(y - 1, 6, 1);
                                t = new Date(y - 1, 11, 31);
                            }

                            return f.toLocaleDateString(loc) + " -> " + t.toLocaleDateString(loc) + " (" + dObj.title + ")";
                        }

                    case 23:
                        {
                            var y = dFullYear;
                            var f = new Date(y, 0, 1);
                            var t = new Date(y, 11, 31);
                            return f.toLocaleDateString(loc) + " -> " + t.toLocaleDateString(loc) + " (" + dObj.title + ")";
                        }

                    case 24:
                        {
                            var y = dFullYear - 1;
                            var f = new Date(y, 0, 1);
                            var t = new Date(y, 11, 31);
                            return f.toLocaleDateString(loc) + " -> " + t.toLocaleDateString(loc) + " (" + dObj.title + ")";
                        }
                    default:
                        return dObj.title;
                }
            }


            function ESParamVal(paramId, paramVal, enumList) {
                this.paramCode = paramId;
                this.paramValue = paramVal;
                this.enumList = enumList;
                this.mandatory = false;
            }

            ESParamVal.prototype.getParameterInfo = function() {
                return {
                    parameterType: "esGenericParam"
                };
            }

            ESParamVal.prototype.required = function(bVal) {
                if (!arguments || arguments.length == 0) {
                    return this.mandatory;
                }

                this.mandatory = !!bVal;
                return this;
            }

            ESParamVal.prototype.getExecuteVal = function() {
                return this.paramValue;
            };

            ESParamVal.prototype.clone = function(paramId) {
                var p = new ESParamVal(paramId, this.pValue(), this.enumList);
                p.required(this.required());
                return p;
            };

            ESParamVal.prototype.pValue = function(v) {
                if (!arguments || arguments.length == 0) {
                    // get
                    return this.paramValue;
                }

                if (this.paramValue === arguments[0]) {
                    return false;
                }

                this.paramValue = arguments[0];
                return true;
            }

            ESParamVal.prototype.strVal = function() {
                var lst = this.enumList;
                if (!lst || lst.length == 0) {
                    // typical case, not an enum / option
                    return this.paramValue ? this.paramValue.toString() : '';
                }

                if (!this.paramValue) {
                    return '';
                }

                var vals;
                vals = angular.isArray(this.paramValue) ? this.paramValue : [this.paramValue];

                var s = _.reduce(vals, function(memo, x) {
                    var es = _.find(lst, {
                        value: x.toString()
                    });
                    return memo + (es ? es.text : x.toString()) + ", ";
                }, '');

                return s.substring(0, s.lastIndexOf(", "));
            };

            function ESBoolParamVal(paramId, paramVal) {
                //call super constructor
                ESParamVal.call(this, paramId, paramVal);
            }

            //inherit from ESParamval SuperClass
            ESBoolParamVal.prototype = Object.create(ESParamVal.prototype);

            ESBoolParamVal.prototype.clone = function(paramId) {
                return new ESBoolParamVal(paramId, this.pValue());
            }

            ESBoolParamVal.prototype.getParameterInfo = function() {
                return {
                    parameterType: "system.int32, mscorlib",
                    controlType: 7
                };
            }

            ESBoolParamVal.prototype.strVal = function() {
                return esYesNoTrans[this.pValue() ? "ESUI.BOOLEAN.YES" : "ESUI.BOOLEAN.NO"];
            }

            ESBoolParamVal.prototype.getExecuteVal = function() {
                return this.pValue() ? 1 : 0;
            }


            function ESNumericParamVal(paramId, paramVal) {
                //call super constructor
                ESParamVal.call(this, paramId, paramVal);
            }

            //inherit from ESParamval SuperClass
            ESNumericParamVal.prototype = Object.create(ESParamVal.prototype);

            ESNumericParamVal.prototype.clone = function(paramId) {
                return new ESNumericParamVal(paramId, this.pValue());
            }

            ESNumericParamVal.prototype.getParameterInfo = function() {
                return {
                    parameterType: "entersoft.framework.platform.esnumeric"
                };
            }

            ESNumericParamVal.prototype.strVal = function() {
                var zero = "0";
                var froms = this.paramValue.value ? this.paramValue.value.toLocaleString(getLocale()) : zero;
                var tos = this.paramValue.valueTo ? this.paramValue.valueTo.toLocaleString(getLocale()) : zero;
                switch (this.paramValue.oper) {
                    case "RANGE":
                        {
                            return esOperTrans['ESCOMPLEX.FROM'] + froms + esOperTrans['ESCOMPLEX.TO'] + tos;
                        }
                    case "NULL":
                        return esOperTrans['ESCOMPLEX.NULL'];

                    case "NOTNULL":
                        return esOperTrans['ESCOMPLEX.NOTNULL'];

                    default:
                        return esOperTrans["ESCOMPLEX." + this.paramValue.oper.toString()] + " " + froms;
                }
            }

            ESNumericParamVal.prototype.getExecuteVal = function() {
                var froms = (this.paramValue.value = this.paramValue.value || 0).toLocaleString("el-GR");
                var tos = (this.paramValue.valueTo = this.paramValue.valueTo || 0).toLocaleString("el-GR");

                switch (this.paramValue.oper) {
                    case "RANGE":
                        return "ESNumeric(" + this.paramValue.oper + ", '" + froms + "', '" + tos + "')";
                    case "NULL":
                    case "NOTNULL":
                        return "ESNumeric(" + this.paramValue.oper + ", '0')";
                    default:
                        return "ESNumeric(" + this.paramValue.oper + ", '" + froms + "')";
                }
            }

            function ESStringParamVal(paramId, paramVal) {
                //call super constructor
                ESParamVal.call(this, paramId, paramVal);
            }

            //inherit from ESParamval SuperClass
            ESStringParamVal.prototype = Object.create(ESParamVal.prototype);

            ESStringParamVal.prototype.clone = function(paramId) {
                return new ESStringParamVal(paramId, this.pValue());
            }

            ESStringParamVal.prototype.getParameterInfo = function() {
                return {
                    parameterType: "entersoft.framework.platform.esstring, queryprocess"
                };
            }

            ESStringParamVal.prototype.strVal = function() {
                var froms = this.paramValue.value ? this.paramValue.value.toString() : '';
                var tos = this.paramValue.valueTo ? this.paramValue.valueTo.toString() : '';
                switch (this.paramValue.oper) {
                    case "RANGE":
                        {
                            return esOperTrans['ESCOMPLEX.FROM'] + froms + esOperTrans['ESCOMPLEX.TO'] + tos;
                        }
                    case "NULL":
                        return esOperTrans['ESCOMPLEX.NULL'];

                    case "NOTNULL":
                        return esOperTrans['ESCOMPLEX.NOTNULL'];

                    default:
                        return esOperTrans["ESCOMPLEX." + this.paramValue.oper.toString()] + " " + froms;
                }
            }

            ESStringParamVal.prototype.getExecuteVal = function() {
                switch (this.paramValue.oper) {
                    case "EQ":
                        return this.paramValue.value;
                    case "RANGE":
                        return "ESString(" + this.paramValue.oper + ", '" + this.paramValue.value + "', '" + this.paramValue.valueTo + "')";
                    case "NULL":
                    case "NOTNULL":
                        return "ESString(" + this.paramValue.oper + ", '')";
                    default:
                        return "ESString(" + this.paramValue.oper + ", '" + this.paramValue.value + "')";
                }
            }

            function ESDateRange(fromType, fromD, toType, toD) {
                return {
                    "fromType": fromType,
                    "fromD": fromD,
                    "toType": toType,
                    "toD": toD
                }
            }

            function dateEval(pInfo, expr) {
                var SpecificDate = "SpecificDate";
                var Month = "Month";
                var SixMonth = "SixMonth";
                var Week = "Week";
                var Year = "Year";
                var Quarter = "Quarter";
                var Day = "Day";
                var FiscalPeriod = "FiscalPeriod";
                var FiscalYear = "FiscalYear";
                var Bimonthly = "Bimonthly";

                function isActualDate(v) {
                    return v && v != "1753/01/01" && v != "9999/01/01";
                }

                if (expr == "ESDateRange(Day,0)") {
                    expr = "ESDateRange(Day)";
                }
                var dVal = eval(expr.replace(/#/g, '"'));
                var esdate = new ESDateParamVal(pInfo.id);

                // Specific Date
                var mD = moment(dVal, "YYYY/MM/DD");
                if (!dVal.fromType && !dVal.toType && !dVal.fromD && !dVal.toD && mD.isValid()) {
                    esdate.paramValue.dRange = "1";
                    esdate.paramValue.fromD = mD.toDate();
                    return esdate;
                }

                //From Specific Date To Specific Date
                if (dVal.fromType == SpecificDate && isActualDate(dVal.fromD) && dVal.toType == SpecificDate && isActualDate(dVal.toD)) {
                    esdate.paramValue.dRange = "0";
                    esdate.paramValue.fromD = new Date(dVal.fromD);
                    esdate.paramValue.toD = new Date(dVal.toD);
                    return esdate;
                }

                //From Specific Date To Specific Date
                if (dVal.fromType == SpecificDate && isActualDate(dVal.fromD)) {
                    esdate.paramValue.dRange = "1";
                    esdate.paramValue.fromD = new Date(dVal.fromD);
                    return esdate;
                }

                var drOptions = fGetesDateRangeOptions();
                var elem = _.find(drOptions, function(xd) {
                    return xd.dValue == expr;
                });

                if (!angular.isUndefined(elem)) {
                    esdate.paramValue.dRange = expr;
                    return esdate;
                }

                var fD = calcActualDate(dVal.fromType, dVal.fromD, true);
                var tD = calcActualDate(dVal.toType || dVal.fromType, angular.isUndefined(dVal.toD) ? dVal.fromD : dVal.toD, false);

                esdate.paramValue.dRange = "0";
                esdate.paramValue.fromD = fD;
                esdate.paramValue.toD = tD;
                return esdate;
            }

            function calcActualDate(dateType, valOffset, bFrom) {
                switch (dateType) {
                    case "Year":
                        {
                            if (bFrom) {
                                if (valOffset > 0) {
                                    valOffset = valOffset - 1;
                                }
                                return moment().add(valOffset, 'years').startOf('year').toDate();
                            } else {
                                return moment().add(valOffset, 'years').endOf('year').toDate();
                            }
                        }
                    case "Month":
                        {
                            if (bFrom) {
                                return moment().startOf('month').add(valOffset, 'months').toDate();
                            } else {
                                return moment().endOf('month').add(valOffset, 'months').toDate();
                            }
                        }
                    case "Week":
                        {
                            if (bFrom) {
                                return moment().startOf('week').add(1, 'days').add(valOffset, 'weeks').toDate();
                            } else {
                                return moment().endOf('week').add(1, 'days').add(valOffset, 'weeks').toDate();
                            }
                        }
                    case "Day":
                        {
                            return moment().add(valOffset, 'days').toDate();
                        }
                    case "Quarter":
                        {
                            if (bFrom) {
                                if (valOffset > 0) {
                                    valOffset = valOffset - 1;
                                }
                                return moment().startOf('quarter').add(valOffset, 'quarters').toDate();
                            } else {
                                return moment().endOf('quarter').add(valOffset, 'quarters').endOf('quarter').toDate();
                            }
                        }
                    case "SixMonth":
                        {
                            return calcActualDate("Quarter", bFrom ? (valOffset * 2) : (valOffset * 2) + 1, bFrom);
                        }
                    default:
                        {
                            alert("ESDateRange option NOT Supported. [" + dateType + ", " + valOffset + ", " + bFrom + "]. Using Current Month instead");
                            if (bFrom) {
                                return moment().startOf('month').toDate();
                            } else {
                                return moment().endOf('month').toDate();
                            }
                        }
                }
            }

            /**
				 * @ngdoc constructor
				 * @name es.Services.Web.esGlobals#ESDateParamVal
				 * @methodOf es.Services.Web.esGlobals
				 * @module es.Services.Web
				 * @kind constructor
				 * @constructor
				 * @description Constructs an ESParamValues object to be used in es-params-panel directive or public query execution
				 * @param {string} paramId the string identifier for the parameter as it is defined in the PublicQuery, Automation, etc.
				 * @param {object=} paramVal The value to be assigned to the parameter during the construction. If paramVal is of type string then a string of type "ESDateRange(Day, 0)" or similar 
				 * is expected. The string format for the daterange value follows the Entersoft DateRange string value property.
				 * If paramVal is empty, null, or undefined then the Date parameter is assigned the value 'ESDateRange(SpecificDate, #9999/01/01#, SpecificDate, #1753/01/01#)' which translates
				 * to everything.
				 * @return {ESDateParamVal} Returns a new instance of the ESDateParamVal class.
				 * @example
```js
var d1 = new esGlobals.ESDateParamVal("ESDCreated", 'ESDateRange(SpecificDate, #2016/12/11#, SpecificDate, #2016/12/31#)'); // Specific date range from 11th of Dec 2106 to 31 Dec 2016
var d2 = new esGlobals.ESDateParamVal("ESDCreated", "ESDateRange(Year, -1)"); // Last Year
```
				*/
            function ESDateParamVal(paramId, paramVal) {
                //call super constructor
                //param id will be given at a later assignment
                if (!paramVal) {
                    paramVal = {
                        // empty date range is treated as ANYTHING
                        dRange: 'ESDateRange(SpecificDate, #9999/01/01#, SpecificDate, #1753/01/01#)',
                        fromD: null,
                        toD: null
                    };
                } else {
                    if (angular.isString(paramVal)) {
                        paramVal = dateEval({ id: paramId }, paramVal).pValue();
                    }
                }
                ESParamVal.call(this, paramId, paramVal);
            }

            ESDateParamVal.prototype = Object.create(ESParamVal.prototype);

            ESDateParamVal.prototype.clone = function(paramId) {
                return new ESDateParamVal(paramId, this.pValue());
            }

            ESDateParamVal.prototype.getParameterInfo = function() {
                return {
                    parameterType: "entersoft.framework.platform.esdaterange, queryprocess"
                };
            }

            ESDateParamVal.prototype.strVal = function(verbose) {
                return dateRangeResolve(this.paramValue, verbose);
            }

            ESDateParamVal.prototype.getExecuteVal = function() {
                var s = this.paramValue.dRange;
                if (s == "0" || s == "1") {
                    var sFromD = "#1753/01/01#";
                    var sToD = "#9999/01/01#";
                    var isEmpty = true;

                    // Fix the fromD
                    var mFromD = moment(this.paramValue.fromD);
                    if (mFromD.isValid()) {
                        isEmpty = false;
                        sFromD = mFromD.format('YYYY/MM/DD');
                    }

                    var mToD = moment(this.paramValue.toD);
                    if (mToD.isValid()) {
                        isEmpty = false;
                        sToD = mToD.format('YYYY/MM/DD');
                    }

                    if (s == "0" || isEmpty) {
                        return "ESDateRange(SpecificDate, " + "#" + sFromD + "#" + ", SpecificDate, " + "#" + sToD + "#" + ")";
                    }

                    return "ESDateRange(SpecificDate, " + "#" + sFromD + "#" + ")";
                }

                return this.paramValue.dRange;
            }

            /**
				 * @ngdoc constructor
				 * @name es.Services.Web.esGlobals#ESParamValues
				 * @methodOf es.Services.Web.esGlobals
				 * @module es.Services.Web
				 * @kind constructor
				 * @constructor
				 * @description Constructs an ESParamValues object to be used in es-params-panel directive or public query execution
				 * @param {object=} vals a JSON object with key-value properties representing the params
				 * @return {ESParamValues} Returns a new instance of the ESParamValue class.
				 * @example
```js
var esVals = new esGlobals.ESParamValues({pCode: 'Hello World'});
var esVals2 = new esGlobals.ESParamValues();
```
				*/
            function ESParamValues(vals) {
                this.setParamValues(vals);
            }

            /**
				 * @ngdoc function
				 * @name es.Services.Web.esGlobals#ESParamValues.merge
				 * @methodOf es.Services.Web.esGlobals
				 * @module es.Services.Web
				 * @kind function
				 * @description Merges into the current instance of the ESParamValues object the values provided by the val parameter
				 * @param {ESParamValues|object} val an object that is either of type ESParamValues or a simple JSON object with key-value pairs
				 * with the constraint that the value should be of type {@link es.Services.Web.esGlobals#methods_ESParamVal ESParamVal}.
				 * @example
```js
var pA = new esGlobals.ESParamValues({p1: 'Hello', p2: 5});
var pB = new esGlobals.ESParamValues({p3: 'Hello'});
pA.merge(pB);
$log.info(JSON.stringify(pA));
// will result into p1, p2, p3
```
				*/
            ESParamValues.prototype.merge = function(val) {
                var x = this;
                if (val) {
                    for (var prop in val) {
                        if (!val[prop] || !val[prop] instanceof ESParamVal) {
                            throw new Error("Invalid parameter type in merge function in paramvalues");
                        }

                        if (!x.hasOwnProperty(prop)) {
                            // property xxx i.e. param xxx does not exist at all. So we must add it during the merge
                            x[prop] = val[prop];
                        } else {
                            //property xxx i.e. param xxx already exists. Check the type of the value
                            if (x[prop] instanceof ESParamVal) {

                                x[prop].enumList = val[prop].enumList;
                            } else {
                                // existing property i.e. param is not of ESParamVal type. In that case we override the value to the source one
                                // 
                                x[prop] = val[prop];
                            }

                        }
                    }
                }
                return this;
            }

            ESParamValues.prototype.isValidState = function() {
                var x = this;
                for (var prop in x) {
                    if (x.hasOwnProperty(prop)) {
                        var p = x[prop];
                        if ((p instanceof ESParamVal) && p.required()) {
                            if (!((p.paramValue && p.getExecuteVal()) || (angular.isNumber(p.paramValue) && p.paramValue == 0))) {
                                return false;
                            }
                        }
                    }
                }
                return true;
            }

            /**
				 * @ngdoc function
				 * @name es.Services.Web.esGlobals#ESParamValues.setParamValues
				 * @methodOf es.Services.Web.esGlobals
				 * @module es.Services.Web
				 * @kind function
				 * @description Assigns or merges into the current instance of ESParamValues the given vals. If the current instance 
				 * already holds parameter values then their values will be replaced by the vals property values if they exists or unmodified
				 * if the they do not exists in the vals object
				 * @param {object=} vals a JSON object with key-value properties representing the params
				 * @example
```js
var x = new esGlobals.ESParamValues();
x.setParamValues({p1: 'Hello World'});
```
				*/
            ESParamValues.prototype.setParamValues = function(vals) {
                var x = this;

                //delete any previsously assigned properties
                for (var prop in x) {
                    if (x.hasOwnProperty(prop)) {
                        delete x[prop];
                    }
                };

                //asign new properties
                if (!vals || !_.isArray(vals) || vals.length == 0) {
                    return;
                }

                vals.forEach(function(element, index, array) {
                    x[element.paramCode] = element;
                });
            }

            ESParamValues.prototype.getExecuteVals = function() {
                var x = this;
                var ret = {};
                for (var prop in x) {
                    if (x.hasOwnProperty(prop)) {
                        var p = x[prop];

                        if (p.paramValue || (angular.isNumber(p.paramValue) && p.paramValue == 0)) {
                            ret[p.paramCode] = p.getExecuteVal();
                        }
                    }
                }
                return ret;
            }

            ESParamValues.prototype.getSerialized = function() {
                var x = this;
                var ret = [];
                for (var prop in x) {
                    if (x.hasOwnProperty(prop)) {
                        var p = x[prop];

                        if (p.paramValue || (angular.isNumber(p.paramValue) && p.paramValue == 0)) {
                            var info = p.getParameterInfo();
                            if (!info || !info.parameterType) {
                                throw new Error("Parameter cannot be serialized " + "[" + p.paramCode + "]");
                            }

                            ret.push({
                                id: p.paramCode,
                                value: p.getExecuteVal(),
                                parameterType: info.parameterType,
                                controlType: info.controlType,
                                enumList: p.enumList,
                                required: p.mandatory
                            });
                        }
                    }
                }
                return ret;
            }


            function fgetModel() {
                if (!esClientSession.connectionModel) {

                    // check to see if session data are stored in the session storage so that 
                    // we can use this object as model
                    var inStorage = $sessionStorage;
                    var session = null;
                    if (typeof inStorage.__esrequest_sesssion !== 'undefined' && inStorage.__esrequest_sesssion !== null) {
                        session = inStorage.__esrequest_sesssion;
                        esClientSession.connectionModel = session;

                        esMessaging.publish("AUTH_CHANGED", esClientSession, getAuthToken(session));


                        $log.info("RELOGIN User ", esClientSession.connectionModel.Name);
                    } else {
                        esMessaging.publish("AUTH_CHANGED", null, getAuthToken(null));
                        $log.info("NO RELOGIN from stored state");
                    }
                }

                return esClientSession.connectionModel;
            }

            function fsetModel(model) {
                var currentGID = null;

                if (esClientSession.connectionModel) {
                    currentGID = esClientSession.connectionModel.GID;
                }

                esClientSession.connectionModel = model;

                if (!model) {
                    delete $sessionStorage.__esrequest_sesssion;
                } else {
                    $sessionStorage.__esrequest_sesssion = model;
                }

                esMessaging.publish("AUTH_CHANGED", esClientSession, getAuthToken(model));
            }

            function getUserMessage(err, status) {
                var rep = {
                    isLogin: false,
                    messageToShow: ""
                };

                if (err && !_.isString(err) && _.isArrayLike(err)) {
                    err = err[0];
                }

                if (!err) {
                    switch (status) {
                        case 401:
                            rep.isLogin = true;
                            rep.messageToShow = $translate.instant('ERR_401');
                            break;

                        case 403:
                            rep.isLogin = true;
                            rep.messageToShow = $translate.instant('ERR_403');
                            break;

                        case 500:
                        default:
                            rep.isLogin = true;
                            rep.messageToShow = $translate.instant('ERR_500');
                            break;
                    }
                    return rep;
                }

                if (err instanceof ArrayBuffer) {
                    // In case that response is of type ArrayBuffer instead of an object
                    try {
                        err = JSON.parse(String.fromCharCode.apply(null, new Uint8Array(err)));
                    } catch (x) {

                    }
                }

                rep.isLogin = (err.status == 401) || (err.status == 403) || (status == 401) || (status == 403);

                if (err.data && err.data instanceof ArrayBuffer) {
                    try {
                        err.data = JSON.parse(String.fromCharCode.apply(null, new Uint8Array(err.data)));
                    } catch (x) {

                    }
                }

                var sMsg = "";
                err = err.data || err;
                if (err.UserMessage) {
                    sMsg = err.UserMessage;
                    if (err.MessageID) {
                        var tTok = "ERR_" + err.MessageID;
                        var trans = $translate.instant(tTok);
                        if (trans != tTok) {
                            sMsg = trans;
                        } else {
                            sMsg = sMsg + " (" + err.MessageID + ")";
                        }
                    }
                    rep.messageToShow = sMsg;
                }

                if (err.Messages) {
                    if (angular.isArray(err.Messages)) {
                        var i = 0;
                        sMsg = _.reduce(err.Messages, function(ret, x) {
                            return ret + "\r\n" + "[" + ++i + "] " + x;
                        }, "");

                    } else {
                        sMsg = err.Messages;
                    }

                    rep.messageToShow = rep.messageToShow ? rep.messageToShow + "\r\n" : rep.messageToShow;

                    if (sMsg) {
                        rep.messageToShow += sMsg;
                    } else {
                        if (!rep.messageToShow) {
                            rep.messageToShow = $translate.instant('ERR_GENERAL');
                        }
                    }

                    return rep;
                } else {
                    rep.messageToShow = rep.messageToShow || err.Message || err.toString();
                    return rep;
                }
            }


            function getAuthToken(model) {
                if (model) {
                    return 'Bearer ' + model.WebApiToken;
                }
                return '';
            }

            // Private variables//
            var esClientSession = {
                hostUrl: "",
                connectionModel: null,

                setWebApiToken: function(newToken, reqUrl) {
                    if (newToken && angular.isString(newToken)) {
                        if (esClientSession.connectionModel) {
                            if (newToken !== esClientSession.connectionModel.WebApiToken) {
                                esClientSession.connectionModel.WebApiToken = newToken;
                            }
                        } else {
                            esClientSession.connectionModel = {};
                            esClientSession.connectionModel.WebApiToken = newToken;
                        }
                    }
                },

                getWebApiToken: function() {
                    //sme fake
                    var s = getAuthToken(fgetModel());

                    /*
                    if (s) {
                    		s = s.replace("j", "f").replace("x", "h");
                    }
                    */

                    return s;
                },

                setModel: fsetModel,

                getModel: fgetModel,
            };

            function getMimeTypes() {
                return mimes;
            }

            var isMobile = (function() {
                var checkMobile = false;
                (function(a, b) {
                    if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4))) checkMobile = true;
                })(navigator.userAgent || navigator.vendor || window.opera);
                return checkMobile;
            })();

            function requiredEBSVersion(ebsVersion, requiredVersion) {
                if (!requiredVersion) {
                    return true;
                }

                if (!ebsVersion) {
                    return false;
                }

                ebsVersion = ebsVersion.replace(" - ", ".")
                var eParts = _.map(ebsVersion.split("."), function(x) {
                    return parseInt(x.trim());
                });

                var rParts = _.map(requiredVersion.split("."), function(x) {
                    return parseInt(x.trim());
                });

                if (eParts.length != rParts.length && rParts.length != 4) {
                    return false;
                }

                var i;
                for (i = 0; i < 4; i++) {
                    if (eParts[i] < rParts[i]) {
                        return false;
                    }

                    if (eParts[i] > rParts[i]) {
                        return true;
                    }

                }
                return true;
            }


            return {


                requiredEBSVersion: requiredEBSVersion,


                /**
					 * @ngdoc function
					 * @name es.Services.Web.esGlobals#esConvertGIDtoId
					 * @methodOf es.Services.Web.esGlobals
					 * @module es.Services.Web
					 * @kind function
					 * @description Converts a string value represeting a GID to a string value that can act as a value for the name attribute in html elements.
					 * This is a useful function that can be used to convert a gid to an id that can be assigned as an HTML element name i.e. in a form field declartion.
					 * @param {string} gid the gid in string value representation to be converted
					 * @return {string} the converted value to string that is of the form "gid" + gid as string BUT with the - char replaced to _.
					 * If the parameter is null or undefined then the static string "gid" is returned.
					 * @example
```html
<input 
class="es-survey-question-control es-param-control" 
kendo-date-time-picker
	name="{{esGlobals.esConvertGIDtoId(esQuestion.GID)}}" 
	ng-required="esQuestion.Mandatory" 
	ng-model="esPsVal[esQuestion.Code]" 
/>
```
					 **/
                esConvertGIDtoId: esConvertGIDtoId,

                /**
                 * @ngdoc function
                 * @name es.Services.Web.esGlobals#esDetectMobileBrowsers
                 * @methodOf es.Services.Web.esGlobals
                 * @module es.Services.Web
                 * @kind function
                 * @description Detects without any server side call or external script whether the browse is a browser o a mobile device
                 * @return {boolean} Returns true if the browser is from a mobile device, otherwise false
                 **/
                esDetectMobileBrowsers: function() {
                    return isMobile;
                },

                getLocale: getLocale,


                /**
                 * @ngdoc function
                 * @name es.Services.Web.esGlobals#esConvertIDtoGID
                 * @methodOf es.Services.Web.esGlobals
                 * @module es.Services.Web
                 * @kind function
                 * @description Converts a string value represeting a GID to a string value that can act as a value for the name attribute in html elements.
                 * This is a useful function that can be used to convert a gid to an id that can be assigned as an HTML element name i.e. in a form field declartion.
                 * @param {string} id the string value representation of a gid (as a result of the {@link es.Services.Web.esGlobals#methods_esConvertGIDtoId esConvertGIDtoId function call}) to be converted back to a gid string
                 * @return {string} the original gid value in string representation.
                 * If the parameter is null or undefined then the static string "gid" is returned.
                 **/
                esConvertIDtoGID: esConvertIDtoGID,

                /**
                 * @ngdoc function
                 * @name es.Services.Web.esGlobals#rgbToHex
                 * @methodOf es.Services.Web.esGlobals
                 * @module es.Services.Web
                 * @kind function
                 * @description Converts an integer rgb color value to the equivalent html representation in string format i.e. #RRGGBB
                 * @param {number} rgbColor the integer value of the rgb color to be transformed to html hex color
                 * @return {string} the string representation of the given rgb color in html format i.e. "#c20000"
                 **/
                rgbToHex: rgbToHex,

                isEmail: function(fieldName) {
                    return fieldName && /mail/i.test(fieldName);
                },

                isPhone: function(fieldName) {
                    return fieldName && (/mobile/i.test(fieldName) || /phone/i.test(fieldName));
                },

                /**
					 * @ngdoc function
					 * @name es.Services.Web.esGlobals#getVersion
					 * @methodOf es.Services.Web.esGlobals
					 * @module es.Services.Web
					 * @kind function
					 * @description Function that returns the current version of the Entersoft AngularJS API.
					 * @return {object} A JSON object representing the current version of the Entersoft AngularJS API in sem-ver semantics
```js
var esAPIversion = {
Major: int, // i.e. 1
Minor: int, // i.e. 0
Patch: int // i.e. 1
}
```
					**/
                getVersion: function() {
                    return esAngularAPIVer;
                },

                isObjectEmpty: function(obj) {
                	if (!obj) {
                		return true;
                	}
                	
                    for (var key in obj) {
                        if (obj.hasOwnProperty(key))
                            return false;
                    }
                    return true;
                },

                /**
                 * @ngdoc function
                 * @name es.Services.Web.esGlobals#esSupportedLanguages
                 * @methodOf es.Services.Web.esGlobals
                 * @module es.Services.Web
                 * @kind function
                 * @description A function that returns a list of JSON objects representing the supported languages
                 * @return {[object]} A list of JSON objects each one of which represents a supported language. The object is of the form:
                 * 
                 ```js {
                		id: "el-GR",
                		title: "Ελληνικά (GR)",
                		icon: "......"
                }}
                ```
                **/
                esSupportedLanguages: _esSupportedLanguages,

                /**
                 * @ngdoc function
                 * @name es.Services.Web.esGlobals#suggestESLanguageID
                 * @methodOf es.Services.Web.esGlobals
                 * @module es.Services.Web
                 * @kind function
                 * @description A function that returns a list of JSON objects representing the supported languages
                 * @param {string} locale The locale for which the supported language id will be returned. In case of null, empty or undefined the en-US locale will be returned,
                 * as in any other case that a language cannot be resolved by the supplied locale parameter.
                 * @return {string} The language id that matches the given locale parameter. In case of no match for any reason en-US is returned.
                 **/
                suggestESLanguageID: suggestESLanguageID,


                /**
					 * @ngdoc function
					 * @name es.Services.Web.esGlobals#getMimeTypeForExt
					 * @methodOf es.Services.Web.esGlobals
					 * @module es.Services.Web
					 * @kind function
					 * @description Function that returns the mime-type for the given input filename or extension.
					 * 
					 * **REQUIRES ESWebAPIServer >= 1.7.9**
					 *
					 * @param {object[]} mimelist An array of objects of type {mime: string, extension: string, IsText: boolean} that holds a mime representation record.
					 * For more information on how to get a list of supported mime types please read {@link es.Services.Web.esWebApi#methods_getMimeTypes mimeTypes}.
					 * @param {string} filenamewithext the fullpath or just the filename or just the extension for which we want to have the corresponding mime-type
					 * i.e. "/abc/xyz/masterfile.pdf" or "docx" or ".xlsx", etc.
					 * @return {string} The mime-type string for the extension or filename provided in the _filenamewithext_ param. If no mime-type is registered for 
					 * this extension the function returns an empty string ''.
					 * @example
					 * 
```js
var mimeType = esGlobals.getMimeTypeForExt(mimelist, "myfile.docx");
// mimeType will be "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
```
					*/
                getMimeTypeForExt: function(mimelist, filenamewithext) {
                    if (!filenamewithext) {
                        return "";
                    }
                    var parts = filenamewithext.split(".");
                    var ext = parts[parts.length - 1].toLowerCase();
                    if (!ext) {
                        return "";
                    }

                    var mime = _.find(mimelist, function(x) {
                        return x.extension.indexOf(ext) != -1;
                    });
                    if (mime) {
                        return mime.mime;
                    }
                    return "";
                },

                /**
					 * @ngdoc function
					 * @name es.Services.Web.esGlobals#getExtensionsForMimeType
					 * @methodOf es.Services.Web.esGlobals
					 * @module es.Services.Web
					 * @kind function
					 * @description Function that returns an array of extensions that match the given mimeType
					 * 
					 * **REQUIRES ESWebAPIServer >= 1.7.9**
					 *
					 * @param {object[]} mimelist An array of objects of type {mime: string, extension: string, IsText: boolean} that holds a mime representation record.
					 * For more information on how to get a list of supported mime types please read {@link es.Services.Web.esWebApi#methods_getMimeTypes mimeTypes}.
					 * @param {string} mimeType The mimeType string for which we want the string array of extensions that are mapped to this mimeType
					 * @return {string[]} The array of strings that are mapped to this mimeType. If no map is found, an empty array i.e. [] will be returned
					 * @example
					 * 
```js
var exts = esGlobals.getExtensionsForMimeType(mimelist, "text/plain");
//exts will be ["txt", "text", "conf", "def", "list", "log", "in"]
```
					*/
                getExtensionsForMimeType: function(mimilist, mimeType) {
                    if (!mimeType) {
                        return [];
                    }

                    mimeType = mimeType.toLowerCase();
                    var mime = _.find(mimelist, function(x) {
                        return x.mime == mimeType;
                    });

                    if (mime) {
                        return mime.extension;
                    }
                    return [];
                },

                setWebApiToken: esClientSession.setWebApiToken,

                getWebApiToken: function() {
                    return esClientSession.getWebApiToken();
                },

                /**
                 * @ngdoc function
                 * @name es.Services.Web.esGlobals#isAuthenticated
                 * @methodOf es.Services.Web.esGlobals
                 * @module es.Services.Web
                 * @kind function
                 * @description Function that returns true if there is valid current EBS user authenticated, otherwise false
                 * @return {boolean} true if the current state of the esWebApiService has been succesfully authenticated, otherwise false
                 **/
                isAuthenticated: function() {
                    fgetModel();
                    return !!esClientSession.connectionModel;
                },

                getClientSession: function() {
                    return esClientSession;
                },

                /**
					 * @ngdoc function
					 * @name es.Services.Web.esGlobals#getUserMessage
					 * @methodOf es.Services.Web.esGlobals
					 * @module es.Services.Web
					 * @kind function
					 * @description This function is used to process the error obejct as well as the status code of any type of error in order to get the best match
					 * for a user **Error Message** string to be presented to the user.
					 * @param {object} err The error object we got from i.e. http or promise failure. 
					 * @param {number=} status The status int code we got from an http or promise failure
					 * @return {object} A JSON object with the following type: 
```js
{
isLogin: boolean, // boolean value indicating whether the error is related to the login process
messageToShow: string // The string message to be shown to the user
}
```
					 * @example
```js
smeControllers.controller('mainCtrl', ['$location', '$scope', '$log', 'esMessaging', 'esWebApi', 'esGlobals',
function($location, $scope, $log, esMessaging, esWebApiService, esGlobals) {

	// other things to do

	esMessaging.subscribe("ES_HTTP_CORE_ERR", function(rejection, status) {
			var s = esGlobals.getUserMessage(rejection, status);
			$scope.esnotify.error(s.messageToShow);
	});
}
]);
```             **/
                getUserMessage: getUserMessage,


                /**
					 * @ngdoc function
					 * @name es.Services.Web.esGlobals#getESUISettings
					 * @methodOf es.Services.Web.esGlobals
					 * @module es.Services.Web
					 * @kind function
					 * @description Function that returns an object with properties the reflect current ui settings that the Entersoft UI framework takes
					 * into account i.e. mobile for kendo-grids, defaultGridHeight for kendo-grids, etc.
					 * @return {object} Returns an object
```js
{
mobile: string | undefined, /* string can take the following values: 'desktop' or 'tablet' or 'phone'
defaultGridHeight: string or undefined
}
```
					 **/
                getESUISettings: function() {
                    return esUISettings;
                },

                /**
                 * @ngdoc function
                 * @name es.Services.Web.esGlobals#ESPublicQueryDef
                 * @methodOf es.Services.Web.esGlobals
                 * @module es.Services.Web
                 * @kind constructor
                 * @constructor
                 * @description Constructs an ESPublicQueryDef object that will be used to specify the execution of a PublicQuery in a call to multiPublicQuery
                 * @param {string} CtxID A unique identifier for this PQ execution call (unique in the context of the array of ESPublicQueryDef that will be used in the execution of multiPublicQuery)
                 * @param {string} GroupID The GroupID of the Public Query
                 * @param {string} FilterID The FilterID of the Public Query
                 * @param {ESPQOptions} The paging options for the Public Query Execution. See {@link es.Services.Web.esGlobals#methods_ESPQOptions ESPQOptions}.
                 * @param {object} Params The params to be used for the execution of the Public Query
                 */
                ESPublicQueryDef: ESPublicQueryDef,

                /**
                 * @ngdoc function
                 * @name es.Services.Web.esGlobals#ESMultiZoomDef
                 * @methodOf es.Services.Web.esGlobals
                 * @module es.Services.Web
                 * @kind constructor
                 * @constructor
                 * @description Constructs an ESPublicQueryDef object that will be used to specify the execution of a PublicQuery in a call to multiPublicQuery
                 * @param {string} ZoomID The ID of the ES Zoom to be retrieved i.e. "__ESGOZCountry__"
                 * @param {ESPQOptions} PQOptions The server side paging options to be used for the Zoom retrieval. See {@link es.Services.Web.esGlobals#methods_ESPQOptions ESPQOptions}.
                 * @param {boolean} UseCache A boolean value indicating whether the contents of this specific Zoom will be retrieved and stored in the ESWebAPI client-side memory cache.
                 */
                ESMultiZoomDef: ESMultiZoomDef,

                /**
                 * @ngdoc constructor
                 * @name es.Services.Web.esGlobals#ESPQOptions
                 * @methodOf es.Services.Web.esGlobals
                 * @module es.Services.Web
                 * @kind constructor
                 * @constructor
                 * @description Constructs an ESPQOptions object that specifies the server side paging options of a Public Query execution
                 * @param {number} Page The Server Side Page Number (__1-based__) to be retrieved. Valid is considered any value represeting a number >= 1
                 * @param {number} PageSize The Server Side size of page (> =1) to be retrieved from the server. 
                 * @param {boolean} WithCount If true, the result of the execution will also have the total number of records that exist for this execution run of the PQ
                 */
                ESPQOptions: ESPQOptions,

                ESParamValues: ESParamValues,
                ESParamVal: ESParamVal,
                ESNumericParamVal: ESNumericParamVal,
                ESStringParamVal: ESStringParamVal,
                ESDateParamVal: ESDateParamVal,
                ESBoolParamVal: ESBoolParamVal,

                getesDateRangeOptions: fGetesDateRangeOptions,

                getesComplexParamFunctionOptions: function() {
                    return esComplexParamFunctionOptions;
                },


                sessionClosed: function() {
                    esClientSession.setModel(null);
                    try {
                        esCache.clear();
                    } catch (x) {

                    }
                },

                sessionOpened: function(data, credentials) {
                    try {
                        try {
                            esCache.clear();
                        } catch (x) {

                        }

                        data.Model.LangID = data.Model.LangID || (credentials || {}).LangID || window.esLoginLanguage;
                        data.Model.BranchID = data.Model.BranchID || (credentials || {}).BranchID || "-";
                        data.Model.Claims = data.Claims;
                        if (angular.isUndefined(data.IsExternal)) {
                            data.Model.IsExternal = data.Claims && data.Claims["IsExternal"];
                        } else 
                        {
                            data.Model.IsExternal = data.IsExternal;
                        }

                        esClientSession.setModel(data.Model);

                        $log.info("LOGIN User ", data.Model.Name);

                    } catch (exc) {
                        $log.error(exc);
                        throw exc;
                    }
                }
            }
        }
    ]);
})();

(function() {
    'use strict';

    var esWebFramework = angular.module('es.Services.Web');

    /**
     * @ngdoc service
     * @name es.Services.Web.esStackTrace
     * @description
     * # esStackTrace and other services
     * Factory used to provide the stacktracejs javascript library for complete stack trace error reporting.
     */
    esWebFramework.factory(
        "esStackTrace",

        /**
         * @ngdoc
         * @name es.Services.Web.esStackTrace#print
         * @methodOf es.Services.Web.esStackTrace
         *
         * @description
         * Method that returns the printStackTrace object from the corresponding javascript library.
         * For more information on printStackTrace please see {@link https://github.com/stacktracejs/stacktrace.js/ stacktrace.js}
         * @returns {function} printStackTrace
         **/
        function() {
            var so;
            try {
                so = printStackTrace;
            } catch(e) {
                so = StackTrace;
            }
            return ({
                print: so
            });
        }
    );

    esWebFramework.provider("$log",
        function() {
            var logAppenders = [];
            var ajaxAppender = null;
            var logger = null;
            var level = log4javascript.Level.ALL;
            var lt = null;

            function getLogger() {
                return log4javascript.getLogger('esLogger');
            }

            function createDefaultAppenders(addPopup) {
                doaddAppender(new log4javascript.BrowserConsoleAppender());

                var x = angular.isDefined(addPopup) && addPopup;
                if (x) {
                    doaddAppender(new log4javascript.PopUpAppender());
                }
            }

            function setAccessToken(session, token) {
                if (!ajaxAppender) {
                    return;
                }

                if (lt && session && session.connectionModel) {
                    lt.setCustomField("userId", session.connectionModel.UserID);
                    lt.setCustomField("branchId", session.connectionModel.BranchID);
                    lt.setCustomField("langId", session.connectionModel.LangID);
                }

                var hd = ajaxAppender.getHeaders();
                if (hd) {
                    var i;
                    var foundIndex = -1;
                    for (i = 0; i < hd.length; i++) {
                        if (hd[i].name == "Authorization") {
                            foundIndex = i;
                            break;
                        }
                    }
                    if (foundIndex != -1) {
                        hd.splice(foundIndex, 1);
                    }
                }

                if (token && token != "") {
                    ajaxAppender.addHeader("Authorization", token);
                }
            }

            function doaddAppender(appender) {
                if (logAppenders.indexOf(appender) == -1) {
                    logAppenders.push(appender);
                    return true;
                }
                return false;
            }

            return {

                setLevel: function(lvl) {
                    level = lvl;
                    if (logger) {
                        logger.setLevel(level);
                    }
                },

                getLevel: function() {
                    return level;
                },

                getCurrentLevel: function() {
                    if (logger) {
                        return logger.getEffectiveLevel();
                    } else {
                        return log4javascript.Level.OFF;
                    }
                },

                addAppender: doaddAppender,

                addDefaultAppenders: createDefaultAppenders,

                addESWebApiAppender: function(srvUrl, subscriptionId) {
                    // var ajaxUrl = srvUrl + "api/rpc/log/";
                    var ajaxUrl = srvUrl + "api/rpc/EventLog/";

                    ajaxAppender = new log4javascript.AjaxAppender(ajaxUrl, false);
                    ajaxAppender.setSendAllOnUnload(true);

                    lt = new log4javascript.JsonLayout();
                    lt.setCustomField("subscriptionId", subscriptionId);

                    ajaxAppender.setLayout(lt);
                    ajaxAppender.setWaitForResponse(true);
                    ajaxAppender.setBatchSize(100);
                    ajaxAppender.setTimed(true);
                    ajaxAppender.setTimerInterval(60000);
                    ajaxAppender.addHeader("Content-Type", "application/json");

                    ajaxAppender.setRequestSuccessCallback(function(xmlHttp) {
                        console.log("ES Logger, BATCH of logs upoloaded", xmlHttp.responseURL, xmlHttp.status);
                    });

                    ajaxAppender.setFailCallback(function(messg) {
                        console.error("Failed to POST Logs to the server", messg);
                    });
                    return doaddAppender(ajaxAppender);
                },

                $get: ['esMessaging',
                    function(esMessaging) {
                        try {

                            logger = getLogger();
                            logger.setLevel(level);

                            if (logAppenders.length == 0) {
                                createDefaultAppenders();
                            }

                            var i = 0;
                            for (i = 0; i < logAppenders.length; i++) {
                                logger.addAppender(logAppenders[i]);
                            }

                            esMessaging.subscribe("AUTH_CHANGED", function(session, tok) {
                                setAccessToken(session, tok)
                            });

                            logger.sendAll = function() {
                                try {
                                    if (ajaxAppender) {
                                        ajaxAppender.sendAll();
                                    }
                                } catch (exc) {

                                }
                            }

                            console.info("ES Logger started");
                            return logger;
                        } catch (exception) {
                            console.log("Error in starting entersoft logger", exception);
                            return $log;
                        }

                    }
                ]
            }
        }

    );


    // -------------------------------------------------- //
    // -------------------------------------------------- //


    // By default, AngularJS will catch errors and log them to
    // the Console. We want to keep that behavior; however, we
    // want to intercept it so that we can also log the errors
    // to the server for later analysis.
    esWebFramework.provider("$exceptionHandler",
        function() {
            var logSettings = {
                pushToServer: false,
                logServer: ""
            };
            return {
                getSettings: function() {
                    return logSettings;
                },

                setPushToServer: function(pushToServer) {
                    logSettings.pushToServer = pushToServer;
                },

                setLogServer: function(logServer) {
                    logSettings.logServer = logServer;
                },

                $get: ['$log', '$window', 'esStackTrace', '$injector',
                    function($log, $window, stacktraceService, $injector) {

                        // I log the given error to the remote server.
                        function log(exception, cause) {
                            var errorMessage, stackTrace, itm;

                            try {
                                var esMessaging = $injector.get('esMessaging');
                                esMessaging.publish("ES_HTTP_CORE_ERR", exception);

                                
                                errorMessage = exception.toString();
                                stackTrace = stacktraceService.print({
                                    e: exception
                                });

                                itm = {
                                    errorUrl: $window.location.href,
                                    errorMessage: errorMessage,
                                    stackTrace: stackTrace,
                                    cause: (cause || "")
                                };

                                $log.error(JSON.stringify(itm, null, '\t'));

                            } catch (loggingError) {
                                console.log(arguments);
                            }

                            if (logSettings.pushToServer) {
                                // Now, we need to try and log the error the server.
                                // --
                                // NOTE: In production, I have some debouncing
                                // logic here to prevent the same client from
                                // logging the same error over and over again! All
                                // that would do is add noise to the log.
                                try {
                                    var ESWEBAPI = $injector.get('esWebApi');

                                    ESWEBAPI.registerException(itm, logSettings.logServer);

                                } catch (loggingError) {

                                    // For Developers - log the log-failure.
                                    $log.warn("ES Error in registerException on store " + logSettings.logServer);
                                    $log.error(loggingError);

                                }
                            }

                        }
                        // Return the logging function.
                        return (log);
                    }
                ]

            }
        }
    );
})();

/**
 * @ngdoc overview
 * @name es.Web.UI
 * @module es.Web.UI
 * @kind module
 * @description
 * This module encapsulates a set of directives, filters, services and methods for UI
 */

(function () {
    "use strict";
    var esWEBUI = angular.module("es.Web.UI", [
        "ngAnimate",
        "ui.bootstrap",
        "ngSanitize",
        "pascalprecht.translate",
        "dx",
        "angular-clipboard",
    ]);

    esWEBUI.run([
        "$translate",
        "esMessaging",
        "$q",
        "$http",
        "$injector",
        function ($translate, esMessaging, $q, $http, $injector) {
            window.esLoginLanguage =
                navigator.language || navigator.userLanguage || "en-US";

            esMessaging.subscribe("AUTH_CHANGED", function (sess, apitoken) {
                var lang =
                    sess && sess.connectionModel && sess.connectionModel.LangID
                        ? sess.connectionModel.LangID
                        : window.esLoginLanguage;

                doChangeLanguage($translate, lang, $q, $http, $injector);

                if (sess && sess.connectionModel && apitoken) {
                    var api = $injector.get("esWebApi");
                    var esCache = $injector.get("esCache");
                    if (DevExpress && api && esCache) {
                        var x = esCache.getItem("ES_BASE_CURR");
                        if (x) {
                            DevExpress.config({ defaultCurrency: x });
                            return;
                        }

                        if (sess.connectionModel.IsExternal) {
                            DevExpress.config({ defaultCurrency: "EUR" });
                        } else {
                            api.getParameterValue("ESFICALYEARBASECURRENCY")
                                .then(function (ret) {
                                    esCache.setItem("ES_BASE_CURR", ret.data);
                                    DevExpress.config({
                                        defaultCurrency: ret.data,
                                    });
                                })
                                .catch(function (err) {});
                        }
                    }
                }
            });
        },
    ]);

    $(document).on("click.nav", ".navbar-collapse.in", function (e) {
        if ($(e.target).is("a")) {
            $(this).removeClass("in").addClass("collapse");
        }
    });

    function doChangeLanguage($translate, lang, $q, $http, $injector) {
        lang = lang || window.esLoginLanguage;
        var esCache = $injector.get("esCache");
        var aPart = lang.split("-")[0];

        var langURLPrefix = window.ESIsB2B ? "/assets/collab/" : "";

        $translate.use(aPart);

        if (Globalize) {
            if (!esCache.getItem("Globalize_" + lang)) {
                $q.all([
                    $http.get(
                        langURLPrefix +
                            "languages/" +
                            aPart +
                            "-ca-gregorian.json"
                    ),
                    $http.get(
                        langURLPrefix + "languages/" + aPart + "-numbers.json"
                    ),
                    $http.get(
                        langURLPrefix +
                            "languages/" +
                            aPart +
                            "-currencies.json"
                    ),

                    $http.get(langURLPrefix + "languages/likelySubtags.json"),
                    $http.get(langURLPrefix + "languages/timeData.json"),
                    $http.get(langURLPrefix + "languages/weekData.json"),
                    $http.get(langURLPrefix + "languages/currencyData.json"),
                    $http.get(
                        langURLPrefix + "languages/numberingSystems.json"
                    ),
                ])
                    .then(
                        function (ret) {
                            _.forEach(ret, function (x) {
                                Globalize.load(x.data);
                            });
                        } //loads data held in each array item to Globalize
                    )
                    .then(function () {
                        Globalize.locale(lang);
                        if (esCache) {
                            esCache.setItem("Globalize_" + lang, true);
                        }
                    })
                    .catch(function (xerr) {
                        throw xerr;
                    });
            } else {
                Globalize.locale(lang);
            }

            if (kendo) {
                kendo.culture(lang);
                if (!esCache.getItem("kendo_" + lang)) {
                    var kendoMessagesUrl =
                        langURLPrefix +
                        "languages/kendo.messages." +
                        lang +
                        ".min.js";

                    $.getScript(kendoMessagesUrl, function () {
                        esCache.setItem("kendo_" + lang, true);
                    });
                }
            }
        }
    }

    function getPivotColFormatType(col) {
        var colType = col.dataType;

        switch (colType) {
            case "decimal": {
                var fmt = col.format;
                var prec = 0;
                if (fmt) {
                    var idx = fmt.indexOf(".");
                    if (idx != -1) {
                        var s = fmt.slice(idx);
                        var cnt = s.split("0").length - 1;
                        prec = cnt < 0 ? 0 : cnt;
                    }
                }

                return {
                    type: "fixedPoint",
                    precision: prec,
                };
            }
            case "datetime":
                return "shortDateShortTime";
            case "date":
                return "shortDate";
            default:
                return null;
        }
    }

    function ESFavourites(inVal) {
        this.shortcuts = [];
        this.lastModified = new Date();

        if (!inVal) {
            return;
        }

        if (angular.isString(inVal)) {
            var source = JSON.parse(inVal);

            this.shortcuts = source.shortcuts || [];
            this.lastModified = source.lastModified;
            return;
        }

        if (angular.isArray(inVal)) {
            this.shortcuts = inVal;
        }
    }

    const FAVOURITES_TYPEID = 9000;
    const ESLINK_TYPEID = 9100;

    var loadFavourites = function (
        $q,
        esGlobals,
        esMessaging,
        esWebApiService,
        esCache
    ) {
        var deferred = $q.defer();
        var y = esCache.getItem("ES_USR_FAV");
        if (y) {
            deferred.resolve(y);
        } else {
            esWebApiService
                .getBodyFromES00Blob(
                    "ESGOUser",
                    esGlobals.getClientSession().connectionModel.GID,
                    9000
                )
                .then(function (ret) {
                    var x = new ESFavourites(ret.data.TextBody);
                    esCache.setItem("ES_USR_FAV", x);
                    deferred.resolve(x);
                })
                .catch(function (err) {
                    deferred.reject(err);
                });
        }

        return deferred.promise;
    };

    ESFavourites.prototype.addRemoveFav = function (
        esGlobals,
        esMessaging,
        esWebApiService,
        esPQDef,
        sTitle,
        bRemove
    ) {
        if (!esPQDef || !esPQDef.CtxID) {
            return;
        }

        var id = esPQDef.CtxID.toLowerCase();

        if (angular.isDefined(bRemove)) {
            _.pullAt(this.shortcuts, bRemove);
            esMessaging.publish("FAV_REMOVED", id);
        } else {
            var point = {
                ID: id,
                Params: esPQDef.Params.getSerialized(),
                Title: sTitle,
            };

            this.shortcuts.push(point);
        }

        return this.save(esGlobals, esWebApiService);
    };

    ESFavourites.prototype.clearAll = function (esGlobals, esWebApiService) {
        this.lastModified = new Date();

        this.shortcuts = [];
        return this.save(esGlobals, esWebApiService);
    };

    ESFavourites.prototype.save = function (esGlobals, esWebApiService) {
        this.lastModified = new Date();

        var blobInfo = {
            ObjectID: "ESGOUser",
            KeyID: esGlobals.getClientSession().connectionModel.GID,
            TypeID: FAVOURITES_TYPEID,
            TextBody: JSON.stringify(this),
        };
        return esWebApiService.postBodyToES00Blob(blobInfo);
    };

    ESFavourites.prototype.moveUpOrDown = function (
        esGlobals,
        esWebApiService,
        curPos,
        bUp
    ) {
        if (!this.shortcuts || this.shortcuts.length < 2) {
            return;
        }

        if (curPos == -1) {
            return;
        }

        if (curPos == 0 && bUp) {
            return;
        }

        if (curPos == this.shortcuts.length - 1 && !bUp) {
            return;
        }

        var newPos = bUp ? curPos - 1 : curPos + 1;
        var temp = this.shortcuts[newPos];
        this.shortcuts[newPos] = this.shortcuts[curPos];
        this.shortcuts[curPos] = temp;

        var promise = this.save(esGlobals, esWebApiService);
        return {
            from: curPos,
            to: newPos,
            promise: promise,
        };
    };

    function ESMasterDetailGridRelation(
        relationID,
        detailDataSource,
        detailParams,
        detailGridParamCode
    ) {
        this.relationID = relationID;
        this.detailDataSource = detailDataSource;
        this.detailParams = detailParams;
        this.detailParamCode = detailGridParamCode || "ISUDGID";
    }

    function ESRequeryDetailGrids() {
        this.registeredRelations = [];
    }

    ESRequeryDetailGrids.prototype.addDetailRelation = function (relInfo) {
        if (!relInfo || !(relInfo instanceof ESMasterDetailGridRelation)) {
            throw "relInfo parameter is null or is not of type ESMasterDetailGridRelation";
        }

        if (!relInfo.relationID) {
            throw "The parameter does not contain relationID or is null/emptystring/undefined";
        }

        var newRelId = relInfo.relationID.toLowerCase();
        var ix = _.findIndex(this.registeredRelations, function (x) {
            return x.relationID.toLowerCase() == newRelId;
        });
        if (ix < 0) {
            this.registeredRelations.push(relInfo);
        } else {
            this.registeredRelations[ix] = relInfo;
        }
        return this;
    };

    ESRequeryDetailGrids.prototype.getDetailRelation = function (relationId) {
        if (!relationID) {
            throw "relationID is null/emptystring/undefined";
        }

        var newRelId = relationID.toLowerCase();
        var ix = _.findIndex(this.registeredRelations, function (x) {
            return x.toLowerCase() == newRelId;
        });
        if (ix < 0) {
            return null;
        } else {
            return this.registeredRelations[ix];
        }
    };

    ESRequeryDetailGrids.prototype.removeDetailRelation = function (
        relationId
    ) {
        if (!relationID) {
            throw "relationID is null/emptystring/undefined";
        }

        var newRelId = relationID.toLowerCase();
        var ix = _.findIndex(this.registeredRelations, function (x) {
            return x.toLowerCase() == newRelId;
        });
        if (ix < 0) {
            return false;
        } else {
            this.registeredRelations = this.registeredRelations.splice(ix, 1);
            return true;
        }
    };

    function esAskForField($uibModal, inData) {
        if (!inData) {
            return;
        }

        var modalInstance = $uibModal.open({
            animation: true,
            ariaLabelledBy: "modal-title",
            ariaDescribedBy: "modal-body",
            template:
                "<div ng-include src=\"'src/partials/esAskForField.html'\"></div>",
            controller: "esAskForFieldCtrl",
            controllerAs: "$ctrl",
            size: "sm",
            appendTo: null,
            resolve: {
                inDef: function () {
                    return inData;
                },
            },
        });

        return modalInstance.result;
    }

    function esChangePassword($uibModal, inData) {
        if (!inData) {
            return;
        }

        var modalInstance = $uibModal.open({
            animation: true,
            ariaLabelledBy: "modal-title",
            ariaDescribedBy: "modal-body",
            template:
                "<div ng-include src=\"'src/partials/esChangePassword.html'\"></div>",
            controller: "esChangePasswordCtrl",
            controllerAs: "$ctrl",
            size: "md",
            appendTo: null,
            resolve: {
                inDef: function () {
                    return inData;
                },
            },
        });

        return modalInstance.result;
    }

    function esResolveBlobUrl(val, esWebApiService) {
        if (!val || !angular.isString(val)) return null;

        if (
            val.toLowerCase().trim().indexOf("http://") === 0 ||
            val.toLowerCase().trim().indexOf("https://") === 0
        ) {
            return val;
        } else {
            return esWebApiService.downloadES00BlobURLByGID(val, 0);
        }
    }

    function esResolveUserLogoUrl(val, esWebApiService) {
        if (!val || !angular.isString(val)) return null;

        if (
            val.toLowerCase().trim().indexOf("http://") === 0 ||
            val.toLowerCase().trim().indexOf("https://") === 0
        ) {
            return val;
        } else {
            return esWebApiService.userLogoUrl(val);
        }
    }

    /**
     * @ngdoc filter
     * @name es.Web.UI.filter:esTrustHtml
     *
     * @description
     * Creates `esGrid` Directive
     * * If `source` is not an object or array (inc. `null` and `undefined`), `source` is returned.
     * * If `source` is identical to 'destination' an exception will be thrown.
     *
     * @requires $sce
     */
    esWEBUI
        .filter("esTrustHtml", [
            "$sce",
            function ($sce) {
                return function (text) {
                    return $sce.trustAsHtml(text);
                };
            },
        ])
        .filter("esParamTypeMapper", [
            "esUIHelper",
            function (esUIHelper) {
                var f = function (pParam) {
                    if (
                        !pParam ||
                        !(pParam instanceof esUIHelper.ESParamInfo)
                    ) {
                        return "";
                    }
                    return pParam.paramTemplate();
                };
                return f;
            },
        ])

        .directive("errSrc", function () {
            return {
                link: function (scope, element, attrs) {
                    element.bind("error", function () {
                        if (attrs.src != attrs.errSrc) {
                            attrs.$set("src", attrs.errSrc);
                        }
                    });
                },
            };
        })

        .directive("esPositiveInteger", [
            "$parse",
            function ($parse) {
                var INTEGER_REGEXP = /^\+?\d+$/;
                return {
                    require: "ngModel",
                    restrict: "A",
                    link: function (scope, iElement, iAttrs, ctrl) {
                        var AllowZero = false;

                        if (angular.isDefined(iAttrs.esPositiveInteger)) {
                            try {
                                AllowZero = $parse(iAttrs.esPositiveInteger)(
                                    scope
                                );
                            } catch (ex) {}
                        }

                        ctrl.$validators.esPositiveInteger = function (
                            modelValue,
                            viewValue
                        ) {
                            if (
                                ctrl.$isEmpty(modelValue) || AllowZero
                                    ? modelValue < 0
                                    : modelValue <= 0
                            ) {
                                // consider empty models to be valid
                                return false;
                            }

                            if (INTEGER_REGEXP.test(viewValue)) {
                                // it is valid
                                return true;
                            }

                            // it is invalid
                            return false;
                        };
                    },
                };
            },
        ])

        .directive("esLogin", [
            "$q",
            "$http",
            "$translate",
            "$log",
            "$uibModal",
            "esWebApi",
            "esUIHelper",
            "esGlobals",
            "$sanitize",
            "$injector",
            function (
                $q,
                $http,
                $translate,
                $log,
                $uibModal,
                esWebApiService,
                esWebUIHelper,
                esGlobals,
                $sanitize,
                $injector
            ) {
                return {
                    restrict: "AE",
                    scope: {
                        esShowSubscription: "=",
                        esShowOnPremises: "=",
                        esShowBridge: "=",
                        esCredentials: "=",
                        esShowStickySession: "=",
                        esLoginLabel: "@?",
                        esLoginVersion: "@?",
                        esLoginUrl: "@?",
                        esLoginTerms: "@?",
                        esLoginTermsUrl: "@?",
                        esLoginSignUp: "@?",
                        esLoginSignUpUrl: "@?",
                        esLoginIcon: "=?",
                        esLoginShowRememberMe: "=?",
                        esOnSuccess: "&",
                    },
                    template:
                        "<div ng-include src=\"'src/partials/esLogin.html'\"></div>",
                    link: function ($scope, iElement, iAttrs) {
                        var onLangChanged = function () {
                            if ($scope.esCredentials.LangID) {
                                var lang = $scope.esCredentials.LangID;
                                doChangeLanguage(
                                    $translate,
                                    lang,
                                    $q,
                                    $http,
                                    $injector
                                );
                            }
                            window.esLoginLanguage =
                                $scope.esCredentials.LangID ||
                                navigator.language ||
                                navigator.userLanguage ||
                                "en-US";
                        };

                        $scope.esGlobals = esGlobals;
                        $scope.esLangOptions = {
                            dataSource: esGlobals.esSupportedLanguages,
                            dataTextField: "title",
                            dataValueField: "id",
                            change: onLangChanged,
                            valuePrimitive: true,
                            autoBind: true,
                            valueTemplate:
                                "<img ng-src={{dataItem.icon}}></img><span>{{dataItem.title}}</span>",
                            template:
                                "<img ng-src={{dataItem.icon}}></img><span>{{dataItem.title}}</span>",
                        };

                        if ($scope.esCredentials.LangID) {
                            var lang = $scope.esCredentials.LangID;
                            doChangeLanguage(
                                $translate,
                                lang,
                                $q,
                                $http,
                                $injector
                            );
                        }
                    },
                };
            },
        ])

        .directive("esPropertyQuestion", [
            "$log",
            "$uibModal",
            "esWebApi",
            "esUIHelper",
            "esGlobals",
            "$sanitize",
            function (
                $log,
                $uibModal,
                esWebApiService,
                esWebUIHelper,
                esGlobals,
                $sanitize
            ) {
                return {
                    restrict: "AE",
                    scope: {
                        esQuestion: "=",
                        esPsDef: "=",
                        esPsVal: "=",
                    },
                    template:
                        "<div ng-include src=\"'src/partials/esSurvey/esPropertyQuestion_'+esQuestion.PType+'.html'\"></div>",
                    link: function ($scope, iElement, iAttrs) {
                        $scope.esGlobals = esGlobals;

                        //Check for ZoomDS
                        var qs = $scope.esQuestion;
                        if (qs && qs.PArg && qs.PType == 7) {
                            $scope[qs.PArg + "_DS"] =
                                esWebUIHelper.getZoomDataSource(qs.PArg);
                        }

                        $scope.openCalendar = function ($event) {
                            $scope.calendarStatus.opened = true;
                        };

                        $scope.calendarStatus = {
                            opened: false,
                        };

                        $scope.calendarFormat = "dd-MMMM-yyyy";

                        $scope.getScale = function (upTo) {
                            if (!upTo || isNaN(upTo)) {
                                return [];
                            }

                            return _.range(1, Math.abs(parseInt(upTo)) + 1);
                        };

                        $scope.getChoicesOfQuestion = function () {
                            if (
                                !$scope.esQuestion ||
                                !$scope.esQuestion.PArg ||
                                !$scope.esPsDef ||
                                !$scope.esPsDef.Choices
                            ) {
                                return [];
                            }

                            return _.sortBy(
                                _.filter($scope.esPsDef.Choices, {
                                    ChoiceCode: $scope.esQuestion.PArg,
                                }),
                                "OrderPriority"
                            );
                        };
                    },
                };
            },
        ]);

    function convertPQRowsToMapRows(rows, valueField) {
        if (!rows) {
            return rows;
        }

        if (angular.isArray(rows) && rows.length == 0) {
            return rows;
        }

        var ts = _.forEach(rows, function (r) {
            r.latlng = [r.Latitude, r.Longitude];
        });

        return _.filter(ts, function (x) {
            if (!(x.Longitude && x.Latitude)) {
                return false;
            }

            if (!valueField) {
                return true;
            }

            return x[valueField] > 0;
        });
    }

    esWEBUI
        .filter("esPQDSToesMapDS", function () {
            return convertPQRowsToMapRows;
        })

        .directive("esSurvey", [
            "$log",
            "$uibModal",
            "esWebApi",
            "esUIHelper",
            "esGlobals",
            "$sanitize",
            function (
                $log,
                $uibModal,
                esWebApiService,
                esWebUIHelper,
                esGlobals,
                $sanitize
            ) {
                return {
                    restrict: "AE",
                    scope: {
                        esSectionIdx: "=",
                        esPsDef: "=",
                        esPsVal: "=",
                    },
                    template:
                        "<div ng-include src=\"'src/partials/esSurvey/esSurvey.html'\"></div>",
                    link: function ($scope, iElement, iAttrs) {
                        $scope.esGlobals = esGlobals;

                        $scope.isIntroduction = function () {
                            return $scope.esSectionIdx < 0;
                        };

                        $scope.isLast = function () {
                            if (!$scope.esPsDef || !$scope.esPsDef.Sections) {
                                return true;
                            }
                            return (
                                $scope.esSectionIdx ==
                                $scope.esPsDef.Sections.length - 1
                            );
                        };

                        $scope.saveAndComplete = function () {};

                        $scope.getQuestionsofSection = function () {
                            if (
                                !$scope.esPsDef ||
                                !$scope.esPsDef.Sections ||
                                $scope.esSectionIdx < 0 ||
                                $scope.esSectionId >=
                                    $scope.esPsDef.Sections.length
                            ) {
                                return [];
                            }

                            var sect =
                                $scope.esPsDef.Sections[$scope.esSectionIdx]
                                    .Code;
                            if (!sect) {
                                return [];
                            }

                            return _.sortBy(
                                _.filter($scope.esPsDef.Lines, {
                                    Category_Code: sect,
                                }),
                                "SeqNum"
                            );
                        };

                        $scope.progress = function () {
                            if (
                                $scope.esSectionIdx < 0 ||
                                !$scope.esPsDef ||
                                !$scope.esPsDef.Sections ||
                                !$scope.esPsDef.Sections.length
                            ) {
                                return 0;
                            }

                            return Math.round(
                                (($scope.esSectionIdx + 1) /
                                    $scope.esPsDef.Sections.length) *
                                    100
                            );
                        };

                        $scope.advanceStep = function () {
                            if ($scope.isLast()) {
                                return;
                            }
                            $scope.esSectionIdx += 1;
                        };

                        $scope.backStep = function () {
                            if ($scope.isIntroduction()) {
                                return;
                            }
                            $scope.esSectionIdx -= 1;
                        };
                    },
                };
            },
        ])

        .directive("esChecklistModel", [
            "$parse",
            "$compile",
            function ($parse, $compile) {
                // contains
                function contains(arr, item, comparator) {
                    if (angular.isArray(arr)) {
                        for (var i = arr.length; i--; ) {
                            if (comparator(arr[i], item)) {
                                return true;
                            }
                        }
                    }
                    return false;
                }

                // add
                function add(arr, item, comparator) {
                    arr = angular.isArray(arr) ? arr : [];
                    if (!contains(arr, item, comparator)) {
                        arr.push(item);
                    }
                    return arr;
                }

                // remove
                function remove(arr, item, comparator) {
                    if (angular.isArray(arr)) {
                        for (var i = arr.length; i--; ) {
                            if (comparator(arr[i], item)) {
                                arr.splice(i, 1);
                                break;
                            }
                        }
                    }
                    return arr;
                }

                // http://stackoverflow.com/a/19228302/1458162
                function postLinkFn(scope, elem, attrs) {
                    // exclude recursion, but still keep the model
                    var esChecklistModel = attrs.esChecklistModel;
                    attrs.$set("esChecklistModel", null);
                    // compile with `ng-model` pointing to `checked`
                    $compile(elem)(scope);
                    attrs.$set("esChecklistModel", esChecklistModel);

                    // getter for original model
                    var esChecklistModelGetter = $parse(esChecklistModel);
                    var checklistChange = $parse(attrs.checklistChange);
                    var checklistBeforeChange = $parse(
                        attrs.checklistBeforeChange
                    );
                    var ngModelGetter = $parse(attrs.ngModel);

                    /*
                                                                                                                ctrl.$validators.esCount = function(modelValue, viewValue) {
                                                                                                                                                return true;
                                                                                                                };
                */
                    var comparator = angular.equals;

                    if (attrs.hasOwnProperty("checklistComparator")) {
                        if (attrs.checklistComparator[0] == ".") {
                            var comparatorExpression =
                                attrs.checklistComparator.substring(1);
                            comparator = function (a, b) {
                                return (
                                    a[comparatorExpression] ===
                                    b[comparatorExpression]
                                );
                            };
                        } else {
                            comparator = $parse(attrs.checklistComparator)(
                                scope.$parent
                            );
                        }
                    }

                    // watch UI checked change
                    scope.$watch(attrs.ngModel, function (newValue, oldValue) {
                        if (newValue === oldValue) {
                            return;
                        }

                        if (
                            checklistBeforeChange &&
                            checklistBeforeChange(scope) === false
                        ) {
                            ngModelGetter.assign(
                                scope,
                                contains(
                                    esChecklistModelGetter(scope.$parent),
                                    getChecklistValue(),
                                    comparator
                                )
                            );
                            return;
                        }

                        setValueInesChecklistModel(
                            getChecklistValue(),
                            newValue
                        );

                        if (checklistChange) {
                            checklistChange(scope);
                        }
                    });

                    // watches for value change of esChecklistValue (Credit to @blingerson)
                    scope.$watch(
                        getChecklistValue,
                        function (newValue, oldValue) {
                            if (
                                newValue != oldValue &&
                                angular.isDefined(oldValue) &&
                                scope[attrs.ngModel] === true
                            ) {
                                var current = esChecklistModelGetter(
                                    scope.$parent
                                );
                                esChecklistModelGetter.assign(
                                    scope.$parent,
                                    remove(current, oldValue, comparator)
                                );
                                esChecklistModelGetter.assign(
                                    scope.$parent,
                                    add(current, newValue, comparator)
                                );
                            }
                        }
                    );

                    function getChecklistValue() {
                        return attrs.esChecklistValue
                            ? $parse(attrs.esChecklistValue)(scope.$parent)
                            : attrs.value;
                    }

                    function setValueInesChecklistModel(value, checked) {
                        var current = esChecklistModelGetter(scope.$parent);
                        if (angular.isFunction(esChecklistModelGetter.assign)) {
                            if (checked === true) {
                                esChecklistModelGetter.assign(
                                    scope.$parent,
                                    add(current, value, comparator)
                                );
                            } else {
                                esChecklistModelGetter.assign(
                                    scope.$parent,
                                    remove(current, value, comparator)
                                );
                            }
                        }
                    }

                    // declare one function to be used for both $watch functions
                    function setChecked(newArr, oldArr) {
                        if (
                            checklistBeforeChange &&
                            checklistBeforeChange(scope) === false
                        ) {
                            setValueInesChecklistModel(
                                getChecklistValue(),
                                ngModelGetter(scope)
                            );
                            return;
                        }
                        ngModelGetter.assign(
                            scope,
                            contains(newArr, getChecklistValue(), comparator)
                        );
                    }

                    // watch original model change
                    // use the faster $watchCollection method if it's available
                    if (angular.isFunction(scope.$parent.$watchCollection)) {
                        scope.$parent.$watchCollection(
                            esChecklistModel,
                            setChecked
                        );
                    } else {
                        scope.$parent.$watch(
                            esChecklistModel,
                            setChecked,
                            true
                        );
                    }
                }

                return {
                    restrict: "A",
                    priority: 1000,
                    terminal: true,
                    scope: true,
                    compile: function (tElement, tAttrs) {
                        if (!tAttrs.esChecklistValue && !tAttrs.value) {
                            throw "You should provide `value` or `checklist-value`.";
                        }

                        // by default ngModel is 'checked', so we set it if not specified
                        if (!tAttrs.ngModel) {
                            // local scope var storing individual checkbox model
                            tAttrs.$set("ngModel", "checked");
                        }

                        return postLinkFn;
                    },
                };
            },
        ])

        .controller("esComboPQCtrl", [
            "$scope",
            "$log",
            "$window",
            "esMessaging",
            "esWebApi",
            "esUIHelper",
            "esGlobals",
            "$translate",
            "$uibModal",
            "$q",
            "esCache",
            "$timeout",
            "$interval",
            "clipboard",
            function (
                $scope,
                $log,
                $window,
                esMessaging,
                esWebApiService,
                esWebUIHelper,
                esGlobals,
                $translate,
                $uibModal,
                $q,
                esCache,
                $timeout,
                $interval,
                clipboard
            ) {
                function esTranslate(item, lang) {
                    if (lang) {
                        lang = lang.split("-")[0];
                    }

                    function fallBack(item) {
                        var trans = item["en"];
                        if (trans) {
                            return trans;
                        }
                        for (var prop in item) {
                            return item[prop];
                        }
                        return "";
                    }

                    if (!item) {
                        return "";
                    }

                    if (angular.isString(item)) {
                        return item;
                    }

                    if (!angular.isObject(item)) {
                        return item;
                    }

                    if (!lang) {
                        return fallBack(item);
                    }

                    return item[lang] || fallBack(item);
                }

                function processesDef(esDef, lang) {
                    if (angular.isArray(esDef)) {
                        _.forEach(esDef, function (x) {
                            processesDef(x, lang);
                        });

                        return;
                    }

                    if (esDef && esDef.Title) {
                        esDef.Title = esTranslate(esDef.Title, lang);
                    }

                    if (angular.isArray(esDef)) {
                        processesDef(esDef, lang);
                        return;
                    }

                    if (esDef && esDef.Description) {
                        esDef.Description = esTranslate(
                            esDef.Description,
                            lang
                        );
                    }

                    if (esDef && esDef.UIOptions && esDef.UIOptions.title) {
                        esDef.UIOptions.title = esTranslate(
                            esDef.UIOptions.title,
                            lang
                        );
                    }

                    if (esDef && esDef.UIOptions && esDef.UIOptions.valueAxis) {
                        var loop = angular.isArray(esDef.UIOptions.valueAxis)
                            ? esDef.UIOptions.valueAxis
                            : [esDef.UIOptions.valueAxis];
                        _.forEach(loop, function (x) {
                            if (x.title && x.title.text) {
                                x.title.text = esTranslate(x.title.text, lang);
                            }
                        });
                    }

                    if (esDef && esDef.UIOptions && esDef.UIOptions.xAxis) {
                        var loop = angular.isArray(esDef.UIOptions.xAxis)
                            ? esDef.UIOptions.xAxis
                            : [esDef.UIOptions.xAxis];
                        _.forEach(loop, function (x) {
                            if (x.title && x.title.text) {
                                x.title.text = esTranslate(x.title.text, lang);
                            }
                        });
                    }

                    if (esDef && esDef.UIOptions && esDef.UIOptions.yAxis) {
                        var loop = angular.isArray(esDef.UIOptions.yAxis)
                            ? esDef.UIOptions.yAxis
                            : [esDef.UIOptions.yAxis];
                        _.forEach(loop, function (x) {
                            if (x.title && x.title.text) {
                                x.title.text = esTranslate(x.title.text, lang);
                            }
                        });
                    }

                    if (esDef && esDef.UIOptions && esDef.UIOptions.valueAxes) {
                        var loop = angular.isArray(esDef.UIOptions.valueAxes)
                            ? esDef.UIOptions.valueAxes
                            : [esDef.UIOptions.valueAxes];
                        _.forEach(loop, function (x) {
                            if (x.title && x.title.text) {
                                x.title.text = esTranslate(x.title.text, lang);
                            }
                        });
                    }

                    if (esDef && esDef.UIOptions && esDef.UIOptions.series) {
                        var loop = angular.isArray(esDef.UIOptions.series)
                            ? esDef.UIOptions.series
                            : [esDef.UIOptions.series];
                        _.forEach(loop, function (x) {
                            if (x.title) {
                                x.title = esTranslate(x.title, lang);
                            }
                        });
                    }
                }

                function processComponent(item, lang) {
                    if (angular.isArray(item)) {
                        _.forEach(item, function (x) {
                            processComponent(x, lang);
                        });
                        return;
                    }

                    if (angular.isObject(item)) {
                        if (angular.isDefined(item.Title)) {
                            item.Title = esTranslate(item.Title, lang);
                        }

                        if (angular.isDefined(item.Description)) {
                            item.Description = esTranslate(
                                item.Description,
                                lang
                            );
                        }

                        processesDef(item, lang);

                        if (item.esDef) {
                            processesDef(item.esDef, lang);
                        }
                    }
                }

                function processItem(item, lang) {
                    if (!lang) {
                        lang = esGlobals.getLocale();
                    }
                    if (angular.isArray(item)) {
                        item = _.map(item, function (x) {
                            return _.orderBy(x, ["AA"]);
                        });
                    }
                    processComponent(item, lang);
                    return item;
                }

                function transformIn(arr) {
                    var arr_defs = _.map(arr, function (x) {
                        if (angular.isArray(x)) {
                            return transformIn(x);
                        }

                        var pqDef =
                            new esGlobals.ESPublicQueryDef().initFromObj(
                                x.esDef
                            );
                        pqDef.ESUIType = x.ESUIType.toLowerCase();
                        pqDef.CtxID = x.ID;
                        if (x.esDef) {
                            pqDef.Params = esWebUIHelper.createESParams(
                                x.esDef.Params
                            );
                        }
                        pqDef.AA = x.AA;
                        pqDef.Title = x.Title;
                        return pqDef;
                    });
                    return arr_defs;
                }

                var runOnSuccess = function () {
                    $scope.globalExecutePQ = function (a, b) {
                        var globalParamsDefs =
                            $scope.esPqDef.GlobalParamsPanel.Parameters;

                        $scope.esPqDef.GlobalParamsPanel.esPanelOpen.status = false;

                        _.forEach($scope.esPqDef, function (section) {
                            _.forEach(section, function (dbItem) {
                                _.forEach(
                                    globalParamsDefs.paramsValues,
                                    function (globalParam) {
                                        var x =
                                            dbItem.Params[
                                                globalParam.paramCode
                                            ];
                                        if (x) {
                                            x.pValue(globalParam.pValue());
                                        }
                                    }
                                );

                                dbItem.runPQ && dbItem.runPQ();
                            });
                        });
                    };

                    $scope.showUserMessage = function (message) {
                        if (
                            $scope.esShowUserMessage &&
                            angular.isFunction($scope.esShowUserMessage)
                        ) {
                            $scope.esShowUserMessage({ message: message });
                        }
                    };

                    if ($scope.esPqDef.ID == "favourites") {
                        getFavourites();
                    }

                    var arr = [];
                    if ($scope.esPqDef.ESUIType.toLowerCase() != "escombo") {
                        arr = [$scope.esPqDef];
                    } else {
                        //combo case
                        arr = $scope.esPqDef.esDef;
                        arr = _.map(arr, function (x) {
                            if (angular.isArray(x)) {
                                return x;
                            } else {
                                return [x];
                            }
                        });
                    }

                    var arr_defs = transformIn(arr);

                    var fin;
                    if ($scope.esPqDef.ESUIType.toLowerCase() != "escombo") {
                        fin = processItem(arr_defs[0]);
                    } else {
                        // case combo
                        fin = processItem(arr_defs);
                    }

                    if ($scope.esPqDef.GlobalParamsPanel) {
                        var copyDefs = [];
                        if ($scope.esPqDef.GlobalParamsPanel.Parameters) {
                            var lang = esGlobals.getLocale();

                            _.forEach(
                                $scope.esPqDef.GlobalParamsPanel.Parameters,
                                function (z) {
                                    var d = angular.merge({}, z);
                                    if (d.caption) {
                                        d.caption = esTranslate(
                                            d.caption,
                                            lang
                                        );
                                    }
                                    if (d.tooltip) {
                                        d.tooltip = esTranslate(
                                            d.tooltip,
                                            lang
                                        );
                                    }

                                    copyDefs.push(d);
                                }
                            );
                        }
                        var promises = [];
                        var paramsdef = new esWebUIHelper.ESParamsDefinitions(
                            "",
                            []
                        );
                        paramsdef = paramsdef.createDefinitions("", copyDefs);

                        _.forEach(fin, function (i) {
                            _.forEach(i, function (dbItem) {
                                if (
                                    dbItem.UIOptions &&
                                    dbItem.UIOptions.autoBind
                                ) {
                                    dbItem.UIOptions.autoBind = false;
                                }

                                if (
                                    dbItem.PQOptions &&
                                    dbItem.PQOptions.AutoExecute
                                ) {
                                    dbItem.PQOptions.AutoExecute = false;
                                }

                                dbItem.isDonePromise = $q.defer();
                                var pp = dbItem.isDonePromise.promise;

                                promises.push(pp);
                            });
                        });

                        fin.GlobalParamsPanel = {
                            AutoExecute:
                                $scope.esPqDef.GlobalParamsPanel.AutoExecute,
                            esPanelOpen: {
                                status:
                                    $scope.esPqDef.GlobalParamsPanel
                                        .esPanelOpen &&
                                    $scope.esPqDef.GlobalParamsPanel.esPanelOpen
                                        .status,
                            },
                            Parameters: paramsdef,
                        };
                        if (
                            $scope.esPqDef.GlobalParamsPanel.ReExecute < 1 ||
                            $scope.esPqDef.GlobalParamsPanel.ReExecute >= 60
                        ) {
                            fin.GlobalParamsPanel.ReExecute = 0;
                            console.log(
                                "GlobalParamsPanel.ReExecute value should be between 1 min and 59 mins - " +
                                    $scope.esPqDef.ID
                            );
                        } else {
                            fin.GlobalParamsPanel.ReExecute =
                                $scope.esPqDef.GlobalParamsPanel.ReExecute;
                        }

                        fin.Title = $scope.esPqDef.Title;
                        fin.Description = $scope.esPqDef.Description;

                        $q.all(promises)
                            .then(function (ret) {
                                var globalParamsDefs =
                                    $scope.esPqDef.GlobalParamsPanel.Parameters;

                                if ($scope.esUrlParams) {
                                    _.forEach(
                                        Object.keys($scope.esUrlParams),
                                        function (u) {
                                            var gp =
                                                globalParamsDefs.paramsValues[
                                                    u
                                                ];
                                            if (gp) {
                                                gp.pValue(
                                                    $scope.esUrlParams[u]
                                                );
                                            }
                                        }
                                    );
                                }

                                _.forEach(ret, function (dbItem) {
                                    _.forEach(
                                        globalParamsDefs.paramsValues,
                                        function (globalParam) {
                                            var x =
                                                dbItem.Params[
                                                    globalParam.paramCode
                                                ];
                                            if (x) {
                                                x.pValue(globalParam.pValue());
                                            }
                                        }
                                    );

                                    var pDef =
                                        dbItem.ParametersDefinition &&
                                        dbItem.ParametersDefinition();
                                    if (
                                        pDef instanceof
                                        esWebUIHelper.ESParamsDefinitions
                                    ) {
                                        _.forEach(
                                            pDef.definitions,
                                            function (p) {
                                                var xyz = _.find(
                                                    $scope.esPqDef
                                                        .GlobalParamsPanel
                                                        .Parameters.definitions,
                                                    { id: p.id }
                                                );
                                                if (xyz) {
                                                    p.visible = false;
                                                }
                                            }
                                        );
                                    }
                                });

                                var tm;
                                var tStep;
                                var tInterval = 20;
                                var dRun;
                                var lastRunOn = "";

                                var model = esGlobals
                                    .getClientSession()
                                    .getModel();
                                if (
                                    !model ||
                                    !model.Claims ||
                                    !model.Claims.ESApplicationID ||
                                    model.Claims.ESApplicationID !=
                                        "espremanalyzer"
                                ) {
                                    $scope.esPqDef.GlobalParamsPanel.ReExecute = 0;
                                }

                                if (
                                    $scope.esPqDef.GlobalParamsPanel.ReExecute
                                ) {
                                    tStep =
                                        $scope.esPqDef.GlobalParamsPanel
                                            .ReExecute *
                                        (60 / tInterval);
                                    $scope.globalTitle =
                                        "Last Run - // NEXT Run in " +
                                        moment
                                            .duration(
                                                tStep * tInterval,
                                                "seconds"
                                            )
                                            .humanize();

                                    tm = $interval(function () {
                                        tStep--;
                                        if (tStep == 0) {
                                            $scope.globalExecutePQ();
                                            dRun = moment();
                                            tStep =
                                                $scope.esPqDef.GlobalParamsPanel
                                                    .ReExecute *
                                                (60 / tInterval);
                                        }

                                        $scope.globalTitle =
                                            "Last Run " +
                                            (dRun ? dRun.fromNow() : " -") +
                                            " // Next Run in " +
                                            moment
                                                .duration(
                                                    tStep * tInterval,
                                                    "seconds"
                                                )
                                                .humanize();
                                    }, tInterval * 1000);

                                    $scope.$on("$destroy", function () {
                                        if (tm) {
                                            $interval.cancel(tm);
                                            tm = null;
                                        }
                                    });
                                }

                                if (
                                    $scope.esPqDef.GlobalParamsPanel.AutoExecute
                                ) {
                                    $scope.globalExecutePQ();
                                    if (
                                        $scope.esPqDef.GlobalParamsPanel
                                            .ReExecute
                                    ) {
                                        dRun = moment();
                                        $scope.globalTitle =
                                            "Last Run " +
                                            dRun.fromNow() +
                                            " // Next Run in " +
                                            moment
                                                .duration(
                                                    tStep * tInterval,
                                                    "seconds"
                                                )
                                                .humanize();
                                    }
                                }
                            })
                            .catch(function (err) {
                                console.log(err);
                            });
                    }
                    $scope.esPqDef = fin;
                };

                function errReport(ex) {
                    var s = esGlobals.getUserMessage(ex);
                    if (!s.isLogin) {
                        $scope.showUserMessage(s.messageToShow);
                    }
                }

                function findFavItem(dbItem) {
                    return _.findIndex($scope.esPqDef, function (y) {
                        return y[0] == dbItem;
                    });
                }

                $scope.Favourites = null;
                $scope.globalTitle = $translate.instant(
                    "ESUI.PARAMS_PANEL.TITLE"
                );

                var getFavourites = function () {
                    var deferred = $q.defer();

                    if (!$scope.Favourites) {
                        loadFavourites(
                            $q,
                            esGlobals,
                            esMessaging,
                            esWebApiService,
                            esCache
                        )
                            .then(function (ret) {
                                $scope.Favourites = ret;
                                deferred.resolve($scope.Favourites);
                            })
                            .catch(function (err) {
                                deferred.reject(err);
                            });
                    } else {
                        deferred.resolve($scope.Favourites);
                    }
                    return deferred.promise;
                };

                $scope.email = function (pqid) {
                    var blobInfo = {
                        ObjectID: "esanalyzer",
                        KeyID: "eslink",
                        IsNew: true,
                        TypeID: ESLINK_TYPEID,
                        TextBody: JSON.stringify({
                            ID: pqid.CtxID,
                            Params: pqid.Params.getSerialized(),
                            Title: pqid.Title,
                        }),
                    };

                    esWebApiService
                        .postBodyToES00Blob(blobInfo)
                        .then(function (ret) {
                            if (clipboard && clipboard.supported) {
                                var linkurl = ret.data;
                                if (
                                    $scope.esLinkPrefix &&
                                    $scope.esLinkPrefix.replace(
                                        "{0}",
                                        ret.data
                                    ) != $scope.esLinkPrefix
                                ) {
                                    linkurl = $scope.esLinkPrefix.replace(
                                        "{0}",
                                        ret.data
                                    );
                                }

                                var x = {
                                    id: "shortcut",
                                    title: $translate.instant("ESUI.FAV.LINK"),
                                    required: true,
                                    inputType: "readonly",
                                    caption: $translate.instant(
                                        "ESUI.FAV.PROMPT_LINK"
                                    ),
                                    param: new esGlobals.ESParamVal(
                                        "fav_link",
                                        linkurl
                                    ),
                                };

                                esWebUIHelper
                                    .esAskForField($uibModal, x)
                                    .then(function () {
                                        if (clipboard && clipboard.supported) {
                                            clipboard.copyText(linkurl);
                                            $scope.showUserMessage(
                                                $translate.instant(
                                                    "ESUI.FAV.COPY_CLIPBOARD_OK"
                                                )
                                            );
                                        }
                                    })
                                    .catch(function (err) {
                                        esWebApiService
                                            .removeEntityBlob({
                                                GID: ret.data,
                                            })
                                            .catch(function () {});
                                    });
                            }
                        })
                        .catch(function (err) {
                            errReport(err);
                        });
                };

                $scope.addRemoveFav = function (pqid, bAdd) {
                    var title = "";

                    if (bAdd) {
                        var x = {
                            id: "shortcut",
                            title: $translate.instant("ESUI.FAV.ADD"),
                            required: true,
                            caption: $translate.instant(
                                "ESUI.FAV.PROMPT_TITLE"
                            ),
                            param: new esGlobals.ESParamVal("fav_title", ""),
                        };

                        esWebUIHelper
                            .esAskForField($uibModal, x)
                            .then(function () {
                                getFavourites()
                                    .then(function (fav) {
                                        var promise = fav.addRemoveFav(
                                            esGlobals,
                                            esMessaging,
                                            esWebApiService,
                                            pqid,
                                            x.param.pValue()
                                        );
                                        if (!promise) {
                                            return;
                                        }
                                        promise
                                            .then(function (ret) {
                                                $scope.showUserMessage(
                                                    $translate.instant(
                                                        "ESUI.FAV.SAVE_SUCCESS"
                                                    )
                                                );
                                            })
                                            .catch(function (ex) {
                                                errReport(ex);
                                            });
                                    })
                                    .catch(function (err) {
                                        errReport(err);
                                        return;
                                    });
                            })
                            .catch(function (ex) {
                                if (ex != "cancel") {
                                    errReport(ex);
                                }
                            });
                    } else {
                        // remove
                        var removeIndex = findFavItem(pqid);

                        if (removeIndex == -1) {
                            return;
                        }

                        getFavourites()
                            .then(function (fav) {
                                var promise = fav.addRemoveFav(
                                    esGlobals,
                                    esMessaging,
                                    esWebApiService,
                                    pqid,
                                    "",
                                    removeIndex
                                );
                                if (!promise) {
                                    return;
                                }

                                promise
                                    .then(function (ret) {
                                        $scope.esPqDef.splice(removeIndex, 1);
                                        $scope.showUserMessage(
                                            $translate.instant(
                                                "ESUI.FAV.SAVE_SUCCESS"
                                            )
                                        );
                                    })
                                    .catch(function (ex) {
                                        errReport(ex);
                                    });
                            })
                            .catch(function (err) {
                                errReport(err);
                            });
                    }
                };

                $scope.clearAll = function () {
                    if (
                        !confirm($translate.instant("ESUI.FAV.CONFIRM_CLEAR"))
                    ) {
                        return;
                    }

                    getFavourites()
                        .then(function (fav) {
                            var promise = fav
                                .clearAll(esGlobals, esWebApiService)
                                .then(function (ret) {
                                    $scope.esPqDef = [];
                                    $scope.showUserMessage(
                                        $translate.instant(
                                            "ESUI.FAV.SAVE_SUCCESS"
                                        )
                                    );
                                })
                                .catch(function (ex) {
                                    errReport(ex);
                                });
                        })
                        .catch(function (err) {
                            errReport(err);
                        });
                };

                $scope.moveUpOrDown = function (dbItem, bUp) {
                    var itemPos = findFavItem(dbItem);

                    if (itemPos == -1 || !$scope.canMoveUpOrDown(dbItem, bUp)) {
                        return;
                    }

                    getFavourites($q, esGlobals, esMessaging, esWebApiService)
                        .then(function (fav) {
                            var ret = fav.moveUpOrDown(
                                esGlobals,
                                esWebApiService,
                                itemPos,
                                bUp
                            );
                            if (!ret) {
                                return;
                            }

                            ret.promise
                                .then(function () {
                                    var temp = $scope.esPqDef[ret.to];
                                    $scope.esPqDef[ret.to] =
                                        $scope.esPqDef[ret.from];
                                    $scope.esPqDef[ret.from] = temp;
                                    $scope.showUserMessage(
                                        $translate.instant(
                                            "ESUI.FAV.SAVE_SUCCESS"
                                        )
                                    );
                                })
                                .catch(function (ex) {
                                    errReport(ex);
                                });
                        })
                        .catch(function (err) {
                            errReport(err);
                        });
                };

                $scope.canMoveUpOrDown = function (dbItem, bUp) {
                    var xIndex = findFavItem(dbItem);

                    if (xIndex == -1) {
                        return false;
                    }

                    if (bUp) {
                        return xIndex != 0;
                    }

                    // Down
                    return xIndex < $scope.esPqDef.length - 1;
                };

                runOnSuccess();
            },
        ])

        .directive("esComboPq", [
            "$log",
            "esWebApi",
            "esMessaging",
            "esUIHelper",
            "esGlobals",
            function (
                $log,
                esWebApiService,
                esMessaging,
                esWebUIHelper,
                esGlobals
            ) {
                return {
                    restrict: "AE",
                    scope: {
                        esPqDef: "=",
                        esInApp: "=?",
                        esUrlParams: "=?",
                        isFavouritesMode: "=?",
                        esLinkPrefix: "=?",
                        esSimpleMode: "=?",
                        esShowUserMessage: "&",
                    },
                    templateUrl: function (element, attrs) {
                        return "src/partials/esComboPQ.html";
                    },
                };
            },
        ])

        /**
         * @ngdoc directive
         * @name es.Web.UI.directive:esGrid
         * @requires es.Services.Web.esWebApi Entersoft AngularJS WEB API for Entersoft Application Server
         * @requires es.Web.UI.esUIHelper
         * @requires $log
         * @restrict AE
         * @param {template} esGroupId The Entersoft Public Query Group ID
         * @param {template} esFilterId The Entersoft Public Query Filter ID
         * @param {esGridInfoOptions=} esGridOptions should grid options are already available you can explicitly assign
         * @param {object=} esExecuteParams Params object that will be used when executing the public query
         *
         * @description
         *
         * **TBD**
         * This directive is responsible to render the html for the presentation of the results / data of an Entersoft Public Query.
         * The esGrid generates a Telerik kendo-grid web ui element {@link http://docs.telerik.com/KENDO-UI/api/javascript/ui/grid kendo-grid}.
         *
         * In order to instantiate an esGrid with an Angular application, you have to provide the parameters esGroupId and esFilterId are required.
         * These two parameters along with esExecuteParams will be supplied to the {@link es.Web.UI.esUIHelper#methods_esGridInfoToKInfo esToKendoTransform function}
         */
        .directive("esGrid", [
            "$log",
            "esWebApi",
            "esMessaging",
            "esUIHelper",
            "esGlobals",
            function (
                $log,
                esWebApiService,
                esMessaging,
                esWebUIHelper,
                esGlobals
            ) {
                return {
                    restrict: "AE",
                    scope: {
                        esGroupId: "=",
                        esFilterId: "=",
                        esExecuteParams: "=",
                        esGridOptions: "=?",
                        esPostGridOptions: "=?",
                        esPQOptions: "=?",
                        esDataSource: "=?",
                    },
                    templateUrl: function (element, attrs) {
                        return "src/partials/esGrid.html";
                    },
                    link: function ($scope, iElement, iAttrs) {
                        $scope.esGridRun = function () {
                            if ($scope.$parent && $scope.$parent.esPanelOpen) {
                                $scope.$parent.esPanelOpen.status = false;
                            }

                            if (
                                $scope.esGridOptions &&
                                $scope.esGridOptions.dataSource
                            ) {
                                if (
                                    $scope.esPQOptions &&
                                    !$scope.esPQOptions.ServerPaging
                                ) {
                                    // Refresh all the data from server (no server paging)
                                    // and then go to page 1
                                    $scope.esGridOptions.dataSource.read();
                                    $scope.esGridOptions.dataSource.page(1);
                                } else {
                                    $scope.esGridOptions.dataSource.page(1);
                                }
                            }
                        };

                        $scope.$watch("esGridOptions", function (newV, oldV) {
                            if (
                                newV &&
                                newV.esToolbars &&
                                angular.isArray(newV.esToolbars)
                            ) {
                                var existingtbs = newV.toolbar || [];

                                _.forEach(newV.esToolbars, function (newtb) {
                                    if (
                                        newtb.fnName &&
                                        newtb.fnDef &&
                                        angular.isFunction(newtb.fnDef)
                                    ) {
                                        $scope[newtb.fnName] = newtb.fnDef;
                                    }
                                });
                            }
                        });

                        $scope.esGridPrint = function () {};

                        if (!$scope.esGridOptions && !iAttrs.esGridOptions) {
                            if (!$scope.esGroupId || !$scope.esFilterId) {
                                throw "esGridOptions NOT defined. In order to dynamically get the options you must set GroupID and FilterID for esgrid to work";
                            }
                            // Now esGridOption explicitly assigned so ask the server
                            esWebApiService
                                .fetchPublicQueryInfo(
                                    $scope.esGroupId,
                                    $scope.esFilterId,
                                    true,
                                    true
                                )
                                .then(function (ret) {
                                    var p1 = ret.data;
                                    var p2 =
                                        esWebUIHelper.winGridInfoToESGridInfo(
                                            $scope.esGroupId,
                                            $scope.esFilterId,
                                            p1
                                        );
                                    $scope.esGridOptions =
                                        esWebUIHelper.esGridInfoToKInfo(
                                            $scope.esGroupId,
                                            $scope.esFilterId,
                                            $scope.esExecuteParams,
                                            p2,
                                            $scope.esPQOptions
                                        );
                                    if ($scope.esPostGridOptions) {
                                        angular.merge(
                                            $scope.esGridOptions,
                                            $scope.esPostGridOptions
                                        );
                                    }
                                })
                                .catch(angular.noop);
                        }
                    },
                };
            },
        ])

        .directive("esGaugePq", [
            "$log",
            "$window",
            "esWebApi",
            "esMessaging",
            "esUIHelper",
            "esGlobals",
            "$timeout",
            function (
                $log,
                $window,
                esWebApiService,
                esMessaging,
                esWebUIHelper,
                esGlobals,
                $timeout
            ) {
                return {
                    restrict: "AE",
                    scope: {
                        esPqDef: "=",
                    },
                    templateUrl: function (element, attrs) {
                        return "src/partials/esGaugePQ.html";
                    },
                    link: function ($scope, iElement, iAttrs) {
                        function prepareGauge() {
                            if (
                                !$scope.esRows ||
                                !$scope.esRows.length ||
                                !$scope.esPqDef.UIOptions.pointer
                            ) {
                                return;
                            }

                            function calcPointer(
                                row,
                                minScale,
                                maxScale,
                                ranges
                            ) {
                                row.esScaleOptions = {
                                    min: minScale,
                                    max: maxScale,
                                    ranges: ranges,
                                    labels: $scope.esPqDef.UIOptions.labels,
                                    vertical:
                                        !!$scope.esPqDef.UIOptions.vertical,
                                };

                                var tp = angular.isArray(
                                    $scope.esPqDef.UIOptions.pointer
                                )
                                    ? $scope.esPqDef.UIOptions.pointer
                                    : [$scope.esPqDef.UIOptions.pointer];

                                var pointers = [];
                                var ix;
                                for (ix = 0; ix < tp.length; ix++) {
                                    var poi = angular.merge({}, tp[ix]);
                                    poi.value = row["GValue" + (ix + 1)];
                                    pointers.push(poi);
                                }

                                row.esPointer = pointers;
                            }

                            function evalScale(i, rows) {
                                if (i >= rows.length) {
                                    return;
                                }
                                var row = rows[i];
                                var minScale = 0,
                                    maxScale = 100,
                                    ranges = [{ from: 0, to: 100 }];

                                if (row.GScale) {
                                    esWebApiService
                                        .fetchESScale(row.GScale)
                                        .then(function (ret) {
                                            var scaleObject = ret;

                                            if (
                                                scaleObject &&
                                                scaleObject.Ranges &&
                                                scaleObject.Ranges.length
                                            ) {
                                                minScale = _.minBy(
                                                    scaleObject.Ranges,
                                                    "MinValue"
                                                ).MinValue;
                                                maxScale = _.maxBy(
                                                    scaleObject.Ranges,
                                                    "MaxValue"
                                                ).MaxValue;

                                                ranges = _.map(
                                                    scaleObject.Ranges,
                                                    function (r) {
                                                        var x = {
                                                            from: r.MinValue,
                                                            to: r.MaxValue,
                                                        };

                                                        if (r.ColorARGB) {
                                                            x.color =
                                                                esGlobals.rgbToHex(
                                                                    r.ColorARGB
                                                                );
                                                        }
                                                        return x;
                                                    }
                                                );
                                            }

                                            calcPointer(
                                                row,
                                                minScale,
                                                maxScale,
                                                ranges
                                            );

                                            evalScale(i + 1, rows);
                                        })
                                        .catch(function (err) {
                                            calcPointer(
                                                row,
                                                minScale,
                                                maxScale,
                                                ranges
                                            );

                                            evalScale(i + 1, rows);
                                        });
                                } else {
                                    calcPointer(
                                        row,
                                        minScale,
                                        maxScale,
                                        ranges
                                    );
                                    evalScale(i + 1, rows);
                                }
                            }

                            evalScale(0, $scope.esRows);
                        }

                        $scope.executePQ = function () {
                            esWebApiService
                                .fetchPublicQuery($scope.esPqDef)
                                .then(function (ret) {
                                    if (ret.data.Rows && ret.data.Rows.length) {
                                        $scope.esRows = $scope.esPqDef.UIOptions
                                            .expandRows
                                            ? ret.data.Rows
                                            : [ret.data.Rows[0]];
                                        prepareGauge();
                                    }
                                })
                                .catch(angular.noop);
                        };

                        $scope.esPqDef.runPQ = $scope.executePQ;

                        if (
                            $scope.esPqDef &&
                            $scope.esPqDef.PQOptions &&
                            $scope.esPqDef.PQOptions.AutoExecute
                        ) {
                            $scope.executePQ();
                        }
                    },
                };
            },
        ])

        .directive("esStockChart", [
            "$log",
            "$window",
            "esWebApi",
            "esMessaging",
            "esUIHelper",
            "esGlobals",
            function (
                $log,
                $window,
                esWebApiService,
                esMessaging,
                esWebUIHelper,
                esGlobals
            ) {
                return {
                    restrict: "AE",
                    scope: {
                        esPanelOpen: "=?",
                        esPqDef: "=?",
                        esChartOptions: "=",
                        esChartCtrl: "=?",
                        esLocalData: "=?",
                    },
                    templateUrl: function (element, attrs) {
                        return "src/partials/esStockChartPQ.html";
                    },
                    link: function ($scope, iElement, iAttrs) {
                        var ctrlF = function () {
                            return $scope.esChartCtrl;
                        };

                        var onResize = function () {
                            var ctrl = ctrlF();

                            if (ctrl) {
                                ctrl.resize();
                            } else {
                                kendo.resize(
                                    angular.element(".eschart-wrapper")
                                );
                            }
                        };

                        if (!$scope.esLocalData && !iAttrs.esLocalData) {
                            var groups = $scope.esChartOptions
                                ? $scope.esChartOptions.group
                                : null;
                            $scope.esChartDataSource =
                                esWebUIHelper.getPQDataSource(
                                    $scope.esPqDef,
                                    null,
                                    null,
                                    groups,
                                    ctrlF
                                );
                        } else {
                            $scope.esChartDataSource = angular.isArray(
                                $scope.esLocalData
                            )
                                ? { data: $scope.esLocalData }
                                : $scope.esLocalData;
                        }

                        $scope.esChartOptions.dataSource =
                            $scope.esChartDataSource;

                        $scope.executePQ = function () {
                            $scope.esPanelOpen.status = false;
                            if ($scope.esChartDataSource) {
                                $scope.esChartDataSource.read();
                            }
                        };

                        if ($scope.esPqDef) {
                            $scope.esPqDef.runPQ = $scope.executePQ;
                        }

                        $scope.$on("$destroy", function () {
                            angular.element($window).unbind("resize", onResize);
                        });

                        angular.element($window).bind("resize", onResize);
                    },
                };
            },
        ])

        .directive("esChart", [
            "$log",
            "$window",
            "esWebApi",
            "esMessaging",
            "esUIHelper",
            "esGlobals",
            function (
                $log,
                $window,
                esWebApiService,
                esMessaging,
                esWebUIHelper,
                esGlobals
            ) {
                return {
                    restrict: "AE",
                    scope: {
                        esPanelOpen: "=?",
                        esPqDef: "=?",
                        esChartOptions: "=",
                        esChartCtrl: "=?",
                        esLocalData: "=?",
                    },
                    templateUrl: function (element, attrs) {
                        return "src/partials/esChartPQ.html";
                    },
                    link: function ($scope, iElement, iAttrs) {
                        var ctrlF = function () {
                            return $scope.esChartCtrl;
                        };

                        var onResize = function () {
                            var ctrl = ctrlF();

                            if (ctrl) {
                                ctrl.resize();
                            } else {
                                kendo.resize(
                                    angular.element(".eschart-wrapper")
                                );
                            }
                        };

                        if (!$scope.esLocalData && !iAttrs.esLocalData) {
                            var groups = $scope.esChartOptions
                                ? $scope.esChartOptions.group
                                : null;
                            $scope.esChartDataSource =
                                esWebUIHelper.getPQDataSource(
                                    $scope.esPqDef,
                                    null,
                                    null,
                                    groups,
                                    ctrlF
                                );
                        } else {
                            $scope.esChartDataSource = {
                                data: $scope.esLocalData,
                            };
                        }

                        $scope.esChartOptions.dataSource =
                            $scope.esChartDataSource;

                        $scope.executePQ = function () {
                            $scope.esPanelOpen.status = false;
                            if ($scope.esChartDataSource) {
                                $scope.esChartDataSource.read();
                            }
                        };

                        $scope.esPqDef.runPQ = $scope.executePQ;

                        $scope.$on("$destroy", function () {
                            angular.element($window).unbind("resize", onResize);
                        });

                        angular.element($window).bind("resize", onResize);
                    },
                };
            },
        ])

        .directive("esGanttPq", [
            "$log",
            "$window",
            "esWebApi",
            "esMessaging",
            "esUIHelper",
            "esGlobals",
            "$translate",
            function (
                $log,
                $window,
                esWebApiService,
                esMessaging,
                esWebUIHelper,
                esGlobals,
                $translate
            ) {
                return {
                    restrict: "AE",
                    scope: {
                        esPqDef: "=",
                        esGanttCtrl: "=?",
                    },
                    templateUrl: function (element, attrs) {
                        return "src/partials/esGanttPQ.html";
                    },
                    link: function ($scope, iElement, iAttrs) {
                        var ctrlF = function () {
                            return $scope.esGanttCtrl;
                        };

                        var onResize = function () {
                            var ctrl = ctrlF();

                            if (ctrl) {
                                ctrl.resize();
                            } else {
                                kendo.resize(
                                    angular.element(".eschart-wrapper")
                                );
                            }
                        };

                        $scope.$on("$destroy", function () {
                            angular.element($window).unbind("resize", onResize);
                        });

                        angular.element($window).bind("resize", onResize);

                        $scope.executePQ = function () {
                            $scope.esPqDef.esPanelOpen.status = false;
                            if ($scope.tasksDS) {
                                $scope.tasksDS.read();
                            }
                        };

                        $scope.esPqDef.runPQ = $scope.executePQ;

                        $scope.tasksDS = new kendo.data.GanttDataSource({
                            transport: {
                                error: function (e) {
                                    console.log(e);
                                },

                                read: function (options) {
                                    var pqOptions = {};
                                    pqOptions.WithCount = false;
                                    pqOptions.Page = -1;
                                    pqOptions.PageSize = -1;

                                    var executeParams = $scope.esPqDef.Params;
                                    if (
                                        executeParams instanceof
                                        esGlobals.ESParamValues
                                    ) {
                                        if (!executeParams.isValidState()) {
                                            var err = new Error(
                                                $translate.instant(
                                                    "ESUI.PQ.PARAMS_MISSING"
                                                )
                                            );
                                            options.error(err);
                                            throw err;
                                        }
                                        executeParams =
                                            executeParams.getExecuteVals();
                                    }

                                    esWebApiService
                                        .fetchPublicQuery(
                                            $scope.esPqDef.GroupID,
                                            $scope.esPqDef.FilterID,
                                            pqOptions,
                                            executeParams
                                        )
                                        .then(function (pq) {
                                            if (
                                                pq &&
                                                pq.data &&
                                                pq.data.Rows &&
                                                pq.data.Rows.length
                                            ) {
                                                pq = pq.data.Rows;
                                            } else {
                                                pq = [];
                                            }

                                            options.success(pq);
                                            $scope.resourcesDS.read();
                                        })
                                        .catch(function (err) {
                                            $log.error(
                                                "Error in DataSource ",
                                                err
                                            );
                                            options.error(err);
                                        });
                                },
                            },
                            schema: {
                                model: {
                                    id: "id",
                                    fields: {
                                        id: { from: "Code", type: "string" },
                                        parentId: {
                                            from: "ParentCode",
                                            type: "string",
                                        },
                                        TaskTypeDescription: {
                                            from: "TaskTypeDescription",
                                            type: "string",
                                        },
                                        WPCode: {
                                            from: "WPCode",
                                            type: "string",
                                        },
                                        start: {
                                            from: "StartDate",
                                            type: "date",
                                        },
                                        end: {
                                            from: "FinishDate",
                                            type: "date",
                                        },
                                        title: {
                                            from: "Title",
                                            type: "string",
                                        },
                                        percentComplete: {
                                            from: "Completeness",
                                            type: "number",
                                        },
                                        summary: {
                                            from: "IsSummary",
                                            type: "boolean",
                                        },
                                        expanded: {
                                            from: "Expanded",
                                            type: "boolean",
                                        },
                                    },
                                },
                            },
                        });

                        $scope.resourcesDS = new kendo.data.DataSource({
                            transport: {
                                error: function (e) {
                                    console.log(e);
                                },

                                read: function (options) {
                                    var pqOptions = {};
                                    pqOptions.WithCount = false;
                                    pqOptions.Page = -1;
                                    pqOptions.PageSize = -1;

                                    var executeParams = $scope.esPqDef.Params;
                                    if (
                                        executeParams instanceof
                                        esGlobals.ESParamValues
                                    ) {
                                        if (!executeParams.isValidState()) {
                                            var err = new Error(
                                                $translate.instant(
                                                    "ESUI.PQ.PARAMS_MISSING"
                                                )
                                            );
                                            options.error(err);
                                            throw err;
                                        }
                                        executeParams =
                                            executeParams.getExecuteVals();
                                    }

                                    var sG = $scope.esPqDef.GroupID;
                                    var fG = "ProjectTaskResources";
                                    if (
                                        $scope.esPqDef.UIOptions &&
                                        angular.isString(
                                            $scope.esPqDef.UIOptions
                                                .ProjectTaskResourcesPQ
                                        )
                                    ) {
                                        var parts =
                                            $scope.esPqDef.UIOptions.ProjectTaskAssignmentsPQ.split(
                                                ","
                                            );
                                        parts[0] = parts[0].trim();
                                        if (parts[0]) {
                                            sG = parts[0];
                                        }
                                        if (parts.length > 1) {
                                            parts[1] = parts[1].trim();
                                            if (parts[1]) {
                                                fG = parts[1];
                                            }
                                        }
                                    }
                                    esWebApiService
                                        .fetchPublicQuery(
                                            sG,
                                            fG,
                                            pqOptions,
                                            executeParams
                                        )
                                        .then(function (pq) {
                                            if (
                                                pq &&
                                                pq.data &&
                                                pq.data.Rows &&
                                                pq.data.Rows.length
                                            ) {
                                                pq = pq.data.Rows;
                                            } else {
                                                pq = [];
                                            }
                                            options.success(pq);
                                            $scope.assignmentsDS.read();
                                        })
                                        .catch(function (err) {
                                            $log.error(
                                                "Error in DataSource ",
                                                err
                                            );
                                            options.error(err);
                                        });
                                },
                            },
                            schema: {
                                model: {
                                    id: "id",
                                    fields: {
                                        id: { from: "Code", type: "string" },
                                        Name: { from: "Name", type: "string" },
                                        Color: {
                                            from: "Color",
                                            type: "string",
                                        },
                                    },
                                },
                            },
                        });

                        $scope.assignmentsDS = new kendo.data.DataSource({
                            transport: {
                                error: function (e) {
                                    console.log(e);
                                },

                                read: function (options) {
                                    var pqOptions = {};
                                    pqOptions.WithCount = false;
                                    pqOptions.Page = -1;
                                    pqOptions.PageSize = -1;

                                    var executeParams = $scope.esPqDef.Params;
                                    if (
                                        executeParams instanceof
                                        esGlobals.ESParamValues
                                    ) {
                                        if (!executeParams.isValidState()) {
                                            var err = new Error(
                                                $translate.instant(
                                                    "ESUI.PQ.PARAMS_MISSING"
                                                )
                                            );
                                            options.error(err);
                                            throw err;
                                        }
                                        executeParams =
                                            executeParams.getExecuteVals();
                                    }

                                    var sG = $scope.esPqDef.GroupID;
                                    var fG = "ProjectTaskAssignments";
                                    if (
                                        $scope.esPqDef.UIOptions &&
                                        angular.isString(
                                            $scope.esPqDef.UIOptions
                                                .ProjectTaskAssignmentsPQ
                                        )
                                    ) {
                                        var parts =
                                            $scope.esPqDef.UIOptions.ProjectTaskAssignmentsPQ.split(
                                                ","
                                            );
                                        parts[0] = parts[0].trim();
                                        if (parts[0]) {
                                            sG = parts[0];
                                        }
                                        if (parts.length > 1) {
                                            parts[1] = parts[1].trim();
                                            if (parts[1]) {
                                                fG = parts[1];
                                            }
                                        }
                                    }

                                    esWebApiService
                                        .fetchPublicQuery(
                                            sG,
                                            fG,
                                            pqOptions,
                                            executeParams
                                        )
                                        .then(function (pq) {
                                            if (
                                                pq &&
                                                pq.data &&
                                                pq.data.Rows &&
                                                pq.data.Rows.length
                                            ) {
                                                pq = pq.data.Rows;
                                            } else {
                                                pq = [];
                                            }
                                            options.success(pq);
                                        })
                                        .catch(function (err) {
                                            $log.error(
                                                "Error in DataSource ",
                                                err
                                            );
                                            options.error(err);
                                        });
                                },
                            },
                            schema: {
                                model: {
                                    id: "ID",
                                    fields: {
                                        ID: { from: "GID", type: "string" },
                                        ResourceID: {
                                            from: "Code",
                                            type: "string",
                                        },
                                        Units: {
                                            from: "ResourceUsage",
                                            type: "number",
                                        },
                                        TaskID: {
                                            from: "TaskCode",
                                            type: "string",
                                        },
                                    },
                                },
                            },
                        });

                        $scope.esGanttOptions = {
                            toolbar: [{ name: "pdf" }],
                            dataSource: $scope.tasksDS,
                            assignments: {
                                dataTaskIdField: "TaskID",
                                dataResourceIdField: "ResourceID",
                                dataValueField: "Units",
                                dataSource: $scope.assignmentsDS,
                            },
                            resources: {
                                field: "Resources",
                                dataColorField: "Color",
                                dataTextField: "Name",
                                dataSource: $scope.resourcesDS,
                            },
                            views: [
                                "day",
                                {
                                    type: "week",
                                    dayHeaderTemplate: kendo.template(
                                        "#=kendo.toString(start, 'ddd d/M')#"
                                    ),
                                    weekHeaderTemplate:
                                        "#=kendo.toString(start, 'dddd d/M')# - #=kendo.toString(kendo.date.addDays(end, -1), 'dddd d/M')#",
                                    selected: true,
                                },
                                {
                                    type: "month",
                                    weekHeaderTemplate:
                                        "#=kendo.toString(start, 'ddd d/M')# - #=kendo.toString(kendo.date.addDays(end, -1), 'ddd d/M')#",
                                    monthHeaderTemplate:
                                        "#=kendo.toString(start, 'MMMM yyyy')#",
                                },
                            ],
                            columns: [
                                {
                                    field: "title",
                                    title: $translate.instant(
                                        "ESUI.PROJECT.COL_TITLE"
                                    ),
                                    width: 200,
                                },
                                {
                                    field: "start",
                                    title: $translate.instant(
                                        "ESUI.PROJECT.START_TITLE"
                                    ),
                                    format: "{0:dd/MM/yyyy}",
                                    width: 100,
                                },
                                {
                                    field: "end",
                                    title: $translate.instant(
                                        "ESUI.PROJECT.END_TITLE"
                                    ),
                                    format: "{0:dd/MM/yyyy}",
                                    width: 100,
                                },
                                {
                                    field: "Resources",
                                    title: $translate.instant(
                                        "ESUI.PROJECT.RES_TITLE"
                                    ),
                                    width: 400,
                                },
                                {
                                    field: "id",
                                    title: $translate.instant(
                                        "ESUI.PROJECT.ID_TITLE"
                                    ),
                                    width: 100,
                                },
                                {
                                    field: "TaskTypeDescription",
                                    title: $translate.instant(
                                        "ESUI.PROJECT.TTYPE_TITLE"
                                    ),
                                    width: 200,
                                },
                                {
                                    field: "WPCode",
                                    title: $translate.instant(
                                        "ESUI.PROJECT.WP_TITLE"
                                    ),
                                    width: 100,
                                    defaultValue: "",
                                },
                            ],
                            height: 800,
                            autoBind: false,
                            resizable: true,
                            columnResizeHandleWidth: 6,
                            navigatable: true,
                            showWorkHours: false,
                            showWorkDays: false,
                        };

                        if (
                            $scope.esPqDef &&
                            $scope.esPqDef.PQOptions &&
                            $scope.esPqDef.PQOptions.AutoExecute
                        ) {
                            $scope.executePQ();
                        }
                    },
                };
            },
        ])

        .directive("esTimelinePq", [
            "$log",
            "$window",
            "$timeout",
            "esWebApi",
            "esMessaging",
            "esUIHelper",
            "esGlobals",
            "$translate",
            function (
                $log,
                $window,
                $timeout,
                esWebApiService,
                esMessaging,
                esWebUIHelper,
                esGlobals,
                $translate
            ) {
                return {
                    restrict: "AE",
                    scope: {
                        esPqDef: "=",
                        esTimelineCtrl: "=?",
                    },
                    templateUrl: function (element, attrs) {
                        return "src/partials/esTimelinePQ.html";
                    },
                    link: function ($scope, iElement, iAttrs) {
                        var ctrlF = function () {
                            return $scope.esTimelineCtrl;
                        };

                        var onResize = function () {
                            var ctrl = ctrlF();

                            if (ctrl) {
                                ctrl.resize();
                            } else {
                                kendo.resize(
                                    angular.element(".estimeline-wrapper")
                                );
                            }
                        };

                        $scope.$on("$destroy", function () {
                            angular.element($window).unbind("resize", onResize);
                        });

                        angular.element($window).bind("resize", onResize);

                        $scope.entityDS = {};

                        $scope.executePQ = function () {
                            $scope.esPqDef.esPanelOpen.status = false;
                            if ($scope.esTimelineCtrl) {
                                $scope.esTimelineCtrl.setDataSource(runDS());
                            }
                        };

                        $scope.esPqDef.runPQ = $scope.executePQ;

                        $scope.getImageUrl = function (val) {
                            return esResolveBlobUrl(val, esWebApiService);
                        };

                        $scope.toHeaderDateString = function (date) {
                            if (date instanceof Date)
                                return kendo.toString(date, "d MMM yyyy");
                            else
                                return kendo.toString(
                                    new Date(date),
                                    "d MMM yyyy"
                                );
                        };

                        var runDS = function () {
                            return new kendo.data.DataSource({
                                transport: {
                                    error: function (e) {
                                        console.log(e);
                                    },

                                    read: function (options) {
                                        var pqOptions = {};
                                        pqOptions.WithCount = false;
                                        pqOptions.Page = -1;
                                        pqOptions.PageSize = -1;

                                        var executeParams =
                                            $scope.esPqDef.Params;
                                        if (
                                            executeParams instanceof
                                            esGlobals.ESParamValues
                                        ) {
                                            if (!executeParams.isValidState()) {
                                                var err = new Error(
                                                    $translate.instant(
                                                        "ESUI.PQ.PARAMS_MISSING"
                                                    )
                                                );
                                                options.error(err);
                                                throw err;
                                            }
                                            executeParams =
                                                executeParams.getExecuteVals();
                                        }

                                        esWebApiService
                                            .fetchPublicQuery(
                                                $scope.esPqDef.GroupID,
                                                $scope.esPqDef.FilterID,
                                                pqOptions,
                                                executeParams
                                            )
                                            .then(function (pq) {
                                                if (
                                                    pq &&
                                                    pq.data &&
                                                    pq.data.Rows &&
                                                    pq.data.Rows.length
                                                ) {
                                                    pq = pq.data.Rows;
                                                } else {
                                                    pq = [];
                                                }

                                                $scope.timelineDS = pq;

                                                $scope.oldestEvent =
                                                    pq.length > 0
                                                        ? pq.reduce(function (
                                                              prev,
                                                              current
                                                          ) {
                                                              return prev.Date <
                                                                  current.Date
                                                                  ? prev
                                                                  : current;
                                                          })
                                                        : null;
                                                $scope.newestEvent =
                                                    pq.length > 0
                                                        ? pq.reduce(function (
                                                              prev,
                                                              current
                                                          ) {
                                                              return prev.Date >
                                                                  current.Date
                                                                  ? prev
                                                                  : current;
                                                          })
                                                        : null;

                                                var sG = $scope.esPqDef.GroupID;
                                                var fG =
                                                    "TimelineBusinessAccountInfo";
                                                if (
                                                    $scope.esPqDef.UIOptions &&
                                                    angular.isString(
                                                        $scope.esPqDef.UIOptions
                                                            .TimelineEntityInfoPQ
                                                    )
                                                ) {
                                                    var parts =
                                                        $scope.esPqDef.UIOptions.TimelineEntityInfoPQ.split(
                                                            ","
                                                        );
                                                    parts[0] = parts[0].trim();
                                                    if (parts[0]) {
                                                        sG = parts[0];
                                                    }
                                                    if (parts.length > 1) {
                                                        parts[1] =
                                                            parts[1].trim();
                                                        if (parts[1]) {
                                                            fG = parts[1];
                                                        }
                                                    }
                                                }

                                                esWebApiService
                                                    .fetchPublicQuery(
                                                        sG,
                                                        fG,
                                                        pqOptions,
                                                        executeParams
                                                    )
                                                    .then(function (master) {
                                                        if (
                                                            master &&
                                                            master.data &&
                                                            master.data.Rows &&
                                                            master.data.Rows
                                                                .length
                                                        ) {
                                                            $scope.entityDS =
                                                                master.data.Rows[0];
                                                        } else {
                                                            $scope.entityDS =
                                                                {};
                                                        }
                                                    })
                                                    .catch(function (err) {
                                                        $scope.entityDS = {};
                                                    });

                                                options.success(pq);
                                            })
                                            .catch(function (err) {
                                                $log.error(
                                                    "Error in DataSource ",
                                                    err
                                                );
                                                $scope.entityDS = {};
                                                options.error(err);
                                            });
                                    },
                                },
                                serverSorting: true,
                                serverFiltering: false,
                                schema: {
                                    model: {
                                        fields: {
                                            date: {
                                                from: "Date",
                                                type: "date",
                                            },
                                            title: {
                                                from: "Title",
                                                type: "string",
                                            },
                                            titleAmount: {
                                                from: "TitleAmount",
                                                type: "number",
                                            },
                                            priority: {
                                                from: "Priority",
                                                type: "number",
                                            },
                                            latitude: {
                                                from: "Latitude",
                                                type: "number",
                                            },
                                            longitude: {
                                                from: "Longitude",
                                                type: "number",
                                            },
                                            qualifier: {
                                                from: "Qualifier",
                                                type: "number",
                                            },
                                            subtitle: {
                                                from: "SubTitle",
                                                type: "string",
                                            },
                                            description: {
                                                from: "Body",
                                                type: "string",
                                            },
                                            additionalInfo: {
                                                from: "AdditionalInfo",
                                                type: "string",
                                            },
                                            formid: {
                                                from: "FormID",
                                                type: "string",
                                            },
                                            fGID: {
                                                from: "fGID",
                                                type: "string",
                                            },
                                        },
                                    },
                                },
                            });
                        };

                        var opts = {
                            orientation: "vertical",
                            alternatingMode: true,
                            collapsibleEvents: true,
                            dateFormat: "dddd, d MMM yyyy",
                            eventTemplate:
                                '<div class="timeline-event-container" data-priority="#= data.priority #">' +
                                '   <div class="k-card-header">' +
                                '       <h5 class="k-card-title" title="#= data.title #">' +
                                '           <span class="k-event-title"><i class="mdi mdi-#= ["help-circle", "calendar-check", "email", "emoticon-sad-outline", "telescope", "file-document-box-check-outline", "receipt", "truck", "file-document-box-minus-outline", "cash-multiple"][data.qualifier <= 8 ? data.qualifier + 1 : 0] #"></i> #= data.title #</span>' +
                                '           <span class="k-event-collapse k-button k-button-icon k-flat"><span class="k-icon k-i-arrow-chevron-right"></span></span>' +
                                "       </h5>" +
                                '       <h6 class="k-card-subtitle"><span>#= data.subtitle #</span><span class="amount">#= data.titleAmount ? kendo.toString(data.titleAmount, "c") : data.date && (data.date.getHours() + data.date.getMinutes() > 0) ? kendo.toString(data.date, "HH:mm") : "" #</span></h6>' +
                                "           # if (data.additionalInfo) { #" +
                                '           <h6 class="k-card-subtitle">#= data.additionalInfo #</h6>' +
                                "           # } #" +
                                "   </div>" +
                                '   <div class="k-card-body">' +
                                "       # if (data.description) { #" +
                                '       <div class="k-card-description">' +
                                "           # if (data.description) { #" +
                                "           <p>#= data.description #</p>" +
                                "           # } #" +
                                "       </div>" +
                                "       # } #" +
                                "       # if (data.images && data.images.length > 0) { #" +
                                '       <div class="images-container">' +
                                "           # for (var i = 0 ; i < data.images.length ; i++) { #" +
                                '           <img src="#= data.images[i].src #" class="k-card-image">' +
                                "           # } #" +
                                "       </div>" +
                                "       # } #" +
                                "       # if (data.latitude && data.longitude) { #" +
                                '       <div class="map-container"></div>' +
                                "       # } #" +
                                "   </div>" +
                                "   # if (data.actions && data.actions.length > 0) { #" +
                                '   <div class="k-card-actions">' +
                                "       # for (var i = 0 ; i < data.actions.length ; i++) { #" +
                                '       <a class="k-button k-flat k-primary" href="javascript:;">#= data.actions[i].text #</a>' +
                                "       # } #" +
                                "   </div>" +
                                "   # } #" +
                                "</div>",
                            dataBound: function (e) {
                                $(".timeline-event-container").each(
                                    function () {
                                        var $this = $(this);

                                        $this
                                            .closest(".k-timeline-event")
                                            .addClass(
                                                "k-timeline-event-priority-" +
                                                    ($this.data("priority") ||
                                                        0)
                                            );

                                        if (
                                            $.trim(
                                                $this
                                                    .find(".k-card-body")
                                                    .html()
                                            ) === ""
                                        )
                                            $this.addClass(
                                                "timeline-event-container-nobody"
                                            );
                                    }
                                );
                            },
                            expand: function (e) {
                                var $eventContainer = $(
                                    '.k-timeline-event[data-uid="' +
                                        e.dataItem.uid +
                                        '"] .timeline-event-container'
                                );
                                var $mapContainer =
                                    $eventContainer.find(".map-container");

                                if (
                                    e.dataItem.latitude != null &&
                                    e.dataItem.longitude != null &&
                                    $mapContainer.data("kendoMap") == null
                                ) {
                                    $mapContainer.kendoMap({
                                        layers: [
                                            {
                                                type: "tile",
                                                urlTemplate:
                                                    "https://a.tile.openstreetmap.org/#= zoom #/#= x #/#= y #.png",
                                                attribution:
                                                    "&copy; OpenStreetMap",
                                            },
                                        ],
                                        center: [
                                            e.dataItem.latitude,
                                            e.dataItem.longitude,
                                        ],
                                        zoom: 15,
                                        markers: [
                                            {
                                                location: [
                                                    e.dataItem.latitude,
                                                    e.dataItem.longitude,
                                                ],
                                            },
                                        ],
                                    });
                                }
                            },
                        };

                        if (
                            $scope.esPqDef &&
                            $scope.esPqDef.PQOptions &&
                            $scope.esPqDef.PQOptions.AutoExecute
                        ) {
                            opts.dataSource = runDS();
                        }

                        $scope.esTimelineOptions = opts;
                    },
                };
            },
        ])

        .directive("esCalendarPq", [
            "$log",
            "$window",
            "esWebApi",
            "esMessaging",
            "esUIHelper",
            "esGlobals",
            "$translate",
            function (
                $log,
                $window,
                esWebApiService,
                esMessaging,
                esWebUIHelper,
                esGlobals,
                $translate
            ) {
                return {
                    restrict: "AE",
                    scope: {
                        esPqDef: "=",
                        esCalendarCtrl: "=?",
                    },
                    templateUrl: function (element, attrs) {
                        return "src/partials/esGanttPQ.html";
                    },
                    link: function ($scope, iElement, iAttrs) {
                        var ctrlF = function () {
                            return $scope.esGanttCtrl;
                        };

                        var onResize = function () {
                            var ctrl = ctrlF();

                            if (ctrl) {
                                ctrl.resize();
                            } else {
                                kendo.resize(
                                    angular.element(".escalendar-wrapper")
                                );
                            }
                        };

                        $scope.$on("$destroy", function () {
                            angular.element($window).unbind("resize", onResize);
                        });

                        angular.element($window).bind("resize", onResize);

                        $scope.executePQ = function () {
                            $scope.esPqDef.esPanelOpen.status = false;
                            if ($scope.tasksDS) {
                                $scope.tasksDS.read();
                            }
                        };

                        $scope.esPqDef.runPQ = $scope.executePQ;

                        $scope.tasksDS = new kendo.data.GanttDataSource({
                            transport: {
                                error: function (e) {
                                    console.log(e);
                                },

                                read: function (options) {
                                    var pqOptions = {};
                                    pqOptions.WithCount = false;
                                    pqOptions.Page = -1;
                                    pqOptions.PageSize = -1;

                                    var executeParams = $scope.esPqDef.Params;
                                    if (
                                        executeParams instanceof
                                        esGlobals.ESParamValues
                                    ) {
                                        if (!executeParams.isValidState()) {
                                            var err = new Error(
                                                $translate.instant(
                                                    "ESUI.PQ.PARAMS_MISSING"
                                                )
                                            );
                                            options.error(err);
                                            throw err;
                                        }
                                        executeParams =
                                            executeParams.getExecuteVals();
                                    }

                                    esWebApiService
                                        .fetchPublicQuery(
                                            $scope.esPqDef.GroupID,
                                            $scope.esPqDef.FilterID,
                                            pqOptions,
                                            executeParams
                                        )
                                        .then(function (pq) {
                                            if (
                                                pq &&
                                                pq.data &&
                                                pq.data.Rows &&
                                                pq.data.Rows.length
                                            ) {
                                                pq = pq.data.Rows;
                                            } else {
                                                pq = [];
                                            }

                                            options.success(pq);
                                            $scope.resourcesDS.read();
                                        })
                                        .catch(function (err) {
                                            $log.error(
                                                "Error in DataSource ",
                                                err
                                            );
                                            options.error(err);
                                        });
                                },
                            },
                            schema: {
                                model: {
                                    id: "id",
                                    fields: {
                                        id: { from: "Code", type: "string" },
                                        parentId: {
                                            from: "ParentCode",
                                            type: "string",
                                        },
                                        TaskTypeDescription: {
                                            from: "TaskTypeDescription",
                                            type: "string",
                                        },
                                        WPCode: {
                                            from: "WPCode",
                                            type: "string",
                                        },
                                        start: {
                                            from: "StartDate",
                                            type: "date",
                                        },
                                        end: {
                                            from: "FinishDate",
                                            type: "date",
                                        },
                                        title: {
                                            from: "Title",
                                            type: "string",
                                        },
                                        percentComplete: {
                                            from: "Completeness",
                                            type: "number",
                                        },
                                        summary: {
                                            from: "IsSummary",
                                            type: "boolean",
                                        },
                                        expanded: {
                                            from: "Expanded",
                                            type: "boolean",
                                        },
                                    },
                                },
                            },
                        });

                        $scope.resourcesDS = new kendo.data.DataSource({
                            transport: {
                                error: function (e) {
                                    console.log(e);
                                },

                                read: function (options) {
                                    var pqOptions = {};
                                    pqOptions.WithCount = false;
                                    pqOptions.Page = -1;
                                    pqOptions.PageSize = -1;

                                    var executeParams = $scope.esPqDef.Params;
                                    if (
                                        executeParams instanceof
                                        esGlobals.ESParamValues
                                    ) {
                                        if (!executeParams.isValidState()) {
                                            var err = new Error(
                                                $translate.instant(
                                                    "ESUI.PQ.PARAMS_MISSING"
                                                )
                                            );
                                            options.error(err);
                                            throw err;
                                        }
                                        executeParams =
                                            executeParams.getExecuteVals();
                                    }

                                    var sG = $scope.esPqDef.GroupID;
                                    var fG = "ProjectTaskResources";
                                    if (
                                        $scope.esPqDef.UIOptions &&
                                        angular.isString(
                                            $scope.esPqDef.UIOptions
                                                .ProjectTaskResourcesPQ
                                        )
                                    ) {
                                        var parts =
                                            $scope.esPqDef.UIOptions.ProjectTaskAssignmentsPQ.split(
                                                ","
                                            );
                                        parts[0] = parts[0].trim();
                                        if (parts[0]) {
                                            sG = parts[0];
                                        }
                                        if (parts.length > 1) {
                                            parts[1] = parts[1].trim();
                                            if (parts[1]) {
                                                fG = parts[1];
                                            }
                                        }
                                    }
                                    esWebApiService
                                        .fetchPublicQuery(
                                            sG,
                                            fG,
                                            pqOptions,
                                            executeParams
                                        )
                                        .then(function (pq) {
                                            if (
                                                pq &&
                                                pq.data &&
                                                pq.data.Rows &&
                                                pq.data.Rows.length
                                            ) {
                                                pq = pq.data.Rows;
                                            } else {
                                                pq = [];
                                            }
                                            options.success(pq);
                                            $scope.assignmentsDS.read();
                                        })
                                        .catch(function (err) {
                                            $log.error(
                                                "Error in DataSource ",
                                                err
                                            );
                                            options.error(err);
                                        });
                                },
                            },
                            schema: {
                                model: {
                                    id: "id",
                                    fields: {
                                        id: { from: "Code", type: "string" },
                                        Name: { from: "Name", type: "string" },
                                        Color: {
                                            from: "Color",
                                            type: "string",
                                        },
                                    },
                                },
                            },
                        });

                        $scope.assignmentsDS = new kendo.data.DataSource({
                            transport: {
                                error: function (e) {
                                    console.log(e);
                                },

                                read: function (options) {
                                    var pqOptions = {};
                                    pqOptions.WithCount = false;
                                    pqOptions.Page = -1;
                                    pqOptions.PageSize = -1;

                                    var executeParams = $scope.esPqDef.Params;
                                    if (
                                        executeParams instanceof
                                        esGlobals.ESParamValues
                                    ) {
                                        if (!executeParams.isValidState()) {
                                            var err = new Error(
                                                $translate.instant(
                                                    "ESUI.PQ.PARAMS_MISSING"
                                                )
                                            );
                                            options.error(err);
                                            throw err;
                                        }
                                        executeParams =
                                            executeParams.getExecuteVals();
                                    }

                                    var sG = $scope.esPqDef.GroupID;
                                    var fG = "ProjectTaskAssignments";
                                    if (
                                        $scope.esPqDef.UIOptions &&
                                        angular.isString(
                                            $scope.esPqDef.UIOptions
                                                .ProjectTaskAssignmentsPQ
                                        )
                                    ) {
                                        var parts =
                                            $scope.esPqDef.UIOptions.ProjectTaskAssignmentsPQ.split(
                                                ","
                                            );
                                        parts[0] = parts[0].trim();
                                        if (parts[0]) {
                                            sG = parts[0];
                                        }
                                        if (parts.length > 1) {
                                            parts[1] = parts[1].trim();
                                            if (parts[1]) {
                                                fG = parts[1];
                                            }
                                        }
                                    }

                                    esWebApiService
                                        .fetchPublicQuery(
                                            sG,
                                            fG,
                                            pqOptions,
                                            executeParams
                                        )
                                        .then(function (pq) {
                                            if (
                                                pq &&
                                                pq.data &&
                                                pq.data.Rows &&
                                                pq.data.Rows.length
                                            ) {
                                                pq = pq.data.Rows;
                                            } else {
                                                pq = [];
                                            }
                                            options.success(pq);
                                        })
                                        .catch(function (err) {
                                            $log.error(
                                                "Error in DataSource ",
                                                err
                                            );
                                            options.error(err);
                                        });
                                },
                            },
                            schema: {
                                model: {
                                    id: "ID",
                                    fields: {
                                        ID: { from: "GID", type: "string" },
                                        ResourceID: {
                                            from: "Code",
                                            type: "string",
                                        },
                                        Units: {
                                            from: "ResourceUsage",
                                            type: "number",
                                        },
                                        TaskID: {
                                            from: "TaskCode",
                                            type: "string",
                                        },
                                    },
                                },
                            },
                        });

                        $scope.esGanttOptions = {
                            dataSource: $scope.tasksDS,
                            assignments: {
                                dataTaskIdField: "TaskID",
                                dataResourceIdField: "ResourceID",
                                dataValueField: "Units",
                                dataSource: $scope.assignmentsDS,
                            },
                            resources: {
                                field: "Resources",
                                dataColorField: "Color",
                                dataTextField: "Name",
                                dataSource: $scope.resourcesDS,
                            },
                            views: [
                                "day",
                                { type: "week", selected: true },
                                "month",
                            ],
                            columns: [
                                {
                                    field: "title",
                                    title: $translate.instant(
                                        "ESUI.PROJECT.COL_TITLE"
                                    ),
                                    width: 200,
                                },
                                {
                                    field: "start",
                                    title: $translate.instant(
                                        "ESUI.PROJECT.START_TITLE"
                                    ),
                                    format: "{0:dd/MM/yyyy}",
                                    width: 100,
                                },
                                {
                                    field: "end",
                                    title: $translate.instant(
                                        "ESUI.PROJECT.END_TITLE"
                                    ),
                                    format: "{0:dd/MM/yyyy}",
                                    width: 100,
                                },
                                {
                                    field: "Resources",
                                    title: $translate.instant(
                                        "ESUI.PROJECT.RES_TITLE"
                                    ),
                                    width: 400,
                                },
                                {
                                    field: "id",
                                    title: $translate.instant(
                                        "ESUI.PROJECT.ID_TITLE"
                                    ),
                                    width: 100,
                                },
                                {
                                    field: "TaskTypeDescription",
                                    title: $translate.instant(
                                        "ESUI.PROJECT.TTYPE_TITLE"
                                    ),
                                    width: 200,
                                },
                                {
                                    field: "WPCode",
                                    title: $translate.instant(
                                        "ESUI.PROJECT.WP_TITLE"
                                    ),
                                    width: 100,
                                    defaultValue: "",
                                },
                            ],
                            height: 800,
                            autoBind: false,
                            resizable: true,
                            columnResizeHandleWidth: 6,
                            navigatable: true,
                            showWorkHours: false,
                            showWorkDays: false,
                        };

                        if (
                            $scope.esPqDef &&
                            $scope.esPqDef.PQOptions &&
                            $scope.esPqDef.PQOptions.AutoExecute
                        ) {
                            $scope.executePQ();
                        }
                    },
                };
            },
        ])

        .directive("esSanKeyPq", [
            "$log",
            "$window",
            "$uibModal",
            "$timeout",
            "esWebApi",
            "esMessaging",
            "esUIHelper",
            "esGlobals",
            function (
                $log,
                $window,
                $uibModal,
                $timeout,
                esWebApiService,
                esMessaging,
                esWebUIHelper,
                esGlobals
            ) {
                return {
                    restrict: "AE",
                    scope: {
                        esPqDef: "=",
                    },
                    templateUrl: function (element, attrs) {
                        return "src/partials/esSanKeyPQ.html";
                    },
                    link: {
                        pre: function ($scope, iElement, iAttrs) {
                            $scope.executePQ = function () {
                                $scope.esPqDef.esPanelOpen.status = false;
                                if ($scope.sankeyCtrl) {
                                    $scope.sankeyCtrl.showLoadingIndicator();
                                }

                                esWebApiService
                                    .fetchPublicQuery($scope.esPqDef)
                                    .then(function (pq) {
                                        var dt = pq.data.Rows;

                                        $scope.UIOptions.dataSource.length = 0;
                                        var g = 0;
                                        for (g = 0; g < dt.length; g++) {
                                            $scope.UIOptions.dataSource.push(
                                                dt[g]
                                            );
                                        }

                                        if ($scope.sankeyCtrl) {
                                            $scope.sankeyCtrl
                                                .getDataSource()
                                                .reload();
                                            $scope.sankeyCtrl.hideLoadingIndicator();
                                        }
                                    })
                                    .catch(function (err) {
                                        $scope.UIOptions.dataSource.length = 0;
                                        if ($scope.sankeyCtrl) {
                                            $scope.sankeyCtrl
                                                .getDataSource()
                                                .reload();
                                            $scope.sankeyCtrl.hideLoadingIndicator();
                                        }
                                    });
                            };

                            var options = {
                                dataSource: [],
                                sourceField: "FromDimension",
                                targetField: "ToDimension",
                                weightField: "Weight",
                                link: {
                                    colorMode: "gradient",
                                },
                                onInitialized: function (e) {
                                    $scope.sankeyCtrl = e.component;
                                },
                                onIncidentOccurred: function (e) {
                                    if (e.target && e.target.type == "error") {
                                        esMessaging.publish(
                                            "ES_SANKEY_INCIDENT_OCCURED",
                                            e
                                        );
                                    }
                                },
                                tooltip: {
                                    enabled: true,
                                },
                            };

                            var scr = $scope.esPqDef.UIOptions;
                            if (scr) {
                                angular.merge(options, scr);
                            }

                            $scope.UIOptions = options;
                            $scope.esPqDef.runPQ = $scope.executePQ;

                            $scope.$on("$destroy", function () {
                                angular
                                    .element($window)
                                    .unbind("resize", resizeSanKey);
                            });

                            var resizeSanKey = function () {
                                if ($scope.sankeyCtrl) {
                                    $scope.sankeyCtrl.render();
                                }
                            };

                            angular
                                .element($window)
                                .bind("resize", resizeSanKey);

                            esWebApiService
                                .fetchPublicQueryInfo($scope.esPqDef)
                                .then(function (ret) {
                                    var v =
                                        esWebUIHelper.winGridInfoToESGridInfo(
                                            $scope.esPqDef.GroupID,
                                            $scope.esPqDef.FilterID,
                                            ret.data
                                        );

                                    var tp = {
                                        enabled: true,
                                        customizeLinkTooltip: function (info) {
                                            var ts =
                                                "<b>" +
                                                _.find(v.columns, {
                                                    field: $scope.UIOptions
                                                        .sourceField,
                                                }).title +
                                                ":</b> " +
                                                info.source +
                                                "<br/><b>" +
                                                _.find(v.columns, {
                                                    field: $scope.UIOptions
                                                        .targetField,
                                                }).title +
                                                ":</b> " +
                                                info.target +
                                                "<br/>" +
                                                "<b>" +
                                                _.find(v.columns, {
                                                    field: $scope.UIOptions
                                                        .weightField,
                                                }).title +
                                                ":</b> " +
                                                info.weight;
                                            return {
                                                html: ts,
                                            };
                                        },
                                    };
                                    if ($scope.sankeyCtrl) {
                                        $scope.sankeyCtrl.option("tooltip", tp);
                                        $scope.sankeyCtrl.option(
                                            "title",
                                            v.caption
                                        );
                                    }
                                })
                                .catch(function (err) {
                                    $log.error(err);
                                });

                            if (
                                $scope.esPqDef &&
                                $scope.esPqDef.PQOptions &&
                                $scope.esPqDef.PQOptions.AutoExecute
                            ) {
                                $scope.executePQ();
                            }
                        },
                    },
                };
            },
        ])

        .directive("esCardPq", [
            "$log",
            "$window",
            "$uibModal",
            "$timeout",
            "esWebApi",
            "esMessaging",
            "esUIHelper",
            "esGlobals",
            function (
                $log,
                $window,
                $uibModal,
                $timeout,
                esWebApiService,
                esMessaging,
                esWebUIHelper,
                esGlobals
            ) {
                return {
                    restrict: "AE",
                    scope: {
                        esPqDef: "=",
                    },
                    templateUrl: function (element, attrs) {
                        return "src/partials/esCardPQ.html";
                    },
                    link: function ($scope, iElement, iAttrs) {
                        $scope.executePQ = function () {
                            $scope.esPqDef.esPanelOpen.status = false;
                            $scope.cardDataSource.page(1);
                        };

                        $scope.esPqDef.runPQ = $scope.executePQ;

                        var options = {
                            headerField: "",
                            titleField: "",
                            footerField: "",
                            imageField: "",
                            tagField: "",
                            simpleView: false,
                        };

                        var scr = $scope.esPqDef.UIOptions;
                        if (scr) {
                            angular.merge(options, scr);
                        }

                        $scope.UIOptions = options;

                        var dsOptions = {
                            serverGrouping: false,
                            serverSorting: false,
                            serverFiltering: false,
                            serverAggregates: false,
                            serverPaging: $scope.esPqDef.PQOptions
                                ? angular.isDefined(
                                      $scope.esPqDef.PQOptions.ServerPaging
                                  )
                                    ? $scope.esPqDef.PQOptions.ServerPaging
                                    : true
                                : true,
                            pageSize:
                                ($scope.esPqDef.PQOptions
                                    ? $scope.esPqDef.PQOptionsPageSize
                                    : null) || 20,
                        };
                        $scope.cardDataSource = esWebUIHelper.getPQDataSource(
                            $scope.esPqDef,
                            dsOptions
                        );

                        var xFields = null;

                        $scope.bodyFields = function () {
                            console.log(
                                "BF - " + (!xFields ? " NULL " : xFields.length)
                            );

                            if (xFields) {
                                return xFields;
                            }
                            var reserved = [
                                $scope.UIOptions.headerField,
                                $scope.UIOptions.titleField,
                                $scope.UIOptions.footerField,
                                $scope.UIOptions.imageField,
                                $scope.UIOptions.tagField,
                                "Longitude",
                                "Latitude",
                            ];

                            if (
                                !$scope.esPqDef.esGridOptions ||
                                !$scope.esPqDef.esGridOptions.columns
                            ) {
                                return [];
                            }

                            xFields = _.filter(
                                $scope.esPqDef.esGridOptions.columns,
                                function (l) {
                                    return reserved.indexOf(l.field) == -1;
                                }
                            );
                            return xFields;
                        };

                        $scope.getTagField = function (item) {
                            if ($scope.UIOptions.tagField) {
                                var v = item[$scope.UIOptions.tagField];
                                if (v) {
                                    return v;
                                }
                            }
                            return "none";
                        };

                        $scope.isNoImage = function (item) {
                            return !$scope.getImageUrl(item);
                        };

                        $scope.getImageUrl = function (item) {
                            if (!$scope.UIOptions.imageField) return null;

                            return esResolveBlobUrl(
                                item[$scope.UIOptions.imageField],
                                esWebApiService
                            );
                        };

                        $scope.getFieldText = function (item, col) {
                            var fieldName = col.field;
                            if (!item[fieldName]) return null;

                            if (esGlobals.isEmail(fieldName))
                                return (
                                    '<a href="mailto:' +
                                    item[fieldName] +
                                    '">' +
                                    item[fieldName] +
                                    "</a>"
                                );
                            else if (esGlobals.isPhone(fieldName))
                                return (
                                    '<a href="tel:' +
                                    item[fieldName] +
                                    '">' +
                                    item[fieldName] +
                                    "</a>"
                                );
                            else
                                return col.format
                                    ? kendo.format(col.format, item[fieldName])
                                    : item[fieldName];
                        };

                        $scope.getFieldStyle = function (item, col) {
                            var fVal = item[col.field];
                            return fVal && fVal < 0 ? { color: "red" } : null;
                        };

                        $scope.hasMap = function (item) {
                            return item.Latitude && item.Longitude;
                        };

                        $scope.showMap = function (item) {
                            if (!$scope.hasMap(item)) return;

                            var modalInstance = $uibModal.open({
                                animation: true,
                                ariaLabelledBy: "modal-title",
                                ariaDescribedBy: "modal-body",
                                template:
                                    "<div ng-include src=\"'src/partials/esmodalmap.html'\"></div>",
                                size: "lg",
                                controller: function () {
                                    var $ctrl = this;
                                    $ctrl.point = [
                                        item.Latitude,
                                        item.Longitude,
                                    ];
                                    $ctrl.title =
                                        ($scope.UIOptions.headerField
                                            ? item[$scope.UIOptions.headerField]
                                            : "") +
                                            " - " +
                                            ($scope.UIOptions.titleField
                                                ? item[
                                                      $scope.UIOptions
                                                          .titleField
                                                  ]
                                                : "") || item[0];
                                },
                                controllerAs: "$ctrl",
                            });

                            modalInstance.result
                                .then(function (selectedItem) {})
                                .catch(angular.noop);
                        };

                        if (
                            $scope.esPqDef &&
                            $scope.esPqDef.PQOptions &&
                            $scope.esPqDef.PQOptions.AutoExecute
                        ) {
                            $scope.executePQ();
                        }
                    },
                };
            },
        ])

        .directive("esMetricPq", [
            "$log",
            "$window",
            "$uibModal",
            "$timeout",
            "esWebApi",
            "esMessaging",
            "esUIHelper",
            "esGlobals",
            function (
                $log,
                $window,
                $uibModal,
                $timeout,
                esWebApiService,
                esMessaging,
                esWebUIHelper,
                esGlobals
            ) {
                return {
                    restrict: "AE",
                    scope: {
                        esPqDef: "=",
                    },
                    templateUrl: function (element, attrs) {
                        return "src/partials/esMetricPQ.html";
                    },
                    link: function ($scope, iElement, iAttrs) {
                        $scope.executePQ = function () {
                            $scope.esPqDef.esPanelOpen.status = false;
                            $scope.metricDataSource.page(1);
                        };

                        $scope.esPqDef.runPQ = $scope.executePQ;

                        var options = {
                            titleField: "",
                            valueField: "",
                            tagField: "",
                            iconField: "",
                        };

                        var scr = $scope.esPqDef.UIOptions;
                        if (scr) {
                            angular.merge(options, scr);
                        }

                        $scope.UIOptions = options;

                        var dsOptions = {
                            serverGrouping: false,
                            serverSorting: false,
                            serverFiltering: false,
                            serverAggregates: false,
                            serverPaging: true,
                            pageSize: 100,
                        };
                        $scope.metricDataSource = esWebUIHelper.getPQDataSource(
                            $scope.esPqDef,
                            dsOptions
                        );

                        $scope.getValue = function (row) {
                            var v = row[$scope.UIOptions.valueField];

                            if ($scope.UIOptions.formatValue) {
                                return kendo.format(
                                    $scope.UIOptions.formatValue,
                                    v
                                );
                            } else {
                                return v;
                            }
                        };

                        $scope.getTagField = function (item) {
                            if ($scope.UIOptions.tagField) {
                                var v = item[$scope.UIOptions.tagField];
                                if (v) {
                                    return v;
                                }
                            }
                            return "none";
                        };

                        if (
                            $scope.esPqDef &&
                            $scope.esPqDef.PQOptions &&
                            $scope.esPqDef.PQOptions.AutoExecute
                        ) {
                            $scope.executePQ();
                        }
                    },
                };
            },
        ])

        .directive("esTreeMap", [
            "$log",
            "$window",
            "esWebApi",
            "esMessaging",
            "esUIHelper",
            "esGlobals",
            function (
                $log,
                $window,
                esWebApiService,
                esMessaging,
                esWebUIHelper,
                esGlobals
            ) {
                return {
                    restrict: "AE",
                    scope: {
                        esPanelOpen: "=?",
                        esPqDef: "=?",
                        esChartCtrl: "=?",
                        esChartOptions: "=?",
                    },
                    templateUrl: function (element, attrs) {
                        return "src/partials/esTreeMapPQ.html";
                    },
                    link: function ($scope, iElement, iAttrs) {
                        var ctrlF = function () {
                            return $scope.esTreeMapCtrl;
                        };

                        var onResize = function () {
                            var ctrl = ctrlF();

                            if (ctrl) {
                                ctrl.resize();
                            } else {
                                kendo.resize(
                                    angular.element(".eschart-wrapper")
                                );
                            }
                        };

                        $scope.esChartDataSource = esWebUIHelper.getTreeMapDS(
                            $scope.esPqDef,
                            false,
                            null,
                            ctrlF
                        );

                        var tOptions = $scope.esChartOptions || {};

                        tOptions.valueField = "value";
                        tOptions.textField = "name";

                        $scope.executePQ = function () {
                            $scope.esPqDef.esPanelOpen.status = false;
                            if ($scope.esChartDataSource) {
                                $scope.esChartDataSource.read();
                            }
                        };

                        $scope.esPqDef.runPQ = $scope.executePQ;

                        $scope.$on("$destroy", function () {
                            angular.element($window).unbind("resize", onResize);
                        });

                        angular.element($window).bind("resize", onResize);

                        tOptions.dataSource = $scope.esChartDataSource;
                    },
                };
            },
        ])

        .directive("esPivotPq", [
            "$log",
            "$window",
            "$q",
            "esWebApi",
            "esMessaging",
            "esUIHelper",
            "esGlobals",
            "esCache",
            function (
                $log,
                $window,
                $q,
                esWebApiService,
                esMessaging,
                esWebUIHelper,
                esGlobals,
                esCache
            ) {
                return {
                    restrict: "AE",
                    scope: {
                        esPqDef: "=",
                        esPanelOpen: "=?",
                    },
                    templateUrl: function (element, attrs) {
                        return "src/partials/esPivotPQ.html";
                    },
                    link: {
                        pre: function ($scope, iElement, iAttrs) {
                            var bBound = false;
                            var setts = esGlobals.getESUISettings();

                            if (
                                !$scope.esPqDef ||
                                !$scope.esPqDef.UIOptions ||
                                !$scope.esPqDef.UIOptions.cubeDef
                            ) {
                                throw "espivotpq directive is either missing esPqDef or esPqDef.UIOptions or esPqDef.UIOptions.cubeDef";
                            }
                            var defOptions = {
                                allowSortingBySummary: true,
                                allowSorting: true,
                                allowFiltering: true,
                                allowExpandAll: true,
                                showBorders: true,
                                rowHeaderLayout: "tree",
                                fieldChooser: {
                                    enabled: true,
                                },
                                export: {
                                    enabled: true,
                                },

                                fieldPanel: {
                                    showDataFields: true,
                                    showRowFields: true,
                                    showColumnFields: true,
                                    showFilterFields: true,
                                    allowFieldDragging: true,
                                    visible: false,
                                },
                            };

                            $scope.chartOptions = {
                                commonSeriesSettings: {
                                    type: "bar",
                                },
                                tooltip: {
                                    enabled: true,
                                    customizeTooltip: function (args) {
                                        var x = esCache.getItem("ES_BASE_CURR");
                                        var valueText = "";
                                        if (x) {
                                            try {
                                                valueText =
                                                    Globalize.formatCurrency(
                                                        args.originalValue,
                                                        x
                                                    );
                                            } catch (err) {
                                                valueText = args.valueText;
                                            }
                                        } else {
                                            valueText = args.valueText;
                                        }

                                        return {
                                            html:
                                                args.seriesName +
                                                "<div class='currency'>" +
                                                valueText +
                                                "</div>",
                                        };
                                    },
                                },
                                onInitialized: function (e) {
                                    $scope.pivotChart = e.component;

                                    if (!bBound && $scope.gridInstance) {
                                        $scope.gridInstance.bindChart(
                                            $scope.pivotChart,
                                            {
                                                dataFieldsDisplayMode:
                                                    "splitPanes",
                                                alternateDataFields: false,
                                            }
                                        );
                                        bBound = true;
                                    }
                                },
                            };

                            var tOptions = defOptions;

                            if ($scope.esPqDef.UIOptions.pivotOptions) {
                                var x = angular.merge(
                                    {},
                                    tOptions,
                                    $scope.esPqDef.UIOptions.pivotOptions
                                );
                                angular.merge(tOptions, x);
                            }

                            tOptions.onContextMenuPreparing = function (e) {
                                var sourceField = e.field;
                                var dataSource = e.component.getDataSource();
                                if (sourceField) {
                                    if (sourceField.dataType === "number") {
                                        var setSummaryType = function (args) {
                                                dataSource.field(
                                                    sourceField.index,
                                                    {
                                                        summaryType:
                                                            args.itemData.value,
                                                    }
                                                );
                                                dataSource.load();
                                            },
                                            menuItems = [];

                                        e.items.splice(0, 0, {
                                            text: "Summary Type",
                                            beginGroup: true,
                                            items: menuItems,
                                        });

                                        _.forEach(
                                            ["Sum", "Avg", "Min", "Max"],
                                            function (summaryType) {
                                                var summaryTypeValue =
                                                    summaryType.toLowerCase();
                                                menuItems.push({
                                                    text: summaryType,
                                                    value: summaryType.toLowerCase(),
                                                    onItemClick: setSummaryType,
                                                    selected:
                                                        e.field.summaryType ===
                                                        summaryTypeValue,
                                                });
                                            }
                                        );
                                    }
                                    return;
                                }

                                var l =
                                    $scope.gridInstance.option(
                                        "rowHeaderLayout"
                                    );
                                var nl = l == "standard" ? "tree" : "standard";
                                e.items.splice(0, 0, {
                                    beginGroup: true,
                                    text: "RowHeader Layout " + nl,
                                    onItemClick: function (c) {
                                        $scope.gridInstance.option(
                                            "rowHeaderLayout",
                                            nl
                                        );
                                    },
                                });

                                var l1 =
                                    $scope.gridInstance.option(
                                        "showTotalsPrior"
                                    );
                                var nl1 = l1 == "both" ? "none" : "both";
                                e.items.splice(1, 0, {
                                    beginGroup: true,
                                    text: "Show Totals " + nl1,
                                    onItemClick: function (c) {
                                        $scope.gridInstance.option(
                                            "showTotalsPrior",
                                            nl1
                                        );
                                    },
                                });

                                var l2 =
                                    $scope.gridInstance.option("dataFieldArea");
                                var nl2 = l2 == "row" ? "column" : "row";
                                e.items.splice(2, 0, {
                                    beginGroup: true,
                                    text: "Data Field headers in " + nl2,
                                    onItemClick: function (c) {
                                        $scope.gridInstance.option(
                                            "dataFieldArea",
                                            nl2
                                        );
                                    },
                                });

                                if ($scope.esPqDef.UIOptions.enableChart) {
                                    e.items.push({
                                        beginGroup: true,
                                        text: $scope.esPqDef.UIOptions.hideChart
                                            ? "Show Chart"
                                            : "Hide Chart",
                                        onItemClick: function (c) {
                                            $scope.esPqDef.UIOptions.hideChart =
                                                !$scope.esPqDef.UIOptions
                                                    .hideChart;
                                        },
                                    });
                                }
                            };

                            tOptions.onCellClick = function (e) {
                                if (e.area == "data") {
                                    var pivotGridDataSource =
                                        e.component.getDataSource();
                                    var popupTitle =
                                        e.cell.rowPath.join("/") +
                                        " - " +
                                        e.cell.columnPath.join("/") +
                                        " : " +
                                        e.dataFields[e.cell.dataIndex].caption;

                                    $scope.drillDownDataSource =
                                        pivotGridDataSource.createDrillDownDataSource(
                                            e.cell
                                        );
                                    $scope.salesPopupTitle = popupTitle;
                                    $scope.salesPopupVisible = true;
                                }
                            };

                            tOptions.onInitialized = function (e) {
                                $scope.gridInstance = e.component;

                                if ($scope.pivotChart && !bBound) {
                                    $scope.gridInstance.bindChart(
                                        $scope.pivotChart,
                                        {
                                            dataFieldsDisplayMode: "splitPanes",
                                            alternateDataFields: false,
                                        }
                                    );
                                    bBound = true;
                                }
                            };

                            var plt = DevExpress.devices.current();

                            if (plt.tablet || plt.phone) {
                                // force narrow settings for mobile
                                tOptions.rowHeaderLayout = "tree";
                            }
                            DevExpress.viz.currentTheme(plt, "light");

                            $scope.pivotOptions = tOptions;

                            esWebApiService
                                .fetchPublicQueryInfo(
                                    $scope.esPqDef,
                                    null,
                                    true,
                                    true
                                )
                                .then(function (ret) {
                                    var v =
                                        esWebUIHelper.winGridInfoToESGridInfo(
                                            $scope.esPqDef.GroupID,
                                            $scope.esPqDef.FilterID,
                                            ret.data
                                        );

                                    if (tOptions.export) {
                                        tOptions.export.fileName = v.caption;
                                        tOptions.export.proxyURL =
                                            esWebApiService.proxyExportSaveFile(
                                                "telerik"
                                            );
                                    }

                                    $scope.dataGridOptions = {
                                        columnAutoWidth: true,
                                        rowAlternationEnabled: true,
                                        filterRow: {
                                            visible: true,
                                            applyFilter: "auto",
                                        },
                                        height: "100%",
                                        paging: {
                                            enabled: true,
                                            pageSize: 20,
                                            pageIndex: 1,
                                        },
                                        bindingOptions: {
                                            dataSource: {
                                                dataPath: "drillDownDataSource",
                                                deep: false,
                                            },
                                        },
                                        columns: _.map(
                                            _.filter(v.columns, function (x) {
                                                return !x.hidden;
                                            }),
                                            function (o) {
                                                return {
                                                    dataField: o.field,
                                                    caption: o.title,
                                                    allowSorting: true,
                                                    allowFiltering: true,
                                                    format: getPivotColFormatType(
                                                        o
                                                    ),
                                                };
                                            }
                                        ),
                                    };

                                    $scope.popupOptions = {
                                        showCloseButton: true,

                                        bindingOptions: {
                                            title: "salesPopupTitle",
                                            visible: "salesPopupVisible",
                                        },
                                    };

                                    $scope.esPivotDataSource =
                                        esWebUIHelper.getPivotDS(
                                            $q,
                                            $scope.esPqDef,
                                            $scope.esPqDef.UIOptions.cubeDef,
                                            v
                                        );
                                    if (
                                        $scope.esPqDef.PQOptions &&
                                        $scope.esPqDef.PQOptions.AutoExecute
                                    ) {
                                        $scope.gridInstance.option(
                                            "dataSource",
                                            $scope.esPivotDataSource
                                        );
                                    }
                                })
                                .catch(function (err) {
                                    $log.error(err);
                                });

                            $scope.executePQ = function () {
                                $scope.esPqDef.esPanelOpen.status = false;
                                if (!$scope.gridInstance.option("dataSource")) {
                                    $scope.gridInstance.option(
                                        "dataSource",
                                        $scope.esPivotDataSource
                                    );
                                } else {
                                    $scope.esPivotDataSource.reload();
                                }
                            };

                            $scope.esPqDef.runPQ = $scope.executePQ;
                        },
                    },
                };
            },
        ])

        .directive("esMapPq", [
            "$log",
            "$window",
            "esWebApi",
            "esMessaging",
            "esUIHelper",
            "esGlobals",
            function (
                $log,
                $window,
                esWebApiService,
                esMessaging,
                esWebUIHelper,
                esGlobals
            ) {
                return {
                    restrict: "AE",
                    scope: {
                        esPanelOpen: "=?",
                        esPqDef: "=?",
                        esOptions: "=?",
                    },
                    templateUrl: function (element, attrs) {
                        return "src/partials/esMapPQ.html";
                    },
                    link: function ($scope, iElement, iAttrs) {
                        var onChange = function (e) {
                            var map = $scope.esMapCtrl;
                            if (!map) {
                                return;
                            }

                            if (!e.items || !e.items.length) {
                                map.center([
                                    32.546813173515126, -4.218749999999986,
                                ]);
                                map.zoom(2);
                            }

                            var extent;
                            for (var i = 0; i < e.items.length; i++) {
                                var loc = [
                                    e.items[i].Latitude || e.items[i].latitude,
                                    e.items[i].Longitude ||
                                        e.items[i].longitude,
                                ];

                                if (!extent) {
                                    extent = new kendo.dataviz.map.Extent(
                                        loc,
                                        loc
                                    );
                                } else {
                                    extent.include(loc);
                                }
                            }

                            map.extent(extent);
                        };

                        var ctrlF = function () {
                            return $scope.esMapCtrl;
                        };

                        var onResize = function () {
                            var ctrl = ctrlF();

                            if (ctrl) {
                                ctrl.resize();
                            } else {
                                kendo.resize(
                                    angular.element(".eschart-wrapper")
                                );
                            }
                        };

                        $scope.bubbleMessage = "";
                        $scope.tlOptions = {
                            filter: "circle",
                            content: function () {
                                return $scope.bubbleMessage;
                            },
                            position: "top",
                            animation: {
                                open: {
                                    effects: "zoom",
                                    duration: 150,
                                },
                            },
                        };

                        var esOptions = $scope.esOptions || {};
                        var valField =
                            esOptions.valueField &&
                            angular.isString(esOptions.valueField)
                                ? esOptions.valueField
                                : "Figure";

                        $scope.esMapDataSource = esWebUIHelper.getTreeMapDS(
                            $scope.esPqDef,
                            true,
                            onChange,
                            ctrlF,
                            valField
                        );
                        $scope.esMapOptions = {};
                        var tOptions = $scope.esMapOptions;

                        var dataLayer = {
                            type:
                                esOptions.type &&
                                angular.isString(esOptions.type)
                                    ? esOptions.type
                                    : "marker",
                            dataSource: $scope.esMapDataSource,
                            locationField: "latlng",
                            titleField:
                                esOptions.titleField &&
                                angular.isString(esOptions.titleField)
                                    ? esOptions.titleField
                                    : "esLabel",
                            autoBind: angular.isUndefined(esOptions.autoBind)
                                ? false
                                : !!esOptions.autoBind,
                            valueField: valField,
                        };

                        if (dataLayer.type == "bubble") {
                            tOptions.shapeMouseEnter = function (e) {
                                $scope.bubbleMessage =
                                    e.shape.dataItem[dataLayer.titleField] +
                                    " - " +
                                    e.shape.dataItem[
                                        dataLayer.valueField
                                    ].toString();
                                e.shape.options.set("stroke", {
                                    width: 2,
                                    color: "#00f",
                                });

                                $scope.$apply();
                            };
                            tOptions.shapeMouseLeave = function (e) {
                                $scope.bubbleMessage = "";
                                e.shape.options.set("stroke", null);
                                $scope.$apply();
                            };

                            dataLayer.style = {
                                fill: {
                                    color:
                                        esOptions.color &&
                                        angular.isString(esOptions.color)
                                            ? esOptions.color
                                            : "#00F",
                                },
                                stroke: {
                                    width: 1,
                                },
                            };
                        }

                        tOptions.layers = [
                            {
                                type: "tile",
                                urlTemplate:
                                    "https://#= subdomain #.tile.openstreetmap.org/#= zoom #/#= x #/#= y #.png",
                                subdomains: ["a", "b", "c"],
                                attribution:
                                    "&copy; <a href='http://osm.org/copyright'>OpenStreetMap contributors</a>." +
                                    "Tiles courtesy of <a href='http://www.openstreemap.org/'>Entersoft SA</a>",
                            },
                            dataLayer,
                        ];

                        $scope.executePQ = function () {
                            $scope.esPanelOpen.status = false;
                            if ($scope.esMapDataSource) {
                                $scope.esMapDataSource.read();
                            }
                        };

                        $scope.esPqDef.runPQ = $scope.executePQ;

                        $scope.$on("$destroy", function () {
                            angular.element($window).unbind("resize", onResize);
                        });

                        angular.element($window).bind("resize", onResize);
                    },
                };
            },
        ])

        .directive("esLocalGrid", [
            "$log",
            "esWebApi",
            "esMessaging",
            "esUIHelper",
            "esGlobals",
            function (
                $log,
                esWebApiService,
                esMessaging,
                esWebUIHelper,
                esGlobals
            ) {
                return {
                    restrict: "AE",
                    scope: {
                        esGridOptions: "=",
                        esDataSource: "=",
                    },
                    templateUrl: function (element, attrs) {
                        return "src/partials/esLocalGrid.html";
                    },
                    link: function ($scope, iElement, iAttrs) {
                        $scope.esGridRun = function () {
                            if ($scope.esGridCtrl) {
                                $scope.esGridCtrl.dataSource.read();
                            }
                        };
                    },
                };
            },
        ])

        /**
         * @ngdoc directive
         * @name es.Web.UI.directive:es00DocumentsDetail
         * @requires es.Services.Web.esWebApi Entersoft AngularJS WEB API for Entersoft Application Server
         * @requires es.Web.UI.esUIHelper
         * @requires $log
         * @restrict AE
         * @param {object=} esDocumentGridOptions A subset or full set of esGridOptions for the kendo-grid that will show the ES00Documents.
         * The ES00Documents kendo-grid will be initialized by the merge of the PublicQueryInfo gridoptions as retrieved for the GroupID = "ES00Documents" and
         * FilterID = "ES00DocumentsDetails" public query.
         * @param {string=} esMasterRowField The field of the master grid row that the ES00DocumentGrid will be a detail of. The value of this field in the master row will form
         * the parameter for fetchES00DocumentsByGID service to retrieve the ES00DocumentRows.
         *
         * @description
         *
         * **TBD**
         * This directive is responsible to render the html for the presentation of the ES00Documents as a detail of a kendo-grid
         */
        .directive("es00DocumentsDetail", [
            "$log",
            "$uibModal",
            "esWebApi",
            "esUIHelper",
            "esGlobals",
            "esCache",
            function (
                $log,
                $uibModal,
                esWebApiService,
                esWebUIHelper,
                esGlobals,
                esCache
            ) {
                return {
                    restrict: "AE",
                    scope: {
                        esDocumentGridOptions: "=?",
                        esMasterRowField: "=?",
                        esIsudgid: "=?",
                    },
                    template:
                        "<div ng-include src=\"'src/partials/es00DocumentsDetail.html'\"></div>",
                    link: function ($scope, iElement, iAttrs) {
                        $scope.$watch("esIsudgid", function (newVal, oldVal) {
                            if (
                                $scope.esDocumentGridOptions &&
                                $scope.esDocumentGridOptions.dataSource
                            ) {
                                $scope.esDocumentGridOptions.dataSource.read();
                            }
                        });

                        if (
                            !$scope.esIsudgid &&
                            !iAttrs.esIsudgid &&
                            !$scope.esMasterRowField &&
                            !iAttrs.esMasterRowField
                        ) {
                            $scope.esMasterRowField = "GID";
                            $log.warn(
                                "esIsudgid is not specified and esMasterRowField for es00DocumentsDetail directive NOT specified. Assuming GID"
                            );
                        }

                        var getOptions = function () {
                            var g = "ES00Documents";
                            var f = "ES00DocumentsDetails";
                            var xParam = {
                                serverGrouping: false,
                                serverSorting: false,
                                serverFiltering: false,
                                serverPaging: false,
                                pageSize: 20,
                                transport: {
                                    read: function (options) {
                                        try {
                                            var searchVal = $scope.esIsudgid
                                                ? $scope.esIsudgid
                                                : $scope.$parent.dataItem[
                                                      $scope.esMasterRowField
                                                  ];
                                            esWebApiService
                                                .fetchES00DocumentsByEntityGID(
                                                    searchVal
                                                )
                                                .then(function (ret) {
                                                    options.success(ret);
                                                })
                                                .catch(function (err) {
                                                    options.error(err);
                                                });
                                        } catch (x) {
                                            options.success({ data: [] });
                                        }
                                    },
                                },
                                schema: {
                                    data: "data",
                                    total: "data.length",
                                },
                            };

                            var xDS = new kendo.data.DataSource(xParam);

                            var pqinfo = esCache.getItem("PQI_" + g + "/" + f);
                            if (pqinfo) {
                                processPQInfo(pqinfo, xDS, g, f);
                            } else {
                                esWebApiService
                                    .fetchPublicQueryInfo(g, f, true, true)
                                    .then(function (ret) {
                                        esCache.setItem(
                                            "PQI_" + g + "/" + f,
                                            ret.data
                                        );
                                        processPQInfo(ret.data, xDS, g, f);
                                    })
                                    .catch(angular.noop);
                            }
                        };

                        function processPQInfo(ret, xDS, g, f) {
                            var p1 = ret;
                            var p2 = esWebUIHelper.winGridInfoToESGridInfo(
                                g,
                                f,
                                p1
                            );
                            var pqO = new esGlobals.ESPQOptions(
                                1,
                                -1,
                                true,
                                false
                            );
                            ret = esWebUIHelper.esGridInfoToKInfo(
                                g,
                                f,
                                {},
                                p2,
                                pqO
                            );
                            ret.autoBind = true;
                            ret.toolbar = null;
                            ret.groupable = false;
                            ret.dataSource = xDS;
                            // Add the download column
                            var codeColumn = _.find(p2.columns, {
                                field: "Code",
                            });
                            if (codeColumn) {
                                var sLink =
                                    esWebApiService.downloadURLForBlobDataDownload(
                                        "{{dataItem.GID}}"
                                    );
                                codeColumn.template =
                                    "<a ng-href='" +
                                    sLink +
                                    "' download>{{dataItem.Code}}</a>";
                            }

                            $scope.esDocumentGridOptions = angular.extend(
                                ret,
                                $scope.esDocumentGridOptions
                            );
                        }

                        getOptions();
                    },
                };
            },
        ])

        .controller("esModalInvestigateCtrl", [
            "$scope",
            "$uibModalInstance",
            "esMessaging",
            "invParams",
            function ($scope, $uibModalInstance, esMessaging, invParams) {
                $scope.investigateGridOptions = {
                    autoBind: true,
                    selectable: invParams.paramDef.multiValued
                        ? "multiple, row"
                        : "row",
                };
                $scope.invParams = invParams || {};
                $scope.selectedRows = null;

                var selFunc = function (evt, selectedRows) {
                    if (!selectedRows || selectedRows.length == 0) {
                        $scope.selectedRows = null;
                        return;
                    }

                    $scope.selectedRows = _.map(
                        selectedRows,
                        function (selItem) {
                            return evt.sender.dataItem(selItem)[$scope.invParams.esConnect];
                        }
                    );
                };

                $uibModalInstance.closed
                    .then(function () {
                        esMessaging.unsubscribe(hndl);
                    })
                    .catch(angular.noop);

                var hndl = esMessaging.subscribe("GRID_ROW_CHANGE", selFunc);

                $scope.ok = function () {
                    $uibModalInstance.close($scope.selectedRows);
                };

                $scope.cancel = function () {
                    $uibModalInstance.dismiss("cancel");
                };
            },
        ])

        .controller("esAdvancedParamCtrl", [
            "$uibModalInstance",
            "inAdvancedParam",
            function ($uibModalInstance, inAdvancedParam) {
                var $ctrl = this;
                $ctrl.editedParam = inAdvancedParam;

                $ctrl.ok = function () {
                    $uibModalInstance.close($ctrl.editedParam);
                };
            },
        ])

        .controller("esAskForFieldCtrl", [
            "$uibModalInstance",
            "inDef",
            function ($uibModalInstance, inDef) {
                var $ctrl = this;
                $ctrl.inDef = inDef;

                $ctrl.ok = function () {
                    $uibModalInstance.close(true);
                };

                $ctrl.cancel = function () {
                    $uibModalInstance.dismiss("cancel");
                };
            },
        ])

        .controller("esChangePasswordCtrl", [
            "$uibModalInstance",
            "inDef",
            function ($uibModalInstance, inDef) {
                var $ctrl = this;
                $ctrl.inDef = inDef;

                $ctrl.ok = function () {
                    $uibModalInstance.close($ctrl.inDef);
                };

                $ctrl.cancel = function () {
                    $uibModalInstance.dismiss("cancel");
                };
            },
        ])

        /**
         * @ngdoc directive
         * @name es.Web.UI.directive:esParam
         * @function
         *
         * @description
         * **TBD**
         *
         *
         */
        .directive("esParam", [
            "$log",
            "$uibModal",
            "esWebApi",
            "esUIHelper",
            "esGlobals",
            function (
                $log,
                $uibModal,
                esWebApiService,
                esWebUIHelper,
                esGlobals
            ) {
                return {
                    restrict: "AE",
                    scope: {
                        esParamDef: "=",
                        esParamVal: "=",
                        esType: "=",
                    },
                    template:
                        "<div ng-include src=\"'src/partials/'+esType+'.html'\"></div>",
                    link: function ($scope, iElement, iAttrs) {
                        if (!$scope.esParamDef) {
                            throw "You must set a param";
                        }

                        $scope.drStatus = {
                            dateOpen: false,
                        };

                        $scope.askForMore = function (modalType) {
                            if (!modalType) {
                            }

                            var tmpl =
                                "esAdvancedModal" +
                                modalType.toUpperCase() +
                                ".html";

                            var modalInstance = $uibModal.open({
                                animation: true,
                                ariaLabelledBy: "modal-title",
                                ariaDescribedBy: "modal-body",
                                template:
                                    "<div ng-include src=\"'src/partials/" +
                                    tmpl +
                                    "'\"></div>",
                                controller: "esAdvancedParamCtrl",
                                controllerAs: "$ctrl",
                                size: "sm",
                                appendTo: null,
                                resolve: {
                                    inAdvancedParam: function () {
                                        return {
                                            esParamDef: $scope.esParamDef,
                                            esParamVal: $scope.esParamVal,
                                            esGlobals: esGlobals,
                                        };
                                    },
                                },
                            });

                            modalInstance.result
                                .then(function (selectedItem) {})
                                .catch(angular.noop);
                        };

                        $scope.onClose = function (e, isComplex) {
                            if (e && e.sender) {
                                var v = e.sender.value();
                                if (!isComplex) {
                                    if (v != "0" && v != "1") {
                                        $scope.drStatus.dateOpen = false;
                                    }
                                } else {
                                    if (v == "NULL" || v == "NOTNULL") {
                                        $scope.drStatus.dateOpen = false;
                                    }
                                }
                            }
                        };

                        if ($scope.esParamDef.isInvestigateEntity()) {
                            $scope.onInvestigate = function () {
                                var modalInstance = $uibModal.open({
                                    animation: true,
                                    ariaLabelledBy: "modal-title",
                                    ariaDescribedBy: "modal-body",
                                    template:
                                        "<div ng-include src=\"'src/partials/esInvestigate.html'\"></div>",
                                    controller: "esModalInvestigateCtrl",
                                    size: "lg",
                                    resolve: {
                                        invParams: function () {
                                            var newP =
                                                $scope.esParamVal[
                                                    $scope.esParamDef.id
                                                ].clone("Code");
                                            var esGroup = "",
                                                esFilter = "",
                                                esConnect = "";
                                            var parts = $scope.esParamDef
                                                .getTag("INVPQ:")
                                                .split("INVPQ:");
                                            if (parts.length >= 2) {
                                                parts = parts[1].split("\\");
                                                if (parts.length >= 3) {
                                                    esGroup = parts[0];
                                                    esFilter = parts[1];
                                                    esConnect = parts[2];
                                                }
                                            }

                                            return {
                                                paramDef: $scope.esParamDef,
                                                esGroup: esGroup,
                                                esFilter: esFilter,
                                                esConnect: esConnect,
                                                pVals: new esGlobals.ESParamValues(
                                                    [newP]
                                                ),
                                            };
                                        },
                                    },
                                });

                                modalInstance.result
                                    .then(function (selectedRows) {
                                        if (
                                            !selectedRows ||
                                            selectedRows.length == 0
                                        ) {
                                            return;
                                        }
                                        var sVal = _.join(selectedRows, "\\,");
                                        $scope.esParamVal[
                                            $scope.esParamDef.id
                                        ].pValue(sVal);
                                    })
                                    .catch(angular.noop);
                            };
                        }

                        $scope.esGlobals = esGlobals;
                        $scope.esWebUIHelper = esWebUIHelper;
                        $scope.esWebApiService = esWebApiService;

                        if ($scope.esParamDef.isInvestigateZoom()) {
                            $scope.esParamLookupDS =
                                esWebUIHelper.getZoomDataSource(
                                    $scope.esParamDef.invSelectedMasterTable
                                );
                        }

                        // Case Date Range
                        if (
                            $scope.esParamDef.controlType == 6 ||
                            $scope.esParamDef.controlType == 20
                        ) {
                            $scope.dateRangeOptions =
                                esGlobals.getesDateRangeOptions(
                                    $scope.esParamDef.controlType
                                );
                        }
                    },
                };
            },
        ])
        /**
         * @ngdoc directive
         * @name es.Web.UI.directive:esWebPq
         * @element div
         * @function
         *
         * @description
         * **TBD**
         *
         *
         */
        .directive("esWebPq", [
            "$log",
            "esWebApi",
            "esUIHelper",
            "esMessaging",
            "esGlobals",
            "esCache",
            function (
                $log,
                esWebApiService,
                esWebUIHelper,
                esMessaging,
                esGlobals,
                esCache
            ) {
                return {
                    restrict: "AE",
                    scope: {
                        esGroupId: "=",
                        esFilterId: "=",
                        esGridOptions: "=?",
                        esForceTitle: "=?",
                        esParamsValues: "=",
                        esPanelOpen: "=?",
                        esPqDef: "=?",
                        esPQOptions: "=?",
                        esShowTopPagination: "=",
                        esPostProcessGridOptions: "&",
                    },
                    templateUrl: function (element, attrs) {
                        return "src/partials/esWebPQ.html";
                    },
                    link: function ($scope, iElement, iAttrs) {
                        function donePreparation() {
                            if (
                                $scope.esPqDef &&
                                $scope.esPqDef.isDonePromise
                            ) {
                                $scope.esPqDef.isDonePromise.resolve(
                                    $scope.esPqDef
                                );
                            }
                        }

                        function processPQInfo(retData) {
                            var v = esWebUIHelper.winGridInfoToESGridInfo(
                                $scope.esGroupId,
                                $scope.esFilterId,
                                retData
                            );
                            if (
                                $scope.esParamsValues &&
                                $scope.esParamsValues instanceof
                                    esGlobals.ESParamValues
                            ) {
                                $scope.esParamsValues.merge(v.defaultValues);
                            } else {
                                $scope.esParamsValues = v.defaultValues;
                            }
                            $scope.esParamsDef = v.params;

                            var p = esWebUIHelper.esGridInfoToKInfo(
                                $scope.esGroupId,
                                $scope.esFilterId,
                                $scope.esParamsValues,
                                v,
                                $scope.esPQOptions,
                                $scope.esPqDef
                            );
                            var opt = angular.extend(p, $scope.esGridOptions);

                            if (
                                $scope.esPostProcessGridOptions &&
                                angular.isFunction(
                                    $scope.esPostProcessGridOptions
                                )
                            ) {
                                opt =
                                    $scope.esPostProcessGridOptions({
                                        arg1: opt,
                                    }) || opt;
                            }

                            if (
                                opt &&
                                opt.esToolbars &&
                                angular.isArray(opt.esToolbars)
                            ) {
                                var existingtbs = opt.toolbar || [];

                                _.forEach(opt.esToolbars, function (newtb) {
                                    existingtbs.push({
                                        template: newtb.template,
                                    });
                                });
                            }

                            $scope.esGridOptions = opt;
                            donePreparation();
                        }

                        if (!$scope.esGroupId || !$scope.esFilterId) {
                            throw "You must set the pair es-group-id and es-filter-id attrs";
                        }

                        $scope.executePQ = function () {
                            $scope.esPanelOpen.status = false;
                            $scope.esGridOptions.dataSource.read();
                        };

                        if ($scope.esPqDef) {
                            $scope.esPqDef.runPQ = $scope.executePQ;
                            $scope.esPqDef.ParametersDefinition = function () {
                                return $scope.esParamsDef;
                            };
                        }

                        var pqinfo = esCache.getItem(
                            "PQI_" + $scope.esGroupId + "/" + $scope.esFilterId
                        );
                        if (pqinfo) {
                            processPQInfo(pqinfo);
                        } else {
                            esWebApiService
                                .fetchPublicQueryInfo(
                                    $scope.esGroupId,
                                    $scope.esFilterId,
                                    true,
                                    true
                                )
                                .then(function (ret) {
                                    esCache.setItem(
                                        "PQI_" +
                                            $scope.esGroupId +
                                            "/" +
                                            $scope.esFilterId,
                                        ret.data
                                    );
                                    processPQInfo(ret.data);
                                })
                                .catch(angular.noop);
                        }
                    },
                };
            },
        ])
        /**
         * @ngdoc directive
         * @name es.Web.UI.directive:esParamsPanel
         * @function
         *
         * @description
         * **TBD**
         *
         *
         */
        .directive("esParamsPanel", [
            "$translate",
            "$log",
            "esWebApi",
            "esUIHelper",
            "esGlobals",
            function (
                $translate,
                $log,
                esWebApiService,
                esWebUIHelper,
                esGlobals
            ) {
                return {
                    restrict: "AE",
                    scope: {
                        esPanelOpen: "=?",
                        esParamsDef: "=?",
                        esPqInfo: "=?",
                        esParamsValues: "=?",
                        esGroupId: "=?",
                        esFilterId: "=?",
                        esRunClick: "&",
                        esForceTitle: "=?",
                        esRunTitle: "@?",
                        esShowRun: "=?",
                        esLocalDataSource: "=?",
                        esDataSource: "=?",
                    },
                    templateUrl: function (element, attrs) {
                        return "src/partials/esParams.html";
                    },
                    link: function ($scope, iElement, iAttrs) {
                        $scope.esMore = false;

                        $scope.esToggleMore = function () {
                            $scope.esMore = !$scope.esMore;
                        };

                        var donePreparation = function () {
                            if (
                                $scope.esGroupId instanceof
                                    esGlobals.ESPublicQueryDef &&
                                $scope.esGroupId.isDonePromise
                            ) {
                                $scope.esGroupId.isDonePromise.resolve(
                                    $scope.esGroupId
                                );
                            }
                        };

                        if (!$scope.esPanelOpen) {
                            $scope.esPanelOpen = { status: false };
                        }

                        if (!iAttrs.esParamsDef && !iAttrs.esPqInfo) {
                            if (
                                !(
                                    $scope.esGroupId instanceof
                                    esGlobals.ESPublicQueryDef
                                )
                            ) {
                                if (!$scope.esGroupId || !$scope.esFilterId) {
                                    throw new Error(
                                        "You must set either the es-params-def or es-pq-info or the pair es-group-id and es-filter-id attrs"
                                    );
                                }
                            }
                        }

                        if ($scope.esShowRun && !$scope.esRunTitle) {
                            $translate("ESUI.PQ.PARAMS_PANEL_RUN")
                                .then(function (trans) {
                                    $scope.esRunTitle = trans;
                                })
                                .catch(angular.noop);
                        }

                        if (
                            $scope.esGroupId instanceof
                                esGlobals.ESPublicQueryDef &&
                            !iAttrs.esParamsValues
                        ) {
                            $scope.esParamsValues = $scope.esGroupId.Params;
                            $scope.esGroupId.ParametersDefinition =
                                function () {
                                    return $scope.esParamsDef;
                                };
                        }

                        if (!iAttrs.esParamsDef) {
                            if (!iAttrs.esPqInfo) {
                                // we are given groupid and filterid =>
                                // we must retrieve pqinfo on owr own
                                esWebApiService
                                    .fetchPublicQueryInfo(
                                        $scope.esGroupId,
                                        $scope.esFilterId,
                                        true,
                                        true
                                    )
                                    .then(function (ret) {
                                        var v =
                                            esWebUIHelper.winGridInfoToESGridInfo(
                                                $scope.esGroupId,
                                                $scope.esFilterId,
                                                ret.data
                                            );

                                        if (
                                            $scope.esGroupId instanceof
                                            esGlobals.ESPublicQueryDef
                                        ) {
                                            if ($scope.esLocalDataSource) {
                                                $scope.esGroupId.esGridOptions =
                                                    esWebUIHelper.esGridInfoToLocalKInfo(
                                                        $scope.esGroupId
                                                            .GroupID,
                                                        $scope.esGroupId
                                                            .FilterID,
                                                        $scope.esGroupId.Params,
                                                        v,
                                                        $scope.esDataSource,
                                                        $scope.esGroupId
                                                    );
                                            } else {
                                                var pOpt =
                                                    new esGlobals.ESPQOptions(
                                                        1,
                                                        -1,
                                                        true,
                                                        false
                                                    );
                                                $scope.esGroupId.esGridOptions =
                                                    esWebUIHelper.esGridInfoToKInfo(
                                                        $scope.esGroupId
                                                            .GroupID,
                                                        $scope.esGroupId
                                                            .FilterID,
                                                        $scope.esGroupId.Params,
                                                        v,
                                                        pOpt,
                                                        $scope.esGroupId
                                                    );
                                            }
                                        }

                                        if (
                                            $scope.esParamsValues &&
                                            $scope.esParamsValues instanceof
                                                esGlobals.ESParamValues
                                        ) {
                                            $scope.esParamsValues.merge(
                                                v.defaultValues
                                            );
                                        } else {
                                            $scope.esParamsValues =
                                                v.defaultValues;
                                        }
                                        $scope.esParamsDef = v.params;

                                        donePreparation();
                                    })
                                    .catch(angular.noop);
                            } else {
                                $scope.esParamsDef = esPqInfo.params;
                                donePreparation();
                            }
                        } else {
                            donePreparation();
                        }
                    },
                };
            },
        ]);

    /**
     * @ngdoc service
     * @name es.Web.UI.esUIHelper
     * @requires es.Services.Web.esWebApi Entersoft AngularJS WEB API for Entersoft Application Server
     * @requires $log
     * @description This service provides a set of javascript objects and functions to support UI oriented operations such as preparation
     * of schema model for a web grid to show the results of a PQ, Entersoft PQ Parameters meta-data manipulation , etc.
     * yh
     */
    esWEBUI.factory("esUIHelper", [
        "$state",
        "$translate",
        "$log",
        "$timeout",
        "esMessaging",
        "esWebApi",
        "esGlobals",
        function (
            $state,
            $translate,
            $log,
            $timeout,
            esMessaging,
            esWebApiService,
            esGlobals
        ) {
            function esColToKCol(esCol, showFormInfo, esGridInfo) {
                var tCol = {
                    field: esCol.field,
                    title: esCol.title,
                    width: esCol.width,
                    attributes: esCol.attributes,
                    columnSet: esCol.columnSet,
                    values: esCol.enumValues,
                    dataType: esCol.dataType,
                    hidden: !esCol.visible,
                    headerAttributes: {
                        class: "es-table-header-cell",
                    },
                    menu: !!esCol.title,
                    template: undefined,
                    footerTemplate: undefined,
                    aggregate: undefined,
                    groupFooterTemplate: undefined,
                };

                if (!esGridInfo || esGridInfo.totalRow) {
                    tCol.aggregate = esCol.aggregate;
                }

                switch (esCol.dataType) {
                    case "int32":
                    case "byte": {
                        if (esCol.editType == "8") {
                            tCol.template = kendo.format(
                                '<div align="center"><input type="checkbox" #={0} ? "checked=checked" : "" # disabled="disabled" ></input></div>',
                                esCol.field
                            );
                        }
                        break;
                    }
                    case "byte[]": {
                        if (esCol.editType == "0") {
                            tCol.template =
                                "<img src='" +
                                "#:kendo.format('data:image/jpg;base64,{0}', " +
                                esCol.field +
                                ")#" +
                                "'/>";
                        }
                        break;
                    }

                    case "string": {
                        //Check about ui-router state FIRST
                        var bShowForm = false;
                        if (
                            showFormInfo &&
                            showFormInfo.showCol == esCol.field &&
                            showFormInfo.selectedMasterField &&
                            showFormInfo.selectedState &&
                            $state
                        ) {
                            var sts = $state.get();
                            var sState = _.find(sts, {
                                name: showFormInfo.selectedState,
                            });
                            if (sState) {
                                var cond = kendo.format(
                                    "#= ((data.{0}) && (data.{1})) ? ",
                                    showFormInfo.selectedMasterField,
                                    esCol.field
                                );
                                var urllink =
                                    'kendo.format("<a ui-sref=\\"{2}({PK: \'{0}\'} )\\">{1}</a>", ' +
                                    showFormInfo.selectedMasterField +
                                    ", " +
                                    esCol.field +
                                    ", " +
                                    "'" +
                                    showFormInfo.selectedState +
                                    "'" +
                                    ")";

                                tCol.template =
                                    cond +
                                    urllink +
                                    kendo.format(
                                        " : (data.{0}) #",
                                        esCol.field
                                    );
                                bShowForm = true;
                            } else {
                                if (
                                    showFormInfo.selectedState &&
                                    showFormInfo.selectedState.toLowerCase() ==
                                        "es00documents"
                                ) {
                                    var sLink =
                                        esWebApiService.downloadURLForBlobDataDownload(
                                            "{{dataItem.GID}}"
                                        );
                                    tCol.template =
                                        "<a ng-href='" +
                                        sLink +
                                        "' download>{{dataItem.Code}}</a>";
                                }
                            }
                        }

                        if (!bShowForm) {
                            var ul = "";
                            if (
                                esCol.field.toLowerCase().indexOf("email") != -1
                            ) {
                                ul = "mailto:";
                            } else if (
                                esCol.field.toLowerCase().indexOf("tele") !=
                                    -1 ||
                                esCol.field.toLowerCase().indexOf("mobile") !=
                                    -1
                            ) {
                                ul = "tel:";
                            } else if (
                                esCol.field.toLowerCase().indexOf("website") !=
                                -1
                            ) {
                                tCol.template = kendo.format(
                                    "<a target='_blank' href='#={0}||''#'>#={0}||''#</a>",
                                    esCol.field
                                );
                            } else if (
                                esCol.field
                                    .toLowerCase()
                                    .indexOf("eswebimage") != -1
                            ) {
                                tCol.template = kendo.format(
                                    "<a target='_blank' href='#={0}#.jpeg'><img src='#={0}#.jpeg' height='{1}' width='{1}'></a>",
                                    esCol.field,
                                    esCol.width
                                );
                            }

                            if (ul) {
                                tCol.template = kendo.format(
                                    "<a target='_blank' href='{1}#={0}||''#'>#={0}||''#</a>",
                                    esCol.field,
                                    ul
                                );
                            }
                        }
                        break;
                    }
                    case "datetime": {
                        var fStr = esCol.formatString || "d";
                        tCol.format = "{0:" + fStr + "}";
                        break;
                    }
                    default: {
                        if (esCol.formatString && esCol.formatString != "") {
                            tCol.format = "{0:" + esCol.formatString + "}";
                        }
                        break;
                    }
                }

                if (tCol.aggregate) {
                    tCol.aggregates = [tCol.aggregate];
                    var fmtStr = esCol.formatString
                        ? "kendo.toString(" +
                          tCol.aggregate +
                          ",'" +
                          esCol.formatString.replace(/#/g, "\\\\#") +
                          "') || ''"
                        : tCol.aggregate;
                    tCol.footerTemplate =
                        "<div style='text-align: right'>#:" +
                        fmtStr +
                        "#</div>";
                    tCol.groupFooterTemplate = tCol.footerTemplate;
                }
                return tCol;
            }

            function handleChangeGridRow(e) {
                var selectedRows = this.select();
                var gid = undefined;
                if (selectedRows && selectedRows.length == 1) {
                    //sme mas-det
                    gid = this.dataItem(selectedRows[0])["GID"];
                }

                if (gid && this.options.masterDetailRelations) {
                    if (
                        !(
                            this.options.masterDetailRelations instanceof
                            ESRequeryDetailGrids
                        )
                    ) {
                        throw "masterDetailRelations should be of type ESRequeryDetailGrids";
                    }

                    _.each(
                        this.options.masterDetailRelations.registeredRelations,
                        function (elem) {
                            if (elem instanceof ESMasterDetailGridRelation) {
                                $timeout(function () {
                                    var params = elem.detailParams();
                                    var ds = elem.detailDataSource();
                                    if (
                                        ds &&
                                        params &&
                                        params[elem.detailParamCode]
                                    ) {
                                        if (
                                            params[elem.detailParamCode].pValue(
                                                gid
                                            )
                                        ) {
                                            ds.read();
                                        }
                                    }
                                });
                            }
                        }
                    );
                }
                esMessaging.publish("GRID_ROW_CHANGE", e, selectedRows);
            }

            function prepareStdZoom(zoomID, useCache) {
                var xParam = {
                    transport: {
                        read: function (options) {
                            var pqOptions = {};
                            esWebApiService
                                .fetchStdZoom(zoomID, pqOptions, useCache)
                                .then(
                                    function (ret) {
                                        var pq = ret.data;

                                        // SME CHANGE THIS ONCE WE HAVE CORRECT PQ
                                        if (pq.Count == -1) {
                                            pq.Count = pq.Rows
                                                ? pq.Rows.length
                                                : 0;
                                        }
                                        // END tackling

                                        options.success(pq);
                                    },
                                    function (err) {
                                        options.error(err);
                                    }
                                )
                                .catch(angular.noop);
                        },
                    },
                    schema: {
                        data: "Rows",
                        total: "Count",
                    },
                };
                return new kendo.data.DataSource(xParam);
            }

            function processPQ(data) {
                function getItems(arr, maxLevel, curLevel) {
                    var i1 = [];

                    var propName = "a" + curLevel.toString();
                    _.forOwn(
                        _.groupBy(arr, function (x) {
                            return x[propName];
                        }),
                        function (value, key) {
                            if (key == "undefined") {
                                return i1;
                            }

                            var t = {};
                            t.name = key;
                            t.value = _.sumBy(value, function (o) {
                                return o.Figure;
                            });
                            if (curLevel < maxLevel) {
                                t.items = getItems(
                                    value,
                                    maxLevel,
                                    curLevel + 1
                                );
                            }

                            i1.push(t);
                        }
                    );
                    return i1;
                }

                function getMaxLevel(data) {
                    var i;
                    var dLen = data.length;
                    for (i = 10; i >= 1; i--) {
                        var propName = "a" + i.toString();
                        var ret = _.groupBy(data, function (x) {
                            return x[propName];
                        });
                        var noName = ret["undefined"];
                        if (
                            !(angular.isArray(noName) && noName.length == dLen)
                        ) {
                            return i;
                        }
                    }
                    return 0;
                }

                var ret = {
                    name: "All",
                    value: 0,
                };

                if (!data || !angular.isArray(data) || !data.length) {
                    return [ret];
                }

                var maxLevel = getMaxLevel(data);
                if (maxLevel == 0) {
                    return [ret];
                }

                ret.value =
                    _.sumBy(data, function (o) {
                        return o.Figure;
                    }) || 0;

                ret.items = getItems(data, maxLevel, 1);
                return [ret];
            }

            function getTreeMapDS(
                espqParams,
                forMap,
                onChange,
                ctrl,
                valueField
            ) {
                var transformFunction = forMap
                    ? convertPQRowsToMapRows
                    : processPQ;
                var qParams = angular.isFunction(espqParams)
                    ? espqParams()
                    : espqParams;

                var xParam = {
                    transport: {
                        read: function (options) {
                            var pqOptions = {};
                            pqOptions.WithCount = false;
                            pqOptions.Page = -1;
                            pqOptions.PageSize = -1;

                            var executeParams = qParams.Params;
                            if (
                                executeParams instanceof esGlobals.ESParamValues
                            ) {
                                if (!executeParams.isValidState()) {
                                    var err = new Error(
                                        $translate.instant(
                                            "ESUI.PQ.PARAMS_MISSING"
                                        )
                                    );
                                    options.error(err);
                                    throw err;
                                }
                                executeParams = executeParams.getExecuteVals();
                            }

                            esWebApiService
                                .fetchPublicQuery(
                                    qParams.GroupID,
                                    qParams.FilterID,
                                    pqOptions,
                                    executeParams
                                )
                                .then(function (pq) {
                                    pq = pq.data;

                                    pq.Rows = pq.Rows || [];
                                    var data = transformFunction(
                                        pq.Rows,
                                        valueField
                                    );
                                    options.success(data);
                                })
                                .catch(function (err) {
                                    options.error(err);
                                });
                        },
                    },
                    schema: {
                        model: {
                            children: "items",
                        },
                    },
                };

                if (onChange && angular.isFunction(onChange)) {
                    xParam.change = onChange;
                }

                if (ctrl && angular.isFunction(ctrl)) {
                    xParam.requestEnd = function (x) {
                        var elm = ctrl();
                        if (elm && elm.element && elm.element.parent()) {
                            kendo.ui.progress(elm.element.parent(), false);
                        }
                    };

                    xParam.requestStart = function (x) {
                        var elm = ctrl();
                        if (elm && elm.element && elm.element.parent()) {
                            kendo.ui.progress(elm.element.parent(), true);
                        }
                    };
                }

                return forMap
                    ? new kendo.data.DataSource(xParam)
                    : new kendo.data.HierarchicalDataSource(xParam);
            }

            function prepareWebScroller(
                espqParams,
                esOptions,
                aggregates,
                groups,
                ctrl
            ) {
                var qParams = angular.isFunction(espqParams)
                    ? espqParams()
                    : espqParams;

                if (groups && aggregates) {
                    _.map(groups, function (g) {
                        g.aggregates = aggregates;
                    });
                }

                var xParam = {
                    aggregate: aggregates,
                    group: groups,

                    transport: {
                        error: function (e) {
                            console.log(e);
                        },

                        read: function (options) {
                            var pqOptions = {};
                            if (
                                options.data &&
                                options.data.page &&
                                options.data.pageSize
                            ) {
                                pqOptions.WithCount = true;
                                pqOptions.Page = options.data.page;
                                pqOptions.PageSize = options.data.pageSize;
                            }

                            var executeParams = qParams.Params;
                            if (
                                executeParams instanceof esGlobals.ESParamValues
                            ) {
                                if (!executeParams.isValidState()) {
                                    var err = new Error(
                                        $translate.instant(
                                            "ESUI.PQ.PARAMS_MISSING"
                                        )
                                    );
                                    options.error(err);
                                    throw err;
                                }
                                executeParams = executeParams.getExecuteVals();
                            }

                            esWebApiService
                                .fetchPublicQuery(
                                    qParams.GroupID,
                                    qParams.FilterID,
                                    pqOptions,
                                    executeParams
                                )
                                .then(function (pq) {
                                    pq = pq.data;
                                    if (!angular.isDefined(pq.Rows)) {
                                        pq.Rows = [];
                                        pq.Count = 0;
                                    }

                                    if (!angular.isDefined(pq.Count)) {
                                        pq.Count = -1;
                                    }

                                    options.success(pq);
                                })
                                .catch(function (err) {
                                    $log.error("Error in DataSource ", err);
                                    options.error(err);
                                });
                        },
                    },
                    schema: {
                        data: "Rows",
                        total: "Count",
                    },
                };

                if (ctrl && angular.isFunction(ctrl)) {
                    xParam.requestEnd = function (x) {
                        var elm = ctrl();
                        if (elm && elm.element && elm.element.parent()) {
                            kendo.ui.progress(elm.element.parent(), false);
                        }
                    };

                    xParam.requestStart = function (x) {
                        var elm = ctrl();
                        if (elm && elm.element && elm.element.parent()) {
                            kendo.ui.progress(elm.element.parent(), true);
                        }
                    };
                }

                if (
                    qParams &&
                    qParams.SchemaColumns &&
                    qParams.SchemaColumns.length
                ) {
                    xParam.schema.parse = function (response) {
                        _.each(response.Rows, function (elem) {
                            _.each(qParams.SchemaColumns, function (col) {
                                var fld = col.field;
                                if (
                                    elem[fld] &&
                                    typeof elem[fld] === "string"
                                ) {
                                    elem[fld] = kendo.parseDate(elem[fld]);
                                }
                            });
                        });
                        return response;
                    };
                }

                if (esOptions) {
                    angular.extend(xParam, esOptions);
                }

                return new kendo.data.DataSource(xParam);
            }

            function getPivotDS($q, espqdef, escubedef, pqinfo) {
                function getPivotType(colType) {
                    switch (colType) {
                        case "string":
                            return "string";
                        case "decimal":
                            return "number";
                        case "datetime":
                        case "date":
                            return "date";
                        default:
                            return "string";
                    }
                }

                var t = escubedef || {};

                //First check which fields are in the PQ but no at the cubedef
                _.forEach(pqinfo.columns, function (x) {
                    var id = x.field.toLowerCase();
                    var idx = _.findIndex(t.fields, function (o) {
                        return o.dataField.toLowerCase() == id;
                    });
                    if (idx == -1) {
                        t.fields.push({ dataField: x.field });
                    }
                });

                _.forEach(t.fields, function (x) {
                    if (!x.dataField) {
                        return;
                    }

                    var id = x.dataField.toLowerCase();
                    var col = _.find(pqinfo.columns, function (y) {
                        return id == y.field.toLowerCase();
                    });

                    if (!col) {
                        return;
                    }

                    x.caption = x.caption || col.title;
                    //x.width = x.width || col.width;
                    x.dataType = x.dataType || getPivotType(col.dataType);
                    x.summaryType =
                        x.summaryType ||
                        col.aggregate ||
                        (x.dataType == "number" ? "sum" : "count");
                    x.format = x.format || getPivotColFormatType(col);

                    if (
                        angular.isDefined(x.groupInterval) &&
                        x.dataType == "date"
                    ) {
                        delete x.caption;
                        delete x.summaryType;
                        delete x.format;
                    }
                });
                t.load = function (loadOptions) {
                    var defered = $q.defer();

                    esWebApiService
                        .fetchPublicQuery(espqdef)
                        .then(function (pq) {
                            pq = pq.data;
                            defered.resolve(pq.Rows || []);
                        })
                        .catch(function (err) {
                            $log.error("Error in DataSource ", err);
                            defered.resolve([]);
                        });
                    return defered.promise;
                };

                return new DevExpress.data.PivotGridDataSource(t);
            }

            function esExportToExcel(e) {
                var sheet = e.workbook.sheets[0];
                for (var i = 0; i < sheet.rows.length; i++) {
                    var rT = sheet.rows[i].type;
                    if (rT == "group-footer" || rT == "footer") {
                        for (
                            var ci = 0;
                            ci < sheet.rows[i].cells.length;
                            ci++
                        ) {
                            var cCell = sheet.rows[i].cells[ci];
                            if (cCell.value) {
                                cCell.value = $(cCell.value).text();
                                cCell.hAlign = "right";
                                cCell.bold = true;
                            }
                        }
                    }
                }
            }

            function esGridInfoToLocalKInfo(
                esGroupId,
                esFilterId,
                executeParams,
                esGridInfo,
                esDataSource
            ) {
                var grdopt = {
                    pageable: {
                        refresh: true,
                        pageSizes: [20, 50, 100, 1000],
                    },
                    autoBind: false,
                    sortable: true,
                    scrollable: true,
                    selectable: "row",
                    allowCopy: true,
                    resizable: true,
                    reorderable: true,
                    navigatable: true,
                    noRecords: {
                        template:
                            "<h3><span class='label label-info'>" +
                            kendo.ui.Pager.prototype.options.messages.empty +
                            "</span></h3>",
                    },

                    filterable: true,
                    groupable: true,
                    toolbar: ["excel"],
                    excel: {
                        allPages: true,
                        fileName: esGroupId + "-" + esFilterId + ".xlsx",
                        proxyURL:
                            esWebApiService.proxyExportSaveFile("telerik"),
                        forceProxy: true,
                        filterable: true,
                    },
                    excelExport: esExportToExcel,
                };

                if (esGlobals.getESUISettings().mobile) {
                    grdopt.mobile = esGlobals.getESUISettings().mobile;
                }

                if (esGlobals.getESUISettings().defaultGridHeight) {
                    grdopt.height =
                        esGlobals.getESUISettings().defaultGridHeight;
                }

                grdopt.columns = esGridInfo.columns;

                _.map(grdopt.columns, function (c) {
                    if (c.columns) {
                        _.map(c.columns, function (k) {
                            k.footerTemplate = undefined;
                            k.groupFooterTemplate = undefined;
                        });
                    } else {
                        c.footerTemplate = undefined;
                        c.groupFooterTemplate = undefined;
                    }
                });

                grdopt.selectedMasterField = esGridInfo.selectedMasterField;
                grdopt.selectedMasterTable = esGridInfo.selectedMasterTable;
                grdopt.columnMenu = false;

                if (esDataSource) {
                    grdopt.dataSource = esDataSource;
                }

                grdopt.reBind = 0;

                return grdopt;
            }

            function esGridInfoToKInfo(
                esGroupId,
                esFilterId,
                executeParams,
                esGridInfo,
                esPQOptions,
                pqDef
            ) {
                var resOptions =
                    esPQOptions instanceof esGlobals.ESPQOptions
                        ? esPQOptions
                        : new esGlobals.ESPQOptions().initFromObj(esPQOptions);
                var dsOptions = {
                    serverGrouping: false,
                    serverSorting: false,
                    serverFiltering: false,
                    serverAggregates: false,
                    serverPaging: resOptions.ServerPaging,
                    pageSize: resOptions.getPageSizeForUI(),
                };

                var zArr = _.uniq(
                    _.union(
                        [resOptions.getPageSizeForUI()],
                        [20, 50, 100, 1000]
                    )
                ).sort(function (a, b) {
                    return a - b;
                });

                var grdopt = {
                    pageable: {
                        pageSizes: zArr,
                    },
                    autoBind: resOptions.AutoExecute,
                    sortable: !dsOptions.serverPaging,
                    scrollable: true,
                    selectable: "row",
                    allowCopy: true,
                    resizable: true,
                    reorderable: true,
                    navigatable: true,
                    noRecords: {
                        template:
                            "<h3><span class='label label-info'>" +
                            kendo.ui.Pager.prototype.options.messages.empty +
                            "</span></h3>",
                    },

                    filterable:
                        !dsOptions.serverPaging && esGridInfo.FilterLineVisible,
                    groupable:
                        !dsOptions.serverPaging && esGridInfo.GroupByBoxVisible,
                    toolbar: [
                        {
                            name: "run",
                            text: "Run",
                            template:
                                "<a role='button' class='k-button k-button-icontext' ng-click=\"esGridRun()\"><span class='k-icon k-i-reload'/>{{'ESUI.PQ.PARAMS_PANEL_RUN' | translate}}</a>",
                        },

                        {
                            name: "excel",
                            text: "Excel",
                        },
                    ],
                    excel: {
                        allPages: true,
                        proxyURL:
                            esWebApiService.proxyExportSaveFile("telerik"),
                        forceProxy: true,
                        fileName: esGroupId + "-" + esFilterId + ".xlsx",
                        filterable: true,
                    },
                    excelExport: esExportToExcel,
                };

                if (esGlobals.getESUISettings().mobile) {
                    grdopt.mobile = esGlobals.getESUISettings().mobile;
                }

                if (esGlobals.getESUISettings().defaultGridHeight) {
                    grdopt.height =
                        esGlobals.getESUISettings().defaultGridHeight;
                }

                grdopt.groups = esGridInfo.groups;
                grdopt.columns = esGridInfo.columns;
                grdopt.selectedMasterField = esGridInfo.selectedMasterField;
                grdopt.selectedMasterTable = esGridInfo.selectedMasterTable;
                grdopt.columnMenu = false;

                var aggs = _.flatMap(grdopt.columns, function (c) {
                    return c.columns
                        ? _.filter(c.columns, function (k) {
                              return !!k.aggregate;
                          })
                        : !!c.aggregate
                        ? [c]
                        : [];
                });

                grdopt.dataSource = prepareWebScroller(
                    function () {
                        return {
                            GroupID: esGroupId,
                            FilterID: esFilterId,
                            Params: executeParams,
                            SchemaColumns: _.filter(grdopt.columns, {
                                dataType: "datetime",
                            }),
                        };
                    },
                    dsOptions,
                    aggs,
                    grdopt.groups
                );

                if (pqDef && pqDef.UIOptions && pqDef.UIOptions.detailDef) {
                    grdopt.detailInit = detailInit;
                    grdopt.dataBound = function () {
                        this.expandRow(
                            this.tbody.find("tr.k-master-row").first()
                        );
                    };

                    grdopt.detailDef = pqDef.UIOptions.detailDef;
                } 
                
                grdopt.change = handleChangeGridRow;
                grdopt.reBind = 0;
                return grdopt;
            }

            function detailInit(e) {
                console.log("detail init ");

                var detailDef = this.options.detailDef;
                if (!detailDef) {
                    return;
                }

                var masterVal = e.data.ISUDGID || e.data.ISUDCODE;
                if (!masterVal) {
                    console.log(
                        "No value in master row for GID or ISUDGID or ItemCode to query the details"
                    );
                    return;
                }

                var esGroupId = detailDef.GroupID;
                var esFilterId = detailDef.FilterID;

                var esExecuteParams = createESParams({
                    ISUDGID: masterVal,
                });
                var esPQOptions =
                    detailDef.PQOptions ||
                    new esGlobals.ESPQOptions().initFromObj({
                        ServerPaging: false,
                        WithCount: true,
                        AutoExecute: true,
                    });

                esWebApiService
                    .fetchPublicQueryInfo(esGroupId, esFilterId, true, true)
                    .then(function (ret) {
                        var p1 = ret.data;
                        var p2 = winGridInfoToESGridInfo(
                            esGroupId,
                            esFilterId,
                            p1
                        );
                        var esGridOptions = esGridInfoToKInfo(
                            esGroupId,
                            esFilterId,
                            esExecuteParams,
                            p2,
                            esPQOptions
                        );

                        // remove the run / requery button
                        esGridOptions.toolbar = esGridOptions.toolbar.slice(1);

                        $("<div/>")
                            .appendTo(e.detailCell)
                            .kendoGrid(esGridOptions);
                    })
                    .catch(angular.noop);
            }

            function winColToESCol(xGroupID, xFilterID, gridexInfo, jCol) {
                var inFilterID;
                var inGroupID;

                if (angular.isObject(xGroupID)) {
                    inGroupID = xGroupID.GroupID;
                    inFilterID = xGroupID.FilterID;
                } else {
                    inGroupID = xGroupID;
                    inFilterID = xFilterID;
                }
                var esCol = {
                    AA: undefined,
                    field: undefined,
                    title: undefined,
                    width: undefined,
                    visible: undefined,
                    attributes: undefined,
                    enumValues: undefined,
                    formatString: undefined,
                    odsTag: undefined,
                    dataType: undefined,
                    editType: undefined,
                    columnSet: undefined,
                    aggregate: undefined,
                };

                esCol.AA = parseInt(jCol.AA);
                esCol.field = jCol.ColName;
                esCol.title = jCol.Caption;
                esCol.odsTag = jCol.ODSTag;
                esCol.columnSet = parseInt(jCol.ColumnSet);
                esCol.dataType = jCol.DataTypeName
                    ? jCol.DataTypeName.toLowerCase()
                    : undefined;
                esCol.editType = jCol.EditType;
                esCol.width = parseInt(jCol.Width);

                switch (jCol.AggregateFunction) {
                    case "1":
                        esCol.aggregate = "count";
                        break;
                    case "2":
                        esCol.aggregate = "sum";
                        break;
                    case "3":
                        esCol.aggregate = "average";
                        break;
                    case "4":
                        esCol.aggregate = "min";
                        break;
                    case "5":
                        esCol.aggregate = "max";
                        break;
                }

                esCol.formatString = jCol.FormatString;
                esCol.visible = jCol.Visible == "true";

                var esClass = esCol.dataType;
                switch (esCol.dataType) {
                    case "byte": {
                        if (esCol.editType == 8) {
                            esClass = "boolean-checkbox";
                        }
                        break;
                    }
                }

                esCol.attributes = {
                    class: "es-grid-cell-" + esClass,
                };

                if (jCol.TextAlignment == "3") {
                    esCol.attributes.style = "text-align: right;";
                }

                if (esClass === "decimal") {
                    esCol.attributes.style =
                        (esCol.attributes.style || "") +
                        " # if(" +
                        esCol.field +
                        " < 0) { #color:red;# } # ";
                }

                //Enum Column
                if (jCol.EditType == "5") {
                    var l1 = _.sortBy(
                        _.filter(gridexInfo.ValueList, function (x) {
                            var v = x.ColName == jCol.ColName;
                            v = v && typeof x.Value != "undefined";
                            v = v && x.fFilterID.toLowerCase() == inFilterID;
                            return v;
                        }),
                        function (x) {
                            return !isNaN(x.Value) ? parseInt(x.Value) : null;
                        }
                    );
                    var l2 = _.map(l1, function (x) {
                        return {
                            text: x.Caption,
                            value: !isNaN(x.Value) ? parseInt(x.Value) : null,
                        };
                    });

                    if (l2 && l2.length) {
                        esCol.enumValues = l2;
                    }
                }
                return esCol;
            }

            function esEval(pInfo, expr) {
                var EQ = {
                    oper: "EQ",
                    paramID: pInfo.id,
                };
                var GE = {
                    oper: "GE",
                    paramID: pInfo.id,
                };
                var GT = {
                    oper: "GT",
                    paramID: pInfo.id,
                };
                var LE = {
                    oper: "LE",
                    paramID: pInfo.id,
                };
                var LT = {
                    oper: "LT",
                    paramID: pInfo.id,
                };
                var NE = {
                    oper: "NE",
                    paramID: pInfo.id,
                };
                var RANGE = {
                    oper: "RANGE",
                    paramID: pInfo.id,
                };
                var NULL = {
                    oper: "NULL",
                    paramID: pInfo.id,
                };
                var NOTNULL = {
                    oper: "NOTNULL",
                    paramID: pInfo.id,
                };
                return eval(expr);
            }

            function ESNumeric(inArg, val, val2) {
                if (val && angular.isString(val)) {
                    val = val.replace(".", "").replace(",", ".");
                }

                if (val2 && angular.isString(val2)) {
                    val2 = val.replace(".", "").replace(",", ".");
                }
                var k = {
                    value: !isNaN(val) ? new Number(val).valueOf() : null,
                    valueTo: !isNaN(val2) ? new Number(val2).valueOf() : null,
                    oper: inArg.oper || "EQ",
                };
                return new esGlobals.ESNumericParamVal(inArg.paramID, k);
            }

            function ESString(inArg, val, val2) {
                var k = {
                    value: val,
                    valueTo: val2,
                    oper: inArg.oper || "EQ",
                };
                return new esGlobals.ESStringParamVal(inArg.paramID, k);
            }

            function createEsParamVal(obj) {
                if (!obj || !obj.id) {
                    return null;
                }

                var dx = obj.value || [];
                dx = angular.isArray(dx) ? dx : [dx];
                var pinfo = new ESParamInfo();
                angular.merge(pinfo, obj);
                dx = _.map(dx, function (k) {
                    return { Value: k };
                });
                return getEsParamVal(pinfo, dx);
            }

            function createESParams(obj) {
                if (!obj) {
                    return new esGlobals.ESParamValues();
                }

                var p = [];
                if (angular.isArray(obj)) {
                    _.map(obj, function (x) {
                        var par = createEsParamVal(x);
                        if (par) {
                            p.push(par);
                        }
                    });
                } else {
                    if (obj instanceof esGlobals.ESParamValues) {
                        var dN = new esGlobals.ESParamValues();
                        dN.merge(obj);
                        return dN;
                    }

                    for (var key in obj) {
                        var val = obj[key];
                        var par1 = createEsParamVal({
                            id: key,
                            value: val,
                        });
                        if (par1) {
                            p.push(par1);
                        }
                    }
                }

                return new esGlobals.ESParamValues(p);
            }

            function ESParamInfo(p) {
                this.id = p ? p.id : undefined;
                this.aa = p ? p.aa : undefined;
                this.caption = p ? p.caption : undefined;
                this.toolTip = p ? p.toolTip : undefined;
                this.controlType = p ? p.controlType : undefined;
                this.parameterType =
                    p && p.parameterType ? p.parameterType : "";
                this.precision = p ? p.precision : undefined;
                this.multiValued = p ? p.multiValued : false;
                this.visible = p ? p.visible : undefined;
                this.required = p ? p.required : undefined;
                this.oDSTag = p ? p.oDSTag : undefined;
                this.formatString = p ? p.formatString : undefined;
                this.tags = p ? p.tags : undefined;
                this.visibility = p ? p.visibility : undefined;
                this.invQueryID = p ? p.invQueryID : undefined;
                this.invSelectedMasterTable = p
                    ? p.invSelectedMasterTable
                    : undefined;
                this.invSelectedMasterField = p
                    ? p.invSelectedMasterField
                    : undefined;
                this.invTableMappings = p ? p.invTableMappings : undefined;
                this.enumOptionAll = p ? p.enumOptionAll : undefined;
                this.enumList = p ? p.enumList : undefined;
                this.defaultValues = p
                    ? getEsParamVal(this, p.defaultValues)
                    : undefined;
                this.inputType = p && p.inputType ? p.inputType : "";
            }

            ESParamInfo.prototype.paramTemplate = function () {
                var pParam = this;

                if (!pParam || !pParam.parameterType) {
                    return "esParamText";
                }

                var pt = pParam.parameterType.toLowerCase();

                if (pt.indexOf("system.int32, mscorlib") == 0) {
                    switch (pParam.controlType) {
                        case 7:
                            return "esParamBoolean";
                        default: {
                            if (!pParam.enumList || !pParam.enumList.length) {
                                return "esParamNumeric";
                            }
                        }
                    }
                }

                //ESDateRange
                if (
                    pt.indexOf(
                        "entersoft.framework.platform.esdaterange, queryprocess"
                    ) == 0
                ) {
                    return "esParamDateRange";
                }

                //ESNumeric
                if (pt.indexOf("entersoft.framework.platform.esnumeric") == 0) {
                    return "esParamAdvancedNumeric";
                }

                //ESString
                if (
                    pt.indexOf(
                        "entersoft.framework.platform.esstring, queryprocess"
                    ) == 0
                ) {
                    return "esParamAdvancedString";
                }

                // Numeric (Integer or Decimal)
                if (pt.indexOf("system.string, mscorlib") == 0) {
                    switch (pParam.controlType) {
                        case 1:
                            {
                                return "esParamNumeric";
                            }
                            break;
                        case 2:
                            {
                                return "esParamNumeric";
                            }
                            break;
                    }
                }

                //case Enum
                if (pParam.enumList && pParam.enumList.length > 1) {
                    if (pParam.multiValued || pParam.enumOptionAll) {
                        return "esParamMultiEnum";
                    } else {
                        return "esParamEnum";
                    }
                }

                if (pParam.isInvestigateZoom()) {
                    if (!pParam.invSelectedMasterField) {
                        pParam.invSelectedMasterField = "Code";
                    }
                    if (pParam.multiValued) {
                        return "esParamMultiZoom";
                    } else {
                        return "esParamZoom";
                    }
                } else {
                    if (pParam.isInvestigateEntity()) return "esParamInv";

                    return "esParamText";
                }
            };

            ESParamInfo.prototype.strVal = function () {
                return "Hello World esParaminfo";
            };

            ESParamInfo.prototype.isAdvanced = function () {
                return this.visible && this.visibility == 1;
            };

            ESParamInfo.prototype.isInvestigateZoom = function () {
                return (
                    this.invSelectedMasterTable &&
                    this.invSelectedMasterTable.length > 4 &&
                    this.invSelectedMasterTable[4] == "Z"
                );
            };

            ESParamInfo.prototype.getTag = function (tagid) {
                if (!this.tags) {
                    return "";
                }

                var id = _.find(this.tags, function (k) {
                    return k.startsWith(tagid);
                });
                return id;
            };

            ESParamInfo.prototype.isInvestigateEntity = function () {
                if (this.isInvestigateZoom() || !this.getTag("INVPQ:"))
                    return false;

                return true;
            };

            ESParamInfo.prototype.isDisplayedInHeader = function () {
                if (!this.tags || !this.getTag("TITLEPQ:")) return false;

                return true;
            };

            function getEsParamVal(esParamInfo, dx) {
                var ps = esParamInfo.parameterType.toLowerCase();

                //ESNumeric
                if (ps.indexOf("entersoft.framework.platform.esnumeric") == 0) {
                    if (!dx || dx.length == 0) {
                        return new esGlobals.ESNumericParamVal(esParamInfo.id, {
                            oper: "EQ",
                            value: 0,
                        }).required(esParamInfo.required);
                    }
                    return esEval(esParamInfo, dx[0].Value).required(
                        esParamInfo.required
                    );
                }

                // boolean
                if (
                    ps.indexOf("system.int32, mscorlib") == 0 &&
                    esParamInfo.controlType == 7
                ) {
                    var bVal = 0;
                    if (dx && dx.length > 0) {
                        bVal = parseInt(dx[0].Value);
                    }
                    return new esGlobals.ESBoolParamVal(
                        esParamInfo.id,
                        !!bVal
                    ).required(esParamInfo.required);
                }

                //ESDateRange
                if (
                    ps.indexOf(
                        "entersoft.framework.platform.esdaterange, queryprocess"
                    ) == 0
                ) {
                    if (!dx || dx.length == 0) {
                        return new esGlobals.ESDateParamVal(
                            esParamInfo.id,
                            esParamInfo.controlType == 6
                                ? null
                                : {
                                      dRange: "ESDateRange(FiscalPeriod)",
                                      fromD: null,
                                      toD: null,
                                  }
                        ).required(esParamInfo.required);
                    }
                    return new esGlobals.ESDateParamVal(
                        esParamInfo.id,
                        dx[0].Value
                    ).required(esParamInfo.required);
                }

                //ESString
                if (
                    ps.indexOf(
                        "entersoft.framework.platform.esstring, queryprocess"
                    ) == 0
                ) {
                    if (!dx || dx.length == 0) {
                        return new esGlobals.ESStringParamVal(esParamInfo.id, {
                            oper: "EQ",
                            value: null,
                        }).required(esParamInfo.required);
                    }

                    return esEval(esParamInfo, dx[0].Value).required(
                        esParamInfo.required
                    );
                }

                //Not set
                if (!dx || dx.length == 0) {
                    var orgVal = esParamInfo.multiValued ? [] : null;
                    return new esGlobals.ESParamVal(
                        esParamInfo.id,
                        orgVal,
                        esParamInfo.enumList
                    ).required(esParamInfo.required);
                }

                var processedVals = _.map(dx, function (k) {
                    return processStrToken(esParamInfo, k.Value);
                });

                if (processedVals.length == 1) {
                    processedVals = processedVals[0];
                }
                return new esGlobals.ESParamVal(
                    esParamInfo.id,
                    processedVals,
                    esParamInfo.enumList
                ).required(esParamInfo.required);
            }

            function processStrToken(esParamInfo, val) {
                if (!esParamInfo) {
                    return val;
                }

                var ps = esParamInfo.parameterType.toLowerCase();
                if (
                    ps.indexOf("system.byte") != -1 ||
                    ps.indexOf("system.int") != -1
                ) {
                    return parseInt(val);
                }

                if (esParamInfo.enumList && esParamInfo.enumList.length > 1) {
                    return val;
                }

                if (!_.startsWith(val, "##(")) {
                    if (ps == "system.datetime, mscorlib") {
                        return new Date(val).toISOString();
                    }
                    return val;
                }

                switch (val.toLowerCase()) {
                    case "##(esbranch)":
                        var m = esGlobals.getClientSession();
                        if (m && m.connectionModel) {
                            return m.connectionModel.BranchID;
                        }
                        return val;

                    default:
                        return val;
                }
            }

            function ESParamsDefinitions(title, params) {
                this.title = title;
                this.definitions = params;
                this.paramsValues = null;
            }

            ESParamsDefinitions.prototype.createDefinitions = function (
                title,
                params,
                paramVals
            ) {
                this.title = title;
                if (!params || !angular.isArray(params)) {
                    this.definitions = [];
                    return this;
                }

                this.definitions = _.map(params, function (p) {
                    var dx;
                    if (paramVals && angular.isArray(paramVals)) {
                        dx = _.filter(paramVals, {
                            id: p.id,
                        });
                    }

                    return new ESParamInfo(p, dx);
                });

                var dfValues = _.map(this.definitions, function (p) {
                    return p.defaultValues;
                });

                this.paramsValues = new esGlobals.ESParamValues(dfValues);
                return this;
            };

            ESParamsDefinitions.prototype.getParamsValues = function () {
                return this.paramsValues;
            };

            ESParamsDefinitions.prototype.visibleDefinitions = function (
                includeAdvanced
            ) {
                var f = this.definitions;
                if (!f) {
                    return [];
                }

                return _.filter(f, function (g) {
                    if (!g.visible) {
                        return false;
                    }

                    if (!includeAdvanced) {
                        return !g.isAdvanced();
                    }
                    return true;
                });
            };

            ESParamsDefinitions.prototype.simpleDefinitions = function () {
                var f = this.definitions;
                var t = f
                    ? _.filter(f, function (g) {
                          return g.visible && g.visibility != 1;
                      })
                    : [];

                return t;
            };

            ESParamsDefinitions.prototype.advancedDefinitions = function () {
                var f = this.definitions;
                return f
                    ? _.filter(f, function (g) {
                          return g.isAdvanced();
                      })
                    : [];
            };

            ESParamsDefinitions.prototype.hasVisibleParams = function () {
                var f = this.definitions;
                if (!f) {
                    return false;
                }

                return (
                    _.filter(f, function (g) {
                        return g.visible;
                    }).length > 0
                );
            };

            ESParamsDefinitions.prototype.hasAdvancedParams = function () {
                var f = this.definitions;
                return this.advancedDefinitions().length >= 1;
            };

            ESParamsDefinitions.prototype.strVal = function (
                vals,
                onlyDisplayInHeader,
                separator
            ) {
                if (
                    !vals ||
                    !this.definitions ||
                    this.definitions.length == 0
                ) {
                    return "";
                }

                separator = separator || " / ";

                var eligible = _.filter(this.definitions, function (p) {
                    return (
                        p.visible &&
                        vals[p.id].strVal() &&
                        (onlyDisplayInHeader ? p.getTag("TITLEPQ:") : true)
                    );
                });

                var s = _.reduce(
                    _.sortBy(eligible, "aa"),
                    function (memo, p) {
                        return (
                            memo +
                            p.caption +
                            ": " +
                            vals[p.id].strVal() +
                            separator
                        );
                    },
                    ""
                );

                return s.substring(0, s.lastIndexOf(separator));
            };

            function winParamInfoToesParamInfo(winParamInfo, gridexInfo) {
                if (!winParamInfo) {
                    return null;
                }

                var espInfo = new ESParamInfo();

                espInfo.id = winParamInfo.ID;
                espInfo.aa = parseInt(winParamInfo.AA);
                espInfo.caption = winParamInfo.Caption;
                espInfo.toolTip = winParamInfo.Tooltip;
                espInfo.controlType = parseInt(winParamInfo.ControlType);
                espInfo.parameterType = winParamInfo.ParameterType;
                espInfo.precision = parseInt(winParamInfo.Precision);
                espInfo.multiValued = winParamInfo.MultiValued == "true";
                espInfo.visible = winParamInfo.Visible == "true";
                espInfo.required = winParamInfo.Required == "true";
                espInfo.oDSTag = winParamInfo.ODSTag;
                espInfo.tags = winParamInfo.Tags
                    ? winParamInfo.Tags.split("[(,)]")
                    : "";
                espInfo.visibility = parseInt(winParamInfo.Visibility);
                espInfo.invQueryID = winParamInfo.InvQueryID;
                espInfo.invSelectedMasterTable =
                    winParamInfo.InvSelectedMasterTable;
                espInfo.invSelectedMasterField =
                    winParamInfo.InvSelectedMasterField;
                espInfo.invTableMappings = winParamInfo.InvTableMappings;

                espInfo.enumOptionAll = winParamInfo.EnumOptionAll;
                var enmList = _.map(
                    _.filter(gridexInfo.EnumItem, function (x) {
                        return (
                            x.fParamID == espInfo.id &&
                            typeof x.ID != "undefined"
                        );
                    }),
                    function (e) {
                        return {
                            text: espInfo.oDSTag
                                ? e.Caption.substring(
                                      e.Caption.indexOf(".") + 1
                                  )
                                : e.Caption,
                            value: e.ID,
                        };
                    }
                );

                espInfo.enumList = enmList.length ? enmList : undefined;

                var gxDef = gridexInfo.DefaultValue;
                if (gxDef && angular.isArray(gxDef)) {
                    var dx = _.filter(gxDef, {
                        fParamID: espInfo.id,
                    });

                    espInfo.defaultValues = getEsParamVal(espInfo, dx);
                } else {
                    espInfo.defaultValues = getEsParamVal(espInfo, []);
                }

                return espInfo;
            }

            function winGridInfoToESGridInfo(xGroupID, xFilterID, gridexInfo) {
                if (!gridexInfo || !gridexInfo.LayoutColumn) {
                    return null;
                }

                var inFilterID;
                var inGroupID;
                if (angular.isObject(xGroupID)) {
                    inGroupID = xGroupID.GroupID;
                    inFilterID = xGroupID.FilterID;
                } else {
                    inGroupID = xGroupID;
                    inFilterID = xFilterID;
                }
                var fId = inFilterID.toLowerCase();
                var filterInfo = _.filter(gridexInfo.Filter, function (x) {
                    return x.ID.toLowerCase() == fId;
                });

                if (!filterInfo || filterInfo.length != 1) {
                    return null;
                }

                var esGridInfo = {
                    id: undefined,
                    caption: undefined,
                    rootTable: undefined,
                    selectedMasterTable: undefined,
                    selectedMasterField: undefined,
                    columnSets: undefined,
                    columns: undefined,
                    params: undefined,
                    defaultValues: undefined,
                    groups: undefined,
                    totalRow: false,
                };

                esGridInfo.groups = _.map(
                    _.filter(gridexInfo.LayoutGroup, function (y) {
                        return y.fFilterID.toLowerCase() == fId;
                    }),
                    function (x) {
                        return {
                            field: x.ColName,
                            aa: x.AA,
                            sortOrder: x.SortOrder,
                        };
                    }
                );

                filterInfo = filterInfo[0];
                esGridInfo.id = filterInfo.ID;
                esGridInfo.caption = filterInfo.Caption;
                esGridInfo.rootTable = filterInfo.RootTable;
                esGridInfo.selectedMasterTable = filterInfo.SelectedMasterTable;
                esGridInfo.selectedMasterField = filterInfo.SelectedMasterField;
                esGridInfo.totalRow = filterInfo.TotalRow != "0";

                var z2 = _.map(
                    _.filter(gridexInfo.LayoutColumn, function (y) {
                        return (
                            y.fFilterID.toLowerCase() == fId &&
                            y.DataTypeName != "Guid"
                        );
                    }),
                    function (x) {
                        return winColToESCol(inGroupID, fId, gridexInfo, x);
                    }
                );

                var z1 = _.sortBy(z2, function (x) {
                    return parseInt(x.AA);
                });

                var clickCol = _.find(z1, function (x) {
                    return x.visible && x.dataType == "string";
                });

                var z3 = _.map(z1, function (x) {
                    var showForm = clickCol
                        ? {
                              showCol: clickCol.field,
                              selectedMasterField:
                                  esGridInfo.selectedMasterField,
                              selectedState: (
                                  esGridInfo.selectedMasterTable || ""
                              ).toLowerCase(),
                          }
                        : undefined;

                    return esColToKCol(x, showForm, esGridInfo);
                });

                esGridInfo.columnSets = _.sortBy(
                    _.map(
                        _.filter(gridexInfo.LayoutColumnSet, function (x) {
                            return x.fFilterID.toLowerCase() == fId;
                        }),
                        function (p) {
                            return {
                                aa: parseInt(p.Position),
                                title: p.Caption,
                                columns: undefined,
                            };
                        }
                    ),
                    "aa"
                );

                esGridInfo.columns = z3;
                // now process the column sets
                // put column sets first
                if (esGridInfo.columnSets && esGridInfo.columnSets.length > 0) {
                    _.each(esGridInfo.columnSets, function (x) {
                        x.columns = _.filter(z3, {
                            columnSet: x.aa,
                        });
                        z3 = _.difference(z3, x.columns);
                    });

                    esGridInfo.columnSets = _.sortBy(
                        _.filter(esGridInfo.columnSets, function (x) {
                            return x.columns && x.columns.length > 0;
                        }),
                        "aa"
                    );

                    z3 = esGridInfo.columnSets.concat(z3);
                    esGridInfo.columns = z3;
                } else {
                    // No column sets defined, so just list the columns
                    esGridInfo.columns = z3;
                }

                esGridInfo.params = new ESParamsDefinitions(
                    esGridInfo.caption,
                    _.map(gridexInfo.Param, function (p) {
                        return winParamInfoToesParamInfo(p, gridexInfo);
                    })
                );

                var dfValues = _.map(
                    esGridInfo.params.definitions,
                    function (p) {
                        return p.defaultValues;
                    }
                );

                esGridInfo.defaultValues = new esGlobals.ESParamValues(
                    dfValues
                );
                return esGridInfo;
            }

            return {
                ESRequeryDetailGrids: ESRequeryDetailGrids,
                ESMasterDetailGridRelation: ESMasterDetailGridRelation,

                /**
* @ngdoc function
* @name es.Web.UI.esUIHelper#winGridInfoToESGridInfo
* @methodOf es.Web.UI.esUIHelper
* @module es.Web.UI
* @kind function
* @description  This function processes and transforms an Entersoft Windows - Janus specific definition of the UI layout of an
* Entersoft Public Query or Entersoft Scroller to an abstract web-oriented defintion of the layout to be used by WEB UI components
* such as telerik kendo-ui, jQuery grids, etc.
* @param {string|ESPublicQueryDef} xGroupID if string then Entersoft Public Query GroupID or a {@link es.Services.Web.esGlobals#methods_ESPublicQueryDef ESPublicQueryDef} object that defines the rest of the parameters
* @param {string} xFilterID Entersoft Public Query FilterID. In case that pqGroupID is ESPublicQueryDef type then this parameter can be null or undefined
* @param {object} gridexInfo The definition object for an Entersoft Public Query (or Scroller) as provided by the result
* of the function {@link es.Services.Web.esWebApi#methods_fetchPublicQueryInfo fetchPublicQueryInfo}.
* @return {object} Returns an object that is the abstract (not Janus specific) representation of the gridexInfo.
* @example
```js
var inGroupID = "ESMMStockItem";
var inFilterID = "ESMMStockItem_Def";
var gridexInfo = {
"Filter": [{
"ID": "ESMMStockItem_Def",
"Caption": "Είδη Αποθήκης",
"QueryID": "ESMMStockItem\\ESMMStockItem_Def\\ESMMStockItem_Def_Q1.esq",
"RootTable": "ESFIItem",
"SelectedMasterTable": "ESFIItem",
"SelectedMasterField": "ISUDGID",
"TotalRow": "0",
"ColumnHeaders": "0",
"ColumnSetHeaders": "0",
"ColumnSetRowCount": "2",
"ColumnSetHeaderLines": "1",
"HeaderLines": "1",
"GroupByBoxVisible": "false",
"FilterLineVisible": "false",
"PreviewRow": "false",
"PreviewRowMember": "",
"PreviewRowLines": "3"
}],
"Param": [{
"ID": "ESDCreated",
"AA": "1",
"Caption": "Ημ/νία δημιουργίας",
"Tooltip": "Ημ/νία δημιουργίας",
"ControlType": "6",
"ParameterType": "Entersoft.Framework.Platform.ESDateRange, QueryProcess",
"Precision": "0",
"MultiValued": "false",
"Visible": "true",
"Required": "false",
"ODSTag": "AA049FD6-4EFF-499F-8F6B-0573BD14D183",
"Tags": "",
"Visibility": "0"
}, {
"ID": "ESUCreated",
"AA": "2",
"Caption": "Χρήστης δημιουργίας",
"Tooltip": "Χρήστης δημιουργίας",
"ControlType": "9",
"ParameterType": "Entersoft.Framework.Platform.ESString, QueryProcess",
"Precision": "0",
"MultiValued": "false",
"Visible": "true",
"Required": "false",
"ODSTag": "0ABDC77C-119B-4729-A99F-C226EBCE0C1B",
"Tags": "",
"Visibility": "0"
}, {
"ID": "ESDModified",
"AA": "3",
"Caption": "Ημ/νία τελ.μεταβολής",
"Tooltip": "Ημ/νία τελ.μεταβολής",
"ControlType": "20",
"ParameterType": "Entersoft.Framework.Platform.ESDateRange, QueryProcess",
"Precision": "0",
"MultiValued": "false",
"Visible": "true",
"Required": "false",
"ODSTag": "4E4E17A4-ECA5-4CB0-9F11-02C943F6E6C8",
"Tags": "",
"Visibility": "0"
}],
"DefaultValue": [{
"fParamID": "ESDCreated",
"Value": "#2006/04/15#"
}, {
"fParamID": "ESUCreated",
"Value": "ESString(RANGE, 'wλμ', 'χχω')"
}, {
"fParamID": "ESDModified",
"Value": "#2011/03/14#"
}],
"LayoutColumn": [{
"fFilterID": "ESMMStockItem_Def",
"ColName": "Code",
"AA": "0",
"Caption": "Κωδικός",
"FormatString": "",
"Width": "100",
"ODSTag": "74C82778-6B49-4928-9F06-81B4384BF677",
"Visible": "true",
"ColumnSetRow": "-1",
"ColumnSetColumn": "-1",
"RowSpan": "-1",
"ColSpan": "-1",
"AggregateFunction": "0",
"TextAlignment": "1",
"EditType": "1",
"DataTypeName": "String"
}, {
"fFilterID": "ESMMStockItem_Def",
"ColName": "Description",
"AA": "4",
"Caption": "Περιγραφή",
"FormatString": "",
"Width": "100",
"ODSTag": "2B666760-3FA7-478A-8112-CCC77FBC754E",
"Visible": "true",
"ColumnSetRow": "-1",
"ColumnSetColumn": "-1",
"RowSpan": "-1",
"ColSpan": "-1",
"AggregateFunction": "0",
"TextAlignment": "1",
"EditType": "1",
"DataTypeName": "String"
}, {
"fFilterID": "ESMMStockItem_Def",
"ColName": "AlternativeDescription",
"AA": "5",
"Caption": "Εναλλακτική περιγραφή",
"FormatString": "",
"Width": "100",
"ODSTag": "A8E42370-78F3-4F38-BB65-F861B6DD1F84",
"Visible": "false",
"ColumnSetRow": "-1",
"ColumnSetColumn": "-1",
"RowSpan": "-1",
"ColSpan": "-1",
"AggregateFunction": "0",
"TextAlignment": "1",
"EditType": "1",
"DataTypeName": "String"
}, {
"fFilterID": "ESMMStockItem_Def",
"ColName": "Price",
"AA": "6",
"Caption": "Τιμή χονδρικής",
"FormatString": "#,0.00",
"Width": "100",
"ODSTag": "FC8D207E-FE62-4791-98C0-C5787C8940AD",
"Visible": "true",
"ColumnSetRow": "-1",
"ColumnSetColumn": "-1",
"RowSpan": "-1",
"ColSpan": "-1",
"AggregateFunction": "0",
"TextAlignment": "3",
"EditType": "1",
"DataTypeName": "Decimal"
}, {
"fFilterID": "ESMMStockItem_Def",
"ColName": "RetailPrice",
"AA": "7",
"Caption": "Τιμή λιανικής",
"FormatString": "#,0.00",
"Width": "100",
"ODSTag": "F1FE2820-573E-41A5-B0A8-5DE247EEC20A",
"Visible": "true",
"ColumnSetRow": "-1",
"ColumnSetColumn": "-1",
"RowSpan": "-1",
"ColSpan": "-1",
"AggregateFunction": "0",
"TextAlignment": "3",
"EditType": "1",
"DataTypeName": "Decimal"
}, {
"fFilterID": "ESMMStockItem_Def",
"ColName": "AssemblyType",
"AA": "8",
"Caption": "Τύπος σύνθεσης",
"FormatString": "",
"Width": "100",
"ODSTag": "AEAA32D3-E015-4891-AEB9-8A60ABBCA9AF",
"Visible": "true",
"ColumnSetRow": "-1",
"ColumnSetColumn": "-1",
"RowSpan": "-1",
"ColSpan": "-1",
"AggregateFunction": "0",
"TextAlignment": "1",
"EditType": "5",
"DataTypeName": "Byte"
}, {
"fFilterID": "ESMMStockItem_Def",
"ColName": "ItemClass",
"AA": "9",
"Caption": "Κλάση",
"FormatString": "",
"Width": "100",
"ODSTag": "82538EA3-8EF0-4E8F-A395-9EF1466DCFB6",
"Visible": "true",
"ColumnSetRow": "-1",
"ColumnSetColumn": "-1",
"RowSpan": "-1",
"ColSpan": "-1",
"AggregateFunction": "0",
"TextAlignment": "1",
"EditType": "5",
"DataTypeName": "Byte"
}, {
"fFilterID": "ESMMStockItem_Def",
"ColName": "ItemType",
"AA": "10",
"Caption": "Τύπος",
"FormatString": "",
"Width": "100",
"ODSTag": "0107AD25-0F2D-41F6-9D59-4C6B1CC0FE30",
"Visible": "true",
"ColumnSetRow": "-1",
"ColumnSetColumn": "-1",
"RowSpan": "-1",
"ColSpan": "-1",
"AggregateFunction": "0",
"TextAlignment": "1",
"EditType": "5",
"DataTypeName": "Byte"
}, {
"fFilterID": "ESMMStockItem_Def",
"ColName": "Name",
"AA": "11",
"Caption": "Επωνυμία/Ονοματεπώνυμο",
"FormatString": "",
"Width": "100",
"ODSTag": "7699C12E-3B5F-47E8-B509-7AF97F4560B1",
"Visible": "true",
"ColumnSetRow": "-1",
"ColumnSetColumn": "-1",
"RowSpan": "-1",
"ColSpan": "-1",
"AggregateFunction": "0",
"TextAlignment": "1",
"EditType": "1",
"DataTypeName": "String"
}, {
"fFilterID": "ESMMStockItem_Def",
"ColName": "Description1",
"AA": "12",
"Caption": "Περιγραφή1",
"FormatString": "",
"Width": "100",
"ODSTag": "2BF1AC3B-BDB3-4239-A9D1-696793981822",
"Visible": "true",
"ColumnSetRow": "-1",
"ColumnSetColumn": "-1",
"RowSpan": "-1",
"ColSpan": "-1",
"AggregateFunction": "0",
"TextAlignment": "1",
"EditType": "1",
"DataTypeName": "String"
}, {
"fFilterID": "ESMMStockItem_Def",
"ColName": "fItemFamilyCode",
"AA": "13",
"Caption": "Οικογένεια",
"FormatString": "",
"Width": "100",
"ODSTag": "7D4D3335-3D6D-45B5-A1D3-FF237A33867C",
"Visible": "true",
"ColumnSetRow": "-1",
"ColumnSetColumn": "-1",
"RowSpan": "-1",
"ColSpan": "-1",
"AggregateFunction": "0",
"TextAlignment": "1",
"EditType": "1",
"DataTypeName": "String"
}, {
"fFilterID": "ESMMStockItem_Def",
"ColName": "fItemGroupCode",
"AA": "14",
"Caption": "Ομάδα",
"FormatString": "",
"Width": "100",
"ODSTag": "CE625D36-7744-4DF9-9AFA-2F0851F9B025",
"Visible": "true",
"ColumnSetRow": "-1",
"ColumnSetColumn": "-1",
"RowSpan": "-1",
"ColSpan": "-1",
"AggregateFunction": "0",
"TextAlignment": "1",
"EditType": "1",
"DataTypeName": "String"
}, {
"fFilterID": "ESMMStockItem_Def",
"ColName": "fItemCategoryCode",
"AA": "15",
"Caption": "Κατηγορία",
"FormatString": "",
"Width": "100",
"ODSTag": "19AB9EB4-7791-4090-8AF6-F9434B031EF0",
"Visible": "true",
"ColumnSetRow": "-1",
"ColumnSetColumn": "-1",
"RowSpan": "-1",
"ColSpan": "-1",
"AggregateFunction": "0",
"TextAlignment": "1",
"EditType": "1",
"DataTypeName": "String"
}, {
"fFilterID": "ESMMStockItem_Def",
"ColName": "fItemSubcategoryCode",
"AA": "16",
"Caption": "Υποκατηγορία",
"FormatString": "",
"Width": "100",
"ODSTag": "22E443E1-9A08-4FAD-835A-6B7C15A844C2",
"Visible": "true",
"ColumnSetRow": "-1",
"ColumnSetColumn": "-1",
"RowSpan": "-1",
"ColSpan": "-1",
"AggregateFunction": "0",
"TextAlignment": "1",
"EditType": "1",
"DataTypeName": "String"
}, {
"fFilterID": "ESMMStockItem_Def",
"ColName": "ESDCreated",
"AA": "1",
"Caption": "Ημ/νία δημιουργίας",
"FormatString": "d",
"Width": "100",
"ODSTag": "AA049FD6-4EFF-499F-8F6B-0573BD14D183",
"Visible": "true",
"ColumnSetRow": "-1",
"ColumnSetColumn": "-1",
"RowSpan": "-1",
"ColSpan": "-1",
"AggregateFunction": "0",
"TextAlignment": "1",
"EditType": "0",
"DataTypeName": "DateTime"
}, {
"fFilterID": "ESMMStockItem_Def",
"ColName": "ESDModified",
"AA": "2",
"Caption": "Ημ/νία τελ.μεταβολής",
"FormatString": "d",
"Width": "100",
"ODSTag": "4E4E17A4-ECA5-4CB0-9F11-02C943F6E6C8",
"Visible": "true",
"ColumnSetRow": "-1",
"ColumnSetColumn": "-1",
"RowSpan": "-1",
"ColSpan": "-1",
"AggregateFunction": "0",
"TextAlignment": "1",
"EditType": "0",
"DataTypeName": "DateTime"
}, {
"fFilterID": "ESMMStockItem_Def",
"ColName": "ESUCreated",
"AA": "3",
"Caption": "Χρήστης δημιουργίας",
"FormatString": "",
"Width": "100",
"ODSTag": "0ABDC77C-119B-4729-A99F-C226EBCE0C1B",
"Visible": "true",
"ColumnSetRow": "-1",
"ColumnSetColumn": "-1",
"RowSpan": "-1",
"ColSpan": "-1",
"AggregateFunction": "0",
"TextAlignment": "1",
"EditType": "0",
"DataTypeName": "String"
}, {
"fFilterID": "ESMMStockItem_Def",
"ColName": "ESUModified",
"AA": "17",
"Caption": "Χρήστης τελ.μεταβολής",
"FormatString": "",
"Width": "100",
"ODSTag": "FC41CA99-AC07-45B5-825F-3982037E148C",
"Visible": "true",
"ColumnSetRow": "-1",
"ColumnSetColumn": "-1",
"RowSpan": "-1",
"ColSpan": "-1",
"AggregateFunction": "0",
"TextAlignment": "1",
"EditType": "0",
"DataTypeName": "String"
}, {
"fFilterID": "ESMMStockItem_Def",
"ColName": "Comment",
"AA": "18",
"Caption": "Σχόλιο",
"FormatString": "",
"Width": "100",
"ODSTag": "BD9B18D3-BA45-4FA7-911A-C66ACA556AB9",
"Visible": "true",
"ColumnSetRow": "-1",
"ColumnSetColumn": "-1",
"RowSpan": "-1",
"ColSpan": "-1",
"AggregateFunction": "0",
"TextAlignment": "1",
"EditType": "1",
"DataTypeName": "String"
}],
"ValueList": [{
"fFilterID": "ESMMStockItem_Def",
"ColName": "AssemblyType",
"Value": "0",
"Caption": "Απλό"
}, {
"fFilterID": "ESMMStockItem_Def",
"ColName": "AssemblyType",
"Value": "1",
"Caption": "Σετ"
}, {
"fFilterID": "ESMMStockItem_Def",
"ColName": "AssemblyType",
"Value": "2",
"Caption": "Παραγόμενο"
}, {
"fFilterID": "ESMMStockItem_Def",
"ColName": "ItemClass",
"Value": "0",
"Caption": "Γενικό είδος-Υπηρεσία"
}, {
"fFilterID": "ESMMStockItem_Def",
"ColName": "ItemClass",
"Value": "1",
"Caption": "Είδος Αποθήκης"
}, {
"fFilterID": "ESMMStockItem_Def",
"ColName": "ItemClass",
"Value": "2",
"Caption": "Πάγιο"
}, {
"fFilterID": "ESMMStockItem_Def",
"ColName": "ItemType",
"Value": "0",
"Caption": "Εμπόρευμα"
}, {
"fFilterID": "ESMMStockItem_Def",
"ColName": "ItemType",
"Value": "1",
"Caption": "Προϊόν"
}, {
"fFilterID": "ESMMStockItem_Def",
"ColName": "ItemType",
"Value": "8",
"Caption": "Ημιέτοιμο"
}, {
"fFilterID": "ESMMStockItem_Def",
"ColName": "ItemType",
"Value": "2",
"Caption": "Ά ύλη"
}, {
"fFilterID": "ESMMStockItem_Def",
"ColName": "ItemType",
"Value": "9",
"Caption": "Β’ύλη"
}, {
"fFilterID": "ESMMStockItem_Def",
"ColName": "ItemType",
"Value": "12",
"Caption": "Υλικό συσκευασίας"
}, {
"fFilterID": "ESMMStockItem_Def",
"ColName": "ItemType",
"Value": "3",
"Caption": "Ανταλλακτικό"
}, {
"fFilterID": "ESMMStockItem_Def",
"ColName": "ItemType",
"Value": "4",
"Caption": "Αναλώσιμο"
}, {
"fFilterID": "ESMMStockItem_Def",
"ColName": "ItemType",
"Value": "5",
"Caption": "Είδος συσκευασίας"
}, {
"fFilterID": "ESMMStockItem_Def",
"ColName": "ItemType",
"Value": "6",
"Caption": "Eίδος εγγυοδοσίας"
}, {
"fFilterID": "ESMMStockItem_Def",
"ColName": "ItemType",
"Value": "10",
"Caption": "Προϋπ/να έσοδα"
}, {
"fFilterID": "ESMMStockItem_Def",
"ColName": "ItemType",
"Value": "11",
"Caption": "Προϋπ/να έξοδα"
}, {
"fFilterID": "ESMMStockItem_Def",
"ColName": "ItemType",
"Value": "7",
"Caption": "Άλλο"
}],
"FormatingCondition": [{
"fFilterID": "ESMMStockItem_Def",
"Key": "PriceMarkNegativeValues",
"AllowMerge": "true",
"ColumnKey": "Price",
"ConditionOperator": "3",
"Value1": "0",
"TargetColumnKey": "Price",
"fFormatStyleKey": "1ecd5e8f-b3d0-4a02-b9ac-d70a36ee4d41"
}, {
"fFilterID": "ESMMStockItem_Def",
"Key": "RetailPriceMarkNegativeValues",
"AllowMerge": "true",
"ColumnKey": "RetailPrice",
"ConditionOperator": "3",
"Value1": "0",
"TargetColumnKey": "RetailPrice",
"fFormatStyleKey": "3a9999f7-322b-437d-abbf-43ded2a4bec6"
}],
"FormatStyle": [{
"Key": "1ecd5e8f-b3d0-4a02-b9ac-d70a36ee4d41",
"BackColor": "0",
"ForeColor": "-65536",
"FontBold": "0",
"FontItalic": "0",
"FontStrikeout": "0"
}, {
"Key": "3a9999f7-322b-437d-abbf-43ded2a4bec6",
"BackColor": "0",
"ForeColor": "-65536",
"FontBold": "0",
"FontItalic": "0",
"FontStrikeout": "0"
}]
};
 
var esgridInfo = esUIHelper.winGridInfoToESGridInfo(inGroupID, inFilterID, gridexInfo);
```
* __The result will be:__
```js
{
"id": "ESMMStockItem_Def",
"caption": "Είδη Αποθήκης",
"rootTable": "ESFIItem",
"selectedMasterTable": "ESFIItem",
"selectedMasterField": "ISUDGID",
"totalRow": "0",
"columnHeaders": "0",
"columnSetHeaders": "0",
"columnSetRowCount": "2",
"columnSetHeaderLines": "1",
"headerLines": "1",
"groupByBoxVisible": "false",
"filterLineVisible": "false",
"previewRow": "false",
"previewRowMember": "",
"previewRowLines": "3",
"columns": [{
"field": "Code",
"title": "Κωδικός"
}, {
"field": "ESDCreated",
"title": "Ημ/νία δημιουργίας",
"format": "{0:d}"
}, {
"field": "ESDModified",
"title": "Ημ/νία τελ.μεταβολής",
"format": "{0:d}"
}, {
"field": "ESUCreated",
"title": "Χρήστης δημιουργίας"
}, {
"field": "Description",
"title": "Περιγραφή"
}, {
"field": "Price",
"title": "Τιμή χονδρικής",
"attributes": {
"style": "text-align: right;"
},
"format": "{0:#,0.00}"
}, {
"field": "RetailPrice",
"title": "Τιμή λιανικής",
"attributes": {
"style": "text-align: right;"
},
"format": "{0:#,0.00}"
}, {
"field": "AssemblyType",
"title": "Τύπος σύνθεσης"
}, {
"field": "ItemClass",
"title": "Κλάση"
}, {
"field": "ItemType",
"title": "Τύπος"
}, {
"field": "Name",
"title": "Επωνυμία/Ονοματεπώνυμο"
}, {
"field": "Description1",
"title": "Περιγραφή1"
}, {
"field": "fItemFamilyCode",
"title": "Οικογένεια"
}, {
"field": "fItemGroupCode",
"title": "Ομάδα"
}, {
"field": "fItemCategoryCode",
"title": "Κατηγορία"
}, {
"field": "fItemSubcategoryCode",
"title": "Υποκατηγορία"
}, {
"field": "ESUModified",
"title": "Χρήστης τελ.μεταβολής"
}, {
"field": "Comment",
"title": "Σχόλιο"
}],
"params": [{
"id": "ESDCreated",
"aa": 1,
"caption": "Ημ/νία δημιουργίας",
"toolTip": "Ημ/νία δημιουργίας",
"controlType": 6,
"parameterType": "Entersoft.Framework.Platform.ESDateRange, QueryProcess",
"precision": 0,
"multiValued": false,
"visible": true,
"required": false,
"oDSTag": "AA049FD6-4EFF-499F-8F6B-0573BD14D183",
"tags": "",
"visibility": 0,
"defaultValues": {
"paramCode": "ESDCreated",
"paramValue": {
"dRange": "1",
"fromD": "2006-04-14T21:00:00.000Z",
"toD": null
}
}
}, {
"id": "ESUCreated",
"aa": 2,
"caption": "Χρήστης δημιουργίας",
"toolTip": "Χρήστης δημιουργίας",
"controlType": 9,
"parameterType": "Entersoft.Framework.Platform.ESString, QueryProcess",
"precision": 0,
"multiValued": false,
"visible": true,
"required": false,
"oDSTag": "0ABDC77C-119B-4729-A99F-C226EBCE0C1B",
"tags": "",
"visibility": 0,
"defaultValues": {
"paramCode": "ESUCreated",
"paramValue": {
"value": "wλμ",
"valueTo": "χχω",
"oper": "RANGE"
}
}
}, {
"id": "ESDModified",
"aa": 3,
"caption": "Ημ/νία τελ.μεταβολής",
"toolTip": "Ημ/νία τελ.μεταβολής",
"controlType": 20,
"parameterType": "Entersoft.Framework.Platform.ESDateRange, QueryProcess",
"precision": 0,
"multiValued": false,
"visible": true,
"required": false,
"oDSTag": "4E4E17A4-ECA5-4CB0-9F11-02C943F6E6C8",
"tags": "",
"visibility": 0,
"defaultValues": {
"paramCode": "ESDModified",
"paramValue": {
"dRange": "1",
"fromD": "2011-03-13T22:00:00.000Z",
"toD": null
}
}
}],
"defaultValues": {
"ESDCreated": {
"paramCode": "ESDCreated",
"paramValue": {
"dRange": "1",
"fromD": "2006-04-14T21:00:00.000Z",
"toD": null
}
},
"ESUCreated": {
"paramCode": "ESUCreated",
"paramValue": {
"value": "wλμ",
"valueTo": "χχω",
"oper": "RANGE"
}
},
"ESDModified": {
"paramCode": "ESDModified",
"paramValue": {
"dRange": "1",
"fromD": "2011-03-13T22:00:00.000Z",
"toD": null
}
}
}
}
```
**/
                winGridInfoToESGridInfo: winGridInfoToESGridInfo,

                winColToESCol: winColToESCol,
                esColToKCol: esColToKCol,
                esGridInfoToLocalKInfo: esGridInfoToLocalKInfo,

                /**
* @ngdoc function
* @name es.Web.UI.esUIHelper#esGridInfoToKInfo
* @methodOf es.Web.UI.esUIHelper
* @module es.Web.UI
* @kind function
* @description  This function processes and transforms an {@link es.Web.UI.esUIHelper#methods_winGridInfoToESGridInfo esgridInfo} object (abstract definition of gridexInfo)
* to a Telerik kendo-grid layout definition object.
* @param {string} inGroupID The Entersoft PQ (or Scroller) GroupID the the gridexInfo object describes
* @param {string} inFilterID The Entersoft PQ (or Scroller) FilterID the the gridexInfo object describes
* @param {object} executeParams The object that will hold or alread holds the values of the Entersoft Public Query Paramters i.e. the object
* that holds the values of the params panel (EBS terminology). If the object is not an empty one i.e. {} BUT is has values for some of the named parameters
* these values will be used as default values for those parameters, overiding any default values coming from the grid layout definition object.
* @param {object} esGridInfo The Entersoft abstract definition object that is the result of {@link es.Web.UI.esUIHelper#methods_winGridInfoToESGridInfo winGridInfoToESGridInfo}.
* of the function {@link es.Services.Web.esWebApi#methods_fetchPublicQueryInfo fetchPublicQueryInfo}.
* @return {object} Returns an object that is the __Telerik kendo-grid specific__ schema definition object that can be used to initialize the
* UI of a kendo-grid or kendo-grid like widget.
*
* The returned object can be directly assigned to the _k-options_ attribute of a __kendo-grid__ Telerik widget
* @example
* This is a screenshot from Pulic Query Info results (geridexInfo, esgridInfo and Telerik kendo-grid options)
* ![Sample run for am ESMMStockItem PQInfo](images/api/es010fetchpqinfo.png)
* 
```js
//fetchPublicQueryInfo sample
$scope.fetchPQInfo = function() {
esWebApi.fetchPublicQueryInfo($scope.pGroup, $scope.pFilter)
.then(function(ret) {
// This is the gridlayout as defined in the EBS Public Query based on .NET Janus GridEx Layout
$scope.esJanusGridLayout = ret.data;
 
// This is the neutral-abstract representation of the Janus GridEx Layout according to the ES WEB UI simplification
$scope.esWebGridInfo = esWebUIHelper.winGridInfoToESGridInfo($scope.pGroup, $scope.pFilter, $scope.esJanusGridLayout);
 
// This is the kendo-grid based layout ready to be assigned to kendo-grid options attribute for rendering the results
// and for executing the corresponding Public Query
$scope.esGridOptions = esWebUIHelper.esGridInfoToKInfo($scope.pGroup, $scope.pFilter, {}, $scope.esWebGridInfo);
}, function(err, status) {
alert(a.UserMessage || a.MessageID || "Generic Error");
});
}
```
* __HTML__
```html
<span>
<input type="text" ng-model="pGroup"  placeholder="PQ GroupID">
<input type="text" ng-model="pFilter" placeholder="PQ FilterID">
<button ng-click="fetchPQInfo()">fetchPublicQueryInfo</button>
<div kendo-grid k-ng-delay="esGridOptions" k-auto-bind="false" k-options="esGridOptions" />
</span>
```
**/
                esGridInfoToKInfo: esGridInfoToKInfo,

                getZoomDataSource: prepareStdZoom,
                getPQDataSource: prepareWebScroller,
                getTreeMapDS: getTreeMapDS,

                getPivotDS: getPivotDS,

                esResolveBlobUrl: esResolveBlobUrl,

                esResolveUserLogoUrl: esResolveUserLogoUrl,

                createEsParamVal: createEsParamVal,

                createESParams: createESParams,

                ESParamsDefinitions: ESParamsDefinitions,

                ESParamInfo: ESParamInfo,

                esAskForField: esAskForField,

                esChangePassword: esChangePassword,

                ESFavourites: ESFavourites,

                onMapClick: function (a, b, c) {
                    alert(
                        "A location has been clicked. Soon you will see a form here !!!"
                    );
                },
            };
        },
    ]);
})();
