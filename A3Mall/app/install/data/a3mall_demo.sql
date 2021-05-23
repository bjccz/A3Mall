SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";

CREATE TABLE `mall_system_purview` (
                                       `id` int(11) NOT NULL,
                                       `pid` int(11) NOT NULL DEFAULT 0,
                                       `name` varchar(128) NOT NULL DEFAULT '',
                                       `module` varchar(255) NOT NULL DEFAULT '',
                                       `controller` varchar(255) NOT NULL,
                                       `method` varchar(255) NOT NULL,
                                       `param` varchar(255) NOT NULL DEFAULT '',
                                       `status` tinyint(1) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

INSERT INTO `mall_system_purview` (`id`, `pid`, `name`, `module`, `controller`, `method`, `param`, `status`) VALUES
(1, 0, '平台', '', '', '', '', 0),
(2, 0, '商品', '', '', '', '', 0),
(3, 0, '订单', '', '', '', '', 0),
(4, 0, '会员', '', '', '', '', 0),
(5, 0, '营销', '', '', '', '', 0),
(6, 0, '统计', '', '', '', '', 0),
(7, 0, '系统', '', '', '', '', 0),
(8, 0, '微信公众号', '', '', '', '', 0),
(9, 0, '微信小程序', '', '', '', '', 0),
(10, 0, '', '', '', '', '', 1),
(11, 0, '', '', '', '', '', 1),
(12, 0, '', '', '', '', '', 1),
(13, 1, '控制面板', 'admin', '', '', '', 0),
(14, 13, '站点首页', 'admin', 'platform.index', 'index', '', 0),
(15, 13, '系统信息', 'admin', 'platform.index', 'info', '', 0),
(16, 13, '清理缓存', 'admin', 'platform.index', 'cache', '', 0),
(17, 2, '商品管理', 'admin', '', '', '', 0),
(18, 17, '列表', 'admin', 'products.index', 'index', '', 0),
(19, 17, '编辑商品', 'admin', 'products.index', 'editor', '', 0),
(20, 17, '删除', 'admin', 'products.index', 'delete', '', 0),
(21, 17, '字段编辑', 'admin', 'products.index', 'field', '', 0),
(22, 2, '商品分类', 'admin', '', '', '', 0),
(23, 22, '列表', 'admin', 'products.category', 'index', '', 0),
(24, 22, '编辑', 'admin', 'products.category', 'editor', '', 0),
(25, 22, '删除', 'admin', 'products.category', 'delete', '', 0),
(26, 22, '字段编辑', 'admin', 'products.category', 'field', '', 0),
(27, 2, ' 品牌管理', 'admin', '', '', '', 0),
(28, 27, '列表', 'admin', 'products.brand', 'index', '', 0),
(29, 27, '编辑', 'admin', 'products.brand', 'editor', '', 0),
(30, 27, '删除', 'admin', 'products.brand', 'delete', '', 0),
(31, 27, '字段编辑', 'admin', 'products.brand', 'field', '', 0),
(32, 2, ' 规格管理', 'admin', '', '', '', 0),
(33, 32, '列表', 'admin', 'products.attribute', 'index', '', 0),
(34, 32, '编辑', 'admin', 'products.attribute', 'editor', '', 0),
(35, 32, '删除', 'admin', 'products.attribute', 'delete', '', 0),
(36, 2, ' 模型管理', 'admin', '', '', '', 0),
(37, 36, '列表', 'admin', 'products.model', 'index', '', 0),
(38, 36, '编辑', 'admin', 'products.model', 'editor', '', 0),
(39, 36, '删除', 'admin', 'products.model', 'delete', '', 0),
(40, 3, ' 订单管理', 'admin', '', '', '', 0),
(41, 40, '列表', 'admin', 'order.index', 'index', '', 0),
(42, 40, '详情', 'admin', 'order.index', 'detail', '', 0),
(43, 40, '支付', 'admin', 'order.index', 'payment', '', 0),
(44, 40, '发货', 'admin', 'order.index', 'distribution', '', 0),
(45, 40, '退款', 'admin', 'order.index', 'refundment', '', 0),
(46, 40, '完成', 'admin', 'order.index', 'complete', '', 0),
(47, 40, '删除', 'admin', 'order.index', 'delete', '', 0),
(48, 3, '收款管理', 'admin', '', '', '', 0),
(49, 48, '列表', 'admin', 'order.collection', 'index', '', 0),
(50, 48, '详情', 'admin', 'order.collection', 'detail', '', 0),
(51, 3, '发货管理', 'admin', '', '', '', 0),
(52, 51, '列表', 'admin', 'order.delivery', 'index', '', 0),
(53, 51, '详情', 'admin', 'order.delivery', 'detail', '', 0),
(54, 3, '退款管理', 'admin', '', '', '', 0),
(55, 54, '列表', 'admin', 'order.refundment', 'index', '', 0),
(56, 54, '详情', '', 'order.refundment', 'detail', '', 0),
(57, 4, '评价管理', 'admin', '', '', '', 0),
(58, 57, '列表', 'admin', 'users.comment', 'index', '', 0),
(59, 57, '详情', 'admin', 'users.comment', 'detail', '', 0),
(60, 57, '删除', 'admin', 'users.comment', 'delete', '', 0),
(61, 4, '咨询管理', 'admin', '', '', '', 0),
(62, 61, '列表', 'admin', 'users.consult', 'index', '', 0),
(63, 61, '详情', 'admin', 'users.consult', 'detail', '', 0),
(64, 61, '删除', 'admin', 'users.consult', 'delete', '', 0),
(65, 4, '留言管理', 'admin', '', '', '', 0),
(66, 65, '列表', 'admin', 'comment.message', 'index', '', 0),
(67, 65, '详情', 'admin', 'comment.message', 'detail', '', 0),
(68, 65, '删除', 'admin', 'comment.message', 'delete', '', 0),
(69, 4, '建议管理', 'admin', '', '', '', 0),
(70, 69, '列表', 'admin', 'comment.complain', 'index', '', 0),
(71, 69, '详情', 'admin', 'comment.complain', 'detail', '', 0),
(72, 69, '删除', 'admin', 'comment.complain', 'delete', '', 0),
(73, 4, '举报管理', 'admin', '', '', '', 0),
(74, 73, '列表', 'admin', 'comment.report', 'index', '', 0),
(75, 73, '详情', 'admin', 'comment.report', 'detail', '', 0),
(76, 73, '删除', 'admin', 'comment.report', 'delete', '', 0),
(77, 4, '反馈管理', 'admin', '', '', '', 0),
(78, 77, '列表', 'admin', 'comment.feedback', 'index', '', 0),
(79, 77, '详情', 'admin', 'comment.feedback', 'detail', '', 0),
(80, 77, '删除', 'admin', 'comment.feedback', 'delete', '', 0),
(81, 1, '文章管理', 'admin', '', '', '', 0),
(82, 81, '列表', 'admin', 'platform.archives', 'index', '', 0),
(83, 81, '编辑', 'admin', 'platform.archives', 'editor', '', 0),
(84, 81, '删除', 'admin', 'platform.archives', 'delete', '', 0),
(85, 81, '字段编辑', 'admin', 'platform.archives', 'field', '', 0),
(86, 1, '文章分类', 'admin', '', '', '', 0),
(87, 86, '列表', 'admin', 'platform.category', 'index', '', 0),
(88, 86, '编辑', 'admin', 'platform.category', 'editor', '', 0),
(89, 86, '删除', 'admin', 'platform.category', 'delete', '', 0),
(90, 86, '字段编辑', 'admin', 'platform.category', 'field', '', 0),
(91, 1, '单页管理', 'admin', '', '', '', 0),
(92, 91, '列表', 'admin', 'platform.page', 'index', '', 0),
(93, 91, '编辑', 'admin', 'platform.page', 'editor', '', 0),
(94, 91, '删除', 'admin', 'platform.page', 'delete', '', 0),
(95, 91, '字段编辑', 'admin', 'platform.page', 'field', '', 0),
(96, 4, '会员管理', 'admin', '', '', '', 0),
(97, 96, '列表', 'admin', 'users.index', 'index', '', 0),
(98, 96, '编辑', 'admin', 'users.index', 'editor', '', 0),
(99, 96, '删除', 'admin', 'users.index', 'delete', '', 0),
(100, 4, '会员分组', 'admin', '', '', '', 0),
(101, 100, '列表', 'admin', 'users.group', 'index', '', 0),
(102, 100, '编辑', 'admin', 'users.group', 'editor', '', 0),
(103, 100, '删除', 'admin', 'users.group', 'delete', '', 0),
(104, 1, '导航管理', 'admin', '', '', '', 0),
(105, 104, '列表', 'admin', 'platform.navigation', 'index', '', 0),
(106, 104, '编辑', 'admin', 'platform.navigation', 'editor', '', 0),
(107, 104, '删除', 'admin', 'platform.navigation', 'delete', '', 0),
(108, 92, '字段编辑', 'admin', 'platform.navigation', 'field', '', 0),
(113, 1, '数据管理', 'admin', '', '', '', 0),
(114, 113, '列表', 'admin', 'platform.data', 'index', '', 0),
(115, 113, '编辑', 'admin', 'platform.data', 'editor', '', 0),
(116, 113, '删除', 'admin', 'platform.data', 'delete', '', 0),
(117, 1, '词组管理', 'admin', '', '', '', 0),
(118, 117, '列表', 'admin', 'platform.keywords', 'index', '', 0),
(119, 117, '编辑', 'admin', 'platform.keywords', 'editor', '', 0),
(120, 117, '删除', 'admin', 'platform.keywords', 'delete', '', 0),
(121, 7, '站点管理', 'admin', '', '', '', 0),
(122, 121, '站点设置', 'admin', 'system.setting', 'index', '', 0),
(123, 121, '邮箱设置', 'admin', 'system.setting', 'email', '', 0),
(124, 2, '配送管理', 'admin', '', '', '', 0),
(125, 124, '列表', 'admin', 'products.distribution', 'index', '', 0),
(126, 124, '编辑', 'admin', 'products.distribution', 'editor', '', 0),
(127, 124, '删除', 'admin', 'products.distribution', 'delete', '', 0),
(128, 124, '字段编辑', 'admin', 'products.distribution', 'field', '', 0),
(129, 2, '物流管理', 'admin', '', '', '', 0),
(130, 129, '列表', 'admin', 'products.freight', 'index', '', 0),
(131, 129, '编辑', 'admin', 'products.freight', 'editor', '', 0),
(132, 129, '删除', 'admin', 'products.freight', 'delete', '', 0),
(133, 129, '字段编辑', 'admin', 'products.freight', 'field', '', 0),
(134, 2, '地区管理', 'admin', '', '', '', 0),
(135, 134, '列表', 'admin', 'products.area', 'index', '', 0),
(136, 134, '编辑', 'admin', 'products.area', 'editor', '', 0),
(137, 134, '删除', 'admin', 'products.area', 'delete', '', 0),
(138, 134, '字段编辑', 'admin', 'products.area', 'field', '', 0),
(139, 2, '发货管理', 'admin', '', '', '', 0),
(140, 139, '列表', 'admin', 'products.deliver', 'index', '', 0),
(141, 139, '编辑', 'admin', 'products.deliver', 'editor', '', 0),
(142, 139, '删除', 'admin', 'products.deliver', 'delete', '', 0),
(147, 7, '用户管理', 'admin', '', '', '', 0),
(148, 147, '列表', 'admin', 'system.users', 'index', '', 0),
(149, 147, '编辑', 'admin', 'system.users', 'editor', '', 0),
(150, 147, '删除', 'admin', 'system.users', 'delete', '', 0),
(151, 147, '字段编辑', 'admin', 'system.users', 'field', '', 0),
(152, 7, '权限管理', 'admin', '', '', '', 0),
(153, 152, '列表', 'admin', 'system.purview', 'index', '', 0),
(154, 152, '编辑', 'admin', 'system.purview', 'editor', '', 0),
(155, 152, '删除', 'admin', 'system.purview', 'delete', '', 0),
(156, 7, '系统日志', 'admin', '', '', '', 0),
(157, 156, '登录日志', 'admin', 'system.log', 'index', '', 0),
(158, 211, '资金日志', 'admin', 'users.finance', 'fund', '', 0),
(159, 211, '积分日志', 'admin', 'users.finance', 'point', '', 0),
(160, 211, '经验日志', 'admin', 'users.finance', 'exp', '', 0),
(161, 152, '字段编辑', 'admin', 'role.purview', 'field', '', 0),
(162, 5, '优惠劵管理', 'admin', '', '', '', 0),
(163, 162, '列表', 'admin', 'promotion.bonus', 'index', '', 0),
(164, 162, '编辑', 'admin', 'promotion.bonus', 'editor', '', 0),
(165, 162, '删除', 'admin', 'promotion.bonus', 'delete', '', 0),
(166, 162, '字段编辑', 'admin', 'promotion.bonus', 'field', '', 0),
(173, 218, '搜索分析', 'admin', 'statistics.search', 'index', '', 0),
(174, 218, '搜索排行', 'admin', 'statistics.search', 'ranking', '', 0),
(175, 218, '搜索明细', 'admin', 'statistics.search', 'detailed', '', 0),
(184, 218, '清空搜索排行', 'admin', 'statistics.search', 'search_goods_clear', '', 0),
(185, 218, '清空搜索明细', 'admin', 'statistics.search', 'detailed_clear', '', 0),
(186, 5, '订单活动', 'admin', '', '', '', 0),
(187, 186, '列表', 'admin', 'promotion.index', 'index', '', 0),
(188, 186, '编辑', 'admin', 'promotion.index', 'editor', '', 0),
(189, 186, '删除', 'admin', 'promotion.index', 'delete', '', 0),
(190, 5, '会员特价', 'admin', '', '', '', 0),
(191, 190, '列表', 'admin', 'promotion.special', 'index', '', 0),
(192, 190, '编辑', 'admin', 'promotion.special', 'editor', '', 0),
(193, 190, '删除', 'admin', 'promotion.special', 'delete', '', 0),
(194, 5, '团购活动', 'admin', '', '', '', 0),
(195, 194, '列表', 'admin', 'promotion.regiment', 'index', '', 0),
(197, 194, '删除', 'admin', 'promotion.regiment', 'delete', '', 0),
(198, 194, '字段编辑', 'admin', 'promotion.regiment', 'field', '', 0),
(199, 5, '秒杀活动', 'admin', '', '', '', 0),
(200, 199, '列表', 'admin', 'promotion.second', 'index', '', 0),
(202, 199, '删除', 'admin', 'promotion.second', 'delete', '', 0),
(203, 199, '字段编辑', 'admin', 'promotion.second', 'field', '', 0),
(204, 5, '积分商品', 'admin', '', '', '', 0),
(205, 204, '列表', 'admin', 'promotion.point', 'index', '', 0),
(207, 204, '删除', 'admin', 'promotion.point', 'delete', '', 0),
(208, 204, '字段编辑', 'admin', 'promotion.point', 'field', '', 0),
(209, 96, '会员日志', 'admin', 'users.index', 'log', '', 0),
(210, 96, '会员财务', 'admin', 'users.index', 'finance', '', 0),
(211, 4, '财务管理', '', '', '', '', 0),
(212, 211, '提现申请', 'admin', 'users.finance', 'apply', '', 0),
(213, 211, '佣金日志', 'admin', 'users.finance', 'index', '', 0),
(214, 211, '处理提现申请', 'admin', 'users.finance', 'handle', '', 0),
(215, 4, '分销管理', 'admin', '', '', '', 0),
(216, 215, '分销设置', 'admin', 'users.setting', 'index', '', 0),
(217, 215, '会员列表', 'admin', 'users.spread', 'index', '', 0),
(218, 6, ' 搜索统计', 'admin', '', '', '', 0),
(219, 121, '门店设置', 'admin', 'system.setting', 'store', '', 0),
(220, 121, '上传设置', 'admin', 'system.setting', 'upload', '', 0),
(221, 7, ' 短信管理', '', '', '', '', 0),
(222, 221, '短信设置', 'admin', 'system.sms', 'setting', '', 0),
(223, 221, '短信模板', 'admin', 'system.sms', 'template', '', 0),
(224, 221, '编辑模板', 'admin', 'system.sms', 'template_editor', '', 0),
(225, 1, '图片管理', '', '', '', '', 0),
(226, 225, '列表', 'admin', 'platform.images', 'index', '', 0),
(227, 225, '删除', 'admin', 'platform.images', 'delete', '', 0),
(228, 225, '字段编辑', 'admin', 'platform.images', 'field', '', 0),
(229, 1, '资源管理', '', '', '', '', 0),
(230, 229, '列表', 'admin', 'platform.media', 'index', '', 0),
(231, 229, '删除', 'admin', 'platform.media', 'delete', '', 0),
(232, 229, '字段编辑', 'admin', 'platform.media', 'field', '', 0),
(233, 1, '版本管理', '', '', '', '', 0),
(234, 233, '列表', 'admin', 'platform.version', 'index', '', 0),
(235, 233, '编辑', 'admin', 'platform.version', 'editor', '', 0),
(236, 233, '删除', 'admin', 'platform.version', 'delete', '', 0),
(237, 17, '编辑拼团', 'admin', 'products.index', 'editor_group', '', 0),
(238, 17, '编辑团购', 'admin', 'products.index', 'editor_regiment', '', 0),
(239, 17, '编辑秒杀', 'admin', 'products.index', 'editor_second', '', 0),
(240, 17, '编辑积分', 'admin', 'products.index', 'editor_point', '', 0),
(247, 3, '订单设置', 'admin', '', '', '', 0),
(248, 247, '基本设置', 'admin', 'order.setting', 'index', '', 0),
(255, 4, '会员标签', '', '', '', '', 0),
(256, 255, '列表', 'admin', 'users.tags', 'index', '', 0),
(257, 255, '编辑', 'admin', 'users.tags', 'editor', '', 0),
(258, 255, '删除', 'admin', 'users.tags', 'delete', '', 0),
(259, 96, '会员标签', 'admin', 'users.index', 'tags', '', 0),
(260, 4, '会员设置', '', '', '', '', 0),
(261, 260, '基础设置', 'admin', 'users.setting', 'base', '', 0),
(262, 260, '注册协议', 'admin', 'users.setting', 'register', '', 0),
(263, 211, '退款日志', 'admin', 'users.finance', 'refund', '', 0),
(264, 121, '物流设置', 'admin', 'system.setting', 'delivery', '', 0),
(265, 40, '物流', 'admin', 'order.index', 'express', '', 0),
(276, 3, '充值管理', 'admin', '', '', '', 0),
(277, 276, '列表', 'admin', 'order.rechange', 'index', '', 0),
(278, 276, '删除', 'admin', 'order.rechange', 'delete', '', 0),
(279, 8, '公众号设置', 'admin', '', '', '', 0),
(280, 279, '接口设置', 'admin', 'wechat.index', 'api', '', 0),
(281, 279, '支付设置', 'admin', 'wechat.index', 'pay', '', 0),
(282, 8, '粉丝管理', '', '', '', '', 0),
(283, 282, '列表', 'admin', 'wechat.fans', 'index', '', 0),
(284, 282, '同步粉丝', 'admin', 'wechat.fans', 'sync_fans', '', 0),
(285, 282, '同步黑名单', 'admin', 'wechat.fans', 'sync_black', '', 0),
(286, 282, '同步标签', 'admin', 'wechat.fans', 'sync_tags', '', 0),
(287, 282, '加入黑名单', 'admin', 'wechat.fans', 'add_black', '', 0),
(288, 282, '移出黑名单', 'admin', 'wechat.fans', 'remove_black', '', 0),
(289, 282, '删除', 'admin', 'wechat.fans', 'delete', '', 0),
(290, 8, '图文管理', 'admin', '', '', '', 0),
(291, 290, '列表', 'admin', 'wechat.article', 'index', '', 0),
(292, 290, '编辑', 'admin', 'wechat.article', 'editor', '', 0),
(293, 290, '删除', 'admin', 'wechat.article', 'delete', '', 0),
(294, 279, '菜单管理', 'admin', 'wechat.index', 'menu', '', 0),
(295, 8, '回复管理', 'admin', '', '', '', 0),
(296, 295, '自动回复', 'admin', 'wechat.reply', 'index', '', 0),
(297, 295, '关注回复', 'admin', 'wechat.reply', 'subscribe', '', 0),
(298, 295, '默认回复', 'admin', 'wechat.reply', 'defaults', '', 0),
(299, 295, '编辑字段', 'admin', 'wechat.reply', 'field', '', 0),
(300, 295, '编辑', 'admin', 'wechat.reply', 'editor', '', 0),
(301, 295, '删除', 'admin', 'wechat.reply', 'delete', '', 0),
(302, 9, '小程序设置', 'admin', '', '', '', 0),
(303, 302, '支付设置', 'admin', 'wechat.mini', 'pay', '', 0),
(304, 302, '基本设置', 'admin', 'wechat.mini', 'base', '', 0),
(305, 9, '小程序码', 'admin', '', '', '', 0),
(306, 305, '列表', 'admin', 'wechat.qrcode', 'index', '', 0),
(307, 305, '删除', 'admin', 'wechat.qrcode', 'delete', '', 0),
(308, 305, '清空', 'admin', 'wechat.qrcode', 'remove', '', 0),
(310, 9, '订阅消息', 'admin', '', '', '', 0),
(311, 310, '列表', 'admin', 'wechat.subscribe', 'index', '', 0),
(312, 310, '编辑', 'admin', 'wechat.subscribe', 'editor', '', 0),
(313, 310, '删除', 'admin', 'wechat.subscribe', 'delete', '', 0),
(314, 121, '联系方式', 'admin', 'system.setting', 'address', '', 0);


ALTER TABLE `mall_system_purview`
    ADD PRIMARY KEY (`id`);


ALTER TABLE `mall_system_purview`
    MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=315;
