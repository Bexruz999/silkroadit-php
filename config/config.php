<?php

// Блок с общими данными, если не указано инное в самом массиве
$commonLanguage = [
    'siteUrl' => 'silkroadit.net',
    'phone' => [
        'text' => '+7 (777) 861-00-63',
        'link' => 'https://wa.me/77778610063',
    ],
    'phone2' => [
        'text' => '+7 (771) 217 14 41',
        'link' => 'https://wa.me/77712171441',
    ],
    'email' => [
        'text' => 'info@silkroadit.net',
        'link' => 'info@silkroadit.net',
    ],

    'insta' => [
        'text' => '@silkr.parts',
        'link' => '@silkr.parts',
    ],
    'company' => 'ТОО «Silk Road IT»',
    'bin' => 'БИН 220640001531',
    'address' => 'Республика Казахстан, ЗКО, 090005г. <br> Уральск  ул. Джаныбекская, дом 18/2 кабинет 7',
];

$language = [
    'ru' => [
        'language' => 'Русский',
        'title' => 'VPS и Выделенные серверы',
        'hostingBusinessClass' => 'Хостинг бизнес-класса',
        'doBusiness' => 'Занимайтесь бизнесом, а управление хостингом мы возьмем на себя',
        'services' => [
            [
                'title' => 'Виртуальный<br> сервер',
                'price' => 'от 57 000 ╤ <span class="front-services__item-price-period">/мес</span>',
                'text' => 'подходит для сайтов<br>с высокой нагрузкой',
            ],
            [
                'title' => 'Облачный<br> сервер',
                'price' => 'от 110 000 ╤ <span class="front-services__item-price-period">/мес</span>',
                'text' => 'отказоустойчивое<br> решение',
            ],
            [
                'title' => 'Выделенный<br> сервер',
                'price' => 'от 250 000 ╤ <span class="front-services__item-price-period">/мес</span>',
                'text' => 'для проектов любых<br> размеров',
            ],
        ],
        'protectYourData' => '<strong>Защитите свои данные от потери</strong> — подключите резервное копирование. Диск для бэкапов (резервного копирования) хранит резервную копию данных Вашего сервера. Это поможет сохранить бизнес при потере данных с сервера.',
        'ISPmanagerControlPanel' => 'Панель управления ISPmanager',
        'Introduction' => '
            Приветствуем Вас в нашей инновационной компании, специализирующейся на IT-решениях для бизнеса!
            Благодарим, что обратились к нам. Уже более 7 лет занимаемся оказанием услуг в данной сфере.
            На нашем счету уже около 150 проектов.Будем рады долгим и честным партнёрским отношениям.
            Мы готовы помочь вам повысить эффективность и конкурентоспособность Вашего предприятия в короткие сроки и по доступной цене.
            ',
        'Blocktitle' => 'Наши преимущества',
        'Blockh1' => 'Круглосуточная поддержка',
        'Blockh2' => 'Оперативная доставка',
        'Blockh3' => 'Полностью белая схема работы',
        'Blockh4' => 'Гибкая система лояльности',
        'Blockp1' => 'Осуществляем поддержку наших клиентов в круглосуточном формате семь дней в неделю',
        'Blockp2' => 'Доставляем оборудование для реализации проекта точно в срок без задержек.',
        'Blockp3' => 'Полностью белая система работы позволяет пройти проверку любой службы безопасности, включая гос. структуры',
        'Blockp4' => 'Внедрена гибкая система лояльности с динамической скидкой для различных категорий партнеров и клиентов',

        'primiertitle' => 'Пример нашей работы по поставке оборудования',
        'primierdesc1' => 'Мы осуществляем поставки серверного, сетевого, компьютерного, оборудования и офисной техники ведущих мировых фирм: MI, HP, DELL, CISCO, XEROX, SHIP, SVC, ASUS, ASROCK, KINGSTON, DXRASER, HYPER, GYGABYTE, PALIT, RAZER, TP-LINK, PLANET, EUROPRINT, D-LINK, WD, DELUX, WACOM, MICROLAB и другие.',
        'primierdesc2' => 'А также, лицензионное программное обеспечение от ведущих производителей: MICROSOFT, KASPERSKY, ESSET, VMWARE ORACLE, ACRONIS, WINRAR, AVEVA, 1C, RADHAT, TRAFFIC INSPECTOR, KERIO, SYMANTEC, COREL, ADOBE, AUTOCAD и т.д.',
        'primiertext1' => 'Всегда в наличии и на заказ большой выбор серверных комплектующих, запчастей, расходных материалов для офисной техники.',
        'primiertext2' => 'Поставка любого нестандартного оборудованияна заказ, поиск оборудования согласно Ваших требований и спецификаций',
        'primiertext3' => 'Персональный менеджер закреплен закаждой компанией для оперативной работы и индивидуальных запросов клиентов',
        'primiertext4' => 'Цены,сроки поставки обсуждаются индивидуально',

        'easyToManage' => 'Через панель легко управлять хостингом даже начинающему пользователю.',
        'commandLineKnowledge' => 'Управление хостингом без знаний командной строки',
        'allActions' => 'Все действия доступны из окна браузера: настройка пользователей, подключение доменов, настройка почты и резервных копий, управление файлами и пользователями FTP и др.',
        'installingCMS' => 'Установка CMS из панели в 3 клика',
        'needToCreateSite' => 'Установите нужную Вам CMS для создания сайта: Wordpress, Joomla или Drupal прямо из панели и приступайте к созданию сайта.',
        'DDoSProtection' => 'Защита от DDoS-атак',
        'filterIncomingTraffic' => 'Фильтруем входящий трафик, чтобы на сайт попадали только реальные клиенты. Вы не заметите атаки: хакеры не получат доступ к ресурсам сервера и не спровоцируют отказ системы. Сайт продолжит работать без изменений.',
        'connectAChannel' => 'Подключим канал с защитой от DDoS ёмкостью от 1 Мбит/сек на виртуальный сервер. Для выделенного сервера — от 5 Мбит/сек за 1250 тенге/мес. Защита подавляет атаки на 2, 3, 4 и 7-м уровнях по модели OSI.',
        'provideServers' => 'Предоставляем серверы в трёх дата-центрах в Москве и Германии',
        'areHosted' => '<span class="open__bold">Виртуальные серверы</span> размещены в дата-центрах WebDC и IXcellerate в Москве и имеют стабильный низкий пинг по всей России.',
        'areAvailable' => '<span class="open__bold">Выделенные серверы</span> доступны для аренды на площадках WebDC и IXcellerate в Москве и дата-центре Hetzner в Нюрнберге, Германия. Каждый дата-центр имеет хорошую связность благодаря подключению нескольких каналов связи и точек обмена трафиком. Сеть построена таким образом, что отключение одного из каналов никак не скажется на скорости передачи/получения данных: дополнительные каналы возьмут нагрузку на себя.',
        'serversAreBasedOn' => 'Серверы работают на базе процессоров <span class="open__bold">Intel</span>, <span class="open__bold">AMD</span>, дисков <span class="open__bold">Samsung</span> и <span class="open__bold">Hitachi </span>серверной серии и оперативной памяти поколений <span class="open__bold">DDR4</span>.',
        'ourServices' => [
            'title' => 'Наши услуги',
            'items' => [
                [
                    'title' => 'Монтаж СКС',
                    'text' => '<p class="front-choose__text">
                                    Наша компания на профессиональном уровне оказывает все услуги, которые предполагает монтаж СКС. Сотрудничество организовано по такой схеме: после оформления заказа создается рабочий проект, который утверждает заказчик, далее начинается собственно установка сети. Все работы выполняют специалисты высокого класса, которые постоянно повышают свою квалификацию в такой сфере, как монтаж компьютерных сетей и проходят соответствующее обучение.
                                </p>
                                <p class="front-choose__text">
                                    От того, насколько профессионально произведен монтаж ЛВС, напрямую зависит, как стабильно будет работать Ваше предприятие. Обращаясь к нам, Вы получаете гарантию качественного выполнения работ. Как правило, в такой сфере, как прокладка сети, приоритетными для заказчика являются три момента: качество, срок и цена. У нас все эти 3 фактора находятся в оптимальном соотношении.
                                </p>
                                <p class="front-choose__text">
                                    Прокладка сети специалистами компании выполняется качественно благодаря профессионально разработанному проекту и четкому следованию ему в процессе установки. Мы имеем все необходимые лицензии, которые подразумевает работа в такой сфере услуг, как прокладка компьютерных сетей. При монтаже мы всегда руководствуемся существующими стандартами и нормативами, а весь процесс работы тщательно отслеживается системой контроля качества.
                                </p>',
                    'price' => 'от 230 000 ╤ / мес.',
                ],
                [
                    'title' => 'Виртуальный сервер VPS',
                    'text' => '<p class="front-choose__text">Виртуальный сервер VPS — услуга по предоставлению выделенной части
                                    ресурсов сервера.
                                    На одном физическом сервере размещается несколько виртуальных выделенных серверов, ресурсы
                                    которых четко
                                    ограниченны в рамках выбранной конфигурации. Максимальные технические характеристики
                                    виртуального сервера: 8
                                    ядер процессора Intel Xeon с частотой в 2.4 ГГц, 32 Гб оперативной памяти и 500 Гб HDD-диска
                                    или 200 Гб SSD.
                                </p>
                                <p class="front-choose__text">Виртуальный сервер подойдет малому и среднему интернет-бизнесу для
                                    веб-проектов,
                                    работы серверного ПО: почтового сервера, сервера баз данных, финансового ПО.
                                </p>
                                <p class="front-choose__text">Максимальная конфигурация сервера позволит запустить на нем
                                    несколько крупных
                                    веб-сайтов или интернет-магазинов, CRM-систему, ресурсоемкий почтовый сервер с большой
                                    нагрузкой трафика, любое
                                    финансовое или бухгалтерское ПО, среды разработки и бизнес-проектирования.
                                </p>',
                    'price' => 'от 57 000 ╤ / мес.',
                ],
                [
                    'title' => 'Отказоустойчивый облачный сервер',
                    'text' => '<p class="front-choose__text">Облачный сервер организован как и виртуальный выделенный сервер: в
                                    распоряжении
                                    пользователя выбранная часть ресурсов физического сервера. Отказоустойчивость облачного
                                    сервера обеспечивается
                                    за счет дублирования данных сервера на другом вычислительном узле. Оба узла связаны между
                                    собой высокоскоростной
                                    сетью с пропускной способностью 56 Гбит/с. В случае неполадок дублирующий сервер моментально
                                    запускается и
                                    работа сайта не прекращается — пользователи не замечают технических проблем. Серверы
                                    работают на SSD-дисках,
                                    сайты на них открываются быстрее, чем на обычных HDD.
                                </p>
                                <p class="front-choose__text">Максимальная конфигурация облачного сервера: 16 ядер процессора
                                    Intel Xeon E5-2630 с
                                    частотой в 3.2 ГГц, оперативная память в 64 Гб и SSD-диск на 1000 Гб. Этого достаточно для
                                    работы крупных
                                    интернет-магазинов с непрерывной круглосуточной нагрузкой, корпоративных порталов
                                    международных компаний,
                                    почтовых серверов, серверов баз данных, CRM-систем и др.
                                </p>',
                    'price' => 'от 110 000 ╤ / мес.',
                ],
                [
                    'title' => 'Выделенный сервер',
                    'text' => '<p class="front-choose__text">Выделенный сервер — услуга аренды отдельного физического сервера в
                                    нашем дата-центре, когда пользователю принадлежат все ресурсы сервера.
                                </p>
                                <p class="front-choose__text">Выделенный сервер подходит для разных задач: от размещения
                                    небольшого
                                    интернет-магазина до запуска сложных высоконагруженных систем. Отсутствие «соседей» на
                                    сервере дает полную
                                    свободу действий — только Вы и Ваши пользователи влияют на нагрузку сервера.
                                </p>
                                <p class="front-choose__text">
                                    Для организации хостинга выделенных серверов мы используем новое серверное оборудование
                                    и программное обеспечение от ведущих IT-компаний мира:
                                    Intel, AMD, Microsoft, Juniper Networks, ISPsystem.
                                </p>',
                    'price' => 'от 250 000 ╤ / мес.',
                ],
                [
                    'title' => 'Автоматизация бизнеса на базе 1С',
                    'text' => '<p>Упрощайте и оптимизируйте свои бизнес-процессы с помощью нашей экспертизы в области 1С. Мы разработаем индивидуальное решение, удовлетворяющее потребностям Вашего предприятия.</p>',
                    'price' => '',
                ],
                [
                    'title' => 'Монтаж и пусконаладка серверов',
                    'text' => '<p>Обеспечьте стабильную работу Вашей IT-инфраструктуры благодаря нашим профессионалам. Мы предлагаем комплексные услуги по установке и настройке серверов, чтобы ваша система функционировала без сбоев.</p>',
                    'price' => '',
                ],
                [
                    'title' => 'Бесшовный роуминг Wi-Fi для предприятий',
                    'text' => '<p>Предоставьте своим клиентам и сотрудникам непрерывный доступ к высокоскоростному Wi-Fi в любой точке Вашего предприятия. Мы разработаем и установим интеллектуальную систему, обеспечивающую бесперебойное подключение.</p>',
                    'price' => '',
                ],
                [
                    'title' => 'Облачные решения',
                    'text' => '<p>Перенесите свои данные и приложения в безопасное и гибкое облако. Мы поможем Вам выбрать и настроить оптимальное облачное решение, а также обеспечим миграцию и поддержку Вашей инфраструктуры.</p>',
                    'price' => '',
                ],
                [
                    'title' => 'Компьютерная периферия',
                    'text' => '<p>Обеспечьте своих сотрудников современными и надежными компьютерными устройствами. Мы предлагаем широкий выбор компьютерной периферии, от ноутбуков до принтеров, которые отвечают самым высоким стандартам качества.</p>',
                    'price' => '',
                ],
                [
                    'title' => 'Социальный медиа-маркетинг',
                    'text' => '<p>Привлекайте новых клиентов и укрепляйте свою онлайн-репутацию с помощью наших услуг по продвижению в социальных сетях, таких как Facebook и Instagram. Наши специалисты помогут Вам создать эффективные кампании и добиться максимального вовлечения Вашей целевой аудитории.</p>',
                    'price' => '',
                ],
            ],
        ],
        'more' => 'Подробнее',
        'haveQuestions' => 'Есть вопросы? Звоните!',
        'submitForm' => [
            'phone' => 'Телефон'
        ],
        'paymentMethods' => 'Способы оплаты',
        'termsOfUse' => 'Условия использования',
        'securityGuarantees' => 'Гарантии безопасности',
        'privacyPolicy' => 'Политика конфиденциальности',
        'refundPolicy' => 'Политика возврата денежных средств',
        'contacts' => 'Контакты',
    ],
    'en' => [
        'language' => 'English',
        'title' => 'VPS and Dedicated Servers',
        'hostingBusinessClass' => 'Hosting business class',
        'doBusiness' => 'Do business and manage we will take care of the hosting',
        'services' => [
            [
                'title' => 'Virtual<br> server',
                'price' => 'from 57,000 ╤ <span class="front-services__item-price-period">/month</span>',
                'text' => 'suitable for high traffic<br>sites',
            ],
            [
                'title' => 'Cloud<br> server',
                'price' => 'from 110,000 ╤ <span class="front-services__item-price-period">/month</span>',
                'text' => 'failsafe<br> solution',
            ],
            [
                'title' => 'Dedicated<br> server',
                'price' => 'from 250,000 ╤ <span class="front-services__item-price-period">/month</span>',
                'text' => 'for projects of any<br> sizes',
            ],
        ],
        'protectYourData' => '<strong>Protect your data from loss</strong> - enable backup. The backup disk stores a backup copy of your server data. This will help save business in case of data loss from the server.',
        'ISPmanagerControlPanel' => 'ISPmanager control panel',
        'Introduction' => '
            Welcome to our innovative business IT solutions company!
            Thank you for contacting us. We have been providing services in this area for more than 7 years.
            We already have about 150 projects on our account. We look forward to long and honest partnerships.
            We are ready to help you improve the efficiency and competitiveness of your enterprise in a short time and at an affordable price.
            ',
        'Blocktitle' => 'Our advantages',
        'Blockh1' => '24/7 support',
        'Blockh2' => 'Prompt delivery',
        'Blockh3' => 'Completely white scheme of work',
        'Blockh4' => 'Flexible loyalty system',
        'Blockp1' => 'We provide support to our customers around the clock, seven days a week',
        'Blockp2' => 'We deliver equipment for the implementation of the project just in time without delay.',
        'Blockp3' => 'A completely white system of work allows you to pass the test of any security service, including the state. structures',
        'Blockp4' => 'Implemented a flexible loyalty system with a dynamic discount for various categories of partners and customers',

        'primiertitle' => 'An example of our work on the supply of equipment',
        'primierdesc1' => 'We supply server, network, computer, equipment and office equipment from leading world companies: MI, HP, DELL, CISCO, XEROX, SHIP, SVC, ASUS, ASROCK, KINGSTON, DXRASER, HYPER, GYGABYTE, PALIT, RAZER, TP-LINK , PLANET, EUROPRINT, D-LINK, WD, DELUX, WACOM, MICROLAB and others.',
        'primierdesc2' => 'And also, licensed software from leading manufacturers: MICROSOFT, KASPERSKY, ESSET, VMWARE ORACLE, ACRONIS, WINRAR, AVEVA, 1C, RADHAT, TRAFFIC INSPECTOR, KERIO, SYMANTEC, COREL, ADOBE, AUTOCAD, etc.',
        'primiertext1' => 'Always in stock and to order a large selection of server components, spare parts, consumables for office equipment.',
        'primiertext2' => 'Delivery of any non-standard equipment to order, search for equipment according to your requirements and specifications',
        'primiertext3' => 'A personal manager is assigned to each company for operational work and individual customer requests',
        'primiertext4' => 'Prices, delivery times are discussed individually',

        'easyToManage' => 'Through the panel it is easy to manage hosting even for a novice user.',
        'commandLineKnowledge' => 'Hosting management without command line knowledge',
        'allActions' => 'All actions are available from the browser window: user setup, domain connection, mail setup and backups, file and FTP user management, etc.',
        'installingCMS' => 'Installing CMS from the panel in 3 clicks',
        'needToCreateSite' => 'Install the CMS you need to create a site: Wordpress, Joomla or Drupal right from the panel and start creating a site.',
        'DDoSProtection' => 'DDoS Protection',
        'filterIncomingTraffic' => 'We filter incoming traffic so that only real customers get to the site. You will not notice the attack: hackers will not gain access to server resources and will not provoke a system failure. The site will continue to work without changes.',
        'connectAChannel' => 'Let`s connect a channel with DDoS protection with a capacity of 1 Mbps or more to a virtual server. For a dedicated server - from 5 Mbps for 1250 rubles / month. Protection suppresses attacks at 2, 3, 4 and 7 levels according to the OSI model.',
        'provideServers' => 'We provide servers in three data centers in Moscow and Germany',
        'areHosted' => '<span class="open__bold">Virtual servers</span> are hosted in WebDC and IXcellerate data centers in Moscow and have a stable low ping throughout Russia.',
        'areAvailable' => '<span class="open__bold">Dedicated servers</span> are available for rent at WebDC and IXcellerate sites in Moscow and the Hetzner data center in Nuremberg, Germany. Each data center has good connectivity due to the connection of several communication channels and traffic exchange points. The network is built in such a way that the disconnection of one of the channels will not affect the speed of data transmission/reception in any way: additional channels will take over the load.',
        'serversAreBasedOn' => 'The servers are based on <span class="open__bold">Intel</span>, <span class="open__bold">AMD</span> processors, drivers <span class="open__bold">Samsung</span> and <span class="open__bold">Hitachi </span> server series and RAM generations <span class="open__bold">DDR4</span>',
        'ourServices' => [
            'title' => 'Our services',
            'items' => [
                [
                    'title' => 'Create a website of any type and complexity',
                    'text' => '<p class="front-choose_text">
                                     There is only one chance to make a good impression on the user. We decide whether we like the site or not in just 10 seconds. Therefore, the convenience and quality of the resource directly affect the number of online sales. It is important to keep the attention of the audience, so we carefully consider the structure of the site, design and content. As a result, the site is able to significantly increase the flow of customers.
                                 </p>
                                 <p class="front-choose_text">
                                     We provide a full cycle of website development services: design, development of mobile and adaptive design, implementation of various external systems.
                                 </p>
                                 <p class="front-choose_text">
                                     Today, the site to a large extent determines the status of the company, the presence of its own multifunctional site has become a necessity for everyone.
                                 </p>
                                 <p class="front-choose_text">
                                     We will find the right solutions for you and users.
                                 </p>',
                    'price' => 'from 150 000 ╤ / mo',
                ],
                [
                    'title' => 'Installation of Structured cabling',
                    'text' => '<p class="front-choose__text">
                                Our company professionally provides all services that involve the installation of SCS. Cooperation is organized according to the following scheme: after placing an order, a working draft is created, which is approved by the customer, then the actual installation of the network begins. All work is performed by high-class specialists who constantly improve their skills in such a field as the installation of computer networks and undergo appropriate training.
                            </p>
                            <p class="front-choose_text">
                                How professionally the installation of the LAN is made directly depends on how stable your enterprise will work. Turning to us, you get a guarantee of quality work. As a rule, in such a field as laying a network, three points are priority for the customer: quality, time and price. We have all these 3 factors in the optimal ratio.
                            </p>
                            <p class="front-choose_text">
                                The laying of the network by the company`s specialists is carried out with high quality thanks to a professionally developed project and strict adherence to it during the installation process. We have all the necessary licenses that work in such a service sector as laying computer networks implies. During installation, we are always guided by existing standards and regulations, and the entire work process is carefully monitored by a quality control system.
                            </p>',
                    'price' => 'from 230,000 ╤ / mo',
                ],
                [
                    'title' => 'VPS Virtual Server',
                    'text' => '<p class="front-choose__text">VPS Virtual Server - Dedicated Part Service
                                     server resources.
                                     One physical server hosts several virtual dedicated servers, resources
                                     which are clearly
                                     limited within the selected configuration. Maximum Specifications
                                     virtual server: 8
                                     2.4 GHz Intel Xeon processor cores, 32 GB RAM and 500 GB HDD
                                     or 200 GB SSD.
                                 </p>
                                 <p class="front-choose__text">The virtual server is suitable for small and medium-sized Internet businesses for
                                     web projects,
                                     operation of server software: mail server, database server, financial software.
                                 </p>
                                 <p class="front-choose__text">Maximum server configuration will allow running on it
                                     several large
                                     websites or online stores, a CRM system, a resource-intensive mail server with a large
                                     traffic load, any
                                     financial or accounting software, development and business design environments.
                                 </p>',
                    'price' => 'from 57,000 ╤ / mo',
                ],
                [
                    'title' => 'Failover cloud server',
                    'text' => '<p class="front-choose__text">The cloud server is organized like a virtual private server: in
                                     disposal
                                     the user`s selected portion of the physical server`s resources. Cloud fault tolerance
                                     server provided
                                     by duplicating server data on another computing node. Both nodes are connected
                                     a high-speed
                                     network with a bandwidth of 56 Gbps. In the event of a problem, the backup server is instantly
                                     starts up and
                                     the site does not stop working - users do not notice technical problems. Servers
                                     work on SSD drives,
                                     sites on them open faster than on conventional HDDs.
                                 </p>
                                 <p class="front-choose__text">Maximum cloud server configuration: 16 CPU cores
                                     Intel Xeon E5-2630 with
                                     3.2 GHz, 64 GB RAM and 1000 GB SSD. This is enough for
                                     major
                                     online stores with continuous round-the-clock load, corporate portals
                                     international companies,
                                     mail servers, database servers, CRM systems, etc.
                                 </p>',
                     'price' => 'from 110,000 ╤ / mo',
                ],
                [
                    'title' => 'Dedicated server',
                    'text' => '<p class="front-choose__text">Dedicated server — a service for renting a separate physical server in
                                     our data center, when the user owns all the resources of the server.
                                 </p>
                                 <p class="front-choose__text">A dedicated server is suitable for a variety of tasks: from hosting
                                     small
                                     online store before the launch of complex high-load systems. Lack of "neighbors"
                                     server gives full
                                     freedom of action - only you and your users affect the server load.
                                 </p>
                                 <p class="front-choose_text">
                                     We use new server hardware to organize dedicated server hosting
                                     and software from the world`s leading IT companies:
                                     Intel, AMD, Microsoft, Juniper Networks, ISPsystem.
                                 </p>',
                     'price' => 'from 250,000 ╤ / mo',
                ],
                [
                    'title' => 'Business automation based on 1C',
                    'text' => '<p>Simplify and optimize your business processes with our 1C expertise. We will develop an individual solution that meets the needs of your enterprise.</p>',
                    'price' => '',
                ],
                [
                    'title' => 'Installation and commissioning of servers',
                    'text' => '<p>Ensure the stable operation of your IT infrastructure thanks to our professionals. We offer comprehensive server installation and configuration services to keep your system running smoothly.</p>',
                    'price' => '',
                ],
                [
                    'title' => 'Seamless Wi-Fi Roaming for Enterprises',
                    'text' => '<p>Provide your customers and employees with uninterrupted high-speed Wi-Fi access anywhere in your business. We will design and install an intelligent system that ensures uninterrupted connectivity.</p>',
                    'price' => '',
                ],
                [
                    'title' => 'Cloud Solutions',
                    'text' => '<p>Move your data and applications to a secure and flexible cloud. We will help you choose and configure the optimal cloud solution, as well as provide migration and support for your infrastructure.</p>',
                    'price' => '',
                ],
                [
                    'title' => 'Computer Peripherals',
                    'text' => '<p>Provide your employees with modern and reliable computing devices. We offer a wide range of computer peripherals, from laptops to printers, that meet the highest quality standards.</p>',
                    'price' => '',
                ],
                [
                    'title' => 'Social media marketing',
                    'text' => '<p>Attract new customers and build your online reputation with our social media promotion services like Facebook and Instagram. Our specialists will help you create effective campaigns and achieve maximum engagement of your target audience.</p>',
                    'price' => '',
                ],
            ],
        ],
        'more' => 'More',
        'haveQuestions' => 'Have questions? Call!',
        'submitForm' => [
            'phone' => 'Phone'
        ],
        'paymentMethods' => 'Payment methods',
        'termsOfUse' => 'Terms of use',
        'securityGuarantees' => 'Security guarantees',
        'privacyPolicy' => 'Privacy Policy',
        'refundPolicy' => 'Refund Policy',
        'contacts' => 'Contacts',
    ],
    'de' => [
        'language' => 'Deutsch',
        'title' => 'VPS und dedizierte Server',
        'hostingBusinessClass' => 'Business Class Hosting',
        'doBusiness' => 'Machen Sie Geschäfte und wir kümmern uns um das Hosting',
        'services' => [
            [
                'title' => 'Virtual<br> server',
                'price' => 'ab 57.000 ╤ <span class="front-services__item-price-period">/Monat</span>',
                'text' => 'geeignet für stark frequentierte<br>Seiten',
            ],
            [
                'title' => 'Cloud<br> server',
                'price' => 'ab 110.000 ╤ <span class="front-services__item-price-period">/Monat</span>',
                'text' => 'ausfallsichere<br>Lösung',
            ],
            [
                'title' => 'Dedizierter<br> Server',
                'price' => 'ab 250.000 ╤ <span class="front-services__item-price-period">/Monat</span>',
                'text' => 'für Projekte jeder<br>Größe',
            ],
        ],
        'protectYourData' => '<strong>Schützen Sie Ihre Daten vor Verlust</strong> – aktivieren Sie die Sicherung. Auf der Sicherungsdiskette wird eine Sicherungskopie Ihrer Serverdaten gespeichert. Dies wird dazu beitragen, das Geschäft im Falle eines Datenverlusts vom Server zu retten.',
        'ISPmanagerControlPanel' => 'ISPmanager Control Panel',
        'Introduction' => '
            Willkommen bei unserem innovativen Unternehmen für Business-IT-Lösungen!
            Danke, dass Sie uns kontaktiert haben. Seit mehr als 7 Jahren bieten wir Dienstleistungen in diesem Bereich an.
            Wir haben bereits rund 150 Projekte auf unserem Konto und freuen uns auf eine lange und ehrliche Partnerschaft.
            Wir sind bereit, Ihnen dabei zu helfen, die Effizienz und Wettbewerbsfähigkeit Ihres Unternehmens in kurzer Zeit und zu einem erschwinglichen Preis zu verbessern.
            ',

        'Blocktitle' => 'unsere Vorteile',
        'Blockh1' => 'Support rund um die Uhr',
        'Blockh2' => 'Unverzügliche Lieferung',
        'Blockh3' => 'Komplett weißes Arbeitsschema',
        'Blockh4' => 'Flexibles Treuesystem',
        'Blockp1' => 'Wir betreuen unsere Kunden rund um die Uhr, sieben Tage die Woche',
        'Blockp2' => 'Wir liefern die Ausrüstung für die Umsetzung des Projekts pünktlich und ohne Verzögerung.',
        'Blockp3' => 'Ein vollständig weißes Arbeitssystem ermöglicht es Ihnen, die Prüfung jedes Sicherheitsdienstes, einschließlich des Staates, zu bestehen. Strukturen',
        'Blockp4' => 'Implementierung eines flexiblen Treuesystems mit dynamischem Rabatt für verschiedene Kategorien von Partnern und Kunden',

        'primiertitle' => 'Ein Beispiel unserer Arbeit zur Lieferung von Ausrüstung',
        'primierdesc1' => 'Wir liefern Server, Netzwerk, Computer, Ausrüstung und Büroausrüstung von weltweit führenden Unternehmen: MI, HP, DELL, CISCO, XEROX, SHIP, SVC, ASUS, ASROCK, KINGSTON, DXRASER, HYPER, GYGABYTE, PALIT, RAZER, TP-LINK , PLANET, EUROPRINT, D-LINK, WD, DELUX, WACOM, MICROLAB und andere.',
        'primierdesc2' => 'Und auch lizenzierte Software von führenden Herstellern: MICROSOFT, KASPERSKY, ESSET, VMWARE ORACLE, ACRONIS, WINRAR, AVEVA, 1C, RADHAT, TRAFFIC INSPECTOR, KERIO, SYMANTEC, COREL, ADOBE, AUTOCAD usw.',
        'primiertext1' => 'Immer auf Lager und zum Bestellen einer großen Auswahl an Serverkomponenten, Ersatzteilen und Verbrauchsmaterialien für Bürogeräte.',
        'primiertext2' => 'Lieferung von nicht standardmäßigen Geräten auf Bestellung, Suche nach Geräten entsprechend Ihren Anforderungen und Spezifikationen',
        'primiertext3' => 'Für die operative Arbeit und individuelle Kundenwünsche ist jedem Unternehmen ein persönlicher Betreuer zugeordnet',
        'primiertext4' => 'Preise, Lieferzeiten werden individuell besprochen',

        'easyToManage' => 'Selbst ein unerfahrener Benutzer kann das Hosting problemlos über das Panel verwalten.',
        'commandLineKnowledge' => 'Hosting ohne Befehlszeilenkenntnisse verwalten',
        'allActions' => 'Alle Aktionen sind über ein Browserfenster verfügbar: Benutzereinrichtung, Domänenverbindung, E-Mail- und Backup-Einrichtung, Datei- und FTP-Benutzerverwaltung usw.',
        'installingCMS' => 'CMS vom Panel mit 3 Klicks installieren',
        'needToCreateSite' => 'Installieren Sie das CMS, das Sie zum Erstellen einer Site benötigen: Wordpress, Joomla oder Drupal direkt aus dem Panel und beginnen Sie mit der Erstellung einer Site.',
        'DDoSProtection' => 'DDoS-Schutz',
        'filterIncomingTraffic' => 'Eingehenden Datenverkehr filtern, sodass nur echte Kunden auf die Website gelangen. Sie werden den Angriff nicht bemerken: Hacker erhalten keinen Zugriff auf Serverressourcen und provozieren keinen Systemausfall. Die Seite wird ohne Änderungen weiterhin funktionieren.',
        'connectAChannel' => 'Verbinden Sie einen Anti-DDoS-Kanal mit einer Kapazität von 1 Mbit/s oder mehr mit einem virtuellen Server. Für einen dedizierten Server – ab 5 Mbit/s für 1250 Rubel/Monat. Der Schutz unterdrückt Angriffe auf den Ebenen 2, 3, 4 und 7 des OSI-Modells.',
        'provideServers' => 'Wir stellen Server in drei Rechenzentren in Moskau und Deutschland zur Verfügung',
        'areHosted' => '<span class="open__bold">Virtuelle Server</span> werden in WebDC- und IXcellerate-Rechenzentren in Moskau gehostet und haben in ganz Russland einen stabil niedrigen Ping.',
        'areAvailable' => '<span class="open__bold">Dedizierte Server</span> können bei WebDC und IXcellerate in Moskau und im Hetzner-Rechenzentrum in Nürnberg gemietet werden. Jedes Rechenzentrum verfügt aufgrund der Verbindung mehrerer Kommunikationskanäle und Verkehrsaustauschpunkte über eine gute Konnektivität. Das Netzwerk ist so aufgebaut, dass die Trennung eines der Kanäle keinen Einfluss auf die Geschwindigkeit der Datenübertragung/-empfang hat: zusätzliche Kanäle übernehmen die Last.',
        'serversAreBasedOn' => 'Server basieren auf <span class="open__bold">Intel</span>-, <span class="open__bold">AMD</span>-Prozessoren, <span class="open__bold">Samsung</span> span> und <span class="open__bold">Hitachi </span>Serverserien und RAM-Generationen <span class="open__bold">DDR4</span>.',
        'ourServices' => [
            'title' => 'Unsere Dienstleistungen',
            'items' => [
                [
                    'title' => 'Erstellen Sie eine Website beliebiger Art und Komplexität',
                    'text' => '<p class="front-choose_text">
                                     Es gibt nur eine Chance, beim Benutzer einen guten Eindruck zu hinterlassen. Wir entscheiden in nur 10 Sekunden, ob uns die Seite gefällt oder nicht. Daher wirken sich Komfort und Qualität der Ressource direkt auf die Anzahl der Online-Verkäufe aus. Es ist wichtig, die Aufmerksamkeit des Publikums aufrechtzuerhalten. Deshalb prüfen wir sorgfältig die Struktur der Website, das Design und den Inhalt. Dadurch ist die Seite in der Lage, den Kundenstrom deutlich zu steigern.
                                 </p>
                                 <p class="front-choose_text">
                                     Wir bieten einen vollständigen Zyklus von Website-Entwicklungsdienstleistungen an: Design, Entwicklung von mobilem und adaptivem Design, Implementierung verschiedener externer Systeme.
                                 </p>
                                 <p class="front-choose_text">
                                     Heute bestimmt der Standort maßgeblich den Status des Unternehmens, die Präsenz eines eigenen multifunktionalen Standortes ist für jeden zur Notwendigkeit geworden.
                                 </p>
                                 <p class="front-choose_text">
                                     Wir finden die passenden Lösungen für Sie und Anwender.
                                 </p>',
                    'price' => 'ab 150.000 ╤ / Monat',
                ],
                [
                    'title' => 'Installation von SCS',
                    'text' => '<p class="front-choose__text">
                                     Unser Unternehmen erbringt professionell alle Dienstleistungen rund um die Installation von SCS. Die Zusammenarbeit ist nach folgendem Schema organisiert: Nach der Auftragserteilung wird ein Arbeitsentwurf erstellt, der vom Kunden genehmigt wird, dann beginnt die eigentliche Installation des Netzwerks. Alle Arbeiten werden von erstklassigen Spezialisten ausgeführt, die ihre Fähigkeiten beispielsweise in der Installation von Computernetzwerken ständig verbessern und entsprechende Schulungen absolvieren.
                                 </p>
                                 <p class="front-choose_text">
                                     Wie professionell die Installation des LANs durchgeführt wird, hängt direkt davon ab, wie stabil Ihr Unternehmen arbeiten wird. Wenn Sie sich an uns wenden, erhalten Sie die Garantie für qualitativ hochwertige Arbeit. In einem Bereich wie der Verlegung eines Netzwerks stehen für den Kunden in der Regel drei Punkte im Vordergrund: Qualität, Zeit und Preis. Wir haben alle diese 3 Faktoren im optimalen Verhältnis.
                                 </p>
                                 <p class="front-choose_text">
                                     Die Verlegung des Netzwerks durch die Spezialisten des Unternehmens erfolgt dank eines professionell ausgearbeiteten Projekts und dessen strikter Einhaltung während des Installationsprozesses mit hoher Qualität. Wir verfügen über alle notwendigen Lizenzen, die in einem solchen Dienstleistungssektor wie der Verlegung von Computernetzwerken erforderlich sind. Bei der Montage orientieren wir uns stets an den bestehenden Normen und Vorschriften und der gesamte Arbeitsablauf wird durch ein Qualitätskontrollsystem sorgfältig überwacht.
                                 </p>',
                    'price' => 'ab 230.000 ╤ / Monat',
                ],
                [
                    'title' => 'VPS Virtual Server',
                    'text' => '<p class="front-choose__text">VPS Virtual Server – Dedizierter Teildienst
                                     Serverressourcen.
                                     Ein physischer Server hostet mehrere virtuelle dedizierte Server und Ressourcen
                                     die eindeutig sind
                                     innerhalb der gewählten Konfiguration begrenzt. Maximale Spezifikationen
                                     virtueller Server: 8
                                     2,4 GHz Intel Xeon Prozessorkerne, 32 GB RAM und 500 GB Festplatte
                                     oder 200 GB SSD.
                                 </p>
                                 <p class="front-choose__text">Der virtuelle Server eignet sich für kleine und mittlere Internetunternehmen
                                     Webprojekte,
                                     Betrieb von Serversoftware: Mailserver, Datenbankserver, Finanzsoftware.
                                 </p>
                                 <p class="front-choose__text">Die maximale Serverkonfiguration ermöglicht die Ausführung darauf
                                     mehrere große
                                     Websites oder Online-Shops, ein CRM-System, ein ressourcenintensiver Mailserver mit einem großen
                                     Verkehrsbelastung, beliebig
                                     Finanz- oder Buchhaltungssoftware, Entwicklungs- und Geschäftsdesignumgebungen.
                                 </p>',
                    'price' => 'ab 57.000 ╤ / Monat',
                ],
                [
                    'title' => 'Failover-Cloud-Server',
                    'text' => '<p class="front-choose__text">Der Cloud-Server ist wie ein virtueller privater Server organisiert: in
                                     Entsorgung
                                     der vom Benutzer ausgewählte Teil der Ressourcen des physischen Servers. Cloud-Fehlertoleranz
                                     Server zur Verfügung gestellt
                                     durch Duplizieren von Serverdaten auf einem anderen Rechenknoten. Beide Knoten sind verbunden
                                     eine Hochgeschwindigkeit
                                     Netzwerk mit einer Bandbreite von 56 Gbit/s. Im Falle eines Problems ist der Backup-Server sofort verfügbar
                                     startet und
                                     Die Website funktioniert nicht mehr – Benutzer bemerken keine technischen Probleme. Server
                                     Arbeiten an SSD-Laufwerken,
                                     Websites darauf öffnen sich schneller als auf herkömmlichen Festplatten.
                                 </p>
                                 <p class="front-choose__text">Maximale Cloud-Server-Konfiguration: 16 CPU-Kerne
                                     Intel Xeon E5-2630 mit
                                     3,2 GHz, 64 GB RAM und 1000 GB SSD. Das reicht für
                                     wesentlich
                                     Online-Shops mit kontinuierlicher Auslastung rund um die Uhr, Unternehmensportale
                                     internationale Unternehmen,
                                     Mailserver, Datenbankserver, CRM-Systeme usw.
                                 </p>',
                    'price' => 'ab 110.000 ╤ / Monat',
                ],
                [
                    'title' => 'Dedizierter Server',
                    'text' => '<p class="front-choose__text">Dedicated Server – ein Dienst zum Mieten eines separaten physischen Servers in
                                     unserem Rechenzentrum, wenn der Benutzer alle Ressourcen des Servers besitzt.
                                 </p>
                                 <p class="front-choose__text">Ein dedizierter Server eignet sich für vielfältige Aufgaben: vom Hosting
                                     klein
                                     Online-Shop vor der Einführung komplexer Hochlastsysteme. Mangel an „Nachbarn“
                                     Server gibt komplettes
                                     Handlungsfreiheit – nur Sie und Ihre Benutzer haben Einfluss auf die Serverlast.
                                 </p>
                                 <p class="front-choose_text">
                                     Wir nutzen neue Server-Hardware, um dediziertes Server-Hosting zu organisieren
                                     und Software der weltweit führenden IT-Unternehmen:
                                     Intel, AMD, Microsoft, Juniper Networks, ISPsystem.
                                 </p>',
                    'price' => 'ab 250.000 ╤ / Monat',
                ],
                [
                    'title' => 'Geschäftsautomatisierung basierend auf 1C',
                    'text' => '<p>Vereinfachen und optimieren Sie Ihre Geschäftsprozesse mit unserer 1C-Expertise. Wir entwickeln eine individuelle Lösung, die den Anforderungen Ihres Unternehmens gerecht wird.</p>',
                    'price' => '',
                ],
                [
                    'title' => 'Installation und Inbetriebnahme von Servern',
                    'text' => '<p>Sorgen Sie dank unserer Profis für den stabilen Betrieb Ihrer IT-Infrastruktur. Wir bieten umfassende Serverinstallations- und Konfigurationsdienste, damit Ihr System reibungslos läuft.</p>',
                    'price' => '',
                ],
                [
                    'title' => 'Nahtloses WLAN-Roaming für Unternehmen',
                    'text' => '<p>Bieten Sie Ihren Kunden und Mitarbeitern überall in Ihrem Unternehmen unterbrechungsfreien Highspeed-WLAN-Zugang. Wir entwerfen und installieren ein intelligentes System, das eine unterbrechungsfreie Konnektivität gewährleistet.</p>',
                    'price' => '',
                ],
                [
                    'title' => 'Cloud-Lösungen',
                    'text' => '<p>Verschieben Sie Ihre Daten und Anwendungen in eine sichere und flexible Cloud. Wir helfen Ihnen bei der Auswahl und Konfiguration der optimalen Cloud-Lösung und bieten Ihnen Migration und Support für Ihre Infrastruktur.</p>',
                    'price' => '',
                ],
                [
                    'title' => 'Computerperipheriegeräte',
                    'text' => '<p>Stellen Sie Ihren Mitarbeitern moderne und zuverlässige Computergeräte zur Verfügung. Wir bieten ein breites Sortiment an Computerperipheriegeräten, vom Laptop bis zum Drucker, die höchsten Qualitätsstandards entsprechen.</p>',
                    'price' => '',
                ],
                [
                    'title' => 'Social-Media-Marketing',
                    'text' => '<p>Gewinnen Sie neue Kunden und bauen Sie Ihre Online-Reputation mit unseren Social-Media-Werbediensten wie Facebook und Instagram auf. Unsere Spezialisten helfen Ihnen, effektive Kampagnen zu erstellen und ein maximales Engagement Ihrer Zielgruppe zu erreichen.</p>',
                    'price' => '',
                ],
            ],
        ],
        'more' => 'Mehr',
        'haveQuestions' => 'Habe Fragen? Forderung!',
        'submitForm' => [
            'phone' => 'Telefon'
        ],
        'paymentMethods' => 'Zahlungsarten',
        'termsOfUse' => 'Nutzungsbedingungen',
        'securityGuarantees' => 'Sicherheitsgarantien',
        'privacyPolicy' => 'Datenschutz-Bestimmungen',
        'refundPolicy' => 'Rückgaberecht',
        'contacts' => 'Kontakte',
    ],
    'fr' => [
        'language' => 'Français',
        'title' => 'VPS et serveurs dédiés',
        'hostingBusinessClass' => 'Hébergement Classe Affaires',
        'doBusiness' => 'Faites des affaires et nous nous occupons de l`hébergement',
        'services' => [
            [
                'title' => 'Serveur <br>virtuel',
                'price' => 'à partir de 57 000 ╤ <span class="front-services__item-price-period">/mois</span>',
                'text' => 'convient aux sites à fort trafic<br>',
            ],
            [
                'title' => 'Serveur Cloud<br>',
                'price' => 'à partir de 110 000 ╤ <span class="front-services__item-price-period">/mois</span>',
                'text' => 'solution de sécurité <br>',
            ],
            [
                'title' => 'Serveur <br>dédié',
                'price' => 'à partir de 250 000 ╤ <span class="front-services__item-price-period">/mois</span>',
                'text' => 'pour les projets de toutes<br> tailles',
            ],
        ],
        'protectYourData' => '<strong>Protégez vos données contre la perte</strong> - activez la sauvegarde. Le disque de sauvegarde stocke une copie de sauvegarde des données de votre serveur. Cela aidera à sauver des affaires en cas de perte de données du serveur.',
        'ISPmanagerControlPanel' => 'Panneau de configuration ISPmanager',
        'Introduction' => '
            Bienvenue dans notre entreprise de solutions informatiques dentreprise innovantes !
Merci de nous contacter. Nous fournissons des services dans ce domaine depuis plus de 7 ans.
Nous avons déjà environ 150 projets à notre actif et nous espérons des partenariats longs et honnêtes.
Nous sommes prêts à vous aider à améliorer l’efficacité et la compétitivité de votre entreprise en peu de temps et à un prix abordable.',

        'Blocktitle' => 'nos avantages',
        'Blockh1' => 'Assistance 24h/24 et 7j/7',
        'Blockh2' => 'Livraison rapide',
        'Blockh3' => 'Plan de travail complètement blanc',
        'Blockh4' => 'Système de fidélité flexible',
        'Blockp1' => 'Nous fournissons une assistance à nos clients 24 heures sur 24, sept jours sur sept',
        'Blockp2' => 'Nous livrons sans délai les équipements nécessaires à la mise en œuvre du projet, juste à temps.',
        'Blockp3' => 'Un système de travail entièrement blanc vous permet de passer le test de n\'importe quel service de sécurité, y compris l\'État. structures',
        'Blockp4' => 'Mise en place d\'un système de fidélité flexible avec une remise dynamique pour différentes catégories de partenaires et de clients',

        'primiertitle' => 'Un exemple de notre travail sur la fourniture de matériel',
        'primierdesc1' => 'Nous fournissons des serveurs, réseaux, ordinateurs, équipements et équipements de bureau des plus grandes entreprises mondiales : MI, HP, DELL, CISCO, XEROX, SHIP, SVC, ASUS, ASROCK, KINGSTON, DXRASER, HYPER, GYGABYTE, PALIT, RAZER, TP-LINK. , PLANET, EUROPRINT, D-LINK, WD, DELUX, WACOM, MICROLAB et autres.',
        'primierdesc2' => 'Et aussi, des logiciels sous licence des principaux fabricants : MICROSOFT, KASPERSKY, ESSET, VMWARE ORACLE, ACRONIS, WINRAR, AVEVA, 1C, RADHAT, TRAFFIC INSPECTOR, KERIO, SYMANTEC, COREL, ADOBE, AUTOCAD, etc.',
        'primiertext1' => 'Toujours en stock et sur commande un large choix de composants serveur, pièces détachées, consommables pour matériel de bureau.',
        'primiertext2' => 'Toujours en stock et sur commande un large choix de composants serveur, pièces détachées, consommables pour matériel de bureau.',
        'primiertext3' => 'Un responsable personnel est affecté à chaque entreprise pour le travail opérationnel et les demandes individuelles des clients',
        'primiertext4' => 'Les prix, les délais de livraison sont discutés individuellement',

        'easyToManage' => 'Même un utilisateur novice peut facilement gérer l`hébergement via le panneau.',
        'commandLineKnowledge' => 'Gestion de l`hébergement sans connaissances en ligne de commande',
        'allActions' => 'Toutes les actions sont disponibles depuis une fenêtre de navigateur : configuration de l`utilisateur, connexion au domaine, configuration de la messagerie et de la sauvegarde, gestion des fichiers et des utilisateurs FTP, etc.',
        'installingCMS' => 'Installer le CMS depuis le panel en 3 clics',
        'needToCreateSite' => 'Installez le CMS dont vous avez besoin pour créer un site : Wordpress, Joomla ou Drupal directement depuis le panneau et commencez à créer un site.',
        'DDoSProtection' => 'Protection DDoS',
        'filterIncomingTraffic' => 'Filtrer le trafic entrant afin que seuls les vrais clients accèdent au site. Vous ne remarquerez pas l`attaque : les pirates n`auront pas accès aux ressources du serveur et ne provoqueront pas de panne du système. Le site continuera à fonctionner sans modifications.',
        'connectAChannel' => 'Connecter un canal anti-DDoS avec une capacité de 1 Mbps ou plus à un serveur virtuel. Pour un serveur dédié - à partir de 5 Mbps pour 1250 roubles / mois. La protection supprime les attaques aux niveaux 2, 3, 4 et 7 du modèle OSI.',
        'provideServers' => 'Nous fournissons des serveurs dans trois centres de données à Moscou et en Allemagne',
        'areHosted' => '<span class="open__bold">Les serveurs virtuels</span> sont hébergés dans les centres de données WebDC et IXcellerate à Moscou et ont un ping bas stable dans toute la Russie.',
        'areAvailable' => '<span class="open__bold">Des serveurs dédiés</span> sont disponibles à la location chez WebDC et IXcellerate à Moscou et au centre de données Hetzner à Nuremberg, en Allemagne. Chaque centre de données dispose d`une bonne connectivité grâce à la connexion de plusieurs canaux de communication et points d`échange de trafic. Le réseau est construit de manière à ce que la déconnexion de l`un des canaux n`affecte en rien la vitesse de transmission/réception des données : des canaux supplémentaires prendront le relais.',
        'serversAreBasedOn' => 'Les serveurs sont basés sur des processeurs <span class="open__bold">Intel</span>, <span class="open__bold">AMD</span>, <span class="open__bold">Samsung</ span> et les séries de serveurs <span class="open__bold">Hitachi </span>et les générations de RAM <span class="open__bold">DDR4</span>.',
        'ourServices' => [
            'title' => 'Nos services',
            'items' => [
                [
                    'title' => 'Créer un site Web de tout type et de toute complexité',
                    'text' => '<p class="front-choose_text">
                                    Il n`y a qu`une seule chance de faire bonne impression sur l`utilisateur. Nous décidons si nous aimons le site ou non en seulement 10 secondes. Par conséquent, la commodité et la qualité de la ressource affectent directement le nombre de ventes en ligne. Il est important de garder l`attention du public, c`est pourquoi nous examinons attentivement la structure du site, sa conception et son contenu. En conséquence, le site est en mesure d`augmenter considérablement le flux de clients.
                                </p>
                                <p class="front-choose_text">
                                    Nous fournissons un cycle complet de services de développement de sites Web : conception, développement de conception mobile et adaptative, mise en œuvre de divers systèmes externes.
                                </p>
                                <p class="front-choose_text">
                                    Aujourd`hui, le site détermine en grande partie le statut de l`entreprise, la présence de son propre site multifonctionnel est devenue une nécessité pour tous.
                                </p>
                                <p class="front-choose_text">
                                    Nous trouverons les bonnes solutions pour vous et les utilisateurs.
                                </p>',
                    'price' => 'à partir de 150 000 ╤ / mois',
                ],
                [
                    'title' => 'Installation de SCS',
                    'text' => '<p class="front-choose_text">
                                    Notre entreprise fournit professionnellement tous les services qui impliquent l`installation de SCS. La coopération est organisée selon le schéma suivant: après avoir passé une commande, un projet de travail est créé, qui est approuvé par le client, puis l`installation proprement dite du réseau commence. Tous les travaux sont effectués par des spécialistes de haut niveau qui améliorent constamment leurs compétences dans un domaine tel que l`installation de réseaux informatiques et suivent une formation appropriée.
                                </p>
                                <p class="front-choose_text">
                                   Le professionnalisme de l`installation du réseau local dépend directement de la stabilité de votre entreprise. En vous tournant vers nous, vous obtenez la garantie d`un travail de qualité. En règle générale, dans un domaine comme la pose d`un réseau, trois points sont prioritaires pour le client : la qualité, le délai et le prix. Nous avons tous ces 3 facteurs dans le rapport optimal.
                                </p>
                                <p class="front-choose_text">
                                    La pose du réseau par les spécialistes de l`entreprise est réalisée avec une grande qualité grâce à un projet élaboré par des professionnels et à son strict respect lors du processus d`installation. Nous disposons de toutes les licences nécessaires pour travailler dans un secteur de services tel que la pose de réseaux informatiques implique. Lors de l`installation, nous sommes toujours guidés par les normes et réglementations en vigueur, et l`ensemble du processus de travail est soigneusement contrôlé par un système de contrôle de la qualité.
                                </p>',
                    'price' => 'à partir de 230 000 ╤ / mois',
                ],
                [
                    'title' => 'Serveur virtuel VPS',
                    'text' => '<p class="front-choose__text">Serveur Virtuel VPS - Service Part Dédié
                                    ressources du serveur.
                                    Un serveur physique héberge plusieurs serveurs virtuels dédiés, des ressources
                                    qui sont clairement
                                    limité dans la configuration sélectionnée. Spécifications maximales
                                    serveur virtuel : 8
                                    Cœurs de processeur Intel Xeon 2,4 GHz, 32 Go de RAM et 500 Go de disque dur
                                    ou SSD de 200 Go.
                                </p>
                                <p class="front-choose__text">Le serveur virtuel convient aux petites et moyennes entreprises Internet pour
                                    projets web,
                                    exploitation de logiciels serveurs : serveur de messagerie, serveur de base de données, logiciel financier.
                                </p>
                                <p class="front-choose__text">La configuration maximale du serveur permettra de l`exécuter
                                    plusieurs grands
                                    sites Web ou boutiques en ligne, un système CRM, un serveur de messagerie gourmand en ressources avec un grand
                                    charge de trafic, quelconque
                                    logiciels financiers ou comptables, environnements de développement et de conception d`entreprise.
                                </p>',
                    'price' => 'à partir de 57 000 ╤ / mois',
                ],
                [
                    'title' => 'Serveur cloud de basculement',
                    'text' => '<p class="front-choose__text">Le serveur cloud est organisé comme un serveur privé virtuel : dans
                                    disposition
                                    la partie sélectionnée par l`utilisateur des ressources du serveur physique. Tolérance aux pannes du cloud
                                    serveur fourni
                                    en dupliquant les données du serveur sur un autre nœud de calcul. Les deux nœuds sont connectés
                                    une grande vitesse
                                    réseau avec une bande passante de 56 Gbps. En cas de problème, le serveur de secours est instantanément
                                    démarre et
                                    le site ne s`arrête pas de fonctionner - les utilisateurs ne remarquent pas de problèmes techniques. Les serveurs
                                    travailler sur des disques SSD,
                                    les sites qui s`y trouvent s`ouvrent plus rapidement que sur les disques durs conventionnels.
                                </p>
                                <p class="front-choose__text">Configuration maximale du serveur cloud : 16 cœurs de processeur
                                    Intel Xeon E5-2630 avec
                                    3,2 GHz, 64 Go de RAM et 1000 Go de SSD. Cela suffit pour
                                    majeur
                                    magasins en ligne avec chargement continu 24 heures sur 24, portails d`entreprise
                                    entreprises internationales,
                                    serveurs de messagerie, serveurs de bases de données, systèmes CRM, etc.
                                </p>',
                    'price' => 'à partir de 110 000 ╤ / mois',
                ],
                [
                    'title' => 'Serveur dédié',
                    'text' => '<p class="front-choose__text">Serveur dédié — un service de location d`un serveur physique séparé dans
                                    notre centre de données, lorsque l`utilisateur possède toutes les ressources du serveur.
                                </p>
                                <p class="front-choose__text">Un serveur dédié convient à une variété de tâches : de l`hébergement
                                    petit
                                    boutique en ligne avant le lancement de systèmes complexes à forte charge. Manque de "voisins"
                                    le serveur donne complet
                                    liberté d`action - seuls vous et vos utilisateurs affectent la charge du serveur.
                                </p>
                                <p class="front-choose_text">
                                   Nous utilisons un nouveau matériel de serveur pour organiser l`hébergement de serveurs dédiés
                                    et des logiciels des plus grandes sociétés informatiques mondiales :
                                    Intel, AMD, Microsoft, Juniper Networks, ISPsystem.
                                </p>',
                    'price' => 'à partir de 250 000 ╤ / mois',
                ],
                [
                    'title' => 'Automatisation d\'entreprise basée sur 1C',
                    'text' => '<p>Simplifiez et optimisez vos processus métiers grâce à notre expertise 1C. Nous développerons une solution individuelle qui répond aux besoins de votre entreprise.</p>',
                    'price' => '',
                ],
                [
                    'title' => 'Монтаж и пусконаладка серверов',
                    'text' => '<p>Обеспечьте стабильную работу Вашей IT-инфраструктуры благодаря нашим профессионалам. Мы предлагаем комплексные услуги по установке и настройке серверов, чтобы ваша система функционировала без сбоев.</p>',
                    'price' => '',
                ],
                [
                    'title' => 'Itinérance Wi-Fi transparente pour les entreprises',
                    'text' => '<p>Offrez à vos clients et employés un accès Wi-Fi haut débit ininterrompu partout dans votre entreprise. Nous concevrons et installerons un système intelligent qui garantit une connectivité ininterrompue.</p>',
                    'price' => '',
                ],
                [
                    'title' => 'Solutions cloud',
                    'text' => '<p>Déplacez vos données et applications vers un cloud sécurisé et flexible. Nous vous aiderons à choisir et à configurer la solution cloud optimale, ainsi qu\'à assurer la migration et le support de votre infrastructure.</p>',
                    'price' => '',
                ],
                [
                    'title' => 'Périphériques d\'ordinateur',
                    'text' => '<p>Offrez à vos collaborateurs des appareils informatiques modernes et fiables. Nous proposons une large gamme de périphériques informatiques, des ordinateurs portables aux imprimantes, qui répondent aux normes de qualité les plus élevées.</p>',
                    'price' => '',
                ],
                [
                    'title' => 'Marketing des médias sociaux',
                    'text' => '<p>Attirez de nouveaux clients et bâtissez votre réputation en ligne grâce à nos services de promotion sur les réseaux sociaux comme Facebook et Instagram. Nos spécialistes vous aideront à créer des campagnes efficaces et à obtenir un engagement maximal de votre public cible.</p>',
                    'price' => '',
                ],
            ],
        ],
        'more' => 'Plus',
        'haveQuestions' => 'Avoir des questions? Appel!',
        'submitForm' => [
            'phone' => 'Téléphone'
        ],
        'paymentMethods' => 'Méthodes de payement',
        'termsOfUse' => 'Conditions d`utilisation',
        'securityGuarantees' => 'Garanties de sécurité',
        'privacyPolicy' => 'Politique de confidentialité',
        'refundPolicy' => 'Politique de remboursement',
        'contacts' => 'Contacts',
    ],
    'sp' => [
        'language' => 'Español',
        'title' => 'Servidores VPS y Dedicados',
        'hostingBusinessClass' => 'Alojamiento de clase empresarial',
        'doBusiness' => 'Haz negocios y nosotros nos encargamos del hosting',
        'services' => [
            [
                'title' => 'Servidor virtual<br>',
                'price' => 'from 57,000 ╤ <span class="front-services__item-price-period">/mes</span>',
                'text' => 'adecuado para sitios<br>de alto tráfico',
            ],
            [
                'title' => 'Servidor en la nube<br>',
                'price' => 'from 110,000 ╤ <span class="front-services__item-price-period">/month</span>',
                'text' => 'solución a prueba<br>de fallos',
            ],
            [
                'title' => 'Servidor<br> dedicado',
                'price' => 'from 250,000 ╤ <span class="front-services__item-price-period">/mes</span>',
                'text' => 'para proyectos de<br>cualquier tamaño',
            ],
        ],
        'protectYourData' => '<strong>Proteja sus datos contra pérdida</strong> - habilite la copia de seguridad. El disco de respaldo almacena una copia de respaldo de los datos de su servidor. Esto ayudará a salvar el negocio en caso de pérdida de datos del servidor.',
        'ISPmanagerControlPanel' => 'Panel de control de ISPmanager',
        'Introduction' => 'Bonvenon al nia pionira kompanio pri IT-solvoj!
            Dankon pro kontakti nin. Ni provizas servojn en ĉi tiu areo dum pli ol 7 jaroj.
            Ni jam havas ĉirkaŭ 150 projektojn en nia konto. Ni antaŭĝojas longajn kaj honestajn partnerecojn.
            Ni pretas helpi vin plibonigi la efikecon kaj konkurencivon de via entrepreno en mallonga tempo kaj je atingebla prezo.',

        'Blocktitle' => 'Niaj avantaĝoj',
        'Blockh1' => '24/7 subteno',
        'Blockh2' => 'Rapida livero',
        'Blockh3' => 'Tute blanka skemo de laboro',
        'Blockh4' => 'Fleksebla lojaleca sistemo',
        'Blockp1' => 'Ni provizas subtenon al niaj klientoj ĉirkaŭ la horloĝo, sep tagojn semajne',
        'Blockp2' => 'Ni liveras ekipaĵon por la efektivigo de la projekto ĝustatempe senprokraste.',
        'Blockp3' => 'Tute blanka sistemo de laboro permesas vin trapasi la provon de iu ajn sekureca servo, inkluzive de la ŝtato. strukturoj',
        'Blockp4' => 'Efektivigis flekseblan lojalecan sistemon kun dinamika rabato por diversaj kategorioj de partneroj kaj klientoj',

        'primiertitle' => 'Ekzemplo de nia laboro pri la provizado de ekipaĵoj',
        'primierdesc1' => 'Ni provizas servilon, reton, komputilon, ekipaĵon kaj oficejan ekipaĵon de ĉefaj mondaj kompanioj: MI, HP, DELL, CISCO, XEROX, SHIP, SVC, ASUS, ASROCK, KINGSTON, DXRASER, HYPER, GYGABYTE, PALIT, RAZER, TP-LINK , PLANET, EUROPRINT, D-LINK, WD, DELUXO, WACOM, MICROLAB kaj aliaj.',
        'primierdesc2' => 'Kaj ankaŭ, licencita programaro de ĉefaj fabrikantoj: MICROSOFT, KASPERSKY, ESSET, VMWARE ORACLE, ACRONIS, WINRAR, AVEVA, 1C, RADHAT, TRAFFIC INSPECTOR, KERIO, SYMANTEC, COREL, ADOBE, AUTOCAD, ktp.',
        'primiertext1' => 'Ĉiam en stoko kaj por mendi grandan elekton de servilaj komponantoj, rezervaj partoj, konsumeblaj por oficejaj ekipaĵoj.',
        'primiertext2' => 'Livero de ajna ne-norma ekipaĵo por mendi, serĉu ekipaĵon laŭ viaj postuloj kaj specifoj',
        'primiertext3' => 'Persona manaĝero estas asignita al ĉiu firmao por funkcia laboro kaj individuaj klientpetoj',
        'primiertext4' => 'Prezoj, livertempoj estas diskutataj individue',
        'easyToManage' => 'Incluso un usuario novato puede administrar fácilmente el alojamiento a través del panel.',
        'commandLineKnowledge' => 'Administrar hosting sin conocimiento de la línea de comandos',
        'allActions' => 'Todas las acciones están disponibles desde una ventana del navegador: configuración de usuario, conexión de dominio, configuración de correo y respaldo, administración de archivos y usuarios FTP, etc.',
        'installingCMS' => 'Instalar CMS desde el panel en 3 clics',
        'needToCreateSite' => 'Instala el CMS que necesitas para crear un sitio: Wordpress, Joomla o Drupal directamente desde el panel y comienza a crear un sitio.',
        'DDoSProtection' => 'Protección DDoS',
        'filterIncomingTraffic' => 'Filtrado del tráfico entrante para que solo los clientes reales accedan al sitio. No notará el ataque: los piratas informáticos no obtendrán acceso a los recursos del servidor y no provocarán una falla del sistema. El sitio seguirá funcionando sin cambios.',
        'connectAChannel' => 'Conecta un canal anti-DDoS con una capacidad de 1 Mbps o más a un servidor virtual. Para un servidor dedicado: desde 5 Mbps por 1250 rublos / mes. La protección suprime los ataques en los niveles 2, 3, 4 y 7 del modelo OSI.',
        'provideServers' => 'Ofrecemos servidores en tres centros de datos en Moscú y Alemania',
        'areHosted' => '<span class="open__bold">Servidores virtuales</span> están alojados en centros de datos WebDC e IXcellerate en Moscú y tienen un ping bajo estable en toda Rusia.',
        'areAvailable' => '<span class="open__bold">Servidores dedicados</span> están disponibles para alquilar en WebDC e IXcellerate en Moscú y en el centro de datos de Hetzner en Nuremberg, Alemania. Cada centro de datos tiene buena conectividad debido a la conexión de varios canales de comunicación y puntos de intercambio de tráfico. La red está construida de tal manera que la desconexión de uno de los canales no afectará la velocidad de transmisión/recepción de datos de ninguna manera: los canales adicionales se harán cargo de la carga.',
        'serversAreBasedOn' => 'Los servidores se basan en procesadores <span class="open__bold">Intel</span>, <span class="open__bold">AMD</span>, <span class="open__bold">Samsung< / span> y <span class="open__bold">Hitachi </span>serie de servidores y generaciones de RAM <span class="open__bold">DDR4</span>.',
        'ourServices' => [
            'title' => 'Nuestros servicios',
            'items' => [
                [
                    'title' => 'Crear un sitio web de cualquier tipo y complejidad',
                    'text' => '<p class="front-choose_text">
                                     Solo hay una oportunidad de causar una buena impresión en el usuario. Decidimos si nos gusta el sitio o no en solo 10 segundos. Por lo tanto, la conveniencia y la calidad del recurso afectan directamente la cantidad de ventas en línea. Es importante mantener la atención de la audiencia, por lo que consideramos cuidadosamente la estructura del sitio, el diseño y el contenido. Como resultado, el sitio puede aumentar significativamente el flujo de clientes.
                                 </p>
                                 <p class="front-choose_text">
                                     Brindamos un ciclo completo de servicios de desarrollo de sitios web: diseño, desarrollo de diseño móvil y adaptativo, implementación de varios sistemas externos.
                                 </p>
                                 <p class="front-choose_text">
                                     Hoy en día, el sitio determina en gran medida el estado de la empresa, la presencia de su propio sitio multifuncional se ha convertido en una necesidad para todos.
                                 </p>
                                 <p class="front-choose_text">
                                     Encontraremos las soluciones adecuadas para usted y los usuarios.
                                 </p>',
                    'price' => 'desde 150.000 ╤ / mes',
                ],
                [
                    'title' => 'Instalación de SCS',
                    'text' => '<p class="front-choose_text">
                                     Nuestra empresa brinda profesionalmente todos los servicios que involucran la instalación de SCS. La cooperación se organiza de acuerdo con el siguiente esquema: después de realizar un pedido, se crea un borrador de trabajo, que es aprobado por el cliente, luego comienza la instalación real de la red. Todo el trabajo es realizado por especialistas de primera clase que mejoran constantemente sus habilidades en un campo como la instalación de redes informáticas y reciben la capacitación adecuada.
                                 </p>
                                 <p class="front-choose_text">
                                     La profesionalidad de la instalación de la LAN depende directamente de la estabilidad de su empresa. En cuanto a nosotros, usted obtiene una garantía de un trabajo de calidad. Como regla general, en un campo como el tendido de una red, tres puntos son prioritarios para el cliente: calidad, tiempo y precio. Tenemos todos estos 3 factores en la proporción óptima.
                                 </p>
                                 <p class="front-choose_text">
                                     El tendido de la red por parte de los especialistas de la empresa se lleva a cabo con alta calidad gracias a un proyecto desarrollado profesionalmente y su estricto cumplimiento durante el proceso de instalación. Disponemos de todas las licencias necesarias para trabajar en un sector de servicios como el que implica el tendido de redes informáticas. Durante la instalación, siempre nos guiamos por las normas y reglamentos existentes, y todo el proceso de trabajo es supervisado cuidadosamente por un sistema de control de calidad.
                                 </p>',
                    'price' => 'desde 230.000 ╤ / mes',
                ],
                [
                    'title' => 'Servidor Virtual VPS',
                    'text' => '<p class="front-choose__text">Servidor virtual VPS - Servicio de piezas dedicado
                                     recursos del servidor.
                                     Un servidor físico alberga varios servidores dedicados virtuales, recursos
                                     que son claramente
                                     limitado dentro de la configuración seleccionada. Especificaciones máximas
                                     servidor virtual: 8
                                     Núcleos de procesador Intel Xeon de 2,4 GHz, 32 GB de RAM y 500 GB de disco duro
                                     o SSD de 200 GB.
                                 </p>
                                 <p class="front-choose__text">El servidor virtual es adecuado para pequeñas y medianas empresas de Internet para
                                     proyectos web,
                                     operación de software de servidor: servidor de correo, servidor de base de datos, software financiero.
                                 </p>
                                 <p class="front-choose__text">La configuración máxima del servidor permitirá ejecutarlo
                                     varios grandes
                                     sitios web o tiendas en línea, un sistema CRM, un servidor de correo que requiere muchos recursos con una gran
                                     carga de tráfico, cualquiera
                                     software financiero o contable, entornos de desarrollo y diseño empresarial.
                                 </p>',
                    'price' => 'desde 57.000 ╤ / mes',
                ],
                [
                    'title' => 'Servidor en la nube de conmutación por error',
                    'text' => '<p class="front-choose__text">El servidor en la nube está organizado como un servidor privado virtual: en
                                     desecho
                                     la porción seleccionada por el usuario de los recursos del servidor físico. Tolerancia a fallas en la nube
                                     servidor proporcionado
                                     duplicando los datos del servidor en otro nodo informático. Ambos nodos están conectados.
                                     una alta velocidad
                                     red con un ancho de banda de 56 Gbps. En el caso de un problema, el servidor de respaldo es instantáneamente
                                     arranca y
                                     el sitio no deja de funcionar: los usuarios no notan problemas técnicos. Servidores
                                     trabajar en unidades SSD,
                                     los sitios en ellos se abren más rápido que en los discos duros convencionales.
                                 </p>
                                 <p class="front-choose__text">Configuración máxima del servidor en la nube: 16 núcleos de CPU
                                     Intel Xeon E5-2630 con
                                     3,2 GHz, 64 GB de RAM y 1000 GB de SSD. Esto es suficiente para
                                     importante
                                     tiendas online con carga continua las 24 horas, portales corporativos
                                     empresas internacionales,
                                     servidores de correo, servidores de bases de datos, sistemas CRM, etc.
                                 </p>',
                    'price' => 'desde 110.000 ╤ / mes',
                ],
                [
                    'title' => 'Servidor dedicado',
                    'text' => '<p class="front-choose__text">Servidor dedicado — un servicio para alquilar un servidor físico separado en
                                     nuestro centro de datos, cuando el usuario posee todos los recursos del servidor.
                                 </p>
                                 <p class="front-choose__text">Un servidor dedicado es adecuado para una variedad de tareas: desde alojar
                                     pequeño
                                     tienda en línea antes del lanzamiento de sistemas complejos de alta carga. Falta de "vecinos"
                                     servidor da completo
                                     libertad de acción: solo usted y sus usuarios afectan la carga del servidor.
                                 </p>
                                 <p class="front-choose_text">
                                     Utilizamos nuevo hardware de servidor para organizar el alojamiento de servidor dedicado
                                     y software de las principales empresas de TI del mundo:
                                     Intel, AMD, Microsoft, Juniper Networks, ISPsystem.
                                 </p>',
                    'price' => 'desde 250.000 ╤ / mes',
                ],
                [
                    'title' => 'Komerca aŭtomatigo bazita sur 1C',
                    'text' => '<p>Simpligu kaj optimumigu viajn komercajn procezojn kun nia 1C-kompetenteco. Ni disvolvos individuan solvon, kiu plenumas la bezonojn de via entrepreno.</p>',
                    'price' => '',
                ],
                [
                    'title' => 'Instalado kaj ekfunkciigo de serviloj',
                    'text' => '<p>Certigu la stabilan funkciadon de via IT-infrastrukturo danke al niaj profesiuloj. Ni ofertas ampleksajn servilajn instaladojn kaj agordajn servojn por ke via sistemo funkcias glate.</p>',
                    'price' => '',
                ],
                [
                    'title' => 'Senjunta Wi-Fi Roaming por Entreprenoj',
                    'text' => '<p>Provizu viajn klientojn kaj dungitojn per seninterrompa altrapida Wifi-aliro ie ajn en via komerco. Ni desegnos kaj instalos inteligentan sistemon, kiu certigas seninterrompan konekteblecon.</p>',
                    'price' => '',
                ],
                [
                    'title' => 'Nubaj Solvoj',
                    'text' => '<p>Movu viajn datumojn kaj aplikojn al sekura kaj fleksebla nubo. Ni helpos vin elekti kaj agordi la optimuman nuban solvon, kaj ankaŭ provizi migradon kaj subtenon por via infrastrukturo.</p>',
                    'price' => '',
                ],
                [
                    'title' => 'Komputilaj Ekstercentraloj',
                    'text' => '<p>Provizu viajn dungitojn per modernaj kaj fidindaj komputilaj aparatoj. Ni ofertas ampleksan gamon de komputilaj ekstercentraj, de tekkomputiloj ĝis presiloj, kiuj plenumas la plej altajn kvalitajn normojn.</p>',
                    'price' => '',
                ],
                [
                    'title' => 'Merkatado de sociaj amaskomunikiloj',
                    'text' => '<p>Altiru novajn klientojn kaj konstruu vian interretan reputacion per niaj sociaj amaskomunikilaj reklamservoj kiel Facebook kaj Instagram. Niaj specialistoj helpos vin krei efikajn kampanjojn kaj atingi maksimuman engaĝiĝon de via celita publiko.</p>',
                    'price' => '',
                ],
            ],
        ],
        'more' => 'Más',
        'haveQuestions' => '¿Tiene preguntas? ¡Llamar!',
        'submitForm' => [
            'phone' => 'Teléfono'
        ],
        'paymentMethods' => 'Métodos de pago',
        'termsOfUse' => 'Condiciones de uso',
        'securityGuarantees' => 'Garantías de seguridad',
        'privacyPolicy' => 'Política de privacidad',
        'refundPolicy' => 'Politica de reembolso',
        'contacts' => 'Contactos',
    ],
    'kz' => [
        'language' => 'Қазақ',
        'title' => 'VPS және арнайы серверлер',
        'hostingBusinessClass' => 'Бизнес-класс хостинг',
        'doBusiness' => 'Бизнес жасаңыз, біз хостингпен айналысамыз',
        'services' => [
            [
                'title' => 'Виртуалды<br> сервер',
                'price' => '57 000 ╤ <span class="front-services__item-price-period">/айына</span>',
                'text' => 'жоғары трафик<br>сайттар үшін қолайлы',
            ],
            [
                'title' => 'Бұлт<br> сервер',
                'price' => '110 000 ╤ <span class="front-services__item-price-period">/ай</span>',
                'text' => 'қауіпсіз<br> шешім',
            ],
            [
                'title' => 'Арнайы<br> сервер',
                'price' => '250 000 ╤ <span class="front-services__item-price-period">/ай</span>',
                'text' => 'кез келген<br> өлшемдегі жобалар үшін',
            ],
        ],
        'protectYourData' => '<strong>Деректерді жоғалудан қорғаңыз</strong> - сақтық көшірме жасауды қосыңыз. Сақтық көшірме дискі сервер деректерінің сақтық көшірмесін сақтайды. Бұл серверден деректер жоғалған жағдайда бизнесті сақтауға көмектеседі.',
        'Introduction' => '
            Біздің инновациялық іскерлік IT шешімдер компаниямызға қош келдіңіз!
            Бізбен хабарласқаныңызға рахмет. Біз осы салада 7 жылдан астам қызмет көрсетіп келеміз.
            Біздің шотымызда қазірдің өзінде 150-ге жуық жоба бар.Біз ұзақ және адал серіктестіктерді күтеміз.
            Біз қысқа мерзімде және қолжетімді бағада кәсіпорыныңыздың тиімділігі мен бәсекеге қабілеттілігін арттыруға көмектесуге дайынбыз.',

        'Blocktitle' => 'Біздің артықшылығымыз',
        'Blockh1' => '24/7 қолдау',
        'Blockh2' => 'Жедел жеткізу',
        'Blockh3' => 'Толық ақ жұмыс схемасы',
        'Blockh4' => 'Икемді адалдық жүйесі',
        'Blockp1' => 'Біз тұтынушыларымызға аптасына жеті күн тәулік бойы қолдау көрсетеміз',
        'Blockp2' => 'Біз жобаны жүзеге асыру үшін құрал-жабдықтарды кідіріссіз уақытында жеткіземіз.',
        'Blockp3' => 'Толығымен ақ жұмыс жүйесі кез келген қауіпсіздік қызметінің, соның ішінде мемлекетті де сынақтан өткізуге мүмкіндік береді. құрылымдар',
        'Blockp4' => 'Әртүрлі санаттағы серіктестер мен клиенттер үшін динамикалық жеңілдіктері бар икемді адалдық жүйесі енгізілді',

        'primiertitle' => 'Жабдықтарды жеткізу бойынша жұмысымыздың мысалы',
        'primierdesc1' => 'Біз жетекші әлемдік компаниялардың: MI, HP, DELL, CISCO, XEROX, SHIP, SVC, ASUS, ASROCK, KINGSTON, DXRASER, HYPER, GYGABYTE, PALIT, RAZER, TP-LINK серверлерін, желілерін, компьютерлерін, жабдықтарын және кеңсе жабдықтарын жеткіземіз. , PLANET, EUROPRINT, D-LINK, WD, DELUX, WACOM, MICROLAB және т.б.',
        'primierdesc2' => 'Сондай-ақ жетекші өндірушілердің лицензияланған бағдарламалық жасақтамасы: MICROSOFT, KASPERSKY, ESSET, VMWARE ORACLE, ACRONIS, WINRAR, AVEVA, 1C, RADHAT, TRAFFIC INSPECTOR, KERIO, SYMANTEC, COREL, ADOBE, AUTOCAD және т.б.',
        'primiertext1' => 'Әрқашан қоймада және серверлік компоненттердің, қосалқы бөлшектердің, кеңсе жабдықтарына арналған шығыс материалдарының үлкен таңдауына тапсырыс беру.',
        'primiertext2' => 'Кез келген стандартты емес жабдықты тапсырыс бойынша жеткізу, сіздің талаптарыңыз бен спецификацияларыңызға сәйкес жабдықты іздеу',
        'primiertext3' => 'Әрбір компанияға операциялық жұмыс және тұтынушылардың жеке сұраныстары үшін жеке менеджер тағайындалады',
        'primiertext4' => 'Бағалар, жеткізу уақыты жеке талқыланады',

        'easyToManage' => 'Тіпті жаңадан бастаған пайдаланушы хостингті панель арқылы оңай басқара алады.',
        'commandLineKnowledge' => 'Пәрмен жолын білмей хостингті басқару',
        'allActions' => 'Барлық әрекеттер браузер терезесінен қолжетімді: пайдаланушы орнатуы, домен қосылымы, пошта мен сақтық көшірме орнатуы, файлды және FTP пайдаланушысын басқару, т.б.',
        'installingCMS' => 'CMS-ті панельден 3 басу арқылы орнату',
        'needToCreateSite' => 'Сайт жасау үшін қажет CMS бағдарламасын тікелей панельден орнатыңыз: Wordpress, Joomla немесе Drupal және сайт жасауды бастаңыз.',
        'DDoSProtection' => 'DDoS қорғау',
        'filterIncomingTraffic' => 'Тек нақты клиенттер сайтқа кіру үшін кіріс трафикті сүзу. Сіз шабуылды байқамайсыз: хакерлер сервер ресурстарына қол жеткізе алмайды және жүйенің сәтсіздігін тудырмайды. Сайт өзгеріссіз жұмысын жалғастырады.',
        'connectAChannel' => 'Сыйымдылығы 1 Мбит/с немесе одан жоғары анти-DDoS арнасын виртуалды серверге қосыңыз. Арнайы сервер үшін - айына 1250 тенге үшін 5 Мбит / с-тан. Қорғау OSI үлгісінің 2, 3, 4 және 7 деңгейлеріндегі шабуылдарды басады.',
        'provideServers' => 'Біз Мәскеу мен Германиядағы үш деректер орталығында серверлерді қамтамасыз етеміз',
        'areHosted' => '<span class="open__bold">Виртуалды серверлер</span> Мәскеудегі WebDC және IXcellerate деректер орталықтарында орналастырылған және бүкіл Ресейде тұрақты төмен пингке ие.',
        'areAvailable' => '<span class="open__bold">Арнайы серверлерді</span> Мәскеудегі WebDC және IXcellerate және Нюрнберг, Германиядағы Hetzner деректер орталығында жалға алуға болады. Әрбір деректер орталығының бірнеше байланыс арналары мен трафик алмасу нүктелерінің қосылуы арқасында жақсы қосылу мүмкіндігі бар. Желі арналардың бірінің ажыратылуы деректерді беру/қабылдау жылдамдығына ешқандай әсер етпейтіндей етіп салынған: қосымша арналар жүктемені алады.',
        'serversAreBasedOn' => 'Серверлер <span class="open__bold">Intel</span>, <span class="open__bold">AMD</span> процессорларына, <span class="open__bold">Samsung< / span> және <span class="open__bold">Hitachi </span>сервер сериялары және ЖЖҚ ұрпақтары <span class="open__bold">DDR4</span>.',
        'ourServices' => [
            'title' => 'Біздің қызметтер',
            'items' => [
                [
                    'title' => 'Кез келген түрдегі және күрделіліктегі веб-сайтты жасау',
                    'text' => '<p class="front-choose_text">
                                     Пайдаланушыға жақсы әсер қалдырудың бір ғана мүмкіндігі бар. Біз сайтты ұнататын-ұнамайтынымызды 10 секундта шешеміз. Сондықтан ресурстың ыңғайлылығы мен сапасы онлайн сатылымдар санына тікелей әсер етеді. Аудиторияның назарын аудару маңызды, сондықтан біз сайттың құрылымын, дизайнын және мазмұнын мұқият қарастырамыз. Нәтижесінде сайт тұтынушылар ағынын айтарлықтай арттыруға қабілетті.
                                 </p>
                                 <p class="алдын ала таңдау_мәтін">
                                     Біз веб-сайтты әзірлеу қызметтерінің толық циклін ұсынамыз: дизайн, мобильді және бейімделген дизайнды әзірлеу, әртүрлі сыртқы жүйелерді енгізу.
                                 </p>
                                 <p class="алдын ала таңдау_мәтін">
                                     Бүгінгі таңда сайт үлкен дәрежеде компанияның мәртебесін анықтайды, өзінің көп функционалды сайтының болуы әрбір адам үшін қажеттілікке айналды.
                                 </p>
                                 <p class="алдын ала таңдау_мәтін">
                                     Біз сізге және пайдаланушылар үшін дұрыс шешімдерді табамыз.
                                 </p>',
                    'price' => '150 000 ╤/айдан бастап',
                ],
                [
                    'title' => 'SCS орнату',
                    'text' => '<p class="front-choose_text">
                                     Біздің компания SCS орнатумен байланысты барлық қызметтерді кәсіби түрде ұсынады. Ынтымақтастық келесі схема бойынша ұйымдастырылады: тапсырыс бергеннен кейін жұмыс жобасы жасалады, оны тапсырыс беруші бекітеді, содан кейін желіні нақты орнату басталады. Барлық жұмыстарды компьютерлік желілерді орнату сияқты салада үнемі біліктілігін арттыратын және тиісті дайындықтан өтетін жоғары санатты мамандар орындайды.
                                 </p>
                                 <p class="алдын ала таңдау_мәтін">
                                     Жергілікті желіні орнату қаншалықты кәсіби түрде жүзеге асырылатыны кәсіпорынның қаншалықты тұрақты жұмыс істейтініне тікелей байланысты. Бізге жүгінсек, сіз сапалы жұмыс кепілдігін аласыз. Әдетте, желіні тарту сияқты салада тұтынушы үшін үш тармақ басымдыққа ие: сапа, уақыт және баға. Бізде осы 3 фактордың барлығы оңтайлы қатынаста.
                                 </p>
                                 <p class="алдын ала таңдау_мәтін">
                                     Компания мамандарымен желіні төсеу кәсіби әзірленген жобаның және орнату процесінде оны қатаң сақтаудың арқасында жоғары сапамен жүзеге асырылады. Бізде компьютерлік желілерді төсеу сияқты қызмет көрсету секторында жұмыс істейтін барлық қажетті лицензиялар бар. Орнату кезінде біз әрқашан қолданыстағы стандарттар мен ережелерді басшылыққа аламыз және бүкіл жұмыс процесі сапаны бақылау жүйесімен мұқият бақыланады.
                                 </p>',
                    'price' => '230 000 ╤/айдан бастап',
                ],
                [
                    'title' => 'VPS виртуалды сервері',
                    'text' => '<p class="front-choose__text">VPS виртуалды сервері - арнайы бөлім қызметі
                                     сервер ресурстары.
                                     Бір физикалық сервер бірнеше виртуалды бөлінген серверлерді, ресурстарды орналастырады
                                     олар анық
                                     таңдалған конфигурацияда шектелген. Максималды сипаттамалар
                                     виртуалды сервер: 8
                                     2,4 ГГц Intel Xeon процессорының ядролары, 32 ГБ жедел жады және 500 ГБ қатты диск
                                     немесе 200 ГБ SSD.
                                 </p>
                                 <p class="front-choose__text">Виртуалды сервер шағын және орта бизнес үшін қолайлы
                                     веб-жобалар,
                                     серверлік бағдарламалық қамтамасыз етудің жұмысы: пошталық сервер, мәліметтер қоры сервері, қаржылық бағдарламалық қамтамасыз ету.
                                 </p>
                                 <p class="front-choose__text">Максималды сервер конфигурациясы оны іске қосуға мүмкіндік береді
                                     бірнеше үлкен
                                     веб-сайттар немесе онлайн дүкендер, CRM жүйесі, үлкен ресурстарды қажет ететін пошта сервері
                                     қозғалыс жүктемесі, кез келген
                                     қаржылық немесе бухгалтерлік бағдарламалық қамтамасыз ету, әзірлеу және бизнесті жобалау орталары.
                                 </p>',
                    'price' => '57 000 ╤/айдан бастап',
                ],
                [
                    'title' => 'Тікелей бұлт сервері',
                    'text' => '<p class="front-choose__text">Бұлттық сервер виртуалды жеке сервер сияқты ұйымдастырылған:
                                     кәдеге жарату
                                     физикалық сервер ресурстарының пайдаланушы таңдаған бөлігі. Бұлтты ақауларға төзімділік
                                     сервер қамтамасыз етілген
                                     басқа есептеу түйініндегі сервер деректерін көшіру арқылы. Екі түйін де қосылған
                                     жоғары жылдамдық
                                     өткізу қабілеті 56 Гбит/с болатын желі. Ақаулық туындаған жағдайда сақтық көшірме сервері бірден болады
                                     іске қосылады және
                                     сайт жұмысын тоқтатпайды - пайдаланушылар техникалық ақауларды байқамайды. Серверлер
                                     SSD дискілерінде жұмыс істеу,
                                     олардағы сайттар әдеттегі HDD дискілеріне қарағанда жылдамырақ ашылады.
                                 </p>
                                 <p class="front-choose__text">Максималды бұлттық сервер конфигурациясы: 16 процессор өзегі
                                     Intel Xeon E5-2630 бар
                                     3,2 ГГц, 64 ГБ жедел жады және 1000 ГБ SSD. Бұл үшін жеткілікті
                                     майор
                                     тәулік бойы үздіксіз жүктемесі бар интернет-дүкендер, корпоративтік порталдар
                                     халықаралық компаниялар,
                                     пошта серверлері, мәліметтер қоры серверлері, CRM жүйелері және т.б.
                                 </p>',
                    'price' => '110 000 ╤/айдан бастап',
                ],
                [
                    'title' => 'Арнайы сервер',
                    'text' => '<p class="front-choose__text">Арнайы сервер — жеке физикалық серверді жалға алуға арналған қызмет
                                     пайдаланушы сервердің барлық ресурстарына ие болған кезде біздің деректер орталығымыз.
                                 </p>
                                 <p class="front-choose__text">Бөлінген сервер әртүрлі тапсырмалар үшін қолайлы: хостингтен бастап
                                     кішкентай
                                     күрделі жоғары жүктеме жүйелерін іске қосқанға дейін интернет-дүкен. «Көршілердің» болмауы
                                     сервер толық береді
                                     әрекет еркіндігі - сервер жүктемесіне тек сіз және сіздің пайдаланушылар әсер етеді.
                                 </p>
                                 <p class="алдын ала таңдау_мәтін">
                                     Біз арнайы сервер хостингін ұйымдастыру үшін жаңа серверлік жабдықты пайдаланамыз
                                     және әлемнің жетекші IT-компанияларының бағдарламалық жасақтамасы:
                                     Intel, AMD, Microsoft, Juniper Networks, ISPsystem.
                                 </p>',
                    'price' => '250 000 ╤/айдан бастап',
                ],
                [
                    'title' => '1С негізіндегі бизнесті автоматтандыру',
                    'text' => '<p>1С тәжірибесімен бизнес-процестерді жеңілдетіңіз және оңтайландырыңыз. Біз сіздің кәсіпорынның қажеттіліктерін қанағаттандыратын жеке шешім әзірлейміз.</p>',
                    'price' => '',
                ],
                [
                    'title' => 'Серверлерді орнату және іске қосу',
                    'text' => '<p>Біздің кәсіпқойларымыздың арқасында IT-инфрақұрылымыңыздың тұрақты жұмысын қамтамасыз етіңіз. Жүйеңіздің үздіксіз жұмыс істеуін қамтамасыз ету үшін серверді орнату және конфигурациялау бойынша кешенді қызметтерді ұсынамыз.</p>',
                    'price' => '',
                ],
                [
                    'title' => 'Кәсіпорындарға арналған үздіксіз Wi-Fi роуминг',
                    'text' => '<p>Клиенттеріңізге және қызметкерлеріңізге бизнесіңіздің кез келген жерінде үздіксіз жоғары жылдамдықты Wi-Fi қолжетімділігін қамтамасыз етіңіз. Біз үздіксіз қосылуды қамтамасыз ететін интеллектуалды жүйені жобалаймыз және орнатамыз.</p>',
                    'price' => '',
                ],
                [
                    'title' => 'Бұлттық шешімдер',
                    'text' => '<p>Деректер мен қолданбаларды қауіпсіз және икемді бұлтқа жылжытыңыз. Біз сізге оңтайлы бұлттық шешімді таңдауға және конфигурациялауға көмектесеміз, сондай-ақ инфрақұрылымды тасымалдау мен қолдауды қамтамасыз етеміз.</p>',
                    'price' => '',
                ],
                [
                    'title' => 'Компьютердің перифериялық құрылғылары',
                    'text' => '<p>Қызметкерлеріңізді заманауи және сенімді есептеуіш құрылғылармен қамтамасыз етіңіз. Біз жоғары сапа стандарттарына сәйкес келетін ноутбуктерден принтерлерге дейін компьютерлік қосымша құрылғылардың кең ауқымын ұсынамыз.</p>',
                    'price' => '',
                ],
                [
                    'title' => 'Әлеуметтік медиа маркетингі',
                    'text' => '<p>Facebook және Instagram сияқты әлеуметтік медианы жылжыту қызметтерімен жаңа тұтынушыларды тартыңыз және желідегі беделіңізді арттырыңыз. Біздің мамандар сізге тиімді науқандар жасауға және мақсатты аудиторияңызды барынша тартуға көмектеседі.</p>',
                    'price' => '',
                ],
            ],
        ],
        'more' => 'Көбірек',
        'haveQuestions' => 'Сұрақтар бар? Қоңырау шал!',
        'submitForm' => [
            'phone' => 'Телефон'
        ],
        'paymentMethods' => 'Төлем әдістері',
        'termsOfUse' => 'Қолдану ережелері',
        'securityGuarantees' => 'Қауіпсіздік кепілдіктері',
        'privacyPolicy' => 'Құпиялылық саясаты',
        'refundPolicy' => 'Қайтару саясаты',
        'contacts' => 'Контактілер',
    ],
];

$result = [];
foreach ($language as $languageKey => $languageArray) {
    $result[$languageKey] = array_merge($commonLanguage, $languageArray);
}

return $result;