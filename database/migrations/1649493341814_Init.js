// module.exports = {
//     'up': 'CREATE TABLE users (user_id INT NOT NULL, UNIQUE KEY user_id (user_id), name TEXT )' ,
//     'up': 'CREATE TABLE new_users (user_id INT NOT NULL, UNIQUE KEY user_id (user_id), name TEXT)',
//     'down': 'DROP TABLE users',
//     'down': 'DROP TABLE new_users'
// };
module.exports = {
  'up' (conn, cb) {
    conn.query('CREATE TABLE programmingLanguages (createdAt timestamp NOT NULL DEFAULT now(), updatedAt timestamp NOT NULL DEFAULT now(), deletedAt timestamp, name VARCHAR(36) NOT NULL, writeNowPerc INT NOT NULL, changes INT NOT NULL, writeNow INT NOT NULL, useSec INT NOT NULL, usePrim INT NOT NULL, likeIndex FLOAT NOT NULL, UNIQUE KEY name (name))', function(err, res){if(err) console.log(err);});
    conn.query('CREATE TABLE professionList (createdAt timestamp NOT NULL DEFAULT now(), updatedAt timestamp NOT NULL DEFAULT now(), deletedAt timestamp, id VARCHAR(36) DEFAULT (uuid()) NOT NULL, name TEXT NOT NULL, nameEn TEXT, UNIQUE KEY id (id), requirements JSON NOT NULL, requirementsEn JSON, link TEXT NOT NULL, averagePayment TEXT NOT NULL, maxPayment TEXT NOT NULL, vacanciesNumber INT NOT NULL)', function(err, res){if(err) console.log(err);});
    conn.query('CREATE TABLE faqList (createdAt timestamp NOT NULL DEFAULT now(), updatedAt timestamp NOT NULL DEFAULT now(), deletedAt timestamp, id VARCHAR(36) DEFAULT (uuid()) NOT NULL, question TEXT NOT NULL, UNIQUE KEY id (id), questionEn TEXT, answear TEXT NOT NULL, answearEn TEXT)', function(err, res){if(err) console.log(err);});
    conn.query('CREATE TABLE employmentMaterials (createdAt timestamp NOT NULL DEFAULT now(), updatedAt timestamp NOT NULL DEFAULT now(), deletedAt timestamp, id VARCHAR(36) DEFAULT (uuid()) NOT NULL, info TEXT NOT NULL, UNIQUE KEY id (id), infoEn TEXT, link TEXT NOT NULL)', function(err, res){if(err) console.log(err);});
    conn.query('CREATE TABLE partnersEmploymentInfo (createdAt timestamp NOT NULL DEFAULT now(), updatedAt timestamp NOT NULL DEFAULT now(), deletedAt timestamp, id VARCHAR(36) DEFAULT (uuid()) NOT NULL, name TEXT NOT NULL, UNIQUE KEY id (id), link TEXT NOT NULL, headerText JSON NOT NULL, mainText JSON NOT NULL, headerTextEn JSON, mainTextEn JSON)', function(err, res){if(err) console.log(err);});
    cb();
  },
  'down' (conn, cb) {
    conn.query('DROP TABLE programmingLanguages');
    conn.query('DROP TABLE professionList');
    conn.query('DROP TABLE faqList');
    conn.query('DROP TABLE employmentMaterials');
    conn.query('DROP TABLE partnersEmploymentInfo');
    cb();
  } 
};