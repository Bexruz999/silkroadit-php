(function () {
    const locale = {
        AUTH_COMMAND: 'Необходимо авторизоваться в чате',
        HEADER_LABEL: 'Авторизация',
        LOGIN_LABEL: 'Логин',
        PASSWORD_LABEL: 'Пароль',
        SUBMIT_LABEL: 'Войти',
        FIELDS_REQUIRED_ERROR: 'Заполните обязательные поля',
        AUTH_SUCCESS_MSG: 'Успешная авторизация',
        AUTH_ERROR_MSG: 'Ошибка авторизации',
        USER_ID_SAVING_ERROR: 'Ошибка. Не удалось сохранить User ID',
        USER_ID_NOT_FOUND_ERROR: 'В ответе на запрос авторизации отсутствует User ID',
        LOADING_MSG: 'Загрузка...',
    };
    const chatHostname = 'chathost.ru';
    const chatSubDomain = 'ispserverru';
    const projectDomain = 'ispserver.ru';
    const projectId = 9;
    const projectName = 'ISPserver.RU';
    const appId= 47817;

    const jqueryAjaxPromise = (options) => {
        return new Promise((resolve, reject) => {
            jQuery.ajax(options).done(resolve).fail(reject);
        });
    };

    const wait = ms => new Promise(r => setTimeout(r, ms));
    const retry = (func, delay, retries) => {
        return new Promise((resolve, reject) => {
            func()
                .then((data) => {
                    resolve(data);
                })
                .catch((reason) => {
                    if (retries > 0) {
                        return wait(delay)
                            .then(retry.bind(null, func, delay, retries - 1))
                            .then(resolve)
                            .catch(reject);
                    }
                    return reject(reason);
                });
        });
    };


    const deviceFingerprint = {
        deviceId: null,
        deviceName: null,
        deviceSystem: null
    };

    const importFingerprintJSPromise = () => {
        const chatIframeElement = document.getElementById('carrot-messenger-frame');
        const chatIframeWindow = chatIframeElement.contentWindow;
        const chatIframeDoc = chatIframeWindow.document;
        const chatIframeHead = chatIframeDoc.getElementsByTagName('head')[0];
        
        const libSources = [
            `https://my.${projectDomain}/manimg/common/fplib/polyfill.min.js`,
            `https://my.${projectDomain}/manimg/common/fplib/fp.min.js`
        ];
        return new Promise((resolve, reject) => {
            Promise.all(libSources.map((url) => {
                return new Promise((urlResolve, urlReject) => {
                    const scriptElement = chatIframeDoc.createElement('script');
                    scriptElement.onload = (arg) => {
                        urlResolve(arg);
                    };
                    scriptElement.onerror = urlReject;
                    scriptElement.src = url;
                    chatIframeHead.appendChild(scriptElement);
                });
            })).then(() => {
                resolve(chatIframeWindow.FingerprintJS);
            }).catch((error) => {
                reject(error);
            });
            
        });
    };
    
    const setDeviceFingerprintPromise = (FingerprintJS) => {
        return new Promise((resolve, reject) => {
            FingerprintJS.load({
                debug: false
            }).then(function (fp) {
                return fp.get()
            }).then(function (r) {
                deviceFingerprint.deviceId = r.visitorId;
                deviceFingerprint.deviceName = r.components.userAgent.value.browser;
                deviceFingerprint.deviceSystem = r.components.os.value;
                resolve(deviceFingerprint);
            }).catch(function (e) {
                reject('Ошибка при получении свойств устройства', e);
            });
        });
    };

    const copyChatCss = () => {
        const chatIframeDoc = document.getElementById('carrot-messenger-frame').contentWindow.document;
        // const chatStyleCss = document.getElementById('chat-styles').innerHTML;
        const chatStyleCss = `
            .chat-auth-form-header {
                margin-bottom: 10px;
                text-align: center;
                font-weight: bold;
            }
            #chat-auth-form-toggle {
                cursor: pointer;
                position: absolute;
                display: inline-block;
                top: 9px;
                right: 15px;
                font-size: 20px;
                line-height: 20px;
            }
            .chat-auth-form #chat-auth-form-toggle::after {
                content: '\\2013';
            }
            .chat-auth-form--collapsed #chat-auth-form-toggle::after {
                content: '+';
            }
            .chat-auth-form {
                position: fixed;
                width: 96%;
                top: 10px;
                left: 2%;
                z-index: 1;
                overflow: hidden;
                padding: 10px 15px;
                border-radius: 15px;
                background: #f2f2f2;
                
                font-size: 14px;
                line-height: 1.43;
                word-wrap: break-word;
                color: #333333;
            }
            .chat-auth-form--collapsed {
                height: 40px;
            }
            #chat-auth-form-message {
                color: red;
            }
            .chat-input {
                border: none;
                border-radius: 5px;
                margin: 9px 0;
                line-height: 26px;
                padding: 0 5px;
                width: 100%;
            }
            .carrotquest-messenger-conversation-ul #carrotquest-messenger-writeus {
                color: #ffffff !important;
                display: none !important;
            }
        `;
        const chatIframeHead = chatIframeDoc.getElementsByTagName('head')[0];
        const chatIframeStyle = chatIframeDoc.createElement('style');
        chatIframeStyle.setAttribute('type', 'text/css');
        chatIframeStyle.innerHTML = chatStyleCss;
        chatIframeHead.appendChild(chatIframeStyle);
    };

    const copyCollapsedChatCss = () => {
        const chatIframeDoc = document.getElementById('carrot-messenger-collapsed-frame').contentWindow.document;
        const bubbleIframeElement = document.getElementById('carrot-messenger-bubble');
        const bubbleIframeDoc = bubbleIframeElement ? bubbleIframeElement.contentWindow.document : null;
        const chatStyleCss = `
            #carrotquest-messenger-collapsed-img-cont {
            }
        `;
        const bubbleStyleCss = `
            #carrotquest-collapsed-text {
                box-shadow: 0 3px 12px 1px rgb(0 0 0 / 20%);
            }
        `;
        const chatIframeHead = chatIframeDoc.getElementsByTagName('head')[0];
        const chatIframeStyle = chatIframeDoc.createElement('style');
        chatIframeStyle.setAttribute('type', 'text/css');
        chatIframeStyle.innerHTML = chatStyleCss;
        chatIframeHead.appendChild(chatIframeStyle);
        if (bubbleIframeDoc) {
            const bubbleIframeHead = bubbleIframeDoc.getElementsByTagName('head')[0];
            const bubbleIframeStyle = bubbleIframeDoc.createElement('style');
            bubbleIframeStyle.setAttribute('type', 'text/css');
            bubbleIframeStyle.innerHTML = bubbleStyleCss;
            bubbleIframeHead.appendChild(bubbleIframeStyle);
        }
    };
    
    const removeChatForm = () => {
        const chatIframeDoc = document.getElementById('carrot-messenger-frame').contentWindow.document;
        const authForm = chatIframeDoc.querySelector('#chat-auth-form');
        if (authForm) {
            authForm.remove();
        }
    };
    const authRequest = (name, password, chatId, userAuthToken, deviceFingerprint) => {
        return jqueryAjaxPromise({
            url: `https://${chatSubDomain}.${chatHostname}/widget_api/auth`,
            data: {
                username: name,
                password: password,
                chat_id: chatId,
                user_auth_token: userAuthToken,
                device_id: deviceFingerprint.deviceId,
                device_name: deviceFingerprint.deviceName,
                device_system: deviceFingerprint.deviceSystem
            },
            crossDomain: true,
        });
    };
    const reportAuthErrorRequest = (chatId, errorMessage) => {
        return jqueryAjaxPromise({
            url: `https://${chatSubDomain}.${chatHostname}/widget_api/report_auth_error`,
            data: {
                chat_id: chatId,
                error_message: errorMessage
            },
            crossDomain: true,
        });
    };
    const getUserIdBySessionIdRequest = (sessionId) => {
        return jqueryAjaxPromise({
            url: `https://${chatSubDomain}.${chatHostname}/widget_api/get_user_id_by_session`,
            data: {
                session_id: sessionId
            },
            crossDomain: true
        });
    };
    const sendMessageReceipt = (randomId, messageId, chatId) => {
        return jqueryAjaxPromise({
            url: `https://${chatSubDomain}.${chatHostname}/widget_api/send_message_receipt`,
            method: 'GET',
            data: {
                random_id: randomId,
                message_id: messageId,
                chat_id: chatId
            },
            crossDomain: true
        });
    };
    const findActiveAuthRequest = (conversationParts) => {
        const authRequestMessage = conversationParts.find(({ id, body, type }) => {
            return type === 'reply_admin' && body === locale.AUTH_COMMAND;
        });
        const nowTimestamp = Math.floor(Date.now() / 1000);
        const expiresAtTimestamp = authRequestMessage.created + 3600;
        if (authRequestMessage) {
            if (localStorage.getItem(`authorized-in-${authRequestMessage.id}`)) {
                console.error(`Запрос на авторизацию уже использован ${authRequestMessage.id}`);
            } else if (expiresAtTimestamp < nowTimestamp) {
                // NOTE - срок может не совпадать со сроком устновленным на сервере!
                console.error(`Срок действия запроса на авторизацию #${authRequestMessage.id} возможно истёк ${new Date(expiresAtTimestamp * 1000)}`);
            } else {
                return authRequestMessage;
            }
        }
    };
    const createAuthForm = (authRequestMessage) => {
        const chatIframeDoc = document.getElementById('carrot-messenger-frame').contentWindow.document;
        const conversationElement = chatIframeDoc.querySelector('.opened-wrap__middle');
        const authFormElement = chatIframeDoc.createElement('form');
        authFormElement.id = 'chat-auth-form';
        authFormElement.classList.add('chat-auth-form');
        const formInnerHtml = `
            <div class="chat-auth-form-header">
                ${locale.HEADER_LABEL}
                <span id="chat-auth-form-toggle">&nbsp;</span>
            </div>
            <label for="chat-input-name">${locale.LOGIN_LABEL}</label>
            <input id="chat-input-name" name="name" type="text" class="chat-input">
            <label for="chat-input-password">${locale.PASSWORD_LABEL}</label>
            <input id="chat-input-password" name="password" type="password" class="chat-input">
            <div style="text-align: right;">
                <button id="chat-auth-form-submit" class="btn btn-outline-primary btn-part-like" type="submit">${locale.SUBMIT_LABEL}</button>
            </div>
            <div id="chat-auth-form-message"></div>
            <div id="chat-auth-form-status"></div>
        `;
        authFormElement.innerHTML = formInnerHtml;
        conversationElement.appendChild(authFormElement);

        authFormElement.addEventListener('submit', (e) => {
            e.preventDefault();
            const nameInput = chatIframeDoc.getElementById('chat-input-name');
            const passwordInput = chatIframeDoc.getElementById('chat-input-password');
            const submitButton = chatIframeDoc.getElementById('chat-auth-form-submit');
            const name = nameInput.value;
            const password = passwordInput.value;
            // const chatId = localStorage.getItem('carrotquest_last_conversation');
            // const userAuthToken = JSON.parse(localStorage.getItem('carrotquest_data')).auth_token;
            const chatId = authRequestMessage.conversation;
            const userAuthToken = carrotquest.data.auth_token;

            chatIframeDoc.getElementById('chat-auth-form-message').innerHTML = '';
            chatIframeDoc.getElementById('chat-auth-form-status').innerHTML = locale.LOADING_MSG;
            submitButton.disabled = true;
            if (!name || !password) {
                chatIframeDoc.getElementById('chat-auth-form-message').innerHTML = locale.FIELDS_REQUIRED_ERROR;
                chatIframeDoc.getElementById('chat-auth-form-status').innerHTML = '';
                submitButton.disabled = false;
                return;
            }
            let sessionId;
            authRequest(name, password, chatId, userAuthToken, deviceFingerprint)
                .then(({ payload }) => {
                    sessionId = payload.session_id;
                    userId = payload.user_id;
                    console.log('userId :>> ', userId);
                    const expires = (new Date(Date.now() + 10*365*86400*1000)).toUTCString();
                    document.cookie = `ga-billmgr-uid=${userId}; path=/; domain=.${projectDomain}; expires=${expires}`;
                    chatIframeDoc.getElementById('chat-auth-form-message').innerHTML = '';
                    if (userId) {
                        return jqueryAjaxPromise({
                            url: `https://${chatSubDomain}.${chatHostname}/widget_api/get_user_hash`,
                            data: {
                                app_id: appId,
                                session_id: sessionId
                            },
                            crossDomain: true
                        })
                            .then((data) => {
                                const payload = data.payload;
                                carrotquest.auth(userId, payload.hash);
                                carrotquest.track(`Авторизация в чате:${projectName}`, {
                                    auth_command_id: authRequestMessage.id,
                                    conversation_id: authRequestMessage.conversation
                                });
                                return data;
                            })
                           .catch((error) => {
                               console.error('error :>> ', error);
                               chatIframeDoc.getElementById('chat-auth-form-message').innerHTML = locale.USER_ID_SAVING_ERROR;
                           });
                    } else {
                        throw locale.USER_ID_NOT_FOUND_ERROR;
                    }
                })
                .then((data) => {
                    nameInput.value = '';
                    passwordInput.value = '';
                    submitButton.disabled = true;
                    chatIframeDoc.getElementById('chat-auth-form-status').innerHTML = locale.AUTH_SUCCESS_MSG;
                    setTimeout(() => {
                        removeChatForm();
                    }, 5000);
                    localStorage.setItem(`authorized-in-${authRequestMessage.id}`, true);
                })
                .catch((error) => {
                    console.error('error :>> ', error);
                    if (error && error.responseJSON && error.responseJSON.message) {
                        chatIframeDoc.getElementById('chat-auth-form-message').innerHTML = error.responseJSON.message;
                    } else {
                        chatIframeDoc.getElementById('chat-auth-form-message').innerHTML = locale.AUTH_ERROR_MSG;
                        reportAuthErrorRequest(chatId, error).catch(() => {});
                    }
                    chatIframeDoc.getElementById('chat-auth-form-status').innerHTML = '';
                    submitButton.disabled = false;
                });
        });
        
        
        const onToggleButtonLoadPromise = () => {
            return new Promise((resolve, reject) => {
                const toggleButtonElement = chatIframeDoc.querySelector('#chat-auth-form-toggle');
                if (toggleButtonElement) {
                    resolve(toggleButtonElement);
                }
                reject();
            })
        };
        retry(onToggleButtonLoadPromise, 1000, 3)
            .then((toggleButtonElement) => {
                toggleButtonElement.addEventListener('click', (e) => {
                    authFormElement.classList.toggle('chat-auth-form--collapsed');
                    // removeChatForm();
                    // localStorage.setItem(`authorized-in-${authRequestMessage.id}`, true);
                });
            })
            .catch((error) => {
                console.error(error);
            });
        
    };

    let userId;
    try {
        userId = document.cookie
            .split('; ')
            .find(row => row.startsWith('ga-billmgr-uid='))
            .split('=')[1];
    } catch (error) {
        userId = null;
    }

    const initCarrotQuestExtensions = () => {
        carrotquest.onReady(() => {
            console.log('carrotquest.onReady');
            carrotquest.identify([{op: 'update_or_create', key: 'site_domain', value: location.host}]);
            // отправка User ID
            //if (userId) {
            //    jqueryAjaxPromise({
            //        url: `https://${chatSubDomain}.${chatHostname}/widget_api/get_user_hash`,
            //        data: {
            //            project_id: projectId
            //        },
            //        crossDomain: true
            //    })
            //        .then(({ payload }) => {
            //            carrotquest.auth(userId, payload.hash);
            //        });
            //}

            // Встраивание формы авторизации в чат
            const nativeOnMessage = carrotquest.realtimeServices.onMessage;
            carrotquest.realtimeServices.onMessage = (e) => {
                nativeOnMessage(e);
                let message = null;
                if (e.channel.indexOf('conversation_reply.') !== -1) {
                    message = e.message;
                } else if (e.channel.indexOf('conversation_parts_batch.') !== -1) {
                    message = e.message.parts[0];
                }

                if (message) {
                    if (message.type === 'reply_admin') {
                        if (e.message.random_id) {
                            sendMessageReceipt(e.message.random_id, message.id, message.conversation)
                                .then(({ payload }) => {
                                    // console.log('sendMessageReceipt payload', payload);
                                })
                                .catch((error) => {
                                    console.error(error);
                                });
                        }
                        
                        if (message.body === locale.AUTH_COMMAND) {
                            removeChatForm();
                            const authRequestMessage = message;
                            const formElement = createAuthForm(authRequestMessage);
                        }
                    }
                }
            };

            carrotquest.addCallback('conversation_opened', (data) => {
                const conversationId = data.id;
                const conversationParts = data.parts.filter((part) => ['reply_admin', 'reply_user'].includes(part.type));
                copyChatCss();
                // подождать немного пока элемент подгрузится в списке сообщений, чтобы использовать поиск по тексту
                importFingerprintJSPromise()
                    .then((FingerprintJS) => setDeviceFingerprintPromise(FingerprintJS)) // can return deviceFingerprint
                    .then((deviceFingerprint) => new Promise((resolve, reject) => {
                        const authRequestMessage = findActiveAuthRequest(conversationParts);
                        if (authRequestMessage) {
                            const formElement = createAuthForm(authRequestMessage);
                        }
                        resolve();
                    }))
                    .catch((error) => {
                        console.error(error);
                    });
            });

            carrotquest.addCallback('messenger_opened', (data) => {
                let conversationLock = getCookie('carrotquest_conversation_lock') === 'true';
                console.log('conversationLock', conversationLock);
                if (!conversationLock) {
                    console.log('no conversation lock, open new conversation');
                    // бывает слишком быстро отрабатывает и не создаётся новый диалог. Поэтому пришлось использовать таймаут.
                    setTimeout(function () {
                        carrotquest.messenger.toStateNo();
                        carrotquest.messenger.toStateOpened({ id: 0 });
                    }, 500);
                }
            });

            copyCollapsedChatCss();
            carrotquest.addCallback('messenger_closed', (data) => {
                copyCollapsedChatCss();
            });

            carrotquest.addCallback('user_replied', (data) => {
                // установка куки для блокировки создания новых чатов. Когда нет новых сообщений и кука истекает, при открытии виджета создаётся новый чат (полагаем, что чат был закрыт)
                console.log('user_replied', data);
                setCookie('carrotquest_conversation_lock', true, { 'expires': 6 * 60 * 60, path: '/', domain: `.${projectDomain}`, secure: true, samesite: 'None' });
                // setCookie('carrotquest_conversation_lock', true, { 'expires': 1 * 24 * 60 * 60, path: '/', domain: `.${projectDomain}`, secure: true, samesite: 'None' });
            });

            carrotquest.addCallback('conversation_started', (data) => {
                console.log('conversation_started', data);
                // установка куки для блокировки создания новых чатов. Когда нет новых сообщений и кука истекает, при открытии виджета создаётся новый чат (полагаем, что чат был закрыт)
                setCookie('carrotquest_conversation_lock', true, { 'expires': 6 * 60 * 60, path: '/', domain: `.${projectDomain}`, secure: true, samesite: 'None' });
                // setCookie('carrotquest_conversation_lock', true, { 'expires': 1 * 24 * 60 * 60, path: '/', domain: `.${projectDomain}`, secure: true, samesite: 'None' });
            });

            // carrotquest.addCallback('messenger_opened', (data) => {
            //     console.log('messenger_opened', data);
            // });
            
        });
    };
    // if (document.readyState !== "loading") {
        // console.log('readyState initCarrotQuestExtensions');
        // initCarrotQuestExtensions();
    // } else {
        // document.addEventListener('DOMContentLoaded', () => {
            // console.log('DOMContentLoaded initCarrotQuestExtensions');
            // initCarrotQuestExtensions();
        // });
        // setTimeout(() => {
            // console.log('onReadyCallbacks timeout 5s', carrotquest.onReadyCallbacks);
            // // initCarrotQuestExtensions();
        // }, 5000);
    // }
    const onCarrotQuestReadyPromise = () => {
        return new Promise((resolve, reject) => {
            if (carrotquest && carrotquest.ready) {
                resolve(carrotquest);
            }
            reject();
        })
    };
    retry(onCarrotQuestReadyPromise, 1000, 10)
        .then(() => {
            initCarrotQuestExtensions();
        })
        .catch((error) => {
            console.error(error);
        });
})();