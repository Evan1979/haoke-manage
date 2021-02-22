package hk.dubbo.server.service;

import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import hk.dubbo.server.pojo.Estate;

import java.util.List;

/**
 * <p>
 * 楼盘表 服务类
 * </p>
 *
 * @author evan
 * @since 2021-02-19
 */
public interface IEstateService{
    List<Estate> findAll();

    Estate findOneById(int i);

    int save(Estate estate);

    List<Estate> findByWrapper(QueryWrapper<Estate> queryWrapper);

    List<Estate> findByLikeName(String name);
}
