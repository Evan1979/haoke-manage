package hk.dubbo.server.service;

import hk.dubbo.server.pojo.HouseResources;
import org.apache.ibatis.annotations.Result;
import org.apache.ibatis.annotations.Results;
import org.apache.ibatis.annotations.Select;

import java.util.List;

/**
 * @author Evan
 */
public interface IHouseResourcesService {

    /**
     * @param houseResources
     *
     * @return -1:输入的参数不符合要求，0：数据插入数据库失败，1：成功
     */
    int saveHouseResources(HouseResources houseResources);

    /**
     * 获取所有数据
     * @return
     */
    public List<HouseResources> findAll();


    HouseResources findOneById(int i);


    /**
     * 查询房源并且显示房源所对应的楼盘信息
     * @return
     */

}