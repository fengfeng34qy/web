```bash
CREATE TABLE `languages` (
  `id` int NOT NULL AUTO_INCREMENT,
  `language` char(20) NOT NULL DEFAULT '' COMMENT '语言',
  `name` char(20) DEFAULT NULL COMMENT '名称',
  `tag` varchar(100) DEFAULT NULL COMMENT '标签',
  `createtime` char(20) NOT NULL DEFAULT '' COMMENT '创建时间',
  `updatetime` char(20) NOT NULL DEFAULT '' COMMENT '最后更新时间',
  PRIMARY KEY (`id`),
  UNIQUE KEY `name` (`name`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8;

INSERT INTO `languages` (language, name, content, createtime, updatetime) VALUES ('javascript', 'js', 'createtime', 'USA');
```

```bash
CREATE TABLE users (
  id int(11) NOT NULL AUTO_INCREMENT,
  username char(20) UNIQUE COMMENT '用户名',
  password char(20) COMMENT '密码',
  nickname varchar(20) COMMENT '昵称',
  face char(20) COMMENT '头像',
  role char(10) COMMENT '角色',
  email char(40) COMMENT '邮箱',
  phone char(20) COMMENT '手机号',
  token char(20) COMMENT '令牌',
  createtime char(20) NOT NULL DEFAULT '' COMMENT '创建时间',
  updatetime char(20) NOT NULL DEFAULT '' COMMENT '最后更新时间',
  PRIMARY KEY (id)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8;

CREATE TABLE `users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `username` char(20) UNIQUE DEFAULT NULL COMMENT '用户名',
  `password` char(20) DEFAULT NULL COMMENT '密码',
  `nickname` varchar(20) DEFAULT NULL COMMENT '昵称',
  `face` char(20) DEFAULT NULL COMMENT '头像',
  `role` char(10) DEFAULT NULL COMMENT '角色',
  `email` char(40) UNIQUE DEFAULT NULL COMMENT '邮箱',
  `phone` char(20) DEFAULT NULL COMMENT '手机号',
  `token` char(20) DEFAULT NULL COMMENT '令牌',
  `timeout` char(20) DEFAULT NULL COMMENT '超时时间',
  `createtime` char(20) NOT NULL DEFAULT '' COMMENT '创建时间',
  `updatetime` char(20) NOT NULL DEFAULT '' COMMENT '最后更新时间',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8;

INSERT INTO `users` (name, password, face, role, createtime, updatetime) VALUES ('javascript', 'js', 'createtime', 'USA');
```

```bash
UPDATE users SET password="sss",token="aaa" WHERE username='admin';
```

```bash
CREATE TABLE articles (
  id int(11) NOT NULL AUTO_INCREMENT,
  author CHAR(20) NOT NULL DEFAULT '' COMMENT '作者',
  content text(60000) COMMENT '内容',
  module CHAR(20) COMMENT '所属模块',
  star CHAR(20) COMMENT '星级',
  state CHAR(20) COMMENT '状态',
  tag CHAR(20) COMMENT '标签',
  title CHAR(22) COMMENT '文章标题',
  createtime CHAR(20) NOT NULL DEFAULT '' COMMENT '创建时间',
  updatetime CHAR(20) NOT NULL DEFAULT '' COMMENT '最后更新时间',
  PRIMARY KEY (id)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8;
```