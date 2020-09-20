function UserDao(connection) {
    this._connection = connection;
}

UserDao.prototype.create = function (user, callback) {
    this._connection.query('INSERT INTO user SET ?', user, callback);
};

UserDao.prototype.list = function (callback) {
    this._connection.query('select * from user', callback);
};

UserDao.prototype.searchById = function (id, callback) {
    this._connection.query("select * from user where id = ?", [id], callback);
};

UserDao.prototype.searchByPocketNick = function (pocketNick, callback) {
    this._connection.query("select * from user where pocketNick = ?", [pocketNick], callback);
};

UserDao.prototype.searchByEmail = function (email, callback) {
    this._connection.query("select * from user where email = ?", [email], callback);
};

module.exports = function () {
    return UserDao;
};