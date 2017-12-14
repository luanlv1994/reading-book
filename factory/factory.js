/**
 * Created by Asus on 12/14/2017.
 */
app.factory('Factory', function ($resource, ADDRESS_BACKEND) {
        return $resource(ADDRESS_BACKEND + '/:category/:categoryExtend/:id', null,
            {
                'doGet': {method: 'GET', isArray: false}
            });
    }
);