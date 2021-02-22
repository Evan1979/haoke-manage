/*
 Navicat Premium Data Transfer

 Source Server         : mysql
 Source Server Type    : MySQL
 Source Server Version : 80018
 Source Host           : localhost:3306
 Source Schema         : haoke

 Target Server Type    : MySQL
 Target Server Version : 80018
 File Encoding         : 65001

 Date: 21/02/2021 23:15:04
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for stuclass
-- ----------------------------
DROP TABLE IF EXISTS `stuclass`;
CREATE TABLE `stuclass`  (
  `classId` int(11) NOT NULL AUTO_INCREMENT,
  `className` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  PRIMARY KEY (`classId`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 3 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of stuclass
-- ----------------------------
INSERT INTO `stuclass` VALUES (1, '清华1班');
INSERT INTO `stuclass` VALUES (2, '清华2班');

-- ----------------------------
-- Table structure for student
-- ----------------------------
DROP TABLE IF EXISTS `student`;
CREATE TABLE `student`  (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `SName` varchar(30) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `Age` int(11) NULL DEFAULT NULL,
  `ClassId` int(11) NULL DEFAULT NULL,
  PRIMARY KEY (`Id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 5 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of student
-- ----------------------------
INSERT INTO `student` VALUES (1, 'evan1', 10, 1);
INSERT INTO `student` VALUES (2, 'rain1', 11, 1);
INSERT INTO `student` VALUES (3, 'flora1', 12, 1);
INSERT INTO `student` VALUES (4, 'table', 22, 2);

-- ----------------------------
-- Table structure for tb_estate
-- ----------------------------
DROP TABLE IF EXISTS `tb_estate`;
CREATE TABLE `tb_estate`  (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '楼盘名称',
  `province` varchar(10) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '所在省',
  `city` varchar(10) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '所在市',
  `area` varchar(10) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '所在区',
  `address` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '具体地址',
  `year` varchar(10) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '建筑年代',
  `type` varchar(10) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '建筑类型',
  `property_cost` varchar(10) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '物业费',
  `property_company` varchar(20) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '物业公司',
  `developers` varchar(20) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '开发商',
  `created` datetime(0) NULL DEFAULT NULL COMMENT '创建时间',
  `updated` datetime(0) NULL DEFAULT NULL COMMENT '更新时间',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 1006 CHARACTER SET = utf8 COLLATE = utf8_general_ci COMMENT = '楼盘表' ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of tb_estate
-- ----------------------------
INSERT INTO `tb_estate` VALUES (1, '凯旋城', '广东', '广州', '番禺', '长城公馆', NULL, NULL, NULL, NULL, NULL, NULL, NULL);
INSERT INTO `tb_estate` VALUES (1005, '珠江新城', '广东', '广州', '海珠', '珠江新城', NULL, NULL, NULL, NULL, NULL, NULL, NULL);

-- ----------------------------
-- Table structure for tb_house_resources
-- ----------------------------
DROP TABLE IF EXISTS `tb_house_resources`;
CREATE TABLE `tb_house_resources`  (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `title` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '房源标题',
  `estate_id` bigint(20) NULL DEFAULT NULL COMMENT '楼盘id',
  `building_num` varchar(5) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '楼号（栋）',
  `building_unit` varchar(5) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '单元号',
  `building_floor_num` varchar(5) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '门牌号',
  `rent` int(11) NULL DEFAULT NULL COMMENT '租金',
  `rent_method` tinyint(1) NULL DEFAULT NULL COMMENT '租赁方式，1-整租，2-合租',
  `payment_method` tinyint(1) NULL DEFAULT NULL COMMENT '支付方式，1-付一押一，2-付三押一，3-\r\n付六押一，4-年付押一，5-其它',
  `house_type` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '户型，如：2室1厅1卫',
  `covered_area` varchar(10) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '建筑面积',
  `use_area` varchar(10) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '使用面积',
  `floor` varchar(10) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '楼层，如：8/26',
  `orientation` varchar(2) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '朝向：东、南、西、北',
  `decoration` tinyint(1) NULL DEFAULT NULL COMMENT '装修，1-精装，2-简装，3-毛坯',
  `facilities` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '配套设施， 如：1,2,3',
  `pic` varchar(200) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '图片，最多5张',
  `house_desc` varchar(200) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '描述',
  `contact` varchar(10) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '联系人',
  `mobile` varchar(11) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '手机号',
  `time` tinyint(1) NULL DEFAULT NULL COMMENT '看房时间，1-上午，2-中午，3-下午，4-晚上，5-全\r\n天',
  `property_cost` varchar(10) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '物业费',
  `created` datetime(0) NULL DEFAULT NULL,
  `updated` datetime(0) NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 16 CHARACTER SET = utf8 COLLATE = utf8_general_ci COMMENT = '房源表' ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of tb_house_resources
-- ----------------------------
INSERT INTO `tb_house_resources` VALUES (10, '东方曼哈顿2021 3室2厅 16000元', 1005, '2', '1', '1', 1111, 1, 1, '1室1厅1卫1厨1阳台', '2', '2', '1/2', '南', 1, '1,2,3,8,9', NULL, '这个经纪人很懒，没写核心卖点', '张三', '11111111111', 1, '11', NULL, NULL);
INSERT INTO `tb_house_resources` VALUES (11, '东方曼哈顿2022 3室2厅 16000元', 1005, '2', '1', '1', 1111, 1, 1, '1室1厅1卫1厨1阳台', '2', '2', '1/2', '南', 1, '1,2,3,8,9', NULL, '这个经纪人很懒，没写核心卖点', '张三', '11111111111', 1, '11', NULL, NULL);
INSERT INTO `tb_house_resources` VALUES (12, '东方曼哈顿2023 3室2厅 16000元', 1005, '2', '1', '1', 1111, 1, 1, '1室1厅1卫1厨1阳台', '2', '2', '1/2', '南', 1, '1,2,3,8,9', NULL, '这个经纪人很懒，没写核心卖点', '张三', '11111111111', 1, '11', NULL, NULL);
INSERT INTO `tb_house_resources` VALUES (13, '东方曼哈顿2024 3室2厅 16000元', 1005, '2', '1', '1', 1111, 1, 1, '1室1厅1卫1厨1阳台', '2', '2', '1/2', '南', 1, '1,2,3,8,9', NULL, '这个经纪人很懒，没写核心卖点', '张三', '11111111111', 1, '11', NULL, NULL);
INSERT INTO `tb_house_resources` VALUES (14, '东方曼哈顿2025 3室2厅 16000元', 1005, '2', '1', '1', 1111, 1, 1, '1室1厅1卫1厨1阳台', '2', '2', '1/2', '南', 1, '1,2,3,8,9', NULL, '这个经纪人很懒，没写核心卖点', '张三', '11111111111', 1, '11', NULL, NULL);
INSERT INTO `tb_house_resources` VALUES (15, '凯旋城1997 3室2厅 16000元', 1, '3', '01', '309', 2021, 1, NULL, '1室1厅1卫1厨1阳台', '20', '18', '3', NULL, NULL, NULL, 'temPic', NULL, NULL, '2021', 1, '5', NULL, NULL);

-- ----------------------------
-- Table structure for user
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user`  (
  `id` bigint(20) NOT NULL COMMENT '主键ID',
  `name` varchar(30) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '姓名',
  `age` int(11) NULL DEFAULT NULL COMMENT '年龄',
  `email` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '邮箱',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of user
-- ----------------------------
INSERT INTO `user` VALUES (1, 'Jone', 18, 'test1@baomidou.com');
INSERT INTO `user` VALUES (2, 'Jack', 20, 'test2@baomidou.com');
INSERT INTO `user` VALUES (3, 'Tom', 28, 'test3@baomidou.com');
INSERT INTO `user` VALUES (4, 'Sandy', 21, 'test4@baomidou.com');
INSERT INTO `user` VALUES (5, 'Billie', 24, 'test5@baomidou.com');

SET FOREIGN_KEY_CHECKS = 1;
