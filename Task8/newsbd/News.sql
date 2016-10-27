-- phpMyAdmin SQL Dump
-- version 4.5.2
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: 2016-10-03 10:50:34
-- 服务器版本： 10.1.16-MariaDB
-- PHP Version: 5.6.24

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `NewsBaidu`
--

-- --------------------------------------------------------

--
-- 表的结构 `News`
--

CREATE TABLE `News` (
  `newsId` int(11) NOT NULL COMMENT '自动增长',
  `newsType` varchar(10) NOT NULL,
  `newsTitle` varchar(100) NOT NULL,
  `newsImg` varchar(200) NOT NULL,
  `addTime` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='新闻';

--
-- 转存表中的数据 `News`
--

INSERT INTO `News` (`newsId`, `newsType`, `newsTitle`, `newsImg`, `addTime`) VALUES
(68, '社会', '习近平：铭记历史缅怀英烈 崇尚英雄争做先锋', '../BaiduNews/icon/social1.jpg', '2016-09-30'),
(69, '社会', '咸阳一的哥捡到7.5万巨款 求助110寻找失主', '../BaiduNews/icon/social2.JPEG', '2016-09-30'),
(75, '百家', '有关seo常见的简单术语有哪些？', '../BaiduNews/icon/various1.jpeg', '2016-10-01'),
(76, '百家', '无控制、共同控制、重大影响等三无股权投资怎么会计核算', '../BaiduNews/icon/various2.JPEG', '2016-09-01'),
(77, '百家', '国行Note7陷罗生门，三星发声明引权威第三方机构质检正视听', '../BaiduNews/icon/various3.JPEG', '2016-10-02'),
(78, '社会', '长沙也有胶囊酒店了', '../BaiduNews/icon/social3.JPEG', '2016-10-03'),
(79, '本地', '“北京110”手机报警平台试运行 可用APP报警', '../BaiduNews/icon/local1.JPEG', '2016-10-02'),
(80, '本地', '联想近18亿卖北京联想大厦 两周抛售43个地产项目', '../BaiduNews/icon/local2.JPEG', '2016-10-03'),
(81, '本地', '承接北京城市副中心,通州怎样了', '../BaiduNews/icon/local3.JPEG', '2016-10-03'),
(82, '国际', '美基本完成接纳8.5万名难民目标', '../BaiduNews/icon/international1.JPEG', '2016-10-02'),
(83, '国际', '大陆旅行社赴台新路线：响应国家号召只去蓝营县市', '../BaiduNews/icon/international2.JPEG', '2016-10-03'),
(84, '国际', '英国正逐步推进数字货币合法化进程', '../BaiduNews/icon/international3.JPEG', '2016-10-03'),
(85, '科技', '这才是黑科技 诺基亚或推出五边形智能手机', '../BaiduNews/icon/science1.JPEG', '2016-10-03'),
(86, '科技', '用背部“听”声音 神奇设备为失聪人士带来福音', '../BaiduNews/icon/science2.JPEG', '2016-10-03'),
(87, '科技', '替代手机和电脑的会不会是“第二皮肤”？', '../BaiduNews/icon/science3.JPEG', '2016-10-03'),
(88, '', 'uythj', '', '0000-00-00'),
(89, '', '123&lt;script&gt;alert(&#039;操作成功&#039;);&lt;/script&gt;', '', '0000-00-00'),
(90, '', '123&lt;script&gt;alert(&#039;操作成功&#039;);&lt;/script&gt;', '', '0000-00-00');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `News`
--
ALTER TABLE `News`
  ADD PRIMARY KEY (`newsId`),
  ADD KEY `newsTitle` (`newsTitle`);

--
-- 在导出的表使用AUTO_INCREMENT
--

--
-- 使用表AUTO_INCREMENT `News`
--
ALTER TABLE `News`
  MODIFY `newsId` int(11) NOT NULL AUTO_INCREMENT COMMENT '自动增长', AUTO_INCREMENT=91;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
