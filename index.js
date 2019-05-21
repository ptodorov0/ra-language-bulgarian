module.exports = {
    ra: {
        action: {
            add_filter: 'Добави филтър',
            add: 'Добави',
            back: 'Назад',
            bulk_actions: 'избран е 1 запис |||| %{smart_count} избрани записи',
            cancel: 'Отмени',
            clear_input_value: 'Изчисти полето',
            clone: 'Клонирай',
            confirm: 'Потвърди',
            create: 'Създай',
            delete: 'Изтрий',
            edit: 'Редактирай',
            export: 'Експортирай',
            list: 'Списък',
            refresh: 'Презареди',
            remove_filter: 'Премахни този филтър',
            remove: 'Премахни',
            save: 'Запази',
            search: 'Търсене',
            show: 'Покажи',
            sort: 'Сортирай',
            undo: 'Отмени',
        },
        boolean: {
            true: 'Да',
            false: 'Не',
        },
        page: {
            create: 'Създай %{name}',
            dashboard: 'Табло',
            edit: '%{name} #%{id}',
            error: 'Нещо се обърка',
            list: '%{name}',
            loading: 'Зареждане',
            not_found: 'Не е открито',
            show: '%{name} #%{id}',
        },
        input: {
            file: {
                upload_several:
                    'Спуснете файлове за качване или кликнете, за да изберете файл.',
                upload_single: 'Спуснете файл за качване или кликнете, за да го изберете.',
            },
            image: {
                upload_several:
                    'Спуснете снимки за качване или кликнете, за да изберете файл.',
                upload_single:
                    'Спуснете снимка за качване или кликнете, за да я изберете.',
            },
            references: {
                all_missing: 'Не мога да открия референтни данни.',
                many_missing:
                    'Поне една от асоциираните референции вече не е налична.',
                single_missing:
                    'Асоциираната референция вече не е налична.',
            },
        },
        message: {
            about: 'Относно',
            are_you_sure: 'Сигурен ли сте?',
            bulk_delete_content:
                'Сигурен ли сте, че искате да изтриете %{name}? |||| Сигурен ли сте, че искате да изтриете %{smart_count} записа?',
            bulk_delete_title:
                'Изтрий %{name} |||| Изтрий %{smart_count} %{name}',
            delete_content: 'Сигурен ли сте, че искате да изтриете този запис?',
            delete_title: 'Изтрий %{name} #%{id}',
            details: 'Детайли',
            error:
                "Възникна клиентска греша и вашата заявка не можа да бъде изпълнена.",
            invalid_form: 'Формата не е попълнена правилно. Моля проверете за грешки.',
            loading: 'Страницата зарежда, моля изчакайте.',
            no: 'Не',
            not_found:
                'Може би сте изписали грешен адрес или сте кликнали на объркан линк.',
            yes: 'да',
        },
        navigation: {
            no_results: 'Няма намерени резултати',
            no_more_results:
                'Страница %{page} е извън възможните граници. Опитайте с предходната страница.',
            page_out_of_boundaries: 'Страница %{page} е извън възможните граници',
            page_out_from_end: 'Не можете да продължите след последната страница',
            page_out_from_begin: 'Не можете да върнете по-назад от страница 1',
            page_range_info: '%{offsetBegin}-%{offsetEnd} от %{total}',
            page_rows_per_page: 'Редове на страница:',
            next: 'Следваща',
            prev: 'Предходна',
        },
        auth: {
            user_menu: 'Профил',
            username: 'Потребител',
            password: 'Парола',
            sign_in: 'Влез',
            sign_in_error: 'Грешка в оторизацията, моля опитайте отново',
            logout: 'Изход',
        },
        notification: {
            updated: 'Записът е редактиран |||| %{smart_count} записи бяха редактирани',
            created: 'Записът е създаден',
            deleted: 'Записът е изтрит |||| %{smart_count} записи бяха изтрити',
            bad_item: 'Невалиден запис',
            item_doesnt_exist: 'Записът не съществува',
            http_error: 'Грешка в комуникацията със сървъра',
            data_provider_error:
                'dataProvider грешка. Проверете конзолата за грешки.',
            canceled: 'Действието е отменено',
            logged_out: 'Вашата сесия е изтекла, моля влезте отново.',
        },
        validation: {
            required: 'Задължително',
            minLength: 'Трябва да съдържа поне %{min} символа',
            maxLength: 'Трябва да съдържа не повече от %{max} символа',
            minValue: 'Трябва да е минимум %{min}',
            maxValue: 'Трябва да е %{max} или по-малко',
            number: 'Трябва да съдържа число',
            email: 'Трябва да съдържа валиден email',
            oneOf: 'Трябва да е едно от: %{options}',
            regex: 'Трябва да отговаря на формат (regexp): %{pattern}',
        },
    },
};
