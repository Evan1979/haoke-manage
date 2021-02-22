package hk.dubbo.server.api;

import hk.dubbo.server.pojo.HouseResources;

import java.util.List;

/**
 * Dubbo接口
 */
public interface ApiHouseResourcesService {

    /**
     * 新增房源
     *
     * @param houseResources
     *
     * @return -1:输入的参数不符合要求，0：数据插入数据库失败，1：成功
     */
    int saveHouseResources(HouseResources houseResources);

    /**
     *
     * 获取所有数据
     */
    List<HouseResources> findAll();

    HouseResources findOneById(int i);
}